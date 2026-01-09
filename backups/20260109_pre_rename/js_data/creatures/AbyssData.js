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
        baseStr: 30, baseInt: 70,
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
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, void_emperor_erebus, female, (pale skin:1.3), (long black hair floating like smoke:1.3), (void eyes:1.2), wearing elegant black evening dress made of shadows, (high slit:1.3), (exposed back:1.2), (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), dark purple aura, void particles, mysterious and cold expression, abyss background",
            "idle": "standing pose, looking at viewer with cold eyes, floating slightly, shadows swirling, no text, no ui",
            "joy": "faint smile, closing eyes, hand on cheek, soft shadow particles, relaxing atmosphere, no text, no ui",
            "sad": "hugging self, looking down, shadows fading, lonely expression, pale face, no text, no ui",
            "angry": "eyes glowing purple, hair turning into spikes, void hole opening behind, dark energy explosion, menacing, no text, no ui",
            "skill": "raising both hands, summoning a massive black hole, cinematic lighting, warping reality, masterpiece, no text, no ui",
            "victory": "sitting on a throne of void, crossing legs, looking down arrogantly, swirling darkness, no text, no ui",
            "defeat": "kneeling, dress dissipating into smoke, vulnerable expression, covering body with arms, weak aura, no text, no ui",
            "gallery_lv1": "dating sim event, standing on a balcony overlooking the abyss, wind blowing dress, turning to look at viewer, melancholy but beautiful, detailed background, no text, no ui",
            "gallery_lv2": "dating sim event, creating a private space of darkness, sitting on a floating void chair, dress slipping off shoulder, beckoning viewer, seductive gaze, unknown light source, no text, no ui",
            "gallery_lv3": "dating sim event, engulfed in soft shadows, lying down, dress semi-transparent, heart shaped pupils in void eyes, reaching out, intimate and surreal, overwhelming affection, no text, no ui"
        },
        lore: {
            "title": "영원한 공허의 지배자",
            "story": "우주 창조 이전부터 존재했던 원초적 어둠의 화신. 모든 빛과 물질을 삼키는 공허 그 자체이며, 현현한 모습조차 실체가 아닌 그림자에 불과하다. 냉철하고 감정이 없어 보이나, 존재의 고독을 이해하는 자에게만 마음을 연다. 공허의 힘으로 만물을 무(無)로 되돌릴 수 있다.",
            "origin": "고대 신화 / 태초의 어둠",
            "personality": "Nihilistic & Solitary"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "공허는 모든 것의 시작이자 끝...",
                "존재한다는 것이 고통일까, 축복일까.",
                "이 어둠 속에서 나는 홀로 영원히..."
            ],
            interaction: [
                "만지다니... 네 손길마저 언젠간 사라질 텐데.",
                "온기... 이상하군. 이런 감각은 처음이야.",
                "공허를 두려워하지 않는 건가?"
            ],
            gift: [
                "선물? ...고마워. 오래 기억할게.",
                "이 작은 것이... 영원한 고독을 채워줄 수 있을까.",
                "네가 준 것만은 무로 돌리지 않을게."
            ],
            special: [
                "공허여, 만물을 집어삼켜라!",
                "존재의 끝을 보여주마!",
                "모든 것은 무로 돌아간다!"
            ]
        },
        lines: {
            normal: "공허 속에서도 너만은... 빛나 보여.",
            touch_head: "머리를... 쓰다듬는구나. 따뜻해.",
            touch_chest: "이 공허한 가슴에도 뭔가 차오르는구나...",
            touch_legs: "만지면 사라질 것 같지 않아?",
            touch_special: "너와 함께라면 영원한 고독도 견딜 수 있을 것 같아."
        }
    },
    {
        id: "dragon_chaos",
        name: "혼돈의 용희 티아마트",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 50, baseInt: 50,
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
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, tiamat_chaos, female, (beautiful exotic face:1.4), (purple skin:1.1), (dragon horns:1.3), (multiple dragon tails:1.4), long violet hair, glowing yellow eyes, wearing revealing dragon scale armor bikini, (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), (thick thighs:1.3), chaotic energy aura, sea of chaos background, powerful and motherly",
            "idle": "standing pose, hands on hips, confident smile, tails swaying, looking at viewer, no text, no ui",
            "joy": "laughing loudly, open arms, hugging pose, tails forming a heart, happy expression, no text, no ui",
            "sad": "looking down, tails drooping, tears in eyes, rain of chaos, gloomy atmosphere, no text, no ui",
            "angry": "roaring, dragon wings spreading, purple lightning, chaotic sea raging, fierce expression, no text, no ui",
            "skill": "summoning monster children, chaotic magic circle, cinematic lighting, extreme angle, masterpiece, no text, no ui",
            "victory": "floating in air, tails spread out like a throne, arrogant smile, holding a chaos orb, no text, no ui",
            "defeat": "collapsed on water surface, scales broken, armor torn, panting, humiliated look, no text, no ui",
            "gallery_lv1": "dating sim event, walking on a beach of chaos, playing with water, splashing viewer, playful smile, sunset background, no text, no ui",
            "gallery_lv2": "dating sim event, soaking in a chaos pool, wet skin, hair sticking to body, blushing, inviting viewer to join, steamy atmosphere, no text, no ui",
            "gallery_lv3": "dating sim event, lying on a nest of dragon tails, completely relaxed, armor removed, covering bits with tails, heart shaped pupils, motherly affection, no text, no ui"
        },
        lore: {
            "title": "태초의 혼돈",
            "story": "바빌로니아 신화의 원초적 여신. 바다와 혼돈을 상징하며, 모든 신들의 어머니였으나 자식들에게 배신당했다. 분노로 괴물들을 창조하여 신들과 전쟁을 벌였으나 패배했다. 이곳에서는 용의 모습으로 현현하여, 창조와 파괴의 양면성을 지녔다. 혼돈의 힘으로 새로운 생명을 창조할 수 있다.",
            "origin": "바빌로니아 신화 / 태초의 바다",
            "personality": "Motherly & Vengeful"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "혼돈이야말로 진정한 자유...",
                "모든 신의 어머니, 나를 기억하는 자 있나.",
                "창조와 파괴, 둘은 하나일 뿐."
            ],
            interaction: [
                "감히 어머니를 만지다니... 용기있구나.",
                "이 혼돈의 힘... 느껴지는가?",
                "내 자식들처럼 배신하지는 않겠지?"
            ],
            gift: [
                "선물? ...어머니에게 바치는 제물인가?",
                "오랜만에 받아보는 경의로군.",
                "좋아. 너만은 내 곁에 둬야겠어."
            ],
            special: [
                "혼돈이여, 세계를 집어삼켜라!",
                "태초의 분노를 보여주마!",
                "창조의 어머니가 파괴를 가져온다!"
            ]
        },
        lines: {
            normal: "모든 것은 혼돈에서 시작되었다.",
            touch_head: "뿔을 만지는구나... 대담해.",
            touch_chest: "어머니의 심장 고동을 느껴봐라.",
            touch_legs: "용의 비늘, 단단하지?",
            touch_special: "너는 내 새로운 자식이 되어줄래?"
        }
    },
    {
        id: "kraken_trainee",
        name: "연습생 루루",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ABYSS,
        elements: ["Water"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_lulu_01_trainee.png",
        evolvesTo: "kraken_idol",
        evolveConditions: {
            star: 3,
            level: 20,
            affectionLevel: 2
        },
        sprites: {
            "idle": "images/creatures/abyss/creature_lulu_01_trainee.png",
            "joy": "images/creatures/abyss/creature_lulu_01_trainee_joy.png",
            "sad": "images/creatures/abyss/creature_lulu_01_trainee_sad.png",
            "angry": "images/creatures/abyss/creature_lulu_01_trainee_angry.png",
            "skill": "images/creatures/abyss/creature_lulu_01_trainee_skill.png",
            "victory": "images/creatures/abyss/creature_lulu_01_trainee_victory.png",
            "defeat": "images/creatures/abyss/creature_lulu_01_trainee_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_lulu_01_trainee_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, abyss, cute trainee girl, tentacles hair, sweat drops, practice outfit, Water, 연습생 루루",
            "idle": "practice dance pose, determined face",
            "gallery_lv1": "selfie in practice room, tired but happy, mirror shot"
        },
        lore: {
            "title": "꿈꾸는 연습생",
            "story": "심연의 아이돌이 되기 위해 노력하는 루루의 데뷔 전 모습. 아직은 서툴지만 열정만큼은 누구에게도 뒤지지 않는다. 매일 10시간씩 춤 연습을 하고 있다.",
            "origin": "심연 엔터테인먼트 연습생",
            "personality": "Hardworking & Cute"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["하나 둘, 하나 둘!", "아직 멀었어... 더 연습해야 해!", "데뷔하면 꼭 응원해줄 거지?"],
            interaction: ["앗! 방해하면 안 돼~", "땀 냄새 나려나... 헤헤.", "이 동작이 잘 안 돼서 고민이야."],
            gift: ["우와! 이거 먹고 힘낼게!", "연습생한테 이런 걸 줘도 돼?", "매니저님한테는 비밀이야~"],
            special: ["언젠가 꼭, 최고의 무대에 설 거야!", "나를 지켜봐 줘, 프로듀서... 아, 아니 친구야!", "내 노래가 심연 끝까지 닿을 때까지!"]
        },
        lines: { normal: "연습만이 살길이다!" }
    },
    {
        id: "kraken_idol",
        name: "아이돌 루루",
        rarity: RANKS.SR,
        world: WORLDS.ABYSS,
        elements: ["Water"],
        baseStr: 12, baseInt: 12,
        image: "images/creatures/abyss/creature_lulu_02_idol.png",
        evolvesTo: "kraken_worldstar",
        evolveConditions: {
            star: 5,
            level: 40,
            affectionLevel: 5
        },
        sprites: {
            "idle": "images/creatures/abyss/creature_lulu_02_idol.png",
            "joy": "images/creatures/abyss/creature_lulu_02_idol_joy.png",
            "sad": "images/creatures/abyss/creature_lulu_02_idol_sad.png",
            "angry": "images/creatures/abyss/creature_lulu_02_idol_angry.png",
            "skill": "images/creatures/abyss/creature_lulu_02_idol_skill.png",
            "victory": "images/creatures/abyss/creature_lulu_02_idol_victory.png",
            "defeat": "images/creatures/abyss/creature_lulu_02_idol_defeat.png",
            "gallery": {
                "lv1": "images/creatures/abyss/creature_lulu_02_idol_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, abyss, idol girl, stage costume, frills and ribbons, microphone, Water, 아이돌 루루",
            "idle": "singing pose, wink, happy smile",
            "gallery_lv1": "concert stage, spotlight, singing to fans"
        },
        lore: {
            "title": "심연의 샛별",
            "story": "긴 연습생 생활 끝에 데뷔한 루루. 상큼하고 발랄한 매력으로 심연의 생물들을 사로잡고 있다. 팬레터를 읽는 것이 취미이며, 악플에는 조금 상처받는다.",
            "origin": "심연 엔터테인먼트 소속 아이돌",
            "personality": "Cheerful & Charming"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: ["안녕! 루루의 무대에 온 걸 환영해~", "오늘 의상 어때? 귀엽지?", "팬 서비스는 확실하게!"],
            interaction: ["꺄악! 스킨십은 금지라구~", "헤헤, 사인해 줄까?", "카메라가 보고 있어! 조심해~"],
            gift: ["어머! 팬의 선물은 언제나 감동이야!", "이거 SNS에 올려도 돼?", "사랑해! 넌 최고의 팬이야!"],
            special: ["무대 위에서 난 가장 빛나!", "모두의 사랑이 나를 강하게 만들어!", "앵콜! 앵콜! 더 크게 외쳐봐!"]
        },
        lines: { normal: "루루~ 비~ 빔!" }
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
            "title": "심해의 아이돌",
            "story": "크라켄의 후예로 태어났으나, 심연의 어둠을 싫어하여 표층으로 올라왔다. 우연히 인간세계의 아이돌 문화를 접하고 매료되어, 자신도 '월드스타'가 되기로 결심했다. 촉수를 이용한 화려한 춤과 공연으로 유명하며, 팬들을 위해서라면 무엇이든 한다. 밝고 긍정적이지만, 무대 뒤에서는 외로움을 느낀다.",
            "origin": "북유럽 전설 / 심해",
            "personality": "Cheerful & Lonely"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "오늘도 팬분들을 위해 최선을~!",
                "루루의 공연, 기대해주세요!",
                "촉수 댄스, 연습 중이에요!"
            ],
            interaction: [
                "와! 팬이신가요? 반가워요!",
                "만져도 돼요! 루루는 팬서비스를 아끼지 않아요~",
                "헤헤, 간지럽네요!"
            ],
            gift: [
                "팬레터? 선물? 정말요? 감동...",
                "루루를 위해 준비해주신 거예요? 최고!",
                "이건 평생 보관할게요! 고마워요!"
            ],
            special: [
                "루루의 스페셜 스테이지, 시작!",
                "월드스타의 진가를 보여드릴게요!",
                "모두 루루와 함께 춤춰요!"
            ]
        },
        lines: {
            normal: "루루는 모두의 아이돌이에요!",
            touch_head: "머리 쓰다듬기? 루루, 좋아요!",
            touch_chest: "심장이 두근두근... 무대 전 같아요.",
            touch_legs: "촉수도 만져보실래요? 부드러워요!",
            touch_special: "이런 팬서비스는 당신만 특별해요...♡"
        }
    },
    {
        id: "god_cthulhu",
        name: "별의 지배자 크툴루",
        rarity: RANKS.UR,
        world: WORLDS.ABYSS,
        elements: ["Light"],
        baseStr: 60, baseInt: 40,
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
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, cthulhu_girl, female, (cute sleepy face:1.3), (green tentacle hair:1.4), (dragon wings:1.2), green eyes, wearing loose oversized white shirt (boyfriend shirt), (no pants), (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), (thick thighs:1.3), holding a cute octopus plushie, underwater city background (R'lyeh), bubbles, mysterious lighting",
            "idle": "standing pose, yawning, rubbing eyes, sleepy expression, cute pose, no text, no ui",
            "joy": "hugging plushie tightly, smiling happily, bubbles floating, eyes closed in delight, no text, no ui",
            "sad": "sitting on ground, hugging knees, looking down, plushie on floor, gloomy bubbles, no text, no ui",
            "angry": "tentacles flaring up, eyes glowing red, dark aura, shadows looming, scary expression, no text, no ui",
            "skill": "summoning massive tentacles from ground, cinematic angle, green energy blast, masterpiece, fierce look, no text, no ui",
            "victory": "sleeping floating in air, drooling slightly, peaceful expression, victory peace sign in sleep, no text, no ui",
            "defeat": "lying on side, shirt torn, covered in ink/slime, crying, plushie torn, messy hair, no text, no ui",
            "gallery_lv1": "dating sim event, sitting on a rock in R'lyeh, dipping feet in water, looking at viewer curiously, tilting head, innocent look, no text, no ui",
            "gallery_lv2": "dating sim event, waking up in bed (underwater room), stretching arms, shirt lifting up, exposed midriff and panties, sleepy blush, morning light, no text, no ui",
            "gallery_lv3": "dating sim event, tentacles gently wrapping around viewer (POV), pulling viewer into a hug, heart shaped pupils, heavy blush, mouth open, overwhelming obsession, no text, no ui"
        },
        lore: {
            "title": "잠들어 꿈꾸는 자",
            "story": "태평양 깊은 곳, R'lyeh에 잠들어 있는 고대의 신. 인간의 이성으로는 이해할 수 없는 존재이며, 그의 꿈만으로도 세상에 영향을 미친다. 수많은 狂信徒들이 그의 부활을 기다리고 있다. 이곳에서는 일부만 현현하여 활동하나, 그것만으로도 충분히 강대하다. 촉수와 거대한 날개를 지녔으며, 보는 것만으로도 정신이 무너진다.",
            "origin": "크툴루 신화 / R'lyeh",
            "personality": "Incomprehensible & Ancient"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "Ph'nglui mglw'nafh...",
                "꿈속에서 기다리고 있었다.",
                "인간의 이성은 한계가 있지..."
            ],
            interaction: [
                "감히 나를 만지다니... 광기가 필요한가?",
                "이 촉수의 감촉, 이해할 수 없을 것이다.",
                "네 정신이 무너지지 않아 다행이로군."
            ],
            gift: [
                "선물? 흥미로운 행위구나.",
                "인간의 물건... 오래간만에 보는군.",
                "이것으로 내 심기를 건드릴 생각인가?"
            ],
            special: [
                "R'lyeh가 깨어난다!",
                "광기여, 세상을 집어삼켜라!",
                "고대의 힘을 보여주마!"
            ]
        },
        lines: {
            normal: "Cthulhu fhtagn...",
            touch_head: "머리를... 아니, 이것은 촉수다.",
            touch_chest: "이 심장은 영겁의 시간을 견뎌왔다.",
            touch_legs: "날개를 만지고 싶은가?",
            touch_special: "네 정신이 무너지지 않는 것이 신기하군."
        }
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
        image: "images/creatures/abyss/creature_void_crab.png"
    },
    {
        id: "dark_eel",
        name: "암흑 장어",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Water", "Dark"],
        baseStr: 14, baseInt: 5,
        image: "images/creatures/abyss/creature_dark_eel.png"
    },
    {
        id: "skeleton_fish",
        name: "해골 물고기",
        rarity: RANKS.NORMAL,
        world: WORLDS.ABYSS,
        elements: ["Spirit", "Water"],
        baseStr: 8, baseInt: 8,
        image: "images/creatures/abyss/creature_skeleton_fish.png"
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