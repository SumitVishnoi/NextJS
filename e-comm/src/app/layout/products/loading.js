import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8 space-y-2">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-5 w-72" />
      </div>

      {/* Search Bar */}
      <div className="mb-10 max-w-md">
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            {/* Product Image */}
            <div className="p-4">
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>

            <CardHeader className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </CardHeader>

            <CardContent className="space-y-3">
              {/* Category */}
              <Skeleton className="h-6 w-24 rounded-full" />

              {/* Description */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />

              {/* Rating */}
              <Skeleton className="h-4 w-32" />

              {/* Price */}
              <Skeleton className="h-8 w-20" />
            </CardContent>

            <CardFooter className="flex gap-2">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}