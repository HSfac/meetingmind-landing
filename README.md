# MeetingMind Landing Page

스펙 문서에 따라 제작된 MeetingMind의 공식 랜딩페이지입니다.

## 🚀 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리
- **Heroicons** - 아이콘 라이브러리
- **Headless UI** - 무스타일 UI 컴포넌트

## 📋 페이지 구조

### 섹션 구성
1. **Hero** - 메인 비주얼과 CTA 버튼
2. **How It Works** - 3단계 사용법 설명
3. **Features** - 6개 주요 기능 소개
4. **Demo** - 제품 데모 영상
5. **Testimonials** - 고객 후기
6. **Pricing** - 요금제 (KRW/USD 전환 가능)
7. **FAQ** - 자주 묻는 질문
8. **CTA Footer** - 최종 액션 버튼

### 주요 기능
- 🎨 **반응형 디자인** - 모바일부터 데스크탑까지
- ⚡ **부드러운 애니메이션** - Framer Motion 기반
- 🌍 **한/영 이중언어** - 국제화 지원
- 💰 **통화 전환** - 원화/달러 실시간 전환
- 📱 **모바일 최적화** - 터치 친화적 UI

## 🛠️ 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 🎨 디자인 토큰

### 컬러 팔레트
- **Primary**: `#2E74FF` - 메인 브랜드 컬러
- **Accent**: `#00C9A7` - 강조 컬러
- **Dark**: `#121826` - 텍스트 컬러
- **Light**: `#F8FAFC` - 배경 컬러

### 폰트
- **한국어**: Pretendard (400/600/800)
- **영어**: Inter (400/600/800)

### 브레이크포인트
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 📱 반응형 지원

- **Desktop** (xl: 1280px+): 풀 레이아웃
- **Tablet** (lg: 1024px): 그리드 조정
- **Mobile** (md: 768px 이하): 세로 레이아웃

## 🔧 커스터마이징

### 스타일 수정
`src/app/globals.css`에서 글로벌 스타일과 커스텀 컴포넌트 클래스를 수정할 수 있습니다.

### 컬러 변경
`tailwind.config.ts`에서 컬러 토큰을 수정하거나 추가할 수 있습니다.

### 콘텐츠 업데이트
`src/app/page.tsx`에서 각 섹션의 텍스트, 이미지, 링크 등을 수정할 수 있습니다.

## 📦 배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼
- Netlify
- AWS Amplify
- Docker

## 🔗 주요 링크

- **개발 서버**: http://localhost:3000
- **스펙 문서**: docs/spec.md
- **디자인 가이드**: Figma 링크 (추후 업데이트)

## 📞 문의사항

프로젝트 관련 문의사항은 이슈 등록 또는 이메일로 연락해주세요.

---

Made with ❤️ by MeetingMind Team
