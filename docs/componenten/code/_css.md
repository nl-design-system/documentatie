# CSS

## Installeren

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/code-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-css/dist/code.css" />
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-css/dist/code.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/code-css/code.css";
```

## Gebruiken met CSS

Gebruik de `nl-code` class name op een `code` element:

```html
<code dir="ltr" translate="no" class="nl-code"> import { Code } from '@nl-design-system-candidate/code-react'; </code>
```
