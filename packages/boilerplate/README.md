# Boilerplate HTML files

## Build process

Update references to CDNs in selected HTML files, to have a fixed version number URL. Also feature Subresource Integrity by adding an `integrity` attribute with the hash for the file as we know it from the CDN.

The version information and the hash is obtained from the npm dependencies as specified in [`package.json`](./package.json).

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
