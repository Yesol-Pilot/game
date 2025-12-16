import EventEmitter from '../utils/EventEmitter.js';

export default class AuthManager {
    constructor() {
        this.events = new EventEmitter();
        this.currentUser = null;
        this.dbKey = 'mcl_user_db_v1';
        this.sessionKey = 'mcl_session_v1';
        this.db = this._loadDB();
    }

    init() {
        this._loadSession();
    }

    // --- Core Auth ---

    login(username, password) {
        if (!this.db.users[username]) {
            return { success: false, message: "존재하지 않는 사용자입니다." };
        }

        const user = this.db.users[username];
        if (user.password !== password) {
            return { success: false, message: "비밀번호가 일치하지 않습니다." };
        }

        // Success
        this._setSession(user);
        return { success: true, user: this.currentUser };
    }

    signup(username, password, avatar) {
        if (!username || !password) {
            return { success: false, message: "아이디와 비밀번호를 입력해주세요." };
        }
        if (this.db.users[username]) {
            return { success: false, message: "이미 존재하는 사용자입니다." };
        }

        const newUser = {
            username: username,
            password: password, // In real app, hash this!
            avatar: avatar || 'slime',
            createdAt: Date.now(),
            lastLogin: Date.now()
        };

        this.db.users[username] = newUser;
        this._saveDB();

        // Auto Login after Signup
        this._setSession(newUser);
        return { success: true, user: newUser };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem(this.sessionKey);
        this.events.emit('auth:logout');
        // Optional: location.reload() handled by UI
    }

    // --- Account Management ---

    // Check if logged in
    isLoggedIn() {
        return !!this.currentUser;
    }

    // --- Internal Storage ---

    _loadDB() {
        const json = localStorage.getItem(this.dbKey);
        if (!json) {
            return { users: {} };
        }
        try {
            return JSON.parse(json);
        } catch (e) {
            console.error("DB Load Error", e);
            return { users: {} };
        }
    }

    _saveDB() {
        localStorage.setItem(this.dbKey, JSON.stringify(this.db));
    }

    _setSession(user) {
        this.currentUser = user;
        // Update Last Login
        user.lastLogin = Date.now();
        this._saveDB();

        // Save Session (Simple Token Simulation)
        localStorage.setItem(this.sessionKey, JSON.stringify({ username: user.username, token: 'simulated_token' }));

        this.events.emit('auth:login', user);
    }

    _loadSession() {
        const json = localStorage.getItem(this.sessionKey);
        if (!json) return;

        try {
            const session = JSON.parse(json);
            if (session && session.username && this.db.users[session.username]) {
                const user = this.db.users[session.username];
                this.currentUser = user;
                console.log(`[Auth] Session restored for ${user.username}`);
                this.events.emit('auth:restored', user);
            }
        } catch (e) {
            console.error("Session Load Error", e);
        }
    }
}
