
export const MOCK_RANKINGS = [
    { rank: 1, id: 'champion_01', name: 'GrandMaster_Zero', score: 9999, title: 'Absolute', power: 150000, level: 99, avatar: 'images/avatars/avatar_01.png', tag: 'Legend' },
    { rank: 2, id: 'rival_leo', name: 'Tamer_Leo', score: 8500, title: 'Elite', power: 85000, level: 75, avatar: 'images/avatars/avatar_02.png', tag: 'Expert' },
    { rank: 3, id: 'rival_hana', name: 'Hana_The_Witch', score: 8200, title: 'Elite', power: 82000, level: 72, avatar: 'images/avatars/avatar_03.png', tag: 'Mage' },
    { rank: 4, id: 'user_123', name: 'DragonSlayer', score: 7800, title: 'Veteran', power: 78000, level: 68, avatar: 'images/avatars/avatar_04.png', tag: '' },
    { rank: 5, id: 'user_456', name: 'SlimeLover', score: 7600, title: 'Veteran', power: 76000, level: 65, avatar: 'images/avatars/avatar_05.png', tag: '' }
];

export const MOCK_PLAYERS = {
    'champion_01': {
        name: 'GrandMaster_Zero',
        rank: 'UR',
        team: [
            { id: 'god_zeus', level: 99, star: 5 },
            { id: 'dragon_ladon', level: 99, star: 5 },
            { id: 'titan_kronos', level: 99, star: 5 }
        ]
    },
    'rival_leo': {
        name: 'Tamer_Leo',
        rank: 'SSR',
        team: [
            { id: 'lion_nemean', level: 50, star: 4 },
            { id: 'hydra_lernaean', level: 50, star: 4 }
        ]
    }
};

export function getMockPlayerById(id) {
    return MOCK_PLAYERS[id] || null;
}

export function getRankings() {
    return MOCK_RANKINGS;
}

export function searchMockPlayers(query = '') {
    if (!query) return MOCK_RANKINGS;
    const lowerQ = query.toLowerCase();
    return MOCK_RANKINGS.filter(p => p.name.toLowerCase().includes(lowerQ));
}
