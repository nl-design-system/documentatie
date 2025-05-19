# Unordered List component

## Usage

Use the Unordered List component for each list in in a block of rich text content, where the list items are in no particular order.

## HTML and CSS

When you develop an unordered list component with HTML and CSS, use the following requirements:

- Use the appropriate semantic HTML element: `ul` and `li`.
- Explicitly apply `role="list"`. This is to ensure the `list` role is applied even in the particular case of a list with the CSS property `list-style: none` in Safari.
