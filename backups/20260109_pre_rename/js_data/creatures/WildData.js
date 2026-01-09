import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const WILD_CREATURES = [
    {
        id: "beast_leviathan",
        name: "심해의 재앙 레비아탄",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_beast_leviathan.png",
        sprites: {
            "idle": "images/creatures/wild/creature_beast_leviathan.png",
            "joy": "images/creatures/wild/creature_beast_leviathan_joy.png",
            "sad": "images/creatures/wild/creature_beast_leviathan_sad.png",
            "angry": "images/creatures/wild/creature_beast_leviathan_angry.png",
            "skill": "images/creatures/wild/creature_beast_leviathan_skill.png",
            "victory": "images/creatures/wild/creature_beast_leviathan_victory.png",
            "defeat": "images/creatures/wild/creature_beast_leviathan_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_beast_leviathan_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_beast_leviathan_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_beast_leviathan_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 심해의 재앙 레비아탄",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 심해의 재앙 레비아탄, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 심해의 재앙 레비아탄, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 심해의 재앙 레비아탄, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 심해의 재앙 레비아탄은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "beast_ziz",
        name: "천공의 날개 지즈",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_beast_ziz.png",
        sprites: {
            "idle": "images/creatures/wild/creature_beast_ziz.png",
            "joy": "images/creatures/wild/creature_beast_ziz_joy.png",
            "sad": "images/creatures/wild/creature_beast_ziz_sad.png",
            "angry": "images/creatures/wild/creature_beast_ziz_angry.png",
            "skill": "images/creatures/wild/creature_beast_ziz_skill.png",
            "victory": "images/creatures/wild/creature_beast_ziz_victory.png",
            "defeat": "images/creatures/wild/creature_beast_ziz_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_beast_ziz_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_beast_ziz_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_beast_ziz_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 천공의 날개 지즈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 천공의 날개 지즈, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 천공의 날개 지즈, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 천공의 날개 지즈, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 천공의 날개 지즈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fairy_queen_titania",
        name: "요정 여왕 티타니아",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_fairy_queen_titania.png",
        sprites: {
            "idle": "images/creatures/wild/creature_fairy_queen_titania.png",
            "joy": "images/creatures/wild/creature_fairy_queen_titania_joy.png",
            "sad": "images/creatures/wild/creature_fairy_queen_titania_sad.png",
            "angry": "images/creatures/wild/creature_fairy_queen_titania_angry.png",
            "skill": "images/creatures/wild/creature_fairy_queen_titania_skill.png",
            "victory": "images/creatures/wild/creature_fairy_queen_titania_victory.png",
            "defeat": "images/creatures/wild/creature_fairy_queen_titania_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_fairy_queen_titania_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_fairy_queen_titania_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_fairy_queen_titania_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 요정 여왕 티타니아",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 요정 여왕 티타니아, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 요정 여왕 티타니아, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 요정 여왕 티타니아, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 요정 여왕 티타니아은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "griffin_gold",
        name: "황금 그리폰",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_griffin_gold.png",
        sprites: {
            "idle": "images/creatures/wild/creature_griffin_gold.png",
            "joy": "images/creatures/wild/creature_griffin_gold_joy.png",
            "sad": "images/creatures/wild/creature_griffin_gold_sad.png",
            "angry": "images/creatures/wild/creature_griffin_gold_angry.png",
            "skill": "images/creatures/wild/creature_griffin_gold_skill.png",
            "victory": "images/creatures/wild/creature_griffin_gold_victory.png",
            "defeat": "images/creatures/wild/creature_griffin_gold_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_griffin_gold_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_griffin_gold_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_griffin_gold_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 황금 그리폰",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 황금 그리폰, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 황금 그리폰, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 황금 그리폰, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 황금 그리폰은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "turtle_ancient_wild",
        name: "만년 고대 거북",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_turtle_ancient_wild.png",
        sprites: {
            "idle": "images/creatures/wild/creature_turtle_ancient_wild.png",
            "joy": "images/creatures/wild/creature_turtle_ancient_wild_joy.png",
            "sad": "images/creatures/wild/creature_turtle_ancient_wild_sad.png",
            "angry": "images/creatures/wild/creature_turtle_ancient_wild_angry.png",
            "skill": "images/creatures/wild/creature_turtle_ancient_wild_skill.png",
            "victory": "images/creatures/wild/creature_turtle_ancient_wild_victory.png",
            "defeat": "images/creatures/wild/creature_turtle_ancient_wild_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_turtle_ancient_wild_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_turtle_ancient_wild_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_turtle_ancient_wild_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 만년 고대 거북",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 만년 고대 거북, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 만년 고대 거북, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 만년 고대 거북, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 만년 고대 거북은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dryad_queen",
        name: "드라이어드 여왕",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_dryad_queen.png",
        sprites: {
            "idle": "images/creatures/wild/creature_dryad_queen.png",
            "joy": "images/creatures/wild/creature_dryad_queen_joy.png",
            "sad": "images/creatures/wild/creature_dryad_queen_sad.png",
            "angry": "images/creatures/wild/creature_dryad_queen_angry.png",
            "skill": "images/creatures/wild/creature_dryad_queen_skill.png",
            "victory": "images/creatures/wild/creature_dryad_queen_victory.png",
            "defeat": "images/creatures/wild/creature_dryad_queen_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_dryad_queen_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_dryad_queen_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_dryad_queen_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 드라이어드 여왕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 드라이어드 여왕, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 드라이어드 여왕, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 드라이어드 여왕, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 드라이어드 여왕은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mantis_warrior",
        name: "사마귀 무사",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_mantis_warrior.png",
        sprites: {
            "idle": "images/creatures/wild/creature_mantis_warrior.png",
            "joy": "images/creatures/wild/creature_mantis_warrior_joy.png",
            "sad": "images/creatures/wild/creature_mantis_warrior_sad.png",
            "angry": "images/creatures/wild/creature_mantis_warrior_angry.png",
            "skill": "images/creatures/wild/creature_mantis_warrior_skill.png",
            "victory": "images/creatures/wild/creature_mantis_warrior_victory.png",
            "defeat": "images/creatures/wild/creature_mantis_warrior_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_mantis_warrior_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 사마귀 무사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 사마귀 무사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 사마귀 무사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "orchid_mantis",
        name: "난초 사마귀",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_orchid_mantis.png",
        sprites: {
            "idle": "images/creatures/wild/creature_orchid_mantis.png",
            "joy": "images/creatures/wild/creature_orchid_mantis_joy.png",
            "sad": "images/creatures/wild/creature_orchid_mantis_sad.png",
            "angry": "images/creatures/wild/creature_orchid_mantis_angry.png",
            "skill": "images/creatures/wild/creature_orchid_mantis_skill.png",
            "victory": "images/creatures/wild/creature_orchid_mantis_victory.png",
            "defeat": "images/creatures/wild/creature_orchid_mantis_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_orchid_mantis_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 난초 사마귀",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 난초 사마귀, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 난초 사마귀은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "crystal_crab",
        name: "수정 게",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_crystal_crab.png",
        sprites: {
            "idle": "images/creatures/wild/creature_crystal_crab.png",
            "joy": "images/creatures/wild/creature_crystal_crab_joy.png",
            "sad": "images/creatures/wild/creature_crystal_crab_sad.png",
            "angry": "images/creatures/wild/creature_crystal_crab_angry.png",
            "skill": "images/creatures/wild/creature_crystal_crab_skill.png",
            "victory": "images/creatures/wild/creature_crystal_crab_victory.png",
            "defeat": "images/creatures/wild/creature_crystal_crab_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_crystal_crab_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 수정 게",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 수정 게, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 수정 게은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "electric_eel_king",
        name: "번개 장어 왕",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_electric_eel_king.png",
        sprites: {
            "idle": "images/creatures/wild/creature_electric_eel_king.png",
            "joy": "images/creatures/wild/creature_electric_eel_king_joy.png",
            "sad": "images/creatures/wild/creature_electric_eel_king_sad.png",
            "angry": "images/creatures/wild/creature_electric_eel_king_angry.png",
            "skill": "images/creatures/wild/creature_electric_eel_king_skill.png",
            "victory": "images/creatures/wild/creature_electric_eel_king_victory.png",
            "defeat": "images/creatures/wild/creature_electric_eel_king_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_electric_eel_king_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 번개 장어 왕",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 번개 장어 왕, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 번개 장어 왕은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magma_slime_giant",
        name: "대형 마그마 슬라임",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_magma_slime_giant.png",
        sprites: {
            "idle": "images/creatures/wild/creature_magma_slime_giant.png",
            "joy": "images/creatures/wild/creature_magma_slime_giant_joy.png",
            "sad": "images/creatures/wild/creature_magma_slime_giant_sad.png",
            "angry": "images/creatures/wild/creature_magma_slime_giant_angry.png",
            "skill": "images/creatures/wild/creature_magma_slime_giant_skill.png",
            "victory": "images/creatures/wild/creature_magma_slime_giant_victory.png",
            "defeat": "images/creatures/wild/creature_magma_slime_giant_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_magma_slime_giant_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 대형 마그마 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 대형 마그마 슬라임, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 대형 마그마 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fossil_stone",
        name: "움직이는 화석",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_fossil_stone.png",
        sprites: {
            "idle": "images/creatures/wild/creature_fossil_stone.png",
            "joy": "images/creatures/wild/creature_fossil_stone_joy.png",
            "sad": "images/creatures/wild/creature_fossil_stone_sad.png",
            "angry": "images/creatures/wild/creature_fossil_stone_angry.png",
            "skill": "images/creatures/wild/creature_fossil_stone_skill.png",
            "victory": "images/creatures/wild/creature_fossil_stone_victory.png",
            "defeat": "images/creatures/wild/creature_fossil_stone_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_fossil_stone_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 움직이는 화석",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 움직이는 화석, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 움직이는 화석은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mist_crawler",
        name: "안개 속의 배회자",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_mist_crawler.png",
        sprites: {
            "idle": "images/creatures/wild/creature_mist_crawler.png",
            "joy": "images/creatures/wild/creature_mist_crawler_joy.png",
            "sad": "images/creatures/wild/creature_mist_crawler_sad.png",
            "angry": "images/creatures/wild/creature_mist_crawler_angry.png",
            "skill": "images/creatures/wild/creature_mist_crawler_skill.png",
            "victory": "images/creatures/wild/creature_mist_crawler_victory.png",
            "defeat": "images/creatures/wild/creature_mist_crawler_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_mist_crawler_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 안개 속의 배회자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 안개 속의 배회자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 안개 속의 배회자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "forest_guardian",
        name: "숲의 수호자",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_forest_guardian.png",
        sprites: {
            "idle": "images/creatures/wild/creature_forest_guardian.png",
            "joy": "images/creatures/wild/creature_forest_guardian_joy.png",
            "sad": "images/creatures/wild/creature_forest_guardian_sad.png",
            "angry": "images/creatures/wild/creature_forest_guardian_angry.png",
            "skill": "images/creatures/wild/creature_forest_guardian_skill.png",
            "victory": "images/creatures/wild/creature_forest_guardian_victory.png",
            "defeat": "images/creatures/wild/creature_forest_guardian_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_forest_guardian_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 숲의 수호자",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 숲의 수호자, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 숲의 수호자은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sand_prowler",
        name: "모래 잠복꾼",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_sand_prowler.png",
        sprites: {
            "idle": "images/creatures/wild/creature_sand_prowler.png",
            "joy": "images/creatures/wild/creature_sand_prowler_joy.png",
            "sad": "images/creatures/wild/creature_sand_prowler_sad.png",
            "angry": "images/creatures/wild/creature_sand_prowler_angry.png",
            "skill": "images/creatures/wild/creature_sand_prowler_skill.png",
            "victory": "images/creatures/wild/creature_sand_prowler_victory.png",
            "defeat": "images/creatures/wild/creature_sand_prowler_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_sand_prowler_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 모래 잠복꾼",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 모래 잠복꾼, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 모래 잠복꾼은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "spark_mouse",
        name: "번개 생쥐",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_spark_mouse.png",
        sprites: {
            "idle": "images/creatures/wild/creature_spark_mouse.png",
            "joy": "images/creatures/wild/creature_spark_mouse_joy.png",
            "sad": "images/creatures/wild/creature_spark_mouse_sad.png",
            "angry": "images/creatures/wild/creature_spark_mouse_angry.png",
            "skill": "images/creatures/wild/creature_spark_mouse_skill.png",
            "victory": "images/creatures/wild/creature_spark_mouse_victory.png",
            "defeat": "images/creatures/wild/creature_spark_mouse_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_spark_mouse_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 번개 생쥐",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 번개 생쥐, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 번개 생쥐은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "boulder_beetle",
        name: "바위 딱정벌레",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_boulder_beetle.png",
        sprites: {
            "idle": "images/creatures/wild/creature_boulder_beetle.png",
            "joy": "images/creatures/wild/creature_boulder_beetle_joy.png",
            "sad": "images/creatures/wild/creature_boulder_beetle_sad.png",
            "angry": "images/creatures/wild/creature_boulder_beetle_angry.png",
            "skill": "images/creatures/wild/creature_boulder_beetle_skill.png",
            "victory": "images/creatures/wild/creature_boulder_beetle_victory.png",
            "defeat": "images/creatures/wild/creature_boulder_beetle_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_boulder_beetle_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 바위 딱정벌레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 바위 딱정벌레, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 바위 딱정벌레은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "thorny_vine",
        name: "가시 덩굴",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_thorny_vine.png",
        sprites: {
            "idle": "images/creatures/wild/creature_thorny_vine.png",
            "joy": "images/creatures/wild/creature_thorny_vine_joy.png",
            "sad": "images/creatures/wild/creature_thorny_vine_sad.png",
            "angry": "images/creatures/wild/creature_thorny_vine_angry.png",
            "skill": "images/creatures/wild/creature_thorny_vine_skill.png",
            "victory": "images/creatures/wild/creature_thorny_vine_victory.png",
            "defeat": "images/creatures/wild/creature_thorny_vine_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_thorny_vine_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 가시 덩굴",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 가시 덩굴, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 가시 덩굴은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "unicorn_young",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_unicorn_young.png",
        sprites: {
            "idle": "images/creatures/wild/creature_unicorn_young.png",
            "joy": "images/creatures/wild/creature_unicorn_young_joy.png",
            "sad": "images/creatures/wild/creature_unicorn_young_sad.png",
            "angry": "images/creatures/wild/creature_unicorn_young_angry.png",
            "skill": "images/creatures/wild/creature_unicorn_young_skill.png",
            "victory": "images/creatures/wild/creature_unicorn_young_victory.png",
            "defeat": "images/creatures/wild/creature_unicorn_young_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_unicorn_young_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "seedling_spirit",
        name: "새싹 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_seedling_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_seedling_spirit.png",
            "joy": "images/creatures/wild/creature_seedling_spirit_joy.png",
            "sad": "images/creatures/wild/creature_seedling_spirit_sad.png",
            "angry": "images/creatures/wild/creature_seedling_spirit_angry.png",
            "skill": "images/creatures/wild/creature_seedling_spirit_skill.png",
            "victory": "images/creatures/wild/creature_seedling_spirit_victory.png",
            "defeat": "images/creatures/wild/creature_seedling_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_seedling_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 새싹 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 새싹 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 새싹 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "caterpillar_fat",
        name: "통통한 애벌레",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_caterpillar_fat.png",
        sprites: {
            "idle": "images/creatures/wild/creature_caterpillar_fat.png",
            "joy": "images/creatures/wild/creature_caterpillar_fat_joy.png",
            "sad": "images/creatures/wild/creature_caterpillar_fat_sad.png",
            "angry": "images/creatures/wild/creature_caterpillar_fat_angry.png",
            "skill": "images/creatures/wild/creature_caterpillar_fat_skill.png",
            "victory": "images/creatures/wild/creature_caterpillar_fat_victory.png",
            "defeat": "images/creatures/wild/creature_caterpillar_fat_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_caterpillar_fat_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 통통한 애벌레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 통통한 애벌레, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 통통한 애벌레은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "tadpole_wiggle",
        name: "꼬물거리는 올챙이",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_tadpole_wiggle.png",
        sprites: {
            "idle": "images/creatures/wild/creature_tadpole_wiggle.png",
            "joy": "images/creatures/wild/creature_tadpole_wiggle_joy.png",
            "sad": "images/creatures/wild/creature_tadpole_wiggle_sad.png",
            "angry": "images/creatures/wild/creature_tadpole_wiggle_angry.png",
            "skill": "images/creatures/wild/creature_tadpole_wiggle_skill.png",
            "victory": "images/creatures/wild/creature_tadpole_wiggle_victory.png",
            "defeat": "images/creatures/wild/creature_tadpole_wiggle_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_tadpole_wiggle_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 꼬물거리는 올챙이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 꼬물거리는 올챙이, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 꼬물거리는 올챙이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "leaf_insect",
        name: "나뭇잎 벌레",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_leaf_insect.png",
        sprites: {
            "idle": "images/creatures/wild/creature_leaf_insect.png",
            "joy": "images/creatures/wild/creature_leaf_insect_joy.png",
            "sad": "images/creatures/wild/creature_leaf_insect_sad.png",
            "angry": "images/creatures/wild/creature_leaf_insect_angry.png",
            "skill": "images/creatures/wild/creature_leaf_insect_skill.png",
            "victory": "images/creatures/wild/creature_leaf_insect_victory.png",
            "defeat": "images/creatures/wild/creature_leaf_insect_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_leaf_insect_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 나뭇잎 벌레",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 나뭇잎 벌레, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 나뭇잎 벌레은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "willOWisp_green",
        name: "초록 도깨비불",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_willOWisp_green.png",
        sprites: {
            "idle": "images/creatures/wild/creature_willOWisp_green.png",
            "joy": "images/creatures/wild/creature_willOWisp_green_joy.png",
            "sad": "images/creatures/wild/creature_willOWisp_green_sad.png",
            "angry": "images/creatures/wild/creature_willOWisp_green_angry.png",
            "skill": "images/creatures/wild/creature_willOWisp_green_skill.png",
            "victory": "images/creatures/wild/creature_willOWisp_green_victory.png",
            "defeat": "images/creatures/wild/creature_willOWisp_green_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_willOWisp_green_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 초록 도깨비불",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 초록 도깨비불, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 초록 도깨비불은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sun_flower_spirit",
        name: "해바라기 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_sun_flower_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_sun_flower_spirit.png",
            "joy": "images/creatures/wild/creature_sun_flower_spirit_joy.png",
            "sad": "images/creatures/wild/creature_sun_flower_spirit_sad.png",
            "angry": "images/creatures/wild/creature_sun_flower_spirit_angry.png",
            "skill": "images/creatures/wild/creature_sun_flower_spirit_skill.png",
            "victory": "images/creatures/wild/creature_sun_flower_spirit_victory.png",
            "defeat": "images/creatures/wild/creature_sun_flower_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_sun_flower_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 해바라기 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 해바라기 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 해바라기 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "moon_flower_spirit",
        name: "달맞이꽃 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_moon_flower_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_moon_flower_spirit.png",
            "joy": "images/creatures/wild/creature_moon_flower_spirit_joy.png",
            "sad": "images/creatures/wild/creature_moon_flower_spirit_sad.png",
            "angry": "images/creatures/wild/creature_moon_flower_spirit_angry.png",
            "skill": "images/creatures/wild/creature_moon_flower_spirit_skill.png",
            "victory": "images/creatures/wild/creature_moon_flower_spirit_victory.png",
            "defeat": "images/creatures/wild/creature_moon_flower_spirit_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_moon_flower_spirit_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 달맞이꽃 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 달맞이꽃 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 달맞이꽃 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "desert_scorpion",
        name: "사막 전갈",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_desert_scorpion.png",
        sprites: {
            "idle": "images/creatures/wild/creature_desert_scorpion.png",
            "joy": "images/creatures/wild/creature_desert_scorpion_joy.png",
            "sad": "images/creatures/wild/creature_desert_scorpion_sad.png",
            "angry": "images/creatures/wild/creature_desert_scorpion_angry.png",
            "skill": "images/creatures/wild/creature_desert_scorpion_skill.png",
            "victory": "images/creatures/wild/creature_desert_scorpion_victory.png",
            "defeat": "images/creatures/wild/creature_desert_scorpion_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_desert_scorpion_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 사막 전갈",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 사막 전갈, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 사막 전갈은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "panda_warrior",
        name: "판다 전사",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_panda_warrior.png",
        sprites: {
            "idle": "images/creatures/wild/creature_panda_warrior.png",
            "joy": "images/creatures/wild/creature_panda_warrior_joy.png",
            "sad": "images/creatures/wild/creature_panda_warrior_sad.png",
            "angry": "images/creatures/wild/creature_panda_warrior_angry.png",
            "skill": "images/creatures/wild/creature_panda_warrior_skill.png",
            "victory": "images/creatures/wild/creature_panda_warrior_victory.png",
            "defeat": "images/creatures/wild/creature_panda_warrior_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_panda_warrior_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 판다 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 판다 전사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 판다 전사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "creator_gaia",
        name: "창조주 가이아",
        rarity: RANKS.UR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_creator_gaia.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creator_gaia.png",
            "joy": "images/creatures/wild/creature_creator_gaia_joy.png",
            "sad": "images/creatures/wild/creature_creator_gaia_sad.png",
            "angry": "images/creatures/wild/creature_creator_gaia_angry.png",
            "skill": "images/creatures/wild/creature_creator_gaia_skill.png",
            "victory": "images/creatures/wild/creature_creator_gaia_victory.png",
            "defeat": "images/creatures/wild/creature_creator_gaia_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_creator_gaia_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_creator_gaia_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_creator_gaia_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 창조주 가이아",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 창조주 가이아, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 창조주 가이아, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 창조주 가이아, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "대지의 어머니",
            "story": "그리스 신화의 원초적 대지의 여신. 모든 생명의 근원이자 어머니로, 산과 바다, 하늘을 낳았다. 자연 그 자체이며, 생명을 주고 거두는 힘을 지녔다. 온화하나 자연을 해치는 자에게는 무자비하다. 대지와 하나가 되어 모든 생명을 느끼며, 자연의 균형을 지킨다.",
            "origin": "그리스 신화 / 태초의 대지",
            "personality": "Nurturing & Protective"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "대지가 숨쉬고 있어.",
                "모든 생명은 나로부터 왔지.",
                "자연의 품은 따뜻해."
            ],
            interaction: [
                "어머니를 만지는구나... 따뜻해.",
                "생명의 온기가 느껴져.",
                "자연의 일부인 너도 나의 자식이야."
            ],
            gift: [
                "자연의 선물이구나. 고마워.",
                "대지가 기쁘게 받아줄게.",
                "생명을 소중히 여기는 마음, 아름다워."
            ],
            special: [
                "대지여, 내 힘을 보여라!",
                "자연이 분노한다!",
                "생명의 근원을 보여주마!"
            ]
        },
        lines: {
            normal: "모든 생명은 대지로 돌아가지.",
            touch_head: "쓰다듬어주는구나... 편안해.",
            touch_chest: "어머니의 심장 고동, 들리니?",
            touch_legs: "대지와 하나가 되어봐.",
            touch_special: "내 모든 자식 중에서도 너는 특별해."
        }
    },
    {
        id: "dragon_drake",
        name: "폭염의 패왕 이그니스",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_dragon_drake.png",
        sprites: {
            "idle": "images/creatures/wild/creature_dragon_drake.png",
            "joy": "images/creatures/wild/creature_dragon_drake_joy.png",
            "sad": "images/creatures/wild/creature_dragon_drake_sad.png",
            "angry": "images/creatures/wild/creature_dragon_drake_angry.png",
            "skill": "images/creatures/wild/creature_dragon_drake_skill.png",
            "victory": "images/creatures/wild/creature_dragon_drake_victory.png",
            "defeat": "images/creatures/wild/creature_dragon_drake_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_dragon_drake_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_dragon_drake_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_dragon_drake_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 폭염의 패왕 이그니스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 폭염의 패왕 이그니스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 폭염의 패왕 이그니스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 폭염의 패왕 이그니스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 폭염의 패왕 이그니스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "beast_behemoth",
        name: "대지의 짐승 베히모스",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_beast_behemoth.png",
        sprites: {
            "idle": "images/creatures/wild/creature_beast_behemoth.png",
            "joy": "images/creatures/wild/creature_beast_behemoth_joy.png",
            "sad": "images/creatures/wild/creature_beast_behemoth_sad.png",
            "angry": "images/creatures/wild/creature_beast_behemoth_angry.png",
            "skill": "images/creatures/wild/creature_beast_behemoth_skill.png",
            "victory": "images/creatures/wild/creature_beast_behemoth_victory.png",
            "defeat": "images/creatures/wild/creature_beast_behemoth_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_beast_behemoth_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_beast_behemoth_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_beast_behemoth_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 대지의 짐승 베히모스",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 대지의 짐승 베히모스, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 대지의 짐승 베히모스, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 대지의 짐승 베히모스, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 대지의 짐승 베히모스은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "chimera",
        name: "키메라",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_chimera_joy.png",
        sprites: {
            "idle": "images/creatures/wild/creature_chimera_joy.png",
            "joy": "images/creatures/wild/creature_chimera_joy.png",
            "sad": "images/creatures/wild/creature_chimera_sad.png",
            "angry": "images/creatures/wild/creature_chimera_angry.png",
            "skill": "images/creatures/wild/creature_chimera_skill.png",
            "victory": "images/creatures/wild/creature_chimera_victory.png",
            "defeat": "images/creatures/wild/creature_chimera_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_chimera_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_chimera_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_chimera_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 키메라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 키메라, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 키메라, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 키메라, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 키메라은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ent_ancient",
        name: "고대 엔트",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_ent_ancient.png",
        sprites: {
            "idle": "images/creatures/wild/creature_ent_ancient.png",
            "joy": "images/creatures/wild/creature_ent_ancient_joy.png",
            "sad": "images/creatures/wild/creature_ent_ancient_sad.png",
            "angry": "images/creatures/wild/creature_ent_ancient_angry.png",
            "skill": "images/creatures/wild/creature_ent_ancient_skill.png",
            "victory": "images/creatures/wild/creature_ent_ancient_victory.png",
            "defeat": "images/creatures/wild/creature_ent_ancient_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_ent_ancient_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 고대 엔트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 고대 엔트, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 고대 엔트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "elemental_water",
        name: "물의 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_elemental_water.png",
        sprites: {
            "idle": "images/creatures/wild/creature_elemental_water.png",
            "joy": "images/creatures/wild/creature_elemental_water_joy.png",
            "sad": "images/creatures/wild/creature_elemental_water_sad.png",
            "angry": "images/creatures/wild/creature_elemental_water_angry.png",
            "skill": "images/creatures/wild/creature_elemental_water_skill.png",
            "victory": "images/creatures/wild/creature_elemental_water_victory.png",
            "defeat": "images/creatures/wild/creature_elemental_water_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_elemental_water_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 물의 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 물의 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 물의 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "wolf_dire",
        name: "다이어 울프",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_wolf_dire.png",
        sprites: {
            "idle": "images/creatures/wild/creature_wolf_dire.png",
            "joy": "images/creatures/wild/creature_wolf_dire_joy.png",
            "sad": "images/creatures/wild/creature_wolf_dire_sad.png",
            "angry": "images/creatures/wild/creature_wolf_dire_angry.png",
            "skill": "images/creatures/wild/creature_wolf_dire_skill.png",
            "victory": "images/creatures/wild/creature_wolf_dire_victory.png",
            "defeat": "images/creatures/wild/creature_wolf_dire_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_wolf_dire_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 다이어 울프",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 다이어 울프, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 다이어 울프은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "golem_mud",
        name: "진흙 골렘",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_golem_mud.png",
        sprites: {
            "idle": "images/creatures/wild/creature_golem_mud.png",
            "joy": "images/creatures/wild/creature_golem_mud_joy.png",
            "sad": "images/creatures/wild/creature_golem_mud_sad.png",
            "angry": "images/creatures/wild/creature_golem_mud_angry.png",
            "skill": "images/creatures/wild/creature_golem_mud_skill.png",
            "victory": "images/creatures/wild/creature_golem_mud_victory.png",
            "defeat": "images/creatures/wild/creature_golem_mud_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_golem_mud_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 진흙 골렘",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 진흙 골렘, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 진흙 골렘은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "magma_slime",
        name: "마그마 슬라임",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_magma_slime.png",
        sprites: {
            "idle": "images/creatures/wild/creature_magma_slime.png",
            "joy": "images/creatures/wild/creature_magma_slime_joy.png",
            "sad": "images/creatures/wild/creature_magma_slime_sad.png",
            "angry": "images/creatures/wild/creature_magma_slime_angry.png",
            "skill": "images/creatures/wild/creature_magma_slime_skill.png",
            "victory": "images/creatures/wild/creature_magma_slime_victory.png",
            "defeat": "images/creatures/wild/creature_magma_slime_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_magma_slime_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 마그마 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 마그마 슬라임, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 마그마 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mushroom_angry_new",
        name: "화난 버섯",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_mushroom_angry_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_mushroom_angry_new.png",
            "joy": "images/creatures/wild/creature_mushroom_angry_new_joy.png",
            "sad": "images/creatures/wild/creature_mushroom_angry_new_sad.png",
            "angry": "images/creatures/wild/creature_mushroom_angry_new_angry.png",
            "skill": "images/creatures/wild/creature_mushroom_angry_new_skill.png",
            "victory": "images/creatures/wild/creature_mushroom_angry_new_victory.png",
            "defeat": "images/creatures/wild/creature_mushroom_angry_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_mushroom_angry_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 화난 버섯",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 화난 버섯, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 화난 버섯은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fish_flying_new",
        name: "날치",
        rarity: RANKS.UNIQUE,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_fish_flying_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_fish_flying_new.png",
            "joy": "images/creatures/wild/creature_fish_flying_new_joy.png",
            "sad": "images/creatures/wild/creature_fish_flying_new_sad.png",
            "angry": "images/creatures/wild/creature_fish_flying_new_angry.png",
            "skill": "images/creatures/wild/creature_fish_flying_new_skill.png",
            "victory": "images/creatures/wild/creature_fish_flying_new_victory.png",
            "defeat": "images/creatures/wild/creature_fish_flying_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_fish_flying_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 날치",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 날치, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 날치은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "angel_arch",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_angel_arch.png",
        sprites: {
            "idle": "images/creatures/wild/creature_angel_arch.png",
            "joy": "images/creatures/wild/creature_angel_arch_joy.png",
            "sad": "images/creatures/wild/creature_angel_arch_sad.png",
            "angry": "images/creatures/wild/creature_angel_arch_angry.png",
            "skill": "images/creatures/wild/creature_angel_arch_skill.png",
            "victory": "images/creatures/wild/creature_angel_arch_victory.png",
            "defeat": "images/creatures/wild/creature_angel_arch_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_angel_arch_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "time_lord_chronos",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_time_lord_chronos.png",
        sprites: {
            "idle": "images/creatures/wild/creature_time_lord_chronos.png",
            "joy": "images/creatures/wild/creature_time_lord_chronos_joy.png",
            "sad": "images/creatures/wild/creature_time_lord_chronos_sad.png",
            "angry": "images/creatures/wild/creature_time_lord_chronos_angry.png",
            "skill": "images/creatures/wild/creature_time_lord_chronos_skill.png",
            "victory": "images/creatures/wild/creature_time_lord_chronos_victory.png",
            "defeat": "images/creatures/wild/creature_time_lord_chronos_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_time_lord_chronos_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus_shy",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_god_zeus_shy.jpg",
        sprites: {
            "idle": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "joy": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "sad": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "angry": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "skill": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "victory": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "defeat": "images/creatures/wild/creature_god_zeus_shy.jpg",
            "gallery": {
                "lv1": "images/creatures/wild/creature_god_zeus_shy.jpg"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus_angry",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_god_zeus_angry.jpg",
        sprites: {
            "idle": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "joy": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "sad": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "angry": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "skill": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "victory": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "defeat": "images/creatures/wild/creature_god_zeus_angry.jpg",
            "gallery": {
                "lv1": "images/creatures/wild/creature_god_zeus_angry.jpg"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_zeus_love",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_god_zeus_love.jpg",
        sprites: {
            "idle": "images/creatures/wild/creature_god_zeus_love.jpg",
            "joy": "images/creatures/wild/creature_god_zeus_love.jpg",
            "sad": "images/creatures/wild/creature_god_zeus_love.jpg",
            "angry": "images/creatures/wild/creature_god_zeus_love.jpg",
            "skill": "images/creatures/wild/creature_god_zeus_love.jpg",
            "victory": "images/creatures/wild/creature_god_zeus_love.jpg",
            "defeat": "images/creatures/wild/creature_god_zeus_love.jpg",
            "gallery": {
                "lv1": "images/creatures/wild/creature_god_zeus_love.jpg"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kraken_idol",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_kraken_idol.png",
        sprites: {
            "idle": "images/creatures/wild/creature_kraken_idol.png",
            "joy": "images/creatures/wild/creature_kraken_idol_joy.png",
            "sad": "images/creatures/wild/creature_kraken_idol_sad.png",
            "angry": "images/creatures/wild/creature_kraken_idol_angry.png",
            "skill": "images/creatures/wild/creature_kraken_idol_skill.png",
            "victory": "images/creatures/wild/creature_kraken_idol_victory.png",
            "defeat": "images/creatures/wild/creature_kraken_idol_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_kraken_idol_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "kraken_baby",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_kraken_baby.png",
        sprites: {
            "idle": "images/creatures/wild/creature_kraken_baby.png",
            "joy": "images/creatures/wild/creature_kraken_baby_joy.png",
            "sad": "images/creatures/wild/creature_kraken_baby_sad.png",
            "angry": "images/creatures/wild/creature_kraken_baby_angry.png",
            "skill": "images/creatures/wild/creature_kraken_baby_skill.png",
            "victory": "images/creatures/wild/creature_kraken_baby_victory.png",
            "defeat": "images/creatures/wild/creature_kraken_baby_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_kraken_baby_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "rat_brown",
        name: "Unknown",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_rat_brown.png",
        sprites: {
            "idle": "images/creatures/wild/creature_rat_brown.png",
            "joy": "images/creatures/wild/creature_rat_brown_joy.png",
            "sad": "images/creatures/wild/creature_rat_brown_sad.png",
            "angry": "images/creatures/wild/creature_rat_brown_angry.png",
            "skill": "images/creatures/wild/creature_rat_brown_skill.png",
            "victory": "images/creatures/wild/creature_rat_brown_victory.png",
            "defeat": "images/creatures/wild/creature_rat_brown_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_rat_brown_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, Unknown",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, Unknown, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. Unknown은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "slime_green_new",
        name: "초록 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_slime_green_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_slime_green_new.png",
            "joy": "images/creatures/wild/creature_slime_green_new_joy.png",
            "sad": "images/creatures/wild/creature_slime_green_new_sad.png",
            "angry": "images/creatures/wild/creature_slime_green_new_angry.png",
            "skill": "images/creatures/wild/creature_slime_green_new_skill.png",
            "victory": "images/creatures/wild/creature_slime_green_new_victory.png",
            "defeat": "images/creatures/wild/creature_slime_green_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_slime_green_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 초록 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 초록 슬라임, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 초록 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "blue_slime",
        name: "파랑 슬라임",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_blue_slime.png",
        sprites: {
            "idle": "images/creatures/wild/creature_blue_slime.png",
            "joy": "images/creatures/wild/creature_blue_slime_joy.png",
            "sad": "images/creatures/wild/creature_blue_slime_sad.png",
            "angry": "images/creatures/wild/creature_blue_slime_angry.png",
            "skill": "images/creatures/wild/creature_blue_slime_skill.png",
            "victory": "images/creatures/wild/creature_blue_slime_victory.png",
            "defeat": "images/creatures/wild/creature_blue_slime_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_blue_slime_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 파랑 슬라임",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 파랑 슬라임, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 파랑 슬라임은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "pebble_new",
        name: "조약돌",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_pebble_new.png",
        sprites: {
            "idle": "images/creatures/wild/creature_pebble_new.png",
            "joy": "images/creatures/wild/creature_pebble_new_joy.png",
            "sad": "images/creatures/wild/creature_pebble_new_sad.png",
            "angry": "images/creatures/wild/creature_pebble_new_angry.png",
            "skill": "images/creatures/wild/creature_pebble_new_skill.png",
            "victory": "images/creatures/wild/creature_pebble_new_victory.png",
            "defeat": "images/creatures/wild/creature_pebble_new_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_pebble_new_gallery_lv1.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nature, wild untamed, organic, forests, elemental, Light, 조약돌",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 조약돌, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "대자연의 정령들과 함께 숲과 대지를 지킵니다. 조약돌은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "chimera",
        name: "키메라",
        rarity: RANKS.SSR,
        world: WORLDS.WILD,
        elements: ["Fire", "Dark", "Beast"],
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_chimera_joy.png",
        sprites: {
            "idle": "images/creatures/wild/creature_chimera_joy.png",
            "joy": "images/creatures/wild/creature_chimera_joy.png",
            "sad": "images/creatures/wild/creature_chimera_joy.png",
            "angry": "images/creatures/wild/creature_chimera_joy.png",
            "skill": "images/creatures/wild/creature_chimera_joy.png",
            "victory": "images/creatures/wild/creature_chimera_joy.png",
            "defeat": "images/creatures/wild/creature_chimera_joy.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_chimera_joy.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, greek mythology, monster, lion goat snake hybrid, fierce, fire breathing, Light, 키메라",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 키메라, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "합성수",
            "story": "사자, 염소, 뱀이 합쳐진 괴수. 강력한 화염을 내뿜으며 전장을 휩씁니다.",
            "personality": "Ferocious"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "creature_unicorn",
        name: "유니콘",
        rarity: RANKS.SR,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_creature_unicorn.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_unicorn.png",
            "joy": "images/creatures/wild/creature_creature_unicorn.png", // Fallback
            "sad": "images/creatures/wild/creature_creature_unicorn.png", // Fallback
            "angry": "images/creatures/wild/creature_creature_unicorn.png", // Fallback
            "skill": "images/creatures/wild/creature_creature_unicorn.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 유니콘",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "creature_giant_hill",
        name: "언덕 거인",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_creature_giant_hill.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_giant_hill.png",
            "joy": "images/creatures/wild/creature_creature_giant_hill.png", // Fallback
            "sad": "images/creatures/wild/creature_creature_giant_hill.png", // Fallback
            "angry": "images/creatures/wild/creature_creature_giant_hill.png", // Fallback
            "skill": "images/creatures/wild/creature_creature_giant_hill.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 언덕 거인",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "creature_bat_small",
        name: "동굴 박쥐",
        rarity: RANKS.NORMAL,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_creature_bat_small.png",
        sprites: {
            "idle": "images/creatures/wild/creature_creature_bat_small.png",
            "joy": "images/creatures/wild/creature_creature_bat_small.png", // Fallback
            "sad": "images/creatures/wild/creature_creature_bat_small.png", // Fallback
            "angry": "images/creatures/wild/creature_creature_bat_small.png", // Fallback
            "skill": "images/creatures/wild/creature_creature_bat_small.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 동굴 박쥐",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    }
    ,
    {
        id: "snow_spirit",
        name: "설원 정령",
        rarity: RANKS.RARE,
        world: WORLDS.WILD,
        elements: ["Earth"], // Default element
        baseStr: 10, baseInt: 10,
        image: "images/creatures/wild/creature_snow_spirit.png",
        sprites: {
            "idle": "images/creatures/wild/creature_snow_spirit.png",
            "joy": "images/creatures/wild/creature_snow_spirit.png", // Fallback
            "sad": "images/creatures/wild/creature_snow_spirit.png", // Fallback
            "angry": "images/creatures/wild/creature_snow_spirit.png", // Fallback
            "skill": "images/creatures/wild/creature_snow_spirit.png",
            "gallery": {}
        },
        prompts: {
            "base": "anime style, 설원 정령",
            "idle": "standing"
        },
        lore: {
            "title": "New Discovery",
            "story": "A newly discovered creature in wild.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "time_lord_chronos",
        name: "시간의 지배자 크로노스",
        rarity: RANKS.UR,
        world: WORLDS.WILD,
        elements: ["Light", "Dark"],
        baseStr: 40, baseInt: 80,
        image: "images/creatures/wild/creature_time_lord_chronos.png",
        sprites: {
            "idle": "images/creatures/wild/creature_time_lord_chronos.png",
            "joy": "images/creatures/wild/creature_time_lord_chronos_joy.png",
            "sad": "images/creatures/wild/creature_time_lord_chronos_sad.png",
            "angry": "images/creatures/wild/creature_time_lord_chronos_angry.png",
            "skill": "images/creatures/wild/creature_time_lord_chronos_skill.png",
            "victory": "images/creatures/wild/creature_time_lord_chronos_victory.png",
            "defeat": "images/creatures/wild/creature_time_lord_chronos_defeat.png",
            "gallery": {
                "lv1": "images/creatures/wild/creature_time_lord_chronos_gallery_lv1.png",
                "lv2": "images/creatures/wild/creature_time_lord_chronos_gallery_lv2.png",
                "lv3": "images/creatures/wild/creature_time_lord_chronos_gallery_lv3.png"
            }
        },
        prompts: {
            "base": "(masterpiece:1.5), (best quality:1.4), (nikke style:1.4), (blue archive style:1.2), full body, solo, time_lord_chronos, female, (beautiful mature face:1.4), (glowing purple eyes with clock pupils:1.3), long silver hair styling like gear teeth, (revealing steampunk gothic dress:1.3), (mechanical limbs or accessories:1.2), (glamorous body:1.4), (huge breasts:1.3), (wide hips:1.4), (thick thighs:1.3), pale skin, giant clock gears background, floating time runes, arrogant but seductive pose",
            "idle": "standing pose with clock staff, confident smile, looking at viewer, rotating gears background, no text, no ui",
            "joy": "laughing elegantly, hand covering mouth, blushing, time stopping effect, happy eyes, no text, no ui",
            "sad": "tears flowing up (reversed time), looking down, holding a broken pocket watch, gloomy atmosphere, no text, no ui",
            "angry": "furious expression, glowing purple aura, clocks shattering background, summoning ancient weapons, aggressive stance, no text, no ui",
            "skill": "floating in time stream, casting ultimate time spell, galaxy and clock gears mixed, cinematic lighting, extreme angle, no text, no ui",
            "victory": "sitting on a floating clock, crossing legs, arrogant victory smile, holding a wine glass of time essence, no text, no ui",
            "defeat": "collapsed on gears, dress torn revealing skin, mechanical parts sparks, exhausted, humiliated look, no text, no ui",
            "gallery_lv1": "dating sim event, standing inside a giant clock tower, cogs turning, wind blowing skirt, looking down at viewer with interest, detailed background, no text, no ui",
            "gallery_lv2": "dating sim event, bound by golden time chains on a gear wall, struggling but blushing, torn clothes, seductive expression, soft lighting, no text, no ui",
            "gallery_lv3": "dating sim event, lying on a bed made of soft time clouds, inviting viewer, extreme close up, heart shaped pupils, mouth open, overwhelming love, no text, no ui"
        },
        lore: {
            "title": "영원의 관측자",
            "story": "시간 그 자체를 다스리는 존재. 과거와 미래를 동시에 보며, 모든 시간의 흐름을 관장한다. 우주의 시작부터 끝까지 목격한 관측자로, 인간의 수명은 그에게 한 순간에 불과하다. 시간을 멈추고, 되돌리고, 앞당길 수 있으나 함부로 사용하지 않는다. 시계태엽처럼 정확하고 냉정하나, 그 속에 무한한 지혜를 담고 있다.",
            "origin": "범우주적 존재 / 시간의 차원",
            "personality": "Timeless & Wise"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: {
            idle: [
                "시간은 흐르고... 모든 것은 변한다.",
                "과거, 현재, 미래... 모두 내 눈앞에.",
                "영원 속에서 한 순간을 만났구나."
            ],
            interaction: [
                "시간을 만지다니... 흥미로운 역설이군.",
                "네 시간은 짧지만, 그 순간은 영원할 수 있어.",
                "이 접촉, 타임라인에 기록되었어."
            ],
            gift: [
                "선물? 시간이 지나도 변치 않을까?",
                "영원 속 한 순간의 선물... 고마워.",
                "이 순간만은 시간을 멈추고 싶구나."
            ],
            special: [
                "시간이여, 내 명령에 복종하라!",
                "과거와 미래가 지금 이곳에!",
                "영원의 심판을 받아라!"
            ]
        },
        lines: {
            normal: "모든 순간은 영원의 한 조각.",
            touch_head: "시계태엽 같은 내 머리를 만지는구나.",
            touch_chest: "이 가슴은 우주의 시작부터 뛰고 있어.",
            touch_legs: "시간의 발걸음을 느껴봐.",
            touch_special: "너와 함께하는 시간만은... 영원처럼 느껴져."
        }
    }
];