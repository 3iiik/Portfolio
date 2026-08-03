'use client'

import Image from 'next/image'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import SectionAnimation from './SectionAnimation'

const galleryImages = Array.from({ length: 6 }, (_, i) => ({
  src: `/work/le-jardin/images/gallery-${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
}))

export default function Gallery() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimation className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-secondary font-bold">
            {t('gallery.title')}
          </h2>
          <p className="text-primary font-medium mt-3 text-lg">
            {t('gallery.subtitle')}
          </p>
        </SectionAnimation>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <SectionAnimation key={index}>
              <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
