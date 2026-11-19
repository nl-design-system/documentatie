<!-- @license CC0-1.0 -->

# Internal component library for `nldesignsystem.nl` and related sites

The `@nl-design-system-community/documentation-components` is the package that contains many components that have have been built to create the [NL Design System website](https://nldesignsystem.nl/), and related websites such as [gebruikersonderzoeken.nl](https://gebruikersonderzoeken.nl/).

## Installation

```sh
pnpm add @nl-design-system-community/documentation-components react react-dom
```

`react` and `react-dom` are peer dependencies, version 18 and 19 are supported.

## Usage

All components are exported from the package entry point:

```tsx
import { Heading, Note, Paragraph } from "@nl-design-system-community/documentation-components";
import "@nl-design-system-community/documentation-components/index.css";

export const Example = () => (
  <Note>
    <Heading level={2}>Hello world</Heading>
    <Paragraph>This is an example.</Paragraph>
  </Note>
);
```

Import `index.css` once in your application. It contains all styles of the components in this package, including the styles of dependencies (such as the `@utrecht/*-css` packages). The JavaScript does not import any CSS, so the package also works with server-side rendering (for example in Astro) without extra configuration.

### Renamed exports

Some components share a name, these are exported under a different name:

| Export                      | Source                                                         |
| --------------------------- | -------------------------------------------------------------- |
| `CardGroupCard`             | `Card` from `components/CardGroup.tsx`                         |
| `ComponentCriteriaList`     | `CriteriaList` from `components/ComponentCriteriaList.tsx`     |
| `ComponentCriteriaListItem` | `CriteriaListItem` from `components/ComponentCriteriaList.tsx` |

### Importing source files

Within this monorepo, components must be imported directly from the source files:

```tsx
import { Note } from "@nl-design-system-community/documentation-components/src/note/note.tsx";
```

## Development

```sh
pnpm build        # build the package to `dist/`
pnpm watch  # rebuild on changes
pnpm lint         # type check
pnpm test         # run tests
```

When you add a new component, export it from `src/index.ts` so it becomes part of the package.

## Support

These components are maintained for internal use only, and we provide no support for issues you might have while using them. The release process will likely not rigidly follow semantic versioning. Components might be moved, removed or renamed at any given time.

Do you need these components in the long term? Your safest bet might be to just fork these components if you need them. Please let us know if you intend to maintain an NL Design System Community implementation for any of these components, then we might migrate to your implementation to reduce our maintenance burden.
