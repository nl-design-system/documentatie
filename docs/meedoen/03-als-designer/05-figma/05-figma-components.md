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

Door het toevoegen van component ‘variants’ en ‘properties’ is het mogelijk om een enkel component te voorzien van alle (interactieve) staten en eigenschappen dat een component kan herbergen.

Over het algemeen worden variants gebruikt voor het maken van variaties zoals verschillende interactieve of feedback staten. Properties worden gebruikt voor eigenschappen zoals tekstaanpassingen, of het makkelijk vervangen, tonen of verbergen van elementen binnen een component.

Deze eigenschappen blijven bewaard wanneer een variant van een component geselecteerd wordt, mits de onderliggende structuur en naamgeving tussen varianten consistent is. Wanneer bijvoorbeeld een tekst gewijzigd of een icoon verborgen wordt, dan zullen deze aanpassingen blijven bestaan bij het veranderen van de interactieve of feedback staat.

## Varianten (component variants)

Met varianten is het mogelijk om verschillende (interactieve) staten van eenzelfde component te maken. Een ‘instance’ van een component kan hierdoor middels het componenten paneel gewijzigd worden van staat.

![Figma component varianten voor interactieve staten](https://user-images.githubusercontent.com/248921/174887897-e4576061-f946-4833-a746-f7fb05a3c117.png)

Voorbeeld van een tekstinvoer component met zes verschillende varianten voor staten (links). De staten zijn hierdoor te kiezen via het component instance paneel (rechts).

Zet de standaardvariant van een component linksboven in het varianten frame. Hiermee wordt automatisch voor instances de standaard component variant geselecteerd. Dit is tevens de variant die verschijnt in het Assets-paneel.

## Component properties

Door middel van component properties kunnen diverse eigenschappen van een component bewerkbaar gemaakt worden zonder dat hiervoor aparte varianten nodig zijn. Deze eigenschappen worden bloot gelegd op het hoogste niveau van een component instance.

Momenteel zijn, buiten varianten, drie bewerkbare eigenschappen toe te kennen:

- Een Boolean property maakt het mogelijk om een aan/uit of true/false toggle mee te geven. Dit kan bijvoorbeeld gebruikt worden om een icoon of label binnen een component aan of uit te zetten.
- Door middel van een Instance Swap property kan je aangeven welk element binnen een component vervangen kan worden voor een ander element. Dit kan bijvoorbeeld een icoon zijn dat in een ander icoon gewijzigd kan worden.
- Met het Text property geef je aan welke tekst in een component gewijzigd kan worden.

![Figma component instance met varianten en properties toegepast](https://user-images.githubusercontent.com/248921/174809547-561cb329-6747-411d-88ca-5f818e31d202.png)

Meer over het maken en gebruiken van component properties [is te vinden op de Figma site](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties).

## Groeperen

Door middel van juiste naamgeving is het mogelijk om componenten te groeperen. Door het gebruiken van een slash (`/`) in de naam van de component kan je een folder structuur creëren.

Dit is met name handig wanneer elementen ‘geswapped’ kunnen worden. Wanneer je bijvoorbeeld iconen van een `/` voorziet, dan komen deze allemaal in een zelfde ‘folder’ te staan.

Het component `Icon / Arrow / Left` en `Icon / Arrow / Right` zullen hierdoor boven elkaar verschijnen als je het icoon wilt ‘swappen’.

![Voorbeeld van naamgeving en structuur voor feedback iconen](https://user-images.githubusercontent.com/248921/175311058-bf0cfb4a-b19c-4681-b82f-cf65b12fe70b.png)

In dit voorbeeld is de naamgeving en structuur van feedback iconen in het formaat `Iconen / Icoongroep / Icoonnaam`, het waarschuwingsicoon krijgt in dit formaat de naam `Icons / Feedback / Warning`. In het ontwerppaneel in Figma worden hierdoor initieel alle iconen getoond die in de folder `Feedback` staan.

Meer informatie hierover [is te vinden op de Figma site](https://help.figma.com/hc/en-us/articles/360038663994-Name-and-organize-components).

## Componenten op slot zetten

Na het creëren van een component kan je deze vergrendelen zodat er niet per abuis wijzigingen aangebracht kunnen worden. Dit heeft geen invloed op de gepubliceerde libraries en gebruikers kunnen de instantie van een component nog steeds gebruiken en bewerken vanuit de gepubliceerde library.

## Componenten publiceren

Probeer bij het publiceren van componenten via `Libraries → Publish` in kleine stukjes te publiceren met een gedetailleerde beschrijving van wat er is veranderd.

Het is een goede gewoonte om component wijzigingen te accepteren in elk bestand dat een instance van het gewijzigde component gebruikt. Dit maakt het mogelijk om potentiële bugs meteen te lokaliseren. Het in bulk bijwerken van componenten maakt het moeilijker om potentiële bugs te lokaliseren en terug te voeren naar een specifieke publicatie.

## Voorkomen dat componenten worden gepubliceerd

Soms kan het nodig zijn componenten alleen lokaal te gebruiken, of het nu gaat om een component die vaak terugkeert in een specifiek ontwerpsysteem, of om een component die op zichzelf niet functioneel is maar alleen in de context van een samengesteld component.

In deze gevallen kan worden voorkomen dat componenten worden gepubliceerd door een underscore toe te voegen (`_`).

![Voorbeeld van een Figma component die niet wordt gepubliceerd vanwege een underscore in de naam](https://user-images.githubusercontent.com/248921/145391406-353368de-c7b7-49e8-88fd-cd1a5018dd41.png)

## Checklist voor componenten in Figma

In het Figma componenten bibliotheek bestand staat [een pagina met een checklist](https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2849%3A3859) waar componenten aan dienen te voldoen.
