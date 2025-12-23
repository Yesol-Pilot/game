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

// =========================================================
// [Resonance V3] Lobby Interaction System
// =========================================================

function updateLobbyCharacter() {
    const img = document.getElementById('lobby-character-img');
    const nameEl = document.getElementById('lobby-character-name');
    if (!img) return;

    // 1. Load Selection
    let creature = null;
    try {
        const saved = JSON.parse(localStorage.getItem('lobbyCharacter'));
        if (saved && saved.instanceId) {
            creature = game.creatureManager.getCreatureById(saved.instanceId);
        }
    } catch (e) { console.error(e); }

    // Fallback logic
    if (!creature) {
        const team = game.deckManager.getActiveTeam();
        if (team && team[0]) creature = team[0];
    }
    if (!creature && game.creatureManager.owned.length > 0) {
        const sorted = [...game.creatureManager.owned].sort((a, b) => b.def.rarity - a.def.rarity);
        creature = sorted[0];
    }

    if (creature) {
        // [Resonance V3] Image Swap Logic
        const level = game.creatureManager.getAffectionLevel(creature);

        // Secret(3) > Level > Default
        if (level >= 3 && creature.def.images && creature.def.images.secret) {
            img.src = creature.def.images.secret;
        } else if (creature.def.images && creature.def.images[level]) {
            img.src = creature.def.images[level];
        } else {
            img.src = creature.def.image;
        }

        if (nameEl) nameEl.innerText = `${creature.def.name} (Lv.${creature.level})`;

        localStorage.setItem('lobbyCharacter', JSON.stringify({
            instanceId: creature.instanceId,
            image: img.src,
            name: creature.def.name
        }));

        // Update UI
        setTimeout(() => updateResonanceUI(creature), 50);
    }
}

function initLobbyInteraction() {
    const img = document.getElementById('lobby-character-img');
    if (!img) {
        console.warn('[Touch] lobby-character-img not found');
        return;
    }

    img.onclick = (e) => {
        console.log('[Touch] Image clicked');

        let creature = null;

        // 1. Try to get saved lobby character
        try {
            const saved = JSON.parse(localStorage.getItem('lobbyCharacter'));
            if (saved && saved.instanceId) {
                creature = game.creatureManager.getCreatureById(saved.instanceId);
                console.log('[Touch] Found saved creature:', creature?.def?.name);
            }
        } catch (err) {
            console.warn('[Touch] Error parsing lobbyCharacter:', err);
        }

        // 2. Fallback: Use first owned creature
        if (!creature) {
            const owned = game.creatureManager.owned;
            if (owned && owned.length > 0) {
                creature = owned[0];
                console.log('[Touch] Fallback to first owned:', creature?.def?.name);
            }
        }

        if (!creature) {
            console.warn('[Touch] No creature available for interaction');
            return;
        }


        const rect = img.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const h = rect.height;
        let part = 'special';

        if (y < h * 0.25) part = 'head';
        else if (y < h * 0.55) part = 'chest';
        else part = 'legs';

        const bubble = document.getElementById('lobby-speech-bubble');

        // [Resonance V3] Touch Logic
        const level = game.creatureManager.getAffectionLevel(creature);
        const lines = creature.def.lines || {};
        let text = lines.normal || "...";
        let isRejected = false;

        // 1. 거부 판정 (Lv.0 & Head 제외 터치)
        if (level === 0 && (part === 'chest' || part === 'legs')) {
            isRejected = true;
            text = lines[`touch_${part}_reject`] || lines.touch_reject || "가까이 오지 마.";
        }

        // 2. 호감도 상승 (거부 아님)
        const now = Date.now();
        if (!isRejected && (!creature._lastTouchTime || now - creature._lastTouchTime > 1000)) {
            creature._lastTouchTime = now;

            let bonus = (level >= 2) ? 1 : 0; // Lv.2+ Bonus
            game.creatureManager.increaseAffection(creature.instanceId, 1 + bonus);

            createHeartEffect(e.clientX, e.clientY);
            if (bonus > 0) setTimeout(() => createHeartEffect(e.clientX + 30, e.clientY - 30), 200);

            updateResonanceUI(creature);

            // Safety check for playSound
            if (typeof window.game.playSound === 'function') {
                window.game.playSound('touch_soft');
            }
        } else if (isRejected) {
            if (typeof window.game.playSound === 'function') {
                window.game.playSound('touch_reject');
            }
        }

        // 3. Animation
        if (isRejected) {
            img.className = 'touch-react-chest'; // Reuse shake
            img.style.filter = "grayscale(1) brightness(0.8)";
            setTimeout(() => img.style.filter = "none", 500);
        } else {
            img.className = '';
            void img.offsetWidth;
            img.className = `touch-react-${part}`;
        }
        setTimeout(() => img.className = '', 500);

        // 4. Dialogue logic
        if (!isRejected) {
            if (level >= 2 && lines[`touch_${part}_love`]) {
                text = lines[`touch_${part}_love`];
            } else {
                if (part === 'head') text = lines.touch_head || text;
                else if (part === 'chest') text = lines.touch_chest || lines.touch_special || text;
                else if (part === 'legs') text = lines.touch_legs || lines.touch_special || text;
            }
        }

        // 5. Display Bubble
        if (bubble) {
            const textEl = document.getElementById('lobby-speech-text');
            if (textEl) textEl.innerText = text;
            else bubble.innerText = text;

            bubble.classList.add('active');

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
            window.bubbleTimeout = setTimeout(() => {
                bubble.classList.remove('active');
            }, 3000);
        }
    };
}

