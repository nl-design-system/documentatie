# Checkbox Group component

## HTML and CSS

When you develop a Checkbox Group component with HTML and CSS, use the following requirements:

- Render a `div` as the outmost element of the Checkbox Group component. This is because CSS works more reliably on a `div` than on a `fieldset` element.
- Group the checkboxes in a `fieldset` element.
- Render the label for the checkbox group in a `legend` element, directly inside the `fieldset` as the first child.
- Optionally, render a Form Field Description after the `legend` element.
- Optionally, render a Form Field Error Message after the `legend` element and after the optional Form Field Description.
- Render the sequence of checkbox options after all labels, instructions and error messages.
