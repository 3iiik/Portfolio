'use client'

import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'
import Image from 'next/image'

const trainers = ['trainer1', 'trainer2', 'trainer3'] as const
const trainerImages = ['/work/atlas-fitness/images/trainer-1.jpg', '/work/atlas-fitness/images/trainer-2.jpg', '/work/atlas-fitness/images/trainer-3.jpg']

export default function Trainers() {
  const { t } = useLanguage()

  return (
    <section id="trainers" className="bg-[#111111] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('trainers.title')}
          </h2>
          <p className="text-white/50">{t('trainers.subtitle')}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <div
              key={trainer}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={trainerImages[i]}
                  alt={t(`trainers.${trainer}.name`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">
                  {t(`trainers.${trainer}.name`)}
                </h3>
                <p className="mb-3 text-sm font-medium text-orange-400">
                  {t(`trainers.${trainer}.role`)}
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  {t(`trainers.${trainer}.bio`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
