
# GitHub Pages Deployment Fix - Productie-klaar Plan

## Probleem Analyse

Je ervaart een **blank wit scherm** op `https://benrgy.github.io/AIWebsitesGenereren/` door **drie fundamentele problemen**:

### 1. Ontbrekende Base URL Configuratie
GitHub Pages host jouw site in een subdirectory (`/AIWebsitesGenereren/`), maar Vite bouwt assets met root-relative paden (`/src/main.tsx`). De browser zoekt dus naar bestanden op de verkeerde locatie.

### 2. BrowserRouter Incompatibiliteit
`BrowserRouter` verwacht server-side URL rewriting, maar GitHub Pages is een statische host zonder die mogelijkheid. Routes zoals `/blog` resulteren in een 404.

### 3. Geen 404.html Fallback
GitHub Pages vereist een `404.html` bestand om SPA-routing te ondersteunen. Zonder dit bestand werkt client-side routing niet.

---

## Technische Oplossing

### Stap 1: Vite Base URL Configuratie

**Bestand:** `vite.config.ts`

Configureer de `base` optie zodat alle asset-paden correct worden gegenereerd voor GitHub Pages:

```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/AIWebsitesGenereren/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

### Stap 2: HashRouter Implementatie

**Bestand:** `src/App.tsx`

Vervang `BrowserRouter` door `HashRouter` voor volledige GitHub Pages compatibiliteit:

```typescript
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            {/* alle routes blijven hetzelfde */}
          </Routes>
          <ScrollToTop />
          <CookieConsent />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
```

**Resultaat URLs:**
- Home: `https://benrgy.github.io/AIWebsitesGenereren/#/`
- Blog: `https://benrgy.github.io/AIWebsitesGenereren/#/blog`
- Artikel: `https://benrgy.github.io/AIWebsitesGenereren/#/blog/slug`

### Stap 3: SPA Fallback 404.html

**Nieuw bestand:** `public/404.html`

Dit bestand vangt alle niet-gevonden routes op en redirect naar de hoofdpagina met de oorspronkelijke URL:

```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8">
    <title>Laden...</title>
    <script>
      // SPA redirect: bewaar de URL en redirect naar index
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

### Stap 4: Index.html URL Handler

**Bestand:** `index.html`

Voeg een script toe in de `<head>` sectie om de SPA redirect URL te verwerken:

```html
<script type="text/javascript">
  // GitHub Pages SPA support
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### Stap 5: GitHub Actions Workflow (Optioneel maar aanbevolen)

**Nieuw bestand:** `.github/workflows/deploy.yml`

Automatische deployment bij elke push:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Cloudways Compatibiliteit

Belangrijk: Wanneer je later migreert naar Cloudways, hoef je alleen de `base` configuratie aan te passen:

```typescript
// Voor Cloudways (root deployment)
base: '/',

// Of met environment variable
base: process.env.VITE_BASE_URL || '/',
```

De `HashRouter` werkt universeel op alle statische hosts zonder server-configuratie.

---

## Samenvatting Wijzigingen

| Bestand | Actie | Doel |
|---------|-------|------|
| `vite.config.ts` | Wijzigen | Base URL voor correcte asset-paden |
| `src/App.tsx` | Wijzigen | HashRouter voor SPA-routing |
| `public/404.html` | Nieuw | GitHub Pages fallback |
| `index.html` | Wijzigen | SPA redirect handler |
| `.github/workflows/deploy.yml` | Nieuw (optioneel) | Automatische deployment |

Na implementatie: push naar GitHub, wacht 1-2 minuten op de build, en je site is live.
