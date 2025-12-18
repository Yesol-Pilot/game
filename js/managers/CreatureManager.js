import EventEmitter from '../utils/EventEmitter.js';
import { RANKS } from '../data/RankData.js';
import { CREATURE_DEFS } from '../data/CreatureData.js';
import { NORMAL_SUMMON_TABLE, PREMIUM_SUMMON_TABLE, pickRarityFromTable } from '../data/SummonTable.js';
import { getRequiredExp } from '../data/LevelData.js';

const RARITY_MULTIPLIER = {
    [RANKS.NORMAL]: 1.0,
    [RANKS.UNIQUE]: 1.2,
    [RANKS.RARE]: 1.4,
    [RANKS.SPECIAL]: 1.6,
    [RANKS.SR]: 2.0,
    [RANKS.SSR]: 2.5,
    [RANKS.UR]: 3.0
};

// 합성 성공 확률 (현재 등급 -> 다음 등급)
const COMPOSE_SUCCESS_RATES = {
    0: 1.0, // 0성(기본) -> 1성: 100%
    1: 0.8, // 1성 -> 2성: 80%
    2: 0.5, // 2성 -> 3성: 50%
    3: 0.3, // 3성 -> 4성: 30%
    4: 0.1  // 4성 -> 5성(최대): 10%
};

export default class CreatureManager extends EventEmitter {
    constructor(eventBus, resourceManager) {
        super();
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;

        this.owned = [];
        this.nextInstanceId = 1;
        this.selectedId = null;
    }

    tryNormalSummon() {
        if (this.resourceManager.spendGold(300)) {
            const rarity = pickRarityFromTable(NORMAL_SUMMON_TABLE);
            this.summonOneByRarity(rarity);
            return true;
        } else {
            this.emit('summon:failed', { reason: '골드 부족' });
            return false;
        }
    }

    tryPremiumSummon() {
        if (this.resourceManager.spendGem(1)) {
            const rarity = pickRarityFromTable(PREMIUM_SUMMON_TABLE);
            this.summonOneByRarity(rarity);
            return true;
        } else {
            this.emit('summon:failed', { reason: '젬 부족' });
            return false;
        }
    }

    // [Batch Summon Logic]
    summonBatch(type) {
        // Cost Definition
        const costs = {
            'normal': { resource: 'gold', amount: 3000 }, // 10x Cost
            'premium': { resource: 'gem', amount: 10 }    // 10x Cost
        };

        const cost = costs[type];
        if (!cost) return { success: false, reason: "Invalid Type" };

        // Check Resources
        if (type === 'normal') {
            if (this.game.resourceManager.gold < cost.amount) {
                this.emit('summon:failed', { reason: '골드 부족' });
                return { success: false, reason: 'Gold' };
            }
            this.game.resourceManager.useGold(cost.amount);
        } else {
            if (this.game.resourceManager.gem < cost.amount) {
                this.emit('summon:failed', { reason: '젬 부족' });
                return { success: false, reason: 'Gem' };
            }
            this.game.resourceManager.useGem(cost.amount);
        }

        // Execute 11 Summons (10 + 1 Bonus)
        const results = [];
        // [10+1 Logic] 10회 비용으로 11회 소환
        for (let i = 0; i < 11; i++) {
            const rarity = (type === 'normal') ? this._pickRarityNormal() : this._pickRarityPremium();
            const creature = this._createCreatureByRarity(rarity);
            if (creature) {
                this.owned.push(creature);
                results.push(creature);
            }
        }

        // Emit Batch Event (for UI Scene)
        this.emit('summon:batch_result', results);
        this.emit('creatures:updated', this.owned);
        this.game.save();

        return { success: true, results: results };
    }

    // Helper: Create Creature Object
    _createCreatureByRarity(rarity) {
        const candidates = CREATURE_DEFS.filter(c => c.rarity === rarity);
        if (candidates.length === 0) return null;
        const def = candidates[Math.floor(Math.random() * candidates.length)];

        const newCreature = {
            instanceId: this.nextInstanceId++,
            dataId: def.id,
            def: def,
            level: 1,
            exp: 0,
            star: 0,
            acquiredAt: new Date(),
            stats: {}
        };
        this.recalculateStats(newCreature);
        return newCreature;
    }

    _pickRarityNormal() {
        // Standard Weights
        const r = Math.random();
        if (r < 0.05) return RANKS.SSR;
        if (r < 0.30) return RANKS.SR;
        return RANKS.RARE;
    }

    _pickRarityPremium() {
        // Premium Weights
        const r = Math.random();
        if (r < 0.01) return RANKS.UR;
        if (r < 0.10) return RANKS.SSR;
        if (r < 0.50) return RANKS.SR;
        return RANKS.RARE; // No Normal in Premium? Or just R as base.
    }

    summonOneByRarity(rarity) {
        const creature = this._createCreatureByRarity(rarity);
        if (creature) {
            this.owned.push(creature);
            this.emit('summon:result', creature);
            this.eventBus.emit('summon:result', creature);
            this.emit('creatures:updated', this.owned);
        }
    }

