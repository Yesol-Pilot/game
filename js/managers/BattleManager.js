
import EventEmitter from '../utils/EventEmitter.js';
import { WORLDS } from '../data/CreatureData.js'; // [NEW] Import World Data

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
                    rarity: stageInfo.isBoss ? 'SSR' : 'Normal' // [NEW] Bosses get SSR glow
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
            level: 5
        };
    }

    async startBattleProcess(isPvP = false) {
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

        while (this.inBattle) {
            this.turnCount++;
            this.events.emit('battle:turn', this.turnCount);
            console.log(`[BattleManager] TURN ${this.turnCount}`);

            await this.nextTurn();

            if (!this.inBattle) break;
            await new Promise(resolve => setTimeout(resolve, 1000 / this.battleSpeed));
        }
    }

    spawnMockFriend(id) {
        return {
            isHero: false,
            uid: Math.random().toString(36).substr(2, 9),
            id: id,
            name: "Rival " + id,
            maxHp: 150, hp: 150,
            atk: 15, def: 8,
            level: 10, rarity: 'SR',
            image: `images/creature_bear_ice.png`,
            sp: 0, maxSp: 100
        };
    }

    createBattleEntity(creature, isHero) {
        return {
            isHero: isHero,
            uid: creature.instanceId, // [FIX] Use instanceId for logic 
            id: creature.instanceId, // Keep for compatibility if needed, but ensure it receives instanceId
            name: creature.def.name,
            maxHp: creature.stats.hp,
            hp: creature.currentHp,
            atk: Math.floor(creature.stats.atk * (1 + (isHero ? this.game.getDirectorEffect('battle_atk') : 0))),
            def: creature.stats.def,
            image: creature.def.image,
            level: creature.level,
            rarity: creature.def.rarity,
            world: creature.def.world || 'WILD', // [NEW] Default to WILD
            elements: creature.def.elements || [], // [NEW]
            // [NEW] 스킬 게이지 시스템
            sp: 0,
            maxSp: 100
        };
    }

    spawnEnemy(type) {
        return {
            isHero: false,
            uid: Math.random().toString(36).substr(2, 9),
            id: 'enemy_' + Date.now(),
            name: "Wild Slime",
            maxHp: 80, hp: 80,
            atk: 10, def: 5,
            level: 5, rarity: 'Normal',
            image: `images/creature_slime_fire.png`,
            sp: 0, maxSp: 100
        };
    }

    async nextTurn() {
        // [Hero Team Attack]
        await this.processTeamAttack(this.heroTeam, this.enemyTeam);

        // Check if all enemies dead
        if (this.enemyTeam.every(e => e.hp <= 0)) {
            this.endBattle(true, "적군을 모두 물리쳤습니다!");
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 500 / this.battleSpeed));

        // [Enemy Team Attack]
        await this.processTeamAttack(this.enemyTeam, this.heroTeam);

        // Check if all heroes dead
        if (this.heroTeam.every(h => h.hp <= 0)) {
            this.endBattle(false, "아군이 전멸했습니다...");
            return;
        }
    }

    async processTeamAttack(attackers, targets) {
        for (let attacker of attackers) {
            if (!this.inBattle) break;
            if (attacker.hp <= 0) continue;

            const target = targets.find(t => t.hp > 0);
            if (!target) break;

            await this.attack(attacker, target);
            await new Promise(resolve => setTimeout(resolve, 600 / this.battleSpeed));
        }
    }

    async attack(attacker, defender) {
        if (attacker.hp <= 0 || defender.hp <= 0) return;

        // [NEW] 스킬 발동 체크
        const isSkill = attacker.sp >= attacker.maxSp;
        let skillName = "";

        // Base Damage calculation
        let damage = Math.max(1, attacker.atk - (defender.def * 0.5));
        const advantage = this.checkElementalAdvantage(attacker.elements, defender.elements);
        let isCrit = false;
        let isGlancing = false;

        if (isSkill) {
            damage *= 2.5; // Skill is powerful
            skillName = this.getSkillName(attacker);
            attacker.sp = 0; // Reset
        } else {
            if (advantage === 1) { // Advantage
                damage *= 1.2;
            } else if (advantage === -1) { // Disadvantage
                damage *= 0.8;
                isGlancing = Math.random() < 0.2;
            }

            // Synergy Logic (Olympus Crit)
            if (attacker.isHero && this.activeSynergies[WORLDS.OLYMPUS] >= 2) {
                const critRate = 0.15;
                if (Math.random() < critRate) {
                    isCrit = true;
                    damage *= 1.5;
                }
            }

            // [NEW] SP 충전 (일반 공격 시 25 충전)
            attacker.sp = Math.min(attacker.maxSp, attacker.sp + 25);
        }

        if (isGlancing) damage = 0;

        defender.hp -= Math.floor(damage);

        this.events.emit('battle:action', {
            type: 'attack',
            attackerId: attacker.id,
            defenderId: defender.id,
            damage: Math.floor(damage),
            isCrit: isCrit,
            isMiss: isGlancing,
            isSkill: isSkill,
            skillName: skillName,
            attackerSp: attacker.sp,
            attackerMaxSp: attacker.maxSp,
            currentHp: defender.hp,
            maxHp: defender.maxHp
        });
    }

    getSkillName(entity) {
        // [NEW] 크리처별 전용 스킬명 매핑
        const skills = {
            'god_odin': '궁니르의 심판',
            'fenrir': '라그나로크 하울',
            'miho': '유혹의 구슬',
            'zeus': '천둥의 심판',
            'chronos': '시간의 균열'
        };
        return skills[entity.id] || '강격';
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
}
