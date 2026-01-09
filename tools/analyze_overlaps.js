const fs = require('fs');
const path = require('path');

const files = [
    'js/data/creatures/AsgardData.js',
    'js/data/creatures/AsgardTail.js',
    'js/data/creatures/temp_tail.js',
    // Add other relevant files if needed
    'js/data/creatures/WildData.js',
    'js/data/creatures/ShangriLaData.js',
    'js/data/creatures/OlympusData.js',
    'js/data/creatures/AbyssData.js'
];

const backupDir = 'backups/20260109_pre_rename/js_data/creatures/';

function extractIds(filePath) {
    if (!fs.existsSync(filePath)) return { ids: [], content: '' };
    const content = fs.readFileSync(filePath, 'utf8');
    const ids = [];
    const regex = /id:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.push(match[1]);
    }
    return { ids, content };
}

console.log('--- Data Integrity Analysis ---');
let globalUniqueIds = new Set();
let worldCounts = {};

files.forEach(file => {
    const { ids } = extractIds(file);
    if (ids.length === 0) return;

    const baseName = path.basename(file);
    console.log(`\nFile: ${baseName}`);
    console.log(`  - Total IDs found: ${ids.length}`);

    // Check versus backup
    const backupPath = path.join(backupDir, baseName);
    const backupData = extractIds(backupPath);
    if (backupData.ids.length > 0) {
        console.log(`  - Backup IDs found: ${backupData.ids.length}`);
        const missingInCurrent = backupData.ids.filter(id => !ids.includes(id));
        if (missingInCurrent.length > 0) {
            console.log(`  - WARNING: ${missingInCurrent.length} IDs missing in current file vs backup: ${missingInCurrent.join(', ')}`);
        }
    }

    ids.forEach(id => globalUniqueIds.add(id));
});

console.log('\n--- Overlap Analysis for Asgard ---');
const asgardFiles = ['js/data/creatures/AsgardData.js', 'js/data/creatures/AsgardTail.js', 'js/data/creatures/temp_tail.js'];
let asgardIds = new Set();
asgardFiles.forEach(f => {
    const { ids } = extractIds(f);
    console.log(`${path.basename(f)} unique IDs: ${new Set(ids).size}`);
    ids.forEach(id => asgardIds.add(id));
});
console.log(`Total Unique Asgard IDs Combined: ${asgardIds.size}`);

console.log('\n--- Grand Total ---');
console.log(`Total Unique Creature IDs across investigated files: ${globalUniqueIds.size}`);

const report = `
--- Data Integrity Analysis ---
Total Unique Creature IDs across investigated files: ${globalUniqueIds.size}

--- Overlap Analysis for Asgard ---
AsgardData.js unique IDs: ${(() => { const { ids } = extractIds('js/data/creatures/AsgardData.js'); return new Set(ids).size; })()}
AsgardTail.js unique IDs: ${(() => { const { ids } = extractIds('js/data/creatures/AsgardTail.js'); return new Set(ids).size; })()}
temp_tail.js unique IDs: ${(() => { const { ids } = extractIds('js/data/creatures/temp_tail.js'); return new Set(ids).size; })()}
Total Unique Asgard IDs Combined: ${asgardIds.size}

--- File Details ---
${(() => {
        let details = '';
        files.forEach(file => {
            const { ids } = extractIds(file);
            if (ids.length === 0) return;
            details += `\nFile: ${path.basename(file)}\n`;
            details += `  - Total IDs found: ${ids.length}\n`;
            const backupPath = path.join(backupDir, path.basename(file));
            const backupData = extractIds(backupPath);
            if (backupData.ids.length > 0) {
                details += `  - Backup IDs found: ${backupData.ids.length}\n`;
                const missingInCurrent = backupData.ids.filter(id => !ids.includes(id));
                if (missingInCurrent.length > 0) {
                    details += `  - WARNING: ${missingInCurrent.length} IDs missing in current file vs backup: ${missingInCurrent.join(', ')}\n`;
                }
            }
        });
        return details;
    })()}
`;
fs.writeFileSync('analysis_report_utf8.txt', report, 'utf8');

