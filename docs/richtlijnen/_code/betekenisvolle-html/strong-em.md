---
title: Goed gebruik van strong en em-elementen · Code · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Goed gebruik van strong en em-elementen
pagination_label: Goed gebruik van strong en em-elementen
description: Gebruik het strong of em-element om nadruk op een woord of zinsdeel te leggen. Gebruik deze elementen niet om een tekst op te maken.
slug: /richtlijnen/code/strong-en-em-elementen
keywords:
  - lettergrootte
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Strong en em-elementen

Via het `<strong>` of `<em>` element leg je de nadruk op een woord of zinsdeel in code vast. Deze HTML-elementen geven betekenis aan de tekst die in het element staat. De nadruk is zichtbaar omdat de tekst dik- of schuingedrukt wordt weergegeven en hulptechnologie dit herkent. Sommige schermlezers kunnen de nadruk meenemen bij het voorlezen van de tekst.

## Het verschil tussen strong en em-elementen

Gebruik `<strong>` om een deel van de zin extra belangrijk te maken. Gebruik `<em>` om de betekenis van de zin aan te passen. Bijvoorbeeld:
<Guideline appearance="do" title="Het strong-element gebruiken om een deel van de zin extra belangrijk te maken.">
<Canvas language="html">
{() => (
<>
<paragraph>
Je kunt op eigen gelegenheid oversteken. <strong>Pas op!</strong> Dit is <strong>erg gevaarlijk</strong>
</paragraph>
</>
)}
</Canvas>
</Guideline>

<Guideline appearance="do" title="Het em-element gebruiken om de betekenis van de zin aan te passen.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <em>Moet</em> ik dit nu doen? of Moet <em>ik</em> dit nu doen?
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

## Weergave en betekenis

Gebruik strong en em-elementen alleen om nadruk op een woord of zinsdeel te leggen. Wil je een alinea er anders uit laten zien en bijvoorbeeld dikgedrukt weergeven? Dat kan. Gebruik dan niet `<strong>`, maar CSS. Bijvoorbeeld `font-weight: bold;`. Zo verander je alleen de weergave en niet de betekenis van de tekst.

<Guideline appearance="dont" title="Hele alinea vet maken met de strong-tag.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <strong>
            Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van
            tekst op deze plek. Wat u hier leest is een voorbeeldtekst. De neptekst is dus een tekst die eigenlijk
            nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een
            neptekst gaat, lezen ze toch door.
          </strong>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Hele alinea vet maken met font-weight:bold.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <span style={{ fontWeight: 'bold' }}>
            Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van
            tekst op deze plek. Wat u hier leest is een voorbeeldtekst. De neptekst is dus een tekst die eigenlijk
            nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een
            neptekst gaat, lezen ze toch door.
          </span>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

## Het nadeel van schuingedrukte tekst

Beperk het gebruik van schuingedrukte tekst. Schuingedrukte tekst maakt de tekst minder leesbaar voor mensen met visuele beperkingen of leesbeperkingen. Laad de italic-variant van het gebruikte lettertype in op je website voor betere leesbaarheid.

## Goed gebruik van strong en em-elementen door redacteuren

Informeer gebruikers van het CMS over het [juiste gebruik van de dik- en schuingedrukt optie](/richtlijnen/content/tekstopmaak/tekst-benadrukken).

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
