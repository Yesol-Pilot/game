import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const OLYMPUS_CREATURES = [
    {
        id: "god_zeus",
        name: "천둥의 신 제우스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Lightning", "Wind", "Light"],
        ego: "Warlord",
        baseStr: 55, baseInt: 65,
        skillId: "zeus_skill",
        image: "images/creature_god_zeus.jpg",
        lore: {
            title: "올림포스의 지배자",
            story: "하늘과 번개를 다스리는 그리스 최고신. 티탄족과의 전쟁에서 승리한 후 신들의 왕좌에 올랐다. 인간 세계에 내려와 새로운 주인을 찾고 있으며, 강력한 번개의 힘으로 모든 적을 압도한다. 오만하지만 인정받은 자에게는 한없이 관대한 존재.",
            origin: "그리스 신화 / 올림포스",
            relationships: [
                { id: "time_lord_chronos", type: "family", desc: "아버지를 쓰러뜨리고 왕좌에 오른 부자 관계" },
                { id: "angel_arch", type: "ally", desc: "신성한 빛의 동맹. 함께하면 신성 공격력 증가" },
                { id: "demon_king", type: "rival", desc: "천상과 지옥의 영원한 숙적" }
            ],
            synergy: { ally: ["angel_arch", "valkyrie"], rival: ["demon_king", "void_emperor"] }
        },
        lines: {
            normal: "내 번개를 감당할 수 있겠느냐, 작은 인간아.",
            touch_head: "호오? 감히 신의 머리를... 배짱이 좋구나?",
            touch_chest: "무례하구나! ...하지만 싫지 않으니 허락하마.",
            touch_chest_reject: "무례하구나! 감히 신의 옥체에 손을 대다니!",
            touch_chest_love: "후후... 네 손길, 나쁘지 않구나. 계속해 보거라.",
            touch_legs: "내 발밑에 엎드려라. 그게 너에게 어울리는 위치다.",
            touch_special: "무릎 꿇어라! 이것이 신의 분노다!"
        },
        sprites: {
            idle: "images/creature_god_zeus.jpg",
            attack: "images/creature_god_zeus_attack.jpg",
            skill: "images/creature_god_zeus_skill.jpg",
            damage: "images/creature_god_zeus_damage.jpg",
            win: "images/creature_god_zeus_win.jpg"
        },
        gallery: [
            { id: "zeus_basic", level: 1, image: "images/creature_god_zeus.jpg", title: "기본 일러스트", desc: "제우스의 기본 모습입니다." },
            { id: "zeus_shy", level: 3, image: "images/creature_god_zeus_shy.jpg", title: "수줍은 제우스", desc: "이런 표정은 처음 보시나요?" },
            { id: "zeus_angry", level: 5, image: "images/creature_god_zeus_angry.jpg", title: "분노한 제우스", desc: "진심으로 화가 난 모습입니다." },
            { id: "zeus_love", level: 10, image: "images/creature_god_zeus_love.jpg", title: "사랑에 빠진 제우스", desc: "당신만을 바라보는 눈빛입니다." }
        ]
    },
    {
        id: "time_lord_chronos",
        name: "시간의 지배자 크로노스",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Time", "Void", "Ice"],
        ego: "Seeker",
        baseStr: 40, baseInt: 80,
        skillId: "chronos_skill",
        image: "images/creature_time_lord_chronos.png?v=5",
        lore: {
            title: "시간을 삼키는 자",
            story: "태초의 티탄족 왕. 자신의 자식들에게 왕좌를 빼앗길 것을 두려워해 그들을 삼켰으나, 제우스에게 패배하고 타르타로스에 갇혔다. 시간의 흐름을 자유자재로 조종하며, 그녀의 눈동자를 바라보는 자는 자신의 과거와 미래를 모두 보게 된다.",
            origin: "그리스 신화 / 타르타로스",
            relationships: [
                { id: "god_zeus", type: "family", desc: "반역한 아들. 왕좌를 빼앗긴 원한의 관계" },
                { id: "creator_gaia", type: "family", desc: "대지의 어머니. 복잡한 모자 관계" },
                { id: "void_emperor", type: "ally", desc: "심연의 동맹. 함께하면 시공간 왜곡 발동" }
            ],
            synergy: { ally: ["void_emperor", "creator_gaia"], rival: ["god_zeus", "angel_arch"] }
        },
        lines: {
            normal: "너의 시간은 이제 내 것이야. 1초도 다른 곳을 보지 마.",
            touch_head: "움직이지 마... 지금 이 순간을 멈출 테니까.",
            touch_chest: "내 가슴의 시계소리가 들려? 영원히 너를 위해 뛸 거야.",
            touch_legs: "시간을 거스르는 각선미... 라고 해줄래?",
            touch_special: "시간의 끝을 보여주지. 종말이다."
        }
    },
    {
        id: "angel_arch",
        name: "대천사 미카엘",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Light", "Fire", "Wind"],
        ego: "Star",
        baseStr: 45, baseInt: 55,
        skillId: "angel_skill",
        image: "images/creature_angel_arch.png?v=5",
        lore: {
            title: "천상의 검",
            story: "천계군의 최고 사령관이자 신의 칼날. 루시퍼의 반란을 진압한 전설의 전사. 순수하고 정의로운 마음을 가졌으나, 인간 세계에 내려와 다양한 감정을 경험하며 혼란스러워하고 있다. 신성한 불꽃으로 사악함을 정화한다.",
            origin: "천상계 / 신의 군대",
            relationships: [
                { id: "god_zeus", type: "ally", desc: "신들의 동맹. 빛과 번개의 합공" },
                { id: "demon_king", type: "rival", desc: "영원한 숙적. 천사와 악마의 전쟁" },
                { id: "valkyrie", type: "ally", desc: "전장의 동료. 함께하면 광역 버프" }
            ],
            synergy: { ally: ["god_zeus", "valkyrie", "unicorn_young"], rival: ["demon_king", "vampire_lord"] }
        },
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
    {
        id: "titan_atlas",
        name: "거신 아틀라스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Metal", "Nature"],
        ego: "Warlord",
        baseStr: 50, baseInt: 20,
        image: "images/creature_titan_atlas.png?v=5",
        lore: {
            title: "하늘을 떠받치는 자",
            story: "티탄족의 전사. 제우스와의 전쟁에서 패하여 영원히 하늘을 떠받치는 형벌을 받았다. 믿을 수 없는 괴력을 자랑하며, 그녀의 근육은 어떤 무게도 버텨낼 수 있다. 운동광이자 무뚝뚝하지만 정이 많다.",
            origin: "그리스 신화 / 세계의 끝",
            relationships: [
                { id: "time_lord_chronos", type: "ally", desc: "티탄족 동료. 함께하면 방어력 증가" },
                { id: "giant_hill", type: "ally", desc: "거인족 후배. 운동 메이트" }
            ],
            synergy: { ally: ["time_lord_chronos", "giant_hill", "golem_mud"], rival: ["god_zeus"] }
        },
        lines: { normal: "이 정도 바위는 깃털처럼 가볍지! 운동 좀 할래?" }
    },
    {
        id: "mage_flame",
        name: "화염 마법사",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Fire", "Wind"],
        baseStr: 8, baseInt: 22,
        image: "images/creature_mage_flame.png?v=3",
        lore: {
            title: "불꽃의 현자",
            story: "마법 아카데미 최연소 졸업생. 천재라 불리지만 본인은 '그냥 불이 좋을 뿐'이라고 말한다. 언제나 새로운 화염 마법을 연구하며, 가끔 실험이 폭발해서 연구실을 날려먹는다. 털털한 성격에 의외로 요리를 잘 한다(불 조절이 완벽하니까).",
            origin: "올림푸스 마법 아카데미",
            relationships: [
                { id: "phoenix_eternal", type: "ally", desc: "불사조의 깃털로 만든 지팡이를 사용. 불꽃 시너지" },
                { id: "elemental_water", type: "rival", desc: "물의 정령과는 견원지간. 만나면 증기 폭발" }
            ],
            synergy: { ally: ["phoenix_eternal", "demon_king"], rival: ["elemental_water", "bear_ice"] }
        },
        lines: { normal: "타오르는 지식이여! 오늘도 뭔가 태워볼까?" }
    },
    {
        id: "unicorn_young",
        name: "어린 유니콘",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Light", "Nature"],
        baseStr: 15, baseInt: 15,
        image: "images/creature_unicorn.png?v=2",
        lore: {
            title: "순백의 희망",
            story: "순수한 마음을 가진 자에게만 모습을 드러내는 신성한 존재. 아직 어리지만 치유의 힘이 강력하다. 딸기 맛 사탕을 좋아하고, 무지개를 보면 신나서 뛰어다닌다. 뿔에서 나오는 빛은 어둠의 저주를 정화한다.",
            origin: "올림푸스 성스러운 숲",
            relationships: [
                { id: "flower_fairy", type: "ally", desc: "꽃의 요정과 단짝친구. 함께하면 힐량 증가" },
                { id: "demon_king", type: "rival", desc: "어둠의 마왕을 두려워하지만 맞서려 노력" }
            ],
            synergy: { ally: ["flower_fairy", "angel_arch"], rival: ["demon_king", "vampire_lord"] }
        },
        lines: { normal: "순수한 자만이 내 빛을 볼 수 있어! 히힝~" }
    },
    {
        id: "centaur_scout",
        name: "켄타우로스 정찰병",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Nature", "Wind"],
        baseStr: 12, baseInt: 5,
        image: "images/creature_centaur.png?v=2",
        lore: {
            title: "초원의 질주자",
            story: "올림푸스 평원을 누비는 반인반마. 활 솜씨가 뛰어나고 지형을 읽는 눈이 탁월하다. 동료들을 지키기 위해 항상 선두에서 정찰한다. 당근을 좋아하지만 '말이라서 좋아하는 게 아니야!'라고 부정한다.",
            origin: "올림푸스 대초원",
            relationships: [
                { id: "unicorn_young", type: "ally", desc: "같은 마족(馬族). 어린 유니콘을 보호" },
                { id: "wolf_dire", type: "rival", desc: "초원의 포식자 다이어울프와 영역 다툼" }
            ],
            synergy: { ally: ["unicorn_young", "eagle_iron"], rival: ["wolf_dire"] }
        },
        lines: { normal: "다그닥! 바람보다 빠르게! ...당근 있어?" }
    },
    {
        id: "cloud_puff",
        name: "구름 솜사탕",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Wind", "Water"],
        baseStr: 2, baseInt: 4,
        image: "images/creature_cloud_puff.png",
        lore: {
            title: "하늘의 조각",
            story: "올림푸스 산 정상에서 태어난 구름 정령. 푹신푹신하고 포근해서 베개로 쓰면 꿀잠. 비가 오면 몸이 커지고, 햇볕을 받으면 몽글몽글해진다. 새들의 쉼터가 되어주는 게 보람.",
            origin: "올림푸스 산 정상",
            relationships: [
                { id: "eagle_iron", type: "ally", desc: "강철 독수리의 휴식처. 함께하면 회피율 증가" }
            ],
            synergy: { ally: ["eagle_iron", "wisp_faint"], rival: [] }
        },
        lines: { normal: "둥실둥실... 오늘도 평화로워~" }
    },
    {
        id: "titan_kronos_shade",
        name: "크로노스의 그림자",
        rarity: RANKS.UR,
        world: WORLDS.OLYMPUS,
        elements: ["Time", "Void"],
        baseStr: 60, baseInt: 60,
        image: "images/boss_kronos.png",
        lore: { title: "심연의 시간", story: "타르타로스 깊은 곳에 갇힌 크로노스의 집념이 형상화된 존재." }
    },
    {
        id: "minotaur_king",
        name: "미노타우로스 왕",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth"],
        baseStr: 45, baseInt: 10,
        image: "images/boss_minotaur.png",
        lore: { title: "미로의 지배자", story: "크레타 미궁의 끝에서 침입자를 기다리는 거대한 황소 성인." }
    },
    {
        id: "cerberus_guardian",
        name: "지옥파수꾼 케르베로스",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Dark", "Fire"],
        baseStr: 40, baseInt: 20,
        image: "images/boss_cerberus.png",
        lore: { title: "저승의 문지기", story: "하데스의 충견. 세 개의 머리로 침입자를 감시한다." }
    },
    {
        id: "hydra_lernaean",
        name: "레르나의 히드라",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Poison", "Water"],
        baseStr: 35, baseInt: 30,
        image: "images/boss_hydra.png",
        lore: { title: "독니의 괴수", story: "죽지 않는 머리들을 가진 늪지대의 지배자." }
    },
    {
        id: "lion_nemean",
        name: "네메아의 사자",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Metal"],
        baseStr: 50, baseInt: 5,
        image: "images/boss_lion.png",
        lore: { title: "불사신의 가죽", story: "어떤 칼날도 뚫을 수 없는 가죽을 가진 맹수." }
    },
    {
        id: "god_poseidon",
        name: "심해의 군주 포세이돈",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Water", "Ice", "Earth"],
        ego: "Warlord",
        baseStr: 55, baseInt: 45,
        image: "images/creature_god_poseidon.png",
        lore: {
            title: "바다의 지배자",
            story: "제우스의 형제이자 바다를 다스리는 신. 삼지창 트라이던트로 파도를 일으키고 대지를 뒤흔든다.",
            origin: "그리스 신화 / 심해 궁전"
        }
    },
    {
        id: "god_hades",
        name: "지옥의 지배자 하데스",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Dark", "Earth", "Void"],
        ego: "Seeker",
        baseStr: 40, baseInt: 60,
        image: "images/placeholder_olympus.png",
        lore: {
            title: "저승의 왕",
            story: "죽은 자들의 땅 타르타로스를 다스리는 신. 냉철하고 엄격하지만 공정하게 영혼들을 심판한다."
        }
    },
    {
        id: "god_dionysus",
        name: "축제의 신 디오니소스",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Nature", "Charm", "Voice"],
        baseStr: 20, baseInt: 40,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "hero_hercules",
        name: "불멸의 영웅 헤라클레스",
        rarity: RANKS.SSR,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Metal", "Fire"],
        baseStr: 65, baseInt: 15,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "medusa_cursed",
        name: "저주받은 미모 메두사",
        rarity: RANKS.SR,
        world: WORLDS.OLYMPUS,
        elements: ["Dark", "Poison", "Earth"],
        baseStr: 30, baseInt: 50,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "harpy_queen",
        name: "폭풍우의 하피 퀸",
        rarity: RANKS.SPECIAL,
        world: WORLDS.OLYMPUS,
        elements: ["Wind", "Dark"],
        baseStr: 25, baseInt: 15,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "siren_singer",
        name: "유혹의 사이렌",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Water", "Charm", "Voice"],
        baseStr: 10, baseInt: 20,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "pegasus_colt",
        name: "아기 페가수스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Wind", "Light"],
        baseStr: 8, baseInt: 6,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "satyr_young",
        name: "사티로스 견습생",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Nature", "Earth"],
        baseStr: 12, baseInt: 8,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "dryad_seed",
        name: "드라이어드 씨앗",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Nature"],
        baseStr: 2, baseInt: 10,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "cyclops_worker",
        name: "키클롭스 견습공",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Fire"],
        baseStr: 20, baseInt: 5,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "nymph_water",
        name: "샘의 님프",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Water"],
        baseStr: 3, baseInt: 12,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "griffin_chick",
        name: "아기 그리폰",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Wind", "Beast"],
        baseStr: 15, baseInt: 5,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "cerberus_pup",
        name: "아기 케르베로스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Dark", "Fire"],
        baseStr: 10, baseInt: 5,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "hellhound_scout",
        name: "헬하운드 정찰개",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Fire", "Dark"],
        baseStr: 18, baseInt: 10,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "automaton_mini",
        name: "미니 오토마톤",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Metal", "Lightning"],
        baseStr: 15, baseInt: 15,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "minotaur_calf",
        name: "아기 미노타우로스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Earth"],
        baseStr: 15, baseInt: 2,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "gorgon_sister_e",
        name: "고르곤 자매 에우리알레",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Dark", "Poison"],
        baseStr: 12, baseInt: 25,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "gorgon_sister_s",
        name: "고르곤 자매 스테노",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Dark", "Poison"],
        baseStr: 25, baseInt: 12,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "charybdis_baby",
        name: "소형 카리브디스",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Water", "Void"],
        baseStr: 5, baseInt: 20,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "scylla_pup",
        name: "새끼 스킬라",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Water", "Dark"],
        baseStr: 18, baseInt: 8,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "talos_fragment",
        name: "탈로스의 파편",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Metal", "Earth"],
        baseStr: 25, baseInt: 0,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "fury_hiss",
        name: "분노의 정령 퓨리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Dark", "Fire"],
        baseStr: 10, baseInt: 20,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "muse_lyra",
        name: "악보의 뮤즈",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Light", "Voice"],
        baseStr: 2, baseInt: 25,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "chimera_cub",
        name: "아기 키메라",
        rarity: RANKS.NORMAL,
        world: WORLDS.OLYMPUS,
        elements: ["Fire", "Nature"],
        baseStr: 12, baseInt: 8,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "sphinx_kitten",
        name: "아기 스핑크스",
        rarity: RANKS.UNIQUE,
        world: WORLDS.OLYMPUS,
        elements: ["Earth", "Void"],
        baseStr: 10, baseInt: 25,
        image: "images/placeholder_olympus.png"
    },
    {
        id: "phoenix_chick_o",
        name: "베이비 피닉스",
        rarity: RANKS.RARE,
        world: WORLDS.OLYMPUS,
        elements: ["Fire", "Light"],
        baseStr: 8, baseInt: 18,
        image: "images/placeholder_olympus.png"
    }
];
