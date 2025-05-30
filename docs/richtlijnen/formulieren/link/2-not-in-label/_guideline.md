<!-- @license CC0-1.0 -->

# Zet geen link in een label

Een link in een label wordt vaak gebruikt bij het accepteren van bijvoorbeeld het privacybeleid.

Dit is om twee redenen geen goede constructie:

- Een label kan [geen links of buttons elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns) bevatten. Lees hierover meer in de richtlijn [Zet alleen tekst in het label](/richtlijnen/formulieren/labels/alleen-tekst).
- [Screenreaders](/woordenlijst/#screenreader) kunnen struikelen over de combinatie "label en link" en lezen daardoor het label niet goed voor.

Bijvoorbeeld:
Een checkbox met in het label "Ik ga akkoord met het privacybeleid", en de tekst privacybeleid is ook een link.
Dit is geen goede constructie:

```html
<input id="p" type="checkbox" name="privacybeleid" />
<label for="p">Ik ga akkoord met het <a href="#">privacybeleid</a></label>
```

VoiceOver in Safari op Mac OS Sonoma 14 leest als label voor: "Ik ga akkoord met het en nog 1 onderdeel", dat onderdeel is de link.

![Screenshot van uitvoer VoiceOver met de tekst: Ik ga akkoord met het en nog 1 onderdeel, dat onderdeel is de link.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/_img_links-vo-link-in-label.png)

Een link buiten het label plaatsen is een aanbevolen werkwijze, vanuit gebruikersvriendelijk voor screenreadergebruikers en om te voldoen aan de HTML-specificaties.
