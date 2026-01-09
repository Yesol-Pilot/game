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
            gallery: {
                "lv1": "images/creatures/asgard/creature_wolf_fenrir_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_wolf_fenrir_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_wolf_fenrir_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Beast, 종말의 늑대 펜리르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, wolf_fenrir, wolf girl, wild grey hair, sharp teeth, wearing torn gothic punk outfit, shackles on wrists and neck, glamorous body, huge breasts, athletic thighs, crouching pose, dark dungeon background",
            gallery_lv2: "anime, blue archive style, nikke style, full body, wolf_fenrir, wolf girl, wild bushy grey hair, glowing yellow eyes, sharp teeth, wearing torn black leather bikini top, micro shorts, broken chains hanging from cuffs, glamorous body, huge breasts, sweaty skin, thick thighs, crouching wild pose, licking lips, looking at viewer like prey",
            gallery_lv3: "anime, blue archive style, nikke style, full body, wolf_fenrir, wolf girl, wolf ears, waging tail, wearing black leather collar, torn clothes, lying on bed, happy expression, heart shaped pupils, blushing, sweat, intimate atmosphere"
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
            victory: "images/creatures/asgard/creature_god_odin_victory.png",
            defeat: "images/creatures/asgard/creature_god_odin_defeat.png",
            gallery: {
                "lv1": "images/creatures/asgard/creature_god_odin_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_god_odin_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_god_odin_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Wind, Magic, 최고신 오딘",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, god_odin, goddess, long silver hair, eyepatch, golden eye, wearing revealing golden valkyrie armor, white fur cape, thigh highs, glamorous body, huge breasts, wide hips, thick thighs, sitting on golden throne, legs crossed, arrogant expression, looking down at viewer",
            gallery_lv2: "anime, blue archive style, nikke style, full body, god_odin, goddess, long silver hair, single golden eye, eyepatch, wearing loose golden armor, exposed cleavage, exposed midriff, glamorous body, huge breasts, extremely thick thighs, wide hips, leaning forward, holding gungnir spear, smirking, seductive domineering gaze, throne room background, dynamic angle, dramatic lighting",
            gallery_lv3: "anime, blue archive style, nikke style, full body, solo, god_odin, goddess, long silver hair, eyepatch, lying on bed, white silk slip, strap slipping off, heart shaped pupils, heavy blush, sweat, mouth open, panting, overwhelmed expression, messy hair, intimate, soft lighting"
        },
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            origin: "북유럽 신화 / 아스가르드",
            personality: "Wise & Domineering"
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
        lines: {
            normal: "지혜를 탐구하는 자만이 진실에 도달할 수 있다.",
            touch_head: "신들의 왕에게 손을 대는가? 무례하군.",
            touch_head_reject: "물러거라. 지금은 사색 중이다.",
            touch_head_love: "후훗, 나의 머리를 쓰다듬을 수 있는 건 그대뿐이군.",
            touch_chest: "궁니르의 창끝은 언제나 적을 향해 있다.",
            touch_chest_reject: "갑옷에 손대지 마라. 전쟁의 흔적이다.",
            touch_chest_love: "나의 심장, 그리고 아홉 세계는 그대의 것이다.",
            touch_legs: "이 발걸음은 라그나로크를 향한 것이다.",
            touch_legs_love: "그대와 함께라면, 종말의 날도 두렵지 않구나."
        },
        synergy: { ally: ["valkyrie"], rival: ["wolf_fenrir"] }
    },
    {
        id: "valkyrie",
        name: "전장의 깃발 브륀힐트",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
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
            gallery: {
                "lv1": "images/creatures/asgard/creature_god_thor_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_god_thor_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_god_thor_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Light, Warrior, 천둥의 신 토르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, god_thor, thunder goddess, fit muscular body, blonde hair in ponytail, blue eyes, wearing sports bra and gym shorts, sweating, holding mjolnir hammer, gym background, stretching pose",
            gallery_lv2: "anime, blue archive style, nikke style, full body, god_thor, thunder goddess, blonde hair, messy, wearing damaged battle armor, exposed skin, cleavage, drinking beer from large mug, flushed face, drunk, happy, tavern background",
            gallery_lv3: "anime, blue archive style, nikke style, full body, solo, god_thor, thunder goddess, blonde hair, lying on bed, wearing only white shirt, wet skin, sparks of lightning, heavy blush, heart shaped pupils, panting, legs spread, overwhelming pleasure, electric aura"
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
            gallery: {
                "lv1": "images/creatures/asgard/creature_god_loki_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_god_loki_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_god_loki_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Magic, Trickster, 교활한 신 로키",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "anime, blue archive style, nikke style, full body, god_loki, trickster goddess, green hair, mischievous smile, sitting on floating magic staff, wearing jester-inspired mini dress, thigh highs, magical particles, playful pose",
            gallery_lv2: "anime, blue archive style, nikke style, full body, god_loki, trickster goddess, green hair, tangled in magical ropes, self-inflicted bondange, winking, tongue out, teasing expression, wearing sheer bodysuit, exposed skin, funny but sexy situation",
            gallery_lv3: "anime, blue archive style, nikke style, full body, solo, god_loki, trickster goddess, green hair, lying down, defeated, heart shaped pupils, heavy blush, drooling, submission, wearing torn clothes, messy, overwhelmed with pleasure"
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
            joy: "images/creatures/asgard/creature_god_hel_joy.png",
            sad: "images/creatures/asgard/creature_god_hel_sad.png",
            angry: "images/creatures/asgard/creature_god_hel_angry.png",
            skill: "images/creatures/asgard/creature_god_hel_skill.png",
            victory: "images/creatures/asgard/creature_god_hel_victory.png",
            defeat: "images/creatures/asgard/creature_god_hel_defeat.png",
            gallery: {
                "lv1": "images/creatures/asgard/creature_god_hel_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_god_hel_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_god_hel_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Undead, 죽음의 여신 헬",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery_lv1: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 죽음의 여신 헬 special illustration, intimate atmosphere",
            gallery_lv2: "anime, blue archive style, nikke style, full body, god_hel, split two-tone black and white hair, heterochromia blue and red eyes, pale skin, pointy ears, wearing open black leather jacket, black lace bra, torn fishnet stockings, skull choker, glamorous body, huge breasts, extremely thick thighs, wide hips, lying on antique gothic sofa, teasing pose, holding wine glass, dark luxury room background, seductive smile, cinematic lighting, (masterpiece:1.5), (best quality:1.4)",
            gallery_lv3: "anime, blue archive style, nikke style, full body, god_hel, split two-tone black and white hair, heterochromia blue and red eyes, pale skin, pointy ears, wearing black silk slip dress, glamorous body, huge breasts, extremely thick thighs, wide hips, lying on royal bed, black silk sheets, romantic face, blushing, sweat, heart eyes, extreme angle, masterpiece, intimate atmosphere, (masterpiece:1.5), (best quality:1.4)"
        },
        lore: {
            title: "니플헤임의 지배자",
            story: "오딘에 의해 니플헤임으로 추방당한 로키의 딸. 반은 아름다운 여인, 반은 썩어가는 시체의 모습을 하고 있었으나, 이곳에서는 아름다운 모습으로 현현했습니다. 죽은 자들을 다스리며 라그나로크를 기다립니다.",
            personality: "Cold"
        },
        relationships: [],
        touchLines: {
            idle: [
                "죽음은 끝이 아니야. 시작일 뿐...",
                "니플헤임은 고요하고 평온해.",
                "살아있는 자들은 시끄러워."
            ],
            interaction: [
                "흥... 감히 나를 만지다니. 용기는 인정하지.",
                "이 차가운 손길이 두렵지 않아?",
                "생명의 온기... 얼마만인지 기억도 안 나."
            ],
            gift: [
                "선물? ...고맙다. 오래간만에 받아보네.",
                "이런 걸 나한테 줘도 돼? 아무도 안 주던데.",
                "...따뜻하군. 네 마음이."
            ],
            special: [
                "라그나로크가 다가온다!",
                "죽음의 여신이 너를 부른다.",
                "니플헤임이 너를 환영한다..."
            ]
        },
        lines: {
            normal: "죽음은 끝이 아니야. 새로운 시작일 뿐.",
            touch_head: "머리를... 쓰다듬는 건가? ...싫지 않아.",
            touch_chest: "이 차가운 심장도 네게는 뛰는 것 같아.",
            touch_legs: "발까지 만지다니... 대담하군.",
            touch_special: "너와 함께라면, 니플헤임도 따뜻해질 수 있을까..."
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
            "joy": "images/creatures/asgard/creature_snake_world_jormungandr_joy.png",
            "sad": "images/creatures/asgard/creature_snake_world_jormungandr_sad.png",
            "angry": "images/creatures/asgard/creature_snake_world_jormungandr_angry.png",
            "skill": "images/creatures/asgard/creature_snake_world_jormungandr_skill.png",
            "gallery": {
                "lv1": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv1.png",
                "lv2": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv2.png",
                "lv3": "images/creatures/asgard/creature_snake_world_jormungandr_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, snake eyes, split tongue, wearing revealing scale armor, Ouroboros symbol",
            "idle": "standing pose, confident, winding tail around legs, neutral expression",
            "gallery_lv1": "anime, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, closed eyes, sleeping pose, lying on coiled giant snake tail, comfortable, peaceful expression, wearing loose white sheer dress, see-through",
            "gallery_lv2": "anime, blue archive style, nikke style, full body, jormungandr, snake girl, long green hair, glowing vertical pupils, split tongue, coiling around stone pillar, teasing pose",
            "gallery_lv3": "anime, blue archive style, nikke style, full body, solo, jormungandr, snake girl, long green hair, snake eyes, heart shaped pupils, wearing white silk sheet loosely draped, tangled in green snake tail, lying on bed, heavy sweat, extremely deep blush"
        },
        lore: {
            "title": "세계의 뱀",
            "story": "세상을 휘감고 자신의 꼬리를 물고 있는 거대한 뱀 요르문간드. 미드가르드를 둘러싸고 있으며, 그녀가 움직이면 세상이 흔들린다고 한다. 평소에는 인간 소녀의 모습을 하고 있지만, 그 본성은 파괴적이고 유혹적이다.",
            "personality": "Seductive & Dangerous"
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
