# NL Design System website

## `Content-Security-Policy`

The ensure the website remains safe for users, we use a `Content-Security-Policy` (CSP) to only allow specific connections to other websites.

This website contains a couple of forms that handle personal data, and the CSP helps prevent this data being leaked, even when security is compromised otherwise.

The configuration of our CSP is very strict. It is configured in [`astro.config.ts`](./astro.config.ts).

For this website to function correctly, it is important that nothing we need is blocked by the `Content-Security-Policy` by accident.

To ensure we detect issues with the CSP early, we aim to use the CSP for all environments: development, test, acceptance and production.

For most environments, the CSP is configured via the `<meta http-equiv="Content-Security-Policy" content="...">` elemen in the HTML code.

For the production environment, which is hosted using [Apache](https://httpd.apache.org), the `Content-Security-Policy` header is configured in the `dist/.htaccess` file, so it is provided to users in the HTTP header when they visit the website. This part of the htaccess file is generated automatically by the [append-to-csp-to-htaccess](./append-csp-to-htaccess.ts) script. The `<meta>` element is removed from this version.

The added and intended benefit of removing the `<meta>` element is, that the CSP is not used when the user wants to visit the website using a proxy, such as Google Translate. Without the `<meta>` element the injected scripts from Google Translate work correctly.
