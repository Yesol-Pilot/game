import { RANKS } from '../data/RankData.js';
import { WORLDS } from '../data/WorldData.js';
import {
    CREATURE_DEFS,
    OLYMPUS_CREATURES,
    ASGARD_CREATURES,
    SHANGRILA_CREATURES,
    ABYSS_CREATURES,
    WILD_CREATURES,
    CREATURE_DEF_MAP
} from '../data/CreatureData.js';

export default class DataManager {
    static async loadAll() {
        console.log("[DataManager] Loading JSON data...");
        try {
            await Promise.all([
                this.loadCreatures("OlympusData.json", OLYMPUS_CREATURES),
                this.loadCreatures("AsgardData.json", ASGARD_CREATURES),
                this.loadCreatures("ShangriLaData.json", SHANGRILA_CREATURES),
                this.loadCreatures("AbyssData.json", ABYSS_CREATURES),
                this.loadCreatures("WildData.json", WILD_CREATURES)
            ]);

            this.rebuildIndex();
            console.log("[DataManager] All data loaded successfully.");
            return true;
        } catch (error) {
            console.error("[DataManager] Failed to load data:", error);
            return false;
        }
    }

    static async loadCreatures(filename, targetArray) {
        try {
            const response = await fetch(`js/data/json/${filename}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Clear existing array
            targetArray.length = 0;

            // Process and push data
            data.forEach(item => {
                // Convert string constants back to objects if needed, 
                // but currently the game logic mostly uses string comparison or the ID.
                // However, RankData.RANKS properties are strings "UR", "SSR", etc.
                // attempting to match exact references if existing code relies on `=== RANKS.UR`.
                // Since JSON has strings "UR", and RANKS.UR is "UR", it matches by value.

                // Ensure world constant match if needed
                if (WORLDS[item.world]) {
                    // item.world is already string "OLYMPUS", and WORLDS.OLYMPUS is "OLYMPUS".
                }

                targetArray.push(item);
            });

            console.log(`[DataManager] Loaded ${data.length} entries from ${filename}`);
        } catch (e) {
            console.error(`[DataManager] Error loading ${filename}:`, e);
            throw e;
        }
    }

    static rebuildIndex() {
        // Clear global DEFS first
        CREATURE_DEFS.length = 0;

        // Combine all arrays
        CREATURE_DEFS.push(
            ...OLYMPUS_CREATURES,
            ...ASGARD_CREATURES,
            ...SHANGRILA_CREATURES,
            ...ABYSS_CREATURES,
            ...WILD_CREATURES
        );

        // Rebuild Map
        for (const key in CREATURE_DEF_MAP) {
            delete CREATURE_DEF_MAP[key];
        }

        CREATURE_DEFS.forEach(def => {
            CREATURE_DEF_MAP[def.id] = def;
        });

        // [Memory Optimization] Clear source arrays as they are now duplicated in CREATURE_DEFS
        // Note: If game logic relies on these specific arrays (e.g. "Get all Olympus"), 
        // we should keep them OR provide a getter method filtering CREATURE_DEFS.
        // Checking usage: specific arrays are exported but mostly used by DataManager itself.
        // To be safe, we will NOT clear them yet unless we verify no external usage.
        // However, we can at least log usage.

        console.log(`[DataManager] Index rebuilt. Total creatures: ${CREATURE_DEFS.length}`);
    }
}
