---
title: Grafieken · Afbeeldingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Grafieken
pagination_label: Grafieken
description: Richtlijnen voor grafieken.
slug: /richtlijnen/content/afbeeldingen/grafieken
keywords:
  - afbeeldingen
  - toegankelijke afbeeldingen
  - informatieve afbeelding
  - informatieve afbeeldingen
  - informatief
  - kleurgebruik
  - kleurcontrast
  - grafieken
---

<!-- @license CC0-1.0 -->

import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Grafieken

In grafieken wordt vaak kleur gebruikt om onderdelen van de data van elkaar te onderscheiden. Maar niet iedereen ziet kleur op dezelfde manier. Daarom mag kleur nooit de enige manier zijn om informatie over te brengen.

## Wat kan er misgaan?

Een veelvoorkomend probleem is dat verschillende onderdelen alleen worden onderscheiden door kleur. Denk aan:

- lijnen in een lijngrafiek waarbij elke lijn alleen een andere kleur heeft;
- staven in een staafdiagram zonder labels of visuele verschillen;
- segmenten in een cirkeldiagram zonder beschrijvingen in of bij de afbeelding.

Voor mensen met kleurenblindheid of bij het afdrukken in zwart-wit is de informatie dan lastig of niet te begrijpen.

## Wat kun je doen?

Zorg dat kleurgebruik altijd wordt ondersteund door extra visuele of tekstuele informatie:

- gebruik verschillende lijnstijlen zoals stippels of streepjes;
- voeg labels toe bij de onderdelen van de grafiek, niet alleen in de legenda;
- gebruik symbolen of patronen om visuele verschillen te versterken;
- controleer of alle tekst goed leesbaar is, met voldoende contrast en zonder overlap.

### Voorbeelden van kleurgebruik in een grafiek

In de onderstaande afbeelding staan twee grafieken over de populariteit van browsers. De eerste grafiek laat de gegevens van de verschillende browsers zien in gekleurde lijntjes. De tweede grafiek is dezelfde grafiek, maar dan in alleen grijstinten, om kleurenblindheid te simuleren. In deze grijze grafiek is het onmogelijk de data goed uit te lezen.

![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-fout.png)

Hoe moet het dan wel? Gebruik naast kleur ook een andere manier om de data te onderscheiden. Bijvoorbeeld stippeltjes of streepjes.

In onderstaande afbeelding worden de lijntjes op verschillende manieren weergegeven zodat ze in grijstinten ook goed onderscheidbaar zijn. Zo bestaat één van de lijnen uit stippen, één uit streepjes en één uit afwisselend streepjes en stippen. De vierde lijn is een doorgetrokken lijn. Op deze manier is het niet nodig om kleuren te onderscheiden.
![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde maar verschillend gestreepte lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-goed.png)

De data over browsergebruik komt van [statcounter.com](https://gs.statcounter.com/browser-market-share#monthly-200901-202412).

### Tips voor staafdiagrammen en cirkeldiagrammen

- Geef uitleg in of bij de grafiek, niet alleen in de legenda.
- Zorg voor voldoende contrast tussen kleuren, zodat onderdelen goed te onderscheiden zijn.
- Gebruik naast kleur ook andere visuele kenmerken, zoals patronen of arceringen, voor extra herkenbaarheid.
- Laat genoeg ruimte tussen de grafiekelementen zodat alles goed zichtbaar blijft.
- Bied een alternatief aan, zoals een tabel met dezelfde informatie, voor mensen die de grafiek niet goed kunnen zien of begrijpen.

[Lees ook de richtlijnen voor kleurgebruik](/richtlijnen/content/tekstopmaak/kleurgebruik/)

### Voorbeeld van een toegankelijk staafdiagram

In het volgende staafdiagram is goed rekening gehouden met toegankelijkheid: de verschillende staven zijn niet alleen van elkaar te onderscheiden met kleur, maar ook met patronen. Er is voldoende ruimte tussen de elementen, een duidelijke legenda maakt de gegevens leesbaar en de informatie is ook beschikbaar in tabelvorm. De afbeelding is afkomstig van het [dashboard digitoegankelijk](https://dashboard.digitoegankelijk.nl/).

![Afbeelding van een staafdiagram op het dashboard van DigiToegankelijk waarin rekening is gehouden met de voorgaande tips](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen-content-afbeeldingen-grafieken-kleurgebruik.png)

## Alternatieve tekst bij grafieken

Denk er ook aan dat een grafiek een afbeelding is. Geef dus altijd een goede alternatieve tekst of beschrijving. Meer daarover lees je bij de [richtlijnen voor informatieve afbeeldingen](/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen).

## Hoe te testen

Ook zonder technische kennis kun je controleren of een grafiek voor iedereen begrijpelijk is:

- Is de informatie ook zonder kleur te begrijpen?  
  Kijk of je het verschil tussen onderdelen van de grafiek nog kunt zien als je geen kleuren kunt onderscheiden. Je kunt dit zelf testen door de grafiek in zwart-wit te bekijken of door een kleurenblindheidssimulator te gebruiken. Op [de pagina over gebruik van kleur](/wcag/1.4.1#hoe-te-testen) lees je hoe je dit doet, inclusief handige tools.
- Zijn de verschillende onderdelen gemarkeerd met labels, patronen of tekst?  
  Controleer of er naast kleur ook andere manieren zijn om onderscheid te maken, zoals tekstlabels of verschillende lijnstijlen.
- Is de tekst in en rond de grafiek goed leesbaar?  
  Let op voldoende contrast tussen tekst en achtergrond, en controleer of de tekst niet over visuele elementen heen valt. Gebruik hiervoor, bijvoorbeeld, [de contrastchecker op deze website](/contrast).
- Wordt de grafiek ondersteund door een toelichting in de lopende tekst of een alternatief?  
  Zorg dat de boodschap van de grafiek ook in woorden beschikbaar is.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [1.4.1 Gebruik van kleur](/wcag/1.4.1)
- [1.4.3 Contrast (minimum)](/wcag/1.4.3)
- [1.4.11 Contrast van niet-tekstuele content](/wcag/1.4.11)

<FooterInfo />
