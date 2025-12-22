import { RANKS } from './RankData.js';

/**
 * 월드 정의 (세계관 기반)
 * 
 * 각 월드는 고유한 특성과 시너지를 가짐:
 * - OLYMPUS: 치명타/압도 (그리스 신화)
 * - ASGARD: 불굴/생존 (북유럽 신화)  
 * - SHANGRILA: 조화/회복 (동양 신화)
 * - ABYSS: 공포/디버프 (크툴루/악마)
 * - WILD: 야생의 법칙 (자연/드래곤)
 */
export const WORLDS = {
    OLYMPUS: "OLYMPUS",     // 치명타 특화, 신성의 연합 (질서)
    ASGARD: "ASGARD",       // 불굴/생존, 신성의 연합 (질서)
    SHANGRILA: "SHANGRILA", // 조화/회복, 환수의 맹약 (중립)
    ABYSS: "ABYSS",         // 공포/디버프, 심연의 군세 (혼돈)
    WILD: "WILD"            // 야생의 법칙, 환수의 맹약 (중립)
};

/**
 * 세력 정의 (Factions)
 */
export const FACTIONS = {
    DIVINE_ALLIANCE: "DIVINE_ALLIANCE",   // 신성의 연합 (질서) - OLYMPUS, ASGARD
    LEGION_OF_ABYSS: "LEGION_OF_ABYSS",   // 심연의 군세 (혼돈) - ABYSS
    COVENANT_OF_BEASTS: "COVENANT_OF_BEASTS" // 환수의 맹약 (중립) - SHANGRILA, WILD
};

// 월드-세력 매핑
export const WORLD_TO_FACTION = {
    [WORLDS.OLYMPUS]: FACTIONS.DIVINE_ALLIANCE,
    [WORLDS.ASGARD]: FACTIONS.DIVINE_ALLIANCE,
    [WORLDS.SHANGRILA]: FACTIONS.COVENANT_OF_BEASTS,
    [WORLDS.ABYSS]: FACTIONS.LEGION_OF_ABYSS,
    [WORLDS.WILD]: FACTIONS.COVENANT_OF_BEASTS
};

