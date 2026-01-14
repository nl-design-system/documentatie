---
title: Linting en formatting van code · Developer · Handboek
hide_title: true
slug: /linting-en-formatting
hide_table_of_contents: false
sidebar_label: Linting en formatting
pagination_label: Linting en formatting
description: Linting en formatting van code
keywords:
  - lint
  - eslint
  - formatteren
  - formatting
  - prettier
---

# Linten en formatteren van code

In ons design system gebruiken we _linting_ en _formatting_ om consistente en leesbare code te garanderen.
Dit helpt om:

- kwaliteitsproblemen vroeg te signaleren;
- code reviews te versnellen (geen discussie over spaties en tabs);
- verschillen tussen ontwikkelaars en IDE's te minimaliseren.

Wat is het verschil?

- **Linting** controleert code op mogelijke fouten, anti‑patterns en overtredingen van afgesproken regels (bijv. ongebruikte variabelen, incorrecte afhankelijkheden)
- **Formatting** zorgt uitsluitend voor consistente opmaak (bijv. inspringen, quotes, regeleindes), zonder inhoudelijke logica te beoordelen

Beide vullen elkaar aan: linting bewaakt kwaliteit, formatting bewaakt consistentie.

## Gebruikte tooling

Hier sommen we op welke tooling we gebruiken en hoe het wordt gebruikt.

### ESLint

ESLint wordt gebruikt voor het linten van JavaScript/TypeScript code.
Het detecteert fouten en ongewenste patronen.
Het kan framework-specifieke (bijvoorbeeld React) regels toepassen.

**Configuratie en uitvoeren**

- Geconfigureerd in `eslint.config.mjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/eslint.config.mjs))
- Uitvoeren met `pnpm lint:js`

### Stylelint

Stylelint wordt gebruikt voor het linten van CSS en Sass (SCSS).

- Geconfigureerd in `.stylelintrc.json` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/.stylelintrc.json))
- Uitvoeren met `pnpm lint:css`

### Prettier

Prettier wordt gebruikt voor het formatteren van code.
Het wordt niet alleen toegepast op JavaScript en TypeScript, maar ook YAML en Markdown.

- Geconfigureerd in `prettier.config.mjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/prettier.config.mjs))
- Uitvoeren met `pnpm lint:prettier`

### markdownlint

markdownlint wordt gebruikt om Markdown-bestanden te controleren, bijvoorbeeld op headings, witruimte of het ontbreken van alt-teksten op plaatjes.

- Geconfigureerd in `.markdownlint.json` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/.markdownlint.json))
- Uitvoeren met `pnpm lint:md`

### npm-package-json-lint

Met npm-package-json-lint wordt de `package.json` gecontroleerd, bijvoorbeeld op het bestaan van een author en licentie.

- Geconfigureerd in `npmpackagejsonlint.config.cjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/npmpackagejsonlint.config.cjs))
- Uitvoeren met `pnpm lint:package-json`

## Automatisering

### Automatisering met husky en lint-staged {#lint-staged}

We gebruiken **husky** in combinatie met **lint‑staged** om deze checks uit te voeren vóórdat code wordt gecommit.

- **Husky** beheert Git hooks, waarmee je een commando kunt uitvoeren vóór committen
- **lint‑staged** is dat commando en runt linting en formatting alleen op gewijzigde bestanden

Het voordeel hiervan is dat je niet hoeft te herinneren om de check te runnen, je snelle feedback krijgt (in plaats van pas in CI), en dat er geen checks op ongewijzigde code worden gedaan.

Daar waar mogelijk, wordt gebruik gemaakt van functionaliteit om automatisch problemen op te lossen.

### IDE-instellingen

Voor een optimale developerervaring:

- Schakel **format on save** in en configureer het om Prettier uit te voeren
- Gebruik dezelfde [Node.js‑versie](/nodejs) als het project
- Zorg dat de lokale Prettier config wordt gebruikt

## Voorbeeld en referentie

Een volledig voorbeeld van de configuratie en best practices wordt onderhouden in de [example](https://github.com/nl-design-system/example) repository.

Deze repo dient als referentie‑implementatie, startpunt voor nieuwe projecten en bron voor updates aan lint‑ en formatregels.
Gebruik deze altijd als leidraad bij wijzigingen of nieuwe setups.
