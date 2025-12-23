/**
 * @class UIManager
 * @description 전역 UI 요소 캐싱, 탭 전환, 공통 UI 기능(로그, 모달)을 관리합니다.
 */
export default class UIManager {
    constructor(game) {
        this.game = game;
        this.ui = this._cacheElements();
        this.currentHighlight = null;
        this._initCommonEvents();
    }

    /**
     * @private
     * @description 주요 UI 요소들을 한 번만 캐싱합니다.
     */
    _cacheElements() {
        return {
            // 사이드바 및 탭
            tabHome: document.getElementById('tab-home'),
            tabSummon: document.getElementById('tab-summon'),
            tabExpedition: document.getElementById('tab-expedition'),
            tabResearch: document.getElementById('tab-research'),
            tabMission: document.getElementById('tab-mission'),
            tabShop: document.getElementById('tab-shop'),
            tabTeam: document.getElementById('tab-team'),
            tabBattle: document.getElementById('tab-battle'),

            // 메인 컨텐츠 영역
            contentHome: document.getElementById('content-home'), // [Mod] Renamed from layout-container
            contentSummon: document.getElementById('content-summon'),
            contentExpedition: document.getElementById('content-expedition'),
            contentResearch: document.getElementById('content-research'),
            contentMission: document.getElementById('content-mission'),
            contentShop: document.getElementById('content-shop'),
            contentTeam: document.getElementById('content-team'),
            contentBattle: document.getElementById('content-battle'),

            // 공통 패널
            creatureList: document.getElementById('creature-list'),
            detailPanel: document.getElementById('detail-panel'),
            logContent: document.getElementById('log-content'),

            // 필터 & 정렬
            sortOrder: document.getElementById('sort-order'),
            filterRarity: document.getElementById('filter-rarity'),
            filterElement: document.getElementById('filter-element'),
            btnAutoCompose: document.getElementById('btn-auto-compose'),
            autoBattleSelect: document.getElementById('select-auto-battle'),

            // 로비 캐릭터
            lobbyCharacterImg: document.getElementById('lobby-character-img'),

            // 상태바 리소스
            goldDisplay: document.getElementById('gold-display'),
            gemDisplay: document.getElementById('gem-display'),
            energyDisplay: document.getElementById('energy-display'),

            // 스테이지/전투 UI
            stageTitle: document.getElementById('stage-title'),
            stageInfo: document.getElementById('stage-info'),
            stageRewards: document.getElementById('stage-rewards'),
            btnPrevStage: document.getElementById('btn-prev-stage'),
            btnNextStage: document.getElementById('btn-next-stage'),
            btnStartStage: document.getElementById('btn-start-stage'),

            // 오버레이 및 모달
            loginOverlay: document.getElementById('login-overlay'),
            modalOverlay: document.getElementById('custom-modal-overlay'),
            modalMsg: document.getElementById('custom-modal-msg'),
            btnModalYes: document.getElementById('btn-modal-yes'),
            btnModalNo: document.getElementById('btn-modal-no'),

            // 개발자 치트
            devFill: document.getElementById('devFillResources')
        };
    }

    /**
     * @private
     * @description 공통 UI 이벤트를 초기화합니다.
     */
    _initCommonEvents() {
        // 탭 이벤트 연결
        const tabPairs = [
            { btn: this.ui.tabHome, id: 'home' },
            { btn: this.ui.tabSummon, id: 'summon' },
            { btn: this.ui.tabExpedition, id: 'expedition' },
            { btn: this.ui.tabResearch, id: 'research' },
            { btn: this.ui.tabMission, id: 'mission' },
            { btn: this.ui.tabShop, id: 'shop' },
            { btn: this.ui.tabTeam, id: 'team' },
            { btn: this.ui.tabBattle, id: 'battle' }
        ];

        tabPairs.forEach(pair => {
            if (pair.btn) {
                pair.btn.addEventListener('click', () => {
                    console.log(`[UIManager] Tab clicked: ${pair.id}`);
                    this.switchTab(pair.id);
                });
            } else {
                console.warn(`[UIManager] Tab button missing for id: ${pair.id}`);
            }
        });

        // 개발자 치트 버튼
        if (this.ui.devFill) {
            this.ui.devFill.addEventListener('click', () => {
                this.game.resourceManager.addGold(10000);
                this.game.resourceManager.addGem(100);
                this.game.resourceManager.addEnergy(100);
                this.addLog("치트 사용: 자원 충전 완료");
            });
        }
    }

