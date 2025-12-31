import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const SHANGRILA_CREATURES = [
    {
        id: "bonsai_spirit",
        name: "천년 분재 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_bonsai_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_bonsai_spirit.png",
            "joy": "images/creatures/shangrila/creature_bonsai_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_bonsai_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_bonsai_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_bonsai_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_bonsai_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_bonsai_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_bonsai_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 천년 분재 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 천년 분재 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 천년 분재 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "panda_monk",
        name: "판다 수도승",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_panda_monk.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_panda_monk.png",
            "joy": "images/creatures/shangrila/creature_panda_monk_joy.png",
            "sad": "images/creatures/shangrila/creature_panda_monk_sad.png",
            "angry": "images/creatures/shangrila/creature_panda_monk_angry.png",
            "skill": "images/creatures/shangrila/creature_panda_monk_skill.png",
            "victory": "images/creatures/shangrila/creature_panda_monk_victory.png",
            "defeat": "images/creatures/shangrila/creature_panda_monk_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_panda_monk_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 판다 수도승",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 판다 수도승, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 판다 수도승은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "lucky_cat_kuro",
        name: "복 고양이 쿠로",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_lucky_cat_kuro.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_lucky_cat_kuro.png",
            "joy": "images/creatures/shangrila/creature_lucky_cat_kuro_joy.png",
            "sad": "images/creatures/shangrila/creature_lucky_cat_kuro_sad.png",
            "angry": "images/creatures/shangrila/creature_lucky_cat_kuro_angry.png",
            "skill": "images/creatures/shangrila/creature_lucky_cat_kuro_skill.png",
            "victory": "images/creatures/shangrila/creature_lucky_cat_kuro_victory.png",
            "defeat": "images/creatures/shangrila/creature_lucky_cat_kuro_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_lucky_cat_kuro_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 복 고양이 쿠로",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 복 고양이 쿠로, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 복 고양이 쿠로은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "heavenly_maiden_small",
        name: "꼬마 선녀",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_heavenly_maiden_small.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_heavenly_maiden_small.png",
            "joy": "images/creatures/shangrila/creature_heavenly_maiden_small_joy.png",
            "sad": "images/creatures/shangrila/creature_heavenly_maiden_small_sad.png",
            "angry": "images/creatures/shangrila/creature_heavenly_maiden_small_angry.png",
            "skill": "images/creatures/shangrila/creature_heavenly_maiden_small_skill.png",
            "victory": "images/creatures/shangrila/creature_heavenly_maiden_small_victory.png",
            "defeat": "images/creatures/shangrila/creature_heavenly_maiden_small_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_heavenly_maiden_small_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 꼬마 선녀",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 꼬마 선녀, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 꼬마 선녀은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cloud_serpent",
        name: "구름 이무기",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_cloud_serpent.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_cloud_serpent.png",
            "joy": "images/creatures/shangrila/creature_cloud_serpent_joy.png",
            "sad": "images/creatures/shangrila/creature_cloud_serpent_sad.png",
            "angry": "images/creatures/shangrila/creature_cloud_serpent_angry.png",
            "skill": "images/creatures/shangrila/creature_cloud_serpent_skill.png",
            "victory": "images/creatures/shangrila/creature_cloud_serpent_victory.png",
            "defeat": "images/creatures/shangrila/creature_cloud_serpent_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_cloud_serpent_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 구름 이무기",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 구름 이무기, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 구름 이무기은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "statue_lion_dog",
        name: "해치 석상",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_statue_lion_dog.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_statue_lion_dog.png",
            "joy": "images/creatures/shangrila/creature_statue_lion_dog_joy.png",
            "sad": "images/creatures/shangrila/creature_statue_lion_dog_sad.png",
            "angry": "images/creatures/shangrila/creature_statue_lion_dog_angry.png",
            "skill": "images/creatures/shangrila/creature_statue_lion_dog_skill.png",
            "victory": "images/creatures/shangrila/creature_statue_lion_dog_victory.png",
            "defeat": "images/creatures/shangrila/creature_statue_lion_dog_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_statue_lion_dog_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 해치 석상",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 해치 석상, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 해치 석상은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bamboo_chopper",
        name: "대나무 전사",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_bamboo_chopper.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_bamboo_chopper.png",
            "joy": "images/creatures/shangrila/creature_bamboo_chopper_joy.png",
            "sad": "images/creatures/shangrila/creature_bamboo_chopper_sad.png",
            "angry": "images/creatures/shangrila/creature_bamboo_chopper_angry.png",
            "skill": "images/creatures/shangrila/creature_bamboo_chopper_skill.png",
            "victory": "images/creatures/shangrila/creature_bamboo_chopper_victory.png",
            "defeat": "images/creatures/shangrila/creature_bamboo_chopper_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_bamboo_chopper_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 대나무 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 대나무 전사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 대나무 전사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "lantern_ghost",
        name: "초롱불 귀신",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_lantern_ghost.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_lantern_ghost.png",
            "joy": "images/creatures/shangrila/creature_lantern_ghost_joy.png",
            "sad": "images/creatures/shangrila/creature_lantern_ghost_sad.png",
            "angry": "images/creatures/shangrila/creature_lantern_ghost_angry.png",
            "skill": "images/creatures/shangrila/creature_lantern_ghost_skill.png",
            "victory": "images/creatures/shangrila/creature_lantern_ghost_victory.png",
            "defeat": "images/creatures/shangrila/creature_lantern_ghost_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_lantern_ghost_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 초롱불 귀신",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 초롱불 귀신, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 초롱불 귀신은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kumiho_servant",
        name: "미호의 시종",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_kumiho_servant.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_kumiho_servant.png",
            "joy": "images/creatures/shangrila/creature_kumiho_servant_joy.png",
            "sad": "images/creatures/shangrila/creature_kumiho_servant_sad.png",
            "angry": "images/creatures/shangrila/creature_kumiho_servant_angry.png",
            "skill": "images/creatures/shangrila/creature_kumiho_servant_skill.png",
            "victory": "images/creatures/shangrila/creature_kumiho_servant_victory.png",
            "defeat": "images/creatures/shangrila/creature_kumiho_servant_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_kumiho_servant_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 미호의 시종",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 미호의 시종, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 미호의 시종은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "scroll_dragon",
        name: "그림 속의 용",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_scroll_dragon.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_scroll_dragon.png",
            "joy": "images/creatures/shangrila/creature_scroll_dragon_joy.png",
            "sad": "images/creatures/shangrila/creature_scroll_dragon_sad.png",
            "angry": "images/creatures/shangrila/creature_scroll_dragon_angry.png",
            "skill": "images/creatures/shangrila/creature_scroll_dragon_skill.png",
            "victory": "images/creatures/shangrila/creature_scroll_dragon_victory.png",
            "defeat": "images/creatures/shangrila/creature_scroll_dragon_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_scroll_dragon_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 그림 속의 용",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림 속의 용, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 그림 속의 용은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "koi_ascending",
        name: "용이 되고 싶은 잉어",
        rarity: RANKS.UNIQUE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_koi_ascending.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_koi_ascending.png",
            "joy": "images/creatures/shangrila/creature_koi_ascending_joy.png",
            "sad": "images/creatures/shangrila/creature_koi_ascending_sad.png",
            "angry": "images/creatures/shangrila/creature_koi_ascending_angry.png",
            "skill": "images/creatures/shangrila/creature_koi_ascending_skill.png",
            "victory": "images/creatures/shangrila/creature_koi_ascending_victory.png",
            "defeat": "images/creatures/shangrila/creature_koi_ascending_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_koi_ascending_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 용이 되고 싶은 잉어",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 용이 되고 싶은 잉어, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 용이 되고 싶은 잉어은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "tea_leaf_fairy",
        name: "찻잎 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_tea_leaf_fairy.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_tea_leaf_fairy.png",
            "joy": "images/creatures/shangrila/creature_tea_leaf_fairy_joy.png",
            "sad": "images/creatures/shangrila/creature_tea_leaf_fairy_sad.png",
            "angry": "images/creatures/shangrila/creature_tea_leaf_fairy_angry.png",
            "skill": "images/creatures/shangrila/creature_tea_leaf_fairy_skill.png",
            "victory": "images/creatures/shangrila/creature_tea_leaf_fairy_victory.png",
            "defeat": "images/creatures/shangrila/creature_tea_leaf_fairy_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_tea_leaf_fairy_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 찻잎 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 찻잎 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 찻잎 요정은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "rice_grain_spirit",
        name: "쌀알 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_rice_grain_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_rice_grain_spirit.png",
            "joy": "images/creatures/shangrila/creature_rice_grain_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_rice_grain_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_rice_grain_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_rice_grain_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_rice_grain_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_rice_grain_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_rice_grain_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 쌀알 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 쌀알 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 쌀알 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "paper_charm_seal",
        name: "봉인 부적",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_paper_charm_seal.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_paper_charm_seal.png",
            "joy": "images/creatures/shangrila/creature_paper_charm_seal_joy.png",
            "sad": "images/creatures/shangrila/creature_paper_charm_seal_sad.png",
            "angry": "images/creatures/shangrila/creature_paper_charm_seal_angry.png",
            "skill": "images/creatures/shangrila/creature_paper_charm_seal_skill.png",
            "victory": "images/creatures/shangrila/creature_paper_charm_seal_victory.png",
            "defeat": "images/creatures/shangrila/creature_paper_charm_seal_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_paper_charm_seal_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 봉인 부적",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 봉인 부적, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 봉인 부적은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "yin_yang_orb",
        name: "음양구",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_yin_yang_orb.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_yin_yang_orb.png",
            "joy": "images/creatures/shangrila/creature_yin_yang_orb_joy.png",
            "sad": "images/creatures/shangrila/creature_yin_yang_orb_sad.png",
            "angry": "images/creatures/shangrila/creature_yin_yang_orb_angry.png",
            "skill": "images/creatures/shangrila/creature_yin_yang_orb_skill.png",
            "victory": "images/creatures/shangrila/creature_yin_yang_orb_victory.png",
            "defeat": "images/creatures/shangrila/creature_yin_yang_orb_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_yin_yang_orb_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 음양구",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 음양구, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 음양구은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cherry_blossom_petal",
        name: "벚꽃잎 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_cherry_blossom_petal.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_cherry_blossom_petal.png",
            "joy": "images/creatures/shangrila/creature_cherry_blossom_petal_joy.png",
            "sad": "images/creatures/shangrila/creature_cherry_blossom_petal_sad.png",
            "angry": "images/creatures/shangrila/creature_cherry_blossom_petal_angry.png",
            "skill": "images/creatures/shangrila/creature_cherry_blossom_petal_skill.png",
            "victory": "images/creatures/shangrila/creature_cherry_blossom_petal_victory.png",
            "defeat": "images/creatures/shangrila/creature_cherry_blossom_petal_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_cherry_blossom_petal_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 벚꽃잎 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 벚꽃잎 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 벚꽃잎 요정은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magpie_messenger",
        name: "반가운 까치 전령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_magpie_messenger.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_magpie_messenger.png",
            "joy": "images/creatures/shangrila/creature_magpie_messenger_joy.png",
            "sad": "images/creatures/shangrila/creature_magpie_messenger_sad.png",
            "angry": "images/creatures/shangrila/creature_magpie_messenger_angry.png",
            "skill": "images/creatures/shangrila/creature_magpie_messenger_skill.png",
            "victory": "images/creatures/shangrila/creature_magpie_messenger_victory.png",
            "defeat": "images/creatures/shangrila/creature_magpie_messenger_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_magpie_messenger_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 반가운 까치 전령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 반가운 까치 전령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 반가운 까치 전령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "wind_chime_spirit",
        name: "풍경 소리 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_wind_chime_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_wind_chime_spirit.png",
            "joy": "images/creatures/shangrila/creature_wind_chime_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_wind_chime_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_wind_chime_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_wind_chime_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_wind_chime_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_wind_chime_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_wind_chime_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 풍경 소리 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 풍경 소리 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 풍경 소리 요정은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "firefly_night",
        name: "달밤의 반딧불이",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_firefly_night.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_firefly_night.png",
            "joy": "images/creatures/shangrila/creature_firefly_night_joy.png",
            "sad": "images/creatures/shangrila/creature_firefly_night_sad.png",
            "angry": "images/creatures/shangrila/creature_firefly_night_angry.png",
            "skill": "images/creatures/shangrila/creature_firefly_night_skill.png",
            "victory": "images/creatures/shangrila/creature_firefly_night_victory.png",
            "defeat": "images/creatures/shangrila/creature_firefly_night_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_firefly_night_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 달밤의 반딧불이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 달밤의 반딧불이, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 달밤의 반딧불이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_ancient",
        name: "태초의 용 바하무트",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_dragon_ancient.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_dragon_ancient.png",
            "joy": "images/creatures/shangrila/creature_dragon_ancient_joy.png",
            "sad": "images/creatures/shangrila/creature_dragon_ancient_sad.png",
            "angry": "images/creatures/shangrila/creature_dragon_ancient_angry.png",
            "skill": "images/creatures/shangrila/creature_dragon_ancient_skill.png",
            "victory": "images/creatures/shangrila/creature_dragon_ancient_victory.png",
            "defeat": "images/creatures/shangrila/creature_dragon_ancient_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_dragon_ancient_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_dragon_ancient_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_dragon_ancient_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 태초의 용 바하무트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 태초의 용 바하무트, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 태초의 용 바하무트, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 태초의 용 바하무트, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 태초의 용 바하무트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fox_nine_ur",
        name: "천년 구미호 미호",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_fox_nine_ur.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_fox_nine_ur.png",
            "joy": "images/creatures/shangrila/creature_fox_nine_ur_joy.png",
            "sad": "images/creatures/shangrila/creature_fox_nine_ur_sad.png",
            "angry": "images/creatures/shangrila/creature_fox_nine_ur_angry.png",
            "skill": "images/creatures/shangrila/creature_fox_nine_ur_skill.png",
            "victory": "images/creatures/shangrila/creature_fox_nine_ur_victory.png",
            "defeat": "images/creatures/shangrila/creature_fox_nine_ur_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_fox_nine_ur_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_fox_nine_ur_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_fox_nine_ur_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 천년 구미호 미호",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 천년 구미호 미호, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 천년 구미호 미호, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 천년 구미호 미호, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 천년 구미호 미호은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_dragon_king",
        name: "수정궁의 용왕",
        rarity: RANKS.UR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_god_dragon_king.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_god_dragon_king.png",
            "joy": "images/creatures/shangrila/creature_god_dragon_king_joy.png",
            "sad": "images/creatures/shangrila/creature_god_dragon_king_sad.png",
            "angry": "images/creatures/shangrila/creature_god_dragon_king_angry.png",
            "skill": "images/creatures/shangrila/creature_god_dragon_king_skill.png",
            "victory": "images/creatures/shangrila/creature_god_dragon_king_victory.png",
            "defeat": "images/creatures/shangrila/creature_god_dragon_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_god_dragon_king_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_god_dragon_king_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_god_dragon_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 수정궁의 용왕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 수정궁의 용왕, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 수정궁의 용왕, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 수정궁의 용왕, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 수정궁의 용왕은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "phoenix_eternal",
        name: "불멸의 화조 페이",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_phoenix_eternal.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_phoenix_eternal.png",
            "joy": "images/creatures/shangrila/creature_phoenix_eternal_joy.png",
            "sad": "images/creatures/shangrila/creature_phoenix_eternal_sad.png",
            "angry": "images/creatures/shangrila/creature_phoenix_eternal_angry.png",
            "skill": "images/creatures/shangrila/creature_phoenix_eternal_skill.png",
            "victory": "images/creatures/shangrila/creature_phoenix_eternal_victory.png",
            "defeat": "images/creatures/shangrila/creature_phoenix_eternal_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_phoenix_eternal_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_phoenix_eternal_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_phoenix_eternal_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 불멸의 화조 페이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 불멸의 화조 페이, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 불멸의 화조 페이, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 불멸의 화조 페이, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 불멸의 화조 페이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "hero_wukong",
        name: "제천대성 손오공",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_hero_wukong.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_hero_wukong.png",
            "joy": "images/creatures/shangrila/creature_hero_wukong_joy.png",
            "sad": "images/creatures/shangrila/creature_hero_wukong_sad.png",
            "angry": "images/creatures/shangrila/creature_hero_wukong_angry.png",
            "skill": "images/creatures/shangrila/creature_hero_wukong_skill.png",
            "victory": "images/creatures/shangrila/creature_hero_wukong_victory.png",
            "defeat": "images/creatures/shangrila/creature_hero_wukong_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_hero_wukong_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_hero_wukong_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_hero_wukong_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 제천대성 손오공",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 제천대성 손오공, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 제천대성 손오공, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 제천대성 손오공, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 제천대성 손오공은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "rabbit_moon",
        name: "달토끼 루나",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_rabbit_moon.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_rabbit_moon.png",
            "joy": "images/creatures/shangrila/creature_rabbit_moon_joy.png",
            "sad": "images/creatures/shangrila/creature_rabbit_moon_sad.png",
            "angry": "images/creatures/shangrila/creature_rabbit_moon_angry.png",
            "skill": "images/creatures/shangrila/creature_rabbit_moon_skill.png",
            "victory": "images/creatures/shangrila/creature_rabbit_moon_victory.png",
            "defeat": "images/creatures/shangrila/creature_rabbit_moon_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_rabbit_moon_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_rabbit_moon_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_rabbit_moon_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 달토끼 루나",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 달토끼 루나, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 달토끼 루나, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 달토끼 루나, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 달토끼 루나은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "peacock_princess",
        name: "공작 공주",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_peacock_princess.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_peacock_princess.png",
            "joy": "images/creatures/shangrila/creature_peacock_princess_joy.png",
            "sad": "images/creatures/shangrila/creature_peacock_princess_sad.png",
            "angry": "images/creatures/shangrila/creature_peacock_princess_angry.png",
            "skill": "images/creatures/shangrila/creature_peacock_princess_skill.png",
            "victory": "images/creatures/shangrila/creature_peacock_princess_victory.png",
            "defeat": "images/creatures/shangrila/creature_peacock_princess_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_peacock_princess_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_peacock_princess_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_peacock_princess_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 공작 공주",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 공작 공주, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 공작 공주, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 공작 공주, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 공작 공주은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fox_yokai_sr",
        name: "여우요괴 미호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_fox_yokai_sr.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_fox_yokai_sr.png",
            "joy": "images/creatures/shangrila/creature_fox_yokai_sr_joy.png",
            "sad": "images/creatures/shangrila/creature_fox_yokai_sr_sad.png",
            "angry": "images/creatures/shangrila/creature_fox_yokai_sr_angry.png",
            "skill": "images/creatures/shangrila/creature_fox_yokai_sr_skill.png",
            "victory": "images/creatures/shangrila/creature_fox_yokai_sr_victory.png",
            "defeat": "images/creatures/shangrila/creature_fox_yokai_sr_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_fox_yokai_sr_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_fox_yokai_sr_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_fox_yokai_sr_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 여우요괴 미호",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 여우요괴 미호, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 여우요괴 미호, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 여우요괴 미호, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 여우요괴 미호은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_azure",
        name: "청룡",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_dragon_azure.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_dragon_azure.png",
            "joy": "images/creatures/shangrila/creature_dragon_azure_joy.png",
            "sad": "images/creatures/shangrila/creature_dragon_azure_sad.png",
            "angry": "images/creatures/shangrila/creature_dragon_azure_angry.png",
            "skill": "images/creatures/shangrila/creature_dragon_azure_skill.png",
            "victory": "images/creatures/shangrila/creature_dragon_azure_victory.png",
            "defeat": "images/creatures/shangrila/creature_dragon_azure_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_dragon_azure_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_dragon_azure_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_dragon_azure_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 청룡",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 청룡, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 청룡, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 청룡, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 청룡은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "tiger_white",
        name: "백호",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_tiger_white.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_tiger_white.png",
            "joy": "images/creatures/shangrila/creature_tiger_white_joy.png",
            "sad": "images/creatures/shangrila/creature_tiger_white_sad.png",
            "angry": "images/creatures/shangrila/creature_tiger_white_angry.png",
            "skill": "images/creatures/shangrila/creature_tiger_white_skill.png",
            "victory": "images/creatures/shangrila/creature_tiger_white_victory.png",
            "defeat": "images/creatures/shangrila/creature_tiger_white_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_tiger_white_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_tiger_white_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_tiger_white_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 백호",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 백호, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 백호, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 백호, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 백호은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bird_vermilion",
        name: "주작",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_bird_vermilion.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_bird_vermilion.png",
            "joy": "images/creatures/shangrila/creature_bird_vermilion_joy.png",
            "sad": "images/creatures/shangrila/creature_bird_vermilion_sad.png",
            "angry": "images/creatures/shangrila/creature_bird_vermilion_angry.png",
            "skill": "images/creatures/shangrila/creature_bird_vermilion_skill.png",
            "victory": "images/creatures/shangrila/creature_bird_vermilion_victory.png",
            "defeat": "images/creatures/shangrila/creature_bird_vermilion_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_bird_vermilion_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_bird_vermilion_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_bird_vermilion_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 주작",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 주작, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 주작, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 주작, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 주작은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "turtle_black",
        name: "현무",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_turtle_black.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_turtle_black.png",
            "joy": "images/creatures/shangrila/creature_turtle_black_joy.png",
            "sad": "images/creatures/shangrila/creature_turtle_black_sad.png",
            "angry": "images/creatures/shangrila/creature_turtle_black_angry.png",
            "skill": "images/creatures/shangrila/creature_turtle_black_skill.png",
            "victory": "images/creatures/shangrila/creature_turtle_black_victory.png",
            "defeat": "images/creatures/shangrila/creature_turtle_black_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_turtle_black_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_turtle_black_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_turtle_black_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 현무",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 현무, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 현무, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 현무, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 현무은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dokkeabi_king",
        name: "황금 방망이 도깨비",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_dokkeabi_king.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_dokkeabi_king.png",
            "joy": "images/creatures/shangrila/creature_dokkeabi_king_joy.png",
            "sad": "images/creatures/shangrila/creature_dokkeabi_king_sad.png",
            "angry": "images/creatures/shangrila/creature_dokkeabi_king_angry.png",
            "skill": "images/creatures/shangrila/creature_dokkeabi_king_skill.png",
            "victory": "images/creatures/shangrila/creature_dokkeabi_king_victory.png",
            "defeat": "images/creatures/shangrila/creature_dokkeabi_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_dokkeabi_king_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_dokkeabi_king_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_dokkeabi_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 황금 방망이 도깨비",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 황금 방망이 도깨비, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 황금 방망이 도깨비, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 황금 방망이 도깨비, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 황금 방망이 도깨비은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mountain_god_tiger",
        name: "산신 호랑이",
        rarity: RANKS.SR,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_mountain_god_tiger.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_mountain_god_tiger.png",
            "joy": "images/creatures/shangrila/creature_mountain_god_tiger_joy.png",
            "sad": "images/creatures/shangrila/creature_mountain_god_tiger_sad.png",
            "angry": "images/creatures/shangrila/creature_mountain_god_tiger_angry.png",
            "skill": "images/creatures/shangrila/creature_mountain_god_tiger_skill.png",
            "victory": "images/creatures/shangrila/creature_mountain_god_tiger_victory.png",
            "defeat": "images/creatures/shangrila/creature_mountain_god_tiger_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_mountain_god_tiger_gallery_lv1.png",
                "lv2": "images/creatures/shangrila/creature_mountain_god_tiger_gallery_lv2.png",
                "lv3": "images/creatures/shangrila/creature_mountain_god_tiger_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 산신 호랑이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 산신 호랑이, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 산신 호랑이, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 산신 호랑이, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 산신 호랑이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ninja_shadow",
        name: "그림자 닌자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_ninja_shadow.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_ninja_shadow.png",
            "joy": "images/creatures/shangrila/creature_ninja_shadow_joy.png",
            "sad": "images/creatures/shangrila/creature_ninja_shadow_sad.png",
            "angry": "images/creatures/shangrila/creature_ninja_shadow_angry.png",
            "skill": "images/creatures/shangrila/creature_ninja_shadow_skill.png",
            "victory": "images/creatures/shangrila/creature_ninja_shadow_victory.png",
            "defeat": "images/creatures/shangrila/creature_ninja_shadow_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_ninja_shadow_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 그림자 닌자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림자 닌자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 그림자 닌자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "crane_sage",
        name: "구름 위의 학 신선",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_crane_sage.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_crane_sage.png",
            "joy": "images/creatures/shangrila/creature_crane_sage_joy.png",
            "sad": "images/creatures/shangrila/creature_crane_sage_sad.png",
            "angry": "images/creatures/shangrila/creature_crane_sage_angry.png",
            "skill": "images/creatures/shangrila/creature_crane_sage_skill.png",
            "victory": "images/creatures/shangrila/creature_crane_sage_victory.png",
            "defeat": "images/creatures/shangrila/creature_crane_sage_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_crane_sage_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 구름 위의 학 신선",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 구름 위의 학 신선, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 구름 위의 학 신선은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "pears_spirit",
        name: "연꽃 아씨",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_pears_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_pears_spirit.png",
            "joy": "images/creatures/shangrila/creature_pears_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_pears_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_pears_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_pears_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_pears_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_pears_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_pears_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 연꽃 아씨",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 연꽃 아씨, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 연꽃 아씨은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "butterfly_dream",
        name: "장자의 나비",
        rarity: RANKS.SPECIAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_butterfly_dream.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_butterfly_dream.png",
            "joy": "images/creatures/shangrila/creature_butterfly_dream_joy.png",
            "sad": "images/creatures/shangrila/creature_butterfly_dream_sad.png",
            "angry": "images/creatures/shangrila/creature_butterfly_dream_angry.png",
            "skill": "images/creatures/shangrila/creature_butterfly_dream_skill.png",
            "victory": "images/creatures/shangrila/creature_butterfly_dream_victory.png",
            "defeat": "images/creatures/shangrila/creature_butterfly_dream_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_butterfly_dream_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 장자의 나비",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 장자의 나비, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 장자의 나비은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "flower_fairy",
        name: "꽃의 요정",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_flower_fairy.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_flower_fairy.png",
            "joy": "images/creatures/shangrila/creature_flower_fairy_joy.png",
            "sad": "images/creatures/shangrila/creature_flower_fairy_sad.png",
            "angry": "images/creatures/shangrila/creature_flower_fairy_angry.png",
            "skill": "images/creatures/shangrila/creature_flower_fairy_skill.png",
            "victory": "images/creatures/shangrila/creature_flower_fairy_victory.png",
            "defeat": "images/creatures/shangrila/creature_flower_fairy_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_flower_fairy_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 꽃의 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 꽃의 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 꽃의 요정은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ink_spirit",
        name: "먹물 요정",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_ink_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_ink_spirit.png",
            "joy": "images/creatures/shangrila/creature_ink_spirit_joy.png",
            "sad": "images/creatures/shangrila/creature_ink_spirit_sad.png",
            "angry": "images/creatures/shangrila/creature_ink_spirit_angry.png",
            "skill": "images/creatures/shangrila/creature_ink_spirit_skill.png",
            "victory": "images/creatures/shangrila/creature_ink_spirit_victory.png",
            "defeat": "images/creatures/shangrila/creature_ink_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/shangrila/creature_ink_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, oriental fantasy, ink painting style, mystical mist, jade details, Light, 먹물 요정",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 먹물 요정, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "무릉도원의 신비로운 기운을 머금고 태어난 영물입니다. 먹물 요정은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "fox_nine_new",
        name: "신생 구미호",
        rarity: RANKS.SSR,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_fox_nine_new.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_fox_nine_new.png",
            "joy": "images/creatures/shangrila/creature_fox_nine_new.png", // Fallback
            "sad": "images/creatures/shangrila/creature_fox_nine_new.png", // Fallback
            "angry": "images/creatures/shangrila/creature_fox_nine_new.png", // Fallback
            "skill": "images/creatures/shangrila/creature_fox_nine_new.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 신생 구미호",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in shangrila.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "jade_rabbit",
        name: "옥토끼",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_jade_rabbit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_jade_rabbit.png",
            "joy": "images/creatures/shangrila/creature_jade_rabbit.png", // Fallback
            "sad": "images/creatures/shangrila/creature_jade_rabbit.png", // Fallback
            "angry": "images/creatures/shangrila/creature_jade_rabbit.png", // Fallback
            "skill": "images/creatures/shangrila/creature_jade_rabbit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 옥토끼",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in shangrila.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "yin_yang_fish",
        name: "음양어",
        rarity: RANKS.RARE,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_yin_yang_fish.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_yin_yang_fish.png",
            "joy": "images/creatures/shangrila/creature_yin_yang_fish.png", // Fallback
            "sad": "images/creatures/shangrila/creature_yin_yang_fish.png", // Fallback
            "angry": "images/creatures/shangrila/creature_yin_yang_fish.png", // Fallback
            "skill": "images/creatures/shangrila/creature_yin_yang_fish.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 음양어",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in shangrila.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
,
    {
        id: "cloud_spirit",
        name: "운무 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.SHANGRILA,
        elements: ["Earth"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/shangrila/creature_cloud_spirit.png",
        sprites: {
            "idle": "images/creatures/shangrila/creature_cloud_spirit.png",
            "joy": "images/creatures/shangrila/creature_cloud_spirit.png",
            "sad": "images/creatures/shangrila/creature_cloud_spirit.png",
            "angry": "images/creatures/shangrila/creature_cloud_spirit.png",
            "skill": "images/creatures/shangrila/creature_cloud_spirit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 운무 정령",
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