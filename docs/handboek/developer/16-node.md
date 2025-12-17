---
title: Werken met Node.js · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Werken met Node.js
pagination_label: Werken met Node.js
description: Werken met Node.js
keywords:
  - developer
  - node
  - node.js
  - nodejs
  - nvm
  - versies
---

<!--
De volgende user stories vormen de richtlijnen waarop deze pagina is gebaseerd:
- Als developer wil ik weten welke Node.js versie ik moet gebruiken, zodat mijn code compatible is met NL Design System
- Als Developer Relations engineer wil ik een link naar documentatie kunnen sturen, zodat mensen de juiste Node.js versie gebruiken
- Als Developer Relations engineer wil ik voorkomen dat men Node.js update voordat Vercel het ondersteunt
- Als Vers & Veilig Engineer wil ik dat de community de Node.js versie in hun hele codebase in sync houdt, en dit zoveel mogelijk zelf kan doen
- Als Vers & Veilig Engineer wil ik dat de community de Node.js versie op zo min mogelijk plekken vastlegt zodat upgrades weinig werk zijn
-->

# Werken met Node.js

Node.js is de JavaScript-runtime voor alles rondom NL Design System: build tooling, component libraries en scripts. Hiermee voer je JavaScript uit buiten de browser. Het vormt de basis van de meeste frontend-ecosystemen.

## Huidige versie: Node.js 24 {#huidige-versie}

Voor stabiliteit, veiligheid en voorspelbaarheid gebruikt NL Design System LTS-versies (long-term support) van Node.js. Deze versies ontvangen langere tijd security- en bugfix-updates en hebben betere ondersteuning van tooling en dependencies.

Op de [website van Node.js](https://nodejs.org/) vind je de meest recente LTS-versie en de [ondersteuningsduur](https://nodejs.org/en/about/previous-releases). Ondersteunen platforms als GitHub of [Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions) een nieuwe versie nog niet? We raden dan aan te wachten met upgraden. De example-repository toont welke Node.js-versie NL Design System aanbeveelt.

## De juiste Node.js-versie installeren en gebruiken

We gebruiken NVM om te voorkomen dat developers met verschillende Node.js-versies werken. Met NVM gebruik je per project een specifieke versie. Sla de gewenste versie op in `.nvmrc` en voer `nvm use` uit. Op de [website van NVM](https://www.nvmnode.com/) lees je hoe je dit installeert en gebruikt.

## Upgraden naar een nieuwe versie

De Node.js-versie staat op meerdere plekken:

- `.nvmrc`
- GitHub Actions: via `actions/setup-node` gebruiken GitHub Action workflows de versie uit `.nvmrc`. Sommige actions hanteren een eigen versie; lees hiervoor de documentatie van de action.
- `package.json`: in het `engines.node`-veld specificeer je de ondersteunde versie-range. Met `engine-script=true` in `.npmrc` dwing je dit af.
- `Dockerfile`s: als je project Docker gebruikt, is de base image meestal gebaseerd op een specifieke Node.js-versie.

Het is een goede praktijk om de Node.js-versie op zo min mogelijk plekken vast te leggen, zodat de kans klein is dat versies uit elkaar lopen en upgraden makkelijker wordt gemaakt.
