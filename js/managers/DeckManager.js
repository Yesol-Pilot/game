import EventEmitter from '../utils/EventEmitter.js';

export default class DeckManager extends EventEmitter {
    constructor(game) {
        super();
        this.game = game;
        this.decks = [
            [null, null, null, null, null], // Deck 0 (Main)
            [null, null, null, null, null], // Deck 1
            [null, null, null, null, null]  // Deck 2
        ];
        this.mainDeck = 0; // Representative Deck index
        this.currentEditingDeck = 'main'; // Currently editing deck ('main', 'sub1', 'defense')
    }

    /**
     * 문자열 덱 ID를 숫자 인덱스로 변환
     * @param {number|string} deckId 
     * @returns {number}
     */
    _toIndex(deckId) {
        if (typeof deckId === 'number') return deckId;
        if (deckId === 'main' || deckId === '0') return 0;
        if (deckId === 'sub1' || deckId === '1') return 1;
        if (deckId === 'defense' || deckId === '2') return 2;
        return parseInt(deckId, 10) || 0;
    }

    /**
     * 덱 데이터 배열 반환 (문자열/숫자 ID 모두 지원)
     * @param {number|string} deckId 
     * @returns {Array}
     */
    getDeck(deckId) {
        const idx = this._toIndex(deckId);
        return this.decks[idx] || [];
    }

    /**
     * 현재 대표 덱 ID 반환 (문자열 키 형식)
     * @returns {string}
     */
    get activeDeckId() {
        const names = ['main', 'sub1', 'defense'];
        return names[this.mainDeck] || 'main';
    }

    init() {
        // Game.js에서 통합 로드 시 호출됨
    }

    getSerializableState() {
        return {
            decks: this.decks,
            mainDeck: this.mainDeck,
            currentEditingDeck: this.currentEditingDeck
        };
    }

    loadFromState(state) {
        if (!state) return;
        this.decks = state.decks || this.decks;
        this.mainDeck = state.mainDeck !== undefined ? state.mainDeck : 0;
        this.currentEditingDeck = state.currentEditingDeck !== undefined ? state.currentEditingDeck : 'main';
        this.emit('decks:updated', this.decks);
    }

    // Legacy Support (Optional, can be removed if full integration is done)
    load() {
        const data = localStorage.getItem('mcl_decks');
        if (data) {
            try {
                const parsed = JSON.parse(data);
                this.loadFromState(parsed);
            } catch (e) {
                console.error("Failed to load decks", e);
            }
        }
    }

    // Triggered internally on changes
    save() {
        // Individual save is redundant if Game.js saves everything, 
        // but keeping it for safety in case of crash before auto-save
        const data = this.getSerializableState();
        localStorage.setItem('mcl_decks', JSON.stringify(data));
        this.emit('decks:updated', this.decks);
    }

    setCreature(deckIndex, slotIndex, creatureId) {
        const idx = this._toIndex(deckIndex);

        if (!this.decks[idx]) return false;
        if (slotIndex < 0 || slotIndex >= 5) return false;

        if (creatureId !== null) {
            const creature = this.game.creatureManager.getCreatureById(creatureId);
            if (!creature) return false;

            // Remove from other slots in THIS deck if present
            const existingIdx = this.decks[idx].indexOf(creatureId);
            if (existingIdx !== -1 && existingIdx !== slotIndex) {
                this.decks[idx][existingIdx] = null;
            }
        }

        this.decks[idx][slotIndex] = creatureId;
        this.save();
        return true;
    }

    removeCreature(deckIndex, slotIndex) {
        const idx = this._toIndex(deckIndex);

        if (!this.decks[idx]) return;
        this.decks[idx][slotIndex] = null;
        this.save();
    }

    setActiveDeck(deckIndex) {
        const idx = this._toIndex(deckIndex);

        if (this.decks[idx]) {
            this.mainDeck = idx;
            this.save();
        }
    }

    getDeckTeam(deckIndex) {
        const idx = this._toIndex(deckIndex);
        const ids = this.decks[idx] || [];
        return ids.map(id => {
            if (!id) return null;
            return this.game.creatureManager.getCreatureById(id);
        }).filter(c => c);
    }

    getMainDeck() {
        return this.decks[this.mainDeck] || [];
    }

    getActiveTeam() {
        return this.getDeckTeam(this.mainDeck);
    }

    /**
     * @description Add a creature to the first empty slot of the specified deck
     * @param {number|string} deckIndex 
     * @param {string} creatureId 
     * @returns {boolean} Success or failure
     */
    addToDeck(deckIndex, creatureId) {
        const idx = this._toIndex(deckIndex);

        if (!this.decks[idx]) return false;

        const deck = this.decks[idx];

        // Check if already in deck
        if (deck.includes(creatureId)) {
            return false; // Already equipped
        }

        // Find first empty slot
        const emptySlot = deck.indexOf(null);
        if (emptySlot === -1) {
            return false; // Deck full
        }

        this.setCreature(idx, emptySlot, creatureId);
        return true;
    }
}
