'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from '@/components/LanguageToggle'

const Header = () => {
  const { t } = useLanguage()
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/hardware', label: t('nav.hardware') },
    { href: '/contact', label: t('nav.contact') },
  ]

  // Apple 스타일 - 모든 페이지에서 일관된 헤더 스타일
  const headerClass = "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4"
  
  const logoClass = "text-xl font-semibold text-gray-900 apple-heading"
    
  const navLinkClass = (isActive: boolean) => 
    `font-medium transition-colors duration-300 ${
      isActive 
        ? 'text-gray-900' 
        : 'text-gray-600 hover:text-gray-900'
    }`

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Apple 스타일 로고 */}
        <Link href="/" className={logoClass}>
          MeetingMind
        </Link>

        {/* Apple 스타일 네비게이션 */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* CTA 버튼 */}
          <div className="flex items-center gap-4">
          <LanguageToggle />
            <Link
              href="#cta"
              className="btn btn-primary text-sm"
            >
              {t('nav.cta')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 