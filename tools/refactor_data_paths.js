const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../js/data/creatures');
// Dynamically find Data files, excluding Headers/Tails/Drafts
const FILES = fs.readdirSync(DATA_DIR).filter(file => file.endsWith('Data.js') && !file.startsWith('temp_'));

const MAPPINGS = [
    { Old: "dragon_chaos", New: "tiamat" },
    { Old: "void_emperor", New: "erebus" },
    { Old: "demon_king", New: "baal" },
    { Old: "god_shub", New: "shub_niggurath" },
    { Old: "god_cthulhu", New: "cthulhu" },
    { Old: "kraken_worldstar", New: "lulu_worldstar" },
    { Old: "dragon_ancient", New: "bahamut" },
    { Old: "god_dragon_king", New: "dragon_king" },
    { Old: "fox_nine_ur", New: "miho" },
    { Old: "fox_nine_new", New: "miho" }, // Handle both
    { Old: "god_odin", New: "odin" },
    { Old: "god_gaia", New: "gaia_olympus" },
    { Old: "creator_gaia", New: "gaia_origin" },

    // Phase 2: Olympus & Asgard Cleaning
    { Old: "god_zeus", New: "zeus" },
    { Old: "god_poseidon", New: "poseidon" },
    { Old: "god_hades", New: "hades" },
    { Old: "hero_hercules", New: "hercules" },
    { Old: "titan_atlas", New: "atlas" },
    { Old: "titan_kronos_shade", New: "kronos_shade" },
    { Old: "god_thor", New: "thor" },
    { Old: "god_loki", New: "loki" },
    { Old: "god_hel", New: "hel" },
    { Old: "god_freya", New: "freya" }
];

const SUFFIXES = ["joy", "sad", "angry", "skill", "victory", "defeat", "gallery_lv1", "gallery_lv2", "gallery_lv3", "gallery_lv2_alt"];

FILES.forEach(file => {
    const filePath = path.join(DATA_DIR, file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    MAPPINGS.forEach(map => {
        // Regex logic:
        // Match: creature_OLD(_SUFFIX)?.(png|jpg)
        // Replace: creature_NEW(_SUFFIX or _idle).(png|jpg)

        // Escape regex special chars if any (none in these names usually)
        const oldNameRegex = new RegExp(`creature_${map.Old}(_[a-z0-9_]+)?\\.(png|jpg)`, 'g');

        content = content.replace(oldNameRegex, (match, suffix, ext) => {
            modified = true;
            let newSuffix = suffix;

            if (!suffix) {
                newSuffix = "_idle";
            } else if (suffix === "_idle_idle") { // safety
                newSuffix = "_idle";
            }

            // Check if suffix is just a timestamp or garbage (optional safety)
            // But rename script handles suffixes based on whitelist, so we assume valid.

            const newName = `creature_${map.New}${newSuffix}.${ext}`;
            console.log(`[${file}] Replaced: ${match} -> ${newName}`);
            return newName;
        });

        // Also update IDs in the data structure if necessary?
        // User asked for ID change too. 
        // e.g. id: "dragon_chaos" -> id: "tiamat"
        // This is risky with Regex as it might match other strings.
        // Let's do it carefully finding `id: "OLD"` string.

        const idRegex = new RegExp(`id:\\s*["']${map.Old}["']`, 'g');
        if (content.match(idRegex)) {
            content = content.replace(idRegex, `id: "${map.New}"`);
            console.log(`[${file}] Updated ID: ${map.Old} -> ${map.New}`);
            modified = true;
        }
    });

    const args = process.argv.slice(2);
    const DRY_RUN = args.includes('--dry-run');

    if (DRY_RUN) console.log("--- DRY RUN MODE: No files will be modified ---");

    if (modified) {
        if (DRY_RUN) {
            console.log(`[DryRun] Would save changes to ${file}`);
        } else {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Saved changes to ${file}`);
        }
    } else {
        console.log(`No changes in ${file}`);
    }
});
