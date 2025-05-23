# Typography design tokens

## Usage

Use the color design tokens to configure every `color`, `background-color` and `border-color` of every component.

## Color scales

For every color scale, generate the following colors:

- `bg-document`: use this color for the background of the page
- `bg-subtle`: use this color for the background of an element, that is only decorative
- `bg-default`: use this color for the background of interactive components
- `bg-hover`: use this color for the background of interactive components in the hover state
- `bg-active`: use this color for the background of interactive components in the active state
- `border-subtle`: use this color for borders that are only decorative. Not seeing the border would not affect the meaning.
- `border-default`: use this color for borders that:
  - convey meaning by separating or grouping content
  - for interactive with a similar background color to the surrounding content, such as buttons or form controls
- `border-hover`: for interactive components in the hover state
- `border-active` for interactive components in the active state
- `color-subtle`: use this for lower contrast text and icons.
- `color-default`: use this color for text and icons in interactive components.
- `color-hover`: use this color for interactive components in the hover state
- `color-active`: use this color for interactive components in the active estate
- `color-document`: use this color for regular text and icons.

Contrast considerations:

- The maximum contrast between any color within the scale must be 17:1
- The minimum contrast between any of the following colors must be 4,5:1
  - between `border-default` and any of the `bg` colors
  - between `border-hover` and any of the `bg` colors
  - between `border-active`: and any of the `bg` colors
  - between `color-subtle` and any of the `bg` colors
  - between `color-default` and any of the `bg` colors
  - between `color-hover` and any of the `bg` colors
  - between `color-active` and any of the `bg` colors
  - between `color-document` and any of the `bg` colors
- The minimum contrast between any of the following colors must be 3:1
  - `border-subtle` with any of the `bg` colors

Use the following design tokens for regular rich text:

- `--basis-color-text-bg-document`
- `--basis-color-text-bg-subtle`
- `--basis-color-text-bg-default`
- `--basis-color-text-bg-hover`
- `--basis-color-text-bg-active`
- `--basis-color-text-border-subtle`
- `--basis-color-text-border-default`
- `--basis-color-text-border-hover`
- `--basis-color-text-border-active`
- `--basis-color-text-color-document`
- `--basis-color-text-color-subtle`
- `--basis-color-text-color-default`
- `--basis-color-text-color-hover`
- `--basis-color-text-color-active`

Use the following design tokens for interactive components:

- `--basis-color-action-1-bg-document`
- `--basis-color-action-1-bg-subtle`
- `--basis-color-action-1-bg-default`
- `--basis-color-action-1-bg-hover`
- `--basis-color-action-1-bg-active`
- `--basis-color-action-1-border-subtle`
- `--basis-color-action-1-border-default`
- `--basis-color-action-1-border-hover`
- `--basis-color-action-1-border-active`
- `--basis-color-action-1-color-document`
- `--basis-color-action-1-color-subtle`
- `--basis-color-action-1-color-default`
- `--basis-color-action-1-color-hover`
- `--basis-color-action-1-color-active`

Use the following design tokens for informative components, typically using a blue hue:

- `--basis-color-info-1-bg-document`
- `--basis-color-info-1-bg-subtle`
- `--basis-color-info-1-bg-default`
- `--basis-color-info-1-bg-hover`
- `--basis-color-info-1-bg-active`
- `--basis-color-info-1-border-subtle`
- `--basis-color-info-1-border-default`
- `--basis-color-info-1-border-hover`
- `--basis-color-info-1-border-active`
- `--basis-color-info-1-color-document`
- `--basis-color-info-1-color-subtle`
- `--basis-color-info-1-color-default`
- `--basis-color-info-1-color-hover`
- `--basis-color-info-1-color-active`

Use the following design tokens for warning type components, typically using a yellow or amber hue:

- `--basis-color-warning-1-bg-document`
- `--basis-color-warning-1-bg-subtle`
- `--basis-color-warning-1-bg-default`
- `--basis-color-warning-1-bg-hover`
- `--basis-color-warning-1-bg-active`
- `--basis-color-warning-1-border-subtle`
- `--basis-color-warning-1-border-default`
- `--basis-color-warning-1-border-hover`
- `--basis-color-warning-1-border-active`
- `--basis-color-warning-1-color-document`
- `--basis-color-warning-1-color-subtle`
- `--basis-color-warning-1-color-default`
- `--basis-color-warning-1-color-hover`
- `--basis-color-warning-1-color-active`

Use the following design tokens for negative type components, typically using a red hue:

- `--basis-color-negative-1-bg-document`
- `--basis-color-negative-1-bg-subtle`
- `--basis-color-negative-1-bg-default`
- `--basis-color-negative-1-bg-hover`
- `--basis-color-negative-1-bg-active`
- `--basis-color-negative-1-border-subtle`
- `--basis-color-negative-1-border-default`
- `--basis-color-negative-1-border-hover`
- `--basis-color-negative-1-border-active`
- `--basis-color-negative-1-color-document`
- `--basis-color-negative-1-color-subtle`
- `--basis-color-negative-1-color-default`
- `--basis-color-negative-1-color-hover`
- `--basis-color-negative-1-color-active`

Use the following design tokens for positibe type components, typically using a green hue:

- `--basis-color-positive-1-bg-document`
- `--basis-color-positive-1-bg-subtle`
- `--basis-color-positive-1-bg-default`
- `--basis-color-positive-1-bg-hover`
- `--basis-color-positive-1-bg-active`
- `--basis-color-positive-1-border-subtle`
- `--basis-color-positive-1-border-default`
- `--basis-color-positive-1-border-hover`
- `--basis-color-positive-1-border-active`
- `--basis-color-positive-1-color-document`
- `--basis-color-positive-1-color-subtle`
- `--basis-color-positive-1-color-default`
- `--basis-color-positive-1-color-hover`
- `--basis-color-positive-1-color-active`

Use the following design tokens for selected components, such as listbox options and table rows.

- `--basis-color-selected-1-bg-document`
- `--basis-color-selected-1-bg-subtle`
- `--basis-color-selected-1-bg-default`
- `--basis-color-selected-1-bg-hover`
- `--basis-color-selected-1-bg-active`
- `--basis-color-selected-1-border-subtle`
- `--basis-color-selected-1-border-default`
- `--basis-color-selected-1-border-hover`
- `--basis-color-selected-1-border-active`
- `--basis-color-selected-1-color-document`
- `--basis-color-selected-1-color-subtle`
- `--basis-color-selected-1-color-default`
- `--basis-color-selected-1-color-hover`
- `--basis-color-selected-1-color-active`
