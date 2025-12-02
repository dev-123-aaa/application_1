import { Skeleton } from "@/components/ui/skeleton";

export function VideoCardSkeleton() {
  return (
    <div className="w-full rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0">
          <Skeleton className="h-5 w-3/4 max-w-md" />
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap sm:gap-4">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
