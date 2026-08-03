import { Skeleton } from "@/components/ui/Skeleton";

export default function CaseStudySkeleton() {
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

      <main className="relative pt-28 pb-24 sm:pt-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="inline-flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
          </div>

          <div className="mt-10 flex flex-col gap-6 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <Skeleton className="h-3 w-32" />
              <Skeleton className="mt-4 h-10 w-full max-w-md sm:h-12" />
            </div>
            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-11 w-36" />
              <Skeleton className="h-11 w-40" />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-7 w-16" />
          </div>

          <div className="mt-12">
            <Skeleton className="aspect-video w-full" />
            <Skeleton className="mt-10 h-16 w-full max-w-2xl" />
            <Skeleton className="mt-3 h-16 w-4/5 max-w-xl" />
          </div>
        </div>
      </main>

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
