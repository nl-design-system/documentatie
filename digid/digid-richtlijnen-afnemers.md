---
menu: DigiD
---

# DigiD afnemers richtlijnen

## Klantreis bij authenticeren

### Situatie zonder routeringsdienst

![Flow van klantreis situatie zonder routeringsdienst](https://user-images.githubusercontent.com/248921/152784845-81d7f644-9363-4494-93dc-d3155c7e9eda.svg)

### Situatie met routeringsdienst

![Flow van klantreis situatie met routeringsdienst](https://user-images.githubusercontent.com/248921/152784862-d5abba0d-cd2b-44e2-8ccb-36c71197d420.svg)

## Authenticeren voor taak

### Beschrijving

Dit authenticatie blok stuurt de gebruiker op adequate wijze een authenticatie flow in, die nodig om een taak of actie uit te voeren op de website. Hij valt op en biedt hulp aan als nodig. Door de keuze tussen authenticatiedienst al te maken op de detailpagina waar de taak is vermeld, kun je het aantal clicks verminderen en de keuze meer in de context plaatsen van de taak.

### Wanneer gebruiken

Gebruik dit component op een pagina van waar uit je een taak, actie of formulier kan starten waarvoor een authenticatie nodig is. Welke variant je gebruikt is afhankelijk van de mogelijke authenticatiedienst.

### Varianten

Mogelijke varianten:

- Authenticeren met DigiD
- Authenticeren met eHerkenning
- Authenticeren met DigiD of met eIDAS
- Authenticeren met op dit punt unspecified dienst, of authenticeren niet nodig (je gaat gelijk de taak flow in)

Kun je voor een taak zowel authenticeren met DigiD (met of zonder eIDAS optie) en eHerkenning? Plaats dan beide blokken onder elkaar. Vermeld in de copy een verschil in user value tussen inloggen met DigiD (of eIDAS) en eHerkenning - zoals voor particulieren of voor ondernemers - indien dit er is.

### Component

#### Anatomie en customizen

Dit authenticatie component bestaat uit:

##### 1. Background

Functie: opvallen en de gebruiker effectief een flow in leiden.

Vereist: moet te zien zijn, of via background-color, of via border. Moet alle content op de juiste manier bevatten.

Vrij te bewerken: background-color (zolang WCAG kleur-contrast nog behaald wordt), border-style, border-width, border-color, border-radius, shadow, width.

%Voorbeeld%

##### 2. Title

Functie: de flow introduceren en door de bewoording duidelijk maken wat de gebruiker gaat doen.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn.

Vrij te bewerken: font-color, font-size (mag niet kleiner zijn dan paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

%Voorbeeld: Vraag parkeervergunning aan als burger%

##### 3. Subtitle (optioneel)

Functie: extra toelichting bieden over het inloggen of over de taak.

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen.

Vrij te bewerken: font-color, font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

%Voorbeeld: U hebt minimaal eHerkenning niveau 3 nodig om in te loggen.%

##### 4. logo authenticatiedienst

Functie: in één oogopslag laten zien dat je moet authenticeren met <authenticatiedienst> als deze taak wilt uitvoeren.

Vereist: logo design mag niet worden aangepast tenzij authenticatiedienst het logo hierziet, positie is rechtsboven het blok, size is 56px bij 56px of 3,5 rem bij rem=16.

Vrij te bewerken: keuze logo

%Logo DigiD%

##### 5. Button

Functie: taak flow starten en doorleiden naar omgeving authenticatiedienst.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn, min-height: 44px of 2,75rem bij rem=16.

Vrij te bewerken: aantal buttons, background-color, font-color, font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy, icon-color, icon, width, shadow, border-style, border-width, border-color, border-radius, interactive states.

%Voorbeeld knop%

##### 6. Assistive text

Functie: linken naar aanvragen authenticatiedienst indien gebruiker deze niet heeft, linken naar troubleshooting of meer uitleg (optioneel).

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn, link font-color komt overeen met huisstijl en heeft underscore, link copy is beschrijvend genoeg voor link-to-link navigatie, communiceer dat het een externe link betreft (met icoon of tekstueel).

Vrij te bewerken: font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

%Voorbeeld helptekst%

#### Taak met DigiD als middel

%image%

#### Taak met eHerkenning als middel

%image%

#### Taak met DigiD en eIDAS als middels

#### Taak met unspecified middel

%image%

### Voorbeelden in context

#### Parkeervergunning aanvragen

%image%

#### Patiëntgegevens wijzigen

Bent u verhuisd, of hebt u een andere verzekering, huisarts of apotheek? Dan kunt u de nieuwe gegevens doorgeven aan <zorginstelling> in uw <mijn omgeving>. 

Na wijzigen van de gegevens, sturen wij een bevestiging naar het e-mailadres dat u hebt ingevuld. In deze bevestiging staan de gegevens die u hebt doorgegeven.

%image%

## Authenticeren voor Mijn omgeving

### Beschrijving

Dit authenticatie blok stuurt de gebruiker op adequate wijze een authenticatie flow in, die nodig om de Mijn omgeving binnen te komen van de organisatie. Hij valt op en biedt hulp aan als nodig. Door de pagina te vullen met tegels krijg je in één oogopslag een beeld tussen welke authenticatiediensten je kunt kiezen.

### Wanneer gebruiken

Gebruik dit component alleen op de algemene inlogpagina van de Mijn omgeving. Welke variant je gebruikt is afhankelijk van de mogelijke authenticatiedienst.

### Varianten

Mogelijke varianten:

- Authenticeren met DigiD
- Authenticeren met eHerkenning
- Authenticeren met eIDAS

Bij kleinere schermbreedtes kun je het beste de mobiele variant gebruiken. Deze is verticaal ingekort zodat 1 blok niet schermvullend is en de gebruiker veel moet scrollen.

Heb je meer dan deze 3 authenticatiediensten? Probeer die in hetzelfde stramiën toe te passen en plaats een comment in dit bestand.

### Component

#### Anatomie en customizen

Dit authenticatie component bestaat uit:

##### 1. Background

Functie: opvallen en de gebruiker effectief een keuze laten maken.

Vereist: moet te zien zijn, of via background-color, of via border. Moet alle content op de juiste manier bevatten.

Vrij te bewerken: background-color (zolang WCAG kleur-contrast nog behaald wordt), border-style, border-width, border-color, border-radius, shadow, width.

##### 2. logo authenticatiedienst

Functie: in één oogopslag laten zien welke authenticatiedienst het betreft.

Vereist: logo design mag niet worden aangepast tenzij authenticatiedienst het logo hierziet, positie is middenbovenin het blok, size is 80px bij 80px of 5 rem bij rem=16.

Vrij te bewerken: keuze logo

%Logo DigiD%

##### 3. Title

Functie: duidelijk maken dat het hier inloggen met <authenticatiedienst> betreft.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy zoals bovenaan deze sheet benoemd.

Vrij te bewerken: font-color, font-size (mag niet kleiner zijn dan paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten).

%Voorbeeld: Inloggen met eHerkenning%

##### 4. Subtitle (optioneel)

Functie: extra toelichting bieden over het inloggen of over de Mijn omgeving.

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen.

Vrij te bewerken: font-color, font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

%Voorbeeld: U hebt minimaal eHerkenning niveau 3 nodig om in te loggen.%

##### 5. Button

Functie: Authenticatieflow ingaan en doorleiden naar omgeving authenticatiedienst.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy zoals bovenaan deze sheet benoemd, min-height: 44px of 2,75rem bij rem=16.

Vrij te bewerken: background-color, font-color, font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy, icon-color, icon, width, shadow, border-style, border-width, border-color, border-radius, interactive states.

%Voorbeeld knop%

##### 6. Assistive text

Functie: linken naar aanvragen authenticatiedienst indien gebruiker deze niet heeft, linken naar troubleshooting of meer uitleg (optioneel).

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn, link font-color komt overeen met huisstijl en heeft underscore, link copy is beschrijvend genoeg voor link-to-link navigatie, communiceer dat het een externe link betreft (met icoon of tekstueel).

Vrij te bewerken: font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

%Voorbeeld%

## Toegankelijkheid

Let op het volgende:

- Alle copy moet zoveel mogelijk taalniveau B1 halen, zodat meer mensen de tekst begrijpen. [Meer info over taalniveau B1](https://www.communicatierijk.nl/vakkennis/r/rijkswebsites/aanbevolen-richtlijnen/taalniveau-b1).
- Alle copy moet de WCAG 2.1 kleur-contrast eis halen, zodat meer mensen de tekst kunnen lezen. [Meer info over de WCAG kleur-contrast eis](https://www.w3.org/Translations/WCAG21-nl/#contrast-minimum).
- De copy van alle links en buttons moeten beschrijvend genoeg zijn, of voor schermleessoftware worden aangevuld met extra context, zodat iedereen de nodige context meekrijgt voor een link of button. [Meer info over linkdoelen beschrijvend maken](https://www.w3.org/Translations/WCAG21-nl/#linkdoel-in-context).
- Content en copy moet scalable zijn (werk met rem), zodat alles nog leesbaar en bedienbaar is wanneer de browser instellingen text en spacing  vergroten. [Meer info over het herschalen van tekst](https://www.w3.org/Translations/WCAG21-nl/#herschalen-van-tekst) en [meer info over het vergroten van tekstafstanden](https://www.w3.org/Translations/WCAG21-nl/#tekstafstand).
- Voor gebruikers die niet het logo van de authenticatiedienst kunnen waarnemen (bijvoorbeeld door blindheid) moet deze context worden gedeeld zodra de focus op de button ligt of ervoor. Anders krijgen ze deze context niet mee.

## Referenties

- [Logius](https://www.logius.nl/diensten/digid/toolkit-digid-en-digid-machtigen)
