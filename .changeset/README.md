# Changeset sjabloon

Kopieer en plak het onderstaande sjabloon. Je kunt hiervoor de kopieer knop linksboven in het template gebruiken.

```markdown
---
"@nl-design-system-unstable/documentation": major
---

Beschrijving
```

Vul tussen de twee sets `---` in voor welke packages je allemaal veranderingen hebt doorgevoerd. Zet elk package tussen
dubbele aanhalingstekens op een nieuwe regel.

Gebruik:

- `"@nl-design-system-unstable/documentation": major` voor breaking changes
- `"@nl-design-system-unstable/documentation": minor` voor nieuwe features
- `"@nl-design-system-unstable/documentation": patch` voor bug fixes

Beschrijf na de tweede set `---` welke veranderingen je hebt doorgevoerd.

Lees de [documentatie][1] op nldesignsystem.nl voor uitleg over de verschillende soorten veranderingen.

Geef bij breaking changes aan **wat** er veranderd is, **waarom** de verandering nodig was en **hoe** gebruikers van het
package hun code moeten aanpassen.

[1]: https://nldesignsystem.nl/handboek/designer/overzicht
