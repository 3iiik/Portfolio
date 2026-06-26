"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    slug: "le-jardin-restaurant",
    image: "/images/projects/le-jardin.jpg",
    demoUrl: "https://le-jardin-restaurant.vercel.app",
    githubUrl: "https://github.com/3iiik/Le-Jardin-Restaurant",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "atlas-fitness-club",
    image: "/images/projects/atlas-fitness.jpg",
    demoUrl: "https://atlas-fitness-club.vercel.app",
    githubUrl: "https://github.com/3iiik/Atlas-Fitness-Club",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "smilecare-dental",
    image: "/images/projects/smilecare-dental.jpg",
    demoUrl: "https://smilecare-dental-indol.vercel.app",
    githubUrl: "https://github.com/3iiik/SmileCare-Dental",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "forca",
    image: "/images/projects/forca.jpg",
    demoUrl: "https://3iiik.github.io/Forca/",
    githubUrl: "https://github.com/3iiik/Forca",
    tags: ["Electron", "TypeScript", "WebSocket"],
  },
];

export default function Portfolio() {
  const { t, tm } = useLanguage();

  const projects = (tm("portfolio.projects") as { title: string; category: string; description: string }[]);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            {t("portfolio.label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("portfolio.heading")}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t("portfolio.description")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const data = projectsData[index];
            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={data.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block self-start rounded-full bg-primary-light px-3 py-1 text-[11px] font-semibold text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {data.tags.map((tag) => (
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
                      href={data.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full bg-foreground px-4 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-foreground/90 active:scale-95"
                    >
                      {data.slug === "forca" ? t("portfolio.learnMore") : t("portfolio.liveDemo")}
                    </a>
                    <a
                      href={data.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-xs font-semibold text-foreground transition-all hover:bg-surface hover:border-foreground/20 active:scale-95"
                    >
                      {t("portfolio.viewDetails")}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
