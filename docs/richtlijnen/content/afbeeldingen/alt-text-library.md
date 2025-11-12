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

## Context is bepalend

De juiste alt-tekst hangt af van de context. Een afbeelding van een koe kan decoratief zijn bij een verhaal over het boerenleven, maar informatief in een artikel over verschillende koeienrassen.

Op een gemeentelijke website kan een foto van het gemeentehuis volstaan met “gemeentehuis van Amersfoort” als het artikel over de organisatie gaat. Gaat de tekst over duurzame verbouwingen, dan beschrijf je in de alt-tekst de zichtbare verduurzamingen zoals de zonnepanelen op het dak.

De context bepaalt dus of een afbeelding decoratief of informatief is, en wat er precies in de alt-tekst moet staan.

<!-- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) -->

## Informatieve afbeelding

Een informatieve afbeelding ondersteunt of verduidelijkt de inhoud van de pagina. Dat kan een eenvoudige afbeelding zijn, zoals een foto of illustratie, of een complexe, zoals een grafiek of kaart.

### Alt-tekst bij een eenvoudige informatieve afbeelding

Beschrijf in de alt-tekst kort wat er te zien is en wat relevant is voor de inhoud. Laat weg wat niet belangrijk is om de boodschap te begrijpen.

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

Wil je meer uitleg geven bij de afbeelding? Voeg dan een onderschrift toe. Zet niet te veel tekst in de alt-tekst.

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

Of een afbeelding echt decoratief is, hangt af van de context. Een foto die op de ene pagina puur sfeer toevoegt, kan op een andere pagina juist informatie overbrengen en dan wél een alt-tekst nodig hebben.

[Meer voorbeelden invoegen]

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

Tekst in een afbeelding wordt niet voorgelezen door een screenreader en kan niet worden aangepast aan de behoeften van de bezoeker. Gebruik daarom liever gewone tekst in HTML en bied altijd een tekstueel alternatief aan.

Soms is een afbeelding van tekst wél gerechtvaardigd, bijvoorbeeld bij een logo of als de typografie of vormgeving onderdeel is van de boodschap. In dat geval is het belangrijk om de juiste alt-tekst toe te voegen.

### Alt-tekst bij een afbeelding met tekst

Als de tekst in de afbeelding belangrijk is voor de inhoud, zet die tekst dan ook in de alt-tekst. Gaat het om decoratieve tekst of stijl zonder betekenis, laat de alt-tekst dan leeg.

<!-- Doen
Beschrijf alleen de betekenis van de tekst, niet hoe de tekst eruitziet.

Voorbeeld
Afbeelding: Logo van de Rijksoverheid.
Alt-tekst: Rijksoverheid. -->

### Complexe afbeeldingen met tekst

Een complexe afbeelding met tekst bevat meerdere onderdelen die samen betekenis geven, zoals labels in een grafiek, een infografiek of een routekaart met tekst.

Doen
• Geef in de alt-tekst een korte samenvatting van de inhoud.
• Zet de volledige tekst en uitleg naast of onder de afbeelding.
• Verwijs in de alt-tekst naar die tekstuele beschrijving.

Voorbeeld
Afbeelding: Infografiek over stappen van een subsidieaanvraag.
Alt-tekst: Stappen van een subsidieaanvraag. De volledige beschrijving staat onder de afbeelding.

![..](https://upload.wikimedia.org/wikipedia/commons/c/c0/Independent-Turkic-States.png)
1[..](https://upload.wikimedia.org/wikipedia/commons/2/22/GLAMwiki_Toolset_username_and_user_rights_diagram.png)
![..](https://upload.wikimedia.org/wikipedia/commons/5/57/Bar_graph_-_stock_price_statistics.jpg)

### Functionele afbeeldingen met tekst

Een functionele afbeelding met tekst is een afbeelding waarmee je iets kunt doen, bijvoorbeeld een knop, link of waarschuwing met tekst erin.

Doen
• Beschrijf in de alt-tekst de functie van de afbeelding, niet de tekst zelf.
• Gebruik liever echte tekst op de knop of link in plaats van tekst in een afbeelding.

Voorbeeld
Afbeelding: Knop met het woord “Verstuur”.
Alt-tekst: Formulier versturen.

![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo-secondary.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png)

### Tekst zonder toegevoegde waarde

Soms bevat een afbeelding tekst die alleen is toegevoegd als visueel element. Bijvoorbeeld decoratieve banners of achtergronden met woorden of cijfers die geen betekenis hebben.

Doen
• Laat de alt-tekst leeg (alt=""), zodat de afbeelding wordt genegeerd door schermlezers.
• Controleer of de informatie die eventueel in de afbeelding staat, ook elders in tekst beschikbaar is.

Voorbeeld
Afbeelding: Banner met het woord “Welkom” in sierletters.
Alt-tekst: (leeg laten)

![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_lettertype.png)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_regelafstand.png)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/verzendknoppen.jpg)
![..](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag-1-4-1-grafiek-fout.png)

<FooterInfo />
