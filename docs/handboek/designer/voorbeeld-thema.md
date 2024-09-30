---
title: Voorbeeld thema • Designer • Handboek
hide_title: true
hide_table_of_contents: true
sidebar_label: Voorbeeld thema
sidebar_position: 5
pagination_label: Voorbeeld thema
description: Toelichting op design keuzes voor het Voorbeeld thema.
keywords:
  - index
  - designer
  - meedoen
  - Voorbeeld thema
  - figma
---

# Voorbeeld thema

Het NL Design System heeft van zichzelf geen huisstijl. Maar om de werking en kracht van Design Tokens aan te tonen maken we wel gebruik van een ‘Voorbeeld’ thema.

**Dit thema mag je helemaal aanpassen naar de huisstijl van jouw organsatie.**

Hieronder leggen we uit welke keuzes we gemaakt hebben voor het Voorbeeld thema.

## Typografie

![Visuale weergave van het lettertypes Source Serif Pro en Fira Sans.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_typografie.png)

In het Voorbeeld thema maken we gebruik van de lettertypes ‘Source Serif Pro’ en ‘Fira Sans’. Beide lettertypes zijn Open Source te gebruiken en voldoen aan de richtlijnen die we voor [Typografie](../../richtlijnen/stijl/typografie.md) hebben beschreven. Daarnaast zijn beide lettertypes standaard onderdeel van Figma. Hierdoor hoef je ze niet apart te installeren om te starten met de NL Design System bibliotheek.

## Kleuren

![Visuale weergave van het kleurenpalet.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_kleuren.png)

In het Voorbeeld thema hebben we op [‘Brand token’ niveau](../../handboek/design-tokens/README.mdx) een zeer uitgebreid kleurenpalet opgenomen. Dit kleurenpalet bestaat uit 9 hoofdkleuren: Violet, Grijs, Roze, Rood, Oranje, Geel, Groen, Zee-groen en Blauw. En is aangevuld met zwart, wit en een aantal transparante opties. Het biedt ons veel opties met betrekking tot feedback componenten en bijvoorbeeld een dark-mode thema.

## Iconen

### Functionele iconen

![Tabler logo met op de achtergrond allerlei verschillende iconen uit deze set.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_functionele-iconen.png)

Voor functionele iconen maken we gebruik van een selectie uit de [Tabler iconenset](https://tabler-icons.io/). Deze set bestaat uit meer dan 3100 outline iconen die Open Source worden aangeboden. Je mag deze iconenset dus ook gebruiken voor jouw organisatie.

Vanuit het NL Design System onderhouden we deze iconenset niet. Het gebruik ervan is daarom je eigen verantwoordelijkheid. Mis je een icoon? Dan kun je deze zelf toevoegen.

**Let op!** De iconen van de Tablet iconenset zijn opgebouwd uit lijnen (stroke) met een lijndikte van 2px. Hierdoor blijft de lijndikte 2px ongeacht hoe groot het icoon is. Zoals aangegeven in de [richtlijnen rondom iconen](../../richtlijnen/stijl/iconen.md) is dit niet het gewenste gedrag. Daarom hebben we de iconen in het Voorbeeld thema omgezet van lijn naar vorm (outline stroke).

De Tabler iconenset is ontworpen op een 24×24 grid. Dit formaat nemen we dan ook als uitgangspunt bij het ontwerpen van componenten. Vandaar dat de waarde van common token `nl.icon.functional.size` 24×24 betreft.

### Toptaak iconen

![Gemeente iconen logo met op de achtergrond allerlei verschillende iconen uit deze set.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_voorbeeld-thema_toptaak-iconen.png)

Voor toptaak iconen maken we gebruik van de outline versie van [OpenGemeenten iconenset](https://www.gemeenteniconen.nl/). Deze set bestaat uit meer dan 200 iconen die Open Source worden aangeboden. Je mag deze iconenset dus ook gebruiken voor jouw organisatie.

Vanuit het NL Design System onderhouden we deze iconenset niet. Het gebruik ervan is daarom je eigen verantwoordelijkheid. Mis je een icoon? Neem dan contact op met [OpenGemeenten](https://www.gemeenteniconen.nl/doe-mee).

De OpenGemeenten iconenset is ontworpen op een 48×48 grid. Dit formaat nemen we dan ook als uitgangspunt bij het ontwerpen van componenten. Vandaar dat de waarde van common token `nl.icon.toptask.size` 48×48 betreft.

---

## Help deze documentatie te verbeteren

Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via [Github](https://github.com/nl-design-system/documentatie).

## Vragen

Heb je een vraag? Twijfel niet en [neem contact op met het kernteam](../../project/kernteam.mdx).
