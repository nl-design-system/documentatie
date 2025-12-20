---
title: 3. Ontwikkelfase · Candidate stappenplan · Component bijdragen · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: 3. Ontwikkelfase
sidebar_position: 3
pagination_label: 3. Ontwikkelfase
description: Stappen voor de Ontwikkelfase fase van de Definition of Done voor Candiate
slug: /handboek/estafettemodel/componenten/candidate/ontwikkelfase
keywords:
  - componenten
  - design system
  - estafettemodel
  - definition of done
  - candidate
---

<!-- @license CC0-1.0 -->

# Ontwikkelfase voor Candidate componenten

De Ontwikkelfase start wanneer de Voorbereidingsfase is afgerond. Dan zijn alle acceptatiecriteria en benodigde testcases bepaald.

In de Ontwikkelfase wordt de component in CSS, React en Figma beschikbaar gemaakt en wordt documentatie geschreven waarmee de community de component kan gebruiken.

![Een overzicht van de stappen in de Ontwikkelfase, van links naar rechts op volgorde en van boven naar beneden gegroepeerd per specialisme die hierbij betrokken is: Developer relations en design relations (samen relations), toegankelijkheidsspecialist, developer, designer en design system lead met productmanager (samen lead).](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-ontwikkelfase.png)

[Bekijk de illustratie voor de ontwikkelfase op een losse pagina](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-ontwikkelfase.png)

De stappen en substappen in de ontwikkelfase kunnen soms parallel worden opgepakt, maar hebben hierin wel relatie tot elkaar. Bovenstaande visualisatie laat de volgende stappen zien:

- React Component
  1. Gemaakt door de developer
  2. Gereviewed door de DS Lead & Product Manager
- CSS Component
  1. Gemaakt door de developer
  2. Gereviewed door de DS Lead & Product Manager
- Figma Component
  1. Gemaakt door de designer
  2. Gereviewed door de DS Lead & Product Manager
- Voorbeeld thema ingesteld door relations
- Documentatie
  1. Geschreven door de toegankelijkheidsspecialist, developer, designer
  2. Gereviewed door de DS Lead & Product Manager

## React component {#react}

### Doel

De Candidate component is aantoonbaar te gebruiken in tenminste 1 veelgebruikt frontend framework, kan makkelijk gedocumenteerd worden in Storybook en werkt goed op onze eigen websites.

### Uitkomst

React component is ontwikkeld, maakt gebruik van de CSS component en wordt gebruikt in de Storybook en testbestanden.

## CSS component {#css}

### Doel

De Candidate component kan makkelijk beschikbaar worden gemaakt in elk framework naar keuze en heeft hierbij dezelfde gedeelde stylesheet. Bij componenten met een native equivalent is er een HTML variant te gebruiken, zodat deze ook kan worden gebruik voor output uit CMSen en APIs waar geen classnames kunnen worden toegepast op de HTML.

### Uitkomst

- De component is beschikbaar in mixins die goed kunnen worden ingezet in systemen waar geen controle is over de HTML, maar wel een losse stylesheet kan worden ingeladen.
- De CSS is herbruikbaar opgezet zodat deze als 1 bron van waarheid gebruikt kan worden tussen verschillende framework implementaties, in situaties waar geen controle is over de HTML of in de shadow dom van een web component.
- De component heeft mogelijkheden om alle variaties en states te testen in visuele regressietests

## Figma component {#figma}

### Doel

De Candidate component kan makkelijk ingezet worden door designers en is snel in te stellen op een eigen huisstijl.

### Uitkomst

- De component is beschikbaar in Figma en heeft dezelfde API's en states zoals deze in code zijn vastgelegd zodat hij goed overdraagbaar is naar development
- De component is ingesteld in het start-thema met gebruik van basis-tokens

## Voorbeeld thema {#voorbeeld-thema}

### Doel

De Candidate component is goed in te zetten voor prototyping zonder eerst een eigen huisstijl in te stellen.

### Uitkomst

De component is beschikbaar in de Voorbeeld bibliotheek in Figma en is goed in te zetten voor prototyping.Er is een voorbeeld-huisstijl die gebruikt kan worden in de documentatie van de component.

## Documentatie {#documentatie}

### Doel

De Candidate component en varianten zijn makkelijk te gebruiken voor developers en designers zodat het laagdrempelig is om de component te gebruiken, en het kernteam daardoor voldoende feedback krijgt om de component te selecteren voor de Hall of Fame stappen.

### Uitkomst

De component documentatie van de beschikbare varianten en APIs is beschikbaar in een herbruikbaar Markdown bestand, op npm en in Storybook voor developers en in Figma voor designers.

## Rond de ontwikkelfase af {#afronden}

### Doel

De Candidate component is cosistent in code, figma en documentatie.

### Uitkomst

De testfase kan starten en kan parallel uitgevoerd worden. De Candidate component wordt pas getest wanneer alle onderdelen klaar staan.
