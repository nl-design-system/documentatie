---
title: Security audit voor npm
hide_title: true
hide_table_of_contents: false
sidebar_label: Security audit voor npm
pagination_label: Security audit voor npm
description: Hoe voorkom je dat je security vulnerabilities installeert?
keywords:
  - GitHub Actions
  - Continuous Integration
  - npm
slug: /pnpm-audit
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

Vaak is het probleem al opgelost in een nieuwe versie, en dan is de oplossing om een update te installeren. De makkelijkste manier is om met de command-line de volgende commando's uit te voeren.

```shell
pnpm audit --fix
pnpm install --ignore-scripts
```

Het eerste commando past de configuratie van pnpm aan, om alleen bepaalde veiligere versies te gebruiken. Het tweede commando installeert de aangepaste dependencies, en past de "lockfile" aan.

Controleer of met deze wijzigingen de belangrijkste security vulnerabilities zijn opgelost:

```shell
pnpm audit --audit-level critical
```

Commit de wijzigingen aan `pnpm-lock.yaml` en `pnpm-workspace.yaml` en maak een Pull Request met je wijzigingen.

**Let op:** test goed of je project nog goed werkt na het installeren van de updates, op de voor jou gebruikelijke manier. De updates bevatten meestal niet alleen veiligheidsverbeteringen, maar ook algemene verbeteringen die zijn gedaan sinds je voor het laatst alle updates installeerde.

## Risico accepteren

Wanneer je GitHub Action niet meer werkt door een critical security vulnerability dan kan het zijn dat je werk geblokkeerd wordt, als er nog geen betere versie beschikbaar is.

Als je zeker weet dat de security vulnerability niet op jouw project van toepassing is, dan kun je het risco accepteren en een specifieke security vulnerability (een zogenaamde "[<span lang="en">CVE</span>](https://www.cve.org/About/Overview)") negeren. Lees hiervoor de documentatie over de [ignore CVE ID's van `pnpm`](https://pnpm.io/settings#auditconfigignorecves).
