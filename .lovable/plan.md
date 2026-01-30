

# Fix: GitHub Actions Permissions Error (Exit Code 128)

## Probleem Gevonden

De GitHub Actions workflow faalt met "exit code 128" door twee configuratieproblemen:

1. **Ontbrekende write permissions** in de workflow
2. **GitHub Pages Source** staat op `main` branch, maar de workflow deployt naar `gh-pages`

---

## Technische Oplossing

### Stap 1: Voeg permissions toe aan workflow

**Bestand:** `.github/workflows/deploy.yml`

De workflow mist expliciete `permissions` om naar de repository te schrijven. Dit moet worden toegevoegd:

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

De belangrijkste toevoeging is:
```yaml
permissions:
  contents: write
  pages: write
  id-token: write
```

Dit geeft de workflow expliciet toestemming om:
- `contents: write` - Naar de `gh-pages` branch te pushen
- `pages: write` - GitHub Pages te updaten
- `id-token: write` - Authenticatie tokens te gebruiken

---

## Handmatige stap in GitHub (verplicht)

Na het deployen van de workflow update, moet je de GitHub Pages source wijzigen:

1. Ga naar `https://github.com/benrgy/AIWebsitesGenereren/settings/pages`
2. Onder **Build and deployment** → **Source**:
   - Verander van `Deploy from a branch` + `main` 
   - Naar `Deploy from a branch` + **`gh-pages`** + `/(root)`
3. Klik op **Save**

Dit is nodig omdat de workflow de gebouwde site naar de `gh-pages` branch pusht, niet naar `main`.

---

## Waarom dit de oplossing is

| Probleem | Huidige situatie | Oplossing |
|----------|------------------|-----------|
| Exit code 128 | Workflow kan niet schrijven naar gh-pages | `permissions: contents: write` |
| Blank scherm | Pages leest van main (broncode) | Source wijzigen naar gh-pages (gebouwde site) |

---

## Samenvatting

| Actie | Bestand/Locatie | Wijziging |
|-------|-----------------|-----------|
| Code aanpassing | `.github/workflows/deploy.yml` | Toevoegen `permissions` block |
| GitHub instelling | Settings → Pages → Source | Wijzigen naar `gh-pages` branch |

Na beide stappen: wacht 1-2 minuten en je site is live op `https://benrgy.github.io/AIWebsitesGenereren/`

