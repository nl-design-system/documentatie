# Skip link component

## Usage

Use the Skip Link component at the start of the page, to bypass content that is repeated on multiple web pages, such as the Page Header and navigation.

## HTML and CSS

- Use `position: sticky` instead of `position: fixed`. Avoid unnecessary scrolling of the page, when focusing the Skip Link, by using this technique.
- Use "screen reader only CSS" to visually hide the Skip Link, until it has focus.
- The Skip Link must be an anchor link to another element on the page.

## Visual design

The Skip Link is not visible before it is focused.

Ensure the focus ring is fully visible, by positioning the Skip Link slightly off the sides of the viewport.

The Skip Link must be positioned first in reading order, at the start of the page, at the start of the text. The position of the Skip Link depends on the `direction` and `writing-mode` of the page.

When the page layout is centered, position the skip links within the centered area of the page. Avoid users with a large viewport don't notice the Skip Link, because it is so far away from the main content.

The Skip Link must not be transparent, because it is positioned above other content.

The Skip Link must have a consistent focus ring design.

The Skip Link must meet minimum pointer target size requirements.
