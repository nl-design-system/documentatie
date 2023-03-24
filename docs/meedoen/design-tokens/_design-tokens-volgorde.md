# Design tokens volgorde

Voor documentatie schrijven we design tokens soms als geheel uit en presenteren we ze als lijst. Om het scannen van zo'n lijst gemakkelijk te maken houden we een volgorde aan. Voor deze volgorde maken we gebruik van de [BEM methodologie](https://getbem.com/).

1. Block: naam van de component, of naam van een common concept.
2. Element: kleiner onderdeel van een component, bijvoorbeeld `icon` of `label`. Niet alle componenten hebben dit.
3. Modifier: user action state
   - `active`
   - `focus`
   - `focus-visible`
   - `hover`
4. Modifier: component state
   - `checked`
   - `disabled`
   - `indeterminate`
   - `invalid`
   - Component state + user action state, bijvoorbeeld:
     - `checked` + `active`
     - `checked` + `focus`
     - `checked` + `focus-visible`
     - `checked` + `hover`
5. Modifier: appearance
   - `large`
   - `primary-action`
   - `subtle`
   - etc.
   - Appearance + user action state, bijvoorbeeld:
     - `large` + `active`
     - `large` + `focus`
   - Appearance + component state, bijvoorbeeld:
     - `large` + `checked`
     - `large` + `invalid`
   - Appearance + component state + user action state, bijvoorbeeld:
     - `large` + `checked` + `active`
     - `large` + `checked` + `focus`

Binnen elk onderdeel houden we een alphabetische naamgeving aan vanuit HTML, CSS, SVG en WAI-ARIA.

## Voorbeeld

Een voorbeeld aan de hand van het 'Button' component

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

- `voorbeeld.button.icon.margin-inline`
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
