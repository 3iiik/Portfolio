"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
            {t("contact.label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("contact.heading")}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t("contact.description")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="rounded-2xl bg-white p-8 shadow-xl space-y-8">

            <div className="flex items-center justify-center gap-3 rounded-xl bg-primary-light p-4">
              <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <p className="text-sm font-medium text-primary">
                {t("contact.trustMessage")}
              </p>
            </div>

            <a
              href="https://m.me/3iik.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#1877F2] px-6 py-4 text-white transition-all hover:bg-[#1669DA] active:scale-[0.98]"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.2l3.131 3.259L19.752 8.2l-6.559 6.763z" />
              </svg>
              <span className="text-base font-semibold">{t("contact.chatMessenger")}</span>
            </a>

            <div className="flex items-center justify-center gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-muted" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-sm text-muted">3iikStudio@proton.me</span>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs font-medium text-muted">{t("contact.orDivider")}</span>
              </div>
            </div>

            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  {t("contact.formName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("contact.formNamePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  {t("contact.formEmail")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1.5 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("contact.formEmailPlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 block w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t("contact.formMessagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark active:scale-[0.98]"
              >
                {t("contact.formSubmit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
