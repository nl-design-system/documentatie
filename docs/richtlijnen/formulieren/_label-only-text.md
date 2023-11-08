<!-- @license CC0-1.0 -->

## Zet alleen tekst in het label

Gebruik alleen tekst in een label. Dus geen links, buttons, tooltips of kopjes.

Dit geeft problemen bij het voorlezen van het label door screenreaders en het activeren via voice recognition.

Zet extra informatie boven het formulier, als links boven het label of formulierveld (wat logisch is qua leesvolgorde) of als beschrijving bij het veld. Vermijd tooltips.

Doen: de link buiten het label plaatsen en boven het invoerveld dat deze informatie nodig heeft:

```html
<a href="url">Onze algemene leveringsvoorwaarden</a>
<input id="alv" type="checkbox" />
<label for="alv">Ik ga akkoord met de algemene leveringsvoorwaarden</label>
```

Niet doen: de link binnen het label plaatsen.

```html
<!-- Dit is foute code, niet kopiëren -->
<input id="alv" type="checkbox" />
<label for="alv">Ik ga akkoord met de <a href="url">algemene leveringsvoorwaarden</a></label>
```
