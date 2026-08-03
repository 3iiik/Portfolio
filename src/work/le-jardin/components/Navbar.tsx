'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/work/le-jardin/context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const navItems = ['home', 'story', 'chef', 'menu', 'gallery', 'testimonials', 'contact'] as const

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollTo('home')}
            className="text-2xl font-serif font-bold text-primary tracking-wide"
          >
            Le Jardin
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item === 'home' ? 'hero' : item)}
                className="text-sm uppercase tracking-widest text-cream/80 hover:text-primary transition-colors"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            <LanguageSwitcher />
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-5 py-2 rounded text-sm uppercase tracking-wider transition-colors cursor-default"
            >
              {t('nav.reservation')}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-secondary/98 backdrop-blur-sm border-t border-primary/20 animate-slide-down">
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item === 'home' ? 'hero' : item)}
                  className="text-sm uppercase tracking-widest text-cream/80 hover:text-primary transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
              <LanguageSwitcher />
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-5 py-2 rounded text-sm uppercase tracking-wider transition-colors cursor-default"
              >
                {t('nav.reservation')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
