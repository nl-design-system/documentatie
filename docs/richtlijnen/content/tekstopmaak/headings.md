---
title: Koppen · Tekstopmaak · Content · Richtlijnen
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

Koppen vormen de ruggengraat van de inhoud van een pagina. Aan de hand van koppen kan een gebruiker snel wegwijs worden in de inhoud van een webpagina. Zorg voor een duidelijke structuur van de tekst door gebruik te maken van koppen. Dit is heel belangrijk. Want zo begrijpen bezoekers de inhoud en opbouw van de tekst. Daarnaast maakt het het navigeren op pagina's makkelijker.

## Voor wie zijn toegankelijke koppen belangrijk?

Gebruikers van [screenreaders](/woordenlijst/#screenreader) kunnen een lijst van koppen oproepen en daarmee snel naar een kopje navigeren. Ook ziende bezoekers scannen de inhoud van een pagina aan de hand van koppen. Daarom is het belangrijk dat een kopje de inhoud onder de kop goed beschrijft. De koppen zijn daarmee een soort inhoudsopgave van de webpagina. Dit helpt mensen om snel de informatie te vinden die ze zoeken.

Bezoekers die gebruik maken van een screenreader kunnen ook met sneltoetsen snel door de koppen op een pagina navigeren. Laat koppen daarom ook niet leeg. Ook lege koppen worden herkend door screenreaders. Maar omdat ze geen beschrijvende tekst bevatten scheppen ze vooral verwarring in plaats van verduidelijking.

<Guideline appearance="dont" title="Koppen leeg laten">
  <Canvas language="html" defaultExpandedCode>
    {() => (
      <>
          <p>
            Voorzie een kop altijd van een beschrijvende tekst. Zorg ervoor dat koppen niet leeg zijn. Bijvoorbeeld om extra witruimte te creëren.
          </p>
          <h2>&nbsp;</h2>
          <p>Zo'n lege kop wordt namelijk wel herkend door hulpsoftware. Maar de gebruiker kan er vervolgens helemaal niks mee. Het schept met name verwarring.</p>
      </>
    )}
  </Canvas>
</Guideline>

Ook ziende bezoekers maken gebruik van de koppenstructuur op een pagina. Doordat koppen van verschillende niveaus er anders uit zien, is het snel duidelijk hoe de informatie op de pagina gestructureerd is.

## Opmaak van koppen

Een koptekst moet opgemaakt zijn als echte kop. Gebruik daarvoor de opties die het contentmanagementsysteem waarin je werkt je biedt. Vaak kun je in een uitklapbaar lijstje kiezen welke opmaak je tekst moet krijgen, bijvoorbeeld een paragraaf of kop van niveau 1 of 2. Gebruik een kop niet enkel en alleen om tekst groot en vet te maken.

<Guideline appearance="dont" title="Tekst dikgedrukt en groter maken en een andere kleur geven zodat het op een kop lijkt.">
  <Canvas language="html">
    {() => (
      <>
          <strong style={{ color: 'purple', fontSize: '200%' }}>
            Dit is geen kop
          </strong>
          <p>
            Een [screenreader](/woordenlijst/#screenreader) herkent deze tekst niet als een kop. Hierdoor verschijnt de tekst ook niet in het overzicht met koppen en kunnen bezoekers geen sneltoetsen gebruiken om tussen de koppen te navigeren.
          </p>
      </>
    )}
  </Canvas>
</Guideline>

## Inhoud van koppen

Koppen moeten goed beschrijven waar de tekst onder de kop over gaat. Een duidelijke kop beschrijft de inhoud eronder, als kleine samenvatting. Dit is handig voor mensen die blind of slechtziend zijn, dyslectisch zijn of een cognitieve beperking hebben, en het helpt de scannende gebruikers om snel de informatie te vinden die ze zoeken.

## Kopniveaus

Koppen kunnen verschillende niveaus hebben. Door de verschillende niveaus zorg je voor een goede volgorde en deel je de tekst overzichtelijk in.

### Vergeet kopniveau 1 niet

Elke pagina heeft een hoofdtitel, ook wel kopniveau 1, nodig. Dit is het begin van de pagina-opbouw en helpt gebruikers om snel te begrijpen waar de pagina over gaat. Voor gebruikers met een schermlezer is dit vaak het eerste dat ze horen.

Kopniveau 1 is ook de paginatitel. Zorg daarom dat deze titel binnen de hele website uniek is. Als kopniveau 1 ontbreekt, is het lastiger om te begrijpen waar de pagina over gaat. Gebruik deze kop om het onderwerp van de pagina aan te geven. Plaats hem boven alle andere koppen en gebruik hem maar één keer per pagina.

### Sla geen kopniveaus over

Gebruik koppen in volgorde. Begin bijvoorbeeld met een Kop 2 onder de hoofdkop, daarna een Kop 3, dan een Kop 4. Sla geen niveaus over — zet dus geen Kop 4 direct onder een Kop 2.

Van boven naar beneden mag je geen niveaus overslaan. Van beneden naar boven wel. Het is prima om na een Kop 4 weer een nieuwe sectie te beginnen met een Kop 2.

<Guideline appearance="do" title="Gebruik kopniveaus in de de goede volgorde.">
  <Canvas language="html">
    {() => (
      <>
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
           <h2>Kop met niveau 2</h2>
          <p>
            Als je in een tekst weer een nieuw hoofdstuk wilt beginnen dan mag je hier weer H2 gebruiken.
            Terug omhoog mag je wel kopniveaus overslaan.
          </p>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="dont" title="Van boven naar beneden een kopniveau overslaan.">
  <Canvas language="html">
    {() => (
      <>
          <h1>Dit is een kop met niveau 1</h1>
          <p>
            Sla, van boven naar beneden, geen niveaus over door bijvoorbeeld een kop van niveau 3 onder een kop van niveau 1 te plaatsen. 
          </p>
          <h3>Dit is een kop met niveau 3</h3>
          <p>
            Dit is verwarrend voor bezoekers die gebruik maken van hulpsoftware.
          </p>
      </>
    )}
  </Canvas>
</Guideline>

## Hoe te testen

Of koppen goed zijn gebruikt, kun je voor een groot deel beoordelen door de pagina te lezen en logisch na te denken over structuur en betekenis. Gebruik onderstaande punten als leidraad:

- Beschrijft elke kop de inhoud die eronder valt?
  De tekst van een kop moet duidelijk maken waar het volgende stukje content over gaat.
- Worden koppen alleen gebruikt om structuur aan te brengen?
  Soms worden visueel opvallende teksten als ‘kop’ opgemaakt, zonder dat ze inhoud structureren. Dat is verwarrend. Gebruik koppen alleen als ze echt een nieuwe sectie inleiden.
- Is er een duidelijke hiërarchie van kopniveaus (H1, H2, H3…)?
  De volgorde van de koppen moet logisch zijn en geen niveaus overslaan. Een H3 mag niet direct onder een H1 vallen.
- Is er één H1 die de inhoud van de pagina beschrijft?
  Deze H1 moet uniek zijn per pagina. Een H1 als ‘Welkom’ of ‘Nieuws’ op elke pagina helpt niemand.
- Zijn er geen lege of nietszeggende koppen?
  Een kop als ‘Overzicht’ of ‘Klik hier’ zegt weinig over de inhoud. Zorg dat elke kop betekenisvol is.
- Controleer op lege koppen.
  Let in de preview op opvallende witruimte of lege plekken: dat kan duiden op een kop zonder inhoud. Die wordt wel voorgelezen door screenreaders, maar zegt niets. Vul de kop aan of verwijder ‘m als hij overbodig is.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](https://nldesignsystem.nl/wcag/1.3.1)
- [Succescriterium 2.4.6 Koppen en labels](https://nldesignsystem.nl/wcag/2.4.6)
- [Succescriterium 2.4.10 Paragraafkoppen](https://nldesignsystem.nl/wcag/2.4.10)

<FooterInfo />
