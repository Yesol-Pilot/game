/**
 * 월드 및 세력 정의 데이터
 */

export const WORLDS = {
    OLYMPUS: "OLYMPUS",     // 치명타 특화, 신성의 연합 (질서)
    ASGARD: "ASGARD",       // 불굴/생존, 신성의 연합 (질서)
    SHANGRILA: "SHANGRILA", // 조화/회복, 환수의 맹약 (중립)
    ABYSS: "ABYSS",         // 공포/디버프, 심연의 군세 (혼돈)
    WILD: "WILD"            // 야생의 법칙, 환수의 맹약 (중립)
};

export const FACTIONS = {
    DIVINE_ALLIANCE: "DIVINE_ALLIANCE",   // 신성의 연합 (질서) - OLYMPUS, ASGARD
    LEGION_OF_ABYSS: "LEGION_OF_ABYSS",   // 심연의 군세 (혼돈) - ABYSS
    COVENANT_OF_BEASTS: "COVENANT_OF_BEASTS" // 환수의 맹약 (중립) - SHANGRILA, WILD
};

export const WORLD_TO_FACTION = {
    [WORLDS.OLYMPUS]: FACTIONS.DIVINE_ALLIANCE,
    [WORLDS.ASGARD]: FACTIONS.DIVINE_ALLIANCE,
    [WORLDS.SHANGRILA]: FACTIONS.COVENANT_OF_BEASTS,
    [WORLDS.ABYSS]: FACTIONS.LEGION_OF_ABYSS,
    [WORLDS.WILD]: FACTIONS.COVENANT_OF_BEASTS
};
