<!-- @license CC0-1.0 -->

Als de Text Area een tekstueel label heeft, gebruik dan een `label`-element en koppel het met de attributen `for` en `id` aan de Text Area.

```html
<label for="voorbeeld">Ik ben een Text Area</label> <textarea id="voorbeeld" />
```

Op die manier is het label expliciet gekoppeld met de Text Area, ook als het invoerveld niet binnen een `label`-element genest is.

Koppel instructies en foutmeldingen ook aan de Text Area met het `aria-describedby` attribuut:

```html
<p><label for="message">Je bericht</label></p>
<p id="message-description">Wat is je vraag, opmerking of klacht?</p>
<p id="message-error">Invoerfout: Het veld Je bericht is niet ingevuld. Vul hier iets in.</p>
<textarea id="message" aria-describedby="message-description message-error"></textarea>
```

Geef zowel in tekst als in code aan of een veld verplicht ingevuld moet worden. In code doe je dit doe je met het `required` attribuut of met het `aria-required` attribuut.

NL Design System richtlijnen:

- [Toegankelijke naam label](/richtlijnen/formulieren/labels/toegankelijke-naam/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
- [Toegankelijke foutmeldingen](/richtlijnen/formulieren/foutmeldingen/)
- [Toegankelijke verplichte velden](/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/)
