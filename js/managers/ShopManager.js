import EventEmitter from '../utils/EventEmitter.js';
import { GOLD_PACKS, GEM_PACKS, BUNDLES, SPECIALS, GIFT_ITEMS, DONATION_ITEMS } from '../data/ShopData.js';

export default class ShopManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        // 저장될 상태
        this.purchasedBundles = [];
        this.removeAdsPurchased = false;
    }

    getAllItems() {
        return {
            goldPacks: GOLD_PACKS,
            gemPacks: GEM_PACKS,
            bundles: BUNDLES,
            specials: SPECIALS,
            gifts: GIFT_ITEMS,
            donations: DONATION_ITEMS // Added
        };
    }

    isPurchased(itemId) {
        if (itemId === 'remove_ads') return this.removeAdsPurchased;
        return this.purchasedBundles.includes(itemId);
    }

    // 아이템 구매 시도
    buyItem(itemId, targetCreatureId = null) {
        // 1. 아이템 찾기
        let item = null;
        if (GOLD_PACKS.find(i => i.id === itemId)) item = GOLD_PACKS.find(i => i.id === itemId);
        else if (GEM_PACKS.find(i => i.id === itemId)) item = GEM_PACKS.find(i => i.id === itemId);
        else if (BUNDLES.find(i => i.id === itemId)) item = BUNDLES.find(i => i.id === itemId);
        else if (SPECIALS.find(i => i.id === itemId)) item = SPECIALS.find(i => i.id === itemId);
        else if (GIFT_ITEMS.find(i => i.id === itemId)) item = GIFT_ITEMS.find(i => i.id === itemId);
        else if (DONATION_ITEMS.find(i => i.id === itemId)) item = DONATION_ITEMS.find(i => i.id === itemId);

        if (!item) {
            this.emit('shop:purchaseFailed', { reason: "상품을 찾을 수 없습니다." });
            return;
        }

        // 2. 단건 구매 체크
        if (item.oneTime && this.isPurchased(itemId)) {
            this.emit('shop:purchaseFailed', { reason: "이미 구매한 상품입니다." });
            return;
        }

        // 3. 결제 타입 분기
        // 3. 결제 타입 분기
        if (item.priceType === 'donation') {
            if (confirm("개발자 후원 페이지(외부)로 이동하시겠습니까?")) {
                window.open(item.url, '_blank');
            }
            return;
        }

        if (item.priceType === 'real' || item.priceType === 'cash') {
            this._processRealPurchase(item, targetCreatureId);
            return;
        }

        // 4. 인게임 자원 결제
        let success = false;
        if (item.priceType === 'gold') {
            success = this.game.resourceManager.spendGold(item.priceValue || item.price);
        } else if (item.priceType === 'gem') {
            success = this.game.resourceManager.spendGem(item.priceValue || item.price);
        }

        if (success) {
            // 5. 구매 상태 기록
            if (item.oneTime) {
                if (item.id === 'remove_ads') this.removeAdsPurchased = true;
                else this.purchasedBundles.push(item.id);
            }

            // 6. 보상 지급
            this._giveRewards(item, targetCreatureId);

            this.emit('shop:purchaseSuccess', { item, message: `${item.name} 구매 완료` });
            this.emit('shop:updated');
        } else {
            this.emit('shop:purchaseFailed', { reason: `자원(${item.priceType})이 부족합니다.` });
        }
    }

    async _processRealPurchase(item, targetCreatureId) {
        // PaymentManager에 결제 위임
        const success = await this.game.paymentManager.requestPayment(item);

        if (success) {
            // 구매 상태 기록
            if (item.oneTime) {
                if (item.id === 'remove_ads') this.removeAdsPurchased = true;
                else this.purchasedBundles.push(item.id);
            }

            // 선물(Ring)의 경우 타겟에게 보상 적용
            if (item.type === 'ring' && targetCreatureId) {
                this._giveRewards(item, targetCreatureId);
            }

            this.emit('shop:updated');
        }
    }

    _giveRewards(item, targetId) {
        // 1. 골드/젬 직접 지급
        if (item.goldAmount) this.game.resourceManager.addGold(item.goldAmount);
        if (item.gemAmount) this.game.resourceManager.addGem(item.gemAmount);

        // 2. 복합 보상 (번들 등)
        if (item.rewards) {
            if (item.rewards.gold) this.game.resourceManager.addGold(item.rewards.gold);
            if (item.rewards.gem) this.game.resourceManager.addGem(item.rewards.gem);
            if (item.rewards.creature) {
                this.game.creatureManager.summonOneByRarity(item.rewards.creature.rarity);
            }
        }

        // 3. 선물 효과 (호감도 증가)
        if (item.effect && item.effect.resonance) {
            if (targetId) {
                this.game.creatureManager.increaseAffection(targetId, item.effect.resonance);
                console.log(`[Gift] Sent to ${targetId}, Resonance +${item.effect.resonance}`);
            } else {
                console.warn("[Shop] Gift purchased but no target specified.");
            }
        }
    }

    // [저장/로드]
    getSerializableState() {
        return {
            purchasedBundles: this.purchasedBundles,
            removeAdsPurchased: this.removeAdsPurchased
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.purchasedBundles = state.purchasedBundles || [];
        this.removeAdsPurchased = !!state.removeAdsPurchased;
        this.emit('shop:updated');
    }
}
