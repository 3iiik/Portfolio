const plans = [
  {
    name: "Starter",
    price: "15,000",
    currency: "DZD",
    description: "Perfect for small businesses that need a simple online presence.",
    popular: false,
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO",
      "Fast delivery",
    ],
  },
  {
    name: "Business",
    price: "35,000",
    currency: "DZD",
    description: "Ideal for growing businesses that want a professional edge.",
    popular: true,
    features: [
      "Custom design",
      "Up to 10 pages",
      "SEO optimization",
      "Booking/contact system",
      "Performance optimization",
    ],
  },
  {
    name: "Premium",
    price: "60,000",
    currency: "DZD+",
    description: "For businesses with unique requirements and ambitious goals.",
    popular: false,
    features: [
      "Fully custom solution",
      "Admin dashboard",
      "Advanced integrations",
      "Custom functionality",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted">
            Quality websites at fair prices. No hidden fees, no surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary bg-primary text-white shadow-xl shadow-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-semibold ${plan.popular ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mt-1 text-sm ${plan.popular ? "text-white/80" : "text-muted"}`}>
                {plan.description}
              </p>

              <div className="mt-6">
                <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`ml-1 text-lg ${plan.popular ? "text-white/80" : "text-muted"}`}>
                  {plan.currency}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`h-5 w-5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-primary"
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
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-foreground text-white hover:bg-foreground/90"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Final pricing depends on project requirements and complexity. Contact
          me for a free quote.
        </p>
      </div>
    </section>
  );
}
