---
title: Citaten · Code · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Citaten
pagination_label: Citaten
description: Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.
slug: /richtlijnen/content/citaten
keywords:
  - lettergrootte
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Citaten op een webpagina

Korte citaten en lange citaten kun je tussen enkele of dubbele aanhalingsteken zetten. Je kunt tekst ook markeren als citaat binnen het systeem waarmee je webpagina’s publiceert. Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.

## Voorbeelden

<Guideline appearance="do" title="Plaats dubbele of enkele aanhalingstekens om een quote aan te geven.">
  <Canvas language="html">
    {() => (
      <>
        <p>
          De voorzitter vroeg: “Was dat het antwoord op uw vraag?”
        </p>
      </>
    )}
  </Canvas>
</Guideline>

Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om met een knop een quote toe te voegen.

<Guideline appearance="dont" title="Een kop gebruiken om een quote op te maken.">
  <Canvas language="html">
    {() => (
      <>
          <h2>"Een vat vol geleerdheid is nog geen druppel wijsheid waard."</h2>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Een quote opmaken met de specifiek daarvoor bedoelde mogelijkheid in het CMS.">
  <Canvas language="html">
    {() => (
      <>
          <blockquote>
          Een vat vol geleerdheid is nog geen druppel wijsheid waard.
          </blockquote>
      </>
    )}
  </Canvas>
</Guideline>

<!--Guideline appearance="do" title="Voor korte quotes in een zin of alinea het HTML-element <q> gebruiken">
  <Canvas language="html">
    {() => (
      <>
          <p>
          Op de voorpagina van de website staat: <q>NL Design System helpt om toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk te maken.</q> Het kernteam maakt dit mogelijk.
          </p>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Voor langere quotes die los staan buiten een zin of alinea het HTML-element <blockquote> gebruiken">
  <Canvas language="html">
    {() => (
      <>
          <blockquote>
          Een vat vol geleerdheid is nog geen druppel wijsheid waard.
          </blockquote>
      </>
    )}
  </Canvas>
</Guideline-->

## Hoe te testen

Lees de pagina door en controleer alle citaten. Gebruik de onderstaande stappen als checklist:

- Controleer of het citaat is opgemaakt met de citaatfunctie van het CMS (bijvoorbeeld als blokcitaat).
  Een citaat moet als citaat zijn gemarkeerd in de code (bijvoorbeeld met `<blockquote>`). Gebruik dus niet alleen aanhalingstekens of een cursieve stijl. ￼
- Kijk of er kopstijlen (zoals H2 of H3) zijn gebruikt om een citaat visueel te laten opvallen.
  Als dat zo is, pas dit aan. Koppen zijn bedoeld voor structuur, niet voor vormgeving.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
