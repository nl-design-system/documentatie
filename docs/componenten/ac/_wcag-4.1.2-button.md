<!-- @license CC0-1.0 -->

De button heeft een rol van `button` en een toegankelijke naam die duidelijk maakt waar de button voor dient. Ook is de toestand (_state_) duidelijk en door de gebruiker te veranderen met hulpsoftware.

HTML-elementen hebben een impliciete rol. Maak daar gebruik van. Kies daarom een `button`-element als je een button nodig hebt:

```html
<button>Menu</button>
```

Het is mogelijk om met ARIA een `role=button` toe te voegen aan een ander element dan een `button`, maar dit is niet aan te raden. Heb je het absoluut nodig, zorg er dan voor dat het gekozen element ook voldoet aan de verwachte toetsenbordinteractie, focusstijl, etc.

ARIA is wel goed te gebruiken als je de _state_ moet aangeven. Hiervoor bestaat geen HTML-attribuut. Bijvoorbeeld bij een uitgeklapte menuknop:

```html
<button aria-expanded="true">Menu</button>
```

Let erop dat je hiervoor JavaScript nodig hebt en zorg ervoor dat `aria-expanded` de waarde `false` krijgt wanneer het menu weer is ingeklapt.

Zorg er daarnaast voor dat het `type`-attribuut kloppend is bij de rol van de knop, zoals `"submit"` voor een verzendknop en `"reset"` voor een resetknop.

Vermijd het gebruik van `aria-busy` op interactieve elementen zoals knoppen, bijvoorbeeld om aan te geven dat een formulier bezig is met verzenden. Dit attribuut voorkomt namelijk dat veranderingen in het element en geneste child-elementen beschikbaar zijn voor [screenreaders](/woordenlijst/#screenreader). Dat is handig binnen live-regions wanneer de statusupdate afhankelijk is van een proces, maar niet op interactieve elementen.

Gebruik in plaats daarvan `aria-disabled` met `tabindex="0"` op de knop en pas de visuele en toegankelijke naam aan, bijvoorbeeld naar 'Aan het verzenden'. Gebruik vervolgens een live-region om statusupdates over het succes of falen van het verzenden van het formulier aan te geven.

NL Design System richtlijnen:

- [De toegankelijke naam van een button](/richtlijnen/formulieren/buttons/toegankelijke-naam)
- [Toegankelijke succesmeldingen in een formulier](/richtlijnen/formulieren/bevestigingspagina/toegankelijke-succesmelding/)
- [Duidelijke succesmeldingen in een formulier](/richtlijnen/formulieren/bevestigingspagina/succesmelding/)
