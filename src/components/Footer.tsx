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
      { label: t('footer.sections.support.links.customerSupport'), href: '#' },
      { label: t('footer.sections.support.links.faq'), href: '#faq' },
      { label: t('footer.sections.support.links.contact'), href: '/contact' },
      { label: t('footer.sections.support.links.guide'), href: '#' },
    ],
    company: [
      { label: t('footer.sections.company.links.about'), href: '/about' },
      { label: t('footer.sections.company.links.careers'), href: '#' },
      { label: t('footer.sections.company.links.blog'), href: '#' },
      { label: t('footer.sections.company.links.press'), href: '#' },
    ],
    legal: [
      { label: t('footer.sections.legal.links.privacy'), href: '/privacy' },
      { label: t('footer.sections.legal.links.terms'), href: '/terms' },
      { label: t('footer.sections.legal.links.cookies'), href: '#' },
      { label: t('footer.sections.legal.links.security'), href: '#' },
    ]
  }

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-6 gap-8 md:gap-12">
          {/* Apple 스타일 브랜드 섹션 */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-base md:text-lg">M</span>
                  </div>
                <span className="text-lg md:text-xl font-semibold text-gray-900 apple-heading">MeetingMind</span>
                </div>
              </Link>
              
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                {t('footer.brand.description')}
              </p>
              
              {/* 연락처 정보 */}
              <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-3 text-gray-500">
                  <EnvelopeIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{t('footer.contact.email')}</span>
                </div>
              <div className="flex items-center gap-3 text-gray-500">
                  <PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{t('footer.contact.phone')}</span>
                </div>
              <div className="flex items-center gap-3 text-gray-500">
                  <MapPinIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{t('footer.contact.address')}</span>
                </div>
              </div>
            </div>
            
          {/* Apple 스타일 링크 섹션들 */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* 제품 */}
              <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">{t('footer.sections.product.title')}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                      className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 지원 */}
              <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">{t('footer.sections.support.title')}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                      className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 회사 */}
              <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">{t('footer.sections.company.title')}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                      className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 법적 정보 */}
              <div>
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">{t('footer.sections.legal.title')}</h3>
                <ul className="space-y-2 md:space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                      className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs md:text-sm text-gray-500">
                <span>{t('footer.bottom.copyright')}</span>
                <span>{t('footer.bottom.madeWith')}</span>
              </div>
              
              {/* 소셜 링크 & 맨 위로 버튼 */}
              <div className="flex items-center gap-4">
                {/* Apple 스타일 소셜 링크들 */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={t('footer.social.twitter')}
                  >
                    <span className="text-xs font-bold text-gray-600">T</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={t('footer.social.linkedin')}
                  >
                    <span className="text-xs font-bold text-gray-600">in</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={t('footer.social.github')}
                  >
                    <span className="text-xs font-bold text-gray-600">G</span>
                  </a>
                </div>
                
                {/* Apple 스타일 맨 위로 버튼 */}
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={t('footer.bottom.backToTop')}
                >
                  <ArrowUpIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 