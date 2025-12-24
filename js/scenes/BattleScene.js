
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

        // [NEW] 스킬 컷인 이벤트
        this.game.events.on('battle:skill_start', (data) => {
            this.showSkillCutIn(data.attackerId, data.skillName, data.skillData);
        });

        const btnStop = document.getElementById('btn-stop-battle');
        if (btnStop) {
            btnStop.onclick = () => {
                if (confirm("정말로 전투를 중지하시겠습니까? (자동 전투도 해제됩니다)")) {
                    // Stop Battle Loop first
                    this.game.battleManager.inBattle = false;
                    this.game.battleManager.setAutoBattle('off'); // [FIX] Use method to ensure logic triggers

                    // Hide Overlay
                    this.overlay.classList.remove('active'); // Use class if handled by CSS
                    this.overlay.style.display = 'none';
                    this.stage.innerHTML = '';

                    // Force refresh main view or close modal
                    console.log("[BattleScene] Battle aborted by user.");
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

    onBattleStart({ heroTeam, enemyTeam, enemyName, isPvP }) {
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

        // [Visual] Apply background based on stage context (mock logic for now)
        // In real implementation, pass stageId to getting background class
        // Randomly pick for variety if not defined
        const bgImages = ['bg_volcano.jpg', 'bg_ocean.jpg', 'bg_forest.jpg', 'bg_sky.jpg', 'bg_cave.jpg'];
        const randomImg = bgImages[Math.floor(Math.random() * bgImages.length)];

        // Remove old classes
        this.stage.className = 'battle-stage';
        // Apply direct style to ensure connection
        this.stage.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('images/${randomImg}')`;

        const heroContainer = document.createElement('div');
        heroContainer.id = 'hero-team-container';
        // 넓어진 유닛 크기에 맞춰 간격(gap) 조정 및 위치 이동
        heroContainer.style.cssText = "position:absolute; left:15%; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:25px;";
        this.stage.appendChild(heroContainer);

        const enemyContainer = document.createElement('div');
        enemyContainer.id = 'enemy-team-container';
        enemyContainer.style.cssText = "position:absolute; right:15%; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:25px;";
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
            <div class="hp-bar-container" style="position:absolute; width:100%; border-radius:3px; overflow:hidden;">
                <div class="hp-bar-fill" style="width:${(entity.hp / entity.maxHp) * 100}%; height:100%; transition: width 0.3s;"></div>
            </div>
            <div class="sp-bar-container" style="position:absolute; width:100%; border-radius:2px; overflow:hidden;">
                <div class="sp-bar-fill" style="width:${(entity.sp / entity.maxSp) * 100}%; height:100%; transition: width 0.3s;"></div>
            </div>
            <div class="status-effect-container"></div>
            <img src="${entity.image}" alt="${entity.name}" onerror="this.src='images/creature_slime_fire.png'">
            <div class="name-tag">${entity.name}</div>
        `;
        return div;
    }

    async onBattleAction(data) {
        const logBox = document.getElementById('battle-log-box');

        if (data.type === 'status_dot') {
            await this.handleStatusDot(data);
            return;
        }

        const { type, attackerId, defenderId, damage, isCrit, isMiss, isSkill, skillName, attackerSp, defenderSp, currentHp, maxHp, isHeal } = data;
        const attackerEl = document.getElementById(`battle-entity-${attackerId}`);
        const defenderEl = document.getElementById(`battle-entity-${defenderId}`);

        if (type === 'skill') {
            await this.showSkillCutIn(attackerId, skillName);
        }

        // Log Message
        if (logBox) {
            const attName = this.entityMap[attackerId] || "Unknown";
            const defName = this.entityMap[defenderId] || "Target";
            const p = document.createElement('div');

            if (type === 'skill') {
                if (isHeal) {
                    p.innerHTML = `<span style="color:#ffcc00; font-weight:bold;">[${skillName}]</span> <span style="color:#4cd137">${attName}</span>의 회복! <span style="color:#2ecc71">💚 ${Math.abs(damage)}</span> 회복!`;
                } else {
                    p.innerHTML = `<span style="color:#ffcc00; font-weight:bold;">[${skillName}]</span> <span style="color:#4cd137">${attName}</span>의 비기! <span style="color:#e74c3c">💥 ${damage}</span> 광격!`;
                }
            } else if (isMiss) {
                p.innerHTML = `<span style="color:#4cd137">${attName}</span>의 공격이 <span style="color:#888">빗나갔다!</span>`;
            } else if (isCrit) {
                p.innerHTML = `<span style="color:#4cd137">${attName}</span>이(가) <span style="color:#e74c3c">${defName}</span>에게 <span style="color:#ff4500; font-weight:bold;">💥 ${damage} 크리티컬!</span>`;
            } else {
                p.innerHTML = `<span style="color:#4cd137">${attName}</span>이(가) <span style="color:#e74c3c">${defName}</span>에게 <span style="color:#f1c40f;">${damage}</span>의 피해를 입혔습니다!`;
            }
            logBox.appendChild(p);
            logBox.scrollTop = logBox.scrollHeight;
        }

        // Animations
        if (attackerEl && defenderEl) {
            const isHeroAttacking = !String(attackerId).startsWith('enemy_');

            if (!isHeal) {
                attackerEl.classList.add(isHeroAttacking ? 'anim-prepare-right' : 'anim-prepare-left');
                await new Promise(r => setTimeout(r, 150));
                attackerEl.classList.remove(isHeroAttacking ? 'anim-prepare-right' : 'anim-prepare-left');
                attackerEl.classList.add(isHeroAttacking ? 'anim-attack-right' : 'anim-attack-left');
            }

            setTimeout(() => {
                if (isMiss) {
                    defenderEl.classList.add('anim-miss');
                    this.showDamage(defenderEl, "MISS", "miss");
                } else {
                    const impactType = type === 'skill' ? 'explosion' : 'slash';
                    const dmgType = (isCrit || type === 'skill') ? 'crit' : 'normal';

                    if (isHeal) {
                        this.createVFX(defenderEl, 'heal');
                        this.showDamage(defenderEl, Math.abs(damage), 'heal');
                    } else {
                        defenderEl.classList.add(isHeroAttacking ? 'anim-knockback-right' : 'anim-knockback-left', 'anim-impact-shock');
                        this.createVFX(defenderEl, impactType);
                        this.showDamage(defenderEl, damage, dmgType);
                        if (isCrit || type === 'skill') this.shakeScreen(type === 'skill');
                    }
                }

                this.updateEntityStatus(defenderId, currentHp, maxHp);
                if (defenderSp !== undefined) this.updateSpBar(defenderId, defenderSp, 100);
                if (defenderSp !== undefined) this.updateSpBar(defenderId, defenderSp, 100);
                if (attackerSp !== undefined) this.updateSpBar(attackerId, attackerSp, 100);

                // [NEW] Dynamic Sprite Swapping
                if (isHeal) {
                    this.setEntitySprite(attackerId, 'win'); // Healing/Buffing poses
                    setTimeout(() => this.setEntitySprite(attackerId, 'idle'), 800);
                } else {
                    this.setEntitySprite(attackerId, type === 'skill' ? 'skill' : 'attack');
                    this.setEntitySprite(defenderId, 'damage');

                    setTimeout(() => {
                        this.setEntitySprite(attackerId, 'idle');
                        // Dead check is handled later, but if alive, reset to idle
                        if (currentHp > 0) this.setEntitySprite(defenderId, 'idle');
                    }, 600);
                }

                // Update Status Icons
                if (data.statusEffects) {
                    this.updateStatusEffectIcons(defenderId, data.statusEffects);
                }
            }, 150);

            setTimeout(() => {
                attackerEl.classList.remove('anim-attack-right', 'anim-attack-left');
                defenderEl.classList.remove('anim-knockback-right', 'anim-knockback-left', 'anim-impact-shock', 'anim-miss');
            }, 500);
        }

        if (currentHp <= 0 && defenderEl) {
            defenderEl.classList.add('dead');
        }
    }

    async handleStatusDot(data) {
        const { targetId, damage, effectId, currentHp } = data;
        const targetEl = document.getElementById(`battle-entity-${targetId}`);
        if (!targetEl) return;

        this.showDamage(targetEl, damage, 'dot');
        this.updateEntityStatus(targetId, currentHp, 100); // MaxHP is tricky here, but it works

        const logBox = document.getElementById('battle-log-box');
        if (logBox) {
            const name = this.entityMap[targetId] || "Target";
            const p = document.createElement('div');
            p.style.fontSize = "0.85em";
            p.style.color = "#ff7675";
            p.innerHTML = `[상태이상] ${name}이(가) <span style="font-weight:bold;">${effectId}</span> 효과로 <span style="font-weight:bold;">${damage}</span> 피해를 입었습니다.`;
            logBox.appendChild(p);
            logBox.scrollTop = logBox.scrollHeight;
        }
    }

    async showSkillCutIn(attackerId, skillName, skillData = null) {
        const attackerEl = document.getElementById(`battle-entity-${attackerId}`);
        if (!attackerEl) return;

        const imgSrc = attackerEl.querySelector('img').src;
        const attackerName = this.entityMap[attackerId] || '사용자';

        // 스킬 효과 설명 생성
        let effectDesc = '';
        if (skillData) {
            const powerText = skillData.power ? `파워 ${Math.floor(skillData.power * 100)}%` : '';
            const hitText = skillData.hitCount ? ` x${skillData.hitCount}회` : '';
            const effectText = skillData.effects?.map(e => {
                const effectNames = {
                    stun: '기절', burn: '화상', poison: '중독', freeze: '동결',
                    slow: '둔화', bleed: '출혈', silence: '침묵', shock: '감전'
                };
                return effectNames[e.id] || e.id;
            }).join(', ') || '';

            effectDesc = `<div class="skill-cut-in-effects">
                ${powerText}${hitText}
                ${effectText ? `<span class="effect-tags">${effectText}</span>` : ''}
            </div>`;
        }

        const overlay = document.createElement('div');
        overlay.className = 'skill-cut-in-overlay';
        overlay.innerHTML = `
            <div class="skill-cut-in-bg"></div>
            <div class="skill-cut-in-content">
                <img src="${imgSrc}" class="skill-cut-in-img">
                <div class="skill-cut-in-info">
                    <div class="skill-cut-in-name">${attackerName}</div>
                    <div class="skill-cut-in-text">${skillName}</div>
                    ${effectDesc}
                </div>
            </div>
        `;
        this.stage.appendChild(overlay);

        // [Visual] Change sprite to skill casting pose
        this.setEntitySprite(attackerId, 'skill');

        await new Promise(r => setTimeout(r, 1500));
        overlay.remove();
    }

    setEntitySprite(id, state) {
        const el = document.getElementById(`battle-entity-${id}`);
        if (!el) return;
        const img = el.querySelector('img');
        if (!img) return;

        // Retrieve sprites data via Manager helper
        const sprites = this.game.battleManager.getEntitySprites(id);
        if (sprites && sprites[state]) {
            img.src = sprites[state];
        } else if (state === 'idle' && sprites && sprites.idle) {
            img.src = sprites.idle; // Revert to base
        }
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
        if (type === 'heal') {
            span.innerText = `+${dmg}`;
            span.style.color = '#2ecc71';
            span.style.textShadow = '0 0 10px #2ecc71';
        } else if (type === 'dot') {
            span.innerText = dmg;
            span.style.color = '#ff7675';
            span.style.fontSize = '0.8em';
        } else {
            span.innerText = type === 'miss' ? 'MISS' : (type === 'crit' ? `💥 ${dmg}` : dmg);
        }
        el.appendChild(span);
        setTimeout(() => span.remove(), 1000);
    }

    updateSpBar(id, sp, max) {
        const el = document.getElementById(`battle-entity-${id}`);
        if (!el) return;
        const fill = el.querySelector('.sp-bar-fill');
        if (fill) {
            const pct = (sp / max) * 100;
            fill.style.width = `${pct}%`;
            fill.classList.toggle('full', pct >= 100);
            if (pct >= 100) {
                fill.style.background = 'white';
                fill.style.boxShadow = '0 0 15px white';
            } else {
                fill.style.background = '#f1c40f';
                fill.style.boxShadow = '0 0 5px #f1c40f';
            }
        }
    }

    updateStatusEffectIcons(id, effects) {
        const el = document.getElementById(`battle-entity-${id}`);
        if (!el) return;
        const container = el.querySelector('.status-effect-container');
        if (!container) return;

        container.innerHTML = '';
        effects.forEach(eff => {
            const icon = document.createElement('div');
            icon.style.fontSize = '12px';
            icon.style.background = 'rgba(0,0,0,0.6)';
            icon.style.borderRadius = '3px';
            icon.style.padding = '1px';

            // Map common icons
            const iconMap = { burn: '🔥', slow: '🐌', stun: '💫', shock: '⚡', freeze: '❄️' };
            icon.innerText = iconMap[eff.id] || '❓';
            container.appendChild(icon);
        });
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

            // [FIX] Don't close overlay completely, just remove modal to reveal next battle
            // But actually, onBattleStart will run cleanly now.
            // The issue is if we hide overlay here, we might hide the NEW battle if it started quickly.
            // So we only remove the modal if it's still there.

            setTimeout(() => {
                if (document.body.contains(modal)) {
                    modal.remove();
                    // Do NOT hide overlay here if we are continuing!
                    // Let onBattleStart handle the display.
                }
            }, autoDelay);
        }
    }
}
