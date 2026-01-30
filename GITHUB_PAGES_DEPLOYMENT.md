# GitHub Pages Deployment Handleiding voor Lovable Projecten

> **Herbruikbare handleiding** voor het deployen van React/Vite projecten naar GitHub Pages.  
> Laatste update: Januari 2026

---

## 📋 Snelle Checklist

Voordat je deployt, controleer deze punten:

- [ ] `vite.config.ts` heeft `base: '/repository-naam/'` in production mode
- [ ] App gebruikt `HashRouter` in plaats van `BrowserRouter`
- [ ] `.github/workflows/deploy.yml` bevat `permissions` block
- [ ] `public/404.html` is aanwezig voor SPA fallback
- [ ] `public/.nojekyll` bestaat (lege file)
- [ ] GitHub Pages Source staat op `gh-pages` branch
- [ ] Workflow permissions staan op "Read and write"

---

## Stap 1: Vite Configuratie

### Het Probleem
GitHub Pages host je site in een subdirectory: `https://username.github.io/repo-naam/`  
Zonder correcte `base` configuratie worden assets geladen vanaf de root (`/`), wat resulteert in 404 errors.

### De Oplossing

**Bestand:** `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // ⬇️ BELANGRIJK: Vervang 'repository-naam' met jouw repo naam
  base: mode === 'production' ? '/repository-naam/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

### Waarom dit werkt
- In **development** (`npm run dev`): Assets laden vanaf `/`
- In **production** (`npm run build`): Assets laden vanaf `/repository-naam/`

---

## Stap 2: Router Aanpassen

### Het Probleem
`BrowserRouter` gebruikt de HTML5 History API die server-side ondersteuning nodig heeft.  
GitHub Pages is een statische host en kan geen server-side routing doen.

### De Oplossing

**Bestand:** `src/App.tsx`

```tsx
// ❌ NIET gebruiken voor GitHub Pages
import { BrowserRouter } from "react-router-dom";

// ✅ WEL gebruiken voor GitHub Pages
import { HashRouter } from "react-router-dom";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* etc. */}
    </Routes>
  </HashRouter>
);
```

### URL Verschil

| Router Type | URL Formaat |
|-------------|-------------|
| BrowserRouter | `https://user.github.io/repo/about` |
| HashRouter | `https://user.github.io/repo/#/about` |

### Tip
HashRouter werkt op **elke** statische host (GitHub Pages, Netlify, Vercel, Cloudways, etc.) zonder extra configuratie.

---

## Stap 3: GitHub Actions Workflow

### Het Probleem
Zonder expliciete `permissions` krijgt de workflow geen schrijfrechten naar de `gh-pages` branch, resulterend in:
```
error: failed to push some refs
fatal: could not read Username: No such file or directory
Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"
```

### De Oplossing

**Bestand:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

# ⬇️ KRITIEK: Deze permissions block voorkomt "exit code 128"
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

### Permissions Uitleg

| Permission | Doel |
|------------|------|
| `contents: write` | Pushen naar `gh-pages` branch |
| `pages: write` | GitHub Pages deployment updaten |
| `id-token: write` | OIDC token voor authenticatie |

---

## Stap 4: SPA Fallback (404.html)

### Het Probleem
Bij direct bezoeken van een route zoals `/repo/#/about`, stuurt GitHub Pages een 404.  
We moeten deze redirect opvangen en doorsturen naar `index.html`.

### De Oplossing

**Bestand:** `public/404.html`

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

### Aanvullend: .nojekyll

**Bestand:** `public/.nojekyll` (leeg bestand)

Dit voorkomt dat Jekyll bestanden met underscores (`_`) negeert.

```bash
# Maak het bestand aan (leeg)
touch public/.nojekyll
```

---

## Stap 5: GitHub Repository Instellingen

### 5.1 Pages Source Configureren

