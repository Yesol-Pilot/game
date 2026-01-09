export const FACILITIES = [
    {
        id: "energy_core",
        name: "에너지 코어",
        description: "최대 에너지를 증가시킵니다.",
        baseCost: 1000,
        costScale: 1.5,
        maxLevel: 10,
        effectType: "max_energy",
        baseEffect: 100, // level 0일 때의 기본값 (혹은 1렙부터?) -> 여기선 0렙 보너스 0, 1렙부터 적용하도록 로직 처리
        effectPerLevel: 10
    },
    {
        id: "gold_refinery",
        name: "골드 정제소",
        description: "탐사 보상 골드 획득량을 증가시킵니다.",
        baseCost: 2000,
        costScale: 1.5,
        maxLevel: 10,
        effectType: "gold_bonus_percent",
        baseEffect: 0,
        effectPerLevel: 10 // +10%
    },
    {
        id: "mana_extractor",
        name: "마나 추출기",
        description: "초당 골드 생산량(GPS)을 증가시킵니다.",
        baseCost: 500,
        costScale: 1.6,
        maxLevel: 20,
        effectType: "gold_per_sec",
        baseEffect: 1, // 기본 1 GPS
        effectPerLevel: 2
    }
];
