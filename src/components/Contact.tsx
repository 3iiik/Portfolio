"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    { label: "GitHub", value: "github.com/3iiik", href: "https://github.com/3iiik" },
    { label: "X", value: "@the3iik", href: "https://x.com/the3iik" },
    { label: "Discord", value: "3iik", href: "https://discord.com/users/3iik" },
    { label: "LinkedIn", value: "linkedin.com/in/3iik", href: "https://www.linkedin.com/in/3iik/" },
  ];

  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {t("contact.label")}
          </span>
          <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {t("contact.heading")}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t("contact.description")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.06}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col gap-8 bg-background p-8 transition-colors duration-300 hover:bg-surface"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-muted">
                  {link.label}
                </span>
                <span className="mt-auto flex items-center gap-2 text-lg font-medium text-foreground">
                  {link.value}
                  <svg className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}