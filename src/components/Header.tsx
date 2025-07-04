'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from '@/components/LanguageToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/hardware', label: t('nav.hardware') },
    { href: '/contact', label: t('nav.contact') },
  ]

  // Apple 스타일 - 모든 페이지에서 일관된 헤더 스타일
  const headerClass = "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-4 md:px-6 py-3 md:py-4"
  
  const logoClass = "text-lg md:text-xl font-semibold text-gray-900 apple-heading"
    
  const navLinkClass = (isActive: boolean) => 
    `font-medium transition-colors duration-300 ${
      isActive 
        ? 'text-gray-900' 
        : 'text-gray-600 hover:text-gray-900'
    }`

  const mobileNavLinkClass = (isActive: boolean) => 
    `block px-4 py-3 text-base font-medium transition-colors duration-300 ${
      isActive 
        ? 'text-gray-900 bg-gray-50' 
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }`

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Apple 스타일 로고 */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img 
              src="/brand/logo.png" 
              alt="MeetingMind" 
              className="h-6 md:h-8 w-auto"
            />
            <span className={logoClass}>MeetingMind</span>
          </Link>

          {/* Apple 스타일 네비게이션 - 데스크탑 */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
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
            
            {/* CTA 버튼 - 데스크탑 */}
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

          {/* 모바일 컨트롤 */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="메뉴 토글"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMenu} />
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <img 
                    src="/brand/logo.png" 
                    alt="MeetingMind" 
                    className="h-6 w-auto"
                  />
                  <span className="text-lg font-semibold text-gray-900 apple-heading">
                    MeetingMind
                  </span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  aria-label="메뉴 닫기"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={mobileNavLinkClass(pathname === item.href)}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              <div className="px-4 py-4 border-t border-gray-200">
                <Link
                  href="#cta"
                  className="btn btn-primary w-full text-center"
                  onClick={closeMenu}
                >
                  {t('nav.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header 