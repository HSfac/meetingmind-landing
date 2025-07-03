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
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Apple 스타일 브랜드 섹션 */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-semibold text-gray-900 apple-heading">MeetingMind</span>
              </div>
            </Link>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              AI 기반 회의 솔루션으로 더 스마트한 회의 문화를 만들어갑니다.
            </p>
            
            {/* 연락처 정보 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-500">
                <EnvelopeIcon className="w-5 h-5" />
                <span>contact@meetingmind.ai</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <PhoneIcon className="w-5 h-5" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <MapPinIcon className="w-5 h-5" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
            </div>
          </div>
          
          {/* Apple 스타일 링크 섹션들 */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {/* 제품 */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">제품</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 지원 */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">지원</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 회사 */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">회사</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 법적 정보 */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">법적 정보</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
        
        {/* Apple 스타일 하단 바 */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>© 2024 MeetingMind. All rights reserved.</span>
                <span>Made with ❤️ in Seoul</span>
              </div>
              
              {/* 소셜 링크 & 맨 위로 버튼 */}
              <div className="flex items-center gap-4">
                {/* Apple 스타일 소셜 링크들 */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <span className="text-xs font-bold text-gray-600">T</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <span className="text-xs font-bold text-gray-600">in</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <span className="text-xs font-bold text-gray-600">G</span>
                  </a>
                </div>
                
                {/* Apple 스타일 맨 위로 버튼 */}
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label="맨 위로"
                >
                  <ArrowUpIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer 