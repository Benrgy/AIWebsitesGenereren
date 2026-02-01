// Centralized SEO/GEO/LLM Configuration for WebsitesGenereren.nl
// Optimized for Traditional SEO, Generative Engine Optimization (GEO), and LLM Citability

export const SEO_CONFIG = {
  site: {
    name: "AI Websites Genereren",
    domain: "https://aiwebsitesgenereren.nl",
    logo: "https://aiwebsitesgenereren.nl/favicon.png",
    language: "nl",
    regions: ["NL", "BE"],
    locales: ["nl_NL", "nl_BE"],
    defaultLocale: "nl_NL",
    // Primary keywords for SEO targeting
    primaryKeyword: "AI website generator",
    secondaryKeywords: [
      "website bouwen met AI",
      "AI websites maken",
      "gratis website generator",
      "website genereren",
      "AI website builder Nederland",
    ],
  },
  defaults: {
    titleSuffix: " | AI Websites Genereren",
    ogImage: "https://aiwebsitesgenereren.nl/og-image.png",
    twitterHandle: "@aiwebsitesgenereren",
  },
  organization: {
    name: "AI Websites Genereren",
    alternateName: "AI Website Generator Nederland & België",
    url: "https://aiwebsitesgenereren.nl",
    logo: "https://aiwebsitesgenereren.nl/favicon.png",
    description: "Genereer professionele websites met AI in minuten. De #1 AI website generator voor Nederland en België. Geen technische kennis nodig.",
    foundingDate: "2024",
    areaServed: ["NL", "BE"],
    availableLanguage: ["nl"],
    // Enhanced for E-E-A-T signals
    knowsAbout: [
      "AI website development",
      "Website generators",
      "No-code website building",
      "Dutch web design",
    ],
  },
  social: {
    twitter: "@aiwebsitesgenereren",
  },
} as const;

// Generate Organization Schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SEO_CONFIG.organization.name,
  "alternateName": SEO_CONFIG.organization.alternateName,
  "url": SEO_CONFIG.organization.url,
  "logo": SEO_CONFIG.organization.logo,
  "description": SEO_CONFIG.organization.description,
  "foundingDate": SEO_CONFIG.organization.foundingDate,
  "areaServed": SEO_CONFIG.organization.areaServed.map(code => ({
    "@type": "Country",
    "name": code === "NL" ? "Nederland" : "België"
  })),
  "availableLanguage": SEO_CONFIG.organization.availableLanguage,
});

// Generate WebPage Schema with speakable for voice search
export const generateWebPageSchema = (params: {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  speakable?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": params.title,
  "description": params.description,
  "url": params.url,
  "inLanguage": "nl",
  "isPartOf": {
    "@type": "WebSite",
    "name": SEO_CONFIG.site.name,
    "url": SEO_CONFIG.site.domain
  },
  ...(params.dateModified && { "dateModified": params.dateModified }),
  ...(params.speakable && {
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": params.speakable
    }
  }),
  ...(params.breadcrumbs && {
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": params.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }
  })
});

// Generate Article Schema with speakable and enhanced LLM signals
export const generateArticleSchema = (params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  keywords?: string[];
  wordCount?: number;
  speakable?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": params.title,
  "description": params.description,
  "image": params.image,
  "datePublished": params.datePublished,
  "dateModified": params.dateModified,
  "author": {
    "@type": "Organization",
    "name": SEO_CONFIG.organization.name,
    "url": SEO_CONFIG.organization.url
  },
  "publisher": {
    "@type": "Organization",
    "name": SEO_CONFIG.organization.name,
    "url": SEO_CONFIG.organization.url,
    "logo": {
      "@type": "ImageObject",
      "url": SEO_CONFIG.organization.logo
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": params.url
  },
  "inLanguage": "nl",
  ...(params.keywords && { "keywords": params.keywords.join(", ") }),
  ...(params.wordCount && { "wordCount": params.wordCount }),
  ...(params.speakable && {
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": params.speakable
    }
  })
});

