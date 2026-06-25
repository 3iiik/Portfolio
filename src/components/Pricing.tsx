"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { t, tm } = useLanguage();

  const plans = (tm("pricing.plans") as {
    name: string;
    description: string;
    features: string[];
  }[]);

  const prices = ["12,000", "25,000", "45,000"];

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            {t("pricing.label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("pricing.heading")}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t("pricing.description")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                index === 1
                  ? "border-primary bg-primary text-white shadow-xl shadow-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary">
                  {t("pricing.popular")}
                </div>
              )}

              <h3 className={`text-xl font-semibold ${index === 1 ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mt-1 text-sm ${index === 1 ? "text-white/80" : "text-muted"}`}>
                {plan.description}
              </p>

              <div className="mt-6">
                <span className={`text-sm font-medium ${index === 1 ? "text-white/70" : "text-muted"}`}>
                  {t("pricing.startingFrom")}
                </span>
                <div className="mt-1">
                  <span className={`text-4xl font-bold ${index === 1 ? "text-white" : "text-foreground"}`}>
                    {prices[index]}
                  </span>
                  <span className={`ml-1 text-lg ${index === 1 ? "text-white/80" : "text-muted"}`}>
                    DZD
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`h-5 w-5 flex-shrink-0 ${
                        index === 1 ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://m.me/3iik.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all active:scale-95 ${
                  index === 1
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-foreground text-white hover:bg-foreground/90"
                }`}
              >
                {t("pricing.getStarted")}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted max-w-xl mx-auto">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </section>
  );
}
