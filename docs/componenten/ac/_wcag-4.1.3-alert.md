<!-- @license CC0-1.0 -->

Een Alert geeft informatie over het proces van de bezoeker.
Zorg ervoor dat deze informatie ook meteen beschikbaar is voor bezoekers die een [screenreader](/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader) gebruiken.

Dit kun je op verschillende manieren doen:

- Door de rol `alert` te gebruiken. Deze live-region rol gebruik je voor foutmeldingen en waarschuwingen. De melding wordt dan direct voorgelezen. Dit onderbreekt een screenreader in het voorlezen van de tekst die op dat moment wordt voorgelezen.
- Door de rol `status` te gebruiken. Deze live-region rol gebruik je voor statusupdates, zoals succesmeldingen. De melding wordt dan voorgelezen zodra de screenreader klaar is met het voorlezen van de tekst die op dat moment wordt voorgelezen.
- Door de toetsenbordfocus naar de Alert te verplaatsen. De melding wordt dan direct voorgelezen. Dit onderbreekt een screenreader in het voorlezen van de tekst die op dat moment wordt voorgelezen.

Vermijd het dubbel voorlezen van de melding door een [screenreader](/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader). Maak een goede keuze tussen een live-region of focus verplaatsen, op basis van de beste gebruikerservaring met een toetsenbord en screenreader.

Kies de methode die het beste aansluit bij de aard van de melding.

NL Design System richtlijnen:

- [Toegankelijke formulieren](/richtlijnen/formulieren/)
- [Toegankelijke succesmeldingen](/richtlijnen/formulieren/bevestigingspagina/succesmelding/)
