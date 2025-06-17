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

Grafieken maken informatie visueel. Maar niet iedereen ziet of begrijpt die informatie op dezelfde manier. Als contentmaker bepaal je meestal niet hoe de grafiek is ontworpen, maar je kunt wel signaleren wanneer informatie ontbreekt of niet duidelijk is. Je kunt dan zorgen voor aanvulling in de tekst of vragen om aanpassing.

Op deze pagina lees je waar je op kunt letten om grafieken toegankelijker te maken voor een brede groep gebruikers.

## Wat kan er misgaan?

Een grafiek is meestal een afbeelding. En dus niet vanzelfsprekend voor iedereen toegankelijk. Problemen ontstaan vooral als informatie alleen visueel wordt overgebracht. Bijvoorbeeld:

- onderdelen die alleen te onderscheiden zijn door kleur;
- ontbrekende tekstlabels of toelichting;
- uitleg die alleen zichtbaar is via een muisactie (tooltips);
- grafieken die niet werken met schermlezers of andere hulptechnologie.

Als je deze problemen herkent, kun je zorgen dat de grafiek wordt aangevuld of aangepast.

## Wat kun je doen?

Ook als je de grafiek niet zelf maakt, kun je bijdragen aan de toegankelijkheid:

- Vat de boodschap samen in tekst. Geef in de lopende tekst kort weer wat de grafiek laat zien.
- Controleer of de grafiek zonder kleur te begrijpen is. Zijn onderdelen ook herkenbaar voor mensen die geen kleuren zien?
- Let op leesbaarheid. Is de tekst in en rond de grafiek goed leesbaar, met genoeg contrast?
- Zorg dat belangrijke informatie niet alleen in een tooltip staat. Vraag om vaste weergave of een toelichting in tekst.
- Bied een alternatief. Bijvoorbeeld een tabel met dezelfde gegevens.
- Wees kritisch. Twijfel je of een grafiek duidelijk of bruikbaar is voor iedereen? Vraag na of het anders kan.

## Voorbeelden van kleurgebruik in een grafiek

In de onderstaande afbeelding staan twee grafieken over de populariteit van browsers. De eerste grafiek laat de gegevens van de verschillende browsers zien in gekleurde lijntjes. De tweede grafiek is dezelfde grafiek, maar dan in alleen grijstinten, om kleurenblindheid te simuleren. In deze grijze grafiek is het onmogelijk de data goed uit te lezen.

![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-fout.png)

Hoe moet het dan wel? Gebruik naast kleur ook een andere manier om de data te onderscheiden. Bijvoorbeeld stippeltjes of streepjes.

In onderstaande afbeelding worden de lijntjes op verschillende manieren weergegeven zodat ze in grijstinten ook goed onderscheidbaar zijn. Zo bestaat één van de lijnen uit stippen, één uit streepjes en één uit afwisselend streepjes en stippen. De vierde lijn is een doorgetrokken lijn. Op deze manier is het niet nodig om kleuren te onderscheiden.

![Twee verschillende weergaven van een grafiek over de populariteit van verschillende webbrowsers, een met gekleurde maar verschillend gestreepte lijntjes en daarnaast dezelfde grafiek in grijstinten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-goed.png)

De data over browsergebruik komt van [statcounter.com](https://gs.statcounter.com/browser-market-share#monthly-200901-202412).

### Tips voor staafdiagrammen en cirkeldiagrammen

Ook voor staaf- en cirkeldiagrammen geldt: denk verder dan alleen vorm en kleur.

- Geef uitleg in of bij de grafiek, niet alleen in de legenda.
- Gebruik voldoende kleurcontrast.
- Voeg patronen of andere visuele kenmerken toe voor herkenbaarheid.
- Laat genoeg ruimte tussen de grafiekelementen.
- Bied een alternatief aan, zoals een tabel.

[Lees ook de richtlijnen voor kleurgebruik](/richtlijnen/content/tekstopmaak/kleurgebruik/)

### Voorbeeld van een toegankelijk staafdiagram

In het volgende staafdiagram is goed rekening gehouden met toegankelijkheid: de verschillende staven zijn niet alleen van elkaar te onderscheiden met kleur, maar ook met patronen. Er is voldoende ruimte tussen de elementen, een duidelijke legenda maakt de gegevens leesbaar en de informatie is ook beschikbaar in tabelvorm. De afbeelding is afkomstig van het [dashboard digitoegankelijk](https://dashboard.digitoegankelijk.nl/).

![Voorbeeld van een toegankelijk staafdiagram met patronen goede leesbaarheid en toelichting in tekst en tabel](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen-content-afbeeldingen-grafieken-kleurgebruik.png)

## Alternatieve tekst bij grafieken

Een grafiek is meestal een afbeelding. Geef dus altijd een goede alternatieve tekst (alt-tekst) die de boodschap kort samenvat. Is de grafiek ingewikkeld? Verwijs dan in de alt-tekst naar de toelichting in tekst of een tabel.

Meer weten? Bekijk de [richtlijnen voor informatieve afbeeldingen](/richtlijnen/content/afbeeldingen/informatieve-afbeeldingen).

## Hoe te testen

Ook zonder technische kennis kun je controleren of een grafiek begrijpelijk is:

- Is de grafiek ook zonder kleur te begrijpen?  
  Bekijk de grafiek in grijstinten of gebruik een kleurenblindheidssimulator. Op de [pagina over gebruik van kleur](/wcag/1.4.1#hoe-te-testen) staan handige tools.
- Zijn onderdelen te herkennen met labels, patronen of tekst?  
  Kijk of er meer is dan alleen kleur om onderdelen te herkennen.
- Is tekst in of bij de grafiek goed leesbaar?  
  Controleer het contrast. Gebruik zo nodig [de contrastchecker](/contrast/).
- Staat de informatie ook in tekst of een tabel?  
  Zorg dat de boodschap niet alleen in een afbeelding staat, maar ook in woorden beschikbaar is.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

De volgende succescriteria zijn het meest relevant voor het toegankelijk maken van grafieken:

- [1.1.1 Niet-tekstuele content](/wcag/1.1.1)
- [1.4.1 Gebruik van kleur](/wcag/1.4.1)
- [1.4.3 Contrast (minimum)](/wcag/1.4.3)
- [1.4.11 Contrast van niet-tekstuele content](/wcag/1.4.11)

<FooterInfo />
