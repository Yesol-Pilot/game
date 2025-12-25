# 🎨 크리처 이미지 생성 마스터 가이드

> **프로젝트**: 멀티버스 크리처 랩
> **스타일 기준**: 블루아카이브 + 니케 스타일의 일본 애니메이션풍 2D 일러스트
> **타겟**: 성인 서브컬처 매니아
> **최종 검토일**: 2025-12-22

---

## 📁 파일 저장 규칙

| 항목 | 값 |
|------|-----|
| **공식 저장 위치** | `images/` |
| **임시/백업 위치** | `images/temp/` (통합 관리) |
| **파일 형식** | PNG 또는 JPG |
| **파일명 규칙** | `creature_[id].png` |
| **권장 크기** | 512x768 또는 768x1024 (세로형) |

> [!IMPORTANT]
> **아카이브 규칙**: 기존 이미지를 교체하거나 더 이상 사용하지 않는 경우,
> 해당 이미지를 삭제하지 말고 반드시 `images/temp/` 폴더로 이동하여 보관합니다.

---

## 🚫 절대 규칙 (위반 시 재생성)

1. **텍스트 금지**: 이름, 레벨, 대사 등 어떠한 글자도 포함 금지
2. **UI 요소 금지**: 카드 테두리, 아이콘, 별 등급 표시 금지
3. **전신 필수**: 머리부터 발끝까지 잘리지 않고 화면에 담김
4. **캐릭터 비율**: 화면의 75~85% 차지
5. **스타일**: 블루아카이브/니케 스타일의 2D 애니메이션풍

---

## 📋 공통 프롬프트

### Positive (필수 - 퀄리티 부스터)

```
(best quality:1.4), (masterpiece:1.4), (official art:1.3),
(blue archive art style:1.5), (nikke art style:1.4), (hyung-tae kim style:1.3),
(cel shading:1.3), (2d anime:1.4), vibrant colors, high contrast,
full body shot, solo,
perfect anatomy, (thick thighs:1.3), (wide hips:1.3), (small waist:1.2),
detailed beautiful face, expressive eyes, blushing,
(glossy skin:1.2), (oiled skin:1.1), detailed clothes texture
```

### Negative (필수 - 실사 방지)

```
(3d:1.5), (realistic:1.5), (photorealistic:1.5), (cgi:1.5), (render:1.5), 
(lowres:1.4), (worst quality:1.4), (bad quality:1.4),
simple background, white background,
chibi, SD, deformed, distorted, disfigured,
bad anatomy, bad hands, missing fingers, extra digits,
text, watermark, signature, username, artist name,
western comic style, sketch, messy lines
```

---

## ✨ 검증된 성공 프롬프트 템플릿 (2024-12-24)

> [!TIP]
> **오딘 v9에서 검증됨** - 섹시 + 적당한 노출 + 블루아카이브/니케 스타일

### ✨ UR/SSR 하이엔드 템플릿 (섹시 & 글래머)

```
(masterpiece:1.5), (best quality:1.5), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, [캐릭터명] inside [배경],
extremely beautiful detailed face, captivating eyes, looking at viewer,
(voluptuous body:1.4), (huge breasts:1.3), (extremely thick thighs:1.4), (wide hips:1.4), (tiny waist:1.2),
[의상 묘사 - 예: latex bodysuit, revealing armor, torn clothes],
[포즈/상황 - 예: dynamic pose, kneeling, reaching out],
(cinematic lighting:1.3), (backlighting:1.2), tyndall effect, lens flare,
glowing particles, magical aura, floating objects,
vibrant saturation, cel shading, highly detailed texture
```

**핵심**: 큰 눈 + 볼륨 있는 몸매 + 갑옷 비키니/드레스 + 배 노출 OK + 허벅지 슬릿

---

## 📋 이미지 상태 범례

| 상태 | 의미 |
|------|------|
| ✅ | 완료 - 규칙 준수 |
| ⚠️ | 검토 필요 - 스타일 부분 불일치 |
| ❌ | 생성 필요 - 파일 없음 |
| 🔄 | 재생성 필요 - 규칙 위반 |

---

# 🟡 UR (초월) - Gold

## 천둥의 신 제우스

