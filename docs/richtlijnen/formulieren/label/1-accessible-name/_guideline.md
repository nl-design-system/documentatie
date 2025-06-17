<!-- @license CC0-1.0 -->

# Geef een formulierveld een toegankelijke naam met een label

Elk formulierveld heeft een label nodig dat gekoppeld is aan het formulierveld met een `for`/`id` relatie. De labeltekst wordt dan de zogenaamde "toegankelijke naam" van het formulierveld.

Waarom is dit belangrijk?

- Gebruikers van [screenreaders](/woordenlijst/#screenreader) krijgen die naam voorgelezen als het veld toetsenbordfocus krijgt.
- Voice recognition (stembediening) gebruikers kunnen het veld focus geven door die naam uit te spreken.
- Muis- en touchscreen gebruikers kunnen het label aanklikken om het formulierveld focus te geven.

Het doel van een label is dat de gebruiker de vraag begrijpt. Een effectief label is duidelijk en beschrijvend. Is er meer uitleg nodig? Gebruik dan een beschrijving (description).

## De for/id relatie

Opzet in de HTML:

- Geef het formulierveld een ID.
- Geef het label het attribute `for` met als waarde de ID van het bijbehorende formulierveld.

<!-- prettier-ignore -->
```html
<label for="kleur1">Wat is je lievelingskleur</label>
<input type="text" id="kleur1" name="lievelingskleur" />
```

Let op: De gebruikte **ID's** moeten uniek zijn voor de pagina, anders worden de verkeerde namen bij de velden voorgelezen.

Een snelle test of de koppeling werkt: klik op het label en ga na of het veld focus krijgt.

Doen: Gekoppeld label met `for` en `id`. Het `<label>`-element heeft een `for` attribuut (of `htmlFor` in React) dat verwijst naar het `id` van het bijbehorende formulierveld.

Zo werkt dit bijvoorbeeld met een `<select>`:

```html
<label for="kleur2">Wat is je lievelingskleur?</label>
<select id="kleur2" name="lievelingskleur">
  <option>Rood</option>
  <option>Blauw</option>
  <option>Wit</option>
</select>
```

Het geven van een goede toegankelijke naam aan formuliervelden is nodig om te voldoen aan de WCAG-succescriteria:

- [1.3.1 Info en relaties](/wcag/1.3.1) (niveau A).
- [2.4.6 Koppen en labels](/wcag/2.4.6) (niveau AA).
- [3.3.2 Labels of instructies](/wcag/3.3.2) (niveau A).
- [4.1.2 Naam, rol, waarde](/wcag/4.1.2) (niveau A).
