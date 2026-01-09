
export const ARTIFACT_TYPES = {
    WEAPON: 'weapon',
    ARMOR: 'armor',
    ACCESSORY: 'accessory'
};

export const ARTIFACT_DEFS = [
    // --- Weapons ---
    { id: 'sword_wood', name: '수련용 목검', type: 'weapon', stats: { atk: 10 }, rarity: 'Normal', description: "초보자를 위한 연습용 검입니다." },
    { id: 'sword_iron', name: '강철 검', type: 'weapon', stats: { atk: 50 }, rarity: 'Unique', description: "단단한 강철로 만들어진 표준적인 검입니다." },
    { id: 'sword_silver', name: '은장도', type: 'weapon', stats: { atk: 120, crit: 0.05 }, rarity: 'Rare', description: "마을을 지키던 호위대의 검입니다." },
    { id: 'sword_hero', name: '용사의 검', type: 'weapon', stats: { atk: 300, crit: 0.1 }, rarity: 'Special', description: "오랜 옛날, 마왕을 물리쳤다는 전설이 있습니다." },
    { id: 'sword_dragon', name: '드래곤 슬레이어', type: 'weapon', stats: { atk: 800, crit: 0.2 }, rarity: 'SSR', description: "용의 비늘조차 베어버리는 전설적인 명검입니다." },

    // --- Armors ---
    { id: 'armor_cloth', name: '여행자의 옷', type: 'armor', stats: { def: 5, hp: 50 }, rarity: 'Normal', description: "가벼운 천으로 만든 옷입니다." },
    { id: 'armor_leather', name: '가죽 갑옷', type: 'armor', stats: { def: 20, hp: 200 }, rarity: 'Unique', description: "질긴 가죽을 덧대어 방어력을 높였습니다." },
    { id: 'armor_chain', name: '사슬 갑옷', type: 'armor', stats: { def: 60, hp: 500 }, rarity: 'Rare', description: "쇠사슬을 엮어 만든 튼튼한 갑옷입니다." },
    { id: 'armor_plate', name: '미스릴 갑옷', type: 'armor', stats: { def: 150, hp: 1500 }, rarity: 'Special', description: "가볍고 단단한 미스릴로 제작되었습니다." },
    { id: 'armor_holy', name: '성기사의 흉갑', type: 'armor', stats: { def: 400, hp: 4000 }, rarity: 'SSR', description: "신의 축복을 받아 어떤 어둠도 막아냅니다." },

    // --- Accessories ---
    { id: 'ring_copper', name: '구리 반지', type: 'accessory', stats: { hp: 50 }, rarity: 'Normal', description: "단순한 구리 반지입니다." },
    { id: 'ring_ruby', name: '루비 반지', type: 'accessory', stats: { atk: 30 }, rarity: 'Unique', description: "작은 루비가 박혀있어 힘을 돋웁니다." },
    { id: 'ring_sapphire', name: '사파이어 반지', type: 'accessory', stats: { def: 30, spSpeed: 1.05 }, rarity: 'Rare', description: "냉철한 판단력을 줍니다." },
    { id: 'necklace_protection', name: '수호의 목걸이', type: 'accessory', stats: { hp: 1000, def: 50 }, rarity: 'Special', description: "착용자를 위험으로부터 보호합니다." },
    { id: 'ring_oath', name: '서약의 반지', type: 'accessory', stats: { atk: 150, crit: 0.1, spSpeed: 1.2 }, rarity: 'UR', description: "크리처와의 영원한 유대를 상징합니다." }
];

export function getArtifactDef(id) {
    return ARTIFACT_DEFS.find(a => a.id === id);
}
