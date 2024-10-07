<!-- @license CC0-1.0 -->

De zichtbare naam van de button is gelijk aan de toegankelijke naam.

Dit is het eenvoudigst te realiseren door een `button`-element te gebruiken met daarin tekst:

```html
<button>Ga naar stap 2</button>
```

Pas op met het gebruik van `aria-label` om een naam te geven aan een button. Een `aria-label` overschrijft de tekstinhoud van een button. Zodoende kan een button een toegankelijke naam krijgen die anders is dan de zichtbare naam, waardoor mensen die hulpsoftware moeilijkheden kunnen krijgen met het bedienen van de button. Als je echt een `aria-label` nodig hebt, zorg dan dat de waarde van het `aria-label` begint met de exacte tekst die zichtbaar is in de button.

NL Design System richtlijnen:

- [De zichtbare naam moet overeenkomen met de toegankelijke naam](/richtlijnen/formulieren/labels/zichtbare-naam/)
