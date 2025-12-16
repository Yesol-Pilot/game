import { RANKS } from './RankData.js';

export const CREATURE_DEFS = [
    // === 1. Normal (1 Element) ===
    { id: "slime_green", name: "초록 슬라임", rarity: RANKS.NORMAL, elements: ["Nature"], baseStr: 3, baseInt: 2, image: "images/creature_slime.png?v=2" },
    { id: "slime_blue", name: "파랑 슬라임", rarity: RANKS.NORMAL, elements: ["Water"], baseStr: 2, baseInt: 3, image: "images/creature_slime.png?v=2" },
    { id: "rat_brown", name: "시궁쥐", rarity: RANKS.NORMAL, elements: ["Earth"], baseStr: 4, baseInt: 1, image: "images/creature_rat_brown.png?v=2" },
    { id: "bat_small", name: "작은 박쥐", rarity: RANKS.NORMAL, elements: ["Wind"], baseStr: 3, baseInt: 2, image: "images/creature_bat_small.png?v=2" },
    { id: "pebble", name: "조약돌", rarity: RANKS.NORMAL, elements: ["Earth"], baseStr: 5, baseInt: 0, image: "images/creature_pebble.png?v=2" },

    // === 2. Unique (1 Element) ===
    { id: "slime_red", name: "마그마 슬라임", rarity: RANKS.UNIQUE, elements: ["Fire"], baseStr: 6, baseInt: 4, image: "images/creature_slime.png?v=2" },
    { id: "mushroom_angry", name: "화난 버섯", rarity: RANKS.UNIQUE, elements: ["Nature"], baseStr: 5, baseInt: 5, image: "images/creature_mushroom_angry.png?v=2" },
    { id: "goblin_scout", name: "고블린 정찰병", rarity: RANKS.UNIQUE, elements: ["Earth"], baseStr: 7, baseInt: 3, image: "images/creature_goblin_scout.png?v=2" },
    { id: "wisp_faint", name: "희미한 위스프", rarity: RANKS.UNIQUE, elements: ["Light"], baseStr: 1, baseInt: 8, image: "images/creature_wisp_faint.png?v=2" },
    { id: "fish_flying", name: "날치", rarity: RANKS.UNIQUE, elements: ["Water"], baseStr: 4, baseInt: 4, image: "images/creature_fish_flying.png?v=2" },

    // === 3. Rare (1~2 Elements) ===
    { id: "wolf_dire", name: "다이어 울프", rarity: RANKS.RARE, elements: ["Dark", "Earth"], baseStr: 12, baseInt: 5, image: "images/creature_wolf_dire.png?v=2" },
    { id: "eagle_iron", name: "강철 독수리", rarity: RANKS.RARE, elements: ["Metal", "Wind"], baseStr: 10, baseInt: 8, image: "images/creature_eagle_iron.png?v=2" },
    { id: "bear_ice", name: "만년설 곰", rarity: RANKS.RARE, elements: ["Ice", "Water"], baseStr: 15, baseInt: 3, image: "images/creature_bear_ice.png?v=2" },
    { id: "flower_fairy", name: "꽃의 요정", rarity: RANKS.RARE, elements: ["Nature", "Light"], baseStr: 4, baseInt: 14, image: "images/creature_flower_fairy.png?v=2" },
    { id: "golem_mud", name: "진흙 골렘", rarity: RANKS.RARE, elements: ["Earth", "Water"], baseStr: 16, baseInt: 2, image: "images/creature_golem_mud.png?v=2" },

    // === 4. Special (2 Elements) ===
    { id: "knight_skeleton", name: "스켈레톤 나이트", rarity: RANKS.SPECIAL, elements: ["Dark", "Metal"], baseStr: 20, baseInt: 10, image: "images/creature_knight_skeleton.png?v=2" },
    { id: "mage_flame", name: "화염 마법사", rarity: RANKS.SPECIAL, elements: ["Fire", "Wind"], baseStr: 8, baseInt: 22, image: "images/creature_mage_flame.png?v=2" },
    { id: "ninja_shadow", name: "그림자 닌자", rarity: RANKS.SPECIAL, elements: ["Dark", "Wind"], baseStr: 18, baseInt: 12, image: "images/creature_ninja_shadow.png?v=2" },
    { id: "unicorn_young", name: "어린 유니콘", rarity: RANKS.SPECIAL, elements: ["Light", "Nature"], baseStr: 15, baseInt: 15, image: "images/creature_unicorn_young.png?v=2" },
    { id: "elemental_water", name: "물의 정령", rarity: RANKS.SPECIAL, elements: ["Water", "Ice"], baseStr: 12, baseInt: 18, image: "images/creature_elemental_water.png?v=2" },

    // === 5. SR (2~3 Elements) ===
    { id: "dragon_drake", name: "화염의 용기사 이그니스", rarity: RANKS.SR, elements: ["Fire", "Wind", "Earth"], baseStr: 35, baseInt: 20, image: "images/creature_dragon_drake.png?v=2" },
    { id: "giant_hill", name: "대지의 방패 그로트", rarity: RANKS.SR, elements: ["Earth", "Nature"], baseStr: 40, baseInt: 10, image: "images/creature_giant_hill.png?v=2" },
    { id: "vampire_lord", name: "진홍의 여왕 카밀라", rarity: RANKS.SR, elements: ["Dark", "Wind"], baseStr: 30, baseInt: 35, image: "images/creature_vampire_lord.png?v=2" },
    { id: "valkyrie", name: "전장의 깃발 브륀힐트", rarity: RANKS.SR, elements: ["Light", "Metal", "Wind"], baseStr: 32, baseInt: 32, image: "images/creature_valkyrie.png?v=2" },
    { id: "kraken_baby", name: "심해의 아이돌 루루", rarity: RANKS.SR, elements: ["Water", "Dark"], baseStr: 38, baseInt: 25, image: "images/creature_kraken_baby.png?v=2" },

    // === 6. SSR (3 Elements) ===
    { id: "dragon_ancient", name: "고대룡 현자 바하무트", rarity: RANKS.SSR, elements: ["Fire", "Wind", "Chaos"], baseStr: 60, baseInt: 50, image: "images/creature_dragon_ancient.png?v=2" },
    { id: "angel_arch", name: "대천사 미카엘", rarity: RANKS.SSR, elements: ["Light", "Fire", "Wind"], baseStr: 55, baseInt: 55, image: "images/creature_angel_arch.png?v=2" },
    { id: "demon_king", name: "마왕 바알", rarity: RANKS.SSR, elements: ["Dark", "Chaos", "Fire"], baseStr: 58, baseInt: 52, image: "images/creature_demon_king.png?v=2" },
    { id: "titan_atlas", name: "거신 아틀라스", rarity: RANKS.SSR, elements: ["Earth", "Metal", "Nature"], baseStr: 70, baseInt: 20, image: "images/creature_titan_atlas.png?v=2" },
    { id: "phoenix_eternal", name: "불멸의 화조 페이", rarity: RANKS.SSR, elements: ["Fire", "Light", "Time"], baseStr: 45, baseInt: 65, image: "images/creature_phoenix_eternal.png?v=2" },

    // === 7. UR (3 Elements - Mythical) ===
    { id: "god_zeus", name: "천둥의 신 제우스", rarity: RANKS.UR, elements: ["Lightning", "Wind", "Light"], baseStr: 100, baseInt: 90, image: "images/creature_god_zeus.png?v=2" },
    { id: "dragon_chaos", name: "혼돈의 용희 티아마트", rarity: RANKS.UR, elements: ["Chaos", "Dark", "Fire"], baseStr: 120, baseInt: 100, image: "images/creature_dragon_chaos.png?v=2" },
    { id: "creator_gaia", name: "창조주 가이아", rarity: RANKS.UR, elements: ["Nature", "Earth", "Life"], baseStr: 80, baseInt: 120, image: "images/creature_creator_gaia.png?v=2" },
    { id: "time_lord_chronos", name: "시간의 지배자 크로노스", rarity: RANKS.UR, elements: ["Time", "Void", "Ice"], baseStr: 95, baseInt: 95, image: "images/creature_time_lord_chronos.png?v=2" },
    { id: "void_emperor", name: "공허의 여제 에레보스", rarity: RANKS.UR, elements: ["Void", "Dark", "Chaos"], baseStr: 110, baseInt: 110, image: "images/creature_void_emperor.png?v=2" }
];

export const CREATURE_DEF_MAP = {};
CREATURE_DEFS.forEach(def => {
    CREATURE_DEF_MAP[def.id] = def;
});
