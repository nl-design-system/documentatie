<!-- @license CC0-1.0 -->

Een goed afgestelde regelafstand zorgt ervoor dat het oog op een vloeiende manier het einde van een regel kan koppelen aan het begin van de volgende. Regelafstand wordt ook wel `line-height` of ‘Leading’ genoemd.

![Paragrafen met verschillende regelaftanden. De eerste te kort, de tweede te lang, de derde goed. Bij de eerste twee paragrafen staat een rood kruis.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_regelafstand.png)

Standaard gebruiken browsers een `line-height` van circa `1.2`, maar voor veel mensen is tekst met een hogere `line-height` beter leesbaar. De ideale `line-height` hangt af van verschillende factoren (lettertype, lettergrootte, regellengte, etc.) maar met een `line-height` tussen `1.5` en `2.0` zit je goed. Groter dan `2.0` wordt minder leesbaar.

We gebruiken geen unit notatie zoals `px` of `pt` voor `line-height`. Dit is met opzet. Op deze manier schaalt de `line-height` keurig mee met elke lettergrootte.

Kleinere teksten hebben een ruimere `line-height` nodig. Grotere teksten zoals Kopteksten ofwel ‘Headings’ komen vaak weg met een compactere `line-height`.

In Figma is het niet mogelijk om `line-height` zonder unit notatie toe te passen. Daarom maken we binnen Figma gebruik van een percentage als unit (`1.5` = `150%`). Deze vertaling wordt gedaan op basis van het JSON-bestand dankzij Style Dictionary.
