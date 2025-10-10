---
title: Github · Developer · Handboek
hide_title: true
slug: /github
hide_table_of_contents: false
sidebar_label: Github
pagination_label: Github
description: Waarom en hoe gebruikt NL Design System de tool Github?
keywords:
  - GitHub Actions
  - Github
  - Deployment
---

# GitHub

NL Design System is open source. Daarom is een open platform zoals GitHub de logische plek om samen te werken en code te delen.

## Repositories

Je vindt de projecten van NL Design System in [verschillende repositories op GitHub](https://github.com/orgs/nl-design-system/repositories). Elke repository heeft een eigen doel. Hieronder wordt een aantal repositories toegelicht.

### Example repository

De [example repository](https://github.com/nl-design-system/example) is een template waarmee je een Storybook-omgeving bouwt voor je eigen communityproject. Veel bestaande projecten gebruiken dit template als basis.

### Candidate

De [candidate repository](https://github.com/nl-design-system/candidate) wordt gebruikt voor het bouwen en onderhouden van de [Candidate components](/componenten/?status=CANDIDATE).

### Community repositories

Dit zijn design systems die organisaties uit de community zelf maken en onderhouden. Ze werken hierbij volgens het [estafettemodel](/handboek/estafettemodel). Groeit een component door naar de 'Candidate'- of 'Hall of Fame'-fase? Dan kan de community dit hergebruiken zonder dat er grote aanpassingen nodig zijn.

### Terraform

In de [Terraform-repository](https://github.com/nl-design-system/terraform) vind je alles over de infrastructuur. Vanuit hier wordt de infrastructuur gebouwd en beheerd. Je kunt hier terecht als je bijvoorbeeld schrijfrechten nodig hebt of een versienummer van Node.js wilt bijwerken.

### nldesignsystem.nl

Deze website, inclusief de pagina die je nu leest, staat in de [documentatie-repository](https://github.com/nl-design-system/documentatie). Kom je een fout tegen op de website? Maak dan een Pull Request (PR) aan als je weet hoe. Je kunt je suggestie ook delen in onze [Slack-community](/slack). Bijdragen worden enorm gewaardeerd.

### gebruikersonderzoeken.nl

De [gebruikersonderzoeken repository](https://github.com/nl-design-system/gebruikersonderzoeken) bevat de broncode voor de website [gebruikersonderzoeken.nl](https://gebruikersonderzoeken.nl). Op deze website vind je gebruikersonderzoek dat binnen de overheid is uitgevoerd. De site is herschreven en gebruikt nu componenten van het NL Design System.

### Theming en design tokens

De [`nl-design-system/themes` repository](<https://www.google.com/search?q=%5Bhttps://github.com/nl-design-system/themes%5D(https://github.com/nl-design-system/themes)>) is de centrale plek voor huisstijlen in de vorm van design tokens. Deze repository is bedoeld voor twee situaties:

- **Voor organisaties die een huisstijl publiceren:** Je kunt hier de design tokens van je huisstijl publiceren zonder dat je een volledige, eigen repository hoeft te onderhouden.
- **Voor organisaties die componenten ontwikkelen:** Je kunt hier controleren hoe jouw component eruitziet met de huisstijlen van andere organisaties.

Zo kunnen gemeenten als Den Haag en Rotterdam de standaardarchitectuur gebruiken, maar met hun eigen branding.

## Storybook-integratie

Storybook wordt gebruikt om de componentenbibliotheek te tonen en te documenteren met code en voorbeelden. De meeste repositories bevatten een link naar de bijbehorende Storybook, die wordt gehost [op Vercel](/vercel).

## Licentie

- De code in de repositories valt onder de EUPL-licentie (European Union Public Licence) of een vergelijkbare open licentie.
- Dankzij de open toegang kan iedereen de code inspecteren, hergebruiken en eraan bijdragen.

## Documentatie en versiebeheer

- Richtlijnen, handleidingen en voorbeelden worden bijgehouden in de GitHub-repositories zelf, bijvoorbeeld in markdown-bestanden.
- Doordat Git en GitHub voor versiebeheer worden gebruikt, zijn alle wijzigingen in de documentatie en componenten altijd terug te vinden.

## Alternatieven, zoals Gitlab

Kun je het NL Design System ook met GitLab gebruiken?
Ja, dat kan zeker. Een project als het PRA Design System heeft dit bijvoorbeeld al gedaan.

De community gebruikt momenteel vooral GitHub Actions. Hierdoor is er geen kant-en-klare implementatie beschikbaar voor GitLab CI Pipelines. Je staat er echter niet alleen voor.

Wil je hierover meedenken of heb je hulp nodig? Kom dan naar de [Developer Open Hour](/events/developer-open-hour) om er verder over te praten.
