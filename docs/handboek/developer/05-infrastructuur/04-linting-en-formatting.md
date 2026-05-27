---
title: Linting en code formatting
hide_title: true
hide_table_of_contents: false
sidebar_label: Linting en code formatting
pagination_label: Linting en code formatting
description: Linting en formatting van code
slug: /linting-en-code-formatting/
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

Voordelen van deze tools:

- Je kunt sneller werken, omdat veel tools de code automatisch kunnen aanpassen.
- Je kunt sneller code lezen en begrijpen, wanneer code consistent en voorspelbaar is.
- Pull requests reviewen is minder werk, als over inspringing en opmaak geen discussie is.
- De informatie in [`git blame`](https://git-scm.com/docs/git-blame) is duidelijker, wanneer code niet steeds wordt aangepast voor betere opmaak.

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

Gebruik [Prettier](https://prettier.io/) voor het formatteren van code.
Het wordt niet alleen toegepast op JavaScript en TypeScript, maar ook YAML en Markdown.

- Geconfigureerd in `prettier.config.mjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/prettier.config.mjs))
- Uitvoeren met `pnpm lint:prettier`

Prettier ondersteunt standaard al veel talen, maar er zijn ook nog uitbreidingen beschikbaar:

- Java in `*.java` bestanden, met [`prettier-plugin-java`](http://npmjs.com/package/prettier-plugin-java)
- PHP in `*.php` bestanden, met [`wp-prettier`](https://www.npmjs.com/package/wp-prettier)

Voordelen:

- Je hebt minder last van merge conflicts, wanneer code consistent wordt opgemaakt.

### markdownlint

[markdownlint](https://github.com/DavidAnson/markdownlint) wordt gebruikt om `.md`-bestanden te controleren. Dat is met name voor documentatie.

- Geconfigureerd in `.markdownlint.json` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/.markdownlint.json))
- Uitvoeren met `pnpm lint:md`

Voordelen:

- Je kunt toegankelijkheid bij de bron controleren, zoals kopniveau's en alt-teksten.
- Je kunt problemen in Markdown-files vinden, bijvoorbeeld wanneer je teksten plakt met tekens die iets speciaals doen in Markdown.
- Als je ook Prettier gebruikt, dan gaan de meeste checks voor consistent witruimte gebruiken automatisch goed.

Als je in jouw situatie veel onnodige foutmeldingen krijgt, dan kun je het volgende doen:

- Wanneer je een onnodige melding krijgt, plaats dit voor de tekstregel waar het om gaat: `<!-- markdownlint-disable-line -->`.
- Wanneer je bestanden aangeleverd krijgt, waar je geen wijziging in wilt doen. Plaats dan bovenaan: `<!-- markdownlint-disable -->`.
- Wanneer in jouw project een [Markdownlint Rule](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md) meer problemen veroorzaakt dan oplost, schakel dan die Rule dan uit voor je hele project in `.markdownlint.json`.
- Wanneer je hele bestanden en mappen negeren wilt negeren, voeg de namen dan toe aan `.markdownlintignore`.

### npm-package-json-lint

Met [npm-package-json-lint](https://npmpackagejsonlint.org/) wordt de `package.json` gecontroleerd, bijvoorbeeld op het bestaan van een author.
Voor NL Design System wordt onder andere bijgehouden dat de licentie op [EUPL](https://nldesignsystem.nl/blog/licentiekeuze-nl-design-system/) staat.

- Geconfigureerd in `npmpackagejsonlint.config.cjs` ([voorbeeld](https://github.com/nl-design-system/example/blob/main/npmpackagejsonlint.config.cjs))
- Uitvoeren met `pnpm lint:package-json`

### EditorConfig

Gebruik een [EditorConfig](https://editorconfig.org/) configuratie in .editorconfig voor basis-instellingen voor code-opmaak.

### Git

Gebruik consistent regeleinden. Configureer Git om de juiste regeleinden te gebruiken via `.gitattributes`. Je vind een voorbeeld van [`.gitattributes` in de example repository](https://github.com/nl-design-system/utrecht/blob/main/.gitattributes).

## Automatisering

### Automatisering met husky en lint-staged \{#lint-staged\}

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
