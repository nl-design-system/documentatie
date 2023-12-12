## Vermeld duidelijk als een veld verplicht is

Laat bezoekers niet raden, maar wees duidelijk welke velden verplicht zijn. Dit kan op een aantal manieren:

- Door boven het formulier te vermelden dat alle velden verplicht zijn, mits anders vermeld. Dan kan in het label de tekst (optioneel) worden gezet.
- Door bij de verplichte velden in het label de tekst (verplicht) op te nemen.
- Met een asterisk bij het label. Leg dan wel boven het formulier uit wat het sterretje betekent. Een sterretje alleen bij het formulierveld is niet voldoende.

Zet eventuele extra uitleg altijd boven het formulier en niet in het formulier. Screenreadergebruiker kunnen extra tekst missen in een formulier, als die niet is gekoppeld is aan een formulierveld.

```html
<p>* betekent verplicht in te vullen.</p>
<form>
  <label for="kleur1">Wat is je lievelingskleur *</label>
  <input type="text" id="kleur1" name="lievelingskleur" aria-required="true" aria-invalid="false" />
  [... etc ...]
</form>
```

### Screenreaderfeedback

Vertel altijd aan een screenreadergebruiker dat een veld verplicht is met het ARIA-atribuut `aria-required="true"` of met het HTML%-attribuut `required`.

```html
<form>
  <label for="kleur2">Wat is je lievelingskleur (verplicht)</label>
  <input type="text" id="kleur2" name="lievelingskleur" aria-required="true" aria-invalid="false" />
  [... etc ...]
</form>
```

**`Let op`**: Gebruik je `required` in een invoerveld, neem dan ook [novalidate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate) als attribute op in het `<form>` element. Dit voorkomt dat de HTML5-formuliervalidatie in werking treedt. Voor `aria-required="true"` hoeft dit niet.

```html
<form novalidate>
  <label for="kleur3">Wat is je lievelingskleur(verplicht)</label>
  <input type="text" id="kleur3" name="lievelingskleur" required aria-invalid="false" />
  [... etc ...]
</form>
```

Door te helpen fouten te voorkomen voldoe van aan WCAG [Succescriterium 3.3.2 Labels of instructies](https://www.w3.org/Translations/WCAG21-nl/#labels-of-instructies), niveau A.
