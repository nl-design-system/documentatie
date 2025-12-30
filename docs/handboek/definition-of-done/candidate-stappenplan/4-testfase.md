---
title: 4. Testfase · Candidate stappenplan · Component bijdragen · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: 4. Testfase
sidebar_position: 4
pagination_label: 4. Testfase
description: Stappen voor de Testfase van de Definition of Done voor Candidate
slug: /handboek/estafettemodel/componenten/candidate/testfase
keywords:
  - componenten
  - design system
  - estafettemodel
  - definition of done
  - candidate
---

<!-- @license CC0-1.0 -->

# Testfase voor Candidate componenten

De Testfase start wanneer de Ontwikkelfase is afgerond. Dan zijn alle implementaties beschikbaar zodat alle acceptatiecriteria gevalideerd en testcases uitgevoerd kunnen worden.

In de Testfase wordt de component getest volgens de acceptatiecriteria en testcases uit de community. Er wordt gevalideerd of de test coverage voldoende is voor een robuust component.

Door te valideren of er voldoende testcases zijn en een baseline vast te stellen kunnen regressies makkelijk voorkomen worden wanneer de Candidate component wordt doorontwikkeld na feedback uit de community.

![Een overzicht van de stappen in de Testfase, van links naar rechts op volgorde en van boven naar beneden gegroepeerd per specialisme die hierbij betrokken is: Developer relations en design relations (samen relations), toegankelijkheidsspecialist, developer, designer en design system lead met productmanager (samen lead).](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-testfase.png)

[Bekijk de illustratie voor de testfase op een losse pagina](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-testfase.png)

De stappen en substappen in de testfase kunnen soms parallel worden opgepakt, maar hebben hierin wel relatie tot elkaar. Bovenstaande visualisatie laat de volgende stappen zien:

- Design tokens getest
  1.  Getest in Chromatic en baseline vastgesteld door Developer Relations & Design Relations
  2.  Gevonden problemen opgelost door developer
  3.  Opnieuw getest door Developer Relations & Design Relations
- Accessibility getest
  1.  Getest volgens acceptatiecriteria voor toegankelijkheid door toegankelijkheidsspecialist
  2.  Gevonden problemen opgelost door developer
  3.  Opnieuw getest door toegankelijkheidsspecialist
- Test coverage getest
  1.  Missende tests opgesteld door DS Lead & Product Manager
  2.  Gevonden probelemen opgelost door developer
- NL Design System architectuur
  1.  Opleveringen in code en Figma getoetst aan architectuur door DS Lead & Product Manager
  2.  Gevonden problemen opgelost door developer en designer
  3.  Opnieuw getest door DS Lead & Product Manager
- Documentatie getest en gevonden problemen opgelost door relations
- Testcases getest en gevonden problemen opgelost door developer en designer

## Design Tokens getest

### Doel

De Candidate component kan voorspelbaar worden ingezet door de verschillende organisaties in de community met een eigen huisstijl.

### Uitkomst

De Candidate component voldoet aan de acceptatiecriteria voor design tokens. De baseline voor de visuele regressietests in Chromatic is vastgesteld. Alle design tokens zijn getest met twee verschillende invullingen in Stories. Gevonden problemen zijn opgelost.

## Accessibility getest

### Doel

De Candidate component kan toegankelijk worden ingezet door de verschillende organisaties in de community.

### Uitkomst

De Candidate component voldoet aan de acceptatiecriteria voor toegankelijkheid. Alle stories in de algemene Storybook en test Storybook zijn voorzien van de uitkomsten van de toegankelijkheidstest. Missende Stories en unit tests zijn toegevoegd. Gevonden problemen zijn opgelost.

## Testcases getest

### Doel

De Candidate component kan goed worden ingezet in productie. De component kan omgaan met verschillende soorten data, met verschillende schermformaten, met verschillende zoom levels, met forced colors mode, en andere gebruikersinstellingen.

### Uitkomst

De Candidate component voldoet aan de acceptatiecriteria en testcases voor gebruik. Alle geautomatiseerde tests slagen. De tests die niet automatisch te testen zijn te herkennen aan `describe.todo` en `it.todo` en zijn succesvol handmatig getest.

## Test coverage getest

### Doel

De Candidate component kan goed onderhouden worden en makkelijk worden uitgebreid doordat alle bestaande functionaliteit gedekt is in de tests.

### Uitkomst

Alle acceptatiecriteria voor de component zijn beschreven in unit tests of Stories. Waar nodig zijn extra testcases toegevoegd voor functionaliteit die nog niet is gedekt, of manieren waarop de component kan gebruikt die nu niet zijn opgenomen.

## Documentatie getest

### Doel

De Candidate component kan makkelijk worden ingezet door developers en designers in de community. Het is duidelijk welke acceptatiecriteria voor toegankelijkheid er al in de component zijn opgenomen en welke nog door de gebruiker moeten worden getest.

### Uitkomst

De Candidate component documentatie staat klaar om in de publicatiefase beschikbaar te hebben. Er is documentatie voor gebruik van de component in React, CSS en Figma.

## Rond de testfase af {#afronden}

### Doel

De Candidate component voldoet aan de acceptatiecriteria die hiervoor in de voorbereidingsfase zijn opgesteld.

### Uitkomst

Er is nog een keer goed gekeken of er in de voorbereidingsfase testcases zijn vergeten die het kernteam voor een robuust component toch noodzakelijk vindt.

De publicatiefase kan starten nu de Candidate component klaar is voor gebruik en input uit de community.
