<!-- @license CC0-1.0 -->

Als de Text Input een tekstueel label heeft, maak dan gebruik van een `label`-element en koppel het met de attributen `for` en `id` aan de Text Input.

```html
<label for="voorbeeld">Ik ben een Text Input</label> <input type="text" id="voorbeeld" />
```

Op die manier is het label expliciet gekoppeld met de Text Input, ook als het invoerveld niet binnen een `label`-element genest is.

Koppel instructies en foutmeldingen ook aan de Text Input met het `aria-describedby` attribuut:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<p id="error">Invoerfout: Het veld Naam is niet ingevuld. Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name error" autocomplete="name" />
```

NL Design System richtlijnen:

- [Toegankelijke naam label](/richtlijnen/formulieren/labels/toegankelijke-naam/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
- [Toegankelijke foutmeldingen](/richtlijnen/formulieren/foutmeldingen/)
