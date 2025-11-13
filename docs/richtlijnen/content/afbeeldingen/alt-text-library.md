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

Afbeeldingen komen in veel vormen: foto’s, iconen, grafieken, decoraties, infographics en meer. Op deze pagina zie je voorbeelden van verschillende typen afbeeldingen, met uitleg over wanneer je wel of geen alt-tekst toevoegt.

Deze uitleg sluit aan op de algemene richtlijnen over afbeeldingen. Je leest hier per situatie wat de juiste keuze is en krijgt voorbeelden en praktische tips.

<!-- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) -->

## Informatieve afbeelding

Een informatieve afbeelding ondersteunt of verduidelijkt de inhoud van de pagina. Dat kan een eenvoudige afbeelding zijn, zoals een foto of illustratie, of een complexe, zoals een grafiek of kaart.

### Alt-tekst bij een eenvoudige informatieve afbeelding

<Guideline appearance="do" title="Beschrijf kort wat er op de afbeelding te zien is en waarom die relevant is voor de inhoud.">
  <Canvas language="html" defaultExpandedCode>
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

### Alt-tekst bij een complexe informatieve afbeelding

Bevat de afbeelding veel informatie, zoals cijfers, verbanden of meerdere onderdelen die samen betekenis geven? Geef dan een korte samenvatting in de alt-tekst en zet de volledige uitleg naast of onder de afbeelding.

