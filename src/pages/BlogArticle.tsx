import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle, Clock, Calendar, HelpCircle, ListChecks, ChevronRight } from "lucide-react";
import { getArticleBySlug, blogArticles, AFFILIATE_LINK, BlogArticle as BlogArticleType } from "@/data/blogArticles";

// Import blog images
import seoGoogleSearch from "@/assets/blog/seo-google-search.jpg";
import websiteBeginners from "@/assets/blog/website-beginners.jpg";
import websiteCosts from "@/assets/blog/website-costs.jpg";
import wordpressVsAi from "@/assets/blog/wordpress-vs-ai.jpg";
import aiWebsiteGenerator from "@/assets/blog/ai-website-generator.jpg";
import localShopWebsite from "@/assets/blog/local-shop-website.jpg";
import zzpFreelancerWebsite from "@/assets/blog/zzp-freelancer-website.jpg";
import photographerPortfolio from "@/assets/blog/photographer-portfolio.jpg";
import githubHosting from "@/assets/blog/github-hosting.jpg";
import googleFirstPage from "@/assets/blog/google-first-page.jpg";
import localSeoCities from "@/assets/blog/local-seo-cities.jpg";
import startupValidation from "@/assets/blog/startup-validation.jpg";

// Map slugs to images
const articleImages: Record<string, string> = {
  "react-website-niet-gevonden-google": seoGoogleSearch,
  "website-bouwen-zonder-technische-kennis": websiteBeginners,
  "website-zonder-maandelijks-betalen": websiteCosts,
  "wordpress-trage-website-oplossen": wordpressVsAi,
  "website-zelf-bouwen-of-uitbesteden": zzpFreelancerWebsite,
  "statische-html-website-ai-genereren": aiWebsiteGenerator,
  "landingspagina-google-eerste-pagina": googleFirstPage,
  "meerdere-lokale-websites-genereren": localSeoCities,
  "website-bouwen-github-hosting": githubHosting,
  "ai-website-generator-nederlands": aiWebsiteGenerator,
  "wix-wordpress-alternatief-zonder-abonnement": wordpressVsAi,
  "webdesigner-nodig-of-zelf-doen": zzpFreelancerWebsite,
  "portfolio-website-fotograaf-gratis": photographerPortfolio,
  "simpele-zakelijke-website-zzp": zzpFreelancerWebsite,
  "website-kleine-winkel-lokaal": localShopWebsite,
  "restaurant-website-reserveringen": localShopWebsite,
  "kapper-kapsalon-website": localShopWebsite,
  "startup-landingspagina-validatie": startupValidation,
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel niet gevonden</h1>
          <Button asChild>
            <Link to="/blog">Terug naar blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = article.icon;
  const heroImage = articleImages[article.slug] || seoGoogleSearch;

  // Schema.org Article + FAQ structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "image": heroImage,
    "author": {
      "@type": "Organization",
      "name": "Websites Genereren"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Websites Genereren",
      "url": "https://websitesgenereren.nl"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://websitesgenereren.nl/blog/${article.slug}`
    },
    "keywords": article.keywords.join(", ")
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Websites Genereren</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content={`https://websitesgenereren.nl/blog/${article.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={heroImage} />
        <link rel="canonical" href={`https://websitesgenereren.nl/blog/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Minimal Header */}
        <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/blog" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Terug naar blog</span>
            </Link>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Probeer Gitpage <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section with Image */}
        <section className="relative">
          {/* Hero Image */}
          <div className="w-full h-48 sm:h-64 md:h-80 overflow-hidden">
            <img 
              src={heroImage} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4 -mt-20 relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {article.readTime}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {new Date(article.datePublished).toLocaleDateString('nl-NL')}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {article.title}
              </h1>
              
              {/* Description */}
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {article.metaDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-5">
                <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Kort Antwoord
                </h2>
                <p className="text-foreground leading-relaxed">{article.openingAnswer}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Executive Summary */}
        {article.executiveSummary && article.executiveSummary.length > 0 && (
          <section className="pb-8">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="bg-muted/30 rounded-lg p-5">
                <h2 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  Belangrijkste punten
                </h2>
                <ul className="space-y-2">
                  {article.executiveSummary.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <article className="pb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Sections */}
            <div className="space-y-10">
              {article.sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.calloutStat && (
                    <div className="mt-4 p-4 border-l-2 border-primary bg-primary/5 rounded-r-lg">
                      <p className="text-sm font-medium text-foreground">{section.calloutStat}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tips Section */}
            <section className="mt-12">
              <Card className="border-0 bg-muted/50">
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <ListChecks className="h-5 w-5 text-primary" />
                    Praktische Tips
                  </h3>
                  <div className="grid gap-3">
                    {article.tips.map((tip, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="text-primary font-bold text-lg">{idx + 1}</span>
                        <div>
                          <p className="font-medium text-foreground">{tip.title}</p>
                          <p className="text-muted-foreground text-sm">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Veelgestelde Vragen
              </h2>
              <div className="space-y-4">
                {article.faq.map((item, idx) => (
                  <details key={idx} className="group border border-border rounded-lg">
                    <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-foreground hover:bg-muted/30 rounded-lg transition-colors">
                      {item.question}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3">
                Klaar om te beginnen?
              </h2>
              <p className="text-primary-foreground/90 mb-5 text-sm sm:text-base max-w-lg mx-auto">
                Met Gitpage.site maak je in minuten een professionele website. Geen technische kennis nodig.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-foreground font-semibold">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Start nu gratis <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </section>

            {/* Related Articles Section */}
            {(() => {
              const relatedArticles = blogArticles
                .filter(a => a.category === article.category && a.slug !== article.slug)
                .slice(0, 3);
              
              if (relatedArticles.length === 0) return null;
              
              return (
                <section className="mt-12">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                    Gerelateerde Artikelen
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedArticles.map((relatedArticle) => (
                      <Link 
                        key={relatedArticle.id} 
                        to={`/blog/${relatedArticle.slug}`}
                        className="group"
                      >
                        <Card className="h-full hover:shadow-md hover:border-primary/30 transition-all overflow-hidden">
                          <div className="relative h-28 overflow-hidden">
                            <img 
                              src={articleImages[relatedArticle.slug] || seoGoogleSearch} 
                              alt={relatedArticle.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                            <Badge variant="secondary" className="absolute bottom-2 left-2 text-xs bg-background/90 backdrop-blur-sm">
                              {relatedArticle.category}
                            </Badge>
                          </div>
                          <CardContent className="p-3">
                            <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {relatedArticle.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {relatedArticle.readTime}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })()}
          </div>
        </article>

        {/* Footer */}
        <footer className="py-6 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground mb-3">
              Deze pagina bevat affiliate links. Bij aankoop ontvangen wij een commissie.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary/80 transition-colors">Gitpage.site</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogArticle;
