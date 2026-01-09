const fs = require('fs');
const path = require('path');
const vm = require('vm');

// --- 1. Constants Definitions (Mocks) ---
const RANKS = {
    NORMAL: "Normal",
    UNIQUE: "Unique",
    RARE: "Rare",
    SPECIAL: "Special",
    SR: "SR",
    SSR: "SSR",
    UR: "UR"
};

const WORLDS = {
    OLYMPUS: "OLYMPUS",
    ASGARD: "ASGARD",
    SHANGRILA: "SHANGRILA",
    ABYSS: "ABYSS",
    WILD: "WILD"
};

// Assuming Basic Elements as Strings. JS files usually have ["Fire"] etc. so no constant needed unless used as variables.
// Checking imports might help, but strings are mostly literals.

// --- 2. Configuration ---
const INPUT_DIR = path.join(__dirname, '../js/data/creatures');
const OUTPUT_DIR = path.join(__dirname, '../js/data/json');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const FILES_MAP = [
    { file: 'AbyssData.js', varName: 'ABYSS_CREATURES' },
    { file: 'ShangriLaData.js', varName: 'SHANGRILA_CREATURES' },
    { file: 'WildData.js', varName: 'WILD_CREATURES' },
    { file: 'AsgardData.js', varName: 'ASGARD_CREATURES' },
    { file: 'OlympusData.js', varName: 'OLYMPUS_CREATURES' }
];

// --- 3. Execution ---
FILES_MAP.forEach(({ file, varName }) => {
    const filePath = path.join(INPUT_DIR, file);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${file}`);
        return;
    }

    console.log(`Processing ${file}...`);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove import statements (mocking imports)
    content = content.replace(/import .* from .*;/g, '');

    // 2. Remove "export" keyword. Use "var" so it attaches to the sandbox context (unlike const/let)
    content = content.replace(/export const/g, 'var');

    // 3. Prepare Sandbox
    const sandbox = {
        RANKS,
        WORLDS,
        console,
        // Add any other necessary globals here
    };
    vm.createContext(sandbox);

    try {
        // Run the script in sandbox to define the variables
        vm.runInContext(content, sandbox);

        // Extract the target variable
        const data = sandbox[varName];

        if (!data) {
            throw new Error(`Variable ${varName} not found after execution.`);
        }

        // --- Data Polishing Step ---
        data.forEach(creature => {
            if (creature.lore) {
                if (creature.lore.title === "New Discovery") {
                    creature.lore.title = "미확인 생명체";
                    creature.lore.story = "이 생명체에 대한 상세 기록은 아직 발견되지 않았습니다. 심층 탐사가 필요합니다.";
                }
                if (creature.lore.personality === "Unknown") {
                    creature.lore.personality = "알 수 없음";
                }
            }
            // Ensure lore object exists even if missing
            if (!creature.lore) {
                creature.lore = {
                    title: "미확인 생명체",
                    story: "데이터가 유실되어 정보를 확인할 수 없습니다.",
                    personality: "알 수 없음"
                };
            }
        });
        // ---------------------------

        // Write to JSON
        const jsonFileName = file.replace('.js', '.json');
        const jsonPath = path.join(OUTPUT_DIR, jsonFileName);

        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf8');
        console.log(`✅ Converted ${file} -> ${jsonFileName} (${data.length} entries)`);

    } catch (err) {
        console.error(`❌ Error processing ${file}:`, err.message);
        fs.writeFileSync('conversion_error.txt', `Error in ${file}: ${err.message}\n${err.stack}\n`, { flag: 'a', encoding: 'utf8' });
    }
});
