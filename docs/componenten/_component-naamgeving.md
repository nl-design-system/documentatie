# Component naamgeving

Voor veel componenten hebben we de namen al vastgelegd. Bij nieuwe componenten gaan we in overleg over de juiste naamgeving. Hierbij proberen we ons zoveel mogelijk aan standaarden te houden. We zorgen dat de naam niet wordt gekozen op basis van de vorm van het component maar altijd op de funtie.

## [Component] as [button/link]

Er zijn een aantal componenten die zich gedragen als een button of link. Denk bijvoorbeeld aan een 'Avatar'. Soms is dit component niet interactief, enkel decoratief. Soms gedraagt dit component zich als een 'link', waardoor men bijvoorbeeld naar een detailpagina wordt geleid. Soms gedraagt dit component zich als een 'button', waardoor men bijvoorbeeld een menu kan openen. Om voor dit soort componenten design tokens aan te maken hanteren we de naamgeving [Component] as [button/link].

**Component**

Wanneer een component zich gedraagt als zichzelf.

- Button
- Link
- Avatar (niet interactief)
- Card (card als geheel niet iteractief, de card kan wel meerdere interactieve elementen bevatten)
- Tabs

**[Component] as [button]**

Wanneer een component zich gedraagt als een button.

- Avatar as button (avatar is interactief, gedraagt zich als een button)
- Link as button (ziet eruit als een link, gedraagt zich als een button)
- Card as button (card is geheel interactief, gedraagt zich als een button)

**[Component] as [link]**

Wanneer een component zich gedraagt als een link.

- Avatar as link (avatar is interactief, gedraagt zich als een link)
- Button as link (ziet eruit als een button, gedraagt zich als een link)
- Card as link (card is geheel interactief, gedraagt zich als een link)

## Voorbeelden

### Button

- nl.button.background-color
- nl.button.border-color
- nl.button.border-radius
- nl.button.border-width
- nl.button.color
- nl.button.font-family
- nl.button.font-size
- nl.button.font-weight
- nl.button.line-height
- nl.button.margin-block-end
- nl.button.margin-block-start
- nl.button.margin-inline-end
- nl.button.margin-inline-start
- nl.button.padding-block-end
- nl.button.padding-block-start
- nl.button.padding-inline-end
- nl.button.padding-inline-start

- nl.button.icon.gap
- nl.button.icon.size

- nl.button.active.background-color
- nl.button.active.border-color
- nl.button.active.color
- nl.button.focus.background-color
- nl.button.focus.border-color
- nl.button.focus.color
- nl.button.hover.background-color
- nl.button.hover.border-color
- nl.button.hover.color
- nl.button.disabled.background-color
- nl.button.disabled.border-color
- nl.button.disabled.color

- nl.button.primary-action.background-color
- nl.button.primary-action.border-color
- nl.button.primary-action.color
- nl.button.primary-action.font-weight
- nl.button.primary-action.active.background-color
- nl.button.primary-action.active.border-color
- nl.button.primary-action.active.color
- nl.button.primary-action.focus.background-color
- nl.button.primary-action.focus.border-color
- nl.button.primary-action.focus.color
- nl.button.primary-action.hover.background-color
- nl.button.primary-action.hover.border-color
- nl.button.primary-action.hover.color
- nl.button.primary-action.disabled.background-color
- nl.button.primary-action.disabled.border-color
- nl.button.primary-action.disabled.color

- nl.button.secondary-action.background-color
- nl.button.secondary-action.border-color
- nl.button.secondary-action.color
- nl.button.secondary-action.font-weight
- nl.button.secondary-action.active.background-color
- nl.button.secondary-action.active.border-color
- nl.button.secondary-action.active.color
- nl.button.secondary-action.focus.background-color
- nl.button.secondary-action.focus.border-color
- nl.button.secondary-action.focus.color
- nl.button.secondary-action.hover.background-color
- nl.button.secondary-action.hover.border-color
- nl.button.secondary-action.hover.color
- nl.button.secondary-action.disabled.background-color
- nl.button.secondary-action.disabled.border-color
- nl.button.secondary-action.disabled.color

- nl.button.subtle.background-color
- nl.button.subtle.border-color
- nl.button.subtle.color
- nl.button.subtle.font-weight
- nl.button.subtle.active.background-color
- nl.button.subtle.active.border-color
- nl.button.subtle.active.color
- nl.button.subtle.focus.background-color
- nl.button.subtle.focus.border-color
- nl.button.subtle.focus.color
- nl.button.subtle.hover.background-color
- nl.button.subtle.hover.border-color
- nl.button.subtle.hover.color
- nl.button.subtle.disabled.background-color
- nl.button.subtle.disabled.border-color
- nl.button.subtle.disabled.color

### Button as Link

Ziet eruit als een button, gedraagt zich als een link.

- nl.button-as-link.color
- nl.button-as-link.font-family
- nl.button-as-link.font-size
- nl.button-as-link.text-decoration

- nl.button-as-link.icon.gap
- nl.button-as-link.icon.size

- nl.button-as-link.active.color
- nl.button-as-link.focus.color
- nl.button-as-link.focus.text-decoration
- nl.button-as-link.hover.color
- nl.button-as-link.hover.text-decoration

### Link

- nl.link.color
- nl.link.font-family
- nl.link.font-size
- nl.link.text-decoration

- nl.link.icon.gap
- nl.link.icon.size

- nl.link.active.color
- nl.link.focus.color
- nl.link.focus.text-decoration
- nl.link.hover.color
- nl.link.hover.text-decoration

### Link as Button

Ziet eruit als een link, gedraagt zich als een button.