| 파일명 | `creature_god_zeus.png` |
|--------|-------------------------|
| 월드 | OLYMPUS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.4), (nikke art style:1.3), (masterpiece:1.4), (best quality:1.4), (8k resolution:1.2),
full body shot, solo, female thunder goddess zeus,
extremely detailed face, perfect anatomy, divine mature beauty,
long flowing white-silver hair crackling with electricity,
regal Greek goddess toga dress with gold accents exposing shoulders and thighs,
holding a massive golden lightning bolt, six-pack abs visible through sheer fabric,
majestic golden crown, electric aura and lightning bolts surrounding body,
lens flare effects, prismatic light particles,
multi-layered background with olympus temple ruins and storm clouds,
golden divine glow, thick thighs, wide hips,
confident dominating expression, looking down at viewer,
(cinematic composition:1.3), (god rays:1.2)
```

---

## 시간의 지배자 크로노스

| 파일명 | `creature_time_lord_chronos.png` |
|--------|----------------------------------|
| 월드 | OLYMPUS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.4), (nikke art style:1.3), (masterpiece:1.4), (best quality:1.4), (8k resolution:1.2),
full body shot, solo, female time goddess chronos,
extremely detailed face, perfect anatomy, cold and elegant beauty,
long platinum blonde hair with clock gear ornaments,
heterochromia eyes one gold one blue,
revealing mechanical corset dress with clock gears and see-through panels,
holding a giant ornate hourglass with sand freezing mid-fall,
time freeze effect with frozen particles in mid-air, crystalline ice elements,
multiple clock faces floating in background,
void dimension with distorted space, hourglass silhouette,
cold blue and gold color scheme, seductive yandere expression,
slender figure, thick thighs, (cinematic composition:1.3), (time stop effect:1.2), prismatic light refraction
```

---

## 최고신 오딘

| 파일명 | `creature_god_odin.png` |
|--------|-------------------------|
| 월드 | ASGARD |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.4), (nikke art style:1.3), (masterpiece:1.4), (best quality:1.4), (8k resolution:1.2), 
full body shot, solo, female allfather goddess odin, 
extremely detailed face, perfect anatomy, mature wise beauty with one eye patch over left eye, 
long flowing silver-white hair with raven feathers woven in, 
elaborate norse armor with gold rune engravings exposing midriff and thighs, 
wearing fur-lined dark blue cape, holding Gungnir golden spear radiating divine light, 
two ravens Huginn and Muninn flying around her shoulders, 
rune magic circles floating around, Yggdrasil world tree silhouette in distant background, 
northern lights aurora borealis in night sky, snow particles, 
thick thighs, wide hips, calm commanding expression looking down at viewer, 
voluptuous figure, golden divine glow, lens flare effects, prismatic light particles, 
(cinematic composition:1.3), (god rays:1.2)
```

---

## 태초의 용 바하무트

| 파일명 | `creature_dragon_ancient.png` |
|--------|-------------------------------|
| 월드 | SHANGRILA |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.4), (nikke art style:1.3), (masterpiece:1.4), (best quality:1.4), (8k resolution:1.2),
full body shot, solo, female ancient dragon bahamut, extremely detailed,
wise mature beauty, long silver hair with golden streaks, dragon horns and ears,
revealing dragon scale armor dress, holding an ancient tome with glowing runes,
massive dragon wings spread wide, surrounded by floating ancient texts and fire particles,
ancient library ruins background, dynamic powerful aura,
thick thighs, wide hips, masterpiece, best quality, 8k,
(cinematic composition:1.3), lens flare
```

---

## 공허의 여제 에레보스

| 파일명 | `creature_void_emperor.png` |
|--------|------------------------------|
| 월드 | ABYSS |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.4), (nikke art style:1.3), (masterpiece:1.4), (best quality:1.4), (8k resolution:1.2),
full body shot, solo, female void empress erebos,
extremely detailed face, perfect anatomy, ethereal ghostly beauty,
translucent pale skin, long flowing black hair dissolving into void particles at ends,
black revealing dress made of solidified darkness and void energy,
eyes glowing pure white with no pupils, black tears streaming,
floating in absolute void space, reality distorting around her,
everything being pulled toward her, obsessive yandere expression,
multiple shadowy hands reaching out from the void, dark matter particles,
thick thighs, wide hips, exposed pale skin,
(cinematic composition:1.3), (void particles:1.3),
multi-dimensional void background with cracks in reality
```

---

## 혼돈의 용희 티아마트

| 파일명 | `creature_dragon_chaos.png` |
|--------|------------------------------|
| 월드 | ABYSS |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.4), (nikke art style:1.3), (masterpiece:1.4), (best quality:1.4), (8k resolution:1.2),
full body shot, solo, female chaos dragon tiamat,
extremely detailed face, perfect anatomy, seductive dark beauty,
long black and crimson gradient hair flowing like flames,
dragon horns with red glow, revealing black scale armor with red accents barely covering body,
large dragon wings spread wide, long serpentine dragon tail wrapped around throne,
sitting on obsidian throne surrounded by primordial chaos,
swirling void particles and dark fire, multicolor chaos energy,
golden eyes with slit pupils, yandere smile,
voluptuous figure, thick thighs, wide hips, exposed midriff,
(cinematic composition:1.3), (particle effects:1.3),
multi-layered chaotic void background
```

