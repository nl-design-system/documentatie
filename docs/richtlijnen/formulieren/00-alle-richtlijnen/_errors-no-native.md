## Gebruik geen HTML-formuliervalidatie

![Voorbeeld van HTML validatie, een ballonntje boven het formulierveld met "vul dit veld in"](https://hackmd.io/_uploads/rJZg89H8T.png)

De meeste browsers kunnen zelf controleren of een veld is ingevuld. Dit gebeurt als het HTML attribuut `required` in het formulierveld staat.

Dit type foutafhandeling geeft onvoldoende informatie en is niet altijd toegankelijk genoeg voor screenreadergebruikers.

```html
<input type="text" id="voorbeeld" name="voorbeeld" required />
```

De richtlijn [Voorkom fouten](richtlijnen/formulieren/alle-richtlijnen/help-de-gebruiker) gaat hier dieper op in.

Alhoewel het gebruik van `required` in plaats van `aria-required` niet fout is, geven we de voorkeur aan `aria-required`. Met `aria-required` wordt het veld voor hulptechnologieën, zoals een screenreader, gemarkeerd als verplicht, maar gaat de browser niet zelf valideren.

Door het toegankelijk maken van foutmeldingen voldoe je aan het WCAG-succescriterium [3.3.1 Foutidentificatie](https://www.w3.org/Translations/WCAG21-nl/#foutidentificatie) (niveau A).
