# Gebruik Data Badge

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fdata-badge-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/data-badge-css](https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-css)
versie 1.

Gebruik de `nl-data-badge` class name op een `span` element:

```html
<span class="nl-data-badge">42</span>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/data-badge-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/data-badge-css@1/dist/data-badge.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/data-badge-css/dist/data-badge.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/data-badge-css/data-badge.css";
```

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fdata-badge-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/data-badge-react](https://www.npmjs.com/package/@nl-design-system-candidate/data-badge-react)
versie 1.

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/data-badge-react
```

Je kunt de React component zo gebruiken:

```jsx
import { DataBadge } from "@nl-design-system-candidate/data-badge-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <DataBadge>42</DataBadge>
      </body>
    </html>
  );
};
```

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — Data Badge](https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=13781-18012).
