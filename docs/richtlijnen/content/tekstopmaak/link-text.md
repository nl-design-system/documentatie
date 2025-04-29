---
title: Toegankelijke linkteksten · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Toegankelijke linkteksten
pagination_label: Toegankelijke linkteksten
description: Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.
slug: /richtlijnen/content/tekstopmaak/linkteksten
keywords:
  - semantiek
  - tekstopmaak
  - structuur
  - tekststructuur
  - links
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Toegankelijke linkteksten

Schrijf duidelijke linkteksten. Dit helpt je bezoekers om het doel van de link te begrijpen.

## Voor wie is het nodig

Duidelijke linkteksten zijn prettig voor iedereen en belangrijk voor verschillende mensen met een functiebeperking. Zoals mensen met vergrotingssoftware, dyslexie of een kort werkgeheugen. Ook help je bezoekers die blind zijn en in een schermlezer een lijst met links opvragen. Zij zien de links buiten de context. Onduidelijke links en dezelfde linkteksten kunnen dan heel verwarrend zijn.

Als je links beschrijvend zijn, dan worden je links ook zoekmachinevriendelijk.

## Voorbeelden

<Guideline appearance="dont" title="Onduidelijke linkteksten gebruiken waaruit niet blijkt wat er gebeurt als je erop klikt.">
  <Canvas language="html">
    {() => (
      <>
          <ul>
            <li><a href="https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link">Klik hier</a> voor meer informatie over de rechten van mensen met een beperking</li>
            <li><a href="https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link">Lees meer</a> over  digitale toegankelijkheid</li>
          </ul>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Schrijf goede toegankelijke linkteksten waaruit blijkt wat er gebeurt als je erop klikt.">
  <Canvas language="html">
    {() => (
      <>
          <ul>
            <li>Meer informatie staat op de pagina <a href="https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link">Rechten van mensen met een beperking</a></li>
            <li><a href="https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link">Download de rapportage digitale toegankelijkheid 2023 (pdf 400 kB)</a></li>
            <li>Stuur een mail naar <a href="https://kennisbank.digitoegankelijk.nl/toegankelijke-linkteksten/#dit-is-een-voorbeeld-link">test@test.nl</a></li>
          </ul>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 2.4.4 Linkdoel(in context)](/wcag/2.4.4)
- [Succescriterium 2.4.9 Linkdoel (alleen link)](/wcag/2.4.9)
- [Succescriterium 2.5.3 Label in naam](/wcag/2.5.3)

<FooterInfo />
