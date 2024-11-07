<!-- @license CC0-1.0 -->

Als het label van de link alleen uit een icoon of logo bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de link een naam heeft die duidelijk maakt waar de link voor dient.

Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor de afbeelding is niet nodig als er naast de afbeelding ook tekst in de link staat die uitlegt waar de link naartoe gaat. Een `img` kan dan een leeg `alt`-attribuut krijgen (`alt=""`).

Is het toch gewenst om alleen een icoon of logo te tonen, hou dan rekening met het volgende.

Een `img` met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de toegankelijke naam van de link:

```html
<a href="url">
  <img src="ideal.svg" alt="iDeal" />
</a>
```

Maar duidelijker is:

```html
<a href="url"> Betaal met iDeal <img src="ideal.svg" alt="" /> </a>
```

Logius geeft opmaakrichtlijnen voor inlogmiddelknoppen in de [Stijlhandleiding aansluiten Toegang](https://www.logius.nl/domeinen/toegang/stijlhandleiding-aansluiten-toegang).

NL Design System richtlijnen:

- [Gebruik SVG voor iconen en geen font](/richtlijnen/stijl/iconen/gebruik-svg)
- [Toepassen van een SVG in code](/richtlijnen/stijl/iconen/gebruik-svg#toepassen-van-een-svg-in-code)
