# 📊 전체 크리처 리소스 작업 현황 (Creature Asset Inventory)

> **작성일**: 2025-12-25
> **기준**: 코드 데이터 기반 (`js/data/creatures/*.js`) 전수 조사 결과
> **총계**: 200여 종 (추정)

이 문서는 게임 내 정의된 모든 크리처의 이미지 리소스 현황을 "생성 완료"와 "미생성(플레이스홀더)"으로 명확히 구분하여 나열합니다.

---

## 🚨 Priority 1: 미구현 리소스 (작업 필요)
*현재 `placeholder_*.png`를 사용 중이므로 신규 생성이 필요한 목록입니다.*

### 🟡 UR / SSR (최우선 작업 - 오타쿠 스타일 적용)

| 등급 | 월드 | 이름 (ID) | 현재 파일 경로 | 비고 |
|:---:|:---:|---|---|---|
| **SSR** | Asgard | 장난의 신 로키 (`god_loki`) | `images/placeholder_asgard.png` | |
| **SSR** | Asgard | 아름다움의 여신 프레야 (`god_freya`) | `images/placeholder_asgard.png` | |
| **UR** | Asgard | 세계의 뱀 요르문간드 (`snake_world_jormungandr`) | `images/placeholder_asgard.png` | |
| **SSR** | Asgard | 발키리 대장 군르 (`valkyrie_leader_gunnr`) | `images/placeholder_asgard.png` | |
| **SSR** | Asgard | 아기 슬레이프니르 (`sleipnir_foal`) | `images/placeholder_asgard.png` | |
| **SSR** | ShangriLa | 제천대성 손오공 (`hero_wukong`) | `images/placeholder_shangrila.png` | *생성 시도됨* |
| **SSR** | ShangriLa | 달토끼 루나 (`rabbit_moon`) | `images/placeholder_shangrila.png` | *생성 시도됨* |
| **SSR** | ShangriLa | 공작 왕자 (`peacock_prince`) | `images/placeholder_shangrila.png` | |
| **UR** | Abyss | 기어다니는 혼돈 니알라토텝 (`god_nyarlathotep`) | `images/placeholder_abyss.png` | *생성 시도됨* |
| **SSR** | Abyss | 숲의 검은 염소 (`god_shub`) | `images/placeholder_abyss.png` | *생성 시도됨* |
| **SSR** | Abyss | 황색의 왕 하스터 (`god_hastur`) | `images/placeholder_abyss.png` | *생성 시도됨* |
| **SSR** | Wild | 심해의 폭군 레비아탄 (`beast_leviathan`) | `images/placeholder_wild.png` | *생성 시도됨* |
| **SSR** | Wild | 천공의 지배자 지즈 (`beast_ziz`) | `images/placeholder_wild.png` | *생성 시도됨* |
| **SSR** | Wild | 요정 여왕 티타니아 (`fairy_queen_titania`) | `images/placeholder_wild.png` | *생성 시도됨* |

### 🔵 SR / Special / Rare / Unique / Normal (후순위 작업)

