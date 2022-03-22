---
title: Iconografie
hide_title: true
hide_table_of_contents: true
sidebar_label: Iconografie
pagination_label: Iconografie
description: Iconografie
keywords:
  - iconografie
  - iconography
  - icons
---

# Iconografie

## Richtlijnen

Iconen helpen bezoekers om de juiste taak te kiezen. Ze ondersteunen de leesbaarheid en scanbaarheid van informatie.

Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.

Grofweg zijn er twee categorieën iconen; ‘applicatieve’ en illustratieve iconen. Denk bij applicatieve iconen bijvoorbeeld aan chevrons, opslaan en download indicatoren of een × om een dialoog te sluiten. Applicatieve iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in één oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.

Buiten deze kunnen tevens ‘derde partij’ iconen voorkomen, denk bijvoorbeeld aan sociale media links waarbij slechts het icoon zonder tekstlabel getoond wordt.

### Het nut van iconen

- Iconen kunnen een gemeenschappelijke visuele taal zijn die een taalkloof overbrugt.
- Iconen geven visuele feedback (plaatje zegt vaak meer dan tekst).
- Iconen vergroten visuele interesse zodat het de aandacht trekt van de gebruiker.

Je kan dus met iconen de bezoekers helpen navigeren of de de aandacht vestigen op een bepaald onderdeel van een pagina.
  
### Combinatie van icoon en tekst

Combineer waar mogelijk een icoon met tekst.
  
Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.
  
### Niet teveel iconen op een pagina

Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.
  
Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z’n doel als navigatiehulp voor de bezoeker.
  
Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.
  
De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.

### Icoon kleuren

Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.
  
De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essentiële. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.

## Ontwerp

### Ontwerp richtlijnen

- Gebruik geen icoon wanneer tekst volstaat. Iconen kunnen onnodig voor visuele ruis zorgen, gebruikers kunnen iconen niet begrijpen en tekst is makkelijk te vertalen.
- Overweeg of puur decoratieve iconen daadwerkelijk iets toevoegen voor de gebruiker.
- Een icoon moet duidelijk direct de betekenis uitbeelden.
- Maak de vormen van een icoon niet onnodig complex maar tracht deze zo simpel mogelijk te houden zonder duidelijkheid te verliezen.
- Gebruik een consistent iconengrid voor visuele consistentie.
- Gebruik geen outlined en filled iconen dor elkaar.
- Zorg zoveel mogelijk voor universele concepten van iconen; gebruikers kennen voor veel concepten al een bestaande beeldtaal. Denk bijvoorbeeld aan een icoon van een verkeersbord met een ‘P’ voor parkeergelegenheden. Iets anders dan deze te gebruiken voor eenzelfde betekenis zal gebruiker alleen maar kunnen verwarren.
- Gebruik voor verdieping van tekstpassages een illustratie of animatie.

### Outline vs. filled (solid)

Te dunne lijnen kunnen tot visuele problemen leiden. Gebruikers met staar kunnen bijvoorbeeld problemen hebben met deze iconen.

### Grootte(s)

Er zijn meerdere manieren om iconen op diverse afmetingen te tonen. Een icoon in SVG formaat kan in principe zonder kwaliteitsverlies verkleint en vergoot worden. Wanneer iconen in verschillende groottes worden getekend kunnen grotere iconen van meer detail worden voorzien, en dus als het ware opnieuw getekend.

