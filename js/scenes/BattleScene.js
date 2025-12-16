
export default class BattleScene {
    constructor(game) {
        this.game = game;
        this.overlay = document.getElementById('battle-overlay');
        this.stage = document.getElementById('battle-stage');
        this.header = document.getElementById('battle-header');

        this.bindEvents();
    }

    bindEvents() {
        console.log("[BattleScene] Binding events...");
        // Battle Manager events are bridged via Game.events
        this.game.events.on('battle:start', (data) => {
            console.log("[BattleScene] Received battle:start", data);
            this.onBattleStart(data);
        });
        this.game.events.on('battle:action', (data) => this.onBattleAction(data));
        this.game.events.on('battle:end', (data) => this.onBattleEnd(data));
    }

    onBattleStart({ heroTeam, enemyTeam }) {
        console.log("[BattleScene] Activating Overlay");
        if (this.overlay) {
            this.overlay.style.display = 'flex';
            const logBox = document.getElementById('battle-log-box');
            if (logBox) logBox.innerHTML = '<div style="color: #888;">--- 전투가 시작되었습니다 ---</div>';
        } else {
            console.error("[BattleScene] Overlay element not found!");
            return;
        }
        this.stage.innerHTML = '';
        this.entityMap = {}; // [NEW] Cache names

        // 1. Render Hero Team Container
        const heroContainer = document.createElement('div');
        heroContainer.id = 'hero-team-container';
        heroContainer.style.cssText = "position:absolute; left:20%; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:10px;";
        this.stage.appendChild(heroContainer);

        // 2. Render Enemy Team Container
        const enemyContainer = document.createElement('div');
        enemyContainer.id = 'enemy-team-container';
        enemyContainer.style.cssText = "position:absolute; right:20%; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:10px;";
        this.stage.appendChild(enemyContainer);

        // Populate
        if (heroTeam) heroTeam.forEach(h => {
            heroContainer.appendChild(this.createEntityEl(h, 'left'));
            this.entityMap[h.id] = h.name; // Cache
        });
        if (enemyTeam) enemyTeam.forEach(e => {
            enemyContainer.appendChild(this.createEntityEl(e, 'right'));
            this.entityMap[e.id] = e.name; // Cache
        });

        this.updateHeader(1);
    }

    createEntityEl(entity, side) {
        const div = document.createElement('div');
        div.id = `battle-entity-${entity.id}`;

        // Base class
        div.className = 'battle-entity';

        // Rarity class (derived from entity data if available, default to Normal)
        // Note: entity object here is simplified from BattleManager, need to ensure it carries rarity or determine it.
        // If hero, we likely have access to creature definition. If enemy, might be generic.
        // Assuming 'rarity' property exists or defaulting.
        const rarity = entity.rarity || 'Normal';
        div.classList.add(`rank-${rarity}`); // e.g. rank-SSR, rank-Normal

        // Smaller size for 5v5
        div.style.cssText = "width:60px; height:60px; position:relative; transition: transform 0.2s;";

        // Applying rarity frame helper class if needed, or just using the rank-* class for borders
        div.classList.add('creature-card-frame'); // Reusing the frame styles from CSS

        div.innerHTML = `
            <div class="hp-bar-container" style="position:absolute; top:-10px; left:0; width:100%; height:6px; background:red; border:1px solid #000;">
                <div class="hp-bar-fill" style="width:${(entity.hp / entity.maxHp) * 100}%; height:100%; background:#0f0;"></div>
            </div>
            <img src="${entity.image}" alt="${entity.name}" style="width:100%; height:100%; object-fit:contain; image-rendering:pixelated;">
        `;
        return div;
    }

