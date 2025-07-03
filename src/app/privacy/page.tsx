'use client'

import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  TrashIcon,
  DocumentTextIcon,
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

export default function Privacy() {
  const { language, t } = useLanguage()
  
  const privacyData = [
    {
      title: t('privacy.sections.overview.title'),
      content: t('privacy.sections.overview.content')
    },
    {
      title: t('privacy.sections.collection.title'),
      content: t('privacy.sections.collection.content')
    },
    {
      title: t('privacy.sections.items.title'),
      content: t('privacy.sections.items.content')
    },
    {
      title: t('privacy.sections.retention.title'),
      content: t('privacy.sections.retention.content')
    },
    {
      title: t('privacy.sections.sharing.title'),
      content: t('privacy.sections.sharing.content')
    },
    {
      title: t('privacy.sections.security.title'),
      content: t('privacy.sections.security.content')
    },
    {
      title: t('privacy.sections.rights.title'),
      content: t('privacy.sections.rights.content')
    },
    {
      title: t('privacy.sections.contact.title'),
      content: t('privacy.sections.contact.content')
    }
  ]
  
  const userRights = [
    {
      icon: EyeIcon,
      title: "열람권",
      description: "개인정보 처리 현황을 확인할 수 있습니다"
    },
    {
      icon: DocumentTextIcon,
      title: "정정·삭제권",
      description: "잘못된 정보의 수정이나 삭제를 요구할 수 있습니다"
    },
    {
      icon: LockClosedIcon,
      title: "처리정지권",
      description: "개인정보 처리 중단을 요구할 수 있습니다"
    },
    {
      icon: TrashIcon,
      title: "손해배상권",
      description: "개인정보 침해로 인한 피해를 구제받을 수 있습니다"
    }
  ]
  
  return (
    <>
      <Head>
        <title>{t('privacy.meta.title')} | MeetingMind</title>
        <meta name="description" content={t('privacy.meta.description')} />
        <meta name="keywords" content={t('privacy.meta.keywords')} />
        <meta property="og:title" content={`${t('privacy.meta.title')} | MeetingMind`} />
        <meta property="og:description" content={t('privacy.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmind.ai/privacy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('privacy.meta.title')} | MeetingMind`} />
        <meta name="twitter:description" content={t('privacy.meta.description')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://meetingmind.ai/privacy" />
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
              <ShieldCheckIcon className="w-4 h-4" />
              개인정보 보호
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl apple-heading text-gray-900 mb-6"
            >
              {t('privacy.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl apple-subheading max-w-3xl mx-auto mb-8"
            >
              MeetingMind는 사용자의 개인정보를 안전하게 보호하며, 투명하게 관리합니다.
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
                <div className="text-sm font-medium text-gray-900">{t('privacy.lastUpdated')}</div>
                <div className="text-sm text-gray-600">2024년 1월 1일</div>
              </div>
              <div className="apple-card p-4 text-center">
                <LockClosedIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">보안 등급</div>
                <div className="text-sm text-gray-600">AES-256 암호화</div>
              </div>
              <div className="apple-card p-4 text-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">데이터 보관</div>
                <div className="text-sm text-gray-600">최소 기간 원칙</div>
              </div>
            </motion.div>
          </AnimatedSection>
          
          {/* 개인정보 처리방침 내용 */}
          <div className="space-y-12">
            {privacyData.map((section, index) => (
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
          
          {/* 사용자 권리 섹션 */}
          <AnimatedSection className="mt-16">
            <div className="apple-card p-8 bg-gray-50">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                사용자의 권리
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {userRights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <right.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{right.title}</h4>
                      <p className="text-gray-600 text-sm">{right.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* 연락처 정보 */}
          <AnimatedSection className="mt-16">
            <div className="apple-card p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                개인정보 관련 문의
              </h3>
              <p className="text-gray-600 mb-6">
                개인정보 처리에 대한 문의나 권리 행사를 원하시면 연락해 주세요.
              </p>
              <div className="space-y-4">
                <div className="text-sm text-gray-700">
                  <div className="font-medium">개인정보보호책임자: 김OO</div>
                  <div>이메일: privacy@meetingmind.ai</div>
                </div>
                <button className="btn btn-primary">
                  <EnvelopeIcon className="w-5 h-5" />
                  문의하기
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </>
  )
} 