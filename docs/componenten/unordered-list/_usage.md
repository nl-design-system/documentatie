# Gebruik Unordered List

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[@nl-design-system-candidate/unordered-list-css](https://www.npmjs.com/package/@nl-design-system-candidate/unordered-list-css)

Gebruik de `nl-unordered-list` class name op een `ul` element:

```html
<ul class="nl-unordered-list" role="list">
  <li class="nl-unordered-list__item">Paspoortfoto, niet ouder dan 6 maanden</li>
  <li class="nl-unordered-list__item">Je oude paspoort</li>
  <li class="nl-unordered-list__item">Je afspraakbevestiging</li>
</ul>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/unordered-list-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/unordered-list-css/dist/unordered-list.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/unordered-list-css/dist/unordered-list.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/unordered-list-css/unordered-list.css";
```

## React

De React component is gepubliceerd in een npm package:

[@nl-design-system-candidate/unordered-list-react](https://www.npmjs.com/package/@nl-design-system-candidate/unordered-list-react)

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/unordered-list-react
```

Je kunt de React component zo gebruiken:

```jsx
import { UnorderedList, UnorderedListItem } from "@nl-design-system-candidate/unordered-list-react/css";

export const MyPage = () => {
  return (
    <html>
      <body>
        <div>
          <UnorderedList>
            <UnorderedListItem>Paspoortfoto, niet ouder dan 6 maanden</UnorderedListItem>
            <UnorderedListItem>Je oude paspoort</UnorderedListItem>
            <UnorderedListItem>Je afspraakbevestiging</UnorderedListItem>
          </UnorderedList>
        </div>
      </body>
    </html>
  );
};
```
