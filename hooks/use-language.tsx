'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Locale, defaultLocale, getLocaleFromAcceptLanguage } from '@/lib/i18n'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // Detect language from browser on client side
    const acceptLanguage = navigator.language || navigator.languages?.[0] || ''
    const detectedLocale = getLocaleFromAcceptLanguage(acceptLanguage)
    setLocale(detectedLocale)
  }, [])

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', locale)
  }, [locale])

  useEffect(() => {
    // Load language preference from localStorage on mount
    const savedLocale = localStorage.getItem('preferred-language') as Locale
    if (savedLocale && ['en', 'es'].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
