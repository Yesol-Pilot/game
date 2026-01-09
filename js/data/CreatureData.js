import { RANKS } from './RankData.js';
import { WORLDS, FACTIONS, WORLD_TO_FACTION } from './WorldData.js';

// 기존 정적 임포트 제거
// 데이터는 DataManager에 의해 비동기로 로드되어 아래 배열들에 주입됩니다.

export { WORLDS, FACTIONS, WORLD_TO_FACTION };

// Mutable Arrays for DataManager to populate
export const OLYMPUS_CREATURES = [];
export const ASGARD_CREATURES = [];
export const SHANGRILA_CREATURES = [];
export const ABYSS_CREATURES = [];
export const WILD_CREATURES = [];

/**
 * 전체 크리처 정의 리스트 통합 (DataManager.rebuildIndex()에 의해 갱신됨)
 */
export const CREATURE_DEFS = [];

/**
 * 크리처 ID -> 정의 맵 (DataManager.rebuildIndex()에 의해 갱신됨)
 */
export const CREATURE_DEF_MAP = {};

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
