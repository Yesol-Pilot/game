
export default class LobbyView {
    constructor(game) {
        this.game = game;
        this.currentLobbyCreature = null;
        this.bubbleTimeout = null;
    }

    init() {
        console.log("[LobbyView] Initializing...");
        // 로비 캐릭터 초기 표시
        this.updateLobbyCharacter();

        // 상호작용 이벤트 바인딩
        this.initLobbyInteraction();
        this.initDateSystem();

        // 글로벌 노출 (기존 Main.js 호환성 유지)
        window.updateLobbyCharacter = this.updateLobbyCharacter.bind(this);
        window.game.currentLobbyCreature = this.currentLobbyCreature; // Sync
    }

    updateLobbyCharacter() {
        const img = document.getElementById('lobby-character-img');
        const nameEl = document.getElementById('lobby-character-name');
        if (!img) return;

        let creature = null;

        // 1. Priority: Explicit User Preference
        try {
            const preferred = JSON.parse(localStorage.getItem('preferredLobbyCharacter'));
            if (preferred && preferred.instanceId) {
                creature = this.game.creatureManager.getCreatureById(preferred.instanceId);
            }
        } catch (e) { console.error(e); }

        // 2. Priority: Representative Creature
        if (!creature) {
            creature = this.game.creatureManager.getRepresentative();
        }

        // 3. Priority: Existing Memory Selection
        if (!creature) creature = this.currentLobbyCreature;

        // 4. Storage Selection
        if (!creature) {
            try {
                const saved = JSON.parse(localStorage.getItem('lobbyCharacter'));
                if (saved && saved.instanceId) {
                    creature = this.game.creatureManager.getCreatureById(saved.instanceId);
                }
            } catch (e) { console.error(e); }
        }

        // 5. Fallback: Active Team Leader
        if (!creature) {
            const team = this.game.deckManager.getActiveTeam();
            if (team && team[0]) creature = team[0];
        }

        // 6. Fallback: Highest Rarity Owned
        if (!creature) {
            if (this.game.creatureManager.owned.length === 0) {
                console.log("[Lobby] Still loading creatures, skipping fallback update.");
                return;
            }
            const sorted = [...this.game.creatureManager.owned].sort((a, b) => {
                if (b.def.rarity !== a.def.rarity) return b.def.rarity - a.def.rarity;
                return a.def.id.localeCompare(b.def.id);
            });
            creature = sorted[0];
        }

        if (creature) {
            this.currentLobbyCreature = creature;
            window.game.currentLobbyCreature = creature; // Sync global

            const level = this.game.creatureManager.getAffectionLevel(creature);

            // Determine Image Source
            let imgSrc = creature.def.image;
            if (level >= 3 && creature.def.images && creature.def.images.secret) {
                imgSrc = creature.def.images.secret;
            } else if (creature.def.images && creature.def.images[level]) {
                imgSrc = creature.def.images[level];
            }

            // Robust Image Loading
            img.onerror = () => {
                console.warn(`[Lobby] Failed to load image: ${imgSrc}. Reverting to placeholder.`);
                img.src = "images/creature_placeholder_unknown.png";
                img.onerror = null;
            };
            img.src = imgSrc;

            if (nameEl) nameEl.innerText = `${creature.def.name} (Lv.${creature.level})`;

            // Save weak persistence (unless preferred set)
            const preferred = localStorage.getItem('preferredLobbyCharacter');
            if (!preferred) {
                localStorage.setItem('lobbyCharacter', JSON.stringify({
                    instanceId: creature.instanceId,
                    image: imgSrc,
                    name: creature.def.name
                }));
            }

            setTimeout(() => this.updateResonanceUI(creature), 50);
        }
    }

