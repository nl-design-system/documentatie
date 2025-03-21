---
title: Meewerken aan NL Design System · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Meewerken
pagination_label: Meewerken
description: Als developer meewerken aan NL Design System
keywords:
  - developer
  - bijdragen
  - componenten
  - publiceren
---

# Als developer meewerken aan NL Design System

Wil je dat jouw componenten herbruikbaar zijn voor anderen die met NL Design System werken? Dan vragen we je te letten op de volgende punten:

- Deel je code als open source met de [EUPL-1.2 licentie](https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12).
- Vermijd huisstijl-specifieke code in je CSS, gebruik in plaats daarvan CSS variabelen voor design tokens NL Design System die ingevuld kunnen worden met de huisstijl van anderen.
- Deel de styling van componenten in een `.css` bestand met alleen BEM class names, en zonder "side effects": geen code voor `body` , `p` of `:root`.
- Begin namen in je code met een prefix voor jouw organisatie, zoals in BEM class names, CSS variabelen en Custom Elements. Wij gebruiken `nl-`, jij kiest iets anders.
- Baseer de namen in je code waar mogelijk op bestaande termen uit HTML, CSS, SVG en ARIA; deze hebben de voorkeur boven namen uit populaire frameworks en boven namen die je zelf bedenkt.
- Publiceer een overzicht van je componenten in een Storybook website, met HTML voorbeeldcode van de componenten.
- Wanneer je aan een component werkt, deel een link naar jouw werk in de backlog van NL Design System op GitHub.
- In plaats alle componenten zelf te schrijven, probeer eerst in de backlog te vinden of iemand anders aan die component werkt, en begin met de code van een andere contributor.
- Wanneer componenten van anderen niet aan al je wensen voldoen, deel dan je bevindingen in de backlog en kijk of er samenwerking mogelijk is wanneer je een eigen variant wilt ontwikkelen.

Op deze manier zijn wij een samenwerking begonnen met meerdere teams, en willen we dit jaar bewijzen dat ondanks alle verschillen er toch heel veel mogelijkheden zijn voor samenwerken.

Samen willen we een gebruiksvriendelijke online overheid nastreven door kennis en inzichten over toegankelijkheid en gebruiksvriendelijkheid te delen. We kunnen enorme impact hebben wanneer we inzichten uit gebruikersonderzoek en toegankelijkheidsonderzoek uit heel het land delen op de [backlog van NL Design System](http://github.com/nl-design-system/backlog/issues).

Kennis delen is maar een gedeelte van de oplossing: de kennis moet op het juiste moment op de juiste plek aanwezig zijn. Wat ons betreft is dat: op het moment dat een component wordt doorontwikkeld moet de kennis op de backlog van het ontwikkelteam staan! Met de backlog van NL Design System kunnen we gebruikers een stem geven in nieuwe ontwikkelingen van onze online overheid, en daarmee zetten de teams die op basis van de backlog meebouwen aan NL Design System echt de gebruiker centraal.

## Hulp nodig of gewoon even kennis maken?

Dat kan! Onze gegevens kun je vinden op de [pagina over het kernteam](/project/kernteam)
