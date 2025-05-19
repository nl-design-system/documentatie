# Text Input component

## Usage

Use the Text Input component for each form field where the user needs to enter text, and one line of text is sufficient.

## Variants

The Text Input has the following states:

- disabled
- read only
- required
- invalid

The Text Input has the following interactive states:

- hover
- focus-visible

## HTML and CSS

When you develop a Text Input component with HTML and CSS, use the following requirements:

- Use the appropriate semantic HTML element: `input`.
- The Text Input element must have a `textbox` role in the accessibility tree, which is the implied role for `<input type="text">` and for many other `input` `type` variants.
- Always provide a `type` attribute, and use `type="text"` as default.
- Use the `dir="auto"` attribute as default, to support bidirectional text values.
- When the value of the Text Input is always has the text direction left-to-right, add the `dir="ltr"` attribute. For example, the following types of values are left-to-right:
  - URLs
  - E-mail addresses
  - Phone numbers
- When the value type contains numeric, include the `inputMode="numeric"` attribute. This can provide users on touch device a convenient numeric keypad to input the value.
- For the disabled state of the Text Input, add the `disabled` attribute.
- For the read-only state of the Text Input, add the `readonly` attribute.
- For the required state of the Text Input, the attribute depends on the situation:
  - Add the `aria-required="true"` attribute when you validate in the browser.
  - Add the `required` attribute when you do not validate in the browser.
- For the invalid state of the Text Input, add the `aria-invalid="true"` attribute.

## Autocomplete

<!-- bron: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css_css-textbox--docs#metadata-van-veelgebruikte-formuliervelden -->

Use the `autocomplete` attribute where possible. This contributes to WCAG SC 1.3.5.

Use the following `autocomplete` values:

- Use `name` for a persons full name.
- Use `given-name` for a persons name.
- Use `family-name` for a persons last name.
- Use `address-line1` for the 1st line of an address.
- Use `address-line2` for the 2nd line of an address.
- Use `address-line3` for the 3rd line of an address.
- Use `postal-code` for a postal code (also known as "zip code").
- Use `email` for e-mail addresses.
- Use `url` for web addresses and other URLs.
- Use `password` for entering someones existing password.
- Use `new-password` to choose a new password.
- Use `current-password` to authenticate the user when choosing a new password.
- Use `bday` for a birth date.
- Use `tel` for a telephone number, of use one of the more specific options below.
- Use `mobile tel` for an international mobile phone number.
- Use `home tel` for an international home phone number.
- Use `work tel` for an international work phone number.
- Use `fax tel` for an international fax number.
- Use `tel-national` for a national phone number.
- Use `mobile tel-national` for a national mobile phone number.
- Use `home tel-national` for a national home phone number.
- Use `work tel-national` for a national work phone number.
- Use `fax tel-national` for a national fax number.
