<!-- @license CC0-1.0 -->

Zorg ervoor dat instructies en foutmeldingen die nodig zijn om te begrijpen wat er van de bezoeker verwacht wordt op een logische plek staan en gekoppeld zijn aan het formulierveld.

De meest gebruiksvriendelijke plek voor instructies en foutmeldingen is tussen het label en het invoerveld. Als instructies ónder het veld staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.

Een screenreader schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna instructies tússen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel instructies en foutmeldingen daarom ook aan het formulierveld met `aria-describedby`. Op die manier wordt de beschrijving voorgelezen wanneer de toetsenbordfocus op het formulierveld staat.

Voorbeeld:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<p id="error">Invoerfout: Het veld Naam is niet ingevuld. Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name error" autocomplete="name" />
```

NL Design System richtlijnen:

- [Toegankelijke instructies en beschrijvingen](/richtlijnen/formulieren/descriptions/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
- [Toegankelijke foutmeldingen](/richtlijnen/formulieren/foutmeldingen/)
