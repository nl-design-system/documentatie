# Project Start Architectuur voor Expertteam Digitale Toegankelijkheid, onderdeel webredactie

https://www.noraonline.nl/wiki/Webversie_PSA_Format#1_Managementsamenvatting_(max_1_A4)

## 1. Managementsamenvatting

De Nederlandse overheid moet voldoen aan standaarden voor digitale toegankelijkheid, daarom moeten overheidsinstellingen problemen met toegankelijkheid voorkomen en oplossen. De uitvoering wordt getoetst met onderzoeksrapporten. Daaruit blijkt dat een gedeelte van de problemen in "content" zit, en dat oplossing gezocht moet worden bij de webredactie en content management systemen (CMS).

We zoeken een oplossing hoe de belangrijkste problemen in content opgelost en voorkomen kunnen worden. De redactie is vaak niet op de hoogte van problemen die automatisch herkend kunnen worden, waardoor publicatie van ontoegankelijke content niet wordt voorkomen. Sommige toegankelijkheidsproblemen kunnen niet automatisch herkend worden, maar die moeten opgelost door extra stappen in het publicatieproces. We zoeken daarom een oplossing die waar mogelijk problemen herkent en voorkomt, en waar nodig de redactie helpt door instructies en documentatie in het proces te verwerken.

<!-- De belangrijkste bestaande kaders en inrichtingskeuzes waarmee rekening moet worden gehouden. Benoem hierbij ook de samenhang met architecturen. Bijvoorbeeld door aan te geven welk deel van een enterprise-, domein- of ketenarchitectuur de verandering invulling geeft. -->

De effectiviteit van de oplossing is afhankelijk van goede integratie met de software die gebruikt wordt door de webredactie: de CMS-software van bestaande websites. Bij de overheid zijn 3 CMS softwarepakketten de grootste: Drupal, WordPress, TYPO3. De oplossing zou zoveel mogelijk generiek moeten zijn, met voor de belangrijkste CMS een plugin. <!-- warning: we beloven nu 3 plugins met de volledige functionaliteit -->

<!--

Kern van het probleem:

- **redactie krijgt geen directe feedback op ontoegankelijke content**

  - geen feedback in content preview
  - geen foutmelding als iets niet is ingevuld, dat wel nodig is
  - er zit een te grote periode tussen het maken van content en de feedback
  - informatie uit automatische periodieke scans (zoals SiteImprove) komt niet bij de redactie
  - informatie uit toegankelijkheidsverklaring kan tot 3 jaar duren, en komt vaak niet bij de redactie
  - er is geen automatische todo-lijst van waar nog aan gewerkt moet worden, gekoppeld aan pagina's in het CMS

- het systeem heeft niet de mogelijkheid de content toegankelijk te maken
  - geen optie om taal in te stellen
  - geen optie om taal van pdf in te stellen
  - geen optie voor table caption
  - geen optie voor ondertitels bij audio/video

- het systeem geeft de mogelijkheid om ontoegankelijke content te maken
  - Heading 2 zonder tekst
  - Velden zijn optioneel die het niet zouden moeten zijn
  - TODO: Meer concrete voorbeelden.

- het is moeilijk voor mensen om te herkennen dat iets niet klopt
  - bijvoorbeeld: taal van de pagina, taal van PDF, documenttitel van PDF, afbeelding met ontbrekende alt-tekst

- het is moeilijk door mensen om de beoordeling te doen

- het is moeilijk om automatisch de boordeling te doen
  - bijv: contrast van teksten in afbeeldingen

- het is te veel werk (te duur) om het op te lossen
  - ondertitels

- de kennis ontbreekt bij de redactie

- de kennis wordt niet actief toegepast door de redactie

- er is druk om dingen te publiceren die niet toegankelijk is
  - tijdsdruk
  - de content maken heeft al veel geld gekost (video)
  - geen direct contact met aanleverende partij


Oplossingen op een matrix zetten van complexiteit, beheerbaarheid

Deliverables:

Haalbaar:

- herbruikbare helper-teksten die in samenwerking met CMS-leveranciers ingesteld worden
- generieke rich text editor die waarschuwingen geeft aan de redactie voor enkele veelvoorkomende problemen in tekst en structuur
- data-structuur = HTML structuur in "rich text" velden van een CMS
- <p lang="En">This page is also available in English!</p> lang="en" is vaak geen optie

Hoe houd je dit onderhoudbaar?

Spike nodig:

- plugin die automatisch "helper teksten" instelt in de 3 CMS-en
- is de rich text editor te integreren met het CMS?
  - Drupal en TYPO: waarschijnlijk
  - WordPress: waarschijnlijk wel voor Advanced Custom Fields implementaties, niet voor Gutenberg blocks

-->

