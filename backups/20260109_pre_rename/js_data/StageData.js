
export const StageData = [];

// Base Stats for Level 1
// Base Stats for Level 1
const BASE_HP = 100;
const BASE_ATK = 10;
const BASE_DEF = 1; // [Mod] 방어력 효율 과다 방지 (2 -> 1)

// Biome Configurations
// Biome Configurations - Dimension 1: Greek Mythology (Olympus)
const BIOMES = [
    { start: 1, end: 10, name: "Nemean Forest", background: "bg_forest.jpg", mobs: ["wolf_dire", "rat_brown"], boss: "lion_nemean", bossName: "Nemean Lion" },
    { start: 11, end: 20, name: "Lerna Swamp", background: "bg_cave.jpg", mobs: ["slime_green", "snake_poison"], boss: "hydra_lernaean", bossName: "Lernaean Hydra" },
    { start: 21, end: 30, name: "Ceryneian Highlands", background: "bg_sky.jpg", mobs: ["deer_horn", "satyr_scout"], boss: "hind_golden", bossName: "Golden Hind" },
    { start: 31, end: 40, name: "Erymanthian Wilds", background: "bg_forest.jpg", mobs: ["boar_wild", "bear_brown"], boss: "boar_erymanthian", bossName: "Erymanthian Boar" },
    { start: 41, end: 50, name: "Stymphalian Lake", background: "bg_ocean.jpg", mobs: ["bird_bronze", "harpy_wind"], boss: "bird_stymphalian", bossName: "Stymphalian Bird" },
    { start: 51, end: 60, name: "Cretan Labyrinth", background: "bg_cave.jpg", mobs: ["skeleton_warrior", "bull_mad"], boss: "minotaur_king", bossName: "Minotaur King" },
    { start: 61, end: 70, name: "Garden of Hesperides", background: "bg_sky.jpg", mobs: ["dragon_ladon_spawn", "nymph_dark"], boss: "dragon_ladon", bossName: "Ladon the Dragon" },
    { start: 71, end: 80, name: "Underworld Entrance", background: "bg_volcano.jpg", mobs: ["hound_hell", "spirit_lost"], boss: "cerberus_guardian", bossName: "Cerberus" },
    { start: 81, end: 90, name: "Tartarus Depths", background: "bg_volcano.jpg", mobs: ["giant_cyclops", "titan_spawn"], boss: "titan_kronos_shade", bossName: "Shade of Kronos" },
    { start: 91, end: 100, name: "Mount Olympus", background: "bg_sky.jpg", mobs: ["automaton_gold", "eagle_zeus"], boss: "god_zeus_phantom", bossName: "Phantom of Zeus" }
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
    const cycle = Math.floor((stageId - 1) / 100) + 1;
    const effectiveId = ((stageId - 1) % 100) + 1;

    // 2. Identify Themes
    const isBoss = effectiveId % 10 === 0;
    const biome = getBiome(effectiveId);

    // 3. Scaling Logic (Balanced)
    // Slower exponential start, steeper late game
    const cycleMult = Math.pow(5, cycle - 1); // Reduced from 10x to 5x per cycle
    const stageMult = Math.pow(1.06, effectiveId); // [Mod] 1.08 -> 1.06 (HP 인플레이션 완화)

    const hpMult = stageMult * cycleMult;
    const atkMult = Math.pow(1.07, effectiveId) * cycleMult; // [Mod] 1.06 -> 1.07 (공격력 강화)

    // 4. Construct Stage Object
    let stageName = `${biome.name} - ${effectiveId}`;
    if (cycle > 1) stageName = `[Dimension ${cycle}] ${stageName}`;
    if (isBoss) stageName += " (BOSS)";

    let stage = {
        id: stageId,
        name: stageName,
        isBoss: isBoss,
        rewardGold: Math.floor(50 * Math.pow(1.05, effectiveId) * cycleMult),
        rewardExp: Math.floor(20 * Math.pow(1.05, effectiveId) * cycleMult),
        background: biome.background, // [NEW] Bind background
        enemies: [],
        recommendedPower: 0
    };

    // 5. Generate Enemies
    const enemyCount = isBoss ? 5 : Math.floor(Math.random() * 3) + 1;
    let totalPower = 0;

    for (let j = 0; j < enemyCount; j++) {
        let enemyName = "Minion";
        let img = "images/creature_slime.png";
        let enemyId = "minion";

        if (isBoss && j === Math.floor(enemyCount / 2)) {
            // Main Boss (Center)
            enemyName = biome.bossName;
            enemyId = biome.boss;
            img = getCreatureImage(biome.boss);
        } else {
            // Mob
            const mobId = biome.mobs[Math.floor(Math.random() * biome.mobs.length)];
            enemyName = getCreatureName(mobId);
            enemyId = mobId;
            img = getCreatureImage(mobId);
        }

        const hp = Math.floor(BASE_HP * hpMult * (isBoss ? 3.0 : 1)); // Boss HP buffed
        const atk = Math.floor(BASE_ATK * atkMult);
        const def = Math.floor(BASE_DEF * atkMult);

        stage.enemies.push({
            name: enemyName,
            level: stageId,
            image: img,
            hp: hp,
            atk: atk,
            def: def,
            elements: [], // Can be enhanced to match biome theme
            skillId: getCreatureSkill(enemyId) // [Mod] 크리처별 고유 스킬 연결
        });

        totalPower += (hp / 10) + atk + def;
    }

    stage.recommendedPower = Math.floor(totalPower);

    return stage;
}

