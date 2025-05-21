# Color Sample

## Usage

Use the Color Sample component to display an image as example of a CSS color value.

## HTML and CSS

When you develop a Form Field component with HTML and CSS, use the following requirements:

- Use a `data` element as container element.
- Use the `value` attribute to specify the CSS color value.
- Render an `svg` element inside the `data` element, with a rectangle that is filled with the specified CSS color.
- The Color Sample can be informative or decorative.
- When the icon is informative, the `svg` must have `role="img"` and have an accessible label.
- When the icon is decorative, the `svg` must have `aria-hidden="true"` to remove it from the accessibility tree.
- The accessible label can be the colloquial name for a color, or the original color code.
