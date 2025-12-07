Create a clean, minimal static website for SECURELOOP - a German knowledge hub for Software Supply Chain Security. This will be THE German reference site for SBOM, supply chain security, and compliance topics (NIS2, DORA, CRA).

## TECHNICAL REQUIREMENTS

**Framework:** Astro (latest version)
**Styling:** Tailwind CSS (clean, minimal, typography-focused)
**Content:** Markdown-based content collections
**Language:** German content, English URLs
**Deployment:** Static site (ready for Netlify/Vercel/Hetzner)

## DESIGN PRINCIPLES

1. **Clarity above all** - Clean typography, ample whitespace, easy to scan
2. **Content-first** - No marketing fluff, pure knowledge transfer
3. **Visual-ready** - Design accommodates future images, diagrams, embedded videos
4. **Professional but not corporate** - German engineering aesthetic (precise, structured, trustworthy)
5. **Mobile-friendly** - Responsive from the start

## SITE STRUCTURE

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro (Framework page - 5 Loops)
│   │   ├── knowledge/
│   │   │   ├── index.astro (Knowledge base hub)
│   │   │   ├── sbom.md
│   │   │   ├── vulnerability-scanning.md
│   │   │   ├── software-signing.md
│   │   │   ├── nis2.md
│   │   │   └── dora.md
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── content/
│   │   └── config.ts (Content collections for knowledge articles)
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   └── components/
│       ├── Header.astro
│       ├── Footer.astro
│       ├── LoopCard.astro (for 5 loops display)
│       └── ArticleCard.astro
├── public/
└── astro.config.mjs
```

## CONTENT SPECIFICATIONS

### Homepage (Framework Page)
**URL:** `/`
**Title:** "SECURELOOP Framework - Software Supply Chain Security für Deutschland"

**Structure:**
1. Hero section:
   - "Das SECURELOOP Framework"
   - Subtitle: "Die 5 Schleifen für sichere Software-Lieferketten"
   - Brief intro (2-3 sentences) explaining what SECURELOOP is

2. The 5 Loops (visual grid/cards):
   Each loop gets a card with:
   - Icon/number
   - Name (DISCOVER, VERIFY, SECURE, ENFORCE, MONITOR)
   - German translation
   - 2-sentence description
   - "Mehr erfahren" link to related knowledge base articles

   **Loop 1 - DISCOVER (Erkennen)**
   "Was ist in Ihrer Software? SBOM-Generierung, Abhängigkeitsanalyse und vollständige Transparenz über alle Komponenten."

   **Loop 2 - VERIFY (Prüfen)**
   "Ist es sicher? Schwachstellen-Scanning, Lizenzprüfung und kontinuierliche Sicherheitsbewertung."

   **Loop 3 - SECURE (Absichern)**
   "Können Sie dem vertrauen? Digitale Signaturen, Attestierung und manipulationssichere Herkunftsnachweise."

   **Loop 4 - ENFORCE (Durchsetzen)**
   "Stoppen, was unsicher ist. Policy-as-Code, Admission Control und automatisierte Sicherheitsregeln."

   **Loop 5 - MONITOR (Überwachen)**
   "Sicher bleiben über die Zeit. Kontinuierliches Monitoring, Alerting und Schwachstellenmanagement."

3. "Warum SECURELOOP?" section:
   - 3-4 bullet points about growing threats, compliance requirements (NIS2, DORA, CRA)
   - Link to knowledge base

4. CTA section (subtle):
   - "Mehr erfahren" → Link to /knowledge
   - "Über das Framework" → Link to /about

### Knowledge Base Hub
**URL:** `/knowledge/`
**Title:** "Wissensdatenbank - Software Supply Chain Security"

**Content:**
- Introduction: "Hier finden Sie fundierte Erklärungen zu allen wichtigen Themen der Software-Lieferkettensicherheit."
- Grid of article cards (title, excerpt, tags)
- Organized by tags: SBOM, Compliance, Tools, Best Practices

### Knowledge Base Articles (5 articles, ~300-500 words each)

Use this frontmatter structure:
```yaml
---
title: "Article Title"
description: "Short meta description"
pubDate: 2025-12-03
tags: ["sbom", "compliance"]
relatedLoops: ["DISCOVER", "VERIFY"]
---
```

**Article 1: `/knowledge/sbom`**
**Title:** "SBOM - Software Bill of Materials erklärt"
**Tags:** ["sbom", "grundlagen"]
**Related Loops:** ["DISCOVER"]

**Content structure:**
- Was ist ein SBOM? (Definition in 2-3 Sätzen)
- Warum brauchen Sie ein SBOM? (3-4 konkrete Gründe)
- Wie wird ein SBOM erstellt? (Überblick über Tools: Syft, CycloneDX, SPDX)
- Wer braucht SBOMs? (NIS2, CRA, DORA Kontext)
- Was kommt als nächstes? (Link zu Signing, Vulnerability Scanning)

**Article 2: `/knowledge/vulnerability-scanning`**
**Title:** "Schwachstellen-Scanning - Sicherheitslücken finden, bevor andere es tun"
**Tags:** ["security", "scanning"]
**Related Loops:** ["VERIFY"]

**Content structure:**
- Was ist Vulnerability Scanning?
- Warum reichen SBOM-Listen nicht aus?
- Welche Tools gibt es? (Trivy, Grype, Snyk)
- Wie oft sollte gescannt werden?
- Integration in CI/CD

**Article 3: `/knowledge/software-signing`**
**Title:** "Software-Signierung - Vertrauen durch Kryptografie"
**Tags:** ["security", "provenance"]
**Related Loops:** ["SECURE"]

**Content structure:**
- Was ist Software-Signierung?
- Warum ist Herkunftsnachweis wichtig?
- Sigstore & Cosign erklärt
- Was ist SLSA?
- Praktische Umsetzung

**Article 4: `/knowledge/nis2`**
**Title:** "NIS2 - Was Betreiber kritischer Infrastrukturen jetzt wissen müssen"
**Tags:** ["compliance", "nis2"]
**Related Loops:** ["all"]

**Content structure:**
- Was ist NIS2?
- Wer ist betroffen? (KRITIS-Betreiber, ca. 30.000 EU-Unternehmen)
- Was sind die Anforderungen für Software-Lieferketten?
- Strafen bei Nichteinhaltung (bis zu €20M)
- Wie bereiten Sie sich vor?

**Article 5: `/knowledge/dora`**
**Title:** "DORA - Digital Operational Resilience Act für Finanzsektor"
**Tags:** ["compliance", "dora", "finance"]
**Related Loops:** ["all"]

**Content structure:**
- Was ist DORA?
- Wer muss DORA umsetzen? (Banken, Versicherungen, Finanzdienstleister)
- Seit wann gilt DORA? (17. Januar 2025 - bereits in Kraft!)
- Was bedeutet das für Software-Lieferketten?
- Unterschied zu NIS2

### About Page
**URL:** `/about`
**Title:** "Über SECURELOOP"

**Content:**
- Brief framework origin story
- "Entwickelt von Toni Menzel 🤿, DevSecOps Architekt mit 20+ Jahren Erfahrung in Banking, Defense, Aerospace und Public Sector"
- "Das Framework entstand aus der praktischen Arbeit in hochregulierten, airgapped Umgebungen"
- Link to rebaze.de for consulting services
- Contact: "Fragen? → [link to contact page]"

### Contact Page
**URL:** `/contact`
**Title:** "Kontakt"

**Content:**
- "Haben Sie Fragen zu Software Supply Chain Security oder dem SECURELOOP Framework?"
- "Für Beratung und Implementierung: rebaze.de"
- Email: [placeholder]
- LinkedIn: [placeholder]
- Note: "Diese Seite ist eine Wissensressource. Für kommerzielle Anfragen wenden Sie sich bitte an rebaze GmbH."

## DESIGN SYSTEM

**Typography:**
- Font: System font stack (SF Pro / Segoe UI / sans-serif) for performance
- Headings: Bold, clear hierarchy (H1: 2.5rem, H2: 2rem, H3: 1.5rem)
- Body: 1.125rem (18px), line-height 1.7 for readability
- Max content width: 65ch for articles (optimal reading length)

**Colors:**
- Primary: Clean blue (#1e40af or similar - trustworthy, tech)
- Background: White / Very light gray (#fafafa)
- Text: Near-black (#1a1a1a)
- Accent: Subtle gray for secondary elements
- Links: Underlined in body text, colored in navigation

**Spacing:**
- Generous whitespace (Tailwind spacing scale)
- Section padding: py-16 to py-24
- Article margins: comfortable reading experience

**Components:**
- **Loop Cards:** Grid layout (2-3 columns), hover effect, clean borders or subtle shadows
- **Article Cards:** Title, excerpt, tags, "Weiterlesen" link
- **Tag Pills:** Small, rounded, subtle background
- **Header:** Minimal - Logo/site name, main nav (Framework, Wissensdatenbank, Über, Kontakt)
- **Footer:** Copyright, link to rebaze.de, social (optional)

## TECHNICAL FEATURES

1. **Content Collections:**
   - Set up Astro content collections for articles
   - Frontmatter validation
   - Automatic tag indexing

2. **Cross-linking:**
   - "Related Loops" frontmatter connects articles to framework
   - "Related articles" component at end of each article (based on shared tags)

3. **Video embedding:**
   - Easy markdown syntax for YouTube embeds
   - Responsive video containers (16:9 aspect ratio)

4. **Image support:**
   - Astro Image component for optimization
   - Markdown image syntax works out of the box
   - Placeholder for diagram on homepage (5 loops visualization)

5. **SEO:**
   - Meta tags (title, description) from frontmatter
   - OpenGraph tags for social sharing
   - Sitemap generation

6. **Performance:**
   - Static generation (no JS unless needed)
   - Optimized images
   - Minimal CSS (Tailwind purging)

## TONE & VOICE (for placeholder content)

- **Direct but friendly:** No corporate speak, clear German
- **Pragmatic:** Focus on "what" and "why," less on "how" (that comes later with deeper content)
- **Authoritative without being academic:** Confident expertise, but accessible
- **Use analogies sparingly:** e.g., "90% Ihrer Software kommt von Fremden - ohne Zutatenliste"
- **Avoid buzzwords:** Say "Schwachstellen-Scanning" not "Cutting-edge Vulnerability Detection Solutions"

## DELIVERABLES

Create:
1. Full Astro project structure
2. All pages and layouts
3. Component library (Header, Footer, Cards, etc.)
4. 5 knowledge base articles with German placeholder content (300-500 words each)
5. Tailwind config optimized for content site
6. README with:
   - How to run locally
   - How to add new articles
   - How to deploy
   - Content guidelines

Make it production-ready but easy to extend. The site should feel "launched" but clearly have room to grow.

Focus on: Clean code, clear content architecture, easy maintenance.