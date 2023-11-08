<!-- @license CC0-1.0 -->

## De zichtbare naam moet overeenkomen met de toegankelijke naam

Gebruikers van voice recognition software kunnen een formulierveld focus geven door de naam uit te spreken.

Als de toegankelijke naam niet begint met de zichtbare naam werkt dit niet goed. Dit kan gebeuren bij het verkeerd gebruik van het attribute `aria-label`. Met `aria-label` kan een formulierveld ook een toegankelijke naam worden gegeven, onzichtbaar voor de ziende gebruiker.

Niet doen: Alleen een placeholder gebruiken om te laten zien wat de gebruiker moet invullen, terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.

```html
<!-- Dit is foute code, niet kopiëren -->
<input type="text" name="lievelingskleur" aria-label="Vul een kleur in" placeholder="Wat is je lievelingskleur" />
```

Niet doen: Alleen losse tekst gebruiken om te laten zien wat de gebruiker moet invullen, terwijl de onzichtbare toegankelijke naam een hele andere inhoud heeft.

```html
<!-- Dit is foute code, niet kopieren -->
<div>Zoek</div>
<input type="search" name="trefwoord" aria-label="Trefwoord" />
```

Door te zorgen dat zichtbare naam en toegankelijke naam overeenkomen, voldoe je aan een WCAG-criterium: [2.5.3: Label in naam (Niveau A)](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html).
