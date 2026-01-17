import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Rocket, Globe, Zap, Target, BookOpen, Clock, ArrowRight } from "lucide-react";
import { blogArticles, AFFILIATE_LINK } from "@/data/blogArticles";

const Blog = () => {
  // Group articles by category
  const categories = [...new Set(blogArticles.map(article => article.category))];

  // Schema.org markup for Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AI Website Generator Blog",
    "description": "Praktische tips, tutorials en strategieën voor website generatie, SEO en online marketing in Nederland en België.",
    "url": "https://site-wave-ai.lovable.app/blog",
    "inLanguage": "nl",
    "publisher": {
      "@type": "Organization",
      "name": "AI Website Generator Nederland",
      "url": "https://site-wave-ai.lovable.app"
    },
    "blogPost": blogArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.metaDescription,
      "url": `https://site-wave-ai.lovable.app/blog/${article.slug}`,
      "datePublished": article.datePublished,
      "dateModified": article.dateModified,
      "author": {
        "@type": "Organization",
        "name": "AI Website Generator Nederland"
      }
    }))
  };

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe maak ik een website zonder technische kennis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Met AI-tools zoals Gitpage.site typ je gewoon wat je wilt en krijg je automatisch een professionele website. Geen code kennis nodig."
        }
      },
      {
        "@type": "Question",
        "name": "Waarom laadt mijn website zo traag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WordPress en andere CMS systemen zijn traag door plugins en databases. Statische HTML websites laden 10x sneller."
        }
      },
      {
        "@type": "Question",
        "name": "Hoeveel kost een website maken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Met Gitpage.site betaal je geen maandelijks abonnement. Eenmalig een kleine vergoeding per website, veel goedkoper dan traditionele website bouwers."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>SEO Blog & Tutorials | Gratis Website Tips | AI Website Generator</title>
        <meta name="description" content="Leer hoe je gratis of goedkoop een professionele website maakt. Tips voor SEO, statische HTML, en website generatie met AI. Perfect voor beginners in Nederland en België." />
        <meta name="keywords" content="website maken tips, gratis website, seo tips, statische html, website bouwen, ai website generator, website zonder code" />
        <link rel="canonical" href="https://site-wave-ai.lovable.app/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SEO Blog & Tutorials | AI Website Generator" />
        <meta property="og:description" content="Praktische tips om gratis of goedkoop een professionele website te maken. Perfect voor beginners." />
        <meta property="og:url" content="https://site-wave-ai.lovable.app/blog" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Blog & Tutorials | AI Website Generator" />
        <meta name="twitter:description" content="Praktische tips om gratis of goedkoop een professionele website te maken." />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Terug naar home</span>
          </Link>
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
              Probeer Gitpage.site <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{ background: 'var(--gradient-hero)' }}>
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
              Met AI website generators zoals <strong>Gitpage.site</strong> maak je in 5 minuten een professionele website. 
              Je typt wat je wilt, de AI maakt het. Geen code nodig, geen abonnement, direct online.
            </p>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Probeer Het Gratis <Rocket className="ml-2 h-4 w-4" />
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
                {blogArticles
                  .filter(article => article.category === category)
                  .map(article => (
                    <Link key={article.id} to={`/blog/${article.slug}`}>
                      <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">
                              {article.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                            <article.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                        <CardDescription className="line-clamp-2">
                            {article.metaDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {article.openingAnswer}
                          </p>
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
              Start Nu Gratis <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            * Deze pagina bevat affiliate links. Wij ontvangen een kleine commissie bij aankoop via onze links, zonder extra kosten voor jou.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-sm text-primary hover:text-primary/80 transition-colors">
              Blog
            </Link>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Gitpage.site →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
