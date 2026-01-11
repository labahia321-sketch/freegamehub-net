import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12" data-testid="loading-spinner">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

export function GameCardSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="aspect-video rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
}

export function GameGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function FeaturedSkeleton() {
  return (
    <Skeleton className="h-64 md:h-80 rounded-xl mb-8" />
  );
}

export function PageLoadingState() {
  return (
    <div className="space-y-8">
      <FeaturedSkeleton />
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <GameGridSkeleton count={4} />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <GameGridSkeleton count={4} />
      </div>
    </div>
  );
}
