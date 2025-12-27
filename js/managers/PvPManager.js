
export default class PvPManager {
    constructor(game) {
        this.game = game;
        this.db = null; // Firestore or Realtime DB
        this.auth = null;
        this.currentMatchId = null;
        this.isSearching = false;

        // Listeners
        this.unsubscribe = null;
    }

    init() {
        if (!window.FirebaseService) {
            console.warn('[PvP] FirebaseService not found. Real-time features disabled.');
            return;
        }
        this.db = window.FirebaseService.db;
        this.auth = window.FirebaseService.auth;
        console.log('[PvP] Initialized.');
    }

    async findMatch() {
        if (!this.auth.currentUser) {
            alert('로그인이 필요합니다.');
            return;
        }

        this.isSearching = true;
        this.game.events.emit('pvp:searching');

        // Logic (Concept):
        // 1. Add user to 'queue' collection in Firestore.
        // 2. Cloud Function or Client logic pairs two users.
        // 3. Create 'matches/{matchId}' document.
        // 4. Listen to 'matches/{matchId}' for changes.

        console.log('[PvP] Mock Search started...');

        // Simulation for now
        setTimeout(() => {
            this.onMatchFound({
                id: 'mock_match_' + Date.now(),
                opponent: { name: 'DarkValkyrie', rank: 'Gold' }
            });
        }, 3000);
    }

    onMatchFound(matchData) {
        this.isSearching = false;
        this.currentMatchId = matchData.id;
        console.log('[PvP] Match found!', matchData);
        this.game.events.emit('pvp:matchFound', matchData);

        // Switch to Battle Scene with PvP Mode
        // this.game.battleManager.startPvP(matchData);
    }

    sendMove(actionData) {
        if (!this.currentMatchId) return;
        // Write action to Firestore 'matches/{id}/actions'
    }
}
