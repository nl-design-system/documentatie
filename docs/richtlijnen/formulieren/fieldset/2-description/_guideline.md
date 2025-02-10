<!-- @license CC0-1.0 -->

# Descriptions bij een fieldset

Plaats de description onder de legend vlak boven het eerste label/formulierveld. De description kan aan het `fieldset`-element worden gekoppeld met `aria-describedby`.

```html
<fieldset aria-describedby="description-inloggen">
  <legend>Wilt u inloggen?</legend>
  <p id="description-inloggen">Als u inlogt worden uw gegevens al ingevuld en kunnen we u makkelijker helpen.</p>
  [...]
</fieldset>
```

Dit is ook beschreven in bij de [richtlijnen voor descriptions](/richtlijnen/formulieren/descriptions/).
