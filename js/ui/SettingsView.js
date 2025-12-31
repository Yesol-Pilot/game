export default class SettingsView {
    constructor(game) {
        this.game = game;

        // DOM Elements
        this.btnToggleSound = document.getElementById('btn-toggle-sound');
        this.btnOpenSystem = document.getElementById('btn-open-system');
        this.modalSettings = document.getElementById('modal-settings');
        this.btnCloseModal = this.modalSettings?.querySelector('.btn-close-modal');

        this.sliderBgm = document.getElementById('slider-bgm-volume');
        this.sliderSfx = document.getElementById('slider-sfx-volume');

        this.inputNickname = document.getElementById('input-setting-nickname');
        this.btnChangeNickname = document.getElementById('btn-change-nickname');
        this.btnLogout = document.getElementById('btn-setting-logout');
        this.btnResetAccount = document.getElementById('btn-reset-account'); // [Phase 4]
        this.btnHeaderLogout = document.getElementById('btn-header-logout');

        this.isMuted = false;

        this.init();
    }

    init() {
        if (!this.btnOpenSystem) return;

        this.bindEvents();
    }

    bindEvents() {
        // 1. 음소거 토글
        this.btnToggleSound?.addEventListener('click', () => {
            this.toggleMute();
        });

        // 2. 설정 모달 열기
        this.btnOpenSystem?.addEventListener('click', () => {
            this.openSettings();
        });

        // 3. 설정 모달 닫기
        this.btnCloseModal?.addEventListener('click', () => {
            this.closeSettings();
        });

        // 외부 클릭 닫기
        window.addEventListener('click', (e) => {
            if (e.target === this.modalSettings) {
                this.closeSettings();
            }
        });

        // 4. 볼륨 슬라이더
        this.sliderBgm?.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            this.game.audioManager.setBGMVolume(vol);
        });

        this.sliderSfx?.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            this.game.audioManager.setSFXVolume(vol);
        });

        // 5. 닉네임 변경 (간단 구현)
        this.btnChangeNickname?.addEventListener('click', () => {
            const newNick = prompt("새로운 닉네임을 입력하세요:");
            if (newNick && newNick.length >= 2) {
                // AuthManager에 닉네임 변경 요청 (구현 필요)
                // 현재는 localStorage만 업데이트 시늉
                localStorage.setItem('user_nickname', newNick);
                this.inputNickname.value = newNick;
                document.getElementById('header-user-name').textContent = newNick;
                alert('닉네임이 변경되었습니다.');
            }
        });

        // 6. 로그아웃 (설정 모달 내)
        // 6. 로그아웃 (설정 모달 내)
        this.btnLogout?.addEventListener('click', () => {
            this._showLogoutModal();
        });

        // 7. 헤더 로그아웃 버튼 (설정 모달 없이 직접 접근)
        this.btnHeaderLogout?.addEventListener('click', () => {
            this._showLogoutModal();
        });

        // 8. 계정 초기화 (Reset)
        this.btnResetAccount?.addEventListener('click', () => {
            if (confirm("⚠️ 경고: 모든 게임 데이터가 영구적으로 삭제됩니다.\n정말 초기화 하시겠습니까?")) {
                if (confirm("진짜로 삭제합니까? 이 작업은 되돌릴 수 없습니다.")) {
                    localStorage.clear();
                    alert("데이터가 초기화되었습니다. 게임을 다시 시작합니다.");
                    location.reload();
                }
            }
        });
    }

    toggleMute() {
        const isMuted = this.game.audioManager.toggleMute();
        this.btnToggleSound.textContent = isMuted ? '🔇' : '🔊';
        this.btnToggleSound.classList.toggle('off', isMuted);
    }

    openSettings() {
        // 현재 상태 반영
        if (this.game.audioManager) {
            this.sliderBgm.value = this.game.audioManager.bgmVolume;
            this.sliderSfx.value = this.game.audioManager.sfxVolume;
        }

        // 닉네임 표시
        const currentNick = this.game.authManager?.user?.nickname || localStorage.getItem('user_nickname') || 'Guest';
        if (this.inputNickname) {
            this.inputNickname.value = currentNick;
        }

        this.modalSettings.style.display = 'flex';
    }

    closeSettings() {
        this.modalSettings.style.display = 'none';
    }

    _showLogoutModal() {
        const modal = document.getElementById('custom-modal-overlay');
        const msgEl = document.getElementById('custom-modal-msg');
        const btnYes = document.getElementById('btn-modal-yes');
        const btnNo = document.getElementById('btn-modal-no');

        if (!modal || !msgEl || !btnYes || !btnNo) {
            // [Fallback] 모달 없는 경우
            if (confirm("로그아웃 하시겠습니까?")) {
                this.game.authManager.logout().then(() => location.reload());
            }
            return;
        }

        msgEl.innerText = "로그아웃 하시겠습니까?";
        modal.style.display = 'flex';

        // Clone to clean listeners
        const newBtnYes = btnYes.cloneNode(true);
        const newBtnNo = btnNo.cloneNode(true);
        btnYes.parentNode.replaceChild(newBtnYes, btnYes);
        btnNo.parentNode.replaceChild(newBtnNo, btnNo);

        // Yes Button
        newBtnYes.onclick = async () => {
            modal.style.display = 'none';
            await this.game.authManager.logout();
            this.closeSettings();
            location.reload();
        };

        // No Button
        newBtnNo.onclick = () => {
            modal.style.display = 'none';
        };
    }
}
