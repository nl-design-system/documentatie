# Gebruik Paragraph

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[@nl-design-system-candidate/paragraph-css](https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-css)

Gebruik de `nl-paragraph` class name op een `p` element:

```html
<p class="nl-paragraph">Op brute wĳze ving de schooljuf de quasi-kalme lynx.</p>
```

Voor de Lead Paragraph gebruik je de extra class name `nl-paragraph--lead`:

```html
<p class="nl-paragraph nl-paragraph--lead">
  Op brute wĳze ving de schooljuf de quasi-kalme lynx. Je gelooft nooit wat er toen gebeurde!
</p>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/paragraph-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/paragraph-css@2/dist/paragraph.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/paragraph-css/dist/paragraph.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/paragraph-css/paragraph.css";
```

## React

De React component is gepubliceerd in een npm package:

[@nl-design-system-candidate/paragraph-react](https://www.npmjs.com/package/@nl-design-system-candidate/paragraph-react)

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/paragraph-react
```

Je kunt de React component zo gebruiken:

```jsx
import { Paragraph } from "@nl-design-system-candidate/paragraph-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <Paragraph>Op brute wĳze ving de schooljuf de quasi-kalme lynx.</Paragraph>
      </body>
    </html>
  );
};
```

De Lead Paragraph werkt zo:

Je kunt de React component zo gebruiken:

```jsx
<Paragraph purpose="lead">Op brute wĳze ving de schooljuf de quasi-kalme lynx.</Paragraph>
```
