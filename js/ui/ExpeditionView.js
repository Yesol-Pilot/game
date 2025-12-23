import BaseView from './BaseView.js';
import { EXPEDITIONS } from '../data/ExpeditionData.js';

export default class ExpeditionView extends BaseView {
    init() {
        this.game.expeditionManager.on('expedition:started', (exp) => {
            this.addLog(`${exp.expeditionName} 시작`, "expedition");
            this.renderActiveExpeditions();
        });

        this.game.expeditionManager.on('expedition:completed', (exp) => {
            this.addLog(`${exp.expeditionName} 완료! 골드 +${exp.rewards.gold}`, "expedition");
            this.renderActiveExpeditions();
        });

        // 자동 반복 토글 연결
        const checkAutoRepeat = document.getElementById('check-auto-repeat');
        if (checkAutoRepeat) {
            checkAutoRepeat.checked = this.game.expeditionManager.isAutoRepeat;
            checkAutoRepeat.onchange = (e) => {
                this.game.expeditionManager.setAutoRepeat(e.target.checked);
            };
        }

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'expedition') {
                this.render();
            }
        });
    }

    render() {
        this.renderExpeditionList();
        this.renderActiveExpeditions();
    }

    renderExpeditionList() {
        const listEl = document.getElementById('expedition-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        EXPEDITIONS.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'expedition-card feature-card';
            // 배경 이미지가 없으므로 CSS 그라디언트로 분위기 연출
            let bgGradient = 'linear-gradient(135deg, rgba(30,30,40,0.8), rgba(10,10,20,0.95))';
            let accentColor = '#888';
            if (exp.elementBonus === 'Wind' || exp.elementBonus === 'Nature') {
                bgGradient = 'linear-gradient(135deg, rgba(46, 204, 113, 0.2), rgba(10,10,20,0.9))';
                accentColor = '#2ecc71';
            } else if (exp.elementBonus === 'Earth') {
                bgGradient = 'linear-gradient(135deg, rgba(230, 126, 34, 0.2), rgba(10,10,20,0.9))';
                accentColor = '#e67e22';
            } else if (exp.elementBonus === 'Fire') {
                bgGradient = 'linear-gradient(135deg, rgba(231, 76, 60, 0.2), rgba(10,10,20,0.9))';
                accentColor = '#e74c3c';
            }

            card.style.background = bgGradient;
            card.style.border = `1px solid ${accentColor}44`;
            card.style.position = 'relative';
            card.style.overflow = 'hidden';

            card.innerHTML = `
                <div class="exp-header" style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                    <div class="exp-icon" style="font-size:2rem; background:rgba(0,0,0,0.3); width:50px; height:50px; display:flex; justify-content:center; align-items:center; border-radius:12px; border:1px solid ${accentColor}; color:${accentColor};">
                        ${exp.icon || '🚀'}
                    </div>
                    <div class="exp-element-bonus" style="font-size:0.8rem; color:${accentColor}; border:1px solid ${accentColor}; padding:2px 8px; border-radius:12px;">
                        ${exp.elementBonus ? exp.elementBonus + ' 우대' : '속성 무관'}
                    </div>
                </div>
                
                <div class="exp-info" style="margin-bottom:15px;">
                    <h4 style="margin:0 0 5px 0; font-size:1.1rem;">${exp.name}</h4>
                    <p style="font-size:0.85rem; color:#aaa; margin:0;">${exp.description}</p>
                </div>

                <div class="exp-details" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.85rem; color:#ccc; margin-bottom:15px; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">
                    <div>⏱️ 소요: <span style="color:#fff;">${exp.durationSec}초</span></div>
                    <div>⚡ 피로도: <span style="color:#f1c40f;">-${exp.energyCost}</span></div>
                    <div>💰 보상: <span style="color:#f1c40f;">${exp.baseGoldReward}G</span></div>
                    <div>⭐ 경험치: <span style="color:#3498db;">${exp.baseExpReward}</span></div>
                </div>

                <div class="exp-action">
                    <button class="cyber-btn small btn-start-exp" data-id="${exp.id}" style="width:100%; border-color:${accentColor}; color:${accentColor};">
                        탐사대 파견
                    </button>
                </div>
            `;

            card.querySelector('.cyber-btn').addEventListener('click', () => {
                this._openExpeditionModal(exp);
            });

            listEl.appendChild(card);
        });
    }

    renderActiveExpeditions() {
        const listEl = document.getElementById('active-expedition-list');
        const mapContainer = document.getElementById('map-units-container');
        const logDisplay = document.getElementById('expedition-log-display');

        if (!listEl) return;

        const list = this.game.expeditionManager.getActiveExpeditions();
        listEl.innerHTML = '';
        if (mapContainer) mapContainer.innerHTML = ''; // Clear map markers

        if (list.length === 0) {
            listEl.innerHTML = '<p class="placeholder-text" style="padding:20px; text-align:center; color:#666;">현재 진행 중인 탐사가 없습니다.</p>';
            if (logDisplay && logDisplay.innerHTML.includes('signals')) {
                logDisplay.innerHTML = '<div style="opacity:0.5;">No active signals...</div>';
            }
            return;
        }

        list.forEach(exp => {
            const now = Date.now();
            const totalDuration = exp.endTime - exp.startTime;
            const elapsed = now - exp.startTime;
            const percent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
            const remainSec = Math.max(0, Math.ceil((exp.endTime - now) / 1000));

            // 1. List Item Render
            const div = document.createElement('div');
            div.className = 'active-expedition-item glass-panel';
            div.style.padding = '15px';
            div.style.marginBottom = '10px';

            const creature = this.game.creatureManager.getCreatureById(exp.creatureInstanceId);
            const creatureImg = creature ? creature.def.image : 'images/creature_slime_green.png';

            div.innerHTML = `
                <div style="display:flex; gap:15px; align-items:center;">
                    <div style="width:50px; height:50px; border-radius:50%; overflow:hidden; border:2px solid var(--accent-primary);">
                        <img src="${creatureImg}" style="width:100%; height:100%; object-fit:cover;">
                    </div>
                    <div style="flex:1;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                            <span style="font-weight:bold; color:var(--text-primary);">${exp.expeditionName}</span>
                            <span style="color:var(--accent-primary); font-family:monospace;">${Math.floor(remainSec / 60)}:${String(remainSec % 60).padStart(2, '0')}</span>
                        </div>
                        <div style="background:rgba(255,255,255,0.1); height:6px; border-radius:3px; overflow:hidden;">
                            <div style="width:${percent}%; height:100%; background:var(--accent-primary); transition:width 1s linear;"></div>
                        </div>
                        <div style="font-size:0.8rem; color:#888; margin-top:5px;">
                            파견 중: ${exp.creatureName}
                        </div>
                    </div>
                </div>
            `;
            listEl.appendChild(div);

            // 2. Map Marker Render
            if (mapContainer) {
                this._renderMapUnit(exp, percent, creatureImg);
            }

            // 3. Auto Log Trigger
            this._handleAutoLogs(exp, percent);
        });

        // Start ticker if not running
        this._startMapTicker();
    }

    _renderMapUnit(exp, percent, img) {
        const container = document.getElementById('map-units-container');
        if (!container) return;

        // 고정적이지만 탐사별로 다른 경로 시뮬레이션
        const seed = parseInt(exp.id.split('_')[1]) || 0;
        const startX = 10 + (seed % 20);
        const endX = 80 + (seed % 15);
        const startY = 10 + (seed % 70);
        const endY = 80 - (seed % 10);

        const currentX = startX + (endX - startX) * (percent / 100);
        const currentY = startY + (endY - startY) * (percent / 100);

        const unit = document.createElement('div');
        unit.className = 'map-unit';
        unit.style.left = `${currentX}%`;
        unit.style.top = `${currentY}%`;
        unit.innerHTML = `
            <div class="map-unit-icon">
                <img src="${img}">
            </div>
            <div class="map-unit-label">${exp.creatureName}</div>
        `;
        container.appendChild(unit);
    }

    _handleAutoLogs(exp, percent) {
        if (!this.lastLogPercents) this.lastLogPercents = {};
        const lastP = this.lastLogPercents[exp.id] || 0;

        const logData = [
            { p: 1, msg: "Point Alpha 도달. 정찰 개시." },
            { p: 25, msg: "에너지 주파수 감지. 주변 탐색 중..." },
            { p: 50, msg: "미확립 생명체 조우. 교전 회피 후 이동." },
            { p: 75, msg: "목표 자원 확보 성공. 귀환 경로 설정." },
            { p: 95, msg: "기지 접근 중. 차원 고정 장치 활성화." }
        ];

        logData.forEach(entry => {
            if (percent >= entry.p && lastP < entry.p) {
                this._addTacticalLog(exp.creatureName, entry.msg);
            }
        });

        this.lastLogPercents[exp.id] = percent;
    }

    _addTacticalLog(name, msg) {
        const logDisplay = document.getElementById('expedition-log-display');
        if (!logDisplay) return;

        if (logDisplay.innerHTML.includes('No active signals')) logDisplay.innerHTML = '';

        const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const item = document.createElement('div');
        item.className = 'exp-log-item';
        item.innerHTML = `<span class="time">[${time}]</span><span class="tag">${name}</span><span class="msg">${msg}</span>`;

        logDisplay.prepend(item);

        // Max logs
        if (logDisplay.children.length > 20) {
            logDisplay.removeChild(logDisplay.lastChild);
        }
    }

    _startMapTicker() {
        if (this.mapTicker) return;
        this.mapTicker = setInterval(() => {
            const activeTab = document.querySelector('.feature-view.active');
            if (activeTab && activeTab.id === 'content-expedition') {
                this.renderActiveExpeditions();
            }
        }, 3000); // 3초마다 갱신
    }

    _openExpeditionModal(expedition) {
        // 크리처 선택 모달 표시
        const owned = this.game.creatureManager.owned || [];
        const available = owned.filter(c => !c.isOnExpedition);

        if (available.length === 0) {
            this.game.uiManager.showConfirm('탐사에 파견할 수 있는 크리처가 없습니다.', () => { });
            return;
        }

        // 간단한 선택 UI (첫 번째 크리처 자동 선택 or 모달)
        let html = `<div style="max-height:300px; overflow-y:auto;">`;
        available.forEach(c => {
            html += `
                <div class="creature-select-item" data-id="${c.instanceId}" 
                     style="display:flex; align-items:center; gap:10px; padding:10px; margin:5px 0; 
                            background:rgba(255,255,255,0.05); border-radius:8px; cursor:pointer;
                            border:1px solid transparent; transition:all 0.2s;">
                    <img src="${c.def.image}" style="width:40px; height:40px; border-radius:50%;">
                    <div>
                        <div style="font-weight:bold;">${c.def.name}</div>
                        <div style="font-size:0.8rem; color:#888;">Lv.${c.level} | ${c.def.rarity}</div>
                    </div>
                </div>
            `;
        });
        html += `</div>`;

        this.game.uiManager.showConfirm(
            `<div style="margin-bottom:10px;"><strong>${expedition.name}</strong>에 파견할 크리처를 선택하세요.</div>${html}`,
            () => { },
            true
        );

        // 모달 내 클릭 이벤트
        setTimeout(() => {
            document.querySelectorAll('.creature-select-item').forEach(item => {
                item.onclick = () => {
                    const creatureId = parseInt(item.dataset.id);
                    const result = this.game.expeditionManager.startExpedition(creatureId, expedition.id);
                    if (result) {
                        this.game.uiManager.hideModal();
                        this.addLog(`${expedition.name} 탐사 시작!`, 'expedition');
                    }
                };
                item.onmouseenter = () => item.style.border = '1px solid var(--accent-primary)';
                item.onmouseleave = () => item.style.border = '1px solid transparent';
            });
        }, 100);
    }
}
