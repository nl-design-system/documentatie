## Plaats de informatie over waar de gebruiker is in de stappen boven het formulier

Zet inhoud die niet is gerelateerd aan formuliervelden altijd boven het formulier van elke stap. Dus zet informatie over de stappen **boven** en niet **binnen** het `<form>` element. Dan is de kans dat screenreadergebruikers deze informatie missen het kleinst.

Screenreaders, zoals JAWS, schakelen over naar de “formulierenmodus” wanneer ze inhoud binnen een `<form>` element verwerken. In deze modus lezen screenreaders alleen de formuliervelden voor, inclusief de daaraan gekoppelde informatie (met bijvoorbeeld `aria-describedby`), en niet-gekoppelde informatie niet, tenzij de gebruiker er zelf naar zoekt.

Plaats informatie over een formulier dus erboven. Dat scheelt de complexiteit van eventueel gebruik van ARIA om tekst te laten voorlezen.

Meer informatie over de formulierenmodus:

- [Form Instructions](https://www.w3.org/WAI/tutorials/forms/instructions/), Web Accessibility Initiative.
- [Browse and focus modes](https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes), Accessibility Developer Guide.
