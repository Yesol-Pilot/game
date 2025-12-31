
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
        // ignore
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

// 2. Scan Creature Data
const dataDir = path.join(__dirname, '../js/data/creatures');
let totalCreatures = 0;
let definedImages = 0;
let uniqueImageTargets = new Set();
let missingImages = [];
let matchedImages = 0;
let missingDetails = [];
let duplicateUsage = {}; // image -> count

if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    files.forEach(file => {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');

        // Match id and image
        // We need to match id and image accurately.
        // Assuming simple format: id: "...", ... image: "..."
        // But some might have sprites: { idle: "..." } and no top level image.
        // Let's stick to the top-level 'image' property for standard audit.

        const regex = /id:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
        const matches = [...content.matchAll(regex)];

        matches.forEach(m => {
            totalCreatures++;
            const id = m[1];
            let imgPath = m[2].split('?')[0];

            if (imgPath) {
                definedImages++;
                uniqueImageTargets.add(imgPath);

                if (!duplicateUsage[imgPath]) duplicateUsage[imgPath] = 0;
                duplicateUsage[imgPath]++;

                const basename = path.basename(imgPath).toLowerCase();

                if (imageBasenames.has(basename)) {
                    matchedImages++;
                } else {
                    missingImages.push(id);
                    missingDetails.push({ id, path: imgPath });
                }
            }
        });
    });
}

// 3. Analyze Duplicates
let sharedImageCount = 0; // Number of images used by >1 creature
Object.values(duplicateUsage).forEach(count => {
    if (count > 1) sharedImageCount++;
});

const report = {
    filesystem: {
        totalFiles: allImages.length
    },
    data: {
        totalCreatures: totalCreatures,
        creaturesWithImage: definedImages,
        uniqueImagePaths: uniqueImageTargets.size,
        sharedImages: sharedImageCount // How many images are reused
    },
    audit: {
        matched: matchedImages,
        missingCount: missingImages.length,
        missingList: missingDetails
    }
};

fs.writeFileSync(path.join(__dirname, '../deep_audit_final.json'), JSON.stringify(report, null, 2));
console.log("Audit complete. Saved to deep_audit_final.json");
