<!-- @license CC0-1.0 -->

Zorg dat het goed zichtbaar is welk element de toetsenbordfocus heeft, wanneer je door de website navigeert met een toetsenbord of vergelijkbare bediening. Het moet duidelijk te zien zijn waar de toetsenbordfocus zich bevindt.

Een optie is het geven van een outline (focusring). Dit kan via de CSS-properties `outline` of `border`.

Geef de outline :

- een dikte van minimaal 2 [CSS-pixels](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel);
- een kleurcontrast van ten minste 3:1 ten opzichte van de aangrenzende kleuren;
- een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de **gefocuste** en **niet-gefocuste** staat.

Een andere optie is geen outline toepassen, maar het hele element van kleur te laten veranderen.
Bijvoorbeeld een button die van kleur verandert bij toetsenbordfocus. Ook hier geldt een kleurcontrast van ten minste 3:1 tussen dezelfde pixels in de **gefocuste** en **niet-gefocuste** staat.

Voor het NL Design System houden de richtlijnen van WCAG 2.2 **AA** aan, maar we willen we ook voldoen aan dit WCAG-succescriterium 2.4.13 Focusweergave, niveau **AAA**.

Het intact laten van de standaard outline die door een browser wordt geleverd is voldoende voor het WCAG-succescriterium [2.4.7 Focus zichtbaar](/wcag/2.4.7). Maar in de praktijk is deze standaard outline niet altijd duidelijk genoeg. Elke browser hanteert een eigen stijl voor de outline. Hierdoor kun je niet op de standaard browser-outline vertrouwen voor een consistente, goed zichtbare focus.
