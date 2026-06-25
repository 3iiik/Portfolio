"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary/90 py-20 sm:py-28">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />

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
              href="https://m.me/3iik.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-foreground transition-all hover:bg-white/90 active:scale-95 shadow-xl"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
              </svg>
              {t("cta.contactMessenger")}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border-2 border-white/30 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
            >
              {t("cta.freeConsultation")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