---

## 창조주 가이아

| 파일명 | `creature_creator_gaia.png` |
|--------|------------------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.4), (nikke art style:1.3), (masterpiece:1.4), (best quality:1.4), (8k resolution:1.2),
full body shot, solo, female mother earth goddess gaia,
extremely detailed face, perfect anatomy, mature motherly beauty with gentle expression,
long flowing green hair with flowers and vines growing through it,
translucent dress made of leaves and petals exposing curves, barefoot standing on lush grass,
animals gathering around feet, massive world tree behind,
floating islands and waterfalls in background,
soft golden sunlight, nature spirits and butterflies, life energy particles glowing green and gold,
soft generous curves, large breasts, thick thighs, wide hips,
nurturing warm expression, (cinematic composition:1.3), (volumetric lighting:1.2), prismatic rainbow particles
```

---

# 🔴 SSR (신화) - Red

## 대천사 미카엘

| 파일명 | `creature_angel_arch.png` |
|--------|---------------------------|
| 월드 | OLYMPUS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.4), (nikke art style:1.2), (cinematic lighting:1.3),
full body shot, solo, female archangel michael,
radiant silver plate armor with gold trim and exposed midriff,
six large majestic white wings spreading out, holding a burning holy sword,
intense holy aura, lens flare, divine light beams from above,
heavenly sky background with floating ruins, dynamic angle,
looking down with authority, masterpiece, best quality, 8k,
extremely detailed, beautiful face, glowing eyes, thick thighs, wide hips
```

---

## 종말의 늑대 펜리르

| 파일명 | `creature_fenrir.png` |
|--------|------------------------|
| 월드 | ASGARD |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.4), (nikke art style:1.2), (cinematic lighting:1.3), 
full body shot, solo, female fenrir wolf girl, 
muscular athletic body, long wild silver-blue hair, wolf ears and massive fluffy tail, 
broken chains wrapped around arms and legs, 
revealing dark fur and leather armor with ice crystals growing, 
feral golden eyes with slit pupils, sharp fangs showing in snarl, 
ice breath particles around mouth, frozen wasteland background with shattered chains, 
aggressive powerful stance on all fours, 
masterpiece, best quality, 8k, extremely detailed, thick thighs, toned abs, fierce wild expression
```

---

## 불멸의 화조 페이

| 파일명 | `creature_phoenix_eternal.png` |
|--------|--------------------------------|
| 월드 | SHANGRILA |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.4), (nikke art style:1.2), (cinematic lighting:1.3),
full body shot, solo, female eternal phoenix,
long flowing orange-red hair turning into flames at tips,
dress made of burning feathers and red silk with high slit exposing legs,
wings of pure fire spreading wide, surrounded by swirling fire vortex,
rising from ashes, volcanic landscape background, intense orange and red glow,
dynamic pose reaching upwards, masterpiece, best quality, 8k,
beautiful face, thick thighs, wide hips, vibrant colors
```

---

## 마왕 바알

| 파일명 | `creature_demon_king.png` |
|--------|---------------------------|
| 월드 | ABYSS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.4), (nikke art style:1.2), (cinematic lighting:1.3),
full body shot, solo, female demon king baal,
dark gothic regal dress with military accents exposing cleavage and thighs,
large curved demon horns, bat-like wings, creating dark energy sphere in hand,
purple and black aura, particles of darkness,
sitting arrogantly on a floating obsidian throne,
dark castle interior background with red moonlight, mischievous expression,
masterpiece, best quality, 8k, extremely detailed, glowing red eyes, thick thighs, wide hips
```

---

## 폭염의 패왕 이그니스

| 파일명 | `creature_dragon_drake.png` |
|--------|------------------------------|
| 월드 | WILD |
| 상태 | 🔄 재생성 필요 (SR→SSR 승급) |

```
(blue archive art style:1.4), (nikke art style:1.2), (cinematic lighting:1.3),
full body shot, solo, female fire dragon king ignis,
red dragon scale armor with exposed midriff and thighs,
holding a massive flaming dragon lance, dragon horns and large wings,
long fiery red hair flowing up, surrounded by fire tornado and magma rocks,
volcanic battlefield background, sharp focus, high saturation,
masterpiece, best quality, 8k, tsundere expression with slight blush, thick thighs, wide hips
```

---

# 🟠 SR (전설) - Orange

## 거신 아틀라스

| 파일명 | `creature_titan_atlas.png` |
|--------|----------------------------|
| 월드 | OLYMPUS |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.4), (nikke art style:1.2),
full body shot, solo, female titan atlas,
tall and muscular amazon warrior physique, tanned skin,
heavy mechanical gauntlets, athletic wear with exposed abs,
holding a miniature celestial globe, earth and rock debris floating around,
golden aura of strength, mountaintop background with clouds beneath,
strong expression with confident smile, masterpiece, best quality, 8k,
defined abs, thick thighs, wide hips, shiny skin texture
```