1. Ga naar je repository op GitHub
2. Klik op **Settings** (tandwiel icoon)
3. In de linker sidebar: **Pages**
4. Onder **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` ➜ `/(root)`
5. Klik **Save**

### 5.2 Workflow Permissions

1. Ga naar **Settings** → **Actions** → **General**
2. Scroll naar **Workflow permissions**
3. Selecteer: **Read and write permissions**
4. Klik **Save**

### Visuele Referentie

```
GitHub Repository
├── Settings
│   ├── Pages
│   │   └── Source: gh-pages branch /(root)
│   └── Actions → General
│       └── Workflow permissions: Read and write
```

---

## 🔧 Troubleshooting

### Error: Exit Code 128

**Symptoom:**
```
Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"
```

**Oorzaak:** Geen schrijfrechten voor de workflow.

**Oplossing:**
1. Voeg `permissions` block toe aan workflow (zie Stap 3)
2. Controleer Settings → Actions → Workflow permissions = "Read and write"

---

### Error: Blank/Wit Scherm

**Symptoom:** Site laadt maar toont alleen een wit scherm.

**Mogelijke oorzaken:**

| Oorzaak | Oplossing |
|---------|-----------|
| Verkeerde `base` in Vite | Zet `base: '/repo-naam/'` |
| Pages leest verkeerde branch | Wijzig Source naar `gh-pages` |
| JavaScript error | Open browser console (F12) voor details |

**Debug stappen:**
1. Open browser DevTools (F12)
2. Kijk in Console tab voor errors
3. Kijk in Network tab of assets laden (geen 404s)

---

### Error: 404 op Pagina Routes

**Symptoom:** Homepage werkt, maar `/about` geeft 404.

**Oorzaak:** BrowserRouter zonder server-side fallback.

**Oplossing:**
1. Gebruik `HashRouter` in plaats van `BrowserRouter`
2. Of: Voeg `404.html` toe (zie Stap 4)

---

### Error: Assets Laden Niet

**Symptoom:** CSS/JS/images geven 404.

**Debug:**
1. Open Network tab in DevTools
2. Kijk naar de URL van falende requests
3. Als ze laden vanaf `/assets/...` in plaats van `/repo-naam/assets/...`: fix de `base` in Vite

---

## 🚀 Migratie naar Andere Hosts

### Cloudways / Traditionele Hosting

Bij migratie naar Cloudways of andere traditionele hosts:

1. **Verwijder `base` uit Vite config** (of zet op `/`)
   ```typescript
   base: '/',  // of verwijder de regel helemaal
   ```

2. **Optioneel: Terug naar BrowserRouter**
   - Alleen als je server `.htaccess` of nginx config kunt aanpassen
   - HashRouter blijft altijd werken

3. **Server configuratie voor SPA** (Apache `.htaccess`):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Nginx configuratie**:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

### Netlify / Vercel

Deze platforms hebben ingebouwde SPA support:

**Netlify:** Voeg `public/_redirects` toe:
```
/*    /index.html   200
```

**Vercel:** Voeg `vercel.json` toe:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 📁 Complete Bestandsstructuur

```
project/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── 404.html                # SPA fallback
│   ├── .nojekyll               # Voorkom Jekyll processing
│   └── ...
├── src/
│   ├── App.tsx                 # Met HashRouter
│   └── ...
├── vite.config.ts              # Met base: '/repo-naam/'
└── package.json
```

---

## ✅ Deployment Checklist (Kopieerbaar)

```markdown
## Pre-Deployment Checklist

- [ ] `vite.config.ts`: `base: '/REPO_NAAM/'` toegevoegd
- [ ] `src/App.tsx`: `HashRouter` gebruikt
- [ ] `.github/workflows/deploy.yml`: `permissions` block aanwezig
- [ ] `public/404.html`: SPA fallback script aanwezig
- [ ] `public/.nojekyll`: Bestand bestaat
- [ ] Commit & push naar `main` branch
- [ ] GitHub Settings → Pages → Source: `gh-pages` branch
- [ ] GitHub Settings → Actions → Workflow permissions: Read and write
- [ ] Wacht 1-2 minuten na succesvolle workflow
- [ ] Test: https://USERNAME.github.io/REPO_NAAM/
```

---

## 📚 Referenties

- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router HashRouter](https://reactrouter.com/en/main/router-components/hash-router)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

---

*Gemaakt op basis van troubleshooting voor het AIWebsitesGenereren project.*
