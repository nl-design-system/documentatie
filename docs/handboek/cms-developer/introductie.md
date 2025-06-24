---
title: Voor CMS-developers · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Voor CMS-developer
sidebar_position: 2
pagination_label: Voor CMS-developer
description: CMS-developer
keywords:
  - CMS
  - developer
  - aan de slag
  - getting started
---

{/_ @license CC0-1.0 _/}

# Toegankelijke content begint bij de bouw van het CMS

Als ontwikkelaar van een content management systeem (CMS) kun je veel doen om contentmakers te helpen bij het maken van toegankelijke content. Niet alleen door de juiste functies aan te bieden, maar ook door toegankelijk gedrag te stimuleren, fouten te helpen voorkomen en toegankelijkheid te integreren in het hele publicatieproces.

Deze checklist helpt je om kritisch te kijken naar de ondersteuning die je CMS biedt. De opbouw volgt de onderdelen van content zoals die zijn beschreven in de richtlijnen op nldesignsystem.nl/richtlijnen/content.

## Structuur en semantiek

### Koppen

- Bied knoppen aan voor kopniveaus, met duidelijke labels (zoals “Kop 2”) en beperkte opties (bijv. H2–H4).
- Valideer de koppenstructuur: voorkom overgeslagen niveaus of lege koppen.
- Sta het toevoegen van onzichtbare koppen toe, bijvoorbeeld met aria-hidden of visually-hidden.

### Opsommingen

- Ondersteun het invoegen van echte lijsten (ul/ol) via knoppen of automatische conversie van streepjes en cijfers.
- Herken en corrigeer nep-opsommingen (zoals tekst met alleen visuele inspringing).

### Tabellen

- Bied een visuele tabel-editor waarmee kopcellen eenvoudig te markeren zijn (met scope of th).
- Voorkom complexe tabellen (zoals nested tables) of geef een waarschuwing.
- Help bij het instellen van leesvolgorde door logische invoer en structurering te stimuleren.

### Citaten

- Maak het eenvoudig om semantische citaten toe te voegen, bijvoorbeeld met een blockquote-knop.
- Voeg visuele stijl toe zonder de onderliggende semantiek te verliezen.

## Alternatieve content

### Afbeeldingen

- Zorg voor een verplicht veld voor alt-tekst bij betekenisvolle afbeeldingen.
- Sta aan te geven dat een afbeelding decoratief is (bijv. met een checkbox die alt="" toevoegt).
- Bewaar alt-teksten gescheiden van bijschriften.
- Ondersteun lange beschrijvingen, bijvoorbeeld via bijschriften of een apart veld met aria-describedby.

### Video

- Bied velden voor transcript, ondertiteling en beschrijving.
- Waarschuw bij ontbreken van noodzakelijke informatie.
- Sta embed-blokken toe met standaardvelden voor aanvullende toegankelijkheidsinfo.

### Kantoorbestanden

- Herken bestandstype automatisch en toon dit bij de link.
- Haal waar mogelijk titel en taal uit de metadata van het document.
- Voeg beschrijvingsveld toe bij documenten.
- Waarschuw als een bestand waarschijnlijk niet toegankelijk is (bijv. gescande PDF).

### Tekstopmaak en leesbaarheid

## Linkteksten

- Stimuleer betekenisvolle linkteksten met tips of voorbeeldtekst.
- Herken teksten als “klik hier” en geef suggesties.
- Laat redacteuren aangeven of een link een download of externe link is.

### Tekst benadrukken

- Beperk opmaakopties tot semantisch correcte varianten (bijv. `<strong>` i.p.v. inline CSS).
- Blokkeer ongeschikte opmaak zoals onderstreping of alleen hoofdletters.

### Kleurgebruik en contrast

- Bied vaste kleurensets met gegarandeerd contrast.
- Voeg visuele waarschuwingen toe bij lage contrastwaarden.
- Voeg styling toe die tekst over een afbeelding altijd leesbaar maakt (bijv. automatische overlay).

## Ondersteunend gedrag

### Validatie vóór publicatie

- Geef waarschuwingen bij ontbrekende alt-teksten, onlogische kopstructuren of ontbrekende beschrijvingen.
- Laat redacteuren content controleren met een toegankelijkheidsoverzicht.

### Standaardinstellingen

- Zorg voor standaardwaarden die toegankelijk gedrag stimuleren (zoals verplichte alt-teksten, standaardtaalinstelling, correcte HTML-tags).

### Herbruikbare componenten

- Ontwerp blokken (bijv. voor downloads, call-to-actions, tabellen) die standaard toegankelijk zijn.
- Zorg dat redacteuren geen semantische fouten kunnen maken bij gebruik van componenten.

### Voorbeeldweergave

- Laat zien hoe content eruitziet voor gebruikers met beperkingen, zoals een kleurenblindheidsimulatie.

## Gebruik deze checklist bij:

    •	het ontwikkelen of verbeteren van je CMS;
    •	het documenteren van toegankelijkheidsfuncties voor opdrachtgevers;
    •	het ondersteunen van redacties bij toegankelijk publiceren.

Meer weten? Raadpleeg de WCAG-richtlijnen op nldesignsystem.nl/wcag of bekijk de contentrichtlijnen op nldesignsystem.nl/richtlijnen/content.

---

## Help deze documentatie te verbeteren

Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via [Github](https://github.com/nl-design-system/documentatie).

## Vragen

Heb je een vraag? Twijfel niet en [neem contact op met het kernteam](../../project/kernteam.mdx).
