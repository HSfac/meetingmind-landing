# 브랜드 이미지 가이드

이 폴더에 MeetingMind 브랜드 관련 이미지들을 넣어주세요.

## 필요한 로고 파일들

### 1. 메인 로고 (Header용)
**파일명:** `logo.svg` 또는 `logo.png`
- **권장 크기:** 200x50px (4:1 비율)
- **배경:** 투명 배경
- **색상:** 풀컬러 버전
- **용량:** 100KB 이하
- **설명:** 헤더에 사용될 메인 로고

### 2. 로고 아이콘 (Favicon용)
**파일명:** `logo-icon.svg` 또는 `logo-icon.png`
- **권장 크기:** 512x512px (1:1 비율)
- **배경:** 투명 배경
- **색상:** 풀컬러 버전
- **용량:** 50KB 이하
- **설명:** 파비콘과 아이콘으로 사용될 로고

### 3. 다크모드 로고 (선택사항)
**파일명:** `logo-dark.svg` 또는 `logo-dark.png`
- **권장 크기:** 200x50px (4:1 비율)
- **배경:** 투명 배경
- **색상:** 다크 테마용 (흰색/밝은 색상)
- **용량:** 100KB 이하
- **설명:** 다크 모드에서 사용될 로고

### 4. 워드마크 (텍스트 로고)
**파일명:** `wordmark.svg` 또는 `wordmark.png`
- **권장 크기:** 300x80px
- **배경:** 투명 배경
- **색상:** 풀컬러 버전
- **용량:** 50KB 이하
- **설명:** 텍스트만 있는 로고 버전

## 컬러 팔레트 (참고용)
- **Primary:** #111827 (Gray-900)
- **Secondary:** #6B7280 (Gray-500)
- **Accent:** #3B82F6 (Blue-500)
- **Background:** #FFFFFF (White)

## 사용 위치
- **Header:** logo.svg
- **Footer:** logo.svg 또는 logo-icon.svg
- **Favicon:** logo-icon.svg → favicon.ico 변환
- **Apple Touch Icon:** logo-icon.png
- **소셜 미디어:** logo-icon.svg

## 파일 형식 권장사항
- **SVG:** 확대/축소가 자유로운 벡터 이미지 (권장)
- **PNG:** 투명 배경이 필요한 경우
- **WebP:** 웹 최적화가 필요한 경우

## 최종 파일 구조
```
public/brand/
├── README.md
├── logo.svg              # 메인 로고
├── logo-dark.svg         # 다크모드 로고 (선택)
├── logo-icon.svg         # 아이콘 로고
├── wordmark.svg          # 워드마크
└── style-guide.md        # 브랜드 가이드라인 (선택)
```

로고 파일을 넣은 후 코드에서 자동으로 적용됩니다! 