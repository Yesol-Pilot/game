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

// [Resonance V2] 호감도(교감) 가중치 테이블
const RESONANCE_WEIGHTS = {
    base: { level: 10, day: 5, battle: 2, expedition: 3, touch: 1 }, // 기준 점수
    ego: {
        'Warlord': { battle: 2.0, level: 1.2 },    // 전투광
        'Devotion': { day: 2.5, touch: 1.5 },      // 순애
        'Star': { expedition: 2.0, touch: 1.2 },   // 관종
        'Seeker': { level: 2.0, day: 1.2 },        // 탐구
        'Normal': {}
    }
};

// [Resonance V3] 호감도 레벨 정의
export const AFFECTION_LEVELS = {
    0: { min: 0, label: '경계', color: '#9e9e9e' },
    1: { min: 100, label: '관심', color: '#66bb6a' },
    2: { min: 300, label: '신뢰', color: '#f48fb1' },
    3: { min: 1000, label: '서약', color: '#ad1457' }
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
    constructor(game, eventBus, resourceManager) {
        super();
        this.game = game; // [Fix] game 인스턴스 저장
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;

        this.owned = [];
        this.nextInstanceId = 1;
        this.selectedId = null;
    }

    getAllCreatureDefs() {
        return CREATURE_DEFS;
    }

    hasCreature(dataId) {
        return this.owned.some(c => c.dataId === dataId);
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

        // Check Resources & Spend
        if (type === 'normal') {
            if (!this.resourceManager.spendGold(cost.amount)) {
                // emit('summon:failed') is handled by ResourceManager spendGold internal check? 
                // Wait, ResourceManager emits 'resources:error', not 'summon:failed'.
                // So we should catch the failure.
                // But wait, spendGold emits 'resources:error' if failed.
                // We also want 'summon:failed'.
                this.emit('summon:failed', { reason: '골드 부족' });
                return { success: false, reason: 'Gold' };
            }
        } else {
            if (!this.resourceManager.spendGem(cost.amount)) {
                this.emit('summon:failed', { reason: '젬 부족' });
                return { success: false, reason: 'Gem' };
            }
        }

        // Execute 11 Summons (10 + 1 Bonus)
        const results = [];
        // [10+1 Logic] 10회 비용으로 11회 소환
        for (let i = 0; i < 11; i++) {
            const rarity = (type === 'normal') ? pickRarityFromTable(NORMAL_SUMMON_TABLE) : pickRarityFromTable(PREMIUM_SUMMON_TABLE);
            const creature = this._createCreatureByRarity(rarity);
            if (creature) {
                this.owned.push(creature);
                results.push(creature);
            }
        }

        // Emit Batch Event (for UI Scene)
        this.emit('summon:batch_result', results);
        this.emit('creatures:updated', this.owned);
        if (this.game) this.game.save(); // [Fix] Safety check

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
            affection: 0, // = Touch Count
            battleCount: 0,    // [NEW] 전투 횟수
            expeditionCount: 0,// [NEW] 탐사 횟수
            acquiredAt: new Date(),
            stats: {}
        };
        this.recalculateStats(newCreature);
        return newCreature;
    }

    _pickRarityNormal() {
        return pickRarityFromTable(NORMAL_SUMMON_TABLE);
    }

    _pickRarityPremium() {
        return pickRarityFromTable(PREMIUM_SUMMON_TABLE);
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

    // [Resonance V2] 교감도 점수 계산 (알고리즘)
    getResonanceScore(creature) {
        if (!creature) return 0;

        // 1. 기본 팩터 계산
        const level = creature.level || 1;
        const touch = creature.affection || 0;
        const battle = creature.battleCount || 0;
        const expedition = creature.expeditionCount || 0;

        const now = new Date();
        const acquired = new Date(creature.acquiredAt || now);
        const daysOwned = Math.max(0, Math.floor((now - acquired) / (1000 * 60 * 60 * 24)));

        // 2. Ego 확인
        const ego = creature.def.ego || 'Normal';
        const wBase = RESONANCE_WEIGHTS.base;
        const wEgo = RESONANCE_WEIGHTS.ego[ego] || {};

        // 3. 가중치 적용 (Multiplier) -> (Factor * BaseWeight * EgoMultiplier)
        const sLevel = level * wBase.level * (wEgo.level || 1.0);
        const sTouch = touch * wBase.touch * (wEgo.touch || 1.0);
        const sBattle = battle * wBase.battle * (wEgo.battle || 1.0);
        const sExpedition = expedition * wBase.expedition * (wEgo.expedition || 1.0);
        const sDays = daysOwned * wBase.day * (wEgo.day || 1.0);

        return Math.floor(sLevel + sTouch + sBattle + sExpedition + sDays);
    }

    // [Resonance V3] 호감도 레벨 조회
    getAffectionLevel(creature) {
        const score = this.getResonanceScore(creature);
        if (score >= AFFECTION_LEVELS[3].min) return 3;
        if (score >= AFFECTION_LEVELS[2].min) return 2;
        if (score >= AFFECTION_LEVELS[1].min) return 1;
        return 0;
    }

    // [호감도 시스템] (구: increaseAffection -> 현: 터치 카운트 증가)
    increaseAffection(instanceId, amount = 1) {
        const c = this.getCreatureById(instanceId);
        if (!c) return { success: false };

        // 초기화 (구버전 호환)
        if (typeof c.affection !== 'number') c.affection = 0;

        c.affection += amount;
        // 최대치 제한? 일단 1000? 제한 없음?
        // if (c.affection > 1000) c.affection = 1000;

        this.emit('creature:affectionChanged', { creature: c, newAffection: c.affection });
        if (this.game) this.game.save();
        return { success: true, newAffection: c.affection };
    }

    // [훈련 시스템] 기초 훈련 / 집중 강화
    tryTrain(instanceId, type = 'basic') {
        const creature = this.getCreatureById(instanceId);
        if (!creature) {
            this.emit('train:failed', { reason: '크리처를 찾을 수 없습니다.' });
            return { success: false, reason: '크리처를 찾을 수 없습니다.' };
        }

        if (creature.level >= 30) {
            this.emit('train:failed', { reason: '이미 최대 레벨입니다.' });
            return { success: false, reason: '이미 최대 레벨입니다.' };
        }

        // 훈련 타입별 비용 및 경험치 설정
        const trainConfig = {
            basic: { resource: 'gold', cost: 100, exp: 50, label: '기초 훈련' },
            intensive: { resource: 'gem', cost: 1, exp: 200, label: '집중 강화' }
        };

        const config = trainConfig[type];
        if (!config) {
            this.emit('train:failed', { reason: '알 수 없는 훈련 타입' });
            return { success: false, reason: '알 수 없는 훈련 타입' };
        }

        // 자원 소비
        let canAfford = false;
        if (config.resource === 'gold') {
            canAfford = this.resourceManager.spendGold(config.cost);
        } else if (config.resource === 'gem') {
            canAfford = this.resourceManager.spendGem(config.cost);
        }

        if (!canAfford) {
            this.emit('train:failed', { reason: `${config.resource === 'gold' ? '골드' : '젬'}이 부족합니다.` });
            return { success: false, reason: `${config.resource === 'gold' ? '골드' : '젬'} 부족` };
        }

        // 경험치 획득
        const oldLevel = creature.level;
        this.addExp(instanceId, config.exp);

        this.emit('train:success', {
            creature,
            type,
            expGained: config.exp,
            leveledUp: creature.level > oldLevel
        });

        // 게임 저장
        if (this.game) this.game.save();

        return {
            success: true,
            expGained: config.exp,
            newLevel: creature.level,
            leveledUp: creature.level > oldLevel
        };
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

    // ==========================================
    // [진화 시스템] Evolution System
    // ==========================================

    /**
     * 크리처 진화 가능 여부 확인
     * @param {number} instanceId - 크리처 인스턴스 ID
     * @returns {{ canEvolve: boolean, reason?: string, evolvesTo?: object }}
     */
    canEvolve(instanceId) {
        const creature = this.getCreature(instanceId);
        if (!creature) return { canEvolve: false, reason: "크리처를 찾을 수 없음" };

        const def = creature.def;
        if (!def.evolvesTo) return { canEvolve: false, reason: "진화 불가능한 크리처" };

        const conditions = def.evolveConditions || {};
        const targetDef = CREATURE_DEFS.find(c => c.id === def.evolvesTo);
        if (!targetDef) return { canEvolve: false, reason: "진화 대상이 존재하지 않음" };

        // 조건 체크
        if (conditions.star !== undefined && creature.star < conditions.star) {
            return { canEvolve: false, reason: `${conditions.star}성 달성 필요 (현재: ${creature.star}성)` };
        }
        if (conditions.level !== undefined && creature.level < conditions.level) {
            return { canEvolve: false, reason: `Lv.${conditions.level} 달성 필요 (현재: Lv.${creature.level})` };
        }
        if (conditions.affectionLevel !== undefined) {
            const affection = creature.affection || 0;
            if (affection < conditions.affectionLevel) {
                return { canEvolve: false, reason: `호감도 ${conditions.affectionLevel}단계 필요 (현재: ${affection}단계)` };
            }
        }

        return { canEvolve: true, evolvesTo: targetDef };
    }

    /**
     * 크리처 진화 실행
     * @param {number} instanceId - 크리처 인스턴스 ID
     * @returns {{ success: boolean, reason?: string, newCreature?: object }}
     */
    tryEvolve(instanceId) {
        const check = this.canEvolve(instanceId);
        if (!check.canEvolve) {
            return { success: false, reason: check.reason };
        }

        const creature = this.getCreature(instanceId);
        const oldName = creature.def.name;
        const targetDef = check.evolvesTo;

        // 진화 실행: 크리처 데이터 변환
        console.log(`[진화] ${oldName} -> ${targetDef.name} 진화!`);

        // 새 정의로 변경
        creature.def = targetDef;
        creature.dataId = targetDef.id;

        // 진화 시 초기화 (레벨/별은 1로, 경험치 0)
        creature.level = 1;
        creature.star = 0;
        creature.exp = 0;

        // 스탯 재계산
        this.recalculateStats(creature);

        // 이벤트 발생
        this.emit('creatures:updated', this.owned);
        this.emit('evolve:success', { creature, oldName, newName: targetDef.name });
        if (this.selectedId === instanceId) {
            this.emit('creatures:selected', creature);
        }

        return { success: true, newCreature: creature };
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

    resetForRebirth() {
        this.owned = [];
        this.nextInstanceId = 1;

        // 기본 크리처 1마리 지급 (예: id가 'c001'인 슬라임)
        const baseRarity = pickRarityFromTable(NORMAL_SUMMON_TABLE);
        this.summonOneByRarity(baseRarity);

        this.emit('creatures:updated', this.owned);
    }
}
