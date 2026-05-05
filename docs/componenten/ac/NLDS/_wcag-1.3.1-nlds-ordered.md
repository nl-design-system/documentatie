<!-- @license CC0-1.0 -->

De Ordered List is herkenbaar voor hulpsoftware als ongeordende lijst omdat de component is opgemaakt met `ol` en `li` elementen.

```html
<ol>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
</ol>
```

Voeg `role="list"` aan het ul-element wanneer je eigen markers gebruikt en daarvoor de standaard styling in CSS overschrijft met `list-style: none`. In de browser Safari ([NL Design System baseline maart 2026](https://nldesignsystem.nl/baseline/2026-03/)) verdwijnt de semantiek van de lijst zodra in CSS `list-style: none` wordt gebruikt. Met de ARIA rol `list` voeg je die semantiek weer toe.

NL Design System richtlijnen:

- [Toegankelijke opsommingen](/richtlijnen/content/tekstopmaak/opsommingen/)
