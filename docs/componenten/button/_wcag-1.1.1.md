<!-- @license CC0-1.0 -->

Als het label van een button uit een afbeelding bestaat, dan heeft deze afbeelding een goed tekstalternatief, zodat de button een naam heeft die duidelijk maakt waar de button voor dient.

Het beste is om altijd visueel een tekst te tonen naast of onder het icoon. Iconen zijn immers niet altijd voor iedereen duidelijk. Een tekstalternatief voor het icoon is niet nodig als er tekst in beeld is. Een `img` kan dan een leeg `alt`-attribuut krijgen (`alt=""`).

Is het toch gewenst om alleen een icoon te tonen, hou dan rekening met het volgende.

##### In de code

Een `img` met een alt-attribuut is een robuuste manier om een alternatieve tekst toe te voegen. De waarde van het alt-attribuut vormt de naam van de button:

```html
<button>
  <img src="trashcan.svg" alt="Delete" />
</button>
```

Een andere manier is een svg in de button op te nemen, samen met een visueel verborgen tekst die de naam van de button vormt :

```html
<button>
  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">
    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>
  </svg>
  <span class="visually-hidden">Delete</span>
</button>
```

##### NL Design System richtlijnen:

- [Afbeeldingen als buttons](/richtlijnen/formulieren/buttons/afbeelding-als-button)
- [De toegankelijke naam van een button](/richtlijnen/formulieren/buttons/toegankelijke-naam)
- [Toepassen van een SVG in code](/richtlijnen/stijl/iconen/gebruik-svg#toepassen-van-een-svg-in-code)
