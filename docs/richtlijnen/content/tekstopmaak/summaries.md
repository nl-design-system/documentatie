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

Met opsommingen of lijsten kun je informatie ordenen. Als een opsomming goed opgemaakt is, dan is de opsomming beter bruikbaar voor bijvoorbeeld blinde mensen die een schermlezer gebruiken. Een schermlezer kan aangeven hoeveel items een lijst heeft en maakt het mogelijk om de lijst over te slaan. Ook voor andere mensen zijn opsommingen overzichtelijk en is informatie makkelijker te ‘scannen’.

## Lijst-elementen

<Guideline appearance="dont" title="Zelf sterretjes, streepjes of nummers typen om een lijst te maken.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          - Dit is geen lijst<br/>
          - Dit is geen lijst<br/>
          - Dit is geen lijst<br/>
          - Dit is geen lijst<br/><br/>

          1. Dit is óók geen lijst<br/>
          2. Dit is óók geen lijst<br/>
          3. Dit is óók geen lijst<br/>
          4. Dit is óók geen lijst<br/><br/>
          <p>Hulpsoftware herkent deze opmaak niet als een lijst. Stel een lijst in als lijst-element via de contenteditor in je contentmanagementsysteem (CMS). Zo krijgt de lijst de juiste opmaak en de juiste HTML-elementen mee.</p>
        </paragraph>
      </>
    )}

  </Canvas>
</Guideline>

## Genummerde en ongenummerde lijsten

<Guideline appearance="do" title="Gebruik een genummerde lijst wanneer de nummering de bezoeker helpt met het verwerken van de informatie of als de items in een vaste volgorde staan. Bijvoorbeeld bij een stappenplan. ">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <ol>
            <li>Pak een emmer</li>
            <li>Zet de emmer onder de kraan</li>
            <li>Draai de kraan open</li>
            <li>Draai de kraan weer dicht voordat het waterniveau de rand van de emmer bereikt.</li>
            <li>Gooi de emmer leeg in het zwembad</li>
            <li>Herhaal deze stappen tot het zwembad vol is</li>
          </ol>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