---

## 전장의 깃발 브륀힐트

| 파일명 | `creature_valkyrie.png` |
|--------|-------------------------|
| 월드 | ASGARD |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.4), (nikke art style:1.2),
full body shot, solo, female valkyrie brunhilde,
silver plate armor with blue fabric and exposed thighs, winged helmet,
holding a large banner and sword, white feathers falling, radiant light particles,
sky battlefield background, heroic standing pose,
masterpiece, best quality, 8k, cool beauty, thick thighs, wide hips, shiny metal
```

---

## 대지의 방패 그로트

| 파일명 | `creature_giant_hill.png` |
|--------|---------------------------|
| 월드 | ASGARD |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.4), (nikke art style:1.2),
full body shot, solo, female hill giant groot,
tall and gentle appearance, brown hair with flower accessories,
primitive cute leather outfit exposing stomach and thighs, holding a massive stone shield,
soft green nature magic particles, forest hill background, warm sunlight,
masterpiece, best quality, 8k, soft curves, thick thighs, wide hips, gentle motherly expression, large breasts
```

---

## 구미호 미호

| 파일명 | `creature_fox9.png` |
|--------|----------------------|
| 월드 | SHANGRILA |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.4), (nikke art style:1.2), 
full body shot, solo, female nine-tailed fox miho, 
nine large fluffy white-pink gradient tails fanning out behind, fox ears perked up, 
long flowing pink-silver gradient hair with traditional ornaments, 
revealing traditional korean hanbok style dress with modern twist exposing shoulders and legs, 
holding blue fox fire wisps in palm, seductive playful expression with sly smile, 
cherry blossom petals falling, moonlit traditional palace garden background, 
masterpiece, best quality, 8k, highly detailed, thick thighs, wide hips, alluring charm
```

---

## 진홍의 여왕 카밀라

| 파일명 | `creature_vampire_lord.png` |
|--------|------------------------------|
| 월드 | ABYSS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.4), (nikke art style:1.2),
full body shot, solo, female vampire lord camilla,
elegant black and red gothic lolita dress with high leg slit, pale skin,
holding a glass of red wine, red rose petals falling, blood red magic aura,
gothic mansion hallway with moonlight, mysterious seductive expression,
masterpiece, best quality, 8k, red eyes, thick thighs, wide hips
```

---

## 심해의 아이돌 루루

| 파일명 | `creature_kraken_baby.png` |
|--------|----------------------------|
| 월드 | ABYSS |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.4), (nikke art style:1.2),
full body shot, solo, female kraken idol lulu,
cute squid girl, tentacles forming twintail hairstyle,
shiny holographic sailor idol outfit with short skirt,
holding a microphone with star ornaments, bubbles and water droplets effects,
deep ocean stage background with colorful spotlights,
energetic winking pose making heart sign,
masterpiece, best quality, 8k, wet skin effect, thick thighs, wide hips, colorful
```

---

## 키메라

| 파일명 | `creature_chimera.png` |
|--------|-------------------------|
| 월드 | WILD |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.4), (nikke art style:1.2), 
full body shot, solo, female chimera monster girl, 
lion mane styled golden hair, small curved goat horns on head, 
long serpentine dragon tail with snake head at tip, 
revealing beast hide armor with chains and metal accents, 
shadow silhouettes of three different beast heads behind her, 
standing aggressively on rocky wasteland, fire breath from mouth, 
masterpiece, best quality, 8k, highly detailed, muscular athletic body, thick thighs, wild primal beauty, fierce expression
```

---

# 🟣 Special (영웅) - Purple

## 화염 마법사

