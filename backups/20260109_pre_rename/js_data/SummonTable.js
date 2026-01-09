import { RANKS } from './RankData.js';

export const NORMAL_SUMMON_TABLE = [
    { rarity: RANKS.NORMAL, weight: 80 },
    { rarity: RANKS.UNIQUE, weight: 15 },
    { rarity: RANKS.RARE, weight: 4 },
    { rarity: RANKS.SPECIAL, weight: 0.9 },
    { rarity: RANKS.SR, weight: 0.1 }
];

export const PREMIUM_SUMMON_TABLE = [
    { rarity: RANKS.NORMAL, weight: 23.79 }, // 꽝 확률 증가 (보정값)
    { rarity: RANKS.UNIQUE, weight: 30 },
    { rarity: RANKS.RARE, weight: 30 },
    { rarity: RANKS.SPECIAL, weight: 15 },
    { rarity: RANKS.SR, weight: 1.0 }, // 요청: 3.0 -> 1.0%
    { rarity: RANKS.SSR, weight: 0.2 }, // 요청: 0.5 -> 0.2%
    { rarity: RANKS.UR, weight: 0.01 } // 0.01%
];

// 가중치 기반 랜덤 선택 함수
export function pickRarityFromTable(table) {
    const totalWeight = table.reduce((sum, item) => sum + item.weight, 0);
    let randomNum = Math.random() * totalWeight;

    for (const item of table) {
        if (randomNum < item.weight) {
            return item.rarity;
        }
        randomNum -= item.weight;
    }
    return table[table.length - 1].rarity;
}