// [Date System UI]
function initDateSystem() {
    const btnDate = document.getElementById('btn-lobby-date');
    if (btnDate) {
        btnDate.addEventListener('click', () => {
            openDateModal();
        });
    }
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
            // Get current lobby character
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

// Call init
initDateSystem();

function createHeartEffect(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.position = 'fixed';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
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

    let percent = 0;
    if (level === 3) {
        percent = 100;
    } else {
        percent = Math.max(0, Math.min(100, ((score - prevMax) / (max - prevMax)) * 100));
    }

    const labels = ['경계', '관심', '신뢰', '서약'];
    const colors = ['#9e9e9e', '#66bb6a', '#f48fb1', '#ad1457'];

    bar.querySelector('#resonance-text').innerText = `${labels[level]} (Lv.${level})`;
    bar.querySelector('#resonance-text').style.color = colors[level];
    bar.querySelector('#resonance-fill').style.width = `${percent}%`;
    bar.querySelector('#resonance-ego').innerText = `🧠 Ego: ${creature.def.ego || 'Normal'}`;
}

// =========================================
// 쿠폰 코드 시스템
// =========================================
const COUPON_CODES = {
    'YESOL2025': {
        type: 'creatures',
        description: 'UR/SSR/SR 크리처 전체 20마리',
        creatures: [
            // UR (7개)
            'god_zeus', 'time_lord_chronos', 'god_odin', 'dragon_ancient', 'void_emperor', 'dragon_chaos', 'creator_gaia',
            // SSR (5개)
            'angel_arch', 'wolf_fenrir', 'phoenix_eternal', 'demon_king', 'dragon_drake',
            // SR (8개)
            'titan_atlas', 'valkyrie', 'giant_hill', 'fox_nine', 'vampire_lord', 'kraken_baby', 'chimera_beast'
        ]
    },
    'GOLDRICH': {
        type: 'gold',
        description: '골드 100,000',
        amount: 100000
    },
    'GEMMASTER': {
        type: 'gem',
        description: '젬 500',
        amount: 500
    },
    'EVO_TEST': {
        type: 'evolution_test',
        description: '진화 테스트용 미호 세트 (5성 N + 만렙 SR)'
    }
};

function initCouponSystem() {
    const btn = document.getElementById('btn-redeem-coupon');
    const input = document.getElementById('coupon-code-input');
    const result = document.getElementById('coupon-result');

    if (!btn || !input) return;

    btn.onclick = async () => {
        const code = input.value.trim().toUpperCase();
        result.style.display = 'block';

        if (!code) {
            result.style.background = 'rgba(231, 76, 60, 0.2)';
            result.style.border = '1px solid #e74c3c';
            result.innerHTML = '<span style="color:#e74c3c;">❌ 코드를 입력해주세요.</span>';
            return;
        }

        const coupon = COUPON_CODES[code];
        if (!coupon) {
            result.style.background = 'rgba(231, 76, 60, 0.2)';
            result.style.border = '1px solid #e74c3c';
            result.innerHTML = '<span style="color:#e74c3c;">❌ 유효하지 않은 코드입니다.</span>';
            return;
        }

        // 보상 지급
        let rewards = [];

        if (coupon.type === 'gold') {
            game.resourceManager.addGold(coupon.amount);
            rewards.push(`💰 골드 +${coupon.amount.toLocaleString()}`);
        } else if (coupon.type === 'gem') {
            game.resourceManager.addGem(coupon.amount);
            rewards.push(`💎 젬 +${coupon.amount}`);
        } else if (coupon.type === 'creatures') {
            // Dynamic import for creature definitions
            const module = await import('./data/CreatureData.js');
            const cm = game.creatureManager;
            let addedCount = 0;

            coupon.creatures.forEach(id => {
                const def = module.CREATURE_DEF_MAP[id];
                if (!def) return;

                // 중복 체크 (이미 보유한 크리처는 스킵)
                const alreadyOwned = cm.owned.some(c => c.def.id === id);
                if (alreadyOwned) return;

                const newCreature = {
                    instanceId: cm.nextInstanceId++,
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
                cm.recalculateStats(newCreature);
                cm.owned.push(newCreature);
                addedCount++;
            });

            cm.emit('creatures:updated', cm.owned);
            rewards.push(`🎴 크리처 ${addedCount}마리 획득!`);
        } else if (coupon.type === 'evolution_test') {
            // 진화 테스트용 특별 로직
            const module = await import('./data/CreatureData.js');
            const cm = game.creatureManager;
            let msg = [];

            // 1. 아기여우 (5성, Lv.1) -> SR 진화용
            let baby = cm.owned.find(c => c.dataId === 'fox_baby');
            if (baby) {
                baby.star = 5;
                baby.level = 1;
                cm.recalculateStats(baby);
                msg.push(`기존 '아기여우'(보유중)를 5성 진화 가능 상태로 만들었습니다.`);
            } else {
                const babyDef = module.CREATURE_DEFS.find(c => c.id === 'fox_baby');
                if (babyDef) {
                    baby = {
                        instanceId: cm.nextInstanceId++,
                        dataId: babyDef.id,
                        def: babyDef,
                        level: 1,
                        exp: 0,
                        star: 5,
                        affection: 0,
                        battleCount: 0,
                        expeditionCount: 0,
                        acquiredAt: new Date(),
                        stats: {}
                    };
                    cm.recalculateStats(baby);
                    cm.owned.push(baby);
                    msg.push(`'아기여우'(5성) 신규 지급 완료!`);
                } else {
                    console.error("fox_baby definition not found!");
                    msg.push(`[오류] 아기여우 데이터를 찾을 수 없습니다.`);
                }
            }

            // 2. 여우요괴 (5성, Lv.50, 호감도3) -> 히든 UR 진화용
            let nine = cm.owned.find(c => c.dataId === 'fox_nine');
            if (nine) {
                nine.star = 5;
                nine.level = 50;
                nine.affection = 3;
                cm.recalculateStats(nine);
                msg.push(`기존 '여우요괴 미호'(보유중)를 UR 진화 가능 상태로 만들었습니다.`);
            } else {
                const nineDef = module.CREATURE_DEFS.find(c => c.id === 'fox_nine');
                if (nineDef) {
                    nine = {
                        instanceId: cm.nextInstanceId++,
                        dataId: nineDef.id,
                        def: nineDef,
                        level: 50,
                        exp: 0,
                        star: 5,
                        affection: 3,
                        battleCount: 0,
                        expeditionCount: 0,
                        acquiredAt: new Date(),
                        stats: {}
                    };
                    cm.recalculateStats(nine);
                    cm.owned.push(nine);
                    msg.push(`'여우요괴 미호'(5성/만렙) 신규 지급 완료!`);
                } else {
                    console.error("fox_nine definition not found!");
                    msg.push(`[오류] 여우요괴 데이터를 찾을 수 없습니다.`);
                }
            }

            cm.emit('creatures:updated', cm.owned);
            rewards.push(`🧪 [테스트] ${msg.join('<br>')}`);
        }

        game.save();

        // 결과 표시
        result.style.background = 'rgba(46, 204, 113, 0.2)';
        result.style.border = '1px solid #2ecc71';
        result.innerHTML = `
            <div style="color:#2ecc71; font-weight:bold; margin-bottom:10px;">✅ 코드 사용 완료!</div>
            <div style="color:#fff;">${rewards.join('<br>')}</div>
        `;
        input.value = '';
    };

    // 시스템 모달 탭 전환 (쿠폰 탭 포함)
    document.querySelectorAll('.system-tab').forEach(tab => {
        tab.onclick = () => {
            // 모든 탭 비활성화
            document.querySelectorAll('.system-tab').forEach(t => {
                t.style.color = '#888';
                t.style.borderBottom = '2px solid transparent';
            });
            // 클릭한 탭 활성화
            tab.style.color = 'white';
            tab.style.borderBottom = '2px solid var(--accent-cyan)';

            // 뷰 전환
            const tabName = tab.dataset.tab;
            document.getElementById('view-notice').style.display = tabName === 'notice' ? 'block' : 'none';
            document.getElementById('view-coupon').style.display = tabName === 'coupon' ? 'block' : 'none';
            document.getElementById('view-contact').style.display = tabName === 'contact' ? 'block' : 'none';
        };
    });
}

// 시스템 모달 열기 연결
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initCouponSystem, 500);
});
