import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
const AFFILIATE_LINK = "https://gitpage.site/?ref=WebsitesGenereren";
const SKOOL_LINK = "https://www.skool.com/online-ninja-5346/about?ref=132dd3be98ee4b1a89e39f454fface79";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 border-t border-border bg-background" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-bold text-lg text-foreground" aria-label="WebsitesGenereren - Naar homepagina">
              Websites<span className="text-primary">Genereren</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              De #1 AI Website Generator voor Nederland & België. Professionele websites zonder code.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigatie">
            <h3 className="font-semibold text-foreground mb-3 text-sm">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vergelijking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Vergelijking
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog & Tutorials
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1" aria-label="Start nu met de AI tool (opent in nieuw tabblad)">
                  Start Nu <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1" aria-label="Word lid van onze Skool community (opent in nieuw tabblad)">Word Lid Van Onze Community<ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Juridisch</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link to="/voorwaarden" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Algemene Voorwaarden
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} WebsitesGenereren.nl — De industriestandaard voor AI website generatie
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              * Deze pagina bevat affiliate links. Wij ontvangen een kleine commissie bij aankoop.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;