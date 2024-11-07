<!-- @license CC0-1.0 -->

De zichtbare naam van de link is gelijk aan, of begint met de [toegankelijke naam](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name).

Dit is het eenvoudigst te realiseren door een `a`-element te gebruiken met daarin tekst.

Pas op met het gebruik van `aria-label` om een naam te geven aan een link. Een `aria-label` overschrijft de tekstinhoud van een link. Zodoende kan een link een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware gebruiken moeilijkheden kunnen krijgen met het bedienen van de link. Als je echt een `aria-label` nodig hebt, zorg dan dat de waarde van het `aria-label` begint met de exacte tekst die zichtbaar is in de link.

Dus niet:

```html
<!-- Dit is een fout voorbeeld, niet kopiëren -->
<a href="login-url" aria-label="Klik hier om in te loggen">Log in met DigiD</a>
```

Maar:

```html
<a href="login-url">Log in met DigiD</a>
```

NL Design System richtlijnen:

- [De zichtbare naam moet overeenkomen met de toegankelijke naam](/richtlijnen/formulieren/labels/zichtbare-naam/)
