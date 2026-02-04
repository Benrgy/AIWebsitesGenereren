import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ExternalLink, ArrowLeft, Menu, Home, BarChart3, BookOpen, Rocket } from "lucide-react";
const AFFILIATE_LINK = "https://gitpage.site/?ref=WebsitesGenereren";
interface HeaderProps {
  variant?: "default" | "minimal";
  backLink?: {
    to: string;
    label: string;
  };
}
const Header = ({
  variant = "default",
  backLink
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [{
    to: "/",
    label: "Home",
    icon: Home
  }, {
    to: "/vergelijking",
    label: "Vergelijking",
    icon: BarChart3
  }, {
    to: "/blog",
    label: "Blog",
    icon: BookOpen
  }];
  if (variant === "minimal" && backLink) {
    return <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50" role="banner">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to={backLink.to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" aria-label={backLink.label}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{backLink.label}</span>
          </Link>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" aria-label="Start vandaag nog met de AI website generator (opent in nieuw tabblad)">
              Start Vandaag Nog <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </header>;
  }
  return <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50" role="banner">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-foreground" aria-label="WebsitesGenereren - Naar homepagina">AIWebsitesGenereren<span className="text-primary">Genereren</span>
        </Link>
        
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-6" aria-label="Hoofdnavigatie">
            {navLinks.map(link => <Link key={link.to} to={link.to} className={`text-sm transition-colors ${isActive(link.to) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`} aria-current={isActive(link.to) ? "page" : undefined}>
                {link.label}
              </Link>)}
          </nav>
          
          {/* Desktop CTA */}
          <Button asChild className="hidden sm:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" aria-label="Probeer de #1 AI Tool (opent in nieuw tabblad)">
              Probeer de #1 AI Tool
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden" aria-label="Navigatiemenu openen" aria-expanded={isOpen} aria-controls="mobile-navigation">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background" aria-label="Mobiel navigatiemenu">
              <div className="flex flex-col h-full" id="mobile-navigation">
                {/* Mobile Logo */}
                <div className="py-4 border-b border-border">
                  <Link to="/" className="font-bold text-lg text-foreground" onClick={() => setIsOpen(false)} aria-label="WebsitesGenereren - Naar homepagina">
                    Websites<span className="text-primary">Genereren</span>
                  </Link>
                </div>
                
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col py-6 gap-1" aria-label="Mobiele navigatie">
                  {navLinks.map(link => {
                  const Icon = link.icon;
                  return <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base transition-colors ${isActive(link.to) ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"}`} aria-current={isActive(link.to) ? "page" : undefined}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                        {link.label}
                      </Link>;
                })}
                </nav>
                
                {/* Mobile CTA */}
                <div className="mt-auto pb-6">
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                    <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} aria-label="Start vandaag nog met de AI website generator (opent in nieuw tabblad)">
                      <Rocket className="mr-2 h-4 w-4" aria-hidden="true" />
                      Start Vandaag Nog
                      <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Geen abonnement • Direct online
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;