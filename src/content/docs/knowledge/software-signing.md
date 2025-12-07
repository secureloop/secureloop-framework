---
title: Software-Signierung
description: Wie Software-Signaturen funktionieren, warum Herkunftsnachweise wichtig sind und wie Sigstore und SLSA die Landschaft verändern.
---

## Was ist Software-Signierung?

Software-Signierung verwendet kryptografische Verfahren, um zwei fundamentale Fragen zu beantworten:

1. **Integrität**: Wurde die Software seit der Erstellung verändert?
2. **Authentizität**: Stammt die Software wirklich vom angegebenen Ersteller?

Das Prinzip: Der Ersteller signiert die Software mit einem privaten Schlüssel. Jeder kann die Signatur mit dem öffentlichen Schlüssel verifizieren. Wurde die Software manipuliert, ist die Signatur ungültig.

## Warum ist Herkunftsnachweis wichtig?

Die Software Supply Chain ist ein attraktives Angriffsziel. Warum tausende Unternehmen einzeln angreifen, wenn man eine gemeinsam genutzte Bibliothek kompromittieren kann?

Beispiele aus der Praxis:

**SolarWinds (2020)**
- Angreifer haben den Build-Prozess kompromittiert
- Manipulierte Updates wurden an 18.000 Kunden verteilt
- Monate unentdeckt

**Codecov (2021)**
- Build-Skript wurde manipuliert
- Credentials von CI/CD-Systemen wurden abgegriffen
- Betraf tausende Repositories

**event-stream (2018)**
- Beliebte npm-Bibliothek wurde übernommen
- Schadcode in Dependencies eingeschleust
- 8 Millionen wöchentliche Downloads betroffen

Signierung allein hätte diese Angriffe nicht verhindert - aber sie macht Manipulation nachweisbar und erhöht den Aufwand für Angreifer erheblich.

## Sigstore & Cosign erklärt

**Sigstore** ist ein Open-Source-Projekt, das Software-Signierung demokratisiert. Das Problem traditioneller Signierung: Schlüsselmanagement ist komplex und teuer. Sigstore löst das durch:

### Keyless Signing
Statt langlebiger Schlüssel zu verwalten, verwendet Sigstore kurzlebige Zertifikate, die an Ihre Identität gebunden sind (z.B. GitHub-Account, Google-Account).

### Fulcio
Eine Certificate Authority, die kurzlebige Zertifikate ausstellt - basierend auf OIDC-Identitäten.

### Rekor
Ein unveränderliches Transparency Log, das alle Signaturen aufzeichnet. Wie Certificate Transparency für TLS-Zertifikate.

### Cosign
Das Kommandozeilen-Tool zum Signieren und Verifizieren von Container-Images und anderen Artifacts.

```bash
# Container signieren (keyless)
cosign sign ghcr.io/myorg/myimage:v1.0.0

# Signatur verifizieren
cosign verify ghcr.io/myorg/myimage:v1.0.0
```

## Was ist SLSA?

**SLSA** (Supply-chain Levels for Software Artifacts, gesprochen "Salsa") ist ein Framework, das Sicherheitslevel für Software-Builds definiert.

### Die vier Level

**SLSA Level 1 - Documentation**
- Build-Prozess ist dokumentiert
- Provenance-Informationen werden generiert

**SLSA Level 2 - Hosted Build**
- Build läuft auf gehosteter Infrastruktur
- Provenance ist signiert

**SLSA Level 3 - Hardened Build**
- Build-Plattform bietet starke Isolation
- Provenance kann nicht gefälscht werden

**SLSA Level 4 - Two-Party Review**
- Alle Änderungen werden von zwei Personen reviewed
- Höchste Sicherheitsgarantien

### Provenance-Attestation

SLSA generiert sogenannte "Provenance Attestations" - maschinenlesbare Dokumente, die beschreiben:
- Wer hat gebaut?
- Wo wurde gebaut?
- Welche Quellen wurden verwendet?
- Welche Build-Schritte wurden ausgeführt?

Diese Attestations können verifiziert werden, um sicherzustellen, dass ein Artifact tatsächlich aus dem behaupteten Quellcode auf der behaupteten Build-Plattform erstellt wurde.

## Praktische Umsetzung

### Für Container-Images

1. **Container-Images signieren** mit Cosign
2. **Build-Provenance generieren** mit GitHub Actions oder GitLab CI
3. **Signaturen und Attestations** in einer Registry speichern
4. **Bei Deployment verifizieren** mit Admission Controllers

### Für andere Artifacts

- npm: Provenance-Unterstützung seit 2023
- Python: PEP 740 für Attestations
- Maven: Sigstore-Integration in Entwicklung

### In der CI/CD-Pipeline

```yaml
# Beispiel: GitHub Actions mit SLSA
- uses: actions/attest-build-provenance@v1
  with:
    subject-path: 'dist/*'
```

## Integration im SECURELOOP Framework

Software-Signierung ist der Kern des **SECURE**-Loops. Sie beantwortet: "Können Sie dem vertrauen?"

Die Verbindung zu anderen Loops:
- **DISCOVER** liefert das [SBOM](/knowledge/sbom/) - was signiert werden muss
- **VERIFY** prüft, ob signierte Komponenten [Schwachstellen](/knowledge/vulnerability-scanning/) haben
- **ENFORCE** stellt sicher, dass nur signierte Komponenten verwendet werden
- **MONITOR** überwacht, ob Signaturen gültig bleiben

Signierung ohne Enforcement ist wertlos - es muss sichergestellt werden, dass unsignierte oder ungültig signierte Artifacts abgelehnt werden.
