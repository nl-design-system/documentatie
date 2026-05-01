<!-- @license CC0-1.0 -->

De Ordered List is herkenbaar voor hulpsoftware als ongeordende lijst omdat de component is opgemaakt met `ol` en `li` elementen.
In de browser Safari ([NL Design System baseline maart 2026](https://nldesignsystem.nl/baseline/2026-03/)) verdwijnt de semantiek van de lijst zodra in CSS `list-style: none` wordt gebruikt. Daarom is de ARIA rol `list` toegevoegd.

```html
<ol role="list">
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
</ol>
```

NL Design System richtlijnen:

- [Toegankelijke opsommingen](/richtlijnen/content/tekstopmaak/opsommingen/)
