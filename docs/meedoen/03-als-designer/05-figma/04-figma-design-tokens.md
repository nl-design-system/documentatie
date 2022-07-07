---
title: Design tokens
hide_title: true
hide_table_of_contents: true
sidebar_label: Design tokens
pagination_label: Design tokens
description: Design tokens in Figma
keywords:
  - designer
  - figma
  - design tokens
---

# Design tokens in Figma

Door design tokens te gebruiken, delen zowel ontwerpers als ontwikkelaars eenzelfde taal. Het stelt iedereen in staat om te verwijzen naar ontwerpkenmerken, eigenschappen, componenten, enz. met dezelfde naam.

Design tokens zijn een _key : value_ paar, waarbij de key de eigenschap is, en de value, de waarde de waarde van die eigenschap.

Door het gebruik van design tokens garanderen we een ‘single source of truth’, wat betekent dat deze op één gecentraliseerde plaats staan en zowel door front-end als ontwerp tooling gebruikt worden. Om tokens te vertalen tussen front-end codebase en Figma gebruiken we [Style Dictionary](https://amzn.github.io/style-dictionary/).

Totdat Figma native support voor design tokens heeft zijn we aangewezen op een plugin om met design tokens te werken. We gebruiken hiervoor de [Figma Tokens plugin](https://docs.tokens.studio/). Niet alleen wordt deze plugin continu onderhouden, de ontwikkelaar staat ook open voor suggesties en verbeteringen.

Meerdere token-sets kunnen met deze plugin in Figma worden geladen. Dit maakt het mogelijk om eenvoudig andere visuele stijlen en merkbeleving toe te passen op basis van een white-label ontwerp. Tevens maakt dit het mogelijk om snel aan te tonen of er in een visuele stijl design tokens ontbreken en te voorzien in ‘sane defaults’. So is het bijvoorbeeld mogelijk om snel inzicht te krijgen of de visuele stijl van een merk wel of niet voorziet in feedback kleuren.

Om dit succesvol te laten werken, dienen we goed te letten op de naamgeving conventie van tokens.

Tokens worden niet opgeslagen als onderdeel van Figma bestanden, om ze te kunnen gebruiken worden deze opgeslagen en gesynchroniseerd via GitHub.

## Token niveaus

Wij gebruiken een gelaagde aanpak voor het ontwerpen met tokens waarbij de merkidentiteit en visuele taal wordt geabstraheerd van de onderliggende structuur.

De drie niveau’s:

1. Brand tokens,
2. Common tokens, en
3. Component tokens

[Hier is een korte inleidende video over het concept van token niveaus (YouTube link)](https://www.youtube.com/watch?v=mDPbLJSQYdo).

### Brand tokens

Brand tokens definiëren de visuele ‘opties’ van een merk of product; de kleuren, typografie, maatvoering, enz.

You are free to use your own language when naming these tokens. You might already have internal conversations about your own unique `kleur-actieblauw` or `merkkleur-rood`. We advise you to use this language for your brand tokens. After all, tokens are meant to unify language between designers and developers. If you already have an established language in your organisation it is best to continue using this over relearning a new language.

Voor het benoemen van deze brand tokens kan een eigen taal gebruikt worden. Wellicht worden intern al eigen unieke namen als `kleur-actieblauw` of `merkkleur-rood` gebruikt. Wij adviseren u om deze taal aan te blijven houden voor brand tokens. Tokens zijn immers bedoeld om eenzelfde taal te gebruiken tussen ontwerpers en ontwikkelaars. Wanneer er al een gevestigde taal bestaat in een organisatie is het beter deze te blijven gebruiken dan een nieuwe taal in te voeren.

### Common tokens

Eén niveau onder brand tokens zijn de ‘common’ tokens. In common tokens wordt aan visuele eigenschappen betekenis toegekend. Deze tokens verwijzen altijd naar de brand tokens door middel van een alias.

Common tokens zijn vaak terugkerende visuele eigenschappen die niet specifiek gebonden zijn aan een component. Een common token key:value paar is bijvoorbeeld: `document-color: utrecht-color-black`.

Waarbij de `document-color` de tekst voorgrondkleur is, en `utrecht-color-black` verwijst naar de kleur die de gemeente Utrecht heeft gedefinieerd als hun tekst voorgrond merkkleur.

**Common tokens voegen semantische betekenis** toe aan gemeenschappelijke visuele stijlen.

### Component tokens

Component tokens zijn tokens die gebruikt worden voor specifieke componenten.

Een voorbeeld van een component token key: value paar is bijvoorbeeld `button-primary-action-background-color: denhaag-color-primary-action`.

Component tokens kunnen verwijzen naar zowel brand als common tokens.

## naamgeving van tokens

Verwijzingen naar tokens (aliassen) kunnen op twee manieren worden geschreven, door het token tussen accolades te zetten (`{}`), of door een dollarteken vooraan te zetten (`$`).

Accolades genieten de voorkeur daar zowel de [W3C Design Tokens Community Group](https://design-tokens.github.io/community-group/format/#aliases-references) als [Style Dictionary](https://amzn.github.io/style-dictionary/#/tokens?id=referencing-aliasing) deze gebruiken.

## Installeren en instellen

**Wees voorzichtig: Als je eenmaal tokens hebt toegevoegd of bewerkt in de plugin, zorg er dan voor dat je deze pusht naar GitHub via het **boek** icoontje in de rechterbovenhoek van de plugin. Als je de tokens niet naar GitHub pusht zullen deze verloren gaan.**

Figma tokens worden opgeslagen in JSON formaat en gesynchroniseerd met GitHub. Dit maakt het mogelijk om tokens te delen tussen verschillende Figma gebruikers en in meerdere bestanden en om te experimenteren met tokens door gebruik te maken van branching (als het gebruikte Figma abonnement branching toelaat).

- Begin met het [installeren van de plugin](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens).
- Eenmaal geïnstalleerd, open de plugin vanuit het plugin menu en navigeer door de help schermen.
- Er zijn twee manieren om de white-label design tokens te laden die gebruikt kunnen worden als basis voor uw eigen tokens.
  1. Als je vertrouwd wilt raken met tokens [kopieer dan eerst de white-label design tokens](https://github.com/nl-design-system/figma-designtokens/blob/main/whitelabel.tokens.json) en plak deze in het **JSON** paneel (overschrijf hierbij de bestaande accolades). Wanneer je terug navigeert naar het **Tokens** paneel zijn de tokens gegroepeerd in categorieën.
  2. Om de white-label design tokens, of tokens van andere organisaties te laden en te synchroniseren, navigeer je naar het **Sync** paneel en selecteer je **GitHub** onder Token Storage.

Om tokens te ‘pullen’ en te ‘pushen’ van en naar GitHub zijn inloggegevens nodig.

1. In het _Name_ kan een unieke naam gegevens worden. Dit kan bijvoorbeeld de naam van een organisatie of design system zijn.
2. Zie onderstaande opmerking voor het verkrijgen van een _Personal Access Token_.
3. _Repository_ moet verwijzen naar `nl-design-system/figma-designtokens`.
4. De _Default Branch_ is `main`.
5. Het _File Path_ verwijst naar het design token JSON bestand en heeft het formaat `organisationname.tokens.json`. `organisationname` is hierbij de unieke naam van jouw JSON file.
6. _baseUrl_ kan leeg blijven.

### Personal access token

Met een personal access token kan je zien wie welke wijzigingen in de design tokens heeft aangebracht..

Om een personal access token aan te maken moet je een GitHub account hebben. Als je deze niet hebt, maak die dan eerst aan. [Deze link brengt u rechtstreeks naar de pagina met de Personal access tokens](https://github.com/settings/tokens). Als deze link werkt, ga dan door naar stap 5 hieronder.

1. Om een access token te genereren, ga naar je [GitHub instellingen](https://github.com/settings/profile) via het gebruikersmenu in het dropdown menu boven naast je avatar:

![Gebruikersmenu op GitHub](https://user-images.githubusercontent.com/248921/145817754-9ee5aaaf-89c4-4469-8222-1131adad4843.png)

2. Kies [_settings_](https://github.com/settings/profile).

3. Scroll vervolgens naar beneden naar de [_Developer settings_ link](https://github.com/settings/apps) onder Account instellingen:

![Developer settings op GitHub](https://user-images.githubusercontent.com/248921/145818135-a8c72615-bf7c-4378-9167-5e9b6719a3dd.png)

4. Van daaruit, [navigeer je naar je _Personal access tokens_ pagina](https://github.com/settings/tokens). Hierbij wordt je gevraagd nogmaals jouw GitHub wachtwoord in te vullen.

5. Voeg nu een beschrijvende naam toe voor uw tokenset, een vervaldatum (expiration date). Na deze vervaldatum dien je een nieuw access token te genereren om te gebruiken in Figma Token. Vink _repo_ aan (dit selecteert automatisch alle sub-nodes). Het is niet nodig om iets anders te selecteren uit de lijst met opties. Bevestig door op de knop _Generate token_ te drukken.

![New personal access token pagina op GitHub](https://user-images.githubusercontent.com/248921/145818855-179d985c-9a27-4093-bba1-130f6c5ec835.png)

6. Je hebt nu je eigen unieke toegangstoken gegenereerd waarmee alle commits op GitHub geïdentificeerd worden als de jouwe. Let op dat je deze toegangstoken maar één keer kan kopiëren, de toegangstoken wordt **niet** meer getoond wanneer je de pagina opnieuw bezoekt.

![Gegenereerde GitHub access token](https://user-images.githubusercontent.com/248921/145819244-ed4560e6-3c29-40f5-aaf9-d4bfbf94b726.png)

7. Kopieer dit token met de kopieeractie rechts naast het toegangstoken en plaats het in het _Personal Access Token_ veld in de Figma Tokens plugin:

![Inloggegevens velden in de Figma Tokens plugin](https://user-images.githubusercontent.com/248921/145819434-0a63b911-7751-4ef0-b6a7-05b088716098.png)

8. Je bent nu in staat om alle wijzigingen aan je design tokens in de Figma Tokens plugin op GitHub te bewaren.

[Neem contact op met Yolijn in het geval van problemen](mailto:yolijn@gebruikercentraal.nl).

## Bewerken van tokens

Het bewerken van de JSON tokens gaat het best in een externe code editor. Dit zorgt voor een betere leesbaarheid en biedt alle voordelen van een code editor, zoals globaal zoeken en vervangen, juiste tekst-inspringing, syntax highlighting, enz.

Om de tokens te bewerken selecteer je eenvoudig alle tokens (`CTRL+A`) in het JSON tabblad en kopieert je deze in een code editor.

Als je klaar bent met het bewerken van de tokens, kopieert je deze terug naar de JSON tab in Figma Tokens.

Hou er rekening mee dat het JSON formaat erg strikt is, elke komma of haakje dat is weggelaten of niet op de juiste plaats staat zal resulteren in een ongeldig JSON bestand. De plugin zal een waarschuwing terugsturen in het geval dat de JSON structuur ongeldig is.

![Foutmelding wanneer JSON ongeldig is in Figma Tokens](https://user-images.githubusercontent.com/248921/140959660-5c6bbff7-524a-4e13-8f1c-8cf756b1fda4.png)

## Wijzigingen aan tokens naar GitHub pushen

Als je wijzigingen in de tokens hebt aangebracht, moeten deze naar GitHub gepushed worden. Doe je dit niet, dan zullen wijzigingen verloren gaan.

Zodra er wijzigingen zijn aan tokens verschijnt er een blauwe stip naast het Push to GitHub (boek) icoon in de rechter bovenhoek van de plugin:

![Notificatie van wijzigingen in de Figma Tokens plugin die naar GitHub moeten worden gecommit](https://user-images.githubusercontent.com/248921/145822431-4caecef3-8c1d-43ff-80f8-73d6cdc35a2c.png)

Geef een duidelijke omschrijving van de wijzigingen in het _Commit message_ veld:

![Details van commit message naar GitHub](https://user-images.githubusercontent.com/248921/145822652-ee89c192-1140-416a-b671-4b2cdba6dba7.png)

Wanneer je slechts de _main_ branch (en geen branching gebruikt) laat je het _Branch_ veld op _main_ staan.

### Beperk veranderingen tussen commits tot een minimum

Probeer veranderingen tussen commits tot een minimum te beperken en te werken met een ‘feature mindset’ (bijvoorbeeld “ik ben nu bezig met feedback kleur”, of “ik ben nu bezig met de typografische schaal”). Op deze manier kunnen wijzigingen gemakkelijker worden getraceerd en kan je indien nodig terugdraaien naar een specifieke wijziging.

## Token wijzigingen van GitHub pullen

Als iemand wijzigingen aan tokens heeft aangebracht, moeten de tokens van GitHub 'gepulled' worden om in de Tokens plugin te verschijnen. Dit wordt niet automatisch gedaan en - in tegenstelling tot de notificatie van je eigen token wijzigingen die _gepushed_ moeten worden naar GitHub - krijg je geen notificatie van token wijzigingen die _gepulled_ moeten worden.

Het is daarom een goed idee om altijd van GitHub te _pullen_ wanneer je de Figma Tokens plugin opent.

Het pullen van tokens uit GitHub wordt gedaan met het _refresh_ icoontje in de rechterbovenhoek van de plugin:

![Tokens van GitHub halen](https://user-images.githubusercontent.com/248921/145823867-d12d84b2-d34a-42aa-909b-0ea84b0dd846.png)

## Backup van tokens

Het bijkomende voordeel van het bewerken van tokens in een externe editor is dat het makkelijk is om een backup kopie te bewaren die aan je GitHub repository toegevoegd kan worden voor extra backup of om alle gerelateerde bestanden bij elkaar te houden.

Wij raden aan om een backup te maken steeds wanneer je enig werk hebt verricht aan tokens in Figma Tokens.

## Opmerkingen

Figma is een geweldige tool voor het ontwerpen van web interfaces. Door de flexibele aard van het Web is het echter niet mogelijk om het medium en zijn gedrag exact na te bootsen in Figma.

### Waarden en eenheden zijn niet mogelijk in Figma

Waarden en eenheden die niet kunnen worden gebruikt in combinatie met Figma Tokens zijn:

- ex (X-hoogte van een font)
- ch (breedte van het karakter _0_ in het gekozen fontbestand, of de breedte van ieder karakter in een ‘monospace’ font)
- em
- rem

EMs en REMs dienen omgezet te worden naar ‘absolute’ waardes. Een tool die daarbij kan helpen is [http://pxtoem.com/](http://pxtoem.com/).

![PXtoEM tool](https://user-images.githubusercontent.com/248921/140959962-dab2fe1d-e27c-433e-a8cf-c79c103e8e6c.png)

![PXtoEM tool met een em waarde naar px geconverteerd](https://user-images.githubusercontent.com/248921/140960000-4b81b493-8b6a-4465-979c-610f056e847d.png)

Hiermee kunnen EM's worden geconverteerd naar pixelwaarden die in Figma kunnen worden gebruikt. De basis pixel waarde is de grootte van je 'root' (font) grootte. In de meeste gevallen zal dit 16px zijn.

Aangezien REM waarden afhangen van de bovenliggende groottes is het bepalen van de EM waarde van deze lastiger. In deze gevallen moet je berekenen wat de EM waarde is op basis van de grootte van een element container(s). Een oplossing is om de developer tool van je browser te gebruiken om te zien wat de 'berekende waarde' (calculated value) van de grootte van het betreffende element is.

Om dit te doen, open je de developer tools. In Chrome ga je naar **View** → **Developer** → **Developer tools** of gebruik je de sneltoetsen `⌥+⌘+I` (MacOS)/`CTRL+ALT+I` (Windows) of klik met de rechtermuisknop op het element en kies **Inspect**.

Van daaruit ga je naar het **Elements** tab, waar je de (gegenereerde) broncode van de huidige pagina ziet. Onder de broncode bevindt zich een set tabbladen waarvan **Styles** standaard open is. Klik op het tweede **Computed** tabblad om de berekende CSS waarden van de browser te zien.

Wanneer je het element hebt geselecteerd waarvan je de berekende waarde wilt zien, ga dan naar de eigenschap waarvan je de waarde wilt weten. In het geval van de illustratie hieronder is dat de font-size. De waarde die je aan de token wilt koppelen is in dit geval **17**..

![DevTools toont berekende CSS waarden](https://user-images.githubusercontent.com/248921/140960248-1beb10f7-59fa-4d8a-93a4-e4ccffb85a75.png)

## Kleuren

kleuren kunnen in de volgende formaten gespecificeerd worden:

- Hex
- RGB
- RGBa
- HSL
- HSLa
- Linear gradients (inclusief meerdere kleurstappen en opacity niveaus)

Kleur kan worden toegepast op zowel borders als fills (achtergrond). Standaard past de plugin kleur toe als een achtergrond fill. Om kleur toe te passen op een rand, klik rechts op het token en selecteer **Border**.

![Figma Tokens kleur opties](https://user-images.githubusercontent.com/248921/140960875-03df21e8-3506-4abd-82b4-fb7be661c370.png)

## Kaders (borders)

De volgende tokens voor kaders kunnen worden gedefinieerd:

1. Kader kleur (border color) (zie kleuren hierboven)
2. Kader breedte (border width)
3. Kader radius (border radius)

## Afmetingen en tussenruimte

### Afmetingen

Afmetingen kunnen worden toegepast op zowel de _X_ (horizontale) en _Y_ (verticale) as. Standaard worden deze op beide assen toegepast.

Indien je een afmeting alleen op de _X_ as toe wilt passen, selecteert je de token door er met de rechter muisknop op te klikken en **Width** te kiezen.

![Figma Tokens grootte token opties](https://user-images.githubusercontent.com/248921/140960907-0fc7ef14-f855-4d49-aa89-f78d44e01123.png)

Hetzelfde geldt voor de _Y_ as voor de hoogte, klik met de rechtermuisknop op het token en kies **Height**.

### Tussenruimte (spacing)

Waar afmetingen kunnen worden toegepast op een standaard element, kunnen ‘spacing’ tokens alleen worden toegepast op elementen wanneer hun container is ingesteld op _Auto layout_.

### Padding en margins

Spacing kan zowel op de _X_ (inline) en _Y_ (block) as toegepast worden. Standaard wordt een spacing token toegepast op de **Gap** property.

![Figma Tokens spacing token opties](https://user-images.githubusercontent.com/248921/140961019-ce202625-a1a2-4b66-bc55-29aaa473c02a.png)

Door rechts te klikken op de token kan je een aantal eigenschappen van de token instellen:

**Gap** is de afstand tussen objecten en maakt het mogelijk om marges in te stellen tussen elementen.

Als Auto layout is ingesteld in de horizontale richting kan Gap worden gebruikt om een linker (`inline-start`) of rechter (`inline-end`) marge toe te voegen. In verticale richting kan Gap gebruikt worden om een bovenmarge (`block-start`) of ondermarge (`block-end`) in te stellen.

Door **All** te selecteren wordt een uniforme padding aan objecten toegevoegd.

**Top**, **Right**, **Bottom**, **Left** zal de waarde van de token in een enkele richting instellen.

Om zowel inline- als block marges aan objecten toe te voegen, kan het in sommige gevallen nodig zijn om een leeg container-element aan je object toe te voegen.

## Typografie

Definieer het brood lettertype met de `document-font-family` token. Houdt er rekening mee dat `font stacks`, waarbij fallback opties voor het gewenste lettertype in CSS gedefinieerd kunnen worden, niet ondersteund worden in Figma. Alleen een enkel lettertype kan worden gedefinieerd.

Lettergewichten (zoals regular, medium en bold) moeten **exact** gedefinieerd worden zoals deze in het font-bestand worden beschreven. Sommige lettertypes gebruiken de term ‘regular’ voor het normale gewicht, terwijl andere de term ‘400’ of ‘normal’ gebruiken.

![Figma native typografisch paneel](https://user-images.githubusercontent.com/248921/140961125-b1a81200-97ed-4e07-91c4-edf3a3a1710e.png)

Het is van vitaal belang om dezelfde naam te gebruiken als gebruikt in het typografische paneel in Figma. Als dit niet goed is ingesteld, zal dit ertoe leiden dat typografische tokens niet worden toegepast.

### Modulaire typografische schaal

Het definiëren van een flexibele lettertypeschaal kan worden gedaan via de Token plugin door [het gebruik van mathematische formules](https://docs.tokens.studio/tokens/using-math). Vanuit een enkele basis lettergrootte (de grootte van de broodtekst) kan je een flexibele schaal maken door de basis lettergrootte te vermenigvuldigen of te delen. Hiermee kan je een vaste intervalgrootte instellen tussen uw paragraaftekst, koptekst, secundaire tekst en microtypografie.

![Type size token met mathematische formules](https://user-images.githubusercontent.com/248921/140961346-929ac75b-1f10-4b2f-bac7-f33089436405.png)

Hier gebruikt de token `font-size-xl` de `font-size-md` als basis en vermenigvuldigt deze met 1.25.

![Type size token](https://user-images.githubusercontent.com/248921/140961372-22c61588-ef35-4801-b368-5151bf3ba191.png)

`font-size-md`, gebruikt voor reguliere broodtekst is de enige font-grootte die gefixeerd is (in dit geval op 16dp). Alle andere lettergroottes worden automatisch gegenereerd door `font-size-md` te vermenigvuldigen of te delen en zullen dynamisch meeschalen wanneer de grootte van de broodtekst aangepast wordt.

Als je al een flexibele modulaire schaal gebruikt binnen jouw visuele stijl, dan is deze eenvoudig om één-op-één over te nemen in Figma.

### Samengestelde typografische tokens

Om ‘samengestelde’ typografietokens te maken, zoals voor een kop- of paragraaftekst, dienen eerst alle afzonderlijke typografietokens gedefinieerd worden die samen gecombineerde tokens vormen. Een gecombineerd token verwijst naar elk van deze individuele tokens.

![Samengestelde typografische tokens](https://user-images.githubusercontent.com/248921/140961614-18918637-1385-4cf4-a204-4ac415efff1e.png)

De typografische tokens die moeten worden ingesteld om een gecombineerd typografisch token te creëren zijn:

- Font-family
- Font-weight
- Font-size
- Line-height
- Letter-spacing (ruimte tussen leestekens, bij voorkeur ingesteld op 0 om kerning en spatiëring te erven zoals gedefinieerd door de ontwerper van het lettertype, mogelijk met uitzondering van kopteksten en tekst die in hoofdletters is gezet)
- Paragraph-spacing (tussenruimte tussen opeenvolgende paragrafen en/of kopteksten)

## Styles maken van tokens

Figma Styles kunnen worden gemaakt van tokens. Het toepassen van stijlen op objecten creëert automatisch een link naar de specifieke tokens in Figma Tokens. Alleen styles voor typografie en kleuren worden aangemaakt, andere visuele eigenschappen hebben (nog) geen specifieke stijl opties in Figma.

Om stijlen te maken van tokens, klik je op de _Create Styles_ knop rechtsonder in het plugin venster.

![Pijl die de plaats aangeeft van de Create Styles knop](https://user-images.githubusercontent.com/248921/150785647-25d391f6-42a9-4ab8-9a82-eb57ba665876.png)

![Gedeeltelijke weergave van styles gemaakt van tokens](https://user-images.githubusercontent.com/248921/150785738-b2a89dd6-f561-484c-a656-62c3eff3e759.png)
Gedeeltelijke weergave van styles gemaakt van tokens.

Je kan voorkomen dat tokens worden toegevoegd aan het Figma Styles paneel door de tokennaam te voorzien van een underscore (`_`).

## Referenties

- [Figma Tokens documentation](https://docs.tokens.studio/)
- [Design Tokens Glossary](https://www.designtokens.org/glossary/)
- [What are Design Tokens in Figma? (YouTube)](https://www.youtube.com/watch?v=mDPbLJSQYdo)
- [Design Tokens in Figma: How to get started, today. (YouTube)](https://www.youtube.com/watch?v=Ka1I5TphDb0)
