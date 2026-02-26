---
title: Overzicht
hide_title: true
hide_table_of_contents: false
sidebar_label: Overzicht
sidebar_position: 1
pagination_label: Overzicht
description: Overzicht van de Definition of Done voor Hall of Fame componenten
slug: /handboek/estafettemodel/componenten/hall-of-fame
keywords:
  - componenten
  - design system
  - estafettemodel
  - definition of done
---

<!-- @license CC0-1.0 -->

# Hall of Fame stappenplan

Het Hall of Fame stappenplan bestaat uit 6 fases. Elke fase wordt afgerond voordat de volgende fase kan beginnen.

## 1. Feedbackfase

<!-- ### Doel -->

Het kernteam zorgt er met de Feedbackfase voor dat dat de community voldoende tijd heeft om de Candidate component uit te proberen in projecten en in verschillende huisstijlen. Zo kan de Hall of Fame component stabiel worden opgeleverd, met weinig kans op breaking changes, omdat deze in de Feedbackfase al zijn verwerkt.

<!-- ### Uitkomst -->

Het kernteam heeft geholpen om de Candidate component in verschillende projecten in te zetten, gevonden issues zijn opgelost en feedback voor de aanpak van de component is verwerkt.

Meer weten? [Bekijk de stappen van de Feedbackfase](/handboek/estafettemodel/componenten/hall-of-fame/feedbackfase)

## 2. Selectiefase

<!-- ### Doel -->

Het kernteam wil met de Selectiefase zorgen dat er genoeg feedback gegeven is door de community om een succesvolle Hall of Fame component te maken die voldoet aan de eisen en wensen van de organisaties die deze gaan gebruiken.

<!-- ### Uitkomst -->

Alleen een component die voldoende is gebruikt, wordt geselecteerd voor het Hall of Fame proces. Zo heeft het kernteam voldoende feedback om een stabiele Hall of Fame component te maken waarvoor geen breaking changes meer worden verwacht.

Meer weten? [Bekijk de stappen van de Selectiefase](/handboek/estafettemodel/componenten/hall-of-fame/selectiefase)

## 3. Voorbereidingsfase

<!-- ### Doel -->

Het kernteam wil met de Voorbereidingfase zorgen dat beslissingen genomen zijn voordat de Ontwikkelfase van start gaat zodat de documentatie, stories en de component zoveel mogelijk parallel kunnen worden gemaakt.

<!-- ### Uitkomst -->

Er is voldoende informatie over security, privacy, screenreader-gedrag en gerelateerde componenten om consistente documentatie en stories beschikbaar te maken in de Ontwikkelfase.

Meer weten? [Bekijk de stappen van de Voorbereidingsfase](/handboek/estafettemodel/componenten/hall-of-fame/voorbereidingsfase)

## 4. Ontwikkelfase

<!-- ### Doel -->

Het kernteam wil met de Ontwikkelfase zorgen dat er gefocust kan worden op een goed gedocumenteerde en voorspelbare component waar developers en designers alle informatie hebben om deze toegankelijk en gebruiksvriendelijk in te zetten.

<!-- ### Uitkomst -->

De Hall of Fame component is gebouwd op basis van de Candidate component en heeft een webcomponent-implementatie zodat deze framework-onafhankelijk kan worden ingezet.

Er is documentatie beschikbaar zodat veelgemaakte fouten kunnen worden voorkomen en er zijn voorbeelden beschikbaar om deze fouten eenvoudig op te kunnen lossen.

Meer weten? [Bekijk de stappen van de Ontwikkelfase](/handboek/estafettemodel/componenten/hall-of-fame/ontwikkelfase)

## 5. Testfase

<!-- ### Doel -->

Het kernteam wil met de Testfase zorgen dat de component voldoet aan de [NL Design System Baseline](/baseline), zodat de community de component met vertrouwen kan inzetten. Bugs en breaking changes worden zo voorkomen.

De documentatie is goed te begrijpen door developers, designers en contentmakers zodat de component toegankelijk en gebruiksvriendelijk wordt ingezet.

<!-- ### Uitkomst -->

Alle problemen die tijdens het testen naar voren komen, zijn direct opgelost. Daarnaast zijn extra testcases toegevoegd om deze fouten in de toekomst waar mogelijk automatisch te detecteren.

Meer weten? [Bekijk de stappen van de Testfase](/handboek/estafettemodel/componenten/hall-of-fame/testfase)

## 6. Publicatiefase

<!-- ### Doel -->

Het kernteam zorgt met de Publicatiefase dat de component kan worden ingezet door organisaties die nu de Candidate component gebruiken, organisaties die een Candidate extensie hebben bijgedragen èn door nieuwe organisaties.

<!-- ### Uitkomst -->

De Hall of Fame component is beschikbaar op npm, in Figma, op [nldesignsystem.nl](https://nldesignsystem.nl) en in alle prototypes en hulpmiddelen die het kernteam onderhoudt.

Meer weten? [Bekijk de stappen van de Publicatiefase](/handboek/estafettemodel/componenten/hall-of-fame/publicatiefase)

## Voortgang bekijken

Op de componentpagina's van componenten die ten minste de Candidate status hebben bereikt is de voortgang van het Hall of Fame proces te volgen onder het kopje Definition of Done. Zie bijvoorbeeld [de Button pagina](/button#definition-of-done).

De stappen worden bijgehouden in het GitHub projectbord [Components - 4 - Hall of Fame](https://github.com/orgs/nl-design-system/projects/30) en regelmatig geüpdatet op de website.

:::info[Emojis]
Om goed overzicht te houden in het bord met veel kolommen gebruikt het kernteam emoji’s in de titel van elke kolom om de fase waar een stap bij hoort aan te duiden. De volgende emoji’s worden voor de verschillende fases gebruikt:

1. 💬: Feedbackfase. Spreekballon wordt hier gebruikt omdat in deze fase met de community wordt gesproken en samengewerkt om feedback op te halen over de Candidate component.
2. 🔍: Selectiefase. Vergrootglas wordt hier gebruikt omdat in deze fase gespeurd wordt of er voldoende community input beschikbaar is om aan de rest van het Hall of Fame proces te beginnen.
3. 📝: Voorbereidingsfase. Notitieblok met potlood wordt hier gebruikt omdat in deze fase de acceptatiecriteria en testcases worden vastgesteld.
4. 🛠️: Ontwikkelfase. Hamer met moersleutel wordt hier gebruikt omdat in deze fase dingen gemaakt worden.
5. 🧪: Testfase. Reageerbuis wordt hier gebruikt omdat in deze fase gekeken wordt of de component zich gedraagt zoals wordt verwacht.
6. 🚀: Publicatiefase. Raket wordt hier gebruikt omdat de component in deze fase gelanceerd wordt.
   :::
