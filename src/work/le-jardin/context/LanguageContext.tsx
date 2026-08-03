'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import fr from '@/work/le-jardin/messages/fr.json'
import en from '@/work/le-jardin/messages/en.json'

const messages = { fr, en } as const

type Locale = 'fr' | 'en'

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  tm: (key: string, replacements: Record<string, string>) => string
}

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current === null || current === undefined) return path
    current = (current as Record<string, unknown>)[key]
  }
  return typeof current === 'string' ? current : path
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'fr'
    const stored = localStorage.getItem('lang') as Locale | null
    return stored === 'fr' || stored === 'en' ? stored : 'fr'
  })

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('lang', newLocale)
  }, [])

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(messages[locale] as unknown as Record<string, unknown>, key)
    },
    [locale]
  )

  const tm = useCallback(
    (key: string, replacements: Record<string, string>): string => {
      let text = getNestedValue(messages[locale] as unknown as Record<string, unknown>, key)
      for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(`{${k}}`, v)
      }
      return text
    },
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tm }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
