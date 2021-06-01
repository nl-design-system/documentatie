---
name: 3. Vormgeving, opbouw en structuur
menu: Formulieren
---

# Richtlijnen voor formulieren: Vormgeving, opbouw en structuur

_Status: **In ontwikkeling**_

[![hackmd-github-sync-badge](https://hackmd.io/8IguZZ2YRvCA3vpuoc0EyQ/badge)](https://hackmd.io/8IguZZ2YRvCA3vpuoc0EyQ)

## Vermijd zoveel mogelijk afleiding

Zorg voor zo min mogelijk visuele of tekstuele afleiding op een formulieren pagina.

## Vermijd lange stukken tekst

Biedt alleen beknopte informatie aan die voor de gebruiker op dat moment relevant is.

## Laat gebruikers makkelijk een formulier scannen

Maak gebruik van duidelijke en beschijvende kopteksten voor onderwerpen.

Om iemand comfortabel een formulier te laten scannen is het raadzaam om formulieren niet in meerdere kolommen te tonen.

Bij het structureren van een formulier dient er voldoende ruimte te zijn tussen verschillende visuele elementen. Deze elementen dienen zo gegroepeerd te zijn dat het duidelijk is dat bijvoorbeeld een label bij een tekstinvoerveld hoort.

### Positie van tekstlabels

Labels zijn de vragen die je een gebruiker stelt. Zorg dat deze zo duidelijk en vriendelijk maar beknopt mogelijk zijn. Laat een gebruiker de vragen makkelijk scannen.

Een goed label is buiten een invoerveld geplaatst, niet daarbinnen. Op deze manier heeft het label altijd een vaste positie en kan het in een leesbare grootte worden getoont.

Overweeg labels op de regel boven het invoerveld te plaatsen. Voor left-to-right talen is deze links uitgelijnd. Het hier plaatsen biedt meerdere voordelen:

1. Het biedt voldoende ruimte voor labels van verschillende lengtes. Denk bv. ook aan het vertalen van labels (zowel left-to-right en right-to-left talen hebben hierdoor ruimte) door vertaalsoftware.
1. Gebruikers die wensen in te zoomen hebben de meeste kans om het label corresponderend met de invoer te lezen.
1. Het biedt een natuurlijke ‘scan-lijn’ waardoor een formulier automatisch overzichtelijk en consistent wordt.

## Zorg dat het antwoord in het invoerveld past

Een verschil in breedte kan op invoervelden worden toegepast om de verwachte lengte van invoer te visualiseren. Zo is een huisnummer vaak korter dan een telefoonnummer.

### Voorbeeld IBAN nummer

![Voorbeeld van een IBAN invoerveld](https://i.imgur.com/edEERws.png)

## Toon duidelijk de relatie tussen verschillende formulier elementen

Houdt rekening met verschillende staten van elementen; een foutmelding moet bijvoorbeeld in de buurt van de foutieve invoer staan en een directe relatie hiermee tonen.

In enkele gevallen kunnen invoervelden *naast* elkaar getoond worden, bijvoorbeeld het tonen van een toevoeging direct achter een huisnummer. Dit is echter alleen mogelijk als de velden een directe relatie tot elkaar hebben, in een logische volgorde staan en op één regel passen. Een voor- en achternaam hebben tevens een directe relatie tot elkaar maar zijn beter onder elkaar te plaatsen.

## Zorg ervoor dat pagina en velden niet onverwacht verspringen

Velden kunnen verspringen of de layout kan wijzigen door bijvoorbeeld het tonen van validatie feedback. Probeer rekening te houden met de positie van eventuele feedback om het wijzigen van de layout en verspringen tot een minimum te beperken.

Maak het echter wel mogelijk om meerlijnige tekstinvoer (`<textarea>`’s) in de hoogte en eventueel breedte door de gebruiker aan te laten passen. Zie het `<textarea>` component voor meer infomatie hierover.
