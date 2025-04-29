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

Met tabellen kun je data presenteren. Een tabel maak je toegankelijk zodat mensen die een schermlezer gebruiken bij elke cel kunnen achterhalen wat de bijbehorende koppen zijn. In het systeem waarmee je informatie op een site publiceert, kun je vaak aangeven of er alleen rijkoppen, alleen kolomkoppen of rijkoppen en kolomkoppen zijn. Dit geeft de relatie tussen kopcellen en gegevenscellen aan.

## Begrijpelijke tabellen maken

Tabellen zijn een goede manier om relaties tussen gegevens aan te geven. Maar een tabel kan ook snel erg complex worden. Probeer daarom altijd om tabellen overzichtelijk en begrijpelijk te maken, voor iedereen.

- Gebruik een goede logische tabelstructuur.
- Maak tabellen niet te ingewikkeld, dit maakt het moeilijker om tabellen toegankelijk te maken.
- Bedenk goed hoe data zo eenvoudig mogelijk weergegeven kan worden. Splits bijvoorbeeld ingewikkelde tabellen op in eenvoudige tabellen.

## Toegankelijke tabellen maken

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

<Guideline appearance="dont" title="Tussenkopjes gebruiken in de tabel die niet als koppen zijn aangegeven.
">
<Canvas language="html">
{() => (
<>

<table>
<tr>
<th>Datum</th>
<th>Evenement</th>
<th>Locatie</th>
</tr>
<tr><td colspan='3'><strong>Concerten in het voorjaar</strong></td></tr>
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
<tr><td colspan='3'><strong>Concerten in het najaar</strong></td></tr>
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

Gebruik tabellen niet alleen voor een mooiere opmaak. Met een tabel geef je namelijk een relatie aan tussen tabelcellen. Iemand die een schermlezer gebruikt, krijgt namelijk te horen dat er een tabel aanwezig is. En ook voor iedere cel in welke rij en in welke kolom de cel staat. Als er geen relatie is, is het gebruik van een tabel verwarrend.

<Guideline appearance="dont" title="Een tabel gebruiken voor mooiere opmaak">
  <Canvas language="html">
    {() => (
      <>
          <table>
            <tr>
              <td style={{width:'50%'}}><img src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_headings_in_voiceover.png"/></td>
              <td>De koppenstructuur zoals die wordt weergegeven door VoiceOver op MacOS</td>
            </tr>
          </table>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
