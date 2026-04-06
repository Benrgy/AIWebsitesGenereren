

# Fix Google Search Console Problemen

## Diagnose

Er zijn 3 problemen gevonden:

### Probleem 1: "Niet gevonden (404)" — 8 pagina's
**Hoofdoorzaak**: De site gebruikt `HashRouter`, waardoor alle URL's in de browser er zo uitzien: `aiwebsitesgenereren.nl/#/blog`. Maar de `sitemap.xml` verwijst naar `aiwebsitesgenereren.nl/blog` (zonder `#`). Google crawlt die URLs, vindt geen content (de server kent alleen `/index.html`), en meldt 404.

**Oplossing**: Overschakelen van `HashRouter` naar `BrowserRouter` in `src/App.tsx`. De Cloudways `.htaccess` handelt al SPA-routing af (alle niet-bestaande paden → `index.html`), dus dit werkt direct op productie. Hierdoor matchen de sitemap-URLs met de werkelijke pagina's.

### Probleem 2: "Dubbel veld 'FAQPage'" — 2 items
**Hoofdoorzaak**: De Index-pagina en Blog-pagina gebruiken identieke FAQ-vragen (bijv. "Hoe maak ik een website zonder technische kennis?" en "Hoeveel kost een website maken?" staan op beide pagina's). Google ziet dit als dubbele FAQPage structured data.

**Oplossing**: Unieke FAQ-vragen per pagina. De Blog-pagina krijgt blog-specifieke vragen, zodat er geen overlap is met de Index-pagina.

### Probleem 3: "Gecrawld - momenteel niet geïndexeerd" — 1 pagina
Dit lost zich vanzelf op zodra probleem 1 is opgelost en Google de pagina's correct kan crawlen.

---

## Wijzigingen

### 1. `src/App.tsx` — HashRouter → BrowserRouter
- Vervang `import { HashRouter }` door `import { BrowserRouter }`
- Vervang `<HashRouter>` door `<BrowserRouter>`

### 2. `src/pages/Blog.tsx` — Unieke FAQ-vragen
Vervang de 3 FAQ-vragen door blog-specifieke vragen die niet overlappen met Index.tsx:
- "Welke onderwerpen komen aan bod in deze blog?" 
- "Hoe vaak worden nieuwe artikelen gepubliceerd?"
- "Voor wie zijn deze artikelen geschreven?"

### 3. `public/sitemap.xml` — Datums bijwerken
Alle `<lastmod>` datums updaten naar `2026-04-06` (vandaag) zodat Google weet dat de content recent is bijgewerkt.

---

## Belangrijk
- De site ziet er visueel identiek uit — er verandert niets aan het design of de content
- BrowserRouter produceert schonere URLs (`/blog` i.p.v. `/#/blog`), wat beter is voor SEO
- De `.htaccess` op Cloudways handelt de SPA-routing al correct af

