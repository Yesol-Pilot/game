import BaseView from './BaseView.js';

export default class AuthView extends BaseView {
    constructor(game, uiManager, langManager) {
        super(game, uiManager);
        this.langManager = langManager || game.langManager;
        this.selectedPersona = 'director_vesper';
        this.isLoginMode = true;
    }

    checkLogin() {
        return !!(this.game.authManager && this.game.authManager.currentUser);
    }

    init() {
        // [Fix] UI 요소 캐싱 (Error: Cannot read properties of undefined (reading 'authMessage'))
        this.uiElements = {
            usernameInput: document.getElementById('auth-username'),
            passwordInput: document.getElementById('auth-password'),
            confirmInput: document.getElementById('auth-confirm-password'),
            authMessage: document.getElementById('auth-message')
        };

        // 1. 탭 전환 (로그인 / 회원가입)
        const tabLogin = document.getElementById('tab-login-mode');
        const tabSignup = document.getElementById('tab-signup-mode');

        if (tabLogin && tabSignup) {
            tabLogin.onclick = () => {
                this.isLoginMode = true;
                tabLogin.classList.add('active');
                tabSignup.classList.remove('active');
                this._updateAuthFormUI();
            };
            tabSignup.onclick = () => {
                this.isLoginMode = false;
                tabSignup.classList.add('active');
                tabLogin.classList.remove('active');
                this._updateAuthFormUI();
            };
        }

        // 2. 페르소나(아바타) 선택 버튼
        const avatarBtns = document.querySelectorAll('.avatar-option');
        avatarBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                avatarBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.selectedPersona = btn.dataset.id;
                this._updatePersonaInfo();
            });
        });

        // 3. 폼 제출 버튼 (btn-auth-action)
        const btnAction = document.getElementById('btn-auth-action');
        if (btnAction) {
            console.log("[AuthView] Binding auth action button");
            btnAction.addEventListener('click', () => {
                console.log("[AuthView] Auth button clicked");
                this.handleAuthSubmit();
            });
        } else {
            console.error("[AuthView] Auth action button not found!");
        }

        // 4. 로그아웃 버튼 (있을 경우) - 커스텀 모달 사용
        const btnLogout = document.getElementById('btn-logout');
        if (btnLogout) {
            btnLogout.addEventListener('click', () => {
                // 커스텀 확인 모달 사용 (브라우저 팝업 차단 이슈 방지)
                this._showLogoutConfirmModal();
            });
        }

        // 5. 로그인 성공 시 처리
        this.game.authManager.events.on('auth:login', () => {
            if (this.ui.loginOverlay) this.ui.loginOverlay.style.display = 'none';
        });

        // 세션 복구 시 처리
        this.game.authManager.events.on('auth:restored', (user) => {
            console.log(`[AuthView] Session restored for ${user.username}`);
            this._updateHeaderUserName(user.username);
            if (this.ui.loginOverlay) this.ui.loginOverlay.style.display = 'none';
            this.game.startMainGame(); // 게임 시작 로직 트리거
        });

        // 초기화 시 UI 업데이트
        this._updatePersonaInfo();
        this._updateAuthFormUI();
    }

    _updateHeaderUserName(name) {
        const el = document.getElementById('header-user-name');
        if (el) el.innerText = name;
    }

    async handleAuthSubmit() {
        if (!this.isLoginMode) {
            await this._handleSignup();
            return;
        }

        const usernameInput = document.getElementById('auth-username');
        const passwordInput = document.getElementById('auth-password');

        const username = usernameInput?.value.trim();
        const password = passwordInput?.value.trim();

        if (!username || !password) {
            this._setAuthMessage(this.langManager.t('auth.msg_missing'));
            return;
        }

        // [New] 옵션 저장 (Fix: ReferenceError)
        const checkRememberMe = document.getElementById('check-remember-me');
        const checkAutoLogin = document.getElementById('check-auto-login');

        const rememberMe = checkRememberMe?.checked || false;
        const autoLogin = checkAutoLogin?.checked || false;

        this.game.authManager.saveLoginOptions(username, rememberMe, autoLogin);

        const result = await this.game.authManager.login(username, password);
        if (result.success) {
            this._updateHeaderUserName(username);
            // this._setAuthMessage('접속 성공! 시스템 초기화 중...', 'success');
            this.game.startMainGame(); // This will be handled by the 'auth:login' event listener
        } else {
            this._setAuthMessage(result.message);
        }
    }

    async _handleSignup() {
        const { usernameInput, passwordInput, confirmInput } = this.uiElements;

        const username = usernameInput?.value.trim();
        const password = passwordInput?.value.trim();
        const confirmPassword = confirmInput?.value.trim();

        if (!username || !password || !confirmPassword) {
            this._setAuthMessage(this.langManager.t('auth.msg_missing'));
            return;
        }

        if (password !== confirmPassword) {
            this._setAuthMessage(this.langManager.t('auth.msg_mismatch'));
            return;
        }

        const res = await this.game.authManager.signup(username, password, this.selectedPersona);
        if (res.success) {
            this._updateHeaderUserName(username);
            alert(this.langManager.t('auth.welcome', { name: username }));
            this.game.startMainGame();
        } else {
            this._setAuthMessage(res.message);
        }
    }

    _setAuthMessage(msg) {
        const msgEl = this.uiElements.authMessage;
        if (msgEl) msgEl.innerText = msg;
    }

    _updatePersonaInfo() {
        const nameEl = document.getElementById('persona-name');
        const titleEl = document.getElementById('persona-title');
        const bioEl = document.getElementById('persona-bio');
        const previewImg = document.getElementById('avatar-preview-img');

        if (!nameEl || !titleEl || !bioEl) return;

        const keyBase = this.selectedPersona.replace('director_', 'director.');
        nameEl.innerText = this.langManager.t(`${keyBase}.name`);
        titleEl.innerText = this.langManager.t(`${keyBase}.title`);
        bioEl.innerText = this.langManager.t(`${keyBase}.desc`);

        const activeBtn = document.querySelector(`.avatar-option[data-id="${this.selectedPersona}"]`);
        if (activeBtn && previewImg) {
            previewImg.src = activeBtn.src;
        }
    }

    _updateAuthFormUI() {
        const btnAction = document.getElementById('btn-auth-action');
        const confirmInput = document.getElementById('auth-confirm-password');
        const personaSection = document.getElementById('selected-avatar-preview')?.parentElement?.parentElement;

        if (btnAction) {
            btnAction.innerText = this.isLoginMode ?
                this.langManager.t('auth.btn_login') :
                this.langManager.t('auth.btn_signup');
        }

        if (confirmInput) {
            confirmInput.style.display = this.isLoginMode ? 'none' : 'block';
        }

        if (personaSection) {
            personaSection.style.display = this.isLoginMode ? 'none' : 'flex';
        }

        this._setAuthMessage('');
    }

    // [New] 커스텀 로그아웃 확인 모달
    _showLogoutConfirmModal() {
        const modal = document.getElementById('custom-modal-overlay');
        const msgEl = document.getElementById('custom-modal-msg');
        const btnYes = document.getElementById('btn-modal-yes');
        const btnNo = document.getElementById('btn-modal-no');

        if (!modal || !msgEl || !btnYes || !btnNo) {
            // 모달이 없으면 일반 confirm 사용 (폴백)
            if (confirm(this.langManager.t('alert.logout'))) {
                this.game.authManager.logout();
                location.reload();
            }
            return;
        }

        // 메시지 설정 및 모달 표시
        msgEl.innerText = this.langManager.t('alert.logout');
        modal.style.display = 'flex';

        // 기존 이벤트 제거 후 새로 추가
        const newBtnYes = btnYes.cloneNode(true);
        const newBtnNo = btnNo.cloneNode(true);
        btnYes.parentNode.replaceChild(newBtnYes, btnYes);
        btnNo.parentNode.replaceChild(newBtnNo, btnNo);

        // 확인 버튼
        newBtnYes.onclick = () => {
            modal.style.display = 'none';
            this.game.authManager.logout();
            location.reload();
        };

        // 취소 버튼
        newBtnNo.onclick = () => {
            modal.style.display = 'none';
        };
    }
}
