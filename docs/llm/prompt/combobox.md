# Combobox component

## HTML and CSS

When you develop a Combobox component with HTML and CSS, use the following requirements:

- Use `role="combobox"` on the `input` element.
- Use `autocomplete="off"` on the `input` element. Avoid the user will have two competing autocomplete popups, one from .
- Use `aria-autocomplete="list"`. This inidicates to assistive technologies, there can be multiple autocomplete options.
- Use `aria-expanded="false"` on the `input` element by default, and switch to `true` when the combobox is expanded.
- Use `aria-activedescendant` and specify the `id` of each active option, separated by spaces.

When the combobox is expanded, it should render a Listbox component.

- Use `role="listbox"` on the container element.
- Use `role="option"` on the element for an option.
- Use `aria-disabled="true"` on disabled options.
- Use a unique `id` attribute on each option element.

Support forced colors mode:

- Use a border for the listbox with the `FieldText` color.
- Use `Field` and `FieldText` for the `background-color` and `color` of the listbox.
- Use `GrayText` for the `color` and `border-color` of a disabled listbox.
- Use `GrayText` for the `color` of a disabled option that is not selected.
- Use the inverse for selected disabled options: `GrayText` for background-color and `Field` for `color`.
- Use `Highlight` and `HighlightText` for the `background-color` and `color` for selected options and for options in the hover state.

## Behavior

- The combobox is not expanded by default.

Keyboard interaction:

- Pressing `Escape` should close the combobox.
- Pressing `ArrowDown` should open the combobox, when the combobox is not expanded.
- Pressing `ArrowDown` should select the next option, when the combobox is expanded.
- Pressing `ArrowUp` should select the previous option, when the combobox is expanded.
- Pressing `Home` should select the first option, when the combobox is expanded.
- Pressing `End` should select the last option, when the combobox is expanded.
- Pressing `Enter` should set the value to the currently selected, when the combobox is expanded.
- Pressing `Enter` should submit the form, when the combobox is not expanded.
