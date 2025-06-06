---
title: Waar moet een alternatieve tekst staan? · Afbeeldingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Waar moet een alternatieve tekst staan?
pagination_label: Waar moet een alternatieve tekst staan?
description: Richtlijnen over de plaats van een alternatieve tekst voor afbeeldingen in NL Design System.
slug: /richtlijnen/content/afbeeldingen/alt-plaats
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
  - caption
  - accordion
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Waar moet een alternatieve tekst staan?

Als contentspecialist werk je meestal in een contentmanagementsysteem (CMS). Veel CMS'en bieden de mogelijkheid om op verschillende manieren tekstalternatieven toe te voegen.

## Het alt-attribuut van een afbeelding

Bij het invoegen van een afbeelding in je content krijg je meestal de optie om een alternatieve tekst in te vullen. Die wordt dan geplaatst als alt-attribuut bij de afbeelding (in het img -element). Dit is ook de tekst die bezoekers te zien krijgen als de afbeelding niet geladen wordt. Deze tekst is verder niet zichtbaar en zit in de code gekoppeld aan je afbeelding. Daardoor wordt deze tekst bijvoorbeeld door een schermlezer voorgelezen.

Als je een decoratieve afbeelding hebt die je géén alternatieve tekst wilt geven, bieden de meeste CMS'en daar ook een optie voor. Dan staat er bijvoorbeeld onder of boven het veld waar je de alternatieve tekst kunt invoeren: 'of laat leeg om als decoratief te markeren'. Soms is het is een optie die je aan kunt vinken.

Soms kun je naast de alternatieve tekst ook een titel (title) invoeren. Dit is de tekst die verschijnt als je met je muis over de afbeelding beweegt. Deze titel wordt niet altijd voorgelezen door voorleessoftware. Daarom is het niet voldoende om hier je alternatieve tekst te plaatsen. Als je zowel de titel als het alt-attribuut invult, kan voorleessoftware beide teksten voorlezen, wat storend is voor bezoekers. Laat de titel daarom bij voorkeur leeg.

Vraag om deze functionaliteit bij de beheerder of leverancier van je website als je deze optie niet hebt.

## Onderschrift (caption)

Een andere mogelijkheid die een CMS kan hebben, is het toevoegen van een onderschrift. Dit kan een goede plek zijn om een wat uitgebreidere beschrijving te geven. Als je van deze optie gebruik wilt maken, voeg je altijd eerst een korte beschrijving in het alt-attribuut toe. Uitgebreidere informatie plaats je daarna in het onderschrift. Het voordeel van een onderschrift is dat het voor iedereen zichtbaar is, niet alleen voor mensen die hulpsoftware gebruiken.

<Guideline appearance="do" title="Een onderschrift gebruiken voor een langere beschrijving">
  <Canvas language="html">
    {() => (
      <>
        <figure>
         <img src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Amersfoortse-Dierentuin.jpg" alt="Twee mensen op een terras." />
         <figcaption>1963 - Op het terras van het café van de Amersfoortse dierentuin krijgen twee bezoekers een kopje koffie geserveerd. Dat is in eerste instantie niet heel bijzonder, maar het feit dat zij allebei een Afrikaans jachtluipaard aan hun voeten hebben liggen waarvan zij zelf de riem vasthouden wel!</figcaption>
        </figure>
      </>
    )}
  </Canvas>
</Guideline>

## Een tekst in de buurt van de afbeelding

Soms biedt een alt-attribuut of een onderschrift niet voldoende ruimte voor een complete beschrijving van een afbeelding. In dat geval kun je in de beschrijving in het alt-attribuut een korte beschrijving toevoegen en daarin de plek op de pagina beschrijven waar een uitgebreidere beschrijving staat.

Dit is handig bij bijvoorbeeld uitgebreide grafieken waarin veel informatie is opgenomen. Of bij een infographic.

Een voorbeeld van de tekst in het alt-attribuut kan dan zijn:

alt="Infographic migratie Nederland, zie voor een uitgebreide beschrijving de tekst direct onder deze afbeelding"

Onder de afbeelding plaats je vervolgens een tekst met daarin de informatie uit de infographic. Vergeet niet een kopje toe te voegen boven deze tekst, zodat gebruikers van hulpsoftware de tekst snel kunnen vinden. Als jouw CMS de optie biedt, kun je ervoor kiezen de tekst in een Accordion (uitklapper) te plaatsen. Bezoekers die de tekst willen lezen kunnen daar dan zelf voor kiezen en bezoekers die de tekst niet willen lezen kunnen de tekst overslaan.

## Hoe te testen

Stel jezelf, bij elke afbeelding die je hebt geplaatst, de volgende vragen:

- Heb je de alt-tekst ingevuld op de juiste plek in het CMS? Òf bewust leeg gelaten omdat het een [decoratieve afbeelding](l/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen) betreft?
- Gebruik je ook een bijschrift? Vertelt het bijschrift dan iets extra’s, is het geen herhaling van de alt-tekst?
- Bevat de afbeelding complexe informatie, zoals een grafiek of schema? Is extra uitleg toegevoegd in de omliggende tekst of onder de afbeelding?
- Heb je in de alt-tekst verwezen naar die toelichting? Zet in de alt-tekst bijvoorbeeld: “Toelichting staat onder de afbeelding.”

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.1.1 Niet-tekstuele content](/wcag/1.1.1)

<FooterInfo />