export const CREATURE_DEFS = [
    // ==========================================
    // 🏛️ OLYMPUS (올림푸스) - 신성의 연합
    // 컨셉: 고대 그리스, 백색 대리석, 황금, 번개
    // 특성: [압도] 치명타 확률/피해 증가
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "god_zeus",
        name: "천둥의 신 제우스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Lightning", "Wind", "Light"],
        ego: "Warlord",
        baseStr: 55, baseInt: 65,
        image: "images/creature_god_zeus.jpg",
        lines: {
            normal: "내 번개를 감당할 수 있겠느냐, 작은 인간아.",
            touch_head: "호오? 감히 신의 머리를... 배짱이 좋구나?",
            touch_chest: "무례하구나! ...하지만 싫지 않으니 허락하마.",
            touch_chest_reject: "무례하구나! 감히 신의 옥체에 손을 대다니!",
            touch_chest_love: "후후... 네 손길, 나쁘지 않구나. 계속해 보거라.",
            touch_legs: "내 발밑에 엎드려라. 그게 너에게 어울리는 위치다.",
            touch_special: "무릎 꿇어라! 이것이 신의 분노다!"
        }
    },
    {
        id: "time_lord_chronos",
        name: "시간의 지배자 크로노스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Time", "Void", "Ice"],
        ego: "Seeker",
        baseStr: 40, baseInt: 80,
        image: "images/creature_time_lord_chronos.png?v=5",
        lines: {
            normal: "너의 시간은 이제 내 것이야. 1초도 다른 곳을 보지 마.",
            touch_head: "움직이지 마... 지금 이 순간을 멈출 테니까.",
            touch_chest: "내 가슴의 시계소리가 들려? 영원히 너를 위해 뛸 거야.",
            touch_legs: "시간을 거스르는 각선미... 라고 해줄래?",
            touch_special: "시간의 끝을 보여주지. 종말이다."
        }
    },

    // --- SSR (터치 상호작용 O) ---
    {
        id: "angel_arch",
        name: "대천사 미카엘",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light", "Fire", "Wind"],
        ego: "Star",
        baseStr: 45, baseInt: 55,
        image: "images/creature_angel_arch.png?v=5",
        lines: {
            normal: "신성한 빛이 당신을 인도할 겁니다. 저를 믿으세요.",
            touch_head: "어머, 날개는 성감... 아니, 예민한 부분입니다!",
            touch_chest: "아앗! ...신성모독... 인가요? 가슴이 두근거려요...",
            touch_chest_reject: "아앗! 신성모독입니다! 물러가세요!",
            touch_chest_love: "주님... 이 떨림은 무엇일까요? 당신 때문인가요...",
            touch_legs: "스타킹이 찢어지면 곤란해요... 살살 부탁드려요.",
            touch_special: "사악한 무리들이여, 성화에 정화되어라!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "titan_atlas",
        name: "거신 아틀라스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Metal", "Nature"],
        ego: "Warlord",
        baseStr: 50, baseInt: 20,
        image: "images/creature_titan_atlas.png?v=5",
        lines: { normal: "이 정도 바위는 깃털처럼 가볍지! 운동 좀 할래?" }
    },

    // --- Special ---
    {
        id: "mage_flame",
        name: "화염 마법사",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Fire", "Wind"],
        baseStr: 8, baseInt: 22,
        image: "images/creature_mage_flame.png?v=3",
        lines: { normal: "타오르는 지식이여." }
    },
    {
        id: "unicorn_young",
        name: "어린 유니콘",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light", "Nature"],
        baseStr: 15, baseInt: 15,
        image: "images/creature_unicorn_young.png?v=3",
        lines: { normal: "순수한 자만이..." }
    },

    // --- Rare ---
    {
        id: "centaur_scout",
        name: "켄타우로스 정찰병",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Nature", "Wind"],
        baseStr: 12, baseInt: 5,
        image: "images/creature_centaur.png?v=1",
        lines: { normal: "다그닥! 바람보다 빠르게!" }
    },

    // --- Unique ---
    {
        id: "wisp_faint",
        name: "희미한 위스프",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Light"],
        baseStr: 1, baseInt: 8,
        image: "images/creature_wisp_faint.png?v=3",
        lines: { normal: "반짝..." }
    },

    // --- Normal ---
    {
        id: "cloud_puff",
        name: "구름 솜사탕",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Wind", "Water"],
        baseStr: 2, baseInt: 4,
        image: "images/creature_cloud_puff.png?v=1",
        lines: { normal: "둥실둥실..." }
    },

    // ==========================================
    // 🏔️ ASGARD (아스가르드) - 신성의 연합
    // 컨셉: 북유럽, 눈보라, 강철, 룬 문자
    // 특성: [불굴] 체력 낮을수록 공방 증가
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "god_odin",
        name: "최고신 오딘",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Wind", "Magic"],
        ego: "Seeker",
        baseStr: 45, baseInt: 75,
        image: "images/creature_god_odin.jpg",
        lines: {
            normal: "지혜를 원하느냐. 대가가 따를 것이다.",
            touch_head: "눈 한쪽의 대가로 얻은 지혜... 알고 싶은가?",
            touch_chest: "차가운 대지처럼 굳어있던 내 심장이... 뛰는군.",
            touch_legs: "서두르지 마라. 지혜는 천천히 얻는 법이다.",
            touch_special: "궁니르여, 적을 꿰뚫어라!"
        }
    },

    // --- SSR (터치 상호작용 O) ---
    {
        id: "wolf_fenrir",
        name: "종말의 늑대 펜리르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Beast"],
        ego: "Warlord",
        baseStr: 70, baseInt: 25,
        image: "images/creature_fenrir.jpg",
        lines: {
            normal: "이 사슬... 끊어버리겠어!",
            touch_head: "크르릉... 쓰다듬는 건... 딱 한 번만 허락하지.",
            touch_chest: "심장 소리가 거세지는 건... 굶주림 때문이야!",
            touch_chest_reject: "크르르! 함부로 만지지 마!",
            touch_chest_love: "흥... 너한테만 예외를 두는 거야.",
            touch_legs: "발목 사슬은 이미 끊었어. 다음은 네 마음이야.",
            touch_special: "라그나로크의 시작이다!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "valkyrie",
        name: "전장의 깃발 브륀힐트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Metal", "Wind"],
        ego: "Warlord",
        baseStr: 40, baseInt: 35,
        image: "images/creature_valkyrie.png?v=3",
        lines: { normal: "전선 이상 무! 발할라를 위하여!" }
    },
    {
        id: "giant_hill",
        name: "대지의 방패 그로트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth", "Nature"],
        ego: "Devotion",
        baseStr: 45, baseInt: 15,
        image: "images/creature_giant_hill.png?v=3",
        lines: { normal: "작은 친구~ 쉬었다 가." }
    },

    // --- Special ---
    {
        id: "dwarf_smith",
        name: "드워프 대장장이",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Fire"],
        baseStr: 18, baseInt: 15,
        image: "images/creature_dwarf.png?v=1",
        lines: { normal: "망치질 시작이다! 캉! 캉!" }
    },

    // --- Rare ---
    {
        id: "eagle_iron",
        name: "강철 독수리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Wind"],
        baseStr: 10, baseInt: 8,
        image: "images/creature_eagle_iron.png?v=3",
        lines: { normal: "날개는 강철이지." }
    },
    {
        id: "bear_ice",
        name: "만년설 곰",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Water"],
        baseStr: 15, baseInt: 3,
        image: "images/creature_bear_ice.png?v=3",
        lines: { normal: "추위는 익숙해." }
    },

    // --- Normal ---
    {
        id: "snow_spirit",
        name: "눈송이 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Ice"],
        baseStr: 2, baseInt: 3,
        image: "images/creature_snow.png?v=1",
        lines: { normal: "사르르... 녹지 않아요." }
    },

    // ==========================================
    // 🌸 SHANGRILA (무릉도원) - 환수의 맹약
    // 컨셉: 동양 판타지, 신비로움, 구름, 요술
    // 특성: [조화] 쿨타임 감소, 회복
    // ==========================================

    // --- UR (터치 상호작용 O) ---
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

    // --- UR Hidden (진화 체인 최종 단계) ---
    {
        id: "fox_nine_hidden",
        name: "천년 구미호 미호",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Dark", "Charm", "Time"],
        ego: "Star",
        baseStr: 55, baseInt: 75,
        isHidden: true, // 히든 플래그
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

    // --- SSR (터치 상호작용 O) ---
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

    // --- SR (터치 상호작용 X) ---
    {
        id: "fox_nine",
        name: "여우요괴 미호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Dark", "Charm"],
        ego: "Star",
        baseStr: 25, baseInt: 50,
        image: "images/creature_fox_yokai_sr.png",
        // [진화 시스템] 5성 + Lv.50 + 서약 시 히든 UR로 진화
        evolvesTo: "fox_nine_hidden",
        evolveConditions: { star: 5, level: 50, affectionLevel: 3 },
        lines: { normal: "어머, 간 좀 내어줄래? 농담이야~" }
    },

    // --- Special ---
    {
        id: "ninja_shadow",
        name: "그림자 닌자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Dark", "Wind"],
        baseStr: 18, baseInt: 12,
        image: "images/creature_ninja_shadow.png?v=3",
        lines: { normal: "기척을 숨겨라." }
    },

    // --- Rare ---
    {
        id: "flower_fairy",
        name: "꽃의 요정",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Nature", "Light"],
        baseStr: 4, baseInt: 14,
        image: "images/creature_flower_fairy.png?v=3",
        lines: { normal: "향기롭죠?" }
    },
    {
        id: "panda_monk",
        name: "판다 수도승",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth", "Nature"],
        baseStr: 14, baseInt: 8,
        image: "images/creature_panda.png?v=1",
        lines: { normal: "허허, 대나무 차 한잔 하게." }
    },

    // --- Normal (진화 체인 시작점) ---
    {
        id: "fox_baby",
        name: "아기여우 미호",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Fire", "Charm"],
        ego: "Star",
        baseStr: 5, baseInt: 10,
        image: "images/creature_fox_baby_n.png",
        // [진화 시스템] 5성 달성 시 SR로 진화
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
        image: "images/creature_ink.png?v=1",
        lines: { normal: "찰랑... 그림을 그려요." }
    },

    // ==========================================
    // 🌑 ABYSS (심연) - 심연의 군세
    // 컨셉: 크툴루, 촉수, 보라색 안개, 광기
    // 특성: [공포] 적 방어력 감소, 지속 피해
    // ==========================================

    // --- UR (터치 상호작용 O) ---
    {
        id: "void_emperor",
        name: "공허의 여제 에레보스",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Void", "Dark", "Chaos"],
        ego: "Devotion",
        baseStr: 35, baseInt: 85,
        image: "images/creature_void_emperor.png?v=5",
        lines: {
            normal: "아무도 없는 곳으로 가자... 영원히 나랑만 있게... 응?",
            touch_head: "나만 봐... 나만 느껴... 다른 건 필요 없어.",
            touch_chest: "여길 채워줘... 공허한 내 마음을 너로 가득 채워줘.",
            touch_legs: "깊은 심연으로 끌려오라구... 영원히 못 빠져나가게.",
            touch_special: "영원한 어둠 속으로... 우리 함께 떨어지자."
        }
    },
    {
        id: "dragon_chaos",
        name: "혼돈의 용희 티아마트",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Chaos", "Dark", "Fire"],
        ego: "Devotion",
        baseStr: 60, baseInt: 60,
        image: "images/creature_dragon_chaos.png?v=5",
        lines: {
            normal: "이 세상을 전부 부수고, 너랑 나 단둘이 남는 건 어때?",
            touch_head: "후후... 나를 길들이고 싶어? 더 거칠게 다뤄봐.",
            touch_chest: "심장이 뛰어? 나도 그래... 널 삼키고 싶을 만큼.",
            touch_chest_reject: "감히... 내 심장에 손을 대? 죽고 싶어?",
            touch_chest_love: "심장이 뛰는 게 느껴져? ...널 삼키고 싶을 만큼.",
            touch_legs: "어딜 가려고? 내 꼬리가 널 놔줄 것 같아?",
            touch_special: "모든 것을 태초의 혼돈으로... 사라져라."
        }
    },

    // --- SSR (터치 상호작용 O) ---
    {
        id: "demon_king",
        name: "마왕 바알",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Chaos", "Fire"],
        ego: "Seeker",
        baseStr: 50, baseInt: 50,
        image: "images/creature_demon_king.png?v=5",
        lines: {
            normal: "헤~ 디렉터님, 또 일해? 재미없어~ 나랑 놀자니까?",
            touch_head: "우냐냐?! 머리 만지지 마! ...이, 이건 명령이라구!",
            touch_chest: "변태! 디렉터님 변태! ...뭐, 기분은 나쁘지 않네.",
            touch_legs: "발 핥고 싶어? 앙? ...농담이야! 진짜 핥으려고 하지 마!",
            touch_special: "전부 망가뜨려 줄게! 꺄하하핫!"
        }
    },

    // --- SR (터치 상호작용 X) ---
    {
        id: "vampire_lord",
        name: "진홍의 여왕 카밀라",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Wind"],
        ego: "Devotion",
        baseStr: 35, baseInt: 40,
        image: "images/creature_vampire_lord.png?v=3",
        lines: { normal: "맛있어 보이는... 멋진 분이시네요." }
    },
    {
        id: "kraken_baby",
        name: "심해의 아이돌 루루",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Water", "Dark"],
        ego: "Star",
        baseStr: 40, baseInt: 30,
        image: "images/creature_kraken_baby.png?v=3",
        lines: { normal: "루루의 라이브에 오신 걸 환영합니다~" }
    },

    // --- Special ---
    {
        id: "knight_skeleton",
        name: "스켈레톤 나이트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Metal"],
        baseStr: 20, baseInt: 10,
        image: "images/creature_knight_skeleton.png?v=3",
        lines: { normal: "명령을..." }
    },

    // --- Rare ---
    {
        id: "gargoyle_stone",
        name: "석상 가고일",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Earth", "Dark"],
        baseStr: 15, baseInt: 5,
        image: "images/creature_gargoyle.png?v=1",
        lines: { normal: "침입자 발견. 굳어버려라." }
    },

    // --- Unique ---
    {
        id: "goblin_scout",
        name: "고블린 정찰병",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Earth"],
        baseStr: 7, baseInt: 3,
        image: "images/creature_goblin_scout.png?v=3",
        lines: { normal: "빈틈 발견." }
    },

    // --- Normal ---
    {
        id: "rat_brown",
        name: "시궁쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Earth"],
        baseStr: 4, baseInt: 1,
        image: "images/creature_rat_brown.png?v=3",
        lines: { normal: "찍!" }
    },
    {
        id: "bat_small",
        name: "작은 박쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Wind"],
        baseStr: 3, baseInt: 2,
        image: "images/creature_bat_small.png?v=3",
        lines: { normal: "키이익..." }
    },

    // ==========================================
    // 🌿 WILD (야생) - 환수의 맹약
    // 컨셉: 자연, 드래곤, 정령, 원시의 힘
    // 특성: 야생의 법칙 - 기본 스탯 효율
    // ==========================================

    // --- UR (터치 상호작용 O) ---
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

    // --- SSR (터치 상호작용 O) ---
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

    // --- SR (터치 상호작용 X) ---
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

    // --- Special ---
    {
        id: "ent_ancient",
        name: "고대 엔트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Nature", "Earth"],
        baseStr: 25, baseInt: 10,
        image: "images/creature_ent.png?v=1",
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

    // --- Rare ---
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

    // --- Unique ---
    {
        id: "slime_red",
        name: "마그마 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Fire"],
        baseStr: 6, baseInt: 4,
        image: "images/creature_slime.png?v=3",
        lines: { normal: "보글보글..." }
    },
    {
        id: "mushroom_angry",
        name: "화난 버섯",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Nature"],
        baseStr: 5, baseInt: 5,
        image: "images/creature_mushroom_angry.png?v=3",
        lines: { normal: "쉬익..." }
    },
    {
        id: "fish_flying",
        name: "날치",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Water"],
        baseStr: 4, baseInt: 4,
        image: "images/creature_fish_flying.png?v=3",
        lines: { normal: "파닥파닥!" }
    },

    // --- Normal ---
    {
        id: "slime_green",
        name: "초록 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Nature"],
        baseStr: 3, baseInt: 2,
        image: "images/creature_slime.png?v=3",
        lines: { normal: "꿀렁..." }
    },
    {
        id: "slime_blue",
        name: "파랑 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Water"],
        baseStr: 2, baseInt: 3,
        image: "images/creature_slime.png?v=3",
        lines: { normal: "찰팍..." }
    },
    {
        id: "pebble",
        name: "조약돌",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Earth"],
        baseStr: 5, baseInt: 0,
        image: "images/creature_pebble.png?v=3",
        lines: { normal: "..." }
    }
];

// 크리처 ID -> 정의 맵
export const CREATURE_DEF_MAP = {};
CREATURE_DEFS.forEach(def => {
    CREATURE_DEF_MAP[def.id] = def;
});

// 월드별 크리처 필터 헬퍼
export function getCreaturesByWorld(world) {
    return CREATURE_DEFS.filter(c => c.world === world);
}

// 세력별 크리처 필터 헬퍼
export function getCreaturesByFaction(faction) {
    return CREATURE_DEFS.filter(c => WORLD_TO_FACTION[c.world] === faction);
}

// 등급별 크리처 필터 헬퍼
export function getCreaturesByRarity(rarity) {
    return CREATURE_DEFS.filter(c => c.rarity === rarity);
}

// 터치 상호작용 가능 여부 체크 (SSR 이상만)
export function canInteract(creature) {
    return creature.rarity === RANKS.UR || creature.rarity === RANKS.SSR;
}
