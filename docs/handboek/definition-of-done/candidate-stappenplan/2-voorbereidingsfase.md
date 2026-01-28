---
title: 2. Voorbereidings · Candidate stappenplan · Component bijdragen · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: 2. Voorbereidingsfase
sidebar_position: 2
pagination_label: 2. Voorbereidingsfase
description: Stappen voor de Voorbereidingsfase van de Definition of Done voor Candidate
slug: /handboek/estafettemodel/componenten/candidate/Voorbereidingsfase
keywords:
  - componenten
  - design system
  - estafettemodel
  - definition of done
  - candidate
---

<!-- @license CC0-1.0 -->

# Voorbereidingsfase voor Candidate componenten

De Voorbereidingsfase start wanneer de Selectiefase is afgerond. Dan is alle input beschikbaar voor het vaststellen van de acceptatiecriteria en benodigde testcases.

In de Voorbereidingsfase wordt vastgelegd welke varianten de component moet krijgen, wat de beste semantiek is, welke events beschikbaar moeten worden gesteld en welke Stories, automatische tests en design tokens nodig zijn.

![Een overzicht van de stappen in de Voorbereidingsfase, van links naar rechts op volgorde en van boven naar beneden gegroepeerd per specialisme dat hierbij betrokken is: Developer relations en Design relations (samen relations), toegankelijkheidsspecialist, developer, designer en design system lead met productmanager (samen lead).](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-voorbereidingsfase.png)

[Bekijk de illustratie voor de Voorbereidingsfase op een losse pagina](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/assets/candidate-stappenplan-voorbereidingsfase.png)

De stappen en substappen in de Voorbereidingsfase kunnen soms parallel worden opgepakt, maar hebben hierin wel relatie tot elkaar. Bovenstaande visualisatie laat de volgende stappen zien:

- Openstaande issues bekend
  1.  Input verzameld door Developer relations & Design relations.
  2.  Besloten welke issues meegenomen worden in Candidate door Design System Lead & Product Manager.
  3.  Besluit vastgelegd door Developer relations & Design relations.
- Versimpeld of opgesplitst
  1.  Input verzameld door Developer relations & Design relations.
  2.  Besloten welke issues meegenomen worden in Candidate door Design System Lead & Product Manager.
  3.  Besluit vastgelegd door Developer relations & Design relations.
- Criteria voor toegankelijkheid bepaald en vastgelegd door toegankelijkheidsspecialist.
- Zoekwoorden vastgesteld
  1.  Alternatieve namen verzameld door Developer relations & Design relations.
  2.  Besloten welke zoekwoorden Keywords en welke Aliassen zijn door Design System Lead & Product Manager.
  3.  Keywords en Aliassen vastgelegd door Developer relations & Design relations.
- Anatomie bepaald en vastgelegd door toegankelijkheidsspecialist, developer, designer, Design System Lead en Product Manager.
- Semantiek bepaald en vastgelegd door toegankelijkheidsspecialist, developer, designer, Design System Lead en Product Manager.
- API bepaald
  1. Input verzameld door Developer relations & Design relations.
  2. Besloten welke API's Candidate worden door Design System Lead & Product Manager.
  3. Besluit vastgelegd door Developer relations & Design relations.
- Design Tokens bepaald
  1. Input verzameld door Developer relations & Design relations.
  2. Besloten welke Design Tokens Candidate worden door Design System Lead & Product Manager.
  3. Besluit vastgelegd door Developer relations & Design relations.
- Acceptatiecriteria vertaald naar Stories en Specs door relations, toegankelijkheidsspecialist en developer.
- Testcases voor gebruik van de component bepaald en vastgelegd door developer, designer en leads.
- Community bijgepraat door relations.

:::tip[Hoe kan de community helpen?]
Door zoveel mogelijk informatie beschikbaar te maken in de GitHub Discussion kan deze fase sneller verlopen.

Draag je dit component ook bij in een Community implementatie, of heb je tijd om te helpen deze te verbeteren? Dan kun je helpen door zoveel mogelijk openstaande issues al te verwerken en zelf testcases toe te voegen voor alle situaties die in de GitHub Discussions door de community zijn gedeeld.
:::

## Issues bekend {#issues}

Wanneer er is gekeken naar de issues die voor de component zijn aangemaakt in de verschillende repositories van NL Design System, kan het kernteam bepalen welke issues moeten worden opgelost in de Candidate implementatie en welke aanpassingen nog moeten worden proefgedraaid in de community. Ook kan er een afweging worden gemaakt over breaking changes die in de Community component zijn uitgesteld vanwege het ongemak bij gebruikers.

