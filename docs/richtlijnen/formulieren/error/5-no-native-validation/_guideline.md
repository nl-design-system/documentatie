<!-- @license CC0-1.0 -->

# Gebruik geen HTML-formuliervalidatie

![Voorbeeld van HTML-validatie, een ballonnetje boven het formulierveld met de tekst: vul dit veld in](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulier_html_validatie.png).

De meeste browsers kunnen zelf controleren of een veld is ingevuld. Dit gebeurt als het HTML-attribuut `required` in het formulierveld staat.

```html
<input type="text" id="voorbeeld" name="voorbeeld" required />
```

Dit type foutafhandeling geeft onvoldoende informatie. In veel browsers wordt niet aan alle gebruikers overgebracht dat het veld verplicht is, en mist uitleg wanneer niet wordt voldaan een een opgegeven `pattern`. Zie ook: [<span lang="en">Avoid default field validation</span>](https://adrianroselli.com/2019/02/avoid-default-field-validation.html) van Adrian Roselli.

Wanneer er voldoende tijd en kennis is, heeft het de voorkeur om zelf client-side validatie toe te voegen.

Om specifiek aan hulptechnologieën te communiceren dat een veld verplicht is, kan `aria-required` worden gebruikt. Als je alleen `aria-required` gebruikt, zal de browser niet zelf valideren of feedback geven.

Het toegankelijk maken van foutmeldingen is nodig om te voldoen aan het [WCAG-succescriterium 3.3.1 Foutidentificatie](/wcag/3.3.1/) (niveau A).

### Progressive enhancement

Alhoewel we HTML-formuliervalidatie afraden en niet als eindoplossing zien, kan het nuttig zijn om te gebruiken als fallback bij een slechte internetverbinding als er nog geen JavaScript beschikbaar is.

Deze optie geldt alleen voor formulieren waarbij de foutmeldingen worden afgehandeld door JavaScript.

De opzet is dan als volgt:

- Bij de formuliervelden wordt het attribuut `required` gebruikt in plaats van 'aria-required`.
- Zodra de JavaScript wordt ingeladen wordt meteen het attribuut `novalidate` toegevoegd aan het `<form>` element om de HTML-validatie uit te schakelen.

Dan voorkom je dat gebruikers met een slechte internetverbinding niet op tijd worden geïnformeerd over fouten in het formulier.

Dit is een optie en geen vereiste. Uiteindelijk is een op maat gemaakte server side eind-validatie van de formuliervelden het meest betrouwbaar en toegankelijk en daardoor de richtlijn.
