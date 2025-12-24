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
    }
];
