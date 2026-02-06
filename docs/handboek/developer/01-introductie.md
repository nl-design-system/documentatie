---
title: Introductie developers
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

# Welkom developer 👋

Leuk dat je er bent! Of je nu mee wilt bijdragen aan NL Design System of simpelweg even wilt rondneuzen, als developer is dit een goed startpunt.

Op deze pagina leer je:

- Wat NL Design System is en hoe organisaties samen componenten en thema’s ontwikkelen.
- Hoe je componenten en thema’s kunt gebruiken en (door)ontwikkelen in je eigen project.

Het is handig om vooraf de onboarding video te bekijken, in zijn geheel of vanaf de informatie voor developers:

[Onboarding sessie voor NL Design System (46:57)](https://youtu.be/Yh4NqpphJQ4?si=scGXIiWZPJqBno5A&t=2813)

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

Componenten worden ontwikkeld in verschillende stappen aan de hand van het estafettemodel. Je kunt de componenten terugvinden op de componentenpagina￼.

### Hergebruik van componenten uit de community

Binnen de NL Design System-community zijn al veel veelgebruikte componenten ontwikkeld en als open source beschikbaar gesteld. Dankzij de NL Design System architectuur is de huisstijl losgekoppeld van de componentcode en vastgelegd in een aparte configuratie. Hierdoor kun je componenten hergebruiken, ook als jouw visuele ontwerp afwijkt.

Tijdens elke stap van het estafettemodel zijn componenten bruikbaar. Je hoeft dus niet te wachten tot een component een hall-of-fame status heeft bereikt voordat je deze kunt inzetten. Ook is het mogelijk om bestaande componenten uit te breiden￼voor jouw specifieke situatie.

Wanneer je in kaart brengt welke componenten je nodig hebt voor je project, kun je dit overzicht naast de lijst met NL Design System componenten￼leggen. Zo zie je snel welke componenten al beschikbaar zijn en waar je eventueel zelf nog iets moet ontwikkelen. In sommige gevallen kan het helpen om samen met het kernteam een component assessment te doen.

De meeste componenten zijn minimaal beschikbaar als CSS-component. Dat betekent dat er voorbeeld-HTML is met bijbehorende class names, en een CSS-bestand dat je kunt combineren met je eigen thema. Dit vormt een goede basis om componenten te implementeren in een front-end framework of backend templating-oplossing naar keuze. Voor sommige componenten zijn daarnaast ook kant-en-klare implementaties beschikbaar, bijvoorbeeld als React-component via een npm-pakket. Raadpleeg hiervoor altijd de documentatie van de betreffende component.

:::info
Bij community componenten is de naam van de organisatie onderdeel van de componentnaam.
:::

## Ontwikkel eigen componenten op basis van de NL Design System architectuur

Elk project heeft andere benodigdheden, daarom wil je waarschijnlijk de componenten die al in de community zijn ontwikkeld aanvullen met eigen componenten.

De doelstelling van NL Design System is om de kwaliteit van online dienstverlening te verbeteren door samenwerking. We bouwen op elkaars componenten door en samen bereiken we stapsgewijs een niveau dat voor kleinere teams en kleinere budgetten misschien niet haalbaar is. Zo krijgen burgers de geweldige gebruikerservaring waar ze recht op hebben, en kunnen kleine teams zich richten op innovatie zonder in te boeten op kwaliteit.
Op de onderstaande pagina vind je hoe je dit kunt doen.

[Zelf componenten maken](handboek/developer/componenten-maken)

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

Wil je een nieuw thema introduceren? Ga dan verder op de pagina [thema maken](/handboek/developer/werken-met-nl-design-system/thema-maken).

## Zelf een pagina bouwen met NL Design System

Als je zelf een pagina wilt bouwen met NL Design System, kun je experimenteren met de beschikbare [componenten](/componenten) in je favoriete front-end framework. Als een component niet is geïmplementeerd in het framework dat je gebruikt, kun je altijd de HTML- en CSS-implementatie gebruiken.

Als je snel iets wilt uitproberen zonder een specifiek front-end framework te gebruiken, kun je het beste kijken naar [NL Design System gebruiken zonder front-end framework](/handboek/developer/zonder-front-end-framework).

## GitHub

Toegang tot GitHub is nodig om te werken aan bestaande repositories binnen `nl-design-system`. Neem hiervoor contact op met het kernteam. Het is mogelijk om alvast een pull request aan te maken op basis van de [instructies](https://github.com/nl-design-system/terraform/blob/main/docs/adding-users.md). Deze moet daarna worden goedgekeurd.

[Hoe en waarom NL Design System GitHub gebruikt](/github)

Voor kleinere bijdragen, zoals documentatie of kleine verbeteringen, is het meestal voldoende om direct een pull request te openen via een fork.

### Community en kernteam

Bij NL Design System werken specialisten uit overheidsorganisaties, van gemeenten tot de Rijksoverheid, samen aan betere digitale dienstverlening. Het [kernteam](/project/kernteam) faciliteert deze samenwerking. Tot de specialisten behoren bijvoorbeeld ontwerpers, ontwikkelaars en onderzoekers. Zij werken binnen hun eigen organisatie aan specifieke webprojecten en delen hun ervaringen in de community.

#### Wat doet de community?

Specialisten in de community denken samen na over vraagstukken, zoals de optimale inrichting van een Mijn Services-systeem of het bouwen van een toegankelijk meerstappenformulier. Daarnaast ontwikkelt de community de daadwerkelijke componenten en test deze in hun eigen websites en applicaties.

#### Wat doet het kernteam?

Het [kernteam](/project/kernteam) maakt samenwerking binnen de community mogelijk door onder meer de generieke architectuur op te zetten, het up-to-date houden van de [Github](/github) repositories en bijbehorende pipelines en het verbeteren van de kwaliteit van componenten middels het [estafettemodel](/handboek/estafettemodel). Daarnaast ondersteunen zij organisaties en hun leveranciers bij de implementatie en het gebruik van NL Design System.

:::info[Community sprints]
NL Design System faciliteert [Community sprints](https://www.nldesignsystem.nl/community/community-sprints/) waar minimaal twee teams uit de community samenwerken aan een gezamenlijk onderwerp. Iedereen die met hetzelfde onderwerp bezig is, kan zich aanmelden om via deze sprints bij te dragen.

- [MijnServices community](https://www.nldesignsystem.nl/community/community-sprints/mijn-services-community/). Hier wordt samengewerkt aan portalen voor overheidsorganisaties.
- [Rijkshuisstijl community](https://www.nldesignsystem.nl/community/community-sprints/rijkshuisstijl-community/). Hier wordt samengewerkt aan NL Design System-componenten voor projecten die moeten voldoen aan de Rijkshuisstijl.

:::

## Aan de slag

Op de volgende pagina leer je hoe je als developer aan de slag kan gaan met NL Design System.

[Werken met NL Design System als developer](/handboek/developer/werken-met-nl-design-system)

## Hoe blijf je op de hoogte?

- Praat mee op de Slack van Code for NL in onze kanalen, zoals bijvoorbeeld `#nl-design-system`. Je kunt jezelf uitnodigen via [praatmee.codefor.nl](https://praatmee.codefor.nl), kijk op [deze pagina](/slack) voor meer informatie over Slack.
- Sluit aan bij de volgende [Developer Open Hour](/events/developer-open-hour)
- Elke twee weken presenteren we updates uit de community en voortgang van het kernteam in een publieke on-line Teams meeting: de [NL Design System Heartbeat](/events/heartbeat/overzicht). Dit is de ideale manier om op de hoogte te blijven en gelijk vragen te kunnen stellen. Stuur ons een mailtje of een DM op Slack, dan sturen we je een uitnodiging.

- Stuur een e-mail naar info@nldesignsystem.nl
