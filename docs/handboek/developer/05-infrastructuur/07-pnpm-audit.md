---
title: Security audit voor npm
hide_title: true
hide_table_of_contents: false
sidebar_label: Security audit voor npm
pagination_label: Security audit voor npm
description: Hoe voorkom je dat je security vulnerabilities installeert?
slug: /pnpm-audit
keywords:
  - GitHub Actions
  - Continuous Integration
  - npm
---

# Security audit voor npm

Om te voorkomen dat hackers controle kunnen krijgen over de software releases van NL Design System, doen we altijd eerst een security scan met `pnpm audit` voordat `pnpm install` wordt uitgevoerd. In GitHub Actions doen we dat zo:

```yaml
- name: Audit dependencies
  run: pnpm audit --audit-level critical

- name: Install dependencies
  run: pnpm install --frozen-lockfile
```

Op deze manier stopt de GitHub Action wanneer in de dependencies een npm package is gevonden, waarvan inmiddels bekend is dat het onveilig kan zijn.

## Snel ingrijpen

Wanneer een security vulnerability bekend wordt, zoals [SHA1-Hulud](https://snyk.io/blog/sha1-hulud-npm-supply-chain-incident/), wil je snel kunnen ingrijpen en voorkomen dat de kwaadaardige npm package wordt geïnstalleerd op een plek waar gevoelige "environment secrets" uit kunnen lekken.

Omdat het in de praktijk niet mogelijk is om snel genoeg alle branches van alle repositories te controleren, gebruiken we deze aanpak om automatisch elke `pnpm install` te voorkomen. Wanneer veiligheidsonderzoekers op een centrale plek een melding doen van een critical vulnerability, dan grijpt `pnpm audit` vanaf dat moment automatisch in.

## Betere versies installeren

Vaak is het probleem al opgelost in een nieuwe versie, en dan is de oplossing om een update te installeren.
Met pnpm 11 kun je kwetsbaarheden op twee manieren oplossen.

### Lockfile bijwerken (aanbevolen)

Zo los je critical vulnerabilities op door, waar mogelijk, geüpdatete, veiligere versies in de lockfile te zetten.

```shell
pnpm audit --fix update --audit-level critical
pnpm install --ignore-scripts
```

Met `--fix=update` worden kwetsbare packages in de lockfile bijgewerkt, zonder overrides in `pnpm-workspace.yaml`.
Wil je zelf kiezen welke kwetsbaarheden je oplost?
Gebruik dan `--interactive` (of `-i`):

```shell
pnpm audit --fix update --interactive
```

### Overrides toevoegen

```shell
pnpm audit --fix override
pnpm install --ignore-scripts
```

Dit voegt overrides toe aan `pnpm-workspace.yaml` om veiligere versies af te dwingen.
Gebruik deze aanpak wanneer `--fix=update` niet volstaat: de kwetsbare package komt dan indirect binnen via een andere dependency (transitieve dependency), of de semver-range in `package.json` staat een update naar de gepatchte versie niet toe.

Wanneer `minimumReleaseAge` is ingesteld, voegt `--fix` de minimale gepatchte versie ook toe aan `minimumReleaseAgeExclude`, zodat security fixes direct geïnstalleerd kunnen worden zonder te wachten op de release age.

Het tweede commando installeert de aangepaste dependencies en past de lockfile aan.

Controleer of met deze wijzigingen de belangrijkste security vulnerabilities zijn opgelost:

```shell
pnpm audit --audit-level critical
```

Commit de wijzigingen aan `pnpm-lock.yaml` en `pnpm-workspace.yaml` en maak een Pull Request met je wijzigingen.

**Let op:** test goed of je project nog goed werkt na het installeren van de updates, op de voor jou gebruikelijke manier. De updates bevatten meestal niet alleen veiligheidsverbeteringen, maar ook algemene verbeteringen die zijn gedaan sinds je voor het laatst alle updates installeerde.

## Risico accepteren

Wanneer je GitHub Action niet meer werkt door een critical security vulnerability dan kan het zijn dat je werk geblokkeerd wordt, als er nog geen betere versie beschikbaar is.

Als je zeker weet dat de security vulnerability niet op jouw project van toepassing is, dan kun je het risico accepteren en een specifieke advisory negeren.
Vanaf pnpm 11 gebruikt `pnpm audit` GitHub Security Advisory ID's ([GHSA](https://github.com/advisories)) in plaats van CVE-nummers.
De GHSA-code staat in de kolom "More info" van de `pnpm audit`-uitvoer.
Zet die code in `auditConfig.ignoreGhsas` in `pnpm-workspace.yaml`.
Lees hiervoor de documentatie over [ignoreGhsas van `pnpm`](https://pnpm.io/cli/audit#auditconfigignoreghsas).
