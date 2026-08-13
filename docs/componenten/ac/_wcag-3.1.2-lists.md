<!-- @license CC0-1.0 -->

Als een tekst in een andere taal is dan de taal van de pagina, dan heeft het element een `lang`-attribuut met de juiste taalcode.

Dit doe je op het parent-element wanneer de hele inhoud in een andere taal is geschreven, of op het child-element waarvan de inhoud in een andere taal is geschreven.

Als de hele Ordered List in een andere taal is geschreven:

```html
<ol lang="en">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

Als alleen de inhoud van één van de items in een andere taal is geschreven:

```html
<ol>
  <li>Eerste item</li>
  <li lang="en">Second item</li>
  <li>Derde item</li>
</ol>
```

Of:

```html
<ol>
  <li>Eerste item</li>
  <li><p lang="en">Second item</p></li>
  <li>Derde item</li>
</ol>
```

NL Design System richtlijnen:

- [De juiste taal instellen](/richtlijnen/content/tekstopmaak/taal/)
