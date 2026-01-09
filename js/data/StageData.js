// StageData.js
// Defines the progression, biomes, and enemies for each stage.
// Follows the "Multiverse" Scenario: Forest -> Shangri-La -> Asgard -> Olympus -> Abyss

import { CREATURE_DEF_MAP } from './CreatureData.js';

// Base Stats for Level 1
const BASE_HP = 100;
const BASE_ATK = 10;
const BASE_DEF = 1;

// Biome Configurations - 5 Chapter Cycle
const BIOMES = [
    // Chapter 1: Mutated Forest (Tutorial/Base)
    {
        start: 1, end: 10,
        name: "Mutated Forest",
        background: "bg_forest.jpg",
        mobs: ["slime_green", "wolf_dire", "rat_brown"],
        boss: "ent_ancient",
        bossName: "Ancient Ent"
    },
    // Chapter 2: Shangri-La (Bamboo Forest)
    {
        start: 11, end: 20,
        name: "Bamboo Forest",
        background: "bg_shangrila.jpg",
        mobs: ["panda_monk", "bamboo_spirit"],
        boss: "white_tiger_guardian",
        bossName: "White Tiger Guardian"
    },
    // Chapter 3: Asgard (Frozen Battlefield)
    {
        start: 21, end: 30,
        name: "Frozen Battlefield",
        background: "bg_asgard.jpg",
        mobs: ["wolf_fenrir", "muninn_crow", "ratatoskr_squirrel"],
        boss: "wolf_fenrir", // Using Fenrir as boss as well for now
        bossName: "Fenrir Unbound"
    },
    // Chapter 4: Olympus (Sky Temple)
    {
        start: 31, end: 40,
        name: "Sky Temple",
        background: "bg_olympus.jpg",
        mobs: ["centaur_scout", "lion_nemean", "hydra_lernaean"],
        boss: "minotaur_king",
        bossName: "Minotaur King"
    },
    // Chapter 5: Abyss (Dark Dimension)
    {
        start: 41, end: 50,
        name: "Abyss Depths",
        background: "bg_abyss.jpg",
        mobs: ["void_walker", "abyss_leech", "void_beast"],
        boss: "erebus",
        bossName: "Erebus the Void Queen"
    }
];

// Helper to get biome for a raw stage index
function getBiome(stageIndex) {
    // 5 Chapters = 50 Stages per Cycle
    const cycleStage = ((stageIndex - 1) % 50) + 1;
    return BIOMES.find(b => cycleStage >= b.start && cycleStage <= b.end) || BIOMES[0];
}

/* 
 * Generates Stage Info.
 * Supports infinite Multiverse scaling
 */
export function getStage(stageId) {
    // 1. Determine Multiverse Cycle (Loop)
    // One cycle is now 50 stages
    const cycle = Math.floor((stageId - 1) / 50) + 1;
    const effectiveId = ((stageId - 1) % 50) + 1;

    // 2. Identify Themes
    const isBoss = effectiveId % 10 === 0;
    const biome = getBiome(stageId); // Pass raw stageId to helper or handle logic there

    // 3. Scaling Logic
    const cycleMult = Math.pow(5, cycle - 1);
    const stageMult = Math.pow(1.06, effectiveId);

    const hpMult = stageMult * cycleMult;
    const atkMult = Math.pow(1.07, effectiveId) * cycleMult;

    // 4. Construct Stage Object
    let stageName = `${biome.name} - ${effectiveId}`;
    if (cycle > 1) stageName = `[Cycle ${cycle}] ${stageName}`;
    if (isBoss) stageName += " (BOSS)";

    let stage = {
        id: stageId,
        name: stageName,
        isBoss: isBoss,
        rewardGold: Math.floor(50 * Math.pow(1.05, effectiveId) * cycleMult),
        rewardExp: Math.floor(20 * Math.pow(1.05, effectiveId) * cycleMult),
        background: biome.background,
        enemies: [],
        recommendedPower: 0
    };

    // 5. Generate Enemies
    const enemyCount = isBoss ? 5 : Math.floor(Math.random() * 3) + 1;
    let totalPower = 0;

    for (let j = 0; j < enemyCount; j++) {
        let enemyId = "minion";

        if (isBoss && j === Math.floor(enemyCount / 2)) {
            // Main Boss
            enemyId = biome.boss;
        } else {
            // Mob
            enemyId = biome.mobs[Math.floor(Math.random() * biome.mobs.length)];
        }

        // Retrieve data from loaded definitions (Optimization)
        const def = CREATURE_DEF_MAP[enemyId] || { name: "Unknown", image: "images/creatures/slime.png" };

        const hp = Math.floor(BASE_HP * hpMult * (isBoss ? 3.0 : 1));
        const atk = Math.floor(BASE_ATK * atkMult);
        const defStat = Math.floor(BASE_DEF * atkMult);

        stage.enemies.push({
            name: def.name || enemyId,
            level: stageId,
            image: def.image || def.sprites?.idle || "images/creatures/slime.png", // Dynamic Image
            hp: hp,
            atk: atk,
            def: defStat,
            elements: def.elements || [],
            skillId: "default_attack" // Skill mapping can be enhanced later
        });

        totalPower += (hp / 10) + atk + defStat;
    }

    stage.recommendedPower = Math.floor(totalPower);

    return stage;
}
