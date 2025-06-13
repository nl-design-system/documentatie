<!-- @license CC0-1.0 -->

## Gebruik SVG voor iconen.

SVG staat voor Scalable Vector Graphics en is een ideaal bestandsformaat voor iconen.

Voordelen van SVG:

- Schaalbaar zonder kwaliteitsverlies.
- Licht in gewicht wat bijdraagt aan korte laadtijden.
- Te kleuren door middel van CSS.
- Te animeren.

## Gebruik geen font voor iconen.

In tegenstelling tot SVG worden iconen van een font toegewezen aan Unicode-punten en geïnterpreteerd als tekst. Dit kan tot toegankelijkheidsproblemen leiden. Zo kan iemand een eigen lettertype hebben geïnstalleerd. Mensen met dyslexie stellen soms hun eigen lettertypen in voor een betere leesbaarheid. In dat geval worden de iconen vervangen door 'ontbrekende tekens'-symbolen. Dat gebeurt trouwens ook als het font niet geladen wordt.

Ook kan een icoon bij een icoon-font gekoppeld zijn aan één bepaald teken. Zo kan een icoon voor sluiten toegewezen zijn aan een 'A'. Wanneer men een ander font gebruikt of als het font met de iconen niet wordt geladen staat er simpelweg een 'A'. Daarnaast wordt dit icoon door [screenreaders](/woordenlijst/#screenreader) ook uitgesproken als 'A'.

## Toepassen van een SVG in code

Iconen moeten altijd vergezeld worden door een, eventueel visueel verborgen, tekstlabel.

Het icoon zelf moet het attribuut `focusable="false"` hebben om het uit de focus-volgorde te verwijderen. Dit is een standaardinstelling in sommige versies van Internet Explorer en Edge.

Het is niet nodig een alternatieve tekst aan te bieden voor iconen waarbij de tekst al beschikbaar is. In dit geval geef je het icoon in de code `aria-hidden="true"` mee. Zo is het tekstlabel "Verwijderen" in het volgende voorbeeld voldoende, en is het niet nodig om het icoon te identificeren.

```html
<button>
  <svg class="nl-icon nl-icon--text" focusable="false" aria-hidden="true">
    <use xlink:href="assets/svg/icons-core-set.svg#-icon-trashcan"></use>
  </svg>
  <span>Delete</span>
</button>
```

Alleen iconen die zeer goed ingeburgerd zijn, zoals een vergrootglas (voor zoeken) of een kruis (voor sluiten), zou je kunnen gebruiken zonder aanvullende visuele tekst. In deze gevallen wordt een visueel verborgen `<span>` aanbevolen.

Verberg in deze gevallen de `<span>` met behulp van de class `visually-hidden` of iets vergelijkbaars. Deze class verbergt de tekst enkel visueel. Screenreaders zullen de tekst nog steeds voorlezen.

Ook `aria-label` kan dit voor elkaar krijgen maar [`aria-label` kan voor vertaalproblemen zorgen](https://heydonworks.com/article/aria-label-is-a-xenophobe).

```css
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```
