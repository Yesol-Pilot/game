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
        priceLabel: "₩1,100",
        price: 1100
    },
    {
        id: "gem_pack_large",
        name: "젬 대형 묶음",
        description: "젬 300개를 획득합니다.",
        gemAmount: 300,
        priceType: "real",
        priceLabel: "₩5,500",
        price: 5500
    },
    {
        id: "gem_pack_huge",
        name: "젬 초대형 묶음",
        description: "젬 1,000개를 획득합니다.",
        gemAmount: 1000,
        priceType: "real",
        priceLabel: "₩16,500",
        price: 16500
    }
];

export const BUNDLES = [
    {
        id: "starter_bundle",
        name: "스타터 번들",
        description: "젬 50 + 골드 3,000 + 희귀(Rare) 크리처 1마리",
        priceType: "real",
        priceLabel: "₩4,400",
        price: 4400,
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
        price: 3300,
        oneTime: true
    }
];

export const GIFT_ITEMS = [
    {
        id: "gift_cake",
        name: "달콤한 케이크",
        description: "맛있는 케이크입니다. (Resonance +50)",
        effect: { resonance: 50 },
        priceType: "gold",
        priceValue: 500
    },
    {
        id: "gift_necklace",
        name: "보석 목걸이",
        description: "반짝이는 목걸이입니다. (Resonance +300)",
        effect: { resonance: 300 },
        priceType: "gem",
        priceValue: 50
    },
    {
        id: "gift_ring_promise",
        name: "서약의 반지",
        description: "영원한 사랑을 맹세합니다. (즉시 Lv.3 서약 달성)",
        effect: { resonance: 3000, type: 'oath' },
        priceType: "real",
        priceLabel: "₩33,000",
        price: 33000,
        type: "ring"
    }
];

export const DONATION_ITEMS = [
    {
        id: "donate_coffee",
        name: "개발자에게 커피 사주기",
        description: "개발자의 카페인을 충전합니다.",
        priceType: "donation",
        url: "https://buymeacoffee.com",
        priceLabel: "Donation"
    }
];

export const EQUIPMENT_PACKS = [
    {
        id: "equip_chest_wood",
        name: "낡은 장비 상자",
        description: "일반(Normal) ~ 고급(Unique) 등급의 장비 1개를 획득합니다.",
        priceType: "gold",
        priceValue: 1000,
        rewards: {
            equipment: { minTier: 1, maxTier: 2 }
        }
    },
    {
        id: "equip_chest_iron",
        name: "철제 장비 상자",
        description: "고급(Unique) ~ 희귀(Rare) 등급의 장비 1개를 획득합니다.",
        priceType: "gem",
        priceValue: 30, // 30 Gems = 3300 Gold approx
        rewards: {
            equipment: { minTier: 2, maxTier: 3 }
        }
    }
];
