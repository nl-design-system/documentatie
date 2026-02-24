---
title: 4. Ontwikkelfase · Hall of Fame stappenplan · Component bijdragen · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: 4. Ontwikkelfase
sidebar_position: 4
pagination_label: 4. Ontwikkelfase
description: Stappen voor de Ontwikkelfase van de Definition of Done voor Hall of Fame
slug: /handboek/estafettemodel/componenten/hall-of-fame/ontwikkelfase
keywords:
  - componenten
  - design system
  - estafettemodel
  - definition of done
  - hall of fame
---

<!-- @license CC0-1.0 -->

# Ontwikkelfase voor Hall of Fame componenten

## Richtlijnen voor invulling design tokens

### Doel

De Hall of Fame component heeft voldoende documentatie en hulpmiddelen om gebruikers zelfstandig de design tokens van de component op een voorspelbare en toegankelijke manier te laten invullen voor hun eigen huisstijl.

### Uitkomst

Er zijn duidelijke richtlijnen beschikbaar voor het invullen van alle design tokens van de component.

De kleurcombinaties waarmee de component voldoende contrast heeft zijn vastgelegd in JSON zodat hulpmiddelen automatisch waarschuwingen kunnen tonen voor combinaties die toegankelijkheidsproblemen kunnen veroorzaken (zoals onvoldoende kleurcontrast).

Voor de situaties die van toepassing zijn op een component, zijn voorbeelden beschikbaar in de Evil Storybook.

Voor de situaties herkennen zijn unit tests voor elke component, liefst op basis van de stories van Evil Storybook, met bijvoorbeeld Playwright.

## Richtlijnen voor redacteuren

### Doel

De Hall of Fame component heeft voldoende documentatie en hulpmiddelen zodat redacteuren en contentmakers de component goed en toegankelijk kunnen inzetten, zonder daar diepgaande technische kennis voor nodig te hebben.

### Uitkomst

Er zijn duidelijke richtlijnen beschikbaar voor redacteuren over hoe de component moet worden gebruikt in een CMS of andere contentmanagement tools. Deze richtlijnen bevatten concrete voorbeelden van goede en slechte content, uitleg over toegankelijkheidseisen (zoals alt-teksten of labelverplichtingen) en best practices voor gebruiksvriendelijkheid.

De contentrichtlijnen die van toepassing zijn op de component zijn vastgelegd in een JSON. De validatieregels zijn vastgelegd op component-niveau en element-niveau, zodat automatisch de link gelegd kan worden naar relevante documentatie, en hulpmiddelen automatisch waarschuwingen kunnen tonen.

## Risico's met betrekking tot security gedocumenteerd

### Doel

De Hall of Fame component kan werken in een veilige omgeving, bijvoorbeeld wanneer de website DigiD-gecertificeerd is. Er is voldoende documentatie zodat gebruikers van de component zich bewust zijn van security-aspecten en een aanpak kiezen om de component zo veilig mogelijk toe te passen.

## Uitkomst

Relevante security-aspecten uit de voorbereidingsfase zijn opgenomen in de component documentatie. Er is uitleg wat het risico is, in welke situaties het relevant is en welke maatregelen je kan nemen. Het kopje in de documentatie van de component overgeslagen wanneer security niet relevant is voor het component.

## Risico's met betrekking tot privacy gedocumenteerd

### Doel

De Hall of Fame component kan werken volgens AVG richtlijnen. Er is voldoende documentatie zodat gebruikers van de component zich bewust zijn van privacy-risico's en weten hoe ze deze kunnen voorkomen.

### Uitkomst

Alle geïdentificeerde privacy-risico's uit de voorbereidingsfase zijn opgenomen in de component documentatie. Voor elk risico is uitgelegd wat het risico is, welke AVG-verplichtingen spelen en welke maatregelen genomen kunnen worden. Als er geen privacy aspecten zijn is het kopje in de documentatie van de component overgeslagen.

## Doel van de component vastgelegd

### Doel

Gebruikers kunnen makkelijk de juiste component kiezen voor hun specifieke situatie omdat duidelijk is waarvoor de component bedoeld is en wanneer een andere component beter past.

### Uitkomst

Het doel en situaties waarin de component wordt gebruikt is vastgelegd in de documentatie van de component. Er is uitleg beschikbaar over wanneer deze component de juiste keuze is en in welke situaties een gerelateerde component een betere oplossing biedt.

