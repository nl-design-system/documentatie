---
title: Vragen en antwoorden
hide_title: true
hide_table_of_contents: false
sidebar_label: Vragen en antwoorden
sidebar_position: 4
pagination_label: Vragen en antwoorden
description: Richtlijnen voor formulieren - Vragen en antwoorden.
keywords:
  - formulieren
  - vragen
  - antwoorden
---

<!-- @license CC0-1.0 -->

# Richtlijnen voor formulieren: Vragen en antwoorden

_Status: **In ontwikkeling**_

## Zorg voor duidelijk taalgebruik

Zorg dat een gebruiker de vraag begrijpt. Het tekstlabel dient zo duidelijk en beschrijvend mogelijk te zijn en waar nodig kan er extra hulp geboden worden. Zie het onderwerp Hulp en ondersteuning voor meer informatie hierover.

[Raadpleeg de algemene content richtlijnen](https://hackmd.io/U-WN8Is9Q62y1auHEbTBhQ) voor taal en taalgebruik.

## Houd vragen kort en concreet

Labels zijn de vragen die je een gebruiker stelt. Zorg dat deze zo duidelijk en vriendelijk maar beknopt mogelijk zijn. Laat een gebruiker de vragen makkelijk scannen.

## Vermijd moeilijke termen

Vermijd moeilijke, ongebruikelijke en officiële termen

## Informeer over de noodzaak van privacygevoelige informatie

## Maak gebruik van het juiste invoerelement

Voor het beantwoorden van vragen bestaan meerdere elementen:

- Reguliere tekst invoer (`input type=text/email/tel/date/etc.`)
- Tekst invoer over meerdere regels (`textarea`)
- Checkboxen
- Radio buttons
- Drop-down menu’s

Deze invoerelementen dienen vergezeld van een tekst label dat duidelijk de vraag stelt die beantwoord dient te worden.

De verschillende vormen van invoerelementen en hun specifieke richtlijnen vindt je bij het respectievelijke component in de componenten-bibliotheek.

## Vermijd open invoervelden en dropdown menu’s

## Laat bij meerkeuzevragen waar mogelijk alle antwoorden zien

Het tonen van alle antwoorden in een meerkeuze vraag kan het begrip van de vraag vergroten.

![Voorbeeld van een alternatief ‘select’ patroon van het W3C design system](https://user-images.githubusercontent.com/248921/142412957-be9fed1e-5172-429f-a028-cdb68fa5a192.png)

Een alternatief patroon waarbij opties permanent opengeklapt zijn én alle antwoorden zichtbaar. [^w3c-segmented-options]

## Combineer invoervelden

Gebruik zo veel mogelijk één veld voor antwoorden die als geheel worden gezien, bv. netnummer en telefoonnummer of huisnummer en toevoeging.

![Voorbeeld van GOV.UK van een gecombineerd telefoon invoerveld](https://user-images.githubusercontent.com/248921/142413725-95083e41-793c-4ea0-a4a1-4ac8965b2396.png)

Eén enkel veld zodat alle soorten telefoonnummer formaten geaccepteerd worden. Geef een gebruiker wel richtlijnen, met helper tekst, welke formaten geaccepteerd worden. [^gov.uk-telephone-numbers]

## Vul vooraf bekende informatie in

Vul vooraf bekende informatie in en zorg dat deze waar nodig te wijzigen is, en faciliteer `autocomplete`. [^gov.uk-autocomplete]

## Referenties

[^w3c-segmented-options]: [W3C Design System: Forms - Segmented options](https://design-system.w3.org/styles/forms.html#segmented-options)
[^gov.uk-telephone-numbers]: [GOV.UK Design System: Patterns - Telephone numbers](https://design-system.service.gov.uk/patterns/telephone-numbers/)
[^gov.uk-autocomplete]: [GOV.UK Design System: Patterns - Telephone numbers, Use the autocomplete attribute](https://design-system.service.gov.uk/patterns/telephone-numbers/)
