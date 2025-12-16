export const EXPEDITIONS = [
    {
        id: "forest_short",
        name: "숲 정찰",
        durationSec: 5,           // 테스트용 5초
        energyCost: 5,
        baseGoldReward: 300,
        baseExpReward: 10,
        recommendedMinLevel: 1,
        elementBonus: "Wind",     // 자연/바람 속성 우대 (예시)
        description: "안전한 숲 주변을 5초간 정찰합니다."
    },
    {
        id: "mine_mining",
        name: "광산 채굴",
        durationSec: 10,          // 테스트용 10초
        energyCost: 10,
        baseGoldReward: 600,
        baseExpReward: 20,
        recommendedMinLevel: 3,
        elementBonus: "Earth",    // 땅 속성 우대
        description: "폐광에서 광물을 채굴합니다. (10초)"
    },
    {
        id: "ruins_investigation",
        name: "폐허 조사",
        durationSec: 10,          // 테스트용 10초
        energyCost: 15,
        baseGoldReward: 1000,
        baseExpReward: 50,
        recommendedMinLevel: 5,
        elementBonus: "Fire",
        description: "위험한 고대 폐허를 조사합니다. (10초)"
    }
];
