<!-- @license CC0-1.0 -->

Zorg ervoor dat instructies die nodig zijn om te begrijpen wat er van de bezoeker verwacht wordt op een logische plek staan en/of programmatisch gekoppeld zijn aan het formulierveld.

De meest gebruiksvriendelijke plek voor instructies is tussen het label en het invoerveld. Als instructies ónder het veld staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser. Daarnaast staan foutmeldingen meestal onder het veld. Als zowel de instructie als de foutmelding onder het veld staat, is dat mogelijk verwarrend.

Een screenreader schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna instructies tússen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Het is daarom het meest gebruiksvriendelijk om instructies ook programmatisch aan het formulierveld te koppelen met `aria-describedby`. Op die manier wordt de beschrijving voorgelezen wanneer de toetsenbordfocus op het formulierveld staat.

Voorbeeld:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" />
```

NL Design System richtlijnen:

- [Toegankelijke instructies en beschrijvingen](/richtlijnen/formulieren/descriptions/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
