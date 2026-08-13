<!-- @license CC0-1.0 -->

Het parent HTML element van de Unordered en Ordered List mag alleen list-items bevatten:

```html
<ul>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
</ul>
```

Dit geldt ook voor geneste Unordered en Ordered Lists:

```html
<ul>
  <li>List-item voorbeeld</li>
  <li>
    List-item voorbeeld
    <ul>
      <li>Genest list-item voorbeeld</li>
      <li>Genest list-item voorbeeld</li>
    </ul>
  </li>
  <li>List-item voorbeeld</li>
  <li>List-item voorbeeld</li>
</ul>
```

NL Design System richtlijnen:

- [Toegankelijke opsommingen](/richtlijnen/content/tekstopmaak/opsommingen/)
