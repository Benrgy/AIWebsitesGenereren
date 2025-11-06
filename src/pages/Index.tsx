import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Globe, Rocket } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Powered by AI & GitPage</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Generate Dozens of
              <br />
              Landing Pages Instantly
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create 5 to 100 AI-powered websites with one click. Perfect for testing ideas,
              SEO campaigns, and rapid deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                onClick={() => navigate("/auth")}
                className="text-lg bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => navigate("/auth")}
                className="text-lg backdrop-blur-sm hover:bg-accent/50 transition-all duration-300"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why GitPage Builder?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all animate-fade-in">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate up to 100 unique landing pages in minutes. AI creates diverse content for each site.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Deploy</h3>
              <p className="text-muted-foreground">
                Automatically deployed to GitHub Pages. Live sites with custom domains in seconds.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scale Effortlessly</h3>
              <p className="text-muted-foreground">
                Perfect for SEO campaigns, A/B testing, and rapid market validation at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Scale Your Web Presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of marketers and developers using GitPage Builder to launch faster.
          </p>
          <Button
            size="xl"
            onClick={() => navigate("/auth")}
            className="text-lg shadow-glow bg-gradient-primary text-primary-foreground hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Building Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
