"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";

export default function Pricing() {
  const { t, tm } = useLanguage();
  const [activeTab, setActiveTab] = useState<"web" | "qrMenu">("web");

  const plansPath = activeTab === "web" ? "pricing.plans" : "pricing.qrPlans";
  const plans = (tm(plansPath) as {
    name: string;
    price?: string;
    description: string;
    features: string[];
  }[]);

  return (
    <section id="pricing" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("pricing.label")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t("pricing.heading")}
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
            {t("pricing.description")}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 inline-flex border border-border">
            <button
              type="button"
              onClick={() => setActiveTab("web")}
              className={`px-6 py-3 text-sm transition-colors ${
                activeTab === "web" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
              }`}
            >
              {t("pricing.webTab")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("qrMenu")}
              className={`px-6 py-3 text-sm transition-colors ${
                activeTab === "qrMenu" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
              }`}
            >
              {t("pricing.qrMenuTab")}
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {plans.map((plan, index) => {
            const isFeatured = index === 1;
            return (
              <Reveal key={plan.name} delay={index * 0.06} className="flex flex-col bg-background p-9">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                  {isFeatured && (
                    <span className="border border-foreground px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-foreground">
                      {t("pricing.popular")}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{plan.description}</p>

                <div className="mt-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    {t("pricing.startingFrom")}
                  </span>
                  <div className="mt-2 flex items-baseline gap-1" dir="ltr">
                    <span className="text-4xl font-semibold tabular-nums text-foreground">
                      {plan.price ?? "—"}
                    </span>
                    <span className="text-sm text-muted">DZD</span>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-7">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                      <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex h-12 items-center justify-center border border-border text-sm font-medium text-foreground transition-colors hover:border-foreground/50"
                >
                  {t("pricing.getStarted")}
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 mx-auto max-w-xl text-center text-sm text-muted">
            {t("pricing.disclaimer")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}