| 파일명 | `creature_mage_flame.png` |
|--------|---------------------------|
| 월드 | OLYMPUS |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.3), full body shot, solo, female flame mage,
wizard robe with exposed midriff and legs, holding a flaming staff,
fire magic circles, purple cape, red and orange color scheme,
magic academy background, masterpiece, best quality, detailed, thick thighs
```

---

## 어린 유니콘

| 파일명 | `creature_unicorn_young.png` |
|--------|------------------------------|
| 월드 | OLYMPUS |
| 상태 | 🔄 재생성 필요 (스타일 불일치) |

```
(blue archive art style:1.3), full body shot, solo, female young unicorn girl,
white dress with rainbow accents, unicorn horn glowing, flowing pastel hair,
healing magic sparkles, flower meadow background with rainbow,
innocent cute expression, masterpiece, best quality, detailed, soft curves
```

---

## 드워프 대장장이

| 파일명 | `creature_dwarf.png` |
|--------|----------------------|
| 월드 | ASGARD |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.3), full body shot, solo, female dwarf blacksmith, 
short and curvy body with generous proportions, 
long braided red-orange hair with metal beads, freckled face, 
leather apron over revealing work outfit exposing cleavage and arms, 
holding glowing rune-inscribed hammer, sparks and embers flying, 
forge background with anvil and magical weapons, 
determined proud expression, soot marks on skin, 
masterpiece, best quality, detailed, thick thighs, wide hips
```

---

## 그림자 닌자

| 파일명 | `creature_ninja_shadow.png` |
|--------|------------------------------|
| 월드 | SHANGRILA |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.3), full body shot, solo, female shadow ninja,
revealing ninja outfit with fishnet, katana in hand, shadow cloak effect,
cherry blossom petals, purple and black color scheme,
Japanese castle rooftop night background, masterpiece, best quality, detailed, thick thighs
```

---

## 스켈레톤 나이트

| 파일명 | `creature_knight_skeleton.png` |
|--------|--------------------------------|
| 월드 | ABYSS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.3), full body shot, solo, female skeleton knight,
ghostly pale skin visible under damaged armor, glowing blue eyes,
tattered cape, holding ancient sword, dark castle ruins background,
eerie blue flame particles, masterpiece, best quality, detailed, slender figure
```

---

## 고대 엔트

| 파일명 | `creature_ent.png` |
|--------|---------------------|
| 월드 | WILD |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.3), full body shot, solo, female ancient ent treant, 
humanoid figure made of bark and living wood, 
long branch-like hair with green leaves and small flowers growing, 
bark skin texture with moss patches, glowing green nature energy veins, 
revealing outfit made of wrapped vines and large leaves, 
ancient forest background with sunbeams through canopy, 
serene motherly expression, butterflies and small birds around, 
masterpiece, best quality, detailed, curvy natural figure
```

---

## 물의 정령

| 파일명 | `creature_elemental_water.png` |
|--------|--------------------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.3), full body shot, solo, female water elemental,
translucent blue skin, water droplet dress barely covering body,
floating water orbs, flowing water hair, underwater temple background,
serene expression, masterpiece, best quality, detailed, thick thighs, curvy figure
```

---

# 🔵 Rare (희귀) - Blue

## 켄타우로스 정찰병

| 파일명 | `creature_centaur.png` |
|--------|-------------------------|
| 월드 | OLYMPUS |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.2), full body shot, solo, female centaur scout, 
horse lower body with brown coat and white socks, 
athletic human upper body, short brown hair tied back, 
leather archer outfit with exposed midriff, holding curved bow, quiver on back, 
forest trail background with greek ruins, spirited energetic expression, 
masterpiece, detailed, athletic figure
```

---

## 강철 독수리

| 파일명 | `creature_eagle_iron.png` |
|--------|---------------------------|
| 월드 | ASGARD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.2), full body shot, solo, female iron eagle harpy,
metallic feathers on wings and back, aviator outfit, sharp talons,
soaring pose, mountain peak background, silver and blue colors, masterpiece, detailed
```

---

## 만년설 곰

| 파일명 | `creature_bear_ice.png` |
|--------|-------------------------|
| 월드 | ASGARD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.2), full body shot, solo, female ice bear girl,
white fur coat and ears, cozy winter outfit, ice magic in palm,
sleepy cute expression, snowy mountain background, white and blue colors,
masterpiece, detailed, soft curves
```

---

## 꽃의 요정

| 파일명 | `creature_flower_fairy.png` |
|--------|------------------------------|
| 월드 | SHANGRILA |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.2), full body shot, solo, female flower fairy,
tiny wings with petal patterns, flower petal dress,
holding glowing pollen, garden background with oversized flowers,
cheerful expression, masterpiece, detailed, petite figure
```

---

## 판다 수도승

| 파일명 | `creature_panda.png` |
|--------|----------------------|
| 월드 | SHANGRILA |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.2), full body shot, solo, female panda monk, 
panda ears and small fluffy tail, black and white color scheme, 
long black hair with white streaks, round gentle face with dark eye patches, 
loose traditional monk robes with exposed shoulders and bamboo pattern, 
holding bamboo staff, bamboo grove temple background, 
peaceful wise expression with closed eyes smile, 
masterpiece, detailed, soft chubby curves
```

---

## 석상 가고일

| 파일명 | `creature_gargoyle.png` |
|--------|-------------------------|
| 월드 | ABYSS |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.2), full body shot, solo, female gargoyle, 
grey stone skin texture with cracks showing glowing purple lines inside, 
large bat-like stone wings folded, curved horns, pointed ears, 
revealing stone armor fragments with gothic design, long stone tail, 
crouching on gothic cathedral ledge overlooking city, 
moonlit night background with storm clouds, 
fierce guardian expression with glowing purple eyes, 
masterpiece, detailed
```

