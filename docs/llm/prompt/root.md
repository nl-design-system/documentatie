# Root component

## Usage

Use the Root component on the `html` element of every web page.

## HTML and CSS

When you develop a Root component with HTML and CSS, use the following requirements:

- Add the class name to the appropriate root HTML element: `html`.
- Add CSS to make the root element cover the entire viewport.
- Use `text-rendering: optimizeLegibility` to improve text rendering, at the cost of performance. When your web page contains very large bodies of text, such as log files or large tables, you can use `text-rendering: optimizeSpeed` on that part of the page to optimize performance.
- Enable automatic hyphenation and word-breaks. This will reduce the risk of text overflowing outside the viewport, especially on small screens and at high zoom levels, which would be a WCAG violation.
- Disable `text-size-adjust`. The intended design will take readability on small screens into considerations, so there should be no reason for adjustments.
