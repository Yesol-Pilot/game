
export default class BattleScene {
    constructor(game) {
        this.game = game;
        this.overlay = document.getElementById('battle-overlay');
        this.stage = document.getElementById('battle-stage');
        this.header = document.getElementById('battle-header');
        this.entityMap = {};
        this.bindEvents();
    }

    bindEvents() {
        console.log("[BattleScene] Binding events...");
        this.game.events.on('battle:start', (data) => this.onBattleStart(data));
        this.game.events.on('battle:action', (data) => this.onBattleAction(data));
        this.game.events.on('battle:end', (data) => this.onBattleEnd(data));

        const btnStop = document.getElementById('btn-stop-battle');
        if (btnStop) {
            btnStop.onclick = () => {
                if (confirm("정말로 전투를 중지하시겠습니까? (자동 전투도 해제됩니다)")) {
                    this.game.battleManager.autoBattleMode = 'off';
                    this.game.events.emit('battle:autoAdjusted', 'off');
                    this.game.battleManager.inBattle = false;
                    this.overlay.style.display = 'none';
                    this.stage.innerHTML = '';
                }
            };
        }

        const autoSelect = document.getElementById('battle-auto-select');
        if (autoSelect) {
            autoSelect.onchange = (e) => {
                this.game.battleManager.setAutoBattle(e.target.value);
                this.game.events.emit('battle:autoAdjusted', e.target.value);
            };
        }
    }

    onBattleStart({ heroTeam, enemyTeam }) {
        if (this.overlay) {
            this.overlay.style.display = 'flex';
            const logBox = document.getElementById('battle-log-box');
            if (logBox) logBox.innerHTML = '<div style="color: #888;">--- 전투가 시작되었습니다 ---</div>';

            const autoSelect = document.getElementById('battle-auto-select');
            if (autoSelect) {
                autoSelect.value = this.game.battleManager.autoBattleMode;
            }
        }
        this.stage.innerHTML = '';
        this.entityMap = {};

        const heroContainer = document.createElement('div');
        heroContainer.id = 'hero-team-container';
        heroContainer.style.cssText = "position:absolute; left:20%; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:10px;";
        this.stage.appendChild(heroContainer);

        const enemyContainer = document.createElement('div');
        enemyContainer.id = 'enemy-team-container';
        enemyContainer.style.cssText = "position:absolute; right:20%; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:10px;";
        this.stage.appendChild(enemyContainer);

        heroTeam.forEach(h => {
            heroContainer.appendChild(this.createEntityEl(h));
            this.entityMap[h.id] = h.name;
        });
        enemyTeam.forEach(e => {
            enemyContainer.appendChild(this.createEntityEl(e));
            this.entityMap[e.id] = e.name;
        });

        this.updateHeader(1);
    }

    createEntityEl(entity) {
        const div = document.createElement('div');
        div.id = `battle-entity-${entity.id}`;
        div.className = `battle-entity rank-${entity.rarity || 'Normal'} creature-card-frame`;
        div.style.cssText = "width:60px; height:60px; position:relative; transition: transform 0.2s;";

        div.innerHTML = `
            <div class="hp-bar-container" style="position:absolute; top:-12px; left:0; width:100%; height:6px;">
                <div class="hp-bar-fill" style="width:${(entity.hp / entity.maxHp) * 100}%; height:100%;"></div>
            </div>
            <div class="sp-bar-container" style="position:absolute; top:-5px; left:0; width:100%; height:4px;">
                <div class="sp-bar-fill" style="width:${(entity.sp / entity.maxSp) * 100}%; height:100%;"></div>
            </div>
            <img src="${entity.image}" alt="${entity.name}" style="width:100%; height:100%; object-fit:contain; image-rendering:pixelated;">
        `;
        return div;
    }

