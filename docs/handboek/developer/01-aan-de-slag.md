---
title: Aan de slag · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Aan de slag
pagination_label: Aan de slag
description: Als developer aan de slag met NL Design System
keywords:
  - developer
  - aan de slag
  - getting started
---

# Als developer aan de slag met NL Design System

Wanneer je aan de slag wilt met NL Design System om een nieuw project te bouwen, of een bestaande site of applicatie te renoveren, dan kun je aan de slag met de volgende stappen.

## Ontwikkel een thema voor jouw organisatie

De community ontwikkelt _white-label_ componenten: dat betekent dat je nog je eigen invulling moet geven voor de stijl. Werk je voor een organisatie die al vaker projecten doet met NL Design System, dan is er waarschijnlijk al een thema beschikbaar. Ben je nog nieuw, dan kun je een eigen thema beginnen.

Een thema bestaat uit design tokens die in de eerste laag het fundament van de huisstijl beschrijven: denk aan kleuren en typografie. In een diepere laag kun je de designkeuzes van specifieke componenten uitwerken. In een thema leg je dus niet alleen de huisstijl vast, maar ook designkeuzes voor alle white-label componenten die je nodig hebt en waarvan de code reeds is ontwikkeld door teams van andere organisaties.

Speciaal voor thema's van overheidsorganisaties hebben we een repository op GitHub waar je gemakkelijk kunt samenwerken om je eigen thema te publiceren voor interne teams en leveranciers. Het is een handige manier om snel aan de slag te gaan, zonder al te veel onderhoud te moeten doen aan de infrastructuur: het NL Design System kernteam neemt die verantwoordelijkheid. Zo kunnen zelfs teams van overheden en diverse leveranciers samenwerken om een consistente implementatie van de huisstijl te bieden bij alle diensten die de design tokens van NL Design System gebruiken.

Samengevat is de techniek achter de thema's een verzameling JSON bestanden, waar je voor bestaande componenten de JSON-structuur moet aanhouden die de ontwikkelaars van de component ondersteunen, die met de tool [Style Dictionary](https://amzn.github.io/style-dictionary/) automatisch worden geconverteerd naar CSS variabelen (en diverse andere formaten). De build van het thema publiceer je als npm-pakketje, zodat developers het makkelijk kunnen installeren en de huisstijl op één plek beheerd kan worden. [`@utrecht/design-tokens`](https://www.npmjs.com/package/@utrecht/design-tokens) is een voorbeeld van zo'n npm-pakketje.

Wil je een thema voor een andere (commerciële) organisatie ontwikkelen, dan adviseren we om een eigen repository te beginnen op basis van [onze template](https://github.com/nl-design-system/example). Daarmee kun je zelf de infrastructuur onderhouden, en behalve thema's kun je ook componenten ontwikkelen en publiceren.

## Begin met hergebruik van componenten uit de community

Teams die diensten ontwikkelen met NL Design System hebben natuurlijk al veel van de meestgebruikte componenten ontwikkeld en open source beschikbaar gesteld. [De NL Design System architectuur](02-architectuur.md) houdt in dat die teams de huisstijl buiten de code van de component opslaan in een losse configuratie, zodat de component hopelijk ook voor jou herbruikbaar terwijl jouw design anders is.

Wanneer je een inventarisatie maakt welke componenten je gebruikt en nog nodig hebt voor je project, dan kun je dat overzicht houden naast de [lijst met NL Design System componenten](/componenten/) van de community. Zo kun je snel zien welke componenten al bestaan, en of je in andere libraries nog aanvullingen moet vinden of zelf componenten moet ontwikkelen. Je kunt ook even contact opnemen met het kernteam om samen een _component assessment_ te doen van je project.

Elk project heeft natuurlijk zijn eigen voorkeur qua techniek of framework. De herbruikbare componenten zijn in de meeste gevallen in elk geval beschikbaar als "CSS component": er is dan een voorbeeld van de juiste HTML en welke class names je moet gebruiken, en er is een CSS bestand die je kan combineren met je eigen thema voor de vormgeving. Dit is de basis waarmee je een eigen implementatie voor een front-end framework of een backend template naar keuze kunt maken.

Veel componenten zijn ook bijvoorbeeld ook al beschikbaar als React component, zodat je ze snel via een npm-pakketje kunt installeren in je project. Je zult per component even in de documentatie moeten kijken wat de mogelijkheden zijn.

## Ontwikkel eigen componenten op basis van de NL Design System architectuur

Elk project heeft andere benodigdheden, daarom wil je waarschijnlijk de componenten die al in de community zijn ontwikkeld aanvullen met eigen componenten.

De doelstelling van NL Design System is om de kwaliteit van online dienstverlening te verbeteren door samenwerking. We bouwen op elkaars componenten door en samen bereiken we stapsgewijs een niveau dat voor kleinere teams en kleinere budgetten misschien niet haalbaar is. Zo krijgen burgers de geweldige gebruikerservaring waar ze recht op hebben, en kunnen kleine teams zich richten op innovatie zonder in te boeten op kwaliteit.

## Hoe blijf je op de hoogte?

- Praat mee op de Slack van Code for NL in onze kanalen van `#nl-design-system`. Je kunt jezelf uitnodigen via [praatmee.codefor.nl](https://praatmee.codefor.nl).
- Elke twee weken presenteren we updates uit de community en voortgang van het kernteam in een publieke on-line Teams meeting: de NL Design System Heartbeat. Dit is de ideale manier om op de hoogte te blijven en gelijk vragen te kunnen stellen. Stuur ons een mailtje of een DM op Slack, dan sturen we je een uitnodiging.
- Als afwisseling op de heartbeat een twee-wekelijks nieuwsbrief, je kunt je inschrijven via het formulier onderin [deze pagina bij Gebruiker Centraal](https://designsystem.gebruikercentraal.nl).
