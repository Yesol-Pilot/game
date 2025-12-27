import BaseView from './BaseView.js';

export default class ShopView extends BaseView {
    init() {
        this.game.shopManager.on('shop:updated', () => {
            const contentShop = document.getElementById('content-shop');
            if (contentShop && contentShop.classList.contains('active')) {
                this.render();
            }
        });

        this.game.shopManager.on('shop:purchaseSuccess', (data) => {
            this.addLog(data.message, "shop");
            alert(data.message);
        });

        this.game.shopManager.on('shop:purchaseFailed', (data) => {
            this.addLog(`구매 실패: ${data.reason}`, "shop");
            alert(data.reason);
        });

        this.game.events.on('ui:tabSwitched', (tabId) => {
            if (tabId === 'shop') {
                this.render();
            }
        });
    }

    render() {
        const allItems = this.game.shopManager.getAllItems();
        const shopListEl = document.getElementById('shop-list');
        if (!shopListEl) return;

        shopListEl.innerHTML = '';

        // 광고 배너 제어
        const adBanner = document.getElementById('ad-banner');
        if (adBanner) {
            adBanner.style.display = this.game.shopManager.removeAdsPurchased ? 'none' : 'block';
        }

        this._renderSection("❤️ 호감도 선물 (Gifts)", allItems.gifts, shopListEl, true); // Gifts first
        this._renderSection("💎 젬 충전 (Charge)", allItems.gemPacks, shopListEl);
        this._renderSection("💰 골드 보급 (Exchange)", allItems.goldPacks, shopListEl);
        this._renderSection("📦 특수 패키지 (Bundle)", allItems.bundles, shopListEl);
        this._renderSection("🛠️ 기타 아이템", allItems.specials, shopListEl);
        this._renderSection("☕ 후원하기 (Support)", allItems.donations, shopListEl);
    }

    _renderSection(title, items, parentEl = null, isGift = false) {
        if (!items || items.length === 0) return;

        const targetEl = parentEl || document.getElementById('shop-list');
        if (!targetEl) return;

        const h4 = document.createElement('h4');
        h4.textContent = title;
        h4.style.cssText = "grid-column: 1 / -1; margin: 20px 0 10px; padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle); color: var(--accent-primary);";
        targetEl.appendChild(h4);

        items.forEach(item => {
            const isPurchased = this.game.shopManager.isPurchased(item.id);
            const isPremium = item.priceType === 'real' || item.priceType === 'gem'; // Gem is also premium-ish
            const icon = item.priceType === 'gem' ? '💎' : (item.priceType === 'gold' ? '💰' : (item.priceType === 'real' ? '💳' : '🎁'));

            // Item Icon override for gifts?
            let displayIcon = icon;
            if (item.id.includes('cake')) displayIcon = '🍰';
            if (item.id.includes('necklace')) displayIcon = '💎';
            if (item.id.includes('ring')) displayIcon = '💍';

            const div = document.createElement('div');
            div.className = `shop-card ${isPremium ? 'premium' : ''} feature-card`;
            div.style.textAlign = "center";

            div.innerHTML = `
                <div class="shop-icon" style="font-size:2rem; margin-bottom:10px;">${displayIcon}</div>
                <div class="shop-name" style="font-weight:bold; margin-bottom:5px;">${item.name}</div>
                <div class="shop-desc" style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:15px; height:2.4em; overflow:hidden;">${item.description}</div>
                <button class="cyber-btn small btn-buy ${isPremium ? 'premium' : ''}" style="width:100%" data-id="${item.id}" ${isPurchased ? 'disabled' : ''}>
                    ${isPurchased ? '수령 완료' : (item.priceLabel || `${item.priceValue} ${item.priceType === 'gem' ? '젬' : (item.priceType === 'gold' ? '골드' : '원')}`)}
                </button>
            `;

            div.querySelector('.btn-buy').addEventListener('click', () => {
                if (isGift) {
                    // Get current lobby char or prompt
                    // For MVP, use currently selected lobby character if available
                    let targetId = null;
                    try {
                        const saved = JSON.parse(localStorage.getItem('lobbyCharacter'));
                        if (saved) targetId = saved.instanceId;
                    } catch (e) { }

                    if (!targetId && this.game.creatureManager.owned.length > 0) {
                        targetId = this.game.creatureManager.owned[0].instanceId;
                    }

                    if (targetId) {
                        if (confirm(`[선물하기] ${item.name}을(를) 선물하시겠습니까?`)) {
                            this.game.shopManager.buyItem(item.id, targetId);
                        }
                    } else {
                        alert("선물을 받을 크리처가 없습니다.");
                    }
                } else {
                    if (confirm(`[구매 확인] ${item.name}을(를) 구매하시겠습니까?`)) {
                        this.game.shopManager.buyItem(item.id);
                    }
                }
            });

            targetEl.appendChild(div);
        });
    }
}
