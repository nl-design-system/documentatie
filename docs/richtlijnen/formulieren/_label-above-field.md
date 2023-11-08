<!-- @license CC0-1.0 -->

## Zet het label boven het formulierveld

Zet het label boven het formulierveld. Niet ernaast, niet eronder en niet in het formulierveld, maar op de regel boven het formulierveld. Doe dit consequent voor alle formuliervelden. Voor left-to-right talen is het label links uitgelijnd.

Deze plaatsing heeft meerdere voordelen:

- Het biedt voldoende ruimte voor labels van verschillende lengtes. Het kan zijn dat gebruikers vertaalsoftware gebruiken op de pagina, waardoor labels langer of korter kunnen zijn dan je verwacht.
- Dit werkt beter voor gebruikers die de tekst inzoomen.
- Het biedt een natuurlijke ‘scan-lijn’.

Niet doen: het label inconsequent plaatsen in een formulier (visueel en in code)

```html
<label>Wat is je lievelingskleur?</label>
<select name="lievelingskleur">
  <option>Rood</option>
  <option>Blauw</option>
  <option>Wit</option>
</select>

<input type="text" id="dier" name="lievelingsdier" />
<label for="dier">Wat is je lievelingsdier?</label>
```

Waarom is dit belangrijk? Mensen lezen van boven naar beneden en verwachten dat de informatie in die volgorde staat.

Je brein verbindt automatisch wat er bij elkaar is geplaatst, dus zorg er ook voordat het label visueel dicht bij het formulierveld staat. Dan is duidelijk wat bij elkaar hoort.

Plaats labels buiten het formulierveld en niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoond.

Gebruik geen zogenaamde “floating labels”. Deze zijn moeilijker te begrijpen. Zie: [Material Design Text Fields Are Badly Designed in Smashing Magazine](https://www.smashingmagazine.com/2021/02/material-design-text-fields/).
