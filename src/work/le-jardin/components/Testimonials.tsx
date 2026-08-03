'use client'

import Image from 'next/image'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

const testimonials = ['test1', 'test2', 'test3'] as const

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-secondary font-bold">
            {t('testimonials.title')}
          </h2>
          <p className="text-primary font-medium mt-3 text-lg">
            {t('testimonials.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((tItem, index) => (
            <SectionAnimation key={tItem}>
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif leading-none">&ldquo;</div>
                <div className="flex items-center gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-accent leading-relaxed italic text-sm relative z-10">
                  &ldquo;{t(`testimonials.${tItem}_text`)}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-primary/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/work/le-jardin/images/testimonial-${index + 1}.jpg`}
alt={t(`testimonials.${tItem}_name`)}
                fill
                sizes="48px"
                className="object-cover"
                    />
                  </div>
                  <span className="font-serif text-secondary font-semibold">
                    {t(`testimonials.${tItem}_name`)}
                  </span>
                </div>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
