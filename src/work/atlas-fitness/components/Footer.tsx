'use client'

import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-[#060606] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-xs font-bold text-black">
              AF
            </div>
            <span className="text-sm font-bold tracking-wider text-white">ATLAS FITNESS CLUB</span>
          </div>

          <div className="flex gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 cursor-default">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>

          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-xs text-white/30">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} Atlas Fitness Club. {t('footer.rights')}
          </p>
          <p>{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  )
}
