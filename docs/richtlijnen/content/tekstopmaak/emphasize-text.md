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

Het kan heel goed zijn om tekst te benadrukken. Doe dat dan wel op een toegankelijke manier, zodat alle bezoekers er baat bij hebben.

## Dikgedrukt en schuingedrukt

Je kunt woorden of zinsdelen benadrukken door ze vet of schuingedrukt te maken.

Bij goed gebruik van een CMS wordt de vette of schuingedrukte tekst in [`strong`](/strong) en `em` elementen geplaatst. Met deze elementen in de code is de nadruk ook duidelijk voor gebruikers van hulptechnologie.

Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om met knoppen vette of schuingedrukte tekst toe te voegen. Vaak hebben de knoppen voor vette tekst of schuingedrukte tekst de letter B (bold) of I (italic).

Door deze knoppen in een CMS te gebruiken, verander je de visuele opmaak én de onderliggende code.

<Guideline appearance="do" title="vette tekst gebruiken om een deel van de zin extra belangrijk te maken.">
  <Canvas language="html">
    {() => (
      <>
        <p>
          Je kunt op eigen gelegenheid oversteken. <strong>Pas op!</strong> Dit is <strong>erg gevaarlijk</strong>
        </p>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="schuingedrukte tekst gebruiken om de betekenis van de zin aan te passen.">
  <Canvas language="html">
    {() => (
      <>
        <p>
          <em>Moet</em> ik dit nu doen? of Moet <em>ik</em> dit nu doen?
        </p>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="dont" title="Hele alinea vet maken omdat je dat mooier vindt.">
  <Canvas language="html">
    {() => (
      <>
        <p>
          <strong>
            Dit is een neptekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van
            tekst op deze plek. Wat u hier leest is een voorbeeldtekst. De neptekst is dus een tekst die eigenlijk
            nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een
            neptekst gaat, lezen ze toch door.
          </strong>
        </p>
      </>
    )}
  </Canvas>
</Guideline>

## ALL CAPS-tekst

Probeer het gebruik van ‘ALL CAPS’ tot een minimum te beperken. We herkennen letters aan hun vorm en dan met name de bovenkant van een letter. Eigenlijk maakt je oog steeds sprongetjes aan de bovenkant van een woord. Bij all caps is het onderscheid in lettervorm minder duidelijk, dit vertraagt het lezen.

<Guideline appearance="do" title="Beperkt gebruik maken van all caps">
  <Canvas language="html">
    {() => (
      <>
        <p>
          Als je in de HTML all caps gebruikt lezen screenreaders dit vaak voor als losse letters. Geen probleem bij bijvoorbeeld FBI of NBA maar bij VOORNAAM of NIEUWS wordt dat wel heel vreemd.
        </p>
        <p>Daarnaast geeft het ook een gevoel van ‘schreeuwen’. Over het algemeen niet het gevoel dat je wilt overbrengen op de lezer toch… TOCH?!</p>
      </>
    )}
  </Canvas>
</Guideline>

## Onderstrepen

Onderstreep tekst niet. Bezoekers verwachten dat onderstreepte woorden in een zin links zijn waar ze op kunnen klikken.

<Guideline appearance="dont" title="Tekst onderstrepen">
  <Canvas language="html">
    {() => (
      <>
        <p>
          Gebruik geen <u>underline</u>. Bezoekers verwachten dat onderstreepte tekst een <a href="">link</a> is.
        </p>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
