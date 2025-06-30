---
title: Voor CMS-developers · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Voor CMS-developers
sidebar_position: 2
pagination_label: Voor CMS-developers
description: Als ontwikkelaar van een content management systeem (CMS) kun je veel doen om contentmakers te helpen bij het maken van toegankelijke content.
keywords:
  - CMS
  - developer
  - aan de slag
  - getting started
---

# Toegankelijke content begint bij het ontwerp van je CMS

Een CMS bepaalt in hoge mate hoe contentmakers content invoeren, opmaken en publiceren. Door te bouwen met toegankelijke componenten uit het NL Design System kun je ervoor zorgen dat contentmakers automatisch werken met toegankelijke oplossingen — zonder dat ze daar zelf specialistische kennis voor nodig hebben.

Gebruik deze checklist om te zorgen dat jouw CMS:

- toegankelijk gedrag ondersteunt;
- fouten voorkomt;
- werkt met toegankelijke standaardcomponenten.

## Algemene principes

Zorg dat je CMS:

- werkt met toegankelijke standaardcomponenten, zoals koppen, lijsten en tabellen ([bekijk de componenten](/componenten/));
- alt-teksten, transcripties en andere alternatieven ondersteunt, bijvoorbeeld via velden en validatie bij het uploaden van media;
- taalinstellingen per pagina én per tekstblok ondersteunt;
- semantisch juiste opmaak afdwingt, bijvoorbeeld door nep-opsommingen of visuele tabellen voor layout te ontmoedigen;
- feedback geeft bij foutgevoelige keuzes, zoals het overslaan van kopniveaus, het gebruik van onderstreping of lage contrastwaarden;
- ondersteunt in elke fase van het publicatieproces, van invoer tot validatie en publicatie.

## Gebruik componenten uit het NL Design System

Het NL Design System biedt toegankelijke, herbruikbare componenten die overheden helpen om consistente en gebruiksvriendelijke websites te maken. Deze componenten zijn ontworpen volgens de ontwerpprincipes van het systeem, en voldoen aan de WCAG-richtlijnen.

Als CMS-ontwikkelaar kun je deze componenten integreren in de editor of preview van je CMS. Zo help je contentmakers om direct toegankelijke keuzes te maken, zonder dat ze technische kennis nodig hebben.

De componenten zijn beschikbaar als HTML/CSS en in verschillende frameworks, zoals React. In [het handboek van het NL Design System](/handboek/introductie/) lees je hoe je deze componenten kunt hergebruiken in je eigen project.

Bekijk het overzicht in [de componentenbibliotheek](/componenten/) om te zien wat er al beschikbaar is.

## Checklist: help contentmakers bij toegankelijk publiceren

Als CMS-bouwer kun je veel doen om toegankelijke content makkelijker te maken. In deze checklist zie je per contentonderdeel:

- waar contentmakers ondersteuning bij nodig hebben;
- hoe je het CMS daarop kunt inrichten;
- welke componenten uit het NL Design System je kunt inzetten.

Per onderdeel vind je praktische tips en suggesties om toegankelijk publiceren eenvoudiger te maken.

### Koppen

Koppenstructuur is essentieel voor schermlezers én voor mensen die snel willen scannen. Help contentmakers om koppen op de juiste manier te gebruiken, zonder dat ze daar technische kennis voor nodig hebben.

Wat het CMS kan doen

- Bied duidelijke opties voor kopniveaus  
  Zorg dat gebruikers eenvoudig koppen kunnen invoegen en het juiste niveau kunnen kiezen (bijvoorbeeld H2 of H3), zonder handmatige opmaak.
- Voorkom foutieve volgorde van kopniveaus  
  Waarschuw bij onlogische structuren, zoals een H4 direct onder een H2. Stimuleer een logische hiërarchie.
- Detecteer lege koppen  
  Geef feedback als een kop is toegevoegd zonder inhoud.
- Gebruik semantisch correcte HTML  
  Laat het CMS altijd de juiste HTML-elementen genereren (H1 t/m H6).

#### Herbruikbare componenten uit NL Design System

- [Heading](/heading)

### Afbeeldingen

Afbeeldingen kunnen informatie verduidelijken, maar zijn niet voor iedereen zichtbaar. Help contentmakers om afbeeldingen altijd van betekenisvolle alternatieve tekst te voorzien.

Wat het CMS kan doen

- Laat contentmakers alt-teksten toevoegen  
  Bied een duidelijk invoerveld bij het uploaden of plaatsen van een afbeelding.
- Geef gerichte feedback bij ontbrekende of onnodige alt-teksten  
  Waarschuw als een afbeelding zonder alt-tekst wordt toegevoegd, en geef de mogelijkheid om duidelijk aan te geven dat het om een decoratieve afbeelding gaat.
- Ondersteun lange beschrijvingen  
  Bied ruimte voor een aparte toelichting bij complexe afbeeldingen zoals infographics of grafieken.
- Gebruik semantisch correcte HTML  
  Zorg dat afbeeldingen worden geplaatst met het juiste img-element en correcte attributen (alt, aria-describedby, longdesc waar relevant).

Herbruikbare componenten uit NL Design System

- [Image](/image)

---

## Help deze documentatie te verbeteren

Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via [Github](https://github.com/nl-design-system/documentatie).

## Vragen

Heb je een vraag? Twijfel niet en [neem contact op met het kernteam](../../project/kernteam.mdx).
