<!-- @license CC0-1.0 -->

Gebruik voor tekst gemarkeerd als code semantische HTML. In het geval van de component Code is dat het HTML-element `code`.

Dus niet zo:

```html
<!-- Foute code, niet gebruiken -->
Een zin over het element <span class="code">button</span> met een achtergrondkleur in CSS.
```

Maar zo:

```html
Een zin over het element `<code>button</code>` met een achtergrondkleur in CSS.
```

**Let op**: Het element `<code>` wordt op het moment van schrijven (2025) nog niet ondersteund door alle hulpsoftware. Dat betekent niet dat bezoekers die bijvoorbeeld een [screenreader](/woordenlijst/#screenreader) gebruiken de inhoud van het element niet horen, alleen dat er op dit moment niet wordt aangegeven dat het om een `code` element gaat.
