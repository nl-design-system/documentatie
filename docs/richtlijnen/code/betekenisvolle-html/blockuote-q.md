---
title: blockquote en q-elementen · Code · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Goed gebruik van blockquote en q-elementen
pagination_label: Goed gebruik van blockquote en q-elementen
description: Gebruik het blockquote- of q-element om één of meerdere zinnen, of een deel van een zin, te markeren als citaat.
slug: /richtlijnen/code/blockquote-en-q-elementen
keywords:
  - lettergrootte
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Blockquote en q-elementen

Gebruik het `<blockquote>` of `<q>` element om één of meerdere zinnen, of een deel van een zin, te markeren als citaat.

## Voorbeelden

<Guideline appearance="do" title="Voor korte quotes in een zin of alinea het HTML-element <q> gebruiken">
   <Canvas language="html">
     {() => (
       <>
         <paragraph>
           <p>
           Op de voorpagina van de website staat: <q>NL Design System helpt om toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk te maken.</q> Het kernteam maakt dit mogelijk.
           </p>
         </paragraph>
       </>
     )}
   </Canvas>
 </Guideline>

<Guideline appearance="do" title="Voor langere quotes die los staan buiten een zin of alinea het HTML-element <blockquote> gebruiken">
   <Canvas language="html">
     {() => (
       <>
         <paragraph>
           <blockquote>
           Een vat vol geleerdheid is nog geen druppel wijsheid waard.
           </blockquote>
         </paragraph>
       </>
     )}
   </Canvas>
 </Guideline>

 <Guideline appearance="dont" title="Een kop gebruiken om een quote op te maken.">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
          <h2>"Een vat vol geleerdheid is nog geen druppel wijsheid waard."</h2>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.3.1 Info en relaties](/wcag/1.3.1)

<FooterInfo />
