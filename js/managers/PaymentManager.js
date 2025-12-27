
import EventEmitter from '../utils/EventEmitter.js';

export default class PaymentManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;

        // [Configuration]
        this.IS_TEST_MODE = true; // Set to FALSE for Real Payments

        // 1. Test Credentials (Official Demo)
        this.TEST_STORE_ID = "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec";
        this.TEST_CHANNEL_KEY = "channel-key-893597d6-e62d-410f-83f9-119f530b4b11";

        // 2. Live Credentials (Required for Real Money)
        // * 사업자 등록 후 PortOne 관리자 페이지에서 발급받아야 합니다.
        this.LIVE_STORE_ID = "store-YOUR-REAL-STORE-ID";
        this.LIVE_CHANNEL_KEY = "channel-key-YOUR-REAL-CHANNEL-KEY";

        this.isReady = false;
    }

    init() {
        if (window.PortOne) {
            this.isReady = true;
            console.log(`[PaymentManager] SDK Ready (Mode: ${this.IS_TEST_MODE ? 'TEST' : 'LIVE'})`);
        } else {
            console.warn("[PaymentManager] PortOne SDK not loaded");
        }
    }

    get storeId() {
        return this.IS_TEST_MODE ? this.TEST_STORE_ID : this.LIVE_STORE_ID;
    }

    get channelKey() {
        return this.IS_TEST_MODE ? this.TEST_CHANNEL_KEY : this.LIVE_CHANNEL_KEY;
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
            try {
                const response = await PortOne.requestPayment({
                    storeId: this.storeId, // Getter usage
                    paymentId: paymentId,
                    orderName: item.name,
                    totalAmount: item.price,
                    currency: "KRW",
                    channelKey: this.channelKey, // Getter usage
                    payMethod: "CARD",
                    customer: {
                        fullName: "Multiverse User", // Generic Name
                        phoneNumber: "010-0000-0000",
                        email: "user@example.com"
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
