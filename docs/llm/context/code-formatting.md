# Code formatting

Gebruik de standaardinstellingen van Prettier voor code formatting, voor de bestandstypes die Prettier standaard ondersteunt.

## Algemeen

- Gebruik CRLF als regeleinden (U+000D en U+000A)
- Eindig elk tekst-document met een regeleinde, dat is handiger voor Git.

## HTML

- Tags, attributes en doctype in lowercase.
- Gebruik geen waarde bij boolean attributes.
- Gebruik 2 spaties voor indentation.
- Gebruik expliciete tags voor `html`, `body` en `head`.
- Gebruik dubbele quotes voor attributen.

## TypeScript

- Gebruik de `import type` feature om types te importeren. Op deze manier zijn de TypeScript files ook geschikt voor de experimentele Node.js 22 feature `--experimental-strip-types`, en in Node.js 23 werkt het automatisch.
- Gebruik de `.tsx` filename extension wanneer je JSX gebruikt.
