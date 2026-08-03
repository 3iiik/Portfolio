'use client'

import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <button
      onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
      className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition-all hover:border-orange-500 hover:text-orange-400"
      aria-label={locale === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <span className={`${locale === 'fr' ? 'text-orange-400' : 'text-white/50'}`}>FR</span>
      <span className="text-white/30">/</span>
      <span className={`${locale === 'en' ? 'text-orange-400' : 'text-white/50'}`}>EN</span>
    </button>
  )
}