// Generate FAQ Schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Generate ItemList Schema for blog listings
export const generateItemListSchema = (params: {
  name: string;
  description: string;
  items: Array<{
    name: string;
    url: string;
    position: number;
    image?: string;
  }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": params.name,
  "description": params.description,
  "numberOfItems": params.items.length,
  "itemListElement": params.items.map(item => ({
    "@type": "ListItem",
    "position": item.position,
    "item": {
      "@type": "Article",
      "name": item.name,
      "url": item.url,
      ...(item.image && { "image": item.image })
    }
  }))
});

// Generate CollectionPage Schema for blog overview
export const generateCollectionPageSchema = (params: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": params.name,
  "description": params.description,
  "url": params.url,
  "inLanguage": "nl",
  "isPartOf": {
    "@type": "WebSite",
    "name": SEO_CONFIG.site.name,
    "url": SEO_CONFIG.site.domain
  }
});

// Generate Product Comparison Schema
export const generateComparisonSchema = (params: {
  title: string;
  description: string;
  url: string;
  products: Array<{
    name: string;
    description: string;
    brand?: string;
    rating?: number;
    price?: string;
    priceCurrency?: string;
  }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": params.title,
  "description": params.description,
  "url": params.url,
  "mainEntity": {
    "@type": "ItemList",
    "name": "Vergelijking Website Builders 2025",
    "description": params.description,
    "numberOfItems": params.products.length,
    "itemListElement": params.products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        ...(product.brand && { 
          "brand": { 
            "@type": "Brand", 
            "name": product.brand 
          }
        }),
        ...(product.rating && {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating,
            "bestRating": 5,
            "worstRating": 1,
            "ratingCount": 100
          }
        }),
        ...(product.price && {
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": product.priceCurrency || "EUR"
          }
        })
      }
    }))
  }
});

// Generate HowTo Schema for tutorial articles
export const generateHowToSchema = (params: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
  }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": params.name,
  "description": params.description,
  ...(params.totalTime && { "totalTime": params.totalTime }),
  "step": params.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
});

// Generate Breadcrumb Schema
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Helper to generate full URL
export const getFullUrl = (path: string) => `${SEO_CONFIG.site.domain}${path}`;

// Helper to generate hreflang tags
export const getHreflangTags = (path: string) => [
  { hrefLang: "nl-NL", href: getFullUrl(path) },
  { hrefLang: "nl-BE", href: getFullUrl(path) },
  { hrefLang: "x-default", href: getFullUrl(path) },
];

// Standard GEO meta tags for all pages
export const GEO_META_TAGS = {
  "geo.region": "NL",
  "geo.placename": "Nederland",
  "content-language": "nl",
  "audience": "Nederland, België, Nederlandstalig",
} as const;

// LLM-specific meta tag generator
export const generateLLMMetaTags = (params: {
  aiSummary: string;
  aiTopic: string;
  dateModified?: string;
}) => ({
  "ai.summary": params.aiSummary,
  "ai.topic": params.aiTopic,
  ...(params.dateModified && { "ai.freshness": params.dateModified }),
});

// Generate WebSite Schema for homepage (critical for sitelinks)
export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SEO_CONFIG.site.name,
  "alternateName": SEO_CONFIG.organization.alternateName,
  "url": SEO_CONFIG.site.domain,
  "description": SEO_CONFIG.organization.description,
  "inLanguage": "nl",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SEO_CONFIG.site.domain}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": SEO_CONFIG.organization.name,
    "logo": {
      "@type": "ImageObject",
      "url": SEO_CONFIG.organization.logo
    }
  }
});

// Generate LocalBusiness Schema for NL/BE targeting
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": SEO_CONFIG.organization.name,
  "alternateName": SEO_CONFIG.organization.alternateName,
  "url": SEO_CONFIG.site.domain,
  "logo": SEO_CONFIG.organization.logo,
  "description": SEO_CONFIG.organization.description,
  "areaServed": [
    {
      "@type": "Country",
      "name": "Nederland"
    },
    {
      "@type": "Country", 
      "name": "België"
    }
  ],
  "serviceType": "AI Website Generator",
  "knowsLanguage": "nl"
});
