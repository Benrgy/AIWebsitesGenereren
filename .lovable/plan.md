
# Plan: OG-Image Genereren met Globe Branding

## Wat gaan we doen
Een professionele Open Graph afbeelding (1200x630px) maken met dezelfde globe branding als de favicon, voor optimale weergave op social media platforms zoals Facebook, LinkedIn, Twitter en WhatsApp.

## Design Specificaties

| Element | Waarde |
|---------|--------|
| Afmetingen | 1200x630 pixels |
| Achtergrond | Donkere gradient (past bij moderne tech uitstraling) |
| Hoofdelement | Globe icoon met blauw-cyaan gradient (#3B82F6 → #06B6D4) |
| Tekst | "AI Website Generator" + tagline |
| Stijl | Modern, minimalistisch, professioneel |

## Stappen

### Stap 1: OG-Image Genereren met AI
Met Lovable's AI image generatie maken we een banner met:
- Dezelfde globe met gradient als de favicon (prominenter geplaatst)
- Site naam "AIWebsitesGenereren.nl" 
- Tagline "Professionele websites in minuten"
- Donkere achtergrond voor contrast
- Moderne, tech-georiënteerde uitstraling

### Stap 2: Bestand Opslaan
- Het gegenereerde beeld opslaan als `public/og-image.png`
- PNG formaat voor beste kwaliteit

### Stap 3: index.html Updaten
De OG en Twitter image referenties aanpassen:

```html
<meta property="og:image" content="https://aiwebsitesgenereren.nl/og-image.png" />
<meta name="twitter:image" content="https://aiwebsitesgenereren.nl/og-image.png" />
```

## Social Media Voordelen

| Platform | Voordeel |
|----------|----------|
| Facebook | Professionele preview bij delen |
| LinkedIn | Herkenbare branding voor B2B |
| Twitter | Opvallende large image card |
| WhatsApp | Duidelijke link preview |

## Resultaat
- Consistente branding tussen favicon en social previews
- Professionele uitstraling bij het delen van links
- Betere click-through rates door herkenbare visuele identiteit
- Optimaal formaat voor alle grote social platforms
