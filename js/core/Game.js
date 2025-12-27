import EventEmitter from '../utils/EventEmitter.js';
import Loop from './Loop.js';
import ResourceManager from '../managers/ResourceManager.js';
import CreatureManager from '../managers/CreatureManager.js';
import ExpeditionManager from '../managers/ExpeditionManager.js';
import FacilityManager from '../managers/FacilityManager.js';

import QuestManager from '../managers/QuestManager.js';
import ShopManager from '../managers/ShopManager.js';
import AuthManager from '../managers/AuthManager.js';
import DeckManager from '../managers/DeckManager.js';
import StageManager from '../managers/StageManager.js';
import InventoryManager from '../managers/InventoryManager.js'; // [Phase 4]
import WorldBossManager from '../managers/WorldBossManager.js'; // [Phase 4]
import TowerManager from '../managers/TowerManager.js'; // [Phase 4]
import MailManager from '../managers/MailManager.js'; // [Phase 4]
import GuildManager from '../managers/GuildManager.js'; // [Phase 5]
import RankingManager from '../managers/RankingManager.js'; // [Phase 5]
import PassManager from '../managers/PassManager.js'; // [Phase 5]
import PvPManager from '../managers/PvPManager.js'; // [Phase 9]
import BattleManager from '../managers/BattleManager.js';
import PrestigeManager from '../managers/PrestigeManager.js';
import TutorialManager from '../managers/TutorialManager.js';
import LanguageManager from '../managers/LanguageManager.js'; // [Mod] Import

// [New] Monetization Managers
import PaymentManager from '../managers/PaymentManager.js';
import DateManager from '../managers/DateManager.js';
import { AIManager } from '../managers/AIManager.js'; // [Mod] Import AI Manager
import AffinityManager from '../managers/AffinityManager.js'; // [NEW]

import SaveManager from '../utils/SaveManager.js';
import BattleScene from '../scenes/BattleScene.js';
import SummonScene from '../scenes/SummonScene.js';
import AudioManager from '../managers/AudioManager.js'; // [NEW] Audio Manager
import SettingsView from '../ui/SettingsView.js'; // [NEW] Settings View

import UIManager from '../managers/UIManager.js'; // [Mod] Import moved to top

export default class Game {
    static instance = null;

    constructor() {
        if (Game.instance) return Game.instance;
        Game.instance = this;

        // ...

        this.events = new EventEmitter();
        this.langManager = new LanguageManager();
        this.uiManager = new UIManager(this); // [Mod] Init UIManager
        this.settingsView = new SettingsView(this); // [NEW] Init Settings View
        this.authManager = new AuthManager();

        // 1. Core Managers (Dependencies)
        this.resourceManager = new ResourceManager();
        this.aiManager = new AIManager(); // [Mod] Init AI Manager
        this.paymentManager = new PaymentManager(this); // Init Payment early
        this.paymentManager.init();
        this.dateManager = new DateManager(this);
        this.affinityManager = new AffinityManager(this); // [NEW]

        this.facilityManager = new FacilityManager(this.events, this.resourceManager);

        // 2. Feature Managers
        this.creatureManager = new CreatureManager(this, this.events, this.resourceManager);
        this.expeditionManager = new ExpeditionManager(this.events, this.resourceManager, this.creatureManager, this.facilityManager);
        this.questManager = new QuestManager(this.events, this.resourceManager);
        this.shopManager = new ShopManager(this); // Now safe to use Payment
        this.deckManager = new DeckManager(this);
        this.stageManager = new StageManager(this);
        this.inventoryManager = new InventoryManager(this); // [Phase 4] Artifacts
        this.worldBossManager = new WorldBossManager(this); // [Phase 4] World Boss
        this.worldBossManager.init(); // [Init]
        this.towerManager = new TowerManager(this); // [Phase 4] Infinite Tower
        this.towerManager.init();
        this.mailManager = new MailManager(this); // [Phase 4] Mail
        this.mailManager.init();
        this.guildManager = new GuildManager(this); // [Phase 5] Guild
        this.rankingManager = new RankingManager(this); // [Phase 5] Ranking
        this.passManager = new PassManager(this); // [Phase 5] Battle Pass
        this.pvpManager = new PvPManager(this); // [Phase 9] PvP
        this.pvpManager.init();
        this.battleManager = new BattleManager(this, this.events, this.resourceManager, this.creatureManager);
        this.prestigeManager = new PrestigeManager(this, this.events, this.resourceManager);
        this.tutorialManager = new TutorialManager(this);

        // [Scenes]
        this.battleScene = new BattleScene(this);
        // this.summonScene = new SummonScene(this); // [Mod] Removed redundant legacy scene

        // [NEW] Audio Manager
        this.audioManager = new AudioManager(this);

        this.deckManager.init();
        this.loop = new Loop(this.update.bind(this));

        // [연구] 최대 에너지 연동
        this.facilityManager.on('facilities:updated', () => {
            const maxE = 100 + this.facilityManager.getEffectValue('max_energy');
            this.resourceManager.setMaxEnergy(maxE);
        });

        // [DEBUG] 전역 노출
        window.game = this;
    }

