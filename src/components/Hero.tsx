"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Motion",
  "Vercel",
  "Three.js",
];

export default function Hero() {
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";

  const titleAccent = tm("hero.titleAccent");
  const accent = Array.isArray(titleAccent) ? (titleAccent[0] as string) : "";

  return (
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-14 pt-24 sm:px-8 lg:px-10 lg:pt-28">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-muted">
            3iik Studio
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className={`mt-6 max-w-4xl text-[13vw] font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl ${isRtl ? "text-right" : ""}`}>
            {t("hero.title")}
            {accent && (
              <>
                <br />
                <span className="text-muted">{accent}</span>
              </>
            )}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className={`mt-7 max-w-2xl text-lg leading-relaxed text-muted ${isRtl ? "text-right" : ""}`}>
            {t("hero.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className={`mt-9 flex flex-wrap gap-4 ${isRtl ? "justify-start rtl:flex-row-reverse" : ""}`}>
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-3 bg-foreground px-7 text-sm font-medium text-background transition-transform hover:bg-foreground/90 active:scale-[0.98]"
              >
                {t("hero.viewProjects")}
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Magnetic>
            <a
              href="#services"
              className="inline-flex h-12 items-center border border-border px-7 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              {t("hero.viewServices")}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-border py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            <span className="text-sm text-muted">{t("hero.availability")} · {t("hero.location")}</span>
          </div>
        </div>
        <div
          className="relative mt-5 overflow-hidden whitespace-nowrap border-y border-border py-3"
          style={{ maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)" }}
        >
          <div className="animate-marquee inline-block">
            {[...tech, ...tech].map((item, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-8 text-sm uppercase tracking-[0.25em] text-muted">
                {item}
                <span aria-hidden="true" className="text-foreground/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}