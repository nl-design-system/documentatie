---
title: Bestaand of nieuw component gebruiken · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Component kiezen
pagination_label: Component kiezen
description: Bestaand of nieuw component gebruiken?
keywords:
  - developer
  - aan de slag
  - componenten
  - samenwerken
---

# Bestaand of nieuw component gebruiken

Stel je hebt een nieuwe wens voor een component of functionaliteit. Dan wil je natuurlijk weten hoe je hiervoor het NL Design System kunt gebruiken.

Door antwoord te geven op een paar simpele vragen wordt duidelijk of:

- Optie 1 en 2: Het met een bestaand component kan
- Optie 3: Het met een bestaand component kan door een kleine toevoeging of token toe te voegen
- Optie 4: Je een bestaand component verder kan uitbreiden
- Optie 5: Je een nieuw component volgens de NL Design System architectuur maakt
- Optie 6: Je er een losstaande niet herbruikbare implementatie van maakt

## Flowchart

![Flowchart opties hoe je een component kan gebruiken](https://i.imgur.com/LZcYeXT.jpg)

## 1. Een kant-en-klaar component

Bestaat de component in het NL Design System en is het geschikt om zo voor het design te gebruiken? Heeft de component een nl- prefix, bijvoorbeeld `nl-component`?

- Gebruik het NL Design System component

## 2. Een component van een andere organisatie

De component bestaat niet in het NL Design System maar wel bij een van de organisaties die met de NL Design System architectuur werken. Daarom heeft het een andere prefix, bijvoorbeeld `utrecht-component` of `den-haag-component`.
De component voldoet verder wel aan de wensen en heeft voldoende design tokens om aan het design te voldoen.

- Gebruik dit component dan met de organisatie prefix van de bestaande component en gebruik deze prefix ook voor de component design tokens.
- Laat ons ook weten dat dit component succesvol is ingezet zodat we kunnen overwegen de component op te nemen in het NL Design System met de `nl` prefix.

## 3. Een component met kleine wijziging

De component bestaat met de NL Design System architectuur. Ook kan het met wat extra tokens of een kleine toevoeging aan de wensen en het design voldoen. Deze aanpassing zorgt verder niet voor wijzigingen in de bestaande functionaliteit of aan de bedoeling van de maintainers van de component.

- Maak een fork
- Maak een pull request waarin de voorgestelde wijziging wordt uitgelegd en aangepast.
- In overleg met de maintainers kan dan besloten worden de component uit te breiden of de wijziging in een fork los bij de nieuwe organisatie te laten bestaan.

## 4. Extra feature toevoegen aan een component

Er bestaat een component dat er erg op lijkt met de NL Design System architectuur. Met een kleine wijziging die niet het doel van de component aantast en er geen Frankenstein van maakt kan de component voldoen aan de wensen van het nieuwe project.

1. Overleg met de maintainers of het logisch is de component uit te breiden. Als een nieuwe component moet worden gemaakt ga dan door naar optie 5.
2. Maak dan een fork
3. Maak een pull request waarin de voorgestelde toevoeging wordt uitgelegd en aangepast.
4. De maintainers besluiten of ze de voorgestelde wijziging accepteren.
   - De wijziging wordt eventueel na wat aanpassingen geaccepteerd. Gebruik dan dit component met de prefix van de originele organisatie.
   - De wijziging wordt niet geaccepteerd. De wijziging kan dan als een fork los bij de nieuwe organisatie bestaan. Kijk hiervoor ook naar optie 5.

## 5. Een nieuw herbruikbaar component maken

Er bestaat nog geen component dat kan worden gebruikt voor het nieuwe project.
Het is mogelijk dat de nieuw te maken component gebruikt kan worden door andere projecten.

- Overheidsorganisaties gebruiken idealiter een repo binnen nl-design-system Github met een eigen organisatie naam. Deze is dan goed vindbaar voor anderen die de component later kunnen gebruiken. Voor andere (commerciële) partijen wordt een eigen organisatie repo gebruikt, hier kan wel door NL Design System naar verwezen worden door de topic nl-design-system toe te voegen.
- Gebruik een eigen prefix, idealiter de naam van de organisatie
- Maak de component volgens de NL Design System architectuur, het kernteam vind het leuk om hier bij te adviseren!

## 6. Dit design wordt geen onderdeel van het design system

Er bestaat nog geen component en het ontworpen component is zo specifiek dat deze waarschijnlijk nooit voor andere projecten gebruikt gaat worden.

- Maak de functionaliteit naar eigen inzicht en maak als hij wel in de componenten repo wordt opgenomen duidelijk dat het niet voor hergebruik ontworpen is.