Deze oplossing is een aanvulling op het NL Design System ecosysteem, waar wordt gewerkt aan digitale toegankelijkheid van visueel ontwerp en de code van websites. De oplossing moet aansluiten op bestaande oplossingen in NL Design System, zodat toegankelijkheid is geborgd in de volledige keten van aanlevering van content bij de webredactie, tot het on-line publiceren in een bestaande website. De oplossing moet ook voordelen bieden aan websites die nog niet NL Design System gebruiken.

<!-- De punten waarover besluitvorming en/of discussie moet plaatsvinden. Denk hierbij met name aan alternatieve oplossingsmogelijkheden en de impact daarvan. Maar ook afwijkingen van de afgesproken kaders. -->

De kaders zijn nu beperkt tot oplossingen voor webtechnologie. Een gedeelte van problemen bij toegankelijkheid komt doordat ontoegankelijke kantoorbestanden worden gepubliceerd op websites. Het aspect kantoorbestanden als bijlage in websites is nu buiten scope gelaten. Echter, een samenwerking met het project NLDoc dat werkt aan het oplossing voor kantoorbestanden ligt voor de hand, omdat die oplossing ook het meest effectief zou zijn als plugin bij CMS-en.

De oplossing is beperkt tot toepassingen voor open source CMS implementaties. De meerderheid van de CMS-markt is open source. en niet een grote afhankelijkheid is van beschikbare capaciteit bij leveranciers om de ontwikkelingen te starten.

## 2.1 Aanleiding en doelstelling

<!--
Beschrijf in het kort de huidige situatie en geef daarbij aan wat de precieze aanleiding is om deze PSA op te stellen: welke vraagstukken doen zich voor, wat moet worden aangepakt, welke ontwikkelingen vinden plaats waarmee rekening gehouden dient te worden, welke doelstelling en ambities worden nagestreefd, in welke richting het bestuur of management denkt qua oplossing e.d.
-->

## 2.2 Het te bereiken effect

<!--
Beschrijf kort en bondig de verandering en aan welke maatschappelijke doelen/ambities die verandering bijdraagt. Hier worden dus niet de projectdoelen en -ambitie bedoeld!
Geef daarnaast aan wat de door het project te realiseren oplossing moet gaan doen en wat de belangrijkste functies van die voorziening daartoe zijn.
Het afgesproken tijdpad en de kwaliteitseisen: wanneer zijn we tevreden met het resultaat. Beschrijf dit vanuit een “Black Box” (dus geen details van een oplossing).
Vaak zijn er al documenten die de beoogde verandering beschrijven.
-->

## 2.3 Stakeholders

<!--
Als het relevant is, neem dan ook wat achtergrondinformatie op over de betrokken overheidsorganisatie(s), de relevante wettelijke taken en de belangrijkste diensten/producten die die organisatie(s) aan de samenleving levert. Een belangrijke bron voor de beschrijving van een organisatie en het maatschappelijke belang, is de website van de organisatie. Daarnaast kunnen gesprekken met mensen, workshops of documenten binnen de organisatie veel input geven.
-->

## 4.1 De invalshoek Grondslagen

## 4.2 Invalshoek NL Design System Community

## 4.2 De invalshoek Organisatie

## 4.3

## 4.3 De invalshoek Informatie

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

## 6.2 Informatiebeveiliging

Voor informatiebeveiliging kun je een Information Security Management System (ISMS) gebruiken, en [ISO 27001 is een "Pas toe of leg uit standaard"](https://www.forumstandaardisatie.nl/open-standaarden/nen-isoiec-27001). ICTU past geen ISO 27001 ISMS toe.

<!--
TODO: Waarom niet ISO 27001? Heb die vraag gesteld in MS Teams
https://teams.microsoft.com/l/message/19:E6JPK002Sp8hbLMWwR9hKDC7p7jzQ9LYFmcriSRFmzg1@thread.tacv2/1738146335505?tenantId=6b1d3da2-3751-4e3d-b3c9-e6784c8bad70&groupId=e76d90c5-30b6-456a-8931-3b3940b7a659&parentMessageId=1738146335505&teamName=ICTU%20Softwareontwikkeling&channelName=General&createdTime=1738146335505
-->

Voor maatregelen voor informatiebeveiliging is de ISO 27002 een standaard.

Dat betekent dat website waar de oplossing wordt gepubliceerd moet een 100% score halen op internet.nl.

### Belangrijkste bestaande kaders en inrichtingskeuzes

<!-- TODO: Bij kaders kan ook fasering (plateau's) worden opgenomen -->

<!-- plateau's voor beheer -->

<!-- informatie architectuur kan gewoon een archimate plaatje zijn -->

<!-- applicatie architectuur kan gewoon een archimate plaatje zijn -->

CIA triad voor informatiebeveiliging

voor informatie beveiliging kijken naar categorieen van ISO27001 maatregelen / concerns

### Punten voor discussie

Maak een document
