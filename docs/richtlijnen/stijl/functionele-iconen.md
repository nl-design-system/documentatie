---
title: Functionele iconen
hide_title: true
hide_table_of_contents: false
sidebar_label: Functionele iconen
pagination_label: Functionele iconen
description: Richtlijnen voor functionele iconen
keywords:
  - iconen
  - functionele iconen
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Functionele iconen

Functionele iconen zijn simpel van vorm. Hierdoor kun je ze klein toepassen en blijven ze toch herkenbaar. Denk aan een icoon voor een button of foutmelding.

<!-- TODO: afbeelding -->

Voor het 'Voorbeeld thema' maken we gebruik van de [Tabler iconenset](https://tabler-icons.io/). Deze set bestaat uit meer dan 3100 outline iconen die Open Source worden aangeboden. Je mag deze iconenset dus ook gebruiken voor jouw organisatie.

<!-- TODO: afbeelding -->

**Tip!** Voor het Voorbeeld thema hebben we een selectie gemaakt uit de Tabler iconenset. Mis je een icoon? Check dan website van de [Tabler iconenset](https://tabler-icons.io/).

**Let op!** De iconen van de Tablet iconenset zijn opgebouwd uit lijnen (stroke) met een lijndikte van 2px. Hierdoor blijft de lijndikte 2px ongeacht hoe groot het icoon is. Vanuit aangesloten organisaties leerde we dat dit niet het gewenste gedrag is. Daarom hebben we de iconen in het Voorbeeld thema omgezet van lijn naar vorm (outline stroke). Waardoor de lijndikte van een icoon in verhouding meeschaalt met de afmetingen van het icoon.

<!-- TODO: afbeelding -->

## Grid

**Gebruik een grid voor iconen**

Per icoon kan de vorm verschillen in hoogte en breedte. Denk bijvoorbeeld aan een stoplicht of een bus. Een iconenset wordt vaak ontworpen op basis van een vierkant grid. Door te werken met een grid zorg je voor consistente vormen en afmetingen. Door iconen binnen dit vierkant te positioneren zijn ze inwisselbaar. Hierdoor zullen teksten niet verspringen als je de iconen bijvoorbeeld toepast in een lijst.

<!-- TODO: afbeelding -->

De Tabler iconenset die we gebruiken in het Voorbeeld thema is bijvoorbeeld ontworpen op een 24×24 grid.

<!-- TODO: afbeelding -->

## Grootte

Hoewel een iconenset op een bepaald grid wordt ontworpen kan het icoon wel op verschillende groottes worden toegepast.

Voor functionele iconen is dit vaak 16×16, 24×24 of 32×32.

**Grootte als design token**

De Tabler iconenset die we gebruiken in het Voorbeeld thema is ontworpen op een 24×24 grid. Dit formaat nemen we dan ook als uitgangspunt bij het ontwerpen van componenten. Vandaar dat we hier een common token voor hebben `nl.icon.functional.size`. Mogen iconen voor jouw organisatie groter of kleiner? Pas de common token aan en deze wijziging zal in vrijwel alle iconen worden doorgevoerd.

**Tip!** Ook op component niveau kun je de grootte van een icoon aanpassen. Zo is de waarde van bijvoorbeeld `nl.button.icon.size` standaard `nl.icon.functional.size`, maar kun je deze waarde aanpassen naar `voorbeeld.size.icon.2xl` met een waarde van 32×32.

<!-- TODO: Verwijzen naar Voorbeeld tokens wanneer dit een plek hebben -->

## Kleur

**Zorg ook bij iconen voor voldoende contrast.**

Iconen nemen vaak de kleur van de bijbehorende tekst over. Zodoende hebben ze, als de tekst het ook heeft, vanzelf voldoende contrast.

<!-- TODO: afbeelding -->

Gebruik je een icoon zonder tekst? Of wil je het icoon een andere kleur geven dan de bijbehorende tekst? Houd dan ook rekening met contrast. Voor iconen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter moeten zijn. Tenzij het icoon puur decoratief is.

<!-- TODO: afbeelding -->

**Tip!** Iconen zijn een ideaal hulpmiddel om niet alleen op kleur te vertrouwen om een boodschap over te brengen. Denk bijvoorbeeld aan een foutmeldingen of feedback elementen.

<!-- TODO: afbeelding -->

**Tip!** Wanneer je iconen als SVG gebruikt kun je de iconen kleuren door middel van [`current color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword). Op die manier neemt het icoon de waarde over van de `color` die is toegepast. Hierdoor kleuren je iconen ook netjes mee als iemand gebruik maakt van bijvoorbeeld een donker thema (dark-mode) of Windows High Contrast Mode.

```css
.icon {
  fill: currentColor;
}
```

**Let op!** SVG gebruikt `fill`, niet `color` of `background-color`.

**Tip!** Soms wordt een icoon gebruikt om een status aan te geven. Denk bijvoorbeeld aan geluid aan/uit zetten of het wel/niet tonen van een wachtwoord. In dit soort gevallen is het belangrijk om niet enkel op kleur te vertrouwen, omdat kleur niet door iedereen op dezelfde manier wordt ervaren. Een afwijking in de vorm van het icoon is dan een oplossing.

<!-- TODO: afbeelding -->

## Iconen kiezen

**Respecteer conventies**

Voor iconen, en met name functionele iconen, is het belangrijk om conventies te volgen. Zo zijn er bepaalde iconen die sterk aan concept gerelateerd zijn. Het is verstandig deze conventies te respecteren en deze iconen niet ineens voor een andere functie te gebruiken.

<!-- TODO: afbeelding -->

**Tip!** In Figma kun je iconen aliassen mee geven door een beschrijving toe te voegen. Wanneer men dan op 'Toevoegen' zoekt komt het 'Plus' icoon bovendrijven.

<!-- TODO: afbeelding -->

**Tip!** Twijfel je of je icoon herkenbaar is? Laat het onderzoeken. Zo heeft Gemeente Utrecht inmiddels meerdere iconen laten onderzoeken waardoor ze deze met zekerheid kunnen toepassen.

## SVG

**Gebruik SVG voor iconen**

SVG staat voor Scalable Vector Graphics en is een ideaal bestandsformaat voor iconen.

**Voordelen van SVG**

- Schaalbaar zonder kwaliteitsverlies
- Licht in gewicht wat bijdraagt aan korte laadtijden
- Te kleuren door middel van CSS
- Te animeren

## Iconen als font

**Gebruik geen font voor iconen.**

In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en geïnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden. Zo kan iemand een eigen lettertype hebben geïnstalleerd. Mensen met dyslectie stellen soms hun eigen lettertypen in voor een betere leesbaarheid. In dat geval worden de iconen vervangen door 'ontbrekende tekens'-symbolen. Dat gebeurd trouwens ook als het font niet geladen wordt.

Ook kan een icoon bij een icoon-font gekoppeld zijn aan één bepaald teken. Zo kan een icoon voor sluiten toegewezen zijn aan een 'A'. Wanneer men een ander font gebruik of als het icoon font niet wordt geladen staat er simpelweg een 'A'. Daarnaast wordt dit icoon door schermlezers ook uitgesproken als 'A'.

## Toepassen in code

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

**Let op!** Ook `aria-label` kan dit voor elkaar krijgen maar [`aria-label` kan voor vertaalproblemen zorgen](https://heydonworks.com/article/aria-label-is-a-xenophobe).

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

### Tooltips

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

**Let op!** Vertrouw niet op het `title` attribuut voor tooltips. Deze verschijnen niet bij focus en zijn daarom niet toegankelijk via het toetsenbord. Ze worden meestal ook niet voorgelezen door schermlezers als de instellingen hier niet op ingesteld zijn.

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

## Meer informatie

### Gerelateerde WCAG Richtlijnen

- [1.1.1: Non text content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [1.4.11: Non text contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

### Links

- [A complete guide to iconography - Bonnie Kate Wolf](https://www.designsystems.com/iconography-guide/)
- [Pixel-snapping in icon design - Helena Zhang](https://uxdesign.cc/pixel-snapping-in-icon-design-a-rendering-test-6ecd5b516522)
- [Inline SVG vs Icon Fonts - CSS-tricks](https://css-tricks.com/icon-fonts-vs-svg/)
- [Are Hollow Icons Really Harder to Recognize Than Solid Icons? - Curt Arledge](https://www.viget.com/articles/are-hollow-icons-really-harder-to-recognize-a-research-study/)
- [Icons - Google Material](https://m3.material.io/styles/icons/overview)
- [Accessible icon buttons - Sara Soueidan](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)
- [Aria-label is a xenophobe - Heydon Heydon Pickering](https://heydonworks.com/article/aria-label-is-a-xenophobe/)
- [Tabler icons - Codecalm](https://tabler-icons.io/)

---

## Help deze documentatie te verbeteren

Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via Github.

## Vragen

Heb je een vraag? Twijfel niet en [neem contact op met het kernteam](https://www.nldesignsystem.nl/meedoen/contact/).
