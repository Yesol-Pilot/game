import EventEmitter from '../utils/EventEmitter.js';
import { GameConfig } from '../data/GameConfig.js';

export default class ResourceManager extends EventEmitter {
    constructor() {
        super();
        this.resources = {
            gold: GameConfig.RESOURCES.STARTING_GOLD,
            gem: GameConfig.RESOURCES.STARTING_GEMS,
            energy: GameConfig.ENERGY.MAX_DEFAULT
        };
        this.maxEnergy = GameConfig.ENERGY.MAX_DEFAULT;

        // [NEW] 에너지 자동 회복 관련
        this.recoveryTimer = 0;
        this.RECOVERY_INTERVAL = GameConfig.ENERGY.RECOVERY_INTERVAL_SEC; // 5분 (초 단위)

        console.log("ResourceManager: Initialized with", this.resources);
    }

    update(deltaTime) {
        if (this.resources.energy < this.maxEnergy) {
            this.recoveryTimer += deltaTime;
            if (this.recoveryTimer >= this.RECOVERY_INTERVAL) {
                this.recoveryTimer -= this.RECOVERY_INTERVAL;
                this.addEnergy(1);
                // 로그는 너무 자주 뜨면 방해되므로 생략하거나 디버그용으로만
                // console.log("에너지 자동 회복 (+1)"); 
            }
        } else {
            this.recoveryTimer = 0; // 꽉 찼으면 타이머 리셋
        }
    }

    getResources() {
        return { ...this.resources, maxEnergy: this.maxEnergy };
    }

    emitChange() {
        this.emit("resources:changed", this.getResources());
    }

    setMaxEnergy(val) {
        this.maxEnergy = val;
        this.emitChange();
    }

    addGold(amount) {
        // [Effect] Eos Bonus
        let bonus = 0;
        if (window.game) {
            const rate = window.game.getDirectorEffect('gold_gain');
            if (rate > 0) bonus = Math.floor(amount * rate);
        }

        this.resources.gold += (amount + bonus);
        this.emitChange();
    }

    spendGold(amount) {
        if (this.resources.gold < amount) {
            this.emit("resources:error", { type: "gold", message: "골드가 부족합니다." });
            return false;
        }
        this.resources.gold -= amount;
        this.emitChange();
        return true;
    }

    addGem(amount) {
        this.resources.gem += amount;
        this.emitChange();
    }

    spendGem(amount) {
        if (this.resources.gem < amount) {
            this.emit("resources:error", { type: "gem", message: "젬이 부족합니다." });
            return false;
        }
        this.resources.gem -= amount;
        this.emitChange();
        return true;
    }

    addEnergy(amount) {
        this.resources.energy += amount;
        if (this.resources.energy > this.maxEnergy) {
            this.resources.energy = this.maxEnergy; // Cap 적용
        }
        this.emitChange();
    }

    spendEnergy(amount) {
        if (this.resources.energy < amount) {
            this.emit("resources:error", { type: "energy", message: "에너지가 부족합니다." });
            return false;
        }
        this.resources.energy -= amount;
        this.emitChange();
        return true;
    }

    // [저장/로드 시스템]
    getSerializableState() {
        return { ...this.resources };
    }

    loadFromState(state) {
        if (!state) return;
        this.resources = { ...state };
        this.emitChange();
    }

    resetForRebirth() {
        this.resources = { ...INITIAL_RESOURCES };
        this.emitChange();
    }
}
