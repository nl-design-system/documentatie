<!-- @license CC0-1.0 -->

Koppel de Form Field Error Message met `aria-describedby` aan het bijbehorende element voor formulierinvoer:

```html
<label for="name">Naam</label>
<p id="error-name">Het veld 'Naam' is een verplicht veld.</p>
<p id="description-name">Vul je voor- en achternaam in.</p>
<input id="name" aria-describedby="error-name description-name" autocomplete="name" type="text" />
```

NL Design System richtlijnen:

- [Toegankelijke foutmeldingen bij formuliervelden](/richtlijnen/formulieren/foutmeldingen/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
