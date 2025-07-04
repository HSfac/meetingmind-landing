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
      name: t('hardware.products.0.name'),
      price: t('hardware.products.0.price'),
      description: t('hardware.products.0.description'),
      // MeetingMind Mic 이미지
      image: '/hardware/product-1.png',
      features: [
        t('hardware.products.0.features.0'),
        t('hardware.products.0.features.1'),
        t('hardware.products.0.features.2'),
        t('hardware.products.0.features.3')
      ],
      releaseDate: t('hardware.products.0.releaseDate')
    },
    {
      name: t('hardware.products.1.name'),
      price: t('hardware.products.1.price'),
      description: t('hardware.products.1.description'),
      // MeetingMind Pod 이미지
      image: '/hardware/product-2.png',
      features: [
        t('hardware.products.1.features.0'),
        t('hardware.products.1.features.1'),
        t('hardware.products.1.features.2'),
        t('hardware.products.1.features.3')
      ],
      releaseDate: t('hardware.products.1.releaseDate')
    }
  ]

  const specifications = [
    { icon: CpuChipIcon, title: t('hardware.specifications.items.0.title'), description: t('hardware.specifications.items.0.description') },
    { icon: DevicePhoneMobileIcon, title: t('hardware.specifications.items.1.title'), description: t('hardware.specifications.items.1.description') },
    { icon: WifiIcon, title: t('hardware.specifications.items.2.title'), description: t('hardware.specifications.items.2.description') },
    { icon: Battery0Icon, title: t('hardware.specifications.items.3.title'), description: t('hardware.specifications.items.3.description') }
  ]

  const testimonials = [
    {
      name: t('hardware.testimonials.items.0.name'),
      company: t('hardware.testimonials.items.0.company'),
      content: t('hardware.testimonials.items.0.content'),
      rating: 5
    },
    {
      name: t('hardware.testimonials.items.1.name'),
      company: t('hardware.testimonials.items.1.company'),
      content: t('hardware.testimonials.items.1.content'),
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
        <meta property="og:image" content="https://meetingmind.ai/og/og-hardware.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('hardware.meta.title')} | MeetingMind`} />
        <meta name="twitter:description" content={t('hardware.meta.description')} />
        <meta name="twitter:image" content="https://meetingmind.ai/og/og-hardware.jpg" />
        <link rel="canonical" href="https://meetingmind.ai/hardware" />
        <html lang={language} />
      </Head>
      
      <main className="min-h-screen bg-white">

        {/* Hero 섹션 - Apple 스타일 */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* 왼쪽: 텍스트 콘텐츠 */}
              <AnimatedSection className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-medium mb-6 md:mb-8"
                >
                  <CpuChipIcon className="w-3 h-3 md:w-4 md:h-4" />
                  {t('hardware.badge')}
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl apple-heading text-gray-900 mb-4 md:mb-6 leading-tight"
                >
                  {t('hardware.title')} <span className="text-gray-600">{t('hardware.titleHighlight')}</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg lg:text-xl apple-subheading mb-8 md:mb-12"
                >
                  {t('hardware.subtitle')}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center mb-8 md:mb-12"
                >
                  <button className="btn btn-primary">
                    {t('hardware.cta.explore')}
                  </button>
                  <button className="btn btn-secondary">
                    {t('hardware.cta.demo')}
                  </button>
                </motion.div>
                
                {/* 앱 다운로드 버튼 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center"
                >
                  <div className="text-xs md:text-sm text-gray-500 mb-3 sm:mb-0 sm:mr-4">
                    {t('hardware.mobile.title')}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    {/* App Store 버튼 */}
                    <button className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-black text-white rounded-xl md:rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-70">Download on the</div>
                        <div className="text-xs md:text-sm font-semibold">App Store</div>
                      </div>
                    </button>
                    
                    {/* Google Play 버튼 */}
                    <button className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-black text-white rounded-xl md:rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs opacity-70">GET IT ON</div>
                        <div className="text-xs md:text-sm font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* 오른쪽: 제품 이미지 */}
              <AnimatedSection>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="w-full h-80 md:h-96 lg:h-[32rem] bg-black rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                    <img 
                      src="/hardware/hero-product.png" 
                      alt="MeetingMind Hardware Product" 
                      className="w-full h-full object-contain p-6"
                    />
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 제품 라인업 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('hardware.products.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl apple-subheading max-w-2xl mx-auto">
                {t('hardware.products.subtitle')}
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="apple-card p-6 md:p-8 group cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full h-48 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-0">{product.name}</h3>
                      <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{product.price}</span>
                    </div>
                    <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{product.description}</p>
                    <div className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      {t('hardware.mobile.releaseDate')}: {product.releaseDate}
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircleIcon className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                    <button className="w-full py-2.5 md:py-3 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base">
                      {t('hardware.products.selected')}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 기술 사양 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('hardware.specifications.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl apple-subheading max-w-2xl mx-auto">
                {t('hardware.specifications.subtitle')}
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="apple-card p-4 md:p-6 text-center group hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-gray-800 transition-colors">
                    <spec.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{spec.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{spec.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 고객 리뷰 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('hardware.testimonials.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl apple-subheading max-w-2xl mx-auto">
                {t('hardware.testimonials.subtitle')}
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="apple-card p-6 md:p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full overflow-hidden">
                      {/* 
                        여기에 고객 프로필 이미지를 넣으세요!
                        파일 이름: customer-1.jpg, customer-2.jpg
                        추천 크기: 150x150px 이상
                        
                        <img 
                          src={`/hardware/customer-${index + 1}.jpg`} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      */}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 사전 예약 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('hardware.preorder.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl apple-subheading mb-6 md:mb-8">
                {t('hardware.preorder.subtitle')}
              </p>
              
              <form onSubmit={handlePreorder} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <input
                    type="email"
                    value={preorderEmail}
                    onChange={(e) => setPreorderEmail(e.target.value)}
                    placeholder={t('hardware.preorder.placeholder')}
                    className="flex-1 px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 text-sm md:text-base"
                    required
                  />
                  <button
                    type="submit"
                    disabled={preorderStatus === 'loading'}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2.5 md:py-3 text-sm md:text-base"
                  >
                    {preorderStatus === 'loading' ? (
                      <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-2 border-white border-t-transparent"></div>
                    ) : (
                      t('hardware.preorder.button')
                    )}
                  </button>
                </div>
                
                {preorderStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center justify-center gap-2 text-green-600"
                  >
                    <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">{t('hardware.preorder.success')}</span>
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