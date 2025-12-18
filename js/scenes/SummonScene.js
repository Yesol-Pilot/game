import FXManager from '../managers/FXManager.js';

export default class SummonScene {
    constructor(game) {
        this.game = game;
        this.fx = new FXManager(game);
        this.overlay = null;
        this.isAnimating = false;

        this.createOverlay();
        this.bindEvents();
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.id = 'summon-overlay';
        this.overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at 50% 50%, #1a202c 0%, #000 70%);
            z-index: 20000; display: none;
            flex-direction: column; align-items: center; justify-content: center;
            overflow: hidden;
        `;

        this.overlay.innerHTML = `
            <div id="summon-stage" style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center; flex-direction:column;">
                <div id="summon-aura" style="position:absolute; width:300px; height:300px; border-radius:50%; filter:blur(50px); opacity:0; transition: all 2s ease;"></div>
                <div id="summon-core" style="width:120px; height:120px; border-radius:50%; border: 4px solid var(--accent-cyan); box-shadow: 0 0 30px var(--accent-cyan); z-index:10; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center;">
                    <div style="width:60%; height:60%; border: 2px solid #fff; border-radius:50%; animation: pulse-glow 1s infinite alternate;"></div>
                </div>
                <div id="summon-message" style="margin-top:40px; color:var(--accent-cyan); font-family:var(--font-heading); font-size:1.5rem; letter-spacing:4px; text-shadow:0 0 10px var(--accent-cyan); opacity:0; transition:opacity 0.5s;">ANALYZING MULTIVERSE...</div>
            </div>
            <div id="summon-skip" style="position:absolute; top:20px; right:20px; color:rgba(255,255,255,0.5); cursor:pointer; font-family:var(--font-heading); z-index:30000;">SKIP >></div>
            <div id="summon-results-grid" style="
                display:none; 
                grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); 
                gap: 20px; padding: 40px; width: 90%; max-width: 1200px;
                background: rgba(0,0,0,0.85); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
                backdrop-filter: blur(20px); z-index: 25000;
            "></div>
            <button id="summon-close-btn" class="cyber-btn" style="display:none; margin-top:30px; position:relative; z-index:40000; pointer-events: auto !important;">모두 수령</button>
        `;

        document.body.appendChild(this.overlay);

        this.stage = this.overlay.querySelector('#summon-stage');
        this.aura = this.overlay.querySelector('#summon-aura');
        this.core = this.overlay.querySelector('#summon-core');
        this.message = this.overlay.querySelector('#summon-message');
        this.resultGrid = this.overlay.querySelector('#summon-results-grid');
        this.closeBtn = this.overlay.querySelector('#summon-close-btn');

        this.closeBtn.onclick = (e) => {
            console.log('Summon Close Button Clicked!');
            e.preventDefault();
            e.stopPropagation();
            this.close();
        };
        this.overlay.querySelector('#summon-skip').onclick = () => this.showResultsImmediate();
    }

    bindEvents() {
        this.game.creatureManager.on('summon:batch_result', (results) => {
            this.startSequence(results);
        });
    }

    startSequence(data) {
        this.isAnimating = true;

        // [Bug Fix] Handle both single object and array
        let results = [];
        if (Array.isArray(data)) {
            results = data;
        } else {
            results = [data];
        }

        this.currentResults = results;
        this.overlay.style.display = 'flex';
        this.resultGrid.style.display = 'none';
        this.resultGrid.innerHTML = '';
        this.closeBtn.style.display = 'none';
        this.stage.style.display = 'flex';
        this.message.style.opacity = '1';

        // 최고 등급 확인 (Safe reduce)
        const rarities = ['Normal', 'Unique', 'Rare', 'Special', 'SR', 'SSR', 'UR'];
        const highestRarity = results.reduce((prev, curr) => {
            const currRarity = curr.def ? curr.def.rarity : 'Normal';
            return rarities.indexOf(currRarity) > rarities.indexOf(prev) ? currRarity : prev;
        }, 'Normal');

        const auraColor = this.fx.getRarityColor(highestRarity);

        // 1. Initial Charge
        this.core.style.transition = 'all 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        this.core.style.transform = 'scale(0.5) rotate(0deg)';
        this.aura.style.background = auraColor;
        this.aura.style.opacity = '0';

        setTimeout(() => {
            this.core.style.transform = 'scale(2) rotate(1080deg)';
            this.aura.style.opacity = '0.4';
            this.aura.style.transform = 'scale(1.5)';
            this.fx.shake(2, 1000);
        }, 100);

        // 2. High Energy Phase (Pre-reveal)
        setTimeout(() => {
            this.message.innerText = '차원 동기화 중...'; // [Text Improvement]
            this.message.style.color = auraColor;
            this.message.style.textShadow = `0 0 20px ${auraColor}`;
            this.fx.shake(10, 500);

            // 파티클 폭발
            const rect = this.core.getBoundingClientRect();
            this.fx.createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, {
                count: 50, color: auraColor, velocityMax: 15
            });
        }, 1600);

        // 3. Final Reveal Flash
        setTimeout(() => {
            this.fx.flash('#fff', 500);
            this.fx.shake(20, 300);
            this.showResultsImmediate();
        }, 3000);
    }

    showResultsImmediate() {
        this.stage.style.display = 'none';
        this.resultGrid.style.display = 'grid';
        this.closeBtn.style.display = 'block';

        this.resultGrid.innerHTML = '';
        this.currentResults.forEach((creature, index) => {
            const card = document.createElement('div');
            card.className = `creature-card-mini rarity-${creature.def.rarity}`;
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8) translateY(20px)';
            card.style.transition = `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;

            const color = this.fx.getRarityColor(creature.def.rarity);

            card.innerHTML = `
                <img src="${creature.def.image}" style="width:100%; height:100%; object-fit:cover;">
                <div class="info">
                    <div style="font-weight:bold; color:${color}">${creature.def.rarity}</div>
                    <div>${creature.def.name}</div>
                </div>
            `;

            this.resultGrid.appendChild(card);

            // Staggered reveal FX
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';

                // 고등급 카드 노출 시 개별 이펙트
                if (['SR', 'SSR', 'UR'].includes(creature.def.rarity)) {
                    const rect = card.getBoundingClientRect();
                    this.fx.createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, {
                        count: 10, color: color, sizeMax: 4
                    });
                }
            }, 100 + (index * 100));
        });
    }

    close() {
        this.overlay.style.display = 'none';
        this.isAnimating = false;
        // 메인 화면 갱신을 위해 이벤트 발생 (필요 시)
        this.game.events.emit('ui:refresh');
    }
}

