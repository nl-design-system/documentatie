<!-- @license CC0-1.0 -->

De link heeft een rol van `link`.

HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een `a`-element als je een link nodig hebt:

```html
<a href="url">Contact</a>
```

Het is mogelijk om met ARIA een `role="link"` toe te voegen aan een ander element dan een `a`, maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc. Let erop dat je hiervoor JavaScript nodig hebt.
