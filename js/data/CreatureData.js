import { RANKS } from './RankData.js';
import { WORLDS, FACTIONS, WORLD_TO_FACTION } from './WorldData.js';

// 신화별 데이터 import
import { OLYMPUS_CREATURES } from './creatures/OlympusData.js';
import { ASGARD_CREATURES } from './creatures/AsgardData.js';
import { SHANGRILA_CREATURES } from './creatures/ShangriLaData.js';
import { ABYSS_CREATURES } from './creatures/AbyssData.js';
import { WILD_CREATURES } from './creatures/WildData.js';

// 상수를 재수출하여 기존 코드 하이퍼 호환성 유지
export { WORLDS, FACTIONS, WORLD_TO_FACTION };

/**
 * 전체 크리처 정의 리스트 통합
 */
export const CREATURE_DEFS = [
    ...OLYMPUS_CREATURES,
    ...ASGARD_CREATURES,
    ...SHANGRILA_CREATURES,
    ...ABYSS_CREATURES,
    ...WILD_CREATURES
];

/**
 * 크리처 ID -> 정의 맵
 */
export const CREATURE_DEF_MAP = {};
CREATURE_DEFS.forEach(def => {
    CREATURE_DEF_MAP[def.id] = def;
});

/**
 * 월드별 크리처 필터 헬퍼
 */
export function getCreaturesByWorld(world) {
    return CREATURE_DEFS.filter(c => c.world === world);
}

/**
 * 세력별 크리처 필터 헬퍼
 */
export function getCreaturesByFaction(faction) {
    return CREATURE_DEFS.filter(c => WORLD_TO_FACTION[c.world] === faction);
}

/**
 * 등급별 크리처 필터 헬퍼
 */
export function getCreaturesByRarity(rarity) {
    return CREATURE_DEFS.filter(c => c.rarity === rarity);
}

/**
 * 터치 상호작용 가능 여부 체크 (SSR 이상만)
 */
export function canInteract(creature) {
    if (!creature) return false;
    return creature.rarity === RANKS.UR || creature.rarity === RANKS.SSR;
}