    static getInstance() {
        if (!Game.instance) Game.instance = new Game();
        return Game.instance;
    }

    // 주의: init()은 순수 초기화만 수행. 앱 시작은 main.js에서 제어.
    init() {
        console.log("[Game] Initializing...");
        this.authManager.init();

        // [Phase 4] Offline Reward Check
        this.checkOfflineProgress();
        // Save heartbeat every minute for offline calculation
        setInterval(() => {
            localStorage.setItem('lastHeartbeat', Date.now());
        }, 60000);

        console.log("[Game] Initialization complete.");
        // 로그인 체크 및 앱 시작은 main.js에서 처리
    }

    checkOfflineProgress() {
        const lastTime = localStorage.getItem('lastHeartbeat');
        if (lastTime) {
            const now = Date.now();
            const diffMs = now - parseInt(lastTime);
            const diffMin = Math.floor(diffMs / 60000);

            if (diffMin >= 5) { // Minimum 5 minutes
                // Logic: 10 Gold per minute * Stage Level (Avg)
                const maxStage = this.stageManager.getMaxStage() || 1;
                const earnedGold = diffMin * 10 * maxStage;
                // Cap at 24 hours (1440 mins)
                const cap = 1440 * 10 * maxStage;
                const finalGold = Math.min(earnedGold, cap);

                this.resourceManager.addGold(finalGold);
                // Wait for UI to be ready then show toast
                setTimeout(() => {
                    alert(`[오프라인 보상]\n게임에 접속하지 않은 ${Math.floor(diffMin / 60)}시간 ${diffMin % 60}분 동안\n💰 ${finalGold} 골드를 획득했습니다!`);
                }, 1000);
            }
        }
        localStorage.setItem('lastHeartbeat', Date.now());
    }

    // 사용자 데이터 로드 (로그인 후 main.js에서 호출)
    loadUserData() {
        const user = this.authManager.currentUser;
        const saveKey = user ? user.username : 'guest';

        console.log(`[Game] Loading data for ${saveKey}...`);

        const saveData = SaveManager.loadGame(saveKey);
        if (saveData) {
            console.log("[Game] Save data found, applying...");
            this.applyLoadedState(saveData);
        } else {
            console.log("[Game] No save data, using defaults.");
            this.renderResources(this.resourceManager.getResources());
        }

        // 리소스 변경 구독
        this.resourceManager.on('resources:changed', (res) => {
            this.renderResources(res);
        });

        // 튜토리얼 시작
        this.tutorialManager.start();
        console.log("[Game] User data loaded.");
    }

    startMainGame() {
        const user = this.authManager.currentUser;
        if (!user) {
            console.error("Critical: StartMainGame called without user.");
            return;
        }

        console.log(`Starting Main Game for ${user.username}...`);

        // [New] Dynamic Save Key
        const saveKey = user.username;

        // 1. 저장 데이터 확인 및 로드
        const saveData = SaveManager.loadGame(saveKey);
        if (saveData) {
            console.log("저장된 데이터를 로드합니다.", saveData);
            this.applyLoadedState(saveData);
        } else {
            console.log("저장 데이터가 없습니다. 기본 초기화.");
            // 초기값 렌더링
            this.renderResources(this.resourceManager.getResources());
        }

        // 2. 리소스 변경 구독
        this.resourceManager.on('resources:changed', (res) => {
            this.renderResources(res);
        });

        // 3. 튜토리얼 시작 (로드 후)
        this.tutorialManager.start();
    }

    // [저장/로드 시스템]
    save() {
        const user = this.authManager.currentUser;
        const saveKey = user ? user.username : 'guest';

        const state = this.buildSaveState();
        SaveManager.saveGame(state, saveKey);
    }

    clearSave() {
        const user = this.authManager.currentUser;
        if (user) SaveManager.clearGame(user.username);
    }

    // [Director Passive System]
    getDirectorEffect(type) {
        const user = this.authManager.currentUser;
        if (!user) return 0;
        const ava = user.avatar; // e.g., 'director_vesper'

        // Define Passives
        // Vesper: facility_cost (-0.1)
        // Kael: battle_atk (+0.05)
        // Zero: exp_gain (+0.1)
        // Eos: gold_gain (+0.1)

        if (type === 'battle_atk' && ava === 'director_kael') return 0.05;
        if (type === 'exp_gain' && ava === 'director_zero') return 0.10;
        if (type === 'gold_gain' && ava === 'director_eos') return 0.10;
        if (type === 'facility_cost' && ava === 'director_vesper') return 0.10; // 10% discount

        return 0;
    }

    buildSaveState() {
        return {
            version: 1,
            saveTime: Date.now(), // [NEW] 오프라인 보상 계산용
            resources: this.resourceManager.getSerializableState(),
            creatures: this.creatureManager.getSerializableState(),
            expeditions: this.expeditionManager.getSerializableState(),
            facilities: this.facilityManager.getSerializableState(),
            quests: this.questManager.getSerializableState(),
            shop: this.shopManager.getSerializableState(),
            decks: this.deckManager.getSerializableState(),
            stages: this.stageManager.getSerializableState(),
            prestige: this.prestigeManager.getSerializableState(),
            ranking: this.rankingManager.getSerializableState(),
            pass: this.passManager.getSerializableState() // [Phase 5]
        };
    }

