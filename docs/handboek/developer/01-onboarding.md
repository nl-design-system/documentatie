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

- Wat NL Design System is en hoe organisaties samen componenten en thema’s ontwikkelen.
- Hoe je componenten en thema’s kunt gebruiken en (door)ontwikkelen in je eigen project.

## Wat is NL Design System?

NL Design System werkt met organisaties verspreid over de hele overheid: van gemeenten tot de Rijksoverheid. Het is een vanuit de community opgebouwd design system, gebaseerd op design tokens. Componenten worden gebouwd met goede ondersteuning voor a11y en browser support.

Met NL Design System kun je componenten en thema’s gebruiken, maken en uitbreiden.

[Meer informatie over NL Design System](/handboek/introductie)

### Estafettemodel

Het estafettemodel van NL Design System is een aanpak om samen de beste en meest bruikbare componenten, patronen en richtlijnen te maken.

[Meer informatie over het estafettemodel](/handboek/estafettemodel)

## Samenwerking tussen organisaties

Op de [architectuurpagina](/handboek/developer/architectuur) staat beschreven wat de aanleiding is geweest om NL Design System in het leven te roepen en hoe het een oplossing biedt voor meerdere problemen die ontstaan bij het samenwerken van organisaties.

De onderstaande afbeelding geeft schematisch weer hoe een organisatie NL Design System kan gebruiken voor het bouwen van webpagina’s en tegelijkertijd kan samenwerken met andere organisaties.

![Schematische uitleg hoe organisaties samen kunnen werken](/handboek/samenwerking-organisaties.png)

Zoom hier in op Organisatie A. Zij hebben een webpagina gebouwd op basis van componenten uit meerdere stappen in het estafettemodel (community, candidate en hall-of-fame).

Op basis van het [Start-thema](/huisstijl/themas/start-thema) hebben zij Thema A gemaakt. Doordat zij hun designkeuzes hebben vastgelegd in Thema A, kan de huisstijl van Organisatie A worden toegepast op alle componenten die zij gebruiken, óók op de community component van Organisatie B.

## Componenten

Componenten zijn in de basis gebaseerd op HTML, CSS en JavaScript, maar kunnen daarnaast ook worden gebouwd met populaire front-end frameworks en met web components.

Componenten worden ontwikkeld in verschillende stappen aan de hand van het [estafettemodel](/handboek/estafettemodel).  
Je kunt de componenten terugvinden op de [componentenpagina](/componenten).

Tijdens elke stap van het estafettemodel zijn componenten bruikbaar. Je hoeft dus niet te wachten tot een component hall-of-fame status heeft bereikt, voordat je deze kunt gebruiken. Ook is het mogelijk om componenten [uit te breiden](/handboek/developer/component-uitbreiden).

:::info
Bij community componenten is de naam van de organisatie in de component verwerkt.
:::

### Updates doorvoeren

Het is niet verplicht om een community component direct te updaten naar de nieuwste versie of deze te vervangen door een candidate component of hall-of-fame component. Belangrijke wijzigingen kunnen worden toegepast op alle versies waarin een component zich bevindt.

Als ontwikkelaar houd je zelf de regie over wanneer je updates uitvoert en kun je de keuzes maken die het beste bij jouw project passen.

Als je overweegt om een component te gebruiken voor jouw project, kun je refereren naar [componenten kiezen](/handboek/componenten-kiezen).

Uiteraard is het ook mogelijk om zelf [een component te maken](/handboek/developer/componenten-maken).

## Thema’s

Componenten worden gevoed door de design tokens die in een thema zijn gedefinieerd. Je kunt een thema zien als de huisstijl van de organisatie waarvoor je werkt. Dit wordt goed geïllustreerd op de pagina [zelf een thema maken](/handboek/designer/zelf-thema-maken) voor designers, met de volgende afbeelding:

![Drie dezelfde interfaces. Eén zonder stijling. Twee met een eigen huisstijl](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_no-style-and-style.png)

Een thema zorgt ervoor dat dezelfde componenten op een pagina er voor jouw organisatie herkenbaar uitzien.

### Design tokens

Design keuzes worden vastgelegd in design tokens. Voor developers is het belangrijk om de design tokens te begrijpen en om conventies aan te houden.

- [Design token conventie](/handboek/developer/design-token-conventie/)

Wil je een nieuw thema introduceren? Ga dan verder op de pagina [thema maken](/handboek/developer/thema-maken).

## Zelf een pagina bouwen met NL Design System

Als je zelf een pagina wilt bouwen met NL Design System, kun je experimenteren met de beschikbare [componenten](/componenten) in je favoriete front-end framework. Als een component niet is geïmplementeerd in het framework dat je gebruikt, kun je altijd de HTML- en CSS-implementatie gebruiken.

Als je snel iets wilt uitproberen zonder een specifiek front-end framework te gebruiken, kun je het beste kijken naar [NL Design System gebruiken zonder front-end framework](/handboek/developer/zonder-front-end-framework).

## GitHub

Toegang tot GitHub is nodig om te werken aan bestaande repositories binnen `nl-design-system`. Neem hiervoor contact op met het kernteam. Het is mogelijk om alvast een pull request aan te maken op basis van de [instructies](https://github.com/nl-design-system/terraform/blob/main/docs/adding-users.md). Deze moet daarna worden goedgekeurd.

[Hoe en waarom NL Design System GitHub gebruikt](/github)

Voor kleinere bijdragen, zoals documentatie of kleine verbeteringen, is het meestal voldoende om direct een pull request te openen via een fork.

## Contactmogelijkheden

- Sluit aan bij de volgende [Developer Open Hour](/events/developer-open-hour)
- Stuur ons een bericht op Slack
- Stuur een e-mail naar info@nldesignsystem.nl
