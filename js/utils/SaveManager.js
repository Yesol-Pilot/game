export default class SaveManager {
    static SAVE_KEY = "mclab_save_v1";

    static saveGame(state, key = null) {
        try {
            const targetKey = key ? `mclab_save_${key}` : this.SAVE_KEY;
            const json = JSON.stringify(state);
            localStorage.setItem(targetKey, json);
            console.log(`[SaveManager] 게임이 저장되었습니다. (${targetKey})`);
        } catch (e) {
            console.error("[SaveManager] 저장 실패:", e);
        }
    }

    static loadGame(key = null) {
        try {
            const targetKey = key ? `mclab_save_${key}` : this.SAVE_KEY;
            const json = localStorage.getItem(targetKey);
            if (!json) return null;
            return JSON.parse(json);
        } catch (e) {
            console.error("[SaveManager] 로드 실패:", e);
            return null;
        }
    }

    static clearGame(key = null) {
        const targetKey = key ? `mclab_save_${key}` : this.SAVE_KEY;
        localStorage.removeItem(targetKey);
        console.log(`[SaveManager] 저장 데이터가 초기화되었습니다. (${targetKey})`);
    }
}