    async onBattleAction(data) {
        const { type, attackerId, defenderId, damage, isCrit, isMiss, isSkill, skillName, attackerSp, attackerMaxSp } = data;
        if (type !== 'attack') return;

        const attackerEl = document.getElementById(`battle-entity-${attackerId}`);
        const defenderEl = document.getElementById(`battle-entity-${defenderId}`);
        const logBox = document.getElementById('battle-log-box');

        if (isSkill) {
            await this.showSkillCutIn(attackerId, skillName);
        }

        if (logBox) {
            const attName = this.entityMap[attackerId] || "Unknown";
            const defName = this.entityMap[defenderId] || "Target";
            const p = document.createElement('div');
            p.style.marginBottom = "2px";

            if (isMiss) {
                p.innerHTML = `<span style="color:#4cd137">${attName}</span>의 공격이 <span style="color:#888">빗나갔다!</span>`;
            } else if (isSkill) {
                p.innerHTML = `<span style="color:#ffcc00; font-weight:bold;">[${skillName}]</span> <span style="color:#4cd137">${attName}</span>의 필살기! <span style="color:#e74c3c">💥 ${damage}</span> 피해!`;
            } else if (isCrit) {
                p.innerHTML = `<span style="color:#4cd137">${attName}</span>이(가) <span style="color:#e74c3c">${defName}</span>에게 <span style="color:#ff4500; font-weight:bold;">💥 ${damage} 크리티컬!</span>`;
            } else {
                p.innerHTML = `<span style="color:#4cd137">${attName}</span>이(가) <span style="color:#e74c3c">${defName}</span>에게 <span style="color:#f1c40f;">${damage}</span>의 피해를 입혔습니다!`;
            }
            logBox.appendChild(p);
            logBox.scrollTop = logBox.scrollHeight;
        }

        if (attackerEl && defenderEl) {
            const isHeroAttacking = !String(attackerId).startsWith('enemy_');

            attackerEl.classList.add(isHeroAttacking ? 'anim-prepare-right' : 'anim-prepare-left');
            await new Promise(r => setTimeout(r, 150));
            attackerEl.classList.remove(isHeroAttacking ? 'anim-prepare-right' : 'anim-prepare-left');

            const animClass = isHeroAttacking ? 'anim-attack-right' : 'anim-attack-left';
            attackerEl.classList.add(animClass);

            setTimeout(() => {
                if (isMiss) {
                    defenderEl.classList.add('anim-miss');
                    this.showDamage(defenderEl, "MISS", "miss");
                } else {
                    defenderEl.classList.add(isHeroAttacking ? 'anim-knockback-right' : 'anim-knockback-left', 'anim-impact-shock');
                    this.createVFX(defenderEl, isSkill ? 'explosion' : 'slash');
                    this.showDamage(defenderEl, damage, (isCrit || isSkill) ? 'crit' : 'normal');
                    if (isCrit || isSkill) this.shakeScreen(isSkill);
                }

                this.updateEntityStatus(defenderId, data.currentHp, data.maxHp);
                const spFill = attackerEl.querySelector('.sp-bar-fill');
                if (spFill) {
                    spFill.style.width = `${(attackerSp / attackerMaxSp) * 100}%`;
                    spFill.classList.toggle('full', attackerSp >= attackerMaxSp);
                }
            }, 150);

            setTimeout(() => {
                attackerEl.classList.remove(animClass);
                defenderEl.classList.remove('anim-knockback-right', 'anim-knockback-left', 'anim-impact-shock', 'anim-miss');
            }, 500);
        }

        if (data.currentHp <= 0 && defenderEl) {
            defenderEl.classList.add('dead');
        }
    }

    async showSkillCutIn(attackerId, skillName) {
        const attackerEl = document.getElementById(`battle-entity-${attackerId}`);
        if (!attackerEl) return;

        const imgSrc = attackerEl.querySelector('img').src;
        const overlay = document.createElement('div');
        overlay.className = 'skill-cut-in-overlay';
        overlay.innerHTML = `
            <div class="skill-cut-in-bg"></div>
            <div class="skill-cut-in-text">${skillName}</div>
            <img src="${imgSrc}" class="skill-cut-in-img">
        `;
        this.stage.appendChild(overlay);
        await new Promise(r => setTimeout(r, 1500));
        overlay.remove();
    }

