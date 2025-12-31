import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ABYSS_CREATURES = [
    {
        id: "void_beast",
        name: "공허의 야수",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_beast.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_beast.png",
            "joy": "images/creatures/abyss/creature_void_beast_joy.png",
            "sad": "images/creatures/abyss/creature_void_beast_sad.png",
            "angry": "images/creatures/abyss/creature_void_beast_angry.png",
            "skill": "images/creatures/abyss/creature_void_beast_skill.png",
            "victory": "images/creatures/abyss/creature_void_beast_victory.png",
            "defeat": "images/creatures/abyss/creature_void_beast_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_beast_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_void_beast_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_void_beast_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 야수",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 공허의 야수, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 공허의 야수, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 공허의 야수, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 야수은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "shadow_assassin",
        name: "그림자 암살자",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_shadow_assassin.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_shadow_assassin.png",
            "joy": "images/creatures/abyss/creature_shadow_assassin_joy.png",
            "sad": "images/creatures/abyss/creature_shadow_assassin_sad.png",
            "angry": "images/creatures/abyss/creature_shadow_assassin_angry.png",
            "skill": "images/creatures/abyss/creature_shadow_assassin_skill.png",
            "victory": "images/creatures/abyss/creature_shadow_assassin_victory.png",
            "defeat": "images/creatures/abyss/creature_shadow_assassin_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_shadow_assassin_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 그림자 암살자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림자 암살자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 그림자 암살자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "gargoyle_stone",
        name: "석상 가고일",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_gargoyle_stone.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_gargoyle_stone.png",
            "joy": "images/creatures/abyss/creature_gargoyle_stone_joy.png",
            "sad": "images/creatures/abyss/creature_gargoyle_stone_sad.png",
            "angry": "images/creatures/abyss/creature_gargoyle_stone_angry.png",
            "skill": "images/creatures/abyss/creature_gargoyle_stone_skill.png",
            "victory": "images/creatures/abyss/creature_gargoyle_stone_victory.png",
            "defeat": "images/creatures/abyss/creature_gargoyle_stone_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_gargoyle_stone_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 석상 가고일",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 석상 가고일, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 석상 가고일은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "eye_of_chaos",
        name: "혼돈의 눈",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_eye_of_chaos.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_eye_of_chaos.png",
            "joy": "images/creatures/abyss/creature_eye_of_chaos_joy.png",
            "sad": "images/creatures/abyss/creature_eye_of_chaos_sad.png",
            "angry": "images/creatures/abyss/creature_eye_of_chaos_angry.png",
            "skill": "images/creatures/abyss/creature_eye_of_chaos_skill.png",
            "victory": "images/creatures/abyss/creature_eye_of_chaos_victory.png",
            "defeat": "images/creatures/abyss/creature_eye_of_chaos_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_eye_of_chaos_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 혼돈의 눈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 혼돈의 눈, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 혼돈의 눈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_stalker",
        name: "심연의 추적자",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_stalker.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_abyss_stalker.png",
            "joy": "images/creatures/abyss/creature_abyss_stalker_joy.png",
            "sad": "images/creatures/abyss/creature_abyss_stalker_sad.png",
            "angry": "images/creatures/abyss/creature_abyss_stalker_angry.png",
            "skill": "images/creatures/abyss/creature_abyss_stalker_skill.png",
            "victory": "images/creatures/abyss/creature_abyss_stalker_victory.png",
            "defeat": "images/creatures/abyss/creature_abyss_stalker_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_abyss_stalker_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심연의 추적자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 심연의 추적자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심연의 추적자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dark_matter_slime",
        name: "암흑 물질 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_dark_matter_slime.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dark_matter_slime.png",
            "joy": "images/creatures/abyss/creature_dark_matter_slime_joy.png",
            "sad": "images/creatures/abyss/creature_dark_matter_slime_sad.png",
            "angry": "images/creatures/abyss/creature_dark_matter_slime_angry.png",
            "skill": "images/creatures/abyss/creature_dark_matter_slime_skill.png",
            "victory": "images/creatures/abyss/creature_dark_matter_slime_victory.png",
            "defeat": "images/creatures/abyss/creature_dark_matter_slime_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dark_matter_slime_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 암흑 물질 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 암흑 물질 슬라임, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 암흑 물질 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_walker",
        name: "공허의 보행자",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_walker.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_walker.png",
            "joy": "images/creatures/abyss/creature_void_walker_joy.png",
            "sad": "images/creatures/abyss/creature_void_walker_sad.png",
            "angry": "images/creatures/abyss/creature_void_walker_angry.png",
            "skill": "images/creatures/abyss/creature_void_walker_skill.png",
            "victory": "images/creatures/abyss/creature_void_walker_victory.png",
            "defeat": "images/creatures/abyss/creature_void_walker_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_walker_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 보행자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 공허의 보행자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 보행자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_leech",
        name: "심연의 거머리",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_leech.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_abyss_leech.png",
            "joy": "images/creatures/abyss/creature_abyss_leech_joy.png",
            "sad": "images/creatures/abyss/creature_abyss_leech_sad.png",
            "angry": "images/creatures/abyss/creature_abyss_leech_angry.png",
            "skill": "images/creatures/abyss/creature_abyss_leech_skill.png",
            "victory": "images/creatures/abyss/creature_abyss_leech_victory.png",
            "defeat": "images/creatures/abyss/creature_abyss_leech_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_abyss_leech_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심연의 거머리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 심연의 거머리, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심연의 거머리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_emperor",
        name: "공허의 여제 에레보스",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_emperor.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_emperor.png",
            "joy": "images/creatures/abyss/creature_void_emperor_joy.png",
            "sad": "images/creatures/abyss/creature_void_emperor_sad.png",
            "angry": "images/creatures/abyss/creature_void_emperor_angry.png",
            "skill": "images/creatures/abyss/creature_void_emperor_skill.png",
            "victory": "images/creatures/abyss/creature_void_emperor_victory.png",
            "defeat": "images/creatures/abyss/creature_void_emperor_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_emperor_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_void_emperor_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_void_emperor_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 여제 에레보스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 공허의 여제 에레보스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 공허의 여제 에레보스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 공허의 여제 에레보스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 여제 에레보스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_chaos",
        name: "혼돈의 용희 티아마트",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_dragon_chaos.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dragon_chaos.png",
            "joy": "images/creatures/abyss/creature_dragon_chaos_joy.png",
            "sad": "images/creatures/abyss/creature_dragon_chaos_sad.png",
            "angry": "images/creatures/abyss/creature_dragon_chaos_angry.png",
            "skill": "images/creatures/abyss/creature_dragon_chaos_skill.png",
            "victory": "images/creatures/abyss/creature_dragon_chaos_victory.png",
            "defeat": "images/creatures/abyss/creature_dragon_chaos_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dragon_chaos_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_dragon_chaos_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_dragon_chaos_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 혼돈의 용희 티아마트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 혼돈의 용희 티아마트, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 혼돈의 용희 티아마트, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 혼돈의 용희 티아마트, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 혼돈의 용희 티아마트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kraken_worldstar",
        name: "월드스타 루루",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_kraken_worldstar_gallery_lv3.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv3.png",
            "joy": "images/creatures/abyss/creature_kraken_worldstar_joy.png",
            "sad": "images/creatures/abyss/creature_kraken_worldstar_sad.png",
            "angry": "images/creatures/abyss/creature_kraken_worldstar_angry.png",
            "skill": "images/creatures/abyss/creature_kraken_worldstar_skill.png",
            "victory": "images/creatures/abyss/creature_kraken_worldstar_victory.png",
            "defeat": "images/creatures/abyss/creature_kraken_worldstar_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_kraken_worldstar_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 월드스타 루루",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 월드스타 루루, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 월드스타 루루, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 월드스타 루루, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 월드스타 루루은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_cthulhu",
        name: "별의 지배자 크툴루",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_god_cthulhu.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_god_cthulhu.png",
            "joy": "images/creatures/abyss/creature_god_cthulhu_joy.png",
            "sad": "images/creatures/abyss/creature_god_cthulhu_sad.png",
            "angry": "images/creatures/abyss/creature_god_cthulhu_angry.png",
            "skill": "images/creatures/abyss/creature_god_cthulhu_skill.png",
            "victory": "images/creatures/abyss/creature_god_cthulhu_victory.png",
            "defeat": "images/creatures/abyss/creature_god_cthulhu_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_god_cthulhu_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_god_cthulhu_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_god_cthulhu_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 별의 지배자 크툴루",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 별의 지배자 크툴루, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 별의 지배자 크툴루, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 별의 지배자 크툴루, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 별의 지배자 크툴루은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_nyarlathotep",
        name: "기어다니는 혼돈 니알라토텝",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_god_nyarlathotep.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_god_nyarlathotep.png",
            "joy": "images/creatures/abyss/creature_god_nyarlathotep_joy.png",
            "sad": "images/creatures/abyss/creature_god_nyarlathotep_sad.png",
            "angry": "images/creatures/abyss/creature_god_nyarlathotep_angry.png",
            "skill": "images/creatures/abyss/creature_god_nyarlathotep_skill.png",
            "victory": "images/creatures/abyss/creature_god_nyarlathotep_victory.png",
            "defeat": "images/creatures/abyss/creature_god_nyarlathotep_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_god_nyarlathotep_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_god_nyarlathotep_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_god_nyarlathotep_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece, best quality, ultra-detailed), distinct nikke style, hyung-tae kim style, oil painting texture, thick coating, glossy skin, extremely beautiful female nyarlathotep, crawling chaos, long wavy silver hair, glowing red eyes with heart-shaped pupils, wearing stylish black body-con dress with futuristic red energy lines, thigh-high boots, heavy cleavage, sideboob, standing full body pose, posing playfully with finger on lips, simple purple gradient background, soft lighting, perfect anatomy, thick thighs, extremely wide hips, tiny waist, (human-like:1.5), semi-realism anime face, attractive and cute, NO tentacles on face, NO slime, NO monster features, NO text",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 기어다니는 혼돈 니알라토텝, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 기어다니는 혼돈 니알라토텝, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 기어다니는 혼돈 니알라토텝, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 기어다니는 혼돈 니알라토텝은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "demon_king",
        name: "마왕 바알",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_demon_king.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_demon_king.png",
            "joy": "images/creatures/abyss/creature_demon_king_joy.png",
            "sad": "images/creatures/abyss/creature_demon_king_sad.png",
            "angry": "images/creatures/abyss/creature_demon_king_angry.png",
            "skill": "images/creatures/abyss/creature_demon_king_skill.png",
            "victory": "images/creatures/abyss/creature_demon_king_victory.png",
            "defeat": "images/creatures/abyss/creature_demon_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_demon_king_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_demon_king_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_demon_king_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece, best quality, ultra-detailed), distinct nikke style, hyung-tae kim style, oil painting texture, thick coating, glossy skin, extremely beautiful female demon king baal, long straight black hair, small bat wings on back, elegant curved horns, wearing stylish black and red gothic military uniform with mini skirt, black pantyhose, garter belt, high heels, cape on shoulders, standing full body pose, arms crossed under breasts, arrogant expression looking down at viewer, simple red gradient background, spotlight effect, perfect anatomy, thick thighs, wide hips, curvy figure, (human-like:1.5), semi-realism anime face, attractive dominant vibe, NO monster features, NO ugly face, NO text",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 마왕 바알, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 마왕 바알, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 마왕 바알, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 마왕 바알은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_shub",
        name: "만 마리 새끼를 품은 숲의 염소",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_god_shub.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_god_shub.png",
            "joy": "images/creatures/abyss/creature_god_shub_joy.png",
            "sad": "images/creatures/abyss/creature_god_shub_sad.png",
            "angry": "images/creatures/abyss/creature_god_shub_angry.png",
            "skill": "images/creatures/abyss/creature_god_shub_skill.png",
            "victory": "images/creatures/abyss/creature_god_shub_victory.png",
            "defeat": "images/creatures/abyss/creature_god_shub_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_god_shub_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_god_shub_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_god_shub_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece, best quality, ultra-detailed), distinct nikke style, hyung-tae kim style, oil painting texture, thick coating, glossy skin, extremely beautiful female shub-niggurath, black goat of the woods, voluminous white hair reaching floor, elegant curved goat horns, wearing revealing white silk druid priestess robe with gold ornaments (see-through fabric), dress slit high to hips, deep neckline showing massive breasts, standing full body pose, gentle motherly smile, hand reaching out, simple green and soft sunlight background, nature particles, perfect anatomy, extremely wide hips, thick thighs, voluptuous body, (human-like:1.5), semi-realism anime face, attractive, NO monster features, NO slime, NO horror, NO text",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 만 마리 새끼를 품은 숲의 염소, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 만 마리 새끼를 품은 숲의 염소, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 만 마리 새끼를 품은 숲의 염소, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 만 마리 새끼를 품은 숲의 염소은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_hastur",
        name: "황색 옷의 왕 하스터",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_god_hastur.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_god_hastur.png",
            "joy": "images/creatures/abyss/creature_god_hastur_joy.png",
            "sad": "images/creatures/abyss/creature_god_hastur_sad.png",
            "angry": "images/creatures/abyss/creature_god_hastur_angry.png",
            "skill": "images/creatures/abyss/creature_god_hastur_skill.png",
            "victory": "images/creatures/abyss/creature_god_hastur_victory.png",
            "defeat": "images/creatures/abyss/creature_god_hastur_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_god_hastur_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_god_hastur_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_god_hastur_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 황색 옷의 왕 하스터",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 황색 옷의 왕 하스터, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 황색 옷의 왕 하스터, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 황색 옷의 왕 하스터, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 황색 옷의 왕 하스터은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "vampire_lord",
        name: "진홍의 여왕 카밀라",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_vampire_lord.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_vampire_lord.png",
            "joy": "images/creatures/abyss/creature_vampire_lord_joy.png",
            "sad": "images/creatures/abyss/creature_vampire_lord_sad.png",
            "angry": "images/creatures/abyss/creature_vampire_lord_angry.png",
            "skill": "images/creatures/abyss/creature_vampire_lord_skill.png",
            "victory": "images/creatures/abyss/creature_vampire_lord_victory.png",
            "defeat": "images/creatures/abyss/creature_vampire_lord_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_vampire_lord_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_vampire_lord_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_vampire_lord_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 진홍의 여왕 카밀라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 진홍의 여왕 카밀라, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 진홍의 여왕 카밀라, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 진홍의 여왕 카밀라, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 진홍의 여왕 카밀라은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_dagon",
        name: "심해의 거신 다곤",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_god_dagon.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_god_dagon.png",
            "joy": "images/creatures/abyss/creature_god_dagon_joy.png",
            "sad": "images/creatures/abyss/creature_god_dagon_sad.png",
            "angry": "images/creatures/abyss/creature_god_dagon_angry.png",
            "skill": "images/creatures/abyss/creature_god_dagon_skill.png",
            "victory": "images/creatures/abyss/creature_god_dagon_victory.png",
            "defeat": "images/creatures/abyss/creature_god_dagon_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_god_dagon_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_god_dagon_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_god_dagon_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심해의 거신 다곤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 심해의 거신 다곤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 심해의 거신 다곤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 심해의 거신 다곤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심해의 거신 다곤은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "knight_dullahan",
        name: "머리 없는 기사 듀라한",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_knight_dullahan.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_knight_dullahan.png",
            "joy": "images/creatures/abyss/creature_knight_dullahan_joy.png",
            "sad": "images/creatures/abyss/creature_knight_dullahan_sad.png",
            "angry": "images/creatures/abyss/creature_knight_dullahan_angry.png",
            "skill": "images/creatures/abyss/creature_knight_dullahan_skill.png",
            "victory": "images/creatures/abyss/creature_knight_dullahan_victory.png",
            "defeat": "images/creatures/abyss/creature_knight_dullahan_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_knight_dullahan_gallery_lv1.png",
                "lv2": "images/creatures/abyss/creature_knight_dullahan_gallery_lv2.png",
                "lv3": "images/creatures/abyss/creature_knight_dullahan_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 머리 없는 기사 듀라한",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 머리 없는 기사 듀라한, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 머리 없는 기사 듀라한, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 머리 없는 기사 듀라한, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 머리 없는 기사 듀라한은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "knight_skeleton",
        name: "스켈레톤 나이트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_knight_skeleton.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_knight_skeleton.png",
            "joy": "images/creatures/abyss/creature_knight_skeleton_joy.png",
            "sad": "images/creatures/abyss/creature_knight_skeleton_sad.png",
            "angry": "images/creatures/abyss/creature_knight_skeleton_angry.png",
            "skill": "images/creatures/abyss/creature_knight_skeleton_skill.png",
            "victory": "images/creatures/abyss/creature_knight_skeleton_victory.png",
            "defeat": "images/creatures/abyss/creature_knight_skeleton_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_knight_skeleton_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 스켈레톤 나이트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 스켈레톤 나이트, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 스켈레톤 나이트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mimic_box",
        name: "탐욕의 상자 미믹",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_mimic_box.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_mimic_box.png",
            "joy": "images/creatures/abyss/creature_mimic_box_joy.png",
            "sad": "images/creatures/abyss/creature_mimic_box_sad.png",
            "angry": "images/creatures/abyss/creature_mimic_box_angry.png",
            "skill": "images/creatures/abyss/creature_mimic_box_skill.png",
            "victory": "images/creatures/abyss/creature_mimic_box_victory.png",
            "defeat": "images/creatures/abyss/creature_mimic_box_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_mimic_box_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 탐욕의 상자 미믹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 탐욕의 상자 미믹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 탐욕의 상자 미믹은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cursed_doll",
        name: "저주받은 인형",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_cursed_doll.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_cursed_doll.png",
            "joy": "images/creatures/abyss/creature_cursed_doll_joy.png",
            "sad": "images/creatures/abyss/creature_cursed_doll_sad.png",
            "angry": "images/creatures/abyss/creature_cursed_doll_angry.png",
            "skill": "images/creatures/abyss/creature_cursed_doll_skill.png",
            "victory": "images/creatures/abyss/creature_cursed_doll_victory.png",
            "defeat": "images/creatures/abyss/creature_cursed_doll_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_cursed_doll_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 저주받은 인형",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 저주받은 인형, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 저주받은 인형은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "eye_bat",
        name: "외눈박이 박쥐",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_eye_bat.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_eye_bat.png",
            "joy": "images/creatures/abyss/creature_eye_bat_joy.png",
            "sad": "images/creatures/abyss/creature_eye_bat_sad.png",
            "angry": "images/creatures/abyss/creature_eye_bat_angry.png",
            "skill": "images/creatures/abyss/creature_eye_bat_skill.png",
            "victory": "images/creatures/abyss/creature_eye_bat_victory.png",
            "defeat": "images/creatures/abyss/creature_eye_bat_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_eye_bat_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 외눈박이 박쥐",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 외눈박이 박쥐, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 외눈박이 박쥐은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ghost_lamp",
        name: "영혼의 등불",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_ghost_lamp.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_ghost_lamp.png",
            "joy": "images/creatures/abyss/creature_ghost_lamp_joy.png",
            "sad": "images/creatures/abyss/creature_ghost_lamp_sad.png",
            "angry": "images/creatures/abyss/creature_ghost_lamp_angry.png",
            "skill": "images/creatures/abyss/creature_ghost_lamp_skill.png",
            "victory": "images/creatures/abyss/creature_ghost_lamp_victory.png",
            "defeat": "images/creatures/abyss/creature_ghost_lamp_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_ghost_lamp_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 영혼의 등불",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 영혼의 등불, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 영혼의 등불은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "deep_one_soldier",
        name: "딥 원 전사",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_deep_one_soldier.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_deep_one_soldier.png",
            "joy": "images/creatures/abyss/creature_deep_one_soldier_joy.png",
            "sad": "images/creatures/abyss/creature_deep_one_soldier_sad.png",
            "angry": "images/creatures/abyss/creature_deep_one_soldier_angry.png",
            "skill": "images/creatures/abyss/creature_deep_one_soldier_skill.png",
            "victory": "images/creatures/abyss/creature_deep_one_soldier_victory.png",
            "defeat": "images/creatures/abyss/creature_deep_one_soldier_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_deep_one_soldier_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 딥 원 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 딥 원 전사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 딥 원 전사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "goblin_scout_new",
        name: "고블린 정찰병",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_goblin_scout_new.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_goblin_scout_new.png",
            "joy": "images/creatures/abyss/creature_goblin_scout_new_joy.png",
            "sad": "images/creatures/abyss/creature_goblin_scout_new_sad.png",
            "angry": "images/creatures/abyss/creature_goblin_scout_new_angry.png",
            "skill": "images/creatures/abyss/creature_goblin_scout_new_skill.png",
            "victory": "images/creatures/abyss/creature_goblin_scout_new_victory.png",
            "defeat": "images/creatures/abyss/creature_goblin_scout_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_goblin_scout_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 고블린 정찰병",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고블린 정찰병, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 고블린 정찰병은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "shadow_lurker",
        name: "그림자 잠복자",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_shadow_lurker.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_shadow_lurker.png",
            "joy": "images/creatures/abyss/creature_shadow_lurker_joy.png",
            "sad": "images/creatures/abyss/creature_shadow_lurker_sad.png",
            "angry": "images/creatures/abyss/creature_shadow_lurker_angry.png",
            "skill": "images/creatures/abyss/creature_shadow_lurker_skill.png",
            "victory": "images/creatures/abyss/creature_shadow_lurker_victory.png",
            "defeat": "images/creatures/abyss/creature_shadow_lurker_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_shadow_lurker_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 그림자 잠복자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 그림자 잠복자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 그림자 잠복자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_watcher_small",
        name: "작은 심연의 감시자",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_watcher_small.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_abyss_watcher_small.png",
            "joy": "images/creatures/abyss/creature_abyss_watcher_small_joy.png",
            "sad": "images/creatures/abyss/creature_abyss_watcher_small_sad.png",
            "angry": "images/creatures/abyss/creature_abyss_watcher_small_angry.png",
            "skill": "images/creatures/abyss/creature_abyss_watcher_small_skill.png",
            "victory": "images/creatures/abyss/creature_abyss_watcher_small_victory.png",
            "defeat": "images/creatures/abyss/creature_abyss_watcher_small_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_abyss_watcher_small_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 작은 심연의 감시자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 작은 심연의 감시자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 작은 심연의 감시자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "screaming_root",
        name: "비명 지르는 뿌리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_screaming_root.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_screaming_root.png",
            "joy": "images/creatures/abyss/creature_screaming_root_joy.png",
            "sad": "images/creatures/abyss/creature_screaming_root_sad.png",
            "angry": "images/creatures/abyss/creature_screaming_root_angry.png",
            "skill": "images/creatures/abyss/creature_screaming_root_skill.png",
            "victory": "images/creatures/abyss/creature_screaming_root_victory.png",
            "defeat": "images/creatures/abyss/creature_screaming_root_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_screaming_root_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 비명 지르는 뿌리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 비명 지르는 뿌리, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 비명 지르는 뿌리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ghoul_scavenger",
        name: "시체 먹는 구울",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_ghoul_scavenger.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_ghoul_scavenger.png",
            "joy": "images/creatures/abyss/creature_ghoul_scavenger_joy.png",
            "sad": "images/creatures/abyss/creature_ghoul_scavenger_sad.png",
            "angry": "images/creatures/abyss/creature_ghoul_scavenger_angry.png",
            "skill": "images/creatures/abyss/creature_ghoul_scavenger_skill.png",
            "victory": "images/creatures/abyss/creature_ghoul_scavenger_victory.png",
            "defeat": "images/creatures/abyss/creature_ghoul_scavenger_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_ghoul_scavenger_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 시체 먹는 구울",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 시체 먹는 구울, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 시체 먹는 구울은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_tentacle",
        name: "공허의 촉수",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_tentacle.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_tentacle.png",
            "joy": "images/creatures/abyss/creature_void_tentacle_joy.png",
            "sad": "images/creatures/abyss/creature_void_tentacle_sad.png",
            "angry": "images/creatures/abyss/creature_void_tentacle_angry.png",
            "skill": "images/creatures/abyss/creature_void_tentacle_skill.png",
            "victory": "images/creatures/abyss/creature_void_tentacle_victory.png",
            "defeat": "images/creatures/abyss/creature_void_tentacle_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_tentacle_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 촉수",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 공허의 촉수, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 촉수은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sludge_blob",
        name: "오염된 슬러지",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_sludge_blob.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_sludge_blob.png",
            "joy": "images/creatures/abyss/creature_sludge_blob_joy.png",
            "sad": "images/creatures/abyss/creature_sludge_blob_sad.png",
            "angry": "images/creatures/abyss/creature_sludge_blob_angry.png",
            "skill": "images/creatures/abyss/creature_sludge_blob_skill.png",
            "victory": "images/creatures/abyss/creature_sludge_blob_victory.png",
            "defeat": "images/creatures/abyss/creature_sludge_blob_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_sludge_blob_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 오염된 슬러지",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 오염된 슬러지, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 오염된 슬러지은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bone_fragment_spirit",
        name: "뼈 조각 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_bone_fragment_spirit.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_bone_fragment_spirit.png",
            "joy": "images/creatures/abyss/creature_bone_fragment_spirit_joy.png",
            "sad": "images/creatures/abyss/creature_bone_fragment_spirit_sad.png",
            "angry": "images/creatures/abyss/creature_bone_fragment_spirit_angry.png",
            "skill": "images/creatures/abyss/creature_bone_fragment_spirit_skill.png",
            "victory": "images/creatures/abyss/creature_bone_fragment_spirit_victory.png",
            "defeat": "images/creatures/abyss/creature_bone_fragment_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_bone_fragment_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 뼈 조각 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 뼈 조각 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 뼈 조각 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "whispering_skull",
        name: "속삭이는 해골",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_whispering_skull.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_whispering_skull.png",
            "joy": "images/creatures/abyss/creature_whispering_skull_joy.png",
            "sad": "images/creatures/abyss/creature_whispering_skull_sad.png",
            "angry": "images/creatures/abyss/creature_whispering_skull_angry.png",
            "skill": "images/creatures/abyss/creature_whispering_skull_skill.png",
            "victory": "images/creatures/abyss/creature_whispering_skull_victory.png",
            "defeat": "images/creatures/abyss/creature_whispering_skull_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_whispering_skull_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 속삭이는 해골",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 속삭이는 해골, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 속삭이는 해골은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_larva",
        name: "공허의 유충",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_larva.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_larva.png",
            "joy": "images/creatures/abyss/creature_void_larva_joy.png",
            "sad": "images/creatures/abyss/creature_void_larva_sad.png",
            "angry": "images/creatures/abyss/creature_void_larva_angry.png",
            "skill": "images/creatures/abyss/creature_void_larva_skill.png",
            "victory": "images/creatures/abyss/creature_void_larva_victory.png",
            "defeat": "images/creatures/abyss/creature_void_larva_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_larva_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 공허의 유충",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 공허의 유충, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 공허의 유충은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dark_puddles",
        name: "검은 물웅덩이",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_dark_puddles.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_dark_puddles.png",
            "joy": "images/creatures/abyss/creature_dark_puddles_joy.png",
            "sad": "images/creatures/abyss/creature_dark_puddles_sad.png",
            "angry": "images/creatures/abyss/creature_dark_puddles_angry.png",
            "skill": "images/creatures/abyss/creature_dark_puddles_skill.png",
            "victory": "images/creatures/abyss/creature_dark_puddles_victory.png",
            "defeat": "images/creatures/abyss/creature_dark_puddles_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_dark_puddles_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 검은 물웅덩이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 검은 물웅덩이, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 검은 물웅덩이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_moth_small",
        name: "작은 공허 나방",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_void_moth_small.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_void_moth_small.png",
            "joy": "images/creatures/abyss/creature_void_moth_small_joy.png",
            "sad": "images/creatures/abyss/creature_void_moth_small_sad.png",
            "angry": "images/creatures/abyss/creature_void_moth_small_angry.png",
            "skill": "images/creatures/abyss/creature_void_moth_small_skill.png",
            "victory": "images/creatures/abyss/creature_void_moth_small_victory.png",
            "defeat": "images/creatures/abyss/creature_void_moth_small_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_void_moth_small_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 작은 공허 나방",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 작은 공허 나방, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 작은 공허 나방은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ink_squid_abyss",
        name: "심연 먹물 오징어",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,

        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_ink_squid_abyss.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_ink_squid_abyss.png",
            "joy": "images/creatures/abyss/creature_ink_squid_abyss_joy.png",
            "sad": "images/creatures/abyss/creature_ink_squid_abyss_sad.png",
            "angry": "images/creatures/abyss/creature_ink_squid_abyss_angry.png",
            "skill": "images/creatures/abyss/creature_ink_squid_abyss_skill.png",
            "victory": "images/creatures/abyss/creature_ink_squid_abyss_victory.png",
            "defeat": "images/creatures/abyss/creature_ink_squid_abyss_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_ink_squid_abyss_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, 심연 먹물 오징어",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 심연 먹물 오징어, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "심연의 깊은 곳에서 기어 올라온 혼돈의 존재입니다. 심연 먹물 오징어은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_jellyfish",
        name: "심연의 해파리",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Void"],
        baseStr: 6, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png"
    },
    {
        id: "void_crab",
        name: "공허 게",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Earth"],
        baseStr: 12, baseInt: 4,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png"
    },
    {
        id: "dark_eel",
        name: "암흑 장어",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Dark"],
        baseStr: 14, baseInt: 5,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png"
    },
    {
        id: "skeleton_fish",
        name: "해골 물고기",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Spirit", "Water"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png"
    },
    {
        id: "phantom_ray",
        name: "유령 가오리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Spirit", "Void"],
        baseStr: 10, baseInt: 18,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png"

    }
,
    {
        id: "wisp_faint",
        name: "희미한 위습",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_wisp_faint.png",
        sprites: {
            "idle": "images/creatures/abyss/creature_wisp_faint.png",
            "joy": "images/creatures/abyss/creature_wisp_faint.png", // Fallback
            "sad": "images/creatures/abyss/creature_wisp_faint.png", // Fallback
            "angry": "images/creatures/abyss/creature_wisp_faint.png", // Fallback
            "skill": "images/creatures/abyss/creature_wisp_faint.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 희미한 위습",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in abyss.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
];