---

## 다이어 울프

| 파일명 | `creature_wolf_dire.png` |
|--------|--------------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.2), full body shot, solo, female dire wolf girl,
wolf ears and tail, tribal warrior outfit, holding bone axe,
fierce expression, howling at moon, dark forest background,
blue and grey colors, masterpiece, detailed
```

---

## 진흙 골렘

| 파일명 | `creature_golem_mud.png` |
|--------|--------------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.2), full body shot, solo, female mud golem,
clay-like skin texture, earth element design, simple but curvy figure,
glowing rune on forehead, swamp background, emotionless expression, masterpiece, detailed
```

---

# 🟢 Unique (고급) - Green

## 희미한 위스프

| 파일명 | `creature_wisp_faint.png` |
|--------|---------------------------|
| 월드 | OLYMPUS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.1), full body shot, solo, female wisp spirit,
tiny glowing body made of light, simple white dress,
floating in dark forest, single point of light, soft glow,
simple design, minimal details
```

---

## 고블린 정찰병

| 파일명 | `creature_goblin_scout.png` |
|--------|------------------------------|
| 월드 | ABYSS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.1), full body shot, solo, female goblin scout,
green skin, pointy ears, small frame, ragged leather outfit,
holding crude dagger, forest cave background, sneaky expression,
simple design
```

---

## 마그마 슬라임

| 파일명 | `creature_slime.png` |
|--------|----------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.1), full body shot, solo, female slime girl,
translucent red-orange body, simple cute humanoid shape,
volcanic cave background, bubbling lava texture, simple expression,
simple design
```

---

## 화난 버섯

| 파일명 | `creature_mushroom_angry.png` |
|--------|-------------------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.1), full body shot, solo, female mushroom girl,
mushroom cap as hat, small cute body, forest outfit,
angry pouting expression, forest background,
simple design
```

---

## 날치

| 파일명 | `creature_fish_flying.png` |
|--------|----------------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.1), full body shot, solo, female flying fish girl,
fin ears and tail, blue and silver scales, simple sailor outfit,
jumping out of water pose, ocean background,
simple design
```

---

# ⚪ Normal (일반) - Grey

## 구름 솜사탕

| 파일명 | `creature_cloud_puff.png` |
|--------|---------------------------|
| 월드 | OLYMPUS |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.2), full body shot, solo, female cloud spirit puff, 
small cute body made of fluffy white clouds, pastel blue and pink gradient hair, 
simple white flowing dress with cloud patterns, tiny translucent wings, 
floating in blue sky background with more clouds and rainbow, 
innocent happy expression, sparkles around, 
simple design, soft colors
```

---

## 눈송이 정령

| 파일명 | `creature_snow.png` |
|--------|----------------------|
| 월드 | ASGARD |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.2), full body shot, solo, female snow spirit, 
small petite body with pale translucent blue skin, 
short crystalline ice-blue hair with snowflake ornaments, 
simple white and ice blue dress with frost patterns, 
floating snowflakes around, snowy winter forest background, 
dreamy sleepy expression, soft glow, 
simple design, cool blue color scheme
```

---

## 먹물 요정

| 파일명 | `creature_ink.png` |
|--------|---------------------|
| 월드 | SHANGRILA |
| 상태 | ❌ 생성 필요 (파일 없음) |

```
(blue archive art style:1.2), full body shot, solo, female ink spirit, 
small body made of flowing black ink with white highlights, 
long flowing ink-black hair dissolving into ink drops at tips, 
simple white hanbok style dress with ink splash patterns, 
holding calligraphy brush, ink drops and brush strokes floating around, 
traditional east asian painting scroll background, 
curious artistic expression, 
simple design, black white and grey color scheme
```

---

## 시궁쥐

| 파일명 | `creature_rat_brown.png` |
|--------|--------------------------|
| 월드 | ABYSS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.0), full body shot, solo, female rat girl,
brown fur ears and tail, simple tattered clothes, small frame,
sewer background, timid expression, simple design, minimal details
```

---

## 작은 박쥐

