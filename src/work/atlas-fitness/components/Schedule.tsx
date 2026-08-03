'use client'

import { useLanguage } from '@/work/atlas-fitness/context/LanguageContext'


const scheduleData: Record<string, string[]> = {
  mon: ['musculation', '', 'yoga', 'hiit', 'boxe', ''],
  tue: ['', 'yoga', 'musculation', '', 'spinning', 'pilates'],
  wed: ['musculation', '', 'hiit', 'boxe', 'crossfit', ''],
  thu: ['', 'pilates', 'musculation', 'spinning', '', 'yoga'],
  fri: ['musculation', '', 'crossfit', 'hiit', 'boxe', ''],
  sat: ['yoga', '', 'spinning', 'crossfit', '', 'pilates'],
  sun: ['musculation', 'yoga', '', '', '', ''],
}

const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

export default function Schedule() {
  const { t, tm } = useLanguage()

  return (
    <section id="schedule" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('schedule.title')}
          </h2>
          <p className="text-white/50">{t('schedule.subtitle')}</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 font-bold text-white/40">{''}</th>
                {(tm('schedule.days') as string[] || []).map((day: string, i: number) => (
                  <th key={i} className="px-4 py-3 text-center font-bold text-white">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(tm('schedule.timeSlots') as string[] || []).map(
                (slot: string, rowIdx: number) => (
                  <tr
                    key={rowIdx}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-white/40">
                      {slot}
                    </td>
                    {dayKeys.map((day, colIdx) => {
                      const classKey = scheduleData[day]?.[rowIdx]
                      return (
                        <td key={colIdx} className="px-2 py-2 text-center">
                          {classKey ? (
                            <span className="inline-block rounded-lg bg-orange-500/10 px-2.5 py-1.5 text-xs font-semibold text-orange-400">
                              {t(`schedule.classes.${classKey}`)}
                            </span>
                          ) : (
                            <span className="text-white/10">—</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
