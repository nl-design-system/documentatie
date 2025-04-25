---
title: Functionele afbeeldingen · Afbeeldingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Functionele afbeeldingen
pagination_label: Functionele afbeeldingen
description: Functionele afbeeldingen in NL Design System.
slug: /richtlijnen/content/afbeeldingen/functionele-afbeeldingen
keywords:
  - afbeeldingen
  - alternatieve tekst
  - alt tekst
  - beeldbeschrijving
  - alt attribuut
  - tekstalternatief
  - tekstalternatieven
  - tekst alternatief
  - tekstueel alternatief
  - tekst alternatieven
  - toegankelijke afbeeldingen
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Functionele afbeeldingen

Afbeeldingen hebben soms een functie. Bijvoorbeeld:

- Een afbeelding waar je op kan klikken om naar een andere pagina te gaan. De afbeelding is dan een link geworden.
- De afbeelding opent in het groot in een dialoogvenster op de pagina. De afbeelding is dan een knop geworden.

## Overwegingen

Vragen die je jezelf kunt stellen als je een functionele afbeelding plaatst:

- Waarom wil ik deze afbeelding plaatsen?
- Wat is het doel van de afbeelding?
- Wat gebeurt er als een bezoeker op de afbeelding klikt?

Hier beschrijf je niet wat op de afbeelding staat, maar wat de bezoeker ermee kan doen. De bezoeker weet anders niet wat er gaat gebeuren na het klikken op de link of knop.

## Logo als link naar de homepage

Veel websites hebben een logo dat ook een link is naar de homepage. Dit logo staat dan bovenaan iedere pagina, meestal naast het navigatiemenu. Hier is het belangrijk om zowel te benoemen dat het een logo is, als waar de link naar de naartoe gaat. In die zin is een logo zowel een informatieve als een functionele afbeelding.

<Guideline appearance="do" title="Benoem de organisatie, dat het om een logo gaat en waar de link naar verwijst">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
        <img alt="NL Design System logo, naar de homepage" src="https://raw.githubusercontent.com/nl-design-system/documentatie/9e5331b623e1bbd5bea950c934a20459e13b64bf/logo.svg" />
         <p>Alternatieve tekst: NL Design System logo, naar de homepage</p>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

Lees ook onze [blog "De toegankelijke naam van een link op een logo in de header"](/blog/toegankelijke-naam-link-logo-header).

### Waar stel je de alternatieve tekst van het logo als link naar de homepage in?

Het verschilt per contentmanagementsysteem (CMS) waar je dit aan kunt passen en of je dit als contentmaker zelf kunt doen. Meestal zit deze optie in de thema-instellingen van het CMS. Het kan daarom zijn dat je geen rechten hebt om de alternatieve tekst van het logo bovenaan iedere pagina zelf aan te passen. Vraag dit dan aan de beheerder of leverancier van je website.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.1.1 Niet-tekstuele content](/wcag/1.1.1)
- [Succescriterium 2.4.4 Linkdoel (in context)](/wcag/2.4.4)

<FooterInfo />
