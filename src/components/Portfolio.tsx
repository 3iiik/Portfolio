"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";

const projectsData = [
  {
    slug: "le-jardin-restaurant",
    workSlug: "le-jardin",
    number: "01",
    image: "/images/projects/le-jardin.jpg",
    demoUrl: "/work/le-jardin/demo",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    tall: false,
  },
  {
    slug: "atlas-fitness-club",
    workSlug: "atlas-fitness",
    number: "02",
    image: "/images/projects/atlas-fitness.jpg",
    demoUrl: "/work/atlas-fitness/demo",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    tall: true,
  },
  {
    slug: "smilecare-dental",
    workSlug: "smilecare",
    number: "03",
    image: "/images/projects/smilecare-dental.jpg",
    demoUrl: "/work/smilecare/demo",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    tall: false,
  },
  {
    slug: "wilaya",
    workSlug: "wilaya",
    number: "04",
    image: "/images/projects/wilaya.jpg",
    demoUrl: "https://wilaya.vercel.app",
    githubUrl: "https://github.com/3iiik/algeria",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    tall: true,
  },
  {
    slug: "forca",
    workSlug: "forca",
    number: "05",
    image: "/images/projects/forca.jpg",
    demoUrl: "https://github.com/3iiik/Forca",
    tags: ["Electron", "TypeScript", "WebSocket"],
    tall: false,
  },
];

export default function Portfolio() {
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";

  const projects = (tm("portfolio.projects") as {
    title: string;
    category: string;
    description: string;
  }[]);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("portfolio.label")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t("portfolio.heading")}
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
            {t("portfolio.description")}
          </p>
        </Reveal>

        <div className="flex flex-col">
          {projects.map((project, index) => {
            const data = projectsData[index];
            const isReversed = index % 2 === 1;
            return (
              <Reveal
                key={project.title}
                className={`flex flex-col gap-10 border-b border-border py-20 last:border-b-0 sm:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 ${
                  isReversed ? "" : ""
                }`}
              >
                <div className={isReversed ? "lg:order-2" : ""}>
                  <span className="text-sm text-muted tabular-nums">({data.number})</span>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">
                    {project.category}
                  </p>
                  <p className={`mt-6 max-w-md leading-relaxed text-muted ${isRtl ? "text-right" : ""}`}>
                    {project.description}
                  </p>

                  <div className={`mt-7 flex flex-wrap gap-2 ${isRtl ? "justify-start" : ""}`}>
                    {data.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link
                      href={`/work/${data.workSlug}`}
                      className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
                    >
                      {t("portfolio.viewCaseStudy")}
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <a
                      href={data.demoUrl}
                      target={data.demoUrl.startsWith("http") ? "_blank" : undefined}
                      rel={data.demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/40"
                    >
                      {data.slug === "forca" ? t("portfolio.learnMore") : t("portfolio.liveDemo")}
                    </a>
                    {data.githubUrl && (
                      <a
                        href={data.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {t("portfolio.viewDetails")}
                      </a>
                    )}
                  </div>
                </div>

                <Link
                  href={`/work/${data.workSlug}`}
                  className={`group relative block overflow-hidden border border-border ${isReversed ? "lg:order-1" : ""}`}
                >
                  <div className={`relative w-full ${data.tall ? "aspect-[4/3]" : "aspect-[4/3]"} overflow-hidden bg-surface`}>
                    <Image
                      src={data.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                      <span className="border border-foreground px-6 py-3 text-xs uppercase tracking-[0.3em] text-foreground">
                        {t("portfolio.viewProject")}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}