    createVFX(targetEl, type) {
        const rect = targetEl.getBoundingClientRect();
        const stageRect = this.stage.getBoundingClientRect();
        const vfx = document.createElement('div');
        vfx.className = 'vfx-impact';
        vfx.style.left = `${rect.left + rect.width / 2 - stageRect.left}px`;
        vfx.style.top = `${rect.top + rect.height / 2 - stageRect.top}px`;

        if (type === 'slash') {
            const slash = document.createElement('div');
            slash.className = 'vfx-slash';
            vfx.appendChild(slash);
        } else {
            for (let i = 0; i < 8; i++) {
                const spark = document.createElement('div');
                spark.className = 'vfx-spark';
                vfx.appendChild(spark);
            }
        }
        this.stage.appendChild(vfx);
        setTimeout(() => vfx.remove(), 500);
    }

    shakeScreen(isBig) {
        const shakeClass = isBig ? 'screen-shake-big' : 'screen-shake';
        this.stage.classList.add(shakeClass);
        setTimeout(() => this.stage.classList.remove(shakeClass), isBig ? 400 : 300);
    }

    showDamage(el, dmg, type) {
        const span = document.createElement('span');
        span.className = `damage-number ${type}`;
        span.innerText = type === 'miss' ? 'MISS' : (type === 'crit' ? `💥 ${dmg}` : dmg);
        el.appendChild(span);
        setTimeout(() => span.remove(), 1000);
    }

    updateEntityStatus(id, hp, max) {
        const el = document.getElementById(`battle-entity-${id}`);
        if (!el) return;
        const fill = el.querySelector('.hp-bar-fill');
        const pct = Math.max(0, (hp / max) * 100);
        fill.style.width = `${pct}%`;
        fill.classList.toggle('low', pct <= 50 && pct > 20);
        fill.classList.toggle('critical', pct <= 20);
    }

    updateHeader(turn) {
        this.header.innerHTML = `<div class="turn-counter">TURN ${turn}</div>`;
    }

    onBattleEnd({ isWin, reason, rewards, autoBattleMode, nextStageId, autoDelay }) {
        const modal = document.createElement('div');
        modal.id = 'battle-result-modal';
        modal.style.cssText = "position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:1000;";

        const modeText = autoBattleMode === 'repeat' ? '현재 스테이지 반복' : '다음 스테이지 진행';
        const nextText = nextStageId ? (autoBattleMode === 'repeat' ? '재도전 중...' : `Stage ${nextStageId} 진입 중...`) : '종료 중...';

        modal.innerHTML = `
            <h1 style="color:${isWin ? '#f1c40f' : '#e74c3c'}; font-size:3.5em; font-family:'Outfit';">${isWin ? "VICTORY!" : "DEFEAT"}</h1>
            <p style="color:#eee; font-size:1.4em;">${reason}</p>
            ${isWin && rewards ? `<div style="color:#2ecc71;">💰 ${rewards.gold} Gold + 🌟 ${rewards.exp} Exp</div>` : ''}
            <button id="btn-close-battle" class="cyber-btn" style="margin-top:20px;">확인</button>
            ${autoBattleMode !== 'off' && isWin ? `
                <div style="margin-top:20px; width:60%;">
                    <div style="color:#3498db; font-size:0.9em;">⚡ 자동 전투: ${modeText}</div>
                    <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; margin-top:10px;">
                        <div id="auto-battle-progress-bar" style="width:0%; height:100%; background:#3498db; transition:width ${autoDelay - 200}ms linear;"></div>
                    </div>
                </div>
            ` : ''}
        `;

        this.overlay.appendChild(modal);
        const close = () => {
            this.overlay.style.display = 'none';
            modal.remove();
            this.stage.innerHTML = '';
        };
        modal.querySelector('#btn-close-battle').onclick = close;

        if (autoBattleMode !== 'off' && isWin) {
            setTimeout(() => {
                const bar = document.getElementById('auto-battle-progress-bar');
                if (bar) bar.style.width = '100%';
            }, 50);
            setTimeout(() => { if (document.body.contains(modal)) close(); }, autoDelay);
        }
    }
}
