const testimonials = [
  {
    name: "Karim B.",
    business: "Restaurant Owner — Le Jardin",
    text: "I needed a website that matched the quality of my restaurant. 3iik Studio delivered beyond expectations. The online reservation system alone has brought in so many new customers. Professional work from start to finish.",
  },
  {
    name: "Sofia M.",
    business: "Fitness Club Manager — Atlas Fitness",
    text: "The website perfectly captures our brand energy. Members love how easy it is to book classes online. We have seen a noticeable increase in sign-ups since the launch. Highly recommended for any business owner.",
  },
  {
    name: "Dr. Amir K.",
    business: "Dentist — SmileCare Dental",
    text: "I was skeptical about investing in a website, but it was the best decision I made. Patients can now book appointments online, and the site looks incredibly professional. My practice has grown significantly.",
  },
  {
    name: "Nadia R.",
    business: "Boutique Owner",
    text: "Fast, reliable, and truly talented. My online boutique looks better than I ever imagined. The mobile experience is flawless, and I have received so many compliments from customers.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted">
            Real feedback from business owners I have worked with.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <svg
                className="h-8 w-8 text-primary/30"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.655-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.404-.655-2.917-1.179z" />
              </svg>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {testimonial.text}
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted">{testimonial.business}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
