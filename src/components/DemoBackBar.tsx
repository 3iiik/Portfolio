"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function DemoBackBar({ slug }: { slug: string }) {
  const { t } = useLanguage();

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-between border-b border-border/60 bg-background/90 px-4 py-2.5 backdrop-blur-sm sm:px-6">
      <Link
        href={`/work/${slug}`}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        {t("portfolio.viewCaseStudy")}
      </Link>
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        {t("portfolio.viewProjects")}
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}