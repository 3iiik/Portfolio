"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-foreground">
                3iik <span className="font-light text-muted">Studio</span>
              </span>
              <span className="text-[10px] font-medium tracking-wider text-primary uppercase">
                {t("header.subtitle")}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">{t("footer.quickLinks")}</h4>
            <ul className="mt-4 space-y-3">
              {[
                { key: "services", href: "#services" },
                { key: "projects", href: "#projects" },
                { key: "pricing", href: "#pricing" },
                { key: "faq", href: "#faq" },
                { key: "contact", href: "#contact" },
              ].map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">{t("footer.connect")}</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://facebook.com/3iik.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://m.me/3iik.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Messenger
                </a>
              </li>
              <li>
                <a
                  href="mailto:3iikStudio@proton.me"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  3iikStudio@proton.me
                </a>
              </li>
              <li>
                <span className="text-sm text-muted">Algeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-center text-xs text-muted">
            &copy; {year} 3iik Studio. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
