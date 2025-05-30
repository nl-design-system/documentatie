<!-- @license CC0-1.0 -->

# Disabled submitbuttons

In de praktijk worden disabled submitbuttons vaak gebruikt om te verhinderen dat een gebruiker het formulier verzendt als nog niet alle waarden goed zijn ingevuld.

Er is een aantal toegankelijkheidsproblemen met het gebruik van disabled buttons:

- De gebuiker moet zoeken wat er mis is, waarom kan het formulier niet worden verzonden?
- Meestal is een disabled button grijs met grijze tekst. Dit is voor veel gebruikers slecht zichtbaar.
- Gebruikers van [screenreaders](/woordenlijst/#screenreader) en toetsenborden kunnen de disabled button geen focus geven en dat is verwarrend en onverwacht in het gebruik.
- Gebruikers kunnen verandering van disabled in enabled soms niet opmerken als deze uit beeld is en blijven zoeken naar wat er mis is.

Een goede oplossing en vervanging voor een disabled button: schrijf goede labelteksten, descriptions en foutmeldingen. Zodat de gebruiker weet wat er mis is en niet hoeft te puzzelen.

Deze richtlijn is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek:

- [<span lang="en">The problem with disabled buttons and what to do instead</span>](https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/), Adam Silver.
- [<span lang="en">Don't disable buttons</span>](https://gomakethings.com/dont-disable-buttons/), Chris Ferdinandi in Go Make Things.
- [<span lang="en">Usability Pitfalls of Disabled Buttons, and How To Avoid Them</span>](https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/), Vitaly Friedman in Smashing Magazine.
- [<span lang="en">Disabled buttons suck</span>](https://axesslab.com/disabled-buttons-suck/).

Een paar praktische tips als de bestaande situatie niet gelijk aangepast kan worden:

- Gebruik voor de tekst van de disabled buttons voldoende kleurcontrast, zodat de tekst wel goed leesbaar is. Bijvoorbeeld: `#767676` tegen een witte achtergrond.
- Gebruik `tabindex="0"` zodat de button wel ontdekt kan worden door screenreadergebruikers.
- Leg uit wat je moet doen om zodat de button niet meer disabled is, koppel die tekst met `aria-describedby` aan de button.
