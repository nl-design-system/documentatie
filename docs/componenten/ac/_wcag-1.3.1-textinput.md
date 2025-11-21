<!-- @license CC0-1.0 -->

Als de Text input een tekstueel label heeft, maak dan gebruik van een `label`-element en koppel het met de attributen `for` en `id` aan de Text input.

```html
<label for="voorbeeld"
  >Ik ben een Text input
  <input type="text" id="voorbeeld" />
</label>
```

Op die manier is het label expliciet gekoppeld met de Text input, ook als het invoerveld niet binnen een `label`-element genest is.

Koppel instructies daarnaast bij voorkeur ook aan de Text input met het `aria-describedby` attribuut:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" />
```

NL Design System richtlijnen:

- [Toegankelijke naam label](/richtlijnen/formulieren/labels/toegankelijke-naam/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
