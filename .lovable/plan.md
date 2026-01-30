

# Twee Herbruikbare Documenten voor GitHub Pages Deployment

## Overzicht

Er worden twee documenten gemaakt:
1. Een **prompt template** die je direct in een Lovable chat kunt plakken om deployment problemen op te lossen
2. Een **kennisbank document** dat je kunt toevoegen aan Lovable's custom knowledge voor automatische ondersteuning

---

## Document 1: Prompt Template

**Bestand:** `GITHUB_PAGES_PROMPT.md`

Een copy-paste prompt die je in elk Lovable project kunt gebruiken wanneer je GitHub Pages deployment wilt configureren of een "exit code 128" error wilt oplossen.

**Inhoud:**
- Directe instructies voor Lovable AI
- Vereiste configuraties in een compacte vorm
- Troubleshooting commands
- Checklist voor handmatige GitHub stappen

**Gebruik:** Kopieer en plak de volledige prompt in de chat van een nieuw Lovable project.

---

## Document 2: Kennisbank Document

**Bestand:** `LOVABLE_KNOWLEDGE_GITHUB_PAGES.md`

Een geoptimaliseerd document voor Lovable's custom knowledge systeem (Settings → Manage Knowledge).

**Inhoud:**
- Compacte technische specificaties
- Standaard configuraties
- Error-oplossing mappings
- Instructies voor de AI

**Kenmerken:**
- Gestructureerd voor AI parsing
- Bevat de volledige bestandstemplates
- Troubleshooting decision tree

---

## Te Maken Bestanden

### 1. GITHUB_PAGES_PROMPT.md

Een kant-en-klare prompt die begint met:

```markdown
Configureer dit project voor GitHub Pages deployment met de volgende specificaties:

1. VITE CONFIGURATIE
   - Voeg `base: mode === 'production' ? '/REPO_NAAM/' : '/'` toe aan vite.config.ts
   
2. ROUTER
   - Vervang BrowserRouter door HashRouter in App.tsx
   
3. GITHUB ACTIONS WORKFLOW
   - Maak .github/workflows/deploy.yml met permissions block
   
4. SPA FALLBACK
   - Maak public/404.html met redirect script
   - Maak public/.nojekyll (leeg bestand)
```

Plus een troubleshooting sectie en handmatige stappen.

---

### 2. LOVABLE_KNOWLEDGE_GITHUB_PAGES.md

Een kennisbank document met:

```markdown
# GitHub Pages Deployment voor Lovable Projecten

## Automatische Configuratie
Wanneer een gebruiker vraagt om GitHub Pages deployment, pas deze configuraties toe:

### Vereiste Bestanden
1. vite.config.ts - base path configuratie
2. .github/workflows/deploy.yml - met permissions block  
3. public/404.html - SPA redirect
4. public/.nojekyll - voorkom Jekyll processing

### Error Mappings
- "exit code 128" → Ontbrekende permissions in workflow
- Wit scherm → Verkeerde base path of branch source
- 404 op routes → Gebruik HashRouter

### Handmatige Stappen (altijd vermelden)
- GitHub Settings → Pages → Source: gh-pages branch
- GitHub Settings → Actions → Workflow permissions: Read and write
```

---

## Gebruik van de Documenten

| Document | Locatie | Wanneer Gebruiken |
|----------|---------|-------------------|
| Prompt Template | Kopieer naar chat | Bij nieuw project of deployment probleem |
| Kennisbank | Settings → Manage Knowledge | Eenmalig toevoegen, altijd beschikbaar |

---

## Voordelen

| Aspect | Prompt Template | Kennisbank |
|--------|-----------------|------------|
| Snelheid | Direct toepasbaar | Automatisch beschikbaar |
| Controle | Volledige controle over timing | AI past toe wanneer relevant |
| Updates | Handmatig kopiëren | Eenmalig instellen |
| Scope | Per project | Alle projecten in workspace |

