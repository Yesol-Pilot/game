import EventEmitter from '../utils/EventEmitter.js';
import Loop from './Loop.js';
import ResourceManager from '../managers/ResourceManager.js';
import CreatureManager from '../managers/CreatureManager.js';
import ExpeditionManager from '../managers/ExpeditionManager.js';
import FacilityManager from '../managers/FacilityManager.js';

import QuestManager from '../managers/QuestManager.js';
import ShopManager from '../managers/ShopManager.js';
import AuthManager from '../managers/AuthManager.js'; // [NEW]
import DeckManager from '../managers/DeckManager.js'; // [NEW]
import StageManager from '../managers/StageManager.js'; // [NEW]
import BattleManager from '../managers/BattleManager.js';
import TutorialManager from '../managers/TutorialManager.js';
import SaveManager from '../utils/SaveManager.js';
import BattleScene from '../scenes/BattleScene.js';
import SummonScene from '../scenes/SummonScene.js';

export default class Game {
    static instance = null;

    constructor() {
        if (Game.instance) return Game.instance;
        Game.instance = this;

        this.events = new EventEmitter();
        this.resourceManager = new ResourceManager();
        this.facilityManager = new FacilityManager(this.events, this.resourceManager);
        this.creatureManager = new CreatureManager(this.events, this.resourceManager);
        this.expeditionManager = new ExpeditionManager(this.events, this.resourceManager, this.creatureManager, this.facilityManager);
        this.questManager = new QuestManager(this.events, this.resourceManager);
        this.shopManager = new ShopManager(this.events, this.resourceManager, this.creatureManager);
        this.authManager = new AuthManager();
        this.deckManager = new DeckManager(this);
        this.stageManager = new StageManager(this); // [NEW]
        this.authManager = new AuthManager();
        this.deckManager = new DeckManager(this);
        this.stageManager = new StageManager(this);
        this.battleManager = new BattleManager(this, this.events, this.resourceManager, this.creatureManager.owned);
        this.tutorialManager = new TutorialManager(this);

        // [Scenes]
        this.battleScene = new BattleScene(this);
        this.summonScene = new SummonScene(this);

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

    // 주의: init()은 UI 이벤트 리스너 등록 '후'에 호출하는 것이 좋습니다 (로그 출력을 위해)
    init() {
        console.log("Game initialized");

        // [NEW] Auth Check
        this.authManager.init();
        if (!this.authManager.isLoggedIn()) {
            console.log("Not logged in. Waiting for auth.");
            // Login Overlay is visible by default in HTML
            return;
        }

        // 로그인 상태라면 게임 시작
        this.startMainGame();
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
        if (!user) return; // No save for guests/errors

        const state = this.buildSaveState();
        SaveManager.saveGame(state, user.username);
    }

    clearSave() {
        const user = this.authManager.currentUser;
        if (user) SaveManager.clearGame(user.username);
    }

    clearSave() {
        SaveManager.clearGame();
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
            savedAt: Date.now(),
            resources: this.resourceManager.getSerializableState(),
            creatures: this.creatureManager.getSerializableState(),
            expeditions: this.expeditionManager.getSerializableState(),
            facilities: this.facilityManager.getSerializableState(),
            quests: this.questManager.getSerializableState(),
            shop: this.shopManager.getSerializableState(),
            tutorial: this.tutorialManager.getSerializableState() // [NEW]
        };
    }

    applyLoadedState(data) {
        if (data.resources) this.resourceManager.loadFromState(data.resources);
        if (data.facilities) this.facilityManager.loadFromState(data.facilities);
        if (data.creatures) this.creatureManager.loadFromState(data.creatures);
        if (data.expeditions) this.expeditionManager.loadFromState(data.expeditions);
        if (data.quests) this.questManager.loadFromState(data.quests);
        if (data.shop) this.shopManager.loadFromState(data.shop);
        if (data.tutorial) this.tutorialManager.loadFromState(data.tutorial); // [NEW]

        // MaxEnergy 초기 동기화
        const maxE = 100 + this.facilityManager.getEffectValue('max_energy');
        this.resourceManager.setMaxEnergy(maxE);
    }

    start() {
        this.loop.start();
        console.log("Game loop started");
    }

    update(deltaTime) {
        // 메인 게임 로직 업데이트 (Main Game Logic Update)
        this.expeditionManager.update(deltaTime);
        this.resourceManager.update(deltaTime); // [NEW] 에너지 회복

        // 디버그: 1초마다 리소스 로그 출력
    }

    renderResources(res) {
        // UI 업데이트
        const elGold = document.getElementById('gold-display');
        const elGem = document.getElementById('gem-display');
        const elEnergy = document.getElementById('energy-display');

        if (elGold) elGold.innerText = res.gold;
        if (elGem) elGem.innerText = res.gem;
        if (elEnergy) elEnergy.innerText = res.energy + " / " + res.maxEnergy; // max 표시 추가
    }
}
