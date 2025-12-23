import BaseView from './BaseView.js';
import { NORMAL_SUMMON_TABLE, PREMIUM_SUMMON_TABLE } from '../data/SummonTable.js';

export default class SummonView extends BaseView {
    init() {
        // 소환 버튼 바인딩
        const btnNormal1 = document.getElementById('btn-summon-n1');
        const btnNormal10 = document.getElementById('btn-summon-n10');
        const btnPremium1 = document.getElementById('btn-summon-p1');
        const btnPremium10 = document.getElementById('btn-summon-p10');

        if (btnNormal1) btnNormal1.onclick = () => this.game.creatureManager.tryNormalSummon();
        if (btnNormal10) btnNormal10.onclick = () => this.game.creatureManager.summonBatch('normal');
        if (btnPremium1) btnPremium1.onclick = () => this.game.creatureManager.tryPremiumSummon();
        if (btnPremium10) btnPremium10.onclick = () => this.game.creatureManager.summonBatch('premium');

        // 결과 이벤트 감지
        this.game.creatureManager.on('summon:result', (creature) => {
            this.handleSummonResult(creature);
        });

        // [NEW] 일괄 소환 결과 감지
        this.game.creatureManager.on('summon:batch_result', (results) => {
            this.handleBatchSummonResult(results);
        });

        this.game.creatureManager.on('summon:failed', (data) => {
            this.addLog(`소환 실패: ${data.reason}`, "normal");
            alert(`소환 실패: ${data.reason}`);
        });

        // [NEW] Inject Cinematic Overlay if not exists
        this.createCinematicOverlay();

        // [NEW] 확률 정보 버튼
        this.injectProbabilityInfo();
    }

    injectProbabilityInfo() {
        const contentSummon = document.getElementById('content-summon');
        if (!contentSummon) return;

        const header = contentSummon.querySelector('.panel-header');
        if (header && !header.querySelector('.btn-prob-info')) {
            const btn = document.createElement('button');
            btn.className = 'cyber-btn small btn-prob-info';
            btn.innerText = '확률 정보 (Probability)';
            btn.style.marginLeft = 'auto';
            btn.onclick = () => this.showProbabilityInfo();
            header.appendChild(btn);
        }
    }

    showProbabilityInfo() {
        let msg = "=== 소환 확률 (Probabilities) ===\n\n[일반 소환 (Gold)]\n";
        NORMAL_SUMMON_TABLE.forEach(row => {
            msg += `${row.rarity}: ${row.weight}%\n`;
        });

        msg += "\n[프리미엄 소환 (Gem)]\n";
        PREMIUM_SUMMON_TABLE.forEach(row => {
            msg += `${row.rarity}: ${row.weight}%\n`;
        });

        alert(msg);
    }

