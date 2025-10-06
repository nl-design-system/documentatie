---
title: Github · Developer · Handboek
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

# Github

NL Design System maakt gebruik van [Github](https://github.com). Aangezien NL Design System Open Source is, heeft het een platform nodig om Open Source op te werken.

## Repositories

Er zijn [verschillende repositories](https://github.com/orgs/nl-design-system/repositories) aangemaakt om de projecten van NL Design System te hosten. Elke repository heeft zijn eigen doel, maar sommigen lijken ook op elkaar.

### Example repository

De [example repository](https://github.com/nl-design-system/example) is een template voor het bouwen van een storybook omgeving voor je eigen Community project. Veel bestaande community projecten zijn op basis hiervan gegenereerd.

### Community repositories

De community repositories zijn design systemen gemaakt en onderhouden door organisaties uit de community. Ze werken volgens [het estafettemodel](/handboek/estafettemodel) van NL Design System aan de Community fase. Wanneer één van de componenten uit de community tot Candidate of Hall-of-fame wordt uitgeroepen en doorontwikkeld dan kan de community deze gaan hergebruiken zonder dat er breaking changes ontstaan.

### Terraform

In de [Terraform repository](https://github.com/nl-design-system/terraform) worden alle wijzigingen omtrend de infrastructuur bijgehouden. Vanuit deze repository wordt de infrastructuur opgebouwd en gewijzigd. Hier kun je terecht als iemand schrijfrechten-toegang moet krijgen of als er een versienummer van bijvoorbeeld Node.js bijgewerkt moet worden.

### Documentatie

De [documentatie repository](https://github.com/nl-design-system/documentatie) bevat alle code voor het maken van deze website inclusief deze pagina. Mocht je ergens op de website een fout tegenkomen maak dan graag alvast een PR aan als je kan of bied het als suggestie aan in [de Slack community](/slack), NL Design system waardeert bijdragen enorm.

### Overige projecten

Er zijn nog meer projecten, hiervan staat het doel in de omschrijving of in het README.md bestand.

## Open source ontwikkeling & samenwerking

NL Design System communities ontwikkelen componenten, patronen en richtlijnen in open repositories op GitHub. ￼

- Door deze open aanpak kunnen verschillende overheidsorganisaties, ontwikkelaars en ontwerpers bijdragen, issues indienen en pull requests voorstellen. ￼
- Componentbibliotheken & theming / design tokens; er is een GitHub-repository nl-design-system/themes, bijvoorbeeld voor design tokens en theming, waarmee organisaties hun eigen stijl kunnen toepassen bovenop de standaardcomponenten. ￼

## Storybook integratie

- Via Storybook wordt de componentbibliotheek getoond en gedocumenteerd, met de code én voorbeelden. Repositories worden gekoppeld aan de Storybook-weergave. Bij de meeste repositories wordt het linkje naar storybook gedeeld. Storybook projecten worden gehost [op Vercel](/vercel).

Sommige repositories voor bijvoorbeeld gemeenten (zoals Den Haag en Rotterdam) gebruiken de standaardarchitectuur van NL Design System gebruiken, maar met eigen branding of specifieke componenten. ￼

- Deze modulaire aanpak wordt ondersteund via GitHub zodat verschillende partijen hun eigen extensies of varianten kunnen beheren in aparte repos. ￼

## Beheer van issues, roadmap en community backlog

- Op de organisatiepagina van NL Design System op GitHub is de “community backlog” zichtbaar, waar openstaande issues, feature requests en verbeteringen worden gevolgd. Zo kan de community meedenken over wat als volgende componenten of verbeteringen gebouwd moeten worden.

## Licentie & open toegang

- De repositories geven aan dat de code is onder de EUPL-licentie (European Union Public Licence) of vergelijkbare open licenties. ￼
- De open toegang maakt het mogelijk dat ook publieke instellingen en derden de code inspecteren, hergebruiken en bijdragen.

## Documentatie & richtlijnen

De richtlijnen, gebruiksaanwijzingen, toegankelijkheidsregels en voorbeelden worden vaak bijgehouden in de GitHub-repos (bijvoorbeeld markdown-bestanden, component documentatie, Storybook docs). ￼
Versiebeheer via Git (GitHub) zorgt ervoor dat wijzigingen aan documentatie en componenten historisch traceerbaar zijn.
