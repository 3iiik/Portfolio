"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";

export default function Process() {
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";
  const steps = tm("process.steps") as { number: string; title: string; description: string }[];

  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("process.label")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t("process.heading")}
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
            {t("process.description")}
          </p>
        </Reveal>

        <div className="mt-16">
          <div className="relative ms-6 border-s border-border">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 0.06}
                  className="relative pb-12 ps-12 last:pb-0"
                >
                  <span
                    className="absolute top-0 -start-6 translate-x-1/2 rtl:-translate-x-1/2 grid h-3 w-3 place-items-center rounded-full bg-background ring-1 ring-border"
                    aria-hidden="true"
                  />
                  <span className="text-xs uppercase tracking-[0.3em] text-muted">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className={`mt-3 max-w-lg text-sm leading-relaxed text-muted ${isRtl ? "text-right" : ""}`}>
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}