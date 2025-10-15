---
title: Algemene richtlijnen · Afbeeldingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Algemene richtlijnen
pagination_label: Algemene richtlijnen
description: Algemene richtlijnen voor afbeeldingen in NL Design System.
slug: /richtlijnen/content/afbeeldingen/algemene-richtlijnen
keywords:
  - afbeeldingen
  - alternatieve tekst
  - alt tekst
  - beeldbeschrijving
  - alt attribuut
  - tekstalternatief
  - tekstalternatieven
  - tekst alternatief
  - tekstueel alternatief
  - tekst alternatieven
  - toegankelijke afbeeldingen
  - alt in cms
  - mediabibliotheek
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Algemene richtlijnen

Ongeacht voor welke afbeelding je een alternatieve tekst gaat schrijven, zijn er een aantal dingen om altijd rekening mee te houden:

- Zet de belangrijkste informatie vooraan. Zo weet een bezoeker meteen of de rest van de beschrijving nodig is.
- Hou de beschrijving kort, maar wel volledig. Bij voorkeur is een alternatieve tekst maximaal 150 tekens lang, maar het is het belangrijkst dat de beschrijving klopt.
- Gebruik altijd interpunctie. [Screenreaders](/woordenlijst/#screenreader) maken ook gebruik van interpunctie. Een alternatieve tekst met interpunctie is beter te beluisteren. Beëindig langere alternateve teksten met een punt. Zo pauzeert een screenreader voordat de rest van de pagina wordt voorgelezen.
- Benoem niet dát het een afbeelding is, bijvoorbeeld 'afbeelding van een eikenboom' of 'foto van Linda de Vries'. Benoem het alleen als het echt relevant is. Een voorbeeld van wanneer het wel relevant is om te benoemen dat het om een foto gaat, is een foto van een belangrijke historische gebeurtenis. Als de afbeelding een foto is, kan dat aangeven dat het een authentieke, historische opname is. Maar als het een illustratie is, kan dat betekenen dat het een interpretatie of reconstructie is.

<Guideline appearance="dont" title="Geen interpunctie gebruiken">
  <Canvas language="html">
    {() => (
      <>
        <img
          src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Paspoort-id-rijbewijs-illustratie.jpg"
          alt="Paspoort identiteitskaart en rijbewijs illustratie."
        />
        <p>Alternatieve tekst: Paspoort identiteitskaart en rijbewijs illustratie</p>
      </>
    )}
  </Canvas>
</Guideline>

## Als jouw CMS gebruik maakt van een mediabibliotheek

Sommige contentmanagementsystemen (CMS) maken gebruiken van een mediabibliotheek. Een mediabibliotheek is een centrale opslagplaats waar je afbeeldingen, video's, documenten en andere mediabestanden kunt uploaden, beheren en hergebruiken binnen je website. Je hoeft dan niet dezelfde afbeelding meerdere keren te uploaden op je website. Meestal voeg je een alternatieve tekst toe aan de afbeelding in de mediabibliotheek.

Wanneer je die afbeelding dan vervolgens op een pagina gebruikt, krijgt de afbeelding automatisch de alternatieve tekst mee die je eerder hebt toegevoegd. Dat kan er ook voor zorgen dat de alternatieve tekst op de ene pagina toepasselijk is, maar op een andere pagina helemaal niet. Bijvoorbeeld omdat de context op die pagina anders is. Als je de alternatieve tekst niet kunt aanpassen op paginaniveau, kun je het beste meerdere versies van dezelfde afbeelding opslaan. Zo kun je toch per pagina een passende alternatieve tekst toevoegen.

## AI en tekstalternatieven

Artificial Intelligence (AI) kan enorm behulpzaam zijn voor blinden en slechtzienden. Er zijn apps en andere hulpmiddelen die een afbeelding kunnen scannen en een feitelijke beschrijving kunnen geven van de afbeelding. Daarmee worden veel mensen een stuk zelfstandiger, omdat ze niemand nodig hebben die even meekijkt.

Wees wel voorzichtig met AI. Je kunt niet zomaar vertrouwen op een tekstalternatief dat AI voor je genereert. Het kan een goed startpunt zijn, maar AI is op dit moment nog niet zo slim als je zou willen. Er kunnen daardoor fouten staan in een tekstalternatief dat door AI is gegenereerd. Of er kan nadruk komen te liggen op de verkeerde elementen in een afbeelding. En soms is de beschrijving niet relevant in de context waarvoor jij de afbeelding had gekozen. Lees de teksten daarom altijd kritisch na en pas de tekst aan waar nodig.

## Hoe te testen

Controleer of je een goed tekstalternatief hebt geschreven door na te gaan of je deze vragen met 'Ja' kunt beantwoorden:

- Geeft de alt-tekst dezelfde informatie als de afbeelding?
- Is de alt-tekst in [de juiste taal](/wcag/3.1.2) geschreven?
- Is de alternatieve tekst relevant in de context van waarom de afbeelding op de pagina staat?

**Tip:** Lees de alt-tekst hardop.

Begrijp je als lezer (zonder de afbeelding te zien) wat je moet weten? Dan is de alt-tekst duidelijk en functioneel. Bevat de alt-tekst alleen bestandsnamen, omschrijvingen als “afbeelding”, of overbodige details? Dan moet je ‘m verbeteren.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.1.1 Niet-tekstuele content](/wcag/1.1.1)

<FooterInfo />
