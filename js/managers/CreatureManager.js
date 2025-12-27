import EventEmitter from '../utils/EventEmitter.js';
import { RANKS } from '../data/RankData.js';
import { CREATURE_DEFS } from '../data/CreatureData.js';
import { NORMAL_SUMMON_TABLE, PREMIUM_SUMMON_TABLE, pickRarityFromTable } from '../data/SummonTable.js';
import { getRequiredExp, getLevelUpCost } from '../data/LevelData.js';
import { getArtifactDef } from '../data/ArtifactData.js';
import { GameConfig } from '../data/GameConfig.js';

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
    base: { level: 10, day: 5, battle: 2, expedition: 3, touch: 1 },
    ego: {
        'Warlord': { battle: 2.0, level: 1.2 },
        'Devotion': { day: 2.5, touch: 1.5 },
        'Star': { expedition: 2.0, touch: 1.2 },
        'Seeker': { level: 2.0, day: 1.2 },
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

// 합성 성공 확률
const COMPOSE_SUCCESS_RATES = {
    0: 1.0,
    1: 0.8,
    2: 0.5,
    3: 0.3,
    4: 0.1
};

export default class CreatureManager extends EventEmitter {
    constructor(game, eventBus, resourceManager) {
        super();
        this.game = game;
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;

        this.owned = [];
        this.nextInstanceId = 1;
        this.selectedId = null;
        this.representativeId = null;

        // [System] Gacha Pity System (Phase 4)
        this.pityCounter = 0;
        this.PITY_LIMIT = 50; // 50회 소환 시 SSR 확정 
    }

    getPityStatus() {
        return {
            current: this.pityCounter,
            max: this.PITY_LIMIT,
            remaining: Math.max(0, this.PITY_LIMIT - this.pityCounter)
        };
    }

    setRepresentative(instanceId) {
        this.representativeId = instanceId;
        const c = this.getCreatureById(instanceId);
        if (c) {
            this.emit('representative:changed', c);
        }
        if (this.game) this.game.save();
    }

    getRepresentative() {
        if (!this.representativeId) return this.owned[0] || null;
        return this.getCreatureById(this.representativeId) || this.owned[0] || null;
    }

    getAllCreatureDefs() {
        return CREATURE_DEFS;
    }

    hasCreature(dataId) {
        return this.owned.some(c => c.dataId === dataId);
    }

    tryNormalSummon() {
        // [Refactor] Use Config if possible, but hardcoded 300 for now or use GameConfig.GACHA constants if added
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
            let rarity;

            // Pity Check
            this.pityCounter++;
            if (this.pityCounter >= this.PITY_LIMIT) {
                rarity = RANKS.SSR;
                this.pityCounter = 0;
                console.log("[Summon] Pity Triggered! SSR Guaranteed.");
            } else {
                rarity = pickRarityFromTable(PREMIUM_SUMMON_TABLE);
                // Reset pity if SSR is pulled naturally
                if (rarity === RANKS.SSR) {
                    this.pityCounter = 0;
                }
            }

            this.summonOneByRarity(rarity);
            this.emit('pity:updated', this.getPityStatus());
            return true;
        } else {
            this.emit('summon:failed', { reason: '젬 부족' });
            return false;
        }
    }

    summonBatch(type) {
        const costs = {
            'normal': { resource: 'gold', amount: 3000 },
            'premium': { resource: 'gem', amount: 10 }
        };

        const cost = costs[type];
        if (!cost) return { success: false, reason: "Invalid Type" };

        if (type === 'normal') {
            if (!this.resourceManager.spendGold(cost.amount)) {
                this.emit('summon:failed', { reason: '골드 부족' });
                return { success: false, reason: 'Gold' };
            }
        } else {
            if (!this.resourceManager.spendGem(cost.amount)) {
                this.emit('summon:failed', { reason: '젬 부족' });
                return { success: false, reason: 'Gem' };
            }
        }

        const results = [];
        for (let i = 0; i < 11; i++) {
            let rarity;
            const hasGood = results.some(c => ['Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'].includes(c.def.rarity));

            if (type === 'premium') {
                this.pityCounter++;
                if (this.pityCounter >= this.PITY_LIMIT) {
                    rarity = RANKS.SSR;
                    this.pityCounter = 0;
                } else {
                    rarity = pickRarityFromTable(PREMIUM_SUMMON_TABLE);
                    if (rarity === RANKS.SSR) this.pityCounter = 0;
                }
            } else {
                // Normal Summon Logic (No Pity for now, or separate pity)
                if (i === 10 && !hasGood) {
                    rarity = 'Unique'; // Minimum guarantee for 10+1
                } else {
                    rarity = pickRarityFromTable(NORMAL_SUMMON_TABLE);
                }
            }

            const creature = this._createCreatureByRarity(rarity);
            if (creature) {
                this.owned.push(creature);
                results.push(creature);
            }
        }

        if (type === 'premium') {
            this.emit('pity:updated', this.getPityStatus());
        }

        this.emit('summon:batch_result', results);
        this.emit('creatures:updated', this.owned);
        if (this.game) this.game.save();

        return { success: true, results: results };
    }

    _createCreatureByRarity(rarity) {
        const candidates = CREATURE_DEFS.filter(c => c.rarity === rarity && !c.isHidden);

        if (candidates.length === 0) {
            console.warn(`[Summon] No candidates for rarity: ${rarity}. Falling back to Normal.`);
            if (rarity === RANKS.NORMAL) return null;
            return this._createCreatureByRarity(RANKS.NORMAL);
        }
        const def = candidates[Math.floor(Math.random() * candidates.length)];

        const newCreature = {
            instanceId: this.nextInstanceId++,
            dataId: def.id,
            def: def,
            level: 1,
            exp: 0,
            star: 0,
            affection: 0,
            battleCount: 0,
            expeditionCount: 0,
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

    toggleLock(instanceId) {
        const c = this.getCreatureById(instanceId);
        if (c) {
            c.isLocked = !c.isLocked;
            this.emit('creatures:updated', this.owned);
            if (this.selectedId === instanceId) {
                this.emit('creatures:selected', c);
            }
        }
    }

    getResonanceScore(creature) {
        if (!creature) return 0;

        const level = creature.level || 1;
        const touch = creature.affection || 0;
        const battle = creature.battleCount || 0;
        const expedition = creature.expeditionCount || 0;

        const now = new Date();
        const acquired = new Date(creature.acquiredAt || now);
        const daysOwned = Math.max(0, Math.floor((now - acquired) / (1000 * 60 * 60 * 24)));

        const ego = creature.def.ego || 'Normal';
        const wBase = RESONANCE_WEIGHTS.base;
        const wEgo = RESONANCE_WEIGHTS.ego[ego] || {};

        const sLevel = level * wBase.level * (wEgo.level || 1.0);
        const sTouch = touch * wBase.touch * (wEgo.touch || 1.0);
        const sBattle = battle * wBase.battle * (wEgo.battle || 1.0);
        const sExpedition = expedition * wBase.expedition * (wEgo.expedition || 1.0);
        const sDays = daysOwned * wBase.day * (wEgo.day || 1.0);

        return Math.floor(sLevel + sTouch + sBattle + sExpedition + sDays);
    }

    getAffectionLevel(creature) {
        const score = this.getResonanceScore(creature);
        if (score >= AFFECTION_LEVELS[3].min) return 3;
        if (score >= AFFECTION_LEVELS[2].min) return 2;
        if (score >= AFFECTION_LEVELS[1].min) return 1;
        return 0;
    }

    increaseAffection(instanceId, amount = 1) {
        const c = this.getCreatureById(instanceId);
        if (!c) return { success: false };

        if (typeof c.affection !== 'number') c.affection = 0;

        c.affection += amount;

        this.emit('creature:affectionChanged', { creature: c, newAffection: c.affection });
        if (this.game) this.game.save();
        return { success: true, newAffection: c.affection };
    }

    tryTrain(instanceId, type = 'basic') {
        const creature = this.getCreatureById(instanceId);
        if (!creature) {
            this.emit('train:failed', { reason: '크리처를 찾을 수 없습니다.' });
            return { success: false, reason: '크리처를 찾을 수 없습니다.' };
        }

        if (creature.level >= GameConfig.GROWTH.MAX_LEVEL) { // [Refactor]
            this.emit('train:failed', { reason: '이미 최대 레벨입니다.' });
            return { success: false, reason: '이미 최대 레벨입니다.' };
        }

        const reqExp = getRequiredExp(creature.level);
        const costVal = getLevelUpCost(creature.level);

        const trainConfig = {
            basic: { resource: 'gold', cost: costVal, exp: reqExp, label: '레벨업' },
            intensive: { resource: 'gem', cost: 1, exp: reqExp * 3, label: '초고속 성장 (3 Levels)' }
        };

        const config = trainConfig[type];
        if (!config) {
            this.emit('train:failed', { reason: '알 수 없는 훈련 타입' });
            return { success: false, reason: '알 수 없는 훈련 타입' };
        }

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

        const oldLevel = creature.level;
        this.addExp(instanceId, config.exp);

        this.emit('train:success', {
            creature,
            type,
            expGained: config.exp,
            leveledUp: creature.level > oldLevel
        });

        if (this.game) this.game.save();

        return {
            success: true,
            expGained: config.exp,
            newLevel: creature.level,
            leveledUp: creature.level > oldLevel
        };
    }

    autoCompose(targetRarity = null) {
        let composedCount = 0;
        let logs = [];
        let changed = true;
        let loopCount = 0;

        while (changed && loopCount < 10) {
            changed = false;
            loopCount++;

            const groups = {};
            this.owned.forEach(c => {
                if (c.isLocked || c.star >= 5) return;
                if (targetRarity && c.def.rarity !== targetRarity) return;

                const key = `${c.dataId}_${c.star} `;
                if (!groups[key]) groups[key] = [];
                groups[key].push(c);
            });

            for (const key in groups) {
                const group = groups[key];
                while (group.length >= 2) {
                    const base = group.shift();
                    const material = group.shift();

                    const result = this._internalCompose(base, material);

                    if (result.executed) {
                        changed = true;
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

    _internalCompose(base, material) {
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
            this.emit('creatures:updated', this.owned);
            this.emit('compose:failed', { creature: base });
            if (this.selectedId === baseInstanceId) this.emit('creatures:selected', base);
            return { success: false, reason: "합성 실패! 재료가 소멸되었습니다." };
        }
    }

    canEvolve(instanceId) {
        const creature = this.getCreature(instanceId);
        if (!creature) return { canEvolve: false, reason: "크리처를 찾을 수 없음" };

        const def = creature.def;
        if (!def.evolvesTo) return { canEvolve: false, reason: "진화 불가능한 크리처" };

        const conditions = def.evolveConditions || {};
        const targetDef = CREATURE_DEFS.find(c => c.id === def.evolvesTo);
        if (!targetDef) return { canEvolve: false, reason: "진화 대상이 존재하지 않음" };

        if (conditions.star !== undefined && creature.star < conditions.star) {
            return { canEvolve: false, reason: `${conditions.star}성 달성 필요(현재: ${creature.star}성)` };
        }
        if (conditions.level !== undefined && creature.level < conditions.level) {
            return { canEvolve: false, reason: `Lv.${conditions.level} 달성 필요(현재: Lv.${creature.level})` };
        }
        if (conditions.affectionLevel !== undefined) {
            const affection = creature.affection || 0;
            if (affection < conditions.affectionLevel) {
                return { canEvolve: false, reason: `호감도 ${conditions.affectionLevel}단계 필요(현재: ${affection}단계)` };
            }
        }

        return { canEvolve: true, evolvesTo: targetDef };
    }

    tryEvolve(instanceId) {
        const check = this.canEvolve(instanceId);
        if (!check.canEvolve) {
            return { success: false, reason: check.reason };
        }

        const creature = this.getCreature(instanceId);
        const oldName = creature.def.name;
        const targetDef = check.evolvesTo;

        creature.def = targetDef;
        creature.dataId = targetDef.id;

        creature.level = 1;
        creature.star = 0;
        creature.exp = 0;

        this.recalculateStats(creature);

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

    recalculateStats(creature) {
        const multCallback = RARITY_MULTIPLIER[creature.def.rarity] || 1.0;
        const starMult = 1.0 + (creature.star * 0.2);
        const lv = creature.level;

        const totalMult = multCallback * starMult;

        const rawHp = (creature.def.baseStr * 5 + creature.def.baseInt * 2) * 5 * lv * totalMult;

        creature.stats = {
            hp: Math.floor(rawHp),
            atk: Math.floor(creature.def.baseStr * 1.5 * lv * totalMult),
            def: Math.floor(creature.def.baseInt * 1.5 * lv * totalMult),
            explorePower: Math.floor((creature.def.baseStr + creature.def.baseInt) * 0.8 * lv * totalMult)
        };

        if (creature.equipment) {
            Object.values(creature.equipment).forEach(itemId => {
                if (!itemId) return;
                const item = getArtifactDef(itemId);
                if (item && item.stats) {
                    if (item.stats.atk) creature.stats.atk += item.stats.atk;
                    if (item.stats.def) creature.stats.def += item.stats.def;
                    if (item.stats.hp) creature.stats.hp += item.stats.hp;
                    if (item.stats.crit) creature.stats.crit = (creature.stats.crit || 0) + item.stats.crit;
                }
            });
        }

        if (typeof creature.currentHp !== 'number') {
            creature.currentHp = creature.stats.hp;
        } else {
            if (creature.currentHp > creature.stats.hp) creature.currentHp = creature.stats.hp;
        }
    }

    getCreature(instanceId) {
        return this.owned.find(c => c.instanceId === instanceId);
    }

    addExp(instanceId, amount) {
        const creature = this.getCreatureById(instanceId);
        if (!creature) return;
        if (creature.level >= GameConfig.GROWTH.MAX_LEVEL) return; // [Refactor]

        if (window.game) {
            const rate = window.game.getDirectorEffect('exp_gain');
            if (rate > 0) amount = Math.floor(amount * (1 + rate));
        }

        creature.exp += amount;
        let leveledUp = false;
        const oldLevel = creature.level;
        const oldStats = { ...creature.stats };

        while (true) {
            if (creature.level >= GameConfig.GROWTH.MAX_LEVEL) break; // [Refactor]
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
            this.eventBus.emit('creature:leveledUp', payload);
            this.emit('creatures:updated', this.owned);

            if (this.selectedId === instanceId) {
                this.emit('creatures:selected', creature);
                this.eventBus.emit('creatures:selected', creature);
            }
        } else {
            if (this.selectedId === instanceId) {
                this.emit('creatures:selected', creature);
                this.eventBus.emit('creatures:selected', creature);
            }
        }
    }

    tryEnhanceSkill(targetId, materialId) {
        const target = this.getCreatureById(targetId);
        const material = this.getCreatureById(materialId);

        if (!target || !material) return { success: false, reason: 'Invalid ID' };
        if (targetId === materialId) return { success: false, reason: 'Self selection' };
        if (target.dataId !== material.dataId) return { success: false, reason: 'Must be same creature' };

        target.skillLevel = target.skillLevel || 1;
        if (target.skillLevel >= 5) return { success: false, reason: 'Max Skill Level' };

        this.removeCreature(materialId);

        target.skillLevel++;
        this.emit('creatures:updated', this.owned);
        if (this.selectedId === targetId) this.emit('creatures:selected', target);

        return { success: true, newLevel: target.skillLevel };
    }

    selectCreature(instanceId) {
        const found = this.owned.find(c => c.instanceId === instanceId);
        if (found) {
            this.selectedId = instanceId;
            this.emit('creatures:selected', found);
            this.eventBus.emit('creatures:selected', found);
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

    getSerializableState() {
        return {
            owned: this.owned.map(c => ({
                instanceId: c.instanceId,
                dataId: c.dataId,
                level: c.level,
                exp: c.exp,
                star: c.star,
                affection: c.affection,
                battleCount: c.battleCount, // [Resonance]
                expeditionCount: c.expeditionCount, // [Resonance]
                acquiredAt: c.acquiredAt, // [Resonance]
                stats: c.stats,
                isLocked: c.isLocked // [Lock System]
            })),
            nextInstanceId: this.nextInstanceId,
            representativeId: this.representativeId,
            pityCounter: this.pityCounter // [Save] Pity Counter
        };
    }

    getSkillIcon(creature) {
        if (!creature || !creature.def) return 'images/icons/icon_role_attack.png';

        // 1. Try Specific Icon (if data exists)
        if (creature.def.skillIcon) return creature.def.skillIcon;

        // 2. Fallback to Element Generic
        // Detect element from tags or description or default to 'fire'
        const text = (creature.def.description || "") + (creature.def.name || "");
        const lower = text.toLowerCase();

        if (lower.includes('fire') || lower.includes('flame') || lower.includes('ember')) return 'images/icons/icon_skill_fire.png';
        if (lower.includes('water') || lower.includes('sea') || lower.includes('ice')) return 'images/icons/icon_skill_water.png';
        if (lower.includes('wind') || lower.includes('air') || lower.includes('sky')) return 'images/icons/icon_skill_wind.png';
        if (lower.includes('earth') || lower.includes('rock') || lower.includes('nature')) return 'images/icons/icon_skill_earth.png';
        if (lower.includes('light') || lower.includes('holy') || lower.includes('sun')) return 'images/icons/icon_skill_light.png';
        if (lower.includes('dark') || lower.includes('void') || lower.includes('shadow')) return 'images/icons/icon_skill_dark.png';

        return 'images/icons/icon_role_attack.png'; // Default
    }

    loadFromState(state) {
        if (!state) return;

        this.nextInstanceId = state.nextInstanceId || 1;
        this.representativeId = state.representativeId || null;
        this.pityCounter = state.pityCounter || 0; // [Load] Pity

        if (state.owned && Array.isArray(state.owned)) {
            this.owned = state.owned.map(c => {
                const foundDef = CREATURE_DEFS.find(d => d.id === c.dataId);
                if (foundDef) {
                    c.def = foundDef;
                    this.recalculateStats(c);
                }
                return c;
            }).filter(c => c.def); // Remove invalid
        }

        this.emit('creatures:updated', this.owned);
    }

    resetForRebirth() {
        this.owned = [];
        this.nextInstanceId = 1;

        const baseRarity = pickRarityFromTable(NORMAL_SUMMON_TABLE);
        this.summonOneByRarity(baseRarity);

        this.emit('creatures:updated', this.owned);
    }
}
