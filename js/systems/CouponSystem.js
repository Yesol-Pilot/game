/**
 * CouponSystem.js - Handles coupon code redemption
 */
export class CouponSystem {
    constructor(game) {
        this.game = game;
        this.COUPON_CODES = {
            'YESOL2025': {
                type: 'all_creatures',
                description: '게임 내 모든 크리처 전체 지급'
            },
            'GOLDRICH': {
                type: 'gold',
                description: '골드 100,000',
                amount: 100000
            },
            'GEMMASTER': {
                type: 'gem',
                description: '젬 500',
                amount: 500
            },
            'EVO_TEST': {
                type: 'evolution_test',
                description: '진화 테스트용 미호 세트 (5성 N + 만렙 SR)'
            }
        };
    }

    init() {
        const btn = document.getElementById('btn-redeem-coupon');
        const input = document.getElementById('coupon-code-input');

        if (!btn || !input) return;

        btn.onclick = () => this.redeemCoupon(input.value.trim().toUpperCase());

        // System Tab Switching
        this.initTabs();
    }

    async redeemCoupon(code) {
        const result = document.getElementById('coupon-result');
        if (!result) return;
        result.style.display = 'block';

        if (!code) {
            this.showResult(result, '❌ 코드를 입력해주세요.', false);
            return;
        }

        const coupon = this.COUPON_CODES[code];
        if (!coupon) {
            this.showResult(result, '❌ 유효하지 않은 코드입니다.', false);
            return;
        }

        let rewards = [];
        try {
            if (coupon.type === 'gold') {
                this.game.resourceManager.addGold(coupon.amount);
                rewards.push(`💰 골드 +${coupon.amount.toLocaleString()}`);
            } else if (coupon.type === 'gem') {
                this.game.resourceManager.addGem(coupon.amount);
                rewards.push(`💎 젬 +${coupon.amount}`);
            } else if (coupon.type === 'all_creatures') {
                const added = await this.addAllCreatures();
                rewards.push(`🎴 전체 크리처 ${added.count}마리 획득! (총 ${added.total}종)`);
            } else if (coupon.type === 'evolution_test') {
                const msgs = await this.addEvolutionTestSet();
                rewards.push(`🧪 [테스트] ${msgs.join('<br>')}`);
            }

            this.game.save();
            this.showResult(result, `✅ 코드 사용 완료!<br>${rewards.join('<br>')}`, true);
            document.getElementById('coupon-code-input').value = '';
        } catch (e) {
            console.error(e);
            this.showResult(result, '❌ 처리 중 오류가 발생했습니다.', false);
        }
    }

    showResult(el, msg, isSuccess) {
        if (isSuccess) {
            el.style.background = 'rgba(46, 204, 113, 0.2)';
            el.style.border = '1px solid #2ecc71';
            el.innerHTML = `<div style="color:#2ecc71; font-weight:bold; margin-bottom:10px;">${msg}</div>`;
        } else {
            el.style.background = 'rgba(231, 76, 60, 0.2)';
            el.style.border = '1px solid #e74c3c';
            el.innerHTML = `<span style="color:#e74c3c;">${msg}</span>`;
        }
    }

    initTabs() {
        document.querySelectorAll('.system-tab').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.system-tab').forEach(t => {
                    t.style.color = '#888';
                    t.style.borderBottom = '2px solid transparent';
                });
                tab.style.color = 'white';
                tab.style.borderBottom = '2px solid var(--accent-cyan)';

                const tabName = tab.dataset.tab;
                ['notice', 'coupon', 'contact'].forEach(name => {
                    const el = document.getElementById(`view-${name}`);
                    if (el) el.style.display = name === tabName ? 'block' : 'none';
                });
            };
        });
    }

    async addAllCreatures() {
        const module = await import('../data/CreatureData.js');
        const cm = this.game.creatureManager;
        let addedCount = 0;

        module.CREATURE_DEFS.forEach(def => {
            if (cm.owned.some(c => c.def.id === def.id)) return;
            this.createCreature(cm, def);
            addedCount++;
        });

        cm.emit('creatures:updated', cm.owned);
        return { count: addedCount, total: module.CREATURE_DEFS.length };
    }

    async addEvolutionTestSet() {
        const module = await import('../data/CreatureData.js');
        const cm = this.game.creatureManager;
        let msg = [];

        // Fox Baby logic
        let baby = cm.owned.find(c => c.dataId === 'fox_baby');
        if (baby) {
            baby.star = 5;
            baby.level = 1;
            cm.recalculateStats(baby);
            msg.push(`기존 '아기여우' 5성 진화 준비 완료`);
        } else {
            const def = module.CREATURE_DEFS.find(c => c.id === 'fox_baby');
            if (def) {
                this.createCreature(cm, def, { star: 5, level: 1 });
                msg.push(`'아기여우'(5성) 지급`);
            }
        }

        // Fox Nine logic
        let nine = cm.owned.find(c => c.dataId === 'fox_nine');
        if (nine) {
            nine.star = 5;
            nine.level = 50;
            nine.affection = 3;
            cm.recalculateStats(nine);
            msg.push(`기존 '여우요괴 미호' UR 진화 준비 완료`);
        } else {
            const def = module.CREATURE_DEFS.find(c => c.id === 'fox_nine');
            if (def) {
                this.createCreature(cm, def, { star: 5, level: 50, affection: 3 });
                msg.push(`'여우요괴 미호'(만렙) 지급`);
            }
        }

        cm.emit('creatures:updated', cm.owned);
        return msg;
    }

    createCreature(cm, def, overrides = {}) {
        const newCreature = {
            instanceId: cm.nextInstanceId++,
            dataId: def.id,
            def: def,
            level: overrides.level || 1,
            exp: 0,
            star: overrides.star || 0,
            affection: overrides.affection || 0,
            battleCount: 0,
            expeditionCount: 0,
            acquiredAt: new Date(),
            stats: {}
        };
        cm.recalculateStats(newCreature);
        cm.owned.push(newCreature);
        return newCreature;
    }
}
