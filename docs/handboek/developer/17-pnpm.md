---
title: Werken met pnpm · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Werken met pnpm
pagination_label: Werken met pnpm
description: Werken met pnpm
keywords:
  - developer
  - pnpm
---

<!--
De volgende user stories vormen de richtlijnen waarop deze pagina is gebaseerd:
- Als developer wil ik weten welke package manager ik moet gebruiken, zodat mijn code compatible is met NL Design System
- Als Developer Relations engineer wil ik een link naar documentatie kunnen sturen, zodat mensen de juiste package manager gebruiken
- Als Vers & Veilig Engineer wil ik dat de community de pnpm versie in hun hele codebase in sync houdt, en dit zoveel mogelijk zelf kan doen
-->

# Werken met pnpm

pnpm is een snelle, efficiënte package manager voor Node.js.
Het is een alternatief voor npm en yarn en staat bekend om zijn zuinige gebruik van schijfruimte en hoge performance.
Daarnaast biedt pnpm een aantal beveiligingsfeatures waar we gebruik van maken.

## De juiste pnpm-versie installeren en gebruiken

Tegenwoordig hoef je de package manager niet meer los te installeren, maar gebruik je [Corepack](https://github.com/nodejs/corepack).
Dit is in recente versies van [Node.js](/developer/node) inbegrepen.
Corepack gebruikt automatisch de versie van pnpm die in `package.json` staat, zodat teams en CI dezelfde versie gebruiken.

```sh
# activeer Corepack
corepack enable

# controleer de installatie
pnpm -v
```

Daarnaast staat de minimumversie van pnpm in `package.json` onder `engines.pnpm`.
Op dit moment is de minimumversie van pnpm **10.17.0**.
Deze versie bevat een aantal veiligheidsfeatures met betrekking tot [minimum release age](https://pnpm.io/settings#minimumreleaseage).

## pnpm upgraden

Ook voor upgraden gebruik je Corepack.
Gebruik altijd de `corepack` CLI om de versie in `package.json` te upgraden zodat de hash wordt toegevoegd aan de versie.
Dit is een beveiligingsmaatregel om te verifiëren dat exact dezelfde pnpm-binary wordt gebruikt op elke machine.

```sh
# upgraden naar laatste versie in major range
corepack up

# of: upgraden naar specifieke versie
corepack use pnpm@10
```
