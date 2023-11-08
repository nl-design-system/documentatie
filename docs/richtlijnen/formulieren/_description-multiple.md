## Meerdere descriptions koppelen

Je kunt meerdere descriptions koppelen aan een formulierveld. Bijvoorbeeld als er een ook nog een foutmelding is. Geef dan `aria-describedby` twee waardes (IDs), mee gescheiden door een spatie.

Voorbeeld van extra informatie plus een foutmelding (visueel en in code).

```html
<label for="wachtwoord">Nieuw wachtwoord</label>
<div id="description-wachtwoord">Kies een wachtwoord van minimaal 8 karakters lang.</div>
<div id="error-wachtwoord">Je gekozen wachtwoord is te kort.</div>
<input
  id="wachtwoord"
  type="password"
  name="nieuw-wachtwoord"
  aria-describedby="description-wachtwoord error-wachtwoord"
/>
```

De volgorde van de ID's meegegeven in de `aria-describedby` is de volgorde waarin het voorgelezen wordt.
