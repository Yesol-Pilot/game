
const fs = require('fs');
const path = require('path');

// 1. Scan all files in images/ recursively
function getAllFiles(dirPath, arrayOfFiles) {
    try {
        const files = fs.readdirSync(dirPath);
        arrayOfFiles = arrayOfFiles || [];

        files.forEach(function (file) {
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            } else {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        });
    } catch (e) {
        console.log("Error reading dir " + dirPath);
    }

    return arrayOfFiles;
}

const imagesDir = path.join(__dirname, '../images');
const allImages = getAllFiles(imagesDir);
const imageBasenames = new Map();

allImages.forEach(fullPath => {
    const basename = path.basename(fullPath);
    imageBasenames.set(basename.toLowerCase(), fullPath);
});

console.log(`[FILESYSTEM] Total files in images/: ${allImages.length}`);

// 2. Scan Creature Data
const dataDir = path.join(__dirname, '../js/data/creatures');
let totalCreatures = 0;
let definedImages = 0;
let uniqueImageTargets = new Set();
let missingImages = [];
let matchedImages = 0;

if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    files.forEach(file => {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');

        // Match id and image
        const regex = /id:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g; // This is heuristic
        const matches = [...content.matchAll(regex)];

        matches.forEach(m => {
            totalCreatures++;
            const id = m[1];
            let imgPath = m[2].split('?')[0]; // remove query

            if (imgPath) {
                definedImages++;
                uniqueImageTargets.add(imgPath);

                const basename = path.basename(imgPath).toLowerCase();

                if (imageBasenames.has(basename)) {
                    matchedImages++;
                } else {
                    missingImages.push({ id, path: imgPath });
                }
            }
        });
    });
}

console.log(`[DATA] Total Creatures Parsed: ${totalCreatures}`);
console.log(`[DATA] Creatures with image property: ${definedImages}`);
console.log(`[DATA] Unique image paths required: ${uniqueImageTargets.size}`);
console.log(`[MATCH] Successfully Matched: ${matchedImages}`);
console.log(`[MISSING] Truly Missing: ${missingImages.length}`);

const uniqueMissing = [...new Set(missingImages.map(m => m.path))];
console.log(`[MISSING] Unique Missing Files: ${uniqueMissing.length}`);

console.log('--- Missing Details ---');
missingImages.forEach(m => console.log(`${m.id}: ${m.path}`));
