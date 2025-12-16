/**
 * RankData.js
 * 게임 내 등급(Rarity) 시스템을 중앙에서 관리하는 데이터 모듈
 */

export const RANKS = {
    NORMAL: "Normal",
    UNIQUE: "Unique",
    RARE: "Rare",
    SPECIAL: "Special",
    SR: "SR",
    SSR: "SSR",
    UR: "UR"
};

export const RANK_TIERS = [
    RANKS.NORMAL,
    RANKS.UNIQUE,
    RANKS.RARE,
    RANKS.SPECIAL,
    RANKS.SR,
    RANKS.SSR,
    RANKS.UR
];

export const RANK_INFO = {
    [RANKS.NORMAL]: {
        name: "일반",
        color: "#9E9E9E", // Grey
        order: 1,
        description: "가장 흔하게 볼 수 있는 크리처입니다."
    },
    [RANKS.UNIQUE]: {
        name: "고급",
        color: "#66BB6A", // Green
        order: 2,
        description: "조금 더 강력하고 특별한 능력을 가집니다."
    },
    [RANKS.RARE]: {
        name: "희귀",
        color: "#42A5F5", // Blue
        order: 3,
        description: "구하기 힘든 희귀한 크리처입니다."
    },
    [RANKS.SPECIAL]: {
        name: "영웅",
        color: "#AB47BC", // Purple
        order: 4,
        description: "영웅적인 힘을 가진 특별한 존재입니다."
    },
    [RANKS.SR]: {
        name: "전설",
        color: "#FF7043", // Orange
        order: 5,
        description: "전설 속에나 등장할 법한 강력한 크리처입니다."
    },
    [RANKS.SSR]: {
        name: "신화",
        color: "#EF5350", // Red
        order: 6,
        description: "신화적인 힘을 가진 경이로운 존재입니다."
    },
    [RANKS.UR]: {
        name: "초월",
        color: "#FFD700", // Gold
        order: 7,
        description: "세상의 법칙을 초월한 절대적인 존재입니다."
    }
};

/**
 * 등급 문자열(예: "Normal")을 받아 UI 표시용 정보(이름, 색상 등)를 반환
 */
export function getRankInfo(rankKey) {
    return RANK_INFO[rankKey] || RANK_INFO[RANKS.NORMAL];
}

/**
 * 두 등급을 비교 (rankA가 rankB보다 높으면 양수)
 */
export function compareRank(rankA, rankB) {
    const orderA = RANK_INFO[rankA]?.order || 0;
    const orderB = RANK_INFO[rankB]?.order || 0;
    return orderA - orderB;
}
