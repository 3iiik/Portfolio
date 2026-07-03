"use client";

import { useLanguage } from "@/context/LanguageContext";
import Typewriter from "@/components/ui/typewriter";

export default function Hero() {
  const { t, tm, dir } = useLanguage();
  const titleText = t("hero.title");
  const titleWords = titleText.split(/\s+/);
  const isRtl = dir === "rtl";
  const titlePrefix = isRtl ? titleWords.slice(0, -1).join(" ") : null;
  const titleSuffix = isRtl ? titleWords[titleWords.length - 1] : null;

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
            {isRtl ? (
              <>
                {titlePrefix}{" "}
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  <span>{titleSuffix}</span>
                  <Typewriter
                    as="span"
                    text={tm("hero.titleAccent") as string[]}
                    speed={70}
                    deleteSpeed={40}
                    waitTime={1500}
                    cursorChar="|"
                    className="text-primary"
                    dir={dir}
                  />
                </span>
              </>
            ) : (
              <>
                {titleText}{" "}
                <Typewriter
                  as="span"
                  text={tm("hero.titleAccent") as string[]}
                  speed={70}
                  deleteSpeed={40}
                  waitTime={1500}
                  cursorChar="|"
                  className="text-primary"
                  dir={dir}
                />
              </>
            )}
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
              href="#services"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border-2 border-primary px-8 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white active:scale-95"
            >
              {t("hero.viewServices")}
            </a>
          </div>
        </div>
      </div>

      <div className={`absolute -top-40 ${dir === "rtl" ? "-left-40" : "-right-40"} h-80 w-80 rounded-full bg-primary/5 blur-3xl`} aria-hidden="true" />
      <div className={`absolute -bottom-40 ${dir === "rtl" ? "-right-40" : "-left-40"} h-80 w-80 rounded-full bg-primary/5 blur-3xl`} aria-hidden="true" />
    </section>
  );
}
