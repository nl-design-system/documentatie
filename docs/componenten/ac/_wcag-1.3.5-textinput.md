<!-- @license CC0-1.0 -->

Help bezoekers met het invullen van persoonlijke gegevens door gebruik te maken van het `autocomplete`-attribuut.

Voorbeeld:

```html
<label for="name">Naam</label>
<p id="description-name">Vul je voornaam en achternaam in.</p>
<input id="name" aria-describedby="description-name" autocomplete="name" type="text" />
```

In de HTML specificatie vind je een [lijst van mogelijke autocomplete-waarden](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute.)

Gebruik altijd een `autocomplete`-attribuut wanneer je persoonlijke informatie van bezoekers uitvraagt waar een geschikte autocomplete-waarde voor bestaat, ook als de waarde van het `type`-attribuut (zoals `email` ) al voldoende duidelijk lijkt. Dit helpt browsers de juiste gegevens aan de bezoeker voor te stellen.

NL Design System richtlijnen:

- [Toegankelijke formulieren](/richtlijnen/formulieren/)
