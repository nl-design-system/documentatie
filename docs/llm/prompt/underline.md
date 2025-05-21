# Underline component

## Usage

Use the Underline component to store and render existing underlined content, without loss of information. Do not use the Underline component for new content, and migrate away from Underline when possible.

## HTML and CSS

- Render the the underline with an `u` element.

## Accessibility

Reasons not to use the Underline component:

- Underlined content is not announced by assistive technologies.
- Underlined text are visually easily mistaken for links.
- Making a reference to underlined text is, since the underlines are not perceivable by non-visual users. Examples of inaccessible references in text:
  - "The underlined words are the subject of the sentence."
  - "The underlined characters are digits."
  - "The underlined paragraphs are marked for deletion."
