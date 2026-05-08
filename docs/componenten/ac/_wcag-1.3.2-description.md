<!-- @license CC0-1.0 -->

Zorg ervoor dat instructies die nodig zijn om te begrijpen wat er van de bezoeker verwacht wordt op een logische plek staan en gekoppeld zijn aan het element voor formulierinvoer.

De meest gebruiksvriendelijke plek voor instructies is tussen het label en het element voor formulierinvoer. Als instructies er ónder staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.

Een screenreader schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna instructies tússen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel instructies daarom ook aan het element voor formulierinvoer met `aria-describedby`. Op die manier wordt de beschrijving voorgelezen wanneer de toetsenbordfocus op dat element staat.

Voorbeeld:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" />
```

NL Design System richtlijnen:

- [Toegankelijke instructies en beschrijvingen](/richtlijnen/formulieren/descriptions/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
