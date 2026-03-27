<!-- @license CC0-1.0 -->

Een foutmelding vertelt de bezoeker dat er iets fout is gegaan.
Als het element voor formulierinvoer met een foutmelding geen toetsenbordfocus krijgt, zorg er dan voor dat gebruikers die de melding niet zien, deze informatie toch meteen meekrijgen.

Dit kun je op verschillende manieren doen:

- Door een samenvattende foutmelding met de rol `alert` boven het formulier te plaatsen.
- Door de Form Field Error Message zelf de rol `alert` te geven.

De rol `alert` zorgt ervoor dat een [screenreader](/woordenlijst/#:~:text=Nederlandstalige%20WCAG%20definitie-,Screenreader,-screen%20reader) de informatie meteen voorleest. Gebruik de Form Field Error Message daarom ook niet om tijdens het invullen van een formulierveld statusupdates te geven, bijvoorbeeld over hoeveel tekens er nog over zijn.
Dit is voor een screenreadergebruiker erg storend.
