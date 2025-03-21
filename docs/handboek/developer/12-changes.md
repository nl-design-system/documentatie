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

1. Je hebt een design token verwijderd.
1. Je hebt een design token van naam veranderd. Dit is hetzelfde als het verwijderen van een design token gevolgd door het toevoegen van een nieuw design token. Dat maakt het een breaking change.
1. Je hebt een spelfout in een design token gecorrigeerd. Dit lijkt omdat het zo'n kleine wijziging is misschien een patch versie ophoging. Ook dit is hetzelfde als het verwijderen van een design token gevolgd door het toevoegen van een nieuw design token. Dat maakt ook dit een breaking change.

## Minor changes in design tokens

1. Je hebt een design token toegevoegd. Voor gebruikers van het package met dit nieuwe design token is dit backwards-compatibel.

## Patch changes in design tokens

1. Je hebt de _waarde_ van een design token aangepast. Bijvoorbeeld de kleurwaarde van een design token is aangepast waardoor het contrast met een ander design token waarmee dit design token gecombineerd wordt wel voldoet aan een bepaalde drempel.

<!-- @todo dit is lastig uit te leggen -->

## Breaking changes in CSS

1. Je hebt een class name verwijderd.
1. Je hebt een class name of mixin van naam veranderd. Dit is hetzelfde als het verwijderen van de class name of mixin gevolgd door het toevoegen van een nieuwe. Dat maakt dit een breaking change.
1. Je hebt een spelfout in een class name of mixin gecorrigeerd. Dit lijkt misschien op een patch versie ophoging, maar het is hetzelfde als het verwijderen van de oude name gevolgd door het toevoegen van een nieuwe name. Het is een breaking change omdat de oude name niet meer bestaat.
1. Je hebt de waarde van een CSS property toegevoegd. Bijvoorbeeld `color: blue` is aangepast naar `color: var(--example-link-color, blue)`.
1. Je hebt de spelling van een CSS property gecorrigeerd. Bijvoorbeeld `colour` is aangepast naar `color`.

## Minor changes in CSS

1. Je hebt een class name of mixin toegevoegd. Voor gebruikers van het package met dit nieuwe design token is dit backwards-compatibel.

## Patch changers in CSS

In een design system dat door meerdere organisaties wordt gebruikt, kunnen zelfs kleine wijzigingen een grote impact hebben. Wat in een eigen project een eenvoudige patch voor verkeerde spacing zou zijn, kan in een design system een minor of zelfs breaking change betekenen. Daarom is het belangrijk om altijd rekening te houden met de impact van jouw wijziging op alle gebruikers.

## Breaking changes in JavaScript/TypeScript

1. Je hebt een export weggehaald.
1. Je hebt de naam van een export veranderd. Dit is hetzelfde als het verwijderen van de export en het toevoegen van een nieuwe. Dat maakt dit een breaking change.
1. Je hebt een type signature veranderd naar een kleinere signature waardoor er functionaliteit verdwenen is.

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
