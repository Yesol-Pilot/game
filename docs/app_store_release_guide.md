# 📱 App Store Release Guide (PWA to Store)

웹 기반 게임(PWA)을 구글 플레이 스토어와 애플 앱스토어에 출시하는 방법입니다.

## 1. Google Play Store (Android)
가장 추천하는 방법은 **TWA (Trusted Web Activity)** 기술을 사용하는 것입니다. 기존 PWA를 그대로 패키징합니다.

### 🚀 준비물
- [ ] **Google Play 개발자 계정**: $25 (1회 결제 / 평생 이용)
- [ ] **Node.js**: 설치됨
- [ ] **Android Studio**: (서명 및 빌드용)

### 🛠️ Bubblewrap (CLI 도구) 사용법
가장 쉬운 방법은 구글 공식 도구인 `bubblewrap`을 사용하는 것입니다.

1. **도구 설치**
   ```bash
   npm install -g @bubblewrap/cli
   ```

2. **프로젝트 초기화**
   ```bash
   mkdir android-build
   cd android-build
   bubblewrap init --manifest https://Yesol-Pilot.github.io/game/manifest.json
   ```
   * 질문에 따라 앱 이름, 패키지 ID (`com.yourname.creaturelab`) 등을 입력합니다.

3. **앱 빌드**
   ```bash
   bubblewrap build
   ```
   * 완료되면 `app-release-bundle.aab` 파일이 생성됩니다. 이 파일을 플레이 스토어 콘솔에 업로드합니다.

4. **Digital Asset Links (검증)**
   * 앱과 웹사이트가 같은 소유자임을 증명해야 합니다.
   * `/.well-known/assetlinks.json` 파일을 웹사이트 루트에 업로드해야 TWA가 활성화됩니다 (상단 주소창 제거).

---

## 2. Apple App Store (iOS)
애플은 PWA를 직접 스토어에 올리는 것을 허용하지 않습니다. **Capacitor** 같은 래퍼(Wrapper)를 사용해야 합니다.

### 🚀 준비물
- [ ] **Apple Developer 계정**: $99 (매년 결제)
- [ ] **Mac Computer**: (Xcode 실행 필수)

### 🛠️ Capacitor 사용법
현재 웹 프로젝트에 Capacitor를 연동합니다.

1. **Capacitor 설치**
   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/ios
   npx cap init
   ```

2. **iOS 플랫폼 추가**
   ```bash
   npx cap add ios
   ```

3. **빌드 및 동기화**
   웹 게임을 빌드한 후 Capacitor에 복사합니다.
   ```bash
   npm run build  (또는 웹 에셋 준비)
   npx cap sync
   ```

4. **Xcode 열기 및 배포**
   ```bash
   npx cap open ios
   ```
   * Xcode가 열리면 서명(Signing)을 설정하고 앱스토어 커넥트(App Store Connect)로 업로드합니다.

---

## 3. 요약 (Recommendation)

| 플랫폼 | 난이도 | 비용 | 추천 방식 |
| :--- | :--- | :--- | :--- |
| **Android** | ⭐ 쉬움 | $25/평생 | **TWA (Bubblewrap)** |
| **iOS** | ⭐⭐⭐ 어려움 | $99/매년 | **Capacitor + Mac 필수** |

**💡 팁:**
우선 접근성이 좋고 비용이 저렴한 **Android(구글 플레이)** 출시를 먼저 시도해보시는 것을 추천합니다. iOS는 맥(Mac)이 없다면 클라우드 빌드 서비스(Ionic Appflow 등)를 써야 해서 복잡할 수 있습니다.
