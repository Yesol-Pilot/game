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

        // [NEW] 가챠 천장(Pity) UI
        this.injectPityCounter();

        // Pity Update 감지
        this.game.creatureManager.on('pity:updated', (status) => {
            this.updatePityUI(status);
        });

        // 초기 상태 업데이트
        if (this.game.creatureManager.getPityStatus) {
            this.updatePityUI(this.game.creatureManager.getPityStatus());
        }
    }

    injectPityCounter() {
        const contentSummon = document.getElementById('content-summon');
        if (!contentSummon) return;

        const container = document.createElement('div');
        container.className = 'pity-counter-container';
        container.style.cssText = `
            margin: 10px 0;
            padding: 10px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 8px;
            border: 1px solid var(--accent-primary);
            text-align: center;
        `;

        const label = document.createElement('div');
        label.className = 'pity-label';
        label.innerText = 'SSR Guaranteed Pity';
        label.style.cssText = 'color: #fff; margin-bottom: 5px; font-size: 0.9em;';

        const barContainer = document.createElement('div');
        barContainer.style.cssText = `
            width: 100%;
            height: 10px;
            background: #333;
            border-radius: 5px;
            overflow: hidden;
            position: relative;
        `;

        const barFill = document.createElement('div');
        barFill.className = 'pity-bar-fill';
        barFill.style.cssText = `
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, var(--accent-secondary), var(--accent-primary));
            transition: width 0.3s ease;
        `;

        const text = document.createElement('div');
        text.className = 'pity-text';
        text.innerText = '0 / 50';
        text.style.cssText = 'color: #aaa; font-size: 0.8em; margin-top: 5px;';

        barContainer.appendChild(barFill);
        container.appendChild(label);
        container.appendChild(barContainer);
        container.appendChild(text);

        // 패널 상단(헤더 아래)에 삽입
        const header = contentSummon.querySelector('.panel-header');

        // [BugFix] insertBefore requires reference node to be a direct child.
        // If structure is complex, just appending after header if possible, or append to container.
        if (header && header.parentNode === contentSummon) {
            // Header is direct child, safe to use insertBefore on nextSibling
            contentSummon.insertBefore(container, header.nextSibling);
        } else {
            // Fallback: Just append to contentSummon (might be at bottom, but safe)
            // Or try toprepend if we want it at top (but below header if header exists?)
            // Let's just append for safety to unblock the crash.
            contentSummon.appendChild(container); // Safe Append
        }
    }

    updatePityUI(status) {
        const contentSummon = document.getElementById('content-summon');
        if (!contentSummon) return;

        const fill = contentSummon.querySelector('.pity-bar-fill');
        const text = contentSummon.querySelector('.pity-text');

        if (fill && text) {
            const percent = (status.current / status.max) * 100;
            fill.style.width = `${percent}%`;
            text.innerText = `${status.current} / ${status.max} (Guarantee in ${status.remaining})`;

            if (status.remaining === 0) {
                text.innerText = "NEXT SUMMON SSR GUARANTEED!";
                text.style.color = "var(--accent-primary)";
                text.style.fontWeight = "bold";
            } else {
                text.style.color = "#aaa";
                text.style.fontWeight = "normal";
            }
        }
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
            <div id="cinematic-batch-grid" style="display:none; flex-direction:column; align-items:center; gap:20px; padding:20px; width:95%; max-width:1200px; z-index:110;"></div>
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
        // [BugFix] 이전 결과 초기화
        const resultBox = this.ui.resultBox;
        if (resultBox) resultBox.innerHTML = '';

        this.currentSummon = creature;
        this.currentBatch = null;
        this.game.save();

        // 모든 소환에 시네마틱 적용 (등급별 차등 연출)
        this.playCinematic(creature);
    }

    // 일괄 소환 처리
    handleBatchSummonResult(results) {
        // [BugFix] 이전 결과 초기화
        const resultBox = this.ui.resultBox;
        if (resultBox) resultBox.innerHTML = '';

        const cinGrid = document.getElementById('cinematic-batch-grid');
        if (cinGrid) cinGrid.innerHTML = '';

        this.currentBatch = results;
        this.currentSummon = null;
        this.game.save();

        // 1. SR 이상인 크리처들을 모두 찾음 (내림차순 정렬: UR -> SSR -> SR)
        const rarityOrder = ['Normal', 'Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'];
        const highRankCreatures = results.filter(c =>
            ['SR', 'SSR', 'UR'].includes(c.def.rarity)
        ).sort((a, b) => rarityOrder.indexOf(b.def.rarity) - rarityOrder.indexOf(a.def.rarity));

        // 2. 큐에 담기
        this.cinematicQueue = highRankCreatures.length > 0 ? highRankCreatures : [];

        // 3. 만약 고등급이 하나도 없다면, 가장 높은 등급 하나만 연출 (기존 로직)
        if (this.cinematicQueue.length === 0) {
            let bestCreature = results[0];
            results.forEach(c => {
                if (rarityOrder.indexOf(c.def.rarity) > rarityOrder.indexOf(bestCreature.def.rarity)) {
                    bestCreature = c;
                }
            });
            this.cinematicQueue.push(bestCreature);
        }

        // 4. 순차 재생 시작
        this.isBatchSequence = true;
        this.playNextCinematic();
    }

    playNextCinematic() {
        if (this.cinematicQueue.length > 0) {
            const nextCreature = this.cinematicQueue.shift();
            // 다음 연출 실행 (끝나면 다시 playNextCinematic 호출)
            this.playCinematic(nextCreature, () => {
                this.playNextCinematic();
            });
        } else {
            // 모든 연출 종료 -> 결과 그리드 표시
            this.showBatchGrid();
        }
    }

    playCinematic(creature, onComplete = null) {
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

        // 스킵 핸들러 (클릭 시 즉시 완료 처리)
        this.currentSkipHandler = () => {
            if (this.isSkipping) return;
            this.isSkipping = true;
            this.clearCinematicTimers(); // 모든 타이머 정지
            if (onComplete) onComplete(); // 즉시 다음으로
            else this.endCinematic(); // 단일 소환이면 종료
        };

        // Reset
        overlay.className = 'active';
        // 기존 클래스 제거 후 새로 추가 (등급 색상)
        overlay.classList.remove('rarity-Normal', 'rarity-Unique', 'rarity-Rare', 'rarity-Special', 'rarity-SR', 'rarity-SSR', 'rarity-UR');
        overlay.classList.add(`rarity-${creature.def.rarity}`);

        // [NEW] Premium Showoff Image Logic
        let displayImage = creature.def.image;
        if (['UR', 'SSR'].includes(creature.def.rarity)) {
            // Try Gallery Lv3 (Best) -> Victory -> Skill -> Base
            const s = creature.def.sprites;
            if (s) {
                if (s.gallery && s.gallery.lv3) displayImage = s.gallery.lv3;
                else if (s.victory) displayImage = s.victory;
                else if (s.skill) displayImage = s.skill;
            }
        }
        else if (creature.def.rarity === 'SR') {
            // Try Victory -> Base
            const s = creature.def.sprites;
            if (s && s.victory) displayImage = s.victory;
        }

        img.src = displayImage || 'images/creature_slime.png';
        img.className = '';
        dialogue.innerText = '';
        dialogue.className = '';
        flash.className = '';
        circle.className = '';
        status.style.opacity = '0';
        grid.style.display = 'none';
        grid.innerHTML = '';
        skipHint.style.display = 'block';

        // Override overlay click to use new skip handler
        overlay.onclick = this.currentSkipHandler;

        // [Safety] Image Fallback
        img.onerror = () => { img.src = 'images/creature_slime.png'; img.onerror = null; };

        // --- Sequence Timers ---
        this.timers = [];

        // Phase 0: Dimensional Syncing
        this.timers.push(setTimeout(() => {
            status.style.opacity = '1';
            status.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }, 100));

        this.timers.push(setTimeout(() => {
            status.style.opacity = '0';
        }, 1200));

        // Phase 1: Show Magic Circle
        this.timers.push(setTimeout(() => {
            circle.classList.add('show');
        }, 1300));

        // Phase 2: Flash & Reveal
        const revealDelay = ['SSR', 'UR'].includes(creature.def.rarity) ? 3000 : 2200;

        this.timers.push(setTimeout(() => {
            circle.classList.add('reveal');
            flash.classList.add('do-flash');
            if (['SR', 'SSR', 'UR'].includes(creature.def.rarity)) {
                document.body.classList.add('shake-screen');
                setTimeout(() => document.body.classList.remove('shake-screen'), 500);
            }
            img.classList.add('show');
        }, revealDelay));

        // Phase 3: Dialogue
        const rarityIdx = ['Normal', 'Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'].indexOf(creature.def.rarity);
        if (rarityIdx >= 3) {
            this.timers.push(setTimeout(() => {
                const lines = creature.def.lines || {};
                dialogue.innerText = `"${lines.normal || '새로운 세계에 오신 것을 환영합니다.'}"`;
                dialogue.classList.add('show');
            }, revealDelay + 800));
        }

        // End Sequence (Next or Finish)
        const totalDuration = rarityIdx >= 5 ? revealDelay + 3500 : revealDelay + 2500;

        this.timers.push(setTimeout(() => {
            if (onComplete) {
                // 다음 시네마틱이 있으면 페이드아웃 후 실행
                img.style.opacity = '0';
                dialogue.style.opacity = '0';
                setTimeout(() => onComplete(), 500);
            } else {
                // 단일 소환이면 종료
                this.endCinematic();
            }
        }, totalDuration));
    }

    clearCinematicTimers() {
        if (this.timers) {
            this.timers.forEach(t => clearTimeout(t));
            this.timers = [];
        }
        if (this.cinematicTimer) clearTimeout(this.cinematicTimer);
    }

    showBatchGrid() {
        const overlay = document.getElementById('cinematic-overlay');
        const grid = document.getElementById('cinematic-batch-grid');
        const skipHint = document.getElementById('cinematic-skip-hint');
        const img = document.getElementById('cinematic-image');
        const dialogue = document.getElementById('cinematic-dialogue');

        // Clean up last cinematic elements
        img.style.opacity = '0';
        dialogue.style.opacity = '0';
        skipHint.style.display = 'none';

        if (!this.currentBatch) return;

        // [New Layout] Featured (Top Center) + 5x2 Grid (Remaining)
        grid.style.display = 'flex';
        grid.style.flexDirection = 'column';
        grid.style.alignItems = 'center';
        grid.style.gap = '30px';
        grid.innerHTML = '';

        const rarityOrder = ['Normal', 'Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'];
        const sorted = [...this.currentBatch].sort((a, b) => rarityOrder.indexOf(b.def.rarity) - rarityOrder.indexOf(a.def.rarity));
        const best = sorted[0];

        const bestIdx = this.currentBatch.indexOf(best);
        const others = this.currentBatch.filter((c, i) => i !== bestIdx);

        // 1. Featured Item (Top Center, Huge)
        const featuredItem = document.createElement('div');
        featuredItem.className = 'featured-item fade-in';
        featuredItem.style.width = '450px';
        featuredItem.style.maxWidth = '80%';
        featuredItem.style.marginBottom = '20px';
        this._renderCinematicGridItem(featuredItem, best, 0, true);
        grid.appendChild(featuredItem);

        // 2. Others Grid (5-column, Large items)
        const othersGrid = document.createElement('div');
        othersGrid.style.display = 'grid';
        othersGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';
        othersGrid.style.gap = '20px';
        othersGrid.style.width = '100%';
        othersGrid.style.maxWidth = '1400px';

        others.forEach((c, idx) => {
            const item = document.createElement('div');
            item.className = 'grid-item fade-in';
            item.style.animationDelay = `${(idx + 1) * 0.1}s`;
            this._renderCinematicGridItem(item, c, idx + 1, false);
            othersGrid.appendChild(item);
        });
        grid.appendChild(othersGrid);

        // 결과 화면 종료 타이머 (또는 클릭 대기)
        // 여기서는 자동으로 꺼지지 않고 사용자가 클릭해서 끄도록 유도 (Overlay onclick = endCinematic)
        this.currentSkipHandler = () => this.endCinematic();
        overlay.onclick = this.currentSkipHandler;
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

        // [UX] 결과 화면으로 자동 스크롤
        setTimeout(() => {
            resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // [NEW] 배치 결과 렌더링 (Grid)
    renderBatchResult(results) {
        const resultBox = document.getElementById('summon-result');
        if (!resultBox) return;

        resultBox.innerHTML = ''; // Clear previous results

        // [New Layout] Featured (Top Center) + 5x2 Grid (Remaining)
        resultBox.style.display = 'flex';
        resultBox.style.flexDirection = 'column';
        resultBox.style.alignItems = 'center';
        resultBox.style.gap = '40px';
        resultBox.style.padding = '20px';

        const rarityOrder = ['Normal', 'Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'];
        const sorted = [...results].sort((a, b) => rarityOrder.indexOf(b.def.rarity) - rarityOrder.indexOf(a.def.rarity));
        const best = sorted[0];
        const bestIdx = results.indexOf(best);
        const others = results.filter((c, i) => i !== bestIdx);

        // 1. Featured Card
        const featuredCard = this._createResultCard(best, true);
        resultBox.appendChild(featuredCard);

        // 2. Others Grid
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(5, 1fr)';
        grid.style.gap = '20px';
        grid.style.width = '100%';
        grid.style.maxWidth = '1200px';

        others.forEach((c, index) => {
            const card = this._createResultCard(c, false, index);
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

        // [UX] 결과 화면으로 자동 스크롤
        setTimeout(() => {
            resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    _renderCinematicGridItem(container, c, idx, isFeatured) {
        const imgPath = c.def.image || 'images/creature_slime.png';
        const rarityColorMap = {
            'Normal': '#9e9e9e', 'Unique': '#66bb6a', 'Rare': '#42a5f5',
            'Special': '#ab47bc', 'SR': '#ff7043', 'SSR': '#ef5350', 'UR': '#ffd700'
        };
        const color = rarityColorMap[c.def.rarity] || '#fff';
        const fontSize = isFeatured ? '1.5rem' : '1rem';

        container.style.aspectRatio = '2/3'; // Taller ratio for full body
        container.innerHTML = `
            <div style="position:relative; width:100%; height:100%; border:3px solid ${isFeatured ? color : 'rgba(255,255,255,0.2)'}; border-radius:16px; overflow:hidden; background:radial-gradient(circle, #2c3e50 0%, #000 100%); ${isFeatured ? `box-shadow: 0 0 50px ${color}88; transform: scale(1.05);` : ''} transition: all 0.3s; display:flex; flex-direction:column;">
                <div style="flex:1; overflow:hidden; display:flex; align-items:center; justify-content:center; background:#000;">
                    <img src="${imgPath}" onerror="this.src='images/creature_slime.png'" style="width:100%; height:100%; object-fit:contain;">
                </div>
                <div style="padding:10px 5px; background:rgba(0,0,0,0.9); font-size:${fontSize}; width:100%; text-align:center; color:${color}; border-top:2px solid ${color}; font-weight:900; font-family:'Orbitron'; letter-spacing:2px; text-shadow: 0 0 10px ${color};">
                    ${c.def.rarity}
                </div>
            </div>
        `;
    }

    _createResultCard(creature, isFeatured, index = 0) {
        const rarityColorMap = {
            'Normal': '#95a5a6', 'Unique': '#2ecc71', 'Rare': '#3498db',
            'Special': '#9b59b6', 'SR': '#e67e22', 'SSR': '#e74c3c', 'UR': '#f1c40f'
        };
        const color = rarityColorMap[creature.def.rarity] || '#fff';
        const imgPath = creature.def.image || 'images/creature_slime.png';

        const card = document.createElement('div');
        card.className = `creature-card ${isFeatured ? '' : 'mini'} rarity-${creature.def.rarity} fade-in`;
        card.style.border = `2px solid ${color}`;
        card.style.aspectRatio = '2/3';
        card.style.height = 'auto'; // Let width control height via aspect-ratio

        if (!isFeatured) {
            card.style.animationDelay = `${(index + 1) * 0.1}s`;
            card.style.width = '100%';
            card.style.maxWidth = '200px';
        } else {
            card.style.width = '380px';
            card.style.maxWidth = '90%';
            card.style.marginBottom = '30px';
            card.style.boxShadow = `0 0 40px ${color}77`;
            card.style.transform = 'scale(1.1)';
        }

        card.innerHTML = `
            <div class="card-inner" style="height:100%; display:flex; flex-direction:column; background:#000; border-radius:12px; overflow:hidden;">
                <div class="card-grade" style="padding:5px; font-size:${isFeatured ? '1.4rem' : '1rem'}; color:${color}; font-weight:900; text-align:center; background:rgba(0,0,0,0.8); border-bottom:1px solid ${color}44;">${creature.def.rarity}</div>
                <div class="card-img" style="flex:1; overflow:hidden; display:flex; align-items:center; justify-content:center; background:radial-gradient(circle, #2c3e50 0%, #000 100%);">
                    <img src="${imgPath}" onerror="this.src='images/creature_slime.png'" alt="${creature.def.name}" style="object-fit:contain; width:100%; height:100%;">
                </div>
                ${isFeatured ? `
                <div class="card-name" style="text-align:center; padding:12px; font-weight:900; font-size:1.4rem; background:rgba(0,0,0,0.9); border-top:2px solid ${color}; color:#fff;">
                    ${creature.def.name}
                </div>` : ''}
            </div>
        `;
        return card;
    }
}
