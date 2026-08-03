'use client'

import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

export default function ReservationCTA() {
  const { t } = useLanguage()

  return (
    <section id="reservation" className="relative py-20 sm:py-28 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionAnimation>
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold">
            {t('reservation.title')}
          </h2>
          <p className="text-primary-light/70 font-medium mt-3 text-lg">
            {t('reservation.subtitle')}
          </p>
          <p className="text-cream/60 mt-6 leading-relaxed max-w-2xl mx-auto">
            {t('reservation.description')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-3 rounded text-base uppercase tracking-wider transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2 cursor-default"
            >
              {t('reservation.cta')}
            </button>
          </div>
          <div className="mt-8 text-cream/50 text-sm space-y-2">
            <p>{t('reservation.hours')}</p>
          </div>
        </SectionAnimation>
      </div>
    </section>
  )
}
