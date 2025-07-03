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
  const { language } = useLanguage()
  
  const achievements = [
    { number: "25K+", label: "활성 사용자", icon: UserGroupIcon },
    { number: "500K+", label: "분석한 회의", icon: BoltIcon },
    { number: "95%", label: "고객 만족도", icon: TrophyIcon },
    { number: "12+", label: "지원 언어", icon: GlobeAltIcon }
  ]

  const timeline = [
    { year: "2023", title: "회사 설립", desc: "AI 회의 솔루션의 비전으로 시작" },
    { year: "2023 Q3", title: "베타 런칭", desc: "초기 사용자들과 함께 제품 검증" },
    { year: "2024 Q1", title: "정식 출시", desc: "MeetingMind 1.0 공식 런칭" },
    { year: "2024 Q2", title: "시리즈 A", desc: "50억원 투자 유치 성공" },
    { year: "2024 Q4", title: "글로벌 진출", desc: "아시아 시장 확장 계획" }
  ]
  
  return (
    <div>
      <Head>
        <title>회사 소개 | MeetingMind</title>
        <meta name="description" content="MeetingMind 회사 소개 - AI 기반 회의 솔루션으로 더 스마트한 회의 문화를 만들어갑니다." />
        <meta name="keywords" content="MeetingMind, AI 회의, 회의 분석, 음성 인식, 회의 요약" />
        <meta property="og:title" content="회사 소개 | MeetingMind" />
        <meta property="og:description" content="MeetingMind 회사 소개 - AI 기반 회의 솔루션으로 더 스마트한 회의 문화를 만들어갑니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetingmind.ai/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="회사 소개 | MeetingMind" />
        <meta name="twitter:description" content="MeetingMind 회사 소개 - AI 기반 회의 솔루션으로 더 스마트한 회의 문화를 만들어갑니다." />
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
                회사 소개
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl apple-heading text-gray-900 mb-6 leading-tight"
              >
                미래의 회의를<br />
                <span className="text-gray-600">
                  오늘 만나보세요
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl apple-subheading max-w-3xl mx-auto mb-12"
              >
                MeetingMind는 AI 기반 회의 솔루션으로 더 스마트한 회의 문화를 만들어갑니다.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="btn btn-primary group">
                  <PlayIcon className="w-5 h-5" />
                  회사 소개 영상
                </button>
                
                <button className="btn btn-secondary group">
                  <EnvelopeIcon className="w-5 h-5" />
                  연락하기
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
                숫자로 보는 MeetingMind
              </h2>
              <p className="text-xl apple-subheading max-w-2xl mx-auto">
                전 세계 사용자들과 함께 만들어온 성과를 확인하세요
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">혁신적 사고</h3>
                  <p className="text-gray-600">AI 기술로 회의의 패러다임을 바꿉니다</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl apple-heading text-gray-900 mb-6">
                      우리의 미션
                    </h2>
                    <p className="text-xl apple-subheading leading-relaxed mb-8">
                      모든 회의가 생산적이고 의미 있는 시간이 되도록 돕는 것이 우리의 목표입니다.
                    </p>
                  </div>
                  
                  {/* Apple 스타일 가치 카드들 */}
                  <div className="space-y-4">
                    {[
                      { icon: BoltIcon, title: "혁신", desc: "최신 AI 기술로 회의 문화 혁신" },
                      { icon: ShieldCheckIcon, title: "신뢰", desc: "군사급 보안으로 데이터 보호" },
                      { icon: HeartIcon, title: "사용자 중심", desc: "사용자 경험을 최우선으로" }
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
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
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl apple-heading text-gray-900 mb-4">
                성장의 여정
              </h2>
              <p className="text-xl apple-subheading">
                MeetingMind가 걸어온 혁신의 발자취
              </p>
            </AnimatedSection>
            
            <div className="relative">
              {/* Apple 스타일 타임라인 라인 */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gray-300 rounded-full" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Apple 스타일 타임라인 점 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full border-4 border-white shadow-md z-10" />
                    
                    {/* Apple 스타일 콘텐츠 카드 */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <div className="apple-card p-6 hover:shadow-lg transition-all duration-300">
                        <div className="text-sm font-semibold text-gray-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
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