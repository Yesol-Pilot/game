/**
 * SkillData.js
 * 전투 중에 사용되는 모든 스킬과 상태이상의 데이터 정의
 */

export const SKILL_TYPES = {
    SINGLE_ATTACK: "SINGLE_ATTACK",
    MULTI_ATTACK: "MULTI_ATTACK",
    ALL_ATTACK: "ALL_ATTACK",
    HEAL: "HEAL",
    SHIELD: "SHIELD",
    BUFF: "BUFF",
    DEBUFF: "DEBUFF"
};

export const TARGET_TYPES = {
    ENEMY_FIRST: "ENEMY_FIRST",
    ENEMY_RANDOM: "ENEMY_RANDOM",
    ENEMY_ALL: "ENEMY_ALL",
    ENEMY_ADVANTAGE: "ENEMY_ADVANTAGE", // 상성 유리 대상 우선
    ALLY_SELF: "ALLY_SELF",
    ALLY_LOWEST_HP: "ALLY_LOWEST_HP",
    ALLY_ALL: "ALLY_ALL"
};

export const STATUS_EFFECTS = {
    BURN: { id: "burn", name: "화상", type: "dot", icon: "🔥", desc: "턴마다 데미지" },
    FREEZE: { id: "freeze", name: "동상", type: "stun", icon: "❄️", desc: "행동 불능 및 속도 감소" },
    STUN: { id: "stun", name: "기절", type: "stun", icon: "💫", desc: "행동 불능" },
    SHOCK: { id: "shock", name: "감전", type: "debuff", icon: "⚡", desc: "방어력 감소 및 연쇄 데미지" },
    SLOW: { id: "slow", name: "둔화", type: "debuff", icon: "🐌", desc: "공격 속도 감소" },
    POISON: { id: "poison", name: "맹독", type: "dot", icon: "🤢", desc: "강력한 지속 데미지" },
    BLEED: { id: "bleed", name: "출혈", type: "dot", icon: "🩸", desc: "행동 시 피해 발생" },
    SILENCE: { id: "silence", name: "침묵", type: "cc", icon: "🤐", desc: "스킬 사용 불가" },
    BLIND: { id: "blind", name: "실명", type: "debuff", icon: "🕶️", desc: "명중률 대폭 하락" },
    ATK_UP: { id: "atk_up", name: "공격력 증가", type: "buff", icon: "⚔️", desc: "공격력 상승" },
    DEF_UP: { id: "def_up", name: "방어력 증가", type: "buff", icon: "🛡️", desc: "방어력 상승" }
};

