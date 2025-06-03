---
title: Kleurgebruik · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Kleurgebruik
pagination_label: Kleurgebruik
description: Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.
slug: /richtlijnen/content/tekstopmaak/kleurgebruik
keywords:
  - tekstopmaak
  - kleurgebruik
  - kleurcontrast
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Kleurgebruik

Kleurgebruik speelt een grote rol in hoe mensen content waarnemen. Niet iedereen ziet kleuren op dezelfde manier. Daarom is het belangrijk dat je informatie nooit alleen met kleur overbrengt, en dat tekst altijd goed leesbaar blijft tegen de achtergrond.

Als contentmaker heb je misschien geen invloed op het ontwerp of het kleurenschema van de website. Maar er zijn wel degelijk keuzes die je zelf maakt, bijvoorbeeld bij het toevoegen van tekst op een afbeelding, bij het kiezen van een grafiek of het instellen van een tekstkleur in het CMS.

## Bewust omgaan met kleurcontrast

Zorg dat tekst altijd goed leesbaar is. Niet alleen voor mensen met een visuele beperking maar ook voor omstandigheden met weinig contrast, zoals fel zonlicht op een mobiel scherm.

Let op het volgende:

- gebruik een tekstkleur die duidelijk afsteekt tegen de achtergrond;
- zorg voor voldoende verschil in helderheid en kleur;
- vermijd lichte tekst op een lichte afbeelding of vlak.

Gebruik kleur altijd bewust. Kleur kan informatie verduidelijken, maar mag nooit de enige manier zijn om iets uit te leggen.
Wil je kleur inzetten in je ontwerp of content? Lees dan meer over [kleurgebruik met een doel](/richtlijnen/stijl/kleuren/doel) en [voldoende contrast volgens de richtlijnen](/wcag/1.4.3).

## Gebruik een contrastchecker

Het is vaak lastig om op het oog te beoordelen of tekst voldoende afsteekt tegen de achtergrond. Je kunt hiervoor een contrastchecker gebruiken. Daarmee controleer je of het kleurcontrast voldoet aan de toegankelijkheidsrichtlijnen.

Een eenvoudige tool is [de contrastchecker op deze website](/contrast).
Je vult daar de kleur van je tekst en de achtergrond in, en je ziet meteen of het contrast voldoende is.

## Tekstkleur in het CMS

Sommige CMS’en bieden de mogelijkheid om zelf tekstkleuren aan te passen. Gebruik die optie alleen als het echt nodig is. Kies dan voor een kleur met voldoende contrast ten opzichte van de achtergrond. Gebruik nooit kleur als enige manier om nadruk te geven.

<!-- Dit omzetten naar Do's en Dont's -->

