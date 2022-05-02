---
title: NL Design System Architectuur
hide_title: true
hide_table_of_contents: false
sidebar_label: Architectuur
sidebar_position: 1
pagination_label: Architectuur
description: NL Design System Architectuur
keywords:
  - designer
  - architectuur
---

# Jouw project inrichten op de NL Design System architectuur

Twee teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende twee weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan. Daarna komen de componenten één voor één beschikbaar voor Rijkshuisstijl en voor projecten voor Gemeente Amsterdam. Hoe kunnen ze zo succesvol samenwerken, terwijl ze technisch andere eisen hebben? Hoe kunnen projecten samenwerken en ook een helemaal eigen visueel ontwerp realiseren?

De NL Design System architectuur is bedacht om organisaties die op het eerste gezicht weinig raakvlakken hebben, mogelijkheid te bieden samen te werken aan uitdagingen die om veel tijd en expertise vragen, zoals toegankelijke websites maken en teams binnen één organisatie laten werken met hun framework naar keuze.

Wij vroegen organisaties die al aan hun eigen design system werken of ze hun websites willen en kunnen bouwen met open source componenten die al door andere overheden worden gedeeld. De meeste organisaties hadden wensen waar het bestaande aanbod nog niet goed in voorzag.

**Hergebruik in uiteenlopende technieken:** Designs en design kits zijn er in alle soorten en maten. Sommige teams gebruiken Sketch, anderen Figma of Adobe XD. Anderen designen per project en hebben geen gedeelde basis waaruit design componenten worden hergebruikt.

**Doorlooptijd voor nieuwe componenten:** Een tweede bezwaar dat genoemd wordt: op het moment dat je voor je project een nieuw onderdeel wil toevoegen dat een intern team gauw nodig heeft, dan is het proces om de hele community daarbij te betrekken een te grote vertraging. Je wilt nog wel werk gedaan krijgen en niet alleen moeten overleggen met andere teams.

**Hergebruik voor andere huisstijlen:** Zonder ingrijpende wijzigingen van een open source component heb je bovendien nog een drempel: als je een _component_ van bijvoorbeeld Gemeente Amsterdam gebruikt, dan ziet jouw design er automatisch een beetje uit zoals de website van Amsterdam. Om jouw eigen huisstijl te realiseren op basis van een design component van een ander, moet je vaak een kopie maken en zelf naar eigen smaak doorontwikkelen.

Het veelgehoorde argument om een open source project te gebruiken vanwege de "grote community" zodat je toegang hebt tot veel kennis en support op internet, gaat niet meer op wanneer je een kopie moet maken. Die kopie is al gauw achterhaald ten opzichte van de ontwikkelingen van een groot open source project. Je wilt juist werken met een centraal open source project waar je een verbetering aan kan toevoegen wanneer je die zelf nodig hebt, waar vervolgens de hele community van kan profiteren. Maar daarna gaan de ontwikkelingen gewoon door, en jouw verbetering blijft doorleven in het project.

We vroegen deze organisaties ook of ze hun eigen design system werk uit Git als open source op internet wilden zetten. Veelgenoemd bezwaar was: onze componenten zijn niet "algemeen" genoeg, daar hebben anderen toch niets aan! Ook: wij hebben helemaal geen tijd om allemaal bijdragen van vrijwilligers te beoordelen in ons project. En wat als ze bugs veroorzaken?!

Wij hebben geluisterd naar alle wensen en dit jaar zijn we begonnen met enkele teams om een architectuur te beproeven die bovenstaande wensen mogelijk moet maken.

## Namen van componenten

Om vindbaarheid en hergebruik van componenten makkelijker te maken, stellen we voor om zoveel mogelijk de standaard HTML/CSS namen te gebruiken voor componenten en component onderdelen. Deze naamgeving kan dan ook overgenomen worden in de ontwikkeling van het component.

### Prefix

Omdat we NL Design System opbouwen met meerdere organisatie als een soort estafette model, gebruiken we prefixes voor alle naamgeving.
Componenten die in meerdere organisaties succesvol in productie zijn gebruikt hebben de prefix `nl-`.
Als je een component van een andere organisatie inzet zal de naam van het component misschien beginnen met `organisatieX-`. Dat is logischer dan je misschien denkt, want dat betekend dat zij in principe het onderhoud en doorontwikkeling aan het component ondersteunen. Gebruik van dit component door je eigen huisstijl erop toe te passen kan dus gewoon zonder de prefix te veranderen.
Mocht je juist een eigen component ontwikkelen, dan gebruik je juist je eigen prefix `mijnorganisatie-` om conflicten met anderen (zeker later in code) te voorkomen.

## Configuratie opties delen tussen design en development

Component design tokens beschrijven de anatomy van dat component en de verschillende configuraties die daar op mogelijk zijn. Zo heeft een knop bijvoorbeeld een rand eromheen, of juist niet. Heb je buttons voor verschillende situaties, primaire acties en standaard acties. Door deze onderdelen en de bedoeling ervan een naam te geven die zowel gebruikt wordt voor design als development maak je hergebruik en herconfiguratie van de stijl makkelijker.

Door ook design tokens voor je huisstijl te definieren, `eng-rood`, `blij-paars` of `blauw-20` en `blauw-40` bijvoorbeeld, beschrijf je ook welke kleuren er in een applicatie of huisstijl beschikbaar zijn. Door alleen deze toe te wijzen aan de component onderdelen, kun je zorgen voor een consistente ervaring van de eindgebruiker.

## Style dictionary

Om de tokens als één bron van waarheid beschikbaar te hebben, ongeacht welke technologie wordt gebruikt, gebruiken wij [Style Dictionary](https://amzn.github.io/style-dictionary/#/tokens). Dit is een technische manier om in geneste tekst de tokens en waardes te beschrijven. In Figma is er zelfs een [design token plugin](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) die je kunt gebruiken.
