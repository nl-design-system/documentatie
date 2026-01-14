---
title: Onboarding developers
hide_title: true
hide_table_of_contents: false
sidebar_label: Onboarding
pagination_label: Onboarding
description: Onboarding - Als developer aan de slag met NL Design System
keywords:
  - introductie
  - developer
  - aan de slag
  - getting started
---

# Welkom developer 👋

Leuk dat je er bent! Of je nu mee wilt bijdragen aan NL Design System of simpelweg even wilt rondneuzen, als developer is dit een goed startpunt.

Op deze pagina leer je:

- Dat NL Design System uit componenten en thema’s bestaat.
- Hoe je componenten en thema’s kunt gebruiken en (door)ontwikkelen in je eigen project.

## Wat is NL Design System?

NL Design System werkt met organisaties verspreid over de hele overheid: van gemeenten tot Rijksoverheid. Het is een vanuit de community opgebouwd design system, gebaseerd op design tokens. Componenten worden gebouwd met goede ondersteuning voor a11y en browser support.

Met NL Design system kun je componenten en thema’s zowel gebruiken, maken als uitbreiden.

[Meer informatie over NL Design System](/handboek/introductie)

### Estafettemodel

Het estafettemodel van NL Design System is een aanpak om samen de beste en meest bruikbare componenten, patronen en richtlijnen te maken.

[Meer informatie over het estafettemodel](/handboek/estafettemodel)

## Samenwerking tussen organisaties

Op de [architectuur](/handboek/developer/architectuur) pagina staat beschreven wat de aanleiding is geweest om NL Design System in het leven te roepen en dat het een goede oplossing is voor meerdere problemen die ontstaan bij het samenwerken van organisaties.

De onderstaande afbeelding geeft schematisch weer hoe een organisatie NL Design System kan gebruiken voor het bouwen van webpagina’s en tegelijkertijd samen kan werken met andere organisaties.

![schematische uitleg hoe organisaties samen kunnen werken](/handboek/samenwerking-organisaties.png)

Zoom hier in op Organisatie A. Ze hebben een webpagina gebouwd op basis van componenten uit meerdere stappen in het Estafettemodel (community, candidate en hall-of-fame).

Op basis van [Start thema](/huisstijl/themas/start-thema) hebben ze Thema A gemaakt.
Doordat ze hun design keuzes vastgelegd hebben in Thema A kan de huisstijl van Organisatie A toegepast worden op alle componenten die zij gebruiken, óók de community component van Organisatie B.

## Componenten

De componenten zijn in de basis gebaseerd op HTML, CSS en Javascript, maar kunnen daarnaast ook gebouwd worden met populaire front-end frameworks en door middel van web components.

Componenten worden ontwikkeld in verschillende stappen aan de hand van het [estafettemodel](/handboek/estafettemodel).
Je kunt de componenten terugvinden op de [componenten pagina](/componenten)

Tijdens elke stap van het estafettemodel kunnen componenten gebruikt worden. Je hoeft dus niet te wachten tot een component hall-of-fame is voordat je het kan gebruiken. Ook is het mogelijk om componenten [uit te breiden](/handboek/developer/component-uitbreiden).
Bij het gebruiken van een community component is de naam van de organisatie in de component verwerkt.

### Updates doorvoeren

Het is niet verplicht om van een community component gelijk te updaten naar de nieuwste versie, of deze te vervangen door een candidate of hall-of-fame component. Belangrijke wijzigingen kunnen nog toegepast worden op alle versies waarin een component zich bevindt. Als ontwikkelaar blijf je de regie houden over wanneer je updates uitvoert en kun je de keuzes maken die het beste bij jouw project passen.

Als je overweegt om een component te gebruiken voor jouw project kun je refereren naar [componenten kiezen](/handboek/componenten-kiezen)

Uiteraard is het mogelijk om zelf [een component te maken](/handboek/developer/componenten-maken)

## Thema’s

Componenten worden gevoed door de design tokens die in een thema gedefinieerd worden. Je kan een thema zien als de huisstijl van de organisatie waar je voor werkt. Dit wordt goed geïllustreerd op de [zelf een thema maken](/handboek/designer/zelf-thema-maken) pagina voor designers met de volgende afbeelding:
![Drie dezelfde interfaces. Eén zonder stijling. Twee met een eigen huisstijl](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_no-style-and-style.png)
Een thema zorgt ervoor dat dezelfde componenten op een pagina er voor jouw organisatie herkenbaar uit gaan zien.

### Design tokens

- [design token conventie](/handboek/developer/design-token-conventie/)

Wil je een nieuw thema introduceren? Ga dan verder op de pagina [thema maken](/handboek/developer/thema-maken).

## Zelf een pagina bouwen met NL Design System

Als je zelf een pagina wilt bouwen met NL Design System dan kun je zelf experimenteren met de beschikbare [componenten](/componenten) in jouw favoriete web framework. Als een component niet geïmplementeerd is in het framework dat je zoekt, dan kun je altijd nog de HTML/CSS implementatie gebruiken.

Als je snel iets wilt uitproberen zonder een specifiek framework te gebruiken kun je het beste kijken naar [NL Design System gebruiken zonder front-end framework](/handboek/developer/zonder-front-end-framework).

## Github

Toegang tot Github is nodig om te werken aan bestaande repositories binnen `nl-design-system`. Neem hiervoor contact op met het kernteam. Het is mogelijk om alvast een pull-request aan te maken op basis van de [instructies](https://github.com/nl-design-system/terraform/blob/main/docs/adding-users.md). Deze moet daarna goedgekeurd worden.

[hoe en waarom NL Design System Github gebruikt](/github)

Voor kleinere bijdragen, zoals documentatie of kleine verbeteringen, is het meestal voldoende om direct een pull request te openen d.m.v. een fork.

## Contactmogelijkheden

- Sluit aan bij de volgende [Developer Open Hour](/events/developer-open-hour)
- Stuur ons een berichtje op Slack
- Stuur een mailtje naar info@nldesignsystem.nl
