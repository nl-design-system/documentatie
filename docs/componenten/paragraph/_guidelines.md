<!-- @license CC0-1.0 -->

# Paragraph {#paragraph}

De _paragraph_ component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.

## HTML {#html}

Gebruik hiervoor altijd het `<p>` HTML-element, die heeft automatisch de goede [`paragraph` role](https://w3c.github.io/aria/#paragraph) in de accessibility tree. Dat is nodig voor het WCAG-succescriterium [1.3.1 Info en relaties](/wcag/1..3.1). Voor een _lead paragraph_ gebruik je `<p><b>…</b></p>`. Voor _small print_ gebruik je `<p><small>…</small></p>`.

Zelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het `<p>` element is er tussen alinea's duidelijke witruimte ([WCAG-succescriterium 1.4.12](/wcag/1.4.12)). Door het `<b>` element is de _lead paragraph_ visueel herkenbaar. Door `<small>` is _small print_ visueel herkenbaar.

### Lead Paragraph {#lead-paragraph}

De _lead paragraph_ is een extra opvallende variant van de _paragraph_. Gebruik de _lead paragraph_ onder de _heading_ van een _article_ voor een introductietekst.

Schrijf in de eerste alinea kort en bondig waar de pagina over gaat, zodat de lezer kan besluiten om verder te lezen. Gebruik hiervoor de _lead paragraph_ variant zodat de tekst extra opvallend is.

Wanneer je meer dan circa 30 woorden of 200 tekens nodig hebt, gebruik dan niet de _lead paragraph_ variant zodat de tekst een leesbare lettergrootte heeft voor langere teksten.

Gebruik de _lead paragraph_ niet wanneer je een _paragraph_ voor een ander doel extra opvallend wil maken, ontwikkel dan een eigen variant.

## Inhoud {#inhoud}

Groepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft. Teksten met alinea's die niet bovengemiddeld lang zijn makkelijker te begrijpen als je pauze neemt, en door het grouperen is informatie sneller terug te vinden.

Overweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea's.

## Layout {#layout}

### Lettergrootte {#lettergrootte}

Kies de lettergrootte niet te klein, bijvoorbeeld `16px` of groter. Gebruik `rem` in CSS in plaats van `px`, zodat de font-size van de _paragraph_ ook verdubbelt wanneer gebruikers via hun besturingssysteem of _user stylesheet_ de standaard lettergroote 200% groter maken. ([WCAG-succescriterium 1.4.4 Herschalen van tekst](/wcag/1.4.4)) Gebruikers moeten de lettergrootte vier keer groter kunnen maken met browser zoom, zie [WCAG-succescriterium 1.4.10](/wcag/1.4.10). Maak zoom niet kapot door gebruik van de `vw` of `vh` eenheden in CSS die niet altijd goed werken met zoom.

Gebruik de design token `nl.paragraph.font-size` als je niet de standaard-grootte wilt van `nl.document.font-size`.

Voor de lead paragraph variant is het gebruikelijk de lettergrootte 10% á 20% groter te kiezen (`nl.paragraph.lead.font-size`).

### Regelhoogte {#regelhoogte}

Stel de regelhoogte met `nl.paragraph.line-height` in voor voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Standaard gebruiken browsers circa `1.2`, maar `1.5` is voor veel gebruikers beter leesbaar. Voor het [WCAG-succescriterium 1.4.8 Visuele weergave](/wcag/1.4.8) is het ook belangrijk om `1.5` of groter aan te bieden.

### Afstand tussen alinea's {#afstand-tussen-alineas}

Kies voldoende afstand tussen alinea's, in elk geval 50% groter dan afstand tussen tekstregels. Gebruik hiervoor de design tokens `nl.paragraph.margin-block-start` en `nl.paragraph.margin-block-end`.

### Kleurgebruik {#kleurgebruik}

`nl.paragraph.color`: kies voldoende contrast ten opzichte van de achtergrondkleur, van bijvoorbeeld `nl.document.background-color` of `nl.page.background-color`. Kies in plaats van zwart voor zeer donkergrijs, dat is beter leesbaar op beeldschermen. Een contrastverhouding van 7:1 is ideaal.

Zie de WCAG-succescriteria:

- [1.4.3: Contrast (minimum)](/wcag/1.4.3)
- [1.4.6: Contrast (versterkt)](/wcag/1.4.6)

### Regellengte {#regellengte}

Zorg dat de lengte van de tekst niet te lang wordt, bijvoorbeeld door deze design token in te stellen: `nl.article.max-inline-size`. De ideale regellengte verschilt per schrift en taal, maar ergens tussen de 50 en 75 tekens voor Nederlands is prima. Je kunt in CSS bijvoorbeeld de `ch` eenheid gebruiken: `--nl-article-max-inline-size: 60ch`.

Voor het [WCAG-succescriterium 1.4.8 Visuele weergave](/wcag/1.4.8) is het nodig dat de regellengte beperkt kan worden tot maximaal 80 tekens (`80ch`), bijvoorbeeld door de viewport van de browser kleiner te maken.

### Tekstuitlijning {#tekstuitlijning}

Tekst dient uitsluitend links uitgelijnd zijn, voor Nederlandse teksten. Gebruik daarvoor `text-align: start`.

`text-align: justify` moet vermeden kunnen worden volgens het [WCAG-succescriterium 1.4.8 Visuele weergave](/wcag/1.4.8), dus gebruik deze voor het gemak helemaal niet. Rechts uitlijnen en tekst centreren moet je ook niet gebruiken voor lopende tekst.

## Hoe het niet moet {#hoe-het-niet-moet}

### Geen opmaak {#geen-opmaak}

Geen `p` gebruiken:

```html
<section>
  <h1>Interessante pagina</h1>
  Deze eerste tekst ziet er misschien prima uit.
  <p>Maar ook de eerste paragraaf hoort in een p-element te staan.</p>
</section>
```

### Lege paragraaf {#geen-lege-paragraaf}

Een lege `p` gebruiken, bijvoorbeeld om extra afstand te maken:

```html
<section>
  <h1>Voorbeeld pagina</h1>
  <p>Deze pagina ziet er op het oog misschien prima uit.</p>
  <p>&nbsp;</p>
  <p>Maar sommige screen readers zeggen dat er drie paragrafen zijn, dat is verwarrend.</p>
</section>
```

### Geen semantiek {#geen-semantiek}

Een `div` gebruiken:

```html
<section>
    <h1>Interessante pagina</h1>
    <div>Deze eerste tekst ziet er misschien prima uit, maar de paragraph role ontbreek in de accessibility tree.</div>
    <div role="paragraph">Gebruik gewoon een p-element in plaats van ARIA om de role te verkrijgen.</p>
</section>
```

Wanneer je tekstfragmenten na elkaar plaatst is het belangrijk dat je een element zoals paragraaf gebruikt (en niet een `inline` element zoals `span` of `label`), zodat de twee tekstfragmenten los van elkaar worden voorgelezen door screen readers. Wanneer de CSS niet geladen kan worden, dan heeft `p` wel marge en `div` niet, in veel situaties zonder CSS is `p` daarom leesbaarder dan `div`.

### `inline` in plaats van `block`-elementen {#geen-inline}

```html
<label for="name">Voornaam</label><span>Voornaam is verplicht</span>
```

Beter:

```html
<p><label for="name">Voornaam</label></p>
<p>Voornaam is verplicht</p>
```

### Overdreven nadruk {#geen-overdreven-nadruk}

Benadruk niet een hele paragraaf, maar markeer het belangrijke gedeelte.

```html
<p>
  <strong
    >Tenzij anders vermeld is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van toepassing.
    Dit houdt in dat iedere vorm van hergebruik van de inhoud van deze site is toegestaan, tenzij bij of in een bepaald
    onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een auteursrechtelijke
    uitzondering van toepassing is.
  </strong>
</p>
```

Beter:

```html
<p>
  <em>Tenzij anders vermeld</em> is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van
  toepassing. Dit houdt in dat <strong>iedere vorm van hergebruik van de inhoud van deze site is toegestaan</strong>,
  tenzij bij of in een bepaald onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een
  auteursrechtelijke uitzondering van toepassing is.
</p>
```

## Links {#links}

- [MDN: `<p>`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
- [HTML specification: The `<b>` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element). Bevat een voorbeeld van het `b` element voor lead paragraphs.
- [HTML specification: The `<small>` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element). Bevat een voorbeeld van het `small` element voor _small print_.
- [Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net](https://taaladvies.net/lengte-van-alineas/)

### Relevante WCAG-succescriteria {#relevante-wcag-regels}

- [WCAG-succescriterium 1.3.1](/wcag/1.3.1)
- [WCAG-succescriterium 1.4.3](/wcag/1.4.3)
- [WCAG-succescriterium 1.4.4](/wcag/1.4.4)
- [WCAG-succescriterium 1.4.8](/wcag/1.4.8)
- [WCAG-succescriterium 1.4.10](/wcag/1.4.10)
- [WCAG-succescriterium 1.4.12](/wcag/1.4.12)
- [WCAG-succescriterium 3.1.2](/wcag/3.1.2)
