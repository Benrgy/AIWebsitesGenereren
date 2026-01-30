import { Helmet } from "react-helmet-async";
import { SEO_CONFIG, GEO_META_TAGS, getFullUrl, getHreflangTags } from "@/lib/seoConfig";

interface SEOHeadProps {
  // Core SEO
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  
  // Robots
  noIndex?: boolean;
  
  // Open Graph
  ogType?: "website" | "article";
  ogImage?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  
  // Schema.org JSON-LD
  schemas?: object[];
  
  // LLM/AI specific
  aiSummary?: string;
  aiTopic?: string;
  
  // GEO specific
  includeGeoTags?: boolean;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  noIndex = false,
  ogType = "website",
  ogImage,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  schemas = [],
  aiSummary,
  aiTopic,
  includeGeoTags = true,
}: SEOHeadProps) => {
  const fullCanonical = canonical.startsWith("http") ? canonical : getFullUrl(canonical);
  const hreflangTags = getHreflangTags(canonical);
  const defaultOgImage = ogImage || SEO_CONFIG.defaults.ogImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={noIndex 
          ? "noindex, follow" 
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        } 
      />
      
      {/* Hreflang for NL and BE */}
      {hreflangTags.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
      
      {/* GEO Meta Tags */}
      {includeGeoTags && (
        <>
          <meta name="geo.region" content={GEO_META_TAGS["geo.region"]} />
          <meta name="geo.placename" content={GEO_META_TAGS["geo.placename"]} />
          <meta httpEquiv="content-language" content={GEO_META_TAGS["content-language"]} />
          <meta name="audience" content={GEO_META_TAGS["audience"]} />
        </>
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={SEO_CONFIG.site.name} />
      <meta property="og:locale" content={SEO_CONFIG.site.defaultLocale} />
      <meta property="og:locale:alternate" content="nl_BE" />
      {defaultOgImage && <meta property="og:image" content={defaultOgImage} />}
      {defaultOgImage && <meta property="og:image:width" content="1200" />}
      {defaultOgImage && <meta property="og:image:height" content="630" />}
      
      {/* Article specific Open Graph */}
      {ogType === "article" && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === "article" && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === "article" && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {ogType === "article" && (
        <meta property="article:author" content={SEO_CONFIG.organization.name} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_CONFIG.social.twitter} />
      <meta name="twitter:creator" content={SEO_CONFIG.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {defaultOgImage && <meta name="twitter:image" content={defaultOgImage} />}
      
      {/* LLM/AI Specific Meta Tags (Innovation for GEO) */}
      {aiSummary && <meta name="ai.summary" content={aiSummary} />}
      {aiTopic && <meta name="ai.topic" content={aiTopic} />}
      {articleModifiedTime && <meta name="ai.freshness" content={articleModifiedTime} />}
      
      {/* Dublin Core for additional structured metadata */}
      <meta name="DC.language" content="nl" />
      <meta name="DC.coverage" content="Nederland, België" />
      
      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
