'use client'

import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'

const reviews = ['review1', 'review2', 'review3', 'review4'] as const

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="bg-[#111111] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('testimonials.title')}
          </h2>
          <p className="text-white/50">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => {
            const name = t(`testimonials.${review}.name`)
            const text = t(`testimonials.${review}.text`)
            const rating = Number(t(`testimonials.${review}.rating`)) || 5

            return (
              <div
                key={review}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-white/70">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
                    {name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-white">{name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
