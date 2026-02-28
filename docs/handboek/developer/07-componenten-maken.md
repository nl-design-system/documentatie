---
title: Componenten maken
hide_title: true
hide_table_of_contents: false
sidebar_label: Componenten maken
pagination_label: Componenten maken
description: Eigen componenten maken voor NL Design System
keywords:
  - developer
  - bijdragen
  - componenten maken
---

# Eigen componenten maken voor NL Design System

## CSS component

Wanneer de component nodig is in meerdere frameworks, dan kun je dezelfde CSS code hergebruiken voor alle framework-implementaties. Alle componenten in NL Design System zijn beschikbaar als "CSS component", omdat dit de ideale manier is om samen te werken en tijd te besparen.

Een CSS component is een `.css`-bestand met class names om de component te maken. Je kunt de CSS als dependency installeren via npm. De CSS component is altijd beschikbaar in een eigen bestand met alleen die component. Soms heeft een CSS component een eigen npm package, maar vaak is het CSS bestand onderdeel van een npm package van een CSS component library.

De documentatie staat in Storybook, de goede link vind je op de component-pagina's van NL Design System. In Storybook vind je werkende voorbeelden en de toegankelijke HTML-code met alle class names. Je kunt de HTML-code zueb via "Show code", of in het "HTML" tabje van de "Addons panel" — dat verschilt per Storybook.

[Bekijk alle CSS componenten](/componenten/?framework=CSS).

## HTML component

Wanneer je CSS gebruikt voor vanilla HTML zonder class names, dan noemen wij dat de "HTML component". Bijvoorbeeld voor `h1`, `input[type="radio" i]` of `button[aria-pressed="true" i]`.

HTML componenten gebruik je wanneer class names aan de HTML toevoegen niet goed kan.

NL Design System en Utrecht Design System hebben HTML componenten. Je kunt ze vinden in [het componenten overzicht met de filter "HTML"](/componenten/?framework=HTML).

Alleen wanneer [de HTML-specificatie](https://html.spec.whatwg.org/multipage/) een voorbeeld geeft van de HTML-elementen, en je kunt dat patroon vinden met een CSS selector, dan is een HTML component mogelijk. Bijvoorbeeld: Table kan met `table`, Heading kan met `h1` tot en met `h6`.

Niet elke component in NL Design System kan een HTML component zijn. Side Navigation kan bijvoorbeeld niet, omdat `nav` in heel diversie situaties wordt gebruikt.

[Bekijk alle HTML componenten](/componenten/?framework=HTML).

## Web component

[Bekijk alle Web componenten](/componenten/?framework=Web+Component).

## SCSS component

Wanneer je dezelfde CSS nodig hebt in situaties waarvoor andere CSS selectors nodig zijn, dan kun SCSS componenten maken waarmee je dezelfde CSS gebruikt als basis.

Een SCSS component heeft alle mixins om de component te maken. De ontwikkelaar van de SCSS component gebruikt de mixins meestal voor meerdere eigen implementaties, zoals een CSS component, HTML component of Web component.

De SCSS component wordt aangeboden als een `_example.scss`-bestand in een npm package.

## React component

...

[Bekijk alle React componenten](/componenten/?framework=React).

## Angular component

...

[Bekijk alle Angular componenten](/componenten/?framework=Angular).

## Vue.js component

In de NL Design System community is er tenminste 1 organisatie die Vue.js componenten publiceert: Utrecht Design System. De componenten worden door meerdere [Common Ground](https://commonground.nl) applicaties gebruikt.

[Bekijk alle Vue.js componenten](/componenten/?framework=Vue).

## Twig component voor Drupal

...

[Bekijk alle Twig componenten](/componenten/?framework=Twig).

## TipTap component

...

## Gutenberg block voor WordPress

...
