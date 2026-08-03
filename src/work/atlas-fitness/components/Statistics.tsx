'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          function animate(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

const stats = [
  { key: 'memberCount', label: 'members' },
  { key: 'trainerCount', label: 'trainers' },
  { key: 'classCount', label: 'classes' },
  { key: 'awardCount', label: 'awards' },
] as const

export default function Statistics() {
  const { t, tm } = useLanguage()

  const counts: Record<string, number> = {
    memberCount: Number(tm('statistics.memberCount')) || 0,
    trainerCount: Number(tm('statistics.trainerCount')) || 0,
    classCount: Number(tm('statistics.classCount')) || 0,
    awardCount: Number(tm('statistics.awardCount')) || 0,
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t('statistics.title')}
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="mb-2 text-5xl font-black text-white sm:text-6xl">
                <AnimatedCounter end={counts[stat.key]} />
              </div>
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider">
                {t(`statistics.${stat.label}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
