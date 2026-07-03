"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection() {
  const { t, locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary/90 py-20 sm:py-28">
      <div className={`absolute -top-40 ${isRtl ? "-left-40" : "-right-40"} h-80 w-80 rounded-full bg-primary/20 blur-3xl`} aria-hidden="true" />
      <div className={`absolute -bottom-40 ${isRtl ? "-right-40" : "-left-40"} h-80 w-80 rounded-full bg-white/5 blur-3xl`} aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("cta.heading")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            {t("cta.description")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark active:scale-95"
            >
              {t("cta.viewProjects")}
            </a>
            <a
              href="#pricing"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border-2 border-white/30 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
            >
              {t("cta.viewPricing")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
