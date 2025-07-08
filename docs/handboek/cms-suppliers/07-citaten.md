---
title: Citaten · Voor CMS leveranciers · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Citaten
pagination_label: Citaten
description: Citaten maken duidelijk dat een stuk tekst afkomstig is uit een andere bron. Een goede semantische opmaak zorgt ervoor dat het citaat herkenbaar is voor iedereen, ook voor mensen die een schermlezer gebruiken. Een CMS kan dit ondersteunen door citaten toegankelijk en correct op te maken, zonder dat de gebruiker daarvoor technische kennis nodig heeft.
keywords:
  - CMS
  - leverancier
  - Content Management Systeem
  - toegankelijk
  - publiceren
  - quotes
  - citaat
---

<!-- @license CC0-1.0 -->

import FooterInfo from "@nl-design-system-unstable/documentation/handboek/\_footer_info.md";

# Citaten

Een citaat is een letterlijke overname uit een andere bron. Met de juiste opmaak wordt een citaat herkenbaar voor alle gebruikers, ook voor mensen die content beluisteren, bijvoorbeeld met een [screenreader.](/woordenlijst/#screenreader). Een CMS kan helpen door semantisch juiste opties te bieden voor het invoegen en opmaken van citaten.

Wat het CMS kan doen:

- Bied een toegankelijke manier om citaten toe te voegen  
  Voorzie de editor van een duidelijke optie om een citaat als apart tekstblok toe te voegen. Zo voorkom je dat contentmakers een kop of visuele opmaak gebruiken voor iets wat eigenlijk een citaat is.
- Gebruik de juiste HTML-opmaak bij blokcitaten  
  Laat blokcitaten automatisch opmaken met `<blockquote>`, maar alleen als het echt om een losstaand citaat buiten de lopende tekst gaat.
- Sta ook inline citaten toe zonder extra HTML  
  Voor korte citaten in de lopende tekst zijn aanhalingstekens meestal voldoende. Het gebruik van `<q>` is niet verplicht.

In de richtlijnen voor contentmakers lees je waarom dit onderdeel belangrijk is voor toegankelijkheid en waar je als contentmaker op moet letten. Verwijs hier eventueel naartoe vanuit het CMS voor extra uitleg en context.

Bekijk de [richtlijnen voor contentmakers over citaten](/richtlijnen/content/tekstopmaak/citaten).

## Gerelateerde NL Design System-componenten

- [Blockquote](/blockquote)

## Gerelateerde WCAG-succescriteria

Op de WCAG-pagina’s op deze site lees je welke succescriteria van toepassing zijn, welke fouten veel voorkomen en hoe je kunt testen of het CMS contentmakers voldoende ondersteunt om aan deze criteria te voldoen.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

---

<FooterInfo />
