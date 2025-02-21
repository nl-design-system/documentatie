# Project Start Architectuur voor Expertteam Digitale Toegankelijkheid, onderdeel theme builder

https://www.noraonline.nl/wiki/Webversie_PSA_Format#1_Managementsamenvatting_(max_1_A4)

## 1. Managementsamenvatting

<!-- NORA PSA Tekstdoel: Een beknopte beschrijving van de verandering die wordt beoogd -->

<!-- ISO 42010 "Entity of Interest" is NL Design System -->

Duizenden websites van de Nederlandse overheid, verspreid over honderden instellingen met een eigen huisstijl, moeten digitaal toegankelijk gemaakt worden om wetgeving te voldoen. <!-- NL Design System heeft open source oplossingen om de toegankelijkheid te verbeteren en om problemen te voorkomen, die door specialisten geschikt gemaakt kan worden voor gebruik in een andere huisstijl. -->

NL Design System helpt met het digitaal toegankelijk maken van websites. Het koppelen van bestaande websites aan NL Design System is nog veel werk. Als we dit proces versimpelen, dan kunnen meer websites sneller aan NL Design System gekoppeld. We zoeken een gebruiksvriendelijke oplossing om dit proces laagdrempelig en vlot te laten verlopen.

<!-- Het doel is dat snel meer organisaties meedoen met NL Design System. Daarom moet het snel en makkelijk zijn dat organisaties NL Design System kunnen toepassen in hun eigen huisstijl, zodat het werkt binnen hun huidige websites. Het doel is om dat proces terug te brengen van meerdere dagen werk voor een specialist, tot enkele uren door een niet-technische gebruiker. -->

Dit document beschrijft enkele toevoegingen aan NL Design System, waarmee het makkelijker is voor organisaties om de huisstijl vast te leggen in het platformonafhankelijke bestandsformaat dat NL Design System gebruikt. Daarnaast zal een tool ontwikkeld worden om in dit bestand te herkennen welke ontwerpbeslissingen van de huisstijl niet digitaal toegankelijk zijn, met een voorstel om de problemen op te lossen.

Wanneer de tool beschikbaar is dan kan de toepassing van NL Design System sneller groeien, waardoor
Wanneer de huisstijl van een overheidsinstelling eenmaal beschikbaar is gemaakt voor NL Design System, dan kunnen ... Bij toenoemende toepassing van NL Design System zal met deze oplossing ook de benodigde capaciteit van het NL Design System kernteam verminderen, die nu nodig is voor ondersteuning per organisatie.

Enkele tientallen organisaties hebben op dit moment een huisstijl ingesteld. Dit is een technisch proces dat een ervaren persoon minstens 2 dagen kost.

Wanneer het makkelijk is om nieuwe huisstijlen in te stellen voor NL Design System, dan zullen meer organisaties de oplossingen van NL Design System gebruiken. Om NL Design System snel beschikbaar te maken voor honderden nieuwe huisstijlen, moet dit proces gedaan kunnen worden met weinig technische kennis door enkele simpele stappen te volgen.

Websites kunnen dan sneller en goedkoper aangepast worden om toegankelijk te zijn, waardoor sneller alle overheidsdiensten beschikbaar zijn voor iedereen.

<!-- NORA PSA Tekstdoel: De relatie met andere lopende Nationale- of Internationale ontwikkelingen. -->

Het aantal toegankelijke overheidswebsites neemt de afgelopen jaren langzaam toe, tot inmiddels 7% van de websites. NL Design System is in de afgelopen 4 jaar gegroeid van 0 naar tientallen overheidsorganisaties, die het zien als oplossing voor digitale toegankelijkheid.

Een design system is een verzameling afspraken, documentatie en herbruikbare componenten waarmee organisaties efficient een bepaalde consistentie en kwaliteit behalen bij het ontwikkelen van digitale diensten. Nederland heeft niet zoals veel landen een open source design system voor de centrale overheid. Het gat is gevuld door een open source innovatie, passend bij het "digitale Huis van Thorbecke": NL Design System is een design system dat toegepast kan worden door zowel centrale als decentrale overheden, als daarbuiten, in een eigen huisstijl. Dit initiatief maakt daarmee ook publiek-private samenwerking mogelijk rondom de European Accessibility Act (EAA).

