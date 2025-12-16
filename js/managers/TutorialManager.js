export default class TutorialManager {
    constructor(game) {
        this.game = game;
        this.events = game.events;

        // 튜토리얼 상태
        this.currentStep = 0; // 0: 미시작/초기상태, 1~N: 진행중, -1: 완료/건너뜀
        this.isCompleted = false;

        // 단계별 정의
        this.steps = {
            1: {
                message: "일반 소환 버튼을 눌러 크리처를 소환해 주세요.",
                targetId: "btn-normal-summon",
                nextEvent: "summon:result"
            },
            2: {
                message: "방금 소환한 크리처를 목록에서 선택해 주세요.",
                targetId: "creature-list", // 혹은 첫 번째 카드
                nextEvent: "creatures:selected"
            },
            3: {
                message: "탐사 탭으로 이동해 주세요.",
                targetId: "tab-expedition",
                nextEvent: "ui:tabSwitched",
                condition: (tabId) => tabId === 'expedition'
            },
            4: {
                message: "숲 정찰(5초)을 선택해 탐사를 보내 주세요.",
                targetId: "expedition-list", // 특정 버튼을 가리키긴 어렵지만 리스트 전체 강조
                nextEvent: "expedition:started"
            },
            5: {
                message: "탐사가 완료될 때까지 기다려 주세요.",
                targetId: "active-expedition-list",
                nextEvent: "expedition:completed"
            },
            6: {
                message: "크리처 상세 패널에서 훈련 버튼을 눌러 레벨을 올려 보세요.",
                targetId: "detail-panel",
                // 상세 패널 내 버튼은 동적이므로 패널 전체 혹은 로직에서 처리
                nextEvent: "training:performed"
            },
            7: {
                message: "튜토리얼이 완료되었습니다. 이제 자유롭게 연구소를 운영해 보세요.",
                targetId: null,
                isLast: true
            }
        };

        // 이벤트 바인딩
        this.bindEvents();
    }

    bindEvents() {
        // 게임 내 주요 이벤트 구독하여 튜토리얼 진행 체크
        this.events.on('summon:result', () => this.checkStep(1));
        this.events.on('creatures:selected', () => this.checkStep(2));
        this.events.on('ui:tabSwitched', (tabId) => this.checkStep(3, tabId));
        this.events.on('expedition:started', () => this.checkStep(4));
        this.events.on('expedition:completed', () => this.checkStep(5));
        this.events.on('training:performed', () => this.checkStep(6));
    }

    // 튜토리얼 시작 (Game.init 후 호출됨)
    start() {
        // 이미 완료했거나 건너뛰었으면 무시
        if (this.currentStep === -1) return;

        // 처음 시작이면 1단계로
        if (this.currentStep === 0) {
            this.setStep(1);
        } else {
            // 로드된 상태가 있다면 그 단계 UI 표시
            this.showStepUI(this.currentStep);
        }
    }

    checkStep(stepNum, payload = null) {
        if (this.currentStep !== stepNum) return;

        const stepDef = this.steps[stepNum];
        if (!stepDef) return;

        // 추가 조건 체크 (예: 탭 이름 확인)
        if (stepDef.condition && !stepDef.condition(payload)) {
            return;
        }

        // 다음 단계로
        this.nextStep();
    }

    nextStep() {
        if (this.currentStep === -1) return;

        const next = this.currentStep + 1;
        if (this.steps[next]) {
            this.setStep(next);
        } else {
            // 더 이상 단계가 없으면 완료 처리 (UI에서 확인 누를 때 처리할 수도 있지만, 여기선 7단계 진입 시 완료 간주)
            // 7단계는 "완료되었습니다" 메시지이므로, 여기서 바로 -1로 가지 않고 머무름
        }
    }

    setStep(stepNum) {
        this.currentStep = stepNum;
        this.showStepUI(stepNum);
        this.game.save(); // 단계 변경 시 자동 저장
    }

    completeTutorial() {
        this.currentStep = -1;
        this.isCompleted = true;
        this.clearUI();
        this.game.save();
    }

    skipTutorial() {
        this.completeTutorial();
    }

    // UI 제어 (DOM 직접 제어 혹은 이벤트 발송)
    // 여기서는 간단히 DOM을 직접 제어하거나, main.js가 이벤트를 받아 처리하도록 할 수 있음.
    // 하지만 Manager가 DOM을 모르는 게 좋으므로 이벤트를 쏘거나, 
    // 편의상 여기서 UI 헬퍼를 호출할 수도 있음.
    // 요구사항: "TutorialManager 상태를 보고 하이라이트를 토글하는 구조여도 좋다"
    // -> 직접 제어 방식으로 구현 (Game.js가 window.game으로 노출, main.js에서 접근 가능하므로)
    // 하지만 main.js에 로직이 몰려있으니, 여기서 이벤트를 발생시켜 main.js가 그리게 하거나
    // 아니면 여기서 document 접근 (Manager가 DOM 접근하는 건 안티패턴이지만 빠름)

    // 여기서는 "tutorial:stepChanged" 이벤트를 쏘고 main.js가 처리하도록 유도하거나,
    // 간단하게 document.getElementById를 사용할 수 있음.
    // 유저 요청에 "TutorialManager.js 파일을 새로 만들어줘" 라고 했으니 여기에 UI 로직을 일부 넣거나 분리.
    // 유지보수를 위해 UI 업데이트 로직은 main.js 또는 별도 렌더러에 위임하는게 정석이나,
    // 코드가 흩어지는걸 방지하기 위해 여기서 DOM 조작을 일부 수행하거나 이벤트를 방출함.

    showStepUI(stepNum) {
        const stepDef = this.steps[stepNum];
        if (!stepDef) return;

        // UI 업데이트 이벤트 발생 -> main.js에서 수신하여 오버레이 표시
        this.events.emit('tutorial:stepChanged', {
            step: stepNum,
            message: stepDef.message,
            targetId: stepDef.targetId,
            isLast: stepDef.isLast
        });
    }

    clearUI() {
        this.events.emit('tutorial:ended');
    }

    // 저장/로드
    getSerializableState() {
        return {
            currentStep: this.currentStep,
            isCompleted: this.isCompleted
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.currentStep = state.currentStep ?? 0;
        this.isCompleted = state.isCompleted ?? false;
    }
}
