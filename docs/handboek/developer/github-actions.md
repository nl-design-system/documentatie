---
title: GitHub Actions · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: GitHub Actions
pagination_label: GitHub Actions
description: Het werken met GitHub Actions binnen NL Design System
keywords:
  - GitHub
  - GitHub Actions
  - CI
  - Continuous Integration
  - CD
  - Continuous Delivery
---

# GitHub Actions versies updaten

De meeste GitHub Actions in voorbeelden, in bijvoorbeeld de GitHub docs, zien er ongeveer zo uit:

```yaml
- name: checkout
  uses: actions/checkout@v4
```

Hier wordt de **actions/checkout** GitHub Action gebruikt die getagged is met een `v4` tag. Dit is niet helemaal veilig en kan zorgen voor problemen die enorm veel tijd kosten om op te lossen.

Commit hashes kunnen dat niet en daarom pinnen we GitHub Actions op de bijbehorende commit hash. Dat ziet er zo uit:

```yaml
- name: checkout
  uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
```

Hier wordt weer de **actions/checkout** GitHub Action gebruikt maar nu gepinned op een commit hash `11bd71901bbe5b1630ceea73d27597364c9af683`. De volledige tag `v4.2.2` staat in een YAML comment achter de hash.

## Met hulp van Dependabot updaten

[Dependabot](https://docs.github.com/en/code-security/dependabot) (maar ook [Renovate](https://github.com/renovatebot/renovate)) zijn in staat om deze gepinde versies netjes te updaten. Er wordt per action een pull request geopend die je nadat deze gecontroleerd is kunt mergen. Zowel de commit hash als het versie nummer in de comment worden bijgewerkt.

## Handmatig een versie pinnen

Het kan ook voorkomen dat je handmatig een gepinde versie wilt bijwerken. Volg dan deze stappen:

1. Ga naar de pagina van de action op GitHub. Een action op GitHub kun je vinden door er simpelweg `https://github.com` voor te plakken. Zie bijvoorbeeld [`actions/checkout`](https://github.com/actions/checkout).
1. Onder “Releases” —op desktop in de zijbalk, op mobiel onderaan de pagina— klik je op de laatste (`latest`) versie.
1. Op de release pagina klik je op de short hash. Deze kun je vinden in de header naast de release datum, het aantal commits sinds deze release en de tag.
1. Op de pagina met de commit kun je de commit hash kopiëren uit de url of door op de copy knop bij de commit hash te klikken.

:::warning[Belangrijk]

Zorg ervoor dat je bij het updaten de hash **en** het versie nummer in de comment update

:::
