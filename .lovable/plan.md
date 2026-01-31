
# Fix: Automatisch Naar Boven Scrollen Bij Navigatie

## Probleem
Bij Single Page Applications (SPAs) met React Router wordt de scroll positie behouden wanneer je naar een nieuwe pagina navigeert. Hierdoor begint een blogartikel halverwege of onderaan in plaats van bovenaan.

## Oorzaak
De huidige `ScrollToTop` component (regel 65 in App.tsx) is alleen een floating button voor handmatig terug scrollen. Er is geen automatische scroll reset bij route wijzigingen.

## Oplossing
Maak een nieuwe component `ScrollRestoration` die bij elke route wijziging automatisch naar boven scrollt.

## Technische Wijzigingen

### Nieuw Bestand: `src/components/ScrollRestoration.tsx`

```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
```

### Bestand: `src/App.tsx`

Import en toevoegen binnen de HashRouter:

```typescript
import ScrollRestoration from "@/components/ScrollRestoration";

// In de component, direct na <HashRouter>:
<HashRouter>
  <ScrollRestoration />
  <SkipLink />
  ...
</HashRouter>
```

## Verwacht Resultaat

| Scenario | Voor | Na |
|----------|------|-----|
| Klik op blogartikel | Pagina start halverwege | Pagina start bovenaan |
| Navigeer naar andere pagina | Scroll positie blijft | Scroll reset naar top |
| Gebruik browser back-knop | Werkt normaal | Werkt normaal |

## Waarom Deze Aanpak?
- **Eenvoudig**: Minimale code, maximaal effect
- **Betrouwbaar**: Standaard React Router patroon
- **Performance**: Geen impact op laadtijd
