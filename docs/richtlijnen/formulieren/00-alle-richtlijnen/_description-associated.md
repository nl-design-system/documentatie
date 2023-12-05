## Koppel een description aan het formulierveld

Voor screenreadergebruikers is het belangrijk dat de description samen wordt voorgelezen met het formulierveld. Dat kan door deze twee aan elkaar te koppelen via aria-describedby.

**Let op:** De gebruikte ID’s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen.

Opzet in de HTML:

- Geef description een ID: `id="description-wachtwoord"`.
- Verwijs in het formulierveld naar dat ID:`aria-describedby="description-wachtwoord"`.

Hierdoor wordt naast de labeltekst ook de description voorgelezen, wanneer een screenreadergebruiker het formulierveld focus geeft.

Lees ook: [MDN over aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).