    applyLoadedState(data) {
        if (!data) return;

        // 1. 순차 로드 (의존성 고려)
        if (data.resources) this.resourceManager.loadFromState(data.resources);
        if (data.creatures) this.creatureManager.loadFromState(data.creatures);
        if (data.expeditions) this.expeditionManager.loadFromState(data.expeditions);
        if (data.facilities) this.facilityManager.loadFromState(data.facilities);
        if (data.quests) this.questManager.loadFromState(data.quests);
        if (data.shop) this.shopManager.loadFromState(data.shop);
        if (data.decks) this.deckManager.loadFromState(data.decks);
        if (data.stages) this.stageManager.loadFromState(data.stages);
        if (data.prestige) this.prestigeManager.loadFromState(data.prestige);
        if (data.tutorial) this.tutorialManager.loadFromState(data.tutorial);
        // Additional managers from user's snippet
        if (data.inventory) this.inventoryManager.loadFromState(data.inventory);
        if (data.worldBoss) this.worldBossManager.loadFromState(data.worldBoss);
        if (data.tower) this.towerManager.loadFromState(data.tower);
        if (data.mail) this.mailManager.loadFromState(data.mail);
        if (data.guild) this.guildManager.loadFromState(data.guild);
        if (data.ranking) this.rankingManager.loadFromState(data.ranking);
        if (data.pass) this.passManager.loadFromState(data.pass); // [Phase 5]

        // 2. 오프라인 보상 계산 [NEW]
        if (data.saveTime) {
            this.handleOfflineRewards(data.saveTime);
        }

        // MaxEnergy 초기 동기화
        const maxE = 100 + this.facilityManager.getEffectValue('max_energy');
        this.resourceManager.setMaxEnergy(maxE);

        // 초기 리소스 렌더링
        this.renderResources(this.resourceManager.getResources());
    }

    handleOfflineRewards(lastSaveTime) {
        const now = Date.now();
        const diffMs = now - lastSaveTime;
        const diffSec = Math.floor(diffMs / 1000);

        if (diffSec < 60) return; // 1분 미만은 무시

        // 초당 골드 생산량 (GPS) 계산 (Facility 효과)
        const gps = this.facilityManager.getEffectValue('gold_per_sec');
        const maxOfflineSec = 8 * 3600; // 최대 8시간 제한
        const rewardSec = Math.min(diffSec, maxOfflineSec);

        const offlineGold = Math.floor(gps * rewardSec);

        if (offlineGold > 0) {
            this.resourceManager.addGold(offlineGold);

            // UI 알림 (UIManager가 초기화된 후 실행되도록 지연)
            setTimeout(() => {
                if (window.uiManager) {
                    const hours = Math.floor(rewardSec / 3600);
                    const mins = Math.floor((rewardSec % 3600) / 60);
                    const timeStr = hours > 0 ? `${hours}시간 ${mins}분` : `${mins}분`;

                    window.uiManager.showConfirm(
                        `[오프라인 보상]\n\n연구소장님! ${timeStr} 동안 부재중이셨군요.\n크리처들이 ${offlineGold.toLocaleString()} 골드를 모았습니다.`,
                        () => { } // 전송 확인만 함
                    );
                }
            }, 1000);
        }
    }

    start() {
        this.loop.start();
        console.log("Game loop started");
    }

    update(deltaTime) {
        // 메인 게임 로직 업데이트 (Main Game Logic Update)
        this.expeditionManager.update(deltaTime);
        this.resourceManager.update(deltaTime); // 에너지 회복

        // 1. 패시브 골드 수급 (1초마다)
        this.passiveTimer = (this.passiveTimer || 0) + deltaTime;
        if (this.passiveTimer >= 1.0) {
            const gps = this.facilityManager.getEffectValue('gold_per_sec');
            if (gps > 0) {
                this.resourceManager.addGold(gps);
            }
            this.passiveTimer -= 1.0;
        }

        // 2. 자동 저장 (30초마다)
        this.autosaveTimer = (this.autosaveTimer || 0) + deltaTime;
        if (this.autosaveTimer >= 30.0) {
            this.save();
            this.autosaveTimer = 0;
        }
    }

    renderResources(res) {
        // UI 업데이트 (천 단위 콤마 추가)
        const elGold = document.getElementById('gold-display');
        const elGem = document.getElementById('gem-display');
        const elEnergy = document.getElementById('energy-display');

        if (elGold) elGold.innerText = res.gold.toLocaleString();
        if (elGem) elGem.innerText = res.gem.toLocaleString();
        if (elEnergy) elEnergy.innerText = `${res.energy} / ${res.maxEnergy}`;
    }

    /**
     * @description 사운드 효과 재생
     * @param {string} soundId - 재생할 사운드 식별자
     */
    playSound(soundId) {
        if (this.audioManager) {
            this.audioManager.playSFX(soundId);
        } else {
            console.log(`[Sound] ${soundId} 재생 시도 (AudioManager 미초기화)`);
        }
    }
}
