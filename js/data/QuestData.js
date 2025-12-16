
export const QUEST_DATA = {
    dailies: [
        { id: 'daily_login', title: '출석 체크', description: '게임에 접속하세요.', targetCount: 1, reward: { gold: 100 } },
        { id: 'daily_summon', title: '일일 소환', description: '크리처를 1회 소환하세요.', targetCount: 1, reward: { gem: 10 } },
        { id: 'daily_battle', title: '전투의 함성', description: '전투를 3회 진행하세요.', targetCount: 3, reward: { gold: 300 } },
        { id: 'daily_expedition', title: '탐사 보고', description: '탐사를 1회 완료하세요.', targetCount: 1, reward: { gold: 200 } }
    ],
    achievements: []
};

// Procedural Generation for 100 Achievements
const achievementTypes = [
    { id: 'col_gold', name: '부자의 길', desc: '골드를 누적 {n} 획득하세요', unit: 1000, rewardBase: 10 },
    { id: 'battle_win', name: '승리자', desc: '전투에서 {n}회 승리하세요', unit: 5, rewardBase: 5 },
    { id: 'sum_creature', name: '수집가', desc: '크리처를 {n}마리 모으세요', unit: 5, rewardBase: 20 },
    { id: 'level_up', name: '성장', desc: '계정 레벨 {n}을 달성하세요', unit: 2, rewardBase: 50 }
];

let achIdCounter = 1;

// 1. Generate Standard Achievements (80 total)
achievementTypes.forEach(type => {
    for (let i = 1; i <= 20; i++) {
        const target = i * type.unit;
        QUEST_DATA.achievements.push({
            id: `ach_${type.id}_${i}`,
            title: `${type.name} ${i}`,
            description: type.desc.replace('{n}', target),
            targetCount: target,
            reward: { gem: i * type.rewardBase },
            isHidden: false
        });
        achIdCounter++;
    }
});

// 2. Generate Hidden Achievements (20 total)
const hiddenChallenges = [
    { title: '끈기있는 자', desc: '전투에서 10회 패배하세요', target: 10 },
    { title: '클릭광', desc: '상점 배너를 100번 클릭하세요', target: 100 },
    { title: '무모한 도전', desc: '1레벨 크리처로 보스에게 도전하세요', target: 1 },
    { title: '운수 좋은 날', desc: '프리미엄 소환에서 UR을 획득하세요', target: 1 }
];

for (let i = 0; i < 20; i++) {
    const hidden = hiddenChallenges[i % hiddenChallenges.length];
    // Scale hidden targets slightly for variety if reusing
    const scale = Math.floor(i / 4) + 1;

    QUEST_DATA.achievements.push({
        id: `ach_hidden_${i}`,
        title: `히든: ${hidden.title} ${scale > 1 ? scale : ''}`,
        description: hidden.desc,
        targetCount: hidden.target * scale,
        reward: { gem: 100 * scale },
        isHidden: true // [NEW] Logic to hide description until unlocked? Or just tag it.
    });
}

// Export separate arrays for compatibility with QuestManager
export const DAILY_QUEST_DEFS = QUEST_DATA.dailies;
export const ACHIEVEMENT_DEFS = QUEST_DATA.achievements;

export function getQuestDef(id) {
    return [...QUEST_DATA.dailies, ...QUEST_DATA.achievements].find(q => q.id === id);
}
