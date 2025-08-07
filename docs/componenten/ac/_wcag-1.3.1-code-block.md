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

**Let op**: Het element `<code>` wordt op het moment van schrijven (2025) nog niet ondersteund door alle hulpsoftware. Dat betekent niet dat bezoekers die bijvoorbeeld een [screenreader](/woordenlijst/#screenreader) gebruiken de inhoud van het element niet horen, alleen dat er op dit moment niet wordt aangegeven dat het om een `code` element gaat.
