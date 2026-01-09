# 🎨 크리처 이미지 생성 마스터 가이드

> **프로젝트**: 멀티버스 크리처 랩
> **스타일**: 블루아카이브 + 니케 스타일 (2D Anime, Cel Shading, Glazing)
> **타겟**: 성인 서브컬처 (매력적이고 관능적인 캐릭터)
> **최신 업데이트**: 2026-01-07

---

## 🛠️ 표준 워크플로우 (Standard Workflow)

이미지 생성부터 적용까지 다음 절차를 **엄격히** 준수합니다.

### 1. 생성 및 동기화 (Generation & Sync)

1. **이미지 생성**: AI 도구로 이미지 생성 (Artifacts 폴더에 저장됨).
2. **즉시 복제 (Dual Backup)**:
    * 생성 즉시 `images/temp/` 폴더로 복사합니다. (사용자 확인용)
    * `copy "C:\Users\...\Artifacts\img.png" "D:\test\...\images\temp\img.png"`

### 2. 리뷰 작성 (Walkthrough)

* `walkthrough.md`에 테이블 형태(Type | Image | Concept)로 정리하여 리뷰를 요청합니다.
* **⚠️ 중요**: 이미지 경로는 반드시 **Artifacts 원본 경로**(`C:\Users\...\brain\...`)를 사용해야 합니다. (외부 경로 사용 시 엑스박스 발생)

### 3. 승인 및 적용 (Approval & Apply)

* **승인 시**: `images/temp/`의 파일을 `images/creatures/[world]/`로 이동하고 파일명을 변경합니다.
* **거부 시**: `images/_unused_archive/`로 이동하여 보관합니다. (삭제 금지)

---

## 🚫 핵심 규칙 (Core Rules)

| 항목 | 규칙 |
| :--- | :--- |
| **파일 경로** | 공식: `images/creatures/[world]/` <br> 임시: `images/temp/` |
| **파일명** | `creature_[id].png` (예: `creature_void_emperor.png`) |
| **해상도** | 세로형 권장 (512x768 또는 768x1024) |
| **구도** | **전신(Full Body)** 필수 (머리~발끝 잘림 없음), 화면의 80% 차지 |
| **금지 사항** | 텍스트, UI, 말풍선, 3D/실사 렌더링, SD(Chibi) 스타일 |

---

## 🎨 프롬프트 시스템 (Prompt System)

### 필수 프롬프트 (Base Prompts)

* **Positive**: `(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4), (cel shading:1.3), full body shot, solo, (glossy skin:1.2)`
* **Negative**: `(3d:1.5), (realistic:1.5), (photorealistic:1.5), (lowres:1.4), simple background, white background, chibi, deformed, bad anatomy, text, watermark`

### 등급별 스타일 가이드

* **UR/SSR (High-End)**: `(oil painting texture:1.3)`, `(thick coating:1.2)`, `(cinematic lighting:1.3)`, `extremely detailed face`, `huge breasts`, `thick thighs`
* **SR/Rare**: `(vibrant colors)`, `(clean lines)`, `dynamic pose`

---

## 📦 크리처 데이터베이스 (Status & Prompts)

상태 범례: ✅ 완료 | 🔄 재생성 필요 (스타일/퀄리티 이슈) | ❌ 생성 필요 (파일 없음)

### 🟡 UR (초월 - Gold)

| 상태 | 이름 (ID) | 월드 | 컨셉 & 핵심 프롬프트 |
| :--- | :--- | :--- | :--- |
| ✅ | **제우스** (`god_zeus`) | OLYMPUS | 번개의 여신, 은발, 토가 드레스, 복근, 오만한 표정 <br> `female thunder goddess, massive lightning bolt, regal toga, electric aura` |
| ✅ | **크로노스** (`time_lord_chronos`) | OLYMPUS | 시간의 지배자, 오드아이, 시계태엽 코르셋, 얀데레 <br> `heterochromia, clock gears, hourglass, time freeze effect` |
| ✅ | **바하무트** (`dragon_ancient`) | SHANGRILA | 태초의 용, 은발, 용비늘 갑옷, 거대한 날개, 도서관 <br> `ancient dragon girl, tome with runes, dragon scale armor` |
| ❌ ([Plan](file:///C:/Users/CTS_Sol/.gemini/antigravity/brain/33ff88a8-b2c8-4bd4-a70b-5c65df5b9177/gaia_image_plan.md)) | **창조주 가이아** (`creator_gaia`) | WILD | 태초의 야성녀, 나뭇잎 비키니, 태닝 피부 <br> `wild messy hair, leaf bikini armor, tanned skin, tribal` |
| ✅ | **티아마트** (`dragon_chaos`) | ABYSS | 혼돈의 용희, 흑적색 머리, 비늘 갑옷, 압도적 글래머 <br> `chaos dragon, black scale armor, massive wings, seductive` |
| ✅ | **에레보스** (`void_emperor`) | ABYSS | 공허의 여제, 시스루 그림자 드레스, 순백의 눈 <br> `void empress, translucent shadow dress, white glowing eyes` |
| ✅ | **오딘** (`god_odin`) | ASGARD | 최고신, 안대, 룬 갑옷, 궁니르, 까마귀 <br> `one eye patch, silver hair, rune armor, gungnir spear` |
| ⏳ (8/10) | **니알라토텝** (`god_nyarlathotep`) | ABYSS | 기어다니는 혼돈, 간호사/메이드 변장, 촉수, 광기 <br> `naughty nurse/maid, spiral eyes, shadow tentacles, glitch effect` |
| ❌ ([Plan](file:///C:/Users/CTS_Sol/.gemini/antigravity/brain/33ff88a8-b2c8-4bd4-a70b-5c65df5b9177/cthulhu_image_plan.md)) | **크툴루** (`god_cthulhu`) | ABYSS | 심해의 여왕, 녹색 머리, 비키니 아머 vs 고스 로리 <br> `deep sea queen, green scale bikini armor, dragon wings` |
| ❌ ([Plan](file:///C:/Users/CTS_Sol/.gemini/antigravity/brain/33ff88a8-b2c8-4bd4-a70b-5c65df5b9177/gaia_image_plan.md)) | **대지의 여신 가이아** (`god_gaia`) | OLYMPUS | 풍요의 여신, 그리스 드레스, 압도적 글래머 <br> `greek goddess, white/green dress, motherly, massive curves` |

### 🟠 SR (전설 - Orange)

| 상태 | 이름 (ID) | 월드 | 컨셉 & 핵심 프롬프트 |
| :--- | :--- | :--- | :--- |
| ✅ | **카밀라** (`vampire_lord`) | ABYSS | 뱀파이어 로드, 고딕 롤리타, 와인잔 <br> `vampire lord, gothic lolita, red wine, rose petals` |
| ✅ | **쉐도우 닌자** (`ninja_shadow`) | SHANGRILA | 쿠노이치, 망사, 잠입 액션 <br> `shadow ninja, fishnet outfit, katana, cherry blossoms` |
| 🔄 | **아틀라스** (`titan_atlas`) | OLYMPUS | 거신, 태닝 피부, 근육질, 기계 건틀릿 <br> `titan, tanned muscle, mechanical gauntlets, celestial globe` |
| 🔄 | **브륀힐트** (`valkyrie`) | ASGARD | 발키리, 은색 갑옷, 깃발 <br> `valkyrie, silver armor, holding banner, heroic` |
| 🔄 | **그로트** (`giant_hill`) | ASGARD | 언덕 거인, 원시 부족 의상, 거대 방패, 치유계 <br> `hill giant, primitive leather, massive shield, gentle` |
| 🔄 | **루루** (`kraken_baby`) | ABYSS | 크라켄 아이돌, 홀로그램 의상, 텐타클 트윈테일 <br> `kraken idol, holographic sailor suit, tentacle hair` |
| ❌ | **미호** (`fox9`) | SHANGRILA | 구미호, 개량 한복, 여우불 <br> `nine-tailed fox, hanbok, fox fire, seductive` |
| ❌ | **키메라** (`chimera`) | WILD | 사자갈기+염소뿔+뱀꼬리, 가죽 갑옷 <br> `chimera girl, lion mane, snake tail, beast hide armor` |

### 🟣 Special / 🔵 Rare / ⚪ Normal (요약)

| 등급 | 상태 | 이름 (ID) | 컨셉 요약 |
| :--- | :--- | :--- | :--- |
| **Sp** | 🔄 | **화염 마법사** | 노출 로브, 화염 지팡이 |
| **Sp** | 🔄 | **유니콘** | 파스텔톤, 순수, 뿔 |
| **Sp** | ✅ | **스켈레톤 나이트** | 부서진 갑옷, 창백한 피부 |
| **Sp** | ✅ | **물의 정령** | 물방울 드레스, 투명 피부 |
| **Sp** | ❌ | **드워프 대장장이** | 글래머러스, 가죽 앞치마, 망치 |
| **Sp** | ❌ | **고대 엔트** | 나무 피부, 나뭇잎 의상, 모성애 |
| **Ra** | ✅ | **강철 독수리** | 파일럿 고글, 강철 깃털 |
| **Ra** | ✅ | **만년설 곰** | 흰 털옷, 졸린 표정 |
| **Ra** | ✅ | **꽃의 요정** | 꽃잎 드레스, 작은 날개 |
| **Ra** | ✅ | **다이어 울프** | 부족 전사, 늑대 귀/꼬리 |
| **Ra** | ✅ | **진흙 골렘** | 진흙 텍스처, 멍한 표정 |
| **Ra** | ❌ | **켄타우로스** | 반인반마, 궁수, 스포티 |
| **Ra** | ❌ | **판다 수도승** | 뚱랑이(통통), 도복, 대나무 |
| **Ra** | ❌ | **가고일** | 석조 피부, 고딕, 웅크린 자세 |
| **No** | ✅ | **시궁쥐, 박쥐, 조약돌** | 심플한 의인화 (완료) |
| **No** | ❌ | **구름, 눈송이, 먹물** | 정령 컨셉 (생성 필요) |

---
