# Form Field

## Usage

Use the Form Field component for each combination of a form label and a form control.

## HTML and CSS

When you develop a Form Field component with HTML and CSS, use the following requirements:

- Use a `div` element as container element.
- First in document order must be the Form Label.
- Second in document order must be the Form Field Description, which is optional. Use a `div` as container element.
- Third in document order must be the Form Field Error Message, which is optional. Use a `div` as container element.
- Fourth in document order must be the form control component. Use a `div` as container element.
- Avoid accidental interaction with form controls such as switches, radio buttons and checkboxes, when the user clicks on an empty part of `label` element. Accidents like this could have unintended legal or financial consequences. Limit the clickable area of the `label` element, by wrapping the `label` element in a `div`, and use `display: inline` or `display: inline-flex` for the `label` element.
