# Gebruik Form Field Description

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[@nl-design-system-candidate/form-field-description-css](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-css)

Gebruik de `nl-form-field-description` class name op een `div` element:

```html
<div class="nl-form-field-description">Voer uw volledige naam in, zoals vermeld op uw identiteitsbewijs.</div>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/form-field-description-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/form-field-description-css/dist/form-field-description.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link
  rel="stylesheet"
  href="node_modules/@nl-design-system-candidate/form-field-description-css/dist/form-field-description.css"
/>
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/form-field-description-css/form-field-description.css";
```

## React

De React component is gepubliceerd in een npm package:

[@nl-design-system-candidate/form-field-description-react](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-description-react)

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/form-field-description-react
```

Je kunt de React component zo gebruiken:

```jsx
import { FormFieldDescription } from "@nl-design-system-candidate/form-field-description-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <div>
          <FormFieldDescription>Voer uw volledige naam in, zoals vermeld op uw identiteitsbewijs.</FormFieldDescription>
        </div>
      </body>
    </html>
  );
};
```
