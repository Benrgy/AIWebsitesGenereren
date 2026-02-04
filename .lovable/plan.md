

# Fix Oude Domeinverwijzingen naar AIWebsitesGenereren.nl

## Overzicht

Alle verwijzingen naar het oude domein `WebsitesGenereren.nl` worden vervangen door het correcte domein `AIWebsitesGenereren.nl` om Search Console fouten op te lossen en SEO-consistentie te garanderen.

## Wijzigingen

### 1. index.html
**Locatie:** Regel 26 en 55

| Huidige waarde | Nieuwe waarde |
|----------------|---------------|
| `<meta name="author" content="aiWebsitesGenereren.nl" />` | `<meta name="author" content="AIWebsitesGenereren.nl" />` |
| `<meta name="DC.creator" content="aiWebsitesGenereren.nl" />` | `<meta name="DC.creator" content="AIWebsitesGenereren.nl" />` |

### 2. src/pages/BlogArticle.tsx
**Locatie:** Regel 108 - title suffix

| Huidige waarde | Nieuwe waarde |
|----------------|---------------|
| `WebsitesGenereren.nl` | `AI Websites Genereren` |

### 3. src/pages/NotFound.tsx
**Locatie:** Regels 20, 27, 28

Alle verwijzingen naar `WebsitesGenereren.nl` worden vervangen door `AIWebsitesGenereren.nl`.

### 4. src/lib/seoConfig.ts
**Locatie:** Regel 1 - comment

| Huidige waarde | Nieuwe waarde |
|----------------|---------------|
| `// Centralized SEO/GEO/LLM Configuration for WebsitesGenereren.nl` | `// Centralized SEO/GEO/LLM Configuration for AIWebsitesGenereren.nl` |

### 5. public/sitemap.xml
Update alle `lastmod` datums naar `2025-02-04` zodat zoekmachines weten dat de content recent is bijgewerkt.

## Resultaat

- Search Console toont geen domein-mismatch fouten meer
- Consistente branding op alle pagina's
- Correcte indexering door Google en Bing
- LLM/AI crawlers zien uniforme domeinverwijzingen

