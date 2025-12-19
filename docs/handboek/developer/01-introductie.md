---
title: Introductie · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Introductie
pagination_label: Introductie
description: Introductie - Als developer aan de slag met NL Design System
keywords:
  - introductie
  - developer
  - aan de slag
  - getting started
---

## Welkom developer 👋

Wanneer je aan de slag wilt met NL Design System om een nieuw project te bouwen, of een bestaande site of applicatie te renoveren, dan kun je aan de slag met de volgende stappen.

## Wat is NL Design System?

NL Design System zit net even anders in elkaar. Waar veel design systems een specifieke organisatie bedienen, werkt NL Design System met organisaties verspreid over de hele overheid: van gemeenten tot Rijksoverheid.

[Meer informatie over NL Design System](/project/over-nl-design-system/)

### Community en kernteam

Bij NL Design System werken specialisten uit overheidsorganisaties, van gemeenten tot de Rijksoverheid, samen aan betere digitale dienstverlening. Het [kernteam](/kernteam) faciliteert deze samenwerking. Tot de specialisten behoren bijvoorbeeld ontwerpers, ontwikkelaars en onderzoekers. Zij werken binnen hun eigen organisatie aan specifieke webprojecten en delen hun ervaringen in de community.

#### Wat doet de community?

Specialisten in de community denken samen na over vraagstukken, zoals de optimale inrichting van een Mijn Services-systeem of het bouwen van een toegankelijk meerstappenformulier. Daarnaast ontwikkelt de community ook de daadwerkelijke componenten en test deze in hun eigen websites en applicaties.

#### Wat doet het kernteam?

Het [kernteam](/project/kernteam) maakt samenwerking binnen de community mogelijk door onder meer de generieke architectuur op te zetten, het up-to-date houden van de [Github](/github) repositories en bijbehorende pipelines en het verbeteren van de kwaliteit van componenten middels het [estafettemodel](/handboek/estafettemodel). Daarnaast ondersteunen zij organisaties en hun leveranciers bij de implementatie en het gebruik van NL Design System.

