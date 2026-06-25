"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-white to-primary-light pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="animate-fade-in-up animate-fade-in-up-delay-1 mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
            {t("hero.title")}{" "}
            <span className="text-primary">{t("hero.titleAccent")}</span>
          </h1>

          <p className="animate-fade-in-up animate-fade-in-up-delay-2 mt-6 text-lg leading-relaxed text-muted sm:text-xl max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div className="animate-fade-in-up animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-white transition-all hover:bg-foreground/90 active:scale-95 shadow-lg shadow-foreground/10"
            >
              {t("hero.viewProjects")}
            </a>
            <a
              href="https://m.me/3iik.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-primary px-8 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
              </svg>
              {t("hero.contactMessenger")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
    </section>
  );
}
