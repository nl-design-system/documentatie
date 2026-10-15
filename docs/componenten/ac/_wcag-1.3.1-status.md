<!-- @license CC0-1.0 -->

Koppel de Form Field Status met `aria-describedby` aan het bijbehorende element voor formulierinvoer:

```html
<p><label for="password">Nieuw wachtwoord</label></p>
<p id="description-password">
  Een wachtwoord moet uit minimaal 16 karakters bestaan, waarvan minimaal 1 cijfer en 1 speciaal teken.
</p>
<p id="status-password" role="status">Nog 6 karakters over.</p>
<p><input id="name" aria-describedby="description-password status-password" autocomplete="off" type="text" /></p>
```

NL Design System richtlijnen:

- [Toegankelijke formulieren](/richtlijnen/formulieren/)
