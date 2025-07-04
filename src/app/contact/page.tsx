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
  BuildingOfficeIcon
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
      title: t('contactPage.contactInfo.items.email.title'),
      value: t('contactPage.contactInfo.items.email.value'),
      description: t('contactPage.contactInfo.items.email.description'),
      color: 'blue'
    },
    {
      icon: PhoneIcon,
      title: t('contactPage.contactInfo.items.phone.title'),
      value: t('contactPage.contactInfo.items.phone.value'),
      description: t('contactPage.contactInfo.items.phone.description'),
      color: 'green'
    },
    {
      icon: MapPinIcon,
      title: t('contactPage.contactInfo.items.office.title'),
      value: t('contactPage.contactInfo.items.office.value'),
      description: t('contactPage.contactInfo.items.office.description'),
      color: 'purple'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('contactPage.contactInfo.items.chat.title'),
      value: t('contactPage.contactInfo.items.chat.value'),
      description: t('contactPage.contactInfo.items.chat.description'),
      color: 'pink'
    }
  ]

  const categories = [
    { id: 'general', label: t('contactPage.form.categories.general'), icon: ChatBubbleLeftRightIcon },
    { id: 'sales', label: t('contactPage.form.categories.sales'), icon: UserGroupIcon },
    { id: 'support', label: t('contactPage.form.categories.support'), icon: LightBulbIcon },
    { id: 'partnership', label: t('contactPage.form.categories.partnership'), icon: HeartIcon }
  ]

  const faqs = [
    {
      question: t('contactPage.faq.items.0.question'),
      answer: t('contactPage.faq.items.0.answer')
    },
    {
      question: t('contactPage.faq.items.1.question'),
      answer: t('contactPage.faq.items.1.answer')
    },
    {
      question: t('contactPage.faq.items.2.question'),
      answer: t('contactPage.faq.items.2.answer')
    },
    {
      question: t('contactPage.faq.items.3.question'),
      answer: t('contactPage.faq.items.3.answer')
    }
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
        <meta property="og:image" content="https://meetingmind.ai/og/og-contact.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('contactPage.meta.title')} | MeetingMind`} />
        <meta name="twitter:description" content={t('contactPage.meta.description')} />
        <meta name="twitter:image" content="https://meetingmind.ai/og/og-contact.jpg" />
        <link rel="canonical" href="https://meetingmind.ai/contact" />
        <html lang={language} />
      </Head>
      
      <main className="min-h-screen bg-white">

        {/* Apple 스타일 Hero 섹션 */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-medium mb-6 md:mb-8"
              >
                <ChatBubbleLeftRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                {t('contactPage.hero.badge')}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl apple-heading text-gray-900 mb-4 md:mb-6"
              >
                {t('contactPage.hero.title')} <span className="text-gray-600">{t('contactPage.hero.titleHighlight')}</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl apple-subheading max-w-3xl mx-auto"
              >
                {t('contactPage.hero.subtitle')}
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

        {/* Apple 스타일 연락 방법 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('contactPage.contactInfo.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl apple-subheading max-w-2xl mx-auto">
                {t('contactPage.contactInfo.subtitle')}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="apple-card p-6 md:p-8 text-center group cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gray-800 transition-colors">
                      <method.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">{method.value}</p>
                  <p className="text-xs md:text-sm text-gray-500">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apple 스타일 문의 폼 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('contactPage.form.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl apple-subheading max-w-2xl mx-auto">
                {t('contactPage.form.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="apple-card p-4 md:p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 카테고리 선택 */}
                  <div className="mb-6 md:mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3 md:mb-4">
                      {t('contactPage.form.categoryLabel')}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-2 p-3 md:p-4 rounded-lg border-2 transition-all ${
                            selectedCategory === category.id
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <category.icon className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="text-xs md:text-sm font-medium">{category.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* 입력 필드들 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contactPage.form.fields.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.form.placeholders.name')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contactPage.form.fields.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.form.placeholders.email')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contactPage.form.fields.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.form.placeholders.company')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contactPage.form.fields.subject')}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.form.placeholders.subject')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contactPage.form.fields.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contactPage.form.placeholders.message')}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                      required
                    />
                  </div>
                  
                  {/* 제출 버튼 */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="btn btn-primary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                          {t('contactPage.form.buttons.sending')}
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                          {t('contactPage.form.buttons.send')}
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* 성공 메시지 */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                    >
                      <CheckCircleIcon className="w-5 h-5" />
                      <span>{t('contactPage.form.messages.success')}</span>
                    </motion.div>
                  )}
                  
                  {/* 에러 메시지 */}
                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                    >
                      <span>{t('contactPage.form.messages.error')}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 오피스 정보 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('contactPage.office.title')}
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <AnimatedSection>
                <div className="apple-card p-6 md:p-8 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <MapPinIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    {t('contactPage.office.address.title')}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">
                    {t('contactPage.office.address.value')}
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="apple-card p-6 md:p-8 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <BuildingOfficeIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    {t('contactPage.office.hours.title')}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">
                    {t('contactPage.office.hours.value')}
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="apple-card p-6 md:p-8 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <UserGroupIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    {t('contactPage.office.consultation.title')}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line text-sm md:text-base">
                    {t('contactPage.office.consultation.value')}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('contactPage.faq.title')}
              </h2>
            </AnimatedSection>
            
            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index}>
                  <div className="apple-card overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-4 py-3 md:px-6 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 text-sm md:text-base pr-4">{faq.question}</span>
                      <ChevronDownIcon 
                        className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform flex-shrink-0 ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="px-4 pb-3 md:px-6 md:pb-4 text-gray-600 text-xs md:text-sm"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl apple-heading text-gray-900 mb-3 md:mb-4">
                {t('contactPage.cta.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl apple-subheading mb-6 md:mb-8">
                {t('contactPage.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button className="btn btn-primary">
                  {t('contactPage.cta.buttons.freeTrial')}
                </button>
                <button className="btn btn-secondary">
                  {t('contactPage.cta.buttons.liveDemo')}
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  )
} 