| 파일명 | `creature_bat_small.png` |
|--------|--------------------------|
| 월드 | ABYSS |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.0), full body shot, solo, female bat girl,
small bat wings, pointy ears, simple dark dress,
cave background at night, curious expression, simple design
```

---

## 조약돌

| 파일명 | `creature_pebble.png` |
|--------|------------------------|
| 월드 | WILD |
| 상태 | ✅ 완료 |

```
(blue archive art style:1.0), full body shot, solo, female rock spirit,
small rocky body, simple stone texture, emotionless expression,
rocky field background, simple design, minimal details
```

---

# ✅ 생성/검토 필요 체크리스트

## ❌ 생성 필요 (파일 없음) - 12개

| 등급 | 파일명 | 이름 |
|------|--------|------|
| UR | `creature_god_odin.png` | 최고신 오딘 |
| SSR | `creature_fenrir.png` | 종말의 늑대 펜리르 |
| SR | `creature_fox9.png` | 구미호 미호 |
| SR | `creature_chimera.png` | 키메라 |
| Special | `creature_dwarf.png` | 드워프 대장장이 |
| Special | `creature_ent.png` | 고대 엔트 |
| Rare | `creature_centaur.png` | 켄타우로스 정찰병 |
| Rare | `creature_panda.png` | 판다 수도승 |
| Rare | `creature_gargoyle.png` | 석상 가고일 |
| Normal | `creature_cloud_puff.png` | 구름 솜사탕 |
| Normal | `creature_snow.png` | 눈송이 정령 |
| Normal | `creature_ink.png` | 먹물 요정 |

## 🔄 재생성 필요 (스타일 불일치) - 10개

| 등급 | 파일명 | 이름 |
|------|--------|------|
| UR | `creature_void_emperor.png` | 공허의 여제 에레보스 |
| UR | `creature_dragon_chaos.png` | 혼돈의 용희 티아마트 |
| SSR | `creature_phoenix_eternal.png` | 불멸의 화조 페이 |
| SSR | `creature_dragon_drake.png` | 폭염의 패왕 이그니스 |
| SR | `creature_titan_atlas.png` | 거신 아틀라스 |
| SR | `creature_valkyrie.png` | 전장의 깃발 브륀힐트 |
| SR | `creature_giant_hill.png` | 대지의 방패 그로트 |
| SR | `creature_kraken_baby.png` | 심해의 아이돌 루루 |
| Special | `creature_mage_flame.png` | 화염 마법사 |
| Special | `creature_unicorn_young.png` | 어린 유니콘 |

---

**총 작업량**: 생성 필요 12개 + 재생성 필요 10개 = **22개**

---

# 🚀 Priority 1: 신규 생성 프롬프트 (최신 반영 - 2025.12.25)

> [!IMPORTANT]
> **스타일 절대 준수**: 
> `(blue archive art style:1.5)`, `(nikke art style:1.4)`, `(otaku culture:1.3)`, `(cel shading:1.3)`
> **Negative**: `(3d:1.5)`, `(realistic:1.5)`

## 🟡 UR / SSR (최우선 작업)

### [SSR] 장난의 신 로키 (`god_loki`)
- **컨셉**: 장난기 넘치는 소악마, 트릭스터, 중성적인 매력의 소녀
- **스타일**: 보라색 & 네온 그린 컬러, 글리치 효과
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female trickster god loki,
mischievous cute face with heterochromia eyes (green and purple), tongue out expression,
short messy green hair with two small horns,
wearing stylish oversized hoodie with rune patterns, thigh high striped socks,
floating magic daggers behind back, glitch digital effects, green magic aura,
jungle gym or chaotic geometric background,
slender body, small chest, playful pose, dynamic camera angle,
(cel shading:1.3), vibrant neon colors, shiny skin
```

### [SSR] 아름다움의 여신 프레야 (`god_freya`)
- **컨셉**: 사랑과 전쟁의 여신, 화려함, 글래머러스
- **스타일**: 핑크 & 골드, 장미, 보석
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female goddess freya,
extremely voluptuous body, (huge breasts:1.4), (wide hips:1.4), (thick thighs:1.4),
long flowing pink-gold gradient hair, beautiful mature face with loving eyes,
wearing revealing bridal-style armor dress with translucent silk,
golden necklace "Brisingamen", surrounded by falling rose petals and golden sparkles,
fantasy garden palace background with soft sunlight,
seductive elegance pose, reaching hand to viewer,
(glossy skin:1.3), (oiled skin:1.2), cinematic lighting
```

### [UR] 세계의 뱀 요르문간드 (`snake_world_jormungandr`)
- **컨셉**: 거대함, 압도적 공포, 차가운 미녀
- **스타일**: 다크 틸(Teal) & 블랙, 물 효과
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female monster girl jormungandr,
pale skin, long teal-green hair resembling seaweed,
wearing tight black latex bodysuit with scales texture,
lower body merging into massive giant snake tail coiling around the world,
ocean storm background with giant waves, rain and lightning,
cold emotionless eyes, holding a giant anchor chain,
(wet skin:1.4), (giantess:1.3), perspective looking up from below,
menacing aura, dark cinematic atmosphere
```

