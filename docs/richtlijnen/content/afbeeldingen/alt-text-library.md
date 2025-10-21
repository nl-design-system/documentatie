---
title: Alt-tekst voorbeelden · Afbeeldingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Alt-tekst voorbeelden
pagination_label: Alt-tekst voorbeelden
description: Bibliotheek met voorbeelden van verschillende type alt-teksten.
slug: /richtlijnen/content/afbeeldingen/alt-tekst-voorbeelden
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
  - alt in cms
  - mediabibliotheek
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Schrijf de juiste alt-tekst bij elk type afbeelding

Afbeeldingen komen in veel vormen: foto’s, iconen, grafieken, decoratie, infographics en meer. Op deze pagina zie je per type afbeelding wat een goede alt-tekst is – en wanneer je die juist weglaat.

Deze uitleg sluit aan op de algemene richtlijnen over afbeeldingen en helpt je om per situatie de juiste keuze te maken. Je vindt hier voorbeelden, korte uitleg en praktische tips.

**N.B.** Voorbeeldingen ook in context.

[Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)

## Informatieve afbeelding

Een informatieve afbeelding ondersteunt of verduidelijkt de inhoud van de pagina. Denk aan een illustratie bij een stappenplan, een kaartje bij een routebeschrijving of een foto die iets uitlegt.

<Guideline appearance="do" title="Beschrijf kort wat er op de afbeelding te zien is en waarom die relevant is voor de inhoud.">
  <Canvas language="html">
    {() => (
      <>
        <h2>Horeca gelegenheden in Amersfoort</h2>
        <p>Koffie drinken kun je in Amersfoort niet alleen op hele mooie plekken, maar ook in héél bijzonder gezelschap.</p>
        <img src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen-Amersfoortse-Dierentuin.jpg" alt="Twee mensen krijgen koffie geserveerd op het terras van Direntuin Amersfoort. Aan hun voeten liggen twee luipaarden." />
      </>
    )}
  </Canvas>
</Guideline>

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

### Complexe afbeelding (zoals een grafiek of infographic)

Deze afbeeldingen bevatten veel informatie in één beeld, zoals cijfers, verbanden of meerdere onderdelen die samen betekenis geven. Denk aan staafdiagrammen, kaartvisualisaties of stappen in een proces.

<Guideline appearance="do" title="Schrijf een korte samenvatting in de alt-tekst. Voeg daarnaast altijd een uitgebreide beschrijving toe op de pagina zelf. Verwijs in de alt-tekst naar die beschrijving.">
  <Canvas language="html">
    {() => (
      <>
         <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Bar_graph_-_stock_price_statistics.jpg" alt="Staafdiagram met investering, verkoop en winst van de afgelopen vier jaar. Voor een uitgebreide beschrijving zie de tekst na deze afbeelding" />
        <table>
          <caption>Chart Title</caption>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Sales</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Year 1</th>
              <td>4.3</td>
              <td>2.4</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Year 2</th>
              <td>4</td>
              <td>3.5</td>
              <td>3</td>
            </tr>
            <tr>
              <th>Year 3</th>
              <td>3.5</td>
              <td>2.8</td>
              <td>3.8</td>
            </tr>
            <tr>
              <th>Year 4</th>
              <td>4.5</td>
              <td>2.8</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Geef de gegevens in een grafiek ook weer in een toegankelijke tabel direct onder of naast de afbeelding. Gebruik de alt-tekst om kort samen te vatten waar de grafiek over gaat en verwijs naar de tabel voor de volledige informatie.">
  <Canvas language="html">
    {() => (
      <>
         <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Bar_graph_-_stock_price_statistics.jpg" alt="Staafdiagram met investering, verkoop en winst van de afgelopen vier jaar. De volledige informatie uit grafiek staat in de tabel na deze afbeelding." />
        <table>
          <caption>Chart Title</caption>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Sales</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Year 1</th>
              <td>4.3</td>
              <td>2.4</td>
              <td>2</td>
            </tr>
            <tr>
              <th>Year 2</th>
              <td>4</td>
              <td>3.5</td>
              <td>3</td>
            </tr>
            <tr>
              <th>Year 3</th>
              <td>3.5</td>
              <td>2.8</td>
              <td>3.8</td>
            </tr>
            <tr>
              <th>Year 4</th>
              <td>4.5</td>
              <td>2.8</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </>
    )}
  </Canvas>
</Guideline>

## Decoratieve afbeelding

Een decoratieve afbeelding is alleen bedoeld voor aankleding of sfeer. De afbeelding voegt geen betekenis toe aan de inhoud van de pagina en mag daarom genegeerd worden door hulptechnologie.

<Guideline appearance="do" title="Laat het alt-attribuut leeg. Zo wordt de afbeelding overgeslagen door schermlezers.">
  <Canvas language="html">
    {() => (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/1183_Diamonds_and_Hearts.jpg" alt="" />
      </>
    )}
  </Canvas>
</Guideline>

## Functionele afbeelding

Een functionele afbeelding is een afbeelding waarmee je iets kunt doen, zoals op klikken of waarmee een actie wordt aangegeven. Denk aan een pictogram op een knop, een afbeelding als link of een icoon met een waarschuwing.

<Guideline appearance="do" title="Beschrijf wat de functie is van de afbeelding, niet wat je ziet. De tekst moet duidelijk maken wat er gebeurt als iemand erop klikt of wat de bedoeling is van het pictogram.">
  <Canvas language="html">
    {() => (
      <>
        <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png" alt="Meer informatie over..." /></a>
      </>
    )}
  </Canvas>
</Guideline>

## Met tekst

### Complex

![..](https://upload.wikimedia.org/wikipedia/commons/c/c0/Independent-Turkic-States.png)
1[..](https://upload.wikimedia.org/wikipedia/commons/2/22/GLAMwiki_Toolset_username_and_user_rights_diagram.png)
![..](https://upload.wikimedia.org/wikipedia/commons/5/57/Bar_graph_-_stock_price_statistics.jpg)

### Functioneel

![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo-secondary.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png)

### Visueel effect

![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_lettertype.png)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_regelafstand.png)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/verzendknoppen.jpg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-fout.png)

<FooterInfo />
