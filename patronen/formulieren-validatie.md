---
name: 7. Validatie en foutpreventie
menu: Formulieren
---

# Richtlijnen voor formulieren: Validatie en foutpreventie

_Status: **In ontwikkeling**_

[![hackmd-github-sync-badge](https://hackmd.io/cfSBF3OVSiGzldZ__ykc9Q/badge)](https://hackmd.io/cfSBF3OVSiGzldZ__ykc9Q)

[![hackmd-github-sync-badge](https://hackmd.io/cfSBF3OVSiGzldZ__ykc9Q/badge)](https://hackmd.io/cfSBF3OVSiGzldZ__ykc9Q)

## Accepteer antwoorden in verschillende vormen

Wees waar mogelijk vergevingsgezind, bijvoorbeeld bij adressen en laat meerdere formaten toe, bv. voor postcode ‘000AA’ én ‘0000 AA’; dus met en zonder spatie.

## Valideer op het juiste moment

Probeer zo snel mogelijk, maar pas nadat een gebruiker een invoerveld heeft verlaten te valideren. Zo ziet een gebruiker de fout gelijk in context en kan deze direct gecorrigeerd worden. In het geval van een meerstappen formulier kan validatie ook plaatsvinden bij het voltooien van een stap.

Valideer geen velden voordat de invoer is voltooid.

Een gebruiker zou niet gedwongen moeten worden een formulier volgens de visuele orde op het scherm in te vullen. Het moet bijvoorbeeld mogelijk zijn om eerst een achternaam in te vullen voordat een voornaam wordt ingevuld, zonder dat dit direct als een fout aangemerkt wordt.

## Feedback is gemakkelijk op te merken en te begrijpen

Feedback zou alleen op onjuiste velden weergegeven moeten worden om de mentale belasting van gebruiker minimaal te houden. Correcte velden aanduiden kan zorgen voor afleiding.

Als een verplicht veld niet ingevuld is toon dan niet alleen de tekst “Dit veld is verplicht” maar schrijf een specifieke foutmelding, bv. “De voornaam is verplicht”.

![Foutmelding van Spotify dat aanbod niet meer beschikbaar is](https://user-images.githubusercontent.com/248921/142431481-6baa8a50-c4e8-4185-8fd7-b332fb0a1501.png)

Voorbeeld van Spotify waarin uitgelegd wordt wat er is gebeurd en waarom. [^spotify-art-error-messages]

![Foutmelding van Spotify dat applicatie verouderd is](https://user-images.githubusercontent.com/248921/142431874-98d9cd1a-0857-4ca3-9f1b-628d746a87f4.png)

Voorbeeld van Spotify waarin een volgende stap gesuggereerd wordt. [^spotify-art-error-messages]

![Voorbeeld van Spotify over de juiste tone-of-voice](https://user-images.githubusercontent.com/248921/142432202-f8febffe-f522-4f1a-aa49-9959988321b8.png)

Voorbeeld van Spotify waarin over de juiste tone-of-voice om een gebruiker aan te spreken. [^spotify-art-error-messages]

## Welke invoer valideren

Niet alle velden dienen gevalideerd te worden; voor een voornaam kunnen we uiteraard niet bepalen of deze onjuist is. Bij het verzenden van een formulier kan uiteraard wel gevalideerd worden of er daadwerkelijk iets ingevuld is. Voorkom het valideren van optionele.

## Referenties
[^spotify-art-error-messages]: [Spotify: The Art of the Error Message](https://spotify.design/article/the-art-of-the-error-message)
