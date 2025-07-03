'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from '@/components/LanguageToggle'
import { PlayIcon, MicrophoneIcon } from '@heroicons/react/24/outline'

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

const HeroSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-slate-500/10 to-slate-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.15),rgba(255,255,255,0))]" />
      
      {/* 플로팅 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-slate-400/10 to-slate-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-slate-500/10 to-slate-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
      </div>
      
      <div className="section-container pt-24 pb-32 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-20">
          <AnimatedSection className="flex-1 text-center lg:text-left">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                {t('hero.badge')}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl lg:text-8xl font-black leading-tight text-white"
              >
                {t('hero.title')}{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                    {t('hero.titleHighlight')}
                  </span>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-slate-300 rounded-lg blur opacity-20"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/70 max-w-2xl"
              >
                {t('hero.subtitle')}
                <br className="hidden lg:block" />
                <span className="text-lg text-white/50">
                  {t('hero.description')}
                </span>
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a 
                  href="#cta"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl text-white font-semibold shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                >
                  <PlayIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  {t('hero.cta.appStore')}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                </motion.a>
                
                <motion.a 
                  href="#cta"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30"
                >
                  <PlayIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  {t('hero.cta.googlePlay')}
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="flex-1 mb-12 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative perspective-1000"
            >
              <div className="relative">
                {/* 메인 카드 */}
                <div className="relative w-full h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-black/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-slate-400/5 to-slate-500/5" />
                  
                  {/* 내부 콘텐츠 */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="relative mb-6"
                    >
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg shadow-slate-500/30">
                        <MicrophoneIcon className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full blur opacity-20 animate-pulse" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{t('hero.card.title')}</h3>
                    <p className="text-white/60 mb-6">{t('hero.card.subtitle')}</p>
                    
                    {/* 인터랙티브 요소들 */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-sm">{t('hero.card.status.recording')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300" />
                        <span className="text-sm">{t('hero.card.status.analyzing')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse delay-700" />
                        <span className="text-sm">{t('hero.card.status.summarizing')}</span>
                      </div>
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