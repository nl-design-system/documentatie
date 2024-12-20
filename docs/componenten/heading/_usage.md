# Gebruik Code

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fheading-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/heading-css](https://www.npmjs.com/package/@nl-design-system-candidate/heading-css)
versie 1.

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/heading-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/heading-css@1/dist/heading.css" />
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/heading-css/dist/heading.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/heading-css/heading.css";
```

### H1

Gebruik voor een hoofdkop van een pagina de `nl-heading` en `nl-heading--level-1` class name op een `h1`, element:

```html
<h1 class="nl-heading nl-heading--level-1">Hoofdkop van de pagina</h1>
```

### H2

Gebruik voor een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat de `nl-heading` en `nl-heading--level-2` class name op een `h2`, element:

```html
<h2 class="nl-heading nl-heading--level-2">
  Een koptekst die volgt na de hoofdkop en in de koppenstructuur op het tweede niveau staat
</h2>
```

### H3

Gebruik voor een koptekst die in de koppenstructuur op het derde niveau staat de `nl-heading` en `nl-heading--level-3` class name op een `h3`, element:

```html
<h3 class="nl-heading nl-heading--level-3">Een koptekst die in de koppenstructuur op het derde niveau staat</h3>
```

### H4

Gebruik voor een koptekst die in de koppenstructuur op het vierde niveau staat de `nl-heading` en `nl-heading--level-4` class name op een `h4`, element:

```html
<h4 class="nl-heading nl-heading--level-4">Een koptekst die in de koppenstructuur op het vierde niveau staat</h4>
```

### H5

Gebruik voor een koptekst die in de koppenstructuur op het vijfde niveau staat de `nl-heading` en `nl-heading--level-5` class name op een `h5`, element:

```html
<h5 class="nl-heading nl-heading--level-5">Een koptekst die in de koppenstructuur op het vijfde niveau staat</h5>
```

### H6

Gebruik voor een koptekst die in de koppenstructuur op het zesde niveau staat de `nl-heading` en `nl-heading--level-5` class name op een `h6`, element:

```html
<h6 class="nl-heading nl-heading--level-6">Een koptekst die in de koppenstructuur op het zesde niveau staat</h6>
```

### Kop gebruiken met het uiterlijk van een ander level

Gebruik voor een koptekst die semantisch op het ene level staat, maar visueel de uitstraling heeft van een ander level de `nl-heading` en `nl-heading--level-{het visuele level}` op het semantische heading component naar keuze:

```html
<h2 class="nl-heading nl-heading--level-4">
  Een koptekst die in de koppenstructuur op het tweede level staat en eruit ziet als het vierde level.
</h2>
```

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fheading-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/heading-react](https://www.npmjs.com/package/@nl-design-system-candidate/heading-react)
versie 1.

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/heading-react
```

Je kunt de React component zo gebruiken:

```jsx
import { Heading } from "@nl-design-system-candidate/heading-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <Heading level="2" appearance="level-4"></Heading>
      </body>
    </html>
  );
};
```

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — Code](https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=15862-1610&t=0Pfnum6S0ChsWQDW-4).
