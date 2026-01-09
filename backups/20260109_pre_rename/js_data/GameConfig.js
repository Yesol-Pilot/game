
/**
 * GameConfig.js - Centralized Game Configuration Constants
 * Defines core balance numbers and settings to avoid magic numbers in logic.
 */

export const GameConfig = {
    // Battle System Constants
    BATTLE: {
        ELEMENTAL_BONUS: 1.3,      // 30% Damage Bonus for Advantage
        ELEMENTAL_PENALTY: 0.7,    // 30% Damage Reduction for Disadvantage
        CRIT_MULTIPLIER: 1.5,      // Critical Hit Damage Multiplier
        BASE_CRIT_RATE: 0.05,      // Base Critical Hit Chance (5%)
        SKILL_BOOST_PER_LV: 0.15,  // 15% Skill Power per Skill Level
        BOSS_HP_SCALE: 1000000     // Global Boss HP Base
    },

    // Growth & Economy
    GROWTH: {
        COST_BASE: 100,            // Base training cost
        COST_EXPONENT: 1.1,        // Cost scaling factor (1.1^Level)
        MAX_LEVEL: 100,            // Soft Level Cap
        EVOLUTION_LEVEL: [10, 30, 50] // Evolution Thresholds
    },

    // Resources
    RESOURCES: {
        STARTING_GOLD: 50000,      // [Balance] Adjusted from 1,000,000
        STARTING_GEMS: 100,        // [Balance] Adjusted for 1 gem = 1 pull economy
        OFFLINE_GOLD_PER_SEC: 1,   // Passive Income Base
        OFFLINE_CAP_HOURS: 8       // Max offline time accumulation
    },

    // Energy System
    ENERGY: {
        MAX_DEFAULT: 100,
        RECOVERY_INTERVAL_SEC: 300, // 5 minutes
        RECOVERY_AMOUNT: 1
    },

    // Summon Costs
    SUMMON_COST: {
        NORMAL: { type: 'gold', amount: 300 },
        PREMIUM: { type: 'gem', amount: 1 },
        NORMAL_10: { type: 'gold', amount: 3000 },
        PREMIUM_10: { type: 'gem', amount: 10 }
    },

    // Composition Rates (Star Rank Up)
    COMPOSE_RATES: {
        0: 1.0,  // 0 -> 1 Star
        1: 0.8,  // 1 -> 2
        2: 0.5,  // 2 -> 3
        3: 0.3,  // 3 -> 4
        4: 0.1   // 4 -> 5
    },

    // Affection Levels
    AFFECTION_LEVELS: {
        0: { min: 0, label: '경계', color: '#9e9e9e' },
        1: { min: 100, label: '관심', color: '#66bb6a' },
        2: { min: 300, label: '신뢰', color: '#f48fb1' },
        3: { min: 1000, label: '서약', color: '#ad1457' }
    },

    // Gacha Rates (Percentage)
    GACHA: {
        NORMAL: { N: 80, U: 15, R: 5 },
        PREMIUM: { N: 50, SR: 30, SSR: 15, UR: 5 }
    }
};
