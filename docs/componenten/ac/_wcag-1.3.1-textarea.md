<!-- @license CC0-1.0 -->

Als de Text Area een zichtbaar label heeft, gebruik dan een `label`-element en koppel het met de attributen `for` en `id` aan de Text Area.

```html
<p><label for="message">Je bericht</label></p>
<p><textarea id="message"></textarea></p>
```

Koppel alle zichtbare instructies en foutmeldingen ook aan de Text Area met het `aria-describedby` attribuut:

```html
<p><label for="message">Je bericht</label></p>
<p id="message-description">Wat is je vraag, opmerking of klacht?</p>
<p id="message-error">Invoerfout: Het veld Je bericht is niet ingevuld. Vul hier iets in.</p>
<textarea id="message" aria-describedby="message-description message-error"></textarea>
```

NL Design System richtlijnen:

- [Toegankelijke naam label](/richtlijnen/formulieren/labels/toegankelijke-naam/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
- [Toegankelijke foutmeldingen](/richtlijnen/formulieren/foutmeldingen/)
