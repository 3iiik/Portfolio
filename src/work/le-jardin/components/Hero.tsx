'use client'

import Image from 'next/image'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/work/le-jardin/images/hero.jpg"
        alt="Le Jardin Restaurant"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-bold animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-primary-light/90 mt-2 font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        <p className="text-base sm:text-lg text-cream/80 mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {t('hero.tagline')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-3 rounded text-base uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
          >
            {t('hero.cta_primary')}
          </button>
          <button
            onClick={() => scrollTo('menu')}
            className="border-2 border-primary/60 text-primary-light hover:bg-primary/10 px-8 py-3 rounded text-base uppercase tracking-wider transition-all hover:scale-105"
          >
            {t('hero.cta_secondary')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
