---
title: Design Token conventie
hide_title: true
hide_table_of_contents: false
sidebar_label: Design Token conventie
pagination_label: Design Token conventie
description: Conventies voor het maken van Design Tokens
keywords:
  - api
  - design token
---

# Design Token conventies

We gebruiken het [Design Tokens formaat](https://tr.designtokens.org/format/) dat nog actief wordt ontwikkeld door de [Design Tokens Community Group](https://www.w3.org/groups/cg/design-tokens/) bij het W3C. Dat is een eenvoudig JSON-formaat om design keuzes uit te wisselen tussen systemen. De structuur die we gebruiken is als volgt voor componenten:

```json
{
  "prefix": {
    "component": {
      "color": {
        "$value": "#007DAD"
      }
    }
  }
}
```

## De structuur van design tokens

- Gebruik voor de naam van tokens de conventies van CSS property namen: alleen kleine letters en koppelstreepjes.
- Gebruik een prefix voor componenten, zodat nooit twee teams dezelfde token maken. Net als een "vendor prefix" in CSS.
- Begin namen van tokens altijd met een letter, gebruik nooit met een cijfer als eerste teken. Bijvoorbeeld: gebruik `level-1` in plaats van `1`.
- De token eindigt wanneer mogelijk op een bestaande CSS property-naam, zodat hieruit automatisch het datatype afgeleid kan worden.

### Onderdelen van een component

Gebruik de namen die overeenkomen met de anatomie van de component. De namen komen vaak overeen met de structuur van [BEM class names](https://getbem.com) in CSS.

Heeft een component een onderdeel (een "Element" in BEM), dan kun je dat gebruiken als onderdeel van de naam. Bijvoorbeeld `placeholder` in `example.text-input.placeholder.color`.

Heeft een component een variant, dan kun je die gebruiken als onderdeel van de naam. Bijvoorbeeld: `lead` in `example.paragraph.lead.font-size`.

Heeft een component een state, dan kun je die gebruiken als onderdeel van de naam. Bijvoorbeeld: `disabled` in `example.button.disabled.cursor`.

### Property namen

CSS property namen die we al gebruiken als design tokens:

- `background-color`
- `block-size`, `min-block-size` en `max-block-size`.
- `border-color`
- `border-radius`
- `border-style`
- `border-width`
- `outline-width`
- `outline-color`
- `color`
- `cursor`
- `font-family`
- `font-size`
- `font-weight`
- `gap`, `column-gap` en `row-gap`
- `inline-size`, `min-inline-size` en `max-inline-size`
- `line-height`
- `margin-inline` en `padding-inline`
- `margin-block` en `padding-block`

Gebruik [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) waar mogelijk, zodat de component voor internationalisatie voldoet aan de Definition of Done.

Gebruik de volgende CSS properties in principe **niet**. Dit zijn geen CSS logical properties.

- `height`, `min-height` en `max-height`
- `margin-bottom`
- `margin-left`
- `margin-right`
- `margin-top`
- `padding-bottom`
- `padding-left`
- `padding-right`
- `padding-top`
- `width`, `min-width` en `max-width`

We gebruiken de volgende namen voor states, die uit CSS, HTML en ARIA komen:

- `hover`
- `active`
- `disabled`
- `current`
- `focus` (die vervangen we tegenwoordig vaak door `focus-visible`)
- `focus-visible`
- `pressed`
- `busy`
- `disabled`

### Platformonafhankelijke tokens

Gebruik design tokens met name voor designkeuzes die je op een implementatie- en platformonafhankelijke manier kunt uitdrukken. Waarden zoals kleuren en lengtes. Goede platform-onafhankelijk waarden zijn bijvoorbeeld:

- `24px`
- `#FF0000`

Dit soort waarden hebben de voorkeur boven waarden die alleen in CSS worden ondersteund, en bijvoorbeeld niet in Android en Figma:

- `1ch`
- `2em`
- `cornflowerblue`

Als je een component wilt maken met twee varianten, dan moet je dat niet altijd met design tokens oplossen. Gebruik bijvoorbeeld de volgende CSS properties niet voor design tokens:

- `display` met waardes zoals `none`
- `flex-direction` met waardes zoals `column`
- `overflow` met waardes zoals `auto`
- `position` met waardes zoals `sticky`

Je mag natuurlijk wel voor intern gebruik CSS variables gebruiken voor deze CSS properties.

## Essentiële tokens voor white-label componenten

Bied voldoende tokens aan om jouw white-label component aanpasbaar te maken voor de huisstijl van andere teams. Bekijk de screenshots die verzameld worden van componenten in de GitHub Discussions, en kijk welke designkeuzes verschillen bij de verschillende implementaties. Probeer circa 80% van de toegankelijke designs te ondersteunen.

We maken onderscheid tussen een aantal soorten componenten:

- "inline componenten": tekst-componenten die in onderdeel zijn van lopende tekst. Bijvoorbeeld: Mark, Link, Emphasis.
- "inline block componenten": componenten die in de lopende tekst voorkomen. Bijvoorbeeld: Data Badge.
- "block componenten". componenten die tekst bevatten. Bijvoorbeeld: Table, Unordered List, Heading, Paragraph.
- "layout block componenten": componenten die block componenten bevatten. Bijvoorbeeld: Card, Alert.
- "layout componenten". Bijvoorbeeld: Page Header, Page Footer, Drawer, Dialog.
- "media componenten". Bijvoorbeeld: Image en Video.

In het algemeen geldt:

- Wees terughoudend met design tokens toevoegen. Voeg pas design tokens toe als je ziet dat de design token vaak genoeg nodig is, of wanneer jij zelf iets bijzonders nodig hebt maar de rest van de wereld niet.
- Voeg `color` en `background-color` toe als combinatie, zodat gebruikers een combinatie kunnen maken met voldoende contrast.
- Voeg `font-size` en `line-height` toe als combinatie.
- Vaak is zijn `min-inline-size`, `min-block-size`, `max-inline-size` en `max-block-size` handiger om te hebben dan `block-size` en `inline-size`. Flexibiliteit is vaak handig voor responsive layouts, toegankelijkheid bij inzoomen, en om ruimte te bieden aan uitzonderlijk lange teksten.

Voor inline componenten geldt:

- Je mag `color` toevoegen zonder `background-color` (een uitzondering), als je in de documentatie uitleg geeft met welke achtergrondkleuren je moet testen.
- Het is vrijwel nooit nodig om `font-size` te hebben. Uitzonderingen zijn bijvoorbeeld: Superscript en Subscript.
- Je hoeft nooit `line-height` te hebben.

Voor inline block componenten geldt:

- Je hoeft geen `line-height` te gebruiken wanneer de component gegarandeerd op 1 regel staat.

Voor block componenten geldt:

- Het is vaak handig om `font-size` en `line-height` te hebben.
- Het is vaak handig om `font-family` te hebben.

Voor layout componenten geldt:

- Het is niet nodig om font-gerelateerde tokens te hebben.

Voor media componenten geldt:

- Hier is het soms nodig om `width` en `height` te gebruiken in plaats van de `inline-size` en `block-size` CSS properties. Media moet vaak op dezelfde manier georieënteerd zijn, onafhankelijk van de tekstrichting.

## De `$value` van design tokens

Gebruik design tokens met name voor designkeuzes die je op een implementatie- en platformonafhankelijke manier kunt uitdrukken. Waarden zoals kleuren en lengtes. Goede platform-onafhankelijk waarden zijn bijvoorbeeld:

- `24px`
- `#FF0000`

Dit soort waarden hebben de voorkeur boven waarden die alleen in CSS worden ondersteund, en bijvoorbeeld niet in Android en Figma:

- `1ch`
- `2em`
- `cornflowerblue`

Vermijd CSS keywords als design token waarde, want die zijn al helemaal niet platformonafhankelijk. Bijvoorbeeld:

- `auto`
- `currentColor`
- `flex-end`
- `inherit`
- `monospace`

## Publiceer een JSON bestand met alleen metadata

Om documentatie van design tokens makkelijk te maken, publiceren we een `tokens.json` bestand met metadata op [npm](https://www.npmjs.com). Dit bestand heeft geen enkele `$value`, alleen `$extensions` en `$type`.

Het voordeel van deze metadata los beheren, is dat het makkelijk is om metadata op één plek te hebben in plaats van in een heleboel themes.

Naast `$extensions` bevat het bestand ook `$type`, op basis van de [types van de Design Tokens format](https://tr.designtokens.org/format/#types).

Bijvoorbeeld, je wilt een `tokens.json` maken bij de volgende CSS:

```css
.example-button {
  background-color: var(--example-button-background-color);
  font-size: var(--example-button-font-size);
}
```

Dan kun je de volgende `tokens.json` meeleveren:

```json
{
  "example": {
    "button": {
      "background-color": {
        "$extensions": {
          "nl.nldesignsystem.css-property-syntax": "<color>",
          "nl.nldesignsystem.figma-implementation": true
        },
        "$type": "color"
      },
      "font-size": {
        "$extensions": {
          "nl.nldesignsystem.css-property-syntax": ["<length>", "<percentage>"],
          "nl.nldesignsystem.figma-implementation": true
        },
        "$type": "fontSizes"
      }
    }
  }
}
```

We gebruiken op dit moment de volgende extensions:

- `nl.nldesignsystem.css-property-syntax`: een string of array met [CSS syntax descriptors](https://developer.mozilla.org/en-US/docs/Web/.CSS/@property/syntax). We gebruiken deze waarde om een handige design token editor te genereren, en om [`@property` definities](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) te genereren voor CSS.
- `nl.nldesignsystem.figma-implementation`: een handmatige check die we doen om te kijken of de design token ook in Figma werkt. Voor sommige CSS properties is het niet mogelijk om in CSS een werkende implementatie te maken.
