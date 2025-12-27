/**
 * main.js - Game Entry Point & UI Controller
 */
import Game from './core/Game.js';
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

window.game = null;
const views = {};

window.onload = () => {
    console.log("[Main] Window Loaded");

    // 1. Game Core Init
    game = new Game();
    window.game = game;
    game.init(); // Synchronous initialization


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

    // [Fix] Initialize all views to bind events
    Object.values(views).forEach(view => {
        if (view && typeof view.init === 'function') view.init();
    });

    // 3. Auth Check & Start Logic
    // Define Start Function
    const startApp = () => {
        console.log("[Main] Starting Application Flow...");

        // Load user data from Game
        game.loadUserData();

        // Initial UI State
        game.uiManager.switchTab('home');
        updateLobbyCharacter();
        initLobbyInteraction();

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

    console.log('[Main] System Button:', btnOpenSystem);
    console.log('[Main] System Modal:', systemModal);

    if (btnOpenSystem && systemModal) {
        btnOpenSystem.onclick = () => {
            console.log('[Main] Opening system modal...');
            systemModal.style.display = 'flex';
            console.log('[Main] Modal display set to:', systemModal.style.display);
        };
    } else {
        console.warn('[Main] System button or modal not found!');
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
        const loginOverlay = document.getElementById('login-overlay');
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

// [Resonance V3] Lobby Interaction System
// =========================================================

// [Resonance V3] Lobby Interaction System
// =========================================================

window.updateLobbyCharacter = updateLobbyCharacter; // Global exposure for UI
function updateLobbyCharacter() {
    const img = document.getElementById('lobby-character-img');
    const nameEl = document.getElementById('lobby-character-name');
    if (!img) return;

    let creature = null;

    // 1. Priority: Explicit User Preference
    try {
        const preferred = JSON.parse(localStorage.getItem('preferredLobbyCharacter'));
        if (preferred && preferred.instanceId) {
            creature = game.creatureManager.getCreatureById(preferred.instanceId);
        }
    } catch (e) { console.error(e); }

    // 2. Priority: Representative Creature
    if (!creature) {
        creature = game.creatureManager.getRepresentative();
    }

    // 3. Priority: Existing Memory Selection
    if (!creature) creature = window.game.currentLobbyCreature;

    // 4. Storage Selection
    if (!creature) {
        try {
            const saved = JSON.parse(localStorage.getItem('lobbyCharacter'));
            if (saved && saved.instanceId) {
                creature = game.creatureManager.getCreatureById(saved.instanceId);
            }
        } catch (e) { console.error(e); }
    }

    // 5. Fallback: Active Team Leader
    if (!creature) {
        const team = game.deckManager.getActiveTeam();
        if (team && team[0]) creature = team[0];
    }

    // 6. Fallback: Highest Rarity Owned
    if (!creature) {
        if (game.creatureManager.owned.length === 0) {
            console.log("[Lobby] Still loading creatures, skipping fallback update.");
            return;
        }
        const sorted = [...game.creatureManager.owned].sort((a, b) => {
            if (b.def.rarity !== a.def.rarity) return b.def.rarity - a.def.rarity;
            return a.def.id.localeCompare(b.def.id);
        });
        creature = sorted[0];
    }

    if (creature) {
        window.game.currentLobbyCreature = creature;
        const level = game.creatureManager.getAffectionLevel(creature);

        // Determine Image Source
        let imgSrc = creature.def.image;
        if (level >= 3 && creature.def.images && creature.def.images.secret) {
            imgSrc = creature.def.images.secret;
        } else if (creature.def.images && creature.def.images[level]) {
            imgSrc = creature.def.images[level];
        }

        // [Fix] Robust Image Loading with Fallback
        img.onerror = () => {
            console.warn(`[Lobby] Failed to load image: ${imgSrc}. Reverting to placeholder.`);
            img.src = "images/creature_placeholder_unknown.png"; // Helper placeholder
            img.onerror = null; // Prevent infinite loop
        };
        img.src = imgSrc;

        if (nameEl) nameEl.innerText = `${creature.def.name} (Lv.${creature.level})`;

        // Save weak persistence (unless preferred set)
        const preferred = localStorage.getItem('preferredLobbyCharacter');
        if (!preferred) {
            localStorage.setItem('lobbyCharacter', JSON.stringify({
                instanceId: creature.instanceId,
                image: imgSrc,
                name: creature.def.name
            }));
        }

        setTimeout(() => updateResonanceUI(creature), 50);
    }
}

// ... (initLobbyInteraction, initDateSystem remain roughly same, skipping for brevity but assuming they are preserved or I will re-add if I clip too much) 
// Actually I need to be careful not to delete initLobbyInteraction and initDateSystem if I am replacing a huge chunk.
// The user instruction "remove old coupon logic" means I should replace the end of file.

// Re-implementing initLobbyInteraction and initDateSystem for safety since I am replacing from line 144
function initLobbyInteraction() {
    const img = document.getElementById('lobby-character-img');
    if (!img) return;

    img.onclick = (e) => {
        let creature = window.game.currentLobbyCreature;
        if (!creature) { updateLobbyCharacter(); creature = window.game.currentLobbyCreature; }
        if (!creature) return;

        const rect = img.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const h = rect.height; // Using displayed height
        let part = 'special';

        // Simple hit detection
        if (y < h * 0.25) part = 'head';
        else if (y < h * 0.55) part = 'chest';
        else part = 'legs';

        const bubble = document.getElementById('lobby-speech-bubble');
        const level = game.creatureManager.getAffectionLevel(creature);
        const lines = creature.def.lines || {};
        let text = lines.normal || "...";
        let isRejected = false;

        if (level === 0 && (part === 'chest' || part === 'legs')) {
            isRejected = true;
            text = lines[`touch_${part}_reject`] || lines.touch_reject || "가까이 오지 마.";
        }

        const now = Date.now();
        if (!isRejected && (!creature._lastTouchTime || now - creature._lastTouchTime > 1000)) {
            creature._lastTouchTime = now;
            let bonus = (level >= 2) ? 1 : 0;
            game.creatureManager.increaseAffection(creature.instanceId, 1 + bonus);

            createHeartEffect(e.clientX, e.clientY);
            if (bonus > 0) setTimeout(() => createHeartEffect(e.clientX + 30, e.clientY - 30), 200);
            updateResonanceUI(creature);

            if (typeof window.game.playSound === 'function') window.game.playSound('touch_soft');
        } else if (isRejected) {
            if (typeof window.game.playSound === 'function') window.game.playSound('touch_reject');
        }

        // Anim
        img.className = '';
        void img.offsetWidth;
        if (isRejected) {
            img.className = 'touch-react-chest';
            img.style.filter = "grayscale(1) brightness(0.8)";
            setTimeout(() => img.style.filter = "none", 500);
        } else {
            img.className = `touch-react-${part}`;
        }
        setTimeout(() => img.className = '', 500);

        // Dialogue
        if (!isRejected) {
            if (level >= 2 && lines[`touch_${part}_love`]) text = lines[`touch_${part}_love`];
            else {
                if (part === 'head') text = lines.touch_head || text;
                else if (part === 'chest') text = lines.touch_chest || lines.touch_special || text;
                else if (part === 'legs') text = lines.touch_legs || lines.touch_special || text;
            }
        }

        // Bubble
        if (bubble) {
            // [Phase 9] PvP Button
            const pvpBtn = document.createElement('button');
            pvpBtn.className = 'cyber-btn';
            pvpBtn.style.cssText = "position:absolute; bottom:160px; right:20px; z-index:10; padding:10px 20px; font-size:0.9em; background:rgba(200, 0, 0, 0.8); border:1px solid #ff4757;";
            pvpBtn.innerHTML = "⚔️ 실시간 대전";
            pvpBtn.onclick = () => {
                if (game.pvpManager) {
                    game.pvpManager.findMatch();
                } else {
                    alert("PvP 시스템 준비 중입니다.");
                }
            };
            // Ensure only one exists
            const existingPvP = document.getElementById('lobby-pvp-btn');
            if (existingPvP) existingPvP.remove();
            pvpBtn.id = 'lobby-pvp-btn';

            // Add to specific container to avoid overlapping (or just body if simple)
            // Assuming 'lobby-view' or 'content-home' is active
            const homeView = document.getElementById('content-home');
            if (homeView) homeView.appendChild(pvpBtn);

            const textEl = document.getElementById('lobby-speech-text');
            if (textEl) textEl.innerText = text;
            else bubble.innerText = text;

            bubble.className = 'speech-bubble active'; // Reset classes

            // Apply style based on state
            if (isRejected) {
                bubble.style.border = "2px solid #ff5252";
                bubble.style.color = "#ff8a80";
                bubble.style.background = "rgba(0,0,0,0.8)";
            } else if (level >= 2) {
                bubble.style.border = "2px solid #ff4081";
                bubble.style.color = "#fff";
                bubble.style.background = "rgba(0,0,0,0.7)";
            } else {
                bubble.style.border = "1px solid rgba(255,255,255,0.2)";
                bubble.style.color = "#fff";
                bubble.style.background = "rgba(0,0,0,0.7)";
            }

            if (window.bubbleTimeout) clearTimeout(window.bubbleTimeout);
            window.bubbleTimeout = setTimeout(() => bubble.classList.remove('active'), 3000);
        }
    };
}

function initDateSystem() {
    const btnDate = document.getElementById('btn-lobby-date');
    if (btnDate) btnDate.addEventListener('click', openDateModal);
}

function openDateModal() {
    const modal = document.getElementById('date-select-modal');
    const list = document.getElementById('date-course-list');
    if (!modal || !list) return;

    list.innerHTML = '';
    const courses = game.dateManager.getCourses();

    courses.forEach(course => {
        const btn = document.createElement('button');
        btn.className = 'cyber-btn';
        btn.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:15px; text-align:left;";

        let costLabel = '';
        if (course.cost.type === 'energy') costLabel = `⚡ ${course.cost.value}`;
        if (course.cost.type === 'gem') costLabel = `💎 ${course.cost.value}`;
        if (course.cost.type === 'real') costLabel = `💳 ${course.cost.value}원`;

        btn.innerHTML = `
            <div>
                <div style="font-weight:bold; font-size:1.1em;">${course.name}</div>
                <div style="font-size:0.8em; color:#aaa;">${course.description}</div>
            </div>
            <div style="font-weight:bold; color:var(--accent-orange);">${costLabel}</div>
        `;

        btn.onclick = () => {
            let targetId = null;
            try {
                const saved = JSON.parse(localStorage.getItem('lobbyCharacter'));
                if (saved) targetId = saved.instanceId;
            } catch (e) { }

            if (!targetId && game.creatureManager.owned.length > 0) {
                targetId = game.creatureManager.owned[0].instanceId;
            }

            if (targetId) {
                game.dateManager.goOnDate(course.id, targetId);
                modal.style.display = 'none';
            } else {
                alert("데이트할 크리처가 없습니다.");
            }
        };
        list.appendChild(btn);
    });
    modal.style.display = 'flex';
}

initDateSystem();

function createHeartEffect(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = '❤️';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
}

function updateResonanceUI(creature) {
    if (!creature) {
        const bar = document.getElementById('lobby-resonance-bar');
        if (bar) bar.style.display = 'none';
        return;
    }

    let bar = document.getElementById('lobby-resonance-bar');
    if (!bar) {
        bar = document.createElement('div');
        bar.id = 'lobby-resonance-bar';
        bar.innerHTML = `<div class='resonance-heart'>❤️</div>
            <div style='font-size:0.8rem; color:white; font-weight:bold; margin-bottom:2px; text-shadow:0 0 4px black;' id='resonance-text'></div>
            <div class='resonance-container'>
                <div class='resonance-fill' id='resonance-fill'></div>
            </div>
            <div style='font-size:0.7rem; color:#ccc; margin-top:2px; text-shadow:0 0 4px black;' id='resonance-ego'></div>`;
        const wrapper = document.getElementById('lobby-character-wrapper');
        if (wrapper) wrapper.appendChild(bar);
    }
    bar.style.display = 'flex';

    const score = game.creatureManager.getResonanceScore(creature);
    const level = game.creatureManager.getAffectionLevel(creature);
    const levels = { 0: 100, 1: 300, 2: 1000, 3: 2000 };
    const max = levels[level] || 2000;
    const prevMax = level > 0 ? (levels[level - 1] || 0) : 0;
    let percent = (level === 3) ? 100 : Math.max(0, Math.min(100, ((score - prevMax) / (max - prevMax)) * 100));

    const labels = ['경계', '관심', '신뢰', '서약'];
    const colors = ['#9e9e9e', '#66bb6a', '#f48fb1', '#ad1457'];

    bar.querySelector('#resonance-text').innerText = `${labels[level]} (Lv.${level})`;
    bar.querySelector('#resonance-text').style.color = colors[level];
    bar.querySelector('#resonance-fill').style.width = `${percent}%`;
    bar.querySelector('#resonance-ego').innerText = `🧠 Ego: ${creature.def.ego || 'Normal'}`;
}

// [Modular Coupon System]
import { CouponSystem } from './systems/CouponSystem.js';

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const couponSystem = new CouponSystem(window.game);
        couponSystem.init();
    }, 500);
});