### [SSR] 발키리 대장 군르 (`valkyrie_leader_gunnr`)
- **컨셉**: 전장의 아이돌, 노출이 있는 판타지 아머, 글래머러스, 금발, 파란 눈
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female valkyrie commander gunnr,
(revealing golden bikini armor:1.4), (metal skirt:1.2), (large breasts:1.3), (perfect thighs:1.4),
blonde braided hair with winged headpiece, holding a flag and sword,
sky battlefield background, feathers falling, lens flare, god rays,
confident sexy expression, looking down at viewer,
(exposed skin:1.3), (oiled skin:1.2), heroic anime style
```

### [SSR] 아기 슬레이프니르 (`sleipnir_foal`)
- **컨셉**: 8다리 컨셉 삭제 **(중요)** -> **2다리 육상부 미소녀**, 스피드스터
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female horse girl sleipnir,
(normal two human legs:1.5), (sexy racing queen swimsuit:1.4), (high leg cut:1.4),
grey and silver glossy outfit, knee high boots,
running pose with wind effect, lightning sparks,
long mane-like grey hair, horse ears and tail,
racetrack background, cheerful winking expression, blushing,
speed lines, dynamic motion blur, (cameltoe:1.1), anime cel shading
```

### [SSR] 제천대성 손오공 (`hero_wukong`)
- **컨셉**: 말괄량이, 무술 소녀, 여의봉
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female monkey cloud king wukong,
(tigerskin bikini armor:1.3), (micro denim shorts:1.3), (exposed toned abs:1.3),
red scarf fluttering, holding extending Ruyi Jingu Bang (staff), riding on nimbus cloud,
mischievous confident smile, golden eyes, monkey tail,
mountain peak background with clouds, sun flare,
athletic volupous body, (thighs:1.3), dynamic jumping pose, anime cel shading
```

### [SSR] 달토끼 루나 (`rabbit_moon`)
- **컨셉**: 떡 찧는 토끼, 큐트 & 섹시, 한복 퓨전
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female moon rabbit luna,
white bunny ears, long white hair, red eyes,
(see-through fusion hanbok:1.3), (off-shoulder:1.3), (very short mini skirt:1.3), (exposed legs:1.3),
holding a large pestle, sitting on a crescent moon, night sky background with stars,
soft glow, cute shy expression, blushing,
(thick thighs:1.4), (wide hips:1.2), pastel colors, dreamy atmosphere
```

### [SSR] 공작 왕자 (`peacock_prince`) -> **공작 공주 (Peacock Princess)**
- **컨셉**: 화려함의 극치, 오만함, 깃털 부채
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female peacock princess,
extravagant dress made of peacock feathers (green, blue, gold),
holding a feather fan covering mouth, arrogant elegance,
colorful makeup, jewel accessories,
palace garden background, vibrant multicolored lighting,
breathtaking beauty, detailed feathers texture, sparkling
```

### [UR] 기어다니는 혼돈 니알라토텝 (`god_nyarlathotep`)
- **컨셉**: 형태 없음, 간호사/메이드 변장, 광기
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female nyarlathotep,
disguised as naughty nurse or maid but with eldritch abnormalities,
shadow tentacles emerging from skirt, crazy spiral eyes, yandere smile,
holding a syringe with glowing purple liquid,
chaotic void background with distorted geometry,
dark purple and red filter, glitch effects, horror cute style
```

### [SSR] 숲의 검은 염소 (`god_shub`)
- **컨셉**: 다산의 상징, 모성애(왜곡됨), 촉수
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female shub-niggurath,
mature motherly figure, extremely voluptuous, pregnant appearance (optional) or just very curvy,
wearing dark forest priestess robes, goat horns,
surrounded by small dark blobs (young), forest corrupted by void background,
dark green and black fog, tentacles, eerie atmosphere
```

### [SSR] 황색의 왕 하스터 (`god_hastur`)
- **컨셉**: 노란 옷의 왕, 마스크, 미스터리
```
(masterpiece:1.5), (best quality:1.4), (blue archive art style:1.5), (nikke art style:1.4),
full body shot, solo, female king in yellow hastur,
wearing tattered elegant yellow robes/dress, hood covering hair,
holding a pale mask in hand, revealing beautiful but unearthly face underneath,
tentacles hidden under dress, lost city of carcosa background (twin suns),
mysterious wind, yellow fog, cosmic horror elements
```

---
*End of Guide*

