'use client'

import Image from 'next/image'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

const dishes = ['dish1', 'dish2', 'dish3'] as const
const dishImages = ['/work/le-jardin/images/dish-1.jpg', '/work/le-jardin/images/dish-2.jpg', '/work/le-jardin/images/dish-3.jpg']

export default function SignatureDishes() {
  const { t } = useLanguage()

  return (
    <section id="dishes" className="py-20 sm:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-secondary font-bold">
            {t('dishes.title')}
          </h2>
          <p className="text-primary font-medium mt-3 text-lg">
            {t('dishes.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <SectionAnimation key={dish}>
              <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dishImages[index]}
alt={t(`dishes.${dish}_name`)}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-secondary font-bold">
                    {t(`dishes.${dish}_name`)}
                  </h3>
                  <p className="text-accent mt-3 leading-relaxed text-sm">
                    {t(`dishes.${dish}_desc`)}
                  </p>
                </div>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
