import { Skeleton } from "@/components/ui/Skeleton";

type DemoPageSkeletonProps = {
  wrapperClass: string;
};

export default function DemoPageSkeleton({ wrapperClass }: DemoPageSkeletonProps) {
  return (
    <div className={`${wrapperClass} min-h-screen`} role="status" aria-label="Loading">
      {/* Demo back bar */}
      <div className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-between border-b border-border/60 bg-background/90 px-4 py-2.5 backdrop-blur-sm sm:px-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3.5 w-3.5" />
          <Skeleton className="h-3 w-20" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Demo nav */}
      <nav className="fixed left-0 right-0 top-[41px] z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-border/40 bg-background/90 backdrop-blur-sm h-[72px]">
            <Skeleton className="h-6 w-28" />
            <div className="hidden items-center gap-6 lg:flex">
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-14" />
            </div>
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
      </nav>

      <main className="pt-[113px]">
        {/* Hero */}
        <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-background">
          <Skeleton className="absolute inset-0 h-full w-full" />
          <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-12 w-72 sm:h-14 sm:w-96" />
            <Skeleton className="h-12 w-80 sm:h-14 sm:w-[28rem]" />
            <Skeleton className="mt-2 h-8 w-64 sm:w-72" />
            <div className="mt-4 flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-36 border border-foreground/10" />
            </div>
          </div>
        </section>

        {/* Generic content blocks */}
        {[0, 1, 2].map((i) => (
          <section key={i} className="border-t border-border/30 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
                <div className="flex-1">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="mt-4 h-9 w-full max-w-sm" />
                  <Skeleton className="mt-5 h-16 w-full max-w-md" />
                  <Skeleton className="mt-3 h-14 w-4/5 max-w-sm" />
                </div>
                <Skeleton className="aspect-[4/3] w-full lg:max-w-md" />
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}