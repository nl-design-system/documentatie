---
title: Componenten
hide_title: true
hide_table_of_contents: true
sidebar_label: Componenten
pagination_label: Componenten
description: Componenten maken in Figma
keywords:
  - designer
  - figma
  - components
---

# Componenten maken in Figma

Figma componenten zijn herbruikbare objecten. Meerdere ‘instances’ met vergelijkbare eigenschappen of inhoud kunnen met een enkel component gecreëerd worden. Het wijzigen van eigenschappen of inhoud in het ‘hoofd’ component heeft invloed op al zijn instances. Gebruik componenten wanneer je consistente, herbruikbare objecten wilt maken.

Componenten kunnen genest worden in andere componenten. Het is een goede gewoonte om te beginnen met het kleinste herbruikbare object en van daaruit grotere componenten te maken.

Aangezien componenten zich gedragen als gewone Figma frames, [kan Auto layout op ze toegepast worden](08-figma-autolayout.md).

## Component properties

Door middel van component properties kunnen diverse eigenschappen van een component bewerkbaar gemaakt worden zonder dat hiervoor aparte varianten nodig zijn. Deze eigenschappen worden bloot gelegd op het hoogste niveau van een component instance.

Momenteel zijn, buiten varianten, drie bewerkbare eigenschappen toe te kennen:

- Een Boolean property maakt het mogelijk om een aan/uit of true/false toggle mee te geven. Dit kan bijvoorbeeld gebruikt worden om een icoon of label binnen een component aan of uit te zetten.
- Door middel van een Instance Swap property kan je aangeven welk element binnen een component vervangen kan worden voor een ander element. Dit kan bijvoorbeeld een icoon zijn dat in een ander icoon gewijzigd kan worden.
- Met het Text property geef je aan welke tekst in een component gewijzigd kan worden.

<img width="760" alt="Figma compnent instance met varianten en properties toegepast" src="https://user-images.githubusercontent.com/248921/174809547-561cb329-6747-411d-88ca-5f818e31d202.png">

Meer over het maken en gebruiken van component properties [is te vinden op de Figma site](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties).

## Varianten

Om varianten van componenten te maken kan het soms nodig zijn eerst een ‘basis’ component te maken die alle mogelijke opties en functionaliteiten bevat. Dit maakt het mogelijk om alle varianten te wijzigen vanuit een enkele basiscomponent.

https://user-images.githubusercontent.com/248921/151860040-fac715ab-c69f-4dc4-a6a6-68db277e26f4.mov

Let op de punt (`.`) voor de naam van het basis component. Hierdoor wordt het basis component niet opgenomen in de gedeelde library.

Functionaliteiten die in een of meer varianten niet beschikbaar zijn, kunnen gemakkelijk worden verborgen.

Naamgeving van staten moet exact overeenkomen tussen component varianten. Dit betekent dat namen hoofdlettergevoelig zijn. `focus=on` en `Focus=on` resulteren in afzonderlijke varianten.

Zet de standaardvariant van een component linksboven in het varianten frame. Hiermee wordt automatisch voor instances de standaard component variant geselecteerd. Dit is tevens de variant die verschijnt in het Assets-paneel.

## Groeperen

Door middel van juiste naamgeving is het mogelijk om componenten te groeperen. Door het gebruiken van een slash (`/`) in de naam van de component kan je een folder structuur creëren.

Dit is met name handig wanneer elementen ‘geswapped’ kunnen worden. Wanneer je bijvoorbeeld iconen van een `/` voorziet, dan komen deze allemaal in een zelfde ‘folder’ te staan.

Het component `Icon / Arrow / Left` en `Icon / Arrow / Right` zullen hierdoor boven elkaar verschijnen als je het icoon wilt swappen.

Meer informatie hierover [is te vinden op de Figma site](https://help.figma.com/hc/en-us/articles/360038663994-Name-and-organize-components).

## Componenten op slot zetten

Na het creëren van een component kan je deze vergrendelen. Dit heeft geen invloed op de gepubliceerde libraries en gebruikers kunnen de instantie van een component nog steeds gebruiken en bewerken vanuit de gepubliceerde library.

## Componenten publiceren

Probeer bij het publiceren van componenten via `Libraries → Publish` in kleine stukjes te publiceren met een gedetailleerde beschrijving van wat er is veranderd.

Het is een goede gewoonte om component wijzigingen te accepteren in elk bestand dat een instance van het gewijzigde component gebruikt. Dit maakt het mogelijk om potentiële bugs meteen te lokaliseren. Het in bulk bijwerken van componenten maakt het moeilijker om potentiële bugs te lokaliseren en terug te voeren naar een specifieke publicatie.
