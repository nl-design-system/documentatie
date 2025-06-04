---
title: Links naar externe documenten · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Links naar externe documenten
pagination_label: Links naar externe documenten
description: ...
slug: /richtlijnen/content/links-naar-externe-documenten
keywords:
  - links
  - documenten
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Links naar externe documenten

Soms link je naar een document buiten de webpagina — bijvoorbeeld een PDF of Word-bestand. Maar zulke documenten zijn niet altijd goed toegankelijk. Waarschijnlijk maak je deze documenten niet zelf, maar publiceer je ze wél. Daarom is het belangrijk dat je alert bent op de toegankelijkheid ervan.

## Ook documenten moeten toegankelijk zijn

Documenten die je op de website zet of waar je naar verwijst, zoals pdf’s of Word-bestanden, moeten net zo goed toegankelijk zijn als de rest van je content. Denk aan koppenstructuur, duidelijke leesvolgorde, alternatieve teksten en toegankelijke formulieren. Als contentmaker kun je vaak niet alles zelf controleren, maar je kunt wél kritisch meekijken en vragen stellen.

## Waar kun je als contentmaker op letten?

- Is het echt nodig om een document te gebruiken?  
  Kun je de inhoud ook gewoon als webpagina aanbieden? Dat is bijna altijd gebruiksvriendelijker én beter toegankelijk.
- Is het document goed opgemaakt?  
  Vraag na of de maker het document toegankelijk heeft gemaakt (met koppenstructuur, leesvolgorde, alternatieve teksten, enz.). Of gebruik een toegankelijkheidschecker in Acrobat of Word, als je daar bekend mee bent.
- Heb je een duidelijke linktekst gebruikt?  
  Vermeld wat voor document het is (zoals ‘pdf’ of ‘Word’) en geef aan waar het over gaat. Bijvoorbeeld:
  Jaarverslag 2024 (pdf) of Aanvraagformulier (Word)
- Bied je alternatieven aan?  
  Kan iemand die het document niet kan openen, de informatie op een andere manier krijgen? Bijvoorbeeld door contact op te nemen, of door de inhoud ook op de website te publiceren.

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

Ook documenten zoals pdf’s vallen onder dezelfde toegankelijkheidsprincipes als webpagina’s. Veel verschillende WCAG-richtlijnen kunnen daarom van toepassing zijn. Hieronder staan een paar succescriteria waarop het het vaakst misgaat in documenten:

- [Successcriterium 1.1.1 Niet-tekstuele content](/wcag/1.1.1)
- [Successcriterium1.3.1 Info en relaties](/wcag/1.3.1)
- [Successcriterium2.4.2 Paginatitel](/wcag/2.4.2)

<FooterInfo />
