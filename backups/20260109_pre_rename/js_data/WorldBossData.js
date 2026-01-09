
export const WORLD_BOSS_DEFS = [
    {
        id: 'boss_ancient_dragon',
        name: 'Ancient Chaos Dragon',
        level: 99,
        maxHp: 5000000, // 5 Million
        image: 'images/boss_dragon_chaos.png',
        desc: '태초의 혼돈에서 태어난 고룡. 전 서버의 유저가 힘을 합쳐야 합니다.',
        rewards: { gold: 100000, gem: 100 }
    },
    {
        id: 'boss_titan_kronos',
        name: 'Titan Kronos',
        level: 99,
        maxHp: 8000000,
        image: 'images/boss_titan.png',
        desc: '시간을 삼키는 거인.',
        rewards: { gold: 200000, gem: 200 }
    }
];

export function getBossDef(id) {
    return WORLD_BOSS_DEFS.find(b => b.id === id);
}

export function getRandomBoss() {
    return WORLD_BOSS_DEFS[Math.floor(Math.random() * WORLD_BOSS_DEFS.length)];
}
