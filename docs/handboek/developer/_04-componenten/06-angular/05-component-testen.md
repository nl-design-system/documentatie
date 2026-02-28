---
title: Angular component testen
hide_title: true
hide_table_of_contents: false
sidebar_label: Angular component testen
pagination_label: Angular component testen
description: Als developer Angular component testen
keywords:
  - developer
  - bijdragen
  - component testen
  - angular component testen
---

# Angular component testen

Op deze pagina vind je tips om componenten te testen op de juiste aspecten.

## Testen op uitbreidbaarheid

### Classes

Front-end developers vertrouwen op de BEM classnames om hun eigen CSS toe te voegen. Wanneer de component een classname hernoemt of verwijdert, is er sprake van een 'breaking change'. Unit tests moeten elke classname controleren, zodat het betrouwbare API's zijn. Je zult veel tests zoals deze tegenkomen:

## HTML-content in componenten

Tekst in componenten kan soms worden verbeterd met markup: taalmetadata, code, nadruk of afbeeldingen. Elke property die in de HTML terechtkomt, moet worden getest op uitbreidbaarheid met rich text-content.

## Test de accessibility tree

Om te valideren of de accessibilty `role`s goed ingesteld staan kun je automatische tests schrijven.

### Landmarks

### Label voor landmarks

Sommige componenten hebben een API om het label te configureren.
Andere componenten moeten vertrouwen op aria-labelledby of aria-label.

## States

Voor [WCAG 4.1.2](https://nldesignsystem.nl/wcag/4.1.2/) is het belangrijk dat de state (toestand) van componenten beschikbaar is in de accessibility tree. Testing Library heeft API's om de informatie uit de accessibility tree op te vragen, in plaats van via de DOM.

Voorbeelden van state zijn:

- Een checkbox die checked (aangevinkt) is.
- Een textbox die disabled (uitgeschakeld) is.
- Een textarea die required (vereist) is.
- Een button die expanded (uitgeklapt) is.

Helaas ondersteunt Testing Library nog niet elke state in de accessibility tree. Maak alvast wel de test, maar sla de test over middels een `todo`. Gebruik de DOM om de test op een alternatieve manier te doen.

Controleer periodiek of een nieuwe versie van Testing Library de state wel ondersteunt.
