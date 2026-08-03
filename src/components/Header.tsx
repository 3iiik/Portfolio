"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/ui/Logo";

const navItems = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
          <span className="block h-8 w-8 overflow-hidden border border-border bg-background">
            <Logo className="h-full w-full" />
          </span>
          3iik&nbsp;Studio
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center border border-border text-foreground"
          >
            <span className="relative flex flex-col gap-1">
              <span className={`h-px w-4 bg-current transition-transform ${isOpen ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-px w-4 bg-current transition-transform ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-5 py-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border/60 py-4 text-sm text-muted transition-colors hover:text-foreground"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}