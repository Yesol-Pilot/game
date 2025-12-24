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

        // 5. [NEW] Google 로그인 버튼 (Firebase)
        const btnGoogleLogin = document.getElementById('btn-google-login');
        if (btnGoogleLogin) {
            btnGoogleLogin.addEventListener('click', async () => {
                this._setAuthMessage('Google 로그인 중...');

                // Firebase 서비스가 로드될 때까지 대기
                if (!window.FirebaseService) {
                    this._setAuthMessage('Firebase 로딩 중... 잠시 후 다시 시도해주세요.');
                    return;
                }

                const result = await window.FirebaseService.signInWithGoogle();
                if (result.success) {
                    const user = result.user;
                    console.log('[AuthView] Google 로그인 성공:', user.displayName);

                    // 클라우드에서 데이터 로드 시도
                    // 로컬 계정 생성/로그인 (Google 이름 사용)
                    const googleUsername = user.displayName || user.email.split('@')[0];
                    const saveKey = `mclab_save_${googleUsername}`;

                    // 클라우드에서 데이터 로드 시도
                    const cloudData = await window.FirebaseService.loadGameData();
                    if (cloudData.success && cloudData.data) {
                        console.log('[AuthView] 클라우드 데이터 확인:', cloudData.data);

                        // [신구 데이터 통합 복구 로직]
                        // 1. 현재 사용자 전용 키 확인 -> 2. 공용 키 확인 -> 3. 구버전 키(gameState) 확인
                        const dataToRestore = cloudData.data[saveKey] || cloudData.data['mclab_save_v1'] || cloudData.data['gameState'];

                        if (dataToRestore) {
                            localStorage.setItem(saveKey, JSON.stringify(dataToRestore));
                            console.log(`[AuthView] 데이터 복원 완료: ${saveKey}`);
                            this._setAuthMessage('☁️ 클라우드 데이터 복원 완료!');
                        }
                    }

                    // 회원가입 또는 로그인 시도
                    const fakePassword = 'google_' + user.uid.substring(0, 8);
                    let authResult = await this.game.authManager.login(googleUsername, fakePassword);
                    if (!authResult.success) {
                        // 계정이 없으면 자동 생성
                        authResult = await this.game.authManager.signup(googleUsername, fakePassword, this.selectedPersona);
                    }

                    if (authResult.success) {
                        this._updateHeaderUserName(googleUsername);
                        this.game.startMainGame();

                        // 자동 저장 활성화 (5분마다)
                        this._startAutoCloudSave();
                    }
                } else {
                    this._setAuthMessage('Google 로그인 실패: ' + (result.error || '알 수 없는 오류'));
                }
            });
        }

        // 6. 로그인 성공 시 처리
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

        // [Fix] 초기화 시점에 이미 세션이 복구되어 있을 수 있으므로 즉시 체크
        const currentUser = this.game.authManager.currentUser;
        if (currentUser) {
            console.log(`[AuthView] Detected already restored session for ${currentUser.username}`);
            this._updateHeaderUserName(currentUser.username);
            if (this.ui.loginOverlay) this.ui.loginOverlay.style.display = 'none';
            // 약간의 지연 후 가동 (타 매니저 초기화 완료 대기)
            setTimeout(() => this.game.startMainGame(), 10);
        }

        // 초기화 시 UI 업데이트
        this._updatePersonaInfo();
        this._updateAuthFormUI();

        // [Fix] 새로고침 시 Firebase 인증 상태 자동 확인
        if (window.FirebaseService) {
            window.FirebaseService.onAuthStateChanged(async (user) => {
                if (user && !this.game.authManager.isLoggedIn()) {
                    console.log('[AuthView] Firebase 세션 감지, 자동 접속 시도:', user.displayName);
                    this._setAuthMessage('기존 세션 복구 중...');

                    const googleUsername = user.displayName || user.email.split('@')[0];
                    const fakePassword = 'google_' + user.uid.substring(0, 8);

                    // 1. 필요한 경우 데이터 마이그레이션/복구 수행
                    await this._syncGoogleUserData(user, googleUsername);

                    // 2. AuthManager 로그인 처리 (세션 동기화)
                    let authResult = await this.game.authManager.login(googleUsername, fakePassword);
                    if (!authResult.success) {
                        authResult = await this.game.authManager.signup(googleUsername, fakePassword, this.selectedPersona);
                    }

                    if (authResult.success) {
                        this._updateHeaderUserName(googleUsername);
                        this.game.startMainGame();
                        this._startAutoCloudSave();
                    }
                }
            });
        }
    }

    /**
     * Google 유저 데이터 동기화 및 마이그레이션 헬퍼
     */
    async _syncGoogleUserData(user, username) {
        const saveKey = `mclab_save_${username}`;

        // 로컬에 이미 데이터가 있다면 스킵 (불필요한 네트워크 호출 방지)
        if (localStorage.getItem(saveKey)) return;

        console.log('[AuthView] 로컬 데이터 없음, 클라우드 로드 시도...');
        const cloudData = await window.FirebaseService.loadGameData();
        if (cloudData.success && cloudData.data) {
            const dataToRestore = cloudData.data[saveKey] || cloudData.data['mclab_save_v1'] || cloudData.data['gameState'];

            if (dataToRestore) {
                localStorage.setItem(saveKey, JSON.stringify(dataToRestore));
                console.log(`[AuthView] 클라우드 데이터 복원 완료: ${saveKey}`);
            }
        }
    }

    // [NEW] 자동 클라우드 저장 (5분마다)
    _startAutoCloudSave() {
        if (this._autoSaveInterval) clearInterval(this._autoSaveInterval);

        this._autoSaveInterval = setInterval(async () => {
            const user = this.game.authManager.currentUser;
            if (window.FirebaseService?.isLoggedIn() && user) {
                const saveKey = `mclab_save_${user.username}`;
                const localData = localStorage.getItem(saveKey);

                if (localData) {
                    try {
                        const parsedData = JSON.parse(localData);
                        await window.FirebaseService.saveGameData({ [saveKey]: parsedData });
                        console.log(`[AutoSave] 클라우드 백업 완료 (${saveKey})`);
                    } catch (e) {
                        console.error('[AutoSave] 데이터 파싱 실패:', e);
                    }
                }
            }
        }, 5 * 60 * 1000); // 5분

        console.log('[AuthView] 자동 클라우드 저장 활성화 (5분 간격)');
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
