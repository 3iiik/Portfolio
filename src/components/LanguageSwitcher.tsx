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
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface px-1.5 py-1">
      {locales.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLocale(lang.code)}
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all ${
            locale === lang.code
              ? "bg-primary text-white"
              : "text-muted hover:text-foreground"
          }`}
          aria-label={`Switch language to ${lang.code === "fr" ? "Français" : lang.code === "en" ? "English" : "العربية"}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
