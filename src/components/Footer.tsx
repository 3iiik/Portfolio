"use client";

import { useLanguage } from "@/context/LanguageContext";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
          <span className="block h-8 w-8 overflow-hidden border border-border bg-background">
            <Logo className="h-full w-full" />
          </span>
          3iik&nbsp;Studio
        </a>

        <p className="text-xs text-muted">
          &copy; {year} 3iik Studio. {t("footer.copyright")}
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/3iiik" target="_blank" rel="noopener noreferrer" className="text-xs text-muted transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href="https://x.com/the3iik" target="_blank" rel="noopener noreferrer" className="text-xs text-muted transition-colors hover:text-foreground">
            X
          </a>
          <a href="https://www.linkedin.com/in/3iik/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted transition-colors hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}