'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  UserGroupIcon,
  HeartIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

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

export default function Contact() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [selectedCategory, setSelectedCategory] = useState('general')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    
    // 가상의 API 호출
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: '이메일',
      value: 'contact@meetingmind.ai',
      description: '24시간 내 답변 드립니다',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: PhoneIcon,
      title: '전화',
      value: '02-1234-5678',
      description: '평일 9:00 - 18:00',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPinIcon,
      title: '오피스',
      value: '서울특별시 강남구 테헤란로 123',
      description: '방문 상담 가능 (사전 예약)',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: '라이브 채팅',
      value: '실시간 상담',
      description: '평일 9:00 - 18:00',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  const categories = [
    { id: 'general', label: '일반 문의', icon: ChatBubbleLeftRightIcon },
    { id: 'sales', label: '영업 문의', icon: UserGroupIcon },
    { id: 'support', label: '기술 지원', icon: LightBulbIcon },
    { id: 'partnership', label: '파트너십', icon: HeartIcon }
  ]

  const faqs = [
    {
      question: '무료 체험은 어떻게 시작하나요?',
      answer: '웹사이트에서 회원가입 후 즉시 무료 체험을 시작할 수 있습니다. 신용카드 정보는 필요하지 않습니다.'
    },
    {
      question: '기업용 플랜은 어떻게 구매하나요?',
      answer: '기업용 플랜은 영업팀과 상담 후 맞춤형 견적을 제공해드립니다. 연락처를 남겨주시면 24시간 내 연락드립니다.'
    },
    {
      question: '온사이트 교육이 가능한가요?',
      answer: '네, 기업 고객을 위한 온사이트 교육 서비스를 제공합니다. 팀 규모와 요구사항에 따라 맞춤형 교육 프로그램을 진행합니다.'
    },
    {
      question: 'API 연동이 가능한가요?',
      answer: 'RESTful API와 WebSocket을 통한 실시간 연동을 지원합니다. 개발자 문서와 SDK를 제공하여 쉽게 연동할 수 있습니다.'
    }
  ]

  return (
    <>
      <Head>
        <title>문의하기 | MeetingMind</title>
        <meta name="description" content="MeetingMind 팀과 연락하세요. 궁금한 점이나 제안사항이 있으시면 언제든 문의해주세요." />
        <meta name="keywords" content="MeetingMind, 연락처, 문의, 고객지원, 상담" />
        <meta property="og:title" content="문의하기 | MeetingMind" />
        <meta property="og:description" content="MeetingMind 팀과 연락하세요. 궁금한 점이나 제안사항이 있으시면 언제든 문의해주세요." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmind.ai/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="문의하기 | MeetingMind" />
        <meta name="twitter:description" content="MeetingMind 팀과 연락하세요. 궁금한 점이나 제안사항이 있으시면 언제든 문의해주세요." />
        <link rel="canonical" href="https://meetingmind.ai/contact" />
        <html lang={language} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 text-white">

        {/* Hero 섹션 */}
        <section className="pt-24 pb-20 relative overflow-hidden">
          {/* 배경 효과 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.2),transparent)]" />
          
          {/* 플로팅 파티클 */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { left: 15, top: 25 },
              { left: 85, top: 20 },
              { left: 30, top: 65 },
              { left: 75, top: 75 },
              { left: 50, top: 35 },
              { left: 95, top: 50 },
              { left: 10, top: 80 },
              { left: 65, top: 30 },
              { left: 40, top: 90 },
              { left: 80, top: 60 }
            ].map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                언제든 연락주세요
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-black mb-6 leading-tight"
              >
                함께 만들어가는{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  미래
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              >
                궁금한 점이나 제안사항이 있으시면 언제든 연락주세요. MeetingMind 팀이 성심성의껏 도와드리겠습니다.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

        {/* 연락처 정보 섹션 */}
        <section className="py-20 bg-white text-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                다양한 방법으로 연락하세요
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                가장 편한 방법으로 연락주시면 빠르게 답변드리겠습니다
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-900 font-medium mb-2">
                      {item.value}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 문의 폼 섹션 */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* 폼 */}
              <AnimatedSection>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    메시지 보내기
                  </h2>
                  
                  {/* 카테고리 선택 */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      문의 유형
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-2 p-3 rounded-xl border transition-all duration-200 ${
                            selectedCategory === category.id
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-slate-200 hover:border-slate-300 text-slate-600'
                          }`}
                        >
                          <category.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{category.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          이름 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="홍길동"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          이메일 *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="hong@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        회사명
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="회사명 (선택사항)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        제목 *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="문의 제목을 입력하세요"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        메시지 *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="궁금한 점이나 요청사항을 자세히 적어주세요"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          전송 중...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5" />
                          메시지 보내기
                        </>
                      )}
                    </button>
                    
                    {/* 상태 메시지 */}
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800"
                      >
                        <CheckCircleIcon className="w-5 h-5" />
                        <span>메시지가 성공적으로 전송되었습니다! 24시간 내 답변드리겠습니다.</span>
                      </motion.div>
                    )}
                    
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
                      >
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        <span>전송 중 오류가 발생했습니다. 다시 시도해주세요.</span>
                      </motion.div>
                    )}
                  </form>
                </div>
              </AnimatedSection>
              
              {/* 추가 정보 */}
              <AnimatedSection>
                <div className="space-y-8">
                  {/* 오피스 위치 */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      오피스 방문
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPinIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">주소</h4>
                          <p className="text-slate-600">서울특별시 강남구 테헤란로 123<br />MeetingMind 빌딩 5층</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <ClockIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">운영시간</h4>
                          <p className="text-slate-600">평일 9:00 - 18:00<br />주말 및 공휴일 휴무</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <UserGroupIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">방문 상담</h4>
                          <p className="text-slate-600">사전 예약 필수<br />데모 및 상세 설명 제공</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 자주 묻는 질문 */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      자주 묻는 질문
                    </h3>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <details key={index} className="group">
                          <summary className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                            <span className="font-medium text-slate-900">{faq.question}</span>
                            <SparklesIcon className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="p-4 text-slate-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent)]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">
                아직 MeetingMind를 사용해보지 않으셨나요?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                지금 바로 무료로 체험해보세요. 설치 시간 단 2분!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <GlobeAltIcon className="w-5 h-5" />
                  무료 체험 시작
                </button>
                
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  라이브 데모 예약
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
    </>
  )
} 