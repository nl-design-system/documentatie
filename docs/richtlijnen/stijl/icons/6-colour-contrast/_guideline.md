<!-- @license CC0-1.0 -->

Iconen nemen vaak de kleur van de bijbehorende tekst over. Zodoende hebben ze, als de tekst het ook heeft, vanzelf voldoende contrast.

![Button met pijl icoon, foutmelding met uitroepteken icoon, en link met potloot icoon. Alle iconen hebben dezelfde kleur als de bijbehorende teksten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_kleuren-overnemen.png)

Gebruik je een icoon zonder tekst? Of wil je het icoon een andere kleur geven dan de bijbehorende tekst? Houd dan ook rekening met contrast. Voor iconen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter moeten zijn. Tenzij het icoon puur decoratief is.

![Rechter bovenhoek van een modal scherm rechts daarvan een waarschuwing. Sluit icoon van modal scherm is paars. Uitroepteken icoon in waarschuwing is donkergeel. De tekst van de waarschuwing is donkergrijs.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_eigen-kleuren.png)

Iconen zijn een ideaal hulpmiddel om niet alleen op kleur te vertrouwen om een boodschap over te brengen. Denk bijvoorbeeld aan een foutmeldingen of feedback elementen.

![Vier meldingen. Waarschuwingsmelding met uitroepteken in driehoek icoon. Positieve melding met check icoon. Negatieve melding met uitroepteken in cirkel icoon. Informatieve melding met 'i' in cirkel icoon.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_niet-op-kleur-vertrouwen.png)

Wanneer je iconen als SVG gebruikt kun je de iconen kleuren door middel van [`current color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword). Op die manier neemt het icoon de waarde over van de `color` die is toegepast. Hierdoor kleuren je iconen ook netjes mee als iemand gebruik maakt van bijvoorbeeld een donker thema (dark-mode) of Windows High Contrast Mode.

```css
.icon {
  fill: currentColor;
}
```

Let wel; SVG gebruikt `fill`, niet `color` of `background-color`.

![Drie schermen met dezelfde inhoud (onder andere een button met pijl icoon) maar verschillende thema's. Light-mode, dark-mode en high-contrast-mode.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_high-contrast.png)

Soms wordt een icoon gebruikt om een status aan te geven. Denk bijvoorbeeld aan geluid aan/uit zetten of het wel/niet tonen van een wachtwoord. In dit soort gevallen is het belangrijk om niet enkel op kleur te vertrouwen, omdat kleur niet door iedereen op dezelfde manier wordt ervaren. Een afwijking in de vorm van het icoon is dan een oplossing.

![Twee keer een lijstje van twee labels met een icoon ervoor. Links 'Geluid aan' en 'Geluid uit' waarbij een speaker icoon per label van vorm verschilt. Rechts 'Toon wachtwoord' en 'Verberg wachtwoord' waarbij een oog icoon van vorm verschilt.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_iconen_status.png)

## Gerelateerde WCAG Richtlijnen

- [1.1.1 Niet-tekstuele content](/wcag/1.1.1/)
- [1.4.11 Non text contrast](/wcag/1.4.11)
