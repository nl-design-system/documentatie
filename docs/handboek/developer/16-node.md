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

Op de [website van Node.js](https://nodejs.org/) vind je de meest recente LTS-versie en de [ondersteuningsduur](https://nodejs.org/en/about/previous-releases). Ondersteunen platforms als GitHub of [Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions) een nieuwe versie nog niet? We raden dan aan te wachten met upgraden. De [example-repository toont welke Node.js-versie](https://github.com/nl-design-system/example/blob/main/.nvmrc) NL Design System aanbeveelt.

## De juiste Node.js-versie installeren en gebruiken

In plaats van Node.js rechtstreeks op jouw machine te installeren, raden we aan om `nvm` (Node Version Manager) te gebruiken. Dit stelt je in staat om makkelijk per project een specifieke versie te gebruiken.

Sla de gewenste versie op in `.nvmrc` en voer `nvm use` uit. Op de [website van nvm](https://www.nvmnode.com/) lees je hoe je dit installeert en gebruikt.

De ondersteunde versierange staat in `package.json` onder `engines.node`. Doordat we `engine-strict=true` in `.npmrc` hebben geconfigureerd, krijg je een foutmelding als je een andere versie gebruikt. Dit doen we om te voorkomen dat een oudere Node.js-versie wordt gebruikt waarmee niet wordt getest en mogelijk problemen zijn. De versierange staat meestal één nieuwere versie van Node.js toe, om mogelijk te maken dat developers op eigen risico een recentere versie van Node.js gebruiken.

## Upgraden naar een nieuwe versie

De Node.js-versie staat ingesteld op de meerdere plekken in de code. We proberen de instellingen zo veel mogelijk centraal vast te leggen om upgrades makkelijk te maken. Pas de volgende bestanden aan om de Node.js versie te upgraden:

- `.nvmrc`
- GitHub Actions: via `actions/setup-node` gebruiken GitHub Action workflows de versie uit `.nvmrc`. Sommige actions hanteren een eigen versie; lees hiervoor de documentatie van de action.
- `package.json`: in het `engines.node`-veld specificeer je de ondersteunde versie-range.
- De `@types/node` dependency is afgestemd op de Node.js middels de major versie. Bijvoorbeeld: voor Node.js 24 heeft `@types/node` ook versie `24.x`. (Om te voorkomen dat deze automatisch worden geüpgradet, worden [dependabot](https://github.com/nl-design-system/example/blob/main/.github/dependabot.yml) en [npm-check-updates](https://github.com/nl-design-system/example/blob/main/.ncurc.major.cjs) geconfigureerd deze dependency te negeren.)
- `Dockerfile`s: als je project Docker gebruikt, wordt in de Dockerfile gespecificeerd welke Node.js-versie wordt gebruikt aan de hand van de tag van de base image. Kies een tag die overeenkomt, bijvoorbeeld `node:24` of `node:24-alpine`.
