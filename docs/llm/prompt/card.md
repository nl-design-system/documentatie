# Card component

## HTML and CSS

When you develop a Card component with HTML and CSS, use the following requirements:

- Use the HTML element `div` by default, but use another semantic HTML element when appropriate. For example: `article`, `aside`, `li`, `figure` or `section`.
- When the Card has a heading, the HTML heading element must be the first element in document order. Specifically, any image must come after the heading, to adhere to the "WCAG SC 1.3.2 Meaningful Order" accessibility requirement.
- Use flexbox `order` or CSS grids to visually display the image above the heading.
- When the image provides additional context to the text, the image must have an accessible label.
- When the card is a link, the heading must have the `a` element.
- When the card contains additional body text below the heading, it must be associated with the link using `aria-describedby`.
- When the card footer contains a "Read more" link, the link must be associated with the heading using `aria-labelledby` and with the body text using `aria-describedby`.
- The "Read more" link must be removed from the tab order. Avoid having two identical links in tab order, using this technique.

## Visual design

- The image must be displayed above the heading.
- In forced colors mode, the card must have a border.

## React component

- The `Link` component must be configurable.
- It must be possible to use Next.js or Gatsby routing, and that would be possible by configuring `Link`.
- The image must be configurable with a `ReactNode`, so the contents are flexible. For example, the following options should be possible:
  - `img` element
  - `picture` element
  - `svg` element
  - `video` element
  - another element that helps with cropping of the image
