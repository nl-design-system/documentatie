<!-- @license CC0-1.0 -->

# Geef feedback aan screenreadergebruikers

We geven je 3 extra manieren om feedback te geven over foutmeldingen voor screenreadergebruikers. Met `aria-required`, `aria-invalid` in het formulierveld en het `<title>` element in de `<head>` van de webpagina.

Het geven van feedback aan screenreadergebuikers over foutmeldingen is nodig om te voldoen aan de WCAG-succescriteria:

- [1.3.1 Info en relaties](/wcag/1.3.1) (niveau A).
- [3.3.1 Foutidentificatie](/wcag/3.3.1/) (niveau A).

## Gebruik ARIA voor feedback

Gebruik ARIA om aanvullende informatie en feedback te geven aan screenreadergebruikers. Informatie die nodig is om het formulier goed te gebruiken en te begrijpen.

Twee ARIA-attributen zijn belangrijk voor screenreaderfeedback:

- `aria-required="true"` vertelt dat een veld verplicht is.
- `aria-invalid="true"` vertelt dat een veld niet goed is ingevuld.

Initieel staat de waarde van `aria-invalid` op `false`. Verander bij foutmeldingen de waarde van `false` naar `true`. Eventueel kan het attribuut `aria-invalid` kan ook worden weggelaten totdat de validatie is uitgevoerd.

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

## Screenreaderfeedback en focusmanagement na submit

Voor toetsenbord- en screenreadergebruikers is het van belang dat na een submit, de visuele- en toetsenbordfocus op een logische plek komt.

## Update het `<title>` element in de `<head>`

De inhoud van het `<title>` element is het eerste wat een screenreader voorleest bij het inladen van een webpagina.

Je kunt hier dus waardevolle informatie kwijt zoals:

- een formulier heeft 2 foutmeldingen;
- bij welke stap je bent in een formulier met meerdere stappen;
- een formulier is succesvol verzonden.

Bijvoorbeeld:

```html
<head>
  <title>2 foutmeldingen - Stap 1 van 4: Uw vraag - Gemeente Voorbeeld</title>
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

Het geven van een beschrijvend `<title>`-element is nodig om te voldoen aan het [WCAG-succescriterium 2.4.2 Paginatitel](/wcag/2.4.2) (niveau A).
