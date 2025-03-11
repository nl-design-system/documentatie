<!-- @license CC0-1.0 -->

Het onderdeel van de gebruikersinterface waarmee een bezoeker de accordion opent, heeft de rol `button`.

Opties:

- Wanneer een details en summary combinatie gebruikt wordt, heeft het summary element voor hulpsoftware automatisch de juiste rol.
- Een HTML `button` heeft ook automatisch de juiste rol. Het is mogelijk om met ARIA een `role=button` toe te voegen aan een ander element dan een `button`, maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc.

De staat van de accordion (open of dicht) moet ook beschikbaar zijn voor hulpsoftware.

Opties:

- Wanneer een details en summary combinatie gebruikt wordt, gaat dit automatisch goed.
- Bij een knop moet de staat worden aangegeven met het aria-expanded attribuut.

```html
<button aria-expanded="true">Menu</button>
```

Let erop dat je hiervoor JavaScript nodig hebt en zorg ervoor dat `aria-expanded` de waarde `false` krijgt wanneer het menu weer is ingeklapt.

NL Design System richtlijnen:

- [De toegankelijke naam van een button](/richtlijnen/formulieren/buttons/toegankelijke-naam)
