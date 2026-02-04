import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateWebPageSchema, getFullUrl } from "@/lib/seoConfig";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Schema.org: WebPage for error page
  const errorPageSchema = generateWebPageSchema({
    title: "Pagina Niet Gevonden",
    description: "Deze pagina bestaat niet. Ga terug naar de homepage van AIWebsitesGenereren.nl.",
    url: getFullUrl("/404"),
  });

  return (
    <>
      <SEOHead
        title="Pagina Niet Gevonden | AIWebsitesGenereren.nl"
        description="Deze pagina bestaat niet. Ga terug naar de homepage van AIWebsitesGenereren.nl voor tips over AI website generatie."
        canonical="/404"
        noIndex={true}
        includeGeoTags={false}
        schemas={[errorPageSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center py-16 px-4">
          <div className="text-center max-w-lg">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                404
              </h1>
            </div>
            
            {/* Message */}
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Pagina Niet Gevonden
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Oeps! De pagina die je zoekt bestaat niet of is verplaatst. 
              Geen zorgen, we helpen je graag terug op weg.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Terug naar Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  Bekijk Onze Blog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Populaire pagina's:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/" 
                  className="text-sm text-primary hover:underline"
                >
                  Home
                </Link>
                <span className="text-border">•</span>
                <Link 
                  to="/vergelijking" 
                  className="text-sm text-primary hover:underline"
                >
                  Vergelijking
                </Link>
                <span className="text-border">•</span>
                <Link 
                  to="/blog" 
                  className="text-sm text-primary hover:underline"
                >
                  Blog
                </Link>
                <span className="text-border">•</span>
                <Link 
                  to="/privacy" 
                  className="text-sm text-primary hover:underline"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
