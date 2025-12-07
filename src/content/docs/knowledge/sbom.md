---
title: SBOM - Software Bill of Materials erklärt
description: Was ist ein SBOM und warum braucht jedes Unternehmen eines? Erfahren Sie alles über Software-Stücklisten, ihre Erstellung und ihren Nutzen.
---

## Was ist ein SBOM?

Ein SBOM (Software Bill of Materials) ist eine maschinenlesbare Auflistung aller Komponenten, aus denen eine Software besteht. Stellen Sie sich vor: Wenn Lebensmittel eine Zutatenliste haben müssen, warum sollte Software eine Ausnahme sein?

Ein SBOM enthält typischerweise:
- Namen und Versionen aller Komponenten
- Lieferanten und Hersteller
- Abhängigkeitsbeziehungen zwischen Komponenten
- Lizenzinformationen
- Hashwerte zur Integritätsprüfung

## Warum brauchen Sie ein SBOM?

### 1. Transparenz in der Lieferkette

Moderne Software besteht zu 80-90% aus externen Komponenten - Open-Source-Bibliotheken, Frameworks und Tools. Ohne SBOM haben Sie keine Ahnung, was tatsächlich in Ihrer Software steckt.

### 2. Schnellere Reaktion auf Schwachstellen

Als die Log4Shell-Schwachstelle bekannt wurde, konnten Unternehmen mit SBOMs innerhalb von Minuten feststellen, ob sie betroffen waren. Andere suchten wochenlang.

### 3. Compliance-Anforderungen

Regulierungen wie [NIS2](/knowledge/nis2/), [DORA](/knowledge/dora/) und der Cyber Resilience Act (CRA) fordern explizit Transparenz über Software-Komponenten. SBOMs werden zur Pflicht.

### 4. Lizenz-Compliance

Ein SBOM zeigt Ihnen, welche Lizenzen in Ihrer Software verwendet werden. Das schützt vor rechtlichen Überraschungen bei der Nutzung von Open-Source-Software.

## Wie wird ein SBOM erstellt?

Die Erstellung eines SBOM erfolgt typischerweise automatisiert während des Build-Prozesses. Es gibt verschiedene Ansätze:

### Source-Analyse
Tools analysieren Ihre Paketmanager-Dateien (package.json, pom.xml, go.mod) und extrahieren Abhängigkeitsinformationen.

### Binary-Analyse
Bei kompilierten Anwendungen werden die Binärdateien analysiert, um enthaltene Komponenten zu identifizieren.

### Container-Analyse
Für Container-Images werden alle Schichten analysiert, um ein vollständiges Bild der enthaltenen Software zu erhalten.

### Gängige Tools

- **Syft** - Open-Source-Tool von Anchore, unterstützt viele Formate
- **CycloneDX** - OWASP-Projekt mit breiter Ökosystem-Unterstützung
- **SPDX** - Linux Foundation Standard, weit verbreitet

## SBOM-Formate

Die beiden wichtigsten Standards sind:

**CycloneDX** - Fokussiert auf Security-Anwendungsfälle, unterstützt Vulnerability-Informationen nativ.

**SPDX** - Ursprünglich für Lizenz-Compliance entwickelt, heute ein ISO-Standard (ISO/IEC 5962:2021).

Beide Formate sind maschinenlesbar (JSON, XML) und können ineinander konvertiert werden.

## Wer braucht SBOMs?

Kurz gesagt: Jedes Unternehmen, das Software entwickelt oder betreibt.

Besonders relevant für:
- **KRITIS-Betreiber** - NIS2 fordert Supply Chain Security
- **Finanzsektor** - DORA verlangt ICT-Risikomanagement
- **Hersteller digitaler Produkte** - CRA wird SBOMs zur Pflicht machen
- **Zulieferer** - Immer mehr Kunden fordern SBOMs als Teil der Lieferung

## Was kommt als nächstes?

Ein SBOM ist der erste Schritt zur Supply Chain Security. Aber eine Liste allein macht Ihre Software nicht sicher. Die nächsten Schritte sind:

1. **[Schwachstellen-Scanning](/knowledge/vulnerability-scanning/)** - Das SBOM gegen bekannte Schwachstellen prüfen
2. **[Signierung](/knowledge/software-signing/)** - Die Integrität und Herkunft der Komponenten verifizieren
3. **Policies** - Automatisierte Regeln für erlaubte und verbotene Komponenten

All das ist Teil des SECURELOOP Frameworks - vom DISCOVER (SBOM) über VERIFY (Scanning) bis SECURE (Signierung).
