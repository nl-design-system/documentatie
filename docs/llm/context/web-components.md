# Web Components

## API

When developing an API for a web component, use the following requirements:

- Names of global HTML attributes are reserved names for attributes, and global HTML DOM properties are reserved names for properties, do not use those as API for your web component. They can cause incorrect behavior. Examples of attributes that can cause issues:
  - `name`: the `name` attribute has special meaning for the `attachInternals` API.
  - `title`: the text of the `title` attribute can be displayed in a tooltip.
  - `role`: the configured role will give the custom element that role in the accessibility tree.
  - `aria-*` attributes: even if you copy the values to an ARIA attribute in the Shadow DOM of the web component, the `aria-` attribute still applies to the custom element. `<my-component aria-label="Delete">` attempts to give an element without accessible role an accessible label, which is incorrect.
