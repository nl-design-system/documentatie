---
title: Opsommingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Opsommingen
pagination_label: Opsommingen
description: Zorg dat een opsomming goed is opgemaakt, zodat deze beter bruikbaar is voor bijvoorbeeld blinde mensen die een schermlezer gebruiken.
slug: /richtlijnen/content/tekstopmaak/opsommingen
keywords:
  - semantiek
  - tekstopmaak
  - structuur
  - tekststructuur
  - opsommingen
  - geordende
  - ongeordende
  - lijst
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Opsommingen

Met een opsomming maak je informatie overzichtelijk. Dat is handig voor iedereen die snel wil scannen, maar ook belangrijk voor mensen die gebruikmaken van een schermlezer of een vergroot scherm.

Alleen: niet elke lijst is automatisch toegankelijk. Dat hangt af van de manier waarop je de opsomming opmaakt. Een visuele lijst met streepjes of icoontjes wordt niet altijd herkend door hulptechnologie. Ook het type lijst, genummerd of ongenummerd, moet passen bij de inhoud.

Op deze pagina lees je hoe je opsommingen toegankelijk maakt en welke opmaak je het beste kunt gebruiken.

## Lijst-elementen

Stel een lijst in als lijst-element via de contenteditor in je contentmanagementsysteem (CMS). Zo krijgt de lijst de juiste opmaak en de juiste HTML-elementen mee. De meeste CMS-en bieden hier een aparte optie voor aan. Maak niet zelf een lijst door het gebruik van bijvoorbeeld leestekens. Hulpsoftware herkent deze opmaak namelijk niet als een lijst.

<Guideline appearance="dont" title="Zelf sterretjes, streepjes of nummers typen om een lijst te maken.">
  <Canvas language="html">
    {() => (
      <>
        <p>
          - Dit is geen lijst<br/>
          - Dit is geen lijst<br/>
          - Dit is geen lijst<br/>
          - Dit is geen lijst<br/><br/>

          1. Dit is óók geen lijst<br/>
          2. Dit is óók geen lijst<br/>
          3. Dit is óók geen lijst<br/>
          4. Dit is óók geen lijst<br/><br/>
        </p>
      </>
    )}

  </Canvas>
</Guideline>

## Genummerde en ongenummerde lijsten

<Guideline appearance="do" title="Gebruik een genummerde lijst wanneer de nummering de bezoeker helpt met het verwerken van de informatie of als de items in een vaste volgorde staan. Bijvoorbeeld bij een stappenplan. Gebruik anders een ongenummerde lijst met opsommingstekens.">
  <Canvas language="html">
    {() => (
      <>
          <h2>Burrata salade</h2>
          <p>Een lekkere salade met burrata en tomaten.</p>
          <h3>Ingrediënten</h3>
          <ul>
            <li>250 gr (snoep)tomaten</li>
            <li>1 bol burrata</li>
            <li>verse basilicum</li>
            <li>1 el pesto</li>
            <li>scheutje olijfolie</li>
            <li>handje rucola</li>
            <li>crema di balsamico</li>
            <li>zwarte peper</li>
          </ul>
          <h3>Bereiding</h3>
          <ol>
            <li>Snijd de tomaten in stukjes.</li>
            <li>Verdeel de rucola over een bord, en voeg ook de tomaten toe.</li>
            <li>Leg de bol burrata in het midden van de salade.</li>
            <li>Verdeel wat peper, olijfolie en crema di balsamico over de salade.</li>
            <li>Maak af met een schepje pesto en wat verse basilicum.</li>
          </ol>
      </>
    )}
  </Canvas>
</Guideline>

## Hoe te testen

Lees de pagina door en controleer alle opsommingen. Gebruik de onderstaande stappen als checklist:

- Bekijk of de tekst is opgemaakt via de opsomknoppen in je CMS, en niet met zelfgetypte streepjes of andere tekens want die worden niet als lijst herkend door hulptechnologie.
- Controleer of je een genummerde of ongenummerde lijst hebt gekozen die past bij de inhoud.
  Gebruik een genummerde lijst als de volgorde belangrijk is (zoals bij stappen). Gebruik een ongenummerde lijst als de volgorde geen rol speelt.

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
