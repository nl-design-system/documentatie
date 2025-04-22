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
        <paragraph>
          <p>
          De voorzitter vroeg: “Was dat het antwoord op uw vraag?”
          </p>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Voor korte quotes in een zin of alinea het HTML-element <q> gebruiken">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <p>
          Op de voorpagina van de website staat: <q>NL Design System helpt om toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk te maken.</q> Het kernteam maakt dit mogelijk.
          </p>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Voor langere quotes die los staan buiten een zin of alinea het HTML-element <blockquote> gebruiken">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <blockquote>
          Een vat vol geleerdheid is nog geen druppel wijsheid waard.
          </blockquote>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

Lees meer over [het belang van HTML-elementen](/richtlijnen/formulieren/wanneer-welk-form-element/betekenisvolle-html-elementen).

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
