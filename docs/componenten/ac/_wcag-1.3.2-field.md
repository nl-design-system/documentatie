<!-- @license CC0-1.0 -->

Zorg ervoor dat de componenten in de Form Field op logische volgorde staan, zowel visueel als in de document volgorde.

Plaats beschrijvingen, foutmeldingen en statusmeldingen daarom tussen het label (met een eventuele suffix) en het invoerveld.

Een [screenreader](/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader) schakelt in een formulierveld over van leesmodus naar focusmodus. Als een bezoeker daarna informatie tússen de velden wil lezen, moet diegene weer handmatig terugschakelen naar de leesmodus. Koppel beschrijvingen, statusmeldingen en foutmeldingen daarom ook aan het element voor formulierinvoer met `aria-describedby`. Op die manier wordt de informatie voorgelezen wanneer de toetsenbordfocus op dat element staat.

NL Design System richtlijnen:

- [Toegankelijke formulieren](/richtlijnen/formulieren/)
