## Plaats descriptions tussen label en formulierveld

Plaats alle descriptions op een consistente plek, liefst tussen het label en het formulierveld. Omdat de gebruiker van boven naar beneden leest, komt deze informatie na het label op een logisch moment in de leesvolgorde.

[Voorbeeld alleen visueel]

<!-- prettier-ignore -->
```html
<label for="wachtwoord">Nieuw wachtwoord</label>
<div id="description-wachtwoord">
    Kies een wachtwoord van minimaal 8 karakters lang.
</div>
<input
    id="wachtwoord"
    type="password"
    name="nieuw-wachtwoord"
    aria-describedby="description-wachtwoord"
/>
```

Ook is dan de kans dat de informatie overlapt met bijvoorbeeld browserpopups kleiner. Lees hiervoor het artikel [Avoid Messages Under Fields](https://adrianroselli.com/2017/01/avoid-messages-under-fields.html) van Adrian Roselli.

[Fout voorbeeld van inconsequente plek]

<!-- prettier-ignore -->
```html
<label for="wachtwoord">Nieuw wachtwoord</label>
<input
    id="wachtwoord"
    type="password"
    name="nieuw-wachtwoord"
    aria-describedby="description-wachtwoord"
/>
<div id="description-wachtwoord">
    Kies een wachtwoord van minimaal 8 karakters lang.
</div>
```

[Fout voorbeeld van inconsequente plek]

Fout **visueel** Voorbeeld van een description onder de iput.

<!-- prettier-ignore -->
```html
<label for="wachtwoord">Nieuw wachtwoord</label>
<input
    id="wachtwoord"
    type="password"
    name="nieuw-wachtwoord"
    aria-describedby="description-wachtwoord"
/>
<div id="description-wachtwoord">
    Kies een wachtwoord van minimaal 8 karaters lang.
</div>
```

Fout **visueel** voorbeeld van een description boven de input en foutmelding eronder.

<!-- prettier-ignore -->
```html
<label for="wachtwoord">Nieuw wachtwoord</label>
<div id="description-wachtwoord">
    Kies een wachtwoord van minimaal 8 karaters lang.
</div>

<input
    id="wachtwoord"
    type="password"
    name="nieuw-wachtwoord"
    aria-describedby="description-wachtwoord error-wachtwoord"
/>
<div id="error-wachtwoord">
    Je gekozen wachtwoord is te kort.
</div>
```
