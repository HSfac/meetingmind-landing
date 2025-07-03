'use client'

import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon,
  ExclamationTriangleIcon
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
  const { language } = useLanguage()
  
  const termsData = [
    {
      title: "1. 서비스 개요",
      content: [
        "MeetingMind는 AI 기반 회의 분석 및 요약 서비스를 제공합니다.",
        "본 서비스는 음성 인식, 자연어 처리, 회의 요약 등의 기능을 포함합니다.",
        "사용자는 회의 녹음을 통해 자동화된 분석과 요약을 받을 수 있습니다."
      ]
    },
    {
      title: "2. 이용 조건",
      content: [
        "본 서비스는 만 14세 이상의 개인 또는 법인이 이용할 수 있습니다.",
        "사용자는 정확하고 최신의 정보를 제공해야 합니다.",
        "계정 정보의 보안 유지는 사용자의 책임입니다.",
        "서비스 이용 시 관련 법령을 준수해야 합니다."
      ]
    },
    {
      title: "3. 개인정보 보호",
      content: [
        "회의 데이터는 AES-256 암호화로 보호됩니다.",
        "개인정보는 서비스 제공 목적에만 사용됩니다.",
        "사용자의 동의 없이 제3자에게 개인정보를 제공하지 않습니다.",
        "개인정보 처리방침은 별도로 공지됩니다."
      ]
    },
    {
      title: "4. 서비스 이용 제한",
      content: [
        "불법적이거나 부적절한 콘텐츠의 업로드를 금지합니다.",
        "서비스의 안정성을 해치는 행위를 금지합니다.",
        "지적 재산권을 침해하는 행위를 금지합니다.",
        "위반 시 서비스 이용이 제한될 수 있습니다."
      ]
    },
    {
      title: "5. 요금 및 결제",
      content: [
        "기본 서비스는 무료로 제공되며, 프리미엄 기능은 유료입니다.",
        "요금은 사전 고지 후 변경될 수 있습니다.",
        "결제는 안전한 결제 시스템을 통해 처리됩니다.",
        "환불 정책은 관련 법령에 따라 적용됩니다."
      ]
    },
    {
      title: "6. 면책 조항",
      content: [
        "서비스 중단으로 인한 손해에 대해 회사는 책임지지 않습니다.",
        "AI 분석 결과의 정확성을 보장하지 않습니다.",
        "사용자의 부주의로 인한 데이터 손실에 대해 책임지지 않습니다.",
        "천재지변 등 불가항력으로 인한 서비스 중단 시 면책됩니다."
      ]
    },
    {
      title: "7. 약관 변경",
      content: [
        "본 약관은 관련 법령의 변경 또는 회사 정책에 따라 변경될 수 있습니다.",
        "약관 변경 시 최소 7일 전에 공지합니다.",
        "중요한 변경사항은 이메일로 개별 통지할 수 있습니다.",
        "변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다."
      ]
    }
  ]
  
  return (
    <>
      <Head>
        <title>이용약관 | MeetingMind</title>
        <meta name="description" content="MeetingMind 서비스 이용약관을 확인하세요. AI 기반 회의 분석 서비스 이용 조건과 정책을 안내합니다." />
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
              이용약관
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
                <div className="text-sm font-medium text-gray-900">최종 업데이트</div>
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
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0" />
                        <p className="text-gray-600 leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@meetingmind.ai"
                  className="btn btn-primary"
                >
                  이메일 문의
                </a>
                <a
                  href="/contact"
                  className="btn btn-secondary"
                >
                  고객센터
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </>
  )
} 