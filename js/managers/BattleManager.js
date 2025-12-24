
import EventEmitter from '../utils/EventEmitter.js';
import { WORLDS } from '../data/CreatureData.js';
import { SKILLS, TARGET_TYPES, SKILL_TYPES, STATUS_EFFECTS, getSkillData } from '../data/SkillData.js';

export default class BattleManager extends EventEmitter {
    constructor(game, events, resourceManager, userCreatures) {
        super();
        this.game = game; // Direct injection
        this.events = events;
        this.resourceManager = resourceManager;
        this.userCreatures = userCreatures;
        // this.game = window.game; // REMOVED: Unreliable at init time

        this.inBattle = false;
        this.turnCount = 0;
        this.heroTeam = [];
        this.enemyTeam = [];
        this.activeSynergies = {}; // [NEW] Track active synergies
        this.battleSpeed = 1; // [NEW] Default Speed
    }

    startBattle(dungeonId) {
        // Legacy support
        this.startStageBattle(1);
    }

    startStageBattle(stageId) {
        if (this.inBattle) return;
        console.log(`[BattleManager] Starting Stage ${stageId}`);
        this.inBattle = true;
        this.turnCount = 0;
        this.currentStageId = stageId; // Track current stage

        // 1. Hero Team - From Deck
        const heroTeamRaw = this.game.deckManager.getActiveTeam();

        // Filter out nulls just in case
        const validHeroes = heroTeamRaw ? heroTeamRaw.filter(c => c) : [];

        if (validHeroes.length === 0) {
            alert("출전할 크리처가 없습니다! [팀] 탭에서 덱을 먼저 편성해주세요."); // Direct feedback
            this.inBattle = false; // Reset state
            return;
        }
        this.heroTeam = validHeroes.map(c => this.createBattleEntity(c, true));

        // 2. Enemy Team (From Stage Data)
        this.enemyTeam = [];
        const stageInfo = this.game.stageManager.getStageInfo(stageId);

        if (stageInfo && stageInfo.enemies) {
            this.enemyTeam = stageInfo.enemies.map((res, idx) => {
                return {
                    isHero: false,
                    id: `enemy_stage_${stageId}_${idx}`,
                    name: res.name,
                    maxHp: res.hp,
                    hp: res.hp,
                    atk: res.atk,
                    def: res.def,
                    image: res.image,
                    level: res.level,
                    rarity: stageInfo.isBoss ? 'SSR' : 'Normal', // [NEW] Bosses get SSR glow
                    sp: 0,
                    maxSp: 100,
                    statusEffects: [],  // [FIX] Missing init caused crash
                    elements: res.elements || [], // Ensure elements exist
                    skillId: res.skillId || 'default_attack'
                };
            });
            this.enemyName = stageInfo.name;
        } else {
            // Fallback
            this.enemyTeam.push(this.spawnEnemy('default'));
            this.enemyName = "Unknown Stage";
        }

        this.startBattleProcess(false);
    }

    startPvP(target) {
        if (this.inBattle) return;
        console.log(`[BattleManager] Starting PvP with target: ${target}`);
        this.inBattle = true;
        this.turnCount = 0;

        const heroTeamRaw = this.game.deckManager.getActiveTeam();
        if (!heroTeamRaw || heroTeamRaw.length === 0) {
            this.endBattle(false, "대표 덱에 크리처가 없습니다!");
            return;
        }
        this.heroTeam = heroTeamRaw.map(c => this.createBattleEntity(c, true));

        let enemyTeam = [];

        // Dynamic Import to avoid circular dependency issues if any
        import('../data/PvPData.js').then(module => {
            const player = module.getMockPlayerById(target);
            if (player) {
                // Generate 5 units based on rank
                for (let i = 0; i < 5; i++) enemyTeam.push(this.spawnMockFriend(player.rank + "_" + i));
                this.enemyName = player.name;
            } else {
                for (let i = 0; i < 5; i++) enemyTeam.push(this.spawnMockFriend(target + "_" + i));
                this.enemyName = "Unknown Rival";
            }
            this.enemyTeam = enemyTeam;
            this.startBattleProcess(true);
        }).catch(err => {
            console.warn("PvPData error", err);
            for (let i = 0; i < 5; i++) enemyTeam.push(this.spawnMockFriend(target + "_" + i));
            this.enemyName = "Unknown Rival";
            this.enemyTeam = enemyTeam;
            this.startBattleProcess(true);
        });
    }

