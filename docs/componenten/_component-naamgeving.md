# Component naamgeving

Voor veel componenten hebben we de namen al vastgelegd. Bij nieuwe componenten gaan we in overleg over de juiste naamgeving. Hierbij proberen we ons zoveel mogelijk aan standaarden te houden. We zorgen dat de naam niet wordt gekozen op basis van de vorm van het component maar altijd op de functie.

## 'Component as link' en 'Component as button'

Er zijn een aantal componenten die zich gedragen als een button of link. Denk bijvoorbeeld aan een 'Avatar'. Soms is dit component niet interactief, enkel decoratief. Soms gedraagt dit component zich als een 'link', waardoor men bijvoorbeeld naar een detailpagina wordt geleid. Soms gedraagt dit component zich als een 'button', waardoor men bijvoorbeeld een menu kan openen. Om voor dit soort componenten design tokens aan te maken hanteren we de naamgeving [Component] as [button/link].

**Component**

Wanneer een component zich gedraagt als zichzelf.

- Button
- Link
- Avatar: Niet interactief
- Card: Card als geheel niet iteractief, de card kan wel meerdere interactieve elementen bevatten.
- Tabs

**Component as button**

Wanneer een component zich gedraagt als een button.

- Avatar as button: Avatar is interactief, gedraagt zich als een button.
- Link as button: Ziet eruit als een link, gedraagt zich als een button.
- Card as button: Card is geheel interactief, gedraagt zich als een button

**Component as link**

Wanneer een component zich gedraagt als een link.

- Avatar as link: Avatar is interactief, gedraagt zich als een link.
- Button as link: Ziet eruit als een button, gedraagt zich als een link.
- Card as link: Card is geheel interactief, gedraagt zich als een link.

## Voorbeelden

### Button

- `voorbeeld.button.background-color`
- `voorbeeld.button.border-color`
- `voorbeeld.button.border-radius`
- `voorbeeld.button.border-width`
- `voorbeeld.button.color`
- `voorbeeld.button.font-family`
- `voorbeeld.button.font-size`
- `voorbeeld.button.font-weight`
- `voorbeeld.button.line-height`
- `voorbeeld.button.margin-block-end`
- `voorbeeld.button.margin-block-start`
- `voorbeeld.button.margin-inline-end`
- `voorbeeld.button.margin-inline-start`
- `voorbeeld.button.padding-block-end`
- `voorbeeld.button.padding-block-start`
- `voorbeeld.button.padding-inline-end`
- `voorbeeld.button.padding-inline-start`

- `voorbeeld.button.icon.gap`
- `voorbeeld.button.icon.size`

- `voorbeeld.button.active.background-color`
- `voorbeeld.button.active.border-color`
- `voorbeeld.button.active.color`
- `voorbeeld.button.focus.background-color`
- `voorbeeld.button.focus.border-color`
- `voorbeeld.button.focus.color`
- `voorbeeld.button.hover.background-color`
- `voorbeeld.button.hover.border-color`
- `voorbeeld.button.hover.color`
- `voorbeeld.button.disabled.background-color`
- `voorbeeld.button.disabled.border-color`
- `voorbeeld.button.disabled.color`

- `voorbeeld.button.primary-action.background-color`
- `voorbeeld.button.primary-action.border-color`
- `voorbeeld.button.primary-action.color`
- `voorbeeld.button.primary-action.font-weight`
- `voorbeeld.button.primary-action.active.background-color`
- `voorbeeld.button.primary-action.active.border-color`
- `voorbeeld.button.primary-action.active.color`
- `voorbeeld.button.primary-action.focus.background-color`
- `voorbeeld.button.primary-action.focus.border-color`
- `voorbeeld.button.primary-action.focus.color`
- `voorbeeld.button.primary-action.hover.background-color`
- `voorbeeld.button.primary-action.hover.border-color`
- `voorbeeld.button.primary-action.hover.color`
- `voorbeeld.button.primary-action.disabled.background-color`
- `voorbeeld.button.primary-action.disabled.border-color`
- `voorbeeld.button.primary-action.disabled.color`

- `voorbeeld.button.secondary-action.background-color`
- `voorbeeld.button.secondary-action.border-color`
- `voorbeeld.button.secondary-action.color`
- `voorbeeld.button.secondary-action.font-weight`
- `voorbeeld.button.secondary-action.active.background-color`
- `voorbeeld.button.secondary-action.active.border-color`
- `voorbeeld.button.secondary-action.active.color`
- `voorbeeld.button.secondary-action.focus.background-color`
- `voorbeeld.button.secondary-action.focus.border-color`
- `voorbeeld.button.secondary-action.focus.color`
- `voorbeeld.button.secondary-action.hover.background-color`
- `voorbeeld.button.secondary-action.hover.border-color`
- `voorbeeld.button.secondary-action.hover.color`
- `voorbeeld.button.secondary-action.disabled.background-color`
- `voorbeeld.button.secondary-action.disabled.border-color`
- `voorbeeld.button.secondary-action.disabled.color`

