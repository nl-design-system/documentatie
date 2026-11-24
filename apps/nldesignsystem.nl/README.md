# NL Design System website

## `Content-Security-Policy`

To ensure the website remains safe for users, we use a `Content-Security-Policy` (CSP) to only allow specific connections to other websites.

This website contains a couple of forms that handle personal data, and the CSP helps prevent this data being leaked, even when security is compromised otherwise.

The configuration of our CSP is very strict. It is configured in [`astro.config.ts`](./astro.config.ts). We use [Astro's CSP implementation](https://docs.astro.build/en/reference/configuration-reference/#securitycsp) to generate CSP rules per route.

For this website to function correctly, it is important that nothing we need is blocked by the `Content-Security-Policy` by accident.

To ensure we detect issues with the CSP early, we aim to use the CSP for all environments: development, test, acceptance and production. However, in practice, the development and acceptance environments do not support this yet.

We generate all pages statically, the Astro CSP implementation renders a `<meta>` element in each .html document since there is no server runtime to pass CSP rules as header. While this would allow for universal CSP across all enviornments, it prevents users from using the website through a proxy like Google Translate. Because of this we favour a header based CSP approach over the `<meta>` element.

For the production environment, which is hosted using [Apache](https://httpd.apache.org), the `Content-Security-Policy` header is configured in a `.htaccess` file, so it is provided to users in the HTTP header when they visit the website. This part of the `.htaccess` file is generated automatically by the [append-to-csp-to-htaccess](./append-csp-to-htaccess.ts) script. This script runs at build time. It strips the `<meta>` element from all `.html` documents and generates `.htaccess` files instead.

For the test environment (a collection of playwright tests found in [csp.spec.ts](./test/csp/csp.spec.ts)), the `.htaccess` files are read and their CSP rules are send as headers in the playwright server.

For the development and acceptance environment, there is no CSP implementation yet.
