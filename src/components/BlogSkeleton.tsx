import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Individual blog card skeleton - matches the BlogCard structure
export const BlogCardSkeleton = () => {
  return (
    <Card className="h-full overflow-hidden">
      {/* Image skeleton */}
      <div className="relative h-40 overflow-hidden">
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </div>
      
      <CardHeader className="pt-4">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4" />
        
        {/* Description skeleton */}
        <div className="mt-2 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Skeleton className="h-4 w-24" />
      </CardContent>
    </Card>
  );
};

export const BlogGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <BlogCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export const BlogCategorySkeleton = () => {
  return (
    <div className="mb-16">
      {/* Category title skeleton */}
      <div className="flex items-center gap-3 mb-8">
        <Skeleton className="h-8 w-1 rounded-full" />
        <Skeleton className="h-8 w-48" />
      </div>
      
      <BlogGridSkeleton count={3} />
    </div>
  );
};

export const BlogPageSkeleton = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Multiple category skeletons */}
        <BlogCategorySkeleton />
        <BlogCategorySkeleton />
      </div>
    </div>
  );
};
