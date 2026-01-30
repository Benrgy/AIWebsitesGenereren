
# Bijgewerkt Plan: Index.tsx Upgraden naar SEOHead Component

## Grondige Analyse Uitgevoerd

Na complete review van alle bestanden is de conclusie:

### Blog Artikelen Status: ✅ 100% Geoptimaliseerd

Alle **20 blog artikelen** in `src/data/blogArticles.ts` hebben de volledige "Triple Crown" optimalisatie:

| Element | Status | Details |
|---------|--------|---------|
| openingAnswer | ✅ | Direct antwoord in ~50 woorden |
| executiveSummary | ✅ | 3-4 bullet points met statistieken |
| sections (H2) | ✅ | 5-8 vraag-gebaseerde secties per artikel |
| calloutStat | ✅ | Statistieken met bronvermelding |
| tips | ✅ | 3-5 praktische tips |
| faq | ✅ | 5-7 FAQ per artikel |
| expertQuotes | ✅ | 1-3 expert quotes met naam/titel |
| statistics | ✅ | 3-5 statistieken met bronnen |
| keywords | ✅ | SEO keyword clusters |
| datePublished/Modified | ✅ | Freshness signals |

### BlogArticle.tsx Status: ✅ Volledig Geoptimaliseerd

```text
SEOHead component         ✅ Geïmplementeerd
Article Schema            ✅ Met speakable selectors
FAQ Schema               ✅ Automatisch uit article.faq
Breadcrumb Schema        ✅ Home > Blog > Artikel
AI Meta Tags             ✅ aiSummary = openingAnswer
Hero Image               ✅ Per slug toegewezen
Table of Contents        ✅ Dynamisch gegenereerd
```

### Overige Pagina's Status: ✅ Geoptimaliseerd

| Pagina | SEOHead | Schema | AI Tags | GEO Tags |
|--------|---------|--------|---------|----------|
| Blog.tsx | ✅ | CollectionPage + ItemList | ✅ | ✅ Auto |
| Vergelijking.tsx | ✅ | ComparisonSchema + FAQ | ✅ | ✅ Auto |
| Privacy.tsx | ✅ | WebPage + Breadcrumb | N.v.t. | ✅ Auto |
| Voorwaarden.tsx | ✅ | WebPage + Breadcrumb | N.v.t. | ✅ Auto |
| NotFound.tsx | ✅ | WebPage (noIndex) | N.v.t. | ✅ Auto |

---

## Enige Gap Geïdentificeerd: Index.tsx

De **homepage** (`src/pages/Index.tsx`) is de enige pagina die nog de oude directe `<Helmet>` implementatie gebruikt (regels 149-196).

### Wat Index.tsx Mist

| Element | Huidige Status | Vereist |
|---------|---------------|---------|
| Component | Directe Helmet (50+ regels) | SEOHead component |
| ai.summary | ❌ Ontbreekt | Direct antwoord 50 woorden |
| ai.topic | ❌ Ontbreekt | Topic classificatie |
| audience | ❌ Ontbreekt | Regionale targeting |
| ai.freshness | ❌ Ontbreekt | Update signaal |

### Wat Index.tsx WEL Heeft (te behouden)

- ✅ Organization Schema
- ✅ SoftwareApplication Schema
- ✅ FAQ Schema
- ✅ Breadcrumb Schema
- ✅ Hreflang tags
- ✅ Open Graph basics
- ✅ GEO meta tags (geo.region, geo.placename)

---

## Implementatie Strategie

### Doel
Refactor Index.tsx naar SEOHead component **zonder enige wijziging** aan:
- Design/layout
- Functionaliteit
- Visuele elementen
- UX flow

### Aanpak

**Stap 1: Import wijzigen**
```typescript
// VERWIJDER
import { Helmet } from "react-helmet-async";

// TOEVOEGEN
import SEOHead from "@/components/SEOHead";
```

**Stap 2: Bestaande schema's behouden**
De huidige schema definities (regels 73-145) blijven exact hetzelfde:
- organizationSchema
- softwareSchema
- faqSchema
- breadcrumbSchema

**Stap 3: Helmet block vervangen door SEOHead**
Het huidige Helmet block (regels 149-196, ~48 regels) wordt vervangen door een compact SEOHead:

```typescript
<SEOHead
  title="AI Website Generator Nederland | Gratis Website Maken Zonder Code | WebsitesGenereren.nl"
  description="Maak in 5 minuten een professionele website met AI. Geen code nodig, gratis hosting, SEO geoptimaliseerd. De #1 AI website builder voor Nederland & België."
  keywords="website maken, ai website generator, gratis website, website bouwen, seo website, statische html, website zonder code, nederland, belgie"
  canonical="/"
  aiSummary="WebsitesGenereren.nl is de #1 AI website generator voor Nederland en België. Maak binnen 5 minuten een professionele website met AI, zonder code te schrijven. Éénmalige betaling, geen abonnement, gratis hosting inbegrepen."
  aiTopic="AI Website Generatie, Website Bouwen, No-Code Tools"
  schemas={[organizationSchema, softwareSchema, faqSchema, breadcrumbSchema]}
/>
```

---

## Technische Details

### Wijzigingen in Index.tsx

**Regels te wijzigen:**
1. Regel 2: Import van Helmet wijzigen naar SEOHead
2. Regels 149-196: Helm block vervangen door SEOHead (netto ~33 regels minder code)

### Code die ONGEWIJZIGD blijft

- Alle JSX na regel 196 (hele UI/layout)
- Alle schema definities (regels 73-145)
- Affiliate links
- Testimonials array
- Website types array
- Alle componenten (Header, Footer, ProcessDemo, etc.)
- Styling en animaties
- Responsive behavior

---

## Verwachte Resultaten

| Aspect | Vóór | Na |
|--------|------|-----|
| SEO meta code | 48 regels | 15 regels |
| AI meta tags | Geen | ai.summary + ai.topic |
| Consistency | Afwijkend van andere pagina's | Uniform met hele site |
| Maintainability | Handmatig bijwerken | Gecentraliseerd |
| Visueel | Ongewijzigd | Ongewijzigd |
| Functionaliteit | Ongewijzigd | Ongewijzigd |

---

## Samenvatting

De blog artikelen en alle andere pagina's zijn 100% geoptimaliseerd. Alleen de homepage heeft een technische refactor nodig:

1. **Geen inhoudelijke wijzigingen** - alle content, design en functionaliteit blijft identiek
2. **Alleen technische upgrade** - Helmet → SEOHead component
3. **Toevoegen AI meta tags** - aiSummary en aiTopic voor LLM citability
4. **Minder code** - van 48 naar 15 regels voor SEO meta tags

Na deze wijziging is de hele site consistent geoptimaliseerd voor de "Triple Crown" van moderne vindbaarheid.
