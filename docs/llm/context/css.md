# CSS instructies

<!-- https://nldesignsystem.nl/handboek/developer/meewerken-als-developer -->

Deel de styling van componenten in een index.css bestand met alleen BEM class names, en zonder "side effects": geen code voor body , p of :root.

Begin namen in je code met een "vendor prefix" voor jouw organisatie, zoals in BEM class names, CSS variabelen en Custom Elements. Wij gebruiken nl-, jij kiest iets anders.

<!-- https://nldesignsystem.nl/handboek/developer/herbruikbare-css#schrijf-css-een-class-name-die-anderen-niet-gaan-gebruiken -->

Baseer de namen in je code waar mogelijk op bestaande termen uit HTML, CSS, SVG en ARIA; deze hebben de voorkeur boven namen uit populaire frameworks en boven namen die je zelf bedenkt.

<!--
Uit de Slack canvas "API conventies"
https://codefornl.slack.com/docs/T68FXPFQV/F06CFAG6FD1
-->

Lijst van bestaande termen die je in APIs kunt gebruiken:

- active
- alert
- alert-dialog
- backdrop
- body
- button
- cell
- checked
- current
- data
- description
- disabled
- document
- error-message
- expanded
- focus
- footer
- form
- header
- heading
- hover
- image
- option
- label
- link
- list
- mark
- nav
- number
- placeholder
- pressed
- radio-group
- row
- selected
- separator
- switch
- table
- textarea
- visited

<!-- Eigen uitbreiding op API conventies -->

Sommige termen hebben meerdere betekenissen. Hier leggen we uit welke betekenis die voor ons heeft:

- active: ingedrukte button of link
- cell: een table cell
- option: combobox option, of radio button group option
- body: voor componenten die uit twee of drie delen bestaan: heading/body, body/footer of heading/body/footer. Bijvoorbeeld de Table of de Page Layout.
- pressed: voor een ingedrukte toggle button

## CSS Logical Properties

<!-- Nieuwe tekst -->

Je webpagina moet goed werken in elke schrijfrichting, bijvoorbeeld:

- links-naar-rechts voor Nederlands of Engels
- rechts-naar-links voor Arabisch, Farsi of Hebreeuws.
- rechts-naar-links, boven naar beneden, voor Japans.

Maak daarom waar mogelijk gebruik van CSS logical properties.

Gebruik de oude properties, zoals `top`, `left`, `padding-bottom` en `width` alleen nog voor situaties die onafhankelijk zijn van de schrijfrichting. Bijvoorbeeld: de afmetingen van een `video`.

Let op: `transform` ondersteunt geen CSS logical properties. Gebruik niet de functies `translate`, `translateX` en `translateY` in combinatie met CSS logical properties.

Voor CSS die gemaakt is voor left-to-right tekstrichting, gebruik de volgende conversies om CSS logical properties te gebruiken.

