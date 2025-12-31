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
        image: "images/creatures/asgard/creature_wolf_fenrir.png",
        sprites: {
            idle: "images/creatures/asgard/creature_wolf_fenrir.png",
            joy: "images/creatures/asgard/creature_wolf_fenrir_joy.png",
            sad: "images/creatures/asgard/creature_wolf_fenrir_sad.png",
            angry: "images/creatures/asgard/creature_wolf_fenrir_angry.png",
            skill: "images/creatures/asgard/creature_wolf_fenrir_skill.png",
            gallery: "images/creatures/asgard/creature_wolf_fenrir_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Beast, 종말의 늑대 펜리르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 종말의 늑대 펜리르 special illustration, intimate atmosphere"
        },
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            personality: "Unknown"
        },
        relationships: [
            { id: "god_odin", type: "rival", desc: "나를 묶은 장본인. 반드시 삼킨다." }
        ],
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["고맙다."],
            special: ["!!!"]
        },
        lines: {
            normal: "이 사슬... 끊어버리겠어!",
            touch_head: "크르릉... 쓰다듬는 건... 딱 한 번만 허락하지.",
            touch_chest: "심장 소리가 거세지는 건... 굶주림 때문이야!",
            touch_chest_reject: "크르르! 함부로 만지지 마!",
            touch_chest_love: "흥... 너한테만 예외를 두는 거야.",
            touch_legs: "발목 사슬은 이미 끊었어. 다음은 네 마음이야.",
            touch_special: "라그나로크의 시작이다!"
        },
        synergy: { ally: [], rival: ["god_odin"] }
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
        image: "images/creatures/asgard/creature_god_odin.png",
        sprites: {
            idle: "images/creatures/asgard/creature_god_odin.png",
            joy: "images/creatures/asgard/creature_god_odin_joy.png",
            sad: "images/creatures/asgard/creature_god_odin_sad.png",
            angry: "images/creatures/asgard/creature_god_odin_angry.png",
            skill: "images/creatures/asgard/creature_god_odin_skill.png",
            gallery: "images/creatures/asgard/creature_god_odin_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Wind, Magic, 최고신 오딘",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 최고신 오딘 special illustration, intimate atmosphere"
        },
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Unknown"
        },
        relationships: [
            { id: "wolf_fenrir", type: "rival", desc: "운명적 숙적. 라그나로크에서 오딘을 삼킬 자." },
            { id: "valkyrie", type: "ally", desc: "충실한 전사. 함께하면 치명타율 증가." }
        ],
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["..."],
            special: ["!!!"]
        },
        lines: { normal: "..." },
        synergy: { ally: ["valkyrie"], rival: ["wolf_fenrir"] }
    },
    {
        id: "valkyrie",
        name: "전장의 깃발 브륀힐트",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light", "Metal", "Wind"],
        ego: "Soldier",
        baseStr: 40, baseInt: 40,
        skillId: "valkyrie_skill",
        image: "images/creatures/asgard/creature_valkyrie.png",
        sprites: {
            idle: "images/creatures/asgard/creature_valkyrie.png",
            joy: "images/creatures/asgard/creature_valkyrie.png",
            sad: "images/creatures/asgard/creature_valkyrie.png",
            angry: "images/creatures/asgard/creature_valkyrie.png",
            skill: "images/creatures/asgard/creature_valkyrie.png",
            gallery: "images/creatures/asgard/creature_valkyrie.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Metal, Wind, 전장의 깃발 브륀힐트",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 전장의 깃발 브륀힐트 special illustration, intimate atmosphere"
        },
        lore: {
            title: "섬광의 선별자",
            story: "오딘의 명을 받아 전장에서 가장 용맹한 전사를 발할라로 인도하는 전쟁 처녀. 냉철하고 무자비하게 보이지만, 선택받지 못한 자들을 위해 몰래 눈물 흘리는 섬세한 마음의 소유자.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Unknown"
        },
        relationships: [
            { id: "god_odin", type: "master", desc: "주군. 절대적 충성." }
        ],
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["..."],
            special: ["!!!"]
        },
        synergy: { ally: ["god_odin"], rival: [] }
    },
    {
        id: "god_thor",
        name: "천둥의 신 토르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Wind", "Light", "Warrior"],
        ego: "Warlord",
        baseStr: 60, baseInt: 20,
        skillId: "thor_skill",
        image: "images/creatures/asgard/creature_god_thor.png",
        sprites: {
            idle: "images/creatures/asgard/creature_god_thor.png",
            joy: "images/creatures/asgard/creature_god_thor_joy.png",
            sad: "images/creatures/asgard/creature_god_thor_sad.png",
            angry: "images/creatures/asgard/creature_god_thor_angry.png",
            skill: "images/creatures/asgard/creature_god_thor_skill.png",
            gallery: "images/creatures/asgard/creature_god_thor_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Light, Warrior, 천둥의 신 토르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 천둥의 신 토르 special illustration, intimate atmosphere"
        },
        lore: {
            title: "아스가르드의 수호자",
            story: "천둥과 번개를 다루는 오딘의 아들(혹은 딸). 묠니르를 휘두르며 거인들로부터 아스가르드를 지킵니다. 단순하고 호쾌한 성격이며, 술과 전투를 사랑합니다.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Energetic"
        },
        relationships: [
            { id: "god_loki", type: "friend", desc: "골치 아픈 의형제. 배신해도 미워할 수 없다." },
            { id: "wolf_fenrir", type: "rival", desc: "위협적인 존재." }
        ],
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["..."],
            special: ["!!!"]
        },
        lines: { normal: "번개여, 내 부름에 답하라!" },
        synergy: { ally: ["god_loki"], rival: ["wolf_fenrir"] }
    },
    {
        id: "god_loki",
        name: "교활한 신 로키",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Magic", "Trickster"],
        ego: "Nihilist",
        baseStr: 25, baseInt: 65,
        skillId: "loki_skill",
        image: "images/creatures/asgard/creature_god_loki.png",
        sprites: {
            idle: "images/creatures/asgard/creature_god_loki.png",
            joy: "images/creatures/asgard/creature_god_loki_joy.png",
            sad: "images/creatures/asgard/creature_god_loki_sad.png",
            angry: "images/creatures/asgard/creature_god_loki_angry.png",
            skill: "images/creatures/asgard/creature_god_loki_skill.png",
            gallery: "images/creatures/asgard/creature_god_loki_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Magic, Trickster, 교활한 신 로키",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 교활한 신 로키 special illustration, intimate atmosphere"
        },
        lore: {
            title: "변신과 속임수의 달인",
            story: "신들의 말썽꾸러기이자 해결사. 거인의 피를 이어받았으며, 변신술에 능합니다. 오딘과 의형제를 맺었지만, 결국 신들을 배신하고 라그나로크를 일으킵니다.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Mischievous"
        },
        relationships: [
            { id: "god_thor", type: "friend", desc: "힘만 센 멍청이. 놀리는 재미가 있다." },
            { id: "god_odin", type: "rival", desc: "나를 인정하지 않는 늙은이." }
        ],
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["..."],
            special: ["!!!"]
        },
        lines: { normal: "재미있는 장난을 쳐볼까?" },
        synergy: { ally: ["god_thor"], rival: ["god_odin"] }
    },
    {
        id: "god_hel",
        name: "죽음의 여신 헬",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Undead"],
        ego: "Nihilist",
        baseStr: 30, baseInt: 80,
        image: "images/creatures/asgard/creature_god_hel.png",
        sprites: {
            idle: "images/creatures/asgard/creature_god_hel.png",
            joy: "images/creatures/asgard/creature_god_hel.png",
            sad: "images/creatures/asgard/creature_god_hel.png",
            angry: "images/creatures/asgard/creature_god_hel.png",
            skill: "images/creatures/asgard/creature_god_hel.png",
            gallery: "images/creatures/asgard/creature_god_hel.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Undead, 죽음의 여신 헬",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 죽음의 여신 헬 special illustration, intimate atmosphere"
        },
        lore: {
            title: "니플헤임의 지배자",
            story: "오딘에 의해 니플헤임으로 추방당한 로키의 딸. 반은 아름다운 여인, 반은 썩어가는 시체의 모습을 하고 있었으나, 이곳에서는 아름다운 모습으로 현현했습니다. 죽은 자들을 다스리며 라그나로크를 기다립니다.",
            personality: "Cold"
        },
        relationships: [],
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["..."],
            special: ["!!!"]
        }
    }
