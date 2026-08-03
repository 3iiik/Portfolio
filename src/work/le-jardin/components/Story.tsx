'use client'

import Image from 'next/image'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

export default function Story() {
  const { t } = useLanguage()

  return (
    <section id="story" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-secondary font-bold">
            {t('story.title')}
          </h2>
          <p className="text-primary font-medium mt-3 text-lg">
            {t('story.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionAnimation>
            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/work/le-jardin/images/hero.jpg"
alt="Le Jardin ambiance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              />
            </div>
          </SectionAnimation>

          <SectionAnimation>
            <div className="space-y-5">
              <p className="text-accent leading-relaxed text-base sm:text-lg">
                {t('story.paragraph1')}
              </p>
              <p className="text-accent leading-relaxed text-base sm:text-lg">
                {t('story.paragraph2')}
              </p>
              <p className="text-accent leading-relaxed text-base sm:text-lg italic">
                {t('story.paragraph3')}
              </p>
            </div>
          </SectionAnimation>
        </div>
      </div>
    </section>
  )
}
