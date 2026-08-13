<!-- @license CC0-1.0 -->

Een foutmelding vertelt de bezoeker dat er iets fout is gegaan.
Zorg ervoor dat deze informatie ook meteen beschikbaar is voor bezoekers die een [screenreader](/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader) gebruiken.

Dit kun je op verschillende manieren doen:

- Door de focus naar het formulierveld met een foutmelding te verplaatsen. Als de Form Field Error Message gekoppeld is aan het formulierveld met `aria-describedby` wordt de melding nu voorgelezen. Dit werkt alleen goed als er maar één foutmelding is. Foutmeldingen bij andere velden worden niet voorgelezen.
- Door een samenvattende foutmelding met de rol `alert` boven het formulier te plaatsen. De rol `alert` zorgt ervoor dat een screenreader de informatie meteen voorleest. De foutmeldingen bij de velden hoeven nu niet voorgelezen te worden, want de bezoeker heeft de belangrijke informatie uit de samenvattende foutmelding al.
- Door de Form Field Error Message zelf de rol `alert` te geven. Als er meerdere Form Field Error Messages zijn, worden ze allemaal op volgorde voorgelezen.

Kies de methode die het best bij het formulier past.

NL Design System richtlijnen:

- [Toegankelijke foutmeldingen bij formuliervelden](/richtlijnen/formulieren/foutmeldingen/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
