import EventEmitter from '../utils/EventEmitter.js';
import { FACILITIES } from '../data/FacilityData.js';

export default class FacilityManager extends EventEmitter {
    constructor(eventBus, resourceManager) {
        super();
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;

        // { facilityId: level }
        this.levels = {};

        // 초기화
        FACILITIES.forEach(f => {
            this.levels[f.id] = 0;
        });
    }

    getFacility(id) {
        return FACILITIES.find(f => f.id === id);
    }

    getLevel(id) {
        return this.levels[id] || 0;
    }

    getUpgradeCost(id) {
        const facility = this.getFacility(id);
        if (!facility) return Infinity;

        const currentLevel = this.levels[id];
        if (currentLevel >= facility.maxLevel) return Infinity;

        // 비용 공식: Base * (Scale ^ Level)
        let cost = Math.floor(facility.baseCost * Math.pow(facility.costScale, currentLevel));

        // [Effect] Vesper Bonus (Discount)
        if (window.game) {
            const discount = window.game.getDirectorEffect('facility_cost');
            if (discount > 0) cost = Math.floor(cost * (1 - discount));
        }

        return cost;
    }

    getEffectValue(effectType) {
        let total = 0;
        FACILITIES.forEach(f => {
            if (f.effectType === effectType) {
                const level = this.levels[f.id];
                total += f.baseEffect + (f.effectPerLevel * level);
            }
        });
        return total;
    }

    tryUpgrade(id) {
        const facility = this.getFacility(id);
        if (!facility) return false;

        const currentLevel = this.levels[id];
        if (currentLevel >= facility.maxLevel) {
            this.emit('facility:error', { message: "이미 최대 레벨입니다." });
            return false;
        }

        const cost = this.getUpgradeCost(id);
        // 비용 지불 (안전하게 ResourceManager 메서드 사용)
        if (!this.resourceManager.spendGold(cost)) {
            // spendGold 내부에서 error 이벤트를 발생시키지만,
            // 여기서 중복 발생을 막거나 흐름 제어 가능
            return false;
        }

        // 레벨업
        this.levels[id]++;
        this.emit('facility:upgraded', { id, level: this.levels[id] });
        this.emitChange();
        return true;
    }

    emitChange() {
        this.emit('facilities:updated', this.levels);
    }

    // [저장/로드 시스템]
    getSerializableState() {
        return { levels: this.levels };
    }

    loadFromState(state) {
        if (!state || !state.levels) return;
        this.levels = { ...state.levels };
        this.emitChange();
    }
}
