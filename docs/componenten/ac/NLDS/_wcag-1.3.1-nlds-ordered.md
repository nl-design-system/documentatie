<!-- @license CC0-1.0 -->

De Ordered List is herkenbaar voor hulpsoftware als geordende lijst omdat de component is opgemaakt met `ol` en `li` elementen.
In de browser Safari ([NL Design System baseline mei 2026](/baseline/2026-05/)) verdwijnt de semantiek van de lijst zodra in CSS `list-style: none` wordt gebruikt. Daarom is de ARIA rol `list` toegevoegd.

```html
<ul role="list">
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
</ul>
```

NL Design System richtlijnen:

- [Toegankelijke opsommingen](/richtlijnen/content/tekstopmaak/opsommingen/)
