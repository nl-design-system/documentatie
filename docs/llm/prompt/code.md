# Code component

## Usage

Use the Code component for code snippets that are part of rich text or part of a user interface component.

## HTML and CSS

When you develop a Code component with HTML and CSS, use the following requirements:

- Use a `code` element as container element.
- Prevent automatic hyphenation inside the Code component, because it can result in an ambuguous code snippet. The result would be unclear: is the hyphen meant as part of the code, or is it part of hyphenation?
- Ensure space characters are preserved in the rendering, expect for new lines.