Deze issues, feature requests en geplande breaking changes zijn een aanvulling op de input uit de Selectiefase waar alleen wordt meegenomen welke dingen al succesvol in de component zitten. Met deze stap, waarin we naar de GitHub issues kijken, halen we ook de input op van alles wat nog niet is meegenomen, maar wel gewenst is.

### Doel

De Candidate implementatie neemt geen bekende bugs of problematische API's over uit de Community implementaties, maar kan wel gelijk de changes meenemen die als breaking change in de Community implementatie zijn uitgesteld.

### Uitkomst

Het kernteam heeft samen met de input uit de Selectiefase nu alle input uit de community verzameld voor de volgende stappen uit de Voorbereidingsfase:

- Varianten bepaald
- Anatomie is bepaald
- Toegankelijkheid criteria bepaald
- Semantiek is bepaald
- API bepaald
- Design Tokens bepaald

## Varianten bepaald {#varianten}

De component zoals deze nu in de community bestaat is, waar nodig, versimpeld of opgesplitst, zodat de componenten die in het design system staan allemaal een duidelijke use case en overzichtelijke documentatie hebben.

Wanneer bijvoorbeeld blijkt dat de documentatie onnodig complex wordt door zinnen zoals "Voor X is de property Y verplicht, tenzij het variant Z is." kan het kernteam besluiten om de component op te splitsen.

### Doel

De Candidate component heeft duidelijke API's die goed uit te leggen zijn.

De variaties kunnen gebruiksvriendelijk en toegankelijk ingezet worden door verschillende organisaties.

### Uitkomst

De variaties en het gedrag van de component zijn bepaald en er zijn GitHub Discussions voor de nieuwe componenten aangemaakt en voor de voorgestelde losse component of variaties die niet worden meegenomen.

## Acceptatiecriteria voor toegankelijkheid bepaald {#a11y}

Op basis van de uitkomsten uit de 'WCAG input' stap, bekende issues uit de community en de expertise uit het kernteam is duidelijk aan welke eisen de component implementatie moet voldoen. Hierbij wordt rekening gehouden met bekende toegankelijkheidsproblemen, maar ook toegankelijkheidseisen die de community in hun implementatie nog niet had bedacht.

### Doel

De Candidate component heeft voldoende acceptatiecriteria zodat bekende toegankelijkheidsproblemen kunnen worden voorkomen met gebruik van de component en bijbehorende documentatie.

### Uitkomst

Het is duidelijk met welke WCAG succescriteria rekening is gehouden. Daarbij wordt onderscheid gemaakt tussen de criteria die in de component zelf worden opgelost en de criteria die in context van een pagina gelden.

## Keywords en aliassen bepaald {#keywords}

### Doel

De component kan makkelijk gevonden worden door verschillende gebruikers die net andere namen voor de component gebruiken.

### Uitkomst

Aliassen en keywords van alternatieve namen voor de component zijn vastgelegd in documentatie.

## Anatomie bepaald {#anatomie}

Op basis van de input uit 'Component gebruikt', 'WCAG-input', 'Issues bekend' en 'Versimpeld of opgesplitst' wordt besloten uit welke onderdelen de component kan bestaan en hoe deze onderdelen worden genoemd.

### Doel

De Candidate component heeft duidelijke namen voor de onderdelen die consistent gebruikt kunnen worden in code, Storybook, Figma, design tokens en documentatie.

### Uitkomst

De onderdelen van de component zijn bepaald en de naamgeving is gekozen op basis van de NL Design System naming convention en vastgelegd.

## HTML bepaald {#html}

Goede semantiek is belangrijk voor toegankelijkheid en robuustheid van websites en webapplicaties. Daarom wordt er goed gekeken op basis van de 'Anatomie' en 'Acceptatiecriteria voor toegankelijkheid' welke semantiek het best bij de component past.

### Doel

De onderdelen waaruit de component bestaat, werken goed voor verschillende hulpsoftware en voldoen aan de NL Design System architectuur.

### Uitkomst

De component wordt ontwikkeld met de HTML elementen die semantisch het best passen, voldoet hiermee aan [WCAG-succescriterium 1.3.1 Info en relaties](/wcag/1.3.1) en [WCAG-succescriterium 4.1.2 Naam, rol, waarde](/wcag/4.1.2) en is goed te gebruiken met langzame internetverbindingen als de CSS niet geladen kan worden.

Er is bepaald of er een HTML implementatie van de component mogelijk is, zodat deze ook ingezet kan worden in situaties waar HTML aanpassen geen optie is en er geen voorspelbare class names zijn gebruikt.

## API bepaald {#api}

