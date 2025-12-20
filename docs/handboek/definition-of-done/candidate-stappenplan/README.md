---
title: Overzicht · Candidate Stappenplan · Definition of Done · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Overzicht
sidebar_position: 1
pagination_label: Overzicht
description: Overzicht van de Definition of Done voor componenten
slug: /handboek/estafettemodel/componenten/candidate
keywords:
  - componenten
  - design system
  - estafettemodel
  - definition of done
---

<!-- @license CC0-1.0 -->

# Candidate stappenplan

Het Candidate stappenplan bestaat uit 5 fases. Elke fase wordt afgerond voordat de volgende fase kan beginnen.

## 1. Selectiefase

<!-- ### Doel -->

Het kernteam wil met de selectiefase zorgen dat er genoeg input verzameld is door de community om een succesvolle Candidate component te maken die voldoet aan de eisen en wensen van de organisaties die deze gaan gebruiken.

<!-- ### Uitkomst -->

Alleen een component die voldoende is gebruikt wordt geselecteerd voor het Candidate proces. Zo heeft het kernteam voldoende input om een Candidate component mee te maken en is er voldoende animo in de community om input te geven op de Candidate implementatie zodat deze uiteindelijk in de Hall of Fame kan worden opgenomen.

Meer weten? [Bekijk de stappen van de Selectiefase](/handboek/estafettemodel/componenten/candidate/selectiefase)

## 2. Voorbereidingsfase

<!-- ### Doel -->

Het kernteam wil met de voorbereidingfase voorkomen dat er steeds nieuwe richtingen gekozen moeten worden tijdens de ontwikkelfase en zorgen dat de ontwikkeling van de verschillende component implementaties en documentatie zo veel mogelijk in parallel kan gebeuren.

<!-- ### Uitkomst -->

Alleen een component waar alle acceptatiecriteria voor zijn vastgesteld wordt als Candidate beschikbaar gemaakt. Input uit de community is omgezet naar acceptatiecriteria en testcases die worden gebruikt om op basis van de Community implementaties een robuust en goed onderbouwd component te maken. Ook andere organisaties kunnen eventueel tijdens de ontwikkeling gelijk rekening houden met de uitgebreide testset waar de component aan moet voldoen.

Meer weten? [Bekijk de stappen van de Voorbereidingsfase](/handboek/estafettemodel/componenten/candidate/voorbereidingsfase)

## 3. Ontwikkelfase

<!-- ### Doel -->

Het kernteam wil met de ontwikkelfase zorgen dat er gefocust kan worden op een goed gedocumenteerd, voorspelbaar component die hetzelfde werkt in verschillende implementaties.

<!-- ### Uitkomst -->

De Candidate component is gebouwd op basis van de Community implementaties, acceptatiecriteria en testcases.

Er zijn implementaties beschikbaar in CSS, React en Figma en er is documentatie hoe deze implementaties gebruikt kunnen worden.

Meer weten? [Bekijk de stappen van de Ontwikkelfase](/handboek/estafettemodel/componenten/candidate/ontwikkelfase)

## 4. Testfase

<!-- ### Doel -->

Het kernteam wil met de testfase zorgen dat alle problemen die met de acceptatiecriteria konden worden voorkomen opgelost worden voordat de component gepubliceerd wordt, zodat de community de component met vertrouwen kan inzetten en vooral feedback hoeft te geven over eventueel missende functionaliteit.

<!-- ### Uitkomst -->

Alle problemen die op basis van de vastgestelde acceptatiecriteria en testcases konden worden voorzien zijn gevonden en opgelost. Onnodige bugs en breaking changes die te voorzien zijn worden zo voorkomen.

Meer weten? [Bekijk de stappen van de Testfase](/handboek/estafettemodel/componenten/candidate/testfase)

## 5. Publicatiefase

<!-- ### Doel -->

Het kernteam zorgt met de publicatiefase dat de component kan worden ingezet door organisaties die nu de Community component gebruiken, organisaties die de Community component bijdragen èn door nieuwe organisaties.

<!-- ### Uitkomst -->

De Candidate component is beschikbaar op npm, in Figma en op [nldesignsystem.nl](https://nldesignsystem.nl).

Meer weten? [Bekijk de stappen van de Publicatiefase](/handboek/estafettemodel/componenten/candidate/publicatiefase)

## Voortgang bekijken

Op de component pagina van componenten die tenminste de Community status hebben bereikt is de voorgang van het Candidate proces te volgen onder het kopje Definition of Done. Zie bijvoorbeeld [de Button pagina](/button#definition-of-done).

De stappen worden bijgehouden in het GitHub projectbord [Components - 3 - Candidate](https://github.com/orgs/nl-design-system/projects/80/views/1) en regelmatig geupdatet op de website.

:::info[Emojis]
Om goed overzicht te houden in het bord met veel kolommen gebruikt het kernteam Emojis in de titel van elke kolom om de fase waar een stap bij hoort aan te duiden. De volgende Emojis worden voor de verschillende fases gebruikt:

1. 🔍: Selectiefase. Vergrootglas wordt hier gebruikt omdat in deze fase gespeurd wordt of er voldoende community input beschikbaar is om aan de rest van het Candidate proces te beginnen.
2. 📝: Voorbereidingsfase. Notitieblok met potlood wordt hier gebruikt omdat in deze fase de acceptatiecriteria en testcases worden vastgesteld.
3. 🛠️: Ontwikkelfase. Hamer met moersleutel wordt hier gebruikt omdat in deze fase dingen gemaakt worden.
4. 🧪: Testfase. Reageerbuis wordt hier gebruikt omdat in deze fase gekeken wordt of de component zich gedraagt zoals wordt verwacht.
5. 🚀: Publicatiefase. Raket wordt hier gebruikt omdat de component in deze fase gelanceerd wordt.
   :::
