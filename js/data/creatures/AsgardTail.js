{
    id: "god_odin",
        name: "ìµœê³ ???¤ë”˜",
            rarity: RANKS.UR,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Wind", "Magic"],
                        ego: "Seeker",
                            baseStr: 45, baseInt: 75,
                                skillId: "odin_skill",
                                    image: "images/creature_god_odin.png",
                                        lore: {
        title: "ì§€?œì˜ ?€ê°€ë¥?ì¹˜ë¥¸ ??,
            story: "?„í™‰ ?¸ê³„ë¥??¤ìŠ¤ë¦¬ëŠ” ë¶ìœ ?½ì˜ ìµœê³ ?? ì§€?œë? ?„í•´ ?œìª½ ?ˆì„ ?¬ìƒ?˜ê³ , ?°ì£¼??ë¹„ë????Œê¸° ?„í•´ ?„ê·¸?œë¼?¤ì— 9?¼ê°„ ëª©ì„ ë§¤ë‹¬?˜ë‹¤. ?‰ì² ?˜ê³  ê³„ì‚°?ì´ì§€ë§? ?¸ì •ë°›ì? ?„ì‚¬?ê²Œ??ë°œí• ?¼ì˜ ë¬¸ì„ ?°ë‹¤. ?¼ê·¸?˜ë¡œ?¬ì—???œë¦¬ë¥´ì—ê²??¼ì¼œì§??´ëª….",
                origin: "ë¶ìœ ??? í™” / ?„ìŠ¤ê°€ë¥´ë“œ",
                    relationships: [
                        { id: "wolf_fenrir", type: "rival", desc: "?´ëª…???? ?¼ê·¸?˜ë¡œ?¬ì—???¤ë”˜???¼í‚¬ ?? },
                        {
                            id: "valkyrie", type: "ally", desc: "ì¶©ì‹¤???„ì‚¬. ?¨ê»˜?˜ë©´ ì¹˜ëª…?€??ì¦ê?",
                            sprites: {
                                idle: "images/creature_valkyrie.png?v=3",
                                joy: "images/creature_valkyrie_joy.png?v=3",
                                sad: "images/creature_valkyrie_sad.png?v=3",
                                angry: "images/creature_valkyrie_angry.png?v=3",
                                skill: "images/creature_valkyrie_skill.png?v=3",
                                gallery: "images/creature_valkyrie_gallery.png?v=3"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Metal, Wind, ?„ì¥??ê¹ƒë°œ ë¸Œë??íŠ¸",
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?„ì¥??ê¹ƒë°œ ë¸Œë??íŠ¸ special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?ê´‘??? ë³„??,
                                story: "?¤ë”˜??ëª…ì„ ë°›ì•„ ?„ì¥?ì„œ ê°€???©ë§¹???„ì‚¬ë¥?ë°œí• ?¼ë¡œ ?¸ë„?˜ëŠ” ?„ìŸ ì²˜ë?. ?‰ì² ?˜ê³  ë¬´ìë¹„í•˜ê²?ë³´ì´ì§€ë§? ? íƒë°›ì? ëª»í•œ ?ë“¤???„í•´ ëª°ë˜ ?ˆë¬¼ ?˜ë¦¬???¬ì„¸??ë§ˆìŒ???Œìœ ??",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "god_zeus", type: "rival", desc: "? ë“¤????ê°„ì˜ ?ì¡´???€ê²? }
                    ],
                        synergy: { ally: ["valkyrie", "eagle_iron", "bear_ice"], rival: ["wolf_fenrir", "demon_king"] }
    },
    lines: {
        normal: "ì§€?œë? ?í•˜?ëƒ. ?€ê°€ê°€ ?°ë? ê²ƒì´??",
            touch_head: "???œìª½???€ê°€ë¡??»ì? ì§€??.. ?Œê³  ?¶ì?ê°€?",
                touch_chest: "ì°¨ê????€ì§€ì²˜ëŸ¼ êµ³ì–´?ˆë˜ ???¬ì¥??.. ?°ëŠ”êµ?",
                    touch_legs: "?œë‘ë¥´ì? ë§ˆë¼. ì§€?œëŠ” ì²œì²œ???»ëŠ” ë²•ì´??",
                        touch_special: "ê¶ë‹ˆë¥´ì—¬, ?ì„ ê¿°ëš«?´ë¼!"
    }
},
{
    id: "valkyrie",
        name: "?„ì¥??ê¹ƒë°œ ë¸Œë??íŠ¸",
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Metal", "Wind"],
                        ego: "Warlord",
                            baseStr: 40, baseInt: 35,
                                image: "images/creature_valkyrie.png?v=3",
                                    lore: {
        title: "?ê´‘??? ë³„??,
            story: "?¤ë”˜??ëª…ì„ ë°›ì•„ ?„ì¥?ì„œ ê°€???©ë§¹???„ì‚¬ë¥?ë°œí• ?¼ë¡œ ?¸ë„?˜ëŠ” ?„ìŸ ì²˜ë?. ?‰ì² ?˜ê³  ë¬´ìë¹„í•˜ê²?ë³´ì´ì§€ë§? ? íƒë°›ì? ëª»í•œ ?ë“¤???„í•´ ëª°ë˜ ?ˆë¬¼ ?˜ë¦¬???¬ì„¸??ë§ˆìŒ???Œìœ ??",
                origin: "ë¶ìœ ??? í™” / ë°œí• ??,
                    relationships: [
                        { id: "god_odin", type: "ally", desc: "ì¶©ì„±?˜ëŠ” ì£¼êµ°. ?¨ê»˜?˜ë©´ ì¹˜ëª…?€ ì¦ê?" },
                        { id: "angel_arch", type: "ally", desc: "ì²œìƒ???™ë£Œ ?„ì‚¬" }
                    ],
                        synergy: { ally: ["god_odin", "angel_arch", "eagle_iron"], rival: ["wolf_fenrir"] }
    },
    lines: { normal: "?„ì„  ?´ìƒ ë¬? ë°œí• ?¼ë? ?„í•˜??" }
},
{
    id: "giant_hill",
        name: "?€ì§€??ë°©íŒ¨ ê·¸ë¡œ??,
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,
                    elements: ["Earth", "Nature"],
                        ego: "Devotion",
                            baseStr: 45, baseInt: 15,
                                image: "images/creatures/wild/creature_giant_hill.png",
                                    lore: {
        title: "?°ì„ ?ˆì? ê±°ì¸",
            story: "?œë¦¬ ê±°ì¸ì¡±ì˜ ?„ì˜ˆ. ê±°ë???ì²´êµ¬???´ìš¸ë¦¬ì? ?Šê²Œ ?¨ìˆœ?˜ê³  ê°€ì¡±ì„ ?¬ë‘?œë‹¤. ?‘ì? ?ëª…ì²´ë“¤??ì§€?¤ëŠ” ê²ƒì´ ì·¨ë??´ë©°, ?„íˆ¬?ì„œ???ˆë£Œë¥??„í•´ ê±°ë???ëª¸ìœ¼ë¡?ë°©íŒ¨ê°€ ?œë‹¤.",
                origin: "ë¶ìœ ??? í™” / ?”íˆ°?˜ì„",
                    relationships: [
                        {
                            id: "titan_atlas", type: "ally", desc: "ê±°ì¸ì¡?? ë°°. ?´ë™ ?¤ìŠ¹",
                            sprites: {
                                idle: "images/creature_giant_hill.png?v=3",
                                joy: "images/creature_giant_hill_joy.png?v=3",
                                sad: "images/creature_giant_hill_sad.png?v=3",
                                angry: "images/creature_giant_hill_angry.png?v=3",
                                skill: "images/creature_giant_hill_skill.png?v=3",
                                gallery: "images/creature_giant_hill_gallery.png?v=3"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Earth, Nature, ?€ì§€??ë°©íŒ¨ ê·¸ë¡œ??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?€ì§€??ë°©íŒ¨ ê·¸ë¡œ??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?°ì„ ?ˆì? ê±°ì¸",
                                story: "?œë¦¬ ê±°ì¸ì¡±ì˜ ?„ì˜ˆ. ê±°ë???ì²´êµ¬???´ìš¸ë¦¬ì? ?Šê²Œ ?¨ìˆœ?˜ê³  ê°€ì¡±ì„ ?¬ë‘?œë‹¤. ?‘ì? ?ëª…ì²´ë“¤??ì§€?¤ëŠ” ê²ƒì´ ì·¨ë??´ë©°, ?„íˆ¬?ì„œ???ˆë£Œë¥??„í•´ ê±°ë???ëª¸ìœ¼ë¡?ë°©íŒ¨ê°€ ?œë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "golem_mud", type: "ally", desc: "?”í•œ ê²ƒë“¤?¼ë¦¬???°ì •" }
                    ],
                        synergy: { ally: ["titan_atlas", "golem_mud", "bear_ice"], rival: [] }
    },
    lines: { normal: "?‘ì? ì¹œêµ¬~ ?¬ì—ˆ??ê°€." }
},
{
    id: "dwarf_smith",
        name: "?œì›Œ???€?¥ì¥??,
            rarity: RANKS.SPECIAL,
                world: WORLDS.ASGARD,
                    elements: ["Metal", "Fire"],
                        baseStr: 18, baseInt: 15,
                            image: "images/creature_dwarf.png?v=4",
                                lore: {
        title: "ë¬ ë‹ˆë¥´ì˜ ?œì‘??,
            story: "?„ìŠ¤ê°€ë¥´ë“œ ìµœê³ ??ë¬´ê¸°?¥ì¸. ? ë¥´??ë§ì¹˜ ë¬ ë‹ˆë¥´ë? ë§Œë“  ?¥ì¸ ê°€ë¬¸ì˜ ?„ì†. ? ì„ ë§ˆì‹œë©??œì‘ ?ë„ê°€ ë¹¨ë¼ì§€ì§€ë§??„ì„±?ˆì´ ?´ìƒ?´ì§„?? 'ë§¥ì£¼ ?????†ìœ¼ë©??ì´ ???€ì§ì—¬!'ê°€ ?…ë²„ë¦?",
                origin: "?„ìŠ¤ê°€ë¥´ë“œ ?ˆë‹¤ë²¨ë¦¬ë¥?,
                    relationships: [
                        {
                            id: "god_odin", type: "ally", desc: "?¤ë”˜??ë¬´ê¸° ê³µê¸‰?? ? ë¢° ê´€ê³?,
                            sprites: {
                                idle: "images/creature_dwarf.png?v=4",
                                joy: "images/creature_dwarf_joy.png?v=4",
                                sad: "images/creature_dwarf_sad.png?v=4",
                                angry: "images/creature_dwarf_angry.png?v=4",
                                skill: "images/creature_dwarf_skill.png?v=4",
                                gallery: "images/creature_dwarf_gallery.png?v=4"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Fire, ?œì›Œ???€?¥ì¥??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, ?œì›Œ???€?¥ì¥??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "ë¬ ë‹ˆë¥´ì˜ ?œì‘??,
                                story: "?„ìŠ¤ê°€ë¥´ë“œ ìµœê³ ??ë¬´ê¸°?¥ì¸. ? ë¥´??ë§ì¹˜ ë¬ ë‹ˆë¥´ë? ë§Œë“  ?¥ì¸ ê°€ë¬¸ì˜ ?„ì†. ? ì„ ë§ˆì‹œë©??œì‘ ?ë„ê°€ ë¹¨ë¼ì§€ì§€ë§??„ì„±?ˆì´ ?´ìƒ?´ì§„?? 'ë§¥ì£¼ ?????†ìœ¼ë©??ì´ ???€ì§ì—¬!'ê°€ ?…ë²„ë¦?",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "golem_mud", type: "ally", desc: "ê´‘ë¬¼ ?œê³µ ?ŒíŠ¸?? }
                    ],
                        synergy: { ally: ["god_odin", "golem_mud", "eagle_iron"], rival: [] }
    },
    lines: { normal: "ë§ì¹˜ì§??œì‘?´ë‹¤! ìº? ìº? ë§¥ì£¼ ê°€?¸ì?!" }
},
{
    id: "eagle_iron",
        name: "ê°•ì²  ?…ìˆ˜ë¦?,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Metal", "Wind"],
                        baseStr: 10, baseInt: 8,
                            image: "images/creatures/wild/creature_eagle_iron.png",
                                lore: {
        title: "?˜ëŠ˜???•ì°°??,
            story: "ê°•ì² ë¡???? ê°œë¥?ê°€ì§?? ë¹„ë¡œìš´ ?…ìˆ˜ë¦? ?¸ìƒ ?ì—???ê¹Œì§€ ? ì•„?¤ë‹ˆë©??¤ë”˜?ê²Œ ?•ë³´ë¥?ë³´ê³ ?œë‹¤. ? ê°œ ê¹ƒí„¸ ?˜ë‚˜ë¡œë„ ê²€??ë§Œë“¤ ???ˆì„ ë§Œí¼ ê°•í•˜ê³?? ì¹´ë¡?‹¤. ?’ì? ê³³ì—???´ë ¤?¤ë³´??ê±?ì¢‹ì•„?œë‹¤.",
                origin: "?„ìŠ¤ê°€ë¥´ë“œ ?˜ëŠ˜",
                    relationships: [
                        {
                            id: "valkyrie", type: "ally", desc: "ë°œí‚¤ë¦¬ì? ?¨ê»˜ ?„ì¥???•ì°°",
                            sprites: {
                                idle: "images/creature_eagle_iron.png?v=3",
                                joy: "images/creature_eagle_iron_joy.png?v=3",
                                sad: "images/creature_eagle_iron_sad.png?v=3",
                                angry: "images/creature_eagle_iron_angry.png?v=3",
                                skill: "images/creature_eagle_iron_skill.png?v=3",
                                gallery: "images/creature_eagle_iron_gallery.png?v=3"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Wind, ê°•ì²  ?…ìˆ˜ë¦?,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, ê°•ì²  ?…ìˆ˜ë¦?special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?˜ëŠ˜???•ì°°??,
                                story: "ê°•ì² ë¡???? ê°œë¥?ê°€ì§?? ë¹„ë¡œìš´ ?…ìˆ˜ë¦? ?¸ìƒ ?ì—???ê¹Œì§€ ? ì•„?¤ë‹ˆë©??¤ë”˜?ê²Œ ?•ë³´ë¥?ë³´ê³ ?œë‹¤. ? ê°œ ê¹ƒí„¸ ?˜ë‚˜ë¡œë„ ê²€??ë§Œë“¤ ???ˆì„ ë§Œí¼ ê°•í•˜ê³?? ì¹´ë¡?‹¤. ?’ì? ê³³ì—???´ë ¤?¤ë³´??ê±?ì¢‹ì•„?œë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "cloud_puff", type: "ally", desc: "êµ¬ë¦„ ?œì‚¬???„ì—???´ì‹" }
                    ],
                        synergy: { ally: ["valkyrie", "cloud_puff", "centaur_scout"], rival: [] }
    },
    lines: { normal: "? ê°œ??ê°•ì² ?´ì?. ?˜ëŠ˜?ì„œ ëª¨ë“  ê±?ë³¸ë‹¤!" }
},
{
    id: "bear_ice",
        name: "ë§Œë…„??ê³?,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Ice", "Water"],
                        baseStr: 15, baseInt: 3,
                            image: "images/creatures/asgard/creature_bear_ice.png",
                                lore: {
        title: "?¼ì–´ë¶™ì? ?¬íš¨",
            story: "ë¶ê·¹??ë§Œë…„???ì—???œì–´???„ì„¤??ê³? ?˜í’ˆ ??ë²ˆì— ?ˆë³´?¼ê? ?¼ê³ , ?¬íš¨ ??ë²ˆì— ë¹™í•˜ê°€ ë¬´ë„ˆì§„ë‹¤. ê²‰ì? ë¬´ì„­ì§€ë§??ˆë¼ ë¬¼ê°œ???¸ëŠ” ê±?ì¢‹ì•„?˜ëŠ” ì¸¤ë°?? ?°ì–´ë¥?ë§¤ìš° ì¢‹ì•„?œë‹¤.",
                origin: "?„ìŠ¤ê°€ë¥´ë“œ ?ˆí”Œ?˜ì„",
                    relationships: [
                        {
                            id: "giant_hill", type: "ally", desc: "ê±°ì¸ê³?ê³°ì˜ ? ë“ ??ì¡°í•©",
                            sprites: {
                                idle: "images/creature_bear_ice.png?v=3",
                                joy: "images/creature_bear_ice_joy.png?v=3",
                                sad: "images/creature_bear_ice_sad.png?v=3",
                                angry: "images/creature_bear_ice_angry.png?v=3",
                                skill: "images/creature_bear_ice_skill.png?v=3",
                                gallery: "images/creature_bear_ice_gallery.png?v=3"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Ice, Water, ë§Œë…„??ê³?,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, ë§Œë…„??ê³?special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?¼ì–´ë¶™ì? ?¬íš¨",
                                story: "ë¶ê·¹??ë§Œë…„???ì—???œì–´???„ì„¤??ê³? ?˜í’ˆ ??ë²ˆì— ?ˆë³´?¼ê? ?¼ê³ , ?¬íš¨ ??ë²ˆì— ë¹™í•˜ê°€ ë¬´ë„ˆì§„ë‹¤. ê²‰ì? ë¬´ì„­ì§€ë§??ˆë¼ ë¬¼ê°œ???¸ëŠ” ê±?ì¢‹ì•„?˜ëŠ” ì¸¤ë°?? ?°ì–´ë¥?ë§¤ìš° ì¢‹ì•„?œë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "mage_flame", type: "rival", desc: "ë¶ˆê³¼ ?¼ìŒ?€ ?ê·¹!" }
                    ],
                        synergy: { ally: ["giant_hill", "snow_spirit"], rival: ["mage_flame", "phoenix_eternal"] }
    },
    lines: { normal: "ì¶”ìœ„???µìˆ™?? ?°ì–´ ì¤?ê±°ì•¼? ??.. ë­? ??ì¤˜ë„ ??.." }
},
{
    id: "god_loki",
        name: "?¥ë‚œ????ë¡œí‚¤",
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Dark", "Magic", "Chaos"],
                        baseStr: 25, baseInt: 65,
                            image: "images/creatures/asgard/god_loki.png", // Restored image
                                lore: {
        title: "ë³€? ì˜ ê·€??,
            story: "?¤ë”˜???˜í˜•?œì´???„ìŠ¤ê°€ë¥´ë“œ ìµœê³ ???¸ë¦­?¤í„°. ì§€ë£¨í•¨??ì°¸ì? ëª»í•´ ê°ì¢… ?¬ê³ ë¥?ì¹˜ì?ë§? ?Œë¡œ??ê¸°ë°œ??ê¾€ë¡?? ë“¤??êµ¬í•˜ê¸°ë„ ?œë‹¤. ?œë¦¬ë¥´ì? ?”ë¥´ë¬¸ê°„?œì˜ ?„ë²„ì§€.",
                origin: "ë¶ìœ ??? í™” / ?„ìŠ¤ê°€ë¥´ë“œ",
                    relationships: [
                        {
                            id: "god_odin", type: "ally", desc: "? ì¦??ê´€ê³? ?˜í˜•??,
                            sprites: {
                                idle: "images/creature_god_loki.png",
                                joy: "images/creature_god_loki_joy.png",
                                sad: "images/creature_god_loki_sad.png",
                                angry: "images/creature_god_loki_angry.png",
                                skill: "images/creature_god_loki_skill.png",
                                gallery: "images/creature_god_loki_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Magic, Chaos, ?¥ë‚œ????ë¡œí‚¤",
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?¥ë‚œ????ë¡œí‚¤ special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "ë³€? ì˜ ê·€??,
                                story: "?¤ë”˜???˜í˜•?œì´???„ìŠ¤ê°€ë¥´ë“œ ìµœê³ ???¸ë¦­?¤í„°. ì§€ë£¨í•¨??ì°¸ì? ëª»í•´ ê°ì¢… ?¬ê³ ë¥?ì¹˜ì?ë§? ?Œë¡œ??ê¸°ë°œ??ê¾€ë¡?? ë“¤??êµ¬í•˜ê¸°ë„ ?œë‹¤. ?œë¦¬ë¥´ì? ?”ë¥´ë¬¸ê°„?œì˜ ?„ë²„ì§€.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "wolf_fenrir", type: "family", desc: "?˜ì˜ ?¬ë‘?˜ëŠ” ?„ë“¤" }
                    ],
                        synergy: { ally: ["wolf_fenrir", "snake_world_jormungandr"], rival: ["god_thor"] }
    },
    lines: { normal: "?¬ì‹¬?œë°, ë­??¬ë??ˆëŠ” ???†ë‚˜?" }
},
{
    id: "god_freya",
        name: "ë¯¸ì˜ ?¬ì‹  ?„ë ˆ?´ì•¼",
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Magic"],
                        baseStr: 30, baseInt: 60,
                            image: "images/creatures/asgard/god_freya.png", // Restored image
                                lore: {
        title: "?„ì¥??ì§€ë°°ì",
            story: "?¬ë‘ê³??„ìŸ???™ì‹œ??ê´€?¥í•˜???¬ì‹ . ë°œí‚¤ë¦¬ë“¤??ì§„ì •???€?¥ì´ë©? ?„ì‚¬???ì›…?¤ì˜ ?ˆë°˜?€ ê·¸ë???ëª«ì´?? ?©ê¸ˆê³?ë³´ì„, ê·¸ë¦¬ê³??„ë¦„?¤ìš´ ê³ ì–‘?´ë? ì¢‹ì•„?œë‹¤.",
                origin: "ë¶ìœ ??? í™” / ?´í¬ë°?,
                    relationships: [
                        {
                            id: "god_odin", type: "rival", desc: "?í˜¼ ?íƒˆ??ê²½ìŸ??,
                            sprites: {
                                idle: "images/creature_god_freya.png",
                                joy: "images/creature_god_freya_joy.png",
                                sad: "images/creature_god_freya_sad.png",
                                angry: "images/creature_god_freya_angry.png",
                                skill: "images/creature_god_freya_skill.png",
                                gallery: "images/creature_god_freya_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Magic, ë¯¸ì˜ ?¬ì‹  ?„ë ˆ?´ì•¼",
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ë¯¸ì˜ ?¬ì‹  ?„ë ˆ?´ì•¼ special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?„ì¥??ì§€ë°°ì",
                                story: "?¬ë‘ê³??„ìŸ???™ì‹œ??ê´€?¥í•˜???¬ì‹ . ë°œí‚¤ë¦¬ë“¤??ì§„ì •???€?¥ì´ë©? ?„ì‚¬???ì›…?¤ì˜ ?ˆë°˜?€ ê·¸ë???ëª«ì´?? ?©ê¸ˆê³?ë³´ì„, ê·¸ë¦¬ê³??„ë¦„?¤ìš´ ê³ ì–‘?´ë? ì¢‹ì•„?œë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "nordic_cat_freya", type: "pet", desc: "?¬ë‘?˜ëŠ” ? ì™„ë¬? }
                    ],
                        synergy: { ally: ["valkyrie", "nordic_cat_freya"], rival: [] }
    },
    lines: { normal: "?„ë¦„?¤ì??€ ê·??ì²´ë¡?ë¬´ê¸°??ë²?" }
},
{
    id: "snake_world_jormungandr",
        name: "ë¯¸ë“œê°€ë¥´ë“œ ë±€ ?”ë¥´ë¬¸ê°„??,
            rarity: RANKS.UR,
                world: WORLDS.ASGARD,
                    elements: ["Water", "Dark", "Poison"],
                        baseStr: 70, baseInt: 40,
                            image: "images/creatures/asgard/creature_snake_world_jormungandr.png", // Restored image
                                lore: {
        title: "?¸ê³„ë¥?ê°ëŠ” ë±€",
            story: "ë¡œí‚¤???ì‹ ì¤??˜ë‚˜. ?œì–´?˜ìë§ˆì ë°”ë‹¤??ë²„ë ¤ì¡Œìœ¼?? ?ˆë¬´ ê±°ë??´ì ¸???¸ê°„ ?¸ê³„(ë¯¸ë“œê°€ë¥´ë“œ)ë¥???ë°”í€?ê°ê³  ?ì‹ ??ê¼¬ë¦¬ë¥?ë¬¼ê³  ?ˆë‹¤. ? ë¥´?€???™ì  ê´€ê³?",
                origin: "ë¶ìœ ??? í™” / ë¯¸ë“œê°€ë¥´ë“œ ë°”ë‹¤",
                    relationships: [
                        {
                            id: "god_loki", type: "family", desc: "?„ë²„ì§€",
                            sprites: {
                                idle: "images/creature_snake_world_jormungandr.png",
                                joy: "images/creature_snake_world_jormungandr_joy.png",
                                sad: "images/creature_snake_world_jormungandr_sad.png",
                                angry: "images/creature_snake_world_jormungandr_angry.png",
                                skill: "images/creature_snake_world_jormungandr_skill.png",
                                gallery: "images/creature_snake_world_jormungandr_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Dark, Poison, ë¯¸ë“œê°€ë¥´ë“œ ë±€ ?”ë¥´ë¬¸ê°„??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ë¯¸ë“œê°€ë¥´ë“œ ë±€ ?”ë¥´ë¬¸ê°„??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?¸ê³„ë¥?ê°ëŠ” ë±€",
                                story: "ë¡œí‚¤???ì‹ ì¤??˜ë‚˜. ?œì–´?˜ìë§ˆì ë°”ë‹¤??ë²„ë ¤ì¡Œìœ¼?? ?ˆë¬´ ê±°ë??´ì ¸???¸ê°„ ?¸ê³„(ë¯¸ë“œê°€ë¥´ë“œ)ë¥???ë°”í€?ê°ê³  ?ì‹ ??ê¼¬ë¦¬ë¥?ë¬¼ê³  ?ˆë‹¤. ? ë¥´?€???™ì  ê´€ê³?",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "god_thor", type: "rival", desc: "?¼ê·¸?˜ë¡œ?¬ì˜ ?™ì " }
                    ],
                        synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_thor"] }
    },
    lines: { normal: "ë°”ë‹¤ê°€ ?“ì–´?¤ë¥¸??.." }
},
{
    id: "ratatoskr_squirrel",
        name: "ë©”ì‹ ?€ ?¼í?? ìŠ¤??,
            rarity: RANKS.UNIQUE,
                world: WORLDS.ASGARD,
                    elements: ["Wind", "Beast"],
                        baseStr: 10, baseInt: 15,
                            image: "images/creatures/asgard/ratatoskr_squirrel.png", // Restored image
                                lore: {
        title: "?¸ê³„?˜ì˜ ?˜ë‹¤?ì´",
            story: "?„ê·¸?œë¼?¤ì„ ?¤ë¥´?´ë¦¬ë©??…ìˆ˜ë¦¬ì? ?ˆë“œ?¸ê·¸ ?¬ì´ë¥??´ê°„ì§ˆí•˜???¤ëŒì¥? ?¨ê°– ?Œë¬¸??ê·¼ì›ì§€?´ë©°, ?•ë³´ ?˜ì§‘ ?¥ë ¥???ì›”?˜ë‹¤.",
                origin: "ë¶ìœ ??? í™” / ?„ê·¸?œë¼??,
                    relationships: [
                        {
                            id: "eagle_iron", type: "rival", desc: "ê³¨íƒ•ë¨¹ì´ê¸?ì¢‹ì? ?ë?",
                            sprites: {
                                idle: "images/ratatoskr_squirrel.png",
                                joy: "images/ratatoskr_squirrel_joy.png",
                                sad: "images/ratatoskr_squirrel_sad.png",
                                angry: "images/ratatoskr_squirrel_angry.png",
                                skill: "images/ratatoskr_squirrel_skill.png",
                                gallery: "images/ratatoskr_squirrel_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Beast, ë©”ì‹ ?€ ?¼í?? ìŠ¤??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, ë©”ì‹ ?€ ?¼í?? ìŠ¤??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?¸ê³„?˜ì˜ ?˜ë‹¤?ì´",
                                story: "?„ê·¸?œë¼?¤ì„ ?¤ë¥´?´ë¦¬ë©??…ìˆ˜ë¦¬ì? ?ˆë“œ?¸ê·¸ ?¬ì´ë¥??´ê°„ì§ˆí•˜???¤ëŒì¥? ?¨ê°– ?Œë¬¸??ê·¼ì›ì§€?´ë©°, ?•ë³´ ?˜ì§‘ ?¥ë ¥???ì›”?˜ë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "yggdrasil_guardian", type: "home", desc: "?˜ì˜ ?€?´í„°" }
                    ],
                        synergy: { ally: ["eagle_iron", "muninn_crow"], rival: [] }
    },
    lines: { normal: "ê·¸ê±° ?¤ì—ˆ?? ?¤ë”˜ ?˜ì´ ê¸€??.." }
},
{
    id: "god_hel",
        name: "ì§€?¥ì˜ ?¬ì™• ??,
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Dark", "Ice", "Death"],
                        baseStr: 30, baseInt: 70,
                            image: "images/creatures/asgard/god_hel.png", // Restored image (originally god_hel.png)
                                lore: {
        title: "?ˆí”Œ?¤ì„??ì§€ë°°ì",
            story: "ë¡œí‚¤???¸ì´??ì£½ì? ?ë“¤???¬ì™•. ë°˜ì? ?„ë¦„?¤ìš´ ?¬ì¸, ë°˜ì? ?©ì–´ê°€???œì²´??ëª¨ìŠµ???˜ê³  ?ˆë‹¤. ?¼ê·¸?˜ë¡œ?????í†±?¼ë¡œ ë§Œë“  ë°??˜ê??Œë¥´ë¥??€ê³??„ìŠ¤ê°€ë¥´ë“œë¥?ì¹¨ê³µ?œë‹¤.",
                origin: "ë¶ìœ ??? í™” / ?ˆí”Œ?¤ì„",
                    relationships: [
                        {
                            id: "god_loki", type: "family", desc: "?„ë²„ì§€",
                            sprites: {
                                idle: "images/creature_god_hel.png",
                                joy: "images/creature_god_hel_joy.png",
                                sad: "images/creature_god_hel_sad.png",
                                angry: "images/creature_god_hel_angry.png",
                                skill: "images/creature_god_hel_skill.png",
                                gallery: "images/creature_god_hel_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Death, ì§€?¥ì˜ ?¬ì™• ??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ì§€?¥ì˜ ?¬ì™• ??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?ˆí”Œ?¤ì„??ì§€ë°°ì",
                                story: "ë¡œí‚¤???¸ì´??ì£½ì? ?ë“¤???¬ì™•. ë°˜ì? ?„ë¦„?¤ìš´ ?¬ì¸, ë°˜ì? ?©ì–´ê°€???œì²´??ëª¨ìŠµ???˜ê³  ?ˆë‹¤. ?¼ê·¸?˜ë¡œ?????í†±?¼ë¡œ ë§Œë“  ë°??˜ê??Œë¥´ë¥??€ê³??„ìŠ¤ê°€ë¥´ë“œë¥?ì¹¨ê³µ?œë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "wolf_fenrir", type: "family", desc: "?¤ë¹ " },
                        { id: "god_odin", type: "rival", desc: "?ë? ê´€ê³? }
                    ],
                        synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_odin", "valkyrie"] }
    },
    lines: { normal: "???ëŠ” ?´ê³³???????†ë‹¤..." }
},
{
    id: "muninn_crow",
        name: "ê¸°ì–µ??ê¹Œë§ˆê·€ ë¬´ë‹Œ",
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Wind", "Dark"],
                        baseStr: 15, baseInt: 25,
                            image: "images/creatures/asgard/muninn_crow.png",
                                lore: {
        title: "?¤ë”˜??ê¸°ì–µ",
            story: "?¤ë”˜???´ê¹¨???‰ì•„ ?¸ìƒ??ê¸°ì–µ???ì‚­?´ëŠ” ê¹Œë§ˆê·€. ?„ê¸´(?ê°)ê³¼ëŠ” ?¬ë¦¬ ê³¼ê±°??ëª¨ë“  ê²ƒì„ ê¸°ì–µ?˜ê³  ?ˆë‹¤. ë°˜ì§?´ëŠ” ê²ƒì„ ì¢‹ì•„?´ì„œ ?ì£¼ ?”ì³?¨ë‹¤.",
                origin: "ë¶ìœ ??? í™”",
                    relationships: [
                        {
                            id: "god_odin", type: "master", desc: "ì£¼êµ°",
                            sprites: {
                                idle: "images/muninn_crow.png",
                                joy: "images/muninn_crow_joy.png",
                                sad: "images/muninn_crow_sad.png",
                                angry: "images/muninn_crow_angry.png",
                                skill: "images/muninn_crow_skill.png",
                                gallery: "images/muninn_crow_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Dark, ê¸°ì–µ??ê¹Œë§ˆê·€ ë¬´ë‹Œ",
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, ê¸°ì–µ??ê¹Œë§ˆê·€ ë¬´ë‹Œ special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?¤ë”˜??ê¸°ì–µ",
                                story: "?¤ë”˜???´ê¹¨???‰ì•„ ?¸ìƒ??ê¸°ì–µ???ì‚­?´ëŠ” ê¹Œë§ˆê·€. ?„ê¸´(?ê°)ê³¼ëŠ” ?¬ë¦¬ ê³¼ê±°??ëª¨ë“  ê²ƒì„ ê¸°ì–µ?˜ê³  ?ˆë‹¤. ë°˜ì§?´ëŠ” ê²ƒì„ ì¢‹ì•„?´ì„œ ?ì£¼ ?”ì³?¨ë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "eagle_iron", type: "rival", desc: "?˜ëŠ˜???¼ì´ë²? }
                    ],
                        synergy: { ally: ["god_odin", "eagle_iron"], rival: [] }
    },
    lines: { normal: "ê¹Œì•…! ?˜ëŠ” ëª¨ë“  ê²ƒì„ ê¸°ì–µ?œë‹¤!" }
},
{
    id: "elk_golden",
        name: "?©ê¸ˆ ë¿??„ì´?¬ì‰¬ë¥´ë‹ˆë¥?,
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,
                    elements: ["Nature", "Light"],
                        baseStr: 35, baseInt: 20,
                            image: "images/creatures/asgard/elk_golden.png",
                                lore: {
        title: "ë°œí• ?¼ì˜ ?˜í˜¸??,
            story: "ë°œí• ??ì§€ë¶??„ì—???¼ì—?¼ë“œ ?˜ë¬´???ì„ ??–´ë¨¹ëŠ” ê±°ë????¬ìŠ´. ë¿”ì—??ë§‘ì? ë¬¼ì´ ?˜ëŸ¬?˜ì? ëª¨ë“  ê°•ì˜ ê·¼ì›???œë‹¤ê³??œë‹¤. ? ì„±??ì¡´ì¬ë¡??¬ê²¨ì§„ë‹¤.",
                origin: "ë¶ìœ ??? í™” / ë°œí• ??,
                    relationships: [
                        {
                            id: "god_odin", type: "master", desc: "ë°œí• ?¼ì˜ ì£¼ì¸",
                            sprites: {
                                idle: "images/elk_golden.png",
                                joy: "images/elk_golden_joy.png",
                                sad: "images/elk_golden_sad.png",
                                angry: "images/elk_golden_angry.png",
                                skill: "images/elk_golden_skill.png",
                                gallery: "images/elk_golden_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Nature, Light, ?©ê¸ˆ ë¿??„ì´?¬ì‰¬ë¥´ë‹ˆë¥?,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?©ê¸ˆ ë¿??„ì´?¬ì‰¬ë¥´ë‹ˆë¥?special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "ë°œí• ?¼ì˜ ?˜í˜¸??,
                                story: "ë°œí• ??ì§€ë¶??„ì—???¼ì—?¼ë“œ ?˜ë¬´???ì„ ??–´ë¨¹ëŠ” ê±°ë????¬ìŠ´. ë¿”ì—??ë§‘ì? ë¬¼ì´ ?˜ëŸ¬?˜ì? ëª¨ë“  ê°•ì˜ ê·¼ì›???œë‹¤ê³??œë‹¤. ? ì„±??ì¡´ì¬ë¡??¬ê²¨ì§„ë‹¤.",
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
                                gift: ["ê³ ë§™??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "ratatoskr_squirrel", type: "friend", desc: "?˜ë¬´ ì¹œêµ¬" }
                    ],
                        synergy: { ally: ["god_odin", "ratatoskr_squirrel"], rival: [] }
    },
    lines: { normal: "??ë¿”ì—???ë¥´???ëª…??ë¬¼ì„ ë³´ì•„??" }
},
{
    id: "bifrost_wisp",
        name: "ë¹„í”„ë¡œìŠ¤?¸ì˜ ?•ë ¹",
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Rainbow"],
                        baseStr: 5, baseInt: 15,
                            image: "images/creatures/asgard/bifrost_wisp.png",
                                lore: {
        title: "ë¬´ì?ê°??¤ë¦¬??ì¡°ê°",
            story: "? ë“¤???¸ê³„?€ ?¸ê°„ ?¸ê³„ë¥??‡ëŠ” ë¬´ì?ê°??¤ë¦¬ ë¹„í”„ë¡œìŠ¤?¸ì—???¨ì–´???˜ì˜¨ ?‘ì? ë¹›ì˜ ì¡°ê°.",
                origin: "?„ìŠ¤ê°€ë¥´ë“œ",
                    relationships: [],
                        synergy: {
                            ally: ["heimdall_horn"], rival: [],
                                sprites: {
                idle: "images/bifrost_wisp.png",
                    joy: "images/bifrost_wisp_joy.png",
                        sad: "images/bifrost_wisp_sad.png",
                            angry: "images/bifrost_wisp_angry.png",
                                skill: "images/bifrost_wisp_skill.png",
                                    gallery: "images/bifrost_wisp_gallery.png"
            },
            prompts: {
                base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Rainbow, ë¹„í”„ë¡œìŠ¤?¸ì˜ ?•ë ¹",
                    idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                        gallery: "cute pose, energetic, detailed, looking at viewer, ë¹„í”„ë¡œìŠ¤?¸ì˜ ?•ë ¹ special illustration, intimate atmosphere"
            },
            lore: {
                title: "ë¬´ì?ê°??¤ë¦¬??ì¡°ê°",
                    story: "? ë“¤???¸ê³„?€ ?¸ê°„ ?¸ê³„ë¥??‡ëŠ” ë¬´ì?ê°??¤ë¦¬ ë¹„í”„ë¡œìŠ¤?¸ì—???¨ì–´???˜ì˜¨ ?‘ì? ë¹›ì˜ ì¡°ê°.",
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
                        gift: ["ê³ ë§™??"],
                            special: ["!!!"]
            }
        }
    },
    lines: { normal: "ë°˜ì§ë°˜ì§~" }
},
{
    id: "einherjar_ghost",
        name: "?ì¸?¤ë´ë¥´ì˜ ??,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Ghost"],
                        baseStr: 20, baseInt: 10,
                            image: "images/creatures/asgard/einherjar_ghost.png",
                                lore: {
        title: "ë°œí• ?¼ì˜ ?ë ¹",
            story: "?¼ê·¸?˜ë¡œ?¬ë? ?€ë¹„í•´ ë°œí• ?¼ì—???ˆë ¨?˜ëŠ” ê³ ë? ?„ì‚¬???í˜¼. ??—???¸ìš°ê³?ë°¤ì—???˜ì‚´?„ë‚˜ ? ì„ ë§ˆì‹ ??",
                origin: "ë°œí• ??,
                    relationships: [{
                        id: "god_odin", type: "master", desc: "ì£¼êµ°",
                        sprites: {
                            idle: "images/einherjar_ghost.png",
                            joy: "images/einherjar_ghost_joy.png",
                            sad: "images/einherjar_ghost_sad.png",
                            angry: "images/einherjar_ghost_angry.png",
                            skill: "images/einherjar_ghost_skill.png",
                            gallery: "images/einherjar_ghost_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Ghost, ?ì¸?¤ë´ë¥´ì˜ ??,
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, ?ì¸?¤ë´ë¥´ì˜ ??special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "ë°œí• ?¼ì˜ ?ë ¹",
                            story: "?¼ê·¸?˜ë¡œ?¬ë? ?€ë¹„í•´ ë°œí• ?¼ì—???ˆë ¨?˜ëŠ” ê³ ë? ?„ì‚¬???í˜¼. ??—???¸ìš°ê³?ë°¤ì—???˜ì‚´?„ë‚˜ ? ì„ ë§ˆì‹ ??",
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
                            gift: ["ê³ ë§™??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["god_odin", "valkyrie"], rival: [] }
    },
    lines: { normal: "?¸ì??€ ?„ì§ ?ë‚˜ì§€ ?Šì•˜??" }
},
{
    id: "heimdall_horn",
        name: "ê±€?¼ë¥´?¸ë¥¸???•ë ¹",
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Sound", "Light"],
                        baseStr: 10, baseInt: 20,
                            image: "images/creatures/asgard/heimdall_horn_spirit.png",
                                lore: {
        title: "ê²½ê³„???Œë¦¬",
            story: "?¤ì„?¬ì´ ì§€?ˆê³  ?¤ë‹ˆ??ë¿”í”¼ë¦?ê±€?¼ë¥´?¸ë¥¸??ê¹ƒë“  ?•ë ¹. ?¼ê·¸?˜ë¡œ?¬ê? ?¤ë©´ ê°€??ë¨¼ì? ?Œë¦¬ì¹?ì¤€ë¹„ë? ?˜ê³  ?ˆë‹¤.",
                origin: "ë¹„í”„ë¡œìŠ¤??,
                    relationships: [],
                        synergy: {
                            ally: ["bifrost_wisp"], rival: [],
                                sprites: {
                idle: "images/heimdall_horn_spirit.png",
                    joy: "images/heimdall_horn_spirit_joy.png",
                        sad: "images/heimdall_horn_spirit_sad.png",
                            angry: "images/heimdall_horn_spirit_angry.png",
                                skill: "images/heimdall_horn_spirit_skill.png",
                                    gallery: "images/heimdall_horn_spirit_gallery.png"
            },
            prompts: {
                base: "anime style, cell shaded, 2d game art, full body, fantasy, Sound, Light, ê±€?¼ë¥´?¸ë¥¸???•ë ¹",
                    idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                        gallery: "cute pose, energetic, detailed, looking at viewer, ê±€?¼ë¥´?¸ë¥¸???•ë ¹ special illustration, intimate atmosphere"
            },
            lore: {
                title: "ê²½ê³„???Œë¦¬",
                    story: "?¤ì„?¬ì´ ì§€?ˆê³  ?¤ë‹ˆ??ë¿”í”¼ë¦?ê±€?¼ë¥´?¸ë¥¸??ê¹ƒë“  ?•ë ¹. ?¼ê·¸?˜ë¡œ?¬ê? ?¤ë©´ ê°€??ë¨¼ì? ?Œë¦¬ì¹?ì¤€ë¹„ë? ?˜ê³  ?ˆë‹¤.",
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
                        gift: ["ê³ ë§™??"],
                            special: ["!!!"]
            }
        }
    },
    lines: { normal: "?ë“¤???¤ë©´ ?´ê? ?œì¼ ë¨¼ì? ?Œë¦´ ê±°ì•¼!" }
},
{
    id: "mimir_head",
        name: "ë¯¸ë?ë¥´ì˜ ë¨¸ë¦¬",
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,
                    elements: ["Water", "Wisdom"],
                        baseStr: 5, baseInt: 50,
                            image: "images/creatures/asgard/mimir_spirit.png",
                                lore: {
        title: "ì§€?œì˜ ???˜í˜¸??,
            story: "?¤ë”˜?ê²Œ ì§€?œë? ì¤€ ë¯¸ë?ë¥´ì˜ ë¨¸ë¦¬. ëª¸ì? ?ƒì—ˆì§€ë§??¬ì „???°ì£¼ ìµœê³ ??ì§€?œë? ê°€ì§€ê³??ˆë‹¤. ë§ì´ ë§¤ìš° ë§ë‹¤.",
                origin: "ì§€?œì˜ ??,
                    relationships: [{
                        id: "god_odin", type: "friend", desc: "ë§ë²—",
                        sprites: {
                            idle: "images/mimir_spirit.png",
                            joy: "images/mimir_spirit_joy.png",
                            sad: "images/mimir_spirit_sad.png",
                            angry: "images/mimir_spirit_angry.png",
                            skill: "images/mimir_spirit_skill.png",
                            gallery: "images/mimir_spirit_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Wisdom, ë¯¸ë?ë¥´ì˜ ë¨¸ë¦¬",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ë¯¸ë?ë¥´ì˜ ë¨¸ë¦¬ special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "ì§€?œì˜ ???˜í˜¸??,
                            story: "?¤ë”˜?ê²Œ ì§€?œë? ì¤€ ë¯¸ë?ë¥´ì˜ ë¨¸ë¦¬. ëª¸ì? ?ƒì—ˆì§€ë§??¬ì „???°ì£¼ ìµœê³ ??ì§€?œë? ê°€ì§€ê³??ˆë‹¤. ë§ì´ ë§¤ìš° ë§ë‹¤.",
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
                            gift: ["ê³ ë§™??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["god_odin"], rival: [] }
    },
    lines: { normal: "??ë§ì„ ì¢€ ?¤ì–´ë³´ê²Œ, ?¤ë”˜." }
},
{
    id: "shieldmaiden",
        name: "ê°•ì² ??ë°©íŒ¨ì²˜ë?",
            rarity: RANKS.UNIQUE,
                world: WORLDS.ASGARD,
                    elements: ["Metal"],
                        baseStr: 25, baseInt: 10,
                            image: "images/creatures/asgard/shieldmaiden_iron.png",
                                lore: {
        title: "ë°œí‚¤ë¦??„ë³´??,
            story: "ë°œí‚¤ë¦¬ê? ?˜ê¸°ë¥?ê¿ˆê¾¸ë©??„ì¥???„ë¹„???¸ê°„ ?¬ì „?? ê°•ì²  ê°™ì? ?˜ì?ë¥?ì§€?”ë‹¤.",
                origin: "ë¯¸ë“œê°€ë¥´ë“œ",
                    relationships: [{
                        id: "valkyrie", type: "idol", desc: "?™ê²½???€??,
                        sprites: {
                            idle: "images/shieldmaiden_iron.png",
                            joy: "images/shieldmaiden_iron_joy.png",
                            sad: "images/shieldmaiden_iron_sad.png",
                            angry: "images/shieldmaiden_iron_angry.png",
                            skill: "images/shieldmaiden_iron_skill.png",
                            gallery: "images/shieldmaiden_iron_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, ê°•ì² ??ë°©íŒ¨ì²˜ë?",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, ê°•ì² ??ë°©íŒ¨ì²˜ë? special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "ë°œí‚¤ë¦??„ë³´??,
                            story: "ë°œí‚¤ë¦¬ê? ?˜ê¸°ë¥?ê¿ˆê¾¸ë©??„ì¥???„ë¹„???¸ê°„ ?¬ì „?? ê°•ì²  ê°™ì? ?˜ì?ë¥?ì§€?”ë‹¤.",
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
                            gift: ["ê³ ë§™??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["valkyrie"], rival: [] }
    },
    lines: { normal: "?˜ì˜ ë°©íŒ¨???«ë¦¬ì§€ ?Šì•„!" }
},
{
    id: "ulfhednar",
        name: "?¸í”„?¤ë“œ?˜ë¥´",
            rarity: RANKS.UNIQUE,
                world: WORLDS.ASGARD,
                    elements: ["Beast", "Dark"],
                        baseStr: 30, baseInt: 5,
                            image: "images/creatures/asgard/ulfhednar_wolf.png",
                                lore: {
        title: "?‘ë? ê°€ì£??„ì‚¬",
            story: "?‘ë? ê°€ì£½ì„ ?¤ì§‘?´ì“°ê³?ê´‘ì „?¬ì²˜???¸ìš°???¤ë”˜???•ì˜ˆ ë³‘ì‚¬. ê³ í†µ???ë¼ì§€ ?ŠëŠ”??",
                origin: "?„ìŠ¤ê°€ë¥´ë“œ",
                    relationships: [{
                        id: "wolf_fenrir", type: "idol", desc: "??°°",
                        sprites: {
                            idle: "images/ulfhednar_wolf.png",
                            joy: "images/ulfhednar_wolf_joy.png",
                            sad: "images/ulfhednar_wolf_sad.png",
                            angry: "images/ulfhednar_wolf_angry.png",
                            skill: "images/ulfhednar_wolf_skill.png",
                            gallery: "images/ulfhednar_wolf_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Beast, Dark, ?¸í”„?¤ë“œ?˜ë¥´",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, ?¸í”„?¤ë“œ?˜ë¥´ special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "?‘ë? ê°€ì£??„ì‚¬",
                            story: "?‘ë? ê°€ì£½ì„ ?¤ì§‘?´ì“°ê³?ê´‘ì „?¬ì²˜???¸ìš°???¤ë”˜???•ì˜ˆ ë³‘ì‚¬. ê³ í†µ???ë¼ì§€ ?ŠëŠ”??",
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
                            gift: ["ê³ ë§™??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["wolf_fenrir", "god_odin"], rival: [] }
    },
    lines: { normal: "?¬ë¥´ë¥?.. ?¤ë”˜???„í•˜??" }
},
{
    id: "wolf_pup",
        name: "?„ìŠ¤ê°€ë¥´ë“œ ?‘ë? ?ˆë¼",
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Beast"],
                        baseStr: 10, baseInt: 5,
                            image: "images/creatures/asgard/wolf_pup_asgard.png",
                                lore: {
        title: "ê·€?¬ìš´ ë§¹ìˆ˜",
            story: "?„ì§?€ ?‘ê³  ê·€?¬ìš´ ?‘ë? ?ˆë¼. ?ë¼ë©??œë¦¬ë¥´ì²˜??? ì???ëª¨ë¥¸??",
                origin: "ì² ì˜ ??,
                    relationships: [{ id: "wolf_fenrir", type: "family", desc: "ë¨?ì¡°ìƒ?" }],
                        synergy: { ally: ["wolf_fenrir"], rival: [] }
    },
    lines: { normal: "?? (ë¬´ì„œ??ì²?" }
},
{
    id: "yggdrasil_guardian",
        name: "?„ê·¸?œë¼???˜í˜¸ëª?,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Nature"],
                        baseStr: 40, baseInt: 20,
                            image: "images/creatures/asgard/yggdrasil_guardian.png",
                                lore: {
        title: "?¸ê³„?˜ì˜ ?Œìˆ˜ê¾?,
            story: "?„ê·¸?œë¼?¤ì˜ ë¿Œë¦¬ë¥?ê°‰ì•„ë¨¹ëŠ” ?ˆë“œ?¸ê·¸ë¥?ê°ì‹œ?˜ëŠ” ?´ì•„?ˆëŠ” ?˜ë¬´.",
                origin: "?„ê·¸?œë¼??,
                    relationships: [{ id: "ratatoskr_squirrel", type: "friend", desc: "?˜ë­‡ê°€ì§€???¬ëŠ” ì¹œêµ¬" }],
                        synergy: { ally: ["ratatoskr_squirrel"], rival: [] }
    },
    lines: { normal: "?¸ê³„?˜ëŠ” ?´ê? ì§€?¨ë‹¤." }
},
{
    id: "god_thor",
        name: "ì²œë‘¥????? ë¥´",
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Electric", "Metal"],
                        baseStr: 80, baseInt: 20,
                            image: "images/god_thor.png",
                                lore: {
        title: "?„ìŠ¤ê°€ë¥´ë“œ???˜í˜¸??,
            story: "?¤ë”˜???„ë“¤?´ì ê°€??ê°•ë ¥???„ì‚¬. ë¬ ë‹ˆë¥´ë? ?˜ë‘ë¥´ë©° ê±°ì¸?¤ì„ ë¬¼ë¦¬ì¹œë‹¤. ?¨ìˆœ?˜ê³  ?¸ì¾Œ???±ê²©?¼ë¡œ, ë¡œí‚¤???¥ë‚œ???ì£¼ ?¹í•˜ì§€ë§?ê²°êµ­ ?˜ìœ¼ë¡??´ê²°?œë‹¤.",
                origin: "ë¶ìœ ??? í™” / ?„ìŠ¤ê°€ë¥´ë“œ",
                    relationships: [
                        { id: "god_loki", type: "rival", desc: "ê³¨ì¹˜ ?„í”ˆ ?˜í˜•?? },
                        { id: "snake_world_jormungandr", type: "rival", desc: "?™ì " }
                    ],
                        synergy: { ally: ["god_odin", "sif"], rival: ["snake_world_jormungandr"] }
    },
    lines: { normal: "ì²œë‘¥???˜ì„ ë³´ì—¬ì£¼ë§ˆ!" }
},
{
    id: "nordic_cat_freya",
        name: "?„ë ˆ?´ì•¼??ê³ ì–‘??,
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Beast", "Light"],
                        baseStr: 10, baseInt: 10,
                            image: "images/creatures/unknown/nordic_cat_freya.png",
                                lore: {
        title: "?¬ì‹ ??? ì™„ë¬?,
            story: "?„ë ˆ?´ì•¼???„ì°¨ë¥??„ëŠ” ê±°ë???ê³ ì–‘?´ë“¤. ?©ì¹˜???¬ì?ë§?? êµê°€ ë§ë‹¤.",
                origin: "ë¶ìœ ??? í™”",
                    relationships: [{ id: "god_freya", type: "master", desc: "ì£¼ì¸?? }],
                        synergy: { ally: ["god_freya"], rival: [] }
    },
    lines: { normal: "?¼ì˜¹~ (ê°€ë¥´ë¦‰ê±°ë¦°??" }
},
{
    id: "snow_spirit",
        name: "?ˆì˜ ?•ë ¹",
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Ice"],
                        baseStr: 5, baseInt: 15,
                            image: "images/creatures/unknown/creature_snow_spirit.png",
                                lore: {
        title: "ì°¨ê????¨ê²°",
            story: "?ˆí”Œ?¤ì„???ˆë³´???ì—???œì–´???•ë ¹. ?‘ì?ë§?ì°¨ê???ê¸°ìš´???´ë¿œ?”ë‹¤.",
                origin: "?ˆí”Œ?¤ì„",
                    relationships: [{ id: "bear_ice", type: "friend", desc: "?¨ê»˜ ?¸ëŠ” ì¹œêµ¬" }],
                        synergy: { ally: ["bear_ice"], rival: ["mage_flame"] }
    },
    lines: { normal: "ì°¨ê???.." }
},
{
    id: "sif",
        name: "?©ê¸ˆ???¬ì‹  ?œí”„",
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,

                    elements: ["Earth", "Light"],
                        baseStr: 30, baseInt: 40,
                            image: "images/sif.png",
                                lore: {
        title: "?€ì§€??ê²°ì‹¤",
            story: "? ë¥´???„ë‚´?´ì ?˜í™•???¬ì‹ . ë¡œí‚¤ê°€ ?¥ë‚œ?¼ë¡œ ?ë¥¸ ë¨¸ë¦¬ì¹´ë½ ?€???œì›Œ?„ê? ë§Œë“¤?´ì? ?©ê¸ˆ ë¨¸ë¦¿ê²°ì„ ê°€ì§€ê³??ˆë‹¤.",
                origin: "ë¶ìœ ??? í™”",
                    relationships: [
                        { id: "god_thor", type: "family", desc: "?¨í¸" },
                        { id: "god_loki", type: "rival", desc: "??ë¨¸ë¦¬ì¹´ë½???”ì¹œ ?? }
                    ],
                        synergy: { ally: ["god_thor"], rival: ["god_loki"] }
    },
    lines: { normal: "ê°€?„ì˜ ?ìš”ë¡œì????¹ì‹ ?ê²Œ." }


},
{
    id: "valhalla_guard",
        name: "ë°œí• ??ê²½ë¹„ë³?,
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Metal"],
                        baseStr: 15, baseInt: 5,
                            image: "images/placeholder_asgard.png"

}
];
