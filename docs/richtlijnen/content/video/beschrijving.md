---
title: Beschrijving voor video · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Video beschrijving
pagination_label: Video beschrijving
description: Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.
slug: /richtlijnen/content/video/beschrijving
keywords:
  - video
  - YouTube
  - Vimeo
  - iFrame
  - alternatieve tekst video
  - video beschrijving
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Video beschrijving

Geef iedere video een duidelijke beschrijving, zodat bezoekers weten wat ze kunnen verwachten.

## Een beschrijving op de pagina

Beschrijf bóven de videospeler op de pagina waar de video over gaat. Dit kan bijvoorbeeld in een beschrijvende paragraaf, of met een kopje. Zo begrijpen alle bezoekers wat zij kunnen verwachten van de video en bepalen of ze de video willen bekijken.

<Guideline appearance="do" title="Video's op de pagina een beschrijving geven">
  <Canvas language="html">
    {() => (
      <>
        <h1>Heartbeat terugkijken</h1>
        <p>Heartbeat terugkijken? Op deze pagina vind je de opnames.</p>
        <h2>10 juni 2025</h2>
        <p>Renate vertelt over de nieuwe richtlijnen voor tekstopmaak en waar je allemaal rekening mee moet houden.</p>
      </>
    )}

  </Canvas>
</Guideline>

## Een beschrijving in de videospeler

Voor bezoekers die gebruik maken van een [screenreader](/woordenlijst/#screenreader) is het belangrijk dat de videospeler ook een beschrijving heeft. Een goede beschrijving van de videospeler is de titel van je video. Zo weet je als bezoeker wat je kunt verwachten.

Video's die je vanaf YouTube en Vimeo op je pagina plaatst, worden meestal in een `iFrame` op de pagina geplaatst. Het is niet altijd nodig om zelf de beschrijving van het `iFrame` of een videospeler aan te passen. Vraag bij de beheerder van je contentmanagementsysteem (CMS) na of video's automatisch een beschrijving krijgen. Wordt er niet automatisch een beschrijving meegegeven? Vraag dan na wat de beste manier is om dit in jullie CMS te doen.

Gebruikt jouw organisatie een eigen videospeler? Het hangt af van welke videospeler jouw organisatie gebruikt of je zelf een beschrijving moet toevoegen en hoe je dat doet. Vraag dit na bij de beheerder van je CMS.

## Hoe te testen

Controleer voor iedere video:

- Heeft de video een beschrijving op de pagina, bijvoorbeeld in een paragraaf of een kopje?
- Krijgt de videospeler automatisch een beschrijving mee? Vraag dit na bij de beheerder van je CMS. Zo nee, vraag dan na hoe je het beste zelf een beschrijving mee kunt geven. Daar controleer je vervolgens ook of de video een beschrijving heeft, bijvoorbeeld de titel van de video.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.1.1 Niet-tekstuele content](/wcag/1.1.1)

<FooterInfo />