export const SKILLS = {
    // --- 기본 공격 ---
    DEFAULT_ATTACK: {
        id: "default_attack",
        name: "신성한 일격",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_ADVANTAGE,
        power: 1.0,
        description: "적에게 신성한 힘으로 공격합니다."
    },

    // --- 시간의 지배자 (크로노스) ---
    TIME_NIGHTMARE: {
        id: "chronos_skill",
        name: "시간의 악몽",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.2,
        effects: [{ id: "slow", chance: 1.0, duration: 2 }, { id: "silence", chance: 0.5, duration: 1 }],
        description: "적들의 시간을 늦추고 침묵시킵니다."
    },

    // --- 펜리르 ---
    RAGNAROK_HOWL: {
        id: "fenrir_skill",
        name: "라그나로크 하울",
        type: SKILL_TYPES.MULTI_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 1.4,
        hitCount: 2,
        effects: [{ id: "bleed", chance: 0.8, duration: 3 }],
        description: "무작위 적을 물어뜯어 출혈을 일으킵니다."
    },

    // --- 올림푸스 (제우스) ---
    JUDGEMENT_THUNDER: {
        id: "zeus_skill",
        name: "천둥의 심판",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.5,
        effects: [{ id: "stun", chance: 0.3, duration: 1 }],
        description: "모든 적에게 강력한 번개를 내리고 확률적으로 기절시킵니다."
    },

    // --- 아스가르드 (오딘) ---
    GUNGNIR_STRIKE: {
        id: "odin_skill",
        name: "궁니르의 일격",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_FIRST,
        power: 3.5,
        effects: [{ id: "shock", chance: 1.0, duration: 2 }],
        description: "단일 대상에게 치명적인 데미지를 주고 감전 상태로 만듭니다."
    },

    // --- 상그릴라 (미호) ---
    SEDUCTION_ORB: {
        id: "miho_skill",
        name: "유혹의 구슬",
        type: SKILL_TYPES.MULTI_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 1.2,
        hitCount: 3,
        effects: [{ id: "slow", chance: 0.5, duration: 2 }],
        description: "랜덤한 적들에게 3회의 유혹의 구슬을 던집니다."
    },

    // --- 어비스 (티아마트) ---
    CHAOS_BREATH: {
        id: "tiamat_skill",
        name: "혼돈의 브레스",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.8,
        effects: [{ id: "burn", chance: 0.8, duration: 3 }],
        description: "모든 적을 혼돈의 불꽃으로 불태웁니다."
    },

    // --- 힐러/보조 예시 ---
    FAIRY_BLESSING: {
        id: "fairy_skill",
        name: "요정의 축복",
        type: SKILL_TYPES.HEAL,
        target: TARGET_TYPES.ALLY_LOWEST_HP,
        power: 2.0, // ATK 기반 힐량
        description: "체력이 가장 낮은 아군을 회복시킵니다."
    },

    SHIELD_OF_LIGHT: {
        id: "angel_skill",
        name: "성스러운 방벽",
        type: SKILL_TYPES.SHIELD,
        target: TARGET_TYPES.ALLY_ALL,
        power: 1.0, // ATK 기반 쉴드량
        description: "모든 아군에게 성스러운 빛의 방어막을 부여합니다."
    },

    // ==========================================
    // 그리스 신화 보스 스킬
    // ==========================================

    // --- 네메아 사자 ---
    NEMEAN_ROAR: {
        id: "lion_nemean_skill",
        name: "불사의 포효",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.3,
        effects: [{ id: "atk_up", chance: 1.0, duration: 2 }],
        description: "방어력을 무시하는 포효로 적들을 위협합니다."
    },

    // --- 레르나의 히드라 ---
    HYDRA_VENOM: {
        id: "hydra_skill",
        name: "맹독의 아가리",
        type: SKILL_TYPES.MULTI_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 1.0,
        hitCount: 3,
        effects: [{ id: "poison", chance: 0.9, duration: 3 }],
        description: "여러 머리로 물어뜻고 맹독을 주입합니다."
    },

    // --- 미노타우로스 ---
    LABYRINTH_CHARGE: {
        id: "minotaur_skill",
        name: "미궁의 돌격",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_FIRST,
        power: 2.5,
        effects: [{ id: "stun", chance: 0.7, duration: 1 }],
        description: "거대한 뿔로 적을 들이받아 기절시킵니다."
    },

    // --- 케르베로스 ---
    HELLGATE_HOWL: {
        id: "cerberus_skill",
        name: "지옥문의 울부짖음",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.4,
        effects: [{ id: "burn", chance: 0.6, duration: 2 }, { id: "fear", chance: 0.3, duration: 1 }],
        description: "세 머리의 포효로 적들을 불태우고 공포에 빠뜨립니다."
    },

    // --- 크로노스의 그림자 ---
    TEMPORAL_COLLAPSE: {
        id: "kronos_shade_skill",
        name: "시간 붕괴",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 2.0,
        effects: [{ id: "slow", chance: 1.0, duration: 3 }, { id: "silence", chance: 0.5, duration: 2 }],
        description: "시간 자체를 붕괴시켜 모든 적의 행동을 마비시킵니다."
    },

    // ==========================================
    // 일반 적 및 하위 등급 스킬
    // ==========================================

    // --- 늑대 계열 ---
    WOLF_BITE: {
        id: "wolf_skill",
        name: "날카로운 이빨",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_ADVANTAGE,
        power: 1.2,
        effects: [{ id: "bleed", chance: 0.4, duration: 2 }],
        description: "예리한 이빨로 물어뜻어 출혈을 유발합니다."
    },

    // --- 독사 ---
    POISON_FANG: {
        id: "snake_skill",
        name: "독이빨",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 1.0,
        effects: [{ id: "poison", chance: 0.7, duration: 2 }],
        description: "독이 담긴 이빨로 물어 중독시킵니다."
    },

    // --- 슬라임 계열 ---
    SLIME_SPLASH: {
        id: "slime_skill",
        name: "점액 튜기기",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 0.8,
        effects: [{ id: "slow", chance: 0.5, duration: 1 }],
        description: "끈적이는 점액을 튀기며 이동속도를 늦춥니다."
    },

    // --- 하피/새 계열 ---
    WIND_SLASH: {
        id: "harpy_skill",
        name: "바람 발톱",
        type: SKILL_TYPES.MULTI_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 0.9,
        hitCount: 2,
        description: "날카로운 발톱으로 여러 번 할퀴니다."
    },

    // --- 골렘/거인 계열 ---
    GROUND_POUND: {
        id: "golem_skill",
        name: "대지 강타",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.1,
        effects: [{ id: "stun", chance: 0.2, duration: 1 }],
        description: "거대한 주먹으로 땅을 내리쳐 충격파를 일으킵니다."
    },

    // --- 언데드 계열 ---
    SOUL_DRAIN: {
        id: "undead_skill",
        name: "영혼 흡수",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_ADVANTAGE,
        power: 1.0,
        effects: [],
        description: "적의 생명력을 흡수합니다. (회복 효과)"
    },

    // --- 용 계열 ---
    DRAGON_FLAME: {
        id: "dragon_skill",
        name: "드래곤 플레임",
        type: SKILL_TYPES.ALL_ATTACK,
        target: TARGET_TYPES.ENEMY_ALL,
        power: 1.6,
        effects: [{ id: "burn", chance: 0.8, duration: 2 }],
        description: "강력한 화염을 내뿜어 모든 적을 불태웁니다."
    },

    // --- 곰 계열 ---
    ICE_CLAW: {
        id: "bear_skill",
        name: "얼음 할퀴기",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_FIRST,
        power: 1.4,
        effects: [{ id: "freeze", chance: 0.3, duration: 1 }],
        description: "얼음 서린 발톱으로 할퀴고 동결시킵니다."
    },

    // --- 독수리 계열 ---
    IRON_TALONS: {
        id: "eagle_skill",
        name: "강철 발톱",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_ADVANTAGE,
        power: 1.3,
        description: "급강하하여 강철 발톱으로 할퀴니다."
    },

    // --- 요정/님프 ---
    NATURE_BLESSING: {
        id: "nymph_skill",
        name: "자연의 축복",
        type: SKILL_TYPES.HEAL,
        target: TARGET_TYPES.ALLY_LOWEST_HP,
        power: 1.5,
        description: "자연의 힘으로 아군을 회복시킵니다."
    },

    // --- 영혼/위스프 ---
    SPECTRAL_TOUCH: {
        id: "spirit_skill",
        name: "영체의 손길",
        type: SKILL_TYPES.SINGLE_ATTACK,
        target: TARGET_TYPES.ENEMY_RANDOM,
        power: 1.0,
        effects: [{ id: "slow", chance: 0.6, duration: 2 }],
        description: "차가운 손길로 적의 움직임을 마비시킵니다."
    }
};

/**
 * 스킬 ID를 받아 스킬 데이터를 반환
 */
export function getSkillData(skillId) {
    return Object.values(SKILLS).find(s => s.id === skillId) || SKILLS.DEFAULT_ATTACK;
}
