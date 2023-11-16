<!-- @license CC0-1.0 -->

## Plaats de link boven het gerelateerde formulierveld

Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is.

Dit is een aanbevolen werkwijze, gebaseerd op gebruikersonderzoek.

**Doen:** De link boven het gerelateerde invoerveld plaatsen.
<div style={{border: 2 + 'px solid #16ac16', padding: 10 + 'px'}}>
  <div><a href="#">Voorwaarden vrijwilligerswerk</a>.</div>
  <input type="checkbox" name="vrijwilliger" id="vrijwilliger" /> <label for="vrijwilliger">Ik wil vrijwilliger worden</label>
</div>

```html
<p><a href="#">Voorwaarden vrijwilligerswerk</a>.</p>
<input type="checkbox" name="vrijwilliger" id="vrijwilliger" />
<label for="vrijwilliger">Ik wil vrijwilliger worden</label>
```

**Niet doen**: De link onder het gerelateerde invoerveld plaatsen.
<div style={{border: 2 + 'px solid #c00', padding: 10 + 'px'}}>
  <input type="checkbox" name="vrijwilliger" id="vrijwilliger" /> <label for="vrijwilliger">Ik wil vrijwilliger worden</label>
  <div><a href="#">Voorwaarden vrijwilligerswerk</a>.</div>
</div>

```html
<!-- Niet kopiëren, dit is de verkeerde volgorde van de HTML. -->
<input type="checkbox" name="vrijwilliger" id="vrijwilliger" />
<label for="vrijwilliger">Ik wil vrijwilliger worden</label>
<p><a href="#">Voorwaarden vrijwilligerswerk</a>.</p>
````





