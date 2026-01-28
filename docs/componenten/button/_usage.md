# Gebruik Button

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[@nl-design-system-candidate/button-css](https://www.npmjs.com/package/@nl-design-system-candidate/button-css)

Gebruik de `nl-button` class name op een `button` element:

```html
<button class="nl-button">Klik mij</button>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/button-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/button-css@1/dist/button.css" />
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/button-css/dist/button.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/button-css/button.css";
```

## React

De React component is gepubliceerd in een npm package:

[@nl-design-system-candidate/button-react](https://www.npmjs.com/package/@nl-design-system-candidate/button-react)

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/button-react
```

Je kunt de React component zo gebruiken:

```jsx
import { Button } from "@nl-design-system-candidate/button-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <div>
          <Button>Klik mij!</Button>
        </div>
      </body>
    </html>
  );
};
```
