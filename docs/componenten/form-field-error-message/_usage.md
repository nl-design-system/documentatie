# Gebruik Form Field Error Message

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[@nl-design-system-candidate/form-field-error-message-css](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-error-message-css)

Gebruik de `nl-form-field-error-message` class name op een `div` element:

```html
<div class="nl-form-field-error-message">Het veld "Naam" is verplicht.</div>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/form-field-error-message-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/form-field-error-message-css/dist/form-field-error-message.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link
  rel="stylesheet"
  href="node_modules/@nl-design-system-candidate/form-field-error-message-css/dist/form-field-error-message.css"
/>
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/form-field-error-message-css/form-field-error-message.css";
```

## React

De React component is gepubliceerd in een npm package:

[@nl-design-system-candidate/form-field-error-message-react](https://www.npmjs.com/package/@nl-design-system-candidate/form-field-error-message-react)

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/form-field-error-message-react
```

Je kunt de React component zo gebruiken:

```jsx
import { FormFieldErrorMessage } from "@nl-design-system-candidate/form-field-error-message-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <div>
          <FormFieldErrorMessage>
            Het veld "Naam" is verplicht.
          </FormFieldErrorMessage>
        </div>
      </body>
    </html>
  );
};
```
