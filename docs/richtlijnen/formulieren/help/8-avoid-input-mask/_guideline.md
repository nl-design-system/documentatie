<!-- @license CC0-1.0 -->

# Vermijd invoerpatroon op een formulierveld

Maak het een gebruiker zo gemakkelijk mogelijk om flexibel een veld in te voeren. Een vast invoerpatroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.

Wanneer je een gebruiker dwingt om volgens een vast patroon bijvoorbeeld van telefoonnummer in te voeren, kan dit leiden tot verwarring als ze alleen een mobiel nummer heeft.

Een vast patroon kan ook een blokkade zijn om een formulier in te vullen. Bijvoorbeeld:

- Het telefoonnummer past niet in het vereiste patroon: de gebruiker wil een buitenlands nummer invoeren, maar dat kan niet.
- De gebruiker wil belangrijke informatie toevoegen zoals: 'alleen 's middags bellen' maar dat kan niet.
- De gebruiker begrijpt niet wat er fout gaat omdat bijvoorbeeld letters niet kunnen worden ingevoerd en er geen goede feedback is over wat er fout gaat.

**Let op**: Er zijn situaties waar het precies invullen van een formulierveld vereist is, zoals bijvoorbeeld bij het invoeren van een wachtwoord. Geef in dat geval altijd duidelijk in de description aan [hoe een veld in te vullen](/richtlijnen/formulieren/voorkom-fouten/geldige-waardes).

## Wat is een patroon op een invoerveld?

Een patroon legt precies vast hoe een formulierveld moet worden ingevuld en staat geen andere invoer toe.

Dus kan door het gebruik van het [HTML-attribuut `pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern), in combinatie met JavaScript.

Het `pattern` legt vast wat precies de waarde moet zijn, JavaScript controleert die waarde, past eventueel de layout aan en blokkeert niet-geldige invoer.

Hoe de gebruiker een veld moet invoeren volgens het gewenste patroon staat dan in de description of in een placeholder.

Je kunt een invoerveld van een voornaam beperken tot bijvoorbeeld minimaal 3 en maximaal 12 karakters.
Dan heb je pech als je Jo of Claus-Casimir heet.

```html
<!-- Foute code, niet gebruiken -->
<input id="voornaam" name="voornaam" type="text" pattern="\w{3,16}" autocomplete="given-name" />
```

Je kunt een invoerveld voor een telefoonnummer een verplicht formaat geven.
Dan heb je pech als je geen vaste telefoon meer hebt of een buitenlands nummer wilt opgeven.

```html
<!-- Foute code, niet gebruiken -->
<input
  type="tel"
  id="telefoon"
  name="telefoon"
  pattern="[0-9]{3}-[0-9]{7}"
  placeholder="___-_______"
  autocomplete="tel"
/>
```

## De problemen met de gebruikerservaring en de toegankelijkheid van invoerpatronen

Adam Silver vat het goed samen in zijn artikel [<span lang="en">The problem with input masks and what to do instead</span>](https://adamsilver.io/blog/the-problem-with-input-masks-and-what-to-do-instead/).

- Het patroon kan niet geschikt zijn voor het antwoord wat de gebruiker wil geven.
- Afgedwongen patronen zijn verwarrend, de cursor verspringt automatisch naar een volgende positie en speciale tekens zoals '-', '(' of ')' kunnen niet worden verwijderd.
- De placeholder met het voorbeeld kan lijken op een al ingevuld veld.
- De placeholder met het voorbeeld verdwijnt bij het invullen en je weet niet meer hoe de rest van de waarde in te vullen.
- Omdat de er tekens worden verwijderd of overgeslagen lijkt het alsof er wat fout gaat zonder dat er een meteen foutmelding verschijnt.

In het artikel van Giovani Camara [<span lang="en">Accessible input masking</span>](https://giovanicamara.com/blog/accessible-input-masking/) laat hij de YouTube video [<span lang="en">Allow users to edit anywhere</span>](https://www.youtube.com/watch?v=rTk3XNSXJXY) zien wat er fout kan gaan als een gebruiker een waarde wil wijzigen. De cursus kan vanzelf naar het einde van de waarde springen, terwijl je het eerste karakter wilt aanpassen. Dit is voor iedereen irritant en leidt tot fouten.

Het aangeven van invoerpatronen in de placeholder of in het value-attribute kan heel zijn onduidelijk voor screenreader gebruikers. Een opsomming van underscores is niet erg informatief. Kijk en luister naar de [demo op YouTube van Giovani Camara](https://www.youtube.com/watch?v=7WWQXGgRDLc) hiervan met VoiceOver.

Is een exacte invoer nodig, bijvoorbeeld bij een geboortedatum, biedt dan een optie aan die iedereen makkelijk kan invullen. De richtlijn [Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief](https://nldesignsystem.nl/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen) gaat hier uitgebreid op in.

Daarnaast zijn een goede description en duidelijke foutmeldingen belangrijk. Help de gebruiker en laat deze niet puzzelen over hoe precies een veld in te vullen en wat er nu weer fout gaat.

Het geven van goede feedback over het juist invoeren van gegevens in formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:

- [3.3.1 Foutidentificatie](https://nldesignsystem.nl/wcag/3.3.1) (niveau A).
- [3.3.3 Foutsuggestie](https://nldesignsystem.nl/wcag/3.3.3) (niveau AA).
