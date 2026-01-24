import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const BlogArticleSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <section className="relative">
        <div className="w-full h-48 sm:h-64 md:h-80 overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        
        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Meta info skeleton */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-28" />
            </div>
            
            {/* Title skeleton */}
            <Skeleton className="h-10 w-full mb-2" />
            <Skeleton className="h-10 w-3/4 mb-4" />
            
            {/* Description skeleton */}
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-5/6" />
          </div>
        </div>
      </section>

      {/* Quick Answer Box Skeleton */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-5 w-32" />
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Executive Summary Skeleton */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-muted/30 rounded-lg p-5">
            <Skeleton className="h-4 w-40 mb-3" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents Skeleton */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-border/50">
            <CardContent className="p-5">
              <Skeleton className="h-5 w-36 mb-4" />
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-4 w-5" />
                    <Skeleton className="h-4 flex-1 max-w-xs" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Skeleton */}
      <article className="pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-10">
            {[1, 2, 3].map((section) => (
              <section key={section}>
                <Skeleton className="h-8 w-2/3 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticleSkeleton;
