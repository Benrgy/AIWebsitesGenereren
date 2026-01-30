
# Performance Optimalisatie Plan

Dit plan richt zich op het verbeteren van de Core Web Vitals scores en het oplossen van de NO_FCP errors die in de PageSpeed Insights resultaten werden gevonden.

---

## Overzicht van de Problemen

De PageSpeed Insights tests toonden **NO_FCP (No First Contentful Paint) errors** - dit betekent dat de testcrawler geen content kon meten. Dit is een bekend probleem bij Single Page Applications (SPA's) zoals deze React-applicatie.

### Hoofdoorzaken:
1. **Client-side Rendering** - Alle content wordt pas getoond nadat JavaScript is geladen
2. **Grote initiële bundle** - Alle pagina's worden in één keer geladen
3. **Afbeeldingen niet geoptimaliseerd** - Geen prioritering voor hero images
4. **Geen prerendering** - Crawlers zien alleen een lege div

---

## Oplossingen (4 Fasen)

### Fase 1: Quick Wins - Image Optimalisatie

**Doel:** Verbeter LCP (Largest Contentful Paint) door hero images te prioriteren

**Wijzigingen:**

1. **BlogArticle.tsx** - Hero image optimalisatie:
   - Voeg `fetchpriority="high"` toe aan hero image
   - Voeg `loading="eager"` toe (niet lazy voor above-the-fold)
   - Voeg expliciete `width` en `height` attributen toe

2. **Blog.tsx** - Grid images behouden lazy loading (correct)

**Verwachte impact:** LCP verbetering van 1-2 seconden op mobiel

---

### Fase 2: Code Splitting met React.lazy()

**Doel:** Verminder initiële bundle grootte en verbeter FCP (First Contentful Paint)

**Wijzigingen in App.tsx:**

```text
// Huidige situatie:
import Index from "./pages/Index";
import Blog from "./pages/Blog";
// etc...

// Na optimalisatie:
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
// etc...
```

**Voeg Suspense fallback toe:**
- Een lichtgewicht loading skeleton die direct rendert
- Dit geeft de crawler iets om te "zien" tijdens het laden

**Verwachte impact:** 
- Initiële bundle 40-60% kleiner
- FCP verbetering van 0.5-1 seconde

---

### Fase 3: Prerendering / Static Generation (Optioneel)

**Doel:** Geef crawlers direct HTML content

**Opties:**

**Optie A: vite-plugin-ssr (eenvoudig)**
- Voegt static HTML generatie toe voor routes
- Crawlers zien direct content
- Behoud HashRouter compatibiliteit

**Optie B: React-snap (post-build)**
- Rendert alle routes naar static HTML na build
- Geen code wijzigingen nodig

**Opmerking:** Dit is een grotere wijziging die zorgvuldige testing vereist

---

### Fase 4: Accessibility & Best Practices

**Doel:** Verbeter Accessibility score en fix ARIA issues

**Wijzigingen:**

1. **Header.tsx** - Voeg aria-labels toe aan navigatie
2. **Button componenten** - Zorg voor accessible names op icon-only buttons
3. **Images** - Verbeter alt-teksten voor SEO en accessibility
4. **Focus management** - Verbeter keyboard navigatie

---

## Implementatie Prioriteit

| Prioriteit | Fase | Geschatte Tijd | Impact |
|------------|------|----------------|--------|
| 1 (Kritiek) | Fase 1: Image Optimalisatie | 15 min | Hoog |
| 2 (Hoog) | Fase 2: Code Splitting | 30 min | Hoog |
| 3 (Medium) | Fase 4: Accessibility | 45 min | Medium |
| 4 (Later) | Fase 3: Prerendering | 2+ uur | Zeer Hoog |

---

## Technische Details

### Fase 1: Exacte Code Wijzigingen

**src/pages/BlogArticle.tsx** (regel 126-130):
```tsx
// Van:
<img 
  src={heroImage} 
  alt={article.title}
  className="w-full h-full object-cover"
/>

// Naar:
<img 
  src={heroImage} 
  alt={article.title}
  className="w-full h-full object-cover"
  fetchPriority="high"
  loading="eager"
  width={1200}
  height={320}
  decoding="async"
/>
```

### Fase 2: Code Splitting Setup

**src/App.tsx**:
```tsx
import { lazy, Suspense } from "react";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const Vergelijking = lazy(() => import("./pages/Vergelijking"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Voorwaarden = lazy(() => import("./pages/Voorwaarden"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-primary">Laden...</div>
  </div>
);

// In de Routes, wrap met Suspense:
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/" element={<Index />} />
    // etc...
  </Routes>
</Suspense>
```

---

## Verwachte Resultaten Na Implementatie

| Metric | Huidige Score | Verwacht Na Fase 1+2 |
|--------|--------------|---------------------|
| Performance | Error (NO_FCP) | 60-80 |
| LCP | Niet meetbaar | < 2.5s |
| FCP | Niet meetbaar | < 1.8s |
| Speed Index | Niet meetbaar | < 3.0s |

---

## Aanbeveling

Start met **Fase 1 en Fase 2** - deze geven de grootste verbeteringen met relatief weinig risico. Na implementatie, run opnieuw een PageSpeed test om de verbeteringen te meten.

Fase 3 (prerendering) is de meest impactvolle oplossing voor het NO_FCP probleem, maar vereist meer testing en kan compatibiliteitsproblemen veroorzaken met HashRouter.