    // [잠금 기능]
    toggleLock(instanceId) {
        const c = this.getCreatureById(instanceId);
        if (c) {
            c.isLocked = !c.isLocked;
            this.emit('creatures:updated', this.owned);
            // 만약 현재 선택된 크리처라면 선택 이벤트도 다시 발생시켜 UI 갱신
            if (this.selectedId === instanceId) {
                this.emit('creatures:selected', c);
            }
        }
    }

    // [일괄 합성]
    autoCompose(targetRarity = null) {
        let composedCount = 0;
        let logs = [];
        let changed = true;

        // 한 번의 패스로 끝나는 게 아니라, 합성을 통해 별이 올라가면 또 합성이 가능할 수 있으므로
        // 더 이상 합성이 일어나지 않을 때까지 반복 (최대 루프 제한)
        let loopCount = 0;

        while (changed && loopCount < 10) {
            changed = false;
            loopCount++;

            // 합성 가능한 목록 추출 (잠금 안 됨, 만렙 아님)
            // 작업 중 배열이 변경되므로 사본으로 작업하거나 인덱스 관리 주의
            // 여기서는 매 루프마다 가능한 쌍을 하나씩 찾아서 처리하는 방식이 안전함

            // 1. 등급/ID/별 로 그룹핑
            const groups = {};
            this.owned.forEach(c => {
                if (c.isLocked || c.star >= 5) return;
                if (targetRarity && c.def.rarity !== targetRarity) return; // 특정 등급만 필터링 기능 (옵션)

                const key = `${c.dataId}_${c.star}`;
                if (!groups[key]) groups[key] = [];
                groups[key].push(c);
            });

            // 2. 쌍 찾기
            for (const key in groups) {
                const group = groups[key];
                // 2마리씩 짝지음
                while (group.length >= 2) {
                    const base = group.shift();
                    const material = group.shift();

                    // 합성 시도 (tryCompose 로직 재사용하거나 내부 로직 사용)
                    // tryCompose는 확률이 있음. 실패 시 재료만 날아감.
                    const result = this._internalCompose(base, material);

                    if (result.executed) {
                        changed = true; // 뭔가 일어났으므로 다시 스캔 필요 (별이 올랐거나 재료가 사라짐)
                        if (result.success) {
                            logs.push(`[성공] ${base.def.name} ★${result.newStar} 달성`);
                            composedCount++;
                        } else {
                            logs.push(`[실패] ${base.def.name} 합성 실패`);
                        }
                    }
                }
            }
        }

        if (composedCount > 0 || logs.length > 0) {
            this.emit('creatures:updated', this.owned);
        }

        return { count: composedCount, logs };
    }

    // 내부 합성 로직 (tryCompose와 공유할 코어 로직)
    _internalCompose(base, material) {
        // 재료 소모
        this.removeCreature(material.instanceId);

        const rate = (COMPOSE_SUCCESS_RATES[base.star] !== undefined) ? COMPOSE_SUCCESS_RATES[base.star] : 0.1;
        const isSuccess = Math.random() < rate;

        if (isSuccess) {
            base.star++;
            this.recalculateStats(base);
            return { executed: true, success: true, base, newStar: base.star };
        } else {
            return { executed: true, success: false, base };
        }
    }

    tryCompose(baseInstanceId, materialInstanceId) {
        const base = this.getCreatureById(baseInstanceId);
        const material = this.getCreatureById(materialInstanceId);

        if (!base || !material) return { success: false, reason: "크리처를 찾을 수 없음" };
        if (base.dataId !== material.dataId) return { success: false, reason: "같은 종류의 크리처만 합성 가능" };
        if (base.star !== material.star) return { success: false, reason: "같은 등급(별)의 크리처만 합성 가능" };
        if (base.star >= 5) return { success: false, reason: "최대 등급 도달" };
        if (base.isLocked || material.isLocked) return { success: false, reason: "잠금된 크리처는 합성 불가" };

        const result = this._internalCompose(base, material);
        if (result.success) {
            this.emit('creatures:updated', this.owned);
            this.emit('compose:success', { creature: base, newStar: base.star });
            if (this.selectedId === baseInstanceId) this.emit('creatures:selected', base);
            return { success: true, base };
        } else {
            this.emit('creatures:updated', this.owned); // 재료 삭제됨
            this.emit('compose:failed', { creature: base });
            if (this.selectedId === baseInstanceId) this.emit('creatures:selected', base);
            return { success: false, reason: "합성 실패! 재료가 소멸되었습니다." };
        }
    }

    removeCreature(instanceId) {
        const idx = this.owned.findIndex(c => c.instanceId === instanceId);
        if (idx !== -1) {
            this.owned.splice(idx, 1);
            this.emit('creatures:updated', this.owned);
            if (this.selectedId === instanceId) {
                this.selectedId = null;
                this.emit('creatures:selected', null);
            }
        }
    }

