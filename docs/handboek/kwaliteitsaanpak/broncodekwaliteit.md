---
title: Broncodekwaliteit
hide_title: true
hide_table_of_contents: false
sidebar_label: Broncodekwaliteit
pagination_label: Broncodekwaliteit
description: Dit is hoe we de broncodekwaliteit
keywords:
  - lint
  - editorconfig
---

# Broncodekwaliteit

Om de kwaliteit van de broncode te meten wordt in de `/package.json` van de repository een `lint` script gemaakt. Alle nodige stappen om de code van onvoldoende kwaliteit te herkennen worden via het `pnpm run lint` script uitgevoerd.

Gebruik GitHub Actions om `pnpm run --if-present lint` uit te voeren.

Configureer de lint-tools om geen warnings te geven, maar alleen fouten. Maak het via een GitHub Action verplicht in continuous integration dat alleen Pull Requests met 0 fouten gemerged mogen worden. Dat heeft meerdere voordelen:

- de monitoring is per definitie ingebouwd: de main branch heeft 0 fouten
- je wordt niet geconfronteerd met warnings in onderdelen van de code waar je geen ervaring mee hebt
- het is altijd duidelijk wie de verantwoordelijkheid heeft om de fout op te lossen

Gebruik waar mogelijk de standaard-tools:

- Gebruik een [EditorConfig](https://editorconfig.org) configuratie in `.editorconfig` voor basis-instellingen voor code-opmaak.
- Gebruik Prettier voor talen en file extensions waar we goede ervaringen mee hebben:
  - Markdown in `*.md` en `*.mdx` bestanden
  - ECMAScript in `*.mjs` bestanden
  - CommonJS in `*.cjs` bestanden
  - JavaScript in `*.js` bestanden
  - HTML in `*.html` bestanden
  - CSS in `*.css` bestanden
  - Java in `*.java` bestanden, met [`prettier-plugin-java`](http://npmjs.com/package/prettier-plugin-java)
  - PHP met [`wp-prettier`](https://www.npmjs.com/package/wp-prettier)
- Gebruik `prettier --check` voor Continuous Integration, zodat alle code consistente opmaak heeft.
- Gebruik `stylelint` voor Continuous Integration om CSS en SCSS te controleren.
- Gebruik `eslint` voor Continuous Integration om JavaScript te controleren.
- Gebruik `tsc --noEmit` voor Continuous Integration om TypeScript projecten te controleren.
- Gebruik [`lint-staged`](https://www.npmjs.com/package/lint-staged) zodat committers niet hoeven te wachten op een GitHub Action om te weten dat er nog een foutje is.
- Gebruik `package-json-lint` om `package.json` bestanden op consistentie te controleren.

Gebruik de configuratie voor de standaard-tools uit de [nl-design-system/example](http://github.com/nl-design-system/example) als basis.
