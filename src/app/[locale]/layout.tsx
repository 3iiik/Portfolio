import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import fr from "@/messages/fr.json";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

const allMessages = { fr, en, ar } as const;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = allMessages[locale as keyof typeof allMessages]?.site as {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
  } | undefined;

  const title = messages?.title ?? "3iik Studio";
  const description = messages?.description ?? "";

  return {
    title,
    description,
    openGraph: {
      title: messages?.ogTitle ?? title,
      description: messages?.ogDescription ?? description,
      url: `/${locale}`,
    },
    twitter: {
      title: messages?.ogTitle ?? title,
      description: messages?.ogDescription ?? description,
    },
    alternates: {
      languages: {
        fr: "/fr",
        en: "/en",
        ar: "/ar",
      },
      canonical: `/${locale}`,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const validLocale = locale === "en" || locale === "ar" ? locale : "fr";
  const messages = allMessages[validLocale];

  return (
    <LanguageProvider locale={validLocale} messages={messages}>
      {children}
    </LanguageProvider>
  );
}
