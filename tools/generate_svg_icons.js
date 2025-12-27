const fs = require('fs');
const path = require('path');

const icons = {
    'icon_skill_fire': `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#300" stroke="#f44" stroke-width="4"/><path d="M64 20 Q 90 60 80 90 A 20 20 0 1 1 48 90 Q 38 60 64 20 Z" fill="#f44" stroke="#ff8" stroke-width="2"/></svg>`,
    'icon_skill_water': `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#003" stroke="#4af" stroke-width="4"/><path d="M64 25 Q 90 65 90 85 A 26 26 0 1 1 38 85 Q 38 65 64 25 Z" fill="#4af" stroke="#fff" stroke-width="2"/></svg>`,
    'icon_skill_wind': `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#030" stroke="#afa" stroke-width="4"/><path d="M40 70 Q 64 40 88 70 T 100 90" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
    'icon_skill_earth': `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#210" stroke="#a74" stroke-width="4"/><rect x="40" y="40" width="48" height="48" rx="5" fill="#a74" stroke="#642" stroke-width="2"/></svg>`,
    'icon_skill_light': `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#440" stroke="#ff4" stroke-width="4"/><circle cx="64" cy="64" r="30" fill="#ffeb3b" filter="url(#glow)"/></svg>`,
    'icon_skill_dark': `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="60" fill="#101" stroke="#a4a" stroke-width="4"/><path d="M64 30 A 30 30 0 1 0 80 85 A 20 20 0 1 1 64 30" fill="#a4a"/></svg>`
};

const outDir = 'D:/test/game/images/icons';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

Object.entries(icons).forEach(([name, svg]) => {
    fs.writeFileSync(path.join(outDir, name + '.svg'), svg);
    console.log(`Generated ${name}.svg`);
});
