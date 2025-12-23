import EventEmitter from '../utils/EventEmitter.js';
import { EXPEDITIONS } from '../data/ExpeditionData.js';

export default class ExpeditionManager extends EventEmitter {
    constructor(eventBus, resourceManager, creatureManager, facilityManager) {
        super();
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;
        this.creatureManager = creatureManager;
        this.facilityManager = facilityManager; // [Fix] Missing dependency

        this.activeExpeditions = []; // 진행 중인 탐사 목록
        // 구조: { id, expeditionId, creatureInstanceId, startTime, durationSec, endTime }
    }

    startExpedition(creatureInstanceId, expeditionId) {
        const expeditionDef = EXPEDITIONS.find(e => e.id === expeditionId);
        if (!expeditionDef) {
            console.error("존재하지 않는 탐사 ID:", expeditionId);
            return false;
        }

        // 1. 크리처 상태 체크
        const creature = this.creatureManager.getCreatureById(creatureInstanceId);
        if (!creature) {
            return false; // 존재하지 않는 크리처
        }
        if (creature.isOnExpedition) {
            this.emit('expedition:error', { message: "이미 탐사 중인 크리처입니다." });
            return false;
        }

        // 2. 에너지 체크 및 차감
        if (!this.resourceManager.spendEnergy(expeditionDef.energyCost)) {
            this.emit('expedition:error', { message: "에너지가 부족합니다." });
            return false;
        }

        // 3. 탐사 시작 처리
        this.creatureManager.setCreatureState(creatureInstanceId, { isOnExpedition: true });

        const now = Date.now();
        const newExpedition = {
            id: `exp_${now}_${Math.floor(Math.random() * 1000)}`, // 고유 ID
            expeditionId: expeditionId,
            creatureInstanceId: creatureInstanceId,
            creatureName: creature.def.name, // 편의상 이름 저장
            expeditionName: expeditionDef.name,
            startTime: now,
            durationSec: expeditionDef.durationSec,
            endTime: now + (expeditionDef.durationSec * 1000),
            rewards: {
                gold: expeditionDef.baseGoldReward,
                exp: expeditionDef.baseExpReward
            }
        };

        this.activeExpeditions.push(newExpedition);

        // 탐사 시작 이벤트 알림
        this.emit('expedition:started', newExpedition);
        this.eventBus.emit('expedition:started', newExpedition); // [Global]
        return true;
    }

    update(deltaTime) {
        const now = Date.now();
        // 완료된 탐사 필터링
        // (배열 순회 중 삭제를 위해 역순 혹은 filter 사용)

        // 완료된 것들만 추출
        const completed = this.activeExpeditions.filter(exp => now >= exp.endTime);

        // 진행 중인 것들만 남김
        if (completed.length > 0) {
            this.activeExpeditions = this.activeExpeditions.filter(exp => now < exp.endTime);

            completed.forEach(exp => {
                this.completeExpedition(exp);
            });
        }
    }

    completeExpedition(expedition) {
        // [연구 효과 적용]
        let goldReward = expedition.rewards.gold;
        if (this.facilityManager) {
            const bonusPercent = this.facilityManager.getEffectValue('gold_bonus_percent');
            if (bonusPercent > 0) {
                const bonus = Math.floor(goldReward * (bonusPercent / 100));
                goldReward += bonus;
                // 보상 객체에도 업데이트해줘야 로그에 반영됨 (선택)
                expedition.rewards.gold = goldReward;
            }
        }

        // 1. 보상 지급
        this.resourceManager.addGold(goldReward);

        // 2. 경험치 지급 [NEW]
        if (expedition.rewards.exp > 0) {
            this.creatureManager.addExp(expedition.creatureInstanceId, expedition.rewards.exp);

            // [NEW] Expedition Count for Resonance
            const creature = this.creatureManager.getCreatureById(expedition.creatureInstanceId);
            if (creature) {
                creature.expeditionCount = (creature.expeditionCount || 0) + 1;
            }
        }

        // 3. 크리처 상태 복구
        this.creatureManager.setCreatureState(expedition.creatureInstanceId, { isOnExpedition: false });

        // 3. 완료 이벤트
        this.emit('expedition:completed', expedition);
        this.eventBus.emit('expedition:completed', expedition); // [Global]

        // [NEW] 자동 반복 로직
        if (this.isAutoRepeat) {
            setTimeout(() => {
                this.startExpedition(expedition.creatureInstanceId, expedition.expeditionId);
            }, 2000); // 2초 뒤 자동 재파견
        }
    }

    setAutoRepeat(enabled) {
        this.isAutoRepeat = enabled;
        console.log(`[ExpeditionManager] Auto Repeat: ${enabled}`);
    }

    getActiveExpeditions() {
        return [...this.activeExpeditions];
    }

    // [저장/로드 시스템]
    getSerializableState() {
        return {
            activeExpeditions: this.activeExpeditions,
            isAutoRepeat: this.isAutoRepeat
        };
    }

    loadFromState(state) {
        if (!state) return;
        if (state.activeExpeditions) {
            const now = Date.now();
            const loadedExpeditions = state.activeExpeditions;

            loadedExpeditions.forEach(exp => {
                if (exp.endTime <= now) {
                    this.completeExpedition(exp);
                } else {
                    this.activeExpeditions.push(exp);
                    this.emit('expedition:started', exp);
                }
            });
        }
        if (state.isAutoRepeat !== undefined) {
            this.isAutoRepeat = state.isAutoRepeat;
        }
    }
}
