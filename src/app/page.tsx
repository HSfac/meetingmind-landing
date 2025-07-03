'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import HeroSection from '@/components/HeroSection'
import HardwarePreviewSection from '@/components/HardwarePreviewSection'
import { 
  PlayIcon,
  MicrophoneIcon,
  BoltIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  MapIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  ShieldCheckIcon,
  StarIcon
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

// How It Works 섹션
const HowItWorksSection = () => {
  const { t } = useLanguage()
  
  const steps = [
    {
      step: '01',
      icon: MicrophoneIcon,
      color: 'from-blue-500 to-slate-600',
      delay: 0.2
    },
    {
      step: '02',
      icon: BoltIcon,
      color: 'from-slate-500 to-slate-700',
      delay: 0.4
    },
    {
      step: '03',
      icon: ShareIcon,
      color: 'from-slate-700 to-slate-900',
      delay: 0.6
    }
  ]

  return (
    <section id="how" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.1),transparent)] opacity-60" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6"
          >
            <BoltIcon className="w-4 h-4" />
            {t('howItWorks.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black text-slate-900 mb-6"
          >
            {t('howItWorks.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('howItWorks.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            {t('howItWorks.subtitle')}
          </motion.p>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: step.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                rotateY: 5, 
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* 연결선 (마지막 카드가 아닐 때만) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0" />
              )}
              
              {/* 메인 카드 */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 group-hover:shadow-2xl group-hover:shadow-slate-300/30 transition-all duration-500 group-hover:border-slate-200">
                {/* 카드 글로우 효과 */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* 스텝 번호 */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg text-white font-bold text-lg`}>
                    {step.step}
                  </div>
                </div>
                
                {/* 아이콘 */}
                <div className="flex justify-center mb-8 mt-4">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className={`relative w-24 h-24 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg shadow-slate-300/30 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                    
                    {/* 아이콘 글로우 */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                  </motion.div>
                </div>
                
                {/* 텍스트 콘텐츠 */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                      {t(`howItWorks.steps.${index}.title`)}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {t(`howItWorks.steps.${index}.subtitle`)}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {t(`howItWorks.steps.${index}.description`)}
                  </p>
                </div>
                
                {/* 하단 장식 */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-slate-300 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 하단 장식 요소 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-600 font-medium">{t('howItWorks.footer')}</span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Features 섹션
const FeaturesSection = () => {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: ChatBubbleBottomCenterTextIcon,
      color: 'from-blue-500 to-slate-600',
      delay: 0.1
    },
    {
      icon: CheckCircleIcon,
      color: 'from-slate-500 to-slate-700',
      delay: 0.2
    },
    {
      icon: MapIcon,
      color: 'from-blue-600 to-slate-700',
      delay: 0.3
    },
    {
      icon: MagnifyingGlassIcon,
      color: 'from-slate-600 to-slate-800',
      delay: 0.4
    },
    {
      icon: LinkIcon,
      color: 'from-slate-500 to-slate-700',
      delay: 0.5
    },
    {
      icon: ShieldCheckIcon,
      color: 'from-slate-600 to-slate-800',
      delay: 0.6
    }
  ]

  return (
    <section id="features" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(100,116,139,0.05),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(100,116,139,0.05),transparent)]" />
      
      {/* 플로팅 요소들 */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-slate-600/5 to-slate-700/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-slate-500/5 to-slate-600/5 rounded-full filter blur-3xl" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/10 to-purple-100/10 text-blue-400 text-sm font-medium mb-6 border border-blue-400/20"
          >
            <BoltIcon className="w-4 h-4" />
            {t('features.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black text-white mb-6"
          >
            {t('features.title')} <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">{t('features.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t('features.subtitle')}
          </motion.p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500">
                {/* 글래스모피즘 효과 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl" />
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* 배지 */}
                <div className="absolute -top-3 right-6">
                  <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-semibold`}>
                    {t(`features.items.${index}.badge`)}
                  </span>
                </div>
                
                {/* 아이콘 */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg mb-4`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                    
                    {/* 리플 효과 */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color}`}
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ 
                        scale: 1.4, 
                        opacity: [0, 0.3, 0],
                        transition: { duration: 0.6 }
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* 텍스트 콘텐츠 */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                      {t(`features.items.${index}.title`)}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {t(`features.items.${index}.subtitle`)}
                    </p>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {t(`features.items.${index}.description`)}
                  </p>
                </div>
                
                {/* 하단 그라데이션 */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-b-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo 섹션
const DemoSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="demo" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/10 to-purple-100/10 text-blue-400 text-sm font-medium mb-6 border border-blue-400/20"
          >
            <PlayIcon className="w-4 h-4" />
            {t('demo.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black text-white mb-6"
          >
            {t('demo.title')} <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">{t('demo.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t('demo.subtitle')}
          </motion.p>
        </AnimatedSection>
        
        {/* 비디오 데모 영역 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50">
            <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-600/50">
              {/* 가상 비디오 플레이어 */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition-colors"
                >
                  <PlayIcon className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
              
              {/* 데모 정보 오버레이 */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2">{t('demo.videoTitle')}</h3>
                  <p className="text-white/70 text-sm">{t('demo.videoDescription')}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 통계 */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            {['speed', 'accuracy', 'languages'].map((stat, index) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {t(`demo.stats.${stat}`)}
                </div>
                <div className="text-slate-400 text-sm">
                  {t(`demo.stats.${stat}Label`)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials 섹션
const TestimonialsSection = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 5)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6"
          >
            <StarIcon className="w-4 h-4" />
            {t('testimonials.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black text-slate-900 mb-6"
          >
            {t('testimonials.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('testimonials.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </AnimatedSection>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl text-slate-700 font-medium mb-8 leading-relaxed">
              &ldquo;{t(`testimonials.items.${currentIndex}.text`)}&rdquo;
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {t(`testimonials.items.${currentIndex}.name`).charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">{t(`testimonials.items.${currentIndex}.name`)}</div>
                <div className="text-slate-600">{t(`testimonials.items.${currentIndex}.role`)}</div>
              </div>
            </div>
          </motion.div>
          
          {/* 인디케이터 */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-500 w-8' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing 섹션
const PricingSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="pricing" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/10 to-purple-100/10 text-blue-400 text-sm font-medium mb-6 border border-blue-400/20"
          >
            <StarIcon className="w-4 h-4" />
            {t('pricing.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black text-white mb-6"
          >
            {t('pricing.title')} <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">{t('pricing.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t('pricing.subtitle')}
          </motion.p>
        </AnimatedSection>
        
                 <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {[0, 1].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                index === 1 
                  ? 'border-blue-400/50 bg-gradient-to-b from-blue-900/20 to-slate-800/50' 
                  : 'border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t('pricing.popular')}
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{t(`pricing.plans.${index}.name`)}</h3>
                <p className="text-slate-400 mb-6">{t(`pricing.plans.${index}.description`)}</p>
                
                                 <div className="mb-8">
                   <span className="text-5xl font-black text-white">
                     {index === 0 ? '무료' : `₩${t(`pricing.plans.${index}.price.krw`)}`}
                   </span>
                   <span className="text-slate-400 ml-2">/{t(`pricing.plans.${index}.period`)}</span>
                 </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 mb-8 ${
                    index === 1
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {t(`pricing.plans.${index}.cta`)}
                </motion.button>
                
                                 <ul className="space-y-4 text-left">
                   {[0, 1, 2, 3].map((featureIndex) => (
                     <li key={featureIndex} className="flex items-center gap-3">
                       <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                       <span className="text-slate-300">{t(`pricing.plans.${index}.features.${featureIndex}`)}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ 섹션
const FAQSection = () => {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-black text-slate-900 mb-6"
          >
            {t('faq.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('faq.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            {t('faq.subtitle')}
          </motion.p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-lg">
                  {t(`faq.items.${index}.question`)}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {t(`faq.items.${index}.answer`)}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA 섹션
const CTASection = () => {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // 가상의 API 호출
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }
  
  return (
    <footer id="cta" className="py-32 bg-gradient-to-r from-blue-600 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent)]" />
      
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-black leading-tight mb-6"
          >
            {t('cta.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
          >
            {t('cta.titleKo')}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 mb-12"
          >
            {t('cta.subtitle')}
          </motion.p>
          
          {/* 이메일 폼 */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('cta.form.placeholder')}
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                required
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? t('cta.form.loading') : t('cta.form.cta')}
              </motion.button>
            </div>
            
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-300 mt-4"
              >
                {t('cta.form.success')}
              </motion.p>
            )}
          </motion.form>
          
          {/* 앱 다운로드 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <PlayIcon className="w-5 h-5" />
              {t('cta.buttons.appStore')}
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <PlayIcon className="w-5 h-5" />
              {t('cta.buttons.googlePlay')}
            </motion.a>
          </div>
          
          {/* 통계 그리드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {t(`cta.stats.${index}.number`)}
                </div>
                <div className="text-white/70">
                  {t(`cta.stats.${index}.label`)}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <HardwarePreviewSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
} 