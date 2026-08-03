'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import frMessages from '@/work/atlas-fitness/messages/fr.json'
import enMessages from '@/work/atlas-fitness/messages/en.json'

type Locale = 'fr' | 'en'
type Messages = Record<string, unknown>

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string) => string
  tm: (path: string) => unknown
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const messagesMap: Record<Locale, Messages> = {
  fr: frMessages as Messages,
  en: enMessages as Messages,
}

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'fr'
    const saved = localStorage.getItem('atlas-locale') as Locale | null
    return saved === 'fr' || saved === 'en' ? saved : 'fr'
  })

  useEffect(() => {
    localStorage.setItem('atlas-locale', locale)
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
  }, [])

  const messages = messagesMap[locale]

  const resolve = useCallback(
    (path: string): string => {
      const value = getNestedValue(messages, path)
      return typeof value === 'string' ? value : path
    },
    [messages]
  )

  const t = useCallback((path: string): string => resolve(path), [resolve])
  const tm = useCallback(
    (path: string): unknown => {
      return getNestedValue(messages, path)
    },
    [messages]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tm }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
