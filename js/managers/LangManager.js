export class LangManager {
    constructor() {
        this.currentLang = 'kr'; // Default
        this.dictionaries = {
            kr: {
                // Auth
                "auth.login": "로그인",
                "auth.signup": "회원가입",
                "auth.id_placeholder": "접속 ID (Username)",
                "auth.pw_placeholder": "비밀번호 (Passphrase)",
                "auth.confirm_placeholder": "비밀번호 확인 (Confirm)",
                "auth.btn_login": "접속 개시 (LOGIN)",
                "auth.btn_signup": "DNA 등록 (REGISTER)",
                "auth.msg_missing": "접근 거부: ID/PW를 입력하세요.",
                "auth.msg_mismatch": "오류: 비밀번호가 일치하지 않습니다.",
                "auth.welcome": "계정 생성 완료: 환영합니다, {name} 연구소장님.",

                // Sidebar
                "nav.summon": "소환",
                "nav.battle": "전투",
                "nav.team": "팀",
                "nav.shop": "상점",
                "nav.system": "시스템",

                // Headers
                "header.summon": "소환 제단 (SUMMON)",
                "header.battle": "전술 센터 (BATTLE)",
                "header.team": "팀 관리 (TEAM)",
                "header.shop": "보급소 (SUPPLY)",
                "header.mission": "임무 관제소 (MISSION)",
                "header.research": "제 1 연구소 (RESEARCH)",

                // Buttons & Labels
                "btn.summon_1": "1회 소환 (100 GEM)",
                "btn.summon_10": "10회 소환 (1000 GEM)",
                "btn.summon_normal": "일반 소환 (300 GOLD)",
                "btn.summon_premium": "정예 소환 (1 GEM)",
                "btn.battle_start": "전투 개시 (START OPERATION)",
                "btn.pvp_start": "PVP 매칭 (MATCHMAKING)",
                "label.stage_select": "작전 구역 선택",
                "label.rec_power": "권장 전투력",
                "label.pool_stats": "슬롯을 클릭하여 출전 크리처를 변경하세요.",

                // System
                "sys.title": "시스템 설정 (SYSTEM)",
                "sys.tab_notice": "공지사항",
                "sys.tab_contact": "1:1 문의",
                "sys.contact_msg": "버그 제보나 건의사항을 보내주세요. 24시간 내에 답변해 드립니다.",

                // Mission
                "header.daily_mission": "일일 임무",
                "header.achievements": "업적",
                "sys.btn_send": "전송하기",

                // Deck & Expedition
                "label.deck1": "덱 1",
                "label.deck2": "덱 2",
                "label.deck3": "덱 3",
                "label.current_deck": "현재 상태",
                "btn.set_main_deck": "대표 덱 설정",
                "header.expedition": "탐사 본부 (EXPEDITION)",
                "header.active_expedition": "진행 중인 탐사",
                "header.expedition_zones": "탐사 구역",

                // Personas (Dynamic keys can be handled separately or here)
                "director.vesper.name": "닥터 베스퍼",
                "director.vesper.title": "냉철한 유전공학자",
                "director.vesper.desc": "크리처를 오직 데이터로만 바라보는 천재 과학자. 시설 관리 효율과 연구 속도에 특화되어 있습니다.",

                "director.kael.name": "사령관 카엘",
                "director.kael.title": "강철의 전술가",
                "director.kael.desc": "연구소를 전쟁상황실처럼 운영하는 전직 군인. 크리처의 전투 능력 강화에 특화되어 있습니다.",

                "director.zero.name": "서브젝트 제로",
                "director.zero.title": "각성한 실험체",
                "director.zero.desc": "기원을 알 수 없는 미스터리한 인물. 크리처들과 텔레파시로 소통하며 빠른 성장을 돕습니다.",

                "director.eos.name": "레이디 에오스",
                "director.eos.title": "황금의 후원자",
                "director.eos.desc": "멀티버스 프로젝트의 막대한 자금을 대는 의문의 후원자. 골드 획득과 재원 확보에 능합니다.",

                // Alerts
                "alert.logout": "로그아웃 하시겠습니까?",
                "alert.saved": "저장되었습니다.",
                "alert.reset": "정말로 초기화 하시겠습니까?\n모든 데이터가 삭제됩니다."
            },
            en: {
                // Auth
                "auth.login": "SIGN IN",
                "auth.signup": "SIGN UP",
                "auth.id_placeholder": "ACCESS ID (Username)",
                "auth.pw_placeholder": "PASSPHRASE",
                "auth.confirm_placeholder": "CONFIRM PASSPHRASE",
                "auth.btn_login": "INITIALIZE LINK",
                "auth.btn_signup": "REGISTER DNA",
                "auth.msg_missing": "ACCESS DENIED: Missing Credentials",
                "auth.msg_mismatch": "ERROR: Passphrase Mismatch",
                "auth.welcome": "ACCOUNT CREATED: Welcome, Director {name}.",

                // Sidebar
                "nav.summon": "SUMMON",
                "nav.battle": "BATTLE",
                "nav.team": "TEAM",
                "nav.shop": "SHOP",
                "nav.system": "SYSTEM",

                // Headers
                "header.summon": "SUMMONING ALTAR",
                "header.battle": "TACTICAL CENTER",
                "header.team": "TEAM MANAGEMENT",
                "header.shop": "SUPPLY DEPOT",
                "header.mission": "MISSION CONTROL",
                "header.research": "RESEARCH LAB",

                // Buttons & Labels
                "btn.summon_1": "SUMMON x1 (100 GEM)",
                "btn.summon_10": "SUMMON x10 (1000 GEM)",
                "btn.summon_normal": "STANDARD SUMMON (300 GOLD)",
                "btn.summon_premium": "ELITE SUMMON (1 GEM)",
                "btn.battle_start": "ENGAGE (START BATTLE)",
                "btn.pvp_start": "PVP MATCHMAKING",
                "label.stage_select": "OPERATION ZONE",
                "label.rec_power": "Rec. Power",
                "label.pool_stats": "Click slot to change unit.",

                // System
                "sys.title": "SYSTEM TERMINAL",
                "sys.tab_notice": "NOTICE",
                "sys.tab_contact": "CONTACT US",
                "sys.contact_msg": "Please send your inquiry or bug report. We will respond within 24 hours.",

                // Mission
                "header.daily_mission": "Daily Missions",
                "header.achievements": "Achievements",
                "sys.btn_send": "SEND TRANSMISSION",

                // Deck & Expedition
                "label.deck1": "Deck 1",
                "label.deck2": "Deck 2",
                "label.deck3": "Deck 3",
                "label.current_deck": "Status",
                "btn.set_main_deck": "Set as Main Deck",
                "header.expedition": "EXPEDITION CENTER",
                "header.active_expedition": "Active Expeditions",
                "header.expedition_zones": "Expedition Zones",

                // Director
                "director.vesper.name": "Dr. Vesper",
                "director.vesper.title": "The Cold Genius",
                "director.vesper.desc": "A brilliant scientist who views creatures purely as data. Specialized in genetic efficiency.",

                "director.kael.name": "Commander Kael",
                "director.kael.title": "The Iron Tactician",
                "director.kael.desc": "A former military strategist who treats the lab as a war room. Focuses on combat power.",

                "director.zero.name": "Subject Zero",
                "director.zero.title": "The Awakened",
                "director.zero.desc": "A mysterious figure with unknown origins. Seemingly connected to the creatures telepathically.",

                "director.eos.name": "Lady Eos",
                "director.eos.title": "The Golden Sponsor",
                "director.eos.desc": "The enigmatic financier of the multiverse project. Elegant, ruthless, and perfectionist.",

                "alert.logout": "Terminate Session?",
                "alert.saved": "Game Saved.",
                "alert.reset": "Are you sure you want to RESET?\nAll data will be lost."
            }
        };
    }

    setLanguage(lang) {
        if (!this.dictionaries[lang]) return;
        this.currentLang = lang;
        this.applyToDOM();
    }

    t(key, params = {}) {
        let text = this.dictionaries[this.currentLang][key] || key;
        for (const [k, v] of Object.entries(params)) {
            text = text.replace(`{${k}}`, v);
        }
        return text;
    }

    applyToDOM() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                // Check if it's an input placeholder or text content
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = this.t(key);
                } else {
                    el.textContent = this.t(key);
                }
            }
        });
    }
}
