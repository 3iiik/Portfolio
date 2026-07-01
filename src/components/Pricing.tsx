"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Pricing() {
  const { t, tm } = useLanguage();
  const [activeTab, setActiveTab] = useState<"web" | "app" | "qrMenu">("web");

  const plansPath =
    activeTab === "web"
      ? "pricing.plans"
      : activeTab === "app"
        ? "pricing.appPlans"
        : "pricing.qrPlans";
  const plans = (tm(plansPath) as {
    name: string;
    price?: string;
    description: string;
    features: string[];
  }[]);

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

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl border border-border bg-surface p-1">
            <button
              onClick={() => setActiveTab("web")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "web"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t("pricing.webTab")}
            </button>
            <button
              onClick={() => setActiveTab("app")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "app"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t("pricing.appTab")}
            </button>
            <button
              onClick={() => setActiveTab("qrMenu")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "qrMenu"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t("pricing.qrMenuTab")}
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 items-start">
          {plans.map((plan, index) => {
            const isMostPopular = index === 1;
            const isBestValue = activeTab === "qrMenu" && index === 2;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  isMostPopular
                    ? "border-primary bg-primary text-white shadow-xl shadow-primary/20"
                    : "border-border bg-card"
                }`}
              >
                {isMostPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary">
                    {t("pricing.popular")}
                  </div>
                )}
                {isBestValue && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary">
                    {t("pricing.bestValue")}
                  </div>
                )}

                <h3 className={`text-xl font-semibold ${isMostPopular ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${isMostPopular ? "text-white/80" : "text-muted"}`}>
                  {plan.description}
                </p>

                <div className="mt-6">
                  <span className={`text-sm font-medium ${isMostPopular ? "text-white/70" : "text-muted"}`}>
                    {t("pricing.startingFrom")}
                  </span>
                  <div className="mt-1">
                    <span className={`text-4xl font-bold ${isMostPopular ? "text-white" : "text-foreground"}`}>
                      {plan.price ?? "—"}
                    </span>
                    <span className={`ml-1 text-lg ${isMostPopular ? "text-white/80" : "text-muted"}`}>
                      DZD
                    </span>
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <svg
                        className={`h-5 w-5 flex-shrink-0 ${
                          isMostPopular ? "text-white" : "text-primary"
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
                  href="https://instagram.com/3iik.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all active:scale-95 ${
                    isMostPopular
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}
                >
                  {t("pricing.getStarted")}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted max-w-xl mx-auto">
          {t("pricing.disclaimer")}
        </p>
      </div>
    </section>
  );
}
