---
title: Linting en code formatting
hide_title: true
slug: /linting-en-code-formatting
hide_table_of_contents: false
sidebar_label: Linting en code formatting
pagination_label: Linting en code formatting
description: Linting en formatting van code
keywords:
  - lint
  - eslint
  - formatting
  - prettier
  - husky
  - lint-staged
---

<!--
De volgende user stories vormen de richtlijnen waarop deze pagina is gebaseerd:
- Als developer wil ik weten welke tooling wordt gebruikt voor linting en formatting, zodat ik hierop kan aansluiten
- Als DevOps Engineer wil ik toelichting binnen configuratie centraliseren zodat ik kan verwijzen naar een link i.p.v. code duplication
-->

# Linting en code formatting

In ons design system gebruiken we tools voor _linting_ en _code formatting_ om consistente en leesbare code te garanderen.
Dit helpt bij samenwerken om:

- kwaliteitsproblemen vroeg te signaleren;
- code reviews te versnellen (geen discussie over spaties en tabs);
- verschillen tussen persoonlijke voorkeuren van ontwikkelaars en IDE-instellingen te minimaliseren.

De tools vullen elkaar aan:

- **Linting bewaakt kwaliteit.** Deze tools controleren code op mogelijke fouten, anti‑patterns en overtredingen van afgesproken regels. Bijvoorbeeld: ongebruikte variabelen, incorrecte afhankelijkheden.
- **Formatting is voor consistentie.** Code wordt automatisch opgemaakt, zonder de code inhoudelijk te beoordelen. Bijvoorbeeld: voorspelbare inspringing, quotes en regellengte.

## Gebruikte tooling

Hier sommen we op welke tooling we gebruiken en hoe het wordt gebruikt.

### ESLint

[ESLint](https://eslint.org/) wordt gebruikt voor het linten van JavaScript/TypeScript code.
Het detecteert fouten en ongewenste patronen.
Het kan framework-specifieke (bijvoorbeeld React) regels toepassen.

- Geconfigureerd in `eslint.config.mjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/eslint.config.mjs))
- Uitvoeren met `pnpm lint:js`

### Stylelint

[Stylelint](https://stylelint.io/) wordt gebruikt voor het linten van CSS en Sass (SCSS).

- Geconfigureerd in `.stylelintrc.json` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/.stylelintrc.json))
- Uitvoeren met `pnpm lint:css`

### Prettier

[Prettier](https://prettier.io/) wordt gebruikt voor het formatteren van code.
Het wordt niet alleen toegepast op JavaScript en TypeScript, maar ook YAML en Markdown.

- Geconfigureerd in `prettier.config.mjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/prettier.config.mjs))
- Uitvoeren met `pnpm lint:prettier`

### markdownlint

[markdownlint](https://github.com/DavidAnson/markdownlint) wordt gebruikt om Markdown-bestanden te controleren, bijvoorbeeld op headings, witruimte of het ontbreken van alt-teksten op plaatjes.

- Geconfigureerd in `.markdownlint.json` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/.markdownlint.json))
- Uitvoeren met `pnpm lint:md`

### npm-package-json-lint

Met [npm-package-json-lint](https://npmpackagejsonlint.org/) wordt de `package.json` gecontroleerd, bijvoorbeeld op het bestaan van een author.
Voor NL Design System wordt onder andere bijgehouden dat de licentie op [EUPL](https://nldesignsystem.nl/blog/licentiekeuze-nl-design-system/) staat.

- Geconfigureerd in `npmpackagejsonlint.config.cjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/npmpackagejsonlint.config.cjs))
- Uitvoeren met `pnpm lint:package-json`

## Automatisering

### Automatisering met husky en lint-staged {#lint-staged}

We gebruiken **husky** in combinatie met **lint‑staged** om deze checks uit te voeren vóórdat code wordt gecommit.

- **Husky** beheert Git hooks, waarmee je een commando kunt uitvoeren vóór committen
- **lint‑staged** is dat commando en voert linting en code formatting alleen uit op gewijzigde bestanden

Het voordeel hiervan is dat je niet hoeft te herinneren om de check uit te voeren, je snelle feedback krijgt (in plaats van pas in CI), en dat er geen checks op ongewijzigde code worden gedaan.

Daar waar mogelijk, wordt gebruik gemaakt van functionaliteit om automatisch problemen op te lossen.

:::info[Goed om te weten]

Om veiligheidsredenen worden dependencies in de NL Design System repositories geïnstalleerd met `--ignore-scripts`, waardoor Husky niet compleet wordt geïnstalleerd.
Dit is snel opgelost: voer éénmalig `pnpm prepare` uit.

:::

### IDE-instellingen

Voor een optimale developerervaring:

- Schakel **format on save** in en configureer het om Prettier uit te voeren
- Gebruik dezelfde [Node.js‑versie](/nodejs) als het project
- Zorg dat de lokale Prettier config wordt gebruikt

## Voorbeeld en referentie

Een volledig voorbeeld van de configuratie en best practices wordt onderhouden in de [example](https://github.com/nl-design-system/example) repository.

Deze repo dient als referentie‑implementatie, startpunt voor nieuwe projecten en bron voor updates aan lint‑ en formatregels.
Gebruik deze altijd als leidraad bij wijzigingen of nieuwe setups.
