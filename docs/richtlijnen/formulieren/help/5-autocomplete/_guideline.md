<!-- @license CC0-1.0 -->

# Autocomplete in een formulier

Het [HTML-attribuut `autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) vertelt aan de browser welke waarde verwacht wordt bij het invullen van een formulierveld. Browsers kunnen voor gebruikers onthouden wat ze eerder hebben ingevuld.

Die opgeslagen waarden kunnen browsers gebruiken om velden vast in te vullen, door het `autocomplete` attribuut weten ze welke velden dat moeten zijn. Gegevens zoals namen, adres en telefoonnummer kunnen dan automatisch worden ingevuld door de browser.

Autocomplete is fijn voor gebruikers die moeite hebben met typen, problemen hebben met hun geheugen en voor gebruikers die moeite hebben met taal.

## Gebruik autocomplete als er een waarde voor is gedefinieerd

WCAG bevat een volledige [lijst van waarden voor autocomplete](https://www.w3.org/Translations/WCAG22-nl/#input-purposes). Gebruik altijd een autocomplete-attribuut als er een waarde voor een formulierveld gedefinieerd is in deze lijst.

Jules Ernst van 200 OK heeft van deze lijst een [Nederlandse interpretatie](https://www.200ok.nl/tips/autocomplete/) gemaakt.

Belangrijk bij het gebruik van autocomplete is dat het label altijd zichtbaar moet blijven, de gebruiker moet weten of de juiste waarde in het juiste veld is ingevoerd. Zie hiervoor de richtlijn [Zorg ervoor dat het label altijd zichtbaar is](/richtlijnen/formulieren/labels/altijd-zichtbaar).

Het gebruik van het juiste `autocomplete`-attribuut is nodig om te voldoen aan het [WCAG-succescriterium 1.3.5 Identificeer het doel van de input](/wcag/1.3.5/) (niveau AA).

**Let op**: [aria-autocomplete](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) heeft een ander doel en ander gebruik dan autocomplete bij formuliervelden. `aria-autocomplete` wordt gebruikt in webcomponenten, bijvoorbeeld om aan te geven dat er suggesties zijn bij zoekresultaten.
