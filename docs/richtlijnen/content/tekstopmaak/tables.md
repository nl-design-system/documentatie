---
title: Tabellen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Tabellen
pagination_label: Tabellen
description: Gebruik tabellen om gegevens te laten zien, niet voor een mooiere opmaak.
slug: /richtlijnen/content/tekstopmaak/tabellen
keywords:
  - semantiek
  - tekstopmaak
  - structuur
  - tekststructuur
  - tabel
  - tabellen
  - tabelopmaak
  - tabelkop
  - tabelbeschrijving
  - tabelstructuur
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Tabellen

Met tabellen kun je data op een overzichtelijke manier presenteren. Ze zijn vooral geschikt om gestructureerde informatie te tonen, zoals cijferreeksen of vergelijkingen. Een toegankelijke tabel helpt ook mensen die een schermlezer gebruiken: zij moeten bij elke cel kunnen achterhalen wat de bijbehorende kolom- en/of rijkoppen zijn.

## Toegankelijke tabellen maken

Zorg ervoor dat je in het systeem waarmee je publiceert aangeeft welke cellen kopcellen zijn. Vaak kun je instellen of er kolomkoppen, rijkoppen of beide aanwezig zijn. Schermlezers gebruiken deze informatie om bij elke cel de juiste kop voor te lezen, zodat de structuur en betekenis van de gegevens duidelijk blijven.

