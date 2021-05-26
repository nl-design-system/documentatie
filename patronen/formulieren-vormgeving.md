---
menu: Patronen
---

[![hackmd-github-sync-badge](https://hackmd.io/8IguZZ2YRvCA3vpuoc0EyQ/badge)](https://hackmd.io/8IguZZ2YRvCA3vpuoc0EyQ)

###### tags: `Formulieren` `NLDS`

_Status: **In ontwikkeling**_

# Richtlijnen voor formulieren: Vormgeving, opbouw en structuur

## Vermijd zoveel mogelijk visuele afleiding

Zorg voor zo min mogelijk afleiding op een formulieren pagina.

## Vermijd lange stukken tekst

## Laat gebruikers makkelijk een formulier scannen

Maak gebruik van duidelijke en beschijvende kopteksten voor onderwerpen.

Om iemand comfortabel een formulier te laten scannen is het raadzaam om formulieren niet in meerdere kolommen te tonen.

Bij het structureren van een formulier dient er voldoende ruimte te zijn tussen verschillende visuele elementen. Deze elementen dienen zo gegroepeerd te zijn dat het duidelijk is dat bijvoorbeeld een label bij een tekstinvoerveld hoort.

## Zorg dat het antwoord in het invoerveld past

Een verschil in breedte kan op invoervelden worden toegepast om de verwachte lengte van invoer te visualiseren. Zo is een huisnummer vaak korter dan een telefoonnummer.

### Voorbeeld IBAN nummer

![](https://i.imgur.com/edEERws.png)


## Toon duidelijk de relatie tussen verschillende formulier elementen

Houdt rekening met verschillende staten van elementen; een foutmelding moet bijvoorbeeld in de buurt van de foutieve invoer staan en een directe relatie hiermee tonen.

In enkele gevallen kunnen invoervelden *naast* elkaar getoond worden, bijvoorbeeld het tonen van een toevoeging direct achter een huisnummer. Dit is echter alleen mogelijk als de velden een directe relatie tot elkaar hebben, in een logische volgorde staan en op één regel passen. Een voor- en achternaam hebben tevens een directe relatie tot elkaar maar zijn beter onder elkaar te plaatsen.


## Zorg ervoor dat pagina en velden niet onverwacht verspringen

Velden kunnen verspringen of de layout kan wijzigen door bijvoorbeeld het tonen van validatie feedback. Probeer rekening te houden met de positie van eventuele feedback om het wijzigen van de layout en verspringen tot een minimum te beperken.

Maak het echter wel mogelijk om meerlijnige tekstinvoer (`<textarea>`’s) in de hoogte en eventueel breedte door de gebruiker aan te laten passen. Zie het `<textarea>` component voor meer infomatie hierover.