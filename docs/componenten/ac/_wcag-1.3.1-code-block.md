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

**Let op**: Het element `<code>` wordt op het moment van schrijven (2024) nog niet ondersteund door alle hulpsoftware. Wellicht in de toekomst wel, dan is het goed om nu alvast het juiste element te gebruiken.
