<!-- @license CC0-1.0 -->

# Tabel {#tabel}

Er zijn eindeloos veel varianten van de tabel, daarom is het niet mogelijk op één pagina een volledig overzicht te hebben met tips. Op deze pagina zullen we algemene tips geven. In de toekomst willen we losse pagina's aanbieden voor speciale soorten tabellen.

## Duidelijke koppen {#duidelijke-koppen}

In tabellen staat vaak veel informatie en daarom helpen koppen gebruikers om snel informatie over te slaan die niet relevant is. De data in tabellen kan op drie niveaus koppen bevatten: kop van de tabel (_caption_), kop van de kolom (_column header_) en kop van de rij (_row header_). Het is belangrijk dat je precies de goede HTML gebruikt voor elke kop:

- `<caption>` voor de kop van de tabel
- `<th scope="col">` voor de kop van de kolom
- `<th scope="row">` voor de kop van de rij

<!--
### Heading versus caption {#heading-versus-caption}

Voor screenreader gebruikers is het voordeel van het `<caption>` element dat die zowel context geeft wanneer je bij de tabel komt en je de pagina van begin tot einde leest, als wanneer je van verderop weer terug gaat naar een eerdere tabel. Een heading die een tabel beschrijft (`h1`-`h6` element) wordt alleen aangekondigd wanneer je van begin naar het einde leest; je mist dus context als je terug gaat.
-->

## Sorteer de tabelrijen {#sorteer-de-tabelrijen}

