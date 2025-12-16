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
        this.currentEditingDeck = 0; // Currently editing deck (0, 1, or 2)
    }

    init() {
        this.load();
    }

    load() {
        const data = localStorage.getItem('mcl_decks');
        if (data) {
            try {
                const parsed = JSON.parse(data);
                this.decks = parsed.decks || this.decks;
                this.mainDeck = parsed.mainDeck !== undefined ? parsed.mainDeck : 0;
                this.currentEditingDeck = parsed.currentEditingDeck !== undefined ? parsed.currentEditingDeck : 0;
            } catch (e) {
                console.error("Failed to load decks", e);
            }
        }
    }

    save() {
        const data = {
            decks: this.decks,
            mainDeck: this.mainDeck,
            currentEditingDeck: this.currentEditingDeck
        };
        localStorage.setItem('mcl_decks', JSON.stringify(data));
        this.emit('decks:updated', this.decks);
    }

    setCreature(deckIndex, slotIndex, creatureId) {
        if (!this.decks[deckIndex]) return false;
        if (slotIndex < 0 || slotIndex >= 5) return false;

        if (creatureId !== null) {
            const creature = this.game.creatureManager.getCreatureById(creatureId);
            if (!creature) return false;

            // Remove from other slots in THIS deck if present
            const existingIdx = this.decks[deckIndex].indexOf(creatureId);
            if (existingIdx !== -1 && existingIdx !== slotIndex) {
                this.decks[deckIndex][existingIdx] = null;
            }
        }

        this.decks[deckIndex][slotIndex] = creatureId;
        this.save();
        return true;
    }

    removeCreature(deckIndex, slotIndex) {
        if (!this.decks[deckIndex]) return;
        this.decks[deckIndex][slotIndex] = null;
        this.save();
    }

    setActiveDeck(deckIndex) {
        if (this.decks[deckIndex]) {
            this.mainDeck = deckIndex;
            this.save();
        }
    }

    getDeckTeam(deckIndex) {
        const ids = this.decks[deckIndex] || [];
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
}