,
    {
        id: "god_freya",
        name: "여신 프레이야",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_god_freya.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_god_freya.png",
            "joy": "images/creatures/asgard/creature_god_freya.png", // Fallback
            "sad": "images/creatures/asgard/creature_god_freya.png", // Fallback
            "angry": "images/creatures/asgard/creature_god_freya.png", // Fallback
            "skill": "images/creatures/asgard/creature_god_freya.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 여신 프레이야",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "nordic_cat_freya",
        name: "프레이야의 고양이",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_nordic_cat_freya.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_nordic_cat_freya.png",
            "joy": "images/creatures/asgard/creature_nordic_cat_freya.png", // Fallback
            "sad": "images/creatures/asgard/creature_nordic_cat_freya.png", // Fallback
            "angry": "images/creatures/asgard/creature_nordic_cat_freya.png", // Fallback
            "skill": "images/creatures/asgard/creature_nordic_cat_freya.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 프레이야의 고양이",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "heimdall_horn_spirit",
        name: "헤임달의 뿔 정령",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_heimdall_horn_spirit.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_heimdall_horn_spirit.png",
            "joy": "images/creatures/asgard/creature_heimdall_horn_spirit.png", // Fallback
            "sad": "images/creatures/asgard/creature_heimdall_horn_spirit.png", // Fallback
            "angry": "images/creatures/asgard/creature_heimdall_horn_spirit.png", // Fallback
            "skill": "images/creatures/asgard/creature_heimdall_horn_spirit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 헤임달의 뿔 정령",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "mimir_spirit",
        name: "미미르의 지혜 정령",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_mimir_spirit.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_mimir_spirit.png",
            "joy": "images/creatures/asgard/creature_mimir_spirit.png", // Fallback
            "sad": "images/creatures/asgard/creature_mimir_spirit.png", // Fallback
            "angry": "images/creatures/asgard/creature_mimir_spirit.png", // Fallback
            "skill": "images/creatures/asgard/creature_mimir_spirit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 미미르의 지혜 정령",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "muninn_crow",
        name: "까마귀 무닌",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_muninn_crow.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_muninn_crow.png",
            "joy": "images/creatures/asgard/creature_muninn_crow.png", // Fallback
            "sad": "images/creatures/asgard/creature_muninn_crow.png", // Fallback
            "angry": "images/creatures/asgard/creature_muninn_crow.png", // Fallback
            "skill": "images/creatures/asgard/creature_muninn_crow.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 까마귀 무닌",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "ratatoskr_squirrel",
        name: "다람쥐 라타토스크",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ratatoskr_squirrel.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ratatoskr_squirrel.png",
            "joy": "images/creatures/asgard/creature_ratatoskr_squirrel.png", // Fallback
            "sad": "images/creatures/asgard/creature_ratatoskr_squirrel.png", // Fallback
            "angry": "images/creatures/asgard/creature_ratatoskr_squirrel.png", // Fallback
            "skill": "images/creatures/asgard/creature_ratatoskr_squirrel.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 다람쥐 라타토스크",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "shieldmaiden_iron",
        name: "강철의 방패처녀",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_shieldmaiden_iron.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_shieldmaiden_iron.png",
            "joy": "images/creatures/asgard/creature_shieldmaiden_iron.png", // Fallback
            "sad": "images/creatures/asgard/creature_shieldmaiden_iron.png", // Fallback
            "angry": "images/creatures/asgard/creature_shieldmaiden_iron.png", // Fallback
            "skill": "images/creatures/asgard/creature_shieldmaiden_iron.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 강철의 방패처녀",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "sleipnir_foal",
        name: "슬레이프니르 망아지",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_sleipnir_foal.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_sleipnir_foal.png",
            "joy": "images/creatures/asgard/creature_sleipnir_foal.png", // Fallback
            "sad": "images/creatures/asgard/creature_sleipnir_foal.png", // Fallback
            "angry": "images/creatures/asgard/creature_sleipnir_foal.png", // Fallback
            "skill": "images/creatures/asgard/creature_sleipnir_foal.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 슬레이프니르 망아지",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "ulfhednar_wolf",
        name: "울프헤드나르 늑대",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ulfhednar_wolf.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ulfhednar_wolf.png",
            "joy": "images/creatures/asgard/creature_ulfhednar_wolf.png", // Fallback
            "sad": "images/creatures/asgard/creature_ulfhednar_wolf.png", // Fallback
            "angry": "images/creatures/asgard/creature_ulfhednar_wolf.png", // Fallback
            "skill": "images/creatures/asgard/creature_ulfhednar_wolf.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 울프헤드나르 늑대",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "valkyrie_leader_gunnr",
        name: "발키리 대장 군르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_valkyrie_leader_gunnr.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_valkyrie_leader_gunnr.png",
            "joy": "images/creatures/asgard/creature_valkyrie_leader_gunnr.png", // Fallback
            "sad": "images/creatures/asgard/creature_valkyrie_leader_gunnr.png", // Fallback
            "angry": "images/creatures/asgard/creature_valkyrie_leader_gunnr.png", // Fallback
            "skill": "images/creatures/asgard/creature_valkyrie_leader_gunnr.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 발키리 대장 군르",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "valkyrie_recruit",
        name: "발키리 신병",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_valkyrie_recruit.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_valkyrie_recruit.png",
            "joy": "images/creatures/asgard/creature_valkyrie_recruit.png", // Fallback
            "sad": "images/creatures/asgard/creature_valkyrie_recruit.png", // Fallback
            "angry": "images/creatures/asgard/creature_valkyrie_recruit.png", // Fallback
            "skill": "images/creatures/asgard/creature_valkyrie_recruit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 발키리 신병",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "wolf_pup_asgard",
        name: "아스가르드 늑대개",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_wolf_pup_asgard.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_wolf_pup_asgard.png",
            "joy": "images/creatures/asgard/creature_wolf_pup_asgard.png", // Fallback
            "sad": "images/creatures/asgard/creature_wolf_pup_asgard.png", // Fallback
            "angry": "images/creatures/asgard/creature_wolf_pup_asgard.png", // Fallback
            "skill": "images/creatures/asgard/creature_wolf_pup_asgard.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 아스가르드 늑대개",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "yggdrasil_guardian",
        name: "이그드라실 수호자",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_yggdrasil_guardian.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_yggdrasil_guardian.png",
            "joy": "images/creatures/asgard/creature_yggdrasil_guardian.png", // Fallback
            "sad": "images/creatures/asgard/creature_yggdrasil_guardian.png", // Fallback
            "angry": "images/creatures/asgard/creature_yggdrasil_guardian.png", // Fallback
            "skill": "images/creatures/asgard/creature_yggdrasil_guardian.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 이그드라실 수호자",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "bifrost_wisp",
        name: "비프로스트 위습",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_bifrost_wisp.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_bifrost_wisp.png",
            "joy": "images/creatures/asgard/creature_bifrost_wisp.png", // Fallback
            "sad": "images/creatures/asgard/creature_bifrost_wisp.png", // Fallback
            "angry": "images/creatures/asgard/creature_bifrost_wisp.png", // Fallback
            "skill": "images/creatures/asgard/creature_bifrost_wisp.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 비프로스트 위습",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "creature_dwarf",
        name: "드워프 대장장이",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_creature_dwarf.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_creature_dwarf.png",
            "joy": "images/creatures/asgard/creature_creature_dwarf.png", // Fallback
            "sad": "images/creatures/asgard/creature_creature_dwarf.png", // Fallback
            "angry": "images/creatures/asgard/creature_creature_dwarf.png", // Fallback
            "skill": "images/creatures/asgard/creature_creature_dwarf.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 드워프 대장장이",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "creature_eagle_iron",
        name: "강철 독수리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_creature_eagle_iron.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_creature_eagle_iron.png",
            "joy": "images/creatures/asgard/creature_creature_eagle_iron.png", // Fallback
            "sad": "images/creatures/asgard/creature_creature_eagle_iron.png", // Fallback
            "angry": "images/creatures/asgard/creature_creature_eagle_iron.png", // Fallback
            "skill": "images/creatures/asgard/creature_creature_eagle_iron.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 강철 독수리",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "einherjar_ghost",
        name: "에인헤랴르 영혼",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_einherjar_ghost.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_einherjar_ghost.png",
            "joy": "images/creatures/asgard/creature_einherjar_ghost.png", // Fallback
            "sad": "images/creatures/asgard/creature_einherjar_ghost.png", // Fallback
            "angry": "images/creatures/asgard/creature_einherjar_ghost.png", // Fallback
            "skill": "images/creatures/asgard/creature_einherjar_ghost.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 에인헤랴르 영혼",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "elk_golden",
        name: "황금 엘크",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_elk_golden.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_elk_golden.png",
            "joy": "images/creatures/asgard/creature_elk_golden.png", // Fallback
            "sad": "images/creatures/asgard/creature_elk_golden.png", // Fallback
            "angry": "images/creatures/asgard/creature_elk_golden.png", // Fallback
            "skill": "images/creatures/asgard/creature_elk_golden.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 황금 엘크",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "fire_giant_scout",
        name: "불의 거인 정찰병",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_fire_giant_scout.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_fire_giant_scout.png",
            "joy": "images/creatures/asgard/creature_fire_giant_scout.png", // Fallback
            "sad": "images/creatures/asgard/creature_fire_giant_scout.png", // Fallback
            "angry": "images/creatures/asgard/creature_fire_giant_scout.png", // Fallback
            "skill": "images/creatures/asgard/creature_fire_giant_scout.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 불의 거인 정찰병",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "frost_giant_warrior",
        name: "서리 거인 전사",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_frost_giant_warrior.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_frost_giant_warrior.png",
            "joy": "images/creatures/asgard/creature_frost_giant_warrior.png", // Fallback
            "sad": "images/creatures/asgard/creature_frost_giant_warrior.png", // Fallback
            "angry": "images/creatures/asgard/creature_frost_giant_warrior.png", // Fallback
            "skill": "images/creatures/asgard/creature_frost_giant_warrior.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 서리 거인 전사",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "snake_world_jormungandr",
        name: "요르문간드",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_snake_world_jormungandr.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_snake_world_jormungandr.png",
            "joy": "images/creatures/asgard/creature_snake_world_jormungandr.png", // Fallback
            "sad": "images/creatures/asgard/creature_snake_world_jormungandr.png", // Fallback
            "angry": "images/creatures/asgard/creature_snake_world_jormungandr.png", // Fallback
            "skill": "images/creatures/asgard/creature_snake_world_jormungandr.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 요르문간드",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in asgard.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "goat_lightning",
        name: "천둥 염소",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_goat_lightning.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_goat_lightning.png",
            "joy": "images/creatures/asgard/creature_goat_lightning.png",
            "sad": "images/creatures/asgard/creature_goat_lightning.png",
            "angry": "images/creatures/asgard/creature_goat_lightning.png",
            "skill": "images/creatures/asgard/creature_goat_lightning.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 천둥 염소",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"], gift: ["Thanks"], special: ["?!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "ice_spirit_small",
        name: "작은 얼음 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/asgard/creature_ice_spirit_small.png",
        sprites: {
            "idle": "images/creatures/asgard/creature_ice_spirit_small.png",
            "joy": "images/creatures/asgard/creature_ice_spirit_small.png",
            "sad": "images/creatures/asgard/creature_ice_spirit_small.png",
            "angry": "images/creatures/asgard/creature_ice_spirit_small.png",
            "skill": "images/creatures/asgard/creature_ice_spirit_small.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 작은 얼음 정령",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"], gift: ["Thanks"], special: ["?!"] },
        lines: { normal: "..." }
    }
];
