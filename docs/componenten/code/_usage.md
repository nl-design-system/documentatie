# Gebruik Code

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fcode-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/code-css](https://www.npmjs.com/package/@nl-design-system-candidate/code-css)
versie 2.

Gebruik de `nl-code` class name op een `code` element:

```html
<code dir="ltr" translate="no" class="nl-code"> import { Code } from '@nl-design-system-candidate/code-react'; </code>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/code-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-css@2/dist/code.css" />
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-css/dist/code.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/code-css/code.css";
```

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fcode-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/code-react](https://www.npmjs.com/package/@nl-design-system-candidate/code-react)
versie 2.

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/code-react
```

Je kunt de React component zo gebruiken:

```jsx
import { Code } from '@nl-design-system-candidate/code-react';

export const MyPage = () => {
  return (
    <html>
      <body>
        <Code>
          import { Code } from '@nl-design-system-candidate/code-react';
        <Code>
      </body>
    </html>
  );
};
```

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — Code](https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=16013-20509&t=j0HWpfOYWPeYBX0r-4).
