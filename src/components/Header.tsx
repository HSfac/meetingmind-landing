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

  // 홈페이지, 하드웨어 페이지, 소개 페이지, 컨택트 페이지 모두 어두운 배경
  const isHomePage = pathname === '/'
  const isHardwarePage = pathname === '/hardware'
  const isAboutPage = pathname === '/about'
  const isContactPage = pathname === '/contact'
  const isDarkBackground = isHomePage || isHardwarePage || isAboutPage || isContactPage
  
  const headerClass = isDarkBackground 
    ? "absolute top-0 left-0 right-0 z-50 p-6"
    : "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 px-6 py-4"
  
  const logoClass = isDarkBackground 
    ? "text-2xl font-bold text-white"
    : "text-2xl font-bold text-slate-900"
    
  const navLinkClass = (isActive: boolean) => isDarkBackground
    ? `font-medium transition-colors ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
    : `font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" className={logoClass}>
          MeetingMind
        </Link>

        {/* 네비게이션 & 액션 */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
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
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}

export default Header 