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
  RocketLaunchIcon,
  SparklesIcon,
  TrophyIcon,
  PlayIcon,
  ChevronRightIcon,
  MapPinIcon,
  EnvelopeIcon
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

export default function About() {
  const { t, language } = useLanguage()
  
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

  const team = [
    {
      name: "김민수",
      role: "CEO & Co-founder",
      description: "스탠포드 AI 연구소 출신으로 10년간 음성 인식 기술을 연구해왔습니다.",
      image: "👨‍💼",
      linkedin: "#"
    },
    {
      name: "박지영", 
      role: "CTO & Co-founder",
      description: "구글 출신 엔지니어로 대규모 AI 시스템 구축 경험을 보유하고 있습니다.",
      image: "👩‍💻",
      linkedin: "#"
    },
    {
      name: "이서연",
      role: "Head of Design", 
      description: "애플 디자인 팀 출신으로 직관적이고 아름다운 UX를 설계합니다.",
      image: "👩‍🎨",
      linkedin: "#"
    },
    {
      name: "정태호",
      role: "Head of AI",
      description: "카이스트 AI 박사로 최첨단 음성 인식 알고리즘을 개발합니다.",
      image: "👨‍🔬",
      linkedin: "#"
    }
  ]
  
  return (
    <>
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

      {/* Hero 섹션 */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.2),transparent)]" />
        
        {/* 플로팅 요소들 - 고정된 위치 사용 */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { left: 10, top: 20 },
            { left: 80, top: 15 },
            { left: 25, top: 60 },
            { left: 70, top: 80 },
            { left: 45, top: 30 },
            { left: 90, top: 45 },
            { left: 15, top: 75 },
            { left: 60, top: 25 },
            { left: 35, top: 85 },
            { left: 85, top: 65 },
            { left: 5, top: 40 },
            { left: 50, top: 10 },
            { left: 75, top: 55 },
            { left: 20, top: 90 },
            { left: 95, top: 35 }
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
              >
                <SparklesIcon className="w-4 h-4" />
                {t('about.hero.title')} 회사
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              >
                {t('about.hero.title')}{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t('about.hero.titleHighlight')}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 leading-relaxed mb-8"
              >
                {t('about.hero.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <PlayIcon className="w-5 h-5" />
                  회사 소개 영상
                </button>
                
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
                  <EnvelopeIcon className="w-5 h-5" />
                  연락하기
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* 메인 이미지 플레이스홀더 */}
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <RocketLaunchIcon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold mb-2">혁신의 여정</h3>
                      <p className="text-white/80">AI로 회의 문화를 바꾸다</p>
                    </div>
                  </div>
                  
                  {/* 플로팅 카드들 */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  >
                    <LightBulbIcon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 left-4 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  >
                    <HeartIcon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 성과 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              숫자로 보는 MeetingMind
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 미션 & 비전 섹션 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <LightBulbIcon className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">혁신적 사고</h3>
                    <p className="text-slate-600">AI 기술로 회의의 패러다임을 바꿉니다</p>
                  </div>
                  
                  {/* 장식 요소들 */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
                    <SparklesIcon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
                    <BoltIcon className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">
                    {t('about.mission.title')}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {t('about.mission.description')}
                  </p>
                </div>
                
                {/* 가치 카드들 */}
                <div className="space-y-4">
                  {[
                    { icon: BoltIcon, title: "혁신", desc: "최신 AI 기술로 회의 문화 혁신", color: "from-blue-500 to-blue-600" },
                    { icon: ShieldCheckIcon, title: "신뢰", desc: "군사급 보안으로 데이터 보호", color: "from-green-500 to-green-600" },
                    { icon: HeartIcon, title: "사용자 중심", desc: "사용자 경험을 최우선으로", color: "from-red-500 to-pink-600" }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{value.title}</h4>
                        <p className="text-slate-600 text-sm">{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 타임라인 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              성장의 여정
            </h2>
            <p className="text-lg text-slate-600">
              MeetingMind가 걸어온 혁신의 발자취
            </p>
          </AnimatedSection>
          
          <div className="relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
            
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
                  {/* 타임라인 점 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10" />
                  
                  {/* 콘텐츠 카드 */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                      <div className="text-sm font-semibold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 팀 섹션 */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  {/* 프로필 이미지 */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {member.image}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    LinkedIn
                    <ChevronRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
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
              {t('about.contact.title')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('about.contact.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <EnvelopeIcon className="w-5 h-5" />
                연락하기
              </button>
              
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
                <MapPinIcon className="w-5 h-5" />
                오시는 길
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      </main>
    </>
  )
} 