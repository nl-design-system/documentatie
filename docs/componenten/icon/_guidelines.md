# Iconen {#iconen}

Iconen moeten opzettelijk gebruikt worden en waar mogelijk, met het oog op de toegankelijkheid, gekoppeld aan een tekstlabel. Iconen kunnen zowel als interactieve als statische elementen fungeren.

Grofweg zijn er twee categorieën iconen; functionele en illustratieve iconen.

Denk bij functionele iconen bijvoorbeeld aan:

- Chevrons
- Opslaan en download indicatoren
- Een × om een dialoogvenster te sluiten

Functionele iconen zijn vaak abstract en hun betekenis is vaak aangeleerd, denk hierbij bijvoorbeeld aan het floppy icoon voor opslaan, of een vergrootglas om te zoeken. Illustratieve iconen zorgen in één oogopslag dat een tekstlabel verduidelijkt of een thema uitgebeeld kan worden.

## Combinatie van icoon en tekst {#icoon-en-tekst}

Combineer waar mogelijk een icoon met tekst.

Het kan zijn dat een bezoeker een icoon niet helemaal goed begrijpt. Het gebruik van tekst (label) is ook een belangrijke factor in de navigatie. Een eenvoudig en duidelijk icoon met een goed omschreven label is superieur aan iconen of labels alleen.

## Niet te veel iconen op een pagina {#hoeveelheid-iconen}

Te veel iconen gebruiken op een pagina kan een soort blindheid veroorzaken.

Let er op dat er niet te veel iconen op een pagina komen te staan en voorkom een oerwoud van plaatjes. Bij het gebruik van te veel iconen worden de iconen niets meer dan decoratie op je pagina en mist het z’n doel als navigatiehulp voor de bezoeker.

Door het aantal iconen te beperken, trekken de iconen die je wel gebruikt sneller de aandacht van de gebruiker en wordt het navigeren op de pagina eenvoudiger.

De uitstraling van iconen hebben een effect op de vormgeving van de portaal/webpagina. Let dus goed op hoe en welke iconen jullie willen gaan gebruiken.

## Icoon kleuren {#kleur}

Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.

De valkuil is om hardcoded kleur waardes zoals fill="#ABCDEF te gebruiken. Gebruik in plaats daar van de CSS waarde currentColor: fill="currentColor". Dit is een handmatige aanpassing in de code van de SVG, en een essentiële. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals stroke.

## Toegankelijkheid {#toegankelijkheid}

Functionele iconen communiceren belangrijke functionaliteit. Hierdoor dienen deze voor iedereen toegankelijk te zijn. Zo dient de informatie die zij overbrengen tevens voor [screenreaders](/woordenlijst/#screenreader) beschikbaar te zijn en hebben ze voldoende kleurcontrast voor mensen met een visuele beperking. Puur decoratieve iconen hoeven niet aan toegankelijkheidsrichtlijnen te voldoen. Als een illustratief icoon tekst verduidelijkt, zorg dan dat deze verduidelijking tevens aangeboden wordt aan screenreaders.

### Tekstlabels {#tekstlabels}

Probeer zoveel mogelijk iconen van een tekstlabel te voorzien. Wanneer een (interactief) icoon zonder tekstlabel aangeboden wordt, zorg dan een een tekstverduidelijking wel aan screenreaders aangeboden wordt.

### Contrast {#contrast}

Zorg voor functionele iconen dat deze voldoende contrast hebben met de achtergrond en omliggende kleuren. Zie hiervoor [WCAG techniek G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207) en het [WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content](/wcag/1.4.11). Er dient een minimale contrastverhouding van 3:1 ten opzichte van onderliggende en aangrenzende kleuren te zijn.

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

## Referenties {#referenties}

- [Inclusief communiceren met iconen](https://directduidelijk.gebruikercentraal.nl/terugkijken-webinars/inclusief-communiceren-met-iconen/)
- [Make your design system accessible — Part 2: Icons](https://uxdesign.cc/make-your-design-system-accessible-part-2-icons-f3f7bd0b4b5a)
- [Het complete plaatje? Onderzoek naar het gebruik van iconen als middel voor inclusievere gemeentelijke communicatie in Nederland en Vlaanderen](https://taalunie.org/publicaties/204/onderzoek-naar-het-gebruik-van-iconen-als-middel-voor-inclusievere-gemeentelijke-communicatie-in-nederland-en-vlaanderen)
- [Utrecht design system](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-iconen--iconen)
- [A complete guide to iconography](https://www.designsystems.com/iconography-guide/)
- [Icon Usability](https://www.nngroup.com/articles/icon-usability/)
- [Icons As Part Of A Great User Experience](https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/)
- [When does iconography start to become useless?](https://uxdesign.cc/crimes-of-ux-3-useless-iconography-5bf06ef9fed)
- [Beelkompas: Wat is een icoon](https://www.beeldkompas.nl/kennisbank/wat-is-een-icoon)