De component heeft in CSS, React en andere technieken classnames, attributen, properties en slots die bij het inzetten van de component gebruikt kunnen worden. Voor de developer en designers die de component gebruiken is het belangrijk dat deze voorspelbaar is in combinatie met de rest van het design system. Voor onderhoudbaarheid is het goed om niet meer API's beschikbaar te maken dan noodzakelijk zijn en voor iedereen is het belangrijk dat de beschikbare API-documentatie makkelijk gevonden worden.

### Doel

Alle API's van de component zijn gebaseerd op een gemeenschappelijke use case en zijn voorspelbaar in combinatie met de andere Candidate en Hall of Fame componenten in het design system.

### Uitkomst

- Bepaald welke API beschikbaar wordt in de Candidate component en welke API wijzigingen eerst in de Community moeten worden uitgetest.
- De API's voor de Candidate component zijn in lijn met de API conventies van NL Design System.
- De API's zijn goed te implementeren in meerdere technieken.

## Design tokens bepaald {#design-tokens}

Genoeg design tokens zijn belangrijk om NL Design System in diverse huisstijlen te laten werken, maar voor onderhoudbaarheid is het goed om geen design tokens beschikbaar te maken die door niemand gebruikt worden. Bij het maken van de Candidate component wordt gekeken welke design tokens nodig zijn, welke naamgeving past bij de rest van het design system en welke basis-tokens voor de meeste huisstijlen een voorspelbaar resultaat hebben.

### Doel

De Candidate component is voor veel organisaties te gebruiken, en zij kunnen deze migreren zonder een ander visueel ontwerp te hoeven toepassen.

### Uitkomst

Alle design tokens van de component zijn gebaseerd op een gemeenschappelijke use case en zijn voorspelbaar in combinatie met de andere Candidate en Hall of Fame componenten in het design system.

## Stories en Specs vastgelegd {#stories-specs}

Door te weten op welke manier de Community componenten al voldoen aan onze acceptatiecriteria, weet het kernteam welke onderdelen ze 1-op-1 kunnen overnemen en welke in de Candidate component aangepast moeten worden. De Stories en specs die hiervoor klaar worden gezet kunnen vervolgens ook gebruikt worden om tijdens het maken en onderhouden van de Candidate component de kwaliteit te kunnen blijven verzekeren.

### Doel

Een robuuste Candidate component die goed en consistent te testen is.

### Uitkomst

De Candidate kan gebouwd worden op basis van de juiste Community component onderdelen en er is een testplan beschikbaar om te zorgen dat de Candidate component is gemaakt op basis van alle acceptatiecriteria.

- Alle acceptatiecriteria die in eerdere stappen zijn opgesteld — voor anatomie, semantiek, varianten en design tokens — zijn opgenomen als stories in de test Storybook.
- Voor alle niet visuele acceptatiecriteria zijn unit tests met `describe it` aangemaakt.

## Testcases voor gebruik {#test-gebruik}

Goede testcases zijn belangrijk om de component robuust te maken. De component wordt vaak op een pagina getoond met content die via CMS-en wordt gemaakt of op basis van data uit API's. Daarom moet de component om kunnen gaan met geen, weinig of juist veel content en in combinatie met Rich Text elementen.

Ook is de manier waarop eindgebruikers de component zien afhankelijk van bijvoorbeeld hun schermformaat, internetconnectie, vertaalplugins en gebruiksinstellingen zoals bijvoorbeeld lettergrootte, forced-colors mode of prefers-reduced-motion.

Daarom is het belangrijk dat het kernteam zoveel mogelijk testcases klaarzet die zorgen dat de component zich in al deze situaties voorspelbaar gedraagt.

### Doel

De Candidate component is goed getest voordat deze gepubliceerd wordt, niet alleen voor de standaard situaties, maar ook voor situaties die je anders pas in productie tegenkomt.

### Uitkomst

Er zijn voldoende testcases beschikbaar om een robuust component te maken die goed om kan gaan met diverse soorten data en gebruikersvoorkeuren zodat de Candidate component grondig getest kan worden met Storybook en unit tests.

## Rond de Voorbereidingsfase af {#afronden}

Het kernteam laat de community weten dat de voorbereidingen in het Candidate proces afgerond zijn en de component klaar is om gebouwd te worden.

### Doel

De Candidate component heeft zoveel mogelijk draagvlak in de community en developers en designers kijken uit om het Candidate component te gebruiken doordat duidelijk is met hoeveel dingen rekening is gehouden.

### Uitkomst

De community weet dat de voorbereidingen getroffen zijn en hebben nog een kans om toch nog input te geven op de gemaakte keuzes. Ook ziet de community dat de Community componenten als basis zijn gebruikt zodat ze zich gewaardeerd en gesterkt voelen om ook Community componenten geschikt te helpen maken voor Candidate.
