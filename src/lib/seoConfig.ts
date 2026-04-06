// Centralized SEO/GEO/LLM Configuration for AIWebsitesGenereren.nl
// Optimized for Traditional SEO, Generative Engine Optimization (GEO), and LLM Citability

// Complete NL & BE city/province data for local SEO targeting
export const NL_PROVINCES = [
  { name: "Noord-Holland", cities: ["Amsterdam", "Haarlem", "Zaandam", "Hilversum", "Amstelveen", "Purmerend", "Hoofddorp"] },
  { name: "Zuid-Holland", cities: ["Rotterdam", "Den Haag", "Leiden", "Dordrecht", "Delft", "Zoetermeer", "Gouda"] },
  { name: "Utrecht", cities: ["Utrecht", "Amersfoort", "Veenendaal", "Nieuwegein", "Zeist", "IJsselstein"] },
  { name: "Noord-Brabant", cities: ["Eindhoven", "Tilburg", "Breda", "'s-Hertogenbosch", "Helmond", "Oss", "Roosendaal"] },
  { name: "Gelderland", cities: ["Arnhem", "Nijmegen", "Apeldoorn", "Ede", "Doetinchem", "Harderwijk", "Zutphen"] },
  { name: "Overijssel", cities: ["Zwolle", "Enschede", "Deventer", "Hengelo", "Almelo", "Kampen"] },
  { name: "Limburg", cities: ["Maastricht", "Venlo", "Heerlen", "Sittard", "Roermond", "Weert"] },
  { name: "Friesland", cities: ["Leeuwarden", "Drachten", "Sneek", "Heerenveen"] },
  { name: "Groningen", cities: ["Groningen", "Veendam", "Stadskanaal"] },
  { name: "Drenthe", cities: ["Assen", "Emmen", "Hoogeveen", "Meppel"] },
  { name: "Flevoland", cities: ["Almere", "Lelystad"] },
  { name: "Zeeland", cities: ["Middelburg", "Vlissingen", "Goes", "Terneuzen"] },
] as const;

export const BE_PROVINCES = [
  { name: "Antwerpen", cities: ["Antwerpen", "Mechelen", "Turnhout", "Lier", "Herentals"] },
  { name: "Oost-Vlaanderen", cities: ["Gent", "Aalst", "Sint-Niklaas", "Dendermonde", "Lokeren"] },
  { name: "West-Vlaanderen", cities: ["Brugge", "Kortrijk", "Oostende", "Roeselare", "Ieper"] },
  { name: "Vlaams-Brabant", cities: ["Leuven", "Vilvoorde", "Halle", "Tienen", "Aarschot"] },
  { name: "Limburg (BE)", cities: ["Hasselt", "Genk", "Tongeren", "Sint-Truiden", "Beringen"] },
  { name: "Brussels Hoofdstedelijk Gewest", cities: ["Brussel"] },
] as const;

export const ALL_NL_CITIES = NL_PROVINCES.flatMap(p => p.cities);
export const ALL_BE_CITIES = BE_PROVINCES.flatMap(p => p.cities);

export const SEO_CONFIG = {
  site: {
    name: "AI Websites Genereren",
    domain: "https://aiwebsitesgenereren.nl",
    logo: "https://aiwebsitesgenereren.nl/favicon.png",
    language: "nl",
    regions: ["NL", "BE"],
    locales: ["nl_NL", "nl_BE"],
    defaultLocale: "nl_NL",
    primaryKeyword: "AI website generator",
    secondaryKeywords: [
      "website bouwen met AI",
      "AI websites maken",
      "gratis website generator",
      "website genereren",
      "AI website builder Nederland",
      "website maken België",
      "AI website generator België",
      "website laten maken Nederland",
      "goedkope website Nederland",
      "website bouwen zonder code",
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
    knowsAbout: [
      "AI website development",
      "Website generators",
      "No-code website building",
      "Dutch web design",
      "SEO optimalisatie Nederland",
      "Lokale SEO België",
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
  "geo.region.secondary": "BE",
  "geo.placename.secondary": "België",
  "content-language": "nl",
  "audience": "Nederland, België, Vlaanderen, Nederlandstalig",
  "distribution": "global",
  "coverage": "Nederland, België",
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

// Generate LocalBusiness/ProfessionalService Schema with full NL+BE coverage
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
      "name": "Nederland",
      "identifier": "NL"
    },
    {
      "@type": "Country",
      "name": "België",
      "identifier": "BE"
    },
    // Major NL cities as AdministrativeArea
    ...["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Tilburg", "Almere", "Breda", "Nijmegen", "Arnhem", "Maastricht", "Haarlem", "Zwolle", "Leiden", "Amersfoort", "Apeldoorn", "Enschede", "Dordrecht", "Delft"].map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": { "@type": "Country", "name": "Nederland" }
    })),
    // Major BE cities
    ...["Antwerpen", "Gent", "Brugge", "Leuven", "Brussel", "Mechelen", "Hasselt", "Kortrijk", "Oostende", "Aalst"].map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": { "@type": "Country", "name": "België" }
    })),
  ],
  "serviceType": [
    "AI Website Generator",
    "Website Bouwen",
    "SEO Optimalisatie",
    "Landingspagina Maken",
    "Portfolio Website",
  ],
  "knowsLanguage": ["nl", "nl-NL", "nl-BE"],
  "slogan": "Professionele website in 5 minuten met AI",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Website Generator Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Website Generatie",
          "description": "Professionele website laten genereren door AI. Inclusief SEO, hosting en design."
        },
        "areaServed": ["NL", "BE"],
        "availableAtOrFrom": {
          "@type": "VirtualLocation",
          "url": SEO_CONFIG.site.domain
        }
      }
    ]
  }
});
