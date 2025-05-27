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

Veel gebruikers krijgen links te zien of te horen los van de rest van de tekst. Een link als ‘klik hier’ of ‘lees meer’ zegt dan niets. Zorg daarom dat de linktekst op zichzelf duidelijk is. Dat maakt je content toegankelijker én beter vindbaar in zoekmachines.

Linkteksten moeten duidelijk maken waar een link naartoe gaat. Dat helpt iedereen die snel door een pagina scant, en is extra belangrijk voor mensen die niet alle context kunnen zien of horen — bijvoorbeeld omdat ze een schermlezer gebruiken, het scherm sterk vergroten, of moeite hebben met lezen.

Op deze pagina lees je hoe je goede linkteksten schrijft en welke fouten je beter kunt vermijden.

Hieronder zie je voorbeelden van wat wel werkt en wat je beter kunt laten.

## Wat werkt wel (en wat niet)?

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

## Hoe te testen

Lees de pagina door en controleer alle linkteksten. Gebruik de onderstaande stappen als checklist:

- Controleer of de linktekst duidelijk maakt waar de link naartoe leidt.
  Vermijd vage teksten zoals ‘klik hier’ of ‘lees meer’. De linktekst moet zelfstandig begrijpelijk zijn, zodat gebruikers weten wat ze kunnen verwachten.
- Controleer of links naar verschillende bestemmingen unieke en beschrijvende linkteksten hebben.
  Dit voorkomt verwarring, vooral voor gebruikers van screenreaders die een lijst van links opvragen.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 2.4.4 Linkdoel(in context)](/wcag/2.4.4)
- [Succescriterium 2.4.9 Linkdoel (alleen link)](/wcag/2.4.9)
- [Succescriterium 2.5.3 Label in naam](/wcag/2.5.3)

<FooterInfo />
