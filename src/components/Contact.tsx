export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Your Next Website
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Ready to take your business online? Get in touch and let&apos;s
            create something great together.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="rounded-2xl bg-white p-8 shadow-xl"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1.5 block w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 block w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/213XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-primary transition-all hover:bg-white/90"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <span className="flex items-center gap-2 text-sm text-white/80">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              hello@3iikstudio.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
