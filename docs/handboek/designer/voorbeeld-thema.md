---
title: Voorbeeld-thema · Thema · Handboek
hide_title: true
hide_table_of_contents: true
sidebar_label: Voorbeeld-thema
sidebar_position: 3
pagination_label: Voorbeeld-thema
description: Toelichting over het Voorbeeld-thema
slug: /handboek/huisstijl/themas/voorbeeld-thema
keywords:
  - componenten
  - design system
  - design tokens
  - thema's
  - voorbeeld-thema
---

# Voorbeeld-thema

Op deze pagina beschrijven we het doel en de stijl van het 'Voorbeeld-thema'.

## Doel van het Voorbeeld-thema

Met het Voorbeeld-thema laten we zien hoe je een eigen thema kunt doorvoeren op basis van het [Start-thema](/handboek/huisstijl/themas/start-thema). Het dient als 'voorbeeld'.

![Stijl van het Voorbeeld-thema uitgebeeld door middel van een violet vlak waarop met witte letters staat geschreven: Voorbeeld thema. Uitgesproken en vriendelijk. Rechts staat in dezelfde violet kleur Nederland afgebeeld als illustratie.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_voorbeeld-thema_stijl.png)

## Stijl van het Voorbeeld-thema

De stijl van het Voorbeeld-thema is uitgesprokener dan die van het Start-thema.

### Typografie

In tegenstelling tot het Start-thema wordt er bij het Voorbeeld-thema gebruikgemaakt van twee verschillende lettertypes: Noto Serif en Noto Sans.

![De teksten Noto Serif en Noto Sans worden afgebeeld met het overeenkomende lettertype.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_voorbeeld-thema_typografie.png)

Noto Serif wordt gebruikt voor koppen, Noto Sans voor alle andere tekst. Dat betekent dat basis-token `basis.heading.font-family` Noto Serif als waarde heeft gekregen.

De Noto-familie is open source en voldoet aan onze [richtlijnen voor typografie](/richtlijnen/stijl/typografie/). 

Leuk detail: De naam Noto komt van 'No Tofu. 'Tofu' is de bijnaam voor het rechthoekje dat je ziet (▯) wanneer een letter of karakter niet kan worden weergegeven op een scherm of printer. Dat betekent dat dit lettertype (bijna) alle talen ter wereld kan tonen, dus geen 'tofu-blokjes' meer op het scherm!

### Kleur

In het Voorbeeld-thema voert de kleur violet de boventoon, gecombineerd met puur wit.

![Twee cirkels. De linker is violet de rechter is wit met een grijze rand.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_voorbeeld-thema_kleur.png)

Maar dit zijn niet de enige kleuren die vanuit de huisstijl beschikbaar zijn gesteld. Er is een ondersteunend palet met blauwgrijze tinten en diverse signaalkleuren. Deze huisstijlkleuren hebben allemaal een Nederlandse benaming: violet, grijs, blauw, groen, geel, oranje en rood.

![Zeven verticale kleurenschema's voor de kleuren violet, grijs, blauw, groen, geel, oranje en rood. De kleurenschema's starten met de meest lichte tint bovenaan en worden naar beneden toe steeds donkerder.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_voorbeeld-thema_kleur-trap.png)

Al deze kleuren zijn als design tokens op het 'Brand' niveau vastgelegd. Door vanuit de basis-tokens, op het 'Common' niveau, naar deze huisstijlkleuren te verwijzen, worden ze op alle componenten toegepast.

![De afbeelding toont een blauwe en violet primaire knop. Daarboven staan de verwijzingen vanuit de verschillende token niveau's.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_voorbeeld-thema_basis-tokens.png)

Violet leent zich uitstekend als kleur voor interactie. Daarom is ervoor gekozen om de violetkleur toe te passen op knoppen. Door de waarden van de basis-tokens `action-1` en `action-2` aan te passen, hebben de knoppen een afwijkende kleur ten opzichte van andere interactieve componenten.

![De afbeelding toont de componenten Button, Link, Breadcrumb Navigation en Page Number Navigation. De knoppen zijn violet. Alle andere interactieve componenten zijn blauw.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_voorbeeld-thema_basis-tokens_kleur-action-voorbeeld.png)

De stijl van het Voorbeeld-thema is uitgesproken. Dit zie je ook terug in de [Page Footer](/page-footer), waar violet via de basis-token `basis.color.accent-1-inverse.bg-default` echt van de pagina knalt.

![De afbeelding toont de componenten Page Header en Page Footer. In beide componenten komt de violet kleur terug. Bij de Page Footer wordt de violetkleur als achtergrond gebruikt waardoor deze visueel zeer aanwezig is.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/img_voorbeeld-thema_basis-tokens_kleur-accent-inverse.png)

### Overige keuzes

Vooralsnog zijn dit de wijzigingen ten opzichte van het Start-thema. De iconensets en waarden van basis-tokens voor ruimte, afmetingen, afgeronde hoeken, lijndikte en schaduw zijn verder ongewijzigd. Pas deze gerust aan als dit voor jouw organisatie wel nodig is.

---

## Help deze documentatie te verbeteren

Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via [GitHub](https://github.com/nl-design-system/documentatie).

## Vragen

Heb je een vraag? Twijfel niet en [neem contact op met het kernteam](/project/kernteam).
