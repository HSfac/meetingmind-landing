'use client'

import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

// Apple 스타일 애니메이션 컴포넌트
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Terms() {
  const { language, t } = useLanguage()
  
  const termsData = [
    {
      title: t('terms.sections.general.title'),
      content: t('terms.sections.general.content')
    },
    {
      title: t('terms.sections.definitions.title'),
      content: t('terms.sections.definitions.content')
    },
    {
      title: t('terms.sections.service.title'),
      content: t('terms.sections.service.content')
    },
    {
      title: t('terms.sections.membership.title'),
      content: t('terms.sections.membership.content')
    },
    {
      title: t('terms.sections.privacy.title'),
      content: t('terms.sections.privacy.content')
    },
    {
      title: t('terms.sections.restrictions.title'),
      content: t('terms.sections.restrictions.content')
    },
    {
      title: t('terms.sections.disclaimer.title'),
      content: t('terms.sections.disclaimer.content')
    }
  ]
  
  return (
    <>
      <Head>
        <title>{t('terms.meta.title')} | MeetingMind</title>
        <meta name="description" content={t('terms.meta.description')} />
        <meta name="keywords" content={t('terms.meta.keywords')} />
        <meta property="og:title" content={`${t('terms.meta.title')} | MeetingMind`} />
        <meta property="og:description" content={t('terms.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmind.ai/terms" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('terms.meta.title')} | MeetingMind`} />
        <meta name="twitter:description" content={t('terms.meta.description')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://meetingmind.ai/terms" />
        <html lang={language} />
      </Head>
      
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Apple 스타일 Hero 섹션 */}
          <AnimatedSection className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8"
            >
              <DocumentTextIcon className="w-4 h-4" />
              법적 정보
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl apple-heading text-gray-900 mb-6"
            >
              {t('terms.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl apple-subheading max-w-3xl mx-auto mb-8"
            >
              MeetingMind 서비스 이용 시 적용되는 약관입니다.
            </motion.p>
            
            {/* 중요 정보 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              <div className="apple-card p-4 text-center">
                <ClockIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">{t('terms.lastUpdated')}</div>
                <div className="text-sm text-gray-600">2024년 1월 1일</div>
              </div>
              <div className="apple-card p-4 text-center">
                <ShieldCheckIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">적용 범위</div>
                <div className="text-sm text-gray-600">전체 서비스</div>
              </div>
              <div className="apple-card p-4 text-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">중요도</div>
                <div className="text-sm text-gray-600">필수 동의</div>
              </div>
            </motion.div>
          </AnimatedSection>
          
          {/* 약관 내용 */}
          <div className="space-y-12">
            {termsData.map((section, index) => (
              <AnimatedSection key={index}>
                <div className="apple-card p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                    {section.title}
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* 연락처 정보 */}
          <AnimatedSection className="mt-16">
            <div className="apple-card p-8 text-center bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                문의사항이 있으신가요?
              </h3>
              <p className="text-gray-600 mb-6">
                이용약관에 대한 궁금한 점은 언제든지 문의해 주세요.
              </p>
              <button className="btn btn-primary">
                <EnvelopeIcon className="w-5 h-5" />
                연락하기
              </button>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </>
  )
} 