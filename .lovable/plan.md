

# Cloudways Deployment Configuratie voor websitesgenereren.nl

## Overzicht
Aanpassing van de huidige GitHub Pages configuratie naar Cloudways hosting met het domein `aiwebsitesgenereren.nl`.

## Wijzigingen

### 1. Vite Base Path Aanpassen
**Bestand:** `vite.config.ts`

De huidige configuratie gebruikt `/AIWebsitesGenereren/` voor GitHub Pages. Voor Cloudways moet dit naar `/`:

```typescript
// Van:
base: mode === 'production' ? '/AIWebsitesGenereren/' : '/',

// Naar:
base: '/',
```

### 2. Router Keuze
**Optie A: HashRouter behouden (aanbevolen - geen server config nodig)**
- URLs worden: `https://aiwebsitesgenereren.nl/#/blog`
- Geen `.htaccess` configuratie nodig
- Werkt direct out-of-the-box

**Optie B: BrowserRouter voor schonere URLs**
- URLs worden: `https://aiwebsitesgenereren.nl/blog`
- Vereist `.htaccess` voor SPA routing

### 3. Apache .htaccess (alleen bij BrowserRouter)
**Bestand:** `public/.htaccess`

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

---

## Technische Details

| Aspect | GitHub Pages | Cloudways |
|--------|--------------|-----------|
| Base path | `/AIWebsitesGenereren/` | `/` |
| Router | HashRouter | HashRouter of BrowserRouter |
| SSL | Automatisch | Via Cloudways panel |
| Deploy | GitHub Actions | Git pull of SFTP |

## Aanbeveling
Start met **Optie A (HashRouter behouden)** - dit werkt direct zonder extra configuratie. Je kunt later altijd upgraden naar BrowserRouter voor schonere URLs.

## Na Implementatie
1. Bouw het project: `npm run build`
2. Deploy de `dist/` folder naar Cloudways
3. Configureer SSL in Cloudways panel
4. Test alle routes op `https://aiwebsitesgenereren.nl`

