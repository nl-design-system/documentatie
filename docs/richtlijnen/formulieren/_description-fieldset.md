## Fieldset: Plaats descriptions tussen legend en eerste item

Radiobuttons en checkboxes worden gegroepeerd in een fieldset. De "vraag" staat in de legend. Plaats de description dan onder de legend vlak boven het eerste label/formulierveld. De description kan aan de fieldset worden gekoppeld.
[Voorbeeld visueel en in code]

<!-- prettier-ignore -->
```html
<fieldset aria-describedby="error-inloggen">
    <legend >Wilt u inloggen?</legend>
    <div id="error-inloggen">Kies of u wilt inloggen.</div>
    <label for="inloggen-ja">Ja</label>
    <input
        id="inloggen-ja"
        type="radio"
        name="inloggen"
        value="ja"
    />
    <label for="inloggen-nee">Nee</label>
    <input
        id="inloggen-nee"
        type="radio"
        name="inloggen"
        value="nee"
    />
</fieldset>
```
