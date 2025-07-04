'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRightIcon, MicrophoneIcon } from '@heroicons/react/24/outline'

// 애니메이션 컴포넌트
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 음성 파형 애니메이션 컴포넌트
const SoundWave = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null
  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 border-2 border-green-500/20 rounded-full"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{
            scale: [0.8, 1.5, 2],
            opacity: [0.8, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

// 숫자 카운터 애니메이션 컴포넌트
const AnimatedCounter = ({ target, duration = 2, suffix = '' }: { target: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const increment = target / (duration * 60) // 60fps 기준
    
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    
    return () => clearInterval(timer)
  }, [target, duration])
  
  return <span>{count}{suffix}</span>
}

// 타이핑 효과 컴포넌트
const TypewriterText = ({ text, speed = 100 }: { text: string, speed?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)
      
      return () => clearTimeout(timeout)
    } else {
      // 텍스트 완성 후 잠시 대기하고 다시 시작
      const resetTimeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 3000)
      
      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, text, speed])
  
  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-blue-500"
      >
        |
      </motion.span>
    </span>
  )
}

const HeroSection = () => {
  const { t } = useLanguage()
  
  // 상태 전환 애니메이션을 위한 state
  const [currentStatus, setCurrentStatus] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [processingTime, setProcessingTime] = useState(10)
  
  const statuses = [
    { key: 'recording', color: 'bg-green-500', isActive: true },
    { key: 'analyzing', color: 'bg-blue-500', isActive: false },
    { key: 'summarizing', color: 'bg-purple-500', isActive: false }
  ]
  
  // 상태 전환 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prev) => (prev + 1) % statuses.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  // 정확도 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => {
      setAccuracy(95)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  // 처리 시간 카운트다운
  useEffect(() => {
    if (currentStatus === 1) { // 분석 중일 때
      const timer = setInterval(() => {
        setProcessingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [currentStatus])
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Apple 스타일 배경 그라데이션 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Apple 스타일 배지 */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-sm font-medium mb-8 shadow-sm border border-blue-200/50"
          >
            <MicrophoneIcon className="w-4 h-4" />
            {t('hero.badge')}
          </motion.div>
        </AnimatedSection>
        
        {/* Apple 스타일 메인 헤딩 */}
        <AnimatedSection>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black apple-heading text-gray-900 mb-6"
          >
            {t('hero.title')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </motion.h1>
        </AnimatedSection>
        
        {/* Apple 스타일 서브헤딩 */}
        <AnimatedSection>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl apple-subheading max-w-3xl mx-auto mb-4"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12"
          >
            {t('hero.description')}
          </motion.p>
        </AnimatedSection>
        
        {/* Apple 스타일 CTA 버튼 */}
        <AnimatedSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.a 
              href="#cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary group"
            >
              {t('hero.cta.appStore')}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a 
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary group"
            >
              {t('hero.cta.googlePlay')}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </AnimatedSection>
        
        {/* 향상된 Apple 스타일 제품 미리보기 */}
        <AnimatedSection>
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="apple-card p-8 md:p-12 relative overflow-hidden">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative mb-8"
                >
                  <div className="relative w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <MicrophoneIcon className="w-10 h-10 text-white" />
                    
                    {/* 음성 파형 효과 */}
                    <SoundWave isActive={currentStatus === 0} />
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('hero.card.title')}</h3>
                
                {/* 타이핑 효과가 적용된 서브타이틀 */}
                <div className="text-gray-600 mb-8 text-lg h-7">
                  <TypewriterText text={t('hero.card.subtitle')} speed={100} />
                </div>
                
                {/* 향상된 상태 표시 */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStatus}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div 
                        className={`w-3 h-3 rounded-full ${statuses[currentStatus].color}`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-gray-700 font-medium">
                        {currentStatus === 0 && t('hero.card.status.recording')}
                        {currentStatus === 1 && t('hero.card.status.analyzing')}
                        {currentStatus === 2 && t('hero.card.status.summarizing')}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* 향상된 통계 */}
                <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-semibold text-gray-900"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <AnimatedCounter target={accuracy} suffix="%" />
                    </motion.div>
                    <div className="text-sm text-gray-500">{t('hero.card.stats.accuracyLabel')}</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-semibold text-gray-900"
                      animate={{ 
                        color: currentStatus === 1 ? '#f59e0b' : '#111827'
                      }}
                    >
                      {currentStatus === 1 ? `${processingTime}초` : t('hero.card.stats.speed')}
                    </motion.div>
                    <div className="text-sm text-gray-500">{t('hero.card.stats.speedLabel')}</div>
                  </div>
                </div>
              </div>
              
              {/* 배경 파티클 효과 */}
              {currentStatus === 1 && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        opacity: 0
                      }}
                      animate={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default HeroSection 