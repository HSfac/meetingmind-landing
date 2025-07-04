# 하드웨어 이미지 가이드

이 폴더에 하드웨어 제품 이미지들을 넣어주세요.

## 필요한 이미지 파일들

### 1. 메인 제품 이미지 (Hero 섹션)
**파일명:** `hero-product.jpg`
- **권장 크기:** 1200x800px 이상
- **비율:** 3:2 (가로:세로)
- **용량:** 2MB 이하
- **설명:** 하드웨어 페이지 상단에 표시되는 메인 제품 이미지

### 2. 제품 라인업 이미지
**파일명:** `product-1.jpg`, `product-2.jpg`
- **권장 크기:** 600x400px 이상
- **비율:** 3:2 (가로:세로)
- **용량:** 1MB 이하
- **설명:** 제품 카드에 표시되는 각 제품별 이미지

### 3. 고객 프로필 이미지
**파일명:** `customer-1.jpg`, `customer-2.jpg`
- **권장 크기:** 150x150px 이상
- **비율:** 1:1 (정사각형)
- **용량:** 500KB 이하
- **설명:** 고객 리뷰 섹션의 프로필 이미지

## 이미지 활성화 방법

### 1. 메인 제품 이미지 활성화
`src/app/hardware/page.tsx` 파일에서 다음 부분을 수정:

```jsx
{/* 현재 코드 */}
<div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-300 rounded-xl md:rounded-2xl flex items-center justify-center">
  <DevicePhoneMobileIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-gray-500" />
</div>

{/* 이미지로 교체 */}
<img 
  src="/hardware/hero-product.jpg" 
  alt="MeetingMind Hardware Product" 
  className="w-full h-full object-cover"
/>
```

### 2. 제품 라인업 이미지 활성화
`src/app/hardware/page.tsx` 파일에서 다음 부분을 수정:

```jsx
{/* 현재 코드 */}
<div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 rounded-lg md:rounded-xl flex items-center justify-center">
  <DevicePhoneMobileIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-500" />
</div>

{/* 이미지로 교체 */}
<img 
  src={product.image} 
  alt={product.name} 
  className="w-full h-full object-cover"
/>
```

### 3. 고객 프로필 이미지 활성화
`src/app/hardware/page.tsx` 파일에서 다음 부분을 수정:

```jsx
{/* 현재 코드 */}
<div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full overflow-hidden">
  {/* 주석 부분 */}
</div>

{/* 이미지로 교체 */}
<div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full overflow-hidden">
  <img 
    src={`/hardware/customer-${index + 1}.jpg`} 
    alt={testimonial.name} 
    className="w-full h-full object-cover"
  />
</div>
```

## 이미지 최적화 팁

1. **WebP 형식 사용:** 더 작은 용량으로 높은 품질 유지
2. **압축:** TinyPNG 등을 사용하여 용량 최적화
3. **반응형:** 다양한 화면 크기에서 잘 보이도록 확인
4. **로딩 속도:** 큰 이미지는 lazy loading 적용 고려

## 파일 구조 예시
```
public/hardware/
├── README.md
├── hero-product.jpg      # 메인 제품 이미지
├── product-1.jpg         # 첫 번째 제품 이미지
├── product-2.jpg         # 두 번째 제품 이미지
├── customer-1.jpg        # 첫 번째 고객 프로필
└── customer-2.jpg        # 두 번째 고객 프로필
```

이미지를 넣은 후 브라우저에서 확인하고 필요에 따라 크기나 위치를 조정하세요! 