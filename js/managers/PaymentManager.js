
import EventEmitter from '../utils/EventEmitter.js';

export default class PaymentManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.storeId = "store-43823-22123"; // Test Store ID (Virtual)
        this.isReady = false;
    }

    init() {
        if (window.PortOne) {
            this.isReady = true;
            console.log("[PaymentManager] PortOne SDK Ready");
        } else {
            console.warn("[PaymentManager] PortOne SDK not loaded");
        }
    }

    /**
     * Request Payment
     * @param {Object} item { id, name, price, currency }
     * @returns {Promise<boolean>} success
     */
    async requestPayment(item) {
        if (!this.isReady) {
            alert("결제 모듈이 로드되지 않았습니다.");
            return false;
        }

        const paymentId = `pay_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

        try {
            const response = await PortOne.requestPayment({
                storeId: this.storeId,
                paymentId: paymentId,
                orderName: item.name,
                totalAmount: item.price,
                currency: "KRW",
                channelKey: "channel-key-test-virtual", // Mock Key
                payMethod: "CARD",
                customer: {
                    fullName: "Multiverse Director",
                    phoneNumber: "010-0000-0000",
                    email: "director@creaturelab.com"
                }
            });

            if (response.code != null) {
                // Error
                console.error("[Payment] Failed:", response.message);
                alert(`결제 실패: ${response.message}`);
                return false;
            }

            // Success (In logic, we trust client for this P2W simulation)
            console.log("[Payment] Success:", response);

            // Process Delivery
            this.deliverItem(item);
            return true;

        } catch (e) {
            console.error("[Payment] Exception:", e);
            // Mock Success for seamless testing if SDK fails (fallback)
            // alert("테스트 결제(Fallback)를 진행합니다.");
            // this.deliverItem(item);
            // return true;
            return false;
        }
    }

    deliverItem(item) {
        // 1. Gem Charge
        if (item.type === 'gem') {
            this.game.resourceManager.addGem(item.amount);
            alert(`[결제 성공] ${item.name} 구매 완료! 젬 +${item.amount}`);
        }
        // 2. Package / Special Item
        else if (item.type === 'ring') {
            // 서약의 반지 (Inventory or Direct Effect?)
            // For now, give item to InventoryManager if exists, or handle directly here
            // Let's assume direct effect trigger for simplicity, 
            // but ideally we add to 'Inventory'.
            // For MVP, we pass event.
            this.emit('payment:ring_purchased', { amount: 1 });
            alert(`[결제 성공] ${item.name} 구매 완료! 서약이 가능해졌습니다.`);
        }
        else if (item.type === 'date_ticket') {
            // Not implemented yet
        }

        if (typeof this.game.playSound === 'function') {
            this.game.playSound('payment_success'); // Mock
        }
    }
}
