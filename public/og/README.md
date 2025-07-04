# OG(Open Graph) 이미지 가이드

이 폴더에 소셜 미디어 공유용 OG 이미지들을 넣어주세요.

## 필요한 OG 이미지 파일들

### 1. 메인 OG 이미지 (전체 사이트)
**파일명:** `og-main.jpg` 또는 `og-main.png`
- **권장 크기:** 1200x630px (1.91:1 비율)
- **최소 크기:** 600x315px
- **최대 크기:** 1200x630px
- **용량:** 8MB 이하 (권장 1MB 이하)
- **설명:** 메인 페이지 공유시 사용될 OG 이미지

### 2. About 페이지 OG 이미지
**파일명:** `og-about.jpg`
- **권장 크기:** 1200x630px
- **설명:** About 페이지 공유시 사용될 OG 이미지

### 3. Hardware 페이지 OG 이미지
**파일명:** `og-hardware.jpg`
- **권장 크기:** 1200x630px
- **설명:** Hardware 페이지 공유시 사용될 OG 이미지

### 4. Contact 페이지 OG 이미지
**파일명:** `og-contact.jpg`
- **권장 크기:** 1200x630px
- **설명:** Contact 페이지 공유시 사용될 OG 이미지

### 5. 기본 OG 이미지 (현재 사용 중)
**파일명:** `og_meetingmind.png`
- **권장 크기:** 1200x630px
- **설명:** 현재 layout.tsx에서 사용 중인 OG 이미지

## OG 이미지 디자인 가이드라인

### 필수 요소
- **로고:** MeetingMind 로고 포함
- **제목:** 페이지별 제목 텍스트
- **부제목:** 간단한 설명 텍스트
- **배경:** 브랜드 컬러 또는 제품 이미지

### 텍스트 가이드라인
- **제목 폰트:** 48-72px (Bold)
- **부제목 폰트:** 32-48px (Regular)
- **여백:** 최소 50px 이상
- **텍스트 위치:** 중앙 또는 좌측 정렬

### 색상 가이드라인
- **Primary:** #111827 (Gray-900)
- **Secondary:** #6B7280 (Gray-500)  
- **Accent:** #3B82F6 (Blue-500)
- **Background:** #FFFFFF (White) 또는 #F9FAFB (Gray-50)

### 각 페이지별 추천 내용

#### 메인 페이지 (og-main.jpg)
- **제목:** "MeetingMind - 회의는 녹음만, 정리는 AI가!"
- **부제목:** "Record your meeting—MeetingMind does the rest."
- **배경:** 브랜드 그라데이션 또는 제품 이미지

#### About 페이지 (og-about.jpg)
- **제목:** "About MeetingMind"
- **부제목:** "AI 기반 회의 솔루션의 혁신"
- **배경:** 팀 이미지 또는 회사 로고

#### Hardware 페이지 (og-hardware.jpg)
- **제목:** "MeetingMind Hardware"
- **부제목:** "프리미엄 회의 녹음 디바이스"
- **배경:** 하드웨어 제품 이미지

#### Contact 페이지 (og-contact.jpg)
- **제목:** "Contact MeetingMind"
- **부제목:** "언제든지 문의하세요"
- **배경:** 연락처 또는 지도 이미지

## 소셜 미디어 플랫폼별 최적화

### Facebook
- **크기:** 1200x630px
- **비율:** 1.91:1
- **텍스트:** 이미지의 20% 이하

### Twitter
- **크기:** 1200x600px
- **비율:** 2:1
- **카드 타입:** summary_large_image

### LinkedIn
- **크기:** 1200x627px
- **비율:** 1.91:1
- **텍스트:** 명확하고 전문적

### KakaoTalk
- **크기:** 800x400px
- **비율:** 2:1
- **텍스트:** 한국어 최적화

## 최종 파일 구조
```
public/og/
├── README.md
├── og-main.jpg           # 메인 페이지 OG 이미지
├── og-about.jpg          # About 페이지 OG 이미지
├── og-hardware.jpg       # Hardware 페이지 OG 이미지
├── og-contact.jpg        # Contact 페이지 OG 이미지
└── og_meetingmind.png    # 현재 사용 중인 기본 OG 이미지
```

## 이미지 최적화 팁
1. **압축:** TinyPNG, ImageOptim 사용
2. **형식:** JPG (사진), PNG (그래픽)
3. **WebP:** 브라우저 지원 고려
4. **테스트:** Facebook Sharing Debugger로 확인

OG 이미지를 업로드한 후 각 페이지의 메타데이터가 자동으로 적용됩니다! 