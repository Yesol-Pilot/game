
export const StageData = [];

// Base Stats for Level 1
const BASE_HP = 100;
const BASE_ATK = 10;
const BASE_DEF = 2;

// Biome Configurations
const BIOMES = [
    { start: 1, end: 10, name: "Slime Forest", mobs: ["slime_green"], boss: "slime_red", bossName: "King Slime" },
    { start: 11, end: 20, name: "Goblin Camp", mobs: ["goblin_scout"], boss: "goblin_scout", bossName: "Goblin Warlord" }, // reusing goblin image for boss
    { start: 21, end: 30, name: "Deep Ocean", mobs: ["fish_flying", "kraken_baby"], boss: "kraken_baby", bossName: "Abyssal Kraken" },
    { start: 31, end: 40, name: "Dark Cave", mobs: ["rat_brown", "bat_small"], boss: "bat_small", bossName: "Vampire Bat" },
    { start: 41, end: 50, name: "Volcanic Lands", mobs: ["mage_flame"], boss: "dragon_drake", bossName: "Fire Drake" },
    { start: 51, end: 60, name: "Frozen Wastes", mobs: ["bear_ice", "elemental_water"], boss: "titan_atlas", bossName: "Ice Titan" }, // visual proxy
    { start: 61, end: 70, name: "Iron Fortress", mobs: ["eagle_iron", "knight_skeleton"], boss: "knight_skeleton", bossName: "Death Knight" },
    { start: 71, end: 80, name: "Shadow Realm", mobs: ["ninja_shadow", "vampire_lord"], boss: "vampire_lord", bossName: "Vampire Lord" },
    { start: 81, end: 90, name: "Celestial Sky", mobs: ["flower_fairy", "unicorn_young"], boss: "angel_arch", bossName: "Archangel Michael" },
    { start: 91, end: 100, name: "Chaos Void", mobs: ["void_emperor"], boss: "dragon_ancient", bossName: "Void Emperor Dragon" }
];

// Helper to get biome for a raw stage index (1-100)
function getBiome(stageIndex) {
    const effectiveStage = ((stageIndex - 1) % 100) + 1;
    return BIOMES.find(b => effectiveStage >= b.start && effectiveStage <= b.end) || BIOMES[0];
}

/* 
 * Generates Stage Info.
 * Supports infinite Multiverse scaling (Stage 101, 102...)
 */
export function getStage(stageId) {
    // 1. Determine Multiverse Cycle (Loop)
    // Cycle 1: 1-100, Cycle 2: 101-200 ...
    const cycle = Math.floor((stageId - 1) / 100) + 1;
    const effectiveId = ((stageId - 1) % 100) + 1;

    // 2. Identify Themes
    const isBoss = effectiveId % 10 === 0;
    const biome = getBiome(effectiveId);

    // 3. Scaling Logic
    // Exponential growth per stage, plus a massive multiplier per Multiverse Cycle.
    // Cycle 1: 1x, Cycle 2: 10x, Cycle 3: 100x...
    const cycleMult = Math.pow(10, cycle - 1);
    const stageMult = Math.pow(1.15, effectiveId);

    const hpMult = stageMult * cycleMult;
    const atkMult = Math.pow(1.1, effectiveId) * cycleMult;

    // 4. Construct Stage Object
    let stageName = `${biome.name} - ${effectiveId}`;
    if (cycle > 1) stageName = `[Multiverse ${cycle}] ${stageName}`;
    if (isBoss) stageName += " (BOSS)";

    let stage = {
        id: stageId,
        name: stageName,
        isBoss: isBoss,
        rewardGold: Math.floor(50 * Math.pow(1.1, effectiveId) * cycleMult),
        rewardExp: Math.floor(20 * Math.pow(1.1, effectiveId) * cycleMult),
        enemies: [],
        recommendedPower: 0
    };

    // 5. Generate Enemies
    const enemyCount = isBoss ? 5 : Math.floor(Math.random() * 3) + 1;
    let totalPower = 0;

    for (let j = 0; j < enemyCount; j++) {
        let enemyName = "Minion";
        let img = "images/creature_slime.png";

        if (isBoss && j === Math.floor(enemyCount / 2)) {
            // Main Boss (Center)
            enemyName = biome.bossName;
            // Here we would lookup image from CreatureData if possible, but hardcoding for now or using ID mapping
            // Simplify: use biome boss ID to find image if we had access to CREATURE_DEFS, 
            // but here we just used pre-defined IDs in BIOMES.
            // We'll rely on a simple fallback or correct logic if we imported creature data. 
            // Since we can't easily import circular refs, we might map IDs to file paths manually if strictly needed,
            // or just use generic logic. For now, let's map known IDs.
            img = getCreatureImage(biome.boss);
        } else {
            // Mob
            const mobId = biome.mobs[Math.floor(Math.random() * biome.mobs.length)];
            enemyName = getCreatureName(mobId);
            img = getCreatureImage(mobId);
        }

        const hp = Math.floor(BASE_HP * hpMult * (isBoss ? 2.5 : 1));
        const atk = Math.floor(BASE_ATK * atkMult);
        const def = Math.floor(BASE_DEF * atkMult);

        stage.enemies.push({
            name: enemyName,
            level: stageId, // Actual stage level
            image: img,
            hp: hp,
            atk: atk,
            def: def,
        });

        // Rough Power Calculation: HP/10 + Atk + Def
        totalPower += (hp / 10) + atk + def;
    }

    stage.recommendedPower = Math.floor(totalPower);

    return stage;
}

// Simple Helpers to map IDs to assets without importing full Data (to avoid circular dep issues if any)
function getCreatureImage(id) {
    // Map manual overrides or default
    const map = {
        "slime_green": "images/creature_slime.png",
        "slime_red": "images/creature_slime.png",
        "goblin_scout": "images/creature_goblin_scout.png",
        "kraken_baby": "images/creature_kraken_baby.png",
        "fish_flying": "images/creature_fish_flying.png",
        "rat_brown": "images/creature_rat_brown.png",
        "bat_small": "images/creature_bat_small.png",
        "mage_flame": "images/creature_mage_flame.png",
        "dragon_drake": "images/creature_dragon_drake.png",
        "bear_ice": "images/creature_bear_ice.png",
        "elemental_water": "images/creature_elemental_water.png",
        "titan_atlas": "images/creature_golem_mud.png",
        "eagle_iron": "images/creature_eagle_iron.png",
        "knight_skeleton": "images/creature_knight_skeleton.png",
        "ninja_shadow": "images/creature_ninja_shadow.png",
        "vampire_lord": "images/creature_vampire_lord.png",
        "flower_fairy": "images/creature_flower_fairy.png",
        "unicorn_young": "images/creature_unicorn_young.png",
        "angel_arch": "images/creature_angel_arch.png",
        "void_emperor": "images/creature_void_emperor.png",
        "dragon_ancient": "images/creature_dragon_ancient.png"
    };
    return map[id] || "images/creature_slime.png";
}

function getCreatureName(id) {
    // Just for flavor
    return id.replace("_", " ").toUpperCase();
}
