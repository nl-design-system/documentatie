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

De NL Design System architectuur is bedacht om organisaties die op het eerste gezicht weinig raakvlakken hebben, mogelijkheid te bieden samen te werken aan uitdagingen die om veel tijd en expertise vragen, zoals toegankelijke websites maken en teams binnen één organisatie laten werken met hun ontwerp programmatuur naar keuze.

Wij vroegen organisaties die al aan hun eigen design system werken of ze hun websites willen en kunnen bouwen met open source componenten die al door andere overheden worden gedeeld. De meeste organisaties hadden wensen waar het bestaande aanbod nog niet goed in voorzag.

**Hergebruik in uiteenlopende technieken:** Designs en design kits zijn er in alle soorten en maten. Sommige teams gebruiken Sketch, anderen Figma of Adobe XD. Anderen ontwerpen per project en hebben geen gedeelde basis waaruit ontwerp componenten worden hergebruikt.

**Doorlooptijd voor nieuwe componenten:** Een tweede bezwaar dat genoemd wordt: op het moment dat je voor jouw project een nieuw onderdeel wil toevoegen dat een intern team snel nodig heeft, dan is het proces om de hele community daarbij te betrekken een te grote vertraging. Je wilt nog wel werk gedaan krijgen en niet alleen moeten overleggen met andere teams.

**Hergebruik voor andere huisstijlen:** Zonder ingrijpende wijzigingen van een open source component heb je bovendien nog een drempel: als je een _component_ van bijvoorbeeld Gemeente Amsterdam gebruikt, dan ziet jouw design er automatisch een beetje uit zoals de website van Amsterdam. Om jouw eigen huisstijl te realiseren op basis van een design component van een ander, moet je vaak een kopie maken en zelf naar eigen smaak doorontwikkelen.

Het veelgehoorde argument een open source project te gebruiken vanwege de “grote community” zodat je toegang hebt tot veel kennis en support op internet, gaat niet meer op wanneer je een kopie moet maken. Die kopie is al gauw achterhaald ten opzichte van de ontwikkelingen van een groot open source project. Je wilt juist werken met een centraal open source project waar je een verbetering aan toevoegt wanneer je deze zelf nodig hebt, waar vervolgens de hele community van profiteert. Hierna gaan de ontwikkelingen gewoon door, en jouw verbetering blijft voortleven in het project.

We vroegen organisaties ook of ze hun eigen design system werk in Figma publiekelijk op internet wilden zetten. Veelgenoemd bezwaar was dat componenten niet als “algemeen” genoeg gezien werden, daar hebben anderen toch niets aan! Ook: wij hebben helemaal geen tijd om allemaal bijdragen van vrijwilligers te beoordelen in ons project. En wat als ze bugs veroorzaken?!

Wij hebben geluisterd naar alle wensen en dit jaar zijn we begonnen met enkele teams een architectuur te beproeven die bovenstaande wensen mogelijk moet maken.

## Namen van componenten

Om vindbaarheid en hergebruik van componenten makkelijker te maken, stellen we voor om zoveel mogelijk de standaard HTML/CSS namen te gebruiken voor componenten en component onderdelen. Deze naamgeving kan dan ook overgenomen worden in de ontwikkeling van het component.

[Kijk hier voor meer over de naamgeving die we in Figma aanhouden](05-figma/02-figma-naming.md). De concepten die hier worden beschreven kunnen ook voor andere ontwerp-programmatuur zoals bijvoorbeeld Sketch of Adobe XD gebruikt worden.

## Configuratie opties delen tussen design en development

Design tokens beschrijven de visuele stijl van een component en de verschillende configuraties, zoals interactieve staten of varianten, die daar op mogelijk zijn. Zo heeft een primaire knop bijvoorbeeld een rand eromheen, of juist niet, een secundaire knop juist het omgekeerde, etc. Door deze structuur en de intentie ervan te voorzien van een naam die zowel gebruikt wordt voor ontwerp als development maak je hergebruik en herconfiguratie van de stijl makkelijker.

Door daarnaast design tokens voor je huisstijl te definiëren, zoals bijvoorbeeld `eng-rood`, `blij-paars` of `blauw-20` en `blauw-40`, beschrijf je welke visuele eigenschappen in een applicatie of huisstijl beschikbaar zijn. Door alleen deze toe te wijzen aan de component onderdelen, zorg je voor een consistente ervaring van de eindgebruiker.

## Style dictionary

Om de tokens als één bron van waarheid beschikbaar te hebben, ongeacht welke technologie wordt gebruikt, gebruiken wij [Style Dictionary](https://amzn.github.io/style-dictionary/#/tokens). Dit is een technische manier om in tekst de tokens en waardes te beschrijven. In Figma is er een [design token plugin](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) die je kunt gebruiken om componenten te voorzien van design tokens.
