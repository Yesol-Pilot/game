// Mock Data for PvP Lobby
export const MOCK_PLAYERS = [
    { id: 'rival_01', name: 'DarkSlayer', level: 15, power: 3500, avatar: 'images/creature_vampire_lord.png', rank: 'Silver', record: '24W 12L', tag: '신속함', team: ['vampire_lord', 'skeleton_warrior', 'bat_shadow'] },
    { id: 'rival_02', name: 'DragonMaster', level: 22, power: 5200, avatar: 'images/creature_dragon_chaos.png', rank: 'Gold', record: '45W 18L', tag: '화염속성', team: ['dragon_chaos', 'fire_elemental', 'salamander'] },
    { id: 'rival_03', name: 'NoobHunter', level: 8, power: 1200, avatar: 'images/creature_slime.png', rank: 'Bronze', record: '5W 8L', tag: '성장중', team: ['slime', 'pebble', 'seedling'] },
    { id: 'rival_04', name: 'ElfQueen', level: 28, power: 6800, avatar: 'images/creature_flower_fairy.png', rank: 'Platinum', record: '112W 42L', tag: '숲의수호자', team: ['flower_fairy', 'treant_elder', 'wind_sprite'] },
    { id: 'rival_05', name: 'GoblinKing', level: 12, power: 2800, avatar: 'images/creature_goblin_scout.png', rank: 'Silver', record: '18W 20L', tag: '물량공세', team: ['goblin_scout', 'goblin_warrior', 'goblin_shaman'] },
    { id: 'rival_06', name: 'Phoenix', level: 35, power: 8900, avatar: 'images/creature_phoenix_eternal.png', rank: 'Diamond', record: '210W 55L', tag: '불사신', team: ['phoenix_eternal', 'fire_giant', 'lava_golem'] },
    { id: 'rival_07', name: 'ShadowX', level: 19, power: 4100, avatar: 'images/creature_ninja_shadow.png', rank: 'Gold', record: '33W 15L', tag: '암살특화', team: ['ninja_shadow', 'dark_assassin', 'specter'] },
    { id: 'rival_08', name: 'CuteSlime', level: 5, power: 800, avatar: 'images/creature_pebble.png', rank: 'Bronze', record: '2W 3L', tag: '귀요미', team: ['pebble', 'slime'] },
    { id: 'rival_09', name: 'Titan', level: 30, power: 7500, avatar: 'images/creature_golem_mud.png', rank: 'Platinum', record: '95W 30L', tag: '철벽방어', team: ['golem_mud', 'iron_guardian', 'stone_shield'] },
    { id: 'rival_10', name: 'FrostBite', level: 25, power: 6100, avatar: 'images/creature_wolf_dire.png', rank: 'Gold', record: '62W 28L', tag: '빙결속성', team: ['wolf_dire', 'ice_queen', 'frost_giant'] },
    { id: 'rival_11', name: 'MechLord', level: 40, power: 12000, avatar: 'images/creature_golem_ancient.png', rank: 'Master', record: '320W 80L', tag: '기계생명', team: ['golem_ancient', 'laser_bot', 'repair_drone'] },
    { id: 'rival_12', name: 'StarGazer', level: 18, power: 3900, avatar: 'images/creature_flower_fairy.png', rank: 'Silver', record: '28W 14L', tag: '빛속성', team: ['flower_fairy', 'light_angel', 'holy_knight'] },
];

export function getMockPlayerById(id) {
    return MOCK_PLAYERS.find(p => p.id === id);
}

export function searchMockPlayers(query) {
    if (!query) return MOCK_PLAYERS;
    const lower = query.toLowerCase();
    return MOCK_PLAYERS.filter(p => p.name.toLowerCase().includes(lower) || (p.tag && p.tag.toLowerCase().includes(lower)));
}

/**
 * PVP 대전 코드 생성 (가상)
 * @param {string} userId
 * @returns {string}
 */
export function generatePvPCode(userId) {
    const salt = "MVL_ARENA";
    const raw = `${userId}_${salt}_${Date.now()}`;
    return btoa(raw).substring(0, 12).toUpperCase();
}

