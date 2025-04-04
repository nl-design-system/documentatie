# Gebruik Link

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Flink-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/link-css](https://www.npmjs.com/package/@nl-design-system-candidate/link-css)
versie 1.

Gebruik de `nl-link` class name op een `a` element:

```html
<a href="https://example.com" class="nl-link">example.com</a>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/link-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/link-css@1/dist/link.css" />
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/link-css/dist/link.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/link-css/link.css";
```

### Link om een Image of andere inline-box componenten

Om te zorgen dat de states van een Link component goed werken als een link om een inline-box element zoals een Image is gezet gebruik je de `nl-link` class name in combinatie met `nl-link--inline-box` class name.

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Flink-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/link-react](https://www.npmjs.com/package/@nl-design-system-candidate/link-react)
versie 1.

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/link-react
```

Je kunt de React component zo gebruiken:

```jsx
import { Link } from "@nl-design-system-candidate/link-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <p>
          <Link href="https://example.com">example.com</Link>
        </p>
      </body>
    </html>
  );
};
```

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — Link](https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=15527-6188&t=ZSZqzM6JyRQFQVSy-4).