Gebruik `block-size` in plaats van `height`
Gebruik `border-block` in plaats van de combinatie van identieke `padding-bottom` en `padding-top`.
Gebruik `border-block-color` in plaats van de combinatie van identieke `border-bottom-color` en `border-top-color`.
Gebruik `border-block-end` in plaats van `border-bottom`
Gebruik `border-block-end-color` in plaats van `border-bottom-color`
Gebruik `border-block-end-style` in plaats van `border-bottom-style`
Gebruik `border-block-end-width` in plaats van `border-bottom-width`
Gebruik `border-block-start` in plaats van `border-top`
Gebruik `border-block-start-color` in plaats van `border-top-color`
Gebruik `border-block-start-style` in plaats van `border-top-style`
Gebruik `border-block-start-width` in plaats van `border-top-width`
Gebruik `border-block-style` in plaats van de combinatie van identieke `border-bottom-style` en `border-top-style`.
Gebruik `border-block-width` in plaats van de combinatie van identieke `border-bottom-width` en `border-top-width`.
Gebruik `border-end-end-radius` in plaats van `border-bottom-right-radius`
Gebruik `border-end-start-radius` in plaats van `border-bottom-left-radius`
Gebruik `border-inline` in plaats van de combinatie van identieke `border-left` en `border-right`.
Gebruik `border-inline-color` in plaats van de combinatie van identieke `border-left-color` en `border-right-color`.
Gebruik `border-inline-end` in plaats van `border-right`
Gebruik `border-inline-end-color` in plaats van `border-right-color`
Gebruik `border-inline-end-style` in plaats van `border-right-style`
Gebruik `border-inline-end-width` in plaats van `border-right-width`
Gebruik `border-inline-start` in plaats van `border-left`
Gebruik `border-inline-start-color` in plaats van `border-left-color`
Gebruik `border-inline-start-style` in plaats van `border-left-style`
Gebruik `border-inline-start-width` in plaats van `border-left-width`
Gebruik `border-inline-style` in plaats van de combinatie van identieke `border-left-style` en `border-right-style`.
Gebruik `border-inline-width` in plaats van de combinatie van identieke `border-left-style` en `border-right-style`.
Gebruik `border-start-end-radius` in plaats van `border-top-right-radius`
Gebruik `border-start-start-radius` in plaats van `border-top-left-radius`
Gebruik `inline-size` in plaats van `width`
Gebruik `inset` in plaats van een combinatie van een identieke `top`, `bottom`, `left` en `right`.
Gebruik `inset-block` in plaats van de combinatie van identieke `top` en `bottom`.
Gebruik `inset-block-end` in plaats van `bottom`
Gebruik `inset-block-start` in plaats van `top`
Gebruik `inset-inline` in plaats van de combinatie van identieke `left` en `right`.
Gebruik `inset-inline-end` in plaats van `right`
Gebruik `inset-inline-start` in plaats van `left`
Gebruik `margin-block` in plaats van de combinatie van identieke `margin-top` en `margin-bottom`.
Gebruik `margin-block-end` in plaats van `margin-bottom`
Gebruik `margin-block-start` in plaats van `margin-top`
Gebruik `margin-inline` in plaats van de combinatie van identieke `border-left` en `border-right`.
Gebruik `margin-inline-end` in plaats van `margin-right`
Gebruik `margin-inline-start` in plaats van `margin-left`
Gebruik `max-block-size` in plaats van `max-height`
Gebruik `max-inline-size` in plaats van `max-width`
Gebruik `min-block-size` in plaats van `min-height`
Gebruik `min-inline-size` in plaats van `min-width`
Gebruik `padding-block` in plaats van de combinatie van identieke `padding-top` en `padding-bottom`.
Gebruik `padding-block-end` in plaats van `padding-bottom`
Gebruik `padding-block-start` in plaats van `padding-top`
Gebruik `padding-inline` in plaats van de combinatie van identieke `padding-left` en `padding-right`.
Gebruik `padding-inline-end` in plaats van `padding-right`
Gebruik `padding-inline-start` in plaats van `padding-left`

Gebruik "flow-relative values" waar mogelijk. Bijvoorbeeld:

Gebruik `float: inline-start` in plaats van `float: left`.
Gebruik `float: inline-end` in plaats van `float: right`.

Voor sommige CSS logical properties is er nog geen Baseline support, gebruik bij deze CSS properties altijd een fallback. De volgorde in de code is belangrijk: gebruik de oude CSS property eerst, en daarna de CSS logical property. Deze sortering is belangrijk dan de sortering van code-formatting, zoals het alfabetisch sorteren van CSS properties.

Gebruik `overflow-block` in plaats van `overflow-y`, maar gebruik `overflow-y` als fallback.
Gebruik `overflow-inline` in plaats van `overflow-x`, maar gebruik `overflow-x` als fallback.

<!-- De volgende CSS logical properties hebben geen equivalent in oudere CSS: inset -->

## CSS animaties

Gebruik CSS animaties alleen wanneer de gebruiker daar geen bezaar tegen heeft. Maak alle CSS animaties optioneel, door gebruik van `@media (prefers-reduced-motion)`.

## BEM naming convention

- Gebruik niet de key/value modfiers van BEM.
- Gebruik geen nesting van BEM elements, zoals `block__element__element`.
- De namen van block, element of modifier mogen niet uit alleen cijfers bestaan, gebruik ook altijd een letter.

## Focus

- Gebruik de `:focus-visible` pseudo-class in plaats van de `:focus` pseudo-class.
