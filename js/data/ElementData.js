
export const ELEMENTS = [
    "Nature", "Water", "Earth", "Wind", "Fire",
    "Light", "Dark",
    "Metal", "Ice",
    "Lightning", "Chaos", "Time", "Void"
];

// 공격자 -> 방어자 상성 계수 (기본 1.0)
// 1.5: 유리함 (Strong against)
// 0.8: 불리함 (Weak against)
export const TYPE_CHART = {
    "Fire": { "Nature": 1.5, "Ice": 1.5, "Metal": 1.5, "Water": 0.8, "Earth": 0.8 },
    "Water": { "Fire": 1.5, "Earth": 1.5, "Nature": 0.8, "Lightning": 0.8 },
    "Nature": { "Earth": 1.5, "Water": 1.5, "Fire": 0.8, "Wind": 0.8 },
    "Earth": { "Wind": 1.5, "Fire": 1.5, "Nature": 0.8, "Water": 0.8 },
    "Wind": { "Nature": 1.5, "Earth": 0.8, "Ice": 0.8 },

    "Light": { "Dark": 1.5, "Void": 0.8 },
    "Dark": { "Light": 1.5, "Time": 0.8 },

    "Metal": { "Nature": 1.5, "Fire": 0.8 },
    "Ice": { "Water": 0.8, "Fire": 0.8, "Nature": 1.5 },

    "Lightning": { "Water": 1.5, "Metal": 1.5, "Earth": 0.8 },

    "Chaos": { "Time": 1.5, "Void": 1.5, "Light": 1.2, "Dark": 1.2 },
    "Time": { "Void": 1.5, "Chaos": 0.8 },
    "Void": { "Light": 1.5, "Dark": 1.5, "Chaos": 0.8, "Time": 0.8 }
};

export function getElementMultiplier(atkElement, defElement) {
    if (!TYPE_CHART[atkElement]) return 1.0;
    return TYPE_CHART[atkElement][defElement] || 1.0;
}

// 방어자가 다중 속성일 경우 평균값 혹은 곱연산? 
// 여기서는 곱연산으로 처리 (예: 불 공격 -> 자연+얼음(1.5 * 1.5 = 2.25 배))
export function getCompositeMultiplier(atkElement, defElements) {
    if (!defElements || defElements.length === 0) return 1.0;

    let multiplier = 1.0;
    defElements.forEach(defElem => {
        multiplier *= getElementMultiplier(atkElement, defElem);
    });
    return multiplier;
}
