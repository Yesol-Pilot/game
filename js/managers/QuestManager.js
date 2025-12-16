import EventEmitter from '../utils/EventEmitter.js';
import { DAILY_QUEST_DEFS, ACHIEVEMENT_DEFS } from '../data/QuestData.js';

export default class QuestManager extends EventEmitter {
    constructor(eventBus, resourceManager) {
        super();
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;

        this.lastLoginDate = new Date().toDateString(); // "Wed Dec 10 2025" format
        this.dailies = {}; // { id: { progress, completed, claimed } }
        this.achievements = {};

        // 초기화
        this.initQuests();
        this.setupListeners();
    }

    initQuests() {
        // 데일리 미션 초기화 (데이터가 없으면 0)
        DAILY_QUEST_DEFS.forEach(def => {
            if (!this.dailies[def.id]) {
                this.dailies[def.id] = { progress: 0, completed: false, claimed: false };
            }
        });
        // 업적 초기화
        ACHIEVEMENT_DEFS.forEach(def => {
            if (!this.achievements[def.id]) {
                this.achievements[def.id] = { progress: 0, completed: false, claimed: false };
            }
        });
    }

    checkDailyReset() {
        const today = new Date().toDateString();
        if (this.lastLoginDate !== today) {
            console.log("[QuestManager] 날짜 변경 감지 -> 데일리 미션 리셋");
            this.lastLoginDate = today;
            // 데일리 미션 초기화
            DAILY_QUEST_DEFS.forEach(def => {
                this.dailies[def.id] = { progress: 0, completed: false, claimed: false };
            });
            this.emit('quests:updated', this.getViewModel());
        }
    }

    setupListeners() {
        // 1. 소환
        this.eventBus.on('summon:result', () => {
            this.updateProgress('summon', 1);
            this.updateProgress('total_summon', 1); // 업적용
        });

        // 2. 탐사 완료
        this.eventBus.on('expedition:completed', () => {
            this.updateProgress('expedition_complete', 1);
        });

        // 3. 훈련 (Main에서 emit 필요)
        this.eventBus.on('training:performed', () => {
            this.updateProgress('training', 1);
        });

        // 4. 레벨업
        this.eventBus.on('creature:leveledUp', (data) => {
            // max(현재 레벨) 로 체크 or 트리거 될 때마다 체크
            // 'creature_level_reach'는 targetCount가 곧 레벨
            // 업적 특성상 "10레벨 달성"은 10레벨이 된 순간 한 번 완료되면 됨.
            const newLevel = data.newLevel;

            // 모든 'creature_level_reach' 타입 업적 확인
            ACHIEVEMENT_DEFS.filter(d => d.type === 'creature_level_reach').forEach(def => {
                if (newLevel >= def.targetCount) {
                    this.completeAchievement(def.id);
                }
            });
        });

        // 5. [NEW] 전투 완료 (Battle -> Quest Link)
        this.eventBus.on('battle:completed', (data) => {
            const { isWin } = data;

            // Daily: Battle Count
            this.updateProgress('daily_battle', 1);

            if (isWin) {
                // Achievement: Battle Win
                this.updateProgress('battle_win', 1);
            } else {
                // Hidden Achievement: Defeat (Check ID manually or via type)
                // Assuming hidden type is handled or mapped directly.
                // For simplicity, let's look up specific hidden achievement IDs or types if defined.
                // In QuestData, hidden are generated. Let's assume a manual mapping for now or add a type.
                // Current QuestData uses generated IDs. Let's look for "끈기있는 자" via logic if needed, 
                // but simpler to just strictly map types.
                // Fix: Add a specific type to QuestData for these logic or just emit generic 'battle_lose'?
                // For now, let's just emit generic events that map to types.
            }
        });
    }

    updateProgress(type, amount) {
        let changed = false;

        // 데일리 미션 업데이트
        DAILY_QUEST_DEFS.filter(d => d.type === type).forEach(def => {
            const state = this.dailies[def.id];
            if (!state.completed) {
                state.progress += amount;
                if (state.progress >= def.targetCount) {
                    state.progress = def.targetCount;
                    state.completed = true;
                    this.emit('quest:completed', { type: 'daily', def });
                }
                changed = true;
            }
        });

        // 업적 업데이트 (누적형)
        ACHIEVEMENT_DEFS.filter(d => d.type === type).forEach(def => {
            const state = this.achievements[def.id];
            if (!state.completed) {
                state.progress += amount;
                if (state.progress >= def.targetCount) {
                    state.progress = def.targetCount;
                    state.completed = true;
                    this.emit('quest:completed', { type: 'achievement', def });
                }
                changed = true;
            }
        });

        if (changed) this.emit('quests:updated', this.getViewModel());
    }

    // 업적 강제 완료 처리 (레벨 달성 같은 경우 progress가 아니라 상태 체크라)
    completeAchievement(id) {
        const state = this.achievements[id];
        if (state && !state.completed) {
            state.completed = true;
            state.progress = ACHIEVEMENT_DEFS.find(d => d.id === id).targetCount; // 100% 표기용
            const def = ACHIEVEMENT_DEFS.find(d => d.id === id);
            this.emit('quest:completed', { type: 'achievement', def });
            this.emit('quests:updated', this.getViewModel());
        }
    }

    claimReward(id, isDaily) {
        const def = isDaily
            ? DAILY_QUEST_DEFS.find(d => d.id === id)
            : ACHIEVEMENT_DEFS.find(d => d.id === id);

        const state = isDaily ? this.dailies[id] : this.achievements[id];

        if (!state || !state.completed || state.claimed) return false;

        // 보상 지급
        if (def.reward.gold) this.resourceManager.addGold(def.reward.gold);
        if (def.reward.gem) this.resourceManager.addGem(def.reward.gem);

        state.claimed = true;
        this.emit('quests:claimed', { def });
        this.emit('quests:updated', this.getViewModel());
        return true;
    }

    getViewModel() {
        // UI 렌더링하기 편하게 데이터 가공해서 전달
        return {
            dailies: DAILY_QUEST_DEFS.map(def => ({ ...def, ...this.dailies[def.id] })),
            achievements: ACHIEVEMENT_DEFS.map(def => ({ ...def, ...this.achievements[def.id] }))
        };
    }

    // [저장/로드]
    getSerializableState() {
        return {
            lastLoginDate: this.lastLoginDate,
            dailies: this.dailies,
            achievements: this.achievements
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.lastLoginDate = state.lastLoginDate || new Date().toDateString();

        if (state.dailies) this.dailies = state.dailies;
        if (state.achievements) this.achievements = state.achievements;

        // 날짜 체크 (로드 시점에 날짜 다르면 리셋)
        this.checkDailyReset();

        // 데이터 포맷 변경 대비 초기화
        this.initQuests();

        this.emit('quests:updated', this.getViewModel());
    }
}
