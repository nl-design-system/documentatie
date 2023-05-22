---
title: Validatie en foutpreventie
hide_title: true
hide_table_of_contents: false
sidebar_label: Validatie en foutpreventie
sidebar_position: 7
pagination_label: Formulieren - Validatie en foutpreventie
description: Richtlijnen voor formulieren - Validatie en foutpreventie
keywords:
  - formulieren
  - validatie
  - foutpreventie
---

<!-- @license CC0-1.0 -->

# Richtlijnen voor formulieren: Validatie en foutpreventie

_Status: **In ontwikkeling**_

## Accepteer antwoorden in verschillende vormen

Wees waar mogelijk vergevingsgezind, bijvoorbeeld bij adressen en laat meerdere formaten toe, bv. voor postcode ‘000AA’ én ‘0000 AA’; dus met en zonder spatie.

## Valideer op het juiste moment

Probeer zo snel mogelijk, maar pas nadat een gebruiker een invoerveld heeft verlaten te valideren. Zo ziet een gebruiker de fout gelijk in context en kan deze direct gecorrigeerd worden. In het geval van een meerstappen formulier kan validatie ook plaatsvinden bij het voltooien van een stap.

Valideer geen velden voordat de invoer is voltooid.

Een gebruiker zou niet gedwongen moeten worden een formulier volgens de visuele orde op het scherm in te vullen. Het moet bijvoorbeeld mogelijk zijn om eerst een achternaam in te vullen voordat een voornaam wordt ingevuld, zonder dat dit direct als een fout aangemerkt wordt.

## Feedback is gemakkelijk op te merken en te begrijpen

Feedback zou alleen op onjuiste velden weergegeven moeten worden om de mentale belasting van gebruiker minimaal te houden. Correcte velden aanduiden kan zorgen voor afleiding.

Als een verplicht veld niet ingevuld is toon dan niet alleen de tekst “Dit veld is verplicht” maar schrijf een specifieke foutmelding, bv. “De voornaam is verplicht”.

![Foutmelding van Spotify dat aanbod niet meer beschikbaar is](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_validatie_142431481.png)

Voorbeeld van Spotify waarin uitgelegd wordt wat er is gebeurd en waarom. [^spotify-art-error-messages]

![Foutmelding van Spotify dat applicatie verouderd is](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_validatie_142431874.png)

Voorbeeld van Spotify waarin een volgende stap gesuggereerd wordt. [^spotify-art-error-messages]

![Voorbeeld van Spotify over de juiste tone-of-voice](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_formulieren_validatie_142432202.png)

Voorbeeld van Spotify waarin over de juiste tone-of-voice om een gebruiker aan te spreken. [^spotify-art-error-messages]

## Welke invoer valideren

Niet alle velden dienen gevalideerd te worden; voor een voornaam kunnen we uiteraard niet bepalen of deze onjuist is. Bij het verzenden van een formulier kan uiteraard wel gevalideerd worden of er daadwerkelijk iets ingevuld is. Voorkom het valideren van optionele.

## Referenties

[^spotify-art-error-messages]: [Spotify: The Art of the Error Message](https://spotify.design/article/the-art-of-the-error-message)
