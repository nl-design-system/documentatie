---
title: 1. Selectiefase · Candidate stappenplan · Component bijdragen · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: 1. Selectiefase
sidebar_position: 1
pagination_label: 1. Selectiefase
description: Stappen voor de Selectiefase fase van de Definition of Done voor Candiate
slug: /handboek/estafettemodel/componenten/candidate/selectiefase
keywords:
  - componenten
  - design system
  - estafettemodel
  - definition of done
  - candidate
---

<!-- @license CC0-1.0 -->

# Selectiefase voor Candidate componenten

Een component wordt pas door het kernteam opgepakt voor de Candidate fase wanneer deze aan een aantal voorwaarden voldoet. Deze voorwaarden vormen de selectiefase van de component.

![Een overzicht van de stappen in de Selectiefase. Deze Selectiefase kan op 2 manieren. De normale manier, hier in grijs aangegeven, waarbij er tenminste 1 community implementatie is, deze goed instelbaar is voor verschillende huisstijlen, de community inplementatie goed bruikbaar is in diverse projecten en is getest met een WCAG-EM toegankelijkheidsaudit. Alternatief is er de Fast-track, hier in groen aangegeven, waar besloten wordt of de component dringend nodig is voor toegankelijkheid.](https://github.com/nl-design-system/documentatie/blob/assets/candidate-stappenplan-selectiefase.png?raw=true)

Selectiefase kan op 2 manieren verlopen. Normaal kijkt het kernteam of er tenminste 1 Community implementatie bestaat, die goed bruikbaar is voor verschillende huisstijlen, goed bruikbaar is in diverse projecten en getest is met tenminste 1 WCAG-EM toegankelijkheidsaudit.

Omdat sommige componenten met urgentie toegevoegd moeten worden aan het design system kan bij uitzondering ook gebruik worden gemaakt van de zogenaamde de Fast Track, deze vervangt dan de andere stappen uit de selectiefase.

## Huisstijl input {#huisstijl}

We hebben input nodig uit de community om een goede Candidate component te bouwen die te gebruiken is in alle huisstijlen. Het is daarom belangrijk dat tenminste 1 Community implementatie succesvol ingezet wordt in meerdere verschillende huisstijlen.

### Doel

Het kernteam kan gebruik maken van de kennis en kunde uit de community om te bepalen welke design tokens goed werken en hoeft dit niet zonder praktijk ervaring te besluiten.

### Uitkomst

De community heeft genoeg praktijk input gegegeven welke design tokens noodzakelijk zijn, zodat de Candidate component goed aansluit bij de behoefte uit de community.

Het kernteam pakt geen componenten op die in de Community fase nog niet voldoende bruikbaar zijn gebleken voor verschillende huisstijlen.

### Kan de community helpen?

Dat kan door je huisstijl in te stellen voor 1 of meer Community implementaties en met het kernteam te delen hoe dat was.

- Deel het resultaat in de GitHub Discussions en in de themes repository.
- Deel eventuele tekortkomingen in de GitHub issues van de Community implementatie.
- Werk samen met de community om verbeteringen op de component door te voeren en deel de resultaten hiervan in de Heartbeat of in de GitHub Discussion van de component.

## Productie input {#productie}

We hebben input nodig uit de community om een Candidate component te bouwen die goed te gebruiken is in meerdere projecten in productie. Het is daarom belangrijk dat een Community component in meer dan 1 project gebruikt is èn in tenminste 1 project ook succesvol in productie is genomen.

### Doel

Het kernteam kan gebruik maken van de kennis en kunde uit de community om te bepalen op welke manier een Candidate component goed kan werken voor eindgebruikers. Het kernteam hoeft niet zonder praktijkervaring te besluiten wat ervoor nodig is om dit voor meerdere projecten succesvol te doen.

### Uitkomst

Er is voldoende informatie om te zorgen dat de Candidate de juiste functionaliteiten en varianten krijgt die noodzakelijk zijn om de component succesvol te gebruiken in verschillende projecten.

Doordat de component gebruikt is in meerdere producten kan worden aangenomen dat hij niet alleen aan functionele eisen voldoet, maar ook aan de niet-functionele eisen die door verschillende organisaties zijn gesteld.

Eindgebruikers hebben de kans gehad om problemen te melden. Issues die ontdekt worden door componenten in productie te gebruiken zijn gevonden en al zoveel mogelijk opgelost.

Het kernteam selecteert alleen componenten die aantoonbaar nodig zijn en goed werken voor verschillende projecten en daarmee een permanente plek verdienen in het design system.

### Kan de community helpen?

Dat kan door de beschikbare Community componenten te gebruiken in je projecten, in plaats van deze opnieuw te bouwen.

- Deel waar de component is gebruikt in de Heartbeat of in de GitHub Discussion van de component.
- Maak issues aan voor eventuele verbeteringen in de Community Implementatie.
- Werk samen met de community om verbeteringen op de component door te voeren en deel de resultaten hiervan in de Heartbeat of in de GitHub Discussion van de component.

## WCAG input {#wcag}

We hebben input nodig uit de community om een Candidate component te bouwen die toegankelijk is en succesvol door WCAG-EM audits heen komt. Wanneer een Community component gebruikt is in project waarvoor een toegankelijkheidsrapport is gemaakt, dan weet het kernteam of er problemen met toegankelijkheid zijn waar rekening mee moet worden houden.

### Doel

Het kernteam kan gebruik maken van de kennis en kunde uit de community om te bepalen op welke manier een Candidate component toegankelijk kan worden ingezet èn succesvol door WCAG-EM audits heen komt. Het kernteam hoeft niet zonder praktijkervaring te besluiten wat ervoor nodig is om dit succesvol te doen.

### Uitkomst

Er is voldoende informatie welke functionaliteit, acceptatiecriteria, tests en documentatie de component nodig heeft om toegankelijk ingezet te kunnen worden.

Het kernteam selecteert alleen componenten die getest zijn in tenminste 1 WCAG-EM toegankelijkheidsaudit, zodat voldoende informatie beschikbaar is of deze succesvol gebruikt kan worden in productie.

### Kan de community helpen?

Dat kan door het kernteam te laten weten dat de component gebruikt is op een pagina die meegenomen is in een WCAG-EM audit, of een WCAG test in het algemeen.

- Zet een link naar het toegankelijkheidsrapport in de GitHub Discussion van de component.
- Maak issues aan voor eventueel gevonden problemen in de Community implementatie.
- Stel vragen over het oplossen van de toegankelijkheidsproblemen in Design Open Hour, Developer Open Hour of in Slack.
- Werk samen met de community om verbeteringen op de component door te voeren, zodat deze kunnen worden meegenomen in een hertest en deel de resultaten hiervan in de Heartbeat of in de GitHub Discussion van de component.
- Deel eventuele extra documentatie die jouw organisatie beschikbaar heeft voor het toegankelijk maken of inzetten van de component in de GitHub Discussion van de component.

## Fast Track? {#fast-track}

Een component kan ook zó belangrijk zijn voor verbetering van toegankelijkheid dat de prioriteit alleen al hierdoor enorm omhoog gaat, waardoor het waardevol is om zónder de andere selectie checks de component op te pakken als kernteam.

### Doel

Het kernteam kan bij uitzondering componenten oppakken die nog niet voldoende beschikbaar of bruikbaar zijn als Community implementatie.

### Uitkomst

Componenten die belangrijk zijn voor toegankelijke websites en webapplicaties van de overheid kunnen beschikbaar worden gemaakt voor de community. Ook als er niet voldoende tijd of specialistische kennis beschikbaar is om hier een Community implementatie beschikbaar voor te maken die voldoet aan alle eisen van de selectiefase.

### Hoe kan de community helpen?

Dat kan door WCAG-audits te delen waarin de component ontoegankelijk gebruikt blijkt te worden en door op Slack, in de Developer Open Hour of Design Open Hour hulp te vragen voor het toegankelijker maken van de component. Hiermee wordt de prioriteit van de component hoger, waardoor de kans op een fast track toeneemt.

## Rond de selectiefase af {#afronden}

Het kernteam laat de community weten dat de component is geselecteerd voor het Candidate proces.

### Doel

De Candidate component heeft zo veel mogelijk draagvlak in de community, doordat niet per ongeluk onbekende issues met de bestaande componenten opnieuw in de Candidate component zitten.

### Uitkomst

De community weet dat het kernteam de component heeft geselecteerd voor het Candidate proces zodat ze ongedocumenteerde problemen nog vast kunnen te leggen in de Backlog voor gebruik in de voorbereidingsfase.
