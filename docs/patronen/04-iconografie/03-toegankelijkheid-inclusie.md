---
title: Toegankelijkheid en inclusie
hide_title: true
hide_table_of_contents: false
sidebar_label: Toegankelijkheid en inclusie
sidebar_position: 1
pagination_label: Ontwerp
description: Iconografie - Toegankelijkheid en inclusie
keywords:
	- iconografie
	- iconography
	- icons
	- toegankelijkheid
	- inclusie
---

<!-- @license CC0-1.0 -->

# Toegankelijkheid en inclusie

## Toegankelijkheid {#toegankelijkheid}

Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor voorlees-software beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan voorlees-software.

### Tekstlabels {#tekstlabels}

Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan een een tekstverduidelijking wel aan voorlees-software aangeboden wordt.

### Contrast {#contrast}

Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor [WCAG techniek G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207) en [succescriterium 1.4.11, contrast van niet-tekstuele content](https://www.w3.org/Translations/WCAG21-nl/#contrast-van-niet-tekstuele-content). Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.

Puur decoratieve iconen hoeven niet aan deze eis te voldoen.

Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een `alt` tekst te voorzien, een leeg `alt=""` attribuut is dan voldoende.

### Interactieve iconen {#interactieve-iconen}

Wanneer een interactief icoon gebruik wordt voor muisgestuurde acties, dan dient het icoon voorzien te zijn van een `hover` staat. Voor toetsenbordbediening dient tevens een `focus` staat aanwezig te zijn zodat gebruikers kunnen zien waar de focus zich op dat moment bevindt.

Zorg bij deze interactieve iconen ervoor dat interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.

Het aanbieden van gevulde iconen voor geselecteerde staten waar standaard lijn-iconen gebruikt worden kan een oplossing zijn. Ook het gebruiken van een wijziging in een icoon bij een bepaalde staat kan uitkomst bieden. Een voorbeeld hiervan is een prullenbak icoon dat een volle prullenbak toont, en een geleegde wanneer deze geleegd is.

### Klik en tapoppervlakte {#klik-tapoppervlakte}

Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan het vergoten van de interactieve marge rondom het icoon bijdragen aan het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen té kleine iconen onduidelijk zijn.

Hanteer voor een vrijstaand icoon [een minimale oppervlakte van 44×44 dp](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html). Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorische stoornis, zoals gebruikers met Arthritis of Parkinson.

### Afstanden (marge) {#marge}

Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.

## Inclusiviteit {#inclusiviteit}

Zorg, bijvoorbeeld bij profiel iconen, dat deze gender-neutraal en cultuur-onafhankelijk zijn.

### Context {#context}

In sommige contexten kunnen iconen verkeerd op gevat worden. Denk bijvoorbeeld aan het gebruiken van een prullenbak om een persoon uit een lijst te verwijderen. Ook een ‘like’ icoon van een duimpje kan in sommige contexten verkeerd opgevat worden. Biedt in dat geval meerdere iconen aan waarmee waardering gegeven kan worden, maar die niet altijd positief hoeft te zijn.

## Referenties

- [Inclusief communiceren met iconen](https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/)
- [Make your design system accessible — Part 2: Icons](https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a)
- [Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen](https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen)
