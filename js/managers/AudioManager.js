/**
 * AudioManager.js
 * BGM 및 효과음을 관리하는 오디오 매니저
 * 
 * 사용법:
 * - game.audioManager.playBGM('lobby') // BGM 재생
 * - game.audioManager.playSFX('click') // 효과음 재생
 * - game.audioManager.stopBGM() // BGM 정지
 */

export default class AudioManager {
    constructor(game) {
        this.game = game;
        this.bgm = null;
        this.bgmVolume = 0.5;
        this.sfxVolume = 0.7;
        this.isMuted = false;
        this.currentBGMId = null;

        // BGM 트랙 정의 (파일이 준비되면 경로 수정)
        this.bgmTracks = {
            'lobby': 'audio/bgm_lobby.mp3',
            'battle': 'audio/bgm_battle.mp3',
            'boss': 'audio/bgm_boss.mp3',
            'victory': 'audio/bgm_victory.mp3',
            'defeat': 'audio/bgm_defeat.mp3'
        };

        // 효과음 정의
        this.sfxTracks = {
            'click': 'audio/sfx_click.mp3',
            'summon': 'audio/sfx_summon.mp3',
            'skill': 'audio/sfx_skill.mp3',
            'hit': 'audio/sfx_hit.mp3',
            'critical': 'audio/sfx_critical.mp3',
            'levelup': 'audio/sfx_levelup.mp3',
            'evolve': 'audio/sfx_evolve.mp3',
            'gold': 'audio/sfx_gold.mp3',
            'error': 'audio/sfx_error.mp3'
        };

        // 오디오 컨텍스트 초기화 (사용자 인터랙션 후)
        this._audioContext = null;
        this._unlocked = false;

        this._bindEvents();
    }

    _bindEvents() {
        // 첫 클릭 시 오디오 컨텍스트 활성화
        const unlock = () => {
            if (!this._unlocked) {
                this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this._unlocked = true;
                console.log('[AudioManager] Audio context unlocked');
                document.removeEventListener('click', unlock);
            }
        };
        document.addEventListener('click', unlock);

        // 게임 이벤트와 연동
        this.game.events.on('ui:tabSwitched', (tabId) => {
            // 탭에 따라 BGM 변경
            if (tabId === 'home') this.playBGM('lobby');
            else if (tabId === 'battle') this.playBGM('battle');
        });

        this.game.events.on('battle:start', () => this.playBGM('battle'));
        this.game.events.on('battle:end', ({ isWin }) => {
            this.playBGM(isWin ? 'victory' : 'defeat');
            setTimeout(() => this.playBGM('lobby'), 3000);
        });

        this.game.events.on('summon:complete', () => this.playSFX('summon'));
        this.game.events.on('creature:leveledUp', () => this.playSFX('levelup'));
        this.game.events.on('evolve:success', () => this.playSFX('evolve'));
    }

    /**
     * BGM 재생
     * @param {string} trackId - BGM 트랙 ID
     */
    playBGM(trackId) {
        if (this.isMuted) return;
        if (this.currentBGMId === trackId) return; // 이미 재생 중이면 무시

        const trackPath = this.bgmTracks[trackId];
        if (!trackPath) {
            console.warn(`[AudioManager] BGM track not found: ${trackId}`);
            return;
        }

        this.stopBGM();

        try {
            this.bgm = new Audio(trackPath);
            this.bgm.volume = this.bgmVolume;
            this.bgm.loop = true;
            this.bgm.play().catch(e => {
                console.warn('[AudioManager] BGM play failed:', e.message);
            });
            this.currentBGMId = trackId;
            console.log(`[AudioManager] Playing BGM: ${trackId}`);
        } catch (e) {
            console.warn('[AudioManager] BGM load failed:', e.message);
        }
    }

    /**
     * BGM 정지
     */
    stopBGM() {
        if (this.bgm) {
            this.bgm.pause();
            this.bgm.currentTime = 0;
            this.bgm = null;
            this.currentBGMId = null;
        }
    }

    /**
     * 효과음 재생
     * @param {string} sfxId - 효과음 ID
     */
    playSFX(sfxId) {
        if (this.isMuted) return;

        const trackPath = this.sfxTracks[sfxId];
        if (!trackPath) {
            console.warn(`[AudioManager] SFX not found: ${sfxId}`);
            return;
        }

        try {
            const sfx = new Audio(trackPath);
            sfx.volume = this.sfxVolume;
            sfx.play().catch(e => {
                // 효과음 로드 실패는 조용히 무시 (파일 없을 수 있음)
            });
        } catch (e) {
            // 무시
        }
    }

    /**
     * 음소거 토글
     */
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBGM();
        } else {
            this.playBGM('lobby');
        }
        console.log(`[AudioManager] Muted: ${this.isMuted}`);
        return this.isMuted;
    }

    /**
     * BGM 볼륨 설정
     * @param {number} volume - 0.0 ~ 1.0
     */
    setBGMVolume(volume) {
        this.bgmVolume = Math.max(0, Math.min(1, volume));
        if (this.bgm) {
            this.bgm.volume = this.bgmVolume;
        }
    }

    /**
     * 효과음 볼륨 설정
     * @param {number} volume - 0.0 ~ 1.0
     */
    setSFXVolume(volume) {
        this.sfxVolume = Math.max(0, Math.min(1, volume));
    }
}
