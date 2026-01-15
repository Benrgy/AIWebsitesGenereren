import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle, Clock, Calendar, HelpCircle } from "lucide-react";
import { getArticleBySlug, AFFILIATE_LINK } from "@/data/blogArticles";

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

  // Schema.org Article + FAQ structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
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
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://websitesgenereren.nl/blog/${article.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <link rel="canonical" href={`https://websitesgenereren.nl/blog/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Terug naar blog</span>
            </Link>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Probeer Gitpage.site <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </header>

        {/* Article Hero */}
        <section className="py-12 md:py-16" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" /> {article.readTime} lezen
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {new Date(article.datePublished).toLocaleDateString('nl-NL')}
              </span>
            </div>
            <div className="h-16 w-16 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground">{article.description}</p>
          </div>
        </section>

        {/* Quick Answer Box - Optimized for AI Overviews */}
        <section className="py-8 bg-primary/5 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-background border-primary/20">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Kort Antwoord
                </h2>
                <p className="text-foreground text-lg leading-relaxed">{article.shortAnswer}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {article.sections.map((section, idx) => (
              <section key={idx} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{section.heading}</h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            {/* Tips Section */}
            <section className="mb-12">
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Praktische Tips
                  </h3>
                  <ul className="space-y-3">
                    {article.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section - Critical for AI Overviews */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                Veelgestelde Vragen
              </h2>
              <div className="space-y-6">
                {article.faq.map((item, idx) => (
                  <Card key={idx} className="border-border">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-foreground mb-2">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Klaar om te beginnen?
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Met Gitpage.site maak je in minuten professionele websites. Geen technische kennis nodig, geen maandelijkse abonnementen.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-foreground">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Start nu met Gitpage.site <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Deze pagina bevat affiliate links naar Gitpage.site. Wij ontvangen een commissie bij aankoop via onze link.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors">Gitpage.site</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogArticle;