<Guideline appearance="do" title="Schrijf een korte samenvatting in de alt-tekst. Voeg daarnaast altijd een uitgebreide beschrijving toe op de pagina zelf. Verwijs in de alt-tekst naar die beschrijving.">
  <Canvas language="html">
    {() => (
      <>
        <figure>
          <img src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen-content-afbeeldingen-voorbeeld-toegankelijkheidsladder.png" alt="Toegankelijkheidsladder. Voor een uitgebreide beschrijving zie de tekst na deze afbeelding" />
          <figcaption>
            Digitale toegankelijkheidsladder
            <ol reversed>
              <li>Vooruitstrevend - Digitale toegankelijkheid is volledig geintegreerd in de processen van de organisatie</li>
              <li>Proactief - Digitale toegankelijkheid heeft hoge prioriteit en wordt continu verbeterd</li>
              <li>Berekenend - De regels voor digitale toegankelijkheid worden belangrijk gevonden</li>
              <li>Reactief - Het verandergedrag rondom digitale toegankelijkheid is ad hoc en van korte duur</li>
              <li>Passief - Het nut van toegankelijkheidsmaatregelen wordt niet ingezien</li>
            </ol>
          </figcaption>
        </figure>
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

### Context is bepalend

Of een afbeelding een alt-tekst nodig heeft, hangt af van de context. Een afbeelding van een koe kan decoratief zijn bij een verhaal over het platteland en heeft dan geen alt-tekst nodig. In een artikel over verschillende koeienrassen is dezelfde afbeelding informatief en hoort er wel een alt-tekst bij.

<Guideline appearance="do" title="Als een op een pagina alleen sfeer toevoegt, laat dan de alt-tekst leeg.">
  <Canvas language="html" defaultExpandedCode>
    {() => (
      <>
        <h2>Agrotoerisme</h2>
        <p>Agrotoerisme is uitgegroeid tot een populaire vorm van toerisme in Nederland en biedt bezoekers de mogelijkheid om actief het plattelandsleven en de agrarische cultuur van het land te ervaren.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Cows_lying_down_-_geograph.org.uk_-_1474985.jpg" alt="" />
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Als de afbeelding de inhoud ondersteunt, geef dan een alt-tekst mee.">
  <Canvas language="html" defaultExpandedCode>
    {() => (
      <>
        <h2>Soorten koeien</h2>
        <p>Er zijn veel verschillende koeien. De ene koe wordt voor de melk gehouden en de andere voor het vlees. De hollandse melkkoe herken je vooral aan de kleur en het vlekkenpatroon</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Cows_lying_down_-_geograph.org.uk_-_1474985.jpg" alt="Hollandse zwart-wit gevlekte koeien liggend in een weiland" />
      </>
    )}
  </Canvas>
</Guideline>

## Functionele afbeelding

Een functionele afbeelding is een afbeelding waarmee je iets kunt doen, zoals op klikken, of waarmee een actie wordt aangegeven. Denk aan een pictogram op een knop, een afbeelding als link of een icoon met een waarschuwing.

[Meer voorbeelden invoegen]

<Guideline appearance="do" title="Beschrijf wat de functie is van de afbeelding, niet wat je ziet. De tekst moet duidelijk maken wat er gebeurt als iemand erop klikt of wat de bedoeling is van het pictogram.">
  <Canvas language="html">
    {() => (
      <>
        <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png" alt="Meer informatie over..." /></a>
      </>
    )}
  </Canvas>
</Guideline>

## Afbeeldingen met tekst

Sommige afbeeldingen bevatten tekst. Denk aan een logo, een knop met tekst of een infografiek. In dat geval is het belangrijk om goed na te gaan of de tekst nodig is in de afbeelding zelf, en hoe je die toegankelijk maakt.

Tekst in een afbeelding wordt niet voorgelezen door een screenreader en kan niet worden aangepast aan de behoeften van de bezoeker. Gebruik daarom liever gewone tekst in HTML.

Soms is een afbeelding van tekst wél gerechtvaardigd, bijvoorbeeld bij een logo of als de typografie onderdeel is van de boodschap.

### Complexe afbeeldingen met tekst

Bevat de afbeelding veel tekst, zoals in een infografiek of kaart? Geef dan in de alt-tekst een korte samenvatting en zet de volledige tekst naast of onder de afbeelding.

<Guideline appearance="do" title="Schrijf een korte samenvatting in de alt-tekst. Voeg daarnaast altijd een uitgebreide beschrijving toe op de pagina zelf. Verwijs in de alt-tekst naar die beschrijving.">
  <Canvas language="html">
    {() => (
      <>
        <figure>
          <img src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen-content-afbeeldingen-voorbeeld-toegankelijkheidsladder.png" alt="Toegankelijkheidsladder. Voor een uitgebreide beschrijving zie de tekst na deze afbeelding" />
          <figcaption>
            Digitale toegankelijkheidsladder
            <ol reversed>
              <li>Vooruitstrevend - Digitale toegankelijkheid is volledig geintegreerd in de processen van de organisatie</li>
              <li>Proactief - Digitale toegankelijkheid heeft hoge prioriteit en wordt continu verbeterd</li>
              <li>Berekenend - De regels voor digitale toegankelijkheid worden belangrijk gevonden</li>
              <li>Reactief - Het verandergedrag rondom digitale toegankelijkheid is ad hoc en van korte duur</li>
              <li>Passief - Het nut van toegankelijkheidsmaatregelen wordt niet ingezien</li>
            </ol>
          </figcaption>
        </figure>
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

<!-- ![..](https://upload.wikimedia.org/wikipedia/commons/c/c0/Independent-Turkic-States.png)
1[..](https://upload.wikimedia.org/wikipedia/commons/2/22/GLAMwiki_Toolset_username_and_user_rights_diagram.png)
![..](https://upload.wikimedia.org/wikipedia/commons/5/57/Bar_graph_-_stock_price_statistics.jpg) -->

### Functionele afbeeldingen met tekst

Een functionele afbeelding met tekst is een afbeelding waarmee je iets kunt doen, zoals een knop of link.

Beschrijf in de alt-tekst de functie van de afbeelding, niet de exacte tekst. Gebruik waar mogelijk echte tekst op de knop of link.

### Logo als link naar de homepage

<Guideline appearance="do" title="Benoem de organisatie, dat het om een logo gaat en waar de link naar verwijst">
  <Canvas language="html">
    {() => (
      <>
        <a href="#"><img alt="NL Design System logo, naar de homepage" src="https://raw.githubusercontent.com/nl-design-system/documentatie/9e5331b623e1bbd5bea950c934a20459e13b64bf/logo.svg" /></a>
         <p>Alternatieve tekst: NL Design System logo, naar de homepage</p>
      </>
    )}
  </Canvas>
</Guideline>

<Guideline appearance="do" title="Benoem alle tekst die in het logo staat in de alt-tekst">
  <Canvas language="html">
    {() => (
      <>
        <a href="#"><img alt="Logius, Ministerie van Binnenlandse Zaken en Koninkrijksrelaties logo, naar de homepage" src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png" /></a>
         <p>Alternatieve tekst: Logius, Ministerie van Binnenlandse Zaken en Koninkrijksrelaties logo, naar de homepage</p>
      </>
    )}
  </Canvas>
</Guideline>

<!-- #### Voorbeeld

Afbeelding: Knop met het woord “Verstuur”.
Alt-tekst: Formulier versturen.

![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo-secondary.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png) -->

### Tekst als visueel element

Soms bevat een afbeelding tekst die alleen voor de vorm is gebruikt, zoals een decoratieve banner met het woord Welkom.

Laat in dat geval de alt-tekst leeg (alt="") zodat schermlezers de afbeelding overslaan.

<!-- #### Voorbeeld

Afbeelding: Banner met het woord “Welkom” in sierletters.
Alt-tekst: (leeg laten)

![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_lettertype.png)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_regelafstand.png)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/verzendknoppen.jpg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-fout.png) -->

<FooterInfo />
