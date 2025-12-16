export const GOLD_PACKS = [
    {
        id: "gold_pack_small",
        name: "소형 골드 묶음",
        description: "골드 1,000을 획득합니다.",
        goldAmount: 1000,
        priceType: "gem",
        priceValue: 10
    },
    {
        id: "gold_pack_large",
        name: "대형 골드 묶음",
        description: "골드 5,000을 획득합니다.",
        goldAmount: 5000,
        priceType: "gem",
        priceValue: 45 // 10% 할인 느낌
    }
];

export const GEM_PACKS = [
    {
        id: "gem_pack_small",
        name: "젬 소형 묶음",
        description: "젬 50개를 획득합니다.",
        gemAmount: 50,
        priceType: "real",
        priceLabel: "₩1,100"
    },
    {
        id: "gem_pack_large",
        name: "젬 대형 묶음",
        description: "젬 300개를 획득합니다.",
        gemAmount: 300,
        priceType: "real",
        priceLabel: "₩5,500"
    }
];

export const BUNDLES = [
    {
        id: "starter_bundle",
        name: "스타터 번들",
        description: "젬 50 + 골드 3,000 + 희귀(Rare) 크리처 1마리",
        priceType: "real",
        priceLabel: "₩4,400",
        oneTime: true,
        rewards: {
            gold: 3000,
            gem: 50,
            creature: { rarity: "Rare" }
        }
    }
];

export const SPECIALS = [
    {
        id: "remove_ads",
        name: "광고 제거",
        description: "배너/영상 광고가 영구적으로 제거됩니다.",
        priceType: "real",
        priceLabel: "₩3,300",
        oneTime: true
    }
];
