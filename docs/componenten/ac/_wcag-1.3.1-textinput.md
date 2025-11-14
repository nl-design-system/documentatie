<!-- @license CC0-1.0 -->

Als de Text input een tekstueel label heeft, maak dan gebruik van een `label`-element en koppel het met de attributen `for` en `id` aan de Text input.

```html
<label for="voorbeeld"
  >Ik ben een Text input
  <input type="text" id="voorbeeld" />
</label>
```

Op die manier is het label expliciet gekoppeld met de Text input, ook als het invoerveld niet binnen een `label`-element genest is.

NL Design System richtlijnen:

- [Toegankelijke naam label](/richtlijnen/formulieren/labels/toegankelijke-naam/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
