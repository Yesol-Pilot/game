// ==========================================
// [긴급] 누락된 렌더링 함수 복구 스크립트
// ==========================================

// 이 파일의 내용을 main.js의 renderExpeditionList() 다음에 삽입해야 합니다.

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
    if (ui.labelActiveDeck) {
        const deckNames = ['Main Deck', 'Sub Deck 1', 'Sub Deck 2'];
        ui.labelActiveDeck.textContent = `현재: ${deckNames[game.deckManager.currentEditingDeck] || 'Unknown'}`;
    }

    // Render Deck Slots
    renderDeckSlots();

    // Render Deck Pool (Available Creatures)
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
                    // Add to current editing deck
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
                slot.innerHTML = `
                    <img src="${creature.def.image}" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">
                `;
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
            slot.onclick = () => {
                addLog(`[덱] 슬롯 ${slotIndex + 1} 선택됨. 아래에서 크리처를 클릭하세요.`);
            };
        }

        slotsContainer.appendChild(slot);
    });
}

// ----------------------------------------------------
// [PVP 로비 렌더링]
// ----------------------------------------------------
function renderPvPLobby() {
    const userList = document.getElementById('pvp-user-list');
    if (userList) {
        userList.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">온라인 사용자가 없습니다.</div>';
    }
}
