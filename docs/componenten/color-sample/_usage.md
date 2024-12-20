# Gebruik Color Sample

## CSS

De CSS van deze component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fcolor-sample-css.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/color-sample-css](https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-css)
versie 1.

Gebruik de `nl-color-sample` class name op een `svg` element:

```html
<svg role="img" xmlns="http://www.w3.org/2000/svg" class="nl-color-sample" style="color: deeppink;">
  <path d="M0 0H32V32H0Z" fill="currentcolor" />
</svg>
```

Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan dat je ze goed aan elkaar linkt. Bijvoorbeeld door er een `figure` omheen te zetten:

```html
<h1>Huisstijlkleuren</h1>
<figure>
  <ColorSample value="deeppink" aria-labelledby="kleur-1" />
  <figcaption id="kleur-1">Roze</figcaption>
</figure>
```

Je kunt de CSS zo in je project installeren:

```sh
npm install --save-dev @nl-design-system-candidate/color-sample-css
```

Als je een CDN gebruikt, dan kun je de CSS zo importeren:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/color-sample-css@1/dist/color-sample.css"
/>
```

Gebruik je geen CDN, dan kun je de CSS uit `node_modules/` importeren:

```html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/color-sample-css/dist/color-sample.css" />
```

Als je CSS imports gebruikt vanuit JavaScript:

```js
import "@nl-design-system-candidate/color-sample-css/color-sample.css";
```

## React

De React component is gepubliceerd in een npm package:

[<img src="https://badge.fury.io/js/@nl-design-system-candidate%2Fcolor-sample-react.svg" alt="" style={{verticalAlign: 'middle'}} /> @nl-design-system-candidate/color-sample-react](https://www.npmjs.com/package/@nl-design-system-candidate/color-sample-react)
versie 1.

Je kunt de npm package zo installeren:

```sh
npm install --save-dev @nl-design-system-candidate/color-sample-react
```

Je kunt de React component zo gebruiken:

```jsx
import { ColorSample } from "@nl-design-system-candidate/color-sample-react";

export const MyPage = () => {
  return (
    <html>
      <body>
        <ColorSample value="deeppink" />
      </body>
    </html>
  );
};
```

Zorg dat je een duidelijke beschrijving naast de Color Sample hebt en gebruik wanneer de Color Sample en beschrijving niet direct bij elkaar staan een `id` op de beschrijving die je met `aria-labelledby` koppelt aan de `ColorSample`:

```jsx
export const MyPage = () => {
  return (
    <html>
      <body>
        <ColorSample value="deeppink" aria-labelledby="roze-trui" />
        <p>
          Een goede vriend van mij draagt altijd een <span id="roze-trui">roze</span> trui
        </p>
      </body>
    </html>
  );
};
```

## Figma

De Figma component staat in [NL Design System Voorbeeld Bibliotheek — Color Sample](https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=15527-33899&t=j0HWpfOYWPeYBX0r-4).
