// Mock Data for PvP Lobby
export const MOCK_PLAYERS = [
    { id: 'rival_01', name: 'DarkSlayer', level: 15, power: 3500, avatar: 'images/creature_vampire_lord.png', rank: 'Silver' },
    { id: 'rival_02', name: 'DragonMaster', level: 22, power: 5200, avatar: 'images/creature_dragon_chaos.png', rank: 'Gold' },
    { id: 'rival_03', name: 'NoobHunter', level: 8, power: 1200, avatar: 'images/creature_slime.png', rank: 'Bronze' },
    { id: 'rival_04', name: 'ElfQueen', level: 28, power: 6800, avatar: 'images/creature_flower_fairy.png', rank: 'Platinum' },
    { id: 'rival_05', name: 'GoblinKing', level: 12, power: 2800, avatar: 'images/creature_goblin_scout.png', rank: 'Silver' },
    { id: 'rival_06', name: 'Phoenix', level: 35, power: 8900, avatar: 'images/creature_phoenix_eternal.png', rank: 'Diamond' },
    { id: 'rival_07', name: 'ShadowX', level: 19, power: 4100, avatar: 'images/creature_ninja_shadow.png', rank: 'Gold' },
    { id: 'rival_08', name: 'CuteSlime', level: 5, power: 800, avatar: 'images/creature_pebble.png', rank: 'Bronze' },
];

export function getMockPlayerById(id) {
    return MOCK_PLAYERS.find(p => p.id === id);
}

export function searchMockPlayers(query) {
    if (!query) return MOCK_PLAYERS;
    const lower = query.toLowerCase();
    return MOCK_PLAYERS.filter(p => p.name.toLowerCase().includes(lower));
}