:::info[Community sprints]
NL Design System faciliteert ook [Community sprints](https://www.nldesignsystem.nl/community/community-sprints/) waar minimaal twee teams uit de community samenwerken aan een gezamenlijk onderwerp. Iedereen die met hetzelfde onderwerp bezig is, kan zich aanmelden om via deze sprints bij te dragen.

- [MijnServices community](https://www.nldesignsystem.nl/community/community-sprints/mijn-services-community/). Hier wordt samengewerkt aan portalen voor overheidsorganisaties.
- [Rijkshuisstijl community](https://www.nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/). Hier wordt samengewerkt aan NL Design System-componenten voor projecten die moeten voldoen aan de Rijkshuisstijl.

:::

### Estafettemodel

Het estafettemodel van NL Design System is een aanpak om samen de beste en meest bruikbare componenten, patronen en richtlijnen te maken.

[Meer informatie over het estafettemodel](/handboek/estafettemodel)

## Ontwikkel een thema voor jouw organisatie

Als organisatie wordt je onderdeel van de community.
De community ontwikkelt _white-label_ componenten: dat betekent dat je nog je eigen invulling moet geven voor de stijl. Werk je voor een organisatie die al vaker projecten doet met NL Design System, dan is er waarschijnlijk al een thema beschikbaar. Ben je nog nieuw, dan kun je een eigen thema beginnen.

Een thema bestaat uit design tokens die in de eerste laag het fundament van de huisstijl beschrijven: denk aan kleuren en typografie. In een diepere laag kun je de designkeuzes van specifieke componenten uitwerken. In een thema leg je dus niet alleen de huisstijl vast, maar ook designkeuzes voor alle white-label componenten die je nodig hebt en waarvan de code reeds is ontwikkeld door teams van andere organisaties.

Speciaal voor thema's van overheidsorganisaties is de [themes repository](http://github.com/nl-design-system/themes) beschikbaar waar je gemakkelijk kunt samenwerken om je eigen thema te publiceren voor interne teams en leveranciers. Het is een handige manier om snel aan de slag te gaan, zonder al te veel onderhoud te moeten doen aan de infrastructuur: het NL Design System kernteam neemt die verantwoordelijkheid. Zo kunnen zelfs teams van overheden en diverse leveranciers samenwerken om een consistente implementatie van de huisstijl te bieden bij alle diensten die de design tokens van NL Design System gebruiken.
De thema's worden gecontroleerd door middel van visuele regressietesten

Samengevat is de techniek achter de thema's een verzameling JSON bestanden, waar je voor bestaande componenten de JSON-structuur moet aanhouden die de ontwikkelaars van de component ondersteunen, die met de tool [Style Dictionary](https://styledictionary.com) automatisch worden geconverteerd naar CSS variabelen (en diverse andere formaten). De build van het thema publiceer je als npm-pakketje, zodat developers het makkelijk kunnen installeren en de huisstijl op één plek beheerd kan worden. [`@utrecht/design-tokens`](https://www.npmjs.com/package/@utrecht/design-tokens) is een voorbeeld van zo'n npm-pakketje.

Wil je een thema voor een andere (commerciële) organisatie ontwikkelen, dan adviseren we om een eigen repository te beginnen op basis van [onze example template](https://github.com/nl-design-system/example). Daarmee kun je zelf de infrastructuur onderhouden, en behalve thema's kun je ook componenten ontwikkelen en publiceren.

## Begin met hergebruik van componenten uit de community

Teams die diensten ontwikkelen met NL Design System hebben natuurlijk al veel van de meestgebruikte componenten ontwikkeld en open source beschikbaar gesteld. [De NL Design System architectuur](02-architectuur.md) houdt in dat die teams de huisstijl buiten de code van de component opslaan in een losse configuratie, zodat de component hopelijk ook voor jou herbruikbaar terwijl jouw design anders is.

Wanneer je een inventarisatie maakt welke componenten je gebruikt en nog nodig hebt voor je project, dan kun je dat overzicht houden naast de [lijst met NL Design System componenten](/componenten/) van de community. Zo kun je snel zien welke componenten al bestaan, en of je in andere libraries nog aanvullingen moet vinden of zelf componenten moet ontwikkelen. Je kunt ook even contact opnemen met het kernteam om samen een _component assessment_ te doen van je project.

Elk project heeft natuurlijk zijn eigen voorkeur qua techniek of framework. De herbruikbare componenten zijn in de meeste gevallen in elk geval beschikbaar als "CSS component": er is dan een voorbeeld van de juiste HTML en welke class names je moet gebruiken, en er is een CSS bestand die je kan combineren met je eigen thema voor de vormgeving. Dit is de basis waarmee je een eigen implementatie voor een front-end framework of een backend template naar keuze kunt maken.

Veel componenten zijn ook bijvoorbeeld ook al beschikbaar als React component, zodat je ze snel via een npm-pakketje kunt installeren in je project. Je zult per component even in de documentatie moeten kijken wat de mogelijkheden zijn.

## Ontwikkel eigen componenten op basis van de NL Design System architectuur

Elk project heeft andere benodigdheden, daarom wil je waarschijnlijk de componenten die al in de community zijn ontwikkeld aanvullen met eigen componenten.

De doelstelling van NL Design System is om de kwaliteit van online dienstverlening te verbeteren door samenwerking. We bouwen op elkaars componenten door en samen bereiken we stapsgewijs een niveau dat voor kleinere teams en kleinere budgetten misschien niet haalbaar is. Zo krijgen burgers de geweldige gebruikerservaring waar ze recht op hebben, en kunnen kleine teams zich richten op innovatie zonder in te boeten op kwaliteit.

## Hoe blijf je op de hoogte?

- Praat mee op de Slack van Code for NL in onze kanalen, zoals bijvoorbeeld `#nl-design-system`. Je kunt jezelf uitnodigen via [praatmee.codefor.nl](https://praatmee.codefor.nl), kijk op [deze pagina](/slack) voor meer informatie over Slack.
- Elke twee weken presenteren we updates uit de community en voortgang van het kernteam in een publieke on-line Teams meeting: de [NL Design System Heartbeat](/heartbeat). Dit is de ideale manier om op de hoogte te blijven en gelijk vragen te kunnen stellen. Stuur ons een mailtje of een DM op Slack, dan sturen we je een uitnodiging.
