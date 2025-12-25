const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../js/data/creatures');
const imagesDir = path.join(__dirname, '../images');
const outputFile = path.join(__dirname, '../docs/resource_generation_priorities_v2.md');

// Helper to parse JS file content loosely (since we can't import ES6 modules easily in this node script without setup)
function parseCreatures(content, worldName) {
    const creatures = [];
    const regex = /id:\s*"([^"]+)",[\s\S]*?name:\s*"([^"]+)",[\s\S]*?rarity:\s*RANKS\.([A-Z]+),[\s\S]*?image:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        creatures.push({
            id: match[1],
            name: match[2],
            rarity: match[3], // UR, SSR, etc.
            imagePath: match[4],
            world: worldName
        });
    }
    return creatures;
}

const worldFiles = [
    'OlympusData.js',
    'AsgardData.js',
    'ShangrilaData.js',
    'AbyssData.js',
    'WildData.js'
];

let allCreatures = [];

worldFiles.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const worldName = file.replace('Data.js', '').toUpperCase();
    const creatures = parseCreatures(content, worldName);
    allCreatures = [...allCreatures, ...creatures];
});

// Check status
allCreatures = allCreatures.map(c => {
    const filename = path.basename(c.imagePath);
    // Remove query params like ?v=5
    const cleanFilename = filename.split('?')[0];
    const fullPath = path.join(imagesDir, cleanFilename);
    const exists = fs.existsSync(fullPath);
    const isPlaceholder = cleanFilename.includes('placeholder');

    let status = '✅ Completed';
    if (!exists) status = '❌ Missing (File Not Found)';
    if (isPlaceholder) status = '⚠️ Placeholder';

    return { ...c, status, cleanFilename };
});

// Sort by Rarity (UR > SSR > SR > Special > Rare > Normal) then World
const rarityOrder = { 'UR': 0, 'SSR': 1, 'SR': 2, 'SPECIAL': 3, 'RARE': 4, 'UNIQUE': 5, 'NORMAL': 6 };
allCreatures.sort((a, b) => {
    const rA = rarityOrder[a.rarity] !== undefined ? rarityOrder[a.rarity] : 99;
    const rB = rarityOrder[b.rarity] !== undefined ? rarityOrder[b.rarity] : 99;
    if (rA !== rB) return rA - rB;
    return a.world.localeCompare(b.world);
});

// Generate Markdown
let md = `# 📊 전체 크리처 리소스 작업 현황 및 우선순위 (Total: ${allCreatures.length})\n\n`;
md += `> **생성 일시**: ${new Date().toLocaleString()}\n`;
md += `> **기준**: 코드 데이터 기반 (js/data/creatures/*.js)\n\n`;

md += `## 🚨 Priority 1: Missing & Placeholders (Generation Queue)\n`;
const priorityList = allCreatures.filter(c => c.status !== '✅ Completed');
if (priorityList.length === 0) {
    md += `All clear! No missing images.\n`;
} else {
    md += `| Rarity | World | Name | ID | Status | Image Path |\n`;
    md += `|---|---|---|---|---|---|\n`;
    priorityList.forEach(c => {
        md += `| ${c.rarity} | ${c.world} | ${c.name} | \`${c.id}\` | ${c.status} | \`${c.imagePath}\` |\n`;
    });
}

md += `\n## ✅ Completed Resources\n`;
const completedList = allCreatures.filter(c => c.status === '✅ Completed');
md += `| Rarity | World | Name | ID | Status |\n`;
md += `|---|---|---|---|---|\n`;
completedList.forEach(c => {
    md += `| ${c.rarity} | ${c.world} | ${c.name} | \`${c.id}\` | ${c.status} |\n`;
});

fs.writeFileSync(outputFile, md);
console.log(`Generated ${outputFile} with ${allCreatures.length} creatures.`);
