const projects = [
  {
    title: "Le Jardin Restaurant",
    description:
      "A complete digital presence for a high-end restaurant featuring an interactive menu, online reservation system, and a beautiful gallery showcasing their cuisine and ambiance.",
    tags: ["Next.js", "Tailwind CSS", "Reservation System"],
    image: (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
          <p className="mt-3 text-sm font-medium text-amber-600">Le Jardin Restaurant</p>
        </div>
      </div>
    ),
  },
  {
    title: "Atlas Fitness Club",
    description:
      "A modern, energetic website for a premium gym featuring class schedules, membership plans, trainer profiles, and a seamless booking system for personal training sessions.",
    tags: ["React", "TypeScript", "Booking System"],
    image: (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          <p className="mt-3 text-sm font-medium text-blue-600">Atlas Fitness Club</p>
        </div>
      </div>
    ),
  },
  {
    title: "SmileCare Dental",
    description:
      "A professional healthcare website for a dental clinic with online appointment booking, service details, doctor profiles, patient testimonials, and educational content.",
    tags: ["Next.js", "Tailwind CSS", "Appointment System"],
    image: (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v.75m0 0v8.25m0-8.25h.75m-.75 0h-.75m.75 0v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-6.75m6 0h.75M12 8.25h.75a1.125 1.125 0 011.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-6.75" />
          </svg>
          <p className="mt-3 text-sm font-medium text-teal-600">SmileCare Dental</p>
        </div>
      </div>
    ),
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            My Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted">
            Real websites I have built for businesses across different
            industries.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {project.image}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href="#contact"
                    className="flex-1 rounded-full bg-foreground px-4 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-foreground/90"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-xs font-semibold text-foreground transition-all hover:bg-surface"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