Voor gebruikers van [screenreaders](/woordenlijst/#screenreader) is het belangrijk dat je de kolom kunt vinden waarop gesorteerd is, en dat je makkelijk vanuit die kolom naar de vorige of volgende rij kunt gaan om snel de relevante rij te vinden. Wanneer je informatie zoekt op een bepaalde datum dan is het belangrijk dat je met één druk op de knop naar de volgende datum kunt gaan, daarna nog een keer, enzovoorts.

Als je de informatie niet kan vinden bij de datum die je verwacht, dan is het belangrijk om te weten dat op datum is gesorteerd: alleen dan kun weet je zeker dat de informatie helemaal niet in de tabel staat.

Plaats de gegevens waarop gesorteerd is in een eigen kolom, en geef met `aria-sort="…"` aan dat deze kolom de volgorde bepaalt.

Bijvoorbeeld:

```html
<table>
  <caption>
    Openingstijden gemeentehuis
  </caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">Dag</th>
      <th scope="col">Geopend</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Maandag</th>
      <td>12:00—18:00</td>
    </tr>
    <tr>
      <th scope="row">Dinsdag</th>
      <td>08:00—18:00</td>
    </tr>
    …
  </tbody>
</table>
```

Je geeft met de volgende code aan in welke volgorde de informatie staat:

- `aria-sort="ascending"` voor "oplopende volgorde", bijvoorbeeld namen van A tot Z (namen), van bedragen en aantallen van klein naar groot, geplande activiteiten van eerdere naar latere datums
- `aria-sort="descending"` voor "aflopende volgorde", bijvoorbeeld namen van Z naar A, ontvangen berichten van nieuw naar oud, bedragen en aantallen van groot naar klein

## _Responsive_ tabellen {#responsive-tabellen}

Volgens het [WCAG-succescriterium 1.4.10 Reflow](/wcag/1.4.10) moeten pagina's leesbaar zijn bij een breedte van 1280px met 400% zoom, zonder dat horizontaal scrollen nodig is. Datatabellen worden genoemd als uitzondering, maar een voor een betere gebruiksvriendelijkheid zijn er technieken om te herkennen dat een tabel niet goed bekeken kan worden en in die situaties een alternatieve layout te gebruiken. Met CSS media queries of container queries kun je herkennen dat er niet voldoende ruimte is voor een tabel, en vervolgens heb je twee opties:

Techniek 1: de bestaande `table`-HTML niet te tonen als tabel door met CSS een andere `display` te gebruiken voor `table`, `td` en alle andere tabel-elementen. _Tabel-elementen niet weergeven als tabel kan de toegankelijkheid van de informatie kapot maken._ Deze techniek gaat in de praktijk heel vaak mis. Gebruik deze techniek alleen als je vaak gebruikerstesten doet voor toegankelijkheid.

Techniek 2: HTML aanbieden in twee varianten. Naast de HTML `<table>` element, ook de gegevens tonen met HTML elementen die niet zoveel ruimte nodig hebben in twee dimensies, zoals koppen met daaronder een datalijst. Afhankelijk van de situatie verberg je de éne of de andere variant.

## Hoe het niet moet {#hoe-het-niet-moet}

### Koppen van tabel niet gekoppeld aan datacellen {#koppen-niet-gekoppeld}

Tabellen bevatten vaak veel informatie, daarom kan het gebruikers heel veel tijd kosten om de relevante informatie te vinden als je niet de goede HTML gebruikt voor de 3 niveaus van koppen. Gebruikers die de tabel visueel kunnen waarnemen hebben het voordeel dat je kan zien dat er een kop is bovenaan de kolom, of aan het begin van de regel, en kunnen de kop herkennen omdat die bijvoorbeeld vetgedrukt is.

Het [WCAG-succescriterium 1.3.1 Info en relaties](/wcag/1.3.1) zegt dat het belangrijk is om voor gebruikers die niet die relaties kunnen zien zoals de twee-dimensionale opmaak of vetgedrukte tekst, code te gebruiken waardoor bijvoorbeeld screenreaders ook weten welke koppen bij de cel hoort.

#### Kop van de tabel niet gekoppeld {#tabel-kop-niet-gekoppeld}

Niet:

```html
<h2>Openingstijden</h2>
<table>
  <thead>
    …
  </thead>
</table>
```

Wel:

```html
<table>
  <caption class="heading-2">
    Openingstijden
  </caption>
  <thead>
    …
  </thead>
</table>
```

#### Kop van de tabelrij niet gekoppeld {#tabelrij-kop-niet-gekoppeld}

Niet:

```html
<tr>
  <td>
    <strong>maandag</strong>
  </td>
  <td>gesloten</td>
</tr>
```

Wel:

```html
<tr>
  <th scope="row">maandag</td>
  <td>gesloten</td>
</tr>
```

<!--

TODO:

#### Kop van de kolom niet gekoppeld {#kop-van-de-kolom-niet-gekoppeld}

-->

### Kop van de tabel in de tabel zelf {#geen-tabel-kop-in-de-tabel}

Niet:

```html
<table>
  <thead>
    <tr>
      <th colspan="2">Openingstijden</th>
    </tr>
  </thead>
  …
</table>
```

Wel:

```html
<table>
  <caption>
    Openingstijden
  </caption>
  …
</table>
```

### Afstand tussen kolommen is te groot {#geen-grote-afstand-tussen-kolommen}

Je moet goed kunnen zien welke cellen bij elkaar horen. Een tabel die breed is en relatief weinig informatie bevat, is moeilijk te begrijpen als er veel lege ruimte zit tussen de cellen.

Voorkom teveel lege ruimte: gebruik bijvoorbeeld niet `width: 100%` voor een tabel met openingstijden. Kies per tabel welke breedte het meest duidelijk is. Als er lege ruimte ontstaat, zorg dan dat die niet tussen kolommen is, maar plaats de lege ruimte aan het eind van de laatste kolom.

### Tabel niet toegankelijk door eigen CSS `display` {#geen-eigen-css-display}

Screenreaders maken het begrijpen van HTML-tabellen makkelijk, want ze kunnen voor elke datacel de context geven. Hier voor is het belangrijk dat de automatische tools zoals screenreaders uit de code begrijpen wat de _column header_ is en wat de _row header_ is.

Wanneer je met CSS `display` aanpast om een tabel een andere layout te geven, dan is niet meer een tabel in de _accessibility tree_ en maak je de relatie tussen de _data cell_ en de _header cell_ kapot. Tabellen waarvan de `display` wordt aangepast werken daarom niet meer in screenreaders, tenzij de _accessibility tree_ door extra code wordt hersteld.

Je kunt voorkomen dat de _accessibility tree_ anders wordt opgebouwd. Je moet dan op élk element van de tabel expliciet zeggen welke `role` het heeft. Omdat deze techniek veel extra werk geeft en foutgevoelig is, raden wij aan om alternatieven te kiezen zoals niet `display` aanpassen of twee varianten maken.

- `<caption id="unique-id-here">` samen met `<table aria-labelledby="unique-id-here">`
- `<table role="table">`
- `<tbody role="table-row-group">`
- `<td role="cell">`
- `<tfoot role="table-row-group">`
- `<th scope="col" role="columnheader">`
- `<th scope="row" role="rowheader">`
- `<thead role="table-row-group">`
- `<tr role="table-row">`

## Links {#links}

- [MDN: `<table>`: The Table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [MDN: `aria-sort`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort)

### Relevante WCAG-succescriteria {#relevante-wcag-regels}

- [1.4.10 Reflow](/wcag/1.4.10)
