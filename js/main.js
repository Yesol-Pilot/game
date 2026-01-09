/**
 * main.js - Game Entry Point & UI Controller
 */
import Game from './core/Game.js';
import DataManager from './managers/DataManager.js';
import { firebaseService } from './firebase/FirebaseService.js'; // [NEW]
import AuthView from './ui/AuthView.js';
import BattleView from './ui/BattleView.js';
import CreatureView from './ui/CreatureView.js';
import ExpeditionView from './ui/ExpeditionView.js';
import SummonView from './ui/SummonView.js';
import TeamView from './ui/TeamView.js';
import ShopView from './ui/ShopView.js';
import ResearchView from './ui/ResearchView.js';
import MissionView from './ui/MissionView.js';
import PrestigeView from './ui/PrestigeView.js';
import GuildView from './ui/GuildView.js'; // [Phase 6]
import RankingView from './ui/RankingView.js'; // [Phase 6]
import TutorialView from './ui/TutorialView.js'; // [Standardization]
import SettingsView from './ui/SettingsView.js'; // [Fix] Import SettingsView
import LobbyView from './ui/LobbyView.js'; // [Refactor] Import LobbyView

window.game = null;
const views = {};

window.onload = async () => {
    console.log("[Main] Window Loaded");

    // [New] Init Firebase
    firebaseService.init((user) => {
        console.log("[Main] Firebase Auth State Changed:", user ? user.email : "Logged Out");
    });

    // Show Loading Indicator (Simple implementation)
    const loginOverlay = document.getElementById('login-overlay');
    const loadingText = document.createElement('div');
    loadingText.id = 'loading-indicator';
    loadingText.style.color = '#00e5ff';
    loadingText.style.fontFamily = 'Orbitron';
    loadingText.style.marginTop = '20px';
    loadingText.innerText = "INITIALIZING SYSTEM DATA...";
    if (loginOverlay) {
        loginOverlay.appendChild(loadingText);
    }

    // 0. Load Data Async
    try {
        await DataManager.loadAll();
        if (loadingText) loadingText.innerText = "SYSTEM READY.";
    } catch (err) {
        console.error("Critical Error loading data:", err);
        if (loadingText) {
            loadingText.style.color = 'red';
            loadingText.innerText = "SYSTEM ERROR: DATA LOAD FAILED";
        }
        return; // Stop execution
    }

    // 1. Game Core Init
    game = new Game();
    window.game = game;
    await game.init(); // Async initialization


    // 2. View Init
    views.auth = new AuthView(game);
    views.battle = new BattleView(game);
    views.creature = new CreatureView(game);
    views.expedition = new ExpeditionView(game);
    views.summon = new SummonView(game);
    views.team = new TeamView(game);
    views.shop = new ShopView(game);
    views.research = new ResearchView(game);
    views.mission = new MissionView(game);
    views.prestige = new PrestigeView(game);
    views.guild = new GuildView(game); // [Phase 6]
    views.ranking = new RankingView(game); // [Phase 6]
    views.tutorial = new TutorialView(game); // [Standardization]
    views.settings = new SettingsView(game); // [Fix] Instantiate SettingsView
    views.lobby = new LobbyView(game); // [Refactor] Instantiate LobbyView

    // [Fix] Initialize all views to bind events
    Object.values(views).forEach(view => {
        if (view && typeof view.init === 'function') view.init();
    });

    // Remove loading indicator
    if (loadingText && loadingText.parentNode) {
        loadingText.parentNode.removeChild(loadingText);
    }

    // 3. Auth Check & Start Logic
    // Define Start Function
    const startApp = async () => {
        console.log("[Main] Starting Application Flow...");

        // Load user data from Game
        // [Safety]: Ensure DataManager is done (It is awaited above)

        try {
            await game.loadUserData(); // Make loadUserData awaitable if it's async, or regular sync.
            // game.loadUserData currently sync, but let's assume it works.

            // [Safety] Mark Data Ready ONLY after successful load
            game.markDataReady();

        } catch (e) {
            console.error("[Main] Critical Error during User Data Load:", e);
            alert("데이터 로드 중 오류가 발생했습니다. 페이지를 새로고침 해주세요.");
            return;
        }

        // Initial UI State
        game.uiManager.switchTab('home');

        // [Refactor] Lobby Update delegated to LobbyView.init()
        if (views.lobby) views.lobby.updateLobbyCharacter();


        // Global Event Listeners (Bind only once)
        if (!game._listenersBound) {
            game.creatureManager.on('creatures:updated', () => {
                const contentHome = document.getElementById('content-home');
                if (views.creature && contentHome && contentHome.style.display !== 'none') {
                    views.creature.render();
                }

                const contentTeam = document.getElementById('content-team');
                if (views.team && contentTeam && contentTeam.style.display !== 'none') {
                    views.team.render();
                }
            });

            game.resourceManager.on('gold:changed', () => updateResourceDisplay());
            game.resourceManager.on('gem:changed', () => updateResourceDisplay());
            game.resourceManager.on('energy:changed', () => updateResourceDisplay());

            game._listenersBound = true;
        }

        updateResourceDisplay();

        // Hide Login Overlay
        const loginOverlay = document.getElementById('login-overlay');
        if (loginOverlay) loginOverlay.style.display = 'none';

        // [Fix] Start the Game Loop!
        game.start();

        console.log("[Main] Application Started.");
    };

    // Attach to Game Instance for AuthView callback
    game.startMainGame = startApp;

    // System Modal Handlers
    const btnOpenSystem = document.getElementById('btn-open-system');
    const btnCloseSystem = document.getElementById('btn-close-system');
    const systemModal = document.getElementById('system-modal-overlay');

    if (btnOpenSystem && systemModal) {
        // [Conflict Fix] Handled by SettingsView.js now
        // btnOpenSystem.onclick = () => {
        //     console.log('[Main] Opening system modal...');
        //     systemModal.style.display = 'flex';
        //     console.log('[Main] Modal display set to:', systemModal.style.display);
        // };
    } else {
        // console.warn('[Main] System button or modal not found!');
    }
    if (btnCloseSystem && systemModal) {
        btnCloseSystem.onclick = () => {
            systemModal.style.display = 'none';
        };
    }

    // Check Login State
    if (views.auth.checkLogin()) {
        console.log("[Main] Auto-login success");
        startApp();
    } else {
        console.log("[Main] Need Login - Waiting for user action");
        if (loginOverlay) loginOverlay.style.display = 'flex';
    }
};



function updateResourceDisplay() {
    if (!game || !game.resourceManager) return;
    const goldEl = document.getElementById('ui-gold');
    const gemEl = document.getElementById('ui-gem');
    const energyEl = document.getElementById('ui-energy');

    if (goldEl) goldEl.innerText = game.resourceManager.gold.toLocaleString();
    if (gemEl) gemEl.innerText = game.resourceManager.gem.toLocaleString();
    if (energyEl) energyEl.innerText = `${game.resourceManager.energy} / ${game.resourceManager.maxEnergy}`;
}

// [Refactor] Lobby Logic moved to LobbyView.js

// [Modular Coupon System]
import { CouponSystem } from './systems/CouponSystem.js';

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const couponSystem = new CouponSystem(window.game);
        couponSystem.init();
    }, 500);
});
