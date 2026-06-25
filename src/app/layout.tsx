import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3iik Studio | Modern Websites for Businesses",
  description:
    "Fast, professional, mobile-friendly websites designed to build trust and attract customers. Get a modern website for your business in Algeria.",
  keywords: [
    "web development",
    "Algeria",
    "business websites",
    "freelance web developer",
    "3iik Studio",
    "website designer",
  ],
  openGraph: {
    title: "3iik Studio | Modern Websites for Businesses",
    description:
      "Fast, professional, mobile-friendly websites designed to build trust and attract customers.",
    type: "website",
    locale: "en_DZ",
    siteName: "3iik Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "3iik Studio | Modern Websites for Businesses",
    description:
      "Fast, professional, mobile-friendly websites designed to build trust and attract customers.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
