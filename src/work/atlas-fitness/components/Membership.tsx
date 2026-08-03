'use client'

import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'

const plans = ['starter', 'premium', 'elite'] as const

export default function Membership() {
  const { t, tm } = useLanguage()

  return (
    <section id="membership" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('membership.title')}
          </h2>
          <p className="text-white/50">{t('membership.subtitle')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const isPremium = plan === 'premium'
            return (
              <div
                key={plan}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isPremium
                    ? 'border-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {isPremium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    {t('membership.premium.popular')}
                  </div>
                )}

                <h3 className="mb-1 text-xl font-bold text-white">
                  {t(`membership.${plan}.name`)}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">
                    {t(`membership.${plan}.price`)}
                  </span>
                  <span className="ml-1 text-sm text-white/40">
                    {t(`membership.${plan}.period`)}
                  </span>
                </div>

                <ul className="mb-8 flex flex-col gap-3">
                  {(tm(`membership.${plan}.features`) as string[] || []).map(
                    (feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${isPremium ? 'text-orange-400' : 'text-orange-500'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    )
                  )}
                </ul>

                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className={`mt-auto flex h-12 items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wider transition-all cursor-default ${
                    isPremium
                      ? 'bg-orange-500 text-black hover:bg-orange-400'
                      : 'border border-white/20 text-white hover:border-orange-500 hover:text-orange-400'
                  }`}
                >
                  {t(`membership.${plan}.cta`)}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
