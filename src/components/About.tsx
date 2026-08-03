"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";
import Logo from "@/components/ui/Logo";

export default function About() {
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";
  const technologies = tm("about.technologies") as string[];
  const currentProjects = tm("about.currentProjects") as string[];

  return (
    <section id="about" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("about.label")}
            </span>
            <div className="relative mt-10 aspect-[4/5] border border-border">
              <div className="bg-grid absolute inset-0" aria-hidden="true" />
              <div className="absolute inset-0 p-10">
                <Logo
                  className="h-full w-full"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
              <span className="absolute bottom-4 left-4 bg-background/70 px-2 py-1 text-xs uppercase tracking-[0.2em] text-muted">
                3iik · {t("about.portraitCaption")}
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                {t("about.kicker")}
              </span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {t("about.heading")}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className={`mt-8 max-w-xl text-lg leading-relaxed text-muted ${isRtl ? "text-right" : ""}`}>
                {t("about.intro")}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-12 sm:grid-cols-2">
              <Reveal delay={0.12}>
                <h3 className="text-sm uppercase tracking-[0.25em] text-muted">
                  {t("about.technologiesTitle")}
                </h3>
                <ul className={`mt-5 space-y-2.5 ${isRtl ? "text-right" : ""}`}>
                  {technologies.map((tech) => (
                    <li key={tech} className="text-sm text-foreground/90">
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.16}>
                <h3 className="text-sm uppercase tracking-[0.25em] text-muted">
                  {t("about.currentProjectsTitle")}
                </h3>
                <ul className={`mt-5 space-y-2.5 ${isRtl ? "text-right" : ""}`}>
                  {currentProjects.map((project) => (
                    <li key={project} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                      {project}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 border-t border-border pt-8">
                <p className="text-sm uppercase tracking-[0.25em] text-muted">
                  {t("about.experienceLabel")}
                </p>
                <p className={`mt-3 text-2xl font-medium tracking-tight text-foreground ${isRtl ? "text-right" : ""}`}>
                  {t("about.experience")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}