    /**
     * @description 탭을 전환하고 관련 뷰를 활성화합니다.
     * @param {string} tabId 
     */
    switchTab(tabId) {
        // 1. 모든 컨텐츠 숨김 (동적 조회)
        const contentIds = [
            'content-home', 'content-summon', 'content-expedition',
            'content-research', 'content-mission', 'content-shop',
            'content-team', 'content-battle', 'content-prestige'
        ];
        contentIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('active');
                el.style.display = 'none';
            }
        });

        // 2. 모든 탭 버튼 비활성화 (동적 조회)
        const tabIds = [
            'tab-home', 'tab-summon', 'tab-expedition',
            'tab-research', 'tab-mission', 'tab-shop',
            'tab-team', 'tab-battle'
        ];
        tabIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('active');
        });

        // 3. 대상 활성화
        const targetBtn = document.getElementById(`tab-${tabId}`);
        // [Mod] Standardized content ID
        const targetContentId = `content-${tabId}`;
        const targetContent = document.getElementById(targetContentId);

        if (targetBtn) targetBtn.classList.add('active');
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.style.display = (tabId === 'home') ? 'grid' : 'block'; // Home uses Grid
            console.log(`[UIManager] Activated tab content: ${targetContentId}`);
        } else {
            console.error(`[UIManager] Failed to find target content for tab: ${tabId} (ID: ${targetContentId})`);
        }

        // [Fix] 로비 캐릭터는 홈 화면에서만 표시
        const lobbyVisual = document.getElementById('lobby-visual-container');
        if (lobbyVisual) {
            lobbyVisual.style.display = (tabId === 'home') ? 'block' : 'none';
        }

        // [Mode Cleanup] 덱 설정 모드 해제 로직 등
        if (tabId !== 'team') {
            this.ui.creatureList.classList.remove('mode-deck-select');
        }

        // 전역 이벤트 발생 (각 View에서 인지하여 렌더링하도록 함)
        this.game.events.emit('ui:tabSwitched', tabId);
    }

    /**
     * @description 로그 시스템에 메시지를 추가합니다.
     * @param {string} msg 
     * @param {string} type 
     */
    addLog(message, type = 'info') {
        if (!this.ui.logContent) return;

        const entry = document.createElement('div');
        entry.className = `log-entry log-${type}`;
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        this.ui.logContent.prepend(entry);

        // 로그 개수 제한 (최대 50개)
        while (this.ui.logContent.children.length > 50) {
            this.ui.logContent.removeChild(this.ui.logContent.lastChild);
        }
    }

    /**
     * @description 로비 캐릭터를 변경합니다.
     * @param {Object} creature - 표시할 크리처 인스턴스
     */
    setLobbyCharacter(creature) {
        if (!this.ui.lobbyCharacterImg) return;

        if (creature && creature.def) {
            this.ui.lobbyCharacterImg.src = creature.def.image;
            this.ui.lobbyCharacterImg.alt = creature.def.name;
            this.addLog(`로비 캐릭터를 ${creature.def.name}(으)로 변경했습니다.`, 'success');
        }
    }

    /**
     * @description 커스텀 확인 모달을 띄웁니다.
     * @param {string} message 
     * @param {Function} onYes 
     * @param {boolean} isHTML - HTML 태그 포함 여부
     */
    showConfirm(message, onYes, isHTML = false) {
        if (!this.ui.modalOverlay) {
            if (confirm(message)) onYes();
            return;
        }

        if (isHTML) {
            this.ui.modalMsg.innerHTML = message;
        } else {
            this.ui.modalMsg.innerText = message;
        }

        this.ui.modalOverlay.style.display = 'flex';

        this.ui.btnModalYes.onclick = () => {
            this.ui.modalOverlay.style.display = 'none';
            if (onYes) onYes();
        };
        this.ui.btnModalNo.onclick = () => {
            this.ui.modalOverlay.style.display = 'none';
        };
    }

    /**
     * @description 모달을 강제로 닫습니다.
     */
    hideModal() {
        if (this.ui.modalOverlay) {
            this.ui.modalOverlay.style.display = 'none';
        }
    }

    /**
     * @description 로비 캐릭터 터치 상호작용 초기화
     */
    initLobbyInteraction() {
        const zones = ['head', 'body', 'legs'];
        const reactions = {
            head: [
                "머리를 쓰다듬어 주시는 건가요? 기분 좋네요.",
                "지휘관님, 머리가 헝클어지잖아요...",
                "후훗, 칭찬해 주시는 건가요?"
            ],
            body: [
                "어머, 어딜 만지시는 거죠?",
                "가슴이 두근거려요...",
                "지휘관님, 너무 가까워요!"
            ],
            legs: [
                "무릎베개... 원하시나요?",
                "지휘관님, 발은 조금 부끄러워요...",
                "간지러워요!"
            ]
        };

        zones.forEach(zone => {
            const el = document.getElementById(`touch-${zone}`);
            if (el) {
                el.addEventListener('click', (e) => {
                    e.stopPropagation(); // 이벤트 전파 방지
                    const texts = reactions[zone];
                    const randomText = texts[Math.floor(Math.random() * texts.length)];
                    this.showLobbySpeech(randomText);

                    // 애니메이션 효과 (작게 흔들림)
                    const img = document.getElementById('lobby-character-img');
                    if (img) {
                        img.style.transform = 'scale(1.02)';
                        setTimeout(() => img.style.transform = 'scale(1)', 150);
                    }
                });
            }
        });
    }

    showLobbySpeech(text) {
        const bubble = document.getElementById('lobby-speech-bubble');
        const textSpan = document.getElementById('lobby-speech-text');

        if (bubble && textSpan) {
            textSpan.innerText = text;
            bubble.classList.add('active');

            // 기존 타이머 제거 후 재설정
            if (this._speechTimer) clearTimeout(this._speechTimer);
            this._speechTimer = setTimeout(() => {
                bubble.classList.remove('active');
            }, 3000);
        }
    }

    highlightElement(elementId) {
        if (this.currentHighlight) {
            this.currentHighlight.classList.remove('highlight');
        }

        const target = document.getElementById(elementId);
        if (target) {
            target.classList.add('highlight');
            this.currentHighlight = target;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}
