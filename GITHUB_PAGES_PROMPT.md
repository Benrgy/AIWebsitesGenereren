# GitHub Pages Deployment Prompt

> **Kopieer onderstaande prompt en plak deze in de Lovable chat van een nieuw project.**

---

## De Prompt

```
Configureer dit project voor GitHub Pages deployment. Mijn repository naam is: [REPO_NAAM]

Voer de volgende configuraties uit:

1. VITE CONFIGURATIE (vite.config.ts)
   - Voeg toe: base: mode === 'production' ? '/[REPO_NAAM]/' : '/'

2. ROUTER (src/App.tsx)
   - Vervang BrowserRouter door HashRouter
   - Import: import { HashRouter } from "react-router-dom"

3. GITHUB ACTIONS WORKFLOW (.github/workflows/deploy.yml)
   - Maak workflow met KRITIEKE permissions block:
     permissions:
       contents: write
       pages: write
       id-token: write
   - Gebruik peaceiris/actions-gh-pages@v3

4. SPA FALLBACK BESTANDEN
   - Maak public/404.html met redirect script
   - Maak public/.nojekyll (leeg bestand)

Na de configuratie, geef mij de handmatige GitHub stappen die ik moet uitvoeren.
```

---

## Troubleshooting Prompt

```
Ik krijg een "exit code 128" error bij GitHub Pages deployment. 

Dit is meestal een permissions probleem. Controleer en fix:

1. Voeg permissions block toe aan .github/workflows/deploy.yml:
   permissions:
     contents: write
     pages: write
     id-token: write

2. Herinner mij aan de handmatige GitHub instellingen die ik moet controleren.
```

---

## Wit Scherm Troubleshooting

```
Mijn GitHub Pages site toont een wit/blank scherm.

Controleer:
1. Is base: '/[REPO_NAAM]/' correct in vite.config.ts?
2. Staat GitHub Pages Source op gh-pages branch?
3. Gebruik ik HashRouter in plaats van BrowserRouter?

Fix de problemen die je vindt.
```

---

## Handmatige GitHub Stappen Checklist

Na het uitvoeren van de prompt, moet je deze stappen handmatig doen in GitHub:

### 1. Pages Source Instellen
1. Ga naar je repository → **Settings**
2. In sidebar: **Pages**
3. Onder "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` → `/ (root)`
4. Klik **Save**

### 2. Workflow Permissions
1. Ga naar **Settings** → **Actions** → **General**
2. Scroll naar "Workflow permissions"
3. Selecteer: **Read and write permissions**
4. Klik **Save**

### 3. Eerste Deployment Triggeren
1. Push een kleine wijziging naar `main` branch
2. Of: ga naar **Actions** tab en run de workflow handmatig

---

## Snelle Referentie

| Probleem | Oorzaak | Oplossing |
|----------|---------|-----------|
| Exit code 128 | Geen write permissions | Voeg permissions block toe |
| Wit scherm | Verkeerde base path | Fix base in vite.config.ts |
| 404 op routes | BrowserRouter | Gebruik HashRouter |
| Assets laden niet | Verkeerde base | Zet base: '/repo-naam/' |

---

## Volledige Workflow Template

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

---

*Gemaakt voor hergebruik in Lovable projecten*
