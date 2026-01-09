const fs = require('fs');
const path = require('path');

const mapPath = path.join(__dirname, '../orphaned_assets_map.json');
const archiveDir = path.join(__dirname, '../images/_unused_archive');

if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
}

try {
    const rawData = fs.readFileSync(mapPath, 'utf8');
    const assets = JSON.parse(rawData);

    console.log(`Found ${assets.length} potential orphaned assets.`);
    let movedCount = 0;

    assets.forEach(asset => {
        if (asset.found) {
            const sourcePath = path.join(__dirname, '../', asset.found);
            const fileName = path.basename(sourcePath);
            const destPath = path.join(archiveDir, fileName);

            if (fs.existsSync(sourcePath)) {
                try {
                    fs.renameSync(sourcePath, destPath);
                    console.log(`Moved: ${fileName}`);
                    movedCount++;
                } catch (err) {
                    console.error(`Failed to move ${fileName}: ${err.message}`);
                }
            }
        }
    });

    console.log(`Operation complete. Moved ${movedCount} files to ${archiveDir}.`);

} catch (error) {
    console.error("Error processing orphaned assets:", error);
}