- `voorbeeld.button.subtle.background-color`
- `voorbeeld.button.subtle.border-color`
- `voorbeeld.button.subtle.color`
- `voorbeeld.button.subtle.font-weight`
- `voorbeeld.button.subtle.active.background-color`
- `voorbeeld.button.subtle.active.border-color`
- `voorbeeld.button.subtle.active.color`
- `voorbeeld.button.subtle.focus.background-color`
- `voorbeeld.button.subtle.focus.border-color`
- `voorbeeld.button.subtle.focus.color`
- `voorbeeld.button.subtle.hover.background-color`
- `voorbeeld.button.subtle.hover.border-color`
- `voorbeeld.button.subtle.hover.color`
- `voorbeeld.button.subtle.disabled.background-color`
- `voorbeeld.button.subtle.disabled.border-color`
- `voorbeeld.button.subtle.disabled.color`

### Button as Link

Ziet eruit als een button, gedraagt zich als een link.

- `voorbeeld.button-as-link.color`
- `voorbeeld.button-as-link.font-family`
- `voorbeeld.button-as-link.font-size`
- `voorbeeld.button-as-link.text-decoration`

- `voorbeeld.button-as-link.icon.gap`
- `voorbeeld.button-as-link.icon.size`

- `voorbeeld.button-as-link.active.color`
- `voorbeeld.button-as-link.focus.color`
- `voorbeeld.button-as-link.focus.text-decoration`
- `voorbeeld.button-as-link.hover.color`
- `voorbeeld.button-as-link.hover.text-decoration`

### Link

- `voorbeeld.link.color`
- `voorbeeld.link.font-family`
- `voorbeeld.link.font-size`
- `voorbeeld.link.text-decoration`

- `voorbeeld.link.icon.gap`
- `voorbeeld.link.icon.size`

- `voorbeeld.link.active.color`
- `voorbeeld.link.focus.color`
- `voorbeeld.link.focus.text-decoration`
- `voorbeeld.link.hover.color`
- `voorbeeld.link.hover.text-decoration`

### Link as Button

Ziet eruit als een link, gedraagt zich als een button.

- `voorbeeld.link-as-button.background-color`
- `voorbeeld.link-as-button.border-color`
- `voorbeeld.link-as-button.border-radius`
- `voorbeeld.link-as-button.border-width`
- `voorbeeld.link-as-button.color`
- `voorbeeld.link-as-button.font-family`
- `voorbeeld.link-as-button.font-size`
- `voorbeeld.link-as-button.font-weight`
- `voorbeeld.link-as-button.line-height`
- `voorbeeld.link-as-button.margin-block-end`
- `voorbeeld.link-as-button.margin-block-start`
- `voorbeeld.link-as-button.margin-inline-end`
- `voorbeeld.link-as-button.margin-inline-start`
- `voorbeeld.link-as-button.padding-block-end`
- `voorbeeld.link-as-button.padding-block-start`
- `voorbeeld.link-as-button.padding-inline-end`
- `voorbeeld.link-as-button.padding-inline-start`

- `voorbeeld.link-as-button.icon.gap`
- `voorbeeld.link-as-button.icon.size`

- `voorbeeld.link-as-button.active.background-color`
- `voorbeeld.link-as-button.active.border-color`
- `voorbeeld.link-as-button.active.color`
- `voorbeeld.link-as-button.focus.background-color`
- `voorbeeld.link-as-button.focus.border-color`
- `voorbeeld.link-as-button.focus.color`
- `voorbeeld.link-as-button.hover.background-color`
- `voorbeeld.link-as-button.hover.border-color`
- `voorbeeld.link-as-button.hover.color`

- `voorbeeld.link-as-button.primary-action.background-color`
- `voorbeeld.link-as-button.primary-action.border-color`
- `voorbeeld.link-as-button.primary-action.color`
- `voorbeeld.link-as-button.primary-action.font-weight`
- `voorbeeld.link-as-button.primary-action.active.background-color`
- `voorbeeld.link-as-button.primary-action.active.border-color`
- `voorbeeld.link-as-button.primary-action.active.color`
- `voorbeeld.link-as-button.primary-action.focus.background-color`
- `voorbeeld.link-as-button.primary-action.focus.border-color`
- `voorbeeld.link-as-button.primary-action.focus.color`
- `voorbeeld.link-as-button.primary-action.hover.background-color`
- `voorbeeld.link-as-button.primary-action.hover.border-color`
- `voorbeeld.link-as-button.primary-action.hover.color`