// Simple Helpers to map IDs to assets without importing full Data
function getCreatureImage(id) {
    // Map manual overrides or default
    const map = {
        // Nemean Forest
        "wolf_dire": "images/creature_wolf_dire.png",
        "rat_brown": "images/creature_rat_brown.png",
        "lion_nemean": "images/lion_nemean.png", // [NEW] 생성된 보스 이미지

        // Lerna Swamp
        "slime_green": "images/creature_slime.png",
        "snake_poison": "images/snake_poison.png", // [NEW] 생성된 이미지
        "hydra_lernaean": "images/hydra_lernaean.png",

        // Ceryneian Highlands
        "deer_horn": "images/creature_unicorn_young.png",
        "satyr_scout": "images/satyr_scout.png", // [NEW] 생성된 이미지
        "hind_golden": "images/creature_unicorn_young.png",

        // Erymanthian Wilds
        "boar_wild": "images/creature_bear_ice.png",
        "bear_brown": "images/creature_bear_ice.png",
        "boar_erymanthian": "images/creature_bear_ice.png",

        // Stymphalian Lake
        "bird_bronze": "images/creature_eagle_iron.png",
        "harpy_wind": "images/harpy_wind.png", // [NEW] 생성된 이미지
        "bird_stymphalian": "images/creature_eagle_iron.png",

        // Cretan Labyrinth
        "skeleton_warrior": "images/creature_knight_skeleton.png",
        "bull_mad": "images/creature_golem_mud.png",
        "minotaur_king": "images/minotaur_king.png",

        // Garden of Hesperides
        "dragon_ladon_spawn": "images/creature_dragon_drake.png",
        "nymph_dark": "images/nymph_dark.png", // [NEW] 생성된 이미지
        "dragon_ladon": "images/creature_dragon_ancient_final.png",

        // Underworld Entrance
        "hound_hell": "images/creature_wolf_dire.png",
        "spirit_lost": "images/spirit_lost.png", // [NEW] 생성된 이미지
        "cerberus_guardian": "images/cerberus_guardian.png",

        // Tartarus Depths
        "giant_cyclops": "images/giant_cyclops.png", // [NEW] 생성된 이미지
        "titan_spawn": "images/creature_demon_king.png",
        "titan_kronos_shade": "images/titan_kronos_shade.png",

        // Mount Olympus
        "automaton_gold": "images/creature_knight_skeleton.png",
        "eagle_zeus": "images/creature_eagle_iron.png",
        "god_zeus_phantom": "images/creatures/olympus/creature_god_zeus.jpg"
    };
    return map[id] || "images/creature_slime.png";
}

function getCreatureName(id) {
    return id.replace(/_/g, " ").toUpperCase();
}

/**
 * 각 적 몹/보스에 맞는 스킬 ID 반환
 */
function getCreatureSkill(id) {
    const skillMap = {
        // 보스
        "lion_nemean": "lion_nemean_skill",
        "hydra_lernaean": "hydra_skill",
        "hind_golden": "eagle_skill", // 빠른 고속 공격
        "boar_erymanthian": "bear_skill", // 강력한 근격
        "bird_stymphalian": "harpy_skill",
        "minotaur_king": "minotaur_skill",
        "dragon_ladon": "dragon_skill",
        "cerberus_guardian": "cerberus_skill",
        "titan_kronos_shade": "kronos_shade_skill",
        "god_zeus_phantom": "zeus_skill",

        // 일반 적
        "wolf_dire": "wolf_skill",
        "rat_brown": "slime_skill", // 약한 공격
        "slime_green": "slime_skill",
        "snake_poison": "snake_skill",
        "deer_horn": "eagle_skill",
        "satyr_scout": "wolf_skill",
        "boar_wild": "bear_skill",
        "bear_brown": "bear_skill",
        "bird_bronze": "eagle_skill",
        "harpy_wind": "harpy_skill",
        "skeleton_warrior": "undead_skill",
        "bull_mad": "golem_skill",
        "dragon_ladon_spawn": "dragon_skill",
        "nymph_dark": "nymph_skill",
        "hound_hell": "wolf_skill",
        "spirit_lost": "spirit_skill",
        "giant_cyclops": "golem_skill",
        "titan_spawn": "golem_skill",
        "automaton_gold": "golem_skill",
        "eagle_zeus": "eagle_skill"
    };
    return skillMap[id] || "default_attack";
}
