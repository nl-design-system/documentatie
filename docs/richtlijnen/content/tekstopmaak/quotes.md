---
title: Citaten · Tekstopmaak · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Citaten
pagination_label: Citaten
description: Met aanhalingstekens of de juiste markeringen zijn citaten herkenbaar voor de bezoeker met en zonder hulptechnologie.
slug: /richtlijnen/content/citaten
keywords:
  - semantiek
  - tekstopmaak
  - structuur
  - tekststructuur
  - quotes
  - citaat
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

Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om een citaat als losstaand content-blok te plaatsen op je pagina. Gebruik deze mogelijkheid als je een citaat uit je tekst uit wil lichten.

<Guideline appearance="do" title="Een citaat uitlichten met de specifiek daarvoor bedoelde mogelijkheid in het CMS.">
  <Canvas language="html">
    {() => (
      <>  <p>Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis. </p>
          <blockquote>
          Een vat vol geleerdheid is nog geen druppel wijsheid waard.
          </blockquote>
          <p>De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.</p>
      </>
    )}
  </Canvas>
</Guideline>

Gebruik hiervoor geen semantische opmaak die daar niet voor bedoeld is, zoals een kop of dikgedrukte tekst.

<Guideline appearance="dont" title="Een citaat uitlichten met opmaak die daar niet voor bedoeld is, zoals een kop.">
  <Canvas language="html">
    {() => (
      <>  <p>Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis. </p>
          <h2>
          Een vat vol geleerdheid is nog geen druppel wijsheid waard.
          </h2>
          <p>De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.</p>
      </>
    )}
  </Canvas>
</Guideline>

Je mag natuurlijk wel een citaat gebruiken in een koptekst als het citaat relevant is voor de tekst die ná de kop komt. Gebruik dan wel aanhalingstekens om aan te geven dat het om een citaat gaat.

<Guideline appearance="do" title="Een citaat uitlichten in een kop die iets zegt over de tekst die volgt.">
  <Canvas language="html">
    {() => (
      <>
      <h2>"Een vat vol geleerdheid is nog geen druppel wijsheid waard"</h2>
      <p>Tijdens een recent interview met de gerespecteerde professor gooide hij een opmerkelijke quote in de discussie. "Een vat vol geleerdheid is nog geen druppel wijsheid waard," zei hij met een glimlach. Hij benadrukte dat het onderwijssysteem meer focus zou moeten leggen op het ontwikkelen van kritisch denken en empathie, in plaats van alleen maar feitenkennis. De professor, die al decennia lang pleit voor onderwijshervormingen, wees erop dat veel studenten tegenwoordig overspoeld worden met informatie, maar weinig ruimte krijgen om deze informatie te reflecteren en toe te passen.</p>
      </>
    )}
  </Canvas>
</Guideline>

## Hoe te testen

Lees de pagina door en controleer alle citaten. Gebruik de onderstaande stappen als checklist:

- Is het citaat opgemaakt met aanhalingstekens? Dan is dat in principe voldoende.
- Is het citaat uitgelicht op de pagina? Controleer dan of de optie voor citaten in het CMS is gebruikt.
- Controleer of het citaat niet met de functie voor schuingedrukte tekst is opgemaakt om het citaat op te laten vallen. Is dat zo? Pas de opmaak dan aan. Schuingedrukte tekst is bedoeld om [tekst te benadrukken](/richtlijnen/content/tekstopmaak/tekst-benadrukken), niet om citaten mee op te maken.
- Controleer of het citaat niet met een koptekst is opgemaakt om het citaat uit te lichten. Als dat zo is, pas dit aan. [Koppen zijn bedoeld voor structuur](/richtlijnen/content/tekstopmaak/koppen), niet voor vormgeving.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
