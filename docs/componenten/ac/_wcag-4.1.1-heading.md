<!-- @license CC0-1.0 -->

Zorg ervoor dat je een heading op de juiste manier nest als je hem wilt gebruiken in combinatie een ander element, zoals een button of een link. Denk erom dat de elementen dan correct worden genest in de HTML. Check je code daarom met een [HTML-validator](https://validator.w3.org/) of [HTML-linter](https://github.com/caramelomartins/awesome-linters?tab=readme-ov-file#html).

Een voorbeeld is een button met een heading erin:

```html
<h2>
  <button>button in heading, wel toegestaan</button>
</h2>
```

```html
<!-- Foute code, niet gebruiken -->
<button>
  <h2>heading in button, niet toegestaan</h2>
</button>
```
