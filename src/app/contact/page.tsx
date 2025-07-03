'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  UserGroupIcon,
  HeartIcon,
  LightBulbIcon,
  ChevronDownIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'

// 애니메이션 컴포넌트
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

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

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: '이메일',
      value: 'hello@meetingmind.ai',
      description: '24시간 내 답변',
      color: 'blue'
    },
    {
      icon: PhoneIcon,
      title: '전화',
      value: '+82 2-1234-5678',
      description: '평일 9시-18시',
      color: 'green'
    },
    {
      icon: MapPinIcon,
      title: '오피스',
      value: '서울특별시 강남구',
      description: '사전 예약 필요',
      color: 'purple'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: '라이브 채팅',
      value: '실시간 상담',
      description: '즉시 응답',
      color: 'pink'
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
      question: '무료 체험은 어떻게 신청하나요?',
      answer: '웹사이트에서 간단한 정보를 입력하시면 즉시 14일 무료 체험을 시작할 수 있습니다.'
    },
    {
      question: '어떤 기기에서 사용할 수 있나요?',
      answer: 'Windows, Mac, iOS, Android 등 모든 주요 플랫폼에서 사용 가능합니다.'
    },
    {
      question: '데이터 보안은 어떻게 보장되나요?',
      answer: '엔터프라이즈급 보안 시스템과 종단간 암호화로 데이터를 안전하게 보호합니다.'
    },
    {
      question: '기업 할인이 있나요?',
      answer: '10명 이상 기업 고객에게는 특별 할인 혜택을 제공합니다.'
    }
  ]

  const officeHours = [
    { day: '월요일 - 금요일', time: '09:00 - 18:00' },
    { day: '토요일', time: '10:00 - 14:00' },
    { day: '일요일', time: '휴무' }
  ]

  return (
    <>
      <Head>
        <title>{t('contactPage.meta.title')} | MeetingMind</title>
        <meta name="description" content={t('contactPage.meta.description')} />
        <meta name="keywords" content={t('contactPage.meta.keywords')} />
        <meta property="og:title" content={`${t('contactPage.meta.title')} | MeetingMind`} />
        <meta property="og:description" content={t('contactPage.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmind.ai/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('contactPage.meta.title')} | MeetingMind`} />
        <meta name="twitter:description" content={t('contactPage.meta.description')} />
        <link rel="canonical" href="https://meetingmind.ai/contact" />
        <html lang={language} />
      </Head>
      
      <main className="min-h-screen bg-white">

        {/* Apple 스타일 Hero 섹션 */}
        <section className="pt-32 pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                고객 지원
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl apple-heading text-gray-900 mb-6"
              >
                문의하기
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl apple-subheading max-w-3xl mx-auto"
              >
                궁금한 점이 있으신가요?<br />
                언제든지 연락주세요. 도움을 드리겠습니다.
              </motion.p>
              
              {/* 앱 다운로드 버튼 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              >
                <div className="text-sm text-gray-500 mb-4 sm:mb-0 sm:mr-4">
                  모바일 앱으로 간편하게 문의하세요
                </div>
                <div className="flex gap-4">
                  {/* App Store 버튼 */}
                  <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-70">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                  
                  {/* Google Play 버튼 */}
                  <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors duration-200">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-70">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Apple 스타일 연락 방법 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl apple-heading text-gray-900 mb-4">
                연락 방법
              </h2>
              <p className="text-xl apple-subheading max-w-2xl mx-auto">
                가장 편한 방법으로 문의해주세요.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <AnimatedSection key={index}>
                  <div className="apple-card p-8 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Apple 스타일 문의 폼 */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl apple-heading text-gray-900 mb-4">
                메시지 보내기
              </h2>
              <p className="text-xl apple-subheading max-w-2xl mx-auto">
                아래 양식을 작성해주시면 빠르게 답변드리겠습니다.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Apple 스타일 카테고리 선택 */}
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-4">
                    문의 유형
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <category.icon className="w-6 h-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{category.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* 기본 정보 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
                    placeholder="회사명 (선택사항)"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">
                    제목 *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">
                    메시지 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 resize-none"
                    placeholder="자세한 문의 내용을 입력해주세요"
                  />
                </div>

                {/* 제출 버튼 */}
                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        전송 중...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <PaperAirplaneIcon className="w-5 h-5" />
                        메시지 보내기
                      </span>
                    )}
                  </motion.button>
                </div>

                {/* 성공 메시지 */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-6 bg-green-50 rounded-2xl border border-green-200"
                  >
                    <CheckCircleIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      메시지가 성공적으로 전송되었습니다!
                    </h3>
                    <p className="text-green-700">
                      24시간 내에 답변드리겠습니다.
                    </p>
                  </motion.div>
                )}
              </form>
            </AnimatedSection>
          </div>
        </section>

        {/* 자주 묻는 질문 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                자주 묻는 질문
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                빠른 답변을 위해 자주 묻는 질문들을 확인해보세요.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                      </motion.div>
                    </button>
                    
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: expandedFAQ === index ? 'auto' : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 오피스 정보 */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                오피스 방문
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                직접 방문하여 상담을 원하시는 경우 사전 예약을 해주세요.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 지도 영역 */}
              <AnimatedSection>
                <div className="bg-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">지도가 여기에 표시됩니다</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* 오피스 정보 */}
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      오피스 정보
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <BuildingOfficeIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">주소</h4>
                          <p className="text-gray-600">
                            서울특별시 강남구 테헤란로 123<br />
                            스타트업 빌딩 10층
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <DevicePhoneMobileIcon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">연락처</h4>
                          <p className="text-gray-600">
                            +82 2-1234-5678<br />
                            hello@meetingmind.ai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      운영 시간
                    </h3>
                    <div className="space-y-3">
                      {officeHours.map((hour, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700">{hour.day}</span>
                          <span className="font-medium text-gray-900">{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      방문 전 알려드립니다
                    </h4>
                    <p className="text-blue-800 text-sm">
                      원활한 상담을 위해 방문 전 미리 연락주시기 바랍니다.
                      주차 공간이 제한적이므로 대중교통을 이용해주세요.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>
    </>
  )
} 