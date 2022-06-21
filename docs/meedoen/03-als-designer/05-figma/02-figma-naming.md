---
title: Naamgeving in Figma
hide_title: true
hide_table_of_contents: true
sidebar_label: Naamgeving
pagination_label: Naamgeving
description: NL Design System Naamgeving in Figma
keywords:
  - designer
  - figma
  - naamgeving
---

# Naamgeving in Figma

Een juiste aanpak in ieder ontwerpbestand is om objecten direct na hun creatie expliciet een naam te geven. Dit helpt betekenis toe te voegen aan ontwerpobjecten en vergemakkelijkt het overdragen van een ontwerpbestand aan een andere ontwerper of een ontwikkelaar.

![Naamloze geneste frames en groups](https://user-images.githubusercontent.com/248921/140958292-85ccee96-2add-4613-9daf-755b11bd433b.png)

Wanneer je bijvoorbeeld een rechthoek maakt die bedoeld is als achtergrond voorzien van een kader voor een tekst invoer, dan zou je deze rechthoek de naam `text-input-background` moeten geven.

Waar mogelijk ontlenen componenten, layers, frames en design tokens (semantische) naamgeving van HTML- en SVG-tags, CSS properties, ARIA roles of BEM-naamgeving.

## Component varianten

Eenzelfde naamgeving gebruiken als in de front-end code vergemakkelijkt de communicatie en overdracht. Een voorbeeld hiervan is het gebruik van 'checked' in plaats van 'active' voor de geselecteerde staat van een checkbox.

In Figma kunnen variant properties gesorteerd worden door individuele properties te slepen.

![Component varianten paneel in Figma](https://user-images.githubusercontent.com/248921/140958477-85782e98-ca0f-451a-b85e-1015ca081046.png)

Deze naamgeving helpt tevens bij het opzetten van een interactief prototype.

![Prototype instellingen in Figma weerspiegelen naamgeving van varianten](https://user-images.githubusercontent.com/248921/140958596-9c6db66c-299b-441f-9196-af916dbe9f37.png)

## Synonymen

Synoniemen in het beschrijvingsveld helpen bij het zoeken naar componenten in libraries.

In below example searching on either select, dropdown, or menu all return the library’s select component.

In het onderstaande voorbeeld levert zoeken op select, dropdown of menu in alle gevallen het select component uit de library op.

![Synonymen voor het Select component](https://user-images.githubusercontent.com/248921/140958774-31867f4e-87c2-45ae-86bc-288f965b99c7.png)

Beschrijvingen kunnen ook aan individuele component varianten worden toegevoegd.

### Voorkomen dat lokale componenten in een library worden gepubliceerd

Het prefixen van een component met een underscore (`_`) voorkomt dat deze wordt gepubliceerd in een gedeelde library. Dit is vooral nuttig om te voorkomen dat atomic elementen, die in gebruik zijn door componenten maar geen nut hebben als herbruikbaar standalone element, worden toegevoegd aan een gedeelde library.

In onderstaand voorbeeld geeft het zoeken op ‘checkbox’ alle componenten met checkbox in hun naam als resultaat. Zoeken op ‘placeholder’ levert echter geen resultaten op.

![Componenten die worden gepubliceerd, en componenten voorzien van prefix die niet worden gepubliceerd](https://user-images.githubusercontent.com/248921/140958964-90e3ddf8-5bd2-4f0b-bcdc-3b32be0958fe.png)

## Afbeeldingen

Ontwerpbestanden zijn de perfecte plek om de betekenis van afbeeldingen te definiëren. Als een afbeelding decoratief is, en als zodanig een leeg `alt=""` alternatief tekst attribuut krijgt, kan dit aan de beschrijving worden toegevoegd.

Likewise, if an image is informative to the user, an appropriate `alt` text can already be added as image name. Using the layer to add this image description results in this text being available in Figma’s Layer and Inspect panels.
Wanneer een afbeelding informatief is voor de gebruiker, kan een passende `alt` tekst worden toegevoegd. De layer naam gebruiken om deze beeldbeschrijving toe te voegen resulteert in het beschikbaar zijn van deze tekst in Figma's Layer en Inspect panelen.

![Afbeelding met onbeschrijvende naam](https://user-images.githubusercontent.com/248921/140959070-29703f9f-6b66-4fe8-947d-52905dc84458.png)

![Afbeelding met beschrijvende naam](https://user-images.githubusercontent.com/248921/140959094-c7b3b87e-f49a-4f23-8893-7e93080f94a9.png)