    // [성장 시스템] 스탯 재계산
    recalculateStats(creature) {
        const multCallback = RARITY_MULTIPLIER[creature.def.rarity] || 1.0;
        const starMult = 1.0 + (creature.star * 0.2); // 별 하나당 20% 스탯 증가
        const lv = creature.level;

        // 기본값: Base * Level * RarityMult * StarMult
        const totalMult = multCallback * starMult;

        // [BUG FIX] Correct keys (atk, def) and ADD hp
        // HP Formula: (Str * 5 + Int * 2) * Level * Multiplier
        const rawHp = (creature.def.baseStr * 5 + creature.def.baseInt * 2) * 5 * lv * totalMult;

        creature.stats = {
            hp: Math.floor(rawHp),
            atk: Math.floor(creature.def.baseStr * 1.5 * lv * totalMult),
            def: Math.floor(creature.def.baseInt * 1.5 * lv * totalMult),
            explorePower: Math.floor((creature.def.baseStr + creature.def.baseInt) * 0.8 * lv * totalMult)
        };

        // Initialize currentHp if missing (or clamp it)
        if (typeof creature.currentHp !== 'number') {
            creature.currentHp = creature.stats.hp;
        } else {
            // Heal up if maxHp increased? Or keep percentage?
            // For now, if current exceeds max, clam. If current is 0 (dead), stay dead unless healed?
            // Actually, usually on level up we might want full heal or keep difference.
            // Simplest for this game: Full heal on level up or recalc for now to prevent stuck-dead.
            if (creature.currentHp > creature.stats.hp) creature.currentHp = creature.stats.hp;
            // Ensure at least 1 hp if supposedly alive? No, let mechanics handle it.
        }
    }

    // [Legacy methods removed]

    getCreature(instanceId) {
        return this.owned.find(c => c.instanceId === instanceId);
    }

    // [성장 시스템] 경험치 획득: 기존 유지
    addExp(instanceId, amount) {
        const creature = this.getCreatureById(instanceId);
        if (!creature) return;
        if (creature.level >= 30) return; // 만렙

        // [Effect] Zero Bonus
        if (window.game) {
            const rate = window.game.getDirectorEffect('exp_gain');
            if (rate > 0) amount = Math.floor(amount * (1 + rate));
        }

        creature.exp += amount;
        let leveledUp = false;
        const oldLevel = creature.level;
        const oldStats = { ...creature.stats };

        // 레벨업 루프
        while (true) {
            if (creature.level >= 30) break;
            const req = getRequiredExp(creature.level);
            if (creature.exp >= req) {
                creature.exp -= req;
                creature.level++;
                leveledUp = true;
            } else {
                break;
            }
        }

        if (leveledUp) {
            this.recalculateStats(creature);
            const payload = {
                creature,
                oldLevel,
                newLevel: creature.level,
                oldStats,
                newStats: creature.stats
            };
            this.emit('creature:leveledUp', payload);
            this.eventBus.emit('creature:leveledUp', payload); // [Global]
            this.emit('creatures:updated', this.owned);

            if (this.selectedId === instanceId) {
                this.emit('creatures:selected', creature);
                this.eventBus.emit('creatures:selected', creature); // [Global]
            }
        } else {
            if (this.selectedId === instanceId) {
                this.emit('creatures:selected', creature);
                this.eventBus.emit('creatures:selected', creature); // [Global]
            }
        }
    }

    selectCreature(instanceId) {
        const found = this.owned.find(c => c.instanceId === instanceId);
        if (found) {
            this.selectedId = instanceId;
            this.emit('creatures:selected', found);
            this.eventBus.emit('creatures:selected', found); // [Global]
        }
    }

    getCreatureById(instanceId) {
        return this.owned.find(c => c.instanceId === instanceId);
    }

    setCreatureState(instanceId, stateObj) {
        const creature = this.getCreatureById(instanceId);
        if (creature) {
            Object.assign(creature, stateObj);
            this.emit('creatures:updated', this.owned);
            if (this.selectedId === instanceId) {
                this.emit('creatures:selected', creature);
            }
        }
    }

    // [저장/로드 시스템]
    getSerializableState() {
        return {
            owned: this.owned,
            nextInstanceId: this.nextInstanceId
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.nextInstanceId = state.nextInstanceId || 1;

        this.owned = (state.owned || []).map(c => {
            if (typeof c.acquiredAt === 'string') {
                c.acquiredAt = new Date(c.acquiredAt);
            }
            // star 속성 없을 경우 호환성 처리
            if (c.star === undefined) c.star = 0;

            // 1. def 연결 복구
            const foundDef = CREATURE_DEFS.find(d => d.id === c.dataId);
            if (foundDef) {
                c.def = foundDef;
                // 2. 스탯 재계산
                this.recalculateStats(c);
            }

            return c;
        });

        this.emit('creatures:updated', this.owned);
    }
}
