## Gebruik autocomplete als er een waarde voor is gedefinieerd

WCAG bevat een volledige [lijst van waarden voor autocomplete](https://www.w3.org/Translations/WCAG21-nl/#input-purposes). Gebruik altijd een autocomplete-attribuut als er een waarde voor een formulierveld gedefinieerd is in deze lijst.

Jules Ernst van 200 OK heeft van deze lijst een [Nederlandse interpretatie](https://www.200ok.nl/tips/autocomplete/) gemaakt.

Belangrijk bij het gebruik van autocomplete is dat het label altijd zichtbaar moet blijven, de gebruiker moet weten of de juiste waarde in het juiste veld is ingevoerd. Zie hiervoor de [richtlijnen over labels](/richtlijnen/formulieren/labels).

Het gebruik van het juiste `autocomplete`-attribuut is nodig om te voldoen aan het WCAG-succescriterium [1.3.5 Identificeer het doel van de input](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) (niveau AA).

**Let op**: [aria-autocomplete](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) heeft een ander doel en ander gebruik dan autocomplete bij formuliervelden. `aria-autocomplete` wordt gebruikt in webcomponenten, bijvoorbeeld om aan te geven dat er suggesties zijn bij zoekresultaten.
