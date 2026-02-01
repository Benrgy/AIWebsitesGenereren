import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Rocket, Globe, Zap, Target, BookOpen, Clock, ArrowRight } from "lucide-react";
import { blogArticles, AFFILIATE_LINK } from "@/data/blogArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  generateCollectionPageSchema, 
  generateItemListSchema, 
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateOrganizationSchema,
  getFullUrl 
} from "@/lib/seoConfig";

// WebP images for better performance (30-50% smaller than JPG)
import seoGoogleSearch from "@/assets/blog/seo-google-search.webp";
import websiteBeginners from "@/assets/blog/website-beginners.webp";
import websiteCosts from "@/assets/blog/website-costs.webp";
import wordpressVsAi from "@/assets/blog/wordpress-vs-ai.webp";
import aiWebsiteGenerator from "@/assets/blog/ai-website-generator.webp";
import localShopWebsite from "@/assets/blog/local-shop-website.webp";
import zzpFreelancer from "@/assets/blog/zzp-freelancer-website.webp";
import photographerPortfolio from "@/assets/blog/photographer-portfolio.webp";
import githubHosting from "@/assets/blog/github-hosting.webp";
import googleFirstPage from "@/assets/blog/google-first-page.webp";
import localSeoCities from "@/assets/blog/local-seo-cities.webp";
import startupValidation from "@/assets/blog/startup-validation.webp";

// Map slugs to images
const articleImages: Record<string, string> = {
  "react-website-niet-gevonden-google": seoGoogleSearch,
  "website-bouwen-zonder-technische-kennis": websiteBeginners,
  "hoeveel-kost-website-laten-maken": websiteCosts,
  "wordpress-vs-statische-html-website": wordpressVsAi,
  "ai-website-generator-hoe-werkt-het": aiWebsiteGenerator,
  "lokale-winkel-website-nodig": localShopWebsite,
  "zzp-freelancer-website-portfolio": zzpFreelancer,
  "fotograaf-portfolio-website-maken": photographerPortfolio,
  "website-gratis-hosten-github-pages": githubHosting,
  "eerste-pagina-google-komen": googleFirstPage,
  "lokale-seo-meerdere-steden": localSeoCities,
  "idee-valideren-landingspagina": startupValidation
};

const Blog = () => {
  // Group articles by category
  const categories = [...new Set(blogArticles.map(article => article.category))];

  // Schema.org: CollectionPage
  const collectionPageSchema = generateCollectionPageSchema({
    name: "AI Website Generator Blog",
    description: "Praktische tips, tutorials en strategieën voor website generatie, SEO en online marketing in Nederland en België.",
    url: getFullUrl("/blog")
  });

  // Schema.org: ItemList for articles
  const itemListSchema = generateItemListSchema({
    name: "Website Tips & SEO Handleidingen",
    description: "20 gratis artikelen over website bouwen, SEO optimalisatie en AI website generatie",
    items: blogArticles.map((article, index) => ({
      name: article.title,
      url: getFullUrl(`/blog/${article.slug}`),
      position: index + 1,
      image: articleImages[article.slug]
    }))
  });

  // Schema.org: FAQ for AI Overviews
  const faqSchema = generateFAQSchema([
    {
      question: "Hoe maak ik een website zonder technische kennis?",
      answer: "Met de nieuwste AI website generators typ je gewoon wat je wilt en krijg je automatisch een professionele website. Geen code kennis nodig."
    },
    {
      question: "Waarom laadt mijn website zo traag?",
      answer: "WordPress en andere CMS systemen zijn traag door plugins en databases. Statische HTML websites laden 10x sneller."
    },
    {
      question: "Hoeveel kost een website maken?",
      answer: "Met onze aanbevolen AI tool betaal je geen maandelijks abonnement. Eenmalig een kleine vergoeding per website, veel goedkoper dan traditionele website bouwers."
    }
  ]);

  // Schema.org: Breadcrumb
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: getFullUrl("/") },
    { name: "Blog", url: getFullUrl("/blog") }
  ]);

  // Schema.org: WebPage for page identification
  const webPageSchema = generateWebPageSchema({
    title: "SEO Blog & Tutorials | Gratis Website Tips",
    description: "Leer hoe je gratis of goedkoop een professionele website maakt. Tips voor SEO, statische HTML, en website generatie met AI.",
    url: getFullUrl("/blog"),
    breadcrumbs: [
      { name: "Home", url: getFullUrl("/") },
      { name: "Blog", url: getFullUrl("/blog") }
    ],
    speakable: ["h1", ".quick-answer"]
  });

  // Schema.org: Organization for E-E-A-T
  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SEO Blog & Tutorials | Gratis Website Tips | WebsitesGenereren.nl"
        description="Leer hoe je gratis of goedkoop een professionele website maakt. Tips voor SEO, statische HTML, en website generatie met AI. Perfect voor beginners in Nederland en België."
        keywords="website maken tips, gratis website, seo tips, statische html, website bouwen, ai website generator, website zonder code"
        canonical="/blog"
        aiSummary="Deze blog biedt 20 gratis artikelen over website bouwen met AI. Leer hoe je zonder code een professionele website maakt, SEO optimaliseert, en gratis kunt hosten op GitHub Pages."
        aiTopic="AI Website Generatie, SEO, Website Bouwen"
        schemas={[collectionPageSchema, itemListSchema, faqSchema, breadcrumbSchema, webPageSchema, organizationSchema]}
      />

      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{
        background: 'var(--gradient-hero)'
      }}>
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            20 Gratis Artikelen
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gratis Website Tips & SEO Handleidingen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Leer hoe je een professionele website maakt zonder technische kennis. 
            Eenvoudig uitgelegd zodat iedereen het begrijpt. Van beginners tot ondernemers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Maak Nu Je Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Answer Box - AI Overview Optimized */}
      <section className="py-12 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              💡 Snel Antwoord: Hoe Maak Je Een Website?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Met <strong>de beste AI website generator</strong> maak je in 5 minuten een professionele website. 
              Je typt wat je wilt, de AI maakt het. Geen code nodig, geen abonnement, direct online.
            </p>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Word Lid<Rocket className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Grid by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {categories.map(category => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="h-8 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogArticles.filter(article => article.category === category).map(article => (
                  <Link key={article.id} to={`/blog/${article.slug}`}>
                    <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group overflow-hidden">
                      {/* Thumbnail Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={articleImages[article.slug] || seoGoogleSearch} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground bg-background/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      <CardHeader className="pt-4">
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {article.metaDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lees meer <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Klaar Om Te Beginnen?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Maak vandaag nog je eerste website. Geen technische kennis nodig, 
            geen dure abonnementen, gewoon een professionele website in minuten.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">5 Minuten</h3>
              <p className="text-primary-foreground/80 text-sm">
                Van idee naar live website
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">Direct Online</h3>
              <p className="text-primary-foreground/80 text-sm">
                Gratis hosting inbegrepen
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">SEO Ready</h3>
              <p className="text-primary-foreground/80 text-sm">
                Beter vindbaar in Google
              </p>
            </div>
          </div>
          <Button asChild size="lg" variant="secondary" className="text-foreground">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
              Start Nu Het Nog Kan!<ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
