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
  ShoppingCartIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ArrowRightIcon,
  PlayIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

// 애니메이션 컴포넌트
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Hardware() {
  const { t, language } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState(0)
  const [preorderEmail, setPreorderEmail] = useState('')
  const [preorderStatus, setPreorderStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  
  // 제품 정보를 안전하게 가져오는 함수
  const getProductInfo = (index: number, field: string) => {
    const key = `hardware.products.${index}.${field}`
    const value = t(key)
    console.log(`Translation key: ${key}, value: ${value}`)
    return value
  }
  
  const getProductFeature = (productIndex: number, featureIndex: number) => {
    const key = `hardware.products.${productIndex}.features.${featureIndex}`
    const value = t(key)
    console.log(`Feature key: ${key}, value: ${value}`)
    return value
  }
  
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
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">

      {/* Hero 섹션 */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.2),transparent)]" />
        
        {/* 플로팅 파티클 */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <SparklesIcon className="w-4 h-4" />
              {t('hardware.badge')}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            >
              {t('hardware.title')} <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('hardware.titleHighlight')}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              {t('hardware.subtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {t('hardware.cta.explore')}
              </button>
              
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <PlayIcon className="w-5 h-5" />
                {t('hardware.cta.demo')}
              </button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* 제품 비교 섹션 */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t('hardware.products.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('hardware.products.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {[0, 1].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onClick={() => setSelectedProduct(index)}
                className={`relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  selectedProduct === index 
                    ? 'border-blue-500 shadow-2xl shadow-blue-200/50 transform scale-105' 
                    : 'border-slate-200 hover:border-slate-300 shadow-lg'
                }`}
              >
                {/* 선택 상태 표시 */}
                {selectedProduct === index && (
                  <div className="absolute -top-4 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">
                      <CheckCircleIcon className="w-4 h-4" />
                      {t('hardware.products.selected')}
                    </span>
                  </div>
                )}
                
                {/* 출시 일정 배지 */}
                <div className="absolute -top-4 right-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold">
                    {getProductInfo(index, 'releaseDate')}
                  </span>
                </div>
                
                {/* 제품 이미지 */}
                <div className="relative mb-8 p-8 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="relative w-40 h-40 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
                  >
                    {index === 0 ? (
                      <CpuChipIcon className="w-20 h-20 text-white" />
                    ) : (
                      <DevicePhoneMobileIcon className="w-20 h-20 text-white" />
                    )}
                    
                    {/* 제품 글로우 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30 animate-pulse" />
                    
                    {/* 상태 표시 LED */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                  </motion.div>
                </div>
                
                {/* 제품 정보 */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {getProductInfo(index, 'name')}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg">
                    {getProductInfo(index, 'description')}
                  </p>
                  
                  {/* 가격 */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">
                      {getProductInfo(index, 'price')}
                    </span>
                  </div>
                  
                  {/* 특징 */}
                  <div className="space-y-3 mb-8">
                    {[0, 1, 2, 3].map((featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-slate-600">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-left">
                          {getProductFeature(index, featureIndex)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 사양 섹션 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t('hardware.specs.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {getProductInfo(selectedProduct, 'name')} {t('hardware.specs.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 기술 사양 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <BeakerIcon className="w-6 h-6 text-blue-600" />
                {t('hardware.specs.technical')}
              </h3>
              
              <div className="space-y-4">
                {[0, 1, 2, 3, 4].map((specIndex) => (
                  <div key={specIndex} className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="text-slate-600">
                      {t(`hardware.specs.${selectedProduct}.technical.${specIndex}.label`)}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {t(`hardware.specs.${selectedProduct}.technical.${specIndex}.value`)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* 연결성 & 호환성 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <WifiIcon className="w-6 h-6 text-purple-600" />
                {t('hardware.specs.connectivity')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <WifiIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {t('hardware.specs.wifi.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('hardware.specs.wifi.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Battery0Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {t('hardware.specs.power.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('hardware.specs.power.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {t('hardware.specs.compatibility.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('hardware.specs.compatibility.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 사전 예약 섹션 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              {t('hardware.preorder.title')}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl mb-3">
                    {index === 0 && '💰'}
                    {index === 1 && '🚚'}
                    {index === 2 && '🛡️'}
                    {index === 3 && '✨'}
                  </div>
                  <h3 className="font-semibold mb-2">
                    {t(`hardware.preorder.benefitTitles.${index}`)}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t(`hardware.preorder.benefits.${index}`)}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <form onSubmit={handlePreorder} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={preorderEmail}
                  onChange={(e) => setPreorderEmail(e.target.value)}
                  placeholder={t('hardware.preorder.form.placeholder')}
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  disabled={preorderStatus === 'loading'}
                  className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
                >
                  {preorderStatus === 'loading' ? t('hardware.preorder.form.loading') : t('hardware.preorder.cta')}
                </button>
              </div>
              
              {preorderStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-300"
                >
                  {t('hardware.preorder.form.success')}
                </motion.p>
              )}
            </form>
            
            <p className="mt-6 text-white/60 text-sm">
              {t('hardware.preorder.note')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t('hardware.faq.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('hardware.faq.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="space-y-4">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900">
                    {t(`hardware.faq.items.${index}.question`)}
                  </span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {t(`hardware.faq.items.${index}.answer`)}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              {t('hardware.finalCta.title')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('hardware.finalCta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {t('hardware.finalCta.preorder')}
              </button>
              
              <button
                onClick={() => window.open('/', '_blank')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <ArrowRightIcon className="w-5 h-5" />
                {t('hardware.finalCta.tryApp')}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      </main>
    </>
  )
} 