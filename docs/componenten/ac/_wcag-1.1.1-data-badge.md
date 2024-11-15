<!-- @license CC0-1.0 -->

Als de Data Badge een icoon bevat, of een icoon bevat dat extra informatie geeft naast de tekst, dan heeft dit icoon een goed tekstalternatief, zodat de informatie ook beschikbaar is voor mensen die de de afbeelding niet kunnen zien.

Het beste is om altijd visueel een tekst te tonen naast of onder een icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor het icoon is niet nodig als er tekst in beeld is die hetzelfde betekent. Een `img` kan dan een leeg `alt`-attribuut krijgen (`alt=""`).

Is het toch gewenst om alleen een icoon of een extra informatief icoon te tonen, hou dan rekening met het volgende.

Een `img` met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen.

```html
<span><img src="klok.svg" alt="tijd" />12.45</span>
```

NL Design System richtlijnen:

- [Gebruik SVG voor iconen en geen font](/richtlijnen/stijl/iconen/gebruik-svg)
- [Toepassen van een SVG in code](/richtlijnen/stijl/iconen/gebruik-svg#toepassen-van-een-svg-in-code)
