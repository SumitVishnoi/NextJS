import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              {/* Product Image */}
              <Skeleton className="h-60 w-full rounded-lg" />

              <div className="mt-4 space-y-3">
                {/* Category */}
                <Skeleton className="h-5 w-24" />

                {/* Title */}
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />

                {/* Rating */}
                <Skeleton className="h-4 w-20" />

                {/* Price */}
                <Skeleton className="h-6 w-24" />

                {/* Description */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 flex-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
