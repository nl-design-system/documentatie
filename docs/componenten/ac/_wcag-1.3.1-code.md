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

**Let op**: Hulpsoftware faalt nog geregeld bij brede en actieve ondersteuning op het HTML element `<code>` (2025). Screenreaders informeren je actieve gebruikers uiteraard uitstekend qua letterlijke teksten. Het element passeert echter zonder het sturen van formele informatie omtrent het type object aan een [screenreader](/woordenlijst/#screenreader).
