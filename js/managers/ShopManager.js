import EventEmitter from '../utils/EventEmitter.js';
import { GOLD_PACKS, GEM_PACKS, BUNDLES, SPECIALS } from '../data/ShopData.js';

export default class ShopManager extends EventEmitter {
    constructor(eventBus, resourceManager, creatureManager) {
        super();
        this.eventBus = eventBus;
        this.resourceManager = resourceManager;
        this.creatureManager = creatureManager;

        // 저장될 상태
        this.purchasedBundles = []; // oneTime 상품 ID 목록
        this.removeAdsPurchased = false;
    }

    getAllItems() {
        return {
            goldPacks: GOLD_PACKS,
            gemPacks: GEM_PACKS,
            bundles: BUNDLES,
            specials: SPECIALS
        };
    }

    isPurchased(itemId) {
        if (itemId === 'remove_ads') return this.removeAdsPurchased;
        return this.purchasedBundles.includes(itemId);
    }

    // 아이템 구매 시도
    buyItem(itemId) {
        // 1. 아이템 찾기
        let item = null;
        let category = '';

        if (GOLD_PACKS.find(i => i.id === itemId)) { item = GOLD_PACKS.find(i => i.id === itemId); category = 'gold'; }
        else if (GEM_PACKS.find(i => i.id === itemId)) { item = GEM_PACKS.find(i => i.id === itemId); category = 'gem'; }
        else if (BUNDLES.find(i => i.id === itemId)) { item = BUNDLES.find(i => i.id === itemId); category = 'bundle'; }
        else if (SPECIALS.find(i => i.id === itemId)) { item = SPECIALS.find(i => i.id === itemId); category = 'special'; }

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
        if (item.priceType === 'gem') {
            this._processGemPurchase(item);
        } else if (item.priceType === 'real') {
            this._processRealPurchase(item);
        }
    }

    _processGemPurchase(item) {
        if (this.resourceManager.resources.gem < item.priceValue) {
            this.emit('shop:purchaseFailed', { reason: "젬이 부족합니다." });
            return;
        }

        this.resourceManager.spendGem(item.priceValue);
        this._giveRewards(item);
        this.emit('shop:purchaseSuccess', { item, message: `${item.name} 구매 완료` });
    }

    _processRealPurchase(item) {
        // TODO: 실제 인앱 결제(IAP) SDK 연동 지점
        // 예: IAP.requestPurchase(item.id).then(...)

        // [테스트용 가상 구매 로직]
        if (confirm(`[테스트 구매] ${item.name} (${item.priceLabel})을 구매하시겠습니까?`)) {
            // 결제 성공 가정
            this._giveRewards(item);

            // 상태 업데이트
            if (item.oneTime) {
                if (item.id === 'remove_ads') this.removeAdsPurchased = true;
                else this.purchasedBundles.push(item.id);
            }

            this.emit('shop:purchaseSuccess', { item, message: `${item.name} 결제 완료 (테스트)` });
            this.emit('shop:updated'); // UI 갱신 (버튼 비활성화 등)
        } else {
            this.emit('shop:purchaseFailed', { reason: "결제가 취소되었습니다." });
        }
    }

    _giveRewards(item) {
        // 1. 단순 정의된 수량
        if (item.goldAmount) this.resourceManager.addGold(item.goldAmount);
        if (item.gemAmount) this.resourceManager.addGem(item.gemAmount);

        // 2. rewards 객체 (번들 등)
        if (item.rewards) {
            if (item.rewards.gold) this.resourceManager.addGold(item.rewards.gold);
            if (item.rewards.gem) this.resourceManager.addGem(item.rewards.gem);

            if (item.rewards.creature) {
                // 특정 희귀도 크리처 지급
                const rarity = item.rewards.creature.rarity;
                // CreatureManager를 통해 소환 (비용 없이)
                this.creatureManager.summonOneByRarity(rarity);
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
