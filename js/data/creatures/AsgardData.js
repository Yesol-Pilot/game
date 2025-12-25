import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ASGARD_CREATURES = [
    {
        id: "wolf_fenrir",
        name: "종말의 늑대 펜리르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Beast"],
        ego: "Berserker",
        baseStr: 55, baseInt: 30,
        image: "images/creature_wolf_fenrir.png",
        lore: {
            title: "라그나로크의 시작",
            story: "북유럽 신화의 거대한 늑대. 신들조차 두려워하여 마법의 사슬 글레이프니르로 묶어두었다. 라그나로크의 날, 사슬이 풀리면 오딘을 삼키고 세계를 멸망시킬 운명. 야수적 본능과 싸우며 주인을 지키려 애쓴다.",
            origin: "북유럽 신화 / 아스가르드",
            relationships: [
                { id: "god_odin", type: "rival", desc: "운명의 적. 펜리르가 오딘을 삼킬 운명" },
                { id: "wolf_dire", type: "family", desc: "늑대 후배. 함께하면 공격력 버프" }
            ],
            synergy: { ally: ["wolf_dire", "demon_king"], rival: ["god_odin", "valkyrie"] }
        },
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
    {
        id: "god_odin",
        name: "최고신 오딘",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Wind", "Magic"],
        ego: "Seeker",
        baseStr: 45, baseInt: 75,
        skillId: "odin_skill",
        image: "images/creature_god_odin.png",
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            origin: "북유럽 신화 / 아스가르드",
            relationships: [
                { id: "wolf_fenrir", type: "rival", desc: "운명의 적. 라그나로크에서 오딘을 삼킬 자" },
                { id: "valkyrie", type: "ally", desc: "충실한 전사. 함께하면 치명타율 증가" },
                { id: "god_zeus", type: "rival", desc: "신들의 왕 간의 자존심 대결" }
            ],
            synergy: { ally: ["valkyrie", "eagle_iron", "bear_ice"], rival: ["wolf_fenrir", "demon_king"] }
        },
        lines: {
            normal: "지혜를 원하느냐. 대가가 따를 것이다.",
            touch_head: "눈 한쪽의 대가로 얻은 지혜... 알고 싶은가?",
            touch_chest: "차가운 대지처럼 굳어있던 내 심장이... 뛰는군.",
            touch_legs: "서두르지 마라. 지혜는 천천히 얻는 법이다.",
            touch_special: "궁니르여, 적을 꿰뚫어라!"
        }
    },
    {
        id: "valkyrie",
        name: "전장의 깃발 브륀힐트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Metal", "Wind"],
        ego: "Warlord",
        baseStr: 40, baseInt: 35,
        image: "images/creature_valkyrie.png?v=3",
        lore: {
            title: "영광의 선별자",
            story: "오딘의 명을 받아 전장에서 가장 용맹한 전사를 발할라로 인도하는 전쟁 처녀. 냉철하고 무자비하게 보이지만, 선택받지 못한 자들을 위해 몰래 눈물 흘리는 섬세한 마음의 소유자.",
            origin: "북유럽 신화 / 발할라",
            relationships: [
                { id: "god_odin", type: "ally", desc: "충성하는 주군. 함께하면 치명타 증가" },
                { id: "angel_arch", type: "ally", desc: "천상의 동료 전사" }
            ],
            synergy: { ally: ["god_odin", "angel_arch", "eagle_iron"], rival: ["wolf_fenrir"] }
        },
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
        lore: {
            title: "산을 품은 거인",
            story: "서리 거인족의 후예. 거대한 체구에 어울리지 않게 온순하고 가족을 사랑한다. 작은 생명체들을 지키는 것이 취미이며, 전투에서는 돈료를 위해 거대한 몸으로 방패가 된다.",
            origin: "북유럽 신화 / 요툰하임",
            relationships: [
                { id: "titan_atlas", type: "ally", desc: "거인족 선배. 운동 스승" },
                { id: "golem_mud", type: "ally", desc: "둔한 것들끼리의 우정" }
            ],
            synergy: { ally: ["titan_atlas", "golem_mud", "bear_ice"], rival: [] }
        },
        lines: { normal: "작은 친구~ 쉬었다 가." }
    },
    {
        id: "dwarf_smith",
        name: "드워프 대장장이",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Fire"],
        baseStr: 18, baseInt: 15,
        image: "images/creature_dwarf.png?v=4",
        lore: {
            title: "묠니르의 제작자",
            story: "아스가르드 최고의 무기장인. 토르의 망치 묠니르를 만든 장인 가문의 후손. 술을 마시면 제작 속도가 빨라지지만 완성품이 이상해진다. '맥주 한 잔 없으면 손이 안 움직여!'가 입버릇.",
            origin: "아스가르드 니다벨리르",
            relationships: [
                { id: "god_odin", type: "ally", desc: "오딘의 무기 공급자. 신뢰 관계" },
                { id: "golem_mud", type: "ally", desc: "광물 제공 파트너" }
            ],
            synergy: { ally: ["god_odin", "golem_mud", "eagle_iron"], rival: [] }
        },
        lines: { normal: "망치질 시작이다! 캉! 캉! 맥주 가져와!" }
    },
    {
        id: "eagle_iron",
        name: "강철 독수리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Wind"],
        baseStr: 10, baseInt: 8,
        image: "images/creature_eagle_iron.png?v=3",
        lore: {
            title: "하늘의 정찰자",
            story: "강철로 된 날개를 가진 신비로운 독수리. 세상 끝에서 끝까지 날아다니며 오딘에게 정보를 보고한다. 날개 깃털 하나로도 검을 만들 수 있을 만큼 강하고 날카롭다. 높은 곳에서 내려다보는 걸 좋아한다.",
            origin: "아스가르드 하늘",
            relationships: [
                { id: "valkyrie", type: "ally", desc: "발키리와 함께 전장을 정찰" },
                { id: "cloud_puff", type: "ally", desc: "구름 솜사탕 위에서 휴식" }
            ],
            synergy: { ally: ["valkyrie", "cloud_puff", "centaur_scout"], rival: [] }
        },
        lines: { normal: "날개는 강철이지. 하늘에서 모든 걸 본다!" }
    },
    {
        id: "bear_ice",
        name: "만년설 곰",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Water"],
        baseStr: 15, baseInt: 3,
        image: "images/creature_bear_ice.png?v=3",
        lore: {
            title: "얼어붙은 포효",
            story: "북극의 만년설 속에서 태어난 전설의 곰. 하품 한 번에 눈보라가 일고, 포효 한 번에 빙하가 무너진다. 겉은 무섭지만 새끼 물개랑 노는 걸 좋아하는 츤데레. 연어를 매우 좋아한다.",
            origin: "아스가르드 니플하임",
            relationships: [
                { id: "giant_hill", type: "ally", desc: "거인과 곰의 든든한 조합" },
                { id: "mage_flame", type: "rival", desc: "불과 얼음은 상극!" }
            ],
            synergy: { ally: ["giant_hill", "snow_spirit"], rival: ["mage_flame", "phoenix_eternal"] }
        },
        lines: { normal: "추위는 익숙해. 연어 줄 거야? 아... 뭐, 안 줘도 돼..." }
    },
    // --- 신규 추가 (40종 확장을 위한 슬롯) ---
    {
        id: "god_thor",
        name: "천둥의 망치 토르",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Lightning", "Metal", "Earth"],
        ego: "Warlord",
        baseStr: 70, baseInt: 10,
        image: "images/creature_god_thor.png",
        lore: { title: "묠니르의 주인", story: "아스가르드 최강의 전사. 그의 망치가 휘둘러질 때마다 거인들이 공포에 떤다." }
    },
    {
        id: "god_loki",
        name: "장난의 신 로키",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Magic", "Charm"],
        ego: "Star",
        baseStr: 20, baseInt: 65,
        image: "images/creature_god_loki.png",
        lore: { title: "변화무쌍한 책략가", story: "신들 사이의 말썽꾸러기이자 종말의 도화선. 그녀의 속삭임은 운명을 바꾼다." }
    },
    {
        id: "god_freya",
        name: "아름다움의 여신 프레이야",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Nature", "Charm"],
        ego: "Princess",
        baseStr: 25, baseInt: 55,
        skillId: "freya_skill",
        image: "images/creature_god_freya.png",
        lore: { title: "사랑과 전쟁", story: "모든 신들이 사랑하는 아름다움의 여신. 그녀의 눈물은 황금이 되어 떨어진다." }
    },
    {
        id: "god_hel",
        name: "저승의 여왕 헬",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice"],
        baseStr: 30, baseInt: 45,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "giant_fire_surtr",
        name: "불의 거인 수르트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Fire", "Chaos"],
        baseStr: 55, baseInt: 25,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "snake_world_jormungandr",
        name: "세계뱀 요르문간드",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Poison", "Water", "Earth"],
        baseStr: 40, baseInt: 70,
        image: "images/creature_snake_world_jormungandr.png",
        lore: "세계를 휘감고 있는 거대한 뱀. 그녀가 움직이면 해일이 일어납니다."
    },
    {
        id: "valkyrie_leader_gunnr",
        name: "발키리 대장 군르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Metal", "Wind"],
        baseStr: 45, baseInt: 40,
        image: "images/creature_valkyrie_leader_gunnr.png",
        lore: "전장의 영혼을 인도하는 발키리의 수장. 그녀의 깃발 아래에선 패배란 없습니다."
    },
    {
        id: "huginn_crow",
        name: "오딘의 까마귀 후긴",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Wind"],
        baseStr: 5, baseInt: 25,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "muninn_crow",
        name: "오딘의 까마귀 무닌",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Wind"],
        baseStr: 2, baseInt: 28,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "wolf_pup_asgard",
        name: "아기 늑대",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Beast"],
        baseStr: 10, baseInt: 2,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "dwarf_apprentice",
        name: "드워프 수습전공",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Metal"],
        baseStr: 12, baseInt: 5,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "troll_baby",
        name: "아기 트롤",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 15, baseInt: 1,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "ice_spirit_small",
        name: "작은 얼음 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Ice"],
        baseStr: 2, baseInt: 10,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "viking_youth",
        name: "열혈 바이킹 소년",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Fire"],
        baseStr: 18, baseInt: 5,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "valkyrie_recruit",
        name: "신입 발키리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Light", "Wind"],
        baseStr: 12, baseInt: 12,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "einherjar_ghost",
        name: "방황하는 에인헤랴르",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Light", "Spirit"],
        baseStr: 20, baseInt: 15,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "goat_lightning",
        name: "번개 염소 탕그리스니르",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Lightning", "Beast"],
        baseStr: 18, baseInt: 5,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "ratatoskr_squirrel",
        name: "전령 다람쥐 라타토스크",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Nature", "Wind"],
        baseStr: 5, baseInt: 22,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "nidhogg_spawn",
        name: "니드호그의 자식",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Poison"],
        baseStr: 15, baseInt: 12,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "sleipnir_foal",
        name: "아기 슬레이프니르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Light"],
        baseStr: 35, baseInt: 25,
        image: "images/creature_sleipnir_foal.png",
        lore: "다리가 8개 달린 전설의 명마. 누구보다 빠르게 전장을 누빕니다."
    },
    {
        id: "elk_golden",
        name: "황금 뿔 엘크",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Nature", "Light"],
        baseStr: 15, baseInt: 20,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "yggdrasil_guardian",
        name: "세계수 수호병",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Nature", "Earth"],
        baseStr: 30, baseInt: 20,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "mimir_spirit",
        name: "미미르의 지혜 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Void"],
        baseStr: 5, baseInt: 45,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "frost_giant_warrior",
        name: "서리 거인 전사",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Ice", "Earth"],
        baseStr: 25, baseInt: 5,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "fire_giant_scout",
        name: "화염 거인 정찰병",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Fire"],
        baseStr: 22, baseInt: 8,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "shieldmaiden_iron",
        name: "철벽의 방패처녀",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Metal", "Earth"],
        baseStr: 20, baseInt: 10,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "beserker_bear",
        name: "베어 버서커",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Beast", "Fire"],
        baseStr: 28, baseInt: 2,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "ulfhednar_wolf",
        name: "울프헤드나르 전사",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Beast", "Dark"],
        baseStr: 25, baseInt: 5,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "nordic_cat_freya",
        name: "프레이야의 고양이",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Beast", "Charm"],
        baseStr: 12, baseInt: 22,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "draugr_remnant",
        name: "낡은 드라우그",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice"],
        baseStr: 12, baseInt: 2,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "bifrost_wisp",
        name: "비프뢰스트의 빛무궁",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light", "Magic"],
        baseStr: 1, baseInt: 12,
        image: "images/placeholder_asgard.png"
    },
    {
        id: "heimdall_horn_spirit",
        name: "걀라르호른의 메아리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Light"],
        baseStr: 5, baseInt: 25,
        image: "images/placeholder_asgard.png"
    }
];
