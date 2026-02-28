---
title: "SemVer: Major, Minor of Patch?"
hide_title: true
hide_table_of_contents: false
sidebar_label: "SemVer: Major, Minor of Patch?"
pagination_label: "SemVer: Major, Minor of Patch?"
description: "Richtlijnen voor versiebeheer volgens SemVer: wanneer kies je voor een major, minor of patch release?"
keywords:
  - developer
  - aan de slag
  - versionering
  - semver
  - changesets
---

# SemVer: Major, Minor of Patch?

We maken bij [semver][1] onderscheid tussen drie verschillende niveau's van changes:

- **Major** versie ophogingen zijn voor API veranderingen die incompatibel (breaking) zijn.
- **Minor** versie ophogingen voegen functionaliteit toe die backwards-compatibele zijn.
- **Patch** versie ophogingen zijn bug fixes die backwards-compatibele zijn.

Het ophogen van een major versie nummer als een vorm van marketing bijvoorbeeld om iets te verkopen [is niet de bedoeling][2]. Major versies zijn ook geen versies die maar eenmaal per jaar plaatsvinden.

Het maakt niet uit hoe klein een breaking change is. Elke breaking change betekent een major versie bump.

We willen dat versie nummers vertrouwd kunnen worden en het is belangrijk om dat vertrouwen niet te beschamen.

## Breaking changes in design tokens

1. Je verwijdert een design token.
1. Je hernoemt een design token. Dit telt als het verwijderen en toevoegen van een token. Dit is een breaking change.
1. Je verbetert een spelfout in een design token. Dit lijkt een kleine patch, maar het blijft een breaking change. Je verwijdert namelijk de oude naam en voegt een nieuwe toe.

## Minor changes in design tokens

1. Je voegt een design token toe. Voor gebruikers van het package met dit nieuwe design token is dit backwards-compatibel.

## Patch changes in design tokens

1. Je hebt de _waarde_ van een design token aangepast. Bijvoorbeeld de kleurwaarde van een design token is aangepast waardoor het contrast met een ander design token waarmee dit design token gecombineerd wordt wel voldoet aan een bepaalde drempel.
1. Je hebt een spelfout in de _beschrijving_ van een design token aangepast. In Tokens Studio kun je beschrijvingen aan design tokens toevoegen. Het corrigeren van een spelfout in de beschrijving van een design token heeft geen gevolgen voor de afnemers. Deze veranderingen lijken het meest op een bug fix, maar zullen in de praktijk waarschijnlijk weinig voorkomen.

## Breaking changes in CSS

1. Je verwijdert een class name of mixin.
1. Je hernoemt een class name of mixin. Dit telt als het verwijderen en toevoegen van een class name of mixin. Dit is een breaking change.
1. Je verbetert een spelfout in een class name of mixin. Dit lijkt een kleine patch, maar het blijft een breaking change. Je verwijdert namelijk de oude naam en voegt een nieuwe toe. Het is een breaking change omdat de oude name niet meer bestaat.
1. Je voegt een waarde toe aan een CSS property. Bijvoorbeeld `color: blue` wordt `color: var(--example-link-color, blue)`.
1. Je corrigeert een spelfout in een CSS property. Bijvoorbeeld `colour` wordt `color`.

## Minor changes in CSS

1. Je voegt een class name of mixin toe. Voor gebruikers van het package met dit nieuwe design token is dit backwards-compatibel.

## Patch changers in CSS

In een design system dat door meerdere organisaties wordt gebruikt, kunnen zelfs kleine wijzigingen een grote impact hebben. Wat in een eigen project een eenvoudige patch voor verkeerde spacing zou zijn, kan in een design system een minor of zelfs breaking change betekenen. Daarom is het belangrijk om altijd rekening te houden met de impact van jouw wijziging op alle gebruikers.

## Breaking changes in JavaScript/TypeScript

1. Je verwijdert een export.
1. Je hernoemt een export. Dit telt als het verwijderen en toevoegen van een export. Dit is een breaking change.
1. Je wijzigt een type signature naar een kleinere signature waardoor er functionaliteit verdwenen is.

## Minor changes in JavaScript/TypeScript

1. Je hebt een export toegevoegd, er is functionaliteit toegevoegd die backwards-compatibel is.
1. Je hebt een type signature veranderd naar een grotere signature op een backwards-compatibele manier.

## Patch changes in JavaScript/TypeScript

1. Je hebt een bug opgelost.

## Wat betekent het voor ontwikkelaars van een package?

Het is belangrijk om te bepalen wat de impact is van de veranderingen die je hebt gedaan. Er wordt onderscheid gemaakt in major, minor, en patch veranderingen.

Major veranderingen zijn brekende (breaking) veranderingen. Veranderingen die, als iemand de nieuwe versie van het pakketje zou gebruiken niet meer doen wat de vorige versie van het pakketje deed.

[1]: https://semver.org
[2]: https://tom.preston-werner.com/2022/05/23/major-version-numbers-are-not-sacred
