---
title: Kantoorbestanden · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Kantoorbestanden
pagination_label: Kantoorbestanden
description: ...
slug: /richtlijnen/content/kantoorbestanden
keywords:
  - links
  - documenten
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Kantoorbestanden

Soms link je naar een bestand buiten de webpagina — bijvoorbeeld een PDF of Word-bestand. Maar zulke bestanden zijn niet altijd goed toegankelijk. Waarschijnlijk maak je deze bestanden niet zelf, maar publiceer je ze wél. Daarom is het belangrijk dat je alert bent op de toegankelijkheid ervan.

## Ook kantoorbestanden moeten toegankelijk zijn

Kantoorbestanden die je op de website zet of waar je naar verwijst, zoals pdf’s of Word-bestanden, moeten net zo goed toegankelijk zijn als de rest van je content. Denk aan koppenstructuur, duidelijke leesvolgorde, alternatieve teksten en toegankelijke formulieren. Als contentmaker kun je vaak niet alles zelf controleren, maar je kunt wél kritisch meekijken en vragen stellen.

## Waar kun je als contentmaker op letten?

- Is het echt nodig om een kantoorbestand te gebruiken?  
  Kun je de inhoud ook gewoon als webpagina aanbieden? Dat is bijna altijd gebruiksvriendelijker én beter toegankelijk.
- Is het kantoorbestand goed opgemaakt?  
  Vraag na of de maker het kantoorbestand toegankelijk heeft gemaakt. Gebruik hierbij [de documentatie over kantoorbestanden van DigiToegankelijk](https://www.digitoegankelijk.nl/aan-de-slag/tips/kantoorbestanden).
- Heb je een duidelijke linktekst gebruikt?  
  Vermeld wat voor document het is (zoals ‘pdf’ of ‘Word’) en geef aan waar het over gaat. Bijvoorbeeld:
  Jaarverslag 2024 (pdf) of Aanvraagformulier (Word)
- Bied je alternatieven aan?  
  Kan iemand die het kantoorbestand niet kan openen, de informatie op een andere manier krijgen? Biedt de inhoud bijvoorbeeld ook als een webpagina aan, of biedt contactgegevens aan waarmee bezoekers de informatie kunnen opvragen.

<Guideline appearance="do" title="In de linktekst vermelden om wat voor document het gaat">
  <Canvas language="html">
    {() => (
      <>
        <a href="https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link">Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)</a>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Ook kantoorbestanden zoals pdf’s vallen onder dezelfde toegankelijkheidsprincipes als webpagina’s. Veel verschillende WCAG-richtlijnen kunnen daarom van toepassing zijn. Hieronder staan een paar succescriteria waarop het het vaakst misgaat in bestanden:

- [Successcriterium 1.1.1 Niet-tekstuele content](/wcag/1.1.1)
- [Successcriterium 1.3.1 Info en relaties](/wcag/1.3.1)
- [Successcriterium 2.4.2 Paginatitel](/wcag/2.4.2)

<FooterInfo />
