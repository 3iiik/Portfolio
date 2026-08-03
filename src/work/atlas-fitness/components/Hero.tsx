'use client'

import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/work/atlas-fitness/images/hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="mb-6 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
          Algiers, Algeria
        </div>

        <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {t('hero.title')}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="inline-flex h-14 items-center justify-center rounded-xl bg-orange-500 px-8 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/25 cursor-default"
          >
            {t('hero.cta')}
          </button>
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 px-8 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-orange-500 hover:text-orange-400 cursor-default"
          >
            {t('hero.ctaSecondary')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
