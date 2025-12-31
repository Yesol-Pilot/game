(function () {
    console.log("🚀 [긴급 복구] 스크립트 로드됨. Game 인스턴스 대기 중...");

    const checkGameInterval = setInterval(() => {
        if (window.game && window.game.creatureManager && window.game.resourceManager) {
            clearInterval(checkGameInterval);
            executeRestore();
        }
    }, 1000);

    function executeRestore() {
        console.log("✅ Game 인스턴스 확인됨. 복구 시작.");
        const cm = window.game.creatureManager;

        // 1. 모든 정의된 크리처 데이터 가져오기
        const allDefs = cm.getAllCreatureDefs();
        let count = 0;

        allDefs.forEach(def => {
            // 이미 보유 중인지 확인 (hasCreature 메서드 사용)
            if (!cm.hasCreature(def.id)) {
                // 직접 생성 로직 (private method _createCreatureByRarity 대신 직접 구현하거나 public methods 활용)
                // 여기서는 복구이므로 직접 객체를 생성하여 주입합니다.

                const newCreature = {
                    instanceId: cm.nextInstanceId++,
                    dataId: def.id,
                    def: def,
                    level: 1,
                    exp: 0,
                    star: 0,
                    affection: 0,
                    battleCount: 0,
                    expeditionCount: 0,
                    acquiredAt: new Date(),
                    stats: {}
                };

                // 스탯 계산
                cm.recalculateStats(newCreature);

                // 인벤토리에 추가
                cm.owned.push(newCreature);
                count++;

                // 이벤트 발생 (UI 업데이트용)
                cm.emit('summon:result', newCreature);
            }
        });

        if (count > 0) {
            cm.emit('creatures:updated', cm.owned);
        }

        console.log(`✅ 총 ${count}마리의 크리처가 복구(지급)되었습니다.`);

        // UI 표시
        setTimeout(() => {
            alert(`[데이터 긴급 복구 완료]\n\n총 ${count}마리의 크리처를 다시 찾았습니다!\n\n(확인을 누르면 자동 저장됩니다)`);
            window.game.save();
        }, 500);
    }
})();
