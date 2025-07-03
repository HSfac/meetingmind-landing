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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300"
      title={t('nav.languageToggle')}
    >
      <GlobeAltIcon className="w-4 h-4 text-gray-600" />
      
      {/* Apple 스타일 언어 표시 */}
      <div className="relative flex items-center gap-1">
        <span className={`text-sm font-medium transition-colors duration-300 ${language === 'ko' ? 'text-gray-900' : 'text-gray-500'}`}>
          KO
        </span>
        <span className="text-gray-300">|</span>
        <span className={`text-sm font-medium transition-colors duration-300 ${language === 'en' ? 'text-gray-900' : 'text-gray-500'}`}>
          EN
        </span>
      </div>
    </motion.button>
  )
}

export default LanguageToggle 