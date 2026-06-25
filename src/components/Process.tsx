const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "I learn about your business, goals, target audience, and what you want your website to achieve. We discuss design preferences and functionality needs.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I create wireframes and a visual design concept for your website. You review and provide feedback until everything looks perfect.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "I build your website using modern technologies. The site is responsive, fast, and fully functional. I keep you updated throughout the process.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After your approval, I deploy the website to your domain. I handle all the technical setup so you can focus on running your business.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "I provide ongoing support and maintenance. Whether you need updates, new features, or just have questions, I am here to help.",
  },
];

export default function Process() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            How I Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Idea to Launch
          </h2>
          <p className="mt-4 text-lg text-muted">
            A simple, transparent process designed to get you results without
            the hassle.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] border-t-2 border-dashed border-primary/30" aria-hidden="true" />
              )}
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
