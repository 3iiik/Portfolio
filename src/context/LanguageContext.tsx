"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

import fr from "@/messages/fr.json";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export type Locale = "fr" | "en" | "ar";

const messages: Record<Locale, Record<string, unknown>> = { fr, en, ar };

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  tm: (path: string) => unknown;
  dir: "ltr" | "rtl";
};

const isRtl = (locale: Locale) => locale === "ar";

const LanguageContext = createContext<LanguageContextType | null>(null);

function getNested(obj: unknown, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return current;
}

const STORAGE_KEY = "3iik-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en" || stored === "ar") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const t = useCallback(
    (path: string): string => {
      const val = getNested(messages[locale], path);
      return typeof val === "string" ? val : path;
    },
    [locale]
  );

  const tm = useCallback(
    (path: string): unknown => {
      return getNested(messages[locale], path);
    },
    [locale]
  );

  if (!mounted) {
    const fallbackT = (path: string): string => {
      const val = getNested(messages.fr, path);
      return typeof val === "string" ? val : path;
    };
    const fallbackTm = (path: string): unknown => getNested(messages.fr, path);
    return (
      <LanguageContext.Provider value={{ locale: "fr", setLocale, t: fallbackT, tm: fallbackTm, dir: "ltr" }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tm, dir: isRtl(locale) ? "rtl" : "ltr" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
