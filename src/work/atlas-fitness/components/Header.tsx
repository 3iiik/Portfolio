'use client'

import { useState } from 'react'
import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = [
  { key: 'home', href: '#hero' },
  { key: 'membership', href: '#membership' },
  { key: 'trainers', href: '#trainers' },
  { key: 'schedule', href: '#schedule' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'contact', href: '#contact' },
]

export default function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-bold text-black text-sm">
            AF
          </div>
          <span className="hidden text-base font-bold tracking-wider text-white sm:block">
            ATLAS FITNESS CLUB
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-orange-400"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0a0a] md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-orange-400"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
