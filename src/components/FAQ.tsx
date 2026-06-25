"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "A standard business website typically takes 5 to 10 days from start to launch. The timeline depends on the complexity of your project and how quickly you provide feedback on designs. I always provide a clear timeline before starting any project.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "I do not provide hosting directly, but I help you set up reliable hosting and handle the entire deployment process. I recommend trusted providers and can manage the technical setup so your website runs smoothly.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. I specialize in redesigning outdated websites and giving them a fresh, modern look. I will preserve your brand identity while improving design, performance, and user experience.",
  },
  {
    question: "How do payments work?",
    answer:
      "I require a 50% deposit to start the project and the remaining 50% upon completion and your approval. Payments are accepted via bank transfer or other agreed methods. Every detail is discussed and agreed upon before work begins.",
  },
  {
    question: "Can I update the website later?",
    answer:
      "Yes. I build websites that are easy to update. Depending on your needs, I can include a simple content management system or provide training so you can make basic updates yourself. I also offer ongoing maintenance services if you prefer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            Answers to common questions about my services and process.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-muted transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-8">
                  <p className="text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
