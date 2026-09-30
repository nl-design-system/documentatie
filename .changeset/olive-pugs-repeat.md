---
"@nl-design-system-unstable/documentation": minor
---

Het package bevat twee nieuwe bestanden, zodat andere tools dan de website de
documentatie als data kunnen gebruiken:

- `dist/guideline-pages.json` beschrijft de richtlijnenpagina's van
  nldesignsystem.nl: per pagina het `path`, de `url` en de `fragments` (de `h2`
  koppen met hun `id`) waar je naartoe kunt linken. Handig om links naar de
  website te controleren. Het `$comment` in het bestand waarschuwt dat de lijst
  nog niet compleet is: alleen `/richtlijnen/` staat erin, nog niet de rest van
  de site.
- `dist/component-rules.json` beschrijft de veelgemaakte fouten per component:
  `subjects` (de componenten) en `rules`, met per regel een `id`, een `title` en
  de teksten uit de markdown (`explanation`, `solution`, `relatedguidelines`, …).

De teksten in `component-rules.json` zijn HTML in plaats van platte tekst, zodat
lijsten en links behouden blijven: in platte tekst verdwijnen de URL's van links
volledig.

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