    startBattleProcess(isPvP = false) {
        this.isPvP = isPvP;
        // Use global events for Scene communication
        this.events.emit('battle:start', {
            heroTeam: this.heroTeam,
            enemyTeam: this.enemyTeam,
            isPvP: this.isPvP,
            enemyName: this.enemyName
        });

        // [NEW] Calculate and Apply Synergies
        this.calculateSynergies();
        this.applySynergyEffects();

        this.nextTurn();
    }

    spawnMockFriend(code) {
        // Hash code to pick a random monster type
        const hash = code.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        const types = [
            { name: "라이벌의 드래곤", img: "images/creature_dragon_fire.png", apk: 25 },
            { name: "친구의 늑대왕", img: "images/creature_wolf_dire.png", apk: 20 },
            { name: "랭커의 골렘", img: "images/creature_golem_mud.png", apk: 30 }
        ];
        const type = types[hash % types.length];

        return {
            isHero: false,
            id: `enemy_pvp_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            name: type.name,
            maxHp: 300 + (hash % 100),
            hp: 300 + (hash % 100),
            atk: type.apk,
            def: 10,
            image: type.img,
            level: 5,
            sp: 0,
            maxSp: 100,
            statusEffects: [], // [FIX] Required to avoid crash
            elements: [],
            skillId: 'default_attack'
        };
    }


    createBattleEntity(creature, isHero) {
        // [NEW] Affection-based Skin Override
        let finalImage = creature.def.image;
        let finalSprites = creature.def.sprites ? { ...creature.def.sprites } : null;

        if (isHero && creature.affectionLv && creature.def.gallery) {
            // Find highest unlocked gallery image
            const unlocked = creature.def.gallery
                .filter(g => g.level <= creature.affectionLv)
                .sort((a, b) => b.level - a.level)[0];

            if (unlocked) {
                finalImage = unlocked.image;
                if (finalSprites) {
                    finalSprites.idle = unlocked.image;
                } else {
                    // Create minimal sprite set if not exists
                    finalSprites = { idle: unlocked.image };
                }
            }
        }

        return {
            isHero: isHero,
            uid: creature.instanceId, // [FIX] Use instanceId for logic 
            id: creature.instanceId, // Keep for compatibility if needed, but ensure it receives instanceId
            name: creature.def.name,
            maxHp: creature.stats.hp,
            hp: creature.stats.hp, // [FIX] Always start battle with full HP
            atk: Math.floor(creature.stats.atk * (1 + (isHero ? this.game.getDirectorEffect('battle_atk') : 0))),
            def: creature.stats.def,
            image: finalImage,
            level: creature.level,
            rarity: creature.def.rarity,
            world: creature.def.world || 'WILD',
            elements: creature.def.elements || [],
            skillId: creature.def.skillId || 'default_attack',
            sp: 0,
            maxSp: 100,
            statusEffects: [],
            sprites: finalSprites
        };
    }

    spawnEnemy(type) {
        // [Fix] 랜덤 요소 강화 및 기본 데이터 보장
        const elementsPool = [['Fire'], ['Water'], ['Wind'], ['Earth'], ['Light'], ['Dark']];
        const randomElement = elementsPool[Math.floor(Math.random() * elementsPool.length)];

        // Basic scaling
        const level = 5;
        const baseHp = 100 + (level * 20);
        const baseAtk = 15 + (level * 3);

        return {
            isHero: false,
            uid: Math.random().toString(36).substr(2, 9),
            id: 'enemy_' + Date.now() + Math.random().toString(36).substr(2, 5),
            name: "Wild Monster",
            maxHp: baseHp, hp: baseHp,
            atk: baseAtk, def: 5 + level,
            level: level, rarity: 'Normal',
            image: `images/creature_slime_fire.png`, // Placeholder
            elements: randomElement,
            skillId: 'default_attack',
            sp: 0, maxSp: 100,
            statusEffects: []
        };
    }

    async nextTurn() {
        try {
            if (!this.inBattle) return;

            // Safety check for battleSpeed
            if (!this.battleSpeed || this.battleSpeed <= 0) this.battleSpeed = 1;

            // 1. Process Status Effects (Hero Team)
            await this.processTeamStatusEffects(this.heroTeam);

            // 2. [Hero Team Attack]
            await this.processTeamAttack(this.heroTeam, this.enemyTeam);

            // Check if all enemies dead
            if (this.enemyTeam.every(e => e.hp <= 0)) {
                this.endBattle(true, "적군을 모두 물리쳤습니다!");
                return;
            }

            await new Promise(resolve => setTimeout(resolve, 500 / this.battleSpeed));

            // 3. Process Status Effects (Enemy Team)
            await this.processTeamStatusEffects(this.enemyTeam);

            // 4. [Enemy Team Attack]
            await this.processTeamAttack(this.enemyTeam, this.heroTeam);

            // Check if all heroes dead
            if (this.heroTeam.every(h => h.hp <= 0)) {
                this.endBattle(false, "아군이 전멸했습니다...");
                return;
            }

            // [FIX] Loop Back for Next Turn
            this.turnCount++;
            setTimeout(() => this.nextTurn(), 100);

        } catch (error) {
            console.error("[BattleManager] Error in nextTurn:", error);
            this.endBattle(false, "심각한 오류로 전투가 중단되었습니다.");
        }
    }

    async processTeamStatusEffects(team) {
        for (let unit of team) {
            if (unit.hp <= 0) continue;

            // Filter out expired effects
            unit.statusEffects = unit.statusEffects.filter(eff => eff.duration > 0);

            for (let eff of unit.statusEffects) {
                const data = STATUS_EFFECTS[eff.id.toUpperCase()] || { type: 'none' };

                if (data.type === 'dot') {
                    // DoT Dmg: 5% (Burn/Poison) or 10% (Bleed)
                    const ratio = eff.id === 'bleed' ? 0.10 : 0.05;
                    const dotDamage = Math.floor(unit.maxHp * ratio);
                    unit.hp = Math.max(1, unit.hp - dotDamage); // Don't kill by dot to be fair, or allow kill?

                    this.events.emit('battle:action', {
                        type: 'status_dot',
                        targetId: unit.id,
                        damage: dotDamage,
                        effectId: eff.id,
                        currentHp: unit.hp
                    });
                    await new Promise(resolve => setTimeout(resolve, 300 / this.battleSpeed));
                }

                eff.duration--;
            }
        }
    }

    async processTeamAttack(attackers, targets) {
        for (let attacker of attackers) {
            if (!this.inBattle) break;
            if (attacker.hp <= 0) continue;

            // Check if Stunned
            const isStunned = attacker.statusEffects.some(eff => {
                const data = STATUS_EFFECTS[eff.id.toUpperCase()];
                return data && data.type === 'stun';
            });
            if (isStunned) {
                console.log(`[Battle] ${attacker.name} is stunned!`);
                // Emit event for UI feedback?
                continue;
            }

            // [NEW] Silence Check
            const isSilenced = attacker.statusEffects.some(eff => eff.id === 'silence');

            // Decide Skill vs Normal Attack
            if (attacker.sp >= attacker.maxSp && !isSilenced) {
                await this.useSkill(attacker, attackers, targets);
                attacker.sp = 0;
            } else {
                const target = this.getSkillTarget(attacker, targets, TARGET_TYPES.ENEMY_ADVANTAGE);
                if (target) {
                    await this.attack(attacker, target);
                }
            }

            await new Promise(resolve => setTimeout(resolve, 600 / this.battleSpeed));
        }
    }

    async attack(attacker, defender) {
        if (attacker.hp <= 0 || defender.hp <= 0) return;

        // Base Damage calculation
        // Balanced Damage Formula: Damage = Atk * (200 / (200 + Def))
        // [Mod] 방어력 효율 감소 (분모 100 -> 200), 기본 데미지 배율 증가 (1.5 -> 2.0)
        const defFactor = 200 / (200 + defender.def);
        let damage = Math.max(1, attacker.atk * defFactor * 2.0);
        const advantage = this.checkElementalAdvantage(attacker.elements, defender.elements);
        let isCrit = false;
        let isGlancing = false;

        if (advantage === 1) { // Advantage
            damage *= 1.3;
        } else if (advantage === -1) { // Disadvantage
            damage *= 0.7;
            isGlancing = Math.random() < 0.25;
        }

        // [NEW] Check Blind
        const isBlind = attacker.statusEffects.some(eff => eff.id === 'blind');
        if (isBlind && Math.random() < 0.5) { // 50% miss chance if blind
            damage = 0;
            isGlancing = true;
        }

        // [NEW] Stat Mods
        const atkUp = attacker.statusEffects.some(eff => eff.id === 'atk_up');
        if (atkUp) damage *= 1.4;

        const defUp = defender.statusEffects.some(eff => eff.id === 'def_up');
        if (defUp) damage *= 0.7; // Damage reduced

        const shock = defender.statusEffects.some(eff => eff.id === 'shock');
        if (shock) damage *= 1.2;

        // Synergy Logic (Olympus Crit)
        if (attacker.isHero && this.activeSynergies[WORLDS.OLYMPUS] >= 2) {
            const critRate = 0.20;
            if (Math.random() < critRate) {
                isCrit = true;
                damage *= 1.5;
            }
        }

        if (isGlancing) damage = 0;



        const finalDamage = Math.floor(damage);
        defender.hp -= finalDamage;

        // [NEW] SP 충전 (공격자 +25, 피격자 +15)
        attacker.sp = Math.min(attacker.maxSp, attacker.sp + 25);
        if (defender.hp > 0) {
            defender.sp = Math.min(defender.maxSp, defender.sp + 15);
        }

        this.events.emit('battle:action', {
            type: 'attack',
            attackerId: attacker.id,
            defenderId: defender.id,
            damage: finalDamage,
            isCrit: isCrit,
            isMiss: isGlancing,
            attackerSp: attacker.sp,
            defenderSp: defender.sp,
            currentHp: defender.hp,
            maxHp: defender.maxHp
        });
    }

    async useSkill(attacker, allies, enemies) {
        // [FIX] Safety check for Skill Data
        let skill = null;
        try {
            // Priority: Import helper
            if (typeof getSkillData === 'function') {
                skill = getSkillData(attacker.skillId);
            }
            // Fallback: Game instance helper
            else if (this.game.skillData && this.game.skillData.getSkill) {
                skill = this.game.skillData.getSkill(attacker.skillId);
            }

            if (!skill) {
                // Final Fallback: Use 'Power Strike' instead of Normal Attack
                skill = {
                    id: 'power_strike',
                    name: '강력한 일격',
                    type: 'SINGLE_ATTACK',
                    target: 'ENEMY_ADVANTAGE',
                    power: 1.5
                };
            }
        } catch (e) {
            console.warn(`[Battle] Failed to load skill ${attacker.skillId}, using default.`, e);
            skill = { id: 'power_strike', name: '강력한 일격', type: 'SINGLE_ATTACK', target: 'ENEMY_ADVANTAGE', power: 1.5 };
        }

        let targets = [];

        // Determine Targets
        switch (skill.target) {
            case TARGET_TYPES.ENEMY_ALL: targets = enemies.filter(e => e.hp > 0); break;
            case TARGET_TYPES.ENEMY_RANDOM:
                const aliveEnemies = enemies.filter(e => e.hp > 0);
                if (aliveEnemies.length > 0) {
                    const count = skill.hitCount || 1;
                    for (let i = 0; i < count; i++) {
                        targets.push(aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)]);
                    }
                }
                break;
            case TARGET_TYPES.ALLY_ALL: targets = allies.filter(a => a.hp > 0); break;
            case TARGET_TYPES.ALLY_LOWEST_HP:
                const lowest = allies.filter(a => a.hp > 0).sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0];
                if (lowest) targets = [lowest];
                break;
            default:
                const t = this.getSkillTarget(attacker, enemies, skill.target);
                if (t) targets = [t];
        }

        if (targets.length === 0) return;

        if (targets.length === 0) return;

        // [NEW] Skill Cut-In Logic
        // Emit 'skill_start' to trigger cut-in, then wait.
        // This ensures the cut-in plays BEFORE damage/effects are applied.
        if (attacker.isHero) {
            this.events.emit('battle:skill_start', {
                attackerId: attacker.id,
                skillName: skill.name,
                skillData: skill // [NEW] 스킬 데이터 전달
            });
            // Wait for cut-in animation (approx 1.2s + buffer)
            await new Promise(resolve => setTimeout(resolve, 1500 / this.battleSpeed));
        }

        // Execute Skill Effect
        for (let target of targets) {
            let value = 0;
            switch (skill.type) {
                case SKILL_TYPES.HEAL:
                    value = Math.floor(attacker.atk * skill.power);
                    target.hp = Math.min(target.maxHp, target.hp + value);
                    break;
                case SKILL_TYPES.SHIELD:
                    // TODO: Implement Shield property in Battle Entity
                    break;
                default: // Attack
                    const baseDmg = Math.max(1, (attacker.atk * skill.power) - (target.def * 0.5));
                    value = Math.floor(baseDmg);
                    target.hp -= value;
                    // Apply Effects
                    if (skill.effects) {
                        skill.effects.forEach(eff => {
                            if (Math.random() < eff.chance) {
                                target.statusEffects.push({ id: eff.id, duration: eff.duration || 1 });
                            }
                        });
                    }
                    // Defense gains SP when hit by skill too
                    if (target.hp > 0) target.sp = Math.min(target.maxSp, target.sp + 20);
            }

            this.events.emit('battle:action', {
                type: 'skill',
                skillName: skill.name,
                attackerId: attacker.id,
                defenderId: target.id,
                damage: skill.type === SKILL_TYPES.HEAL ? -value : value,
                isHeal: skill.type === SKILL_TYPES.HEAL,
                currentHp: target.hp,
                maxHp: target.maxHp,
                attackerSp: 0,
                statusEffects: target.statusEffects
            });
        }
    }

    getSkillTarget(attacker, potentialTargets, strategy) {
        const alive = potentialTargets.filter(t => t.hp > 0);
        if (alive.length === 0) return null;

        if (strategy === TARGET_TYPES.ENEMY_ADVANTAGE) {
            // Find targets with elemental advantage
            const adv = alive.filter(t => this.checkElementalAdvantage(attacker.elements, t.elements) === 1);
            if (adv.length > 0) return adv[Math.floor(Math.random() * adv.length)];
        }

        return alive[0]; // Default to first
    }

    calculateSynergies() {
        this.activeSynergies = {};
        this.heroTeam.forEach(unit => {
            if (unit.world) {
                this.activeSynergies[unit.world] = (this.activeSynergies[unit.world] || 0) + 1;
            }
        });
        console.log("[BattleManager] Active Synergies:", this.activeSynergies);
    }

    applySynergyEffects() {
        // 1. Asgard (Tenacity) -> HP Boost
        if (this.activeSynergies[WORLDS.ASGARD] >= 2) {
            this.heroTeam.forEach(hero => {
                hero.maxHp *= 1.2; // +20% HP
                hero.hp *= 1.2;
            });
            console.log("Applied Asgard(2) Buff: HP +20%");
        }

        // 2. Abyss (Terror) -> Enemy Def Down (Global)
        if (this.activeSynergies[WORLDS.ABYSS] >= 2) {
            this.enemyTeam.forEach(enemy => {
                enemy.def *= 0.8; // -20% Def
            });
            console.log("Applied Abyss(2) Debuff: Enemy Def -20%");
        }

        // 6-Set God Effects (Start of Battle)
        // Abyss God: Instant Kill 1 enemy
        if (this.activeSynergies[WORLDS.ABYSS] >= 6) {
            if (this.enemyTeam.length > 0) {
                const luckyTarget = this.enemyTeam[Math.floor(Math.random() * this.enemyTeam.length)];
                luckyTarget.hp = 0;
                console.log(`[Abyss God] Instant Killed ${luckyTarget.name}`);
            }
        }
    }

    checkElementalAdvantage(atkElems, defElems) {
        if (!atkElems || !defElems) return 0;
        // Simple 1-first match for now
        const A = atkElems[0];
        const D = defElems[0]; // Logic could be more complex

        const WIN = {
            'Fire': 'Nature', 'Nature': 'Water', 'Water': 'Fire',
            'Light': 'Dark', 'Dark': 'Light' // Mutual destruction?
        };
        const LOSE = {
            'Nature': 'Fire', 'Water': 'Nature', 'Fire': 'Water'
        };

        if (WIN[A] === D) return 1;
        if (LOSE[A] === D) return -1;
        return 0;
    }

    checkWinCondition() {
        if (!this.inBattle) return false;

        // Ensure teams differ from initial empty state to avoid instant end
        if (this.turnCount === 0 && this.heroTeam.length > 0 && this.enemyTeam.length > 0) return false;

        const heroAlive = this.heroTeam.some(c => c.hp > 0);
        const enemyAlive = this.enemyTeam.some(c => c.hp > 0);

        if (!heroAlive) {
            this.endBattle(false, "전멸했습니다...");
            return true;
        }
        if (!enemyAlive) {
            this.endBattle(true, "승리!");
            return true;
        }
        return false;
    }

    endBattle(isWin, reason) {
        this.inBattle = false;

        let earnedGold = 0;
        let earnedExp = 0;
        let nextStageId = null;

        if (isWin) {
            // Calculate Dynamic Rewards based on Stage
            if (this.currentStageId) {
                const stageInfo = this.game.stageManager.getStageInfo(this.currentStageId);
                if (stageInfo) {
                    earnedGold = stageInfo.rewardGold || 100;
                    earnedExp = stageInfo.rewardExp || 50;
                }
            } else if (this.isPvP) {
                // PvP Rewards (Fixed or rank based)
                earnedGold = 200;
                earnedExp = 20;
            } else {
                // Fallback
                earnedGold = 100;
                earnedExp = 50;
            }

            // Apply Rewards
            this.resourceManager.addGold(earnedGold);

            // Reward XP to participating creatures
            if (this.heroTeam) {
                this.heroTeam.forEach(hero => {
                    if (hero.uid) {
                        this.game.creatureManager.addExp(hero.uid, earnedExp);

                        // [NEW] Battle Count for Resonance
                        const creature = this.game.creatureManager.getCreatureById(hero.uid);
                        if (creature) {
                            creature.battleCount = (creature.battleCount || 0) + 1;
                        }
                    }
                });
            }

            // Unlocking Next Stage logic
            if (this.currentStageId) {
                if (this.currentStageId === this.game.stageManager.getMaxStage()) {
                    this.game.stageManager.unlockNextStage();
                }

                // 자동 전투 로직
                if (this.autoBattleMode !== 'off') {
                    if (this.autoBattleMode === 'repeat') {
                        nextStageId = this.currentStageId;
                    } else if (this.autoBattleMode === 'advance') {
                        const next = this.currentStageId + 1;
                        // 다음 스테이지가 잠금 해제되었는지 확인 (방금 unlockNextStage 실행됨)
                        if (next <= this.game.stageManager.getMaxStage() + 1) {
                            nextStageId = next;
                        } else {
                            // 더 이상 진행 불가 시 반복? 또는 중단? -> 반복으로 전환
                            console.log("[Battle] Max stage reached, repeating current.");
                            nextStageId = this.currentStageId;
                        }
                    }

                    if (nextStageId) {
                        const waitTime = 2000 / (this.battleSpeed || 1);
                        setTimeout(() => {
                            // 사용자가 그 사이 껐을 수도 있음 체크
                            if (this.autoBattleMode !== 'off') {
                                this.startStageBattle(nextStageId);
                            }
                        }, waitTime);
                    }
                }
            }
        } else {
            // 패배 시 자동 전투 중단
            this.autoBattleMode = 'off';
            this.events.emit('battle:autoAdjusted', 'off'); // UI 업데이트용
        }

        // [NEW] Holistic Event for QuestManager
        this.events.emit('battle:completed', {
            isWin,
            stageId: this.currentStageId,
            isPvP: !this.currentStageId,
            rewards: { gold: earnedGold, exp: earnedExp } // Pass actual rewards
        });

        const lastStageId = this.currentStageId; // Preserve for event
        this.currentStageId = null;

        this.events.emit('battle:end', {
            isWin,
            reason,
            rewards: { gold: earnedGold, exp: earnedExp },
            autoBattleMode: this.autoBattleMode,
            nextStageId: nextStageId, // 다음 예정 스테이지 (뷰에서 표시용)
            autoDelay: 2000 / (this.battleSpeed || 1) // 딜레이 정보 전달
        });
    }

    setAutoBattle(mode) {
        this.autoBattleMode = mode;
        console.log(`[BattleManager] Auto Battle Mode: ${mode}`);
    }

    setBattleSpeed(speed) {
        this.battleSpeed = speed;
        console.log(`[BattleManager] Speed set to x${speed}`);
    }

    // [NEW] Helper for Scene to get sprite data
    getEntitySprites(entityId) {
        // Search in heroTeam
        let entity = this.heroTeam.find(e => e.id === entityId);
        if (!entity) entity = this.enemyTeam.find(e => e.id === entityId);

        if (entity && entity.sprites) {
            return entity.sprites;
        }
        return null;
    }
}
