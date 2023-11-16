<!-- @license CC0-1.0 -->

## Geef aan als een link in een nieuwe tab opent

Het is handig om een link in een nieuwe tab te laten openen, zodat bijvoorbeeld de al ingevulde inhoud van een formulier niet verloren gaat. Geef dat aan in de linktekst.

Een link openen in een nieuwe tab (of venster) is geen standaard (default) gedrag. Vooral voor screenreadergebruikers is het fijn om te weten wat er gaat gebeuren en waarom bijvoorbeeld de terugknop het niet meer doet.

Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent.

Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst.

Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist.

Hiermee voldoe je aan de volgende WCAG-richtlijn [WCAG richtlijn 3.2 Voorspelbaar](https://www.w3.org/Translations/WCAG21-nl/#voorspelbaar): Maak het uiterlijk en de bediening van webpagina's voorspelbaar.


### Technieken voor een link openen in een nieuwe tab of venster

Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes.

**Doen:** Alle informatie als zichtbare tekst in de link.
<div style={{border: 2 + 'px solid #16ac16', padding: 10 + 'px'}}>
<a href="#" target="_blank">Lees het privacybeleid (opent in een nieuwe tab)</a>.
</div>

```html
<a
  href="#"
  target="_blank"
  >
  Lees het privacybeleid (opent in een nieuwe tab)
</a>.
```

**Doen:** Zichtbaar icoontje plus onzichtbare, maar uitgesproken tekst voor screenreaders.
<div style={{border: 2 + 'px solid #16ac16', padding: 10 + 'px'}}>
<a href="#" target="_blank" class="ext-icon">Lees het privacybeleid<span class="sr-only">, opent in een nieuwe tab</span></a>.
</div>

```html
<a
  href="#"
  target="_blank"
  class="ext-icon"
  >
  Lees het privacybeleid
  <span class="sr-only">, opent in een nieuwe tab</span>
</a>.
```

**Doen:** Overschrijf de linktekst met een aria-label voor screenreaders.
<div style={{border: 2 + 'px solid #16ac16', padding: 10 + 'px'}}>
<a href="#" target="_blank" class="ext-icon" aria-label="Lees het privacybeleid (opent in een nieuwe tab)">Lees het privacybeleid <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>.
</div>

```html
<a
  href="#"
  target="_blank"
  class="ext-icon"
  aria-label="Lees het privacybeleid (opent in een nieuwe tab)"
  >
  Lees het privacybeleid
</a>.
```

**Niet doen:** Informatie over het openen in een nieuwe tab alleen aan screenreadergebruikers geven.
<div style={{border: 2 + 'px solid #c00', padding: 10 + 'px'}}>
<a href="#" target="_blank" aria-label="Lees het privacybeleid (opent in een nieuwe tab)">Lees het privacybeleid</a>.
</div>

```html
<!-- Dit is foute code, niet kopiëren. -->
<a
  href="#"
  target="_blank"
  aria-label="Lees het privacybeleid (opent in een nieuwe tab)"
  >
  Lees het privacybeleid
</a>.
```

**Niet doen:** Informatie over het openen in een nieuwe tab voor iedereen weglaten.
<div style={{border: 2 + 'px solid #c00', padding: 10 + 'px'}}>
<a href="#" target="_blank">Lees het privacybeleid</a>.
</div>

```html
<!-- Dit is foute code, niet kopiëren. -->
<a
  href="#"
  target="_blank"
  >
  Lees het privacybeleid
</a>.
```
