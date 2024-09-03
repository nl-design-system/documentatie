---
title: Iconen | Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Iconen
sidebar_position: 4
pagination_label: Iconen
description: Richtlijnen voor iconen
keywords:
  - iconen
  - functionele iconen
  - toptaak iconen
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Iconen

Iconen worden gebruikt om extra betekenis te geven. Ze brengen boodschappen in één oogopslag over en vestigen aandacht op belangrijke informatie. Ook kunnen ze hulp bieden aan iemand met een cognitieve beperking of als iemand moeite heeft met taal.

**Let op!** Tekst zou altijd voorrang moeten krijgen ten opzichte van iconen. Gebruik iconen alleen waar extra duidelijkheid gewenst is.

Binnen een Design System is het verstandig om iconen consistent toe te passen. Dat gaat gemakkelijk wanneer je gebruik maakt van een iconenset. Welke iconenset je gebruikt voor jouw organisatie staat je helemaal vrij.

Vanuit het NL Design System gebruiken we twee iconensets. De iconen in deze sets typeren we als [Functionele iconen](#functionele-iconen) en [Toptaak iconen](#toptaak-iconen).

## Functionele iconen

Bij functionele iconen is het belangrijk dat ze simpel van vorm zijn. Hierdoor kun je ze klein toepassen en blijven ze toch herkenbaar. Denk bijvoorbeeld aan een icoon voor een button of foutmelding.

![Button met pijl icoon, foutmelding met uitroepteken icoon, en link met potloot icoon.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_functioneel.png)

Voor het 'Voorbeeld thema' maken we gebruik van een selectie uit de [Tabler iconenset](https://tabler-icons.io/).

### Grid

#### Positioneer iconen binnen een vierkant grid.

Per icoon kan de vorm verschillen in hoogte en breedte. Denk bijvoorbeeld aan een stoplicht of een bus. Een iconenset wordt vaak ontworpen op basis van een vierkant grid.

![Fotocamera, klok en potloot icoon. Ieder op een vergroot grid van 24 bij 24.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_grid.png)

Door te werken met een grid zorg je voor consistente vormen en afmetingen. Door iconen binnen dit vierkant te positioneren zijn ze inwisselbaar. Hierdoor zullen teksten niet verspringen als je de iconen bijvoorbeeld toepast in een lijst.

![Twee lijstjes met vier labels. Voor elk label staat een icoon. Bij de eerste set verschillende de iconen in breedte waardoor de labels verspringen. Bij de tweede set hebben alle iconen dezelfde breedte waardoor de labels links uitlijnen.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_grid-geen-grid.png)

### Grootte

#### Stem de grootte van je iconen af op je lettergrootte.

Hoewel een iconenset op een bepaald grid wordt ontworpen kan het icoon wel op verschillende groottes worden toegepast. Daarbij is het verstandig om de grootte van iconen af te stemmen met je lettergrootte.

![Een lijstje van 3 labels met voor elk label een kalender icoon. De labels worden groter en het kalender icoon schaalt mee.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_grootte.png)

Functionele iconen worden vaak ontworpen en toegepast op een formaat van 16×16, 24×24 of 32×32. Deze formaten sluiten mooi aan bij het veelal toegepaste 8pt grid voor ruimte en de standaard browser lettergroote van 16px. Een evenwichtige balans van icoon en lettergrootte zou dan kunnen zijn lettergrootte 16px met een icoon van 24px. Of een lettergrootte 26px met een icoon van 32px.

**Grootte als design token**

Voor de grootte van functionele iconen kun je een common token zoals `voorbeeldprefix.icon.functional.size` inzetten. Op die manier kun je in 1 keer alle functionele iconen op component niveau in formaat aanpassen. Voor [Toptaak iconen](#toptaak-iconen) zou dit een common token zoals `voorbeeldprefix.icon.toptask.size` kunnen zijn.

<!-- TODO: Verwijzen naar common tokens wanneer dit een plek hebben -->

### Lijndikte

#### Laat lijndikte meeschalen.

Een ‘outline’ iconenset is vaak opgebouwd uit lijnen (stroke). Bijvoorbeeld met een lijndikte van 2px. Hierdoor blijft de lijndikte 2px ongeacht hoe groot het icoon is. Over het algemeen is dit niet het gewenste gedrag omdat je zo verschillende gewichten in iconen kan krijgen.

![Een kalender icoon wordt door middel van twee sets op drie formaten getoond. Klein, middel en groot. Bij de eerste set groeit de lijn-dikte niet mee, bij de tweede set wel.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_outline-stroke.png)

### Kleur

#### Zorg ook bij iconen voor voldoende contrast.

Iconen nemen vaak de kleur van de bijbehorende tekst over. Zodoende hebben ze, als de tekst het ook heeft, vanzelf voldoende contrast.

![Button met pijl icoon, foutmelding met uitroepteken icoon, en link met potloot icoon. Alle iconen hebben dezelfde kleur als de bijbehorende teksten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_kleuren-overnemen.png)

Gebruik je een icoon zonder tekst? Of wil je het icoon een andere kleur geven dan de bijbehorende tekst? Houd dan ook rekening met contrast. Voor iconen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter moeten zijn. Tenzij het icoon puur decoratief is.

![Rechter bovenhoek van een modal scherm rechts daarvan een waarschuwing. Sluit icoon van modal scherm is paars. Uitroepteken icoon in waarschuwing is donkergeel. De tekst van de waarschuwing is donkergrijs.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_eigen-kleuren.png)

Iconen zijn een ideaal hulpmiddel om niet alleen op kleur te vertrouwen om een boodschap over te brengen. Denk bijvoorbeeld aan een foutmeldingen of feedback elementen.

![Vier meldingen. Waarschuwingsmelding met uitroepteken in driehoek icoon. Positieve melding met check icoon. Negatieve melding met uitroepteken in cirkel icoon. Informatieve melding met 'i' in cirkel icoon.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_niet-op-kleur-vertrouwen.png)

Wanneer je iconen als SVG gebruikt kun je de iconen kleuren door middel van [`current color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword). Op die manier neemt het icoon de waarde over van de `color` die is toegepast. Hierdoor kleuren je iconen ook netjes mee als iemand gebruik maakt van bijvoorbeeld een donker thema (dark-mode) of Windows High Contrast Mode.

```css
.icon {
  fill: currentColor;
}
```

Let wel; SVG gebruikt `fill`, niet `color` of `background-color`.

![Drie schermen met dezelfde inhoud (onder andere een button met pijl icoon) maar verschillende thema's. Light-mode, dark-mode en high-contrast-mode.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_high-contrast.png)

Soms wordt een icoon gebruikt om een status aan te geven. Denk bijvoorbeeld aan geluid aan/uit zetten of het wel/niet tonen van een wachtwoord. In dit soort gevallen is het belangrijk om niet enkel op kleur te vertrouwen, omdat kleur niet door iedereen op dezelfde manier wordt ervaren. Een afwijking in de vorm van het icoon is dan een oplossing.

![Twee keer een lijstje van twee labels met een icoon ervoor. Links 'Geluid aan' en 'Geluid uit' waarbij een speaker icoon per label van vorm verschilt. Rechts 'Toon wachtwoord' en 'Verberg wachtwoord' waarbij een oog icoon van vorm verschilt.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_status.png)

### Iconen kiezen

#### Respecteer conventies.

Voor iconen, en met name functionele iconen, is het belangrijk om conventies te volgen. Zo zijn er bepaalde iconen die sterk aan concept gerelateerd zijn. Het is verstandig deze conventies te respecteren en deze iconen niet ineens voor een andere functie te gebruiken.

![Tien iconen op een rij. Vergrootglas, kruis, check, uitroepteken in driehoek, prullenbak, plus, min, play, pauze, stop.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_conventies.png)

In Figma kun je iconen aliassen mee geven door een beschrijving toe te voegen. Wanneer men dan op 'Toevoegen' zoekt komt het 'Plus' icoon bovendrijven.

![Screenshot van Figma. Plus icoon is geselecteerd. Aanvullende beschrijving toont de woorden 'Add' en 'Toevoegen'.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_aliassen.png)

Twijfel je of je icoon herkenbaar is? Laat het onderzoeken. Zo heeft Gemeente Utrecht inmiddels meerdere iconen laten onderzoeken waardoor ze deze met zekerheid kunnen toepassen. Bekijk deze onderzoeken op [gebruikersonderzoeken.nl](https://gebruikersonderzoeken.nl/).

### SVG

#### Gebruik SVG voor iconen.

SVG staat voor Scalable Vector Graphics en is een ideaal bestandsformaat voor iconen.

Voordelen van SVG:

- Schaalbaar zonder kwaliteitsverlies
- Licht in gewicht wat bijdraagt aan korte laadtijden
- Te kleuren door middel van CSS
- Te animeren

### Iconen als font

#### Gebruik geen font voor iconen.

In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en geïnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden. Zo kan iemand een eigen lettertype hebben geïnstalleerd. Mensen met dyslexie stellen soms hun eigen lettertypen in voor een betere leesbaarheid. In dat geval worden de iconen vervangen door 'ontbrekende tekens'-symbolen. Dat gebeurt trouwens ook als het font niet geladen wordt.

Ook kan een icoon bij een icoon-font gekoppeld zijn aan één bepaald teken. Zo kan een icoon voor sluiten toegewezen zijn aan een 'A'. Wanneer men een ander font gebruikt of als het font met de iconen niet wordt geladen staat er simpelweg een 'A'. Daarnaast wordt dit icoon door schermlezers ook uitgesproken als 'A'.

### Toepassen in code

Iconen moeten altijd vergezeld worden door een, eventueel visueel verborgen, tekstlabel.

Het icoon zelf moet het attribuut `focusable="false"` hebben om het uit de focus-volgorde te verwijderen. Dit is een standaardinstelling in sommige versies van Internet Explorer en Edge.

Het is niet nodig een alternatieve tekst aan te bieden voor iconen waarbij de tekst al beschikbaar is. In dit geval geef je het icoon in de code `aria-hidden="true"` mee. Zo is het tekstlabel "Verwijderen" in het volgende voorbeeld voldoende, en is het niet nodig om het icoon te identificeren.

```html
<button>
  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">
    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>
  </svg>
  <span>Delete</span>
</button>
```

Alleen iconen die zeer goed ingeburgerd zijn, zoals een vergrootglas (voor zoeken) of een kruis (voor sluiten), zou je kunnen gebruiken zonder aanvullende visuele tekst. In deze gevallen wordt een visueel verborgen `<span>` aanbevolen.

Verberg in deze gevallen de `<span>` met behulp van de class `visually-hidden` of iets vergelijkbaars. Deze class verbergt de tekst enkel visueel. Schermlezers zullen de tekst nog steeds voorlezen.

Ook `aria-label` kan dit voor elkaar krijgen maar [`aria-label` kan voor vertaalproblemen zorgen](https://heydonworks.com/article/aria-label-is-a-xenophobe).

```css
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

#### Tooltips

Als een icoon een tooltip heeft, kan de tooltip als label ingezet worden. In het volgende voorbeeld zorgt het element `class="tooltip"` voor het label.

```html
<a href="link/to/download" download>
  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">
    <use xlink:href="assets/svg/nl-icons-core-set.svg#nl-icon-download"></use>
  </svg>
  <span class="tooltip">Download</span>
</a>
```

Standaard zal de tooltip worden verborgen door middel van `display: none`. De tooltip zal dan getoond worden bij hover of focus.

```css
[download] .tooltip {
  display: none;
}

[download]:hover .tooltip,
[download]:focus .tooltip {
  display: block;
}
```

Vertrouw niet op het `title` attribuut voor tooltips. Deze verschijnen niet bij focus en zijn daarom niet toegankelijk via het toetsenbord. Ze worden meestal ook niet voorgelezen door schermlezers als de instellingen hier niet op ingesteld zijn.

Als de tekst van de tooltip buiten element staat, kun je het aan dit element koppelen met behulp van `aria-labelledby`. In het volgende voorbeeld delen `aria-labelledby` en het `id` van de tooltip de waarde `download-tooltip`. Teksten die zijn gekoppeld zijn via `aria-labelledby` worden wel vertaald.

```html
<div class="download-container">
  <a href="link/to/download" download aria-labelledby="download-tooltip">
    <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">
      <use xlink:href="assets/svg/nl-icons-core-set.svg#nl-icon-download"></use>
    </svg>
  </a>
  <span class="tooltip" id="download-tooltip">Download</span>
</div>
```

## Toptaak iconen

Toptaak iconen zijn gedetailleerder dan functionele iconen. Dat kan ook makkelijk omdat ze groter worden ingezet. Toptaak iconen helpen bezoekers van gemeentelijke websites om sneller bij de juiste informatie te komen.

Voor het 'Voorbeeld thema' maken we gebruik van de outline versie van de iconenset: [Gemeenten iconen](https://www.gemeenteniconen.nl/). Deze iconenset wordt Open Source aangeboden. Je mag deze iconen dus ook gebruiken voor jouw organisatie.

[Ga naar gemeenteniconen.nl](https://www.gemeenteniconen.nl) voor meer informatie over het gebruik.

## Meer informatie

Deze documentatie is onder andere gebaseerd op de [documentatie rondom iconen van BBC GEL](https://bbc.github.io/gel/foundations/iconography/).

### Gerelateerde WCAG Richtlijnen

- [1.1.1 Niet-tekstuele content](/wcag/1.1.1/)
- [1.4.11 Non text contrast](/wcag/1.4.11)

### Links

[A complete guide to iconography - Bonnie Kate Wolf](https://www.designsystems.com/iconography-guide/)<br/>
Uitgebreid artikel over het ontwerpen en toepassen van iconen binnen een Design System.

[Pixel-snapping in icon design - Helena Zhang](https://uxdesign.cc/pixel-snapping-in-icon-design-a-rendering-test-6ecd5b516522)<br/>
Artikel over een onderzoek naar het scherp tonen van iconen.

[Inline SVG vs Icon Fonts - CSS-tricks](https://css-tricks.com/icon-fonts-vs-svg/)<br/>
Artikel over de verschillen tussen ‘Inline SVG’ en ‘Icon Fonts’ worden beschreven.

[Are Hollow Icons Really Harder to Recognize Than Solid Icons? - Curt Arledge](https://www.viget.com/articles/are-hollow-icons-really-harder-to-recognize-a-research-study/)<br/>
Artikel over een onderzoek naar het gebruik van ‘outline’ iconen ten opzicht van ‘solid’ iconen.

[Icons - Google Material](https://m3.material.io/styles/icons/overview)<br/>
Documentatie over het gebruik van iconen binnen het Material Design System van Google.

[Accessible icon buttons - Sara Soueidan](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)<br/>
Artikel over het toegankelijk opzetten van buttons die alleen een icoon tonen. Er komen verschillende methodes aan bod.

[Aria-label is a xenophobe - Heydon Heydon Pickering](https://heydonworks.com/article/aria-label-is-a-xenophobe/)<br/>
Artikel over het gebruik van Aria-label en de problemen die hierbij kunnen optreden bij het vertalen van een webpagina.

[Tabler icons - Codecalm](https://tabler-icons.io/)<br/>
De iconenset die we bij het NL Design System gebruiken voor de functionele iconen van het Voorbeeld thema.

[Gemeenteniconen.nl](https://www.gemeenteniconen.nl)<br/>
De iconenset die we bij het NL Design System gebruiken voor het Voorbeeld thema.

---

## Over deze richtlijnen

Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in _beta_.

We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? [Deel je mening op GitHub](https://github.com/nl-design-system/documentatie/discussions/473) met je suggesties.
