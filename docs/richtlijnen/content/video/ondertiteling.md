---
title: Ondertiteling · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Ondertiteling
pagination_label: Ondertiteling
description: Richtlijnen voor ondertiteling binnen NL Design System
slug: /richtlijnen/content/video/ondertiteling
keywords:
  - video
  - youtube
  - vimeo
  - transcript
  - ondertiteling
  - subtitles
  - captions
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Ondertiteling

Ondertiteling is de leesbare weergave van spraak, geluid, toon en volume in video's. In het Engels bestaan er meerdere woorden voor ondertiteling die een wezenlijk verschil in betekenis hebben. Daarom leggen we in deze richtlijnen ook de Engelse termen uit, om het onderscheid te verduidelijken.

We maken onderscheid tussen ondertiteling als vertaling (subtitles) en ondertiteling voor doven en slechthorenden (captions). Daarnaast is er een verschil in 'open ondertiteling' (Open Captions) en 'gesloten ondertiteling' (Closed Captions).

## Ondertiteling als vertaling

Ondertiteling als vertaling kom je bijvoorbeeld tegen als de audio in de video Engelstalig is en de ondertiteling Nederlands. Dit zorgt ervoor dat mensen die de taal waarin de video is opgenomen niet begrijpen, de informatie met behulp van de ondertiteling alsnog kunnen begrijpen.

De Engelse term voor deze vorm van ondertiteling is 'subtitles' en bevat over het algemeen alleen de vertaling van gesproken woord in een video.

## Ondertiteling voor doven en slechthorenden

Ondertiteling voor doven en slechthorenden is uitgebreider en bevat ook geluid en de toon van het geluid, bijvoorbeeld [spannende muziek] of [doffe dreun in de verte]. Dit zorgt ervoor dat bezoekers die de audio helemaal niet kunnen horen ook informatie meekrijgen over wat er gebeurt, ook wanneer er niet gesproken wordt. Daarnaast is deze vorm van ondertiteling in eerste instantie in de taal van de video zelf - het is dus geen vertaling.

De Engelse term voor deze vorm van ondertiteling is 'captions'. Dit is de ondertiteling die vereist is binnen de [WCAG-richtlijnen](/wcag) en die doven en slechthorenden helpen om toegang te hebben tot alle informatie in een video.

### Voorbeelden

Welke informatie moet je in ondertiteling benoemen? Dat ligt er aan welke geluiden belangrijk zijn voor wat je wilt overbrengen in de video. Onthoudt dat geluid, volume en toon vaak een belangrijke verhalende rol hebben. Denk aan:

- De gesproken tekst. Dit voeg je altijd toe aan je ondertiteling.
- Belangrijke geluiden zoals lachen, een dichtslaande deur, omgevingsgeluid of muziek.
- Volume of intonatie. Schreeuwt iemand, of fluistert diegene juist? Zegt iemand iets op een hele sarcastische toon of zelfs spottend?
- De naam of beschrijving van degene die iets zegt. Soms is de spreker niet in beeld maar wel te horen, voeg dan toe om wie het gaat.

Om onderscheid te maken tussen gesproken tekst en de beschrijving van de geluiden, plaats je de beschrijvingen van geluiden tussen vierkante haakjes (bijvoorbeeld [spannende muziek]). De naam van de spreker plaats je boven of aan het begin van een zin, tussen ronde haakjes of gevolgd door een dubbele punt.

## Ondertiteling voor iedereen

Doven en slechthorenden zijn niet de enige mensen die baat hebben bij ondertiteling. Ondertiteling is ook handig:

- voor mensen die in een stiltecoupé of andere stille ruimte een video willen bekijken zonder een koptelefoon.
- voor mensen die in een rumoerige omgeving werken en daardoor de audio niet goed kunnen horen.
- voor mensen die de gesproken taal niet goed kunnen begrijpen of de taal juist willen leren.
- in situaties waarin de spreker niet duidelijk articuleert of bijvoorbeeld een sterk accent heeft.

Bied daarom altijd ondertiteling aan, zodat iedereen je video goed kan begrijpen.

## Gesloten en open ondertiteling

Hoé je ondertiteling aanbiedt kan ook invloed hebben op hoe gebruiksvriendelijk je video is.

### Gesloten ondertiteling - Closed Captions

