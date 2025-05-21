# Icon component

## Usage

Use the Icon component to display any icon in the user interface.

## HTML and CSS

When you develop a Root component with HTML and CSS, use the following requirements:

- Render a `span` as container element of the Icon component.
- Exclude the icon and its contents from the accessibility tree, using `aria-hidden="true"`.
- The icon must be an inline `svg` element. Do not use an `img` or `picture` element as icon.
- The size of the icon must be configurable via a CSS variable.
- The `svg` element inside the Icon component must not exceed the specified size of the icon.

## SVG icons

When you embed and `svg` element for the icon, use the following requirements.

- Add `height="1em"` and `width="1em"` as default size. This aims to avoid displaying extremely large icons, when the CSS is still busy loading, or when CSS cannot be loaded.
- Icons must be perceivable in forced-colors mode.
  - For icons rendered using `fill`, use `fill="CurrentColor"`.
  - For icons rendered using `stroke`, use `stroke="CurrentColor"`.
- Never include a `title` element in the `svg`. Avoid the native browser tooltip for the `title` element.
