'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    product: [
      { label: t('nav.home'), href: '/' },
      { label: t('nav.about'), href: '/about' },
      { label: t('nav.hardware'), href: '/hardware' },
    ],
    support: [
      { label: '고객지원', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: '문의하기', href: '#contact' },
      { label: '사용 가이드', href: '#' },
    ],
    company: [
      { label: '회사 소개', href: '/about' },
      { label: '채용', href: '#' },
      { label: '블로그', href: '#' },
      { label: '언론 보도', href: '#' },
    ],
    legal: [
      { label: '개인정보처리방침', href: '#' },
      { label: '이용약관', href: '#' },
      { label: '쿠키 정책', href: '#' },
      { label: '보안', href: '#' },
    ]
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      
      <div className="relative z-10">
        {/* 메인 푸터 콘텐츠 */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* 브랜드 섹션 */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <span className="text-2xl font-bold">MeetingMind</span>
                </div>
              </Link>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                AI 기반 회의 솔루션으로 더 스마트한 회의 문화를 만들어갑니다.
              </p>
              
              {/* 연락처 정보 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>contact@meetingmind.ai</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <PhoneIcon className="w-5 h-5" />
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPinIcon className="w-5 h-5" />
                  <span>서울특별시 강남구 테헤란로 123</span>
                </div>
              </div>
            </div>
            
            {/* 링크 섹션들 */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              {/* 제품 */}
              <div>
                <h3 className="font-semibold text-white mb-4">제품</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 지원 */}
              <div>
                <h3 className="font-semibold text-white mb-4">지원</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 회사 */}
              <div>
                <h3 className="font-semibold text-white mb-4">회사</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 법적 정보 */}
              <div>
                <h3 className="font-semibold text-white mb-4">법적 정보</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단 바 */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <span>© 2024 MeetingMind. All rights reserved.</span>
                <span>Made with ❤️ in Seoul</span>
              </div>
              
              {/* 소셜 링크 & 맨 위로 버튼 */}
              <div className="flex items-center gap-4">
                {/* 소셜 링크들 */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <span className="text-xs font-bold">T</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-slate-800 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <span className="text-xs font-bold">in</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-slate-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <span className="text-xs font-bold">G</span>
                  </a>
                </div>
                
                {/* 맨 위로 버튼 */}
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label="맨 위로"
                >
                  <ArrowUpIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 