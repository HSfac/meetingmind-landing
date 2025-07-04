'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AIProcessingDemo from './AIProcessingDemo'

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
    <section id="hero" className="relative bg-white min-h-screen flex items-center pt-16 md:pt-20">
      {/* Apple-style 미니멀 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="section-container py-12 md:py-20 relative z-10">
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
          
          {/* AI 처리 데모 컴포넌트 */}
          <AnimatedSection>
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative max-w-4xl mx-auto"
            >
              <AIProcessingDemo />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 