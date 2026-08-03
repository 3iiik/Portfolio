"use client";

import { useLanguage, type Locale } from "@/context/LanguageContext";

const locales: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5">
      {locales.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          {i > 0 && <span className="h-3 w-px bg-border" aria-hidden="true" />}
          <button
            type="button"
            onClick={() => setLocale(lang.code)}
            className={`px-2 py-1 text-xs tracking-wide transition-colors ${
              locale === lang.code
                ? "text-foreground underline underline-offset-4 decoration-primary"
                : "text-muted hover:text-foreground"
            }`}
            aria-label={`Switch language to ${lang.code === "fr" ? "Français" : lang.code === "en" ? "English" : "العربية"}`}
          >
            {lang.label}
          </button>
        </span>
      ))}
    </div>
  );
}