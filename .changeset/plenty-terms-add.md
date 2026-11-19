---
"@nl-design-system-community/documentation-components": major
---

Publish a built version of the components.

- All components are now exported from the package entry point: `import { Heading } from "@nl-design-system-community/documentation-components"`.
- Import the styles once from `@nl-design-system-community/documentation-components/index.css`. It includes the CSS of all dependencies, so the package also works with server-side rendering (for example Astro) without extra configuration.
- `react` and `react-dom` (18 or 19) are now peer dependencies.

Breaking changes:

- The package now has an `exports` map. Only the entry point, `index.css` and `src/*` can be imported.
- `WcagList` and `WcagListItem` have been removed.
- Components with conflicting names are exported as `CardGroupCard`, `ComponentCriteriaList` and `ComponentCriteriaListItem`.
