'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      title={t('nav.languageToggle')}
    >
      <GlobeAltIcon className="w-4 h-4" />
      
      {/* 언어 표시 */}
      <div className="relative flex items-center gap-1">
        <span className={`text-sm font-medium transition-opacity duration-300 ${language === 'ko' ? 'opacity-100' : 'opacity-50'}`}>
          KO
        </span>
        <span className="text-white/50">|</span>
        <span className={`text-sm font-medium transition-opacity duration-300 ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}>
          EN
        </span>
      </div>
      
      {/* 슬라이딩 백그라운드 */}
      <motion.div
        className="absolute inset-0 bg-blue-500/30 rounded-full"
        animate={{
          x: language === 'ko' ? 0 : '100%'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      />
    </motion.button>
  )
}

export default LanguageToggle 