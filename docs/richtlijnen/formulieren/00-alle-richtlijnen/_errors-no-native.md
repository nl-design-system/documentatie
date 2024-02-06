## Gebruik geen HTML-formuliervalidatie

![Voorbeeld van HTML-validatie, een ballonnetje boven het formulierveld met de tekst: vul dit veld in](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_html_validatie.png).

De meeste browsers kunnen zelf controleren of een veld is ingevuld. Dit gebeurt als het HTML-attribuut `required` in het formulierveld staat.

```html
<input type="text" id="voorbeeld" name="voorbeeld" required />
```

Dit type foutafhandeling geeft onvoldoende informatie. In veel browsers wordt niet aan alle gebruikers overgebracht dat het veld verplicht is, en mist uitleg wanneer niet wordt voldaan een een opgegeven `pattern`. Zie ook: [Avoid default field validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html) van Adrian Roselli.

Wanneer er voldoende tijd en kennis is, heeft het de voorkeur om zelf client-side validatie toe te voegen.

Om specifiek aan hulptechnologieën te communiceren dat een veld verplicht is, kan `aria-required` worden gebruikt. Als je alleen `aria-required` gebruikt, zal de browser niet zelf valideren of feedback geven.

Het toegankelijk maken van foutmeldingen is nodig om te voldoen aan het WCAG-succescriterium [3.3.1 Foutidentificatie](https://www.w3.org/Translations/WCAG21-nl/#foutidentificatie) (niveau A).
