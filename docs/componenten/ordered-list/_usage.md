# Gebruik Ordered List

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[@nl-design-system-candidate/ordered-list-css](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-css)

Gebruik de `nl-ordered-list` class name op een `ol` element:

```html
<ol class="nl-ordered-list" role="list">
  <li class="nl-ordered-list__item">Verzamel documenten.</li>
  <li class="nl-ordered-list__item">Maak een afspraak.</li>
  <li class="nl-ordered-list__item">Haal uw nieuwe paspoort op.</li>
</ol>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/ordered-list-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/ordered-list-css/dist/ordered-list.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/ordered-list-css/dist/ordered-list.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/ordered-list-css/ordered-list.css";
```

## React

De React component is gepubliceerd in een npm package:

[@nl-design-system-candidate/ordered-list-react](https://www.npmjs.com/package/@nl-design-system-candidate/ordered-list-react)

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/ordered-list-react
```

Je kunt de React component zo gebruiken:

```jsx
import { OrderedList, OrderedListItem } from "@nl-design-system-candidate/ordered-list-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <div>
          <OrderedList>
            <OrderedListItem>Verzamel documenten.</OrderedListItem>
            <OrderedListItem>Maak een afspraak.</OrderedListItem>
            <OrderedListItem>Haal uw nieuwe paspoort op.</OrderedListItem>
          </OrderedList>
        </div>
      </body>
    </html>
  );
};
```
