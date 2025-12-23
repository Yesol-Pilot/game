import EventEmitter from '../utils/EventEmitter.js';
import { getStage } from '../data/StageData.js';

export default class StageManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.currentMaxStage = 1; // Default starts at 1
        this.currentViewingStage = 1; // Currently selected stage
        this.load();
    }

    load() {
        const saved = localStorage.getItem('mcl_stage_progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentMaxStage = data.maxStage || 1;
            this.currentViewingStage = data.viewingStage || 1;
        }
    }

    save() {
        localStorage.setItem('mcl_stage_progress', JSON.stringify({
            maxStage: this.currentMaxStage,
            viewingStage: this.currentViewingStage
        }));
    }

    unlockNextStage() {
        if (this.currentMaxStage < 100) {
            this.currentMaxStage++;
            // [Fix] 새 스테이지가 열리면 자동으로 그 스테이지를 보게 함
            this.currentViewingStage = this.currentMaxStage;
            this.save();
            this.emit('stages:updated', {
                max: this.currentMaxStage,
                current: this.currentViewingStage
            });
            console.log(`[StageManager] Unlocked & Focused Stage ${this.currentMaxStage}`);
            return true;
        }
        return false;
    }

    getMaxStage() {
        return this.currentMaxStage;
    }

    getStageInfo(id) {
        return getStage(id);
    }

    getCurrentStage() {
        return this.getStageInfo(this.currentViewingStage);
    }

    prevStage() {
        if (this.currentViewingStage > 1) {
            this.currentViewingStage--;
            this.save();
            this.emit('stages:updated', { current: this.currentViewingStage });
        }
    }

    nextStage() {
        if (this.currentViewingStage < this.currentMaxStage) {
            this.currentViewingStage++;
            this.save();
            this.emit('stages:updated', { current: this.currentViewingStage });
        }
    }

    // [저장/로드 시스템]
    getSerializableState() {
        return {
            maxStage: this.currentMaxStage,
            viewingStage: this.currentViewingStage
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.currentMaxStage = state.maxStage || 1;
        this.currentViewingStage = state.viewingStage || 1;
    }

    resetForRebirth() {
        this.currentMaxStage = 1;
        this.currentViewingStage = 1;
    }
}
