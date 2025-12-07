# SECURELOOP Framework Website

Der deutsche Wissenshub für Software Supply Chain Security. Gebaut mit [Astro Starlight](https://starlight.astro.build/).

## Features

- **Volltext-Suche** - Durchsuchen Sie alle Artikel
- **Dark Mode** - Automatisch oder manuell umschaltbar
- **Responsive Design** - Optimiert für alle Geräte
- **Sidebar Navigation** - Übersichtliche Struktur
- **Table of Contents** - Automatisch generiert pro Artikel
- **SEO optimiert** - Sitemap, Meta-Tags, OpenGraph

## Schnellstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Produktions-Build lokal testen
npm run preview
```

Die Website ist dann unter `http://localhost:4321` erreichbar.

## Projektstruktur

```
/
├── astro.config.mjs           # Starlight-Konfiguration
├── package.json
├── src/
│   ├── assets/
│   │   └── logo.svg           # SECURELOOP Logo
│   ├── content/
│   │   └── docs/              # Markdown-Inhalte
│   │       ├── index.mdx      # Homepage
│   │       ├── about.md       # Über uns
│   │       ├── contact.md     # Kontakt
│   │       └── knowledge/     # Wissensartikel
│   │           ├── sbom.md
│   │           ├── vulnerability-scanning.md
│   │           ├── software-signing.md
│   │           ├── nis2.md
│   │           └── dora.md
│   ├── content.config.ts      # Starlight Content Schema
│   └── styles/
│       └── custom.css         # Brand-Anpassungen
└── public/
    └── favicon.svg
```

## Neue Artikel hinzufügen

1. Erstelle eine neue Markdown-Datei in `src/content/docs/knowledge/`:

```markdown
---
title: Titel des Artikels
description: Kurze Beschreibung für SEO und Vorschau
---

## Inhalt hier

Markdown-Inhalt...
```

2. Füge den Artikel zur Sidebar in `astro.config.mjs` hinzu:

```javascript
sidebar: [
  {
    label: 'Grundlagen',
    items: [
      { label: 'Neuer Artikel', link: '/knowledge/neuer-artikel/' },
    ],
  },
],
```

3. Der Artikel ist automatisch unter `/knowledge/[dateiname]/` erreichbar.

## Starlight Features nutzen

### Hinweise und Warnungen

```markdown
:::note[Hinweis]
Dies ist ein Hinweis.
:::

:::tip[Tipp]
Dies ist ein Tipp.
:::

:::caution[Achtung]
Dies ist eine Warnung.
:::
```

### Cards und CardGrid

```mdx
import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
  <Card title="Karte 1" icon="star">
    Inhalt der Karte
  </Card>
  <Card title="Karte 2" icon="rocket">
    Weiterer Inhalt
  </Card>
</CardGrid>
```

## Content Guidelines

### Sprache
- Alle Inhalte auf Deutsch
- URLs auf Englisch (z.B. `/knowledge/sbom`)
- Fachbegriffe können englisch bleiben (SBOM, Vulnerability Scanning)

### Schreibstil
- Direkt und klar, kein Marketing-Speak
- Pragmatisch und praxisorientiert
- Fokus auf "Was" und "Warum"

### Struktur
- H2 für Hauptabschnitte
- H3 für Unterabschnitte
- Listen für Aufzählungen
- Code-Blöcke für technische Beispiele

## Deployment

### Netlify / Vercel

1. Repository verbinden
2. Build-Befehl: `npm run build`
3. Publish-Verzeichnis: `dist`

### Statisches Hosting (Hetzner, etc.)

```bash
npm run build
# dist/ Ordner auf Server kopieren
```

## Technologie-Stack

- **[Astro](https://astro.build)** v5 - Statischer Site Generator
- **[Starlight](https://starlight.astro.build)** - Documentation Theme
- **TypeScript** - Typsicherheit für Content Collections
- **Pagefind** - Integrierte Volltext-Suche

## Anpassungen

### Theme-Farben

Brand-Farben in `src/styles/custom.css`:

- **Electric Green**: `#88eead` (Akzent)
- **Grey**: `#202020` (Text)
- **Mint**: `#eef8e3` (Hintergrund)

```css
:root {
  --sl-color-accent: #88eead;
  --sl-color-accent-high: #5ed98a;
  --sl-color-accent-low: #eef8e3;
}
```

### Sidebar

Die Sidebar-Struktur wird in `astro.config.mjs` konfiguriert.

### Logo

Das Logo liegt in `src/assets/logo.svg`.

## Lizenz

Copyright © 2025 Toni Menzel. Alle Rechte vorbehalten.
