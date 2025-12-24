import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const WILD_CREATURES = [
    {
        id: "creator_gaia",
        name: "창조주 가이아",
        rarity: RANKS.UR,
        world: WORLDS.WILD,
        elements: ["Nature", "Earth", "Life"],
        ego: "Devotion",
        baseStr: 50, baseInt: 70,
        image: "images/creature_creator_gaia.png?v=5",
        lines: {
            normal: "어머, 힘들었니? 이리 와, 엄마가 다 안아줄게.",
            touch_head: "착한 아이네... 무럭무럭 자라렴.",
            touch_chest: "그래... 엄마 품이 그립니? 마음껏 어리광 부려도 된단다.",
            touch_chest_reject: "어머, 아가야? 아직은 이러면 안 된단다.",
            touch_chest_love: "그래... 엄마 품이 그립니? 마음껏 안기렴.",
            touch_legs: "무릎베개 해줄까? 푹 자렴, 아가야.",
            touch_special: "자연의 섭리를... 거스르지 말렴."
        }
    },
    {
        id: "dragon_drake",
        name: "폭염의 패왕 이그니스",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Fire", "Wind", "Earth"],
        ego: "Warlord",
        baseStr: 55, baseInt: 30,
        image: "images/creature_dragon_drake.png?v=3",
        lines: {
            normal: "내 불꽃은 장난이 아니야. 화상 입고 싶어?",
            touch_head: "머, 머리 만지지 마! ...딱히 싫은 건 아니지만!",
            touch_chest: "심장 소리가 들려? 내 불꽃이 뜨거워지고 있어.",
            touch_legs: "꼬리 밟으면 죽여버릴 줄 알아!",
            touch_special: "이그니스 블레이드! 전부 태워주지!"
        }
    },
    {
        id: "chimera_beast",
        name: "키메라",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Fire", "Nature", "Beast"],
        ego: "Warlord",
        baseStr: 50, baseInt: 18,
        image: "images/creature_chimera.png",
        lines: { normal: "크아앙! 셋이서 덤비는 셈이지." }
    },
    {
        id: "ent_ancient",
        name: "고대 엔트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Nature", "Earth"],
        baseStr: 25, baseInt: 10,
        image: "images/creature_ent_ancient.png",
        lines: { normal: "숲을... 지킨다..." }
    },
    {
        id: "elemental_water",
        name: "물의 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Water", "Ice"],
        baseStr: 12, baseInt: 18,
        image: "images/creature_elemental_water.png?v=3",
        lines: { normal: "흐르는 대로..." }
    },
    {
        id: "snow_spirit",
        name: "눈송이 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Ice", "Light"],
        baseStr: 15, baseInt: 20,
        image: "images/creature_snow_spirit_new.png?v=3",
        lore: {
            title: "설원의 춤꾼",
            story: "차가운 북풍이 불 때 태어나는 정령. 그녀가 춤을 추면 세상이 하얗게 물든다. 아름답지만 만지면 동상에 걸릴 수 있으니 주의. 따뜻한 코코아를 좋아하지만 마실 수는 없다.",
            origin: "야생 설원",
            relationships: [{ id: "elemental_water", type: "friend", desc: "얼면 만날 수 있는 친구" }],
            synergy: { ally: ["elemental_water", "bear_ice"], rival: ["mage_flame"] }
        },
        lines: { normal: "차가워... 하지만 예쁘지?" }
    },
    {
        id: "wolf_dire",
        name: "다이어 울프",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Dark", "Earth"],
        baseStr: 12, baseInt: 5,
        image: "images/creature_wolf_dire.png?v=3",
        lines: { normal: "크르릉..." }
    },
    {
        id: "golem_mud",
        name: "진흙 골렘",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Earth", "Water"],
        baseStr: 16, baseInt: 2,
        image: "images/creature_golem_mud.png?v=3",
        lines: { normal: "단단하다." }
    },
    {
        id: "wisp_faint",
        name: "희미한 위스프",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light", "Spirit"],
        baseStr: 8, baseInt: 12,
        image: "images/creature_wisp_faint_new.png?v=3",
        lore: {
            title: "길 잃은 영혼의 등불",
            story: "숲속을 떠도는 작은 빛. 길 잃은 여행자를 마을로 안내해주기도 하지만, 장난기가 발동하면 늪으로 유인하기도 한다. 본인은 그저 숨바꼭질이라고 생각한다.",
            origin: "야생 깊은 숲",
            relationships: [{ id: "ent_ancient", type: "guardian", desc: "숲의 주인님" }],
            synergy: { ally: ["ent_ancient", "flower_fairy"], rival: [] }
        },
        lines: { normal: "반짝반짝... 어디로 갈까?" }
    },
    {
        id: "slime_red",
        name: "마그마 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Fire"],
        baseStr: 6, baseInt: 4,
        image: "images/creature_magma_slime.png",
        lines: { normal: "보글보글..." }
    },
    {
        id: "mushroom_angry",
        name: "화난 버섯",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Nature"],
        baseStr: 5, baseInt: 5,
        image: "images/creature_mushroom_angry_new.png",
        lines: { normal: "쉬익..." }
    },
    {
        id: "fish_flying",
        name: "날치",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Water"],
        baseStr: 4, baseInt: 4,
        image: "images/creature_fish_flying_new.png",
        lines: { normal: "파닥파닥!" }
    },
    {
        id: "slime_green",
        name: "초록 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Nature"],
        baseStr: 3, baseInt: 2,
        image: "images/creature_slime_green_new.png",
        lines: { normal: "꿀렁..." }
    },
    {
        id: "slime_blue",
        name: "파랑 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Water"],
        baseStr: 2, baseInt: 3,
        image: "images/creature_blue_slime.png",
        lines: { normal: "찰팍..." }
    },
    {
        id: "pebble",
        name: "조약돌",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Earth"],
        baseStr: 5, baseInt: 0,
        image: "images/creature_pebble_new.png",
        lines: { normal: "..." }
    }
];
