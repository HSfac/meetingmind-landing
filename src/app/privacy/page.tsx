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

export default function Privacy() {
  const { language } = useLanguage()
  
  const privacyData = [
    {
      title: "1. 개인정보 수집 목적",
      content: [
        "회원 가입 및 서비스 제공을 위한 식별 정보 수집",
        "AI 기반 회의 분석 및 요약 서비스 제공",
        "고객 지원 및 문의 응답",
        "서비스 개선 및 통계 분석"
      ]
    },
    {
      title: "2. 수집하는 개인정보 항목",
      content: [
        "필수 정보: 이름, 이메일 주소, 비밀번호",
        "선택 정보: 전화번호, 회사명, 직책",
        "서비스 이용 정보: 회의 녹음 파일, 사용 기록",
        "기술 정보: IP 주소, 쿠키, 접속 기록"
      ]
    },
    {
      title: "3. 개인정보 보유 및 이용기간",
      content: [
        "회원 탈퇴 시까지 (단, 관련 법령에 의한 보존 기간 예외)",
        "회의 데이터: 사용자 요청 시 즉시 삭제",
        "로그 기록: 3개월 보관 후 자동 삭제",
        "마케팅 정보: 동의 철회 시 즉시 삭제"
      ]
    },
    {
      title: "4. 개인정보 처리 위탁",
      content: [
        "클라우드 서비스: AWS (미국) - 데이터 저장 및 처리",
        "결제 서비스: 포트원 (한국) - 결제 처리",
        "이메일 서비스: SendGrid (미국) - 이메일 발송",
        "분석 서비스: Google Analytics (미국) - 서비스 분석"
      ]
    },
    {
      title: "5. 개인정보 보안 조치",
      content: [
        "모든 데이터는 AES-256 암호화로 보호됩니다",
        "전송 중인 데이터는 SSL/TLS 암호화 적용",
        "접근 권한 관리 및 정기적인 보안 점검",
        "개인정보 취급자 대상 보안 교육 실시"
      ]
    },
    {
      title: "6. 이용자의 권리",
      content: [
        "개인정보 열람, 정정, 삭제 요구권",
        "개인정보 처리 정지 요구권",
        "손해배상 청구권",
        "개인정보 보호책임자에게 권리 행사 가능"
      ]
    },
    {
      title: "7. 개인정보 국외 이전",
      content: [
        "일부 서비스는 해외 서버를 통해 처리됩니다",
        "이전 국가: 미국, 싱가포르",
        "이전 목적: 클라우드 서비스 및 데이터 처리",
        "안전성 확보 조치: 적절한 보안 수준 유지"
      ]
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
        <title>개인정보 처리방침 | MeetingMind</title>
        <meta name="description" content="MeetingMind 개인정보 처리방침을 확인하세요. 개인정보 수집, 이용, 보호에 대한 모든 정보를 투명하게 공개합니다." />
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
              개인정보 처리방침
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
                <div className="text-sm font-medium text-gray-900">최종 업데이트</div>
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
          
          {/* 사용자 권리 섹션 */}
          <AnimatedSection className="mt-16">
            <div className="apple-card p-8 bg-gray-50">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                개인정보 주체의 권리
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {userRights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <right.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{right.title}</h4>
                      <p className="text-sm text-gray-600">{right.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* 개인정보 보호책임자 정보 */}
          <AnimatedSection className="mt-16">
            <div className="apple-card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                개인정보 보호책임자
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-4">개인정보 보호책임자</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>성명: 김민수</p>
                    <p>직책: 최고개인정보보호책임자(CPO)</p>
                    <p>이메일: privacy@meetingmind.ai</p>
                    <p>전화: 02-1234-5678</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-4">개인정보 보호담당자</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>성명: 이서연</p>
                    <p>직책: 개인정보보호담당자</p>
                    <p>이메일: privacy@meetingmind.ai</p>
                    <p>전화: 02-1234-5679</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* 연락처 정보 */}
          <AnimatedSection className="mt-16">
            <div className="apple-card p-8 text-center bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                개인정보 관련 문의
              </h3>
              <p className="text-gray-600 mb-6">
                개인정보 처리에 대한 문의사항이나 권리 행사를 원하시면 언제든지 연락해 주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@meetingmind.ai"
                  className="btn btn-primary"
                >
                  개인정보 문의
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