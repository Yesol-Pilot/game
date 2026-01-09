const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const DATA_JSON_DIR = path.join(ROOT_DIR, 'js/data/json');
const IMAGES_DIR = path.join(ROOT_DIR, 'images');

// 모든 이미지 파일을 미리 인덱싱하여 Mismatch를 빠르게 찾습니다.
const imageIndex = new Map();

function indexImages(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            indexImages(fullPath);
        } else if (/\.(png|jpg|jpeg|gif|webp)$/i.test(item)) {
            const relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/');
            if (!imageIndex.has(item)) {
                imageIndex.set(item, []);
            }
            imageIndex.get(item).push(relPath);
        }
    });
}

console.log('이미지 파일 인덱싱 중...');
indexImages(IMAGES_DIR);
console.log(`총 ${imageIndex.size}개의 고유 이미지 파일 발견.`);

const auditResults = {
    verified: [],
    mismatched: [],
    missing: []
};

function checkPath(referencedPath, creatureId, world) {
    if (!referencedPath) return;

    const absolutePath = path.join(ROOT_DIR, referencedPath);
    const fileName = path.basename(referencedPath);

    if (fs.existsSync(absolutePath)) {
        auditResults.verified.push({ creatureId, world, path: referencedPath });
    } else {
        // 파일이 다른 곳에 있는지 확인
        if (imageIndex.has(fileName)) {
            auditResults.mismatched.push({
                creatureId,
                world,
                referencedPath,
                actualPaths: imageIndex.get(fileName)
            });
        } else {
            auditResults.missing.push({ creatureId, world, path: referencedPath });
        }
    }
}

const jsonFiles = fs.readdirSync(DATA_JSON_DIR).filter(f => f.endsWith('.json'));

jsonFiles.forEach(file => {
    console.log(`분석 중: ${file}`);
    const content = fs.readFileSync(path.join(DATA_JSON_DIR, file), 'utf8');
    const data = JSON.parse(content);
    const worldName = file.replace('Data.json', '').toUpperCase();

    data.forEach(creature => {
        // 메인 이미지 체크
        checkPath(creature.image, creature.id, worldName);

        // 스프라이트 체크
        if (creature.sprites) {
            Object.entries(creature.sprites).forEach(([key, value]) => {
                if (key === 'gallery') {
                    if (typeof value === 'object' && value !== null) {
                        Object.entries(value).forEach(([lv, gPath]) => {
                            checkPath(gPath, `${creature.id}_gallery_${lv}`, worldName);
                        });
                    } else if (typeof value === 'string') {
                        checkPath(value, `${creature.id}_gallery`, worldName);
                    }
                } else if (typeof value === 'string') {
                    checkPath(value, `${creature.id}_${key}`, worldName);
                }
            });
        }
    });
});

// 결과 요약 출력 및 파일 저장
console.log('\n--- 감사 결과 요약 ---');
console.log(`정상 연결: ${auditResults.verified.length}`);
console.log(`경로 불일치: ${auditResults.mismatched.length}`);
console.log(`완전 누락: ${auditResults.missing.length}`);

const reportPath = path.join(ROOT_DIR, 'Asset_Audit_Report_Latest.md');
let reportMd = `# 📊 최신 리소스 감사 보고서 (${new Date().toLocaleString()})\n\n`;

reportMd += `## 1. 📂 경로 불일치 (Mismatches: ${auditResults.mismatched.length})\n`;
reportMd += `> 데이터 파일의 경로는 틀리지만, 서버 어딘가에 실제 파일이 존재하는 경우입니다.\n\n`;
reportMd += `| World | ID | 정의된 경로 | 실제 위치 (추정) |\n| :--- | :--- | :--- | :--- |\n`;
auditResults.mismatched.forEach(item => {
    reportMd += `| ${item.world} | ${item.creatureId} | \`${item.referencedPath}\` | \`${item.actualPaths.join(', ')}\` |\n`;
});

reportMd += `\n## 2. ❌ 완전 누락 (Truly Missing: ${auditResults.missing.length})\n`;
reportMd += `> 서버 내에 해당 파일이 아예 존재하지 않는 경우입니다 (생성 필요).\n\n`;
reportMd += `| World | ID | 기대 경로 |\n| :--- | :--- | :--- |\n`;
auditResults.missing.forEach(item => {
    reportMd += `| ${item.world} | ${item.creatureId} | \`${item.path}\` |\n`;
});

reportMd += `\n## 3. ✅ 정상 연결 (Verified: ${auditResults.verified.length})\n`;
reportMd += `> 데이터 경로와 실제 파일 위치가 일치합니다.\n`;

fs.writeFileSync(reportPath, reportMd);
console.log(`보고서가 생성되었습니다: ${reportPath}`);
