## Feedback voor screenreadergebruikers

We geven je 3 extra manieren om feedback te geven over foutmeldingen voor screenreadergebruikers. Met `aria-required`, `aria-invalid` in het formulierveld en het `<title>` element in de `<head>` van de webpagina.

Door het geven van feedback aan screenreadergebuikers foutmeldingen voldoe je aan het WCAG-succescriterium [3.3.1 Foutidentificatie](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html) (niveau A).

### Gebruik ARIA voor feedback

Screenreaders geven via ARIA aanvullende informatie en feedback aan hun gebruikers. Informatie die nodig is om het formulier goed te gebruiken en te begrijpen.

Twee ARIA-attributen zijn belangrijk voor screenreaderfeedback:

- `aria-required="true"` vertelt dat een veld verplicht is.
- `aria-invalid="true"` vertelt dat een veld niet goed is ingevuld.

Initieel staat de waarde van `aria-invalid` op `false`. Verander bij foutmeldingen de waarde van `true` naar `false`. Eventueel kan het attribuut `aria-invalid` kan ook worden weggelaten totdat de tot validatie is uitgevoerd.

```html
<label for="voorbeeld">Voorbeeld</label>
<input aria-required="true" aria-invalid="false" id="voorbeeld" name="voorbeeld" type="text" />
```

VoiceOver leest voor: "Voorbeeld, vereist, bewerkt tekst".

```html
<label for="voorbeeld">Voorbeeld</label>
<input aria-required="true" aria-invalid="true" id="voorbeeld" name="voorbeeld" type="text" />
```

VoiceOver leest voor: "Voorbeeld, vereist, ongeldige gegevens, bewerk tekst".

### Screenreaderfeedback en focusmanagement na submit

Voor toetsenbord- en screenreadergebruikers is het van belang dat na een submit, de toetsenbordfocus op een logische plek komt.

Aanbevolen werkwijze bij foutmeldingen: Na het verzenden van het formulier verplaatst de zichtbare- en toetsenbordfocus naar de titel van de samenvatting boven het formulier. Bijkomend voordeel is dat de titel dan meteen ook wordt uitgesproken door een screenreader.

Als de gebruiker verder tabt, komt de focus op de eerste foutmelding, die foutmelding is ook een link naar het bijbehorende invoerveld.

Wordt het formulier dynamisch verzonden, zonder page reload, kan er extra screenreaderfeedback nodig zijn via `role="alert"` of `aria-live="assertive"`
Laat niet met ARIA de hele samenvatting voorlezen, alleen de titel van de samenvatting zelf.

Een voorbeeld van hoe dit op te zetten, met gebruik van screenreaderfeedback is [How to make inline error messages accessible](https://hidde.blog/how-to-make-inline-error-messages-accessible/) van Hidde de Vries.

### Update het `<title>` element in de `<head>`

De inhoud van het `<title>` element is het eerste wat een screenreader voorleest bij het inladen van een webpagina.

Je kunt hier dus waardevolle informatie kwijt zoals:

- een formulier heeft 2 foutmeldingen;
- bij welke stap je bent in een formulier met meerdere stappen;
- een formulier is succesvol verzonden.

Bijvoorbeeld:

```html
<head>
  <title>Het formulier is niet verzonden, er zijn 2 foutmeldingen - Contact - Gemeente Voorbeeld</title>
  [...]
</head>
```

Of:

```html
<head>
  <title>Fout: Stap 1 van 4: Uw vraag - Gemeente Voorbeeld</title>
  [...]
</head>
```

Of:

```html
<head>
  <title>Uw vraag is met succes verstuurd - Gemeente Voorbeeld</title>
  [...]
</head>
```

Door een beschrijvend `<title>`-element te geven voldoe je aan het WCAG-succescriterium [2.4.2 Paginatitel](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html) (niveau A).
