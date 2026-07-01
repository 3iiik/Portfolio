import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3iik-studio.vercel.app"),
  title: "3iik Studio | Web Services & Digital Solutions",
  description: "Modern Web Solutions for Algerian Businesses",
  keywords: [
    "web services",
    "digital solutions",
    "web development Algeria",
    "Algeria",
    "business websites",
    "freelance web developer",
    "3iik Studio",
    "création site web Algérie",
    "développeur web Algérie",
    "solutions web Algérie",
  ],
  alternates: {
    languages: {
      fr: "/",
      en: "/",
      ar: "/",
    },
  },
  openGraph: {
    title: "3iik Studio | Web Services & Digital Solutions",
    description: "Modern Web Solutions for Algerian Businesses",
    type: "website",
    locale: "fr_DZ",
    siteName: "3iik Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 1080,
        alt: "3iik Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3iik Studio | Web Services & Digital Solutions",
    description: "Modern Web Solutions for Algerian Businesses",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
    >
      <head>
        <link rel="alternate" hrefLang="fr" href="/" />
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="ar" href="/" />
        <link rel="alternate" hrefLang="x-default" href="/" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
