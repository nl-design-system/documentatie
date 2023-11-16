<!-- @license CC0-1.0 -->

## Zet geen link in een label

Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid. Zoals:
Alt: checkbox met in het label Ik ga akkoord met het privacybeleid, en de tekst privacybeleid is een link.

Dit is om twee redenen geen goede constructie:
- Een label kan [geen links of buttons elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns) bevatten. Lees hierover meer in de richtlijn [Labels].
- Screenreaders kunnen struikelen over de combinatie “label en link” en lezen daardoor het label niet goed voor.

Bijvoorbeeld:
Een checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.

<div style={{border: 2 + 'px solid #c00', padding: 10 + 'px'}}>
  <input id="p" type="checkbox" name="privacybeleid" />
  <label for="p">
    Ik ga akkoord met het <a href="#">privacybeleid</a>
  </label>
</div>

VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.

![Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link.](_img_links-vo-link-in-label.png)

Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties.

**Doen:** Heel basaal, de link vlak boven het formulierveld plaatsen.
<div style={{border: 2 + 'px solid #16ac16', padding: 10 + 'px'}}>
  <p>
    <a href="#">Privacybeleid gemeente Voorbeeld</a>.
  </p>
  <input id="pb" type="checkbox" name="privacybeleid" />
  <label for="pb">Ik ga akkoord met het privacybeleid</label>
</div>

```html
<p>
  <a href="#">Privacybeleid gemeente Voorbeeld</a>.
</p>
<input id="pb" type="checkbox" name="privacybeleid" />
<label for="pb">Ik ga akkoord met het privacybeleid</label>
```

**Doen:** Groeperen met een fieldset en de informatie koppelen aan het formulierveld met een aria-describedby.
<div style={{border: 2 + 'px solid #16ac16', padding: 10 + 'px'}}>
<fieldset>
  <legend>Privacystatement gemeente Voorbeeld</legend>
  <p id="desc">
    Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen.
    Lees onze <a href="#" target="_blank">privacybeleid (opent in een nieuw venster) </a>.
  </p>
  <input type="checkbox" aria-describedby="desc" id="pvs" />
  <label for="pvs">Ik ga akkoord met het privacybeleid.</label>
</fieldset>
</div>

```html
<fieldset>
  <legend>Privacystatement gemeente Voorbeeld</legend>
  <p id="desc">
    Wij hebben jouw toestemming nodig om je e-mailadres op te slaan zodat we je onze nieuwsbrief kunnen sturen.
    Lees onze <a href="#" target="_blank">privacybeleid (opent in een nieuw venster) </a>.
  </p>
  <input type="checkbox" aria-describedby="desc" id="pvs">
  <label for="pvs">Ik ga akkoord met het privacybeleid.</label>
</fieldset>
```

**Niet doen:** Link in het label plaatsen.
<div style={{border: 2 + 'px solid #c00', padding: 10 + 'px'}}>
  <input id="privacybeleid" type="checkbox" name="privacybeleid" />
  <label for="privacybeleid">
    Ik ga akkoord met het <a href="#">privacybeleid</a>
  </label>
</div>

```html
<!-- Dit is foute code, niet kopiëren. -->
<input id="privacybeleid" type="checkbox" name="privacybeleid" />
<label for="privacybeleid">
   Ik ga akkoord met het <a href="#">privacybeleid</a>
</label>
```

**Niet doen:** Link samen met het invoerveld in een impliciet label plaatsen.
<div style={{border: 2 + 'px solid #c00', padding: 10 + 'px'}}>
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  Ik ga akkoord met het <a href="#">privacybeleid</a>
</label>
</div>

```html
<!-- Dit is foute code, niet kopiëren. -->
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  Ik ga akkoord met het <a href="#">privacybeleid</a>
</label>
```



