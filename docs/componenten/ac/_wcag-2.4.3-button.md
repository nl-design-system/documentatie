<!-- @license CC0-1.0 -->

De focusvolgorde op de pagina en na het activeren van een Button moet logisch zijn. Zorg dat het voorspelbaar is waar de toetsenbordfocus heen gaat na het activeren van een knop.

Over het algemeen geldt: wanneer een button nieuwe content opent, zoals een dialoogvenster of een menu, verplaats je de toetsenbordfocus naar een logische plek in de nieuwe content. Bijvoorbeeld: Na het openen van een 'Menu' button verplaatst de toetsenbordfocus naar het eerste menu-item. Nadat de bezoeker de nieuwe content weer heeft gesloten verplaatst de toetsenbordfocus zich weer terug naar de 'Menu' button.

Plaats interactieve elementen op een logische plek in de DOM en vermijd het gebruik van `tabindex="1"` en hoger. Hiermee pas je de natuurlijke focusvolgorde op de pagina aan, waardoor fouten in de focusvolgorde kunnen ontstaan.

NL Design System richtlijnen:

- [Toetsenbordbediening van een button](/richtlijnen/formulieren/buttons/toetsenbordbediening)
- [Disabled submitbuttons](/richtlijnen/formulieren/buttons/disabled-submitbuttons/)
