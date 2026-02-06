---
title: CI/CD
hide_title: true
hide_table_of_contents: false
sidebar_label: CI/CD
pagination_label: CI/CD
description: Uitleg over de CI/CD pipelines van NL Design System
keywords:
  - ci
  - cd
---

# Contiuous Integration en Continuous Delivery (CI/CD)

Gebruik voor de CI/CD pipeline GitHub Actions.

<!-- NL Design System vs. ICTU standaard tools -->

GitHub Actions past goed bij de open source samenwerking op basis van de meestgebruikte clouddiensten. GitHub Actions past hier beter bij dan Azure DevOps, omdat het gebruikers beter in staat zijn alle functionaliteit over te nemen wanneer ze een fork maken.

Elke repository met software builds heeft de pipelines vastgelegd in de `.github/workflows/` directory.

Voor deze infrastructuur is een template repository beschikbaar, met een voorbeeld van GitHub Actions. Zie daarvoor de [`.github/workflows/` directory van de example repository](https://github.com/nl-design-system/example/tree/main/.github/workflows).

Gebruik een GitHub Action voor changeset voor continuous delivery. Lees meer op de NL Design System website: [Versionering: Hoe beheer je pakketversies?](https://nldesignsystem.nl/handboek/developer/changesets/)

Elke release moet een changelog hebben, en een nieuw versienummer. Voeg deze informatie toe in changeset bestanden, als onderdeel van de pull request met wijzigingen.

Voeg een changeset-bestand toe bij elke pull request, die een changelog-entry bevat voor de nieuwe release. Gebruik een GitHub Action om te controleren dat elke Pull Request een changeset bevat. Zie bijvoorbeeld [`changeset-status.yml`](https://github.com/nl-design-system/candidate/blob/main/.github/workflows/changeset-status.yml).

Gebruik een GitHub Action om een pull request te maken die een release aanmaakt.

Gebruik een GitHub Action om met changeset de stappen voor de release uit te voeren:

- bepaal nieuwe versienummers voor alle packages die een nieuwe release krijgen, op basis van de semantic versioning instellingen in de changesets.
- Maak een entry in elke changelog, met de wijzigingen die zijn beschreven in de changeset bestanden.
- maak Git tags aan met de versienummer
- publiceer npm packages in de npm registry
- maak GitHub Releases aan
