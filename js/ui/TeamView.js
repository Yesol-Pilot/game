import BaseView from './BaseView.js';

export default class TeamView extends BaseView {
    init() {
        // 대표 덱 설정 버튼
        const btnSetMain = document.getElementById('btn-set-main-deck');
        if (btnSetMain) {
            btnSetMain.addEventListener('click', () => {
                this.game.deckManager.setActiveDeck(this.game.deckManager.currentEditingDeck);
                this.render();
                alert("대표 덱으로 설정되었습니다!");
            });
        }

        // 덱 탭 전환 이벤트
        document.querySelectorAll('.deck-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                this.game.deckManager.currentEditingDeck = btn.dataset.deck;
                this.render();
            });
        });

        // 덱 업데이트 이벤트 감지
        this.game.events.on('ui:deckUpdated', () => this.render());

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'team') {
                this.ui.creatureList.classList.add('mode-deck-select');
                this.render();
            }
        });
    }

    render() {
        const deckManager = this.game.deckManager;
        const currentDeckId = deckManager.currentEditingDeck || 'main';
        const deckData = deckManager.getDeck(currentDeckId);
        const activeDeckId = deckManager.activeDeckId;

        // 1. 탭 상태 업데이트
        document.querySelectorAll('.deck-tab').forEach(btn => {
            btn.classList.remove('active');
            btn.style.border = "";
            if (btn.dataset.deck === currentDeckId) {
                btn.classList.add('active');
                if (currentDeckId === activeDeckId) {
                    btn.style.border = "1px solid var(--accent-primary)";
                }
            }
        });

        // 2. 대표 덱 라벨 및 버튼 상태
        const labelActive = document.getElementById('label-active-deck');
        const btnSetMain = document.getElementById('btn-set-main-deck');
        if (labelActive) {
            if (currentDeckId === activeDeckId) {
                labelActive.innerHTML = `현재: <span style="color:var(--accent-primary)">대표 덱</span> (PvP 주력)`;
                if (btnSetMain) btnSetMain.style.display = 'none';
            } else {
                labelActive.innerHTML = `현재: 보조 덱`;
                if (btnSetMain) btnSetMain.style.display = 'inline-block';
            }
        }

        // 3. 슬롯 렌더링
        const slotsContainer = document.getElementById('deck-slots');
        if (slotsContainer) {
            slotsContainer.innerHTML = '';
            if (Array.isArray(deckData)) {
                deckData.forEach((creatureId, idx) => {
                    slotsContainer.appendChild(this._createSlotElement(creatureId, idx, currentDeckId));
                });
            } else {
                // 덱 데이터가 꼬였거나 로드되지 않았을 경우 초기화 (5슬롯)
                for (let i = 0; i < 5; i++) {
                    slotsContainer.appendChild(this._createSlotElement(null, i, currentDeckId));
                }
            }
        }

        // 4. 보유 크리처 풀 렌더링
        this.renderPool();
    }

    renderPool() {
        const poolContainer = document.getElementById('deck-pool');
        if (!poolContainer) return;

        poolContainer.innerHTML = '';
        const allCreatures = this.game.creatureManager.owned; // 필터링: 보유 목록만 사용

        if (!allCreatures || allCreatures.length === 0) {
            poolContainer.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:#AAA; padding:20px;">보유한 크리처가 없습니다. 소환을 진행해주세요.</div>';
            return;
        }

        // 정렬: 레벨 내림차순 -> 등급 내림차순
        const sorted = [...allCreatures].sort((a, b) => {
            if (b.def.rarity !== a.def.rarity) {
                const rarityScore = { 'UR': 6, 'SSR': 5, 'SR': 4, 'Special': 3, 'Rare': 2, 'Unique': 1, 'Normal': 0 };
                return (rarityScore[b.def.rarity] || 0) - (rarityScore[a.def.rarity] || 0);
            }
            return b.level - a.level;
        });

        const deckManager = this.game.deckManager;
        const currentDeckId = deckManager.currentEditingDeck || 'main';
        const currentDeck = deckManager.getDeck(currentDeckId);

        sorted.forEach(c => {
            const isEquipped = currentDeck.includes(c.instanceId);

            // Grid Item 생성 (creature-card-mini 스타일 활용 및 오버라이딩)
            const card = document.createElement('div');
            card.className = `creature-card-mini rarity-${c.def.rarity}`;
            // TeamView 전용 스타일 오버라이딩
            card.style.position = 'relative';
            card.style.opacity = isEquipped ? '0.5' : '1';

            card.innerHTML = `
                <img src="${c.def.image}" alt="${c.def.name}">
                <div class="card-info">
                    <div class="card-name">${c.def.name}</div>
                    <div class="card-stats">Lv.${c.level}</div>
                </div>
                ${isEquipped ? '<div style="position:absolute; inset:0; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; font-weight:bold; color:#fff; font-size:0.8em; z-index:10;">장착중</div>' : ''}
            `;

            if (!isEquipped) {
                card.onclick = () => {
                    const emptyIdx = currentDeck.findIndex(slot => slot === null);
                    if (emptyIdx !== -1) {
                        deckManager.addToDeck(currentDeckId, c.instanceId);
                        this.game.events.emit('ui:deckUpdated');
                    } else {
                        alert("덱 슬롯이 가득 찼습니다! 슬롯을 비우고 선택해주세요.");
                    }
                };
            }

            poolContainer.appendChild(card);
        });
    }

    _createSlotElement(creatureId, idx, deckId) {
        const slot = document.createElement('div');
        slot.className = 'deck-slot';
        slot.style.cssText = "width:80px; height:80px; background:rgba(0,0,0,0.3); border:2px dashed #444; display:flex; align-items:center; justify-content:center; position:relative; cursor:pointer; border-radius:8px;";

        if (creatureId) {
            const creature = this.game.creatureManager.getCreatureById(creatureId);
            if (creature) {
                slot.style.border = "2px solid var(--accent-secondary)";
                slot.style.borderStyle = "solid";
                slot.innerHTML = `
                    <img src="${creature.def.image}" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">
                    <div style="position:absolute; bottom:0; right:0; background:rgba(0,0,0,0.7); color:white; font-size:0.7em; padding:1px 5px; border-radius:4px 0 4px 0;">Lv.${creature.level}</div>
                    <button class="btn-remove-slot" style="position:absolute; top:-8px; right:-8px; background:#ff5252; color:white; border:none; border-radius:50%; width:22px; height:22px; font-size:12px; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 4px rgba(0,0,0,0.3);">X</button>
                `;

                slot.querySelector('.btn-remove-slot').addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.game.deckManager.removeCreature(deckId, idx);
                    this.render();
                    // CreatureList도 갱신하여 'Equipped' 상태 해제
                    this.game.events.emit('ui:deckUpdated');
                });
            }
        } else {
            slot.innerHTML = `<span style="color:#555; font-size:2em;">+</span>`;
        }

        return slot;
    }
}
