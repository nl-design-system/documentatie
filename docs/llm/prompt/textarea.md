# Textarea component

## Usage

Use the Textarea component for each form field where the user needs to enter more than one line of text.

## Variants

The Textarea has the following states:

- disabled
- read only
- required
- invalid

The Textarea has the following interactive states:

- hover
- focus-visible

## HTML and CSS

When you develop a Textarea component with HTML and CSS, use the following requirements:

- Use the appropriate semantic HTML element: `textarea`.
- The Textarea element must have a `textbox` role in the accessibility tree, which is the implied role for `textarea`.
- Use the `dir="auto"` attribute as default, to support bidirectional text values.
- For the disabled state of the Textarea, add the `disabled` attribute.
- For the read-only state of the Textarea, add the `readonly` attribute.
- For the required state of the Textarea, the attribute depends on the situation:
  - Add the `aria-required="true"` attribute when you validate in the browser.
  - Add the `required` attribute when you do not validate in the browser.
- For the invalid state of the Textarea, add the `aria-invalid="true"` attribute.
