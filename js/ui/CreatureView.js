import BaseView from './BaseView.js';
import { getRequiredExp } from '../data/LevelData.js';

export default class CreatureView extends BaseView {
    init() {
        // 필터 및 정렬 이벤트 연결
        const filterIds = ['filter-rarity', 'filter-element', 'sort-order'];
        filterIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', () => this.renderCreatureList());
            }
        });

        // [NEW] Tab Switching Logic
        const tabInventory = document.getElementById('tab-btn-inventory');
        const tabArchive = document.getElementById('tab-btn-archive');
        this.currentTab = 'inventory'; // Default

        if (tabInventory && tabArchive) {
            tabInventory.addEventListener('click', () => this.switchTab('inventory'));
            tabArchive.addEventListener('click', () => this.switchTab('archive'));
        }

        // 자동 합성 버튼
        if (this.ui.btnAutoCompose) {
            this.ui.btnAutoCompose.addEventListener('click', () => this.handleAutoCompose());
        }

        // 데이터 갱신 감지
        this.game.creatureManager.on('creatures:updated', () => this.renderCreatureList());
        this.game.creatureManager.on('creatures:selected', (c) => this._handleCreatureSelected(c));
        this.game.creatureManager.on('creature:leveledUp', (data) => this._handleLevelUp(data));
        this.game.creatureManager.on('evolve:success', (data) => this._handleEvolveSuccess(data));

        // 탭 전환 감지
        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'home' || tabId === 'team') {
                this.renderCreatureList();
            }
        });
    }

    switchTab(tabName) {
        this.currentTab = tabName;

        // Update Tab UI
        const tabInventory = document.getElementById('tab-btn-inventory');
        const tabArchive = document.getElementById('tab-btn-archive');

        if (this.currentTab === 'inventory') {
            tabInventory.classList.add('active');
            tabInventory.style.borderBottom = '2px solid var(--accent-cyan)';
            tabInventory.style.color = 'white';

            tabArchive.classList.remove('active');
            tabArchive.style.borderBottom = '2px solid transparent';
            tabArchive.style.color = '#888';

            document.getElementById('archive-stats').style.display = 'none';
        } else {
            tabArchive.classList.add('active');
            tabArchive.style.borderBottom = '2px solid var(--accent-cyan)';
            tabArchive.style.color = 'white';

            tabInventory.classList.remove('active');
            tabInventory.style.borderBottom = '2px solid transparent';
            tabInventory.style.color = '#888';

            document.getElementById('archive-stats').style.display = 'block';
        }

        this.renderCreatureList();
    }

    switchTab(tabName) {
        this.currentTab = tabName;

        // Update Tab UI
        const tabInventory = document.getElementById('tab-btn-inventory');
        const tabArchive = document.getElementById('tab-btn-archive');

        if (this.currentTab === 'inventory') {
            if (tabInventory) {
                tabInventory.classList.add('active');
                tabInventory.style.borderBottom = '2px solid var(--accent-cyan)';
                tabInventory.style.color = 'white';
            }
            if (tabArchive) {
                tabArchive.classList.remove('active');
                tabArchive.style.borderBottom = '2px solid transparent';
                tabArchive.style.color = '#888';
            }
            const stats = document.getElementById('archive-stats');
            if (stats) stats.style.display = 'none';
        } else {
            if (tabArchive) {
                tabArchive.classList.add('active');
                tabArchive.style.borderBottom = '2px solid var(--accent-cyan)';
                tabArchive.style.color = 'white';
            }
            if (tabInventory) {
                tabInventory.classList.remove('active');
                tabInventory.style.borderBottom = '2px solid transparent';
                tabInventory.style.color = '#888';
            }
            const stats = document.getElementById('archive-stats');
            if (stats) stats.style.display = 'block';
        }

        this.renderCreatureList();
    }

    render() {
        this.renderCreatureList();
    }

    /**
     * @description 필터링 및 정렬된 크리처 목록을 렌더링합니다.
     */
    renderCreatureList() {
        if (!this.ui.creatureList) return;

        // [Archive] Stats Update (visible only in archive mode)
        if (this.currentTab === 'archive') {
            const cm = this.game.creatureManager;
            const allDefs = cm.getAllCreatureDefs();
            const uniqueOwned = new Set(cm.owned.map(c => c.dataId)).size;

            const statsEl = document.getElementById('archive-stats');
            if (statsEl) {
                statsEl.innerText = `수집 현황: ${uniqueOwned} / ${allDefs.length} (${(uniqueOwned / allDefs.length * 100).toFixed(1)}%)`;
            }
        }

        const list = this._getFilteredAndSortedCreatures();
        this.ui.creatureList.innerHTML = '';

        const isDeckMode = this.ui.creatureList.classList.contains('mode-deck-select');
        let currentDeckIds = [];
        if (isDeckMode) {
            const deckId = this.game.deckManager.currentEditingDeck || 'main';
            currentDeckIds = this.game.deckManager.decks[deckId] || [];
        }

        if (list.length === 0) {
            this.ui.creatureList.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:20px; color:#666;">조건에 맞는 크리처가 없습니다.</div>';
            return;
        }

        let lastWorld = null;

        list.forEach(c => {
            // [World Separator]
            if (this.ui.sortOrder && this.ui.sortOrder.value === 'world') {
                const currentWorld = c.def.world || 'Unknown';
                if (currentWorld !== lastWorld) {
                    const sep = document.createElement('div');
                    sep.className = 'world-separator';
                    sep.style.gridColumn = '1/-1';
                    sep.style.marginTop = '15px';
                    sep.style.marginBottom = '5px';
                    sep.style.borderBottom = '1px solid rgba(255,255,255,0.2)';
                    sep.style.paddingBottom = '5px';
                    sep.style.color = 'var(--accent-gold)';
                    sep.style.fontSize = '0.9em';
                    sep.style.fontWeight = 'bold';
                    sep.innerText = `🌍 ${currentWorld}`;
                    this.ui.creatureList.appendChild(sep);
                    lastWorld = currentWorld;
                }
            }

            const div = document.createElement('div');
            // isUnobtained check
            const isUnobtained = !!c.isUnobtained;

            div.className = `creature-card-mini rarity-${c.def.rarity}`;
            if (!isUnobtained) div.dataset.instanceId = c.instanceId;
            if (isUnobtained) div.classList.add('locked'); // CSS grayscale

            // 속성 아이콘 맵
            const elementIcons = { 'fire': '🔥', 'water': '💧', 'earth': '🌿', 'light': '✨', 'dark': '🌙' };
            const elementIcon = elementIcons[c.def.element] || '';

            // 등급 배지
            const rarityBadge = c.def.rarity === 'Normal' ? 'N' :
                c.def.rarity === 'Unique' ? 'U' :
                    c.def.rarity === 'Rare' ? 'R' :
                        c.def.rarity === 'Special' ? 'S' :
                            c.def.rarity === 'SR' ? 'SR' :
                                c.def.rarity === 'SSR' ? 'SSR' :
                                    c.def.rarity === 'UR' ? 'UR' : '?';

            if (isDeckMode && currentDeckIds.includes(c.instanceId)) {
                div.classList.add('equipped');
                div.style.opacity = '0.5';
                div.style.border = '2px solid #238636';
            }

            const lockIcon = (!isUnobtained && c.isLocked) ? '<span style="position:absolute; top:5px; right:5px; font-size:12px; z-index:20;">🔒</span>' : '';

            div.innerHTML = `
                <div class="element-badge" style="font-weight:900; font-size:0.9em;">${rarityBadge}</div>
                <img src="${c.def.image}" alt="${c.def.name}" onerror="this.src='images/creature_placeholder_unknown.png'">
                ${lockIcon}
                <div class="card-overlay">
                    <div class="card-name">${elementIcon} ${c.def.name}</div>
                    <div class="card-stats">${isUnobtained ? '미획득' : `Lv.${c.level} | ${'★'.repeat(c.star)}`}</div>
                </div>
            `;

            if (!isUnobtained) {
                div.onclick = () => {
                    if (isDeckMode) {
                        this._handleDeckSelect(c, currentDeckIds);
                    } else {
                        this.game.creatureManager.selectCreature(c.instanceId);
                        // 상세 패널 표시 (로비 캐릭터 자동 변경 제거)
                        this.renderDetailPanel(c);
                    }
                };
            } else {
                div.onclick = () => {
                    // Toast or Alert for unobtained
                };
            }
            this.ui.creatureList.appendChild(div);
        });
    }

    /**
     * @description 크리처 상세 정보를 모달로 렌더링하고 표시합니다.
     */
    renderDetailPanel(c) {
        const modal = document.getElementById('creature-detail-modal');
        const body = document.getElementById('modal-detail-body');
        if (!modal || !body) return;

        if (!c) {
            modal.style.display = 'none';
            return;
        }

        const nextExp = getRequiredExp(c.level);
        const expPercent = Math.min(100, (c.exp / nextExp) * 100).toFixed(1);
        const isMaxLevel = c.level >= 30;

        const lockBtnHtml = `<button id="btn-toggle-lock" class="cyber-btn small" style="color: ${c.isLocked ? '#ff5252' : 'inherit'};">
            ${c.isLocked ? '🔒 잠금됨' : '🔓 잠금해제'}
        </button>`;

        body.innerHTML = `
            <div class="detail-header" style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="margin:0; font-size:1.3rem;">
                    <span class="rarity-badge rarity-${c.def.rarity}" style="font-size:0.7em; padding:2px 8px; border-radius:4px; margin-right:5px; border:1px solid currentColor;">${c.def.rarity}</span>
                    ${c.def.name} 
                    <span style="color:#f1c40f; font-size:0.8em; margin-left:5px;">${'★'.repeat(c.star)}</span>
                    <div style="font-size:0.8rem; color:#ff4081; margin-top:4px; font-weight:normal;">
                        <span style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; margin-right:5px; border:1px solid rgba(255,255,255,0.2); font-size:0.75rem;">
                            🧠 ${c.def.ego || 'Normal'}
                        </span>
                        ❤️ Resonance: ${this.game.creatureManager.getResonanceScore(c).toLocaleString()}
                    </div>
                </h3>
                <button id="btn-close-detail" class="cyber-btn small icon-only" style="font-size:1.2rem; padding:5px 10px;">×</button>
            </div>
            
            <div class="detail-body fade-in" style="position:relative;">
                <div class="creature-info-row" style="display:flex; justify-content:space-between; margin:10px 0; font-size:0.9rem; color:#ccc;">
                    <div>
                        <span style="opacity:0.6;">World:</span> <span style="color:var(--accent-primary); font-weight:bold;">${c.def.world || 'Unknown'}</span>
                    </div>
                    <div>
                         <span style="opacity:0.6;">Elements:</span> ${this._renderElementIcons(c.def.elements || [c.def.element])}
                    </div>
                </div>
                
                <div class="creature-portrait-large" style="position:relative;">
                    <img src="${c.def.image}" alt="${c.def.name}" onerror="this.src='images/creature_placeholder_unknown.png'">
                    <div class="speech-bubble-modal" style="position:absolute; bottom:10px; left:50%; transform:translateX(-50%); width:90%; background:rgba(0,0,0,0.8); border:1px solid var(--accent-primary); border-radius:8px; padding:10px; font-size:0.9rem; text-align:center; color:#fff; box-shadow:0 0 10px rgba(0,0,0,0.5);">
                        "${c.def.lines?.normal || '...'}"
                    </div>
                </div>

                <!-- [NEW] 호감도 게이지 UI -->
                ${this._renderAffectionGauge(c)}

                <div class="stat-group" style="margin:15px 0; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                        <strong style="color:var(--text-primary);">Lv.${c.level}</strong>
                        <span style="font-size:0.85em; color:var(--text-secondary);">${isMaxLevel ? "MAX LEVEL" : `EXP ${Math.floor(expPercent)}%`}</span>
                    </div>
                    <div class="exp-bar" style="height:6px; background:rgba(0,0,0,0.5); border-radius:3px; overflow:hidden; margin-bottom:15px;">
                        <div class="exp-fill" style="width: ${isMaxLevel ? 100 : expPercent}%; height:100%; background:linear-gradient(90deg, var(--accent-primary), var(--accent-secondary)); box-shadow:0 0 5px var(--accent-primary);"></div>
                    </div>

                    <!-- 상세 능력치 표시 영역 -->
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.9rem;">
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">전투력</span>
                            <span style="color:var(--accent-cyan); font-weight:bold;">${Number(c.stats.explorePower || 0).toLocaleString()}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">체력 (HP)</span>
                            <span style="color:#ef5350; font-weight:bold;">${Number(c.stats.hp || 0).toLocaleString()}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">공격력</span>
                            <span style="color:#ffa726; font-weight:bold;">${Number(c.stats.atk || 0).toLocaleString()}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;">
                            <span style="color:#aaa;">방어력</span>
                            <span style="color:#42a5f5; font-weight:bold;">${Number(c.stats.def || 0).toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div class="action-group" style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:20px;">
                    <button id="btn-train-basic" class="cyber-btn action">기초 훈련</button>
                    <button id="btn-train-intensive" class="cyber-btn action premium">집중 강화</button>
                    <button id="btn-compose-creature" class="cyber-btn">강화 / 합성</button>
                    <button id="btn-evolve-creature" class="cyber-btn ${this._canEvolveUI(c).canEvolve ? 'premium' : ''}" ${this._canEvolveUI(c).canEvolve ? '' : 'disabled'} style="${this._canEvolveUI(c).canEvolve ? 'background:linear-gradient(135deg,#ff9800,#ff5722);' : ''}">${this._canEvolveUI(c).canEvolve ? '🦋 진화 가능!' : '🔒 진화'}</button>
                    ${this._canEvolveUI(c).evolvesTo ? `<div style="grid-column:span 2; font-size:0.8rem; color:#aaa; text-align:center;">진화 조건: ${this._canEvolveUI(c).reason || '조건 충족!'}</div>` : ''}
                    <button id="btn-set-representative" class="cyber-btn" style="grid-column: span 2; background: linear-gradient(135deg, #e91e63, #ad1457);">⭐ 대표 크리처로 설정</button>
                    <button id="btn-set-lobby" class="cyber-btn" style="grid-column: span 2; background: linear-gradient(135deg, #00bcd4, #0097a7);">🏠 로비 캐릭터로 설정</button>
                    ${c.def.lore ? `<button id="btn-show-story" class="cyber-btn" style="grid-column: span 2; background: linear-gradient(135deg, #9c27b0, #673ab7);">📖 스토리 보기</button>` : ''}
                    <div style="grid-column: span 2; display:flex; justify-content:space-between; gap:10px; margin-top:10px;">
                        ${lockBtnHtml}
                        ${c.def.gallery ? `<button id="btn-view-gallery" class="cyber-btn small" style="background:linear-gradient(135deg, #ff9800, #ff5722);">🖼️ 갤러리</button>` : ''}
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';

        // 상세 패널 이벤트 바인딩
        document.getElementById('btn-close-detail').onclick = () => {
            modal.style.display = 'none';
        };

        modal.onclick = (e) => {
            if (e.target === modal) modal.style.display = 'none';
        };

        document.getElementById('btn-toggle-lock').onclick = () => {
            this.game.creatureManager.toggleLock(c.instanceId);
            this.renderDetailPanel(this.game.creatureManager.getCreatureById(c.instanceId));
            this.renderCreatureList(); // 리스트의 잠금 아이콘 갱신
        };

        document.getElementById('btn-train-basic').onclick = () => this._handleTraining('basic', c.instanceId);
        document.getElementById('btn-train-intensive').onclick = () => this._handleTraining('intensive', c.instanceId);
        document.getElementById('btn-compose-creature').onclick = () => this._handleCompose(c.instanceId);

        // 진화 버튼 이벤트
        const evolveBtn = document.getElementById('btn-evolve-creature');
        if (evolveBtn && !evolveBtn.disabled) {
            evolveBtn.onclick = () => this._handleEvolve(c.instanceId);
        }

        // 대표 크리처 설정 버튼
        const repBtn = document.getElementById('btn-set-representative');
        if (repBtn) {
            repBtn.onclick = () => {
                this.game.creatureManager.setRepresentative(c.instanceId);
                // 로비 캐릭터 이미지 업데이트
                const lobbyImg = document.getElementById('lobby-character-img');
                if (lobbyImg) lobbyImg.src = c.def.image;
                alert(`${c.def.name}을(를) 대표 크리처로 설정했습니다!`);
                modal.style.display = 'none';
            };
        }

        // 로비 캐릭터 설정 버튼
        const lobbyBtn = document.getElementById('btn-set-lobby');
        if (lobbyBtn) {
            lobbyBtn.onclick = () => {
                localStorage.setItem('preferredLobbyCharacter', JSON.stringify({
                    instanceId: c.instanceId,
                    dataId: c.dataId
                }));
                // 즉시 로비 갱신
                if (typeof window.updateLobbyCharacter === 'function') {
                    window.game.currentLobbyCreature = c;
                    window.updateLobbyCharacter();
                }
                alert(`${c.def.name}을(를) 로비 캐릭터로 고정했습니다!`);
                modal.style.display = 'none';
            };
        }

        // 스토리 보기 버튼
        const storyBtn = document.getElementById('btn-show-story');
        if (storyBtn && c.def.lore) {
            storyBtn.onclick = () => this._showStoryModal(c);
        }

        // [NEW] 갤러리 버튼 이벤트 바인딩
        const galleryBtn = document.getElementById('btn-view-gallery');
        if (galleryBtn && c.def.gallery) {
            galleryBtn.onclick = () => this._showGalleryModal(c);
        }
    }

    /**
     * 진화 가능 여부 확인 (UI용)
     */
    _canEvolveUI(c) {
        if (!c) return { canEvolve: false };
        return this.game.creatureManager.canEvolve(c.instanceId);
    }

    /**
     * 스토리 모달 표시 (전용 모달)
     */
    _showStoryModal(c) {
        if (!c || !c.def.lore) return;

        const lore = c.def.lore;
        const allDefs = this.game.creatureManager.getAllCreatureDefs();

        const relHtml = lore.relationships?.map(rel => {
            const typeEmoji = rel.type === 'ally' ? '🤝' : rel.type === 'rival' ? '⚔️' : '👨‍👩‍👧';
            const typeLabel = rel.type === 'ally' ? '동맹' : rel.type === 'rival' ? '라이벌' : '가족';
            const typeColor = rel.type === 'ally' ? '#66bb6a' : rel.type === 'rival' ? '#ef5350' : '#f48fb1';

            // 관련 크리처 이름 조회
            const relCreature = allDefs.find(d => d.id === rel.id);
            const relName = relCreature ? relCreature.name : rel.id;

            return `
                <div style="margin:8px 0; padding:12px; background:linear-gradient(135deg, rgba(0,0,0,0.4), rgba(30,30,50,0.4)); border-radius:10px; border-left:3px solid ${typeColor};">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="color:${typeColor}; font-weight:bold; font-size:1rem;">${typeEmoji} ${typeLabel}</span>
                        <span style="color:var(--accent-gold); font-size:0.9rem;">→ ${relName}</span>
                    </div>
                    <div style="color:#ccc; font-size:0.9rem; line-height:1.5;">${rel.desc}</div>
                </div>`;
        }).join('') || '<div style="color:#666; padding:10px;">관계 정보가 없습니다.</div>';

        // 기존 스토리 모달 제거
        const existingModal = document.getElementById('story-modal');
        if (existingModal) existingModal.remove();

        // 새 모달 생성
        const modal = document.createElement('div');
        modal.id = 'story-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85); z-index: 3000;
            display: flex; justify-content: center; align-items: center;
            backdrop-filter: blur(5px);
        `;

        modal.innerHTML = `
            <div style="max-width:550px; max-height:80vh; overflow-y:auto; background:linear-gradient(135deg, #1a1a2e, #16213e); 
                        border-radius:16px; padding:25px; border:2px solid var(--accent-gold); box-shadow: 0 0 30px rgba(241,196,15,0.3);">
                <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.2);">
                <img src="${c.def.image}" style="width:80px; height:80px; border-radius:12px; object-fit:cover; border:2px solid var(--accent-gold);" onerror="this.src='images/creature_placeholder_unknown.png'">
                <div>
                    <h2 style="color:var(--accent-gold); margin:0; font-size:1.4rem;">📖 ${lore.title || c.def.name}</h2>
                    <div style="color:#888; font-size:0.9rem; margin-top:5px;">출신: ${lore.origin || '불명'}</div>
                </div>
            </div>
                
                <div style="margin-bottom:25px;">
                    <h3 style="color:var(--accent-cyan); margin-bottom:10px; font-size:1.1rem;">📜 이야기</h3>
                    <p style="line-height:1.8; color:#ddd; font-size:0.95rem; background:rgba(0,0,0,0.2); padding:15px; border-radius:10px;">
                        ${lore.story || '스토리 정보가 없습니다.'}
                    </p>
                </div>
                
                <div style="margin-bottom:20px;">
                    <h3 style="color:var(--accent-cyan); margin-bottom:10px; font-size:1.1rem;">👥 관계</h3>
                    ${relHtml}
                </div>

                <button id="btn-close-story" class="cyber-btn" style="width:100%; padding:15px; font-size:1rem; background:linear-gradient(135deg, #e91e63, #ad1457);">
                    닫기
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        // 닫기 버튼 이벤트
        document.getElementById('btn-close-story').onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    }


    /**
     * 진화 실행 핸들러
     */
    _handleEvolve(instanceId) {
        const check = this.game.creatureManager.canEvolve(instanceId);
        if (!check.canEvolve) {
            alert(`진화 불가: ${check.reason}`);
            return;
        }

        const creature = this.game.creatureManager.getCreature(instanceId);
        const oldImage = creature.def.image; // 진화 전 이미지 저장

        const targetName = check.evolvesTo.name;
        this.uiManager.showConfirm(
            `${targetName}(으)로 진화하시겠습니까?\n\n⚠️ 진화 시 레벨과 별이 초기화됩니다!`,
            () => {
                // 연출을 위해 여기서 먼저 데이터를 바꾸지 않고, 연출 시작
                // 하지만 tryEvolve가 데이터를 바꾸므로, 순서는:
                // 1. tryEvolve 실행 (데이터 변경)
                // 2. 결과 받음
                // 3. 연출 재생 (이전 이미지 -> 새 이미지)

                const result = this.game.creatureManager.tryEvolve(instanceId);
                if (result.success) {
                    // 성공 시 모달 닫고 연출 재생
                    const detailModal = document.getElementById('creature-detail-modal');
                    if (detailModal) detailModal.style.display = 'none';

                    this._playEvolutionCutscene(oldImage, result.newCreature, () => {
                        this.addLog(`🦋 [진화] ${result.newCreature.def.name}(으)로 진화 성공!`, 'success');
                        this.renderDetailPanel(result.newCreature); // 연출 끝나면 상세창 다시 열기
                        this.renderCreatureList();
                    });
                } else {
                    alert(`진화 실패: ${result.reason}`);
                }
            }
        );
    }

    _playEvolutionCutscene(oldInfoOrImage, newCreature, callback) {
        // 동적으로 컷신용 DOM 생성
        const cutsceneId = 'evolution-cutscene-overlay';
        let overlay = document.getElementById(cutsceneId);
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = cutsceneId;
            document.body.appendChild(overlay);

            // CSS 스타일 주입
            const style = document.createElement('style');
            style.innerHTML = `
                #${cutsceneId} {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: black; z-index: 10000;
                    display: flex; flex-direction: column; align-items: center; justify-content: center;
                    opacity: 0; transition: opacity 0.5s; pointer-events: none;
                }
                .evo-stage { position: relative; width: 400px; height: 400px; display: flex; justify-content: center; align-items: center; }
                .evo-img { 
                    max-width: 100%; max-height: 100%; object-fit: contain; 
                    filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
                    transition: all 1s ease-in-out;
                }
                .evo-flash {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background: white; opacity: 0; pointer-events: none; mix-blend-mode: overlay;
                }
                .evo-text {
                    margin-top: 30px; color: white; font-family: 'Orbitron', sans-serif;
                    text-align: center; opacity: 0; transform: translateY(20px); transition: all 0.5s;
                }
                .evo-particles {
                    position: absolute; width: 100%; height: 100%; pointer-events: none;
                }
                .particle {
                    position: absolute; background: gold; border-radius: 50%;
                    animation: floatParticle 1s linear forwards;
                }
                @keyframes floatParticle {
                    0% { transform: translateY(0) scale(1); opacity: 1; }
                    100% { transform: translateY(-100px) scale(0); opacity: 0; }
                }
                @keyframes shake {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    10% { transform: translate(-1px, -2px) rotate(-1deg); }
                    20% { transform: translate(-3px, 0px) rotate(1deg); }
                    30% { transform: translate(3px, 2px) rotate(0deg); }
                    40% { transform: translate(1px, -1px) rotate(1deg); }
                    50% { transform: translate(-1px, 2px) rotate(-1deg); }
                    60% { transform: translate(-3px, 1px) rotate(0deg); }
                    70% { transform: translate(3px, 1px) rotate(-1deg); }
                    80% { transform: translate(-1px, -1px) rotate(1deg); }
                    90% { transform: translate(1px, 2px) rotate(0deg); }
                    100% { transform: translate(1px, -2px) rotate(-1deg); }
                }
            `;
            document.head.appendChild(style);
        }

        const oldImgSrc = typeof oldInfoOrImage === 'string' ? oldInfoOrImage : (oldInfoOrImage.def ? oldInfoOrImage.def.image : '');

        overlay.innerHTML = `
            <div class="evo-stage">
                <div class="evo-particles"></div>
                <img src="${oldImgSrc}" class="evo-img" id="evo-target-img" onerror="this.src='images/creature_placeholder_unknown.png'">
                <div class="evo-flash" id="evo-flash"></div>
            </div>
            <div class="evo-text" id="evo-text">
                <h2 style="font-size: 2rem; color:#aaa; margin-bottom:10px;">Evolution...</h2>
            </div>
        `;

        overlay.style.pointerEvents = 'auto';
        overlay.style.display = 'flex';

        // Phase 0: Fade In
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });

        const imgEl = document.getElementById('evo-target-img');
        const flashEl = document.getElementById('evo-flash');
        const textEl = document.getElementById('evo-text');

        // Phase 1: Shake & Light (0~2s)
        setTimeout(() => {
            imgEl.style.animation = 'shake 0.5s infinite';
            imgEl.style.filter = 'brightness(2) drop-shadow(0 0 30px gold)';
        }, 500);

        // Phase 2: Flash & Swap (2s)
        setTimeout(() => {
            flashEl.style.transition = 'opacity 0.2s';
            flashEl.style.opacity = '1'; // Blind white
            flashEl.style.background = 'white';
            flashEl.style.mixBlendMode = 'normal';

            setTimeout(() => {
                // Swap Image
                imgEl.onerror = () => { imgEl.src = 'images/creature_placeholder_unknown.png'; imgEl.onerror = null; }; // Fallback
                imgEl.src = newCreature.def.image;
                imgEl.style.animation = '';
                imgEl.style.filter = 'brightness(1) drop-shadow(0 0 50px orange)';
                imgEl.style.transform = 'scale(1.2)';

                flashEl.style.opacity = '0'; // Fade out flash
            }, 200);
        }, 2000);

        // Phase 3: Text & Particles (2.5s~)
        setTimeout(() => {
            textEl.innerHTML = `
                <div style="font-size: 1.2rem; color: #gold;">EVOLUTION COMPLETE</div>
                <h1 style="font-size: 2.5rem; background: linear-gradient(to right, #ff9800, #ffeb3b); -webkit-background-clip: text; color: transparent;">${newCreature.def.name}</h1>
                <div style="margin-top:10px; font-size:1rem; color:#ccc;">${newCreature.star + 1} Star ${newCreature.def.rarity} Class</div>
            `;
            textEl.style.opacity = '1';
            textEl.style.transform = 'translateY(0)';

            // Particles
            const stage = overlay.querySelector('.evo-particles');
            for (let i = 0; i < 30; i++) {
                const p = document.createElement('div');
                p.className = 'particle';
                p.style.left = 50 + (Math.random() * 60 - 30) + '%';
                p.style.top = 50 + (Math.random() * 60 - 30) + '%';
                const size = Math.random() * 10 + 5;
                p.style.width = size + 'px';
                p.style.height = size + 'px';
                p.style.animationDelay = Math.random() * 0.5 + 's';
                stage.appendChild(p);
            }
        }, 2500);

        // Phase 4: End (5s)
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                if (callback) callback();
            }, 500);
        }, 5000);
    }

    /**
     * 합성(강화) 핸들러
     */
    _handleCompose(instanceId) {
        const creature = this.game.creatureManager.getCreature(instanceId);
        if (!creature) return;

        if (creature.star >= 5) {
            alert("이미 최대 강화 상태입니다! (5성)");
            return;
        }

        // 같은 종류, 같은 별의 재료 찾기
        const materials = this.game.creatureManager.owned.filter(c =>
            c.instanceId !== instanceId &&
            c.dataId === creature.dataId &&
            c.star === creature.star &&
            !c.isLocked
        );

        if (materials.length === 0) {
            alert(`합성 재료가 없습니다!\n\n필요: ${creature.def.name} (${creature.star}성, 잠금해제)`);
            return;
        }

        this.uiManager.showConfirm(
            `${creature.def.name}을(를) 합성하시겠습니까?\n\n재료: ${creature.def.name} (${creature.star}성) x1\n결과: ${creature.star + 1}성으로 강화`,
            () => {
                const result = this.game.creatureManager.tryCompose(instanceId, materials[0].instanceId);
                if (result.success) {
                    alert(`🎉 합성 성공! ${creature.star}성이 되었습니다!`);
                    this.addLog(`[합성] ${creature.def.name} ${creature.star}성 강화 성공!`, 'success');
                    this.renderDetailPanel(this.game.creatureManager.getCreature(instanceId));
                    this.renderCreatureList();
                } else {
                    alert(`합성 실패: ${result.reason}`);
                }
            }
        );
    }

    // --- 내부 헬퍼 메서드 ---

    _getFilteredAndSortedCreatures() {
        let list = [];
        const isDeckMode = this.ui.creatureList.classList.contains('mode-deck-select');

        // [Archive Mode]
        if (this.currentTab === 'archive' && !isDeckMode) {
            const allDefs = this.game.creatureManager.getAllCreatureDefs();
            const owned = this.game.creatureManager.owned;

            list = allDefs.map(def => {
                // Find best owned instance (highest star, then level)
                const ownedInstances = owned.filter(c => c.dataId === def.id);
                if (ownedInstances.length > 0) {
                    ownedInstances.sort((a, b) => (b.star - a.star) || (b.level - a.level));
                    return ownedInstances[0]; // Return best instance
                } else {
                    // Create unobtained placeholder
                    return {
                        instanceId: 'unobtained_' + def.id,
                        dataId: def.id,
                        def: def,
                        level: 0,
                        star: 0,
                        isUnobtained: true
                    };
                }
            });
        } else {
            // Normal Inventory Mode (Owned Only)
            list = [...(this.game.creatureManager.owned || [])];
        }

        const rFilter = this.ui.filterRarity ? this.ui.filterRarity.value : 'all';
        const eFilter = this.ui.filterElement ? this.ui.filterElement.value : 'all';

        if (rFilter !== 'all') list = list.filter(c => c.def.rarity === rFilter);
        if (eFilter !== 'all') {
            list = list.filter(c => {
                if (c.def.elements) return c.def.elements.includes(eFilter);
                return c.def.element === eFilter;
            });
        }

        const sort = this.ui.sortOrder ? this.ui.sortOrder.value : 'rarity_desc';
        const rarityRank = { 'UR': 7, 'SSR': 6, 'SR': 5, 'Special': 4, 'Rare': 3, 'Unique': 2, 'Normal': 1 };

        list.sort((a, b) => {
            if (sort === 'rarity_desc') {
                const ra = rarityRank[a.def.rarity] || 0;
                const rb = rarityRank[b.def.rarity] || 0;
                return (ra !== rb) ? rb - ra : b.level - a.level;
            } else if (sort === 'level_desc') {
                return (a.level !== b.level) ? b.level - a.level : (rarityRank[b.def.rarity] || 0) - (rarityRank[a.def.rarity] || 0);
            } else if (sort === 'world') {
                // Sort by World -> Rarity -> Name
                const wa = a.def.world || 'ZZZ'; // Unknown last
                const wb = b.def.world || 'ZZZ';
                if (wa !== wb) return wa.localeCompare(wb);
                const ra = rarityRank[a.def.rarity] || 0;
                const rb = rarityRank[b.def.rarity] || 0;
                return rb - ra;
            } else if (sort === 'recent') {
                return b.instanceId - a.instanceId;
            }
            return 0;
        });

        return list;
    }

    _handleCreatureSelected(c) {
        this.renderDetailPanel(c);
        const cards = this.ui.creatureList.children;
        Array.from(cards).forEach(card => {
            if (card.dataset.instanceId === String(c.instanceId)) {
                card.classList.add('selected');
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                card.classList.remove('selected');
            }
        });
    }

    _handleLevelUp(data) {
        const { creature, oldLevel, newLevel } = data;
        this.addLog(`[성장] ${creature.def.name} 레벨업! Lv.${oldLevel} -> Lv.${newLevel}`);
        if (this.game.creatureManager.selectedId === creature.instanceId) {
            this.renderDetailPanel(creature);
        }
    }

    _handleEvolveSuccess(data) {
        const { creature, oldName, newName } = data;
        this.addLog(`🦋 [진화] ${oldName} → ${newName} 진화 성공!`, 'success');
        this.renderCreatureList();
        if (this.game.creatureManager.selectedId === creature.instanceId) {
            this.renderDetailPanel(creature);
        }
    }

    _handleDeckSelect(c, currentDeckIds) {
        const deckId = this.game.deckManager.currentEditingDeck || 'main';
        if (currentDeckIds.includes(c.instanceId)) {
            this.addLog(`[덱] 이미 장착된 크리처입니다.`);
            return;
        }

        const emptyIdx = currentDeckIds.indexOf(null);
        if (emptyIdx !== -1) {
            this.game.deckManager.setCreature(deckId, emptyIdx, c.instanceId);
            this.game.events.emit('ui:deckUpdated'); // TeamView에서 수신
            this.renderCreatureList();
        } else {
            alert("덱이 가득 찼습니다! 팀 관리 탭에서 기존 크리처를 해제하세요.");
        }
    }

    _handleTraining(type, instanceId) {
        const result = this.game.creatureManager.tryTrain(instanceId, type);
        if (result.success) {
            const label = type === 'basic' ? '기초 훈련' : '집중 강화';
            this.addLog(`[${label}] 경험치 +${result.expGained} 획득!`, 'success');
            if (result.leveledUp) {
                this.addLog(`[성장] 레벨업! Lv.${result.newLevel}`, 'success');
            }
            // 상세 패널 및 리스트 갱신
            const c = this.game.creatureManager.getCreatureById(instanceId);
            if (c) this.renderDetailPanel(c);
            this.renderCreatureList();
        } else {
            this.addLog(`[훈련 실패] ${result.reason}`, 'error');
        }
    }

    handleAutoCompose() {
        this.uiManager.showConfirm("잠금되지 않은 중복 크리처를 모두 합성하시겠습니까?", () => {
            const result = this.game.creatureManager.autoCompose();
            if (result.count > 0) {
                alert(`총 ${result.count}회의 합성이 완료되었습니다.`);
                result.logs.forEach(msg => this.addLog(msg));
            } else {
                alert("합성 가능한 대상이 없습니다.");
            }
        });
    }

    _renderElementIcons(elements) {
        if (!elements) return '';
        const iconMap = {
            'Fire': '🔥', 'Water': '💧', 'Earth': '🌿', 'Wind': '🌪️', 'Light': '✨', 'Dark': '🌙',
            'Metal': '⚙️', 'Ice': '❄️', 'Nature': '🍀', 'Lightning': '⚡', 'Time': '⏳',
            'Void': '⚫', 'Chaos': '🌀', 'Life': '🌱'
        };

        return elements.map(e => `<span title="${e}" style="cursor:help;">${iconMap[e] || e}</span>`).join(' ');
    }

    /**
     * 호감도 게이지 UI 렌더링
     */
    _renderAffectionGauge(c) {
        const score = this.game.creatureManager.getResonanceScore(c);
        const level = this.game.creatureManager.getAffectionLevel(c);
        const levels = { 0: 100, 1: 300, 2: 1000, 3: 2000 };
        const labels = ['경계', '관심', '신뢰', '서약'];
        const colors = ['#9e9e9e', '#66bb6a', '#f48fb1', '#ad1457'];
        const max = levels[level] || 2000;
        const prevMax = level > 0 ? (levels[level - 1] || 0) : 0;

        let percent = 0;
        if (level >= 3) {
            percent = 100;
        } else {
            percent = Math.max(0, Math.min(100, ((score - prevMax) / (max - prevMax)) * 100));
        }

        // 갤러리 언락 정보
        let galleryInfo = '';
        if (c.def.gallery && c.def.gallery.length > 0) {
            const unlocked = c.def.gallery.filter(g => g.level <= level).length;
            const total = c.def.gallery.length;
            galleryInfo = `<span style="font-size:0.8em; color:#ff9800;">🖼️ ${unlocked}/${total} 해금</span>`;
        }

        return `
            <div style="margin:15px 0; padding:12px; background:linear-gradient(135deg, rgba(233,30,99,0.1), rgba(255,152,0,0.1)); border-radius:10px; border:1px solid ${colors[level]};">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:1.5em;">❤️</span>
                        <span style="color:${colors[level]}; font-weight:bold; font-size:1.1em;">${labels[level]}</span>
                        <span style="color:#888; font-size:0.9em;">Lv.${level}</span>
                    </div>
                    ${galleryInfo}
                </div>
                <div style="background:rgba(0,0,0,0.3); border-radius:5px; height:10px; overflow:hidden;">
                    <div style="width:${percent}%; height:100%; background:linear-gradient(90deg, ${colors[level]}, #ff9800); transition:width 0.5s; box-shadow:0 0 8px ${colors[level]};"></div>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:5px; font-size:0.8em; color:#aaa;">
                    <span>${score.toLocaleString()} / ${max.toLocaleString()}</span>
                    <span>${level < 3 ? `다음: ${labels[level + 1]}` : '서약 완료 ♥'}</span>
                </div>
            </div>
        `;
    }

    /**
     * 갤러리 모달 표시
     */
    _showGalleryModal(c) {
        if (!c || !c.def.gallery) return;

        const level = this.game.creatureManager.getAffectionLevel(c);
        const gallery = c.def.gallery;

        const imagesHtml = gallery.map(g => {
            const unlocked = g.level <= level;
            return `
                <div style="text-align:center; padding:10px; background:rgba(0,0,0,0.3); border-radius:10px; border:1px solid ${unlocked ? '#ff9800' : '#444'};">
                    <img src="${unlocked ? g.image : 'images/locked_placeholder.png'}" 
                         alt="${g.title}" 
                         style="width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:8px; filter:${unlocked ? 'none' : 'grayscale(100%) blur(5px)'};">
                    <div style="margin-top:8px; font-weight:bold; color:${unlocked ? '#fff' : '#666'};">${unlocked ? g.title : '🔒 Lv.' + g.level + ' 필요'}</div>
                    <div style="font-size:0.8em; color:#aaa;">${unlocked ? g.desc : '호감도를 올려주세요'}</div>
                </div>
            `;
        }).join('');

        // 모달 생성
        const existingModal = document.getElementById('gallery-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.id = 'gallery-modal';
        modal.style.cssText = `
            position:fixed; top:0; left:0; right:0; bottom:0;
            background:rgba(0,0,0,0.9); z-index:3000;
            display:flex; justify-content:center; align-items:center;
            backdrop-filter:blur(5px);
        `;

        modal.innerHTML = `
            <div style="max-width:600px; max-height:85vh; overflow-y:auto; background:linear-gradient(135deg, #1a1a2e, #16213e); 
                        border-radius:16px; padding:25px; border:2px solid #ff9800; box-shadow:0 0 30px rgba(255,152,0,0.3);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.2);">
                    <h2 style="color:#ff9800; margin:0;">🖼️ ${c.def.name} 갤러리</h2>
                    <button id="btn-close-gallery" class="cyber-btn small">×</button>
                </div>
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:15px;">
                    ${imagesHtml}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('btn-close-gallery').onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    }
}
