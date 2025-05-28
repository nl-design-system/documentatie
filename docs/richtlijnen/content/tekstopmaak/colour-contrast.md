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

<Guideline appearance="do" title="Tekst plaatsen op een achtergrond met een goed contrast">
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

In grafieken wordt vaak met kleur gewerkt om onderdelen te onderscheiden. Maar dat werkt niet voor iedereen.

In de onderstaande afbeelding staan twee grafieken over de populariteit van browsers zien. De grafiek links laat de gegevens van de verschillende browsers zien in gekleurde lijntjes. De weergave rechts is dezelfde grafiek, maar dan in alleen grijstinten, om kleurenblindheid te simuleren. In deze grijze grafiek is het onmogelijk de data goed uit te lezen.

![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-fout.png)

Hoe moet het dan wel? Gebruik naast kleur ook een andere manier om de data te onderscheiden. Bijvoorbeeld stippeltjes of streepjes.

In onderstaande afbeelding worden de lijntjes weergegeven zodat ze in grijstinten ook goed onderscheidbaar zijn.
![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde maar verschillend gestreepte lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-goed.png)

De data browsergebruik komt van [statcounter.com](https://gs.statcounter.com/browser-market-share#monthly-200901-202412).

Dus **let op:** als je een grafiek gebruikt:

- Is er ook tekst of patroon toegevoegd om kleuren te ondersteunen?
- Is tekst in de afbeelding zelf goed leesbaar?

<FooterInfo />
