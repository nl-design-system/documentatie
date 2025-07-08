---
title: Tekst benadrukken · Voor CMS leveranciers · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Tekst benadrukken
pagination_label: Tekst benadrukken
description: Duidelijke opmaak helpt om accenten te leggen in een tekst. Denk aan vet of cursief om iets te benadrukken. Maar niet alle visuele opmaak is ook technisch toegankelijk. Een CMS kan contentmakers ondersteunen met toegankelijke opties voor tekstopmaak.
keywords:
  - CMS
  - leverancier
  - Content Management Systeem
  - toegankelijk
  - publiceren
  - tekst benadrukken
  - dikgedrukt
  - schuingedrukt
  - strong
  - em
---

<!-- @license CC0-1.0 -->

import FooterInfo from "@nl-design-system-unstable/documentation/handboek/\_footer_info.md";

# Tekst benadrukken

Duidelijke opmaak helpt om accenten te leggen in een tekst. Denk aan vet of cursief om iets te benadrukken. Maar niet alle visuele opmaak is ook technisch toegankelijk. Een CMS kan contentmakers ondersteunen met toegankelijke opties voor tekstopmaak.

Wat het CMS kan doen:

- Bied knoppen voor vet en cursief  
  Zorg dat tekst opmaken via de editor mogelijk is met knoppen of sneltoetsen. Gebruik semantisch correcte HTML zoals `<strong>` en `<em>`, niet alleen visuele stijlen.
- Sta onderstreping alleen toe voor links  
  Voorkom dat onderstreping wordt gebruikt voor nadruk, omdat dit verwarring oplevert. Onderstreepte tekst wekt de indruk dat het een link is.
- Waarschuw bij gebruik van alleen hoofdletters voor nadruk  
  Tekst in alleen hoofdletters is moeilijker leesbaar en komt schreeuwerig over. Geef bijvoorbeeld een suggestie voor een toegankelijker alternatief, zoals vet of cursief.
- Waarschuw bij overmatig gebruik van vet of cursief  
  Geef feedback als er te veel tekst in een alinea vet of cursief is gemaakt. Zo voorkom je dat nadruk zijn werking verliest of dat de leesbaarheid verslechtert.
- Bied de mogelijkheid om standaard onderdelen visueel op te maken  
  Zorg dat elementen zoals introductieteksten een visuele stijl kunnen krijgen via CSS, zonder dat hiervoor semantische HTML zoals `<strong>` of `<em>` nodig is. Zodat de opmaak geen betekenis suggereert die er niet is.

In de richtlijnen voor contentmakers lees je waarom dit onderdeel belangrijk is voor toegankelijkheid en waar je als contentmaker op moet letten. Verwijs hier eventueel naartoe vanuit het CMS voor extra uitleg en context.

Bekijk de [richtlijnen voor contentmakers over tekst benadrukken](/richtlijnen/content/tekstopmaak/tekst-benadrukken).

## Gerelateerde NL Design System-componenten

- [Strong](/strong)

## Gerelateerde WCAG-succescriteria

Op de WCAG-pagina’s op deze site lees je welke succescriteria van toepassing zijn, welke fouten veel voorkomen en hoe je kunt testen of het CMS contentmakers voldoende ondersteunt om aan deze criteria te voldoen.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

---

<FooterInfo />
