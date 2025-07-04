# MeetingMind 이미지 가이드

MeetingMind 랜딩 페이지에 사용되는 모든 이미지 파일들의 완전한 가이드입니다.

## 📁 폴더 구조

```
public/
├── README.md                 # 이 파일 - 전체 이미지 가이드
├── manifest.json             # PWA 매니페스트
├── brand/                    # 브랜드 이미지 (로고 등)
├── og/                       # OG(Open Graph) 이미지
├── icons/                    # 파비콘 및 앱 아이콘
├── products/                 # 제품 이미지
└── hardware/                 # 하드웨어 제품 이미지
```

## 🎨 브랜드 이미지 (`/brand/`)

### 필수 로고 파일들
- `logo.svg` - 메인 로고 (Header용)
- `logo-icon.svg` - 아이콘 로고 (Favicon용)
- `logo-dark.svg` - 다크모드 로고 (선택)
- `wordmark.svg` - 텍스트 로고

### 사용 위치
- **Header:** 텍스트 "MeetingMind" → 로고 이미지로 교체 가능
- **Footer:** 아이콘 "M" → 로고 이미지로 교체 가능

## 🌐 OG 이미지 (`/og/`)

### 필수 OG 파일들
- `og-main.jpg` - 메인 페이지 (1200x630px)
- `og-about.jpg` - About 페이지 (1200x630px)
- `og-hardware.jpg` - Hardware 페이지 (1200x630px)
- `og-contact.jpg` - Contact 페이지 (1200x630px)

### 자동 적용 설정
모든 OG 이미지는 각 페이지의 메타데이터에 자동으로 적용됩니다.

## 🏠 아이콘 및 파비콘 (`/icons/`)

### 필수 파비콘 파일들
- `favicon.ico` - 기본 파비콘
- `favicon-16x16.png` - 16x16 파비콘
- `favicon-32x32.png` - 32x32 파비콘
- `apple-touch-icon.png` - iOS 홈 화면 아이콘
- `android-chrome-192x192.png` - Android 192x192
- `android-chrome-512x512.png` - Android 512x512
- `pwa-192x192.png` - PWA 192x192
- `pwa-512x512.png` - PWA 512x512

### 자동 적용 설정
모든 파비콘은 `layout.tsx`에서 자동으로 적용됩니다.

## 📱 제품 이미지 (`/products/`)

### 필수 제품 파일들
- `hero-main.jpg` - 메인 Hero 이미지
- `app-screenshot-1.jpg` - 앱 스크린샷 1
- `app-screenshot-2.jpg` - 앱 스크린샷 2
- `app-screenshot-3.jpg` - 앱 스크린샷 3
- `web-screenshot-1.jpg` - 웹 스크린샷 1
- `web-screenshot-2.jpg` - 웹 스크린샷 2
- `feature-*.jpg` - 기능별 이미지들
- `demo-*.jpg` - 데모 이미지들

## 🖥️ 하드웨어 이미지 (`/hardware/`)

### 필수 하드웨어 파일들
- `hero-product.jpg` - 메인 제품 이미지 (1200x800px)
- `product-1.jpg` - 첫 번째 제품 이미지 (600x400px)
- `product-2.jpg` - 두 번째 제품 이미지 (600x400px)
- `customer-1.jpg` - 고객 프로필 1 (150x150px)
- `customer-2.jpg` - 고객 프로필 2 (150x150px)

### 자동 적용 설정
하드웨어 이미지는 코드에서 주석을 해제하면 자동으로 적용됩니다.

## 🚀 이미지 활성화 방법

### 1. 로고 이미지 활성화
`src/components/Header.tsx`와 `src/components/Footer.tsx`에서 주석 해제:

```jsx
// 현재 텍스트 로고 대신
<img 
  src="/brand/logo.svg" 
  alt="MeetingMind" 
  className="h-6 md:h-8 w-auto"
/>
```

### 2. 하드웨어 이미지 활성화
`src/app/hardware/page.tsx`에서 주석 해제:

```jsx
// 현재 placeholder 대신
<img 
  src="/hardware/hero-product.jpg" 
  alt="MeetingMind Hardware Product" 
  className="w-full h-full object-cover"
/>
```

### 3. 제품 이미지 활성화
각 페이지에서 placeholder를 실제 이미지로 교체

## 📋 우선순위 체크리스트

### 🔥 높은 우선순위 (필수)
- [ ] `og-main.jpg` - 메인 OG 이미지
- [ ] `favicon.ico` - 기본 파비콘
- [ ] `apple-touch-icon.png` - iOS 아이콘
- [ ] `hero-product.jpg` - 하드웨어 메인 이미지
- [ ] `logo.svg` - 메인 로고

### 📋 중간 우선순위 (권장)
- [ ] `og-hardware.jpg` - 하드웨어 OG 이미지
- [ ] `product-1.jpg`, `product-2.jpg` - 제품 이미지
- [ ] `pwa-192x192.png`, `pwa-512x512.png` - PWA 아이콘
- [ ] `hero-main.jpg` - 메인 제품 이미지

### 📝 낮은 우선순위 (선택)
- [ ] `og-about.jpg`, `og-contact.jpg` - 페이지별 OG 이미지
- [ ] `customer-1.jpg`, `customer-2.jpg` - 고객 프로필
- [ ] `app-screenshot-*.jpg` - 앱 스크린샷
- [ ] `logo-dark.svg` - 다크모드 로고

## 🛠️ 이미지 최적화 팁

### 압축 도구
- **TinyPNG** - PNG/JPG 압축
- **ImageOptim** - Mac용 이미지 최적화
- **Squoosh** - 웹 기반 이미지 최적화

### 형식 권장사항
- **로고:** SVG (벡터) 또는 PNG (투명 배경)
- **사진:** JPG (압축률 좋음)
- **아이콘:** PNG (투명 배경)
- **OG 이미지:** JPG (소셜 미디어 호환성)

### 용량 가이드라인
- **파비콘:** 50KB 이하
- **로고:** 100KB 이하
- **OG 이미지:** 1MB 이하
- **제품 이미지:** 2MB 이하

## 📞 도움이 필요하시면

각 폴더별 README.md 파일에서 더 자세한 가이드를 확인하세요:
- `/brand/README.md` - 브랜드 이미지 가이드
- `/og/README.md` - OG 이미지 가이드
- `/icons/README.md` - 아이콘 가이드
- `/products/README.md` - 제품 이미지 가이드
- `/hardware/README.md` - 하드웨어 이미지 가이드

이미지 업로드 후 바로 웹사이트에서 확인하실 수 있습니다! 🎉 