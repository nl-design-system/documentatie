---
title: Decoratieve afbeeldingen · Afbeeldingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Decoratieve afbeeldingen
pagination_label: Decoratieve afbeeldingen
description: Decoratieve afbeeldingen in NL Design System.
slug: /richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen
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
  - decoratieve afbeelding
  - decoratieve afbeeldingen
  - decoratief
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Decoratieve afbeeldingen

Sommige afbeeldingen op een pagina geven je bezoeker niet méér informatie dan de informatie die ook al in de tekst staat. Dit noemen we decoratieve afbeeldingen.

Voorbeelden van decoratieve afbeeldingen zijn:

- Afbeeldingen in de achtergrond van een website.
- Iconen naast een tekst met dezelfde informatie.
- Sfeerbeelden.

## Context is bepalend

De juiste alt-tekst hangt af van de context. Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven, maar informatief in een artikel over verschillende koeienrassen.

Op een gemeentelijke website kan een foto van het gemeentehuis volstaan met “gemeentehuis van Amersfoort” als het artikel over de organisatie gaat. Gaat de tekst over duurzame verbouwingen, dan beschrijf je in de alt-tekst de zichtbare verduurzamingen zoals de zonnepanelen op het dak.

De context bepaalt dus of een afbeelding decoratief of informatief is, en wat er precies in de alt-tekst moet staan.

## Overwegingen

Vragen die je jezelf kunt stellen als je een decoratieve afbeelding plaatst:

- Waarom wil ik deze afbeelding plaatsen?
- Als ik de afbeelding weglaat, welke informatie gaat er dan verloren?
- Als ik deze afbeelding niét zou kunnen gebruiken, zou ik dan een vervangende afbeelding zoeken?

## Alternatieve teksten verbergen voor hulpsoftware

Gaat er geen informatie verloren? Dan heeft de afbeelding geen beschrijving nodig. Je kunt er dan voor kiezen om de afbeelding te verbergen voor hulpsoftware. Er is dan geen informatie meer beschikbaar over de afbeelding: niet wát er op de afbeelding staat, maar zelfs niet dát er een afbeelding staat. Bezoekers die gebruik maken van bijvoorbeeld een [screenreader](/woordenlijst/#screenreader) hoeven dan niet onnodig naar de beschrijving te luisteren. Zorg er wel voor dat je echt zeker weet dat de afbeelding niet informatief is voordat je deze keuze maakt.

<Guideline appearance="dont" title="Informatieve afbeeldingen verbergen voor hulpsoftware door het alt-attribuut leeg te laten.">
  <Canvas language="html" defaultExpandedCode>
    {() => (
      <>
         <img src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg" alt="" />
      </>
    )}

  </Canvas>
</Guideline>

## Sfeerbeelden

Je plaatst sfeerbeelden voornamelijk omdat ze passen bij de organisatie waar je voor werkt. Ze passen bijvoorbeeld bij jullie kernwaarden of de service die jullie verlenen. Sommige bezoekers die gebruikmaken van hulpsoftware willen daarom juist wel een beschrijving krijgen van decoratieve sfeerbeelden. Je kunt er dus ook voor kiezen om deze afbeeldingen wel een alternatieve tekst te geven. In dat geval beschrijf je inhoudelijk wat er op de afbeelding te zien is.

## Decoratieve afbeeldingen beschrijven

Het helpt om je voor te stellen dat je de afbeelding beschrijft aan iemand die hem niet kan zien, bijvoorbeeld iemand aan de telefoon. Denk na over welke kenmerken van een afbeelding belangrijk zijn om te benoemen.

Mogelijke kenmerken:

- Het precieze aantal mensen, dieren of objecten in de afbeelding.
- De gezichtsuitdrukkingen van de mensen in de afbeelding.
- Het geslacht of gender van de mensen in de afbeelding.
- De huidskleur van de mensen in de afbeelding.
- De acties die de mensen in de afbeelding uitvoeren.
- Wat er op de achtergrond te zien is en of het voor ziende bezoekers duidelijk is, of moet zijn, wat er te zien is. Benoem je 'de Eiffeltoren' of 'Een hoge metalen constructie die taps toeloopt, met een antenne er op.'?

Of iets relevant is om te benoemen ligt aan de context: het doel van de pagina en bijvoorbeeld de kern- en merkwaarden van je organisatie.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.1.1 Niet-tekstuele content](/wcag/1.1.1)

<FooterInfo />