    createCinematicOverlay() {
        if (document.getElementById('cinematic-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'cinematic-overlay';
        overlay.innerHTML = `
            <div id="cinematic-flash"></div>
            <div id="cinematic-circle"></div>
            <div id="cinematic-status" style="position:absolute; top:40%; left:50%; transform:translate(-50%, -50%); color:var(--accent-primary); font-family:'Orbitron'; font-size:1.5rem; letter-spacing:5px; text-shadow:0 0 10px var(--accent-primary); opacity:0; transition:all 0.5s;">차원 동기화 중...</div>
            <div id="cinematic-image-container">
                <img id="cinematic-image" src="" alt="">
                <div id="cinematic-dialogue"></div>
            </div>
            <div id="cinematic-batch-grid" style="display:none; grid-template-columns:repeat(5, 1fr); gap:15px; padding:20px; width:90%; max-width:800px; z-index:110;"></div>
            <div id="cinematic-skip-hint">화면을 클릭하여 건너뛰기</div>
        `;
        document.body.appendChild(overlay);

        overlay.onclick = () => {
            if (this.isSkipping) return;
            this.isSkipping = true;
            this.endCinematic();
        };
    }

    // 단일 소환 처리
    handleSummonResult(creature) {
        this.currentSummon = creature;
        this.currentBatch = null;
        this.game.save();

        // 모든 소환에 시네마틱 적용 (등급별 차등 연출)
        this.playCinematic(creature);
    }

    // 일괄 소환 처리
    handleBatchSummonResult(results) {
        this.currentBatch = results;
        this.currentSummon = null;
        this.game.save();

        // 가장 높은 등급 찾기 (Cinematic용 대표 모델)
        const rarityOrder = ['Normal', 'Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'];
        let bestCreature = results[0];
        results.forEach(c => {
            if (rarityOrder.indexOf(c.def.rarity) > rarityOrder.indexOf(bestCreature.def.rarity)) {
                bestCreature = c;
            }
        });

        this.playCinematic(bestCreature);
    }

    async playCinematic(creature) {
        const overlay = document.getElementById('cinematic-overlay');
        const img = document.getElementById('cinematic-image');
        const dialogue = document.getElementById('cinematic-dialogue');
        const flash = document.getElementById('cinematic-flash');
        const circle = document.getElementById('cinematic-circle');
        const status = document.getElementById('cinematic-status');
        const grid = document.getElementById('cinematic-batch-grid');
        const skipHint = document.getElementById('cinematic-skip-hint');


        if (!overlay) return;

        this.isSkipping = false;

        // Reset
        overlay.className = 'active';
        overlay.classList.add(`rarity-${creature.def.rarity}`);
        img.src = creature.def.image || 'images/creature_slime.png'; // Fallback for main image
        img.className = '';
        dialogue.innerText = '';
        dialogue.className = '';
        flash.className = '';
        circle.className = '';
        status.style.opacity = '0';
        grid.style.display = 'none';
        grid.innerHTML = '';
        skipHint.style.display = 'block'; // Ensure skip hint is visible at start

        // --- Sequence ---

        // Phase 0: Dimensional Syncing
        setTimeout(() => {
            if (this.isSkipping) return;
            status.style.opacity = '1';
            status.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }, 100);

        setTimeout(() => {
            if (this.isSkipping) return;
            status.style.opacity = '0';
        }, 1200);

        // Phase 1: Show Magic Circle
        setTimeout(() => {
            if (this.isSkipping) return;
            circle.classList.add('show');
        }, 1300);

        // Phase 2: Flash & Reveal Representative
        const revealDelay = ['SSR', 'UR'].includes(creature.def.rarity) ? 3000 : 2200;

        setTimeout(() => {
            if (this.isSkipping) return;
            circle.classList.add('reveal');
            flash.classList.add('do-flash');

            if (['SR', 'SSR', 'UR'].includes(creature.def.rarity)) {
                document.body.classList.add('shake-screen');
                setTimeout(() => document.body.classList.remove('shake-screen'), 500);
            }

            img.classList.add('show');
        }, revealDelay);

        // Phase 3: Dialogue (Representative)
        const rarityIdx = ['Normal', 'Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'].indexOf(creature.def.rarity);
        if (rarityIdx >= 3) {
            setTimeout(() => {
                if (this.isSkipping) return;
                const lines = creature.def.lines || {};
                dialogue.innerText = `"${lines.normal || '새로운 세계에 오신 것을 환영합니다.'}"`;
                dialogue.classList.add('show');
            }, revealDelay + 800);
        }

        // Phase 4: (Only Batch) Reveal all results in Grid
        if (this.currentBatch) {
            const gridDelay = revealDelay + 2500;
            setTimeout(() => {
                if (this.isSkipping) return;

                // Fade out representative
                img.style.opacity = '0';
                dialogue.style.opacity = '0';

                // Show Grid
                grid.style.display = 'grid';
                grid.style.gridTemplateColumns = 'repeat(5, 1fr)'; // Fixed layout
                status.style.opacity = '0'; // Hide skip hint or status message

                this.currentBatch.forEach((c, idx) => {
                    const item = document.createElement('div');
                    item.className = 'grid-item fade-in';
                    item.style.animationDelay = `${idx * 0.1}s`;
                    const imgPath = c.def.image || 'images/creature_slime.png'; // Fallback for grid item image
                    item.innerHTML = `
                        <div style="position:relative; border:1px solid rgba(255,255,255,0.2); border-radius:8px; overflow:hidden; background:rgba(0,0,0,0.5);">
                            <img src="${imgPath}" onerror="this.src='images/creature_slime.png'" style="width:100%; height:80px; object-fit:cover;">
                            <div style="position:absolute; bottom:0; padding:1px 5px; background:rgba(0,0,0,0.7); font-size:0.6rem; width:100%; text-align:center; color:var(--rarity-color); border-top:1px solid var(--rarity-color);">
                                ${c.def.rarity}
                            </div>
                        </div>
                    `;
                    // Set rarity specific color for each item if needed
                    const rarityColorMap = {
                        'Normal': '#9e9e9e', 'Unique': '#66bb6a', 'Rare': '#42a5f5',
                        'Special': '#ab47bc', 'SR': '#ff7043', 'SSR': '#ef5350', 'UR': '#ffd700'
                    };
                    item.style.setProperty('--rarity-color', rarityColorMap[c.def.rarity]);
                    grid.appendChild(item);
                });
            }, gridDelay);

            this.cinematicTimer = setTimeout(() => {
                if (!this.isSkipping) this.endCinematic();
            }, gridDelay + 3000);
        } else {
            // Single Auto End
            const totalDuration = rarityIdx >= 5 ? 6500 : 5000;
            this.cinematicTimer = setTimeout(() => {
                if (!this.isSkipping) this.endCinematic();
            }, totalDuration);
        }
    }

    endCinematic() {
        if (this.cinematicTimer) clearTimeout(this.cinematicTimer);

        const overlay = document.getElementById('cinematic-overlay');
        const img = document.getElementById('cinematic-image');
        const dialogue = document.getElementById('cinematic-dialogue');
        const circle = document.getElementById('cinematic-circle');
        const grid = document.getElementById('cinematic-batch-grid');
        const status = document.getElementById('cinematic-status');
        const skipHint = document.getElementById('cinematic-skip-hint');


        if (!overlay.classList.contains('active')) return;

        overlay.className = '';
        img.className = '';
        img.style.opacity = '';
        dialogue.className = '';
        dialogue.style.opacity = '';
        circle.className = '';
        grid.style.display = 'none';
        grid.innerHTML = '';
        status.style.opacity = '0';
        skipHint.style.display = 'none'; // Hide skip hint

        // 종료 후 결과 화면 렌더링
        if (this.currentBatch) {
            this.addLog(`소환 완료! (${this.currentBatch.length}마리 획득)`);
            this.renderBatchResult(this.currentBatch);
            this.currentBatch = null;
        } else if (this.currentSummon) {
            this.addLog(`소환 성공! [${this.currentSummon.def.rarity}] ${this.currentSummon.def.name}`);
            this.renderSummonResult(this.currentSummon);
            this.currentSummon = null;
        }
    }

    renderSummonResult(creature) {
        const resultBox = document.getElementById('summon-result');
        if (!resultBox) return;

        const rarityColorMap = {
            'Normal': '#95a5a6', 'Unique': '#2ecc71', 'Rare': '#3498db',
            'Special': '#9b59b6', 'SR': '#e67e22', 'SSR': '#e74c3c', 'UR': '#f1c40f'
        };
        const color = rarityColorMap[creature.def.rarity] || '#fff';

        const card = document.createElement('div');
        card.className = `creature-card rarity-${creature.def.rarity} fade-in`;
        card.style.border = `2px solid ${color}`;
        card.style.margin = '10px auto';

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-grade" style="color:${color}">${creature.def.rarity} [${creature.def.world || 'Unknown'}]</div>
                <div class="card-img">
                    <img src="${creature.def.image}" onerror="this.src='images/creature_slime.png'" alt="${creature.def.name}">
                </div>
                <div class="card-name">${creature.def.name}</div>
            </div>
        `;

        resultBox.innerHTML = '';
        resultBox.appendChild(card);

        const btnOk = document.createElement('button');
        btnOk.className = 'cyber-btn';
        btnOk.style.width = '100%';
        btnOk.style.marginTop = '20px';
        btnOk.innerText = '확인 (Confirm)';
        btnOk.onclick = () => {
            resultBox.innerHTML = ''; // Clear result to show original summon menu
            this.addLog("메인 소환 메뉴로 복귀했습니다.");
        };
        resultBox.appendChild(btnOk);
    }

    // [NEW] 배치 결과 렌더링 (Grid)
    renderBatchResult(results) {
        const resultBox = document.getElementById('summon-result');
        if (!resultBox) return;

        resultBox.innerHTML = '';

        // 그리드 컨테이너
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(5, 1fr)'; // [Fix] 11x1 배열 방지
        grid.style.gap = '10px';
        grid.style.width = '100%';
        grid.style.padding = '10px';

        results.forEach((creature, index) => {
            const rarityColorMap = {
                'Normal': '#95a5a6', 'Unique': '#2ecc71', 'Rare': '#3498db',
                'Special': '#9b59b6', 'SR': '#e67e22', 'SSR': '#e74c3c', 'UR': '#f1c40f'
            };
            const color = rarityColorMap[creature.def.rarity] || '#fff';

            const card = document.createElement('div');
            // 애니메이션 딜레이 효과 (순차 등장)
            card.className = `creature-card mini rarity-${creature.def.rarity} fade-in`;
            card.style.border = `1px solid ${color}`;
            card.style.animationDelay = `${index * 0.1}s`;

            const imgPath = creature.def.image || 'images/creature_slime.png';
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-grade" style="font-size:0.7em; color:${color}">${creature.def.rarity}</div>
                    <div class="card-img" style="height:60px;">
                        <img src="${imgPath}" onerror="this.src='images/creature_slime.png'" alt="${creature.def.name}" style="object-fit:contain; width:100%; height:100%;">
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        resultBox.appendChild(grid);

        const btnOk = document.createElement('button');
        btnOk.className = 'cyber-btn';
        btnOk.style.width = '100%';
        btnOk.style.marginTop = '20px';
        btnOk.innerText = '모두 확인 (Confirm All)';
        btnOk.onclick = () => {
            resultBox.innerHTML = ''; // Clear result to show original summon menu
            this.addLog("일괄 소환 결과 확인 완료.");
        };
        resultBox.appendChild(btnOk);
    }
}
