<!-- @license CC0-1.0 -->

# Koppel een description aan het formulierveld

Voor screenreadergebruikers is het belangrijk dat de description samen wordt voorgelezen met het formulierveld.

Waarom? Screenreaders, zoals JAWS, schakelen over naar de “formulierenmodus” wanneer ze inhoud binnen een `<form>` element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld `aria-describedby`). De niet-gekoppelde informatie wordt dan niet voorgelezen, tenzij de gebruiker er zelf naar zoekt.

Meer informatie over de formulierenmodus:

- [Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/), Web Accessibility Initiative.
- [Browse and focus modes](https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes), Accessibility Developer Guide.

Door de description aan het formulierveld te koppelen via 'aria'-describedby', wordt het label en de description samen voorgelezen wanneer een screenreadergebruiker het formulierveld focus geeft.

**Let op:** De gebruikte ID’s moeten uniek zijn voor de pagina, anders worden de verkeerde descriptions bij de velden voorgelezen.

Opzet in de HTML:

- Geef description een ID: `id="description-name"`.
- Verwijs in het formulierveld naar dat ID: `aria-describedby="description-name"`.

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" />
```

Lees ook: [MDN over aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).
