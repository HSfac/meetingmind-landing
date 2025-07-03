'use client'

import React from 'react'
import { motion } from 'framer-motion'
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

const HeroSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="hero" className="relative bg-white min-h-screen flex items-center">
      {/* Apple-style 미니멀 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="section-container py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Apple 스타일 배지 */}
          <AnimatedSection>
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8"
              >
              <div className="w-2 h-2 bg-green-500 rounded-full" />
                {t('hero.badge')}
              </motion.div>
          </AnimatedSection>
              
          {/* Apple 스타일 대형 제목 */}
          <AnimatedSection>
              <motion.h1 
              initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl apple-heading text-gray-900 mb-6 leading-tight tracking-tight"
              >
              {t('hero.title')}<br />
              <span className="text-gray-600">
                    {t('hero.titleHighlight')}
                </span>
              </motion.h1>
          </AnimatedSection>
              
          {/* Apple 스타일 부제목 */}
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
          
          {/* Apple 스타일 제품 미리보기 */}
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="apple-card p-8 md:p-12">
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
                    <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                      <MicrophoneIcon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>
                    
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('hero.card.title')}</h3>
                  <p className="text-gray-600 mb-8 text-lg">{t('hero.card.subtitle')}</p>
                    
                  {/* Apple 스타일 상태 표시 */}
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{t('hero.card.status.recording')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700">{t('hero.card.status.analyzing')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
                      <span className="text-gray-700">{t('hero.card.status.summarizing')}</span>
                      </div>
                      </div>
                  
                  {/* Apple 스타일 통계 */}
                  <div className="flex items-center gap-8 mt-8 pt-8 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gray-900">{t('hero.card.stats.accuracy')}</div>
                      <div className="text-sm text-gray-500">{t('hero.card.stats.accuracyLabel')}</div>
                      </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gray-900">{t('hero.card.stats.speed')}</div>
                      <div className="text-sm text-gray-500">{t('hero.card.stats.speedLabel')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 