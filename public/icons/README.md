# 아이콘 및 파비콘 가이드

이 폴더에 MeetingMind 아이콘과 파비콘들을 넣어주세요.

## 필요한 파비콘 파일들

### 1. 기본 파비콘
**파일명:** `favicon.ico`
- **크기:** 16x16, 32x32, 48x48px (멀티 사이즈)
- **형식:** ICO
- **설명:** 브라우저 탭에 표시되는 기본 파비콘

### 2. PNG 파비콘 (다양한 크기)
**파일명:** `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`
- **크기:** 16x16, 32x32, 48x48px
- **형식:** PNG
- **배경:** 투명 배경
- **설명:** 고해상도 파비콘

### 3. Apple Touch Icon
**파일명:** `apple-touch-icon.png`
- **크기:** 180x180px
- **형식:** PNG
- **배경:** 단색 배경 (iOS가 자동으로 둥근 모서리 적용)
- **설명:** iOS 홈 화면에 추가될 때 사용

### 4. Android Chrome Icon
**파일명:** `android-chrome-192x192.png`, `android-chrome-512x512.png`
- **크기:** 192x192, 512x512px
- **형식:** PNG
- **배경:** 투명 배경
- **설명:** Android Chrome 브라우저에서 사용

### 5. MS Tile Icon
**파일명:** `mstile-150x150.png`
- **크기:** 150x150px
- **형식:** PNG
- **배경:** 투명 배경
- **설명:** Windows 10 타일에서 사용

### 6. Safari Pinned Tab Icon
**파일명:** `safari-pinned-tab.svg`
- **크기:** 벡터 (권장: 16x16 기준)
- **형식:** SVG
- **색상:** 단색 (검은색)
- **설명:** Safari 고정 탭에서 사용

## 추가 아이콘 파일들

### 1. PWA 아이콘 (웹 앱)
**파일명:** `pwa-192x192.png`, `pwa-512x512.png`
- **크기:** 192x192, 512x512px
- **형식:** PNG
- **배경:** 투명 배경
- **설명:** Progressive Web App 매니페스트에서 사용

### 2. 소셜 미디어 아이콘
**파일명:** `social-icon.png`
- **크기:** 400x400px
- **형식:** PNG
- **배경:** 투명 배경
- **설명:** 소셜 미디어 프로필에서 사용

### 3. 앱 스토어 아이콘
**파일명:** `app-store-icon.png`
- **크기:** 1024x1024px
- **형식:** PNG
- **배경:** 투명 배경
- **설명:** iOS App Store에서 사용

## 생성 도구 추천

### 파비콘 생성 도구
1. **Favicon.io** - https://favicon.io
2. **RealFaviconGenerator** - https://realfavicongenerator.net
3. **Favicon Generator** - https://favicon-generator.org

### 아이콘 편집 도구
1. **Figma** - 벡터 그래픽 편집
2. **Adobe Illustrator** - 전문 벡터 편집
3. **Canva** - 간단한 아이콘 제작

## 디자인 가이드라인

### 파비콘 디자인 원칙
- **단순함:** 16x16px에서도 식별 가능해야 함
- **대비:** 배경과 명확한 대비
- **일관성:** 브랜드 아이덴티티 유지
- **가독성:** 작은 크기에서도 명확해야 함

### 색상 가이드
- **Primary:** #111827 (Gray-900)
- **Secondary:** #6B7280 (Gray-500)
- **Accent:** #3B82F6 (Blue-500)
- **Background:** #FFFFFF (White)

### 아이콘 스타일
- **스타일:** 미니멀, 모던
- **모서리:** 둥근 모서리 (선택사항)
- **그림자:** 자연스러운 그림자 효과
- **형태:** 정사각형 또는 원형

## 메타데이터 설정

### HTML Head 태그에 추가할 내용
```html
<link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#111827" />
<meta name="msapplication-TileColor" content="#111827" />
<meta name="msapplication-TileImage" content="/icons/mstile-150x150.png" />
<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#111827" />
```

### Web App Manifest (manifest.json)
```json
{
  "name": "MeetingMind",
  "short_name": "MeetingMind",
  "icons": [
    {
      "src": "/icons/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#111827",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## 최종 파일 구조
```
public/icons/
├── README.md
├── favicon.ico                 # 기본 파비콘
├── favicon-16x16.png          # 16x16 파비콘
├── favicon-32x32.png          # 32x32 파비콘
├── favicon-48x48.png          # 48x48 파비콘
├── apple-touch-icon.png       # iOS 홈 화면 아이콘
├── android-chrome-192x192.png # Android 192x192 아이콘
├── android-chrome-512x512.png # Android 512x512 아이콘
├── mstile-150x150.png         # Windows 타일 아이콘
├── safari-pinned-tab.svg      # Safari 고정 탭 아이콘
├── pwa-192x192.png            # PWA 192x192 아이콘
├── pwa-512x512.png            # PWA 512x512 아이콘
├── social-icon.png            # 소셜 미디어 아이콘
└── app-store-icon.png         # 앱 스토어 아이콘
```

## 최적화 팁
1. **파일 크기:** 가능한 한 작게 유지
2. **압축:** TinyPNG 등으로 압축
3. **형식:** 용도에 맞는 형식 선택
4. **테스트:** 다양한 디바이스에서 확인
5. **캐시:** 브라우저 캐시 설정 최적화

아이콘 파일들을 업로드한 후 layout.tsx와 manifest.json이 자동으로 업데이트됩니다! 