<Guideline appearance="do" title="Vette tekst gebruiken om tekst nadruk te geven">
  <Canvas language="html">
    {() => (
      <>
        Je kunt op eigen gelegenheid oversteken. <strong>Pas op!</strong> Dit is <strong>erg gevaarlijk</strong>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="dont" title="Kleur gebruiken om tekst nadruk te geven">
  <Canvas language="html">
    {() => (
      <>
        Je kunt op eigen gelegenheid oversteken. <span style={{ color: 'red' }}>Pas op!</span> Dit is <span style={{ color: 'red' }}>erg gevaarlijk</span>
      </>
    )}
  </Canvas>
</Guideline>

## Tekst op afbeeldingen

Gebruik geen complexe of drukke achtergrondafbeeldingen met tekst eroverheen. Is dat toch nodig? Controleer dan extra goed of de tekst nog leesbaar is.

<Guideline appearance="dont" title="Tekst over een complexe afbeelding of achtergrond plaatsen">
  <Canvas language="html">
    {() => (
      <>
        <div style={{ background:'center center no-repeat url("https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg")' }}>
          <h2 style={{ padding: '50px', color: 'white' }}>Kaarten van Nederland</h2>
        </div>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Kies een achtergrond die voldoende contrast biedt met de tekst">
  <Canvas language="html">
    {() => (
      <>
        <div style={{ background:'center center no-repeat url("https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Kaart.jpg")' }}>
          <h2 style={{ padding: '50px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }}>Kaarten van Nederland</h2>
        </div>
      </>
    )}
  </Canvas>
</Guideline>

## Grafieken

Gebruik je een grafiek als afbeelding in je content? Let er dan op dat de informatie in de grafiek voor iedereen begrijpelijk is. Dus ook voor mensen die kleuren niet goed kunnen onderscheiden.

Veel grafieken gebruiken kleur om verschil te laten zien tussen lijnen of balken. Maar als iemand kleurenblind is of de pagina in zwart-wit bekijkt, valt dat verschil weg.

Waar let je op als contentmaker?

- Is de grafiek ook te begrijpen zonder kleur?
  Bijvoorbeeld omdat er labels bij staan, of omdat lijnen verschillende streepjes of patronen hebben.
- Is er een korte uitleg in de tekst?
  Omschrijf in je tekst wat de grafiek laat zien. Zo voorkom je dat mensen de informatie missen als de grafiek niet duidelijk is.
- Is de tekst in de grafiek goed leesbaar?
  Vermijd kleine of vage letters. Als je de grafiek niet zelf maakt: vraag om een versie met duidelijke tekst.

### Voorbeeld van kleurgebruik in een grafiek

In de onderstaande afbeelding staan twee grafieken over de populariteit van browsers. De eerste grafiek laat de gegevens van de verschillende browsers zien in gekleurde lijntjes. De tweede grafiek is dezelfde grafiek, maar dan in alleen grijstinten, om kleurenblindheid te simuleren. In deze grijze grafiek is het onmogelijk de data goed uit te lezen.

![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-fout.png)

Hoe moet het dan wel? Gebruik naast kleur ook een andere manier om de data te onderscheiden. Bijvoorbeeld stippeltjes of streepjes.

In onderstaande afbeelding worden de lijntjes op verschillende manieren weergegeven zodat ze in grijstinten ook goed onderscheidbaar zijn. Zo bestaat één van de lijnen uit stippen, één uit streepjes en één uit afwisselend streepjes en stippen. De vierde lijn is een doorgetrokken lijn. Op deze manier is het niet nodig om kleuren te onderscheiden.
![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde maar verschillend gestreepte lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-goed.png)

De data over browsergebruik komt van [statcounter.com](https://gs.statcounter.com/browser-market-share#monthly-200901-202412).

## Hoe te testen

**De belangrijkste vuistregel bij gebruik van kleur:**

- Gebruik nooit alleen kleur om verschil te maken.  
  Gebruik je kleur om iets te benadrukken, zoals belangrijke woorden of het verschil tussen een goed en fout antwoord? Maak belangrijke tekst bijvoorbeeld vet en zorg dat je ook een ander signaal (zoals een icoon met alternatieve tekst, of een tekst) toevoegt.

**Zo beoordeel je het contrast:**

- Lees de tekst op een mobiel scherm in fel licht.  
  Kun je alles nog goed lezen? Lichte tekst op een lichte achtergrond valt in zulke situaties vaak weg.
- Gebruik een contrastchecker.  
  Met een [contrastchecker](/contrast) kun je exact bepalen of kleuren voldoende onderscheidend zijn ten opzichte van elkaar.
- Controleer of tekst leesbaar is op afbeeldingen.  
  Staat er tekst over een afbeelding of kleurvlak? Kijk dan of er genoeg contrast is, en of de tekst niet wegvalt.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [1.4.1 Gebruik van kleur](/wcag/1.4.1)
- [1.4.3 Contrast (minimum)](/wcag/1.4.3)
- [1.4.11 Contrast van niet-tekstuele content](/wcag/1.4.11)

<FooterInfo />
