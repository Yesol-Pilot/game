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
        if (btnLogout) {
            btnLogout.addEventListener('click', () => {
                // 커스텀 확인 모달 사용 (브라우저 팝업 차단 이슈 방지)
                this._showLogoutConfirmModal();
            });
        }

        // 4.5. [NEW] 게스트 로그인 버튼
        const btnGuest = document.getElementById('btn-guest-login');
        if (btnGuest) {
            btnGuest.addEventListener('click', async () => {
                this._setAuthMessage("게스트 로그인 중...");
                const result = await this.game.authManager.login('guest', 'guest');
                if (result.success) {
                    this._updateHeaderUserName('Guest');
                    this.game.startMainGame();
                } else {
                    // 게스트 계정이 만약 없다면 생성 시도
                    await this.game.authManager.signup('guest', 'guest', 'director_vesper');
                    this._updateHeaderUserName('Guest');
                    this.game.startMainGame();
                }
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
                    console.log('[AuthView] Google 로그인 성공:', user.email);

                    // [Mod] 닉네임 자동 설정 대신 확인 로직
                    // 1. 이미 가입된 Google UID인지 확인 (AuthManager 확장 필요하나 일단 로컬 DB 체크)
                    // Google Ids are not directly mapped to usernames in current simple DB
                    // We need to store google_uid -> username mapping or stick with username.

                    // Simple approach: Check if we have a saved mapping or ask user.
                    // For this version: Always ask for nickname on first login, 
                    // or try to match if username exists in DB with same 'google_uid' (if we stored it).

                    // Since we don't have robust backend, we'll implement the UI flow requested:
                    // "Don't get name automatically, let user set it on first signup"

                    this.pendingGoogleUser = user;
                    this._showNicknameModal();

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
     * 클라우드 데이터가 있으면 로컬에 복원 (항상 클라우드 우선)
     */
    async _syncGoogleUserData(user, username) {
        const saveKey = `mclab_save_${username}`;

        console.log('[AuthView] 클라우드 데이터 로드 시도...');
        const cloudData = await window.FirebaseService.loadGameData();

        if (cloudData.success && cloudData.data) {
            // UID 기반 저장이므로 data 자체가 게임 상태일 수 있음
            // 또는 저장 키별로 분류된 형태일 수 있음
            let dataToRestore = null;

            // 1. 직접 gameState 필드 확인 (UID 기반 저장 시)
            if (cloudData.data.gameState) {
                dataToRestore = cloudData.data.gameState;
            }
            // 2. 닉네임 기반 저장 키 확인
            else if (cloudData.data[saveKey]) {
                dataToRestore = cloudData.data[saveKey];
            }
            // 3. 기존 mclab_save_v1 형식 확인
            else if (cloudData.data['mclab_save_v1']) {
                dataToRestore = cloudData.data['mclab_save_v1'];
            }
            // 4. 다른 세이브 키들 검색 (기존 데이터 마이그레이션)
            else {
                for (const key of Object.keys(cloudData.data)) {
                    if (key.startsWith('mclab_save_')) {
                        dataToRestore = cloudData.data[key];
                        console.log(`[AuthView] 기존 세이브 키 발견: ${key}`);
                        break;
                    }
                }
            }

            if (dataToRestore) {
                localStorage.setItem(saveKey, JSON.stringify(dataToRestore));
                console.log(`[AuthView] 클라우드 데이터 복원 완료: ${saveKey}`);
            } else {
                console.log('[AuthView] 클라우드에 게임 데이터 없음 (신규 유저)');
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

    // [NEW] 닉네임 설정 모달
    _showNicknameModal() {
        const modal = document.getElementById('nickname-modal');
        const input = document.getElementById('nickname-input');
        const btnConfirm = document.getElementById('btn-nickname-confirm');

        if (!modal || !input || !btnConfirm) {
            console.error("Nickname modal elements missing!");
            return;
        }

        modal.style.display = 'flex';
        input.value = '';
        input.focus();

        // Remove old listener
        const newBtn = btnConfirm.cloneNode(true);
        btnConfirm.parentNode.replaceChild(newBtn, btnConfirm);

        newBtn.onclick = async () => {
            const nickname = input.value.trim();
            if (!nickname) {
                alert("닉네임을 입력해주세요.");
                return;
            }

            // 구글 유저 정보
            const user = this.pendingGoogleUser;
            if (!user) return;

            // 로직 진행
            modal.style.display = 'none';
            await this._processGoogleLoginWithNickname(user, nickname);
        };
    }

    async _processGoogleLoginWithNickname(googleUser, nickname) {
        const googleUsername = nickname; // User chosen nickname
        const saveKey = `mclab_save_${googleUsername}`;

        // 클라우드에서 데이터 로드 (UID 기반 - Firebase가 자동으로 UID로 저장)
        const cloudData = await window.FirebaseService.loadGameData();
        if (cloudData.success && cloudData.data) {
            let dataToRestore = null;

            // 1. gameState 직접 확인
            if (cloudData.data.gameState) {
                dataToRestore = cloudData.data.gameState;
            }
            // 2. 닉네임 기반 세이브 키
            else if (cloudData.data[saveKey]) {
                dataToRestore = cloudData.data[saveKey];
            }
            // 3. 기존 mclab_save 키들 검색
            else {
                for (const key of Object.keys(cloudData.data)) {
                    if (key.startsWith('mclab_save_')) {
                        dataToRestore = cloudData.data[key];
                        console.log(`[AuthView] 기존 세이브 발견: ${key}`);
                        break;
                    }
                }
            }

            if (dataToRestore) {
                localStorage.setItem(saveKey, JSON.stringify(dataToRestore));
                console.log(`[AuthView] 데이터 복원 완료: ${saveKey}`);
            }
        }

        // 회원가입 또는 로그인 시도
        // Password is still dummy based on UID to prevent conflict with manual types
        const fakePassword = 'google_' + googleUser.uid.substring(0, 8);

        let authResult = await this.game.authManager.login(googleUsername, fakePassword);

        // 만약 로그인 실패(존재하지 않음) -> 회원가입
        if (!authResult.success) {
            authResult = await this.game.authManager.signup(googleUsername, fakePassword, this.selectedPersona);
        } else {
            // 이미 존재하는 닉네임인데 비밀번호가 다르다면? (다른 사람이 선점)
            // AuthManager simple login check returns false message
            if (authResult.message === "비밀번호가 일치하지 않습니다.") {
                alert("이미 사용 중인 닉네임입니다. 다른 닉네임을 선택해주세요.");
                this._showNicknameModal();
                return;
            }
        }

        if (authResult.success) {
            this._updateHeaderUserName(googleUsername);
            this.game.startMainGame();
            this._startAutoCloudSave();
        } else {
            alert("로그인 처리에 실패했습니다: " + authResult.message);
        }
    }
}
