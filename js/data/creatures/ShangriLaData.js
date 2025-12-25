import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const SHANGRILA_CREATURES = [
    {
        id: "dragon_ancient",
        name: "태초의 용 바하무트",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Wind", "Chaos"],
        ego: "Seeker",
        baseStr: 50, baseInt: 70,
        image: "images/creature_dragon_ancient.png?v=5",
        lines: {
            normal: "지식의 탐구는 끝이 없구나. 너도 배우러 왔느냐?",
            touch_head: "무례하구나... 하지만 나쁘지는 않군.",
            touch_chest: "거긴... 용의 역린과 가까운 곳이다. 조심하거라.",
            touch_legs: "용의 비늘을 만지고 싶다면, 자격을 증명해 보거라.",
            touch_special: "이것이 태초의 지혜다. 똑바로 보거라."
        }
    },
    {
        id: "fox_nine_hidden",
        name: "천년 구미호 미호",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Dark", "Charm", "Time"],
        ego: "Star",
        baseStr: 55, baseInt: 75,
        isHidden: true,
        skillId: "miho_skill",
        image: "images/creature_fox_nine_ur.png",
        lines: {
            normal: "천 년을 기다렸어... 드디어 너를 만났구나.",
            touch_head: "이 꼬리들... 전부 너만을 위해 기른 거야.",
            touch_chest: "심장이 뛰어? 천 년 동안 멈춰있던 내 심장도 그래.",
            touch_chest_love: "이리 와... 영원히 내 곁에 있어줘.",
            touch_legs: "도망가지 마... 내 꼬리가 널 놓아주지 않을 거야.",
            touch_special: "요호... 이젠 너도 내 것이야. 영원히."
        }
    },
    {
        id: "phoenix_eternal",
        name: "불멸의 화조 페이",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Light", "Time"],
        ego: "Star",
        baseStr: 45, baseInt: 55,
        image: "images/creature_phoenix_eternal.png?v=3",
        lines: {
            normal: "안녕? 내 불꽃은 꺼지지 않아. 우리의 인연처럼 말이야!",
            touch_head: "앗, 조심해! 너무 뜨겁게 안아버릴지도 모른다구?",
            touch_chest: "심장이 너무 빨리 뛰어서... 불타버릴 것 같아.",
            touch_legs: "날아갈 준비 됐어? 꽉 잡아!",
            touch_special: "다시 피어나는 불꽃처럼! 영원히 빛나라!!"
        }
    },
    {
        id: "fox_nine",
        name: "여우요괴 미호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Dark", "Charm"],
        ego: "Star",
        baseStr: 25, baseInt: 50,
        image: "images/creature_fox_yokai_sr.png",
        evolvesTo: "fox_nine_hidden",
        evolveConditions: { star: 5, level: 50, affectionLevel: 3 },
        lines: { normal: "어머, 간 좀 내어줄래? 농담이야~" }
    },
    {
        id: "ninja_shadow",
        name: "그림자 닌자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Dark", "Wind"],
        baseStr: 18, baseInt: 12,
        image: "images/creature_ninja_shadow.png?v=3",
        lore: {
            title: "어둠의 첩자",
            story: "달빛도 피해가는 그림자의 닌자. 존재 자체가 소문일 뿐, 실제로 본 사람은 살아돌아오지 못했다. 사실 수줍음이 많아서 사람 앞에 나서기가 힘든 것. 야식으로 라멘을 먹는 게 비밀.",
            origin: "상그릴라 암영촌",
            relationships: [
                { id: "vampire_lord", type: "ally", desc: "어둠 속의 동맹. 암살 시너지" },
                { id: "angel_arch", type: "rival", desc: "빛의 천사와는 상극" }
            ],
            synergy: { ally: ["vampire_lord", "demon_king"], rival: ["angel_arch", "unicorn_young"] }
        },
        lines: { normal: "기척을 숨겨라... 라멘 냄새도 숨겨야 하는데..." }
    },
    {
        id: "flower_fairy",
        name: "꽃의 요정",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Nature", "Light"],
        baseStr: 4, baseInt: 14,
        image: "images/creature_flower_fairy.png?v=3",
        lore: {
            title: "정원의 수호자",
            story: "아침 이슬처럼 맑고 순수한 꽃의 요정. 시든 꽃을 되살리고 병든 나무를 치유하는 힘을 가졌다. 수다 떠는 걸 좋아하고, 벌들과 친구. 꽃가루 알레르기가 있어서 가끔 재채기를 한다(아이러니).",
            origin: "상그릴라 영원의 정원",
            relationships: [
                { id: "unicorn_young", type: "ally", desc: "순수한 존재들의 우정. 힐량 버프" },
                { id: "ent_ancient", type: "ally", desc: "고대 나무의 보호를 받음" }
            ],
            synergy: { ally: ["unicorn_young", "ent_ancient"], rival: [] }
        },
        lines: { normal: "향기롭죠? 에취! 아, 미안..." }
    },
    {
        id: "panda_monk",
        name: "판다 수도승",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth", "Nature"],
        baseStr: 14, baseInt: 8,
        image: "images/creature_panda.png?v=2",
        lore: {
            title: "대나무 현자",
            story: "천년 수련 끝에 깨달음을 얻은 판다. 느긋해 보이지만 주먹 한 방에 바위가 부서진다. '급할 것 없다'가 인생 모토지만, 대나무 간식 시간만큼은 절대 지킨다. 명상하다 자주 졸음.",
            origin: "상그릴라 운무산 사원",
            relationships: [
                { id: "giant_hill", type: "ally", desc: "거인과 판다의 느긋한 콤비" },
                { id: "golem_mud", type: "ally", desc: "대지의 친구들" }
            ],
            synergy: { ally: ["giant_hill", "golem_mud", "ent_ancient"], rival: [] }
        },
        lines: { normal: "허허, 대나무 차 한잔 하게. 쿨쿨... 앗, 잠깐 졸았네." }
    },
    {
        id: "fox_baby",
        name: "아기여우 미호",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Charm"],
        ego: "Star",
        baseStr: 5, baseInt: 10,
        image: "images/creature_fox_baby_n.png",
        lore: {
            title: "여우구슬의 씨앗",
            story: "귀엽고 천진난만한 아기 여우. 아직 꼬리는 하나뿐이지만, 언젠가 강력한 구미호가 될 잠재력을 품고 있다. 뭐든 물어뜯는 습관이 있고, 특히 주인의 신발을 좋아한다.",
            origin: "상그릴라 요호산",
            relationships: [
                { id: "fox_nine", type: "family", desc: "미래의 자신. 진화하면 여우요괴로" }
            ],
            synergy: { ally: [], rival: [] }
        },
        evolvesTo: "fox_nine",
        evolveConditions: { star: 5 },
        lines: { normal: "콩콩! 같이 놀아줘요~" }
    },
    {
        id: "ink_spirit",
        name: "먹물 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Water", "Dark"],
        baseStr: 1, baseInt: 5,
        image: "images/creature_ink_spirit.png",
        lines: { normal: "찰랑... 그림을 그려요." }
    },
    // --- 신규 추가 (40종 확장을 위한 슬롯) ---
    {
        id: "god_dragon_king",
        name: "수정궁의 용왕",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Water", "Light", "Magic"],
        ego: "Warlord",
        baseStr: 50, baseInt: 75,
        image: "images/creature_god_dragon_king.png",
        lore: { title: "사해의 지배자", story: "동양 바다를 다스리는 용들의 왕. 만물을 적시는 비를 내리고 바다의 질서를 수호한다." }
    },
    {
        id: "hero_wukong",
        name: "제천대성 손오공",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Earth", "Fire", "Wind"],
        ego: "Berserker",
        baseStr: 60, baseInt: 40,
        image: "images/creature_hero_wukong.png",
        lore: { title: "하늘에 필적하는 성인", story: "화과산의 돌에서 태어난 영물. 여의봉을 휘두르며 천계를 뒤흔들었던 전설의 악동입니다." }
    },
    {
        id: "rabbit_moon",
        name: "달토끼 루나",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light", "Ice", "Charm"],
        ego: "Star",
        baseStr: 15, baseInt: 60,
        image: "images/creature_rabbit_moon.png",
        lore: { title: "달빛의 떡방아", story: "달에서 내려온 순수한 토끼. 떡을 빚어 사람들에게 행복을 나눠주지만, 가끔은 고향을 그리워하며 눈물짓습니다." }
    },
    {
        id: "dragon_azure",
        name: "청룡",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Wind", "Light"],
        baseStr: 40, baseInt: 40,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "tiger_white",
        name: "백호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Metal", "Earth"],
        baseStr: 55, baseInt: 15,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "bird_vermilion",
        name: "주작",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Wind"],
        baseStr: 30, baseInt: 50,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "turtle_black",
        name: "현무",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Water", "Earth"],
        baseStr: 35, baseInt: 35,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "dokkeabi_king",
        name: "황금 방망이 도깨비",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Earth", "Fire"],
        baseStr: 45, baseInt: 25,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "crane_sage",
        name: "구름 위의 학 신선",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Wind", "Light"],
        baseStr: 10, baseInt: 45,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "lucky_cat_kuro",
        name: "복 고양이 쿠로",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Charm", "Metal"],
        baseStr: 12, baseInt: 20,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "tea_leaf_fairy",
        name: "찻잎 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Nature"],
        baseStr: 2, baseInt: 12,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "rice_grain_spirit",
        name: "쌀알 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"],
        baseStr: 5, baseInt: 5,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "bamboo_chopper",
        name: "대나무 전사",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Nature", "Metal"],
        baseStr: 22, baseInt: 8,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "lantern_ghost",
        name: "초롱불 귀신",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Spirit"],
        baseStr: 10, baseInt: 22,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "pears_spirit",
        name: "연꽃 아씨",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Water", "Nature"],
        baseStr: 5, baseInt: 35,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "paper_charm_seal",
        name: "봉인 부적",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Magic"],
        baseStr: 1, baseInt: 18,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "heavenly_maiden_small",
        name: "꼬마 선녀",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light", "Wind"],
        baseStr: 8, baseInt: 28,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "yin_yang_orb",
        name: "음양구",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Void", "Light", "Dark"],
        baseStr: 10, baseInt: 10,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "cherry_blossom_petal",
        name: "벚꽃잎 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Nature", "Wind"],
        baseStr: 2, baseInt: 15,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "kumiho_servant",
        name: "미호의 시종",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Charm", "Dark"],
        baseStr: 12, baseInt: 22,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "mountain_god_tiger",
        name: "산신 호랑이",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Earth", "Beast"],
        baseStr: 50, baseInt: 20,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "magpie_messenger",
        name: "반가운 까치 전령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Wind", "Light"],
        baseStr: 4, baseInt: 10,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "cloud_serpent",
        name: "구름 이무기",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Water", "Wind"],
        baseStr: 20, baseInt: 15,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "bonsai_spirit",
        name: "천년 분재 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Nature", "Earth"],
        baseStr: 15, baseInt: 30,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "scroll_dragon",
        name: "그림 속의 용",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Magic", "Water"],
        baseStr: 15, baseInt: 25,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "wind_chime_spirit",
        name: "풍경 소리 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Wind", "Voice"],
        baseStr: 1, baseInt: 18,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "statue_lion_dog",
        name: "해치 석상",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth", "Fire"],
        baseStr: 30, baseInt: 5,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "butterfly_dream",
        name: "장자의 나비",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Void", "Wind"],
        baseStr: 2, baseInt: 45,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "peacock_princess",
        name: "공작 공주",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light", "Charm"],
        baseStr: 30, baseInt: 50,
        image: "images/creature_peacock_princess.png",
        lore: { title: "화려한 춤사위", story: "그녀가 부채를 펼치면 세상의 모든 색이 빛을 잃습니다. 치명적인 아름다움 뒤에는 날카로운 바람이 숨어있습니다." }
    },
    {
        id: "firefly_night",
        name: "달밤의 반딧불이",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light", "Nature"],
        baseStr: 1, baseInt: 12,
        image: "images/placeholder_shangrila.png"
    },
    {
        id: "koi_ascending",
        name: "용이 되고 싶은 잉어",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Water", "Light"],
        baseStr: 12, baseInt: 18,
        image: "images/placeholder_shangrila.png"
    }
];
