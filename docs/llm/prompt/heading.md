# Heading component

## HTML and CSS

When you develop a heading component with HTML and CSS, use the following requirements:

- Use the appropriate semantic HTML elements: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
- The heading must have the `heading` role, which is implied by the HTML heading elements.

## React

In addition to an HTML and CSS implementation, create an implementation of the same component in React:

- Provide a `level` property for the component, where you can specify the heading level. Render the appropriate HTML element for the specified heading level.
- When the heading level is invalid, render a `div` without heading role instead.
