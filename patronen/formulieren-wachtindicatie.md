# Richtlijnen voor formulieren: Wachtindicatie

_Status: **In ontwikkeling**_

Het kan helpen gebruikers te laten weten wanneer ze moeten wachten. Het maakt aan hen duidelijk wat er gaande is, geeft feedback op een actie van de gebruiker, of kan de perceptie van de wachttijd verkorten.

## ‘Skeleton loading’

Gebruik skeleton loading alleen voor containers, niet voor individuele formulier componenten.

IBM’s Carbon design system zegt hierover het volgende:

“Only use skeleton states on container-based components like tiles and structured lists or data-based components like data tables and cards. In most cases, action components (e.g. buttons, input fields, checkboxes, toggles) do not need to have a skeleton state.” [^carbon-loading]

## Gebruik een laad component wanneer invoer wordt opgeslagen

![Laad component over de gehele pagina uit het Carbon Design System](https://user-images.githubusercontent.com/248921/142436065-130ccbb7-e98e-405d-bc9f-156ae80c5b8a.png)

Een voorbeeld uit het Carbon Design System van een laad component die over de gehele pagina getoond wordt. [^carbon-loading]

![Laad component op een enkel knop component (animatie)](https://www.carbondesignsystem.com/a12da714d1543a1ebf216983682adb8d/inline-loading-animated.gif)

Een voorbeeld uit het Carbon Design System van een laad component op een enkel knop component. [^carbon-loading]

Het laatste voorbeeld geeft direct feedback aan de gebruiker dat zowel de invoer opgeslagen wordt, en opgeslagen is. Een gebruiker weet hier door dat een actie uitgevoert wordt/is en zo verkom je dat een actie nogmaals door een gebruiker uitgevoerd wordt.

## ‘Progressive loading’: volgorde van het laden van elementen

1. Basisstructuur van de pagina (‘_skeleton_ versie’)
2. Tekst
3. Afbeeldingen, content buiten de viewport, en interactieve componenten

## Referenties

[^carbon-loading]: [Carbon Design System: Patterns - Loading](https://www.carbondesignsystem.com/patterns/loading-pattern/)