    onBattleAction(data) {
        const { type, attackerId, defenderId, damage, currentHp, maxHp } = data;
        const logBox = document.getElementById('battle-log-box');

        if (type === 'attack') {
            const attackerEl = document.getElementById(`battle-entity-${attackerId}`);
            const defenderEl = document.getElementById(`battle-entity-${defenderId}`);

            // Log Logic
            if (logBox) {
                const attName = this.entityMap[attackerId] || "Unknown";
                const defName = this.entityMap[defenderId] || "Target";
                const p = document.createElement('div');
                p.style.marginBottom = "2px";
                p.innerHTML = `<span style="color:#4cd137">${attName}</span>이(가) <span style="color:#e74c3c">${defName}</span>에게 <span style="color:#f1c40f; font-weight:bold;">${damage}</span>의 피해를 입혔습니다!`;
                logBox.appendChild(p);
                logBox.scrollTop = logBox.scrollHeight; // Auto scroll
            }

            if (attackerEl) {
                // Determine direction based on DOM position or simple ID logic
                // Hero is usually left, Enemy right.
                // Hacky check: if attacker is hero (id not starting with enemy_)
                const isHeroAttacking = !String(attackerId).startsWith('enemy_');
                const animClass = isHeroAttacking ? 'anim-attack-right' : 'anim-attack-left';

                attackerEl.classList.add(animClass);
                setTimeout(() => attackerEl.classList.remove(animClass), 300);
            }

            if (defenderEl) {
                // Hit effect
                defenderEl.classList.add('anim-hit');
                setTimeout(() => defenderEl.classList.remove('anim-hit'), 200);

                // Show Damage Text
                this.showDamage(defenderEl, damage);

                // Update HP Bar
                const hpFill = defenderEl.querySelector('.hp-bar-fill');
                if (hpFill) {
                    const pct = Math.max(0, (currentHp / maxHp) * 100);
                    hpFill.style.width = `${pct}%`;
                }

                if (currentHp <= 0) {
                    defenderEl.style.filter = "grayscale(100%) brightness(50%)";
                    defenderEl.style.opacity = "0.5";
                    if (logBox) {
                        const defName = this.entityMap[defenderId] || "Target";
                        const p = document.createElement('div');
                        p.style.color = "#aaa";
                        p.innerText = `${defName}이(가) 쓰러졌습니다.`;
                        logBox.appendChild(p);
                        logBox.scrollTop = logBox.scrollHeight;
                    }
                }
            }
        }
    }

    updateHp(el, current, max) {
        const bar = el.querySelector('.hp-bar-fill');
        const pct = Math.max(0, (current / max) * 100);
        bar.style.width = `${pct}%`;
    }

    showDamage(targetEl, dmg) {
        const span = document.createElement('span');
        span.className = 'damage-number';
        span.innerText = `-${dmg}`;
        targetEl.appendChild(span);
        // Animation handles removal visually, but good to clean up DOM
        setTimeout(() => span.remove(), 1000);
    }

    updateHeader(turn) {
        this.header.innerHTML = `
            <div>TURN ${turn}</div>
            <div>BATTLE IN PROGRESS</div>
        `;
    }

    onBattleEnd({ isWin, reason, rewards }) {
        // 1. Create Result Modal
        const modal = document.createElement('div');
        modal.id = 'battle-result-modal';
        modal.style.cssText = `
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); display: flex; flex-direction: column;
            align-items: center; justify-content: center; z-index: 1000;
            animation: fadeIn 0.5s;
        `;

        const rewardHtml = (isWin && rewards)
            ? `<div style="color: #2ecc71; margin-bottom: 20px;">획득: 💰 ${rewards.gold} Gold + 🌟 ${rewards.exp} Exp</div>`
            : '';

        modal.innerHTML = `
            <h1 style="color: ${isWin ? '#f1c40f' : '#e74c3c'}; font-size: 3em; margin-bottom: 20px; text-shadow: 0 0 10px black;">
                ${isWin ? "VICTORY!" : "DEFEAT"}
            </h1>
            <p style="color: white; font-size: 1.5em; margin-bottom: 30px;">${reason}</p>
            ${rewardHtml}
            <button id="btn-close-battle" style="
                padding: 10px 30px; font-size: 1.2em; cursor: pointer;
                background: #3498db; color: white; border: none; border-radius: 5px;
            ">확인</button>
        `;

        this.overlay.appendChild(modal);

        // 2. Bind Close Event
        const btn = modal.querySelector('#btn-close-battle');
        btn.onclick = () => {
            this.overlay.style.display = 'none';
            modal.remove(); // Clean up
            // Also clean up entities to prevent ghosting
            document.getElementById('battle-stage').innerHTML = '';
        };
    }
}