- nl.link-as-button.background-color
- nl.link-as-button.border-color
- nl.link-as-button.border-radius
- nl.link-as-button.border-width
- nl.link-as-button.color
- nl.link-as-button.font-family
- nl.link-as-button.font-size
- nl.link-as-button.font-weight
- nl.link-as-button.line-height
- nl.link-as-button.margin-block-end
- nl.link-as-button.margin-block-start
- nl.link-as-button.margin-inline-end
- nl.link-as-button.margin-inline-start
- nl.link-as-button.padding-block-end
- nl.link-as-button.padding-block-start
- nl.link-as-button.padding-inline-end
- nl.link-as-button.padding-inline-start

- nl.link-as-button.icon.gap
- nl.link-as-button.icon.size

- nl.link-as-button.active.background-color
- nl.link-as-button.active.border-color
- nl.link-as-button.active.color
- nl.link-as-button.focus.background-color
- nl.link-as-button.focus.border-color
- nl.link-as-button.focus.color
- nl.link-as-button.hover.background-color
- nl.link-as-button.hover.border-color
- nl.link-as-button.hover.color

- nl.link-as-button.primary-action.background-color
- nl.link-as-button.primary-action.border-color
- nl.link-as-button.primary-action.color
- nl.link-as-button.primary-action.font-weight
- nl.link-as-button.primary-action.active.background-color
- nl.link-as-button.primary-action.active.border-color
- nl.link-as-button.primary-action.active.color
- nl.link-as-button.primary-action.focus.background-color
- nl.link-as-button.primary-action.focus.border-color
- nl.link-as-button.primary-action.focus.color
- nl.link-as-button.primary-action.hover.background-color
- nl.link-as-button.primary-action.hover.border-color
- nl.link-as-button.primary-action.hover.color

- nl.link-as-button.secondary-action.background-color
- nl.link-as-button.secondary-action.border-color
- nl.link-as-button.secondary-action.color
- nl.link-as-button.secondary-action.font-weight
- nl.link-as-button.secondary-action.active.background-color
- nl.link-as-button.secondary-action.active.border-color
- nl.link-as-button.secondary-action.active.color
- nl.link-as-button.secondary-action.focus.background-color
- nl.link-as-button.secondary-action.focus.border-color
- nl.link-as-button.secondary-action.focus.color
- nl.link-as-button.secondary-action.hover.background-color
- nl.link-as-button.secondary-action.hover.border-color
- nl.link-as-button.secondary-action.hover.color

- nl.link-as-button.subtle.background-color
- nl.link-as-button.subtle.border-color
- nl.link-as-button.subtle.color
- nl.link-as-button.subtle.font-weight
- nl.link-as-button.subtle.active.background-color
- nl.link-as-button.subtle.active.border-color
- nl.link-as-button.subtle.active.color
- nl.link-as-button.subtle.focus.background-color
- nl.link-as-button.subtle.focus.border-color
- nl.link-as-button.subtle.focus.color
- nl.link-as-button.subtle.hover.background-color
- nl.link-as-button.subtle.hover.border-color
- nl.link-as-button.subtle.hover.color

### Avatar

- nl.avatar.background-color
- nl.avatar.border-color
- nl.avatar.border-radius
- nl.avatar.border-width
- nl.avatar.color
- nl.avatar.size

- nl.avatar.icon.icon-size

- nl.avatar.text.font-family
- nl.avatar.text.font-size
- nl.avatar.text.font-weight
- nl.avatar.text.line-height
- nl.avatar.text.text-transform

#### Avatar as button

Avatar is interactief, gedraagt zich als een button.

- nl.avatar-as-button.background-color
- nl.avatar-as-button.border-color
- nl.avatar-as-button.border-radius
- nl.avatar-as-button.border-width
- nl.avatar-as-button.color
- nl.avatar-as-button.size

- nl.avatar-as-button.icon.icon-size

- nl.avatar-as-button.text.font-family
- nl.avatar-as-button.text.font-size
- nl.avatar-as-button.text.font-weight
- nl.avatar-as-button.text.line-height
- nl.avatar-as-button.text.text-transform

- nl.avatar-as-button.active.background-color
- nl.avatar-as-button.active.border-color
- nl.avatar-as-button.active.color
- nl.avatar-as-button.focus.background-color
- nl.avatar-as-button.focus.border-color
- nl.avatar-as-button.focus.color
- nl.avatar-as-button.hover.background-color
- nl.avatar-as-button.hover.border-color
- nl.avatar-as-button.hover.color

- nl.avatar-as-button.image.active.border-width
- nl.avatar-as-button.image.hover.border-width

#### Avatar as link

Avatar is interactief, gedraagt zich als een link.

- nl.avatar-as-link.background-color
- nl.avatar-as-link.border-color
- nl.avatar-as-link.border-radius
- nl.avatar-as-link.border-width
- nl.avatar-as-link.color
- nl.avatar-as-link.size

- nl.avatar-as-link.icon.icon-size

- nl.avatar-as-link.text.font-family
- nl.avatar-as-link.text.font-size
- nl.avatar-as-link.text.font-weight
- nl.avatar-as-link.text.line-height
- nl.avatar-as-link.text.text-transform

- nl.avatar-as-link.active.background-color
- nl.avatar-as-link.active.border-color
- nl.avatar-as-link.active.color
- nl.avatar-as-link.focus.background-color
- nl.avatar-as-link.focus.border-color
- nl.avatar-as-link.focus.color
- nl.avatar-as-link.hover.background-color
- nl.avatar-as-link.hover.border-color
- nl.avatar-as-link.hover.color

- nl.avatar-as-link.image.active.border-width
- nl.avatar-as-link.image.hover.border-width
