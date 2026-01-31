
# Fix: Inhoudsopgave Navigatie met HashRouter

## Probleem Analyse
De Table of Contents gebruikt standaard anchor links (`href="#sectie-1"`). Met HashRouter wordt de URL-structuur:
- **Huidige URL**: `https://aiwebsitesgenereren.nl/#/blog/artikel-slug`
- **Na klik op ToC**: `https://aiwebsitesgenereren.nl/#sectie-1` (FOUT - vervangt de route!)

Dit leidt tot een 404 omdat `sectie-1` geen geldige route is.

## Oplossing
Vervang anchor links door JavaScript scroll-functionaliteit met `scrollIntoView()`. Dit werkt perfect met HashRouter omdat de URL niet verandert.

## Technische Wijzigingen

### Bestand: `src/pages/BlogArticle.tsx`

**Stap 1**: Voeg een scroll handler functie toe (regel ~56):
```typescript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```

**Stap 2**: Vervang alle `<a href="#...">` links in de inhoudsopgave door `<button>` elementen met `onClick`:

```typescript
// Van (regel 224-234):
<a 
  href={`#${sectionId}`}
  className="..."
>
  ...
</a>

// Naar:
<button 
  type="button"
  onClick={() => scrollToSection(sectionId)}
  className="... text-left w-full"
>
  ...
</button>
```

Dit geldt voor:
1. Secties (regel 220-235)
2. Praktische Tips link (regel 237-246)
3. Veelgestelde Vragen link (regel 247-257)

## Verwacht Resultaat
| Aspect | Voor | Na |
|--------|------|-----|
| ToC klik gedrag | 404 error | Smooth scroll naar sectie |
| URL verandering | Ja (breekt route) | Nee (blijft intact) |
| Gebruikerservaring | Slecht | Goed |
| SEO impact | Negatief (bounce) | Positief (engagement) |

## Alternatief (voor later)
Als je in de toekomst overschakelt naar BrowserRouter met `.htaccess` configuratie, kunnen anchor links weer werken. Maar de JavaScript scroll-oplossing is robuuster en werkt met beide routers.
