<!-- @license CC0-1.0 -->

Zorg ervoor dat bezoekers geholpen worden met het invullen van persoonlijke gegevens door gebruik te maken van het `autocomplete`-attribuut.

Voorbeeld:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" />
```

In de HTML specificatie vind je een [lijst van mogelijke autocomplete-waarden](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute.)

NL Design System richtlijnen:

- [Toegankelijke formulieren](/richtlijnen/formulieren/)
