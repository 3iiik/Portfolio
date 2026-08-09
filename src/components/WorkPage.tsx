"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/ui/reveal";

const projectsData = [
  {
    slug: "le-jardin-restaurant",
    workSlug: "le-jardin",
    image: "/images/projects/le-jardin.jpg",
    demoUrl: "/work/le-jardin/demo",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "atlas-fitness-club",
    workSlug: "atlas-fitness",
    image: "/images/projects/atlas-fitness.jpg",
    demoUrl: "/work/atlas-fitness/demo",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "smilecare-dental",
    workSlug: "smilecare",
    image: "/images/projects/smilecare-dental.jpg",
    demoUrl: "/work/smilecare/demo",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "forca",
    workSlug: "forca",
    image: "/images/projects/forca.jpg",
    demoUrl: "https://3iiik.github.io/Forca/",
    githubUrl: "https://github.com/3iiik/Forca",
    tags: ["Electron", "TypeScript", "WebSocket"],
    external: true,
  },
  {
    slug: "wilaya",
    workSlug: "wilaya",
    image: "/images/projects/wilaya.jpg",
    demoUrl: "https://wilaya.vercel.app",
    githubUrl: "https://github.com/3iiik/algeria",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    external: true,
  },
];

export default function WorkPage({ slug }: { slug: string }) {
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";

  const projects = tm("portfolio.projects") as {
    title: string;
    category: string;
    description: string;
  }[];

  const idx = projectsData.findIndex((p) => p.workSlug === slug);
  const data = projectsData[idx];
  const project = projects[idx];

  if (!data || !project) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-32 text-center">
        <h1 className="text-2xl text-foreground">404</h1>
        <p className="mt-4 text-muted">
          <Link href="/#work" className="text-foreground underline">
            {t("portfolio.viewProjects")}
          </Link>
        </p>
      </div>
    );
  }

  const isLocalDemo = data.demoUrl.startsWith("/");

  return (
    <section className="relative pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {t("portfolio.viewProjects")}
          </Link>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-6 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-muted">
              {project.category}
            </span>
            <h1 className={`mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl ${isRtl ? "text-right" : ""}`}>
              {project.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={data.demoUrl}
              target={isLocalDemo ? undefined : "_blank"}
              rel={isLocalDemo ? undefined : "noopener noreferrer"}
              className="border border-border bg-transparent px-5 py-2.5 text-sm text-foreground transition-colors hover:border-foreground/40"
            >
              {data.slug === "forca" ? t("portfolio.learnMore") : t("portfolio.liveDemo")}
            </Link>
            {data.githubUrl && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {t("portfolio.viewDetails")}
              </a>
            )}
          </div>
        </Reveal>

        <Reveal className={`mt-12 flex flex-wrap gap-2 ${isRtl ? "justify-start" : ""}`}>
          {data.tags.map((tag) => (
            <span key={tag} className="border border-border px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative aspect-video w-full overflow-hidden border border-border bg-surface">
            <Image
              src={data.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <p className={`mt-10 max-w-2xl leading-relaxed text-muted ${isRtl ? "text-right" : ""}`}>
            {project.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}