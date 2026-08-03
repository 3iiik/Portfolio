'use client'

import { useState } from 'react'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

const categories = ['appetizers', 'mains', 'desserts', 'drinks'] as const
const itemsPerCategory: Record<string, string[]> = {
  appetizers: ['app1', 'app2', 'app3'],
  mains: ['main1', 'main2', 'main3'],
  desserts: ['dessert1', 'dessert2'],
  drinks: ['drink1', 'drink2'],
}

export default function MenuCategories() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('appetizers')

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-secondary font-bold">
            {t('menu.title')}
          </h2>
          <p className="text-primary font-medium mt-3 text-lg">
            {t('menu.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-wider font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-secondary shadow-md'
                  : 'bg-white text-accent border border-primary/20 hover:border-primary hover:text-primary'
              }`}
            >
              {t(`menu.${cat}`)}
            </button>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {itemsPerCategory[activeCategory]?.map((item) => (
            <SectionAnimation key={item}>
              <div className="flex items-start justify-between py-5 border-b border-primary/10 last:border-0">
                <div className="pr-4">
                  <h3 className="font-serif text-lg text-secondary font-bold">
                    {t(`menu.${item}_name`)}
                  </h3>
                  <p className="text-accent text-sm mt-1 leading-relaxed">
                    {t(`menu.${item}_desc`)}
                  </p>
                </div>
                <span className="text-primary font-bold text-lg whitespace-nowrap">
                  {t(`menu.${item}_price`)}
                </span>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
