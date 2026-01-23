<!-- @license CC0-1.0 -->

Koppel de Form Field Description met `aria-describedby` aan het bijbehorende input-element:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" />
```

NL Design System richtlijnen:

- [Toegankelijke instructies en beschrijvingen](/richtlijnen/formulieren/descriptions/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
