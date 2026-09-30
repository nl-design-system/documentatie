---
"@nl-design-system-unstable/documentation": minor
---

De teksten in `dist/component-rules.json` zijn nu HTML in plaats van platte tekst.
Lijsten en links blijven daardoor behouden: in de platte tekst verdwenen de
URL's van links volledig.

De HTML gebruikt de class names van NL Design System componenten, dus de
bijbehorende CSS is nodig om het er goed uit te laten zien:

| Class name                           | Package                                     |
| ------------------------------------ | ------------------------------------------- |
| `nl-paragraph`                       | `@nl-design-system-candidate/paragraph-css` |
| `nl-link`                            | `@nl-design-system-candidate/link-css`      |
| `nl-code`                            | `@nl-design-system-candidate/code-css`      |
| `ams-unordered-list`, `…-list__item` | `@amsterdam/design-system-css`              |

De prefixes lopen bewust door elkaar (`nl-`, `ams-`, `utrecht-`, `ma-`): de
website gebruikt per element het component dat er op dit moment voor bestaat.

Links naar nldesignsystem.nl zijn absoluut, zodat ze ook buiten de website
werken. Sanitize de HTML alsnog voordat je die met `innerHTML` in een pagina zet.