Gesloten ondertiteling (Closed Captions) is ondertiteling die de bezoeker zelf aan of uit kan zetten. Meestal staat deze vorm van ondertiteling standaard uit - oftewel 'gesloten'. Je biedt het aan als een los bestand, zoals een [vtt bestand (Engels)](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) of een [srt bestand](https://nl.wikipedia.org/wiki/SubRip#SubRip-formaat). In veel videospelers kun je deze vorm van ondertiteling aan- of uitzetten met de “CC’’ knop, de afkorting voor Closed Captions.

#### Voordelen

Het gebruik van gesloten ondertiteling heeft een aantal grote voordelen:

- Bezoekers kiezen zelf of ze er gebruik van willen maken.
- Daarnaast kan een bezoeker, afhankelijk van met welke videospeler je de video aanbiedt, ook zelf de [kleur](/wcag/1.4.3), [grootte](/wcag/1.4.4) en [tekstafstand](/wcag/1.4.12) aanpassen.
- De grootte van de ondertiteling wordt bij een aantal bekende videospelers ook automatisch aangepast aan de grootte van het scherm waar de bezoeker de video op bekijkt.
- Omdat de bestanden waarin de ondertiteling staat tekstbestanden zijn, kunnen zoekmachines de bestanden ook lezen.

Dit maakt gesloten ondertiteling veelzijdig en meestal de meest toegankelijke keuze.

### Open ondertiteling - Open Captions

Open ondertiteling (Open Captions) is ondertiteling die is opgenomen in het videobestand. De ondertiteling is voor iedereen zichtbaar en bezoekers kunnen de ondertiteling niet zelf aan of uit zetten.

Omdat de ondertiteling 'vast' zit in het bestand, is de tekst van de ondertiteling ook niet doorzoekbaar voor zoekmachines. Een bezoeker kan ook niet de kleur, grootte of tekstafstand aanpassen om de tekst beter leesbaar te maken.

#### Voordelen

Het gebruik van open ondertiteling wordt vaak bestempeld als ontoegankelijk, maar het heeft ook voordelen. Als je er zeker van wil zijn dat iedereen altijd ondertiteling ziet, ongeacht op welk platform de bezoeker de video ziet, zijn open captions juist heel praktisch. Bijvoorbeeld als je dezelfde video deelt op social media, waar videospelers niet altijd de optie hebben om ondertiteling aan of uit te zetten.

#### Toegankelijke open ondertiteling

Omdat de bezoeker zelf geen invloed heeft op hoe de tekst van de ondertiteling eruit ziet, is het belangrijk dat je daar zelf op let:

- Zorg er voor dat het [contrast tussen de tekstkleur en de achtergrond hoog genoeg is](https://nldesignsystem.nl/contrast/).
- Maak de tekst groot genoeg. Hier is geen standaard grootte voor, omdat dit afhangt van de grootte van het scherm waar je video voor maakt. Met een klein scherm en een relatief grootte kijkafstand, zoals op een mobiele telefoon, moet de ondertiteling een groter deel van het scherm in beslag nemen dan op desktop monitor of op een bioscoopscherm.
- Kies een goed [leesbaar lettertype](https://nldesignsystem.nl/richtlijnen/stijl/typografie/lettertype).

## Toegankelijke ondertiteling in meerdere talen

De ondertiteling waar we het over hebben als we het hebben over toegankelijkheid en specifieker over WCAG, is de ondertiteling voor doven en slechthorenden. Maar het aanbieden van ondertiteling is meerdere talen is natuurlijk net zo goed een vorm van toegankelijkheid. Je kunt er voor kiezen om voor iedere taal twee verschillende ondertitelingen aan te bieden, eentje zónder beschrijvingen en eentje mét. Zo kunnen je bezoekers zelf kiezen wat het beste bij hen past.

## Ondertiteling bij live video

Biedt je ook live video aan, zoals webinars of andere livestreams? Ondertiteling bij live video’s is in Nederland niet wettelijk verplicht. Maar het is voor veel mensen prettig als je het wel toevoegt.

Tegenwoordig zijn hier verschillende opties voor, zoals een schrijftolk, een ondertitelfunctie in software voor online meetings en software die gebruik maakt van AI. Als je vaker live video aanbiedt, vraag dan regelmatig feedback aan je kijkers, zodat je de optie kiest die het beste bij je publiek past.

Plaats je de video ná het live evenement ook online? Dan gelden weer de richtlijnen voor vooraf opgenomen video's.

Let op: Is live video onderdeel van de service die je aanbiedt en biedt je dat ook in andere landen aan? Zoek dan goed uit welke verplichtingen in dat land gelden, die kunnen afwijken van de regels in Nederland.

## Automatisch gegenereerde ondertiteling

Een aantal videoplatforms bieden automatisch gegenereerde ondertiteling aan. Ondanks dat de kwaliteit van deze ondertiteling steeds beter wordt, is het nog altijd belangrijk de ondertiteling zelf na te lopen en aan te passen.

Besteed extra aandacht aan:

- Interpunctie. Automatisch gegenereerde ondertiteling bevat vaak geen of slechte interpunctie. Interpunctie is heel belangrijk voor de leesbaarheid van ondertiteling.
- Geluiden, toon en volume. Deze beschrijvingen komen meestal niet voor in automatisch gegenereerde ondertiteling en zul je zelf nog moeten toevoegen.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)](/wcag/1.2.2)
- [Succescriterium 1.2.4 Ondertitels voor doven en slechthorenden (live)](/wcag/1.2.4)
