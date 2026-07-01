"use client";

import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

export type Locale = "fr" | "en" | "ar";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  tm: (path: string) => unknown;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const isRtl = (locale: Locale) => locale === "ar";

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

export function LanguageProvider({
  children,
  locale: initialLocale,
  messages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, unknown>;
}) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale = (params?.locale as Locale) || initialLocale;

  const setLocale = useCallback(
    (newLocale: Locale) => {
      const currentPath = pathname.replace(/^\/(fr|en|ar)(\/|$)/, "/");
      const newPath = `/${newLocale}${currentPath === "/" ? "" : currentPath}${window.location.hash}`;
      router.push(newPath);
    },
    [pathname, router],
  );

  const t = useCallback(
    (path: string): string => {
      const val = getNested(messages, path);
      return typeof val === "string" ? val : path;
    },
    [messages],
  );

  const tm = useCallback(
    (path: string): unknown => {
      return getNested(messages, path);
    },
    [messages],
  );

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        tm,
        dir: isRtl(locale) ? "rtl" : "ltr",
      }}
    >
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
