---
title: Citaten · Voor CMS-developers · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Citaten
pagination_label: Citaten
description: Citaten maken duidelijk dat een stuk tekst afkomstig is uit een andere bron. Een goede semantische opmaak zorgt ervoor dat het citaat herkenbaar is voor iedereen, ook voor mensen die een schermlezer gebruiken. Een CMS kan dit ondersteunen door citaten toegankelijk en correct op te maken, zonder dat de gebruiker daarvoor technische kennis nodig heeft.
keywords:
  - CMS
  - developer
  - citaten
---

<!-- @license CC0-1.0 -->

import FooterInfo from "@nl-design-system-unstable/documentation/handboek/\_footer_info.md";

# Citaten

Een citaat is een letterlijke overname uit een andere bron. Met de juiste opmaak wordt een citaat herkenbaar voor alle gebruikers, ook voor mensen die content beluisteren, bijvoorbeeld met een schermlezer. Een CMS kan helpen door semantisch juiste opties te bieden voor het invoegen en opmaken van citaten.

Let op het volgende:

- Bied een toegankelijke manier om citaten toe te voegen  
  Voorzie de editor van een duidelijke optie om een citaat als apart tekstblok toe te voegen. Zo voorkom je dat contentmakers een kop of visuele opmaak gebruiken voor iets wat eigenlijk een citaat is.
- Gebruik de juiste HTML-opmaak bij blokcitaten  
  Laat blokcitaten automatisch opmaken met `<blockquote>`, maar alleen als het echt om een losstaand citaat buiten de lopende tekst gaat.
- Sta ook inline citaten toe zonder extra HTML  
  Voor korte citaten in de lopende tekst zijn aanhalingstekens meestal voldoende. Het gebruik van `<q>` is niet verplicht.

## Gerelateerde NL Design System-componenten

- [Blockquote](/blockquote)

---

<FooterInfo />
