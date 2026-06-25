export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-foreground">
                3iik
              </span>
              <span className="text-xl font-light text-muted">Studio</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Modern Websites for Businesses. I help businesses get fast, modern,
              and mobile-friendly websites that attract customers and build
              trust.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/213XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-muted">
                  hello@3iikstudio.com
                </span>
              </li>
              <li>
                <span className="text-sm text-muted">Algeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-center text-xs text-muted">
            &copy; {year} 3iik Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
