---
title: Informatieve afbeeldingen · Afbeeldingen · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Informatieve afbeeldingen
pagination_label: Informatieve afbeeldingen
description: Informatieve afbeeldingen in NL Design System.
slug: /richtlijnen/content/afbeeldingen/informatieve-afbeeldingen
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
  - informatieve afbeelding
  - informatieve afbeeldingen
  - informatief
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Informatieve afbeeldingen

Mist iemand die de afbeelding niet ziet informatie als je de afbeelding weglaat? Dan is het waarschijnlijk een informatieve afbeelding. Informatieve afbeeldingen helpen de content op de pagina duidelijker te maken, of geven aanvullende informatie.

Voorbeelden van informatieve afbeeldingen:

- Grafieken en infographics
- Blauwdrukken en schema's
- Afbeeldingen bij instructies
- Kunst en architectuur
- Productfoto's

Of afbeeldingen informatief zijn, is afhankelijk van de context en het doel van de afbeelding. Een afbeelding van een boom op een pagina over duurzaamheidsinitiatieven kan decoratief zijn, maar in een artikel over schadelijke insecten in specifieke boomsoorten in de gemeente waarschijnlijk niet.

## Overwegingen

Vragen die je jezelf kunt stellen als je een informatieve afbeelding plaatst:

- Waarom wil ik deze afbeelding plaatsen?
- Wat is het doel van de afbeelding?
- Gaat er informatie verloren als ik de afbeelding niet kan zien?

Per afbeelding die je plaatst is de beschrijving die je meegeeft anders, omdat het antwoord op deze vragen anders is. Zorg er in ieder geval voor dat de informatie in de afbeelding ook voorkomt in de alternatieve tekst.

<Guideline appearance="do" title="Informatieve afbeeldingen een beschrijvende alternatieve tekst geven">
  <Canvas language="html">
    {() => (
      <>
        <paragraph>
        <img alt="De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand." src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_content_afbeeldingen_Fieldset.png" />
         <p>Alternatieve tekst: De fieldset component groepeert gerelateerde invoervelden. De component bevat een optionele rand. De beschrijving van de groep staat boven de invoervelden, binnen de optionele rand.</p>
        </paragraph>
      </>
    )}
  </Canvas>
</Guideline>

<FooterInfo />
