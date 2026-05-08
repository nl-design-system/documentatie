<!-- @license CC0-1.0 -->

Koppel de Form Field Description met `aria-describedby` aan het bijbehorende element voor formulierinvoer:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" />
```

Zorg ervoor dat de tekst in de Form Field Description niet ingeklapt is, zoals het geval is in een `details` en `summary` combinatie. De verborgen tekst wordt in de browsers Firefox en Safari ([NL Design System baseline maart 2026](/baseline/2026-03/)) niet door [screenreaders](/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader) voorgelezen.

NL Design System richtlijnen:

- [Toegankelijke instructies en beschrijvingen](/richtlijnen/formulieren/descriptions/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
