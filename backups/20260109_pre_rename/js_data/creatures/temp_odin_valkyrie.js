{
    id: "god_odin",
        name: "최고신 오딘",
            rarity: RANKS.UR,
                world: WORLDS.ASGARD,
                    elements: ["Light", "Wind", "Magic"],
                        ego: "Seeker",
                            baseStr: 45, baseInt: 75,
                                skillId: "odin_skill",
                                    image: "images/placeholder_asgard.png", // Img missing
                                        sprites: {
        idle: "images/placeholder_asgard.png",
            joy: "images/placeholder_asgard.png",
                sad: "images/placeholder_asgard.png",
                    angry: "images/placeholder_asgard.png",
                        skill: "images/placeholder_asgard.png",
                            gallery: "images/placeholder_asgard.png"
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
                                    image: "images/placeholder_asgard.png",
                                        sprites: {
        idle: "images/placeholder_asgard.png",
            joy: "images/placeholder_asgard.png",
                sad: "images/placeholder_asgard.png",
                    angry: "images/placeholder_asgard.png",
                        skill: "images/placeholder_asgard.png",
                            gallery: "images/placeholder_asgard.png"
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
    lines: { normal: "..." },
    synergy: { ally: ["god_odin"], rival: [] }
},
