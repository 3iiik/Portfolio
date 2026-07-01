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

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const isFeatured = index === 1;
            const isMostPopular = activeTab !== "qrMenu" && index === 1;
            const isBestValue = activeTab === "qrMenu" && index === 1;

            const orderClass =
              index === 0
                ? "order-2 lg:order-1"
                : index === 1
                  ? "order-1 lg:order-2"
                  : "order-3";

            return (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${orderClass} ${
                  isFeatured
                    ? "border-primary bg-primary text-white shadow-xl shadow-primary/20 z-10 lg:scale-[1.05]"
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

                <h3 className={`text-xl font-semibold ${isFeatured ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${isFeatured ? "text-white/80" : "text-muted"}`}>
                  {plan.description}
                </p>

                <div className="mt-6">
                  <span className={`text-sm font-medium ${isFeatured ? "text-white/70" : "text-muted"}`}>
                    {t("pricing.startingFrom")}
                  </span>
                  <div className="mt-1">
                    <span className={`text-4xl font-bold ${isFeatured ? "text-white" : "text-foreground"}`}>
                      {plan.price ?? "—"}
                    </span>
                    <span className={`ml-1 text-lg ${isFeatured ? "text-white/80" : "text-muted"}`}>
                      DZD
                    </span>
                  </div>
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <svg
                        className={`h-5 w-5 flex-shrink-0 ${
                          isFeatured ? "text-white" : "text-primary"
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
                  className={`mt-auto inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all active:scale-95 ${
                    isFeatured
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
