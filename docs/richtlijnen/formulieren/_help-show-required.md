<!-- @license CC0-1.0 -->

## Vermeld duidelijk of een veld verplicht is

Laat bezoekers niet raden, maar wees duidelijk welke velden verplicht zijn. Dit kan op een aantal manieren:

- Door boven of voorafgaand aan het formulier te vermelden dat alle velden verplicht zijn, mits anders vermeld. Dan kan in het label de tekst '(niet verplicht)' worden opgenomen.
- Door bij de verplichte velden in het label de tekst '(verplicht)' op te nemen.
- Door bij de verplichte velden in het label een asterisk '\*' op te nemen. Leg dan wel boven het formulier uit wat de asterisk betekent. Een asterisk alleen bij het formulierveld is niet voldoende.

Zet eventuele extra uitleg altijd boven het formulier en niet in het formulier. Screenreadergebruiker kunnen extra tekst missen binnen een formulier, als die niet gekoppeld zijn aan een formulierveld.

```html
<p>* betekent verplicht in te vullen.</p>
<form>
  <label for="kleur1">Wat is je lievelingskleur *</label>
  <input type="text" id="kleur1" name="lievelingskleur" aria-required="true" aria-invalid="false" />
  [... etc ...]
</form>
```

```html
<p>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</p>
<form>
  <label for="kleur2">Wat is je lievelingskleur</label>
  <input type="text" id="kleur2" name="lievelingskleur" aria-required="true" aria-invalid="false" />
  <label for="kleur1">Wat is je lievelingsdier (niet verplicht)</label>
  <input type="text" id="dier2" name="lievelingsdier" />
  [... etc ...]
</form>
```

### Screenreaderfeedback

Vertel altijd aan een gebruiker van hulptechnologieën (als screenreaders) dat een veld verplicht is met het ARIA-attribuut `aria-required="true"`.

```html
<form>
  <label for="kleur3">Wat is je lievelingskleur (verplicht)</label>
  <input type="text" id="kleur3" name="lievelingskleur" aria-required="true" aria-invalid="false" />
  [... etc ...]
</form>
```

**`Let op`**: Gebruik liever geen `required` in een invoerveld, dit vereist ook het attribuut [novalidate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate) als attribute op in het `<form>` element.
Dit voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor `aria-required="true"` hoeft dit niet. Alhoewel het gebruik van `required` in plaats van `aria-required` niet fout is, geven we hierom de voorkeur aan `aria-required`.

```html
<form novalidate>
  <label for="kleur4">Wat is je lievelingskleur (verplicht)</label>
  <input type="text" id="kleur4" name="lievelingskleur" required aria-invalid="false" />
  [... etc ...]
</form>
```

Door te helpen fouten te voorkomen voldoe van aan WCAG [Succescriterium 3.3.2 Labels of instructies](https://www.w3.org/Translations/WCAG21-nl/#labels-of-instructies) (niveau A).