- `voorbeeld.link-as-button.secondary-action.background-color`
- `voorbeeld.link-as-button.secondary-action.border-color`
- `voorbeeld.link-as-button.secondary-action.color`
- `voorbeeld.link-as-button.secondary-action.font-weight`
- `voorbeeld.link-as-button.secondary-action.active.background-color`
- `voorbeeld.link-as-button.secondary-action.active.border-color`
- `voorbeeld.link-as-button.secondary-action.active.color`
- `voorbeeld.link-as-button.secondary-action.focus.background-color`
- `voorbeeld.link-as-button.secondary-action.focus.border-color`
- `voorbeeld.link-as-button.secondary-action.focus.color`
- `voorbeeld.link-as-button.secondary-action.hover.background-color`
- `voorbeeld.link-as-button.secondary-action.hover.border-color`
- `voorbeeld.link-as-button.secondary-action.hover.color`

- `voorbeeld.link-as-button.subtle.background-color`
- `voorbeeld.link-as-button.subtle.border-color`
- `voorbeeld.link-as-button.subtle.color`
- `voorbeeld.link-as-button.subtle.font-weight`
- `voorbeeld.link-as-button.subtle.active.background-color`
- `voorbeeld.link-as-button.subtle.active.border-color`
- `voorbeeld.link-as-button.subtle.active.color`
- `voorbeeld.link-as-button.subtle.focus.background-color`
- `voorbeeld.link-as-button.subtle.focus.border-color`
- `voorbeeld.link-as-button.subtle.focus.color`
- `voorbeeld.link-as-button.subtle.hover.background-color`
- `voorbeeld.link-as-button.subtle.hover.border-color`
- `voorbeeld.link-as-button.subtle.hover.color`

### Avatar

- `voorbeeld.avatar.background-color`
- `voorbeeld.avatar.border-color`
- `voorbeeld.avatar.border-radius`
- `voorbeeld.avatar.border-width`
- `voorbeeld.avatar.color`
- `voorbeeld.avatar.size`

- `voorbeeld.avatar.icon.icon-size`

- `voorbeeld.avatar.text.font-family`
- `voorbeeld.avatar.text.font-size`
- `voorbeeld.avatar.text.font-weight`
- `voorbeeld.avatar.text.line-height`
- `voorbeeld.avatar.text.text-transform`

#### Avatar as button

Avatar is interactief, gedraagt zich als een button.

- `voorbeeld.avatar-as-button.background-color`
- `voorbeeld.avatar-as-button.border-color`
- `voorbeeld.avatar-as-button.border-radius`
- `voorbeeld.avatar-as-button.border-width`
- `voorbeeld.avatar-as-button.color`
- `voorbeeld.avatar-as-button.size`

- `voorbeeld.avatar-as-button.icon.icon-size`

- `voorbeeld.avatar-as-button.text.font-family`
- `voorbeeld.avatar-as-button.text.font-size`
- `voorbeeld.avatar-as-button.text.font-weight`
- `voorbeeld.avatar-as-button.text.line-height`
- `voorbeeld.avatar-as-button.text.text-transform`

- `voorbeeld.avatar-as-button.active.background-color`
- `voorbeeld.avatar-as-button.active.border-color`
- `voorbeeld.avatar-as-button.active.color`
- `voorbeeld.avatar-as-button.focus.background-color`
- `voorbeeld.avatar-as-button.focus.border-color`
- `voorbeeld.avatar-as-button.focus.color`
- `voorbeeld.avatar-as-button.hover.background-color`
- `voorbeeld.avatar-as-button.hover.border-color`
- `voorbeeld.avatar-as-button.hover.color`

- `voorbeeld.avatar-as-button.image.active.border-width`
- `voorbeeld.avatar-as-button.image.hover.border-width`

#### Avatar as link

Avatar is interactief, gedraagt zich als een link.

- `voorbeeld.avatar-as-link.background-color`
- `voorbeeld.avatar-as-link.border-color`
- `voorbeeld.avatar-as-link.border-radius`
- `voorbeeld.avatar-as-link.border-width`
- `voorbeeld.avatar-as-link.color`
- `voorbeeld.avatar-as-link.size`

- `voorbeeld.avatar-as-link.icon.icon-size`

- `voorbeeld.avatar-as-link.text.font-family`
- `voorbeeld.avatar-as-link.text.font-size`
- `voorbeeld.avatar-as-link.text.font-weight`
- `voorbeeld.avatar-as-link.text.line-height`
- `voorbeeld.avatar-as-link.text.text-transform`

- `voorbeeld.avatar-as-link.active.background-color`
- `voorbeeld.avatar-as-link.active.border-color`
- `voorbeeld.avatar-as-link.active.color`
- `voorbeeld.avatar-as-link.focus.background-color`
- `voorbeeld.avatar-as-link.focus.border-color`
- `voorbeeld.avatar-as-link.focus.color`
- `voorbeeld.avatar-as-link.hover.background-color`
- `voorbeeld.avatar-as-link.hover.border-color`
- `voorbeeld.avatar-as-link.hover.color`

- `voorbeeld.avatar-as-link.image.active.border-width`
- `voorbeeld.avatar-as-link.image.hover.border-width`
