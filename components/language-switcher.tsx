'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'
import { Locale, locales } from '@/lib/i18n'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    const currentIndex = locales.indexOf(locale)
    const nextIndex = (currentIndex + 1) % locales.length
    setLocale(locales[nextIndex])
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
    >
      <Globe className="mr-2 h-4 w-4" />
      {locale.toUpperCase()}
    </Button>
  )
}
