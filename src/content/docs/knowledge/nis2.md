---
title: NIS2
description: Die NIS2-Richtlinie erweitert die Anforderungen an Cybersicherheit erheblich. Wer ist betroffen und was müssen Sie tun?
---

## Was ist NIS2?

Die **NIS2-Richtlinie** (Network and Information Security Directive 2) ist die Weiterentwicklung der ursprünglichen NIS-Richtlinie von 2016. Sie wurde im Januar 2023 verabschiedet und muss von den EU-Mitgliedstaaten bis Oktober 2024 in nationales Recht umgesetzt werden.

NIS2 zielt darauf ab, ein hohes gemeinsames Cybersicherheitsniveau in der gesamten EU zu etablieren - mit deutlich verschärften Anforderungen gegenüber dem Vorgänger.

## Wer ist betroffen?

Die Zahl der betroffenen Unternehmen steigt dramatisch. Während NIS1 nur etwa 6.000 Unternehmen in der EU erfasste, werden es unter NIS2 geschätzt **160.000** Unternehmen sein - davon etwa **30.000 in Deutschland**.

### Wesentliche Einrichtungen (Essential Entities)
- Energie (Strom, Gas, Öl, Fernwärme)
- Verkehr (Luft, Schiene, Wasser, Straße)
- Banken und Finanzmarktinfrastrukturen
- Gesundheitswesen
- Trinkwasser und Abwasser
- Digitale Infrastruktur (Cloud, DNS, Rechenzentren)
- Öffentliche Verwaltung
- Raumfahrt

### Wichtige Einrichtungen (Important Entities)
- Post- und Kurierdienste
- Abfallwirtschaft
- Chemie
- Lebensmittelproduktion
- Herstellung (Medizin, IT, Elektronik, Maschinen, Fahrzeuge)
- Digitale Anbieter (Online-Marktplätze, Suchmaschinen, Social Media)
- Forschungseinrichtungen

### Größenkriterien
Generell gilt: Unternehmen mit mehr als **50 Mitarbeitern** oder **10 Millionen Euro Jahresumsatz** in den genannten Sektoren fallen unter NIS2.

## Was sind die Anforderungen für Software-Lieferketten?

NIS2 fordert explizit Maßnahmen zur **Sicherung der Lieferkette**. Artikel 21 nennt konkret:

### Risikomanagement für die Lieferkette
- Bewertung der Sicherheit von Lieferanten
- Berücksichtigung von Schwachstellen bei direkten Lieferanten
- Gesamtqualität der Produkte und Cybersicherheitspraktiken der Lieferanten

### Technische und organisatorische Maßnahmen
- Incident Handling und Business Continuity
- Schwachstellenmanagement und Disclosure
- Kryptografie und Verschlüsselung
- Sicherheit bei Beschaffung, Entwicklung und Wartung von Systemen

### Praktisch bedeutet das:
1. **Transparenz** über alle Software-Komponenten ([SBOM](/knowledge/sbom/))
2. **Kontinuierliches [Scanning](/knowledge/vulnerability-scanning/)** auf Schwachstellen
3. **Prozesse** für schnelle Reaktion auf neue Schwachstellen
4. **Dokumentation** aller Sicherheitsmaßnahmen
5. **Verifizierung** der Integrität von [Software-Lieferungen](/knowledge/software-signing/)

## Strafen bei Nichteinhaltung

NIS2 führt empfindliche Strafen ein:

**Für wesentliche Einrichtungen:**
- Bis zu **10 Millionen Euro** oder
- **2% des weltweiten Jahresumsatzes**

**Für wichtige Einrichtungen:**
- Bis zu **7 Millionen Euro** oder
- **1,4% des weltweiten Jahresumsatzes**

Zusätzlich können Behörden:
- Warnungen und verbindliche Anweisungen erteilen
- Vor-Ort-Kontrollen durchführen
- Für wesentliche Einrichtungen: Geschäftsführer vorübergehend suspendieren

## Wie bereiten Sie sich vor?

### 1. Betroffenheitsanalyse
Prüfen Sie, ob Ihr Unternehmen unter NIS2 fällt. Die Größenkriterien und Sektorzugehörigkeit sind entscheidend.

### 2. Gap-Analyse
Vergleichen Sie Ihre aktuellen Sicherheitsmaßnahmen mit den NIS2-Anforderungen. Wo gibt es Lücken?

### 3. Supply Chain Security etablieren
- SBOM-Generierung für alle Produkte einführen
- Schwachstellen-Scanning automatisieren
- Prozesse für Incident Response definieren

### 4. Dokumentation
NIS2 fordert nachweisbare Compliance. Dokumentieren Sie alle Maßnahmen, Prozesse und Entscheidungen.

### 5. Schulung
Das Management muss die Cybersicherheitsmaßnahmen genehmigen und überwachen. Schulungen sind Pflicht.

## Der Zusammenhang mit dem SECURELOOP Framework

Das SECURELOOP Framework adressiert direkt die Supply Chain Security-Anforderungen von NIS2:

| NIS2-Anforderung | SECURELOOP Loop |
|------------------|-----------------|
| Transparenz über Komponenten | DISCOVER ([SBOM](/knowledge/sbom/)) |
| Schwachstellenmanagement | VERIFY ([Scanning](/knowledge/vulnerability-scanning/)) |
| Integrität der Lieferungen | SECURE ([Signierung](/knowledge/software-signing/)) |
| Sicherheitsrichtlinien | ENFORCE (Policies) |
| Kontinuierliche Überwachung | MONITOR (Alerting) |

Mit einem strukturierten Ansatz wie SECURELOOP können Sie die NIS2-Anforderungen systematisch umsetzen - und gleichzeitig echte Sicherheit gewinnen, nicht nur Compliance.

:::tip[Verwandtes Thema]
Wenn Sie im Finanzsektor tätig sind, ist auch [DORA](/knowledge/dora/) für Sie relevant - die spezifische Regulierung für Finanzunternehmen.
:::
