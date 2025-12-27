import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ASGARD_CREATURES = [
    {
        id: "valkyrie_commander",
        name: "발키리 지휘관",
        name_en: "Valkyrie Commander", // [i18n]
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/valkyrie_commander.png",
        sprites: {
            "idle": "images/valkyrie_commander.png",
            "joy": "images/valkyrie_commander_joy.png",
            "sad": "images/valkyrie_commander_sad.png",
            "angry": "images/valkyrie_commander_angry.png",
            "skill": "images/valkyrie_commander_skill.png",
            "victory": "images/valkyrie_commander_victory.png",
            "defeat": "images/valkyrie_commander_defeat.png",
            "gallery": {
                "lv1": "images/valkyrie_commander_gallery_lv1.png",
                "lv2": "images/valkyrie_commander_gallery_lv2.png",
                "lv3": "images/valkyrie_commander_gallery_lv3.png"
            }
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 발키리 지휘관",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 발키리 지휘관 special illustration, intimate atmosphere"
        },
        lore: {
            title: "미지의 존재",
            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 지휘관은(는) 특별한 능력을 지녔습니다.",
            story_en: "A warrior of Asgard who guards Valhalla and prepares for Ragnarok. The Valkyrie Commander possesses unique abilities.", // [i18n]
            personality: "Unknown"
        },
        relationships: {
            likes: [],
            dislikes: [],
            rival: null
        },
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["Thank you."],
            special: ["!"]
        }
    },
    {
        id: "valkyrie_elite",
        name: "발키리 정예병",
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/valkyrie_elite.png",
        sprites: {
            "idle": "images/valkyrie_elite.png",
            "joy": "images/valkyrie_elite_joy.png",
            "sad": "images/valkyrie_elite_sad.png",
            "angry": "images/valkyrie_elite_angry.png",
            "skill": "images/valkyrie_elite_skill.png",
            "victory": "images/valkyrie_elite_victory.png",
            "defeat": "images/valkyrie_elite_defeat.png",
            "gallery": {
                "lv1": "images/valkyrie_elite_gallery.png"
                ,
                sprites: {
                    idle: "images/valkyrie_elite.png",
                    joy: "images/valkyrie_elite_joy.png",
                    sad: "images/valkyrie_elite_sad.png",
                    angry: "images/valkyrie_elite_angry.png",
                    skill: "images/valkyrie_elite_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/valkyrie_elite.png",
                        joy: "images/valkyrie_elite_joy.png",
                        sad: "images/valkyrie_elite_sad.png",
                        angry: "images/valkyrie_elite_angry.png",
                        skill: "images/valkyrie_elite_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/valkyrie_elite.png",
                            joy: "images/valkyrie_elite_joy.png",
                            sad: "images/valkyrie_elite_sad.png",
                            angry: "images/valkyrie_elite_angry.png",
                            skill: "images/valkyrie_elite_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 발키리 정예병",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 발키리 정예병 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 정예병은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 발키리 정예병",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 발키리 정예병 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 정예병은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 발키리 정예병",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 발키리 정예병 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 정예병은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 발키리 정예병",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 발키리 정예병, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 정예병은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_thor",
        name: "천둥의 망치 토르",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_god_thor.png",
        sprites: {
            "idle": "images/creature_god_thor.png",
            "joy": "images/creature_god_thor_joy.png",
            "sad": "images/creature_god_thor_sad.png",
            "angry": "images/creature_god_thor_angry.png",
            "skill": "images/creature_god_thor_skill.png",
            "victory": "images/creature_god_thor_victory.png",
            "defeat": "images/creature_god_thor_defeat.png",
            "gallery": {
                "lv1": "images/creature_god_thor_gallery_lv1.png",
                "lv2": "images/creature_god_thor_gallery_lv2.png",
                "lv3": "images/creature_god_thor_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_god_thor.png",
                    joy: "images/creature_god_thor_joy.png",
                    sad: "images/creature_god_thor_sad.png",
                    angry: "images/creature_god_thor_angry.png",
                    skill: "images/creature_god_thor_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_god_thor.png",
                        joy: "images/creature_god_thor_joy.png",
                        sad: "images/creature_god_thor_sad.png",
                        angry: "images/creature_god_thor_angry.png",
                        skill: "images/creature_god_thor_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_god_thor.png",
                            joy: "images/creature_god_thor_joy.png",
                            sad: "images/creature_god_thor_sad.png",
                            angry: "images/creature_god_thor_angry.png",
                            skill: "images/creature_god_thor_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 천둥의 망치 토르",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 천둥의 망치 토르 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 천둥의 망치 토르은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 천둥의 망치 토르",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 천둥의 망치 토르 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 천둥의 망치 토르은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 천둥의 망치 토르",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 천둥의 망치 토르 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 천둥의 망치 토르은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 천둥의 망치 토르",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 천둥의 망치 토르, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 천둥의 망치 토르, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 천둥의 망치 토르, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 천둥의 망치 토르은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "snake_world_jormungandr",
        name: "세계뱀 요르문간드",
        rarity: RANKS.UR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_snake_world_jormungandr.png",
        sprites: {
            "idle": "images/creature_snake_world_jormungandr.png",
            "joy": "images/creature_snake_world_jormungandr_joy.png",
            "sad": "images/creature_snake_world_jormungandr_sad.png",
            "angry": "images/creature_snake_world_jormungandr_angry.png",
            "skill": "images/creature_snake_world_jormungandr_skill.png",
            "victory": "images/creature_snake_world_jormungandr_victory.png",
            "defeat": "images/creature_snake_world_jormungandr_defeat.png",
            "gallery": {
                "lv1": "images/creature_snake_world_jormungandr_gallery_lv1.png",
                "lv2": "images/creature_snake_world_jormungandr_gallery_lv2.png",
                "lv3": "images/creature_snake_world_jormungandr_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_snake_world_jormungandr.png",
                    joy: "images/creature_snake_world_jormungandr_joy.png",
                    sad: "images/creature_snake_world_jormungandr_sad.png",
                    angry: "images/creature_snake_world_jormungandr_angry.png",
                    skill: "images/creature_snake_world_jormungandr_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_snake_world_jormungandr.png",
                        joy: "images/creature_snake_world_jormungandr_joy.png",
                        sad: "images/creature_snake_world_jormungandr_sad.png",
                        angry: "images/creature_snake_world_jormungandr_angry.png",
                        skill: "images/creature_snake_world_jormungandr_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_snake_world_jormungandr.png",
                            joy: "images/creature_snake_world_jormungandr_joy.png",
                            sad: "images/creature_snake_world_jormungandr_sad.png",
                            angry: "images/creature_snake_world_jormungandr_angry.png",
                            skill: "images/creature_snake_world_jormungandr_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 세계뱀 요르문간드",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 세계뱀 요르문간드 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계뱀 요르문간드은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 세계뱀 요르문간드",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 세계뱀 요르문간드 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계뱀 요르문간드은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 세계뱀 요르문간드",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 세계뱀 요르문간드 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계뱀 요르문간드은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 세계뱀 요르문간드",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 세계뱀 요르문간드, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 세계뱀 요르문간드, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 세계뱀 요르문간드, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계뱀 요르문간드은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "wolf_fenrir",
        name: "종말의 늑대 펜리르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_wolf_fenrir.png",
        sprites: {
            "idle": "images/creature_wolf_fenrir.png",
            "joy": "images/creature_wolf_fenrir_joy.png",
            "sad": "images/creature_wolf_fenrir_sad.png",
            "angry": "images/creature_wolf_fenrir_angry.png",
            "skill": "images/creature_wolf_fenrir_skill.png",
            "victory": "images/creature_wolf_fenrir_victory.png",
            "defeat": "images/creature_wolf_fenrir_defeat.png",
            "gallery": {
                "lv1": "images/creature_wolf_fenrir_gallery_lv1.png",
                "lv2": "images/creature_wolf_fenrir_gallery_lv2.png",
                "lv3": "images/creature_wolf_fenrir_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_wolf_fenrir.png",
                    joy: "images/creature_wolf_fenrir_joy.png",
                    sad: "images/creature_wolf_fenrir_sad.png",
                    angry: "images/creature_wolf_fenrir_angry.png",
                    skill: "images/creature_wolf_fenrir_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_wolf_fenrir.png",
                        joy: "images/creature_wolf_fenrir_joy.png",
                        sad: "images/creature_wolf_fenrir_sad.png",
                        angry: "images/creature_wolf_fenrir_angry.png",
                        skill: "images/creature_wolf_fenrir_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_wolf_fenrir.png",
                            joy: "images/creature_wolf_fenrir_joy.png",
                            sad: "images/creature_wolf_fenrir_sad.png",
                            angry: "images/creature_wolf_fenrir_angry.png",
                            skill: "images/creature_wolf_fenrir_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 종말의 늑대 펜리르",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 종말의 늑대 펜리르 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 종말의 늑대 펜리르은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 종말의 늑대 펜리르",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 종말의 늑대 펜리르 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 종말의 늑대 펜리르은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 종말의 늑대 펜리르",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 종말의 늑대 펜리르 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 종말의 늑대 펜리르은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 종말의 늑대 펜리르",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 종말의 늑대 펜리르, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 종말의 늑대 펜리르, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 종말의 늑대 펜리르, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 종말의 늑대 펜리르은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_loki",
        name: "장난의 신 로키",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_god_loki.png",
        sprites: {
            "idle": "images/creature_god_loki.png",
            "joy": "images/creature_god_loki_joy.png",
            "sad": "images/creature_god_loki_sad.png",
            "angry": "images/creature_god_loki_angry.png",
            "skill": "images/creature_god_loki_skill.png",
            "victory": "images/creature_god_loki_victory.png",
            "defeat": "images/creature_god_loki_defeat.png",
            "gallery": {
                "lv1": "images/creature_god_loki_gallery_lv1.png",
                "lv2": "images/creature_god_loki_gallery_lv2.png",
                "lv3": "images/creature_god_loki_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_god_loki.png",
                    joy: "images/creature_god_loki_joy.png",
                    sad: "images/creature_god_loki_sad.png",
                    angry: "images/creature_god_loki_angry.png",
                    skill: "images/creature_god_loki_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_god_loki.png",
                        joy: "images/creature_god_loki_joy.png",
                        sad: "images/creature_god_loki_sad.png",
                        angry: "images/creature_god_loki_angry.png",
                        skill: "images/creature_god_loki_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_god_loki.png",
                            joy: "images/creature_god_loki_joy.png",
                            sad: "images/creature_god_loki_sad.png",
                            angry: "images/creature_god_loki_angry.png",
                            skill: "images/creature_god_loki_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 장난의 신 로키",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 장난의 신 로키 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 장난의 신 로키은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 장난의 신 로키",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 장난의 신 로키 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 장난의 신 로키은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 장난의 신 로키",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 장난의 신 로키 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 장난의 신 로키은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 장난의 신 로키",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 장난의 신 로키, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 장난의 신 로키, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 장난의 신 로키, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 장난의 신 로키은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_freya",
        name: "아름다움의 여신 프레이야",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_god_freya.png",
        sprites: {
            "idle": "images/creature_god_freya.png",
            "joy": "images/creature_god_freya_joy.png",
            "sad": "images/creature_god_freya_sad.png",
            "angry": "images/creature_god_freya_angry.png",
            "skill": "images/creature_god_freya_skill.png",
            "victory": "images/creature_god_freya_victory.png",
            "defeat": "images/creature_god_freya_defeat.png",
            "gallery": {
                "lv1": "images/creature_god_freya_gallery_lv1.png",
                "lv2": "images/creature_god_freya_gallery_lv2.png",
                "lv3": "images/creature_god_freya_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_god_freya.png",
                    joy: "images/creature_god_freya_joy.png",
                    sad: "images/creature_god_freya_sad.png",
                    angry: "images/creature_god_freya_angry.png",
                    skill: "images/creature_god_freya_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_god_freya.png",
                        joy: "images/creature_god_freya_joy.png",
                        sad: "images/creature_god_freya_sad.png",
                        angry: "images/creature_god_freya_angry.png",
                        skill: "images/creature_god_freya_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_god_freya.png",
                            joy: "images/creature_god_freya_joy.png",
                            sad: "images/creature_god_freya_sad.png",
                            angry: "images/creature_god_freya_angry.png",
                            skill: "images/creature_god_freya_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 아름다움의 여신 프레이야",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 아름다움의 여신 프레이야 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아름다움의 여신 프레이야은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 아름다움의 여신 프레이야",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 아름다움의 여신 프레이야 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아름다움의 여신 프레이야은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 아름다움의 여신 프레이야",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 아름다움의 여신 프레이야 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아름다움의 여신 프레이야은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 아름다움의 여신 프레이야",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 아름다움의 여신 프레이야, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 아름다움의 여신 프레이야, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 아름다움의 여신 프레이야, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아름다움의 여신 프레이야은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "valkyrie_leader_gunnr",
        name: "발키리 대장 군르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_valkyrie_leader_gunnr.png",
        sprites: {
            "idle": "images/creature_valkyrie_leader_gunnr.png",
            "joy": "images/creature_valkyrie_leader_gunnr_joy.png",
            "sad": "images/creature_valkyrie_leader_gunnr_sad.png",
            "angry": "images/creature_valkyrie_leader_gunnr_angry.png",
            "skill": "images/creature_valkyrie_leader_gunnr_skill.png",
            "victory": "images/creature_valkyrie_leader_gunnr_victory.png",
            "defeat": "images/creature_valkyrie_leader_gunnr_defeat.png",
            "gallery": {
                "lv1": "images/creature_valkyrie_leader_gunnr_gallery_lv1.png",
                "lv2": "images/creature_valkyrie_leader_gunnr_gallery_lv2.png",
                "lv3": "images/creature_valkyrie_leader_gunnr_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_valkyrie_leader_gunnr.png",
                    joy: "images/creature_valkyrie_leader_gunnr_joy.png",
                    sad: "images/creature_valkyrie_leader_gunnr_sad.png",
                    angry: "images/creature_valkyrie_leader_gunnr_angry.png",
                    skill: "images/creature_valkyrie_leader_gunnr_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_valkyrie_leader_gunnr.png",
                        joy: "images/creature_valkyrie_leader_gunnr_joy.png",
                        sad: "images/creature_valkyrie_leader_gunnr_sad.png",
                        angry: "images/creature_valkyrie_leader_gunnr_angry.png",
                        skill: "images/creature_valkyrie_leader_gunnr_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_valkyrie_leader_gunnr.png",
                            joy: "images/creature_valkyrie_leader_gunnr_joy.png",
                            sad: "images/creature_valkyrie_leader_gunnr_sad.png",
                            angry: "images/creature_valkyrie_leader_gunnr_angry.png",
                            skill: "images/creature_valkyrie_leader_gunnr_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 발키리 대장 군르",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 발키리 대장 군르 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 대장 군르은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 발키리 대장 군르",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 발키리 대장 군르 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 대장 군르은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 발키리 대장 군르",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 발키리 대장 군르 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 대장 군르은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 발키리 대장 군르",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 발키리 대장 군르, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 발키리 대장 군르, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 발키리 대장 군르, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 발키리 대장 군르은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "sleipnir_foal",
        name: "아기 슬레이프니르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_sleipnir_foal.png",
        sprites: {
            "idle": "images/creature_sleipnir_foal.png",
            "joy": "images/creature_sleipnir_foal_joy.png",
            "sad": "images/creature_sleipnir_foal_sad.png",
            "angry": "images/creature_sleipnir_foal_angry.png",
            "skill": "images/creature_sleipnir_foal_skill.png",
            "victory": "images/creature_sleipnir_foal_victory.png",
            "defeat": "images/creature_sleipnir_foal_defeat.png",
            "gallery": {
                "lv1": "images/creature_sleipnir_foal_gallery_lv1.png",
                "lv2": "images/creature_sleipnir_foal_gallery_lv2.png",
                "lv3": "images/creature_sleipnir_foal_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_sleipnir_foal.png",
                    joy: "images/creature_sleipnir_foal_joy.png",
                    sad: "images/creature_sleipnir_foal_sad.png",
                    angry: "images/creature_sleipnir_foal_angry.png",
                    skill: "images/creature_sleipnir_foal_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_sleipnir_foal.png",
                        joy: "images/creature_sleipnir_foal_joy.png",
                        sad: "images/creature_sleipnir_foal_sad.png",
                        angry: "images/creature_sleipnir_foal_angry.png",
                        skill: "images/creature_sleipnir_foal_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_sleipnir_foal.png",
                            joy: "images/creature_sleipnir_foal_joy.png",
                            sad: "images/creature_sleipnir_foal_sad.png",
                            angry: "images/creature_sleipnir_foal_angry.png",
                            skill: "images/creature_sleipnir_foal_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 아기 슬레이프니르",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 아기 슬레이프니르 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아기 슬레이프니르은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 아기 슬레이프니르",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 아기 슬레이프니르 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아기 슬레이프니르은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 아기 슬레이프니르",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 아기 슬레이프니르 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아기 슬레이프니르은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 아기 슬레이프니르",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 아기 슬레이프니르, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 아기 슬레이프니르, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 아기 슬레이프니르, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아기 슬레이프니르은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "giant_hill",
        name: "대지의 방패 그로트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_giant_hill.png",
        sprites: {
            "idle": "images/creature_giant_hill.png",
            "joy": "images/creature_giant_hill_joy.png",
            "sad": "images/creature_giant_hill_sad.png",
            "angry": "images/creature_giant_hill_angry.png",
            "skill": "images/creature_giant_hill_skill.png",
            "victory": "images/creature_giant_hill_victory.png",
            "defeat": "images/creature_giant_hill_defeat.png",
            "gallery": {
                "lv1": "images/creature_giant_hill_gallery_lv1.png",
                "lv2": "images/creature_giant_hill_gallery_lv2.png",
                "lv3": "images/creature_giant_hill_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/creature_giant_hill.png",
                    joy: "images/creature_giant_hill_joy.png",
                    sad: "images/creature_giant_hill_sad.png",
                    angry: "images/creature_giant_hill_angry.png",
                    skill: "images/creature_giant_hill_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_giant_hill.png",
                        joy: "images/creature_giant_hill_joy.png",
                        sad: "images/creature_giant_hill_sad.png",
                        angry: "images/creature_giant_hill_angry.png",
                        skill: "images/creature_giant_hill_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_giant_hill.png",
                            joy: "images/creature_giant_hill_joy.png",
                            sad: "images/creature_giant_hill_sad.png",
                            angry: "images/creature_giant_hill_angry.png",
                            skill: "images/creature_giant_hill_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 대지의 방패 그로트",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 대지의 방패 그로트 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 대지의 방패 그로트은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 대지의 방패 그로트",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 대지의 방패 그로트 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 대지의 방패 그로트은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 대지의 방패 그로트",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 대지의 방패 그로트 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 대지의 방패 그로트은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 대지의 방패 그로트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 대지의 방패 그로트, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 대지의 방패 그로트, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 대지의 방패 그로트, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 대지의 방패 그로트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "god_hel",
        name: "저승의 여왕 헬",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/god_hel.png",
        sprites: {
            "idle": "images/god_hel.png",
            "joy": "images/god_hel_joy.png",
            "sad": "images/god_hel_sad.png",
            "angry": "images/god_hel_angry.png",
            "skill": "images/god_hel_skill.png",
            "victory": "images/god_hel_victory.png",
            "defeat": "images/god_hel_defeat.png",
            "gallery": {
                "lv1": "images/god_hel_gallery_lv1.png",
                "lv2": "images/god_hel_gallery_lv2.png",
                "lv3": "images/god_hel_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/god_hel.png",
                    joy: "images/god_hel_joy.png",
                    sad: "images/god_hel_sad.png",
                    angry: "images/god_hel_angry.png",
                    skill: "images/god_hel_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/god_hel.png",
                        joy: "images/god_hel_joy.png",
                        sad: "images/god_hel_sad.png",
                        angry: "images/god_hel_angry.png",
                        skill: "images/god_hel_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/god_hel.png",
                            joy: "images/god_hel_joy.png",
                            sad: "images/god_hel_sad.png",
                            angry: "images/god_hel_angry.png",
                            skill: "images/god_hel_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 저승의 여왕 헬",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 저승의 여왕 헬 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 저승의 여왕 헬은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 저승의 여왕 헬",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 저승의 여왕 헬 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 저승의 여왕 헬은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 저승의 여왕 헬",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 저승의 여왕 헬 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 저승의 여왕 헬은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 저승의 여왕 헬",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 저승의 여왕 헬, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 저승의 여왕 헬, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 저승의 여왕 헬, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 저승의 여왕 헬은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "giant_fire_surtr",
        name: "불의 거인 수르트",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/giant_fire_surtr.png",
        sprites: {
            "idle": "images/giant_fire_surtr.png",
            "joy": "images/giant_fire_surtr_joy.png",
            "sad": "images/giant_fire_surtr_sad.png",
            "angry": "images/giant_fire_surtr_angry.png",
            "skill": "images/giant_fire_surtr_skill.png",
            "victory": "images/giant_fire_surtr_victory.png",
            "defeat": "images/giant_fire_surtr_defeat.png",
            "gallery": {
                "lv1": "images/giant_fire_surtr_gallery_lv1.png",
                "lv2": "images/giant_fire_surtr_gallery_lv2.png",
                "lv3": "images/giant_fire_surtr_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/giant_fire_surtr.png",
                    joy: "images/giant_fire_surtr_joy.png",
                    sad: "images/giant_fire_surtr_sad.png",
                    angry: "images/giant_fire_surtr_angry.png",
                    skill: "images/giant_fire_surtr_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/giant_fire_surtr.png",
                        joy: "images/giant_fire_surtr_joy.png",
                        sad: "images/giant_fire_surtr_sad.png",
                        angry: "images/giant_fire_surtr_angry.png",
                        skill: "images/giant_fire_surtr_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/giant_fire_surtr.png",
                            joy: "images/giant_fire_surtr_joy.png",
                            sad: "images/giant_fire_surtr_sad.png",
                            angry: "images/giant_fire_surtr_angry.png",
                            skill: "images/giant_fire_surtr_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 불의 거인 수르트",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 불의 거인 수르트 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 불의 거인 수르트은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 불의 거인 수르트",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 불의 거인 수르트 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 불의 거인 수르트은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 불의 거인 수르트",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 불의 거인 수르트 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 불의 거인 수르트은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 불의 거인 수르트",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 불의 거인 수르트, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 불의 거인 수르트, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 불의 거인 수르트, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 불의 거인 수르트은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "yggdrasil_guardian",
        name: "세계수 수호병",
        rarity: RANKS.SR,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/yggdrasil_guardian.png",
        sprites: {
            "idle": "images/yggdrasil_guardian.png",
            "joy": "images/yggdrasil_guardian_joy.png",
            "sad": "images/yggdrasil_guardian_sad.png",
            "angry": "images/yggdrasil_guardian_angry.png",
            "skill": "images/yggdrasil_guardian_skill.png",
            "victory": "images/yggdrasil_guardian_victory.png",
            "defeat": "images/yggdrasil_guardian_defeat.png",
            "gallery": {
                "lv1": "images/yggdrasil_guardian_gallery_lv1.png",
                "lv2": "images/yggdrasil_guardian_gallery_lv2.png",
                "lv3": "images/yggdrasil_guardian_gallery_lv3.png"
                ,
                sprites: {
                    idle: "images/yggdrasil_guardian.png",
                    joy: "images/yggdrasil_guardian_joy.png",
                    sad: "images/yggdrasil_guardian_sad.png",
                    angry: "images/yggdrasil_guardian_angry.png",
                    skill: "images/yggdrasil_guardian_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/yggdrasil_guardian.png",
                        joy: "images/yggdrasil_guardian_joy.png",
                        sad: "images/yggdrasil_guardian_sad.png",
                        angry: "images/yggdrasil_guardian_angry.png",
                        skill: "images/yggdrasil_guardian_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/yggdrasil_guardian.png",
                            joy: "images/yggdrasil_guardian_joy.png",
                            sad: "images/yggdrasil_guardian_sad.png",
                            angry: "images/yggdrasil_guardian_angry.png",
                            skill: "images/yggdrasil_guardian_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 세계수 수호병",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 세계수 수호병 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계수 수호병은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 세계수 수호병",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 세계수 수호병 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계수 수호병은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 세계수 수호병",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 세계수 수호병 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계수 수호병은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 세계수 수호병",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "victory": "winning pose, cheering, victory sign, energetic, confident smile, battlefield background",
            "defeat": "defeated pose, kneeling, clothes torn, exhausted, injured, dirt on face, sad expression",
            "gallery_lv1": "dating sim event, 세계수 수호병, shy look, cafe or park background, soft lighting, slight blush, holding hands context",
            "gallery_lv2": "dating sim event, 세계수 수호병, intimate moment, bedroom or private room, close up, blushing hard, romantic atmosphere, looking into eyes",
            "gallery_lv3": "dating sim event, 세계수 수호병, seducing pose, bed or hot spring background, wet skin or messy clothes, intense eye contact, masterpiece, extremely detailed, heart eyes"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 세계수 수호병은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "einherjar_ghost",
        name: "방황하는 에인헤랴르",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/einherjar_ghost.png",
        sprites: {
            "idle": "images/einherjar_ghost.png",
            "joy": "images/einherjar_ghost_joy.png",
            "sad": "images/einherjar_ghost_sad.png",
            "angry": "images/einherjar_ghost_angry.png",
            "skill": "images/einherjar_ghost_skill.png",
            "victory": "images/einherjar_ghost_victory.png",
            "defeat": "images/einherjar_ghost_defeat.png",
            "gallery": {
                "lv1": "images/einherjar_ghost_gallery.png"
                ,
                sprites: {
                    idle: "images/einherjar_ghost.png",
                    joy: "images/einherjar_ghost_joy.png",
                    sad: "images/einherjar_ghost_sad.png",
                    angry: "images/einherjar_ghost_angry.png",
                    skill: "images/einherjar_ghost_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/einherjar_ghost.png",
                        joy: "images/einherjar_ghost_joy.png",
                        sad: "images/einherjar_ghost_sad.png",
                        angry: "images/einherjar_ghost_angry.png",
                        skill: "images/einherjar_ghost_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/einherjar_ghost.png",
                            joy: "images/einherjar_ghost_joy.png",
                            sad: "images/einherjar_ghost_sad.png",
                            angry: "images/einherjar_ghost_angry.png",
                            skill: "images/einherjar_ghost_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 방황하는 에인헤랴르",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 방황하는 에인헤랴르 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 방황하는 에인헤랴르은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 방황하는 에인헤랴르",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 방황하는 에인헤랴르 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 방황하는 에인헤랴르은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 방황하는 에인헤랴르",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 방황하는 에인헤랴르 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 방황하는 에인헤랴르은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 방황하는 에인헤랴르",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 방황하는 에인헤랴르, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 방황하는 에인헤랴르은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "elk_golden",
        name: "황금 뿔 엘크",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/elk_golden.png",
        sprites: {
            "idle": "images/elk_golden.png",
            "joy": "images/elk_golden_joy.png",
            "sad": "images/elk_golden_sad.png",
            "angry": "images/elk_golden_angry.png",
            "skill": "images/elk_golden_skill.png",
            "victory": "images/elk_golden_victory.png",
            "defeat": "images/elk_golden_defeat.png",
            "gallery": {
                "lv1": "images/elk_golden_gallery.png"
                ,
                sprites: {
                    idle: "images/elk_golden.png",
                    joy: "images/elk_golden_joy.png",
                    sad: "images/elk_golden_sad.png",
                    angry: "images/elk_golden_angry.png",
                    skill: "images/elk_golden_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/elk_golden.png",
                        joy: "images/elk_golden_joy.png",
                        sad: "images/elk_golden_sad.png",
                        angry: "images/elk_golden_angry.png",
                        skill: "images/elk_golden_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/elk_golden.png",
                            joy: "images/elk_golden_joy.png",
                            sad: "images/elk_golden_sad.png",
                            angry: "images/elk_golden_angry.png",
                            skill: "images/elk_golden_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 황금 뿔 엘크",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 황금 뿔 엘크 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 황금 뿔 엘크은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 황금 뿔 엘크",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 황금 뿔 엘크 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 황금 뿔 엘크은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 황금 뿔 엘크",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 황금 뿔 엘크 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 황금 뿔 엘크은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 황금 뿔 엘크",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 황금 뿔 엘크, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 황금 뿔 엘크은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "mimir_spirit",
        name: "미미르의 지혜 정령",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/mimir_spirit.png",
        sprites: {
            "idle": "images/mimir_spirit.png",
            "joy": "images/mimir_spirit_joy.png",
            "sad": "images/mimir_spirit_sad.png",
            "angry": "images/mimir_spirit_angry.png",
            "skill": "images/mimir_spirit_skill.png",
            "victory": "images/mimir_spirit_victory.png",
            "defeat": "images/mimir_spirit_defeat.png",
            "gallery": {
                "lv1": "images/mimir_spirit_gallery.png"
                ,
                sprites: {
                    idle: "images/mimir_spirit.png",
                    joy: "images/mimir_spirit_joy.png",
                    sad: "images/mimir_spirit_sad.png",
                    angry: "images/mimir_spirit_angry.png",
                    skill: "images/mimir_spirit_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/mimir_spirit.png",
                        joy: "images/mimir_spirit_joy.png",
                        sad: "images/mimir_spirit_sad.png",
                        angry: "images/mimir_spirit_angry.png",
                        skill: "images/mimir_spirit_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/mimir_spirit.png",
                            joy: "images/mimir_spirit_joy.png",
                            sad: "images/mimir_spirit_sad.png",
                            angry: "images/mimir_spirit_angry.png",
                            skill: "images/mimir_spirit_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 미미르의 지혜 정령",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 미미르의 지혜 정령 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 미미르의 지혜 정령은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 미미르의 지혜 정령",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 미미르의 지혜 정령 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 미미르의 지혜 정령은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 미미르의 지혜 정령",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 미미르의 지혜 정령 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 미미르의 지혜 정령은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 미미르의 지혜 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 미미르의 지혜 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 미미르의 지혜 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "nordic_cat_freya",
        name: "프레이야의 고양이",
        rarity: RANKS.SPECIAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/nordic_cat_freya.png",
        sprites: {
            "idle": "images/nordic_cat_freya.png",
            "joy": "images/nordic_cat_freya_joy.png",
            "sad": "images/nordic_cat_freya_sad.png",
            "angry": "images/nordic_cat_freya_angry.png",
            "skill": "images/nordic_cat_freya_skill.png",
            "victory": "images/nordic_cat_freya_victory.png",
            "defeat": "images/nordic_cat_freya_defeat.png",
            "gallery": {
                "lv1": "images/nordic_cat_freya_gallery.png"
                ,
                sprites: {
                    idle: "images/nordic_cat_freya.png",
                    joy: "images/nordic_cat_freya_joy.png",
                    sad: "images/nordic_cat_freya_sad.png",
                    angry: "images/nordic_cat_freya_angry.png",
                    skill: "images/nordic_cat_freya_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/nordic_cat_freya.png",
                        joy: "images/nordic_cat_freya_joy.png",
                        sad: "images/nordic_cat_freya_sad.png",
                        angry: "images/nordic_cat_freya_angry.png",
                        skill: "images/nordic_cat_freya_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/nordic_cat_freya.png",
                            joy: "images/nordic_cat_freya_joy.png",
                            sad: "images/nordic_cat_freya_sad.png",
                            angry: "images/nordic_cat_freya_angry.png",
                            skill: "images/nordic_cat_freya_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 프레이야의 고양이",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 프레이야의 고양이 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 프레이야의 고양이은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 프레이야의 고양이",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 프레이야의 고양이 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 프레이야의 고양이은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 프레이야의 고양이",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 프레이야의 고양이 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 프레이야의 고양이은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 프레이야의 고양이",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 프레이야의 고양이, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 프레이야의 고양이은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "eagle_iron",
        name: "강철 독수리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_eagle_iron.png",
        sprites: {
            "idle": "images/creature_eagle_iron.png",
            "joy": "images/creature_eagle_iron_joy.png",
            "sad": "images/creature_eagle_iron_sad.png",
            "angry": "images/creature_eagle_iron_angry.png",
            "skill": "images/creature_eagle_iron_skill.png",
            "victory": "images/creature_eagle_iron_victory.png",
            "defeat": "images/creature_eagle_iron_defeat.png",
            "gallery": {
                "lv1": "images/creature_eagle_iron_gallery.png"
                ,
                sprites: {
                    idle: "images/creature_eagle_iron.png",
                    joy: "images/creature_eagle_iron_joy.png",
                    sad: "images/creature_eagle_iron_sad.png",
                    angry: "images/creature_eagle_iron_angry.png",
                    skill: "images/creature_eagle_iron_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_eagle_iron.png",
                        joy: "images/creature_eagle_iron_joy.png",
                        sad: "images/creature_eagle_iron_sad.png",
                        angry: "images/creature_eagle_iron_angry.png",
                        skill: "images/creature_eagle_iron_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_eagle_iron.png",
                            joy: "images/creature_eagle_iron_joy.png",
                            sad: "images/creature_eagle_iron_sad.png",
                            angry: "images/creature_eagle_iron_angry.png",
                            skill: "images/creature_eagle_iron_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 강철 독수리",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 강철 독수리 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 강철 독수리은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 강철 독수리",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 강철 독수리 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 강철 독수리은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 강철 독수리",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 강철 독수리 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 강철 독수리은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 강철 독수리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 강철 독수리, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 강철 독수리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bear_ice",
        name: "만년설 곰",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/creature_bear_ice.png",
        sprites: {
            "idle": "images/creature_bear_ice.png",
            "joy": "images/creature_bear_ice_joy.png",
            "sad": "images/creature_bear_ice_sad.png",
            "angry": "images/creature_bear_ice_angry.png",
            "skill": "images/creature_bear_ice_skill.png",
            "victory": "images/creature_bear_ice_victory.png",
            "defeat": "images/creature_bear_ice_defeat.png",
            "gallery": {
                "lv1": "images/creature_bear_ice_gallery.png"
                ,
                sprites: {
                    idle: "images/creature_bear_ice.png",
                    joy: "images/creature_bear_ice_joy.png",
                    sad: "images/creature_bear_ice_sad.png",
                    angry: "images/creature_bear_ice_angry.png",
                    skill: "images/creature_bear_ice_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/creature_bear_ice.png",
                        joy: "images/creature_bear_ice_joy.png",
                        sad: "images/creature_bear_ice_sad.png",
                        angry: "images/creature_bear_ice_angry.png",
                        skill: "images/creature_bear_ice_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/creature_bear_ice.png",
                            joy: "images/creature_bear_ice_joy.png",
                            sad: "images/creature_bear_ice_sad.png",
                            angry: "images/creature_bear_ice_angry.png",
                            skill: "images/creature_bear_ice_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 만년설 곰",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 만년설 곰 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 만년설 곰은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 만년설 곰",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 만년설 곰 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 만년설 곰은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 만년설 곰",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 만년설 곰 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 만년설 곰은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 만년설 곰",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 만년설 곰, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 만년설 곰은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "huginn_crow",
        name: "오딘의 까마귀 후긴",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/huginn_crow.png",
        sprites: {
            "idle": "images/huginn_crow.png",
            "joy": "images/huginn_crow_joy.png",
            "sad": "images/huginn_crow_sad.png",
            "angry": "images/huginn_crow_angry.png",
            "skill": "images/huginn_crow_skill.png",
            "victory": "images/huginn_crow_victory.png",
            "defeat": "images/huginn_crow_defeat.png",
            "gallery": {
                "lv1": "images/huginn_crow_gallery.png"
                ,
                sprites: {
                    idle: "images/huginn_crow.png",
                    joy: "images/huginn_crow_joy.png",
                    sad: "images/huginn_crow_sad.png",
                    angry: "images/huginn_crow_angry.png",
                    skill: "images/huginn_crow_skill.png",
                    gallery: "[object Object]"
                    ,
                    sprites: {
                        idle: "images/huginn_crow.png",
                        joy: "images/huginn_crow_joy.png",
                        sad: "images/huginn_crow_sad.png",
                        angry: "images/huginn_crow_angry.png",
                        skill: "images/huginn_crow_skill.png",
                        gallery: "[object Object]"
                        ,
                        sprites: {
                            idle: "images/huginn_crow.png",
                            joy: "images/huginn_crow_joy.png",
                            sad: "images/huginn_crow_sad.png",
                            angry: "images/huginn_crow_angry.png",
                            skill: "images/huginn_crow_skill.png",
                            gallery: "[object Object]"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 오딘의 까마귀 후긴",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 오딘의 까마귀 후긴 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "미지의 존재",
                            story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 오딘의 까마귀 후긴은(는) 특별한 능력을 지녔습니다.",
                            personality: "Unknown"
                        },
                        relationships: {
                            likes: [],
                            dislikes: [],
                            rival: null
                        },
                        touchLines: {
                            idle: ["..."],
                            interaction: ["..."],
                            gift: ["Thank you."],
                            special: ["!"]
                        }
                    },
                    prompts: {
                        base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 오딘의 까마귀 후긴",
                        idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                        sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                        skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                        gallery: "cute pose, energetic, detailed, looking at viewer, 오딘의 까마귀 후긴 special illustration, intimate atmosphere"
                    },
                    lore: {
                        title: "미지의 존재",
                        story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 오딘의 까마귀 후긴은(는) 특별한 능력을 지녔습니다.",
                        personality: "Unknown"
                    },
                    relationships: {
                        likes: [],
                        dislikes: [],
                        rival: null
                    },
                    touchLines: {
                        idle: ["..."],
                        interaction: ["..."],
                        gift: ["Thank you."],
                        special: ["!"]
                    }
                },
                prompts: {
                    base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, 오딘의 까마귀 후긴",
                    idle: "standing pose, confident, neutral expression",
                    joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                    angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                    gallery: "cute pose, energetic, detailed, looking at viewer, 오딘의 까마귀 후긴 special illustration, intimate atmosphere"
                },
                lore: {
                    title: "미지의 존재",
                    story: "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 오딘의 까마귀 후긴은(는) 특별한 능력을 지녔습니다.",
                    personality: "Unknown"
                },
                relationships: {
                    likes: [],
                    dislikes: [],
                    rival: null
                },
                touchLines: {
                    idle: ["..."],
                    interaction: ["..."],
                    gift: ["Thank you."],
                    special: ["!"]
                }
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 오딘의 까마귀 후긴",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 오딘의 까마귀 후긴, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 오딘의 까마귀 후긴은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "muninn_crow",
        name: "오딘의 까마귀 무닌",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/muninn_crow.png",
        sprites: {
            "idle": "images/muninn_crow.png",
            "joy": "images/muninn_crow_joy.png",
            "sad": "images/muninn_crow_sad.png",
            "angry": "images/muninn_crow_angry.png",
            "skill": "images/muninn_crow_skill.png",
            "victory": "images/muninn_crow_victory.png",
            "defeat": "images/muninn_crow_defeat.png",
            "gallery": {
                "lv1": "images/muninn_crow_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 오딘의 까마귀 무닌",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 오딘의 까마귀 무닌, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 오딘의 까마귀 무닌은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "goat_lightning",
        name: "번개 염소 탕그리스니르",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/goat_lightning.png",
        sprites: {
            "idle": "images/goat_lightning.png",
            "joy": "images/goat_lightning_joy.png",
            "sad": "images/goat_lightning_sad.png",
            "angry": "images/goat_lightning_angry.png",
            "skill": "images/goat_lightning_skill.png",
            "victory": "images/goat_lightning_victory.png",
            "defeat": "images/goat_lightning_defeat.png",
            "gallery": {
                "lv1": "images/goat_lightning_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 번개 염소 탕그리스니르",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 번개 염소 탕그리스니르, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 번개 염소 탕그리스니르은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "nidhogg_spawn",
        name: "니드호그의 자식",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/nidhogg_spawn.png",
        sprites: {
            "idle": "images/nidhogg_spawn.png",
            "joy": "images/nidhogg_spawn_joy.png",
            "sad": "images/nidhogg_spawn_sad.png",
            "angry": "images/nidhogg_spawn_angry.png",
            "skill": "images/nidhogg_spawn_skill.png",
            "victory": "images/nidhogg_spawn_victory.png",
            "defeat": "images/nidhogg_spawn_defeat.png",
            "gallery": {
                "lv1": "images/nidhogg_spawn_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 니드호그의 자식",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 니드호그의 자식, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 니드호그의 자식은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "frost_giant_warrior",
        name: "서리 거인 전사",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/frost_giant_warrior.png",
        sprites: {
            "idle": "images/frost_giant_warrior.png",
            "joy": "images/frost_giant_warrior_joy.png",
            "sad": "images/frost_giant_warrior_sad.png",
            "angry": "images/frost_giant_warrior_angry.png",
            "skill": "images/frost_giant_warrior_skill.png",
            "victory": "images/frost_giant_warrior_victory.png",
            "defeat": "images/frost_giant_warrior_defeat.png",
            "gallery": {
                "lv1": "images/frost_giant_warrior_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 서리 거인 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 서리 거인 전사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 서리 거인 전사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "fire_giant_scout",
        name: "화염 거인 정찰병",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/fire_giant_scout.png",
        sprites: {
            "idle": "images/fire_giant_scout.png",
            "joy": "images/fire_giant_scout_joy.png",
            "sad": "images/fire_giant_scout_sad.png",
            "angry": "images/fire_giant_scout_angry.png",
            "skill": "images/fire_giant_scout_skill.png",
            "victory": "images/fire_giant_scout_victory.png",
            "defeat": "images/fire_giant_scout_defeat.png",
            "gallery": {
                "lv1": "images/fire_giant_scout_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 화염 거인 정찰병",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 화염 거인 정찰병, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 화염 거인 정찰병은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "heimdall_horn_spirit",
        name: "걀라르호른의 메아리",
        rarity: RANKS.RARE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/heimdall_horn_spirit.png",
        sprites: {
            "idle": "images/heimdall_horn_spirit.png",
            "joy": "images/heimdall_horn_spirit_joy.png",
            "sad": "images/heimdall_horn_spirit_sad.png",
            "angry": "images/heimdall_horn_spirit_angry.png",
            "skill": "images/heimdall_horn_spirit_skill.png",
            "victory": "images/heimdall_horn_spirit_victory.png",
            "defeat": "images/heimdall_horn_spirit_defeat.png",
            "gallery": {
                "lv1": "images/heimdall_horn_spirit_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 걀라르호른의 메아리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 걀라르호른의 메아리, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 걀라르호른의 메아리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "viking_youth",
        name: "열혈 바이킹 소년",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/viking_youth.png",
        sprites: {
            "idle": "images/viking_youth.png",
            "joy": "images/viking_youth_joy.png",
            "sad": "images/viking_youth_sad.png",
            "angry": "images/viking_youth_angry.png",
            "skill": "images/viking_youth_skill.png",
            "victory": "images/viking_youth_victory.png",
            "defeat": "images/viking_youth_defeat.png",
            "gallery": {
                "lv1": "images/viking_youth_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 열혈 바이킹 소년",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 열혈 바이킹 소년, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 열혈 바이킹 소년은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "valkyrie_recruit",
        name: "신입 발키리",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/valkyrie_recruit.png",
        sprites: {
            "idle": "images/valkyrie_recruit.png",
            "joy": "images/valkyrie_recruit_joy.png",
            "sad": "images/valkyrie_recruit_sad.png",
            "angry": "images/valkyrie_recruit_angry.png",
            "skill": "images/valkyrie_recruit_skill.png",
            "victory": "images/valkyrie_recruit_victory.png",
            "defeat": "images/valkyrie_recruit_defeat.png",
            "gallery": {
                "lv1": "images/valkyrie_recruit_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 신입 발키리",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 신입 발키리, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 신입 발키리은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ratatoskr_squirrel",
        name: "전령 다람쥐 라타토스크",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/ratatoskr_squirrel.png",
        sprites: {
            "idle": "images/ratatoskr_squirrel.png",
            "joy": "images/ratatoskr_squirrel_joy.png",
            "sad": "images/ratatoskr_squirrel_sad.png",
            "angry": "images/ratatoskr_squirrel_angry.png",
            "skill": "images/ratatoskr_squirrel_skill.png",
            "victory": "images/ratatoskr_squirrel_victory.png",
            "defeat": "images/ratatoskr_squirrel_defeat.png",
            "gallery": {
                "lv1": "images/ratatoskr_squirrel_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 전령 다람쥐 라타토스크",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 전령 다람쥐 라타토스크, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 전령 다람쥐 라타토스크은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "shieldmaiden_iron",
        name: "철벽의 방패처녀",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/shieldmaiden_iron.png",
        sprites: {
            "idle": "images/shieldmaiden_iron.png",
            "joy": "images/shieldmaiden_iron_joy.png",
            "sad": "images/shieldmaiden_iron_sad.png",
            "angry": "images/shieldmaiden_iron_angry.png",
            "skill": "images/shieldmaiden_iron_skill.png",
            "victory": "images/shieldmaiden_iron_victory.png",
            "defeat": "images/shieldmaiden_iron_defeat.png",
            "gallery": {
                "lv1": "images/shieldmaiden_iron_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 철벽의 방패처녀",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 철벽의 방패처녀, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 철벽의 방패처녀은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "beserker_bear",
        name: "베어 버서커",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/beserker_bear.png",
        sprites: {
            "idle": "images/beserker_bear.png",
            "joy": "images/beserker_bear_joy.png",
            "sad": "images/beserker_bear_sad.png",
            "angry": "images/beserker_bear_angry.png",
            "skill": "images/beserker_bear_skill.png",
            "victory": "images/beserker_bear_victory.png",
            "defeat": "images/beserker_bear_defeat.png",
            "gallery": {
                "lv1": "images/beserker_bear_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 베어 버서커",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 베어 버서커, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 베어 버서커은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ulfhednar_wolf",
        name: "울프헤드나르 전사",
        rarity: RANKS.UNIQUE,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/ulfhednar_wolf.png",
        sprites: {
            "idle": "images/ulfhednar_wolf.png",
            "joy": "images/ulfhednar_wolf_joy.png",
            "sad": "images/ulfhednar_wolf_sad.png",
            "angry": "images/ulfhednar_wolf_angry.png",
            "skill": "images/ulfhednar_wolf_skill.png",
            "victory": "images/ulfhednar_wolf_victory.png",
            "defeat": "images/ulfhednar_wolf_defeat.png",
            "gallery": {
                "lv1": "images/ulfhednar_wolf_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 울프헤드나르 전사",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 울프헤드나르 전사, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 울프헤드나르 전사은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "wolf_pup_asgard",
        name: "아기 늑대",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/wolf_pup_asgard.png",
        sprites: {
            "idle": "images/wolf_pup_asgard.png",
            "joy": "images/wolf_pup_asgard_joy.png",
            "sad": "images/wolf_pup_asgard_sad.png",
            "angry": "images/wolf_pup_asgard_angry.png",
            "skill": "images/wolf_pup_asgard_skill.png",
            "victory": "images/wolf_pup_asgard_victory.png",
            "defeat": "images/wolf_pup_asgard_defeat.png",
            "gallery": {
                "lv1": "images/wolf_pup_asgard_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 아기 늑대",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 늑대, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아기 늑대은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "dwarf_apprentice",
        name: "드워프 수습전공",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/dwarf_apprentice.png",
        sprites: {
            "idle": "images/dwarf_apprentice.png",
            "joy": "images/dwarf_apprentice_joy.png",
            "sad": "images/dwarf_apprentice_sad.png",
            "angry": "images/dwarf_apprentice_angry.png",
            "skill": "images/dwarf_apprentice_skill.png",
            "victory": "images/dwarf_apprentice_victory.png",
            "defeat": "images/dwarf_apprentice_defeat.png",
            "gallery": {
                "lv1": "images/dwarf_apprentice_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 드워프 수습전공",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 드워프 수습전공, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 드워프 수습전공은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "troll_baby",
        name: "아기 트롤",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/troll_baby.png",
        sprites: {
            "idle": "images/troll_baby.png",
            "joy": "images/troll_baby_joy.png",
            "sad": "images/troll_baby_sad.png",
            "angry": "images/troll_baby_angry.png",
            "skill": "images/troll_baby_skill.png",
            "victory": "images/troll_baby_victory.png",
            "defeat": "images/troll_baby_defeat.png",
            "gallery": {
                "lv1": "images/troll_baby_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 아기 트롤",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 아기 트롤, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 아기 트롤은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "ice_spirit_small",
        name: "작은 얼음 정령",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/ice_spirit_small.png",
        sprites: {
            "idle": "images/ice_spirit_small.png",
            "joy": "images/ice_spirit_small_joy.png",
            "sad": "images/ice_spirit_small_sad.png",
            "angry": "images/ice_spirit_small_angry.png",
            "skill": "images/ice_spirit_small_skill.png",
            "victory": "images/ice_spirit_small_victory.png",
            "defeat": "images/ice_spirit_small_defeat.png",
            "gallery": {
                "lv1": "images/ice_spirit_small_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 작은 얼음 정령",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 작은 얼음 정령, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 작은 얼음 정령은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "draugr_remnant",
        name: "낡은 드라우그",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/draugr_remnant.png",
        sprites: {
            "idle": "images/draugr_remnant.png",
            "joy": "images/draugr_remnant_joy.png",
            "sad": "images/draugr_remnant_sad.png",
            "angry": "images/draugr_remnant_angry.png",
            "skill": "images/draugr_remnant_skill.png",
            "victory": "images/draugr_remnant_victory.png",
            "defeat": "images/draugr_remnant_defeat.png",
            "gallery": {
                "lv1": "images/draugr_remnant_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 낡은 드라우그",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 낡은 드라우그, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 낡은 드라우그은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    },
    {
        id: "bifrost_wisp",
        name: "비프뢰스트의 빛무궁",
        rarity: RANKS.NORMAL,
        world: WORLDS.ASGARD,
        elements: ["Light"],
        baseStr: 10, baseInt: 10,
        image: "images/bifrost_wisp.png",
        sprites: {
            "idle": "images/bifrost_wisp.png",
            "joy": "images/bifrost_wisp_joy.png",
            "sad": "images/bifrost_wisp_sad.png",
            "angry": "images/bifrost_wisp_angry.png",
            "skill": "images/bifrost_wisp_skill.png",
            "victory": "images/bifrost_wisp_victory.png",
            "defeat": "images/bifrost_wisp_defeat.png",
            "gallery": {
                "lv1": "images/bifrost_wisp_gallery.png"
            }
        },
        prompts: {
            "base": "anime style, cell shaded, 2d game art, full body, nordic fantasy, vikings, rune magic, cold atmosphere, mythic, Light, 비프뢰스트의 빛무궁",
            "idle": "standing pose, confident, neutral expression",
            "joy": "smiling, blushing, happy eyes, hand waving, flowers in background",
            "sad": "sad expression, looking down, tears, injured, dark atmosphere",
            "angry": "angry, shouting, glowing eyes, battle stance, attacking effect",
            "skill": "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            "gallery_lv1": "cute pose, 비프뢰스트의 빛무궁, energetic, detailed, looking at viewer"
        },
        lore: {
            "title": "미지의 존재",
            "story": "아스가르드의 전사로서 발할라를 수호하거나 라그나로크를 대비합니다. 비프뢰스트의 빛무궁은(는) 특별한 능력을 지녔습니다.",
            "personality": "Unknown"
        },
        relationships: { likes: [], dislikes: [], rival: null },
        touchLines: { idle: ["..."], interaction: ["..."], gift: ["Thank you."], special: ["!"] },
        lines: { normal: "..." }
    }
];