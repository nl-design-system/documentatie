# Button component

## HTML and CSS

When you develop a button component with HTML and CSS, use the following requirements:

- Use the appropriate semantic HTML elements.
- Use valid HTML.
- Use modern CSS that is supported by the NL Design System Baseline.
- The button must support the following interactive states:
  - hover
  - focus
  - active
- Additionally, the following state must be supported:
  - pressed
  - disabled
  - pressed
  - busy and disabled
- The disabled button must not appear to be interactive.
- The implementation must be accessible, in particular for the following WCAG 2.2 success criteria:
  - WCAG SC 1.4.12: Text spacing must be adjustable using user agent stylesheets.
  - WCAG SC 2.1.1: The button must be keyboard accessible, using keys that are specified in WAI-ARIA 1.3.
  - WCAG SC 2.4.7: The focus must be visible.
    - WCAG SC 2.5.5: the button size must meet the minimum target size.
- The button must not submit forms by default.

## React

In addition to an HTML and CSS implementation, create an implementation of the same component in React:

- Re-use the HTML and CSS from the previous implementation.
- Follow the rules for creating React components.
- Implement the React component with TypeScript and JSX.
