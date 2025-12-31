
const fs = require('fs');
const path = require('path');

// 1. Gather all creature data
const creatures = [];
const dataDir = path.join(__dirname, '../js/data/creatures');

if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));
    files.forEach(file => {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
        // Simple regex to extract id and image path to avoid import issues
        const idMatches = [...content.matchAll(/id:\s*"([^"]+)"/g)];
        const imageMatches = [...content.matchAll(/image:\s*"([^"]+)"/g)];

        // This regex parsing is rough, assuming order. 
        // Better to require the files if we can handle ES modules, 
        // but 'require' might fail on ES6 imports without type:module.
        // Let's try to verify if we can match them structurally or just load them if possible.
        // Given the environment, let's try a smarter regex approach that captures blocks.

        let blockMatch;
        const blockRegex = /{[^}]*id:\s*"([^"]+)"[^}]*image:\s*"([^"]+)"/g;
        // The file structure is complex, manual parsing might be error prone.
        // Let's stick to the previous check_resources.js approach of 'require' if it worked, 
        // BUT check_resources.js used 'require' and seemingly worked. 
        // Let's check check_resources.js content first to see how it loaded data.
    });
}

// Wait, let's look at check_resources.js again to see how it loaded invalid ES6 modules.
// Ah, the previous view showed it imported them? No, I viewed the file but didn't see the imports.
// It likely used some trick or just read file content.
// Actually, I'll just write a script that scans the directory recursively first, 
// then attempts to fuzzy match against what it expects.

// Let's try to match filenames.
function getAllFiles(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })

    return arrayOfFiles
}

const allImages = getAllFiles(path.join(__dirname, '../images'));
const imageBasenames = new Map(); // filename -> fullpath

allImages.forEach(fullPath => {
    const basename = path.basename(fullPath);
    imageBasenames.set(basename, fullPath);
});

console.log(`Total files found in images/: ${allImages.length}`);

// NOW, let's try to regex parse the data files again, but more carefully.
let definedCreatures = 0;
let matchedExact = 0;
let matchedMisplaced = 0;
let missing = 0;
let missingList = [];

const creatureDataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

creatureDataFiles.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');

    // Improved Regex to capture object properties
    // Looking for id: "..." and image: "..." in close proximity
    const regex = /id:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
        definedCreatures++;
        const id = match[1];
        let imagePath = match[2];

        // Remove query params
        imagePath = imagePath.split('?')[0];

        const targetBasename = path.basename(imagePath);

        // normalize separators
        const normalizedDefinedPath = path.normalize(path.join(__dirname, '../', imagePath)).toLowerCase();

        // Check exact path match (ignoring case for windows)
        let exactMatch = false;
        // Iterate allImages to find exact match
        const foundPath = allImages.find(p => p.toLowerCase() === normalizedDefinedPath);

        if (foundPath) {
            matchedExact++;
        } else {
            // Check if basename exists somewhere else
            if (imageBasenames.has(targetBasename)) {
                matchedMisplaced++;
                // console.log(`[MISPLACED] ${id}: defined '${imagePath}' found at '${imageBasenames.get(targetBasename)}'`);
            } else {
                missing++;
                missingList.push({ id, defined: imagePath });
            }
        }
    }
});

console.log('--- Summary ---');
console.log(`Defined Creatures in Data: ${definedCreatures}`);
console.log(`Exact Path Matches: ${matchedExact}`);
console.log(`Found but Misplaced: ${matchedMisplaced}`);
console.log(`Truly Missing: ${missing}`);
console.log('--- Missing List ---');
missingList.forEach(m => console.log(`${m.id}: ${m.defined}`));

