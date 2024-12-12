---
title: API conventie
hide_title: true
hide_table_of_contents: false
sidebar_label: API conventie
pagination_label: API conventie
description: Conventies voor het maken van API's
keywords:
  - api
---

# API conventies

Algemene conventies, die gelden voor meerdere technieken:

- Gebruik Engels als taal voor de API van user interface componenten. UI componenten zijn niet zo specifiek dat ze alleen in het Nederlands nauwkeurig zouden zijn, door bijvoorbeeld lokale wetgeving.
- Maak APIs zoveel mogelijk zo dat mensen hun eigen systeem kunnen kiezen om vertalingen van teksten en labels in te stellen. Zorg dat voor alle teksten in je component er APIs zijn om de hardcoded tekst aan te passen.
- Documenteer API wijzigingen in een Changelog bestand, en kies een nieuw versienummer op basis van [semantic versioning](https://semver.org).
- Baseer de namen in je code waar mogelijk op bestaande termen uit het Web Platform. Kies termen uit HTML, CSS, SVG en ARIA; deze hebben de voorkeur boven namen uit populaire frameworks en boven namen die je zelf bedenkt.

## npm packages

- Gebruik semantic versioning om wijzigingen in de API uit te brengen. Wij vinden het handig om semantic versioning te automatiseren met [changesets](https://github.com/changesets/changesets).
- Bestanden die in je npm package gedeeld worden, via `"exports":` of via `"files":` zijn onderdeel van de API, wijzigingen in de bestanden kunnen daarom leiden tot een nieuwe major release.
- Gebruik `"type": "module"`.

## Componenten voor HTML

[Globale HTML-attributen](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) moeten hun normale gedrag behouden. Dat betekent dat sommige properties gereserveerd zijn in bijvoorbeeld React, Angular en Web Components. Bijvoorbeeld:

- `data-*`
- `dir`
- `hidden`
- `id`
- `lang`
- `part`
- `role`
- `slot`
- `style`
- `title`
- `translate`

## CSS

Zorg dat de CSS component geen side-effects heeft. Side effects kun je kwijt in een los bestand, waar gebruikers expliciet voor moeten kiezen.

Gebruik het [BEM class name formaat](https://getbem.com/naming/) voor jouw eigen CSS class names.

Gebruik de prefix van jouw organisatie voor de volgende dingen in CSS:

- keyframes
- CSS custom properties
- CSS class name selectors

Gebruik selectors met een lage [CSS specificty](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity), zodat mensen makkelijk uitbreidingen op je code kunnen doen.

CSS variables zijn onderdeel van de API van je component, tenzij ze met `--_` zijn geprefixed.

## SCSS

Gebruik het BEM class name formaat ook voor mixins. Bijvoorbeeld:

```scss
@mixin example-button--disabled {
  color: var(--example-button-disabled-color);
}

@mixin example-button__icon {
  color: var(--example-button-icon-color);
}
```

Gebruik de prefix van jouw organisatie voor de volgende dingen in SCSS:

- SCSS variables. Bijvoorbeeld: `$example-button-color`.
- SCSS mixins. Bijvoorbeeld: `@mixin example-button`

## JavaScript

Gebruik zoveel mogelijk ES Modules in `.mjs` bestanden. Probeer geen of steeds minder CommonJS te gebruiken (scripts met `require()` of `module.exports`).

## `package.json`

- Gebruik `"type": "module"`

## TypeScript

Lever TypeScript definitities (bestanden die eindigen op `.d.ts` en `d.mts`) bij je JavaScript files in npm pacakges.

## React met TypeScript

Maak zo min mogelijk beperkingen om `ReactNode` te gebruiken voor tekst. Vaak kan een `string` property vervangen worden door `ReactNode`, en dan is het mogelijk om HTML te maken. Bijvoorbeeld:

```jsx
<FormField label={<span lang="fr">Raison d'être</span>} />
```

Gebruik geen `React.FC`. Lees [de discussie bij create-react-app op GitHub](https://github.com/facebook/create-react-app/pull/8177) voor achtergrond informatie en alternatieven.

Maak het mogelijk dat mensen extra HTML properties kunnen toevoegen aan je component. Bijvoorbeeld:

```jsx
const ExampleButton = ({ children, ...restProps }) => <p {...restProps}>{children}</p>;
```

Maak het mogelijk dat mensen extra clss name kunnen toevoegen aan je component, die samen met je eigen class names gebruikt kunenn worden. Bijvoorbeeld:

```js
import { clsx } from "clsx";

const ExampleButton = ({ children, className }) => <p className={clsx("example-button", className)}>{children}</p>;
```

## Termen uit het Web Platform

De volgende termen worden al voor APIs gebruikt in het Web Platform. Hergebruik zoveel mogelijk termen uit deze lijst, voor dingen die hetzelfde betekenen.

- active: ingedrukte button
- alert
- alert-dialog
- backdrop
- body: voor table body
- button
- cell: table cell
- checked
- current
- data
- description
- disabled
- document
- error-message
- focus
- footer
- form
- header
- heading
- hover
- image
- option: combobox option, radio button group option
- label
- link
- list
- mark
- nav
- number
- placeholder
- pressed: ingedrukte toggle button
- radio-group
- row
- selected
- separator
- switch
- table
- textarea
- visited