![Voorbeeld van een icoon die op verschillende afmetingen een andere tekening heeft](https://user-images.githubusercontent.com/248921/159327469-6e213cbc-c8ce-45cf-af18-16088a4c2030.png)

Bron: http://blog.useiconic.com/digitally-remastering-iconic/

Er zijn meerdere manieren om iconen op diverse groottes te tonen. Een icoon in SVG formaat kan in principe zonder kwaliteitsverlies verkleint en vergroot worden. Wanneer iconen in verschillende groottes worden getekend kunnen grotere iconen van meer detail worden voorzien, en dus als het ware opnieuw getekend.

### Toegankelijkheid

#### Interactieve iconen

Zorg bij interactieve iconen ervoor dat de interactie niet alleen gecommuniceerd wordt door middel van kleurverschil.

#### Contrast

Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor [WCAG techniek G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207) en [succescriterium 1.4.11, contrast van niet-tekstuele content](https://www.w3.org/Translations/WCAG21-nl/#contrast-van-niet-tekstuele-content). Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.

Puur decoratieve iconen hoeven niet aan deze eis te voldoen.

Als iconen ondersteund worden door tekst is het niet noodzakelijk deze van een `alt` tekst te voorzien, een leeg `alt=""` attribuut is dan voldoende.

#### Klik/tapoppervlakte

Zorg voor voldoende klik of tapoppervlakte van interactieve iconen, zeker als deze niet vergezeld zijn van een (klikbaar) tekstueel label. Mocht er onvoldoende oppervlakte zijn van het icoon zelf, dan kan een interactieve marge rondom het icoon bijdragen aan het vergroten van het klik/tapoppervlakte. Gebruikers kunnen echter verward raken en denken dat de interactieve oppervlakte kleiner is dan ze waarnemen, en bovendien kunnen té kleine iconen onduidelijk zijn.

Hanteer voor een vrijstaand icoon [een minimale oppervlakte van 44×44 dp](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html). Zo wordt gewaarborgd dat een interactief icoon met zowel een muis als op een touchscreen voor gebruikers makkelijk te activeren is. Dit is in het bijzonder belangrijk voor gebruikers met een motorieke stoornis, zoals gebruikers met Arthritis of Parkinson.

#### Marge

Zorg tevens voor voldoende ruimte tussen iconen. Iconen moeten duidelijk gescheiden zijn en zeker wanneer iconen van interactie zijn voorzien dient de gebruiker deze afzonderlijke interacties bewust te kunnen onderscheiden en uit te voeren.

## OpenGemeenten iconen

De OpenGemeenten iconen is een iconenset vóór gemeenten, dóór gemeenten. Deze set wordt onderhouden door [OpenGemeenten](https://www.opengemeenten.nl/projecten/iconen).

Deze open source iconenset is special ontwikkeld voor gemeenten. Wil jij als gemeente je communicate verbeteren, dan kan je deze iconenset gratis gebruiken. Deze iconen zijn ook te gebruiken voor drukwerk.

### Voorwaarden voor gebruik

De OpenGemeenten iconenset valt onder een CC BY-SA 4.0* licentie

*Creative Commons Naamsvermelding-GelijkDelen 4.0 Internationaal

Je bent vrij om:

- het werk te delen - te kopièren, te verspreiden en door te geven via elk medium of bestandsformaat.
- het werk te bewerken - te remixen, te veranderen en afgeleide werken te maken voor alle doeleinden, inclusief commerciële doeleinden.

Onder de volgende voorwaarden:

- Naamsvermelding - De gebruiker dient de maker van het werk te vermelden, een link naar de licentie te plaatsen en aan te geven of het werk veranderd is. Je mag dat op redelijke wijze doen, maar niet zodanig dat de indruk gewekt wordt dat de licentiegever instemt met je werk of je gebruik van het werk.
- GelijkDelen - Als je het werk hebt geremixt, veranderd, of op het werk hebt voortgebouwd, moet je het veranderde material verspreiden onder dezelfde licentie als het originele werk.
- Geen aanvullende restricties - Je mag geen juridische voorwaarden of technologische voorzieningen toepassen die anderen er juridisch in beperken om iets te doen wat de licentie toestaat.

### Meer informatie

Wil je een bijdrage leveren of wil je meer weten over deze iconenset? Neem dan contact op met [OpenGemeenten](https://www.linkedin.com/company/opengemeenten).

## Referenties

- [Utrecht design system](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen)
- [OpenGemeente iconen InVision omgeving](https://projects.invisionapp.com/share/EX128WTLTQ7F#/screens/463025527)
- [Inclusief communiceren met iconen](https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/)
- [Rijksiconen](https://www.rijkshuisstijl.nl/basiselementen/beeld/iconen-en-pictogrammen/overzicht-iconen)
- [The Icon Handbook](https://iconhandbook.co.uk/)
- [When does iconography start to become useless?](https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed)
- [Make your design system accessible — Part 2: Icons](https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a)
- [Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen](https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen)
