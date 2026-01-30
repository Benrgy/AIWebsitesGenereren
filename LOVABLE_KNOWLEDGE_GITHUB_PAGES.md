# GitHub Pages Deployment Configuratie

## Wanneer Toepassen
Pas deze configuratie toe wanneer een gebruiker vraagt om:
- GitHub Pages deployment
- Hosting op GitHub
- "Exit code 128" error oplossen
- Wit scherm op GitHub Pages fixen
- 404 errors op routes oplossen

---

## Vereiste Configuraties

### 1. Vite Base Path
**Bestand:** `vite.config.ts`

```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/REPOSITORY_NAAM/' : '/',
  // ... rest van config
}));
```

**Belangrijk:** Vervang `REPOSITORY_NAAM` met de daadwerkelijke repository naam van de gebruiker.

---

### 2. HashRouter
**Bestand:** `src/App.tsx`

Vervang:
```typescript
import { BrowserRouter } from "react-router-dom";
```

Met:
```typescript
import { HashRouter } from "react-router-dom";
```

En vervang `<BrowserRouter>` met `<HashRouter>` in de component.

**Reden:** GitHub Pages ondersteunt geen server-side routing. HashRouter gebruikt URL hashes (#) die client-side werken.

---

### 3. GitHub Actions Workflow
**Bestand:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: write
  pages: write
  id-token: write

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

**KRITIEK:** Het `permissions` block is essentieel om "exit code 128" te voorkomen.

---

### 4. SPA Fallback
**Bestand:** `public/404.html`

```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8">
    <title>Laden...</title>
    <script>
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

**Bestand:** `public/.nojekyll`
Een leeg bestand om Jekyll processing te voorkomen.

---

## Error Mapping

| Error/Symptoom | Oorzaak | Oplossing |
|----------------|---------|-----------|
| `exit code 128` | Ontbrekende permissions in workflow | Voeg permissions block toe aan deploy.yml |
| Wit/blank scherm | Verkeerde base path in Vite | Zet `base: '/repo-naam/'` in vite.config.ts |
| Wit scherm | Pages Source verkeerd | Wijzig Source naar gh-pages branch |
| 404 op pagina routes | BrowserRouter gebruikt | Vervang door HashRouter |
| Assets laden niet (404) | Verkeerde base path | Controleer base path in Vite config |
| CSS/JS niet gevonden | Jekyll verwerkt bestanden | Voeg .nojekyll toe aan public/ |

---

## Handmatige GitHub Stappen

**ALTIJD vermelden aan de gebruiker:**

1. **GitHub Pages Source:**
   - Settings → Pages → Source: `gh-pages` branch, `/ (root)`

2. **Workflow Permissions:**
   - Settings → Actions → General → Workflow permissions: `Read and write`

---

## URL Formaat

Met HashRouter worden URLs:
```
https://username.github.io/repo-naam/#/pagina
https://username.github.io/repo-naam/#/blog/artikel
```

---

## Migratie naar Andere Hosts

Bij migratie naar Cloudways/traditionele hosting:
1. Verwijder of wijzig `base` in vite.config.ts naar `/`
2. HashRouter blijft werken, of schakel terug naar BrowserRouter met server config
3. Voeg `.htaccess` of nginx config toe voor SPA routing

---

## Checklist voor Nieuwe Projecten

- [ ] `vite.config.ts`: base path geconfigureerd
- [ ] `src/App.tsx`: HashRouter gebruikt
- [ ] `.github/workflows/deploy.yml`: permissions block aanwezig
- [ ] `public/404.html`: SPA redirect script
- [ ] `public/.nojekyll`: bestand bestaat
- [ ] GitHub Settings: Pages Source op gh-pages
- [ ] GitHub Settings: Workflow permissions op Read and write
