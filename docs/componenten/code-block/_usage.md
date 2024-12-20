# Gebruik Code Block

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fcode-block-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/code-block-css](https://www.npmjs.com/package/@nl-design-system-candidate/code-block-css)
versie 1.

Gebruik de `nl-code-block` class name op een `pre` element met de `nl-code-block__code` class name op een `code` element:

```html
<pre dir="ltr" translate="no" class="nl-code-block">
  <code class="nl-code-block__code">
    function addNumbers(a, b) {
      return a + b;
    }
  </code>
</pre>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/code-block-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-block-css@1/dist/code-block.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-block-css/dist/code-block.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/code-block-css/code-block.css";
```

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fcode-block-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/code-block-react](https://www.npmjs.com/package/@nl-design-system-candidate/code-block-react)
versie 1.

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/code-block-react
```

Je kunt de React component zo gebruiken:

```jsx
import { CodeBlock } from "@nl-design-system-candidate/code-block-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        function addNumbers(a, b) {
          return a + b;
        }
      </body>
    </html>
  );
};
```

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — Code Block](https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=16013-20518&t=VLuBXH3mk0TIqsiJ-4).
