<!-- @license CC0-1.0 -->

Als je de tekstafstand vergroot blijft de tekst in zijn geheel zichtbaar. Dit gaat om regelhoogte, afstand tussen alinea's, letterafstand en ruimte tussen woorden.

Zorg ervoor dat het element mee kan groeien met de tekst. Geef de breedte en de hoogte dus niet hard op in pixels.

Definieer in de CSS een wijze om lange woorden af te breken en te laten doorlopen op de volgende regel. Zodat er geen horizontale scrollbar ontstaat of tekst onleesbaar wordt.

Je moet de afstand kunnen vergroten naar deze waardes:

- Regelhoogte (regelafstand) naar ten minste 1,5 keer de lettergrootte;
- Afstand tussen alinea's naar ten minste 2 keer de lettergrootte;
- Letterafstand (spatiëren van letters) naar ten minste 0,12 keer de lettergrootte;
- Spatiëren van woorden naar ten minste 0,16 keer de lettergrootte.

Dit is te testen met een [bookmarklet](https://html5accessibility.com/tests/tsbookmarklet.html) of door in de inspector van de browser de volgende code toe te voegen aan de `head` van de pagina:

```css
<style>
body * {
    line-height: 1.5 !important;
    letter-spacing: 0.12em !important;
    word-spacing: 0.16em !important;
}
body p {
    margin-bottom: 2em !important;
}
</style>
```

NL Design System richtlijnen:

- [Let op voorkeursinstellingen voor typografie](/richtlijnen/stijl/typografie/voorkeur)
- [Zorg ervoor dat letters groot genoeg zijn](/richtlijnen/stijl/typografie/lettergrootte)
- [Zorg voor een comfortabele regelafstand](/richtlijnen/stijl/typografie/regelafstand/)
