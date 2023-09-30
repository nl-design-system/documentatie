---
title: Kies de juiste patronen | Formulieren
hide_title: true
hide_table_of_contents: false
sidebar_label: Kies de juiste patronen
sidebar_position: 6
pagination_label: Formulieren - Kies de juiste patronen
description: Kies de patronen die het best passen bij het doel dat je wilt bereiken

keywords:
  - richtlijnen
  - formulieren
  - toegankelijkheid
  - labels
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import {
Checkbox,
Code,
FormField,
FormLabel,
Textbox,
Paragraph,
FormFieldDescription,
Fieldset,
FieldsetLegend as Legend,
} from "@utrecht/component-library-react";

# Kies de juiste patronen

<Paragraph lead>Stem de componenten die je binnen een formulier gebruikt af op de vragen die je stelt en behoeftes van gebriukrs.</Paragraph>

## Gebruik tekstvelden die bij de vraag passen

Tekstvelden kunnen in verschillende maten worden gebruikt. De aanbeveling is om velden zoveel mogelijk te laten aansluiten op het soort content, dus bijvoorbeeld een minder breed veld voor huisnummer dan voor straatnaam.

## Gebruik pas een select bij meer dan zes keuzes

Er zijn verschillende manieren om gebruikers te laten kiezen uit meerdere opties. Gebruik tot en met zes keuzes het liefst radiobuttons of checkboxes. Bij meer dan es keuzes is een selectmenu de beste keuze.

## Verwerk belangrijke informatie in de content, niet in een placeholder of tooltip

Om uitleg te geven bij formuliervelden worden vaak tooltips gebruikt. Maar in veel gevallen is het beter om de informatie binnen de content de tonen, zodat iedereen de informatie gelijk ziet. Tooltips worden niet door alle gebruikers even goed begrepen, en voegen voor toetsenbordgebruikers extra “tab stops” toe.

Verwerk belangrijke informatie ook niet in placeholders: die hebben vaak een lager contrast om voldoende van gebruikersinvoer te verschillen, maar daardoor te weinig contrast om aan toegankelijkheidseisen te voldoen.
