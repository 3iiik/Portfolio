'use client'

import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold">
            {t('contact.title')}
          </h2>
          <p className="text-primary-light/70 font-medium mt-3 text-lg">
            {t('contact.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SectionAnimation>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Adresse</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{t('contact.address')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Facebook</h3>
                  <p className="text-cream/60 text-sm">{t('contact.facebook')}</p>
                </div>
              </div>
            </div>
          </SectionAnimation>

          <SectionAnimation>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t('contact.form_name')}
                className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <input
                type="email"
                placeholder={t('contact.form_email')}
                className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <textarea
                rows={5}
                placeholder={t('contact.form_message')}
                className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-8 py-3 rounded text-sm uppercase tracking-wider transition-all hover:scale-105 w-full"
              >
                {t('contact.form_submit')}
              </button>
            </form>
          </SectionAnimation>
        </div>
      </div>
    </section>
  )
}