De herbruikbare oplossingen van NL Design System moeten dan ingesteld worden op de huisstijl van elke website. De werking en de uitstraling van de website blijft zoveel mogelijk hetzelfde, maar dan is de website wel meer toegankelijk.

<!-- NORA PSA Tekstdoel: Welke overheidsdiensten, processen en systemen door de verandering worden
geraakt. Benoem hierbij ook de meest belangrijke (generieke) functies of voorzieningen. -->

De oplossing moet een huisstijl opleveren die toegankelijk is, en die aansluit bij NL Design System. We willen de oplossing zo bouwen dat leveranciers van websites en webapplicaties voor de overheid kunnen de oplossing gebruiken om hun websites snel aan NL Design System te koppelen. We willen dat de tijd die nodig is om NL Design System te koppelen sterk wordt gereduceerd.

Alle centrale en decentrale overheden kunnen gebruikmaken van deze oplossing.

We willen dat de oplossing als module geïntegreerd kan worden in software van leveranciers, zodat overheden zelf het proces kunnen gebruiken. <!-- dit gaat naar de non-functionals -->

<!-- NORA PSA Tekstdoel: De belangrijkste bestaande kaders en inrichtingskeuzes waarmee rekening moet
worden gehouden. Benoem hierbij ook de samenhang met architecturen. Bijvoorbeeld door aan te geven
welk deel van een enterprise-, domein- of ketenarchitectuur de verandering invulling
geeft. -->

Voor zover mogelijk komt de ingestelde huisstijl overeen met het bestaand visueel ontwerp van de website van een organisatie, maar wanneer aanpassingen nodig zijn voor een toegankelijk resultaat dan moet gekozen worden voor die verbetering.

<!-- NORA PSA Tekstdoel: De punten waarover besluitvorming en/of discussie moet plaatsvinden.
Denk hierbij met name aan alternatieve oplossingsmogelijkheden en de impact
daarvan. Maar ook afwijkingen van de afgesproken kaders. -->

...

<!-- Toevoeging -->

Bronnen:

1. Dashboard Digitoegankelijk toont dat op 26 januari 2025 er 617 websites zijn met Status A (geen problemen gevonden).
   8313 websites hebben niet Status A.
1. Design systems voor centrale overheden:

