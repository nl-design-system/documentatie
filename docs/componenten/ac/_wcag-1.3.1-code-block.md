<!-- @license CC0-1.0 -->

Gebruik voor tekst gemarkeerd als opgemaakte code semantische HTML. In het geval van de component Code Block is dat het HTML-element `code`
in combinatie met `pre`.

Dus niet zo:

```html
<!-- Foute code, niet gebruiken -->
<pre>
  <div class="code-block">
    @use "./mixin";
    
    .nl-heading-1 {
    @include mixin.nl-heading-1;
    }
  </div>
</pre>
```

Maar zo:

```html
<pre>
  <code class="code-block">
    @use "./mixin";
  
    .nl-heading-1 {
    @include mixin.nl-heading-1;
    }
  </code>
</pre>
```

**Let op**: Hulpsoftware faalt nog geregeld bij brede en actieve ondersteuning op het HTML element `<code>` (2025). Screenreaders informeren je actieve gebruikers uiteraard uitstekend qua letterlijke teksten. Het element passeert echter zonder het sturen van formele informatie omtrent het type object aan een [screenreader](/woordenlijst/#screenreader).
