import Game from './core/Game.js?v=skip_fix_css';
import BattleScene from './scenes/BattleScene.js'; // [NEW]
import SummonScene from './scenes/SummonScene.js'; // [Phase 3]
import { EXPEDITIONS } from './data/ExpeditionData.js';
import { FACILITIES } from './data/FacilityData.js';
import { getRequiredExp } from './data/LevelData.js';
import { LangManager } from './managers/LangManager.js';
import { CREATURE_DEFS } from './data/CreatureData.js'; // [NEW]

// [Global Data Init]
window.CREATURE_TEMPLATES = {};
CREATURE_DEFS.forEach(c => {
    window.CREATURE_TEMPLATES[c.id] = c;
});


document.addEventListener('DOMContentLoaded', () => {
    const game = Game.getInstance();
    window.lang = new LangManager(); // Init I18n

    // UI 요소 캐싱
    const ui = {
        saveControls: document.getElementById('save-controls'),
        btnManualSave: document.getElementById('btn-manual-save'),
        btnReset: document.getElementById('btn-reset-game'),

        // [Filters]
        sortOrder: document.getElementById('sort-order'),
        filterRarity: document.getElementById('filter-rarity'),
        filterElement: document.getElementById('filter-element'),

        creatureList: document.getElementById('creature-list'),
        detailPanel: document.getElementById('detail-panel'),
        logContent: document.getElementById('log-content'),

        // 소환 관련
        btnNormal: document.getElementById('btn-normal-summon'),
        btnPremium: document.getElementById('btn-premium-summon'),
        devFill: document.getElementById('devFillResources'),

        // [Auto Synth]
        btnAutoCompose: document.getElementById('btn-auto-compose'),

        // 탭 검색
        tabHome: document.getElementById('tab-home'), // [NEW]
        layoutContainer: document.getElementById('layout-container'), // [NEW] (Main Dashboard)
        tabSummon: document.getElementById('tab-summon'),
        tabExpedition: document.getElementById('tab-expedition'),
        tabResearch: document.getElementById('tab-research'),
        tabMission: document.getElementById('tab-mission'),
        tabShop: document.getElementById('tab-shop'),
        tabTeam: document.getElementById('tab-team'), // [NEW] Added missing cache
        tabBattle: document.getElementById('tab-battle'), // [NEW]

        contentSummon: document.getElementById('content-summon'),
        contentExpedition: document.getElementById('content-expedition'),
        contentResearch: document.getElementById('content-research'),
        contentMission: document.getElementById('content-mission'),
        contentShop: document.getElementById('content-shop'),
        contentTeam: document.getElementById('content-team'), // [NEW] Added missing cache
        contentBattle: document.getElementById('content-battle'), // [NEW]

        // 탐사 관련
        expeditionList: document.getElementById('expedition-list'),
        activeExpeditionList: document.getElementById('active-expedition-list'),

        // 연구 관련
        facilityList: document.getElementById('facility-list'),

        // [Stage UI]
        btnPrevStage: document.getElementById('btn-prev-stage'),
        btnNextStage: document.getElementById('btn-next-stage'),
        btnStartStage: document.getElementById('btn-start-stage'),
        stageTitle: document.getElementById('stage-title'),
        stageInfo: document.getElementById('stage-info'),
        stageRewards: document.getElementById('stage-rewards'),

        // 미션 관련
        dailyQuestList: document.getElementById('daily-quest-list'),
        achievementList: document.getElementById('achievement-list'),

        // 상점 관련 [NEW]
        tabShop: document.getElementById('tab-shop'),
        contentShop: document.getElementById('content-shop'),
        shopList: document.getElementById('shop-list'),
        adBanner: document.getElementById('ad-banner-area'),

        // 저장 관련
        btnSave: document.getElementById('btn-manual-save'),
        btnSave: document.getElementById('btn-manual-save'),
        btnReset: document.getElementById('btn-reset-game'),

        // Battle
        // Battle
        btnStartBattle: document.getElementById('btn-start-battle'),
        pvpFriendCode: document.getElementById('pvp-friend-code'), // [NEW]
        btnStartPvP: document.getElementById('btn-start-pvp') // [NEW]
    };
    // [DEBUG] Check binding
    const missing = [];
    if (!ui.tabHome) missing.push('tabHome');
    if (!ui.layoutContainer) missing.push('layoutContainer');
    if (!ui.tabSummon) missing.push('tabSummon');
    if (!ui.contentSummon) missing.push('contentSummon');

    if (missing.length > 0) {
        alert(`[CRITICAL UI ERROR] Missing elements: ${missing.join(', ')}`);
        console.error(`Missing:`, missing);
    } else {
        console.log("UI Binding Complete. All tabs found.");
        // alert("UI Ready. Try clicking tabs."); // Optional: Uncomment if needed
    }

    function addLog(msg, type = "normal") {
        const time = new Date().toLocaleTimeString();
        let prefix = "";
        if (type === "expedition") prefix = "[탐사] ";
        if (type === "facility") prefix = "[연구] ";
        if (type === "mission") prefix = "[미션] ";

        const div = document.createElement('div');
        div.innerHTML = `<span style="color:#888">[${time}]</span> ${prefix}${msg}`;
        ui.logContent.prepend(div);
    }

    // ----------------------------------------------------
    // [Battle Scene Init]
    // ----------------------------------------------------
    // ----------------------------------------------------
    // [Battle Scene Init]
    // ----------------------------------------------------
    const battleScene = new BattleScene(game);
    // Re-query button just in case cache is stale or order matters
    const btnStartBattleReal = document.getElementById('btn-start-battle');
    if (btnStartBattleReal) {
        btnStartBattleReal.addEventListener('click', () => {
            console.log("Battle Start Button Clicked");
            game.battleManager.startBattle('dungeon_01');
        });
    }

    // [PvP Logic]
    const btnStartPvPReal = document.getElementById('btn-start-pvp');
    if (btnStartPvPReal) {
        btnStartPvPReal.addEventListener('click', () => {
            const code = document.getElementById('pvp-friend-code').value;
            if (!code) {
                alert("친구 코드를 입력해주세요!");
                return;
            }
            game.battleManager.startPvP(code);
        });
    }

    // [PvP Code Gen] [NEW]
    const btnGetCode = document.getElementById('btn-get-my-code');
    const displayCode = document.getElementById('my-code-display');
    if (btnGetCode && displayCode) {
        btnGetCode.addEventListener('click', () => {
            const user = game.authManager.user || { username: 'Unknown' };
            const topCreature = game.creatureManager.owned[0];
            const cName = topCreature ? topCreature.def.name : 'Slime';
            const code = `PVP-${user.username}-${cName}-${Date.now().toString().slice(-4)}`;
            displayCode.innerText = code;
            displayCode.value = code; // for input

            // Clipboard
            navigator.clipboard.writeText(code).then(() => {
                alert(`팀 코드가 복사되었습니다!\n${code}`);
            }).catch(() => {
                // Fallback
            });
        });
    }

    // [New] Logout Logic
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            if (confirm("로그아웃 하시겠습니까?")) {
                game.authManager.logout();
                location.reload();
            }
        });
    }

    // ----------------------------------------------------
    // [Custom Modal Logic]
    const modalOverlay = document.getElementById('custom-modal-overlay');
    const modalMsg = document.getElementById('custom-modal-msg');
    const btnModalYes = document.getElementById('btn-modal-yes');
    const btnModalNo = document.getElementById('btn-modal-no');

    function showConfirm(message, onYes) {
        if (!modalOverlay) {
            // Fallback
            if (confirm(message)) onYes();
            return;
        }
        modalMsg.innerText = message;
        modalOverlay.style.display = 'flex';

        // Clean previous listeners (simple way: clone node or one-time handler)
        // Here using simple onclick assignment for single active modal
        btnModalYes.onclick = () => {
            modalOverlay.style.display = 'none';
            onYes();
        };
        btnModalNo.onclick = () => {
            modalOverlay.style.display = 'none';
        };
    }

    // ----------------------------------------------------
    // [Auth Terminal Logic]
    // ----------------------------------------------------
    const DIRECTOR_PERSONAS = {
        'director_vesper': { img: "images/creature_valkyrie.png" },
        'director_kael': { img: "images/creature_god_zeus.png" },
        'director_zero': { img: "images/creature_void_emperor.png" },
        'director_eos': { img: "images/creature_creator_gaia.png" }
    };

    const authUI = {
        overlay: document.getElementById('login-overlay'),
        card: document.getElementById('auth-card'),
        tabLogin: document.getElementById('tab-login-mode'),
        tabSignup: document.getElementById('tab-signup-mode'),
        inputUser: document.getElementById('auth-username'),
        inputPass: document.getElementById('auth-password'),
        inputConfirm: document.getElementById('auth-confirm-password'),
        btnAction: document.getElementById('btn-auth-action'),
        msgBox: document.getElementById('auth-message'),
        avatarOptions: document.querySelectorAll('.avatar-option'),
        avatarPreview: document.getElementById('avatar-preview-img'),
        // New Info Fields
        personaName: document.getElementById('persona-name'),
        personaTitle: document.getElementById('persona-title'),
        personaBio: document.getElementById('persona-bio')
    };

    let authMode = 'login'; // 'login' or 'signup'
    let selectedAvatar = 'director_vesper';

    // Helper: Update Persona UI with Translation
    function updatePersonaVisuals() {
        const persona = DIRECTOR_PERSONAS[selectedAvatar];
        if (!persona) return;

        // Image
        authUI.avatarPreview.src = persona.img;

        // Text (i18n)
        // keys: director.vesper.name, director.vesper.desc...
        const keyBase = selectedAvatar.replace('_', '.'); // director_vesper -> director.vesper

        if (authUI.personaName) {
            authUI.personaName.innerText = window.lang.t(`${keyBase}.name`);
            authUI.personaTitle.innerText = window.lang.t(`${keyBase}.title`);
            // Bio/Desc
            const bio = window.lang.t(`${keyBase}.bio` || `${keyBase}.title`); // Bio might be missing in lang, use title fallback
            const desc = window.lang.t(`${keyBase}.desc`);
            authUI.personaBio.innerHTML = `<span style="color:#58a6ff">"${bio}"</span><br><br><span style="font-size:0.8em; color:#888">${desc}</span>`;
        }
    }

    // 1. Avatar Selection
    authUI.avatarOptions.forEach(img => {
        img.addEventListener('click', () => {
            authUI.avatarOptions.forEach(o => o.classList.remove('selected'));
            img.classList.add('selected');
            selectedAvatar = img.dataset.id;
            updatePersonaVisuals();
        });
    });

    // Initial Render
    // We defer this until DOM is fully loaded or just call it if script is module (defer by default)
    // But we need to ensure Lang is set first.
    window.addEventListener('DOMContentLoaded', () => {
        window.lang.setLanguage('kr'); // Default to KR
        updatePersonaVisuals();

        // Lang Toggle Logic
        const btnLang = document.getElementById('btn-lang-toggle');
        const langDisplay = document.getElementById('lang-display');
        if (btnLang) {
            btnLang.addEventListener('click', () => {
                const newLang = window.lang.currentLang === 'kr' ? 'en' : 'kr';
                window.lang.setLanguage(newLang);
                if (langDisplay) langDisplay.innerText = newLang.toUpperCase();

                // Refresh dynamic Persona UI
                updatePersonaVisuals();

                // Refresh Button Text (Login/Register logic needs re-run or dynamic handling)
                // Actually auth buttons have data-i18n now, so applyToDOM handles it?
                // Wait, auth button text CHANGES based on mode... applyToDOM might overwrite logic?
                // YES. applyToDOM sets textContent. 
                // Fix: Update setAuthMode to re-apply text or use i18n keys dynamically.
                setAuthMode(authMode);
            });
        }
    });

    // 2. Mode Switching
    if (authUI.tabLogin && authUI.tabSignup) {
        authUI.tabLogin.onclick = () => setAuthMode('login');
        authUI.tabSignup.onclick = () => setAuthMode('signup');
    }

    function setAuthMode(mode) {
        authMode = mode;
        authUI.msgBox.innerText = "";

        if (mode === 'login') {
            authUI.tabLogin.classList.add('active');
            // Style hack for inactive tab
            authUI.tabLogin.style.background = 'transparent';
            authUI.tabLogin.style.color = 'white';

            authUI.tabSignup.classList.remove('active');
            authUI.tabSignup.style.background = 'rgba(255,255,255,0.05)';
            authUI.tabSignup.style.color = '#888';

            authUI.inputConfirm.style.display = 'none';
            // [i18n] Update Button Text
            authUI.btnAction.innerText = window.lang.t("auth.btn_login");
            authUI.btnAction.classList.remove('danger');
        } else {
            authUI.tabSignup.classList.add('active');
            authUI.tabSignup.style.background = 'transparent';
            authUI.tabSignup.style.color = 'white';

            authUI.tabLogin.classList.remove('active');
            authUI.tabLogin.style.background = 'rgba(255,255,255,0.05)';
            authUI.tabLogin.style.color = '#888';

            authUI.inputConfirm.style.display = 'block';
            // [i18n] Update Button Text
            authUI.btnAction.innerText = window.lang.t("auth.btn_signup");
            authUI.btnAction.classList.add('danger'); // Visual distinction
        }
    }

    // 3. Action Logic
    if (authUI.btnAction) {
        authUI.btnAction.addEventListener('click', async () => {
            const username = authUI.inputUser.value.trim();
            const password = authUI.inputPass.value.trim();

            if (!username || !password) {
                authUI.msgBox.innerText = window.lang.t("auth.msg_missing");
                return;
            }

            if (authMode === 'login') {
                // LOGIN
                const res = game.authManager.login(username, password);
                if (res.success) {
                    authUI.overlay.style.display = 'none';
                    game.startMainGame();
                } else {
                    authUI.msgBox.innerText = `ERROR: ${res.message}`;
                }
            } else {
                // SIGNUP
                const confirm = authUI.inputConfirm.value.trim();
                if (password !== confirm) {
                    authUI.msgBox.innerText = window.lang.t("auth.msg_mismatch");
                    return;
                }
                const res = game.authManager.signup(username, password, selectedAvatar);
                if (res.success) {
                    alert(window.lang.t("auth.welcome", { name: username }));
                    authUI.overlay.style.display = 'none';
                    game.startMainGame();
                } else {
                    authUI.msgBox.innerText = `오류: ${res.message}`;
                }
            }
        });
    }

    // [Logout Logic] - Already handled above (Line 150)
    // ----------------------------------------------------

    // ----------------------------------------------------
    // [Game Init]
    // ----------------------------------------------------
    game.init();

    // Auto-Login Check handled in Game.init -> authManager
    if (game.authManager.isLoggedIn()) {
        if (authUI.overlay) authUI.overlay.style.display = 'none';
    }

    // [탐사 리스트 렌더링]
    function renderExpeditionList() {
        if (!ui.expeditionList) return;
        ui.expeditionList.innerHTML = '';

        EXPEDITIONS.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'expedition-card';
            div.style.cssText = 'padding:15px; margin-bottom:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:8px; cursor:pointer;';

            div.innerHTML = `
                <h4 style="margin:0 0 5px 0; color:var(--accent-cyan);">${exp.name}</h4>
                <p style="margin:5px 0; font-size:0.9em; color:var(--text-secondary);">⏱️ ${exp.durationSec}초 | ⚡ ${exp.energyCost} Energy</p>
                <p style="margin:5px 0; font-size:0.85em; color:#f1c40f;">보상: ${exp.baseGoldReward} Gold, ${exp.baseExpReward} Exp</p>
            `;

            div.onclick = () => {
                // Simple: Pick first available creature
                const availableCreature = game.creatureManager.owned.find(c => !c.isOnExpedition);
                if (!availableCreature) {
                    addLog('[탐사] 보낼 수 있는 크리처가 없습니다.');
                    return;
                }
                const success = game.expeditionManager.startExpedition(availableCreature.instanceId, exp.id);
                if (success) {
                    addLog(`[탐사] ${availableCreature.def.name}을(를) ${exp.name}에 파견했습니다!`);
                }
            };

            ui.expeditionList.appendChild(div);
        });
    }

    // [연구 리스트 렌더링]
    function renderFacilityList() {
        if (!ui.facilityList) return;
        ui.facilityList.innerHTML = '';

        FACILITIES.forEach(fac => {
            const currentLevel = game.facilityManager.getFacilityLevel(fac.id);
            const maxLevel = fac.maxLevel || 10;
            const isMaxed = currentLevel >= maxLevel;

            const div = document.createElement('div');
            div.className = 'facility-card';
            div.style.cssText = 'padding:15px; margin-bottom:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:8px;';

            const nextCost = fac.baseCost * Math.pow(1.5, currentLevel);

            div.innerHTML = `
                <h4 style="margin:0 0 5px 0; color:var(--accent-cyan);">${fac.name} <span style="color:#888;">[Lv.${currentLevel}]</span></h4>
                <p style="margin:5px 0; font-size:0.85em; color:var(--text-secondary);">${fac.description}</p>
                <p style="margin:5px 0; font-size:0.9em; color:#f1c40f;">업그레이드: ${Math.floor(nextCost)} Gold</p>
                <button class="cyber-btn small" ${isMaxed ? 'disabled style="opacity:0.5;"' : ''}>UPGRADE</button>
            `;

            if (!isMaxed) {
                div.querySelector('button').onclick = () => {
                    const success = game.facilityManager.tryUpgrade(fac.id);
                    if (success) {
                        addLog(`[연구] ${fac.name} 업그레이드 완료!`);
                        renderFacilityList(); // Refresh
                    } else {
                        addLog('[연구] 골드가 부족합니다.');
                    }
                };
            }

            ui.facilityList.appendChild(div);
        });
    }

    // ----------------------------------------------------
    // [미션 렌더링]
    // ----------------------------------------------------
    function renderMissionList() {
        // Daily Quests
        if (ui.dailyQuestList) {
            ui.dailyQuestList.innerHTML = '';
            const dailyQuests = game.questManager.getDailyQuests();

            if (dailyQuests.length === 0) {
                ui.dailyQuestList.innerHTML = '<p style="color:#888; padding:10px;">사용 가능한 일일 임무가 없습니다.</p>';
            } else {
                dailyQuests.forEach(quest => {
                    const div = document.createElement('div');
                    div.style.cssText = 'padding:10px; margin-bottom:8px; background:rgba(255,255,255,0.05); border-left:3px solid var(--accent-cyan); border-radius:4px;';

                    const progress = quest.current || 0;
                    const goal = quest.goal || 1;
                    const completed = progress >= goal;

                    div.innerHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <div style="font-weight:bold; color:var(--accent-cyan);">${quest.name}</div>
                                <div style="font-size:0.85em; color:var(--text-secondary); margin-top:3px;">${quest.description}</div>
                            </div>
                            <div style="text-align:right;">
                                <div style="font-size:0.9em; color:${completed ? '#2ecc71' : '#f1c40f'};">${progress}/${goal}</div>
                                ${completed ? '<button class="cyber-btn small" style="margin-top:5px;">CLAIM</button>' : ''}
                            </div>
                        </div>
                    `;

                    if (completed) {
                        div.querySelector('button').onclick = () => {
                            game.questManager.claimQuest(quest.id);
                            renderMissionList();
                            addLog(`[임무] ${quest.name} 보상을 받았습니다!`);
                        };
                    }

                    ui.dailyQuestList.appendChild(div);
                });
            }
        }

        // Achievements
        if (ui.achievementList) {
            ui.achievementList.innerHTML = '';
            const achievements = game.questManager.getAchievements();

            if (achievements.length === 0) {
                ui.achievementList.innerHTML = '<p style="color:#888; padding:10px;">업적이 아직 없습니다.</p>';
            } else {
                achievements.forEach(ach => {
                    const div = document.createElement('div');
                    div.style.cssText = 'padding:10px; margin-bottom:8px; background:rgba(255,255,255,0.03); border-left:3px solid var(--accent-magenta); border-radius:4px;';

                    const progress = ach.current || 0;
                    const goal = ach.goal || 1;
                    const completed = progress >= goal;

                    div.innerHTML = `
                        <div style="display:flex; justify-content:space-between;">
                            <div>
                                <div style="font-weight:bold; color:var(--accent-magenta);">🏆 ${ach.name}</div>
                                <div style="font-size:0.85em; color:var(--text-secondary); margin-top:3px;">${ach.description}</div>
                            </div>
                            <div style="text-align:right; font-size:0.9em; color:${completed ? '#2ecc71' : '#888'};">
                                ${progress}/${goal}
                            </div>
                        </div>
                    `;

                    ui.achievementList.appendChild(div);
                });
            }
        }
    }

    // ----------------------------------------------------
    // [배틀 - 스테이지 UI]
    // ----------------------------------------------------
    function renderStageUI() {
        if (!ui.stageTitle || !game.stageManager) return;

        const currentStage = game.stageManager.getCurrentStage();
        if (!currentStage) {
            ui.stageTitle.textContent = 'No Stage Available';
            return;
        }

        ui.stageTitle.textContent = `Stage ${currentStage.id}: ${currentStage.name}`;
        if (ui.stageInfo) {
            ui.stageInfo.textContent = currentStage.description || '적과 조우할 확률이 높습니다.';
        }
        if (ui.stageRewards) {
            ui.stageRewards.textContent = `보상: ${currentStage.goldReward || 100} Gold, ${currentStage.expReward || 50} Exp`;
        }
    }

    // ----------------------------------------------------
    // [팀 관리 - 덱 UI]
    // ----------------------------------------------------
    function renderDeckUI() {
        // Render Deck Tabs State
        const deckButtons = document.querySelectorAll('.deck-tab');
        deckButtons.forEach((btn, idx) => {
            btn.classList.toggle('active', idx === game.deckManager.currentEditingDeck);
        });

        // Render Active Deck Label
        if (document.getElementById('label-active-deck')) {
            const deckNames = ['Main Deck', 'Sub Deck 1', 'Sub Deck 2'];
            document.getElementById('label-active-deck').textContent = `현재: ${deckNames[game.deckManager.currentEditingDeck] || 'Unknown'}`;
        }

        // Render Deck Slots
        renderDeckSlots();

        // Render Deck Pool
        const deckPool = document.getElementById('deck-pool');
        if (deckPool) {
            deckPool.innerHTML = '';
            const availableCreatures = game.creatureManager.owned.filter(c => !c.isLocked);

            if (availableCreatures.length === 0) {
                deckPool.innerHTML = '<p style="color:#888; text-align:center; padding:20px;">보유 크리처가 없습니다.</p>';
            } else {
                availableCreatures.forEach(c => {
                    const div = document.createElement('div');
                    div.className = 'creature-card-mini';
                    div.style.cssText = 'cursor:pointer; position:relative;';
                    div.innerHTML = `
                        <img src="${c.def.image}" style="width:100%; height:100%; object-fit:cover;">
                        <div style="position:absolute; bottom:0; width:100%; background:rgba(0,0,0,0.7); color:#fff; font-size:0.7rem; padding:2px; text-align:center;">
                            ${c.def.name}
                        </div>
                    `;

                    div.onclick = () => {
                        const deckId = game.deckManager.currentEditingDeck;
                        const emptySlotIndex = game.deckManager.decks[deckId].indexOf(null);

                        if (emptySlotIndex !== -1) {
                            game.deckManager.setCreature(deckId, emptySlotIndex, c.instanceId);
                            renderDeckSlots();
                            addLog(`[덱] ${c.def.name}을(를) 슬롯 ${emptySlotIndex + 1}에 배치했습니다.`);
                        } else {
                            addLog('[덱] 덱이 가득 찼습니다!');
                        }
                    };

                    deckPool.appendChild(div);
                });
            }
        }
    }

    function renderDeckSlots() {
        const slotsContainer = document.getElementById('deck-slots');
        if (!slotsContainer) return;

        slotsContainer.innerHTML = '';

        const currentDeck = game.deckManager.decks[game.deckManager.currentEditingDeck] || [null, null, null, null, null];

        currentDeck.forEach((creatureId, slotIndex) => {
            const slot = document.createElement('div');
            slot.className = 'deck-slot';
            slot.style.cssText = 'width:80px; height:80px; border:2px solid #444; border-radius:8px; display:flex; align-items:center; justify-content:center; cursor:pointer; background:rgba(0,0,0,0.3);';

            if (creatureId) {
                const creature = game.creatureManager.getCreatureById(creatureId);
                if (creature) {
                    slot.innerHTML = `<img src="${creature.def.image}" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
                    slot.onclick = () => {
                        game.deckManager.setCreature(game.deckManager.currentEditingDeck, slotIndex, null);
                        renderDeckSlots();
                        addLog('[덱] 크리처를 제거했습니다.');
                    };
                } else {
                    slot.textContent = '?';
                }
            } else {
                slot.innerHTML = '<span style="font-size:2rem; color:#666;">+</span>';
            }

            slotsContainer.appendChild(slot);
        });
    }

    function renderPvPLobby() {
        const userList = document.getElementById('pvp-user-list');
        if (userList) {
            userList.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">온라인 사용자가 없습니다.</div>';
        }
    }

    // ----------------------------------------------------
    // [탭 로직] 
    // ----------------------------------------------------
    function switchTab(tabId) {
        // [Force Display Logic] - Direct Style Manipulation

        // 1. Hide ALL content
        const allContents = [
            ui.layoutContainer,
            ui.contentSummon, ui.contentExpedition, ui.contentResearch,
            ui.contentMission, ui.contentShop, ui.contentBattle, ui.contentTeam
        ];

        allContents.forEach(el => {
            if (el) {
                el.classList.remove('active');
                el.style.display = 'none'; // [FORCE HIDE]
            }
        });

        // 2. Deactivate Tabs
        const allTabs = [
            ui.tabHome,
            ui.tabSummon, ui.tabExpedition, ui.tabResearch,
            ui.tabMission, ui.tabShop, ui.tabBattle, ui.tabTeam
        ];
        allTabs.forEach(el => el && el.classList.remove('active'));

        // 3. Activate Target
        if (tabId === 'home') {
            if (ui.tabHome) ui.tabHome.classList.add('active');
            if (ui.layoutContainer) {
                ui.layoutContainer.classList.add('active');
                ui.layoutContainer.style.display = 'grid'; // [FORCE GRID]
            }
            // [FIX] 메인 허브로 돌아올 때 크리처 리스트 갱신
            renderCreatureList();
        } else if (tabId === 'summon') {
            ui.tabSummon.classList.add('active');
            ui.contentSummon.classList.add('active');
            ui.contentSummon.style.display = 'block'; // [FORCE BLOCK]
        } else if (tabId === 'expedition') {
            ui.tabExpedition.classList.add('active');
            ui.contentExpedition.classList.add('active');
            ui.contentExpedition.style.display = 'block';
            renderExpeditionList(); // [FIXED] Added missing render call
        } else if (tabId === 'research') {
            ui.tabResearch.classList.add('active');
            ui.contentResearch.classList.add('active');
            ui.contentResearch.style.display = 'block';
            renderFacilityList();
        } else if (tabId === 'mission') {
            ui.tabMission.classList.add('active');
            ui.contentMission.classList.add('active');
            ui.contentMission.style.display = 'block';
            renderMissionList();
        } else if (tabId === 'shop') {
            ui.tabShop.classList.add('active');
            ui.contentShop.classList.add('active');
            ui.contentShop.style.display = 'block';
            renderShop();
        } else if (tabId === 'team') {
            if (ui.tabTeam) ui.tabTeam.classList.add('active');
            if (ui.contentTeam) {
                ui.contentTeam.classList.add('active');
                ui.contentTeam.style.display = 'block';
            }
            if (typeof renderDeckUI === 'function') renderDeckUI();
            if (typeof renderDeckSlots === 'function') renderDeckSlots(); // [FIXED] Added explicit call

            // [UX] Deck Mode
            ui.creatureList.classList.add('mode-deck-select');
            renderCreatureList();
        } else if (tabId === 'battle') {
            if (ui.tabBattle) ui.tabBattle.classList.add('active');
            if (ui.contentBattle) {
                ui.contentBattle.classList.add('active');
                ui.contentBattle.style.display = 'block';
            }
            if (typeof renderPvPLobby === 'function') renderPvPLobby();
            if (typeof renderStageUI === 'function') renderStageUI();
        }

        // [Mode Cleanup]
        if (tabId !== 'team') {
            ui.creatureList.classList.remove('mode-deck-select');
            if (ui.creatureList.children.length > 0) renderCreatureList();
        }

        game.events.emit('ui:tabSwitched', tabId);
    }

    // Event Listeners
    if (ui.tabHome) ui.tabHome.addEventListener('click', () => switchTab('home'));
    if (ui.tabSummon) ui.tabSummon.addEventListener('click', () => switchTab('summon'));
    if (ui.tabExpedition) ui.tabExpedition.addEventListener('click', () => switchTab('expedition'));
    if (ui.tabResearch) ui.tabResearch.addEventListener('click', () => switchTab('research'));
    if (ui.tabMission) ui.tabMission.addEventListener('click', () => switchTab('mission'));
    if (ui.tabShop) ui.tabShop.addEventListener('click', () => switchTab('shop'));
    if (ui.tabTeam) ui.tabTeam.addEventListener('click', () => switchTab('team'));
    if (ui.tabBattle) ui.tabBattle.addEventListener('click', () => switchTab('battle'));

    // ----------------------------------------------------
    // [소환 로직]
    // ----------------------------------------------------
    ui.btnNormal.addEventListener('click', () => game.creatureManager.tryNormalSummon());
    ui.btnPremium.addEventListener('click', () => game.creatureManager.tryPremiumSummon());

    // [New] 10x Summon
    const btnNormal10 = document.getElementById('btn-normal-summon-10');
    const btnPremium10 = document.getElementById('btn-premium-summon-10');

    if (btnNormal10) {
        btnNormal10.addEventListener('click', () => {
            const res = game.creatureManager.summonBatch('normal');
            if (res.success) {
                // UI feedback handled by event 'summon:batch_result', but for now alert
                // Later: SummonScene
                addLog(`10+1 일반 소환 완료!`);
            }
        });
    }
    if (btnPremium10) {
        btnPremium10.addEventListener('click', () => {
            const res = game.creatureManager.summonBatch('premium');
            if (res.success) {
                addLog(`10+1 엘리트 소환 완료!`);
            }
        });
    }

    if (ui.devFill) {
        ui.devFill.addEventListener('click', () => {
            game.resourceManager.addGold(10000);
            game.resourceManager.addGem(100);
            game.resourceManager.addEnergy(100);
            addLog("치트 사용: 자원 충전 완료");
        });
    }

    game.creatureManager.on('summon:result', (creature) => {
        addLog(`소환 성공! [${creature.def.rarity}] ${creature.def.name}`);
        renderSummonResult(creature); // [NEW] 시각적 피드백
        renderCreatureList(); // [FIX] 보유 크리처 리스트 갱신
        game.save();
    });

    // [New] Helper for Summon Result
    function renderSummonResult(creature) {
        const resultBox = document.getElementById('summon-result');
        if (!resultBox) return;

        // 카드 스타일 재사용
        const card = document.createElement('div');
        const rarityColor = {
            'Normal': '#95a5a6', 'Unique': '#2ecc71', 'Rare': '#3498db',
            'Special': '#9b59b6', 'SR': '#e67e22', 'SSR': '#e74c3c', 'UR': '#f1c40f'
        }[creature.def.rarity] || '#fff';

        card.className = 'creature-card';
        card.style.border = `2px solid ${rarityColor}`;
        card.style.display = 'inline-block';
        card.style.margin = '10px';
        card.style.animation = 'fadeIn 0.5s ease-out'; // Simple fade in

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-grade" style="color:${rarityColor}">${creature.def.rarity}</div>
                <div class="card-img">
                     <img src="images/creatures/${creature.def.id}.png" 
                          onerror="this.src='images/creatures/default.png'" 
                          alt="${creature.def.name}" 
                          style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="card-name">${creature.def.name}</div>
            </div>
        `;

        resultBox.innerHTML = ''; // Clear previous
        resultBox.appendChild(card);

        // Play Sound Effect if available? (Later)
    }

    game.creatureManager.on('summon:failed', (data) => {
        addLog(`소환 실패: ${data.reason}`);
        alert(`소환 실패: ${data.reason}`);
    });

    // ----------------------------------------------------
    // [탐사 로직]
    // ----------------------------------------------------
    function renderExpeditionList() {
        ui.expeditionList.innerHTML = '';
        EXPEDITIONS.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'expedition-card';
            card.innerHTML = `
                <h4>${exp.name}</h4>
                <p>시간: ${exp.durationSec}초 / 에너지: ${exp.energyCost}</p>
                <p>보상: ${exp.baseGoldReward} G + 연구보너스</p>
                <button class="btn-start-exp" data-id="${exp.id}">탐사 보내기</button>
            `;
            ui.expeditionList.appendChild(card);
        });
        ui.expeditionList.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-start-exp')) {
                const expId = e.target.dataset.id;
                const selectedId = game.creatureManager.selectedId;
                if (!selectedId) {
                    alert("크리처를 선택해주세요.");
                    return;
                }
                game.expeditionManager.startExpedition(selectedId, expId);
            }
        });
    }

    function renderActiveExpeditions() {
        const list = game.expeditionManager.getActiveExpeditions();
        ui.activeExpeditionList.innerHTML = '';
        list.forEach(exp => {
            const now = Date.now();
            const remainSec = Math.max(0, Math.ceil((exp.endTime - now) / 1000));
            const div = document.createElement('div');
            div.className = 'active-expedition-item';
            div.innerHTML = `<span>${exp.creatureName} - ${exp.expeditionName}</span>
                             <span class="timer">남은 시간: 00:${String(remainSec).padStart(2, '0')}</span>`;
            ui.activeExpeditionList.appendChild(div);
        });
    }

    setInterval(() => {
        if (ui.activeExpeditionList.children.length > 0) renderActiveExpeditions();
    }, 1000);

    game.expeditionManager.on('expedition:started', (exp) => {
        addLog(`${exp.expeditionName} 시작`, "expedition");
        renderActiveExpeditions();
        game.save();
    });
    game.expeditionManager.on('expedition:completed', (exp) => {
        addLog(`${exp.expeditionName} 완료! 골드 +${exp.rewards.gold}`, "expedition");
        renderActiveExpeditions();
        game.save();
    });
    game.expeditionManager.on('expedition:error', (err) => alert(err.message));

    // ----------------------------------------------------
    // [연구 로직]
    // ----------------------------------------------------
    function renderFacilityList() {
        ui.facilityList.innerHTML = '';
        FACILITIES.forEach(def => {
            const level = game.facilityManager.getLevel(def.id);
            const cost = game.facilityManager.getUpgradeCost(def.id);
            const isMax = level >= def.maxLevel;

            let currentEffect = def.baseEffect + (def.effectPerLevel * level);
            let nextEffect = def.baseEffect + (def.effectPerLevel * (level + 1));

            let effectStr = `현재: +${currentEffect}`;
            if (!isMax) effectStr += ` → 다음: +${nextEffect}`;
            if (def.effectType === "gold_bonus_percent") effectStr += "%";

            const card = document.createElement('div');
            card.className = 'expedition-card';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between;">
                    <h4>${def.name} (Lv.${level}/${def.maxLevel})</h4>
                </div>
                <p>${def.description}</p>
                <p style="color: #27ae60; font-weight:bold;">${effectStr}</p>
                <button class="btn-upgrade" data-id="${def.id}" ${isMax ? 'disabled' : ''}>
                    ${isMax ? '최대 레벨' : `업그레이드 (${cost} G)`}
                </button>
            `;
            ui.facilityList.appendChild(card);
        });

        const buttons = ui.facilityList.querySelectorAll('.btn-upgrade');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                game.facilityManager.tryUpgrade(btn.dataset.id);
            });
        });
    }

    game.facilityManager.on('facility:upgraded', (data) => {
        const def = FACILITIES.find(f => f.id === data.id);
        addLog(`${def.name} 레벨업! (Lv.${data.level})`, "facility");
        renderFacilityList();
        game.save();
    });
    game.facilityManager.on('facility:error', (err) => alert(err.message));

    // ----------------------------------------------------
    // [미션 로직] - New
    // ----------------------------------------------------
    function renderMissionList() {
        const data = game.questManager.getViewModel();

        ui.dailyQuestList.innerHTML = '';
        data.dailies.forEach(q => {
            ui.dailyQuestList.appendChild(createQuestCard(q, true));
        });

        ui.achievementList.innerHTML = '';
        data.achievements.forEach(q => {
            ui.achievementList.appendChild(createQuestCard(q, false));
        });
    }

    function createQuestCard(quest, isDaily) {
        const div = document.createElement('div');
        div.className = 'expedition-card'; // 카드 스타일 재사용

        // 상태 처리
        let btnHtml = '';
        let statusClass = '';

        if (quest.claimed) {
            btnHtml = `<button disabled style="background:#888;">보상 수령 완료</button>`;
            statusClass = 'opacity: 0.6;';
        } else if (quest.completed) {
            btnHtml = `<button class="btn-claim" data-id="${quest.id}" data-type="${isDaily ? 'daily' : 'ach'}">보상 받기</button>`;
            div.style.border = "2px solid #f1c40f"; // 완료 강조
        } else {
            btnHtml = `<button disabled>진행 중 (${quest.progress} / ${quest.targetCount})</button>`;
        }

        const rewardText = [];
        if (quest.reward.gold) rewardText.push(`골드 +${quest.reward.gold}`);
        if (quest.reward.gem) rewardText.push(`젬 +${quest.reward.gem}`);

        div.innerHTML = `
            <div style="${statusClass}">
                <h4>${quest.title}</h4>
                <p>${quest.description}</p>
                <p style="color:blue;">보상: ${rewardText.join(', ')}</p>
                ${btnHtml}
            </div>
        `;

        // 이벤트 바인딩
        const btn = div.querySelector('.btn-claim');
        if (btn) {
            btn.onclick = () => {
                game.questManager.claimReward(quest.id, isDaily);
            };
        }

        return div;
    }

    // 미션 이벤트 구독
    game.questManager.on('quests:updated', () => {
        if (ui.tabMission.classList.contains('active')) {
            renderMissionList();
        }
    });

    game.questManager.on('quest:completed', (data) => {
        addLog(`[${data.type === 'daily' ? '미션' : '업적'}] ${data.def.title} 완료!`, "mission");
    });

    game.questManager.on('quests:claimed', (data) => {
        addLog(`보상을 수령했습니다.`, "mission");
        game.save();
    });


    // ----------------------------------------------------
    // [상점 로직] - New
    // ----------------------------------------------------
    // [Stage Mode Functions]
    function renderStageUI() {
        const stageMgr = game.stageManager;
        if (!stageMgr) return;

        // Use a temp property to track which stage is currently viewed (default to max)
        if (typeof game.viewingStageId === 'undefined') {
            game.viewingStageId = game.stageManager.getMaxStage();
        }

        const stageId = game.viewingStageId;
        const maxStage = game.stageManager.getMaxStage();
        // Since stage info is now dynamic, we use stageManager.getStageInfo directly which calls data.getStage
        const stageData = stageMgr.getStageInfo(stageId);

        if (!stageData) return;

        ui.stageTitle.innerText = stageData.name;
        // Display Recommended Power
        ui.stageInfo.innerHTML = `
            <div style="font-size:0.9em; margin-bottom:5px;">Enemy Lv.${stageData.enemies[0].level}</div>
            <div style="color:#e74c3c; font-weight:bold;">권장 전투력: ${stageData.recommendedPower.toLocaleString()}</div>
        `;
        ui.stageRewards.innerText = `💰 Clear Reward: ${stageData.rewardGold}g, ${stageData.rewardExp}xp`;

        // Button states - Allow going beyond 100 for Multiverse
        ui.btnPrevStage.disabled = (stageId <= 1);
        ui.btnNextStage.disabled = (stageId >= maxStage); // Can go forward if we've unlocked it

        ui.btnStartStage.innerText = `⚔️ ${stageData.name} 시작`;

        // Using opacity to visually indicate disabled state
        ui.btnPrevStage.style.opacity = ui.btnPrevStage.disabled ? 0.3 : 1;
        ui.btnNextStage.style.opacity = ui.btnNextStage.disabled ? 0.3 : 1;
    }

    // Stage Event Listeners
    if (ui.btnPrevStage) {
        ui.btnPrevStage.onclick = () => {
            if (game.viewingStageId > 1) {
                game.viewingStageId--;
                renderStageUI();
            }
        };
    }
    if (ui.btnNextStage) {
        ui.btnNextStage.onclick = () => {
            const max = game.stageManager.getMaxStage();
            if (game.viewingStageId < max) {
                game.viewingStageId++;
                renderStageUI();
            }
        };
    }
    if (ui.btnStartStage) {
        ui.btnStartStage.onclick = () => {
            const stageId = game.viewingStageId;
            game.battleManager.startStageBattle(stageId);
        };
    }

    // [Auto Advance Logic]
    game.events.on('battle:completed', (data) => {
        if (data.isWin && data.stageId) {
            // If we beat the stage we were looking at, move to next
            // Note: stageManager.unlockNextStage() happens in BattleManager.endBattle() BEFORE this event.
            // So maxStage is already updated.
            const max = game.stageManager.getMaxStage();
            if (data.stageId === game.viewingStageId && game.viewingStageId < max) {
                game.viewingStageId++;
                addLog(`[스테이지] 다음 단계(${game.viewingStageId})가 잠금 해제되었습니다!`);
            }
            renderStageUI();
        }
    });

    // [Premium Theme Application]
    function renderShop() {
        const allItems = game.shopManager.getAllItems();
        ui.shopList.innerHTML = '';

        // 광고 배너 표시 여부
        if (game.shopManager.removeAdsPurchased) {
            ui.adBanner.style.display = 'none';
        } else {
            ui.adBanner.style.display = 'block';
        }

        const createSection = (title, items) => {
            if (!items || items.length === 0) return;
            const h4 = document.createElement('h4');
            h4.textContent = title;
            h4.style.borderBottom = "1px solid #ddd";
            ui.shopList.appendChild(h4);

            items.forEach(item => {
                const isPurchased = game.shopManager.isPurchased(item.id);
                const div = document.createElement('div');
                div.className = 'shop-card'; // [NEW] Distinct class for shop items
                div.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div style="flex:1;">
                            <div style="font-weight:bold;">${item.name}</div>
                            <div style="font-size:0.9em; color:#666;">${item.description}</div>
                        </div>
                        <button class="btn-buy" data-id="${item.id}" ${isPurchased ? 'disabled' : ''}>
                            ${isPurchased ? '구매 완료' : (item.priceLabel || `${item.priceValue} ${item.priceType === 'gem' ? 'Gem' : 'Gold'}`)}
                        </button>
                    </div>
                `;
                ui.shopList.appendChild(div);
            });
        };

        createSection("골드 상품 (젬으로 구매)", allItems.goldPacks);
        createSection("젬 상품 (가상 결제)", allItems.gemPacks);
        createSection("패키지", allItems.bundles);
        createSection("기타", allItems.specials);

        ui.shopList.querySelectorAll('.btn-buy').forEach(btn => {
            btn.addEventListener('click', () => {
                game.shopManager.buyItem(btn.dataset.id);
            });
        });
    }

    game.shopManager.on('shop:updated', () => {
        if (ui.tabShop.classList.contains('active')) renderShop();
        game.save();
    });

    game.shopManager.on('shop:purchaseSuccess', (data) => {
        addLog(data.message, "shop");
        alert(data.message);
    });

    game.shopManager.on('shop:purchaseFailed', (data) => {
        addLog(`구매 실패: ${data.reason}`, "shop");
        alert(data.reason);
    });

    // ----------------------------------------------------
    // [PvP Lobby] [NEW]
    // ----------------------------------------------------
    function renderPvPLobby(query = '') {
        const listContainer = document.getElementById('pvp-user-list');
        if (!listContainer) return;

        import(`./data/PvPData.js?v=${Date.now()}`).then(module => {
            const players = module.searchMockPlayers(query);
            listContainer.innerHTML = '';

            if (players.length === 0) {
                listContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">검색 결과가 없습니다.</div>';
                return;
            }

            players.forEach(p => {
                const item = document.createElement('div');
                item.style.cssText = "display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.05); margin-bottom:5px; padding:10px; border-radius:4px;";
                item.innerHTML = `
                    <div style="display:flex; align-items:center;">
                        <img src="${p.avatar}" style="width:40px; height:40px; border-radius:50%; margin-right:10px; border:2px solid #555;">
                        <div>
                            <div style="font-weight:bold; color:#f1c40f;">${p.name} <span style="font-size:0.8em; color:#aaa;">Lv.${p.level}</span></div>
                            <div style="font-size:0.8em; color:#888;">전투력: <span style="color:#e74c3c;">${p.power}</span> | 랭크: ${p.rank}</div>
                        </div>
                    </div>
                    <button class="btn-battle-rival" data-id="${p.id}" style="padding:5px 10px; background:#c0392b; color:white; border:none; border-radius:4px; cursor:pointer;">⚔️</button>
                `;
                listContainer.appendChild(item);
            });

            // Bind Events
            listContainer.querySelectorAll('.btn-battle-rival').forEach(btn => {
                btn.addEventListener('click', () => {
                    game.battleManager.startPvP(btn.dataset.id);
                });
            });

        }).catch(err => {
            console.error("Failed to load PvP Data", err);
            listContainer.innerHTML = '<div style="color:red;">데이터 로드 실패</div>';
        });
    }

    // PvP UI Events
    const pvpSearchInput = document.getElementById('pvp-search-input');
    const btnPvpSearch = document.getElementById('btn-pvp-search');
    const btnShowMyCode = document.getElementById('btn-show-my-code');
    const myCodeArea = document.getElementById('my-code-area');

    if (btnPvpSearch) {
        btnPvpSearch.addEventListener('click', () => renderPvPLobby(pvpSearchInput.value));
    }
    if (pvpSearchInput) {
        pvpSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') renderPvPLobby(pvpSearchInput.value);
        });
    }
    if (btnShowMyCode) {
        btnShowMyCode.addEventListener('click', () => {
            myCodeArea.style.display = myCodeArea.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Initial load on tab switch (added to switchTab)
    // ----------------------------------------------------
    // [Deck Management UI] [NEW]
    // ----------------------------------------------------
    function renderDeckUI() {
        const deckManager = game.deckManager;
        const currentDeckId = deckManager.currentEditingDeck || 'main';
        const deckData = deckManager.decks[currentDeckId];
        const activeDeckId = deckManager.activeDeckId;

        // 1. Tab Status
        document.querySelectorAll('.deck-tab').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.deck === currentDeckId) {
                btn.classList.add('active');
                // Colorize active based on real functional active
                if (currentDeckId === activeDeckId) {
                    btn.style.border = "1px solid #238636";
                }
            }
        });

        // 2. Active Label
        const labelActive = document.getElementById('label-active-deck');
        const btnSetMain = document.getElementById('btn-set-main-deck');
        if (currentDeckId === activeDeckId) {
            labelActive.innerHTML = `현재: <span style="color:#238636">대표 덱</span> (PvP 출전)`;
            btnSetMain.style.display = 'none';
        } else {
            labelActive.innerHTML = `현재: 서브 덱`;
            btnSetMain.style.display = 'inline-block';
        }

        // 3. Render Slots
        const slotsContainer = document.getElementById('deck-slots');
        slotsContainer.innerHTML = '';

        deckData.forEach((creatureId, idx) => {
            const slot = document.createElement('div');
            slot.className = 'deck-slot';
            // Styling base
            slot.style.cssText = "width:80px; height:80px; background:#161b22; border:2px dashed #444; display:flex; align-items:center; justify-content:center; position:relative; cursor:pointer;";

            if (creatureId) {
                const creature = game.creatureManager.getCreatureById(creatureId);
                if (creature) {
                    slot.style.border = "2px solid #58a6ff";
                    slot.innerHTML = `
                        <img src="${creature.def.image}" style="width:100%; height:100%; object-fit:cover;">
                        <div style="position:absolute; bottom:0; right:0; background:rgba(0,0,0,0.7); color:white; font-size:0.7em; padding:1px 3px;">Lv.${creature.level}</div>
                        <button class="btn-remove-slot" style="position:absolute; top:-5px; right:-5px; background:red; color:white; border:none; border-radius:50%; width:20px; height:20px; font-size:0.8em; cursor:pointer;">X</button>
                    `;
                    // Remove Event
                    slot.querySelector('.btn-remove-slot').addEventListener('click', (e) => {
                        e.stopPropagation();
                        deckManager.removeCreature(currentDeckId, idx);
                        renderDeckUI();
                    });
                }
            } else {
                slot.innerHTML = `<span style="color:#444; font-size:2em;">+</span>`;
            }

            // Click empty slot: Select logic (Or click pool to auto-fill first empty)
            // For now, simplify: Click Pool Item -> Fills first empty or replaces selected?
            // Let's make Pool Item Click -> checking first empty slot logic.
            slotsContainer.appendChild(slot);
        });

        // 4. Render Pool (Owned Creatures)
        const poolContainer = document.getElementById('deck-pool');
        poolContainer.innerHTML = '';

        // Filter out creatures already in THIS deck
        const inDeckIds = deckData.filter(id => id !== null);

        game.creatureManager.owned.forEach(c => {
            const isEquipped = inDeckIds.includes(c.instanceId);
            const div = document.createElement('div');
            div.style.cssText = `position:relative; cursor:pointer; opacity:${isEquipped ? 0.3 : 1.0}; border:1px solid #333; border-radius:4px; padding:2px;`;
            if (isEquipped) div.style.pointerEvents = 'none';

            div.innerHTML = `
                <img src="${c.def.image}" style="width:100%; aspect-ratio:1; object-fit:cover; display:block;">
                <div style="font-size:0.7em; text-align:center; color:#ddd; white-space:nowrap; overflow:hidden;">${c.def.name}</div>
           `;

            div.addEventListener('click', () => {
                // Auto-equip to first empty slot
                const emptyIdx = deckData.indexOf(null);
                if (emptyIdx !== -1) {
                    deckManager.setCreature(currentDeckId, emptyIdx, c.instanceId);
                    renderDeckUI();
                } else {
                    alert("덱이 가득 찼습니다! 슬롯을 비워주세요.");
                }
            });

            poolContainer.appendChild(div);
        });
    }

    // [Events] Deck UI
    document.querySelectorAll('.deck-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            game.deckManager.currentEditingDeck = btn.dataset.deck;
            renderDeckUI();
        });
    });

    // Set Main Button
    const btnSetMain = document.getElementById('btn-set-main-deck');
    if (btnSetMain) {
        btnSetMain.addEventListener('click', () => {
            game.deckManager.setActiveDeck(game.deckManager.currentEditingDeck);
            renderDeckUI();
            alert("대표 덱으로 설정되었습니다!");
        });
    }

    // ----------------------------------------------------
    // [UI 렌더링] 크리처 목록 및 상세
    // ----------------------------------------------------

    // 필터링 및 정렬 적용 함수
    function getFilteredAndSortedCreatures() {
        let list = [...game.creatureManager.owned];

        // 1. Filter
        const rFilter = ui.filterRarity ? ui.filterRarity.value : 'all';
        const eFilter = ui.filterElement ? ui.filterElement.value : 'all';

        if (rFilter !== 'all') {
            list = list.filter(c => c.def.rarity === rFilter);
        }
        if (eFilter !== 'all') {
            list = list.filter(c => {
                if (c.def.elements) return c.def.elements.includes(eFilter);
                return c.def.element === eFilter;
            });
        }

        // 2. Sort
        const sort = ui.sortOrder ? ui.sortOrder.value : 'rarity_desc';
        // Rarity Rank Map
        const rarityRank = { 'UR': 7, 'SSR': 6, 'SR': 5, 'Special': 4, 'Rare': 3, 'Unique': 2, 'Normal': 1 };

        list.sort((a, b) => {
            if (sort === 'rarity_desc') {
                const ra = rarityRank[a.def.rarity] || 0;
                const rb = rarityRank[b.def.rarity] || 0;
                if (ra !== rb) return rb - ra; // 높은 등급 먼저
                return b.level - a.level; // 등급 같으면 레벨순
            } else if (sort === 'level_desc') {
                if (a.level !== b.level) return b.level - a.level;
                const ra = rarityRank[a.def.rarity] || 0;
                const rb = rarityRank[b.def.rarity] || 0;
                return rb - ra;
            } else if (sort === 'recent') {
                // instanceId가 생성 순서대로 늘어난다고 가정 (timestamp 기반이면 더 좋음)
                return b.instanceId - a.instanceId;
            }
            return 0;
        });

        return list;
    }

    function renderCreatureList() {
        const list = getFilteredAndSortedCreatures();
        ui.creatureList.innerHTML = '';

        const isDeckMode = ui.creatureList.classList.contains('mode-deck-select');
        let currentDeckIds = [];
        if (isDeckMode) {
            const deckId = game.deckManager.currentEditingDeck || 'main';
            currentDeckIds = game.deckManager.decks[deckId];
        }

        if (list.length === 0) {
            ui.creatureList.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:20px; color:#666;">조건에 맞는 크리처가 없습니다.</div>';
            return;
        }

        list.forEach(c => {
            const div = document.createElement('div');
            div.className = `creature-card-mini rarity-${c.def.rarity}`;
            div.dataset.instanceId = c.instanceId;

            // [Modified] Use <img> tag for better object-fit control
            // div.style.backgroundImage = `url('${c.def.image}')`; // REMOVED

            // [Visual] Equipped Status
            if (isDeckMode && currentDeckIds.includes(c.instanceId)) {
                div.classList.add('equipped');
                div.style.opacity = '0.5';
                div.style.border = '2px solid #238636';
            }

            // [Lock Icon]
            const lockIcon = c.isLocked ? '<span style="position:absolute; top:5px; right:5px; font-size:12px; z-index:20;">🔒</span>' : '';

            // [New High-Fi Overlay Structure]
            div.innerHTML = `
            <img src="${c.def.image}" alt="${c.def.name}">
            ${lockIcon}
            <div class="card-overlay">
                <!-- Rarity Badge (Optional, handled by border primarily) -->
                <div class="card-name">${c.def.name}</div>
                <div class="card-stats">Lv.${c.level} | ${'★'.repeat(c.star)}</div>
            </div>
        `;

            div.onclick = () => {
                if (isDeckMode) {
                    // [Deck Assignment Logic]
                    // If already equipped, remove? Or do nothing?
                    // User wants "Click to Equip".
                    // Logic: Auto-fill first empty slot. If full, alert?
                    // Or if we clicked a slot in Center Panel recently, fill that? 
                    // Let's go with: "Auto-fill first empty slot".
                    const deckId = game.deckManager.currentEditingDeck || 'main';

                    // Check if already in deck
                    if (currentDeckIds.includes(c.instanceId)) {
                        // Optional: Toggle off? For now just say it's equipped.
                        addLog(`[덱] 이미 장착된 크리처입니다.`);
                        return;
                    }

                    // Find first empty slot
                    const emptyIdx = currentDeckIds.indexOf(null);
                    if (emptyIdx !== -1) {
                        game.deckManager.setCreature(deckId, emptyIdx, c.instanceId);
                        renderDeckUI();
                        renderCreatureList(); // Refresh to show 'Equipped' status
                        // Animation effect?
                    } else {
                        // Deck is full -> Replace logic? or Alert?
                        // Simple Alert for MVP
                        alert("덱이 가득 찼습니다! 교체하려면 팀 탭에서 기존 크리처를 먼저 해제하세요.");
                    }
                } else {
                    // Normal Mode: Show Detail
                    game.creatureManager.selectCreature(c.instanceId);
                }
            };
            ui.creatureList.appendChild(div);
        });
    }

    // [Auto Synth Event]
    if (ui.btnAutoCompose) {
        ui.btnAutoCompose.addEventListener('click', () => {
            showConfirm("잠금되지 않은 0~4성 중복 크리처를 모두 합성하시겠습니까?\n이 작업은 되돌릴 수 없습니다.", () => {
                const result = game.creatureManager.autoCompose();
                if (result.count > 0) {
                    alert(`총 ${result.count}회의 합성이 완료되었습니다!\n(로그 확인)`);
                    result.logs.forEach(log => addLog(log));
                } else {
                    alert("합성 가능한 대상이 없거나 모두 실패했습니다.");
                }
            });
        });
    }

    // 필터 이벤트 리스너
    if (ui.sortOrder) ui.sortOrder.addEventListener('change', renderCreatureList);
    if (ui.filterRarity) ui.filterRarity.addEventListener('change', renderCreatureList);
    if (ui.filterElement) ui.filterElement.addEventListener('change', renderCreatureList);

    game.creatureManager.on('creatures:updated', (list) => {
        renderCreatureList(); // 인자 무시하고 내부 필터 사용
        game.save();
    });

    game.creatureManager.on('creatures:selected', (c) => {
        renderDetailPanel(c);
        // 선택 시 목록 하이라이트 갱신 (ID 기반으로 정확하게)
        const cards = ui.creatureList.children;
        Array.from(cards).forEach(card => {
            if (card.dataset.instanceId === String(c.instanceId)) {
                card.classList.add('selected');
                // Scroll into view if needed
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                card.classList.remove('selected');
            }
        });
    });

    game.creatureManager.on('creature:leveledUp', (data) => {
        const { creature, oldLevel, newLevel, newStats } = data;
        addLog(`[성장] ${creature.def.name} 레벨업! Lv.${oldLevel} -> Lv.${newLevel}`);
        addLog(`ㄴ 능력치 상승: 공격 ${newStats.attack}, 방어 ${newStats.defense}`);
    });

    function renderDetailPanel(c) {
        if (!c) {
            ui.detailPanel.innerHTML = '<p>크리처를 선택하면 상세 정보가 표시됩니다.</p>';
            return;
        }

        const nextExp = getRequiredExp(c.level);
        const expPercent = Math.min(100, (c.exp / nextExp) * 100).toFixed(1);
        const isMaxLevel = c.level >= 30;

        // [Lock Button]
        const lockBtnHtml = `<button id="btn-toggle-lock" style="
            background: transparent; border: 1px solid #555; font-size: 0.8em; padding: 2px 8px; margin-left: 10px; cursor: pointer; color: ${c.isLocked ? '#e74c3c' : '#aaa'};
        ">${c.isLocked ? '🔒 잠금됨' : '🔓 잠금해제'}</button>`;

        ui.detailPanel.innerHTML = `
            <h3>
                ${c.def.name} <span style="color:#f1c40f;">${'★'.repeat(c.star)}</span>
                ${lockBtnHtml}
                <button id="btn-close-detail" style="float:right; background:none; border:none; color:#aaa; font-size:1.2em; cursor:pointer;">&times;</button>
            </h3>
            <p>등급: <span class="rarity-${c.def.rarity}" style="font-weight:bold">${c.def.rarity}</span> | 속성: ${c.def.elements ? c.def.elements.join(' / ') : c.def.element}</p>
            
            <div style="margin: 10px 0;">
                <div><strong>Lv.${c.level}</strong> ${isMaxLevel ? "(MAX)" : `(Exp: ${c.exp} / ${nextExp})`}</div>
                <div class="exp-container">
                    <div class="exp-fill" style="width: ${isMaxLevel ? 100 : expPercent}%"></div>
                    <div class="exp-text">${isMaxLevel ? "MAX" : `${expPercent}%`}</div>
                </div>
            </div>

            <!-- [NEW] 크리처 이미지 (Premium Frame) -->
            <div class="creature-portrait">
                <div class="creature-card-frame rank-${c.def.rarity}" style="position:relative; display:inline-block; border-width: 3px;">
                     <img src="${c.def.image || 'images/creature_slime.png'}" alt="${c.def.name}" 
                          onerror="this.src='images/creature_slime.png'"
                          style="display:block; max-width:100%; height:auto;">
                     ${c.isLocked ? '<div style="position:absolute; top:10px; right:10px; font-size:2em; text-shadow:0 0 5px black;">🔒</div>' : ''}
                </div>
            </div>

            <!-- [합성 시스템 UI] -->
            <div id="compose-ui-area" style="margin-bottom:10px; text-align:center;"></div>

            <!-- [NEW] 스탯 시각화 -->
            <div class="stats-visual">
                <div class="stat-bar-row">
                    <span class="stat-label">공격력 (${c.stats.attack})</span>
                    <div class="stat-bar-bg"><div class="stat-bar-fill attack" style="width: ${Math.min(100, (c.stats.attack / 50) * 100)}%;"></div></div>
                </div>
                <div class="stat-bar-row">
                    <span class="stat-label">방어력 (${c.stats.defense})</span>
                    <div class="stat-bar-bg"><div class="stat-bar-fill defense" style="width: ${Math.min(100, (c.stats.defense / 50) * 100)}%;"></div></div>
                </div>
                <div class="stat-bar-row">
                    <span class="stat-label">탐사력 (${c.stats.explorePower})</span>
                    <div class="stat-bar-bg"><div class="stat-bar-fill explore" style="width: ${Math.min(100, (c.stats.explorePower / 50) * 100)}%;"></div></div>
                </div>
            </div>

            <p>상태: <strong>${c.isOnExpedition ? "탐사 중" : "대기 중"}</strong></p>

            <div class="training-area">
                <button class="btn-train basic" id="btn-train-basic" ${c.isOnExpedition || isMaxLevel ? 'disabled' : ''}>
                    <strong>기본 훈련</strong><br>
                    <small>에너지 -5, Exp +10</small>
                </button>
                <button class="btn-train intensive" id="btn-train-intensive" ${c.isOnExpedition || isMaxLevel ? 'disabled' : ''}>
                    <strong>집중 훈련</strong><br>
                    <small>에너지 -10, 골드 -50, Exp +25</small>
                </button>
            </div>
        `;

        const btnBasic = document.getElementById('btn-train-basic');
        const btnIntensive = document.getElementById('btn-train-intensive');
        const btnLock = document.getElementById('btn-toggle-lock');

        if (btnBasic) {
            btnBasic.onclick = () => handleTraining('basic', c.instanceId);
        }
        if (btnIntensive) {
            btnIntensive.onclick = () => handleTraining('intensive', c.instanceId);
        }
        if (btnLock) {
            btnLock.onclick = (e) => {
                e.stopPropagation(); // 카드 갱신 시 전파 방지
                game.creatureManager.toggleLock(c.instanceId);
            };
        }

        // [Close Detail Logic]
        const btnClose = document.getElementById('btn-close-detail');
        if (btnClose) {
            btnClose.onclick = () => {
                ui.detailPanel.innerHTML = '<p class="placeholder-text">SELECT DATA</p>';
                // Remove selection visual from list
                Array.from(ui.creatureList.children).forEach(card => card.classList.remove('selected'));
            };
        }

        // [합성 UI 렌더링]
        const composeArea = document.getElementById('compose-ui-area');
        if (composeArea) {
            // 합성 가능한 재료 찾기 (같은 dataId, 같은 star, 본인이 아님)
            const material = game.creatureManager.owned.find(m =>
                m.dataId === c.dataId &&
                m.star === c.star &&
                m.instanceId !== c.instanceId
            );

            if (material) {
                const btnCompose = document.createElement('button');
                btnCompose.className = 'btn-upgrade'; // 스타일 재사용
                btnCompose.style.backgroundColor = '#9b59b6';
                btnCompose.style.width = '100%';
                btnCompose.textContent = `★ 등급 업 (재료: ${material.def.name})`;
                btnCompose.onclick = () => {
                    showConfirm(`[${material.def.name}]을(를) 재료로 사용하여 등급을 올리시겠습니까?\n성공 확률이 존재하며 재료는 소멸됩니다.`, () => {
                        const result = game.creatureManager.tryCompose(c.instanceId, material.instanceId);
                        if (result.success) {
                            alert(`합성 성공! ★${result.base.star} 등급이 되었습니다!`);
                        } else {
                            alert(result.reason);
                        }
                    });
                };
                composeArea.appendChild(btnCompose);
            } else if (c.star < 5) {
                const info = document.createElement('p');
                info.style.fontSize = '0.8em';
                info.style.color = '#7f8c8d';
                info.textContent = "합성 가능한 동일 등급의 재료 크리처가 없습니다.";
                composeArea.appendChild(info);
            } else {
                const info = document.createElement('p');
                info.style.fontSize = '0.8em';
                info.style.color = '#f1c40f';
                info.textContent = "최대 등급입니다.";
                composeArea.appendChild(info);
            }
        }
    }

    // [NEW] 덱 슬롯 렌더링 함수
    function renderDeckSlots() {
        const slotsContainer = document.getElementById('deck-slots');
        if (!slotsContainer) return;

        slotsContainer.innerHTML = ''; // 기존 슬롯 초기화

        game.deckManager.deck.forEach((creatureId, idx) => {
            const slot = document.createElement('div');
            slot.className = 'deck-slot';

            if (creatureId) {
                const creature = game.creatureManager.getCreature(creatureId);
                if (creature) {
                    slot.innerHTML = `
                        <img src="${creature.def.image || 'images/creature_slime.png'}" alt="${creature.def.name}" style="width:100%; height:100%; object-fit:cover;">
                        <span class="slot-name">${creature.def.name}</span>
                    `;
                    slot.onclick = () => {
                        showConfirm(`${creature.def.name}을(를) 덱에서 해제하시겠습니까?`, () => {
                            game.deckManager.removeCreatureFromSlot(idx);
                            renderDeckSlots();
                            renderCreatureList(); // 크리처 목록 갱신 (선택 가능 상태 등)
                        });
                    };
                } else {
                    // Creature not found (e.g., deleted), clear slot
                    game.deckManager.removeCreatureFromSlot(idx);
                    slot.innerHTML = '<span style="color:#444;">+</span>';
                    slot.onclick = () => {
                        // Highlight this slot
                        document.querySelectorAll('.deck-slot').forEach(s => s.style.borderColor = '#444');
                        slot.style.borderColor = '#e1e4e8'; // Active selection

                        // Store state: We are picking a creature for this slot
                        game.deckManager.pendingSlotIndex = idx;

                        // Show toast or logic
                        addLog(`[덱 편집] 슬롯 ${idx + 1} 선택됨. 아래 목록에서 크리처를 클릭하세요.`);

                        // Update creature list to show "Equip" indicators or filtering?
                        // For now just rely on next creature click
                    };
                }
            } else {
                slot.innerHTML = '<span style="color:#444;">+</span>';
            }

            // Click to set "Select Mode" for this slot
            slot.onclick = () => {
                // Highlight this slot
                document.querySelectorAll('.deck-slot').forEach(s => s.style.borderColor = '#444');
                slot.style.borderColor = '#e1e4e8'; // Active selection

                // Store state: We are picking a creature for this slot
                game.deckManager.pendingSlotIndex = idx;

                // Show toast or logic
                addLog(`[덱 편집] 슬롯 ${idx + 1} 선택됨. 아래 목록에서 크리처를 클릭하세요.`);

                // Update creature list to show "Equip" indicators or filtering?
                // For now just rely on next creature click
            };

            slotsContainer.appendChild(slot);
        });
    }

    function handleTraining(type, instanceId) {
        if (type === 'basic') {
            if (!game.resourceManager.spendEnergy(5)) return;
            game.creatureManager.addExp(instanceId, 10);
            addLog("[훈련] 기본 훈련 완료. Exp +10");
        }
        else if (type === 'intensive') {
            if (game.resourceManager.resources.gold < 50) {
                addLog("골드가 부족합니다.");
                return;
            }
            if (game.resourceManager.resources.energy < 10) return;

            game.resourceManager.spendGold(50);
            game.resourceManager.spendEnergy(10);
            game.creatureManager.addExp(instanceId, 25);
            addLog("[훈련] 집중 훈련 완료. Exp +25");
        }
        // [NEW] 퀘스트 진행을 위해 이벤트 발생 (이미 creatureManager가 addExp로 emit할 수도 있지만 명시적 훈련 액션용)
        game.events.emit('training:performed');
        game.save();
    }

    if (ui.btnSave) ui.btnSave.addEventListener('click', () => { game.save(); alert("저장됨"); });
    if (ui.btnSave) ui.btnSave.addEventListener('click', () => { game.save(); alert("저장됨"); });
    if (ui.btnReset) ui.btnReset.addEventListener('click', () => {
        showConfirm("정말로 **초기화** 하시겠습니까?\n모든 데이터가 삭제됩니다.", () => {
            game.clearSave();
            location.reload();
        });
    });

    game.resourceManager.on('resources:changed', (res) => {
        // Update header bar resources
        document.querySelectorAll('[data-resource]').forEach(el => {
            const resourceType = el.dataset.resource;
            if (res[resourceType] !== undefined) {
                el.textContent = Math.floor(res[resourceType]);
            }
        });
    });
    game.resourceManager.on('resources:error', (err) => addLog(err.message));

    // ----------------------------------------------------
    // [System Modal Logic]
    // ----------------------------------------------------
    const sysUI = {
        btnOpen: document.getElementById('btn-system-menu'),
        overlay: document.getElementById('system-modal-overlay'),
        btnClose: document.getElementById('btn-close-system'),
        tabs: document.querySelectorAll('.system-tab'),
        viewNotice: document.getElementById('view-notice'),
        viewContact: document.getElementById('view-contact'),
        btnSend: document.getElementById('btn-send-inquiry'),
        inputMsg: document.getElementById('contact-msg')
    };

    if (sysUI.btnOpen) {
        sysUI.btnOpen.addEventListener('click', () => {
            if (sysUI.overlay) sysUI.overlay.style.display = 'flex';
        });
    }

    if (sysUI.btnClose) {
        sysUI.btnClose.addEventListener('click', () => {
            if (sysUI.overlay) sysUI.overlay.style.display = 'none';
        });
    }

    if (sysUI.tabs) {
        sysUI.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Toggle Tabs
                sysUI.tabs.forEach(t => {
                    t.classList.remove('active');
                    t.style.borderBottom = '2px solid transparent';
                    t.style.color = '#888';
                });
                tab.classList.add('active');
                tab.style.borderBottom = '2px solid var(--accent-cyan)';
                tab.style.color = 'white';

                // Toggle Views
                const target = tab.dataset.tab;
                if (target === 'notice') {
                    sysUI.viewNotice.style.display = 'block';
                    sysUI.viewContact.style.display = 'none';
                } else {
                    sysUI.viewNotice.style.display = 'none';
                    sysUI.viewContact.style.display = 'block';
                }
            });
        });
    }

    if (sysUI.btnSend) {
        sysUI.btnSend.addEventListener('click', () => {
            if (!sysUI.inputMsg.value.trim()) {
                alert("내용을 입력해주세요.");
                return;
            }
            alert("문의가 접수되었습니다.\n답변은 메일로 전송됩니다.");
            sysUI.inputMsg.value = "";
            sysUI.overlay.style.display = 'none';
        });
    }

    // ----------------------------------------------------
    // [튜토리얼 UI 핸들러]
    // ----------------------------------------------------
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    const tutorialText = document.getElementById('tutorial-text');
    const btnSkipTutorial = document.getElementById('btn-skip-tutorial');
    let currentHighlight = null;

    if (btnSkipTutorial) {
        btnSkipTutorial.addEventListener('click', () => {
            game.tutorialManager.skipTutorial();
        });
    }

    game.events.on('tutorial:stepChanged', (data) => {
        // 오버레이 표시
        tutorialOverlay.style.display = 'flex';
        tutorialText.textContent = data.message;

        // 마지막 단계면 버튼 텍스트 변경
        if (data.isLast) {
            btnSkipTutorial.textContent = "연구소 시작하기";
            btnSkipTutorial.onclick = () => {
                game.tutorialManager.completeTutorial();
                tutorialOverlay.style.display = 'none';
            };
        } else {
            btnSkipTutorial.textContent = "튜토리얼 건너뛰기";
            btnSkipTutorial.onclick = () => {
                game.tutorialManager.skipTutorial();
            };
        }

        // 기존 하이라이트 제거
        if (currentHighlight) {
            currentHighlight.classList.remove('highlight');
            currentHighlight = null;
        }

        // 새 하이라이트 적용
        if (data.targetId) {
            const target = document.getElementById(data.targetId);
            if (target) {
                target.classList.add('highlight');
                currentHighlight = target;

                // 스크롤 이동 (필요 시)
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    game.events.on('tutorial:ended', () => {
        tutorialOverlay.style.display = 'none';
        if (currentHighlight) {
            currentHighlight.classList.remove('highlight');
            currentHighlight = null;
        }
        addLog("튜토리얼 완료!");
        alert("튜토리얼이 완료되었습니다. 본격적으로 연구소를 운영해보세요!");
    });

    // [NEW] 필터/정렬 이벤트 연결
    ['filter-rarity', 'filter-element', 'sort-order'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', () => {
            renderCreatureList(game.creatureManager.owned);
        });
    });

    // 실행
    renderExpeditionList();
    renderFacilityList(); // [NEW] 초기 렌더링
    game.init();

    // [CRITICAL] 로드 후 초기 UI 반영
    if (game.creatureManager.owned.length > 0) {
        renderCreatureList();
    }

    // [CRITICAL] 초기 자원 UI 업데이트
    const res = game.resourceManager.getResources();
    document.querySelectorAll('[data-resource]').forEach(el => {
        const resourceType = el.dataset.resource;
        if (res[resourceType] !== undefined) {
            el.textContent = Math.floor(res[resourceType]);
        }
    });

    // [CRITICAL] 초기 스테이지 UI 렌더링
    if (game.stageManager) {
        renderStageUI();
    }

    game.start();

    // [배틀 - 스테이지 네비게이션]
    if (ui.btnPrevStage) {
        ui.btnPrevStage.addEventListener('click', () => {
            game.stageManager.prevStage();
            renderStageUI();
        });
    }
    if (ui.btnNextStage) {
        ui.btnNextStage.addEventListener('click', () => {
            game.stageManager.nextStage();
            renderStageUI();
        });
    }
    if (ui.btnStartStage) {
        ui.btnStartStage.addEventListener('click', () => {
            const currentDeck = game.deckManager.getMainDeck();
            if (!currentDeck || currentDeck.every(id => id === null)) {
                addLog('[전투] 덱에 크리처를 배치해주세요!');
                return;
            }

            const currentStage = game.stageManager.getCurrentStage();
            if (currentStage) {
                game.battleManager.startPvE(currentStage.id);
            }
        });
    }

    // [덱 탭 전환]
    document.querySelectorAll('.deck-tab').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            game.deckManager.currentEditingDeck = idx;
            renderDeckUI();
        });
    });

    // [탐사 이벤트]
    game.expeditionManager.on('expedition:started', (exp) => {
        addLog(`[탐사] ${exp.expeditionName} 시작`);
        if (ui.expeditionList) renderExpeditionList();
    });

    game.expeditionManager.on('expedition:completed', (exp) => {
        addLog(`[탐사] 완료! ${exp.rewards.gold}G, ${exp.rewards.exp}EXP`);
    });

});
