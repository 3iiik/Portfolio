"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function StudioPanel() {
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";

  const studio = tm("services.studio") as {
    kicker: string;
    status: string;
    buildingTitle: string;
    stackTitle: string;
    stats: { value: string; label: string }[];
  };

  const building = tm("about.currentProjects") as string[];
  const tech = tm("about.technologies") as string[];

  return (
    <div className="group relative flex h-full flex-col overflow-hidden bg-background p-8 sm:col-span-1 lg:col-span-3">
      <div className="bg-grid-anim pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {studio.kicker}
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            {studio.status}
          </span>
        </div>

        <div className={`mt-8 grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10`}>
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-muted">
              {studio.buildingTitle}
            </h3>
            <ul className={`mt-5 space-y-4 ${isRtl ? "text-right" : ""}`}>
              {building.map((item) => (
                <li key={item}>
                  <span className="block text-sm text-foreground/90">{item}</span>
                  <span className="studio-bar mt-2 block h-px w-full bg-foreground/10" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-muted">
              {studio.stackTitle}
            </h3>
            <div className={`mt-5 flex flex-wrap gap-2 ${isRtl ? "justify-start" : ""}`}>
              {tech.map((item) => (
                <span
                  key={item}
                  className="border border-border bg-background/60 px-2.5 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-foreground/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm uppercase tracking-[0.25em] text-muted">
              {t("about.experienceLabel")}
            </h3>
            <dl className={`mt-5 space-y-4 ${isRtl ? "text-right" : ""}`}>
              {studio.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tabular-nums tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
