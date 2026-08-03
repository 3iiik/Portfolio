'use client'

import Image from 'next/image'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

export default function Chef() {
  const { t } = useLanguage()

  return (
    <section id="chef" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-primary font-bold">
            {t('chef.title')}
          </h2>
          <p className="text-primary-light/70 font-medium mt-3 text-lg">
            {t('chef.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionAnimation>
            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/work/le-jardin/images/chef.jpg"
alt={t('chef.name')}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              />
            </div>
          </SectionAnimation>

          <SectionAnimation>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-cream font-bold">
                {t('chef.name')}
              </h3>
              <p className="text-cream/70 leading-relaxed text-base sm:text-lg">
                {t('chef.bio')}
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-5 py-3">
                  <p className="text-primary font-bold text-lg">{t('chef.experience')}</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-5 py-3">
                  <p className="text-primary font-bold text-lg">{t('chef.awards')}</p>
                </div>
              </div>
              <p className="text-primary-light text-lg italic leading-relaxed">
                {t('chef.philosophy')}
              </p>
            </div>
          </SectionAnimation>
        </div>
      </div>
    </section>
  )
}
