import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ABYSS_CREATURES = [
    {
        id: "void_beast",
        name: "ê³µí—ˆ???¼ìˆ˜",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 18, baseInt: 18,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê³µí—ˆ???¼ìˆ˜",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ê³µí—ˆ???¼ìˆ˜, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ê³µí—ˆ???¼ìˆ˜, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ê³µí—ˆ???¼ìˆ˜, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê³µí—ˆ???¼ìˆ˜?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "shadow_assassin",
        name: "ê·¸ë¦¼???”ì‚´??,
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 15, baseInt: 15,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê·¸ë¦¼???”ì‚´??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê·¸ë¦¼???”ì‚´?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê·¸ë¦¼???”ì‚´?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "gargoyle_stone",
        name: "?ìƒ ê°€ê³ ì¼",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 12, baseInt: 12,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?ìƒ ê°€ê³ ì¼",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ìƒ ê°€ê³ ì¼, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?ìƒ ê°€ê³ ì¼?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "eye_of_chaos",
        name: "?¼ëˆ????,
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 12, baseInt: 12,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¼ëˆ????,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¼ëˆ???? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¼ëˆ???ˆì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_stalker",
        name: "?¬ì—°??ì¶”ì ??,
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 12, baseInt: 12,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¬ì—°??ì¶”ì ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬ì—°??ì¶”ì ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¬ì—°??ì¶”ì ?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dark_matter_slime",
        name: "?”í‘ ë¬¼ì§ˆ ?¬ë¼??,
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?”í‘ ë¬¼ì§ˆ ?¬ë¼??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?”í‘ ë¬¼ì§ˆ ?¬ë¼?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?”í‘ ë¬¼ì§ˆ ?¬ë¼?„ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_walker",
        name: "ê³µí—ˆ??ë³´í–‰??,
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê³µí—ˆ??ë³´í–‰??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê³µí—ˆ??ë³´í–‰?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê³µí—ˆ??ë³´í–‰?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_leech",
        name: "?¬ì—°??ê±°ë¨¸ë¦?,
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¬ì—°??ê±°ë¨¸ë¦?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬ì—°??ê±°ë¨¸ë¦? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¬ì—°??ê±°ë¨¸ë¦¬ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_emperor",
        name: "ê³µí—ˆ???¬ì œ ?ë ˆë³´ìŠ¤",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 30, baseInt: 30,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê³µí—ˆ???¬ì œ ?ë ˆë³´ìŠ¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ê³µí—ˆ???¬ì œ ?ë ˆë³´ìŠ¤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ê³µí—ˆ???¬ì œ ?ë ˆë³´ìŠ¤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ê³µí—ˆ???¬ì œ ?ë ˆë³´ìŠ¤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê³µí—ˆ???¬ì œ ?ë ˆë³´ìŠ¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dragon_chaos",
        name: "?¼ëˆ???©í¬ ?°ì•„ë§ˆíŠ¸",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 30, baseInt: 30,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¼ëˆ???©í¬ ?°ì•„ë§ˆíŠ¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¼ëˆ???©í¬ ?°ì•„ë§ˆíŠ¸, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¼ëˆ???©í¬ ?°ì•„ë§ˆíŠ¸, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¼ëˆ???©í¬ ?°ì•„ë§ˆíŠ¸, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¼ëˆ???©í¬ ?°ì•„ë§ˆíŠ¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kraken_worldstar",
        name: "?”ë“œ?¤í? ë£¨ë£¨",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 30, baseInt: 30,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?”ë“œ?¤í? ë£¨ë£¨",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?”ë“œ?¤í? ë£¨ë£¨, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?”ë“œ?¤í? ë£¨ë£¨, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?”ë“œ?¤í? ë£¨ë£¨, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?”ë“œ?¤í? ë£¨ë£¨?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_cthulhu",
        name: "ë³„ì˜ ì§€ë°°ì ?¬íˆ´ë£?,
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 30, baseInt: 30,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ë³„ì˜ ì§€ë°°ì ?¬íˆ´ë£?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ë³„ì˜ ì§€ë°°ì ?¬íˆ´ë£? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë³„ì˜ ì§€ë°°ì ?¬íˆ´ë£? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë³„ì˜ ì§€ë°°ì ?¬íˆ´ë£? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ë³„ì˜ ì§€ë°°ì ?¬íˆ´ë£¨ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_nyarlathotep",
        name: "ê¸°ì–´?¤ë‹ˆ???¼ëˆ ?ˆì•Œ?¼í† ??,
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 30, baseInt: 30,
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
            "gallery_lv1": "dating sim event, ê¸°ì–´?¤ë‹ˆ???¼ëˆ ?ˆì•Œ?¼í† ?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ê¸°ì–´?¤ë‹ˆ???¼ëˆ ?ˆì•Œ?¼í† ?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ê¸°ì–´?¤ë‹ˆ???¼ëˆ ?ˆì•Œ?¼í† ?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê¸°ì–´?¤ë‹ˆ???¼ëˆ ?ˆì•Œ?¼í† ?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "demon_king",
        name: "ë§ˆì™• ë°”ì•Œ",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 22, baseInt: 22,
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
            "gallery_lv1": "dating sim event, ë§ˆì™• ë°”ì•Œ, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë§ˆì™• ë°”ì•Œ, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë§ˆì™• ë°”ì•Œ, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ë§ˆì™• ë°”ì•Œ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_shub",
        name: "ë§?ë§ˆë¦¬ ?ˆë¼ë¥??ˆì? ?²ì˜ ?¼ì†Œ",
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 22, baseInt: 22,
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
            "gallery_lv1": "dating sim event, ë§?ë§ˆë¦¬ ?ˆë¼ë¥??ˆì? ?²ì˜ ?¼ì†Œ, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë§?ë§ˆë¦¬ ?ˆë¼ë¥??ˆì? ?²ì˜ ?¼ì†Œ, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë§?ë§ˆë¦¬ ?ˆë¼ë¥??ˆì? ?²ì˜ ?¼ì†Œ, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ë§?ë§ˆë¦¬ ?ˆë¼ë¥??ˆì? ?²ì˜ ?¼ì†Œ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_hastur",
        name: "?©ìƒ‰ ?·ì˜ ???˜ìŠ¤??,
        rarity: RANKS.SSR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 22, baseInt: 22,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?©ìƒ‰ ?·ì˜ ???˜ìŠ¤??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?©ìƒ‰ ?·ì˜ ???˜ìŠ¤?? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?©ìƒ‰ ?·ì˜ ???˜ìŠ¤?? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?©ìƒ‰ ?·ì˜ ???˜ìŠ¤?? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?©ìƒ‰ ?·ì˜ ???˜ìŠ¤?°ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "vampire_lord",
        name: "ì§„í™???¬ì™• ì¹´ë???,
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 18, baseInt: 18,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ì§„í™???¬ì™• ì¹´ë???,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ì§„í™???¬ì™• ì¹´ë??? shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ì§„í™???¬ì™• ì¹´ë??? intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ì§„í™???¬ì™• ì¹´ë??? seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ì§„í™???¬ì™• ì¹´ë??¼ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_dagon",
        name: "?¬í•´??ê±°ì‹  ?¤ê³¤",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 18, baseInt: 18,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¬í•´??ê±°ì‹  ?¤ê³¤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ?¬í•´??ê±°ì‹  ?¤ê³¤, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ?¬í•´??ê±°ì‹  ?¤ê³¤, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ?¬í•´??ê±°ì‹  ?¤ê³¤, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¬í•´??ê±°ì‹  ?¤ê³¤?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "knight_dullahan",
        name: "ë¨¸ë¦¬ ?†ëŠ” ê¸°ì‚¬ ?€?¼í•œ",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 18, baseInt: 18,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ë¨¸ë¦¬ ?†ëŠ” ê¸°ì‚¬ ?€?¼í•œ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, ë¨¸ë¦¬ ?†ëŠ” ê¸°ì‚¬ ?€?¼í•œ, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, ë¨¸ë¦¬ ?†ëŠ” ê¸°ì‚¬ ?€?¼í•œ, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, ë¨¸ë¦¬ ?†ëŠ” ê¸°ì‚¬ ?€?¼í•œ, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ë¨¸ë¦¬ ?†ëŠ” ê¸°ì‚¬ ?€?¼í•œ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "knight_skeleton",
        name: "?¤ì¼ˆ?ˆí†¤ ?˜ì´??,
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 15, baseInt: 15,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¤ì¼ˆ?ˆí†¤ ?˜ì´??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¤ì¼ˆ?ˆí†¤ ?˜ì´?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¤ì¼ˆ?ˆí†¤ ?˜ì´?¸ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mimic_box",
        name: "?ìš•???ì ë¯¸ë?",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 15, baseInt: 15,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?ìš•???ì ë¯¸ë?",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ìš•???ì ë¯¸ë?, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?ìš•???ì ë¯¸ë??€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "cursed_doll",
        name: "?€ì£¼ë°›?€ ?¸í˜•",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 15, baseInt: 15,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?€ì£¼ë°›?€ ?¸í˜•",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?€ì£¼ë°›?€ ?¸í˜•, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?€ì£¼ë°›?€ ?¸í˜•?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "eye_bat",
        name: "?¸ëˆˆë°•ì´ ë°•ì¥",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 12, baseInt: 12,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¸ëˆˆë°•ì´ ë°•ì¥",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¸ëˆˆë°•ì´ ë°•ì¥, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¸ëˆˆë°•ì´ ë°•ì¥?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ghost_lamp",
        name: "?í˜¼???±ë¶ˆ",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 12, baseInt: 12,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?í˜¼???±ë¶ˆ",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?í˜¼???±ë¶ˆ, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?í˜¼???±ë¶ˆ?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "deep_one_soldier",
        name: "?????„ì‚¬",
        rarity: RANKS.RARE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 12, baseInt: 12,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?????„ì‚¬",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?????„ì‚¬, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?????„ì‚¬?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "goblin_scout_new",
        name: "ê³ ë¸”ë¦??•ì°°ë³?,
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê³ ë¸”ë¦??•ì°°ë³?,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê³ ë¸”ë¦??•ì°°ë³? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê³ ë¸”ë¦??•ì°°ë³‘ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "shadow_lurker",
        name: "ê·¸ë¦¼??? ë³µ??,
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê·¸ë¦¼??? ë³µ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê·¸ë¦¼??? ë³µ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê·¸ë¦¼??? ë³µ?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_watcher_small",
        name: "?‘ì? ?¬ì—°??ê°ì‹œ??,
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?‘ì? ?¬ì—°??ê°ì‹œ??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?‘ì? ?¬ì—°??ê°ì‹œ?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?‘ì? ?¬ì—°??ê°ì‹œ?ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "screaming_root",
        name: "ë¹„ëª… ì§€ë¥´ëŠ” ë¿Œë¦¬",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ë¹„ëª… ì§€ë¥´ëŠ” ë¿Œë¦¬",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë¹„ëª… ì§€ë¥´ëŠ” ë¿Œë¦¬, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ë¹„ëª… ì§€ë¥´ëŠ” ë¿Œë¦¬?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ghoul_scavenger",
        name: "?œì²´ ë¨¹ëŠ” êµ¬ìš¸",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?œì²´ ë¨¹ëŠ” êµ¬ìš¸",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?œì²´ ë¨¹ëŠ” êµ¬ìš¸, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?œì²´ ë¨¹ëŠ” êµ¬ìš¸?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_tentacle",
        name: "ê³µí—ˆ??ì´‰ìˆ˜",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê³µí—ˆ??ì´‰ìˆ˜",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê³µí—ˆ??ì´‰ìˆ˜, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê³µí—ˆ??ì´‰ìˆ˜?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sludge_blob",
        name: "?¤ì—¼???¬ëŸ¬ì§€",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¤ì—¼???¬ëŸ¬ì§€",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¤ì—¼???¬ëŸ¬ì§€, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¤ì—¼???¬ëŸ¬ì§€?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bone_fragment_spirit",
        name: "ë¼?ì¡°ê° ?•ë ¹",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ë¼?ì¡°ê° ?•ë ¹",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ë¼?ì¡°ê° ?•ë ¹, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ë¼?ì¡°ê° ?•ë ¹?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "whispering_skull",
        name: "?ì‚­?´ëŠ” ?´ê³¨",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?ì‚­?´ëŠ” ?´ê³¨",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?ì‚­?´ëŠ” ?´ê³¨, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?ì‚­?´ëŠ” ?´ê³¨?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_larva",
        name: "ê³µí—ˆ??? ì¶©",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê³µí—ˆ??? ì¶©",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê³µí—ˆ??? ì¶©, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê³µí—ˆ??? ì¶©?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dark_puddles",
        name: "ê²€?€ ë¬¼ì›…?©ì´",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ê²€?€ ë¬¼ì›…?©ì´",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ê²€?€ ë¬¼ì›…?©ì´, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ê²€?€ ë¬¼ì›…?©ì´?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "void_moth_small",
        name: "?‘ì? ê³µí—ˆ ?˜ë°©",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?‘ì? ê³µí—ˆ ?˜ë°©",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?‘ì? ê³µí—ˆ ?˜ë°©, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?‘ì? ê³µí—ˆ ?˜ë°©?€(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ink_squid_abyss",
        name: "?¬ì—° ë¨¹ë¬¼ ?¤ì§•??,
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,

        elements: ["Dark"],
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, cell shaded, 2d game art, full body, dark fantasy, eldritch horror, purple and black energy, tentacles, void, Light, ?¬ì—° ë¨¹ë¬¼ ?¤ì§•??,
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, ?¬ì—° ë¨¹ë¬¼ ?¤ì§•?? energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "ë¯¸ì???ì¡´ì¬",
            "story": "?¬ì—°??ê¹Šì? ê³³ì—??ê¸°ì–´ ?¬ë¼???¼ëˆ??ì¡´ì¬?…ë‹ˆ?? ?¬ì—° ë¨¹ë¬¼ ?¤ì§•?´ì?(?? ?¹ë³„???¥ë ¥??ì§€?”ìŠµ?ˆë‹¤.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "abyss_jellyfish",
        name: "?¬ì—°???´íŒŒë¦?,
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Void"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png"
    },
    {
        id: "void_crab",
        name: "ê³µí—ˆ ê²?,
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Earth"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_void_crab.png"
    },
    {
        id: "dark_eel",
        name: "?”í‘ ?¥ì–´",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Dark"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_dark_eel.png"
    },
    {
        id: "skeleton_fish",
        name: "?´ê³¨ ë¬¼ê³ ê¸?,
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Spirit", "Water"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_skeleton_fish.png"
    },
    {
        id: "phantom_ray",
        name: "? ë ¹ ê°€?¤ë¦¬",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Spirit", "Void"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/abyss/creature_abyss_jellyfish.png"

    }
    ,
    {
        id: "wisp_faint",
        name: "?¬ë????„ìŠµ",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Earth"], // Default element
        baseStr: 8, baseInt: 8,
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
            "base": "anime style, ?¬ë????„ìŠµ",
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


