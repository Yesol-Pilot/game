export default class SummonScene {
    constructor(game) {
        this.game = game;
        this.overlay = null;
        this.isAnimating = false;

        // Append CSS for Summon Scene dynamically or assume it's in style_v2.css
        // For now, we build the DOM structure here.
        this.createOverlay();
        this.bindEvents();
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.id = 'summon-overlay';
        this.overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 2000; display: none;
            flex-direction: column; align-items: center; justify-content: center;
        `;

        this.overlay.innerHTML = `
            <div id="summon-stage" style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
                <div id="summon-core" style="width:100px; height:100px; border-radius:50%; border: 5px solid cyan; box-shadow: 0 0 50px cyan;"></div>
            </div>
            <div id="summon-skip" style="position:absolute; top:20px; right:20px; color:#fff; cursor:pointer; font-family:var(--font-heading);">SKIP >></div>
            <div id="summon-results-grid" style="
                display:none; 
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
                gap: 20px; padding: 40px; width: 80%; max-width: 1000px;
                background: rgba(0,0,0,0.8); border: 1px solid #333; border-radius: 10px;
                backdrop-filter: blur(10px);
            "></div>
            <button id="summon-close-btn" class="cyber-btn" style="display:none; margin-top:20px;">CONFIRM</button>
        `;

        document.body.appendChild(this.overlay);

        this.stage = this.overlay.querySelector('#summon-stage');
        this.core = this.overlay.querySelector('#summon-core');
        this.resultGrid = this.overlay.querySelector('#summon-results-grid');
        this.closeBtn = this.overlay.querySelector('#summon-close-btn');

        this.closeBtn.onclick = () => this.close();
        this.overlay.querySelector('#summon-skip').onclick = () => this.showResultsImmediate();
    }

    bindEvents() {
        // [FIXED] Only listen to BATCH summons (10x)
        this.game.creatureManager.on('summon:batch_result', (results) => {
            this.startSequence(results);
        });
    }

    startSequence(results) {
        this.isAnimating = true;
        this.currentResults = results;
        this.overlay.style.display = 'flex';
        this.resultGrid.style.display = 'none';
        this.resultGrid.innerHTML = '';
        this.closeBtn.style.display = 'none';
        this.stage.style.display = 'flex';

        // 1. Core Animation (Spinning DNA)
        this.core.style.transition = 'all 1s ease';
        this.core.style.transform = 'scale(0.1) rotate(0deg)';

        // Simple animation sequence (without complex CSS keyframes yet)
        setTimeout(() => {
            this.core.style.transform = 'scale(1.5) rotate(720deg)';
            this.core.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            // Flash
            this.stage.style.background = '#fff';
            setTimeout(() => this.stage.style.background = 'transparent', 100);

            // Show Capsules or Direct Result?
            // For MVP Batch, let's go straight to Grid Reveal after flash
            this.showResultsImmediate();
        }, 1500);
    }

    showResultsImmediate() {
        this.stage.style.display = 'none';
        this.resultGrid.style.display = 'grid';
        this.closeBtn.style.display = 'block';

        this.currentResults.forEach((creature, index) => {
            const card = document.createElement('div');
            card.className = `creature-card-mini rarity-${creature.def.rarity}`;
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.3s ease ${index * 0.1}s`; // Staggered reveal

            card.innerHTML = `
                <img src="${creature.def.image}" style="width:100%; height:100%; object-fit:cover;">
                <div style="position:absolute; bottom:0; padding:5px; background:rgba(0,0,0,0.7); width:100%; color:#fff; font-size:0.8rem;">
                    ${creature.def.name}
                </div>
            `;

            this.resultGrid.appendChild(card);

            // Trigger animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        });
    }

    close() {
        this.overlay.style.display = 'none';
        this.isAnimating = false;
        // Trigger UI refresh?
    }
}
