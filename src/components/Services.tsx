"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";
import StudioPanel from "@/components/StudioPanel";

const icons: Record<string, React.ReactNode> = {
  "0": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  "1": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  "2": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "3": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  "4": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M9.736 4.44L12 6.704l2.264-2.264" />
    </svg>
  ),
};

export default function Services() {
  const { t, tm } = useLanguage();
  const items = tm("services.items") as { title: string; description: string }[];

  return (
    <section id="services" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("services.label")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t("services.heading")}
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
            {t("services.description")}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={i}
              as="div"
              className="group bg-background p-8 transition-colors duration-300 hover:bg-surface"
            >
              <span className="text-xs text-muted tabular-nums">0{i + 1}</span>
              <div className="mt-8 text-foreground">{icons[String(i)]}</div>
              <h3 className="mt-6 text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
          <StudioPanel />
        </div>
      </div>
    </section>
  );
}