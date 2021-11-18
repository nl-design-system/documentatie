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

## Welke invoer valideren

Niet alle velden dienen gevalideerd te worden; voor een voornaam kunnen we uiteraard niet bepalen of deze onjuist is. Bij het verzenden van een formulier kan uiteraard wel gevalideerd worden of er daadwerkelijk iets ingevuld is. Voorkom het valideren van optionele.
