---
title: Introductie betekenisvolle HTML-elementen
hide_title: true
hide_table_of_contents: false
sidebar_label: Introductie betekenisvolle HTML-elementen
sidebar_position: 2
pagination_label: Introductie betekenisvolle HTML-elementen
description: Richtlijnen om HTML-elementen te gebruiken op de juiste manier.
slug: /richtlijnen/code/betekenisvolle-html
keywords:
  - html
  - design
  - code
---

{/_ @license CC0-1.0 _/}

import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";
import { OverviewPage } from "@site/src/components/OverviewPage";

# Gebruik betekenisvolle HTML-elementen

Gebruik HTML-elementen op de juiste manier. Hiermee is de betekenis niet alleen zichtbaar, maar is de betekenis en de structuur van de inhoud ook duidelijk voor browsers, zoekmachines en hulptechnologieën.

## Semantische betekenis

HTML-elementen geven naast de vormgeving ook betekenis aan tekst of aan de structuur van de pagina. Dit noemen we de semantiek van HTML-elementen. Hulptechnologie en zoekmachines gebruiken deze informatie om de inhoud te begrijpen en bijvoorbeeld goed voor te lezen. Zorg eerst dat de semantische betekenis klopt. Besteed daarna pas aandacht aan de vormgeving van het HTML-element.

## Voorbeelden

Een selectie van veelgebruikte HTML-elementen en hun betekenis:

- Markeer gebieden of landmarks. Bijvoorbeeld met: `<header>`, `<main>`, `<footer>` en `<nav>`.
- Geef teksten structuur met koppen. Gebruik hiervoor het h-element. Bijvoorbeeld: `<h1>` of `<h4>`.
- Maak onderscheid tussen knoppen en links met `<button>` en `<a>`.
- Som gegevens op via lijsten door gebruik van `<ul>`, `<ol>` of `<dl>`.

<OverviewPage excludeDocIDs={["richtlijnen/code/betekenisvolle-html/README"]} />

## Standaard HTML of zelfgebouwde interactieve elementen

Gebruik standaardelementen. Vermijd het zelf maken van interactieve elementen als er een standaard digitaal toegankelijke optie bestaat. Bijvoorbeeld als HTML-element. Standaardelementen hebben standaardfunctionaliteiten en voorspelbaar gedrag. Dit maakt je website toegankelijker en helpt mensen die hulpsoftware en – apparatuur gebruiken.

Gebruik HTML-elementen op de juiste manier als goede basis voor digitale toegankelijkheid. Moet je toch een element zelf bouwen? Zorg dan dat dit element digitaal toegankelijk is.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](https://nldesignsystem.nl/wcag/1.3.1)
- [Succescriterium 4.1.2 Naam, rol, waarde](https://nldesignsystem.nl/wcag/4.1.2)

<FooterInfo />