| 등급 | 월드 | 이름 (ID) | ID |
|:---:|:---:|---|---|
| **SSR** | Olympus | 영웅 헤라클레스 | `hero_hercules` |
| **SSR** | Olympus | 신 하데스 | `god_hades` |
| **SR** | Olympus | 저주받은 메두사 | `medusa_cursed` |
| **SR** | Asgard | 죽음의 여신 헬 | `god_hel` |
| **SR** | Asgard | 불의 거인 수르트 | `giant_fire_surtr` |
| **SR** | Asgard | 위그드라실 수호자 | `yggdrasil_guardian` |
| **SR** | ShangriLa | 청룡 | `dragon_azure` |
| **SR** | ShangriLa | 백호 | `tiger_white` |
| **SR** | ShangriLa | 주작 | `bird_vermilion` |
| **SR** | ShangriLa | 현무 | `turtle_black` |
| **SR** | ShangriLa | 도깨비 왕 | `dokkeabi_king` |
| **SR** | ShangriLa | 산신령 호랑이 | `mountain_god_tiger` |
| **SR** | Abyss | 심해의 거신 다곤 | `god_dagon` |
| **SR** | Abyss | 기사 듀라한 | `knight_dullahan` |
| **SR** | Wild | 황금 그리핀 | `griffin_gold` |
| **SR** | Wild | 고대 거북 | `turtle_ancient_wild` |
| **SR** | Wild | 드라이어드 퀸 | `dryad_queen` |
| **SPECIAL** | Olympus | 술의 신 디오니소스 | `god_dionysus` |
| **SPECIAL** | Olympus | 하피 퀸 | `harpy_queen` |
| **SPECIAL** | Asgard | 에인헤랴르 영혼 | `einherjar_ghost` |
| **SPECIAL** | Asgard | 황금 뿔 엘크 | `elk_golden` |
| **SPECIAL** | Asgard | 미미르의 정령 | `mimir_spirit` |
| **SPECIAL** | Asgard | 노르딕 고양이 프레야 | `nordic_cat_freya` |
| **SPECIAL** | ShangriLa | 학 신선 | `crane_sage` |
| **SPECIAL** | ShangriLa | 감 아저씨 | `pears_spirit` |
| **SPECIAL** | ShangriLa | 장자의 나비 | `butterfly_dream` |
| **SPECIAL** | Abyss | 미믹 상자 | `mimic_box` |
| **SPECIAL** | Abyss | 스켈레톤 나이트 | `knight_skeleton` |
| **SPECIAL** | Abyss | 저주받은 인형 | `cursed_doll` |
| **SPECIAL** | Wild | 사마귀 무사 | `mantis_warrior` |
| **SPECIAL** | Wild | 난초 사마귀 | `orchid_mantis` |
| **SPECIAL** | Wild | 수정 게 | `crystal_crab` |

*(이외 Rare, Unique, Normal 등급 다수 존재 - 생략)*

---

## ✅ Priority 3: 생성 완료된 리소스 (유지/보존)
*이미지가 존재하며, 퀄리티가 확보된 항목입니다.*

| 등급 | 월드 | 이름 (ID) | 파일명 |
|:---:|:---:|---|---|
| **UR** | Olympus | 제우스 | `creature_god_zeus.jpg` |
| **UR** | Olympus | 크로노스 | `creature_time_lord_chronos.png` |
| **UR** | Asgard | 오딘 | `creature_god_odin.png` |
| **UR** | Asgard | 토르 | `creature_god_thor.png` |
| **UR** | ShangriLa | 바하무트 | `creature_dragon_ancient.png` |
| **UR** | ShangriLa | 미호 | `creature_fox_nine_ur.png` |
| **UR** | ShangriLa | 용왕 | `creature_god_dragon_king.png` |
| **UR** | Abyss | 에레보스 | `creature_void_emperor.png` |
| **UR** | Abyss | 티아마트 | `creature_dragon_chaos.png` |
| **UR** | Abyss | 크툴루 | `creature_god_cthulhu.png` |
| **UR** | Abyss | 월드스타 루루 | `creature_kraken_worldstar.png` |
| **UR** | Wild | 가이아 | `creature_creator_gaia.png` |
| **SSR** | Olympus | 포세이돈 | `creature_god_poseidon.png` |
| **SSR** | Olympus | 미카엘 (천사 스킬) | `creature_angel_arch.png` |
| **SSR** | Asgard | 펜리르 | `creature_wolf_fenrir.png` |
| **SSR** | ShangriLa | 불사조 | `creature_phoenix_eternal.png` |
| **SSR** | Abyss | 데몬 킹 | `creature_demon_king.png` |
| **SSR** | Wild | 드레이크 | `creature_dragon_drake.png` |
| **SSR** | Wild | 베히모스 | `creature_beast_behemoth.png` |

*(이외 SR, Rare, Normal 등급 완료분 다수 존재)*

---

## 📝 작업 가이드라인 (Prompt Strategy)

**"블루 아카이브/니케 스타일" (Otaku Style) 필수 적용**:
- **키워드**: `(blue archive art style:1.4)`, `(nikke art style:1.2)`, `cel shading`, `vibrant colors`, `anime coloring`, `moe`
- **금지**: `realistic`, `3d render`, `dark gritty`, `western comic style`

이 문서를 기준으로 누락된 분량(Priority 1)부터 순차적으로 작업을 진행하겠습니다.
