# 제품 이미지 가이드

이 폴더에 MeetingMind 제품 관련 이미지들을 넣어주세요.

## 필요한 제품 이미지 파일들

### 1. 메인 제품 이미지 (Hero 섹션용)
**파일명:** `hero-main.jpg` 또는 `hero-main.png`
- **권장 크기:** 1200x800px (3:2 비율)
- **용량:** 2MB 이하
- **설명:** 메인 페이지 Hero 섹션에 사용될 제품 이미지

### 2. 제품 스크린샷 (앱 화면)
**파일명:** `app-screenshot-1.jpg`, `app-screenshot-2.jpg`, `app-screenshot-3.jpg`
- **권장 크기:** 390x844px (iPhone 14 Pro 비율)
- **용량:** 1MB 이하
- **설명:** 모바일 앱 화면 스크린샷

### 3. 웹 앱 스크린샷 (데스크톱)
**파일명:** `web-screenshot-1.jpg`, `web-screenshot-2.jpg`
- **권장 크기:** 1920x1080px (16:9 비율)
- **용량:** 2MB 이하
- **설명:** 웹 앱 화면 스크린샷

### 4. 제품 기능 이미지
**파일명:** `feature-transcription.jpg`, `feature-summary.jpg`, `feature-mindmap.jpg`
- **권장 크기:** 600x400px (3:2 비율)
- **용량:** 1MB 이하
- **설명:** 각 기능별 설명 이미지

### 5. 제품 데모 이미지
**파일명:** `demo-1.jpg`, `demo-2.jpg`, `demo-3.jpg`
- **권장 크기:** 800x600px (4:3 비율)
- **용량:** 1MB 이하
- **설명:** 데모 섹션에 사용될 이미지

### 6. 사용 사례 이미지
**파일명:** `usecase-meeting.jpg`, `usecase-interview.jpg`, `usecase-lecture.jpg`
- **권장 크기:** 600x400px (3:2 비율)
- **용량:** 1MB 이하
- **설명:** 다양한 사용 사례 이미지

## 이미지 스타일 가이드

### 전체적인 톤앤매너
- **스타일:** 모던, 클린, 미니멀
- **색상:** 브랜드 컬러 중심
- **느낌:** 프로페셔널, 신뢰감

### 제품 스크린샷 가이드
- **배경:** 실제 디바이스 목업 사용 권장
- **그림자:** 자연스러운 그림자 효과
- **각도:** 정면 또는 약간의 각도
- **해상도:** 레티나 디스플레이 고려

### 기능 설명 이미지
- **레이아웃:** 좌측 이미지, 우측 텍스트
- **아이콘:** 일관된 아이콘 스타일
- **텍스트:** 최소한의 설명 텍스트
- **배경:** 깔끔한 배경

## 사용 위치별 이미지

### 메인 페이지 (page.tsx)
- **Hero:** `hero-main.jpg`
- **Features:** `feature-*.jpg`
- **Demo:** `demo-*.jpg`
- **Screenshots:** `app-screenshot-*.jpg`

### About 페이지 (about/page.tsx)
- **팀 이미지:** `team-*.jpg`
- **오피스 이미지:** `office-*.jpg`
- **제품 개발 과정:** `development-*.jpg`

### Hardware 페이지 (hardware/page.tsx)
- **이미 설정됨:** `/hardware/` 폴더 참조
- **제품 상세:** `product-detail-*.jpg`
- **기술 사양:** `specs-*.jpg`

### Contact 페이지 (contact/page.tsx)
- **오피스 외관:** `office-exterior.jpg`
- **오피스 내부:** `office-interior.jpg`
- **팀 미팅:** `team-meeting.jpg`

## 최종 파일 구조
```
public/products/
├── README.md
├── hero-main.jpg             # 메인 Hero 이미지
├── app-screenshot-1.jpg      # 앱 스크린샷 1
├── app-screenshot-2.jpg      # 앱 스크린샷 2
├── app-screenshot-3.jpg      # 앱 스크린샷 3
├── web-screenshot-1.jpg      # 웹 스크린샷 1
├── web-screenshot-2.jpg      # 웹 스크린샷 2
├── feature-transcription.jpg # 전사 기능 이미지
├── feature-summary.jpg       # 요약 기능 이미지
├── feature-mindmap.jpg       # 마인드맵 기능 이미지
├── demo-1.jpg                # 데모 이미지 1
├── demo-2.jpg                # 데모 이미지 2
├── demo-3.jpg                # 데모 이미지 3
├── usecase-meeting.jpg       # 회의 사용 사례
├── usecase-interview.jpg     # 인터뷰 사용 사례
├── usecase-lecture.jpg       # 강의 사용 사례
├── team-1.jpg                # 팀 이미지 1
├── team-2.jpg                # 팀 이미지 2
├── office-exterior.jpg       # 오피스 외관
├── office-interior.jpg       # 오피스 내부
└── team-meeting.jpg          # 팀 미팅
```

## 이미지 최적화 팁
1. **압축:** TinyPNG, ImageOptim 사용
2. **형식:** JPG (사진), PNG (그래픽/투명 배경)
3. **WebP:** 차세대 이미지 형식 고려
4. **Lazy Loading:** 대용량 이미지는 지연 로딩 적용
5. **반응형:** 다양한 화면 크기 고려

제품 이미지를 업로드한 후 각 페이지에서 자동으로 적용됩니다! 