- Denemarken: [<span lang="en">Denmark Design System</span>](https://designsystem.dk)
- België: [Vlaanderen](https://overheid.vlaanderen.be/webuniversum/alle-webcomponenten)
- Estland: [<span lang="en">Estland Design System</span>](https://brand.estonia.ee/)
- Europa: [<span lang="en">Europa Component Library</span>](https://ec.europa.eu/component-library/)
- Duitsland: [<span lang="en">Angie Design System</span>](https://digitalservicebund.github.io/angie/) ([Angie Design System op GitHub](https://github.com/digitalservicebund/angie))
- Griekenland: [GOV.GR Design System](https://guide.services.gov.gr)
- Ierland: [<span lang="en">Ireland Design System</span>](https://ogcio.github.io/ogcio-ds-website/)
- IJsland: [<span lang="en">Iceland Design System</span>](https://island.is/en/o/digital-iceland/design-system) ([Figma](https://www.figma.com/@islandis))
- Italië: [Designers Italia: The Design System for the Italian Public Administration](https://designers.italia.it)
- Frankrijk: [<span lang="fr">Système de Design de l'État</span>](https://www.systeme-de-design.gouv.fr) ([Storybook](https://www.systeme-de-design.gouv.fr))
- Verenigd Koninkrijk:
  - [GOV.UK Design System](http://design-system.service.gov.uk/)
  - Schotland: [<span lang="en">Scottish Government Design System</span>](https://designsystem.gov.scot)
- Tsjechië: [<span lang="en">Czech Design System</span>](https://designsystem.gov.cz/)
- Canada: [<span lang="en">Canada Design System</span>](https://www.canada.ca/en/government/about/design-system.html)
- Japan: [<span lang="en">Japan Design System</span>](https://www.digital.go.jp/policies/servicedesign/designsystem/) ([Japan Design System in Figma](https://www.figma.com/community/file/1172530831489802410))
- Nieuw-Zeeland: [<span lang="en">New Zealand Design System</span>](https://design-system-alpha.digital.govt.nz/)
- Singapore: [<span lang="en">Singapore Design System</span>](https://www.designsystem.tech.gov.sg)
- Verenigde Staten: [<span lang="en">U.S. Web Design System</span>](https://designsystem.digital.gov)

<!-- old -->

. NL Design System heeft herbruikbare oplossingen, maar NL Design System om meer

<!-- https://www.noraonline.nl/wiki/Webversie_PSA_Format#1_Managementsamenvatting_(max_1_A4) -->

<!-- old -->

In het "Digitale Huis van Thorbecke" hebben veel overheidsorganisaties een eigen huisstijl. Meedoen met NL Design System is voorname manier om te voldoen aan de wettelijke eisen voor toegankelijkheid. De huisstijl beschikbaar maken voor NL Design System is in praktijk een voorwaarde .

Alle organisaties die hun toegankelijkheid willen verbeteren met NL Design System, moeten als eerste stap hun huisstijl vastleggen. Ervaren leveranciers besteden hier 2 werkdagen aan. Nieuwe leveranciers ervaren de huisstijl maken als drempel, waardoor velen uiteindelijk niet gebruik maken van NL Design System en het resultaat minder toegankelijk wordt of even toegankelijk tegen hogere kosten.

Dit project maakt een automatische tool om in minder tijd de huisstijl van organisaties beschikbaar te koppelen aan NL Design System. De tool wordt gebruiksvriendelijk, waardoor nieuwe leveranciers makkelijker overtuigd worden om NL Design System te gebruiken.

<!-- /old -->

### Relatie met nationale ontwikkeling

Het project draagt bij aan het ecosysteem van NL Design System. Daarmee worden veel projecten voor de Nederlandse overheid ontwikkeld.

Het project beoogt adoptie van NL Design System te versnellen, waardoor meer organisaties mee kunnen doen met minder kosten. Daarmee wordt het verbeteren van digitale toegankelijkheid versneld.

<!--
Waarom niet 1 huisstijl?

Bijvoorbeeld, uit het onderzoek "Herkenbare overheid" blijkt:

> Net als in andere onderzoeken zien we ook in dit experiment dat de Rĳksoverheid als afzender van communicatie en de dienstverlening van de overheid afstandelĳk en onpersoonlĳk wordt gevonden en de gemeente warm en persoonlĳk.

https://www.communicatierijk.nl/vakkennis/onderzoek-naar-informatie-en-dienstverlening/documenten/publicaties/2022/02/18/factsheet-herkenbare-overheid

-->

### Welke overheidsdiensten, processen en systemen door de verandering worden geraakt.

De tool zal gebruikt worden door interne ontwikkelteams en door leveranciers van de overheid. De Rijksoverheid heeft de tool het minste nodig, omdat de Rijkshuisstijl slechts 1 huisstijl is waar al aan samengewerkt wordt.

De impact is het grootst voor 342 gemeenten, 12 provincies, 21 waterschappen en de diverse uitvoeringsorganisaties.

De impact is ook groot op leveranciers die overheidssoftware ontwikkelen, die in de huisstijl van klanten gepubliceerd word. Bijvoorbeeld software voor formulieren, of een portaalwebsite.

## 2.1 Aanleiding en doelstelling

<!--
Beschrijf in het kort de huidige situatie en geef daarbij aan wat de precieze aanleiding is om deze PSA op te stellen: welke vraagstukken doen zich voor, wat moet worden aangepakt, welke ontwikkelingen vinden plaats waarmee rekening gehouden dient te worden, welke doelstelling en ambities worden nagestreefd, in welke richting het bestuur of management denkt qua oplossing e.d.
-->

De Nederlandse overheid heeft honderden organisaties met een eigen huisstijl. Veel organisaties denken dat ze niet goed kunnen samenwerken aan digitale dienstverlening, omdat hun huisstijl veel verschilt van andere organisaties.

Het stappenplan om een huisstijl vast te leggen in een lijst met vooraf bepaalde ontwerpkeuzes, kan effectiever zijn als er een "wizard" is waarmee je stapsgewijs de huisstijl tot leven wekt in voorbeelden. Het doorlopen van de wizard kan veel sneller en nauwkeuriger gebeuren wanneer de hoeveelheid aan kleuren en lettertypes beperkt wordt tot relevante opties, gebaseerd op uitingen en documentatie van de bestaande huisstijl.

## 2.2 Het te bereiken effect

<!--
Beschrijf kort en bondig de verandering en aan welke maatschappelijke doelen/ambities die verandering bijdraagt. Hier worden dus niet de projectdoelen en -ambitie bedoeld!
Geef daarnaast aan wat de door het project te realiseren oplossing moet gaan doen en wat de belangrijkste functies van die voorziening daartoe zijn.
Het afgesproken tijdpad en de kwaliteitseisen: wanneer zijn we tevreden met het resultaat. Beschrijf dit vanuit een “Black Box” (dus geen details van een oplossing).
Vaak zijn er al documenten die de beoogde verandering beschrijven.
-->

De overheid bestaat uit meerdere organisaties, maar voor burgers en ondernemers is er 1 overheid. Wanneer veel organisaties meedoen met NL Design System, dan wordt de digitale dienstverlening van de overheid consistent gebruiksvriendelijk en toegankelijk.

Met dit project moet het zó makkelijk worden de diverse huisstijlen van de Nederlandse overheid beschikbaar te maken voor NL Design System, dat de drempel om mee te doen zover verlaagd wordt dat het vanzelfsprekend wordt om wél mee te doen.

## 2.3 Stakeholders

- Opdrachtgever: Ministerie van Binnenlandse Zaken
- Opdrachtnemer: ICTU
- Bedrijven en overheidsorganisaties die verantwoordelijk zijn voor een huisstijl-implementaties
- Organisaties met een huisstijl die moet voldoen aan Digitale Toegankelijkheid.
- Ontwikkelaars die een huisstijl nodig hebben
- Designers die een huisstijl nodig hebben
- Ontwikkelaars van het product
- Beheerder: bijvoorbeeld ICTU <!-- TODO: Beheerpartij vasstellen, kijken wat het belang is -->

TODO: Voor NPR5326 M01 moeten we "Belanghebbenden identificeren en betrekken". Dat betekent namen documenteren en personen voortdurend betrekken bij besluitvorming.

Voortdurend betrekken kan door:

- presenteren bij de Heartbeat
- presenteren in de Nieuwsbrief
- interactief digitaal overleg inplannen
- betrokkenen op lokatie uitnodigen

<!--
Als het relevant is, neem dan ook wat achtergrondinformatie op over de betrokken overheidsorganisatie(s), de relevante wettelijke taken en de belangrijkste diensten/producten die die organisatie(s) aan de samenleving levert. Een belangrijke bron voor de beschrijving van een organisatie en het maatschappelijke belang, is de website van de organisatie. Daarnaast kunnen gesprekken met mensen, workshops of documenten binnen de organisatie veel input geven.
-->

**Ministerie van Binnenlandse Zaken** werkt aan verbetering van digitale toegankelijkheid van overheidsdiensten. [citation needed] Staatssecretaris Digitalisering en Koninkrijksrelaties heeft dit in het portfolio. [citation needed] Het doel is dat 100% van de websites digitaal toegankelijk is, maar in 2024 scoorde slechts 7% van de websites voldoende. Om de overige 93% van de websites toegankelijk te krijgen moet er nog veel gebeuren.

Concern: het percentage toegankelijke overheidswebsites moet sneller groeien.

<!-- EAN 301 549 en WCAG 2.1 https://www.forumstandaardisatie.nl/open-standaarden/digitoegankelijk-en-301-549-met-wcag-21 -->

<!-- TODO: Concern voor Inclusief ontwerpen -->

<!-- TODO: kamervragen van Huffelen en Szabo -->

<!-- TODO: Concern: broncode van software, die is ontwikkeld door (of in opdracht van) de overheden, beschikbaar stellen. https://www.rijksoverheid.nl/documenten/kamerstukken/2020/04/17/kamerbrief-inzake-vrijgeven-broncode-overheidssoftware -->

> Overheden die met het vrijgeven van open source aan de slag gaan, krijgen mijn
> steun. Die wil ik geven door goede voorwaarden te creëren. De komende tijd wil
> ik hen helpen door eventuele juridische onduidelijkheden weg te nemen, meer
> inzicht te creëren in de maatschappelijke kosten en baten, goede omgevingen te
> creëren waar overheden terecht kunnen om samen te werken, en overheden
> inzichten te bieden in wat er komt kijken om met het vrijgeven van open source
> aan de slag te gaan.

**Stichting ICTU** heeft als doel om "aangesloten overheidsorganisaties te ondersteunen om innovatieve toepassingen op het gebied van [...] "ICT", te ontwikkelen, te introduceren en te implementeren bij deze aangesloten overheidsorganisaties" en "het introduceren van nieuwe ICT-producten en diensten bij (potentiële) aangesloten overheidsorganisaties. Deze introductie vindt plaats door middel van stimuleringsprogramma's die zich richten op kennisoverdracht, facilitering, demonstratieprojecten, en dergelijke". Stichting ICTU heeft sinds 2020 het project NL Design System uitgevoerd, op een manier die in lijn met deze doelen.

Concern: Stichting ICTU wil projecten uitvoeren die passen bij de doelstellingen. NL Design System past goed bij deze doelstellingen.

Concern: Stichting ICTU werkt zo veel mogelijk kwaliteitsgedreven, met een eigen kwaliteitsaanpak.

Bron: [Statuten Stichting ICTU](https://www.ictu.nl/wp-content/uploads/2024/11/Statuten-Stichting-ICTU.pdf)

**Organisaties met een huisstijl** zijn kun je bij de overheid onderverdelen in de volgende groepen:

- Organisaties bij de Rijksoverheid die de Rijkshuisstijl gebruiken.
- Uitvoeringsorganisaties, provincies en waterschappen met een eigen huisstijl.
- Gemeenten met een unieke eigen huisstijl.
- Organisaties die als huisstijl een unieke variant hebben op een basis die ze delen met andere organisaties, doordat de leveranciers beperkte opties aanbied. Voorbeelden: gemeenten die een website afnemen bij OpenGemeenten of Open Online. Ook: organisaties die een website afnemen bij Platform Rijksoverheid Online: die hebben een variant op de Rijkshuisstijl, waar een alternatief gebruikt word op beschermde onderdelen van de Rijkshuisstijl: een ander logo, andere kleuren en een ander lettertype.

Concern: Organisaties bij de Nederlandse overheid moeten voldoen aan [Tijdelijk besluit digitale toegankelijkheid overheid](https://wetten.overheid.nl/BWBR0040936/2018-07-01).

Concern: Organisaties buiten de overheid moeten voldoen aan de European Accessibility Act.

Concern: de ingesteld huisstijl is interoperabel met white-label producten voor de overheid.

**Designers die een huisstijl nodig hebben**: wannneer designers een maatwerk-ontwerp maken voor een overheidsorganisatie, dan hebben ze basale informatie nodig voor een visueel ontwerp: kleurcodes, lettertypes en bestanden voor een lettertype. Vaak is het niet duidelijk wie die informatie heeft, en wordt daarom een pragmatische aanpak gekozen: het kleurenpalet bij elkaar zoeken op basis van de bestaande website.

Concern: designers willen sneller en meer nauwkeurige informatie hebben over de huisstijl van overheidsorganisaties.

**Ontwikkelaars van white-label producten voor de overheid**:

**Ontwikkelaars van maatwerk-websites voor de overheid**:

De **beheerder** is een partij die verantwoordelijkheid krijgt voor hosting en onderhoud van de oplossing, wanneer het project is afgerond. NORA Online noemt als voorbeelden: Logius, SSO-ICT, DICTU en ODC-Noord.

## 4.1 De invalshoek Grondslagen

<!-- https://open.overheid.nl/documenten/f3d07837-02d3-4523-84a7-65dad72ddad5/file -->

Agenda Waardegedreven Digitaliseren
1.2 "Toegankelijke, hoogwaardige en proactieve dienstverlening

> Er is een statusoverzicht van (aan)vragen gerealiseerd en getoetst in de Mijn-omgeving van 6 gemeenten. Hiermee kunnen burgers en ondernemers de status van hun (aan)vraag inzien en volgen en wordt de interactie met de overheid eenvoudiger en soepeler

> Opzet van het DigiToegankelijk Toezicht en OndersteuningsProgramma (DT TOP) dat organisaties helpt bij het verbeteren van de digitale toegankelijkheid van hun websites en mobiele applicaties. Belangrijk onderdeel hierin is het betrekken van­ ervaringsdeskundigen bij het toeten van websites en apps. Daarnaast biedt DT TOP ondersteuning middels webinars en advisering op intern beleid en inkoop. Ook zijn een dashboard en kennisbank opgeleverd voor ondersteuning van digitale toegankelijkheid.

- Iedereen kan meedoen in het digitale tijdperk
- MijnZaken
- "track & trace" die is getoetst (doel: beschikbaar maken voor meer softwareplatforms)

https://www.noraonline.nl/images/noraonline/6/6d/Visie_Architectuur_Digitale_Overheid_2030_-_concept.pdf

Het is handig als gebruikers de oplossing kunnen gebruiken vanaf de nldesignsystem.nl website, de website die ze al kennen. https://www.noraonline.nl/wiki/Bied_één_contactpunt_(Single_point_of_contact)

De front-end code moet ingesteld kunnen worden met meertaligheid. <!-- i18n tools -->
De front-end code moet vertaald kunnen worden met bijvoorbeeld Google Translate. <!-- translate="no" en <bdi> op bepaalde dingen -->
https://www.noraonline.nl/wiki/Maak_de_dienst_toegankelijk_voor_anderstaligen

Gebruik WCAG 2.2 voor nieuwe ontwikkelingen.
https://www.noraonline.nl/wiki/Pas_ontwerprichtlijnen_toe_bij_websites_en_portalen_en_apps

Laag 5: IT-infrastructuurlaag:

- voor zover mogelijk testautomatisering gebruiken om kwaliteitscontrole te doen op WCAG successcriteria.sa

## 4.2 Invalshoek NL Design System Community

Organisaties die oplossingen willen ontwikkelen met behulp van NL Design System, willen dat een extra investering beperkt en overzichtelijk is, of liever nog: dat het geld bespaart.

Organisaties kunnen onder andere de volgende taken hebben.

- een bestaande website herstellen, waarvoor één huisstijl ingesteld moet worden voor slechts enkele onderdelen van NL Design System.
- een website maken voor één klant, waarvoor één huisstijl ingesteld moet worden.
- een webapplicatie voor meerdere klanten, waardoor meerdere huisstijlen ingesteld moeten worden.

Voor kleinere taken zoals een bestaande website herstellen is op dit moment de drempel relatief hoog om NL Design System te gebruiken. Voor grote projecten, zoals een webapplicatie ontwikkelen voor meerdere overheden, is de investering om ervaring te krijgen met NL Design System meer de moeite waard.

Leveranciers in de community willen graag dat de extra tijd die nodig is voor werken met NL Design System wordt verminderd.

## 4.2 De invalshoek Organisatie

<!-- Wie (welke functie) is eind-verantwoordelijk voor deze dienst? -->

De opdrachtgever, het Ministerie van Binnenlandse Zaken is eindverantwoordelijk voor deze dienst.

<!-- Hoe wordt de dienst gemanaged met het Dienstverleningsconcept? -->

<!--
• Hoe wordt de dienst gemanaged met het Dienstverleningsconcept?
	◦ Welk gremium bepaalt de afspraken over de dienst?
	Denk aan Tweede Kamer als het een overheidsdienst aan burgers is, of het OBDO als het gaat om samenwerking tussen overheidsorganisaties of efficiëntie (via het gebruik van standaarden e.d.)
	◦ Welke overheidsorganisatie(s) voert (voeren) die afspraken uit?
	◦ Welke overheidsorganisatie is verantwoordelijk voor het herstel van eventuele gemaakte fouten? En bij wie kan de gebruiker (burger, ondernemer, ambtenaar) hulp vragen als het vastloopt oid.?
	◦ Welke overheidsorganisatie(s) is (zijn) verantwoordelijk voor het doorvoeren van wijzigingen in het proces?
	◦ Welke overheidsorganisatie is verantwoordelijk voor voorstellen voor verbetering van de afspraken of van de uitvoering?
-->

## 4.3

Wie (welke functie) is eind-verantwoordelijk voor deze dienst?
Hoe wordt de dienst gemanaged met het Dienstverleningsconcept?
Welk gremium bepaalt de afspraken over de dienst?

## 4.3 De invalshoek Informatie

Geef hier een eerste indicatie van de informatie-objecten die relevant zijn bij (de oplossing voor) het vraagstuk. Hier is een overzicht van alle Implicaties van Architectuurprincipes voor de Informatielaag

- Domeinnamen van overheidswebsites (URLs)
- Design Tokens JSON

### Overheidswebsites

Om een automatische analyse te doen van de huisstijl van een overheidsorganisatie, dan moet de URL van de relevante website bekend zijn. Dat kan op basis van een databron met een verzameling van overheidswebsites. Het kan ook mogelijk zijn dat organisaties hun eigen website aanmelden via een on-line formulier.

De [Register Internetdomeinen Overheid](https://organisaties.overheid.nl/domeinen) bevat veel domeinnamen van de Rijksoverheid. In januari 2025 was nog maar een fractie van de domeinen geregistreerd van gemeenten, provincies en waterschappen. Voor organisaties met veel websites is niet gemarkeerd welke website de hoofdwebsite is, waar de huisstijl meestal het meest nauwkeurig is toegepast.

Om een meer volledig en representatieve verzameling websites te hebben, is de informatie van Registratie Internetdomeinen Overheid onvoldoende. De diversiteit van huisstijlen is onvoldoende representatief als grotendeels websites met Rijkshuisstijl worden gebruikt.

De informatie zou daarom aangevuld moeten worden met een verzameling van websites van in elk geval: gemeenten, provincies en waterschappen.

Omdat een complete verzameling van overheidswebsites niet bestaat, moet de informatie ook aangevuld kunnen worden met websites die aangemeld worden met een on-line formulier.

Wanneer de domeinnamen bekend zijn, dan kunnen de websites geanalyseerd worden door de HTML te downloaden en gerelateerde HTML en CSS bestanden te herkennen en te downloaden via beveiligde HTTP-verbindingen.

### Design Tokens JSON

Design Tokens is een JSON formaat dat in actieve ontwikkeling is door een [Design Tokens Community Group bij W3C](https://www.w3.org/groups/cg/design-tokens/). NL Design System gebruikt een recente versie van dit formaat. Er is software-ondersteuning voor dit formaat die wordt gebruikt, onder andere in Figma met een Tokens Studio plugin en in [Style Dictionary](https://styledictionary.com/).

De informatie is al beschikbaar in JSON, een ["Pas toe of leg uit standaard" van Forum Standaardisatie](https://www.forumstandaardisatie.nl/open-standaarden/aanbevolen). De JSON kan met open source software geconverteerd worden CSS, een andere veelgebruikte "Pas toe of leg uit standaard".

Zie: [Design Tokens Format Module](https://tr.designtokens.org/format/)

Organisaties met die al de huisstijl hebben vastgesteld in Design Tokens JSON, willen waarschijnlijk een combinatie maken tussen de bestaande data in de JSON en extra design tokens uit de theme scraper.

De design tokens JSON van organisaties die meedoen met NL Design System zijn in principe publiek beschikbaar in een publieke Git-repository, en er worden releases gepubliceerd op een publieke npm-registry. De Git-repositories en releases zijn helaas niet gekoppeld aan een identificatie van een overheidsorganisatie of website. Deze relatie moet nog gelegd worden om te kunnen gebruiken in dit project.

## 5. Standaarden

Voor webhosting van de oplossing moeten de volgende standaarden gebruikt worden:

- DNSSEC voor domeinnamen. https://www.forumstandaardisatie.nl/open-standaarden/dnssec
- HTTPS en HSTS voor encryptie van HTTP. https://www.forumstandaardisatie.nl/open-standaarden/https-en-hsts
- TLS voor encryptie van HTTP: https://www.forumstandaardisatie.nl/open-standaarden/tls

- Websites moeten bereikbaar zijn via zowel IPv6 als IPv4: https://www.forumstandaardisatie.nl/open-standaarden/ipv6-en-ipv4

Voor het aanbieden van gehoste APIs moeten de volgende standaarden gebruikt worden:

- OpenAPI om de REST API te documenteren. https://www.forumstandaardisatie.nl/open-standaarden/openapi-specification
- REST API design rules zijn de basis voor het ontwerpen van nieuwe APIs: https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules
- ISO8601 voor datum- en tijd-gegevens. https://www.forumstandaardisatie.nl/open-standaarden/datum-en-tijd
- UTF-8 als encoding van HTTP responses en HTTP requests: https://www.forumstandaardisatie.nl/open-standaarden/utf-8
- https://www.forumstandaardisatie.nl/open-standaarden/uri-en-iri
- JSON wordt gebruikt voor responses, en niet XML of YAML: https://www.forumstandaardisatie.nl/open-standaarden/json
- https://www.forumstandaardisatie.nl/open-standaarden/securitytxt
- Gehoste domeinnamen bieden een `/security.txt` aan voor responsible disclosure informatie. https://www.forumstandaardisatie.nl/open-standaarden/securitytxt

Voor het maken van applicaties moeten de volgende standaarden worden gebruikt:

- CSS https://www.forumstandaardisatie.nl/open-standaarden/css
- HTML https://www.forumstandaardisatie.nl/open-standaarden/html
- SVG https://www.forumstandaardisatie.nl/open-standaarden/svg

- https://www.forumstandaardisatie.nl/open-standaarden/nen-isoiec-27001 door BIO

## 6.1 Privacy

Het product zal alleen publieke gegevens verwerken, en gegevens worden niet langdurig opgeslagen.

TODO:

- Uitzoeken welke gegevens gelogd worden, zoals IP-adressen van requests, URLs die ingevoerd zijn in de theme scraper, en hoe lang ze bewaard worden.

## 6.2 Informatiebeveiliging

Voor informatiebeveiliging kun je een Information Security Management System (ISMS) gebruiken, en [ISO 27001 is een "Pas toe of leg uit standaard"](https://www.forumstandaardisatie.nl/open-standaarden/nen-isoiec-27001). ICTU past geen ISO 27001 ISMS toe.

<!--
TODO: Waarom niet ISO 27001? Heb die vraag gesteld in MS Teams
https://teams.microsoft.com/l/message/19:E6JPK002Sp8hbLMWwR9hKDC7p7jzQ9LYFmcriSRFmzg1@thread.tacv2/1738146335505?tenantId=6b1d3da2-3751-4e3d-b3c9-e6784c8bad70&groupId=e76d90c5-30b6-456a-8931-3b3940b7a659&parentMessageId=1738146335505&teamName=ICTU%20Softwareontwikkeling&channelName=General&createdTime=1738146335505
-->

Voor maatregelen voor informatiebeveiliging is de ISO 27002 een standaard.

Dat betekent dat website waar de oplossing wordt gepubliceerd moet een 100% score halen op internet.nl.

### Belangrijkste bestaande kaders en inrichtingskeuzes

### Punten voor discussie

Maak een document
