---
title: Koppen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Koppen
pagination_label: Koppen
description: Gebruik koppen voor een duidelijke structuur van de tekst op een pagina of scherm.
slug: /richtlijnen/content/tekstopmaak/koppen
keywords:
  - semantiek
  - tekstopmaak
  - structuur
  - tekststructuur
  - koppen
  - koppenstructuur
  - kopjes
  - dikgedrukt
  - kopopmaak
  - bold
  - strong
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Koppen

Zorg voor een duidelijke structuur van de tekst. Het structeren van de tekst op de pagina door gebruik te maken van koppen is heel belangrijk. Zo begrijpen bezoekers de inhoud en opbouw van de tekst. Daarnaast maakt het het navigeren op pagina's makkelijker.

## Voor wie zijn toegankelijke koppen belangrijk?

Koppen moeten goed beschrijven waar de tekst onder de kop over gaat. Dit is vooral handig voor mensen die blind of slechtziend zijn, dyslectisch zijn of een cognitieve beperking hebben.

Een duidelijke koppenstructuur is heel belangrijk. Blinde mensen maken gebruik van voorleessoftware. Voorleessoftware kan een overzicht van alle koppen op een pagina laten zien. Dit helpt mensen om snel de informatie te vinden die ze zoeken. Ze kunnen ook makkelijk van de ene kop naar de andere gaan, door gebruik te maken van sneltoetsen.

Ook ziende bezoekers maken gebruik van de koppenstructuur op een pagina. Doordat koppen van verschillende niveaus er anders uit zien, is het snel duidelijk hoe de informatie op de pagina gestructureerd is.

## Opmaak van koppen

Een koptekst moet opgemaakt zijn als echte kop. Gebruik daarvoor de opties die het contentmanagementsysteem waarin je werkt je biedt. Vaak kun je in een uitklapbaar lijstje kiezen welke opmaak je tekst moet krijgen, bijvoorbeeld een paragraaf of kop van niveau 1 of 2.

<Guideline appearance="dont" title="Tekst dikgedrukt en groter maken en een andere kleur geven zodat het op een kop lijkt.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <strong style={{ color: 'purple', fontSize: '200%' }}>
            Dit is geen kop
          </strong>
          <p>
            Tekst dikgedrukt en groter maken en een andere kleur geven is niet genoeg. Voorleessoftware herkent deze tekst niet als een kop. Hierdoor verschijnt de tekst ook niet in het overzicht met koppen en kunnen bezoekers geen sneltoetsen gebruiken om tussen de koppen te navigeren.
          </p>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

## Kopniveaus

Koppen kunnen verschillende niveaus hebben. Door de verschillende niveaus zorg je voor een goede volgorde en deel je de tekst overzichtelijk in.

<Guideline appearance="do" title="Gebruik kopniveaus in de de goede volgorde.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <h1>Kop met niveau 1</h1>
          <p>
            Kopniveau 1 (`H1`) is de belangrijkste kop van de pagina en die gebruik je maar één keer. De H1 geeft aan waar de hele pagina over gaat.
          </p>
          <h2>Kop met niveau 2</h2>
          <p>
            Daaronder komen de koppen van niveau 2 (`H2`) Dit zijn als het ware de hoofdstukken binnen je onderwerp. Elke H2 behandelt een belangrijk onderdeel van het onderwerp. Deze koppen kun je meerdere keren op een pagina gebruiken, zolang ze maar allemaal over het hoofdonderwerp gaan.
          </p>
          <h3>Kop met niveau 3</h3>
          <p>
            Als je in een tekst onder een H2 nog wat meer detail wilt aanbrengen, gebruik je een kop van niveau 3 (`H3`). Dat is een subkop, die gaat over een onderwerp uit de vorige paragraaf.
          </p>
          <h4>Kop met niveau 4</h4>
          <p>
            Er zijn koppen van niveau 4, 5 en 6 maar die zijn meestal niet nodig. Die gebruik je alleen als je echt diep in de structuur van je tekst duikt. Voor de meeste webpagina’s zijn H1, H2 en H3 genoeg.
          </p>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="dont" title="Een kopniveau overslaan.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <h1>Dit is een kop met niveau 1</h1>
          <p>
            Sla geen niveaus over door bijvoorbeeld een kop van niveau 3 onder een kop van niveau 1 te plaatsen. 
          </p>
          <h3>Dit is een kop met niveau 3</h3>
          <p>
            Dit is verwarrend voor bezoekers die gebruik maken van hulpsoftware.
          </p>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](https://nldesignsystem.nl/wcag/1.3.1)
- [Succescriterium 2.4.6 Koppen en labels](https://nldesignsystem.nl/wcag/2.4.6)
- [Succescriterium 2.4.10 Paragraafkoppen](https://nldesignsystem.nl/wcag/2.4.10)

<FooterInfo />
