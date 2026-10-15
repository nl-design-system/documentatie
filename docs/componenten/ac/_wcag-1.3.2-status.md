<!-- @license CC0-1.0 -->

Zorg ervoor dat statusmeldingen op een logische plek staan en gekoppeld zijn aan het element voor formulierinvoer.

De meest gebruiksvriendelijke plek voor statusmeldingen is tussen het label en het element voor formulierinvoer, zowel visueel als in de documentvolgorde. Als statusmeldingen onder de formulierinvoer staan, worden ze mogelijk bedekt door de autocomplete-functionaliteit van de browser.

Een [screenreader](/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader) schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna statusmeldingen tússen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel statusmeldingen daarom ook aan het element voor formulierinvoer met `aria-describedby`. Op die manier wordt de statusmelding voorgelezen wanneer de toetsenbordfocus op dat element staat.

Voorbeeld:

```html
<p><label for="password">Nieuw wachtwoord</label></p>
<p id="description-password">
  Een wachtwoord moet uit minimaal 16 karakters bestaan, waarvan minimaal 1 cijfer en 1 speciaal teken.
</p>
<p id="status-password" role="status">Nog 6 karakters over.</p>
<p><input id="name" aria-describedby="description-password status-password" autocomplete="off" type="text" /></p>
```

NL Design System richtlijnen:

- [Toegankelijke formulieren](/richtlijnen/formulieren/)
