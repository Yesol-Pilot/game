
import { getStage } from '../data/StageData.js';

export default class StageManager {
    constructor(game) {
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
            this.save();
            console.log(`[StageManager] Unlocked Stage ${this.currentMaxStage}`);
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
        }
    }

    nextStage() {
        if (this.currentViewingStage < this.currentMaxStage) {
            this.currentViewingStage++;
            this.save();
        }
    }
}
