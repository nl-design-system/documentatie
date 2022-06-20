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

## Varianten

Om varianten van componenten te maken kan het soms nodig zijn eerst een ‘basis’ component te maken die alle mogelijke opties en functionaliteiten bevat. Dit maakt het mogelijk om alle varianten te wijzigen vanuit een enkele basiscomponent.

https://user-images.githubusercontent.com/248921/151860040-fac715ab-c69f-4dc4-a6a6-68db277e26f4.mov

Let op de punt (`.`) voor de naam van het basis component. Hierdoor wordt het basis component niet opgenomen in de gedeelde library.

Functionaliteiten die in een of meer varianten niet beschikbaar zijn, kunnen gemakkelijk worden verborgen.

Naamgeving van staten moet exact overeenkomen tussen component varianten. Dit betekent dat namen hoofdlettergevoelig zijn. `focus=on` en `Focus=on` resulteren in afzonderlijke varianten.

Zet de standaardvariant van een component linksboven in het varianten frame. Hiermee wordt automatisch voor instances de standaard component variant geselecteerd. Dit is tevens de variant die verschijnt in het Assets-paneel.

## Componenten op slot zetten

Na het creëren van een component kan je deze vergrendelen. Dit heeft geen invloed op de gepubliceerde libraries en gebruikers kunnen de instantie van een component nog steeds gebruiken en bewerken vanuit de gepubliceerde library.

## Componenten publiceren

Probeer bij het publiceren van componenten via `Libraries → Publish` in kleine stukjes te publiceren met een gedetailleerde beschrijving van wat er is veranderd.

Het is een goede gewoonte om component wijzigingen te accepteren in elk bestand dat een instance van het gewijzigde component gebruikt. Dit maakt het mogelijk om potentiële bugs meteen te lokaliseren. Het in bulk bijwerken van componenten maakt het moeilijker om potentiële bugs te lokaliseren en terug te voeren naar een specifieke publicatie.

## Voorkomen dat componenten worden gepubliceerd

Soms kan het nodig zijn componenten alleen lokaal te gebruiken, of het nu gaat om een component die vaak terugkeert in een specifiek ontwerpsysteem, of om een component die op zichzelf niet functioneel is maar alleen in de context van een samengesteld component.

In deze gevallen kan worden voorkomen dat componenten worden gepubliceerd door een underscore toe te voegen (`_`).

![Voorbeeld van een Figma component die niet wordt gepubliceerd vanwege een underscore in de naam](https://user-images.githubusercontent.com/248921/145391406-353368de-c7b7-49e8-88fd-cd1a5018dd41.png)

## Checklist voor componenten in Figma

In het Figma componenten bibliotheek bestand staat [een pagina met een checklist](https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2849%3A3859) waar componenten aan dienen te voldoen.
