import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  X, 
  AlertTriangle, 
  Shield, 
  Zap, 
  DollarSign, 
  Clock, 
  Lock,
  Bug,
  RefreshCcw,
  TrendingDown,
  Skull,
  ExternalLink,
  Star,
  Award,
  Rocket,
  ArrowRight
} from "lucide-react";
import Footer from "@/components/Footer";

const AFFILIATE_LINK = "https://gitpage.site/?ref=WebsitesGenereren";
const SKOOL_LINK = "https://www.skool.com/online-ninja-5346/about?ref=132dd3be98ee4b1a89e39f454fface79";

const Vergelijking = () => {
  return (
    <>
      <Helmet>
        <title>Website Builders Vergelijken 2025 | Wix vs Squarespace vs WordPress vs AI</title>
        <meta 
          name="description" 
          content="Eerlijke vergelijking van Wix, Squarespace, WordPress en AI website generators. Ontdek welke optie het beste is voor jouw situatie en budget." 
        />
        <meta name="keywords" content="wix vergelijken, squarespace review, wordpress problemen, beste website builder, ai website generator" />
        <link rel="canonical" href="https://websitesgenereren.nl/vergelijking" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-bold text-lg text-foreground">
              Websites<span className="text-primary">Genereren</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                Blog
              </Link>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Bekijk de Winnaar <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="max-w-5xl mx-auto px-4 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              Let Op: 73% kiest verkeerd
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              De <span className="text-destructive">Harde Waarheid</span> Over<br />
              Website Builders in 2025
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Wix, Squarespace, WordPress... Ze beloven veel maar leveren weinig. 
              Ontdek waarom <strong className="text-foreground">duizenden ondernemers overstappen</strong> naar een betere oplossing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Ontdek de #1 Alternatief <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#vergelijking">
                  Bekijk Vergelijking
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Fear Section - What Can Go Wrong */}
        <section className="py-16 bg-destructive/5 border-y border-destructive/20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                <Skull className="inline-block h-8 w-8 text-destructive mr-3" />
                Nachtmerries Die Ondernemers Wakker Houden
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dit zijn echte scenario's die dagelijks gebeuren bij traditionele website builders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* WordPress Horror */}
              <div className="bg-background rounded-xl p-6 border border-destructive/30 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Bug className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">WordPress Gehackt</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Ik werd om 3 uur 's nachts gebeld. Mijn website verspreidde malware naar klanten. 
                  Google had mijn site geblokkeerd. <strong className="text-destructive">Mijn reputatie was vernietigd.</strong>"
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-destructive/10 rounded text-destructive">WordPress</span>
                  <span>• 30.000+ hacks per dag</span>
                </div>
              </div>

              {/* Plugin Conflicts */}
              <div className="bg-background rounded-xl p-6 border border-destructive/30 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <RefreshCcw className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Plugin Update = Website Kapot</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Na een simpele plugin update was mijn hele shop offline. De developer 
                  rekende <strong className="text-destructive">€800 om het te fixen</strong>. 
                  Ik verloor 3 dagen omzet."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-destructive/10 rounded text-destructive">WordPress</span>
                  <span>• Gemiddeld 12 plugins nodig</span>
                </div>
              </div>

              {/* Subscription Trap */}
              <div className="bg-background rounded-xl p-6 border border-destructive/30 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">De Abonnementen Val</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Wix leek goedkoop totdat ik alles optelde: €18/maand + domein + e-mail + 
                  premium features. <strong className="text-destructive">€350+ per jaar voor een simpele site.</strong>"
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-destructive/10 rounded text-destructive">Wix/Squarespace</span>
                  <span>• Verborgen kosten</span>
                </div>
              </div>

              {/* Slow Loading */}
              <div className="bg-background rounded-xl p-6 border border-destructive/30 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Tragisch Langzame Website</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Mijn Wix site laadde in 8+ seconden. Google strafte me af, 
                  <strong className="text-destructive">53% van bezoekers vertrok</strong> voordat de pagina geladen was."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-destructive/10 rounded text-destructive">Wix/Squarespace</span>
                  <span>• JavaScript bloat</span>
                </div>
              </div>

              {/* SEO Problems */}
              <div className="bg-background rounded-xl p-6 border border-destructive/30 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Onzichtbaar in Google</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Na 6 maanden met Squarespace stond ik nog steeds nergens. Mijn concurrent 
                  met een simpele HTML site <strong className="text-destructive">stond op pagina 1</strong>."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-destructive/10 rounded text-destructive">Alle builders</span>
                  <span>• SEO nightmares</span>
                </div>
              </div>

              {/* Lock-in */}
              <div className="bg-background rounded-xl p-6 border border-destructive/30 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Gevangen in het Platform</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Ik wilde weg van Wix maar kon mijn site niet exporteren. 
                  <strong className="text-destructive">Alles opnieuw bouwen</strong> of blijven betalen. Geen keuze."
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-destructive/10 rounded text-destructive">Wix/Squarespace</span>
                  <span>• Vendor lock-in</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="vergelijking" className="py-16 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Eerlijke Vergelijking: Alle Opties op een Rij
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We hebben elke optie getest op wat écht belangrijk is voor ondernemers
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Criteria</th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-muted-foreground">WordPress</span>
                        <span className="text-xs text-muted-foreground">+ Hosting</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-muted-foreground">Wix</span>
                        <span className="text-xs text-muted-foreground">Premium</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-muted-foreground">Squarespace</span>
                        <span className="text-xs text-muted-foreground">Business</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 bg-primary/5 rounded-t-xl">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="font-bold text-primary">Onze #1 Keuze</span>
                        </div>
                        <span className="text-xs text-primary/80">AI Website Generator</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Setup Tijd</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-muted-foreground">2-4 weken</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-muted-foreground">3-5 dagen</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-muted-foreground">3-5 dagen</span>
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <span className="font-semibold text-primary">5 minuten</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Technische Kennis Nodig</td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-muted-foreground">Beetje</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-muted-foreground">Beetje</span>
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Kosten Model</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive font-medium">€15-50/mnd</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive font-medium">€18-45/mnd</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive font-medium">€18-40/mnd</span>
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <span className="font-bold text-primary">Éénmalig</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Laadsnelheid (Core Web Vitals)</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-yellow-600">Matig</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive">Traag</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive">Traag</span>
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <span className="font-semibold text-primary">Razendsnel</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">SEO Score (Gemiddeld)</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-yellow-600">65/100</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive">55/100</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive">60/100</span>
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <span className="font-bold text-primary">95/100</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Beveiligingsrisico's</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive">Hoog</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-yellow-600">Gemiddeld</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-yellow-600">Gemiddeld</span>
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <span className="font-semibold text-primary">Minimaal</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Onderhoud Nodig</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-destructive">Continu</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-yellow-600">Regelmatig</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-yellow-600">Regelmatig</span>
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <span className="font-semibold text-primary">Geen</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Code Eigendom</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Gratis Hosting</td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5 rounded-b-xl">
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-6">
              {/* Winner Card */}
              <div className="bg-primary/5 rounded-2xl p-6 border-2 border-primary">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-xl text-primary">Onze #1 Keuze</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Setup Tijd</span>
                    <span className="font-semibold text-primary">5 minuten</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Kosten Model</span>
                    <span className="font-bold text-primary">Éénmalig</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">SEO Score</span>
                    <span className="font-semibold text-primary">95/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Beveiliging</span>
                    <span className="font-semibold text-primary">Minimaal risico</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Code Eigendom</span>
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Bekijk Prijzen <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Competitors */}
              <div className="grid gap-4">
                {[
                  { name: "WordPress", setup: "2-4 weken", cost: "€15-50/mnd", seo: "65/100", security: "Hoog risico" },
                  { name: "Wix", setup: "3-5 dagen", cost: "€18-45/mnd", seo: "55/100", security: "Gemiddeld" },
                  { name: "Squarespace", setup: "3-5 dagen", cost: "€18-40/mnd", seo: "60/100", security: "Gemiddeld" }
                ].map((competitor) => (
                  <div key={competitor.name} className="bg-muted/30 rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground mb-3">{competitor.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Setup Tijd</span>
                        <span className="text-muted-foreground">{competitor.setup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kosten</span>
                        <span className="text-destructive font-medium">{competitor.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">SEO Score</span>
                        <span className="text-muted-foreground">{competitor.seo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Beveiliging</span>
                        <span className="text-destructive">{competitor.security}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator Visual */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Wat Je Écht Betaalt Over 3 Jaar
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                De verborgen kosten van "goedkope" website builders
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* WordPress */}
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <h3 className="font-semibold text-foreground mb-4">WordPress</h3>
                <div className="relative h-48 mb-4">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-t from-destructive to-destructive/60 rounded-t-lg" style={{ height: '85%' }} />
                </div>
                <div className="text-3xl font-bold text-destructive mb-1">€2.160+</div>
                <div className="text-sm text-muted-foreground">Over 3 jaar</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Hosting + domein + plugins + beveiliging + onderhoud
                </div>
              </div>

              {/* Wix */}
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <h3 className="font-semibold text-foreground mb-4">Wix Premium</h3>
                <div className="relative h-48 mb-4">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-t from-destructive to-destructive/60 rounded-t-lg" style={{ height: '70%' }} />
                </div>
                <div className="text-3xl font-bold text-destructive mb-1">€1.296+</div>
                <div className="text-sm text-muted-foreground">Over 3 jaar</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Abonnement + domein + extra features
                </div>
              </div>

              {/* Squarespace */}
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <h3 className="font-semibold text-foreground mb-4">Squarespace</h3>
                <div className="relative h-48 mb-4">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-t from-destructive to-destructive/60 rounded-t-lg" style={{ height: '65%' }} />
                </div>
                <div className="text-3xl font-bold text-destructive mb-1">€1.080+</div>
                <div className="text-sm text-muted-foreground">Over 3 jaar</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Abonnement + domein + scheduling
                </div>
              </div>

              {/* Our Choice */}
              <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary text-center relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">WINNAAR</span>
                </div>
                <h3 className="font-semibold text-primary mb-4">Onze Keuze</h3>
                <div className="relative h-48 mb-4">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-t from-primary to-primary/60 rounded-t-lg" style={{ height: '8%' }} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">Éénmalig</div>
                <div className="text-sm text-muted-foreground">Geen abonnement</div>
                <div className="text-xs text-primary/80 mt-2">
                  Betaal 1x, bouw onbeperkt websites
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-foreground mb-4">
                <strong>Bespaar tot €2.100+</strong> over 3 jaar met éénmalige investering
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Bekijk Éénmalige Prijzen <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Speed Comparison Visual */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                <Zap className="inline-block h-8 w-8 text-primary mr-2" />
                Snelheid = Geld
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Elke seconde laadtijd kost je 7% conversie. Kijk hoe jouw keuze presteert.
              </p>
            </div>

            <div className="space-y-6">
              {/* Speed Bars */}
              {[
                { name: "Onze #1 Keuze (Statische HTML)", time: 0.4, color: "bg-primary", winner: true },
                { name: "WordPress (Geoptimaliseerd)", time: 2.1, color: "bg-yellow-500", winner: false },
                { name: "Squarespace", time: 3.8, color: "bg-destructive", winner: false },
                { name: "Wix", time: 5.2, color: "bg-destructive", winner: false },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${item.winner ? 'text-primary' : 'text-foreground'}`}>
                      {item.winner && <Star className="inline-block h-4 w-4 mr-1" />}
                      {item.name}
                    </span>
                    <span className={`font-semibold ${item.winner ? 'text-primary' : 'text-muted-foreground'}`}>
                      {item.time}s
                    </span>
                  </div>
                  <div className="h-4 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${Math.min((item.time / 6) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Waarom Statische HTML Wint</h3>
                  <p className="text-muted-foreground text-sm">
                    Terwijl Wix en Squarespace eerst JavaScript moeten laden en uitvoeren, 
                    serveert onze aanbevolen tool <strong>pure HTML</strong> direct vanaf 
                    GitHub's razendsnelle CDN. Resultaat: <strong className="text-primary">10x sneller</strong> dan 
                    de concurrentie en <strong className="text-primary">hogere Google rankings</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Shield Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  100% Veilig
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Nooit Meer Zorgen Over Hacks
                </h2>
                <p className="text-muted-foreground mb-6">
                  WordPress sites worden <strong>30.000+ keer per dag</strong> gehackt. 
                  Met onze aanbevolen oplossing is hacken simpelweg onmogelijk.
                </p>
                <ul className="space-y-3">
                  {[
                    "Geen database = niets te hacken",
                    "Geen plugins = geen kwetsbaarheden",
                    "Geen login pagina = geen brute force aanvallen",
                    "GitHub bescherming = enterprise-level security"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8" size="lg">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Start Veilig <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
                  <Shield className="h-32 w-32 text-primary mx-auto mb-6" />
                  <div className="text-5xl font-bold text-primary mb-2">0</div>
                  <div className="text-lg text-muted-foreground">Succesvolle hacks ooit</div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-background/80 rounded-lg p-3">
                      <div className="font-bold text-foreground">Geen</div>
                      <div className="text-muted-foreground">Database</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-3">
                      <div className="font-bold text-foreground">Geen</div>
                      <div className="text-muted-foreground">Plugins</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-3">
                      <div className="font-bold text-foreground">Geen</div>
                      <div className="text-muted-foreground">PHP Code</div>
                    </div>
                    <div className="bg-background/80 rounded-lg p-3">
                      <div className="font-bold text-foreground">100%</div>
                      <div className="text-muted-foreground">Statisch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Star className="h-4 w-4" />
                Éénmalige Betaling - Geen Abonnementen
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Kies Jouw Pakket
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Betaal één keer, bouw onbeperkt websites. Geen maandelijkse kosten, geen verrassingen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Basic Package */}
              <div className="bg-background rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-2">Basis Pakket</h3>
                <p className="text-muted-foreground text-sm mb-6">AI Agent voor websites bouwen</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">Éénmalige</span>
                  <span className="text-muted-foreground ml-2">investering</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "25 websites per maand genereren",
                    "In-App AI Page Editor",
                    "AI Design Systeem",
                    "Auto-genereer Blog Listing",
                    "Auto-genereer SEO Blog",
                    "Auto-genereer Beleid Pagina's",
                    "Auto-genereer TOS Pagina",
                    "Direct Online Publiceren",
                    "100% Gratis Website Hosting",
                    "100% Code Eigendom",
                    "Geen Watermerken of Branding",
                    "Eigen Domein Toevoegen"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full" variant="outline">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Bekijk Prijs <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Pro Package */}
              <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">POPULAIR</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Pro Pakket</h3>
                <p className="text-muted-foreground text-sm mb-6">AI Agent voor bouwen op schaal</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">Éénmalige</span>
                  <span className="text-muted-foreground ml-2">investering</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Alles van Basis Pakket PLUS:",
                    "Onbeperkt websites genereren",
                    "Geïntegreerd Contactformulier",
                    "GitHub en GitLab Integratie",
                    "Code Editor toegang",
                    "1-Click Sitemap.xml",
                    "1-Click llms.txt (AI Visibility)",
                    "1-Click robots.txt",
                    "1-Click Schema Markup",
                    "API Toegang inbegrepen",
                    "Meerdere Taal Opties",
                    "Nieuwe Features Aanvragen",
                    "Prioriteit Support"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className={idx === 0 ? "text-foreground font-medium" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Bekijk Prijs <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Betaal één keer. Bouw onbeperkt websites!
              </p>
            </div>
          </div>
        </section>

        {/* Free Alternative - Skool Community */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 sm:p-12 border border-primary/20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
                <Rocket className="h-4 w-4" />
                Gratis Alternatief
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Wil Je Gratis Beginnen?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Word lid van onze exclusieve community en krijg <strong className="text-foreground">gratis toegang</strong> tot 
                deze AI website tool én nog veel meer premium tools die anderen honderden euro's kosten.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                {[
                  { icon: <Zap className="h-5 w-5" />, text: "Gratis AI Tools" },
                  { icon: <Shield className="h-5 w-5" />, text: "Exclusieve Community" },
                  { icon: <Star className="h-5 w-5" />, text: "Direct Toegang" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
                    Word Gratis Lid <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Direct Kopen <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Als community-lid krijg je dezelfde tools gratis die anderen apart moeten kopen
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Klaar Om De Juiste Keuze Te Maken?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Duizenden ondernemers gingen je voor. Stop met maandelijkse abonnementen, 
              investeer éénmalig in jouw online succes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-foreground font-semibold shadow-lg">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Bekijk Éénmalige Prijzen <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
                  Of Word Gratis Lid <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-6">
              ✓ Éénmalige betaling &nbsp; ✓ Geen technische kennis nodig &nbsp; ✓ Website in 5 minuten
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Vergelijking;
