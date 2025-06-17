<!-- @license CC0-1.0 -->

# De toegankelijke naam van een button

Maak de buttontekst voor iedereen beschikbaar, zorg dus voor een toegankelijke naam. Dan kunnen gebruikers van [screenreaders](/woordenlijst/#screenreader) deze tekst ook lezen en weten ze wat er gaat gebeuren als ze op de button klikken.

We beschrijven hieronder een aantal technieken om een button een toegankelijke naam te geven.

## Button met alleen tekst

Dit is de eenvoudigste en meest robuuste manier om een button een naam te geven. Met CSS kan de buttontekst gestyled worden. De toegankelijke naam is de buttontekst.

```html
<button>Geef je op</button>
```

## Een button met een icoontje en tekst

**Optie 1**: Een icoon toevoegen via CSS met daarnaast tekst geplaatst. De toegankelijke naam is de buttontekst.

```html
<button class="icon-delete" type="button">Verwijder bestand</button>
```

```html
<button type="button">
  <span class="fa-solid fa-trash-can" aria-hidden="true"> </span>
  Verwijder bestand
</button>
```

**Optie 2**: Een decoratief icoon als SVG-bestand samen met tekst. De afbeelding heeft een `alt` attribuut met een lege waarde, waardoor het wordt overgeslagen door screenreaders. De toegankelijke naam is de buttontekst.

```html
<button type="button">
  <img src="close.svg" alt="" />
  Sluit
</button>
```

**Optie 3**: Een decoratief icoon als SVG-code samen met de tekst. Voeg hiervoor `aria-hidden="true"` toe aan de SVG, waardoor het wordt overgeslagen door hulptechnologieën zoals screenreaders. De toegankelijke naam is de buttontekst.
Deze optie heeft de voorkeur omdat nu `currentColor` kan worden gebruikt in de CSS waardoor forced colors kunnen worden overgenomen.

```html
<button type="button">
  <svg aria-hidden="true" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>
    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>
  </svg>
  Sluit
</button>
```

**Optie 4**: SVG-code met een `role="img"` en een `aria-label` met de toegankelijke naam.
Deze optie heeft niet de voorkeur omdat er geen visuele tekst bij het icoontje staat.

```html
<button type="button">
  <svg role="img" aria-label="Sluit" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>
    <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>
  </svg>
</button>
```

Voor het toekennen van toegankelijke namen aan SVG's bestaan ook andere technieken, Carie Fisher beschrijft ze in [<span lang="en">Accessible SVGs: Perfect Patterns For Screen Reader Users</span>](https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/).

Een toegankelijke naam voor de button, is nodig om te voldoen aan één van de voorwaarden voor de WCAG-succescriteria:

- [1.3.1 Info en relaties](/wcag/1.3.1) (niveau A).
- [4.1.2 Naam, rol, waarde](/wcag/4.1.2) (niveau A).
