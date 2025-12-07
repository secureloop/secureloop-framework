---
title: DORA
description: Der Digital Operational Resilience Act (DORA) ist seit Januar 2025 in Kraft. Was bedeutet das für Banken, Versicherungen und ihre IT-Dienstleister?
---

## Was ist DORA?

Der **Digital Operational Resilience Act** (DORA) ist eine EU-Verordnung, die die digitale operationale Resilienz im Finanzsektor stärken soll. Anders als eine Richtlinie gilt DORA direkt in allen EU-Mitgliedstaaten - ohne Umsetzung in nationales Recht.

Das Ziel: Finanzunternehmen sollen Cyberangriffen und IT-Störungen standhalten können, ohne dass ihre Geschäftsfähigkeit beeinträchtigt wird.

## Seit wann gilt DORA?

:::caution[Jetzt aktiv!]
**DORA ist seit dem 17. Januar 2025 voll anwendbar.**
:::

Die Verordnung wurde im Dezember 2022 verabschiedet und trat im Januar 2023 in Kraft. Nach einer zweijährigen Übergangszeit müssen betroffene Unternehmen seit Januar 2025 alle Anforderungen erfüllen.

## Wer muss DORA umsetzen?

DORA betrifft praktisch den gesamten Finanzsektor:

### Finanzunternehmen
- Kreditinstitute (Banken)
- Zahlungsinstitute
- E-Geld-Institute
- Wertpapierfirmen
- Versicherungen und Rückversicherungen
- Pensionsfonds
- Ratingagenturen
- Anbieter von Krypto-Dienstleistungen

### IKT-Drittdienstleister
- Cloud-Anbieter
- Software-Anbieter
- Managed Service Provider
- Rechenzentren

Der Clou: Auch IT-Dienstleister, die für Finanzunternehmen arbeiten, fallen unter DORA. Sie werden als "kritische IKT-Drittdienstleister" klassifiziert und direkt von Aufsichtsbehörden überwacht.

## Was bedeutet das für Software-Lieferketten?

DORA enthält umfangreiche Anforderungen an das **IKT-Drittparteienrisiko**. Konkret müssen Finanzunternehmen:

### Risikobewertung von Drittanbietern
- Sorgfältige Due Diligence vor Vertragsabschluss
- Bewertung der Sicherheitspraktiken von Anbietern
- Berücksichtigung von Konzentrationsrisiken

### Vertragliche Anforderungen
- Spezifische Sicherheitsklauseln in IKT-Verträgen
- Auditrechte und Zugang zu Informationen
- Kündigungsklauseln bei Sicherheitsvorfällen
- Exit-Strategien und Datenportabilität

### Kontinuierliche Überwachung
- Regelmäßige Überprüfung der Drittanbieter
- Monitoring von Sicherheitsvorfällen
- Bewertung von Sub-Unternehmen (Fourth-Party-Risk)

### Für die Software-Entwicklung bedeutet das:
1. **Transparenz** über alle verwendeten Bibliotheken und Komponenten ([SBOM](/knowledge/sbom/))
2. **Herkunftsnachweise** für [Software-Lieferungen](/knowledge/software-signing/)
3. **[Schwachstellenmanagement](/knowledge/vulnerability-scanning/)** mit definierten Reaktionszeiten
4. **Dokumentation** der gesamten Software-Lieferkette

## Unterschied zu NIS2

DORA und [NIS2](/knowledge/nis2/) haben Überschneidungen, unterscheiden sich aber in wichtigen Punkten:

| Aspekt | DORA | NIS2 |
|--------|------|------|
| Rechtsform | Verordnung (direkt anwendbar) | Richtlinie (nationale Umsetzung) |
| Sektorenfokus | Nur Finanzsektor | Alle kritischen Sektoren |
| Tiefe | Sehr detailliert, konkrete Vorgaben | Prinzipienbasiert, mehr Spielraum |
| IKT-Drittanbieter | Direkte Aufsicht möglich | Nur über betroffene Unternehmen |
| Threat Intelligence | Verpflichtend | Empfohlen |
| Penetrationstests | TLPT alle 3 Jahre für kritische Systeme | Nicht spezifiziert |

:::note
**Wichtig:** DORA gilt als *lex specialis* - für Finanzunternehmen hat DORA Vorrang vor NIS2 bei Widersprüchen.
:::

## Die fünf Säulen von DORA

### 1. IKT-Risikomanagement
Umfassende Governance für IKT-Risiken, klare Verantwortlichkeiten auf Leitungsebene.

### 2. IKT-bezogene Vorfälle
Klassifizierung, Meldung und Analyse von Sicherheitsvorfällen.

### 3. Testen der digitalen Resilienz
Regelmäßige Tests einschließlich Threat-Led Penetration Testing (TLPT).

### 4. IKT-Drittparteienrisiko
Management der Risiken durch externe IT-Dienstleister.

### 5. Informationsaustausch
Freiwilliger Austausch von Cyber-Bedrohungsinformationen.

## Praktische Schritte

### Für Finanzunternehmen
1. **Gap-Analyse** gegen die DORA-Anforderungen durchführen
2. **IKT-Risikomanagement-Framework** etablieren oder erweitern
3. **Drittanbieter-Register** anlegen und pflegen
4. **Software-Lieferkette** dokumentieren (SBOM für alle Produkte)
5. **Testprogramm** für digitale Resilienz aufsetzen

### Für IT-Dienstleister
1. Prüfen, ob Sie als **kritischer IKT-Drittdienstleister** klassifiziert werden könnten
2. **Sicherheitsstandards** an DORA-Anforderungen anpassen
3. **Transparenz** gegenüber Kunden erhöhen (SBOMs, Sicherheitsberichte)
4. **Vertragsstandards** anpassen (Auditrechte, SLAs, Exit-Klauseln)

## DORA und SECURELOOP

Das SECURELOOP Framework unterstützt die Erfüllung von DORA-Anforderungen:

- **DISCOVER**: Vollständige Transparenz über Software-Komponenten
- **VERIFY**: Kontinuierliches Schwachstellenmanagement
- **SECURE**: Integritätsnachweise für Software-Lieferungen
- **ENFORCE**: Automatisierte Durchsetzung von Sicherheitsrichtlinien
- **MONITOR**: Kontinuierliche Überwachung und Alerting

Mit einem strukturierten Supply-Chain-Security-Ansatz können Finanzunternehmen und ihre Dienstleister einen wesentlichen Teil der DORA-Anforderungen systematisch adressieren.
