'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import koTranslations from '@/locales/ko.json'
import enTranslations from '@/locales/en.json'

export type Language = 'ko' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko')
  
  // 브라우저 언어 감지
  useEffect(() => {
    const browserLanguage = navigator.language.toLowerCase()
    if (browserLanguage.includes('ko')) {
      setLanguage('ko')
    } else {
      setLanguage('en')
    }
  }, [])

  // 로컬 스토리지에서 언어 설정 불러오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem('meetingmind-language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // 언어 변경 시 로컬 스토리지에 저장
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('meetingmind-language', lang)
  }

  // 번역 데이터 선택
  const translations = language === 'ko' ? koTranslations : enTranslations

  // 중첩된 객체에서 값을 가져오는 헬퍼 함수
  const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
    const keys = path.split('.')
    let current: unknown = obj
    
    for (const key of keys) {
      if (current === null || current === undefined) {
        return path
      }
      
      if (typeof current === 'object' && current !== null) {
        const currentObj = current as Record<string, unknown>
        if (key in currentObj) {
          current = currentObj[key]
        } else {
          return path
        }
      } else {
        return path
      }
    }
    
    return typeof current === 'string' ? current : path
  }

  // 번역 함수
  const t = (key: string, params?: Record<string, string>) => {
    let value = getNestedValue(translations, key)
    
    // 파라미터가 있으면 치환
    if (params && typeof value === 'string') {
      Object.keys(params).forEach(param => {
        value = value.replace(`{${param}}`, params[param])
      })
    }
    
    return value
  }

  const value = {
    language,
    setLanguage: handleLanguageChange,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
} 