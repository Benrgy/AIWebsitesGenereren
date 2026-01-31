
# Plan: Nieuw Favicon met Globe, Gradient en SEO Optimalisatie

## Wat gaan we doen
Een modern favicon ontwerpen dat past bij de AI Website Generator branding, inclusief volledige SEO optimalisatie voor maximale zichtbaarheid in zoekresultaten.

## Stappen

### Stap 1: Favicon Genereren met AI
Met Lovable's AI image generatie maken we een favicon met deze kenmerken:
- **Vorm**: Gestileerde globe/wereldbol
- **Kleuren**: Gradient van blauw (#3B82F6) naar cyaan (#06B6D4)
- **Stijl**: Modern, minimalistisch, geschikt voor kleine weergave
- **Formaat**: 512x512 PNG (wordt geschaald naar alle favicon formaten)

### Stap 2: Favicon Bestand Toevoegen
- Het gegenereerde icoon opslaan als `public/favicon.png`
- De oude favicon vervangen

### Stap 3: SEO Optimalisatie in index.html

**Favicon meta tags met beschrijvende attributen:**
```html
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
```

**Open Graph image update (voor social sharing):**
```html
<meta property="og:image:alt" content="AI Website Generator - Maak professionele websites in minuten met kunstmatige intelligentie" />
```

### Stap 4: Schema.org Logo Optimalisatie

Update de Organization structured data met beschrijvende logo informatie:
```json
{
  "@type": "Organization",
  "logo": {
    "@type": "ImageObject",
    "url": "https://aiwebsitesgenereren.nl/favicon.png",
    "width": 512,
    "height": 512,
    "caption": "AI Website Generator Nederland - Logo voor professionele website creatie met kunstmatige intelligentie"
  }
}
```

### Stap 5: WebSite Schema Update

Voeg het logo ook toe aan de WebSite structured data voor betere herkenning door zoekmachines.

## SEO Voordelen

| Element | SEO Impact |
|---------|------------|
| Beschrijvende logo caption | Helpt Google de merkidentiteit te begrijpen |
| ImageObject schema | Geeft zoekmachines context over het logo |
| Consistente branding | Verhoogt merkherkenning in zoekresultaten |
| Apple-touch-icon | Verbetert mobiele gebruikerservaring |

## Resultaat
- Professionele favicon die past bij de blauw-cyaan branding
- Volledig SEO-geoptimaliseerd met structured data
- Beschrijvende captions voor AI-zoekmachines en Google Image Search
- Werkt in alle browsers en als app-icoon op mobiel
- Herkenbaar als AI/tech/website gerelateerd door de globe vorm