<Guideline appearance="do" title="Markeer koppen als rijkoppen of kolomkoppen">
  <Canvas language="html">
    {() => (
      <>
          <table>
            <tr>
              <th>Datum</th>
              <th>Evenement</th>
              <th>Locatie</th>
            </tr>
            <tr>
              <td>6 mei 2025</td>
              <td>Rolling Stones</td>
              <td>Westerpark, Amsterdam</td>
            </tr>
            <tr>
              <td>10 juli 2025</td>
              <td>Beatles</td>
              <td>Goffertpark, Nijmegen</td>
            </tr>
          </table>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="dont" title="Tussenkopjes gebruiken in de tabel die niet als koppen zijn aangegeven.">
  <Canvas language="html">
    {() => (
      <>
          <table>
            <tr>
              <th>Datum</th>
              <th>Evenement</th>
              <th>Locatie</th>
            </tr>
            <tr>
              <td colspan='3'><strong>Concerten in het voorjaar</strong></td></tr>
            <tr>
              <td>6 mei 2025</td>
              <td>Rolling Stones</td>
              <td>Westerpark, Amsterdam</td>
            </tr>
            <tr>
              <td>7 mei 2025</td>
              <td>Rolling Stones</td>
              <td>Westerpark, Amsterdam</td>
            </tr>
            <tr>
              <td colspan='3'><strong>Concerten in het najaar</strong></td></tr>
            <tr>
              <td>10 oktober 2025</td>
              <td>Beatles</td>
              <td>Goffertpark, Nijmegen</td>
            </tr>
            <tr>
              <td>11 oktober 2025</td>
              <td>Beatles</td>
              <td>Goffertpark, Nijmegen</td>
            </tr>
          </table>
      </>
    )}
  </Canvas>
</Guideline>

## Begrijpelijke tabellen maken

Tabellen zijn een goede manier om relaties tussen gegevens aan te geven. Maar een tabel kan ook snel erg complex worden. Probeer daarom altijd om tabellen overzichtelijk en begrijpelijk te maken, voor iedereen.

- Gebruik een goede logische tabelstructuur.
- Maak tabellen niet te ingewikkeld, dit maakt het moeilijker om tabellen toegankelijk te maken.
- Bedenk goed hoe data zo eenvoudig mogelijk weergegeven kan worden. Splits bijvoorbeeld ingewikkelde tabellen op in eenvoudige tabellen.

<Guideline appearance="do" title="Complexere tabellen opsplitsen">
  <Canvas language="html">
    {() => (
      <>
        <table>
          <caption>Concerten in het voorjaar</caption>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Evenement</th>
              <th>Locatie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6 mei 2025</td>
              <td>Rolling Stones</td>
              <td>Westerpark, Amsterdam</td>
            </tr>
            <tr>
              <td>7 mei 2025</td>
              <td>Rolling Stones</td>
              <td>Westerpark, Amsterdam</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <table>
          <caption>Concerten in het najaar</caption>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Evenement</th>
              <th>Locatie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10 oktober 2025</td>
              <td>Beatles</td>
              <td>Goffertpark, Nijmegen</td>
            </tr>
            <tr>
              <td>11 oktober 2025</td>
              <td>Beatles</td>
              <td>Goffertpark, Nijmegen</td>
            </tr>
          </tbody>
        </table>
      </>
    )}
  </Canvas>
</Guideline>

## Doel van de tabel

Gebruik tabellen niet alleen voor een mooiere opmaak. Met een tabel geef je namelijk een relatie aan tussen tabelcellen. Iemand die een schermlezer gebruikt, krijgt namelijk te horen dat er een tabel aanwezig is. En ook voor iedere cel in welke rij en in welke kolom de cel staat. Als er geen relatie is, is het gebruik van een tabel verwarrend.

<Guideline appearance="dont" title="Een tabel gebruiken voor mooiere opmaak">
  <Canvas language="html">
    {() => (
      <>
        <table>
          <tr>
            <td style={{inlineSize:'50%'}}><img src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_headings_in_voiceover.png"/></td>
            <td>De koppenstructuur zoals die wordt weergegeven door VoiceOver op MacOS</td>
          </tr>
        </table>
      </>
    )}
  </Canvas>
</Guideline>

## Inhoud van de tabel

Zorg dat de inhoud van de tabel in een volgorde staat die óók begrijpelijk is voor een gebruiker met een schermlezer. De schermlezer leest een tabel voor per rij en van links naar rechts.

<Guideline appearance="dont" title="Gerelateerde informatie in verschillende rijen plaatsen">
  <Canvas language="html">
    {() => (
      <>
        <table>
          <tr>
            <th>Naam</th>
            <td>Jan</td>
            <td>Piet</td>
            <td>Kees</td>
          </tr>
          <tr>
            <th>Functie</th>
            <td>Docent Natuurkunde</td>
            <td>Netwerkbeheerder</td>
            <td>Docent Nederlands</td>
          </tr>
        </table>
        <p>Een schermlezer zal in dit geval eerst alle namen voor gaan lezen en daarna pas de functies. Het verband tussen die twee is dan helemaal verdwenen</p>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Gerelateerde informatie in kolommen plaatsen">
  <Canvas language="html">
    {() => (
      <>
        <table>
          <tr>
            <th>Naam</th>
              <th>Functie</th>
          </tr>
          <tr>
            <td>Jan</td>
              <td>Docent Natuurkunde</td>
          </tr>
            <tr>
            <td>Piet</td>
              <td>Netwerkbeheerder</td>
          </tr>
            <tr>
            <td>Kees</td>
              <td>Docent Nederlands</td>
          </tr>
        </table>
        <p>Een schermlezer zal in dit geval de naam en bijbehorende functie achter elkaar voorlezen.</p>
      </>
    )}
  </Canvas>
</Guideline>

## Hoe te testen

Lees de pagina door en controleer alle tabellen. Gebruik de onderstaande stappen als checklist:

- Controleer of de tabel is opgemaakt met de tabeloptie van het CMS.
  Gebruik de ingebouwde tabelopties van je contentmanagementsysteem om tabellen correct te markeren.
- Controleer of de koppen correct zijn gemarkeerd als kolomkoppen en/of rijkoppen.
  Zorg ervoor dat de eerste rij en/of kolom van de tabel is gemarkeerd als kop, zodat hulptechnologieën de structuur van de tabel correct kunnen interpreteren. ￼
- Controleer of de tabel niet te complex is.
  Vermijd het gebruik van samengevoegde cellen of geneste tabellen, omdat deze de toegankelijkheid kunnen verminderen. Overweeg om complexe tabellen op te splitsen in meerdere eenvoudige tabellen. ￼
- Controleer of de tabel niet wordt gebruikt voor opmaakdoeleinden.
  Gebruik tabellen alleen voor het presenteren van gestructureerde gegevens, niet voor het creëren van lay-outs of het positioneren van elementen op de pagina.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)
- [Succescriterium 1.3.2 Betekenisvolle volgorde](/wcag/1.3.2)

<FooterInfo />
