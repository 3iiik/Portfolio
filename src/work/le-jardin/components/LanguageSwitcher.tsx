'use client'

import { useLanguage } from '@/work/le-jardin/context/LanguageContext'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLocale('fr')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === 'fr'
            ? 'bg-primary text-white font-semibold'
            : 'text-primary/70 hover:text-primary'
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-primary/40">|</span>
      <button
        onClick={() => setLocale('en')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === 'en'
            ? 'bg-primary text-white font-semibold'
            : 'text-primary/70 hover:text-primary'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
