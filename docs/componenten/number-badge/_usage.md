# Gebruik Number Badge

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fnumber-badge-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/number-badge-css](https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-css)
versie 1.

Gebruik de `nl-number-badge` class name op een `span` element:

```html
<span class="nl-number-badge">42</span>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/number-badge-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/number-badge-css@1/dist/number-badge.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/number-badge-css/dist/number-badge.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/number-badge-css/number-badge.css";
```

### Number badge als data component

Je kunt er ook voor kiezen om number badge op een `data` element te gebruiken:

```html
<data class="nl-number-badge" value="42">42</data>
```

### Number badge met een toegankelijk label

Om te zorgen dat de betekenis van een number badge duidelijk is wanneer de pagina wordt voorgelezeg kun je ook een onzichtbaar label toevoegen:

```html
<data value="42" class="nl-number-badge">
  <span hidden="" aria-hidden="true" class="nl-number-badge__visible-label"> 42 </span>
  <span class="nl-number-badge__hidden-label">42 ongelezen berichten</span>
</data>
```

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fnumber-badge-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/number-badge-react](https://www.npmjs.com/package/@nl-design-system-candidate/number-badge-react)
versie 1.

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/number-badge-react
```

Je kunt de React component zo gebruiken:

```jsx
import { NumberBadge } from "@nl-design-system-candidate/number-badge-react";

export const MyComponent = () => <NumberBadge value="42" />;
```

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — number-badge](https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=16036-18152&t=05MMm59Zv67e65gd-4).
