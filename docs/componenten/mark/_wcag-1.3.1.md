<!-- @license CC0-1.0 -->

De gemarkeerde tekst is ook herkenbaar voor hulpapparatuur zoals screenreaders en brailleleesregels. Daarvoor kun je het beste semantische HTML gebruiken.

In het geval van de component Mark is dat het HTML-element `mark`.

Dus niet zo:

```html
<!-- dit niet doen -->
Een zin met <span class="mark">een stuk gemarkeerde tekst</span> met een achtergrondkleur in CSS
```

Maar zo:

```html
Een zin met <mark>een stuk gemarkeerde tekst</mark> met een achtergrondkleur in CSS
```

**Let op**: Het element `<mark>` wordt op het moment van schrijven (2024) nog niet ondersteund door alle hulpsoftware. Wellicht in de toekomst wel, dan is het goed om nu alvast het juiste element te gebruiken.
