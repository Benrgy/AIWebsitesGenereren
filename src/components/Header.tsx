import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";

const AFFILIATE_LINK = "https://gitpage.site/?ref=WebsitesGenereren";

interface HeaderProps {
  variant?: "default" | "minimal";
  backLink?: {
    to: string;
    label: string;
  };
}

const Header = ({ variant = "default", backLink }: HeaderProps) => {
  if (variant === "minimal" && backLink) {
    return (
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link 
            to={backLink.to} 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{backLink.label}</span>
          </Link>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
              Start Vandaag Nog <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-foreground">
          Websites<span className="text-primary">Genereren</span>
        </Link>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/vergelijking" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Vergelijking
            </Link>
            <Link 
              to="/blog" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </nav>
          
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Probeer de #1 AI Tool</span>
              <span className="sm:hidden">Start Nu</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
