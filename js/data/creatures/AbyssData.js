import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ABYSS_CREATURES = [
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
    {
        id: "vampire_lord",
        name: "진홍의 여왕 카밀라",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Wind"],
        ego: "Devotion",
        baseStr: 35, baseInt: 40,
        image: "images/creature_vampire_lord.png?v=3",
        lore: {
            title: "월야의 군주",
            story: "천년을 산 고대 뱀파이어. 우아하고 고결하지만 피를 볼 때만은 광기어린 미소를 짓는다. 와인처럼 숙성된 피를 선호하며, 미남 미녀를 수집하는 취미가 있다. 햇볕만 없다면 의외로 상냥.",
            origin: "심연 발라키아 성",
            relationships: [
                { id: "ninja_shadow", type: "ally", desc: "어둠 속의 사냥 파트너" },
                { id: "angel_arch", type: "rival", desc: "성스러운 빛은 천적" }
            ],
            synergy: { ally: ["ninja_shadow", "demon_king"], rival: ["angel_arch", "phoenix_eternal"] }
        },
        lines: { normal: "맛있어 보이는... 멋진 분이시네요. 저녁 식사에 초대해도 될까요?" }
    },
    {
        id: "kraken_worldstar",
        name: "월드스타 루루",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Water", "Light", "Charm", "Voice"],
        ego: "Star",
        baseStr: 45, baseInt: 85,
        isHidden: true,
        image: "images/creature_kraken_worldstar.png",
        lore: {
            title: "심해의 디바",
            story: "심연에서 올라온 전설의 아이돌. 그녀의 노래는 파도를 일으키고, 춤은 해류를 바꾼다. 세계 투어로 모든 대륙을 매료시켰으며, 팬클럽 '촉촉이'의 회원은 수백만 명. 연습생 시절부터 꿈꿔온 무대의 정점에 서 있다.",
            origin: "심연 → 전세계 투어",
            relationships: [
                { id: "kraken_idol", type: "family", desc: "과거의 자신. 성장한 모습" }
            ],
            synergy: { ally: [], rival: [] }
        },
        lines: {
            normal: "제 노래가... 전 우주에 닿기를!",
            touch_head: "머리 스타일 망가져요~ 헤헷, 농담이에요.",
            touch_chest: "두근거리는 게 느껴지시나요? 이게 바로 사랑이에요!",
            touch_legs: "제 다리... 아니 꼬리, 매력적이죠?",
            touch_special: "앵콜? 좋아요! 마지막까지 소리 질러!!"
        }
    },
    {
        id: "kraken_idol",
        name: "아이돌 루루",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Water", "Light", "Charm"],
        ego: "Star",
        baseStr: 30, baseInt: 60,
        image: "images/creature_kraken_idol.png",
        lore: {
            title: "떠오르는 별",
            story: "데뷔 1년 만에 차트 1위를 찍은 신예 아이돌. 촉수로 동시에 여러 악기를 연주할 수 있다는 특기로 유명. 팬 서비스가 좋아서 악수회에선 모든 팬과 동시에 악수한다. 월드스타를 향해 쉬지 않고 달려간다.",
            origin: "심연 해저 연예기획사",
            relationships: [
                { id: "kraken_baby", type: "family", desc: "연습생 시절의 자신" },
                { id: "kraken_worldstar", type: "family", desc: "미래의 모습. 진화하면 월드스타" }
            ],
            synergy: { ally: [], rival: [] }
        },
        evolvesTo: "kraken_worldstar",
        evolveConditions: { star: 5, level: 50, affectionLevel: 3 },
        lines: { normal: "안녕하세요! 신인 아이돌 루루입니다! 잘 부탁드려요!" }
    },
    {
        id: "kraken_baby",
        name: "연습생 루루",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Dark"],
        ego: "Star",
        baseStr: 5, baseInt: 15,
        image: "images/creature_kraken_trainee.png",
        lore: {
            title: "꿈을 꾸는 문어",
            story: "심해에서 올라온 소녀 크라켄. 무대에 서는 것이 꿈이지만 아직 노래도 춤도 서투르다. 하지만 열정만큼은 누구에게도 지지 않는다! 촉수가 자꾸 엉켜서 안무 연습이 어렵다.",
            origin: "심연 해저",
            relationships: [
                { id: "kraken_idol", type: "family", desc: "미래의 자신. 진화하면 아이돌로" }
            ],
            synergy: { ally: [], rival: [] }
        },
        evolvesTo: "kraken_idol",
        evolveConditions: { star: 5 },
        lines: { normal: "언젠간 꼭... 무대에 설 거야! 기다려!" }
    },
    {
        id: "knight_skeleton",
        name: "스켈레톤 나이트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Dark", "Metal"],
        baseStr: 20, baseInt: 10,
        image: "images/creature_knight_skeleton.png?v=3",
        lore: {
            title: "잊혀진 맹세",
            story: "죽어서도 맹세를 지키는 불멸의 기사. 생전에 섬기던 왕국은 멸망했지만, 여전히 의무를 다하고 있다. 말수가 적고 표정이 없지만(뼈니까), 가끔 해골 유머를 던진다. 뼈가 삐걱거려서 은밀 작전은 불가.",
            origin: "심연 망각의 묘지",
            relationships: [
                { id: "vampire_lord", type: "ally", desc: "언데드 동맹. 함께하면 어둠 버프" }
            ],
            synergy: { ally: ["vampire_lord", "demon_king"], rival: ["angel_arch"] }
        },
        lines: { normal: "명령을... 기다린다. (삐걱)" }
    },
    {
        id: "gargoyle_stone",
        name: "석상 가고일",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Earth", "Dark"],
        baseStr: 15, baseInt: 5,
        image: "images/creature_gargoyle.png?v=2",
        lore: {
            title: "성벽의 수호자",
            story: "낮에는 돌, 밤에는 악마. 고대 성당의 수호자로 만들어졌지만, 주인이 모두 죽고 혼자 남았다. 무뚝뚝해 보이지만 내심 외롭다. 비둘기가 자꾸 위에 앉아서 짜증나지만, 참는다.",
            origin: "심연 잊혀진 성당",
            relationships: [
                { id: "golem_mud", type: "ally", desc: "같은 석상 계열. 둘이 있으면 방어력 버프" }
            ],
            synergy: { ally: ["golem_mud", "knight_skeleton"], rival: [] }
        },
        lines: { normal: "침입자 발견. 굳어버려라." }
    },
    {
        id: "goblin_scout",
        name: "고블린 정찰병",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Earth"],
        baseStr: 7, baseInt: 3,
        image: "images/creature_goblin_scout_new.png",
        lore: {
            title: "그림자 속의 눈",
            story: "빈틈을 찾아내는 것이 특기인 고블린. 교활하고 약삭빠르지만, 의외로 정이 많다. 보물을 모으는 게 취미이고, 반짝이는 것이면 뭐든 좋아한다. '이거 내꺼!'가 입버릇.",
            origin: "심연 어둠의 동굴",
            relationships: [
                { id: "rat_brown", type: "ally", desc: "같이 다니는 정찰 콤비" }
            ],
            synergy: { ally: ["rat_brown", "bat_small"], rival: [] }
        },
        lines: { normal: "빈틈 발견! 이건 내꺼다!" }
    },
    {
        id: "rat_brown",
        name: "시궁쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Earth"],
        baseStr: 4, baseInt: 1,
        image: "images/creature_rat_brown_new.png",
        lore: {
            title: "어둠의 방랑자",
            story: "어디에나 있고, 무엇이든 먹는다. 생존력 하나는 최강. 치즈보다 땅콩버터를 더 좋아하는 의외의 취향. 작지만 무리지으면 무섭다.",
            origin: "심연 하수도",
            relationships: [
                { id: "goblin_scout", type: "ally", desc: "고블린과 정찰 콤비" }
            ],
            synergy: { ally: ["goblin_scout", "bat_small"], rival: [] }
        },
        lines: { normal: "찍! 치즈 아니면 땅콩버터!" }
    },
    {
        id: "bat_small",
        name: "작은 박쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Wind"],
        baseStr: 3, baseInt: 2,
        image: "images/creature_bat_small_new.png",
        lore: {
            title: "밤하늘의 나그네",
            story: "어둠 속을 자유롭게 날아다니는 작은 박쥐. 초음파로 대화하고, 거꾸로 매달려 자는 게 편하다. 뱀파이어에게 동경심을 품고 있지만, 피는 무서워서 과일만 먹는다.",
            origin: "심연 동굴 천장",
            relationships: [
                { id: "vampire_lord", type: "ally", desc: "뱀파이어를 동경함" }
            ],
            synergy: { ally: ["vampire_lord", "goblin_scout"], rival: [] }
        },
        lines: { normal: "키이익... 피는 무서워..." }
    }
];
