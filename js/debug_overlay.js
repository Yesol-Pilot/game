
// 디버깅용 오버레이: 화면 최상단에 에러와 상태를 표시함
// Numpad 0 키로 토글
(function () {
    console.log("[Debug] Initializing Overlay...");

    const overlay = document.createElement('div');
    overlay.id = 'debug-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background: rgba(0, 0, 0, 0.8);
        color: lime;
        font-family: monospace;
        font-size: 12px;
        z-index: 999999999;
        overflow-y: scroll;
        padding: 10px;
        pointer-events: none; /* 클릭 통과 */
        border-bottom: 2px solid red;
        display: none; /* 기본적으로 숨김 */
    `;
    // DOM이 아직 없을 수 있으므로 리스너 사용
    if (document.body) {
        document.body.appendChild(overlay);
    } else {
        window.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(overlay);
        });
    }

    // Key 0 (Numpad or Digit) to Toggle
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Numpad0' || e.code === 'Digit0') {
            overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
        }
    });

    function log(msg, color = 'lime') {
        if (!overlay.parentNode && document.body) document.body.appendChild(overlay);

        const line = document.createElement('div');
        line.style.color = color;
        line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        if (overlay.firstChild) {
            overlay.insertBefore(line, overlay.firstChild);
        } else {
            overlay.appendChild(line);
        }
        console.log(`[DebugOverlay] ${msg}`);
    }

    log("Debug Overlay Started.");

    // [Cheat] Grant All UR/SSR/SR Creatures
    window.grantHighRarityCreatures = function () {
        if (!window.game || !window.game.creatureManager) {
            console.error("[Cheat] Game not initialized");
            return;
        }

        const creatureIds = [
            // UR (5)
            'god_zeus', 'dragon_chaos', 'creator_gaia', 'time_lord_chronos', 'void_emperor',
            // SSR (5)
            'dragon_ancient', 'angel_arch', 'demon_king', 'titan_atlas', 'phoenix_eternal',
            // SR (5)
            'dragon_drake', 'giant_hill', 'vampire_lord', 'valkyrie', 'kraken_baby'
        ];

        const cm = window.game.creatureManager;
        let added = 0;

        // Import CREATURE_DEF_MAP dynamically
        import('./js/data/CreatureData.js').then(module => {
            creatureIds.forEach(id => {
                const def = module.CREATURE_DEF_MAP[id];
                if (!def) {
                    console.warn(`[Cheat] Creature ${id} not found`);
                    return;
                }

                // Check if already owned
                const alreadyOwned = cm.owned.some(c => c.def.id === id);
                if (alreadyOwned) {
                    console.log(`[Cheat] Already have ${def.name}`);
                    return;
                }

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
                cm.recalculateStats(newCreature);
                cm.owned.push(newCreature);
                added++;
                console.log(`[Cheat] Added ${def.name} (${def.rarity})`);
            });

            cm.emit('creatures:updated', cm.owned);
            window.game.save();
            log(`[Cheat] Added ${added} creatures!`, 'gold');
            alert(`UR/SSR/SR 크리처 ${added}마리 지급 완료!`);
        });
    };

    // Expose to window for console access
    console.log("[Debug] Cheat function available: grantHighRarityCreatures()");
    console.log("[Debug] Cheat function available: grantAllCreatures()");

    // [Cheat] Grant ALL Creatures (테스트용)
    window.grantAllCreatures = function () {
        if (!window.game || !window.game.creatureManager) {
            console.error("[Cheat] Game not initialized");
            return;
        }

        const cm = window.game.creatureManager;
        let added = 0;

        import('./js/data/CreatureData.js').then(module => {
            const allDefs = module.CREATURE_DEFS;

            allDefs.forEach(def => {
                // 히든 크리처 제외 (옵션)
                if (def.isHidden) return;

                // 이미 보유 중인지 체크
                const alreadyOwned = cm.owned.some(c => c.def.id === def.id);
                if (alreadyOwned) {
                    console.log(`[Cheat] Already have ${def.name}`);
                    return;
                }

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
                cm.recalculateStats(newCreature);
                cm.owned.push(newCreature);
                added++;
                console.log(`[Cheat] Added ${def.name} (${def.rarity})`);
            });

            cm.emit('creatures:updated', cm.owned);
            window.game.save();
            log(`[Cheat] Added ${added} creatures (ALL)!`, 'gold');
            alert(`모든 크리처 ${added}마리 지급 완료!`);
        });
    };

    // 1. 전역 에러 캡처
    window.addEventListener('error', (e) => {
        log(`Global Error: ${e.message} at ${e.filename}:${e.lineno}`, 'red');
    });

    window.addEventListener('unhandledrejection', (e) => {
        log(`Unhandled Promise Rejection: ${e.reason}`, 'red');
    });

    // 2. 탭 상태 모니터링 (2초마다)
    setInterval(() => {
        const activeTabBtn = document.querySelector('.auth-tab.active') || document.querySelector('#bottom-dock button.active');
        const activeContent = document.querySelector('.tab-content.active');

        // 탭 버튼 상태
        const btnId = activeTabBtn ? activeTabBtn.id : 'NONE';

        // 컨텐츠 상태
        let contentStatus = "NONE";
        if (activeContent) {
            const rect = activeContent.getBoundingClientRect();
            const styles = window.getComputedStyle(activeContent);
            const childCount = activeContent.children.length;
            contentStatus = `ID: ${activeContent.id} | Size: ${Math.round(rect.width)}x${Math.round(rect.height)} | Vis: ${styles.visibility} | Opacity: ${styles.opacity} | Children: ${childCount}`;

            // 경고: 높이가 0이거나 보이지 않을 때
            if (rect.height < 10 || styles.display === 'none' || styles.visibility === 'hidden' || styles.opacity === '0') {
                log(`[Warning] Content ${activeContent.id} is active but invisible! (${contentStatus})`, 'orange');
                activeContent.style.border = "5px solid red"; // 시각적 하이라이트
            }
        }

        // Home 탭 처리
        const homeLayout = document.getElementById('content-home');
        if (homeLayout && homeLayout.classList.contains('active')) {
            const rect = homeLayout.getBoundingClientRect();
            contentStatus = `Home(Grid) | Size: ${Math.round(rect.width)}x${Math.round(rect.height)}`;
        }

        log(`Status: Tab[${btnId}] Content[${contentStatus}]`, 'cyan');

    }, 2000);

})();