## Don'ts voor toegankelijkheid gedocumenteerd

### Doel

De Hall of Fame component helpt veelgemaakte toegankelijkheidsfouten bij het gebruik van de component te voorkomen. Gebruikers kunnen proactief toegankelijkheidsproblemen voorkomen in plaats van deze achteraf te moeten oplossen.

### Uitkomst

Veelgemaakte toegankelijkheidsfouten bij het gebruik van de component zijn gedocumenteerd door voorbeelden van verkeerd gebruik te laten zien met concrete voorbeelden van een toegankelijk alternatief. Er zijn do's en don'ts die duidelijk maken hoe de component goed toegankelijk kanw orden ingezet. Deze documentatie bevat concrete voorbeelden en uitleg waarom bepaalde patronen toegankelijkheidsproblemen veroorzaken.

## Don'ts voor gebruiksvriendelijkheid gedocumenteerd

### Doel

De Hall of Fame component helpt veelgemaakte UX-fouten te voorkomen, zodat de component niet onbedoeld zorgt voor een slechte gebruikerservaring. Gebruikers kunnen zelf gebruiksvriendelijkheidsproblemen voorkomen en hoeven niet zelf door gebruikersfeedback te ontdekken wat wel en niet werkt.

### Uitkomst

Veelgemaakte gebruiksvriendelijkheidsfouten bij het gebruik van de component zijn gedocumenteerd als "Don'ts", elk met een duidelijke "Do" die laat zien wat wel de juiste manier is. Deze documentatie bevat concrete voorbeelden en uitleg waarom bepaalde patronen gebruiksonvriendelijk zijn.

## Richtlijnen gelinkt

### Doel

De documentatie is zo volledig dat gebruikers de componenten volgens alle best practices kunnen gebruiken, zonder de algemene richtlijnen overal in detail te herhalen.

### Uitkomst

Alle relevante [NL Design System richtlijnen](/richtlijnen) zijn gelinkt vanuit de component documentatie en andersom.

Gebruikers kunnen nu makkelijk achtergrond-informatie en context vinden zonder zelf te moeten zoeken naar de juiste richtlijnen.

## Candidate component overgenomen in Hall of Fame repository

### Doel

De Hall of Fame component gebruikt de Candidate component als solide basis, zodat alle inzichten uit validatie, gemaakte verbeteringen en testautomatisering behouden blijft.

### Uitkomst

De volledige Candidate component (inclusief code, tests, stories en documentatie) is overgezet naar de Hall of Fame repository als startpunt voor verdere ontwikkeling. Alle acceptatiecriteria waar de Candidate component aan voldoet worden meegenomen in de Hall of Fame versie.

## Hall of Fame component als Web Component beschikbaar

### Doel

Gebruikers kunnen de Hall of Fame component inzetten ongeacht hun technische keuzes en kunnen makkelijker migreren tussen frameworks zonder de component opnieuw te moeten implementeren.

### Uitkomst

De Hall of Fame component is beschikbaar als Web Component en kan worden gebruikt in elke moderne browser en in combinatie met elk frontend framework. De Web Component gebruikt dezelfde design tokens als de andere implementaties en heeft dezelfde API's.

## Stories uitgebreid

### Doel

De Hall of Fame component werkt met veelvoorkomende patronen die uit meerdere Hall of Fame en Candidate componenten bestaan. Gebruikers kunnen nu in de documentatie herkennen dat complexe patronen werken zoals verwacht, voordat ze deze implementeren.

### Uitkomst

Alle belangrijke combinaties van de component met andere Hall of Fame en Candidate componenten zijn getest en gedocumenteerd. Alle parent/child combinaties die beschikbaar zijn als Hall of Fame of Candidate component zijn opgenomen als Stories in Storybook. Ook zijn combinaties met verschillende states (zoals focus-visible, hover, disabled) gedocumenteerd, zodat developers kunnen verifiëren dat bijvoorbeeld een focus ring nog steeds zichtbaar is in een geneste situatie.

## Testautomatisering op hoogste niveau

### Doel

Voorkomen dat een kleine wijziging in de Hall of Fame onbedoelde gevolgen heeft bij een grote groep gebruikers.

### Uitkomst

De testautomatisering van de Candidate component is uitgebreid zodat een hoger percentage van de code automatisch wordt getest, bijvoorbeeld 100% _branch coverage_ van JavaScript en 100% van de CSS.
