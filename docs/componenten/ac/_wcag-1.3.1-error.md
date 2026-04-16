<!-- @license CC0-1.0 -->

Koppel de Form Field Error Message met `aria-describedby` aan het bijbehorende element voor formulierinvoer:

```html
<p><label for="name">Naam</label></p>
<p id="description-name">Vul je voor- en achternaam in.</p>
<p id="error-name">Het veld 'Naam' is een verplicht veld.</p>
<p><input id="name" aria-describedby="description-name error-name" autocomplete="name" type="text" /></p>
```

NL Design System richtlijnen:

- [Toegankelijke foutmeldingen bij formuliervelden](/richtlijnen/formulieren/foutmeldingen/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
