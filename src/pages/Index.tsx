import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProcessDemo } from "@/components/ProcessDemo";
import { 
  Sparkles, 
  Zap, 
  Globe, 
  Rocket, 
  Search, 
  Code, 
  FileText, 
  CheckCircle, 
  X, 
  Timer,
  Shield,
  CreditCard,
  Lock,
  BarChart3,
  Users,
  Building2,
  Palette,
  FileCode,
  Bot,
  HelpCircle,
  Play
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const websiteTypes = [
    "Portfolio Website",
    "Blog Website", 
    "AI Agency",
    "Lokaal Bedrijf",
    "Project Documentatie",
    "Persoonlijke Website",
    "Landingspagina",
    "SEO Campagne Sites"
  ];

  const testimonials = [
    {
      quote: "Ik heb binnen 10 minuten een professionele landingspagina voor mijn app gemaakt. Wat normaal dagen zou kosten, was in een fractie van de tijd klaar. De automatische SEO-optimalisatie is geweldig!",
      name: "Martijn de Vries",
      role: "App Ontwikkelaar",
      initial: "M"
    },
    {
      quote: "Als SEO-bureau hebben we dit ingezet voor meerdere klanten. De pure HTML-uitvoer scoort direct goed in Google. Perfect voor snelle klantdemo's en campagnes.",
      name: "Lisa van den Berg",
      role: "SEO Specialist",
      initial: "L"
    },
    {
      quote: "Geen technische kennis nodig en toch een professionele website. De AI-generatie begrijpt precies wat ik nodig heb voor mijn lokale bedrijf.",
      name: "Peter Jansen",
      role: "Ondernemer",
      initial: "P"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Website Generator voor Nederland & België</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              Wat ga jij vandaag{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">bouwen</span>?
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Creëer professionele websites met AI → design systeem + statische HTML. 
              <br className="hidden sm:block" />
              Gebouwd voor zoekmachines, niet alleen browsers.
            </p>

            {/* Website Types */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
              {websiteTypes.map((type) => (
                <span 
                  key={type}
                  className="px-3 py-1.5 bg-muted/50 backdrop-blur-sm rounded-full text-sm border border-border/50 hover:border-primary/50 hover:bg-muted transition-all cursor-default"
                >
                  {type}
                </span>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                Geen Code Nodig
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                Gratis Hosting
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1">
                <Rocket className="h-4 w-4" />
                Auto Deploy
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1">
                <CreditCard className="h-4 w-4" />
                Geen Abonnement
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                onClick={() => navigate("/auth")}
                className="text-lg bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Gratis Starten
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => navigate("/auth")}
                className="text-lg backdrop-blur-sm hover:bg-accent/50 transition-all duration-300"
              >
                Bekijk Hoe Het Werkt
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Play className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">Interactieve Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Van Idee naar Live Website in Minuten
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Bekijk stap voor stap hoe onze AI jouw complete website bouwt
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ProcessDemo />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-full border">
              <Timer className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">~4 Minuten</span>
              <span className="text-muted-foreground">gemiddelde tijd van formulier naar live site</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section - Key Differentiator */}
      <section className="py-20 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium">SEO Geoptimaliseerd</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Gebouwd voor Zoekmachines, Niet Alleen Browsers
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              In tegenstelling tot AI website builders die React apps genereren, creëren wij{" "}
              <span className="text-foreground font-semibold">pure statische HTML</span>{" "}
              waar zoekmachines van houden.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Our Solution */}
            <div className="p-8 rounded-xl border-2 border-primary/50 bg-card shadow-glow">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">SEO Geoptimaliseerd</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Onze Aanpak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Statische HTML Generatie</h4>
                    <p className="text-muted-foreground text-sm">Elke pagina is een volledig HTML document met alle content zichtbaar voor zoekmachines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Directe Indexering</h4>
                    <p className="text-muted-foreground text-sm">Google kan jouw content direct crawlen en indexeren - geen JavaScript executie nodig</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ingebouwde Meta Tags</h4>
                    <p className="text-muted-foreground text-sm">SEO meta tags, Open Graph en schema markup automatisch gegenereerd</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Bliksemsnelle Laadtijden</h4>
                    <p className="text-muted-foreground text-sm">Geen framework overhead of hydration delays - pure HTML en CSS</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">100% Crawlbaar</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">Zero Hydration Delay</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">Perfecte Lighthouse Scores</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">Core Web Vitals</span>
              </div>
            </div>

            {/* Other Builders */}
            <div className="p-8 rounded-xl border border-destructive/30 bg-card/50">
              <div className="flex items-center gap-2 mb-6">
                <X className="h-6 w-6 text-destructive" />
                <span className="text-destructive font-semibold text-sm uppercase tracking-wide">SEO Uitdagingen</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Andere AI Builders</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">JavaScript-afhankelijke Content</h4>
                    <p className="text-muted-foreground/70 text-sm">Content geladen via React/JavaScript - zoekmachines zien lege divs tot JS uitvoert</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Vertraagde Indexering</h4>
                    <p className="text-muted-foreground/70 text-sm">Google moet JavaScript uitvoeren om content te zien, wat dagen of weken kan duren</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Grote Bundle Sizes</h4>
                    <p className="text-muted-foreground/70 text-sm">Zware React framework code (50-200KB+) vertraagt initiële pagina laadtijden</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Complexe SEO Setup Nodig</h4>
                    <p className="text-muted-foreground/70 text-sm">Vereist SSR/SSG configuraties, prerendering services om goed te ranken</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl border bg-card max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Search className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Waarom Statische HTML Wint voor SEO</h3>
                <p className="text-muted-foreground">
                  Zoekmachines zoals Google prefereren websites die ze direct kunnen crawlen. Met onze aanpak is jouw content 
                  direct beschikbaar in de HTML source - geen JavaScript executie nodig. Dit betekent snellere indexering, 
                  betere rankings en meer organisch verkeer vanaf dag één. Perfect voor{" "}
                  <span className="text-foreground font-medium">SEO-bureaus, GEO-specialisten en AI Overview optimalisatie</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium">Alles Inbegrepen</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Alles Wat Je Nodig Hebt, Automatisch Gegenereerd
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all animate-fade-in">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professioneel Design</h3>
              <p className="text-muted-foreground">
                Kies uit verschillende stijlen en kleurenschema's. Moderne, responsieve designs die op elk apparaat perfect werken.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <FileCode className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Website</h3>
              <p className="text-muted-foreground">
                Volledige site met pagina's, secties, SEO blog, privacy beleid en contactformulier automatisch gegenereerd.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO & Meta Tags</h3>
              <p className="text-muted-foreground">
                Perfecte SEO optimalisatie met meta tags, Open Graph, schema markup en geoptimaliseerde content structuur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium">Maximale Waarde</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Geen Verborgen Kosten of Beperkingen
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              In tegenstelling tot traditionele website builders, krijg je{" "}
              <span className="text-foreground font-semibold">volledige eigendom zonder doorlopende kosten</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional */}
            <div className="p-8 rounded-xl border bg-card/50">
              <h3 className="text-xl font-bold mb-6 text-muted-foreground">Traditionele Website Builders</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Abonnement</span>
                  <span className="font-semibold text-destructive">€20-50/mnd</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Branding Verwijderen</span>
                  <span className="font-semibold text-destructive">€8-25/mnd</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Premium Features</span>
                  <span className="font-semibold text-destructive">€12-30/mnd</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Domein Kosten</span>
                  <span className="font-semibold">€12-20/jaar</span>
                </div>
                <div className="flex justify-between items-center py-3 mt-4 bg-destructive/10 rounded-lg px-4">
                  <span className="font-semibold">Totaal per Jaar</span>
                  <span className="font-bold text-destructive text-xl">€500-1.500</span>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="p-8 rounded-xl border-2 border-primary bg-card shadow-glow">
              <h3 className="text-xl font-bold mb-6">Onze Aanpak</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Abonnement</span>
                  <span className="font-semibold text-primary">€0</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Branding</span>
                  <span className="font-semibold text-primary">Geen</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Alle Features</span>
                  <span className="font-semibold text-primary">Inbegrepen</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Gratis URL</span>
                  <span className="font-semibold text-primary">Inbegrepen</span>
                </div>
                <div className="flex justify-between items-center py-3 mt-4 bg-primary/10 rounded-lg px-4">
                  <span className="font-semibold">Per Website</span>
                  <span className="font-bold text-primary text-xl">~€0,50</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Code Eigendom</h4>
              <p className="text-sm text-muted-foreground">Volledige toegang tot je broncode</p>
            </div>
            <div className="text-center p-4">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Geen Abonnement</h4>
              <p className="text-sm text-muted-foreground">Geen maandelijkse kosten ooit</p>
            </div>
            <div className="text-center p-4">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Gratis Hosting</h4>
              <p className="text-sm text-muted-foreground">GitHub Pages met SSL en CDN</p>
            </div>
            <div className="text-center p-4">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Geen Vendor Lock-in</h4>
              <p className="text-sm text-muted-foreground">Jouw site, jouw regels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium">Voor Wie?</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Gebouwd voor Professionals & Ondernemers
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Sluit je aan bij professionals die websites maken in minuten, niet dagen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Specialisten & Bureaus</h3>
              <p className="text-muted-foreground">
                Perfect voor SEO-campagnes, GEO-targeting en AI Overview optimalisatie. Genereer tientallen geoptimaliseerde landingspagina's voor je klanten.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing Bureaus</h3>
              <p className="text-muted-foreground">
                Snelle klantdemo's, campagne landingspagina's en A/B testing op grote schaal. Verminder doorlooptijden drastisch.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card shadow-card hover:shadow-glow transition-all">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ondernemers & ZZP'ers</h3>
              <p className="text-muted-foreground">
                Lanceer je idee snel met een professionele website. Geen technische kennis nodig, geen dure ontwikkelaars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Wat Gebruikers Zeggen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border bg-card shadow-card"
              >
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="text-primary text-sm font-medium">Veelgestelde Vragen</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Alles Wat Je Wilt Weten
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Antwoorden op de meest gestelde vragen over onze AI website generator
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Wat is het verschil met andere AI website builders?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Het belangrijkste verschil is dat wij pure statische HTML genereren in plaats van React of JavaScript-gebaseerde websites. Dit betekent dat zoekmachines je content direct kunnen indexeren zonder JavaScript uit te voeren. Daarnaast heb je volledige eigendom over je code en zijn er geen maandelijkse abonnementskosten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Hoeveel kost het om een website te maken?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Je betaalt alleen per website die je genereert, gemiddeld rond €0,50 per site. Er zijn geen abonnementen, geen verborgen kosten en geen maandelijkse fees. Je krijgt ook gratis hosting via GitHub Pages met SSL en CDN inbegrepen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Heb ik technische kennis nodig?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nee, je hebt geen programmeerkennis nodig. Je vult simpelweg een formulier in met je wensen (keyword, taal, contactgegevens) en onze AI genereert automatisch een complete, professionele website. Het hele proces duurt gemiddeld slechts 4 minuten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Waarom is statische HTML beter voor SEO?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Zoekmachines zoals Google kunnen statische HTML direct lezen en indexeren. Bij JavaScript-gebaseerde websites (zoals React/Vue) moet de zoekmachine eerst de JavaScript uitvoeren om de content te zien, wat kan leiden tot vertraagde of incomplete indexering. Statische HTML laadt ook sneller, wat positief is voor Core Web Vitals en rankings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Kan ik meerdere websites tegelijk genereren?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ja! Je kunt tot 100 website variaties per batch genereren. Dit is ideaal voor SEO-bureaus die A/B tests willen uitvoeren, meerdere landingspagina's voor campagnes nodig hebben, of verschillende invalshoeken voor hetzelfde keyword willen testen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Wat zit er allemaal in een gegenereerde website?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Elke website bevat: een professionele landingspagina met hero sectie, features, benefits en call-to-action, volledige SEO meta tags en Open Graph data, schema markup voor zoekmachines, privacybeleid en algemene voorwaarden, een contactformulier, en optioneel een SEO-geoptimaliseerde blog sectie.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Kan ik mijn eigen domein gebruiken?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ja, je kunt je eigen domein koppelen aan je gegenereerde website. Standaard krijg je een gratis URL via GitHub Pages, maar je kunt eenvoudig je eigen domein instellen. Aangezien je volledige toegang hebt tot de broncode, kun je de site ook naar elke andere hosting provider verplaatsen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">In welke talen kan ik websites genereren?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We ondersteunen momenteel Nederlands, Engels, Duits, Frans, Spaans en Portugees. De AI genereert alle content, meta tags en beleidspagina's in de door jou gekozen taal. Perfect voor internationale campagnes of lokale SEO in verschillende landen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Hoe snel is mijn website live?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Gemiddeld is je website binnen 4 minuten live na het invullen van het formulier. De AI genereert de content, het design systeem wordt toegepast, en de site wordt automatisch gedeployed naar GitHub Pages met SSL certificaat en CDN. Je ontvangt direct een werkende URL.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Heb ik volledige toegang tot de broncode?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ja, je hebt 100% eigendom en toegang tot alle broncode. De website wordt opgeslagen in een GitHub repository waar je volledige controle over hebt. Je kunt de code aanpassen, uitbreiden, of verplaatsen naar een andere hosting provider wanneer je maar wilt. Geen vendor lock-in.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Klaar om te Beginnen?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Maak vandaag nog je eerste AI-gegenereerde website. Geen code, geen abonnement, volledige eigendom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              onClick={() => navigate("/auth")}
              className="text-lg shadow-glow bg-gradient-primary text-primary-foreground hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Gratis
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Geen creditcard nodig • Genereer je eerste website in ~4 minuten
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            De industriestandaard voor AI website generatie in Nederland en België
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
