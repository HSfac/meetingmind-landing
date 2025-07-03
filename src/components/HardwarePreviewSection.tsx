'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

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

const HardwarePreviewSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="hardware-preview" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6"
          >
            <CpuChipIcon className="w-4 h-4" />
            {t('hardware.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 mb-6"
          >
            {t('hardware.title')} <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">{t('hardware.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-12"
          >
            {t('hardware.subtitle')}
          </motion.p>
          
          {/* 간단한 제품 카드 */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {[0, 1].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-slate-600 rounded-xl flex items-center justify-center">
                    {index === 0 ? (
                      <CpuChipIcon className="w-8 h-8 text-white" />
                    ) : (
                      <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{t(`hardware.products.${index}.name`)}</h3>
                    <p className="text-blue-600 font-semibold">{t(`hardware.products.${index}.price`)}</p>
                  </div>
                </div>
                <p className="text-slate-600">{t(`hardware.products.${index}.description`)}</p>
              </motion.div>
            ))}
          </div>
          
          {/* 하드웨어 페이지로 이동 버튼 */}
          <motion.a
            href="/hardware"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('hardware.preorder.cta')}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default HardwarePreviewSection 