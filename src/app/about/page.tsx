'use client'

import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  BoltIcon,
  HeartIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  TrophyIcon,
  SparklesIcon,
  PlayIcon,
  ChevronRightIcon,
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

export default function About() {
  const { language, t } = useLanguage()
  
  const achievements = [
    { number: t('about.achievements.items.0.number'), label: t('about.achievements.items.0.label'), icon: UserGroupIcon },
    { number: t('about.achievements.items.1.number'), label: t('about.achievements.items.1.label'), icon: BoltIcon },
    { number: t('about.achievements.items.2.number'), label: t('about.achievements.items.2.label'), icon: TrophyIcon },
    { number: t('about.achievements.items.3.number'), label: t('about.achievements.items.3.label'), icon: GlobeAltIcon }
  ]

  const timeline = [
    { year: "2023", title: t('about.timeline.items.0.title'), desc: t('about.timeline.items.0.description') },
    { year: "2023 Q3", title: t('about.timeline.items.1.title'), desc: t('about.timeline.items.1.description') },
    { year: "2024 Q1", title: t('about.timeline.items.2.title'), desc: t('about.timeline.items.2.description') },
    { year: "2024 Q2", title: t('about.timeline.items.3.title'), desc: t('about.timeline.items.3.description') },
    { year: "2024 Q4", title: t('about.timeline.items.4.title'), desc: t('about.timeline.items.4.description') }
  ]
  
  return (
    <div>
      <Head>
        <title>{t('about.meta.title')} | MeetingMind</title>
        <meta name="description" content={t('about.meta.description')} />
        <meta name="keywords" content={t('about.meta.keywords')} />
        <meta property="og:title" content={`${t('about.meta.title')} | MeetingMind`} />
        <meta property="og:description" content={t('about.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmind.ai/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('about.meta.title')} | MeetingMind`} />
        <meta name="twitter:description" content={t('about.meta.description')} />
        <link rel="canonical" href="https://meetingmind.ai/about" />
        <html lang={language} />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Apple 스타일 Hero 섹션 */}
        <section className="pt-32 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8"
              >
                <SparklesIcon className="w-4 h-4" />
                {t('about.badge')}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl apple-heading text-gray-900 mb-6 leading-tight"
              >
                {t('about.hero.title')}<br />
                <span className="text-gray-600">
                  {t('about.hero.titleHighlight')}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl apple-subheading max-w-3xl mx-auto mb-12"
              >
                {t('about.hero.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="btn btn-primary group">
                  <PlayIcon className="w-5 h-5" />
                  {t('about.hero.cta.video')}
                </button>
                
                <button className="btn btn-secondary group">
                  <EnvelopeIcon className="w-5 h-5" />
                  {t('about.hero.cta.contact')}
                  <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Apple 스타일 성과 섹션 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl apple-heading text-gray-900 mb-4">
                {t('about.achievements.title')}
              </h2>
              <p className="text-xl apple-subheading max-w-2xl mx-auto">
                {t('about.achievements.subtitle')}
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="apple-card p-8 text-center group"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gray-800 transition-colors">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-semibold text-gray-900 mb-2">
                    {item.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apple 스타일 미션 & 비전 섹션 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="apple-card p-12 text-center">
                  <div className="w-24 h-24 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <LightBulbIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.mission.values.0.title')}</h3>
                  <p className="text-gray-600">{t('about.mission.values.0.description')}</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl apple-heading text-gray-900 mb-6">
                      {t('about.mission.title')}
                    </h2>
                    <p className="text-xl apple-subheading leading-relaxed mb-8">
                      {t('about.mission.description')}
                    </p>
                  </div>
                  
                  {/* Apple 스타일 가치 카드들 */}
                  <div className="space-y-4">
                    {[
                      { icon: BoltIcon, title: t('about.mission.values.0.title'), desc: t('about.mission.values.0.description') },
                      { icon: ShieldCheckIcon, title: t('about.mission.values.1.title'), desc: t('about.mission.values.1.description') },
                      { icon: HeartIcon, title: t('about.mission.values.2.title'), desc: t('about.mission.values.2.description') }
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                          <p className="text-gray-600 text-sm">{value.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Apple 스타일 타임라인 섹션 */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl apple-heading text-gray-900 mb-4">
                {t('about.timeline.title')}
              </h2>
              <p className="text-xl apple-subheading max-w-2xl mx-auto">
                {t('about.timeline.subtitle')}
              </p>
            </AnimatedSection>
            
            <div className="relative">
              {/* 타임라인 라인 */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300 hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1">
                      <div className={`apple-card p-8 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="text-sm font-medium text-gray-500 mb-2">{item.year}</div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    
                    {/* 타임라인 노드 */}
                    <div className="w-4 h-4 bg-gray-900 rounded-full flex-shrink-0 z-10 hidden md:block"></div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 