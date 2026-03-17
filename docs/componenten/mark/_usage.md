# Gebruik Mark

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[@nl-design-system-candidate/mark-css](https://www.npmjs.com/package/@nl-design-system-candidate/mark-css)

Gebruik de `nl-mark` class name op een `mark` element:

```html
<mark class="nl-mark">Gemarkeerde tekst</mark>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/mark-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/mark-css@1/dist/mark.css" />
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/mark-css/dist/mark.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/mark-css/mark.css";
```

## React

De React component is gepubliceerd in een npm package:

[@nl-design-system-candidate/mark-react](https://www.npmjs.com/package/@nl-design-system-candidate/mark-react)

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/mark-react
```

Je kunt de React component zo gebruiken:

```jsx
import { Mark } from "@nl-design-system-candidate/mark-react";

export const MyComponent = () => {
  return (
    <p>
      <Mark href="https://example.com">example.com</Mark>
    </p>
  );
};
```
