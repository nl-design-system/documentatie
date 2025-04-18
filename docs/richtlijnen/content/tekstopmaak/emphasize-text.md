---
title: Tekst benadrukken · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Tekst benadrukken
pagination_label: Tekst benadrukken
description: Leg nadruk op woorden of zinsdelen door ze dikgedrukt (bold) of schuingedrukt (italic) te maken.
slug: /richtlijnen/content/tekstopmaak/tekst-benadrukken
keywords:
  - semantiek
  - tekstopmaak
  - structuur
  - tekststructuur
  - dikgedrukt
  - schuingedrukt
  - strong
  - em
  - bold
  - italic
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Tekst benadrukken

Leg nadruk op woorden of zinsdelen door ze vet of schuingedrukt te maken. Onderstreep tekst niet, bewaar onderstrepen voor links.

Bij goed gebruik van een CMS wordt de vette of schuingedrukte tekst in [`strong` en `em` elementen](/richtlijnen/code/strong-en-em-elementen) geplaatst. Met deze elementen in de code is de nadruk ook duidelijk voor gebruikers van hulptechnologie.

Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om met knoppen vette of schuingedrukte tekst toe te voegen. Vaak hebben de knoppen voor vette tekst of schuingedrukte tekst de letter B (bold) of I (italic).

Door deze knoppen in een CMS te gebruiken, verander je de visuele opmaak én de onderliggende code.

## Voorbeelden

<Guideline appearance="do" title="vette tekst gebruiken om een deel van de zin extra belangrijk te maken.">
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

<Guideline appearance="do" title="schuingedrukte tekst gebruiken om de betekenis van de zin aan te passen.">
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

<Guideline appearance="dont" title="Hele alinea vet maken omdat je dat mooier vindt.">
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

<Guideline appearance="dont" title="Onderstreep tekst niet, bewaar onderstrepen voor links.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          Gebruik geen <u>underline</u> omdat dit verwarrend kan zijn in combinatie met een <a href="">link</a>.
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
