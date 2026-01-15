import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Search, Rocket, Globe, TrendingUp, Zap, Target, BookOpen, CheckCircle } from "lucide-react";
const AFFILIATE_LINK = "https://gitpage.site/?ref=WebsitesGenereren";
const blogPosts = [{
  id: 1,
  title: "Waarom Statische HTML Websites Beter Ranken in Google",
  description: "Ontdek waarom statische websites sneller laden en hoger scoren in zoekmachines dan dynamische alternatieven.",
  category: "SEO Basics",
  readTime: "5 min",
  icon: Search,
  content: ["Statische HTML-websites laden razendsnel omdat er geen database queries of server-side processing nodig is. Google's Core Web Vitals meten laadsnelheid, en snellere sites krijgen een hogere ranking.", "Zonder CMS overhead is je website niet alleen sneller, maar ook veiliger. Geen WordPress plugins die gehackt kunnen worden, geen database die kan crashen.", "Met diensten zoals Gitpage.site kun je direct statische HTML deployen naar een wereldwijd CDN, waardoor je bezoekers altijd de snelste versie krijgen."],
  tips: ["Gebruik geen onnodige JavaScript libraries", "Optimaliseer afbeeldingen voor web (WebP formaat)", "Zorg voor proper caching headers", "Minimaliseer CSS en HTML bestanden"]
}, {
  id: 2,
  title: "Lokale SEO: Zo Bereik je Klanten in Jouw Regio",
  description: "Leer hoe je met gerichte landingspagina's lokale zoekresultaten domineert en meer leads genereert.",
  category: "Lokale SEO",
  readTime: "7 min",
  icon: Target,
  content: ["Lokale SEO is essentieel voor bedrijven die klanten in een specifiek gebied willen bereiken. Door unieke landingspagina's te maken voor elke stad of regio, vergroot je je zichtbaarheid aanzienlijk.", "De sleutel is het creëren van relevante, unieke content voor elke locatie. Kopieer niet simpelweg dezelfde tekst met een andere plaatsnaam - Google herkent dit en bestraft duplicate content.", "Met AI-gegenereerde variaties kun je snel tientallen unieke pagina's maken, elk geoptimaliseerd voor een specifieke zoekterm en locatie."],
  tips: ["Gebruik '[dienst] + [plaatsnaam]' als primair keyword", "Voeg lokale bedrijfsgegevens toe (NAP consistency)", "Maak unieke meta descriptions per pagina", "Integreer Google Maps indien relevant"]
}, {
  id: 3,
  title: "Bulk Website Generatie: De Toekomst van Affiliate Marketing",
  description: "Hoe je met AI-tools snel meerdere niche websites kunt opzetten voor passief inkomen.",
  category: "Affiliate Marketing",
  readTime: "8 min",
  icon: Rocket,
  content: ["Affiliate marketing vereist vaak meerdere niche websites om verschillende markten te bedienen. Handmatig bouwen kost veel tijd, maar met de juiste tools kun je dit proces versnellen.", "Door AI te gebruiken voor content generatie en geautomatiseerde deployment, kun je in uren doen wat normaal weken zou kosten. Elke website kan worden geoptimaliseerd voor specifieke long-tail keywords.", "Gitpage.site biedt een perfecte oplossing: deploy onbeperkt statische websites voor een vaste prijs, ideaal voor affiliate marketeers die willen schalen."],
  tips: ["Focus op long-tail keywords met lage concurrentie", "Creëer waardevolle content, niet alleen promotie", "Test verschillende call-to-actions per pagina", "Monitor je rankings en pas aan waar nodig"]
}, {
  id: 4,
  title: "Core Web Vitals Optimaliseren voor Betere Rankings",
  description: "Begrijp Google's ranking factoren en leer hoe statische sites automatisch hoge scores behalen.",
  category: "Technische SEO",
  readTime: "6 min",
  icon: TrendingUp,
  content: ["Google's Core Web Vitals meten drie cruciale aspecten: Largest Contentful Paint (LCP), First Input Delay (FID), en Cumulative Layout Shift (CLS). Statische HTML websites scoren hier van nature uitstekend.", "Omdat er geen server-side rendering is, laadt de content direct. Geen JavaScript frameworks betekent snellere FID scores. Eenvoudige HTML/CSS layouts zorgen voor minimale CLS.", "Door je websites te hosten op een modern CDN zoals Gitpage.site, profiteer je van edge caching en automatische optimalisaties die je scores nog verder verbeteren."],
  tips: ["Houd LCP onder 2.5 seconden", "Minimaliseer third-party scripts", "Definieer afbeelding dimensies in HTML", "Gebruik system fonts waar mogelijk"]
}, {
  id: 5,
  title: "Van Keyword Research naar Live Website in 10 Minuten",
  description: "Een stapsgewijze handleiding om snel van idee naar gepubliceerde landingspagina te gaan.",
  category: "Tutorial",
  readTime: "10 min",
  icon: Zap,
  content: ["Effectieve keyword research is de basis van elke succesvolle SEO-campagne. Begin met tools zoals Google Keyword Planner, Ubersuggest, of Ahrefs om kansen te identificeren.", "Zoek naar keywords met decent zoekvolume maar lage concurrentie. Long-tail keywords zoals 'loodgieter amsterdam centrum' zijn vaak makkelijker te ranken dan generieke termen.", "Met onze bulk generator kun je direct meerdere variaties maken voor elk keyword. Koppel je Gitpage.site API key en je websites zijn binnen minuten live."],
  tips: ["Gebruik Google Trends voor seizoensgebonden keywords", "Analyseer competitor websites voor content gaps", "Maak minimaal 5-10 variaties per keyword", "Track rankings vanaf dag 1 met Google Search Console"]
}, {
  id: 6,
  title: "Gratis vs Betaald Hosting: Waarom Gitpage.site de Beste Keuze Is",
  description: "Een eerlijke vergelijking van hosting opties voor statische websites en waarom professionals kiezen voor Gitpage.",
  category: "Hosting",
  readTime: "6 min",
  icon: Globe,
  content: ["Gratis hosting klinkt aantrekkelijk, maar komt vaak met beperkingen: trage laadtijden, beperkte bandbreedte, en onprofessionele subdomeinen die je SEO schaden.", "Premium hosting voor statische sites hoeft niet duur te zijn. Gitpage.site biedt onbeperkte websites, custom domains, en automatische SSL - alles wat je nodig hebt voor professionele websites.", "De combinatie van GitHub-gebaseerde workflow en wereldwijd CDN maakt deployment eenvoudig en betrouwbaar. Perfect voor developers, marketeers, en agencies."],
  tips: ["Custom domains verbeteren merkherkenning en SEO", "SSL is verplicht voor Google rankings", "CDN zorgt voor consistente laadtijden wereldwijd", "Git-based workflow maakt versioning eenvoudig"]
}];
const Blog = () => {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Terug naar home</span>
          </Link>
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">Bekijk onze Demo<ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{
      background: 'var(--gradient-hero)'
    }}>
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            SEO Blog & Tutorials
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Leer Meer Over SEO & Website Generatie
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Praktische tips, tutorials en strategieën om je online zichtbaarheid te vergroten met statische websites en slimme SEO-technieken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Start met Gitpage.site <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/dashboard">Genereer Websites</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-12 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Rocket className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Klaar om te starten?</h3>
                <p className="text-muted-foreground">Deploy onbeperkt statische websites met Gitpage.site</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Bekijk Gitpage.site Plannen <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime} lezen</span>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                    <post.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    {post.content.map((paragraph, idx) => <p key={idx} className="text-sm text-muted-foreground">
                        {paragraph}
                      </p>)}
                    
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Quick Tips
                      </h4>
                      <ul className="space-y-2">
                        {post.tips.map((tip, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {tip}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Gitpage CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Waarom Kiezen voor Gitpage.site?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Razendsnelle Deployment</h3>
              <p className="text-primary-foreground/80 text-sm">
                Van code naar live website in seconden via GitHub integratie
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Wereldwijd CDN</h3>
              <p className="text-primary-foreground/80 text-sm">
                Automatische edge caching voor optimale laadtijden overal
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Onbeperkte Websites</h3>
              <p className="text-primary-foreground/80 text-sm">
                Eén abonnement, onbeperkt aantal websites en custom domains
              </p>
            </div>
          </div>
          <Button asChild size="lg" variant="secondary" className="text-foreground">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
              Start Nu met Gitpage.site <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Deze pagina bevat affiliate links naar Gitpage.site. Wij ontvangen een commissie bij aankoop via onze link.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors">
              Gitpage.site
            </a>
          </div>
        </div>
      </footer>
    </div>;
};
export default Blog;