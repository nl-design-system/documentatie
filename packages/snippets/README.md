<!-- @license CC0-1.0 -->

# Example code snippets for NL Design System

This package has some code snippets with NL Design System. The build script ensures the snippets in `dist/` follow [the NL Design System guidelines for using CDNs in prototypes](https://nldesignsystem.nl/handboek/developer/cdn/) safely.

## Build script

Every page with references to an npm package must be modified, to reference a CDN instead of local resources. Every directly referenced resource from the CDN should be configured with Subresource Integrity (SRI), to verify the referenced file doesn't have any malicious changes.

### Process

Find all `*.html` files in a specific directory that contains all relevant HTML files.

Find all `<link>` elements. Use the `href` attribute to determine which npm package and file from that package is referenced.

Look up the version number of that npm package in its `package.json` file. Resolve the local file path for that npm import reference, and create a SHA-384 hash for that file.

Update the `<link>` element to have an `integrity` attribute with the `SHA-384` hash, and update the `href` to reference the file on a CDN instead.

## Example

For example:

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/component-library-css/dist/index.css" />
```

Becomes:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@utrecht/component-library-css@1.2.3/dist/index.css"
  integrity="sha384-lb0VJ1IzJzMv+OKd0vumouFgE6NzonQeVbRaTYjum4ql38TdmOYfyJ0cz1"
/>
```
