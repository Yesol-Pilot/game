import BaseView from './BaseView.js';

export default class BattleView extends BaseView {
    init() {
        // 스테이지 네비게이션
        if (this.ui.btnPrevStage) {
            this.ui.btnPrevStage.onclick = () => {
                this.game.stageManager.prevStage();
                this.renderStageUI();
            };
        }
        if (this.ui.btnNextStage) {
            this.ui.btnNextStage.onclick = () => {
                this.game.stageManager.nextStage();
                this.renderStageUI();
            };
        }
        if (this.ui.btnStartStage) {
            this.ui.btnStartStage.onclick = () => {
                // 현재 보고 있는 스테이지로 시작
                this.game.battleManager.startStageBattle(this.game.stageManager.currentViewingStage);
            };
        }

        // 자동 전투 Select 연결
        const autoBattleSelect = document.getElementById('select-auto-battle');
        if (autoBattleSelect) {
            autoBattleSelect.value = this.game.battleManager.autoBattleMode;
            autoBattleSelect.onchange = (e) => {
                this.game.battleManager.setAutoBattle(e.target.value);
            };

            // 외부(배틀 종료)에서 모드가 변경되었을 때 UI 동기화
            this.game.events.on('battle:autoAdjusted', (mode) => {
                autoBattleSelect.value = mode;
            });
        }

        // [NEW] 배속 버튼 연결
        const btnSpeed1 = document.getElementById('btn-speed-1');
        const btnSpeed2 = document.getElementById('btn-speed-2');
        if (btnSpeed1 && btnSpeed2) {
            const updateSpeedUI = (speed) => {
                // Reset styles
                btnSpeed1.classList.remove('active');
                btnSpeed2.classList.remove('active');
                btnSpeed1.style.background = 'transparent';
                btnSpeed2.style.background = 'transparent';

                if (speed > 1) {
                    btnSpeed2.classList.add('active');
                    btnSpeed2.style.background = 'var(--accent-orange)';
                } else {
                    btnSpeed1.classList.add('active');
                    btnSpeed1.style.background = 'var(--accent-cyan)';
                }
            };

            btnSpeed1.onclick = () => {
                this.game.battleManager.setBattleSpeed(1);
                updateSpeedUI(1);
            };
            btnSpeed2.onclick = () => {
                this.game.battleManager.setBattleSpeed(3); // 3배속으로 상향 (사용자 만족도 UP)
                updateSpeedUI(3);
            };

            // 초기 상태 설정
            updateSpeedUI(this.game.battleManager.battleSpeed || 1);
        }

        // PvP 검색
        const btnPvpSearch = document.getElementById('btn-pvp-search');
        if (btnPvpSearch) {
            btnPvpSearch.onclick = () => {
                const query = document.getElementById('pvp-search-input')?.value || '';
                this.renderPvPLobby(query);
            };
        }

        this.game.events.on('battle:completed', (data) => {
            if (data.isWin && data.stageId) {
                const max = this.game.stageManager.getMaxStage();
                // StageManager already auto-unlocks next stage on win via BattleManager -> unlockNextStage
                // Just sync viewing stage if user was watching the latest stage
                if (this.game.stageManager.currentViewingStage < max) {
                    // If we just unlocked a new stage and were at the previous max, move to new one could be optional
                    // But StageManager logic handles unlocks. 
                    // Let's just create a visual log.
                    this.addLog(`[스테이지] 작전 구역 ${max} 개방!`);
                }
                this.renderStageUI(); // Refresh UI to show unlock status/next button
            }
        });

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'battle') {
                this.render();
            }
        });

        // [Fix] 스테이지 정보 변경 시 즉시 UI 갱신 (자동 진행 등)
        this.game.stageManager.on('stages:updated', (data) => {
            console.log("[BattleView] Stage updated, refreshing UI...");
            this.renderStageUI();
        });

        // 초기 렌더링
        this.render();
    }

    render() {
        this.renderStageUI();
        this.renderPvPLobby();
    }

    renderStageUI() {
        const stageMgr = this.game.stageManager;
        if (!stageMgr) return;

        // Use logic from StageManager
        const stageId = stageMgr.currentViewingStage || 1;
        const maxStage = stageMgr.getMaxStage();
        const stageData = stageMgr.getStageInfo(stageId);

        if (!stageData) return;

        if (this.ui.stageTitle) this.ui.stageTitle.innerText = stageData.name;
        if (this.ui.stageInfo) {
            this.ui.stageInfo.innerHTML = `
                <div style="font-size:0.9em; opacity:0.8;">Enemy Lv.${stageData.enemies[0].level}</div>
                <div style="color:var(--accent-secondary); font-weight:bold; margin-top:5px;">권장 전투력: ${stageData.recommendedPower.toLocaleString()}</div>
            `;
        }
        if (this.ui.stageRewards) this.ui.stageRewards.innerText = `💰 지급: ${stageData.rewardGold}G, ⭐ ${stageData.rewardExp}EXP`;

        if (this.ui.btnPrevStage) {
            this.ui.btnPrevStage.disabled = (stageId <= 1);
            this.ui.btnPrevStage.style.opacity = this.ui.btnPrevStage.disabled ? 0.3 : 1;
        }

        if (this.ui.btnNextStage) {
            this.ui.btnNextStage.disabled = (stageId >= maxStage);
            this.ui.btnNextStage.style.opacity = this.ui.btnNextStage.disabled ? 0.3 : 1;
        }

        if (this.ui.btnStartStage) {
            this.ui.btnStartStage.innerText = `⚔️ ${stageData.name} 진입`;
        }
    }

    /**
     * 랭크별 색상 반환
     */
    getRankColor(rank) {
        const colors = {
            'Bronze': '#cd7f32',
            'Silver': '#c0c0c0',
            'Gold': '#ffd700',
            'Platinum': '#00d4aa',
            'Diamond': '#00bfff',
            'Master': '#ff4500'
        };
        return colors[rank] || '#ffffff';
    }

    /**
     * PVP 로비 렌더링 (개선됨)
     */
    renderPvPLobby(query = '') {
        const listContainer = document.getElementById('pvp-user-list');
        if (!listContainer) return;

        // PvP 데이터 로드 및 렌더링
        import(`../data/PvPData.js?v=${Date.now()}`).then(module => {
            const players = module.searchMockPlayers(query);
            listContainer.innerHTML = '';

            if (players.length === 0) {
                listContainer.innerHTML = '<div style="text-align:center; padding:30px; color:var(--text-secondary);">🔍 검색 결과가 없습니다.</div>';
                return;
            }

            players.forEach(p => {
                const item = document.createElement('div');
                item.className = 'pvp-list-item';
                const rankColor = this.getRankColor(p.rank);

                item.style.cssText = `
                    display:flex; 
                    justify-content:space-between; 
                    align-items:center; 
                    background:linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%); 
                    margin-bottom:10px; 
                    padding:14px; 
                    border-radius:12px; 
                    border:1px solid rgba(255,255,255,0.1);
                    transition: transform 0.2s, box-shadow 0.2s;
                `;

                // 호버 효과
                item.onmouseenter = () => {
                    item.style.transform = 'translateY(-2px)';
                    item.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
                };
                item.onmouseleave = () => {
                    item.style.transform = 'translateY(0)';
                    item.style.boxShadow = 'none';
                };

                const tagHtml = p.tag ? `<span style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; font-size:0.7em; margin-left:5px;">#${p.tag}</span>` : '';
                const recordHtml = p.record ? `<span style="color:#2ecc71; font-size:0.75em;">${p.record}</span>` : '';

                item.innerHTML = `
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="position:relative;">
                            <img src="${p.avatar}" 
                                style="width:50px; height:50px; border-radius:50%; border:3px solid ${rankColor}; object-fit:cover;"
                                onerror="this.src='images/placeholder.png'">
                            <div style="position:absolute; bottom:-2px; right:-2px; background:${rankColor}; padding:1px 4px; border-radius:3px; font-size:0.6em; font-weight:bold;">
                                ${p.rank.charAt(0)}
                            </div>
                        </div>
                        <div>
                            <div style="font-weight:bold; color:var(--accent-gold); font-size:1em; display:flex; align-items:center; gap:5px;">
                                ${p.name}
                                <span style="font-size:0.75em; color:var(--text-secondary);">Lv.${p.level}</span>
                                ${tagHtml}
                            </div>
                            <div style="font-size:0.8em; opacity:0.8; margin-top:3px;">
                                ⚡ <span style="color:var(--accent-cyan);">${p.power.toLocaleString()}</span>
                                <span style="margin:0 8px; opacity:0.5;">|</span>
                                <span style="color:${rankColor};">${p.rank}</span>
                                ${recordHtml ? `<span style="margin:0 8px; opacity:0.5;">|</span>${recordHtml}` : ''}
                            </div>
                        </div>
                    </div>
                    <button class="cyber-btn small btn-battle-rival" data-id="${p.id}" 
                        style="background:linear-gradient(135deg, #e74c3c, #c0392b); border:none; padding:8px 16px;">
                        ⚔️ 도전
                    </button>
                `;

                item.querySelector('.btn-battle-rival').onclick = () => {
                    this.game.battleManager.startPvP(p.id);
                };

                listContainer.appendChild(item);
            });

            // 검색 힌트 추가
            const hint = document.createElement('div');
            hint.style.cssText = 'text-align:center; padding:10px; font-size:0.75em; opacity:0.5;';
            hint.textContent = `총 ${players.length}명의 라이벌 발견`;
            listContainer.appendChild(hint);

        }).catch(err => {
            console.error("PvP 데이터 로드 실패", err);
            listContainer.innerHTML = '<div style="color:red; text-align:center; padding:20px;">⚠️ 데이터 로드 실패</div>';
        });
    }
}
