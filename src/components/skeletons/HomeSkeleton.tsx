import { Skeleton } from "@/components/ui/Skeleton";

function SectionHeader() {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-10">
      <div>
        <Skeleton className="h-3 w-28" />
        <Skeleton className="mt-4 h-10 w-64 sm:h-11 sm:w-80" />
      </div>
      <Skeleton className="hidden h-14 w-72 md:block" />
    </div>
  );
}

function ProjectRow({ reversed = false }: { reversed?: boolean }) {
  return (
    <div className="flex flex-col gap-10 border-b border-border py-20 last:border-b-0 sm:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className={reversed ? "lg:order-2" : ""}>
        <Skeleton className="h-3 w-8" />
        <Skeleton className="mt-4 h-9 w-3/4 sm:h-10" />
        <Skeleton className="mt-2 h-3 w-40" />
        <Skeleton className="mt-6 h-16 w-full max-w-md" />
        <div className="mt-7 flex flex-wrap gap-2">
          <Skeleton className="h-7 w-20" />
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-7 w-16" />
        </div>
        <div className="mt-9 flex flex-wrap gap-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-36" />
        </div>
      </div>
      <div className={reversed ? "lg:order-1" : ""}>
        <Skeleton className="aspect-[4/3] w-full" />
      </div>
    </div>
  );
}

function ServicesCard() {
  return (
    <div className="bg-background p-8">
      <Skeleton className="h-3 w-8" />
      <Skeleton className="mt-8 h-6 w-6" />
      <Skeleton className="mt-6 h-5 w-3/4" />
      <Skeleton className="mt-3 h-14 w-full" />
    </div>
  );
}

export default function HomeSkeleton() {
  return (
    <div className="bg-background text-foreground" role="status" aria-label="Loading">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="hidden items-center gap-9 md:flex">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-14" />
          </div>
          <Skeleton className="hidden h-6 w-16 md:block" />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[68vh] flex-col overflow-hidden pt-16">
          <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-10 sm:px-8 lg:px-10 lg:pt-20">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="mt-4 h-14 w-full max-w-3xl sm:h-16 lg:h-20" />
            <Skeleton className="mt-2 h-14 w-4/5 max-w-2xl sm:h-16 lg:h-20" />
            <Skeleton className="mt-5 h-8 w-full max-w-xl" />
            <Skeleton className="mt-2 h-8 w-3/4 max-w-lg" />
            <div className="mt-7 flex flex-wrap gap-4">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
          <div className="relative border-t border-border py-5">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
              <div className="flex items-center gap-3">
                <Skeleton className="h-2 w-2 rounded-full" />
                <Skeleton className="h-4 w-56" />
              </div>
            </div>
            <div className="relative mt-5 overflow-hidden border-y border-border py-3">
              <div className="flex gap-16 px-8">
                <Skeleton className="h-4 w-24 shrink-0" />
                <Skeleton className="h-4 w-24 shrink-0" />
                <Skeleton className="h-4 w-24 shrink-0" />
                <Skeleton className="h-4 w-24 shrink-0" />
                <Skeleton className="h-4 w-24 shrink-0" />
                <Skeleton className="h-4 w-24 shrink-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <SectionHeader />
            <div className="mt-10 flex flex-col">
              <ProjectRow />
              <ProjectRow reversed />
              <ProjectRow />
              <ProjectRow reversed />
              <ProjectRow />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <SectionHeader />
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <div className="bg-background p-8 sm:col-span-1 lg:col-span-3">
                <div className="flex items-center justify-between gap-4">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-40" />
                </div>
                <div className="mt-8 grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                  <div>
                    <Skeleton className="h-3 w-32" />
                    <div className="mt-5 space-y-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                      <Skeleton className="h-4 w-3/5" />
                    </div>
                  </div>
                  <div>
                    <Skeleton className="h-3 w-16" />
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <Skeleton className="h-3 w-16" />
                    <div className="mt-5 space-y-4">
                      <Skeleton className="h-7 w-24" />
                      <Skeleton className="h-7 w-24" />
                      <Skeleton className="h-7 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <SectionHeader />
            <div className="mt-16 ms-6 border-s border-border">
              <div className="flex flex-col">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="relative pb-12 ps-12 last:pb-0">
                    <span className="absolute top-1 -start-6 h-3 w-3 rounded-full bg-background ring-1 ring-border" />
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="mt-3 h-7 w-56" />
                    <Skeleton className="mt-3 h-8 w-full max-w-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <SectionHeader />
            <div className="mt-12 inline-flex border border-border">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-40" />
            </div>
            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-background p-9">
                  <div className="flex items-center justify-between gap-4">
                    <Skeleton className="h-5 w-24" />
                    {i === 1 && <Skeleton className="h-5 w-20" />}
                  </div>
                  <Skeleton className="mt-2 h-6 w-full" />
                  <Skeleton className="mt-8 h-3 w-24" />
                  <Skeleton className="mt-2 h-10 w-40" />
                  <div className="mt-8 space-y-3 border-t border-border pt-7">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/5" />
                  </div>
                  <Skeleton className="mt-8 h-12 w-full" />
                </div>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="mt-10 aspect-[4/5] w-full" />
              </div>
              <div className="lg:col-span-7">
                <Skeleton className="h-3 w-40" />
                <Skeleton className="mt-4 h-10 w-full max-w-lg sm:h-11" />
                <Skeleton className="mt-8 h-16 w-full max-w-xl" />
                <div className="mt-12 grid gap-12 sm:grid-cols-2">
                  <div>
                    <Skeleton className="h-3 w-36" />
                    <div className="mt-5 space-y-2.5">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <div>
                    <Skeleton className="h-3 w-36" />
                    <div className="mt-5 space-y-2.5">
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-4 w-44" />
                      <Skeleton className="h-4 w-36" />
                    </div>
                  </div>
                </div>
                <div className="mt-12 border-t border-border pt-8">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="mt-3 h-8 w-72" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-6 h-12 w-full max-w-3xl sm:h-14" />
            <Skeleton className="mt-6 h-8 w-full max-w-xl" />
            <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-background p-8">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="mt-8 h-5 w-32" />
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-border pt-10 sm:flex-row sm:items-center">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-12 w-44" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-3 w-40" />
          <div className="flex items-center gap-6">
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>
      </footer>
    </div>
  );
}
