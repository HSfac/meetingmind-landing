'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  CpuChipIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  Battery0Icon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

// 애니메이션 컴포넌트
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Hardware() {
  const { t, language } = useLanguage()
  const [preorderEmail, setPreorderEmail] = useState('')
  const [preorderStatus, setPreorderStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handlePreorder = (e: React.FormEvent) => {
    e.preventDefault()
    setPreorderStatus('loading')
    
    // 가상의 API 호출
    setTimeout(() => {
      setPreorderStatus('success')
      setPreorderEmail('')
      setTimeout(() => setPreorderStatus('idle'), 3000)
    }, 1500)
  }

  const products = [
    {
      name: 'MeetingMind Pro',
      price: '₩599,000',
      description: '전문가급 AI 회의 솔루션',
      features: ['4K 비디오 녹화', '실시간 AI 번역', '음성 인식 99.9%', '클라우드 동기화'],
      image: '/api/placeholder/600/400'
    },
    {
      name: 'MeetingMind Essential',
      price: '₩399,000',
      description: '중소기업을 위한 스마트 솔루션',
      features: ['HD 비디오 녹화', '기본 AI 번역', '음성 인식 95%', '로컬 저장'],
      image: '/api/placeholder/600/400'
    }
  ]

  const specifications = [
    { icon: CpuChipIcon, title: 'A15 Bionic 칩', description: '업계 최고 성능의 AI 처리 능력' },
    { icon: DevicePhoneMobileIcon, title: '12MP 카메라', description: '4K ProRes 동영상 녹화' },
    { icon: WifiIcon, title: 'Wi-Fi 6E', description: '초고속 무선 연결' },
    { icon: Battery0Icon, title: '24시간 배터리', description: '하루 종일 지속되는 배터리' }
  ]

  const testimonials = [
    {
      name: '김민수',
      company: '테크 스타트업 CEO',
      content: '회의 효율성이 300% 향상되었습니다. 정말 혁신적인 제품이에요.',
      rating: 5
    },
    {
      name: '박지영',
      company: '대기업 팀장',
      content: 'AI 번역 기능이 정말 정확해요. 국제 회의에서 큰 도움이 됩니다.',
      rating: 5
    }
  ]

  return (
    <>
      <Head>
        <title>{t('hardware.meta.title')} | MeetingMind</title>
        <meta name="description" content={t('hardware.meta.description')} />
        <meta name="keywords" content={t('hardware.meta.keywords')} />
        <meta property="og:title" content={`${t('hardware.meta.title')} | MeetingMind`} />
        <meta property="og:description" content={t('hardware.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmind.ai/hardware" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('hardware.meta.title')} | MeetingMind`} />
        <meta name="twitter:description" content={t('hardware.meta.description')} />
        <link rel="canonical" href="https://meetingmind.ai/hardware" />
        <html lang={language} />
      </Head>
      
      <main className="min-h-screen bg-white">

        {/* Hero 섹션 - Apple 스타일 */}
        <section className="pt-32 pb-24 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <AnimatedSection>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight"
              >
                MeetingMind
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                AI가 만든 회의의 새로운 표준.<br />
                더 스마트하고, 더 효율적인 회의를 경험하세요.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
                  지금 주문하기
                </button>
                <button className="px-8 py-3 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium">
                  더 알아보기
                </button>
              </motion.div>
              
              {/* 앱 다운로드 버튼 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <div className="text-sm text-gray-500 mb-4 sm:mb-0 sm:mr-4">
                  모바일 앱으로도 만나보세요
                </div>
                <div className="flex gap-4">
                  {/* App Store 버튼 */}
                  <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-70">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                  
                  {/* Google Play 버튼 */}
                  <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-70">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* 제품 이미지 */}
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="w-32 h-32 bg-gray-300 rounded-2xl flex items-center justify-center">
                    <DevicePhoneMobileIcon className="w-16 h-16 text-gray-500" />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* 제품 라인업 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                라인업
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                당신의 필요에 맞는 완벽한 솔루션을 찾아보세요.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              {products.map((product, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center">
                      <DevicePhoneMobileIcon className="w-20 h-20 text-gray-400" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="text-3xl font-semibold text-gray-900 mb-6">
                      {product.price}
                    </div>
                    
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
                      선택하기
                    </button>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 기술 사양 */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                기술 사양
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                최첨단 기술로 완성된 완벽한 하드웨어.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specifications.map((spec, index) => (
                <AnimatedSection key={index}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <spec.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600">
                      {spec.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 고객 후기 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                고객 후기
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                실제 사용자들의 생생한 후기를 확인해보세요.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 주문 섹션 */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                지금 주문하고 미래를 경험하세요
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                한정 수량으로 사전 주문을 받고 있습니다. 
                놓치지 마세요.
              </p>
              
              <form onSubmit={handlePreorder} className="max-w-md mx-auto">
                <div className="flex gap-4 mb-6">
                  <input
                    type="email"
                    value={preorderEmail}
                    onChange={(e) => setPreorderEmail(e.target.value)}
                    placeholder="이메일 주소"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={preorderStatus === 'loading'}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                  >
                    {preorderStatus === 'loading' ? '처리 중...' : '사전 주문'}
                  </button>
                </div>
                
                {preorderStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-medium"
                  >
                    사전 주문이 완료되었습니다!
                  </motion.div>
                )}
              </form>
            </AnimatedSection>
          </div>
        </section>

      </main>
    </>
  )
} 