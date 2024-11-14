<!-- @license CC0-1.0 -->

Gebruik voor tekst gemarkeerd als code semantische HTML. In het geval van de component Code is dat het HTML-element `code`.

Dus niet zo:

```html
<!-- dit niet doen -->
Een zin over het element <span class="code">button</span> met een achtergrondkleur in CSS.
```

Maar zo:

```html
Een zin over het element `<code>button</code>` met een achtergrondkleur in CSS.
```

**Let op**: Het element `<code>` wordt op het moment van schrijven (2024) nog niet ondersteund door alle hulpsoftware. Wellicht in de toekomst wel, dan is het goed om nu alvast het juiste element te gebruiken.
