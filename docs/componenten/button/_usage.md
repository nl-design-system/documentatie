# Gebruik Button

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fbutton-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/button-css](https://www.npmjs.com/package/@nl-design-system-candidate/button-css)
versie 1.

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

Bekijk alle variaties bij [de CSS Button in Storybook](https://nl-design-system.github.io/candidate/?path=/docs/css-button--documentatie)

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fbutton-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/button-react](https://www.npmjs.com/package/@nl-design-system-candidate/link-react)
versie 1.

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

Bekijk alle variaties bij [de React Button in Storybook](https://nl-design-system.github.io/candidate/?path=/docs/button--documentatie)

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — Button](https://www.figma.com/design/FqAr99wvrlHxTJYAHkFRQN/NL-Design-System---Bibliotheek?node-id=153-1138).
