        name: "?�지??방패 그로??,
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,
                    elements: ["Earth", "Nature"],
                        ego: "Devotion",
                            baseStr: 45, baseInt: 15,
                                image: "images/creatures/wild/creature_giant_hill.png",
                                    lore: {
        title: "?�을 ?��? 거인",
            story: "?�리 거인족의 ?�예. 거�???체구???�울리�? ?�게 ?�순?�고 가족을 ?�랑?�다. ?��? ?�명체들??지?�는 것이 취�??�며, ?�투?�서???�료�??�해 거�???몸으�?방패가 ?�다.",
                origin: "북유???�화 / ?�툰?�임",
                    relationships: [
                        {
                            id: "titan_atlas", type: "ally", desc: "거인�??�배. ?�동 ?�승",
                            sprites: {
                                idle: "images/creature_giant_hill.png?v=3",
                                joy: "images/creature_giant_hill_joy.png?v=3",
                                sad: "images/creature_giant_hill_sad.png?v=3",
                                angry: "images/creature_giant_hill_angry.png?v=3",
                                skill: "images/creature_giant_hill_skill.png?v=3",
                                gallery: "images/creature_giant_hill_gallery.png?v=3"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Earth, Nature, ?�지??방패 그로??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?�지??방패 그로??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�을 ?��? 거인",
                                story: "?�리 거인족의 ?�예. 거�???체구???�울리�? ?�게 ?�순?�고 가족을 ?�랑?�다. ?��? ?�명체들??지?�는 것이 취�??�며, ?�투?�서???�료�??�해 거�???몸으�?방패가 ?�다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "golem_mud", type: "ally", desc: "?�한 것들?�리???�정" }
                    ],
                        synergy: { ally: ["titan_atlas", "golem_mud", "bear_ice"], rival: [] }
    },
    lines: { normal: "?��? 친구~ ?�었??가." }
},
{
    id: "dwarf_smith",
        name: "?�워???�?�장??,
            rarity: RANKS.SPECIAL,
                world: WORLDS.ASGARD,
                    elements: ["Metal", "Fire"],
                        baseStr: 18, baseInt: 15,
                            image: "images/creature_dwarf.png?v=4",
                                lore: {
        title: "묠니르의 ?�작??,
            story: "?�스가르드 최고??무기?�인. ?�르??망치 묠니르�? 만든 ?�인 가문의 ?�손. ?�을 마시�??�작 ?�도가 빨라지지�??�성?�이 ?�상?�진?? '맥주 ?????�으�??�이 ???�직여!'가 ?�버�?",
                origin: "?�스가르드 ?�다벨리�?,
                    relationships: [
                        {
                            id: "god_odin", type: "ally", desc: "?�딘??무기 공급?? ?�뢰 관�?,
                            sprites: {
                                idle: "images/creature_dwarf.png?v=4",
                                joy: "images/creature_dwarf_joy.png?v=4",
                                sad: "images/creature_dwarf_sad.png?v=4",
                                angry: "images/creature_dwarf_angry.png?v=4",
                                skill: "images/creature_dwarf_skill.png?v=4",
                                gallery: "images/creature_dwarf_gallery.png?v=4"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Fire, ?�워???�?�장??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, ?�워???�?�장??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "묠니르의 ?�작??,
                                story: "?�스가르드 최고??무기?�인. ?�르??망치 묠니르�? 만든 ?�인 가문의 ?�손. ?�을 마시�??�작 ?�도가 빨라지지�??�성?�이 ?�상?�진?? '맥주 ?????�으�??�이 ???�직여!'가 ?�버�?",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "golem_mud", type: "ally", desc: "광물 ?�공 ?�트?? }
                    ],
                        synergy: { ally: ["god_odin", "golem_mud", "eagle_iron"], rival: [] }
    },
    lines: { normal: "망치�??�작?�다! �? �? 맥주 가?��?!" }
},
{
    id: "eagle_iron",
        name: "강철 ?�수�?,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Metal", "Wind"],
                        baseStr: 10, baseInt: 8,
                            image: "images/creatures/wild/creature_eagle_iron.png",
                                lore: {
        title: "?�늘???�찰??,
            story: "강철�????�개�?가�??�비로운 ?�수�? ?�상 ?�에???�까지 ?�아?�니�??�딘?�게 ?�보�?보고?�다. ?�개 깃털 ?�나로도 검??만들 ???�을 만큼 강하�??�카�?��. ?��? 곳에???�려?�보??�?좋아?�다.",
                origin: "?�스가르드 ?�늘",
                    relationships: [
                        {
                            id: "valkyrie", type: "ally", desc: "발키리�? ?�께 ?�장???�찰",
                            sprites: {
                                idle: "images/creature_eagle_iron.png?v=3",
                                joy: "images/creature_eagle_iron_joy.png?v=3",
                                sad: "images/creature_eagle_iron_sad.png?v=3",
                                angry: "images/creature_eagle_iron_angry.png?v=3",
                                skill: "images/creature_eagle_iron_skill.png?v=3",
                                gallery: "images/creature_eagle_iron_gallery.png?v=3"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, Wind, 강철 ?�수�?,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, 강철 ?�수�?special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�늘???�찰??,
                                story: "강철�????�개�?가�??�비로운 ?�수�? ?�상 ?�에???�까지 ?�아?�니�??�딘?�게 ?�보�?보고?�다. ?�개 깃털 ?�나로도 검??만들 ???�을 만큼 강하�??�카�?��. ?��? 곳에???�려?�보??�?좋아?�다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "cloud_puff", type: "ally", desc: "구름 ?�사???�에???�식" }
                    ],
                        synergy: { ally: ["valkyrie", "cloud_puff", "centaur_scout"], rival: [] }
    },
    lines: { normal: "?�개??강철?��?. ?�늘?�서 모든 �?본다!" }
},
{
    id: "bear_ice",
        name: "만년??�?,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Ice", "Water"],
                        baseStr: 15, baseInt: 3,
                            image: "images/creatures/asgard/creature_bear_ice.png",
                                lore: {
        title: "?�어붙�? ?�효",
            story: "북극??만년???�에???�어???�설??�? ?�품 ??번에 ?�보?��? ?�고, ?�효 ??번에 빙하가 무너진다. 겉�? 무섭지�??�끼 물개???�는 �?좋아?�는 츤데?? ?�어�?매우 좋아?�다.",
                origin: "?�스가르드 ?�플?�임",
                    relationships: [
                        {
                            id: "giant_hill", type: "ally", desc: "거인�?곰의 ?�든??조합",
                            sprites: {
                                idle: "images/creature_bear_ice.png?v=3",
                                joy: "images/creature_bear_ice_joy.png?v=3",
                                sad: "images/creature_bear_ice_sad.png?v=3",
                                angry: "images/creature_bear_ice_angry.png?v=3",
                                skill: "images/creature_bear_ice_skill.png?v=3",
                                gallery: "images/creature_bear_ice_gallery.png?v=3"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Ice, Water, 만년??�?,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, 만년??�?special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�어붙�? ?�효",
                                story: "북극??만년???�에???�어???�설??�? ?�품 ??번에 ?�보?��? ?�고, ?�효 ??번에 빙하가 무너진다. 겉�? 무섭지�??�끼 물개???�는 �?좋아?�는 츤데?? ?�어�?매우 좋아?�다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "mage_flame", type: "rival", desc: "불과 ?�음?� ?�극!" }
                    ],
                        synergy: { ally: ["giant_hill", "snow_spirit"], rival: ["mage_flame", "phoenix_eternal"] }
    },
    lines: { normal: "추위???�숙?? ?�어 �?거야? ??.. �? ??줘도 ??.." }
},
{
    id: "god_loki",
        name: "?�난????로키",
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Dark", "Magic", "Chaos"],
                        baseStr: 25, baseInt: 65,
                            image: "images/creatures/asgard/god_loki.png", // Restored image
                                lore: {
        title: "변?�의 귀??,
            story: "?�딘???�형?�이???�스가르드 최고???�릭?�터. 지루함??참�? 못해 각종 ?�고�?치�?�? ?�로??기발??꾀�??�들??구하기도 ?�다. ?�리르�? ?�르문간?�의 ?�버지.",
                origin: "북유???�화 / ?�스가르드",
                    relationships: [
                        {
                            id: "god_odin", type: "ally", desc: "?�증??관�? ?�형??,
                            sprites: {
                                idle: "images/creature_god_loki.png",
                                joy: "images/creature_god_loki_joy.png",
                                sad: "images/creature_god_loki_sad.png",
                                angry: "images/creature_god_loki_angry.png",
                                skill: "images/creature_god_loki_skill.png",
                                gallery: "images/creature_god_loki_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Magic, Chaos, ?�난????로키",
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?�난????로키 special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "변?�의 귀??,
                                story: "?�딘???�형?�이???�스가르드 최고???�릭?�터. 지루함??참�? 못해 각종 ?�고�?치�?�? ?�로??기발??꾀�??�들??구하기도 ?�다. ?�리르�? ?�르문간?�의 ?�버지.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "wolf_fenrir", type: "family", desc: "?�의 ?�랑?�는 ?�들" }
                    ],
                        synergy: { ally: ["wolf_fenrir", "snake_world_jormungandr"], rival: ["god_thor"] }
    },
    lines: { normal: "?�심?�데, �??��??�는 ???�나?" }
},
{
    id: "god_freya",
        name: "미의 ?�신 ?�레?�야",
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Magic"],
                        baseStr: 30, baseInt: 60,
                            image: "images/creatures/asgard/god_freya.png", // Restored image
                                lore: {
        title: "?�장??지배자",
            story: "?�랑�??�쟁???�시??관?�하???�신. 발키리들??진정???�?�이�? ?�사???�웅?�의 ?�반?� 그�???몫이?? ?�금�?보석, 그리�??�름?�운 고양?��? 좋아?�다.",
                origin: "북유???�화 / ?�크�?,
                    relationships: [
                        {
                            id: "god_odin", type: "rival", desc: "?�혼 ?�탈??경쟁??,
                            sprites: {
                                idle: "images/creature_god_freya.png",
                                joy: "images/creature_god_freya_joy.png",
                                sad: "images/creature_god_freya_sad.png",
                                angry: "images/creature_god_freya_angry.png",
                                skill: "images/creature_god_freya_skill.png",
                                gallery: "images/creature_god_freya_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Magic, 미의 ?�신 ?�레?�야",
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 미의 ?�신 ?�레?�야 special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�장??지배자",
                                story: "?�랑�??�쟁???�시??관?�하???�신. 발키리들??진정???�?�이�? ?�사???�웅?�의 ?�반?� 그�???몫이?? ?�금�?보석, 그리�??�름?�운 고양?��? 좋아?�다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "nordic_cat_freya", type: "pet", desc: "?�랑?�는 ?�완�? }
                    ],
                        synergy: { ally: ["valkyrie", "nordic_cat_freya"], rival: [] }
    },
    lines: { normal: "?�름?��??� �??�체�?무기??�?" }
},
{
    id: "snake_world_jormungandr",
        name: "미드가르드 뱀 ?�르문간??,
            rarity: RANKS.UR,
                world: WORLDS.ASGARD,
                    elements: ["Water", "Dark", "Poison"],
                        baseStr: 70, baseInt: 40,
                            image: "images/creatures/asgard/creature_snake_world_jormungandr.png", // Restored image
                                lore: {
        title: "?�계�?감는 뱀",
            story: "로키???�식 �??�나. ?�어?�자마자 바다??버려졌으?? ?�무 거�??�져???�간 ?�계(미드가르드)�???바�?감고 ?�신??꼬리�?물고 ?�다. ?�르?�???�적 관�?",
                origin: "북유???�화 / 미드가르드 바다",
                    relationships: [
                        {
                            id: "god_loki", type: "family", desc: "?�버지",
                            sprites: {
                                idle: "images/creature_snake_world_jormungandr.png",
                                joy: "images/creature_snake_world_jormungandr_joy.png",
                                sad: "images/creature_snake_world_jormungandr_sad.png",
                                angry: "images/creature_snake_world_jormungandr_angry.png",
                                skill: "images/creature_snake_world_jormungandr_skill.png",
                                gallery: "images/creature_snake_world_jormungandr_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Dark, Poison, 미드가르드 뱀 ?�르문간??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 미드가르드 뱀 ?�르문간??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�계�?감는 뱀",
                                story: "로키???�식 �??�나. ?�어?�자마자 바다??버려졌으?? ?�무 거�??�져???�간 ?�계(미드가르드)�???바�?감고 ?�신??꼬리�?물고 ?�다. ?�르?�???�적 관�?",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "god_thor", type: "rival", desc: "?�그?�로?�의 ?�적" }
                    ],
                        synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_thor"] }
    },
    lines: { normal: "바다가 ?�어?�른??.." }
},
{
    id: "ratatoskr_squirrel",
        name: "메신?� ?��??�스??,
            rarity: RANKS.UNIQUE,
                world: WORLDS.ASGARD,
                    elements: ["Wind", "Beast"],
                        baseStr: 10, baseInt: 15,
                            image: "images/creatures/asgard/ratatoskr_squirrel.png", // Restored image
                                lore: {
        title: "?�계?�의 ?�다?�이",
            story: "?�그?�라?�을 ?�르?�리�??�수리�? ?�드?�그 ?�이�??�간질하???�람�? ?�갖 ?�문??근원지?�며, ?�보 ?�집 ?�력???�월?�다.",
                origin: "북유???�화 / ?�그?�라??,
                    relationships: [
                        {
                            id: "eagle_iron", type: "rival", desc: "골탕먹이�?좋�? ?��?",
                            sprites: {
                                idle: "images/ratatoskr_squirrel.png",
                                joy: "images/ratatoskr_squirrel_joy.png",
                                sad: "images/ratatoskr_squirrel_sad.png",
                                angry: "images/ratatoskr_squirrel_angry.png",
                                skill: "images/ratatoskr_squirrel_skill.png",
                                gallery: "images/ratatoskr_squirrel_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Beast, 메신?� ?��??�스??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, 메신?� ?��??�스??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�계?�의 ?�다?�이",
                                story: "?�그?�라?�을 ?�르?�리�??�수리�? ?�드?�그 ?�이�??�간질하???�람�? ?�갖 ?�문??근원지?�며, ?�보 ?�집 ?�력???�월?�다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "yggdrasil_guardian", type: "home", desc: "?�의 ?�?�터" }
                    ],
                        synergy: { ally: ["eagle_iron", "muninn_crow"], rival: [] }
    },
    lines: { normal: "그거 ?�었?? ?�딘 ?�이 글??.." }
},
{
    id: "god_hel",
        name: "지?�의 ?�왕 ??,
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Dark", "Ice", "Death"],
                        baseStr: 30, baseInt: 70,
                            image: "images/creatures/asgard/god_hel.png", // Restored image (originally god_hel.png)
                                lore: {
        title: "?�플?�임??지배자",
            story: "로키???�이??죽�? ?�들???�왕. 반�? ?�름?�운 ?�인, 반�? ?�어가???�체??모습???�고 ?�다. ?�그?�로?????�톱?�로 만든 �??��??�르�??��??�스가르드�?침공?�다.",
                origin: "북유???�화 / ?�플?�임",
                    relationships: [
                        {
                            id: "god_loki", type: "family", desc: "?�버지",
                            sprites: {
                                idle: "images/creature_god_hel.png",
                                joy: "images/creature_god_hel_joy.png",
                                sad: "images/creature_god_hel_sad.png",
                                angry: "images/creature_god_hel_angry.png",
                                skill: "images/creature_god_hel_skill.png",
                                gallery: "images/creature_god_hel_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Death, 지?�의 ?�왕 ??,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 지?�의 ?�왕 ??special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�플?�임??지배자",
                                story: "로키???�이??죽�? ?�들???�왕. 반�? ?�름?�운 ?�인, 반�? ?�어가???�체??모습???�고 ?�다. ?�그?�로?????�톱?�로 만든 �??��??�르�??��??�스가르드�?침공?�다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "wolf_fenrir", type: "family", desc: "?�빠" },
                        { id: "god_odin", type: "rival", desc: "?��? 관�? }
                    ],
                        synergy: { ally: ["god_loki", "wolf_fenrir"], rival: ["god_odin", "valkyrie"] }
    },
    lines: { normal: "???�는 ?�곳???????�다..." }
},
{
    id: "muninn_crow",
        name: "기억??까마귀 무닌",
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Wind", "Dark"],
                        baseStr: 15, baseInt: 25,
                            image: "images/creatures/asgard/muninn_crow.png",
                                lore: {
        title: "?�딘??기억",
            story: "?�딘???�깨???�아 ?�상??기억???�삭?�는 까마귀. ?�긴(?�각)과는 ?�리 과거??모든 것을 기억?�고 ?�다. 반짝?�는 것을 좋아?�서 ?�주 ?�쳐?�다.",
                origin: "북유???�화",
                    relationships: [
                        {
                            id: "god_odin", type: "master", desc: "주군",
                            sprites: {
                                idle: "images/muninn_crow.png",
                                joy: "images/muninn_crow_joy.png",
                                sad: "images/muninn_crow_sad.png",
                                angry: "images/muninn_crow_angry.png",
                                skill: "images/muninn_crow_skill.png",
                                gallery: "images/muninn_crow_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Wind, Dark, 기억??까마귀 무닌",
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "cute pose, energetic, detailed, looking at viewer, 기억??까마귀 무닌 special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "?�딘??기억",
                                story: "?�딘???�깨???�아 ?�상??기억???�삭?�는 까마귀. ?�긴(?�각)과는 ?�리 과거??모든 것을 기억?�고 ?�다. 반짝?�는 것을 좋아?�서 ?�주 ?�쳐?�다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "eagle_iron", type: "rival", desc: "?�늘???�이�? }
                    ],
                        synergy: { ally: ["god_odin", "eagle_iron"], rival: [] }
    },
    lines: { normal: "까악! ?�는 모든 것을 기억?�다!" }
},
{
    id: "elk_golden",
        name: "?�금 �??�이?�쉬르니�?,
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,
                    elements: ["Nature", "Light"],
                        baseStr: 35, baseInt: 20,
                            image: "images/creatures/asgard/elk_golden.png",
                                lore: {
        title: "발할?�의 ?�호??,
            story: "발할??지�??�에???�에?�드 ?�무???�을 ??��먹는 거�????�슴. 뿔에??맑�? 물이 ?�러?��? 모든 강의 근원???�다�??�다. ?�성??존재�??�겨진다.",
                origin: "북유???�화 / 발할??,
                    relationships: [
                        {
                            id: "god_odin", type: "master", desc: "발할?�의 주인",
                            sprites: {
                                idle: "images/elk_golden.png",
                                joy: "images/elk_golden_joy.png",
                                sad: "images/elk_golden_sad.png",
                                angry: "images/elk_golden_angry.png",
                                skill: "images/elk_golden_skill.png",
                                gallery: "images/elk_golden_gallery.png"
                            },
                            prompts: {
                                base: "anime style, cell shaded, 2d game art, full body, fantasy, Nature, Light, ?�금 �??�이?�쉬르니�?,
                                idle: "standing pose, confident, neutral expression",
                                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                                sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, ?�금 �??�이?�쉬르니�?special illustration, intimate atmosphere"
                            },
                            lore: {
                                title: "발할?�의 ?�호??,
                                story: "발할??지�??�에???�에?�드 ?�무???�을 ??��먹는 거�????�슴. 뿔에??맑�? 물이 ?�러?��? 모든 강의 근원???�다�??�다. ?�성??존재�??�겨진다.",
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
                                gift: ["고맙??"],
                                special: ["!!!"]
                            }
                        },
                        { id: "ratatoskr_squirrel", type: "friend", desc: "?�무 친구" }
                    ],
                        synergy: { ally: ["god_odin", "ratatoskr_squirrel"], rival: [] }
    },
    lines: { normal: "??뿔에???�르???�명??물을 보아??" }
},
{
    id: "bifrost_wisp",
        name: "비프로스?�의 ?�령",
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Rainbow"],
                        baseStr: 5, baseInt: 15,
                            image: "images/creatures/asgard/bifrost_wisp.png",
                                lore: {
        title: "무�?�??�리??조각",
            story: "?�들???�계?� ?�간 ?�계�??�는 무�?�??�리 비프로스?�에???�어???�온 ?��? 빛의 조각.",
                origin: "?�스가르드",
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
                base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Rainbow, 비프로스?�의 ?�령",
                    idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                        gallery: "cute pose, energetic, detailed, looking at viewer, 비프로스?�의 ?�령 special illustration, intimate atmosphere"
            },
            lore: {
                title: "무�?�??�리??조각",
                    story: "?�들???�계?� ?�간 ?�계�??�는 무�?�??�리 비프로스?�에???�어???�온 ?��? 빛의 조각.",
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
                        gift: ["고맙??"],
                            special: ["!!!"]
            }
        }
    },
    lines: { normal: "반짝반짝~" }
},
{
    id: "einherjar_ghost",
        name: "?�인?�랴르의 ??,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Ghost"],
                        baseStr: 20, baseInt: 10,
                            image: "images/creatures/asgard/einherjar_ghost.png",
                                lore: {
        title: "발할?�의 ?�령",
            story: "?�그?�로?��? ?�비해 발할?�에???�련?�는 고�? ?�사???�혼. ??��???�우�?밤에???�살?�나 ?�을 마신??",
                origin: "발할??,
                    relationships: [{
                        id: "god_odin", type: "master", desc: "주군",
                        sprites: {
                            idle: "images/einherjar_ghost.png",
                            joy: "images/einherjar_ghost_joy.png",
                            sad: "images/einherjar_ghost_sad.png",
                            angry: "images/einherjar_ghost_angry.png",
                            skill: "images/einherjar_ghost_skill.png",
                            gallery: "images/einherjar_ghost_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Light, Ghost, ?�인?�랴르의 ??,
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, ?�인?�랴르의 ??special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "발할?�의 ?�령",
                            story: "?�그?�로?��? ?�비해 발할?�에???�련?�는 고�? ?�사???�혼. ??��???�우�?밤에???�살?�나 ?�을 마신??",
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
                            gift: ["고맙??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["god_odin", "valkyrie"], rival: [] }
    },
    lines: { normal: "?��??� ?�직 ?�나지 ?�았??" }
},
{
    id: "heimdall_horn",
        name: "걀?�르?�른???�령",
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Sound", "Light"],
                        baseStr: 10, baseInt: 20,
                            image: "images/creatures/asgard/heimdall_horn_spirit.png",
                                lore: {
        title: "경계???�리",
            story: "?�임?�이 지?�고 ?�니??뿔피�?걀?�르?�른??깃든 ?�령. ?�그?�로?��? ?�면 가??먼�? ?�리�?준비�? ?�고 ?�다.",
                origin: "비프로스??,
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
                base: "anime style, cell shaded, 2d game art, full body, fantasy, Sound, Light, 걀?�르?�른???�령",
                    idle: "standing pose, confident, neutral expression",
                        joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                                angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                                    skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                        gallery: "cute pose, energetic, detailed, looking at viewer, 걀?�르?�른???�령 special illustration, intimate atmosphere"
            },
            lore: {
                title: "경계???�리",
                    story: "?�임?�이 지?�고 ?�니??뿔피�?걀?�르?�른??깃든 ?�령. ?�그?�로?��? ?�면 가??먼�? ?�리�?준비�? ?�고 ?�다.",
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
                        gift: ["고맙??"],
                            special: ["!!!"]
            }
        }
    },
    lines: { normal: "?�들???�면 ?��? ?�일 먼�? ?�릴 거야!" }
},
{
    id: "mimir_head",
        name: "미�?르의 머리",
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,
                    elements: ["Water", "Wisdom"],
                        baseStr: 5, baseInt: 50,
                            image: "images/creatures/asgard/mimir_spirit.png",
                                lore: {
        title: "지?�의 ???�호??,
            story: "?�딘?�게 지?��? 준 미�?르의 머리. 몸�? ?�었지�??�전???�주 최고??지?��? 가지�??�다. 말이 매우 많다.",
                origin: "지?�의 ??,
                    relationships: [{
                        id: "god_odin", type: "friend", desc: "말벗",
                        sprites: {
                            idle: "images/mimir_spirit.png",
                            joy: "images/mimir_spirit_joy.png",
                            sad: "images/mimir_spirit_sad.png",
                            angry: "images/mimir_spirit_angry.png",
                            skill: "images/mimir_spirit_skill.png",
                            gallery: "images/mimir_spirit_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Water, Wisdom, 미�?르의 머리",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 미�?르의 머리 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "지?�의 ???�호??,
                            story: "?�딘?�게 지?��? 준 미�?르의 머리. 몸�? ?�었지�??�전???�주 최고??지?��? 가지�??�다. 말이 매우 많다.",
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
                            gift: ["고맙??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["god_odin"], rival: [] }
    },
    lines: { normal: "??말을 좀 ?�어보게, ?�딘." }
},
{
    id: "shieldmaiden",
        name: "강철??방패처�?",
            rarity: RANKS.UNIQUE,
                world: WORLDS.ASGARD,
                    elements: ["Metal"],
                        baseStr: 25, baseInt: 10,
                            image: "images/creatures/asgard/shieldmaiden_iron.png",
                                lore: {
        title: "발키�??�보??,
            story: "발키리�? ?�기�?꿈꾸�??�장???�비???�간 ?�전?? 강철 같�? ?��?�?지?�다.",
                origin: "미드가르드",
                    relationships: [{
                        id: "valkyrie", type: "idol", desc: "?�경???�??,
                        sprites: {
                            idle: "images/shieldmaiden_iron.png",
                            joy: "images/shieldmaiden_iron_joy.png",
                            sad: "images/shieldmaiden_iron_sad.png",
                            angry: "images/shieldmaiden_iron_angry.png",
                            skill: "images/shieldmaiden_iron_skill.png",
                            gallery: "images/shieldmaiden_iron_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Metal, 강철??방패처�?",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, 강철??방패처�? special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "발키�??�보??,
                            story: "발키리�? ?�기�?꿈꾸�??�장???�비???�간 ?�전?? 강철 같�? ?��?�?지?�다.",
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
                            gift: ["고맙??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["valkyrie"], rival: [] }
    },
    lines: { normal: "?�의 방패???�리지 ?�아!" }
},
{
    id: "ulfhednar",
        name: "?�프?�드?�르",
            rarity: RANKS.UNIQUE,
                world: WORLDS.ASGARD,
                    elements: ["Beast", "Dark"],
                        baseStr: 30, baseInt: 5,
                            image: "images/creatures/asgard/ulfhednar_wolf.png",
                                lore: {
        title: "?��? 가�??�사",
            story: "?��? 가죽을 ?�집?�쓰�?광전?�처???�우???�딘???�예 병사. 고통???�끼지 ?�는??",
                origin: "?�스가르드",
                    relationships: [{
                        id: "wolf_fenrir", type: "idol", desc: "??��",
                        sprites: {
                            idle: "images/ulfhednar_wolf.png",
                            joy: "images/ulfhednar_wolf_joy.png",
                            sad: "images/ulfhednar_wolf_sad.png",
                            angry: "images/ulfhednar_wolf_angry.png",
                            skill: "images/ulfhednar_wolf_skill.png",
                            gallery: "images/ulfhednar_wolf_gallery.png"
                        },
                        prompts: {
                            base: "anime style, cell shaded, 2d game art, full body, fantasy, Beast, Dark, ?�프?�드?�르",
                            idle: "standing pose, confident, neutral expression",
                            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                            sad: "sad expression, looking down, tears, injured, dark atmosphere",
                            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                            gallery: "cute pose, energetic, detailed, looking at viewer, ?�프?�드?�르 special illustration, intimate atmosphere"
                        },
                        lore: {
                            title: "?��? 가�??�사",
                            story: "?��? 가죽을 ?�집?�쓰�?광전?�처???�우???�딘???�예 병사. 고통???�끼지 ?�는??",
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
                            gift: ["고맙??"],
                            special: ["!!!"]
                        }
                    }],
                        synergy: { ally: ["wolf_fenrir", "god_odin"], rival: [] }
    },
    lines: { normal: "?�르�?.. ?�딘???�하??" }
},
{
    id: "wolf_pup",
        name: "?�스가르드 ?��? ?�끼",
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Beast"],
                        baseStr: 10, baseInt: 5,
                            image: "images/creatures/asgard/wolf_pup_asgard.png",
                                lore: {
        title: "귀?�운 맹수",
            story: "?�직?� ?�고 귀?�운 ?��? ?�끼. ?�라�??�리르처???��???모른??",
                origin: "철의 ??,
                    relationships: [{ id: "wolf_fenrir", type: "family", desc: "�?조상?" }],
                        synergy: { ally: ["wolf_fenrir"], rival: [] }
    },
    lines: { normal: "?? (무서??�?" }
},
{
    id: "yggdrasil_guardian",
        name: "?�그?�라???�호�?,
            rarity: RANKS.RARE,
                world: WORLDS.ASGARD,
                    elements: ["Nature"],
                        baseStr: 40, baseInt: 20,
                            image: "images/creatures/asgard/yggdrasil_guardian.png",
                                lore: {
        title: "?�계?�의 ?�수�?,
            story: "?�그?�라?�의 뿌리�?갉아먹는 ?�드?�그�?감시?�는 ?�아?�는 ?�무.",
                origin: "?�그?�라??,
                    relationships: [{ id: "ratatoskr_squirrel", type: "friend", desc: "?�뭇가지???�는 친구" }],
                        synergy: { ally: ["ratatoskr_squirrel"], rival: [] }
    },
    lines: { normal: "?�계?�는 ?��? 지?�다." }
},
{
    id: "god_thor",
        name: "천둥?????�르",
            rarity: RANKS.SSR,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Electric", "Metal"],
                        baseStr: 80, baseInt: 20,
                            image: "images/god_thor.png",
                                lore: {
        title: "?�스가르드???�호??,
            story: "?�딘???�들?�자 가??강력???�사. 묠니르�? ?�두르며 거인?�을 물리친다. ?�순?�고 ?�쾌???�격?�로, 로키???�난???�주 ?�하지�?결국 ?�으�??�결?�다.",
                origin: "북유???�화 / ?�스가르드",
                    relationships: [
                        { id: "god_loki", type: "rival", desc: "골치 ?�픈 ?�형?? },
                        { id: "snake_world_jormungandr", type: "rival", desc: "?�적" }
                    ],
                        synergy: { ally: ["god_odin", "sif"], rival: ["snake_world_jormungandr"] }
    },
    lines: { normal: "천둥???�을 보여주마!" }
},
{
    id: "nordic_cat_freya",
        name: "?�레?�야??고양??,
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Beast", "Light"],
                        baseStr: 10, baseInt: 10,
                            image: "images/creatures/unknown/nordic_cat_freya.png",
                                lore: {
        title: "?�신???�완�?,
            story: "?�레?�야???�차�??�는 거�???고양?�들. ?�치???��?�??�교가 많다.",
                origin: "북유???�화",
                    relationships: [{ id: "god_freya", type: "master", desc: "주인?? }],
                        synergy: { ally: ["god_freya"], rival: [] }
    },
    lines: { normal: "?�옹~ (가르릉거린??" }
},
{
    id: "snow_spirit",
        name: "?�의 ?�령",
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Ice"],
                        baseStr: 5, baseInt: 15,
                            image: "images/creatures/unknown/creature_snow_spirit.png",
                                lore: {
        title: "차�????�결",
            story: "?�플?�임???�보???�에???�어???�령. ?��?�?차�???기운???�뿜?�다.",
                origin: "?�플?�임",
                    relationships: [{ id: "bear_ice", type: "friend", desc: "?�께 ?�는 친구" }],
                        synergy: { ally: ["bear_ice"], rival: ["mage_flame"] }
    },
    lines: { normal: "차�???.." }
},
{
    id: "sif",
        name: "?�금???�신 ?�프",
            rarity: RANKS.SR,
                world: WORLDS.ASGARD,

                    elements: ["Earth", "Light"],
                        baseStr: 30, baseInt: 40,
                            image: "images/sif.png",
                                lore: {
        title: "?�지??결실",
            story: "?�르???�내?�자 ?�확???�신. 로키가 ?�난?�로 ?�른 머리카락 ?�???�워?��? 만들?��? ?�금 머릿결을 가지�??�다.",
                origin: "북유???�화",
                    relationships: [
                        { id: "god_thor", type: "family", desc: "?�편" },
                        { id: "god_loki", type: "rival", desc: "??머리카락???�친 ?? }
                    ],
                        synergy: { ally: ["god_thor"], rival: ["god_loki"] }
    },
    lines: { normal: "가?�의 ?�요로�????�신?�게." }


},
{
    id: "valhalla_guard",
        name: "발할??경비�?,
            rarity: RANKS.NORMAL,
                world: WORLDS.ASGARD,
                    elements: ["Metal"],
                        baseStr: 15, baseInt: 5,
                            image: "images/placeholder_asgard.png"

}
];
{
    id: "god_hel",
        name: "二쎌쓬???ъ떊 ??,
            rarity: RANKS.UR,
                world: WORLDS.ASGARD,
                    elements: ["Dark", "Ice", "Undead"],
                        ego: "Nihilist",
                            baseStr: 30, baseInt: 80,
                                image: "images/creature_god_hel.png",
                                    sprites: {
        idle: "images/creature_god_hel.png",
            joy: "images/creature_god_hel.png", // temp
                sad: "images/creature_god_hel.png", // temp
                    angry: "images/creature_god_hel.png", // temp
                        skill: "images/creature_god_hel.png", // temp
                            gallery: "images/creature_god_hel.png" // temp
    },
    prompts: {
        base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Undead, 二쎌쓬???ъ떊 ??,
            idle: "standing pose, confident, neutral expression",
                joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
                    sad: "sad expression, looking down, tears, injured, dark atmosphere",
                        angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
                            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
                                gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 二쎌쓬???ъ떊 ??special illustration, intimate atmosphere"
    },
    lore: {
        title: "?덊뵆?ㅼ엫??吏諛곗옄",
            story: "?ㅻ뵖???섑빐 ?덊뵆?ㅼ엫?쇰줈 異붾갑?뱁븳 濡쒗궎???? 諛섏? ?꾨쫫?ㅼ슫 ?ъ씤, 諛섏? ?⑹뼱媛???쒖껜??紐⑥뒿???섍퀬 ?덉뿀?쇰굹, ?닿납?먯꽌???꾨쫫?ㅼ슫 紐⑥뒿?쇰줈 ?꾪쁽?덉뒿?덈떎. 二쎌? ?먮뱾???ㅼ뒪由щŉ ?쇨렇?섎줈?щ? 湲곕떎由쎈땲??",
                personality: "Cold"
    },
    relationships: {
        likes: [],
            dislikes: [],
                rival: null
    },
    touchLines: {
        idle: ["..."],
            interaction: ["..."],
                gift: ["..."],
                    special: ["!!!"]
    }
}
