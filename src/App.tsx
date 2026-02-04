import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollRestoration from "@/components/ScrollRestoration";
import CookieConsent from "@/components/CookieConsent";
import SkipLink from "@/components/SkipLink";
import AppErrorBoundary from "@/components/AppErrorBoundary";
import { toast } from "sonner";

// Lazy loaded pages for better performance (code splitting)
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const Vergelijking = lazy(() => import("./pages/Vergelijking"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Voorwaarden = lazy(() => import("./pages/Voorwaarden"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AFFILIATE_LINK = "https://gitpage.site/?ref=AIWebsitesGenereren";

// Redirect component that sends users to external affiliate link
const AffiliateRedirect = () => {
  window.location.href = AFFILIATE_LINK;
  return null;
};

// Lightweight loading fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
      <p className="text-sm text-muted-foreground">Laden...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Safety net: surface errors that would otherwise look like a "blank screen".
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("[unhandledrejection]", event.reason);
      toast.error("Er ging iets mis. Probeer het opnieuw.");
      event.preventDefault();
    };

    const onError = (event: ErrorEvent) => {
      console.error("[window.onerror]", event.error || event.message);
      toast.error("Er ging iets mis. Probeer het opnieuw.");
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onError);
    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <ScrollRestoration />
            <SkipLink />
            <AppErrorBoundary>
              <Suspense fallback={<PageLoader />}>
                <main id="main-content">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/auth" element={<AffiliateRedirect />} />
                    <Route path="/dashboard" element={<AffiliateRedirect />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogArticle />} />
                    <Route path="/vergelijking" element={<Vergelijking />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/voorwaarden" element={<Voorwaarden />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </Suspense>
            </AppErrorBoundary>
            <ScrollToTop />
            <CookieConsent />
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