    initLobbyInteraction() {
        const img = document.getElementById('lobby-character-img');
        if (!img) return;

        img.onclick = (e) => {
            let creature = this.currentLobbyCreature;
            if (!creature) { this.updateLobbyCharacter(); creature = this.currentLobbyCreature; }
            if (!creature) return;

            const rect = img.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const h = rect.height;
            let part = 'special';

            // Simple hit detection
            if (y < h * 0.25) part = 'head';
            else if (y < h * 0.55) part = 'chest';
            else part = 'legs';

            const bubble = document.getElementById('lobby-speech-bubble');
            const level = this.game.creatureManager.getAffectionLevel(creature);
            const lines = creature.def.lines || {};
            let text = lines.normal || "...";
            let isRejected = false;

            if (level === 0 && (part === 'chest' || part === 'legs')) {
                isRejected = true;
                text = lines[`touch_${part}_reject`] || lines.touch_reject || "가까이 오지 마.";
            }

            const now = Date.now();
            if (!isRejected && (!creature._lastTouchTime || now - creature._lastTouchTime > 1000)) {
                creature._lastTouchTime = now;
                let bonus = (level >= 2) ? 1 : 0;
                this.game.creatureManager.increaseAffection(creature.instanceId, 1 + bonus);

                this.createHeartEffect(e.clientX, e.clientY);
                if (bonus > 0) setTimeout(() => this.createHeartEffect(e.clientX + 30, e.clientY - 30), 200);
                this.updateResonanceUI(creature);

                if (typeof this.game.playSound === 'function') this.game.playSound('touch_soft');
            } else if (isRejected) {
                if (typeof this.game.playSound === 'function') this.game.playSound('touch_reject');
            }

            // Anim
            img.className = '';
            void img.offsetWidth;
            if (isRejected) {
                img.className = 'touch-react-chest';
                img.style.filter = "grayscale(1) brightness(0.8)";
                setTimeout(() => img.style.filter = "none", 500);
            } else {
                img.className = `touch-react-${part}`;
            }

            setTimeout(() => {
                img.className = 'breathing-effect';
            }, 500);

            // Dialogue
            if (!isRejected) {
                if (level >= 2 && lines[`touch_${part}_love`]) text = lines[`touch_${part}_love`];
                else {
                    if (part === 'head') text = lines.touch_head || text;
                    else if (part === 'chest') text = lines.touch_chest || lines.touch_special || text;
                    else if (part === 'legs') text = lines.touch_legs || lines.touch_special || text;
                }
            }

            // Bubble & PvP Button Check
            if (bubble) {
                // [Phase 9] PvP Button Injection (Temporary location)
                this.ensurePvPButton();

                const textEl = document.getElementById('lobby-speech-text');
                if (textEl) textEl.innerText = text;
                else bubble.innerText = text;

                bubble.className = 'speech-bubble active';

                if (isRejected) {
                    bubble.style.border = "2px solid #ff5252";
                    bubble.style.color = "#ff8a80";
                    bubble.style.background = "rgba(0,0,0,0.8)";
                } else if (level >= 2) {
                    bubble.style.border = "2px solid #ff4081";
                    bubble.style.color = "#fff";
                    bubble.style.background = "rgba(0,0,0,0.7)";
                } else {
                    bubble.style.border = "1px solid rgba(255,255,255,0.2)";
                    bubble.style.color = "#fff";
                    bubble.style.background = "rgba(0,0,0,0.7)";
                }

                if (this.bubbleTimeout) clearTimeout(this.bubbleTimeout);
                this.bubbleTimeout = setTimeout(() => bubble.classList.remove('active'), 3000);
            }
        };
    }

    ensurePvPButton() {
        const existingPvP = document.getElementById('lobby-pvp-btn');
        if (existingPvP) return;

        const pvpBtn = document.createElement('button');
        pvpBtn.className = 'cyber-btn';
        pvpBtn.style.cssText = "position:absolute; bottom:160px; right:20px; z-index:10; padding:10px 20px; font-size:0.9em; background:rgba(200, 0, 0, 0.8); border:1px solid #ff4757;";
        pvpBtn.innerHTML = "⚔️ 실시간 대전";
        pvpBtn.id = 'lobby-pvp-btn';

        pvpBtn.onclick = () => {
            if (this.game.pvpManager) {
                this.game.pvpManager.findMatch();
            } else {
                alert("PvP 시스템 준비 중입니다.");
            }
        };

        const homeView = document.getElementById('content-home');
        if (homeView) homeView.appendChild(pvpBtn);
    }

