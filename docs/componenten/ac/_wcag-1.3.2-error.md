<!-- @license CC0-1.0 -->

Zorg ervoor dat foutmeldingen op een logische plek staan en gekoppeld zijn aan het element voor formulierinvoer.

De meest gebruiksvriendelijke plek voor foutmeldingen is tussen het label en het element voor formulierinvoer. Als foutmeldingen er ónder staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.

Een screenreader schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna foutmeldingen tússen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel foutmeldingen daarom ook aan het element voor formulierinvoer met `aria-describedby`. Op die manier wordt de foutmeldingen voorgelezen wanneer de toetsenbordfocus op dat element staat.

Voorbeeld:

```html
<p><label for="name">Naam</label></p>
<p id="description-name">Vul je voor- en achternaam in.</p>
<p id="error-name">Het veld 'Naam' is een verplicht veld.</p>
<p><input id="name" aria-describedby="description-name error-name" autocomplete="name" type="text" /></p>
```

NL Design System richtlijnen:

- [Toegankelijke foutmeldingen bij formuliervelden](/richtlijnen/formulieren/foutmeldingen/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
