const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = 'd:\\test\\multiverse-creature-lab';
const DATA_DIR = path.join(PROJECT_ROOT, 'js/data/creatures');
const IMAGE_DIR = path.join(PROJECT_ROOT, 'images');

// Helper: Recursively get all files in a directory
function getAllFiles(dirPath, fileList = [], baseDir = '') {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList, path.join(baseDir, file));
        } else {
            // Normalize path separators to forward slashes for consistency
            const relativePath = path.join(baseDir, file).replace(/\\/g, '/');
            fileList.push(`images/${relativePath}`);
        }
    });
    return fileList;
}

// 1. Scan existing images
console.log('Scanning existing images...');
let existingImages;
try {
    existingImages = new Set(getAllFiles(IMAGE_DIR));
    console.log(`Found ${existingImages.size} images.`);
} catch (e) {
    console.error("Error scanning images directory:", e);
    process.exit(1);
}

// 2. Parse creature data files
// We use simple regex parsing to avoid dealing with ES module imports in Node
const dataFiles = [
    'OlympusData.js',
    'AsgardData.js',
    'ShangriLaData.js',
    'AbyssData.js',
    'WildData.js'
];

const creatures = [];

dataFiles.forEach(file => {
    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');

    // Naive regex to extract creature objects
    // We assume standard formatting: { ... id: "...", ... }
    const objectRegex = /{\s*id:\s*"([^"]+)"[\s\S]*?lines:\s*{[^}]*}\s*}/g;
    let match;

    while ((match = objectRegex.exec(content)) !== null) {
        const creatureBlock = match[0];
        const idMatch = /id:\s*"([^"]+)"/.exec(creatureBlock);
        const nameMatch = /name:\s*"([^"]+)"/.exec(creatureBlock);
        const rarityMatch = /rarity:\s*RANKS\.([A-Z_]+)/.exec(creatureBlock);
        const worldMatch = /world:\s*WORLDS\.([A-Z_]+)/.exec(creatureBlock);

        // Extract main image
        const imageMatch = /image:\s*"([^"]+)"/.exec(creatureBlock);

        // Extract gallery images (naive)
        const galleryLv1Match = /"lv1":\s*"([^"]+)"/.exec(creatureBlock);
        const galleryLv2Match = /"lv2":\s*"([^"]+)"/.exec(creatureBlock);
        const galleryLv3Match = /"lv3":\s*"([^"]+)"/.exec(creatureBlock);

        if (idMatch) {
            creatures.push({
                id: idMatch[1],
                name: nameMatch ? nameMatch[1] : 'Unknown',
                rarity: rarityMatch ? rarityMatch[1] : 'UNKNOWN',
                world: worldMatch ? worldMatch[1] : 'UNKNOWN',
                image: imageMatch ? imageMatch[1] : null,
                gallery: {
                    lv1: galleryLv1Match ? galleryLv1Match[1] : null,
                    lv2: galleryLv2Match ? galleryLv2Match[1] : null,
                    lv3: galleryLv3Match ? galleryLv3Match[1] : null
                }
            });
        }
    }
});

console.log(`Parsed ${creatures.length} creatures from data files.`);

// 3. Analyze Resources
const report = {
    summary: { total: creatures.length, missingBase: 0, missingGallery: 0 },
    missing: []
};

creatures.forEach(c => {
    const issues = [];

    // Check Base Image
    if (c.image) {
        // Handle query strings in image path (e.g. ?v=3)
        const cleanPath = c.image.split('?')[0];
        if (!existingImages.has(cleanPath)) {
            issues.push({ type: 'base', path: c.image });
            report.summary.missingBase++;
        }
    } else {
        issues.push({ type: 'base', path: 'NOT_DEFINED' });
    }

    // Check Gallery Images (Only for SR, SSR, UR)
    if (['SR', 'SSR', 'UR'].includes(c.rarity)) {
        ['lv1', 'lv2', 'lv3'].forEach(lv => {
            const path = c.gallery[lv];
            if (path) {
                const cleanPath = path.split('?')[0];
                if (!existingImages.has(cleanPath)) {
                    issues.push({ type: `gallery_${lv}`, path: path });
                    report.summary.missingGallery++;
                }
            } else {
                // If high rarity but no gallery defined, marking as issue?
                // Maybe, but let's focus on defined paths first.
                // Actually, if it's SR+ it SHOULD have gallery.
                issues.push({ type: `gallery_${lv}`, path: 'NOT_DEFINED' });
                report.summary.missingGallery++;
            }
        });
    }

    if (issues.length > 0) {
        report.missing.push({
            id: c.id,
            name: c.name,
            rarity: c.rarity,
            world: c.world,
            issues: issues
        });
    }
});

// Output Report as JSON
console.log(JSON.stringify(report, null, 2));