    initDateSystem() {
        const btnDate = document.getElementById('btn-lobby-date');
        if (btnDate) {
            btnDate.removeEventListener('click', this.openDateModal.bind(this)); // Prevent duplicates if re-refreshed
            btnDate.addEventListener('click', this.openDateModal.bind(this));
        }
    }

    openDateModal() {
        const modal = document.getElementById('date-select-modal');
        const list = document.getElementById('date-course-list');
        if (!modal || !list) return;

        list.innerHTML = '';
        const courses = this.game.dateManager.getCourses();

        courses.forEach(course => {
            const btn = document.createElement('button');
            btn.className = 'cyber-btn';
            btn.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:15px; text-align:left;";

            let costLabel = '';
            if (course.cost.type === 'energy') costLabel = `⚡ ${course.cost.value}`;
            if (course.cost.type === 'gem') costLabel = `💎 ${course.cost.value}`;
            if (course.cost.type === 'real') costLabel = `💳 ${course.cost.value}원`;

            btn.innerHTML = `
                <div>
                    <div style="font-weight:bold; font-size:1.1em;">${course.name}</div>
                    <div style="font-size:0.8em; color:#aaa;">${course.description}</div>
                </div>
                <div style="font-weight:bold; color:var(--accent-orange);">${costLabel}</div>
            `;

            btn.onclick = () => {
                let targetId = null;
                if (this.currentLobbyCreature) targetId = this.currentLobbyCreature.instanceId;

                if (!targetId && this.game.creatureManager.owned.length > 0) {
                    targetId = this.game.creatureManager.owned[0].instanceId;
                }

                if (targetId) {
                    this.game.dateManager.goOnDate(course.id, targetId);
                    modal.style.display = 'none';
                } else {
                    alert("데이트할 크리처가 없습니다.");
                }
            };
            list.appendChild(btn);
        });
        modal.style.display = 'flex';
    }

    createHeartEffect(x, y) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerText = '❤️';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }

    updateResonanceUI(creature) {
        if (!creature) {
            const bar = document.getElementById('lobby-resonance-bar');
            if (bar) bar.style.display = 'none';
            return;
        }

        let bar = document.getElementById('lobby-resonance-bar');
        if (!bar) {
            bar = document.createElement('div');
            bar.id = 'lobby-resonance-bar';
            bar.innerHTML = `<div class='resonance-heart'>❤️</div>
                <div style='font-size:0.8rem; color:white; font-weight:bold; margin-bottom:2px; text-shadow:0 0 4px black;' id='resonance-text'></div>
                <div class='resonance-container'>
                    <div class='resonance-fill' id='resonance-fill'></div>
                </div>
                <div style='font-size:0.7rem; color:#ccc; margin-top:2px; text-shadow:0 0 4px black;' id='resonance-ego'></div>`;
            const wrapper = document.getElementById('lobby-character-wrapper');
            if (wrapper) wrapper.appendChild(bar);
        }
        bar.style.display = 'flex';

        const score = this.game.creatureManager.getResonanceScore(creature);
        const level = this.game.creatureManager.getAffectionLevel(creature);
        const levels = { 0: 100, 1: 300, 2: 1000, 3: 2000 };
        const max = levels[level] || 2000;
        const prevMax = level > 0 ? (levels[level - 1] || 0) : 0;
        let percent = (level === 3) ? 100 : Math.max(0, Math.min(100, ((score - prevMax) / (max - prevMax)) * 100));

        const labels = ['경계', '관심', '신뢰', '서약'];
        const colors = ['#9e9e9e', '#66bb6a', '#f48fb1', '#ad1457'];

        bar.querySelector('#resonance-text').innerText = `${labels[level]} (Lv.${level})`;
        bar.querySelector('#resonance-text').style.color = colors[level];
        bar.querySelector('#resonance-fill').style.width = `${percent}%`;
        bar.querySelector('#resonance-ego').innerText = `🧠 Ego: ${creature.def.ego || 'Normal'}`;
    }
}
