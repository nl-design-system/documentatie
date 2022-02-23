---
menu: DigiD
---

# DigiD afnemers richtlijnen

## Klantreis bij authenticeren

### Situatie zonder routeringsdienst

![Flow van klantreis situatie zonder routeringsdienst](https://user-images.githubusercontent.com/248921/155279536-0bb2c7b5-ca2e-4744-8a76-4f90cbed8243.svg)

### Situatie met routeringsdienst

![Flow van klantreis situatie met routeringsdienst](https://user-images.githubusercontent.com/248921/155280827-0a281144-a36e-4ad2-a6fa-66d176b78909.svg)

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

##### 2. Title

Functie: de flow introduceren en door de bewoording duidelijk maken wat de gebruiker gaat doen.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn.

Vrij te bewerken: font-color, font-size (mag niet kleiner zijn dan paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

![Voorbeeld van titel: Vraag parkeervergunning aan als burger](https://user-images.githubusercontent.com/248921/155281792-b49e31ca-29eb-4fa7-9d68-1cbf20e6ebe2.svg)

##### 3. Subtitle (optioneel)

Functie: extra toelichting bieden over het inloggen of over de taak.

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen.

Vrij te bewerken: font-color, font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

![Voorbeeld van subtitel: U hebt minimaal eHerkenning niveau 3 nodig om in te loggen](https://user-images.githubusercontent.com/248921/155281824-075edc88-ee07-460e-909b-f4999f879685.svg)

##### 4. logo authenticatiedienst

Functie: in één oogopslag laten zien dat je moet authenticeren met authenticatiedienst als deze taak wilt uitvoeren.

Vereist: logo design mag niet worden aangepast tenzij authenticatiedienst het logo hierziet, positie is rechtsboven het blok, size is 56px bij 56px of 3,5 rem bij rem=16.

Vrij te bewerken: keuze logo
  
![DigiD logo](https://user-images.githubusercontent.com/248921/152785932-3b37f443-7bc5-415f-9eab-83f915e78002.svg)

##### 5. Button

Functie: taak flow starten en doorleiden naar omgeving authenticatiedienst.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn, min-height: 44px of 2,75rem bij rem=16.

Vrij te bewerken: aantal buttons, background-color, font-color, font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy, icon-color, icon, width, shadow, border-style, border-width, border-color, border-radius, interactive states.

![Voorbeeld van een knop](https://user-images.githubusercontent.com/248921/152786160-7c365a82-c4ea-4676-833c-dd785dc41874.svg)

##### 6. Assistive text

Functie: linken naar aanvragen authenticatiedienst indien gebruiker deze niet heeft, linken naar troubleshooting of meer uitleg (optioneel).

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn, link font-color komt overeen met huisstijl en heeft underscore, link copy is beschrijvend genoeg voor link-to-link navigatie, communiceer dat het een externe link betreft (met icoon of tekstueel).

Vrij te bewerken: font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

![Voorbeeld van Voorbeeld helptekst](https://user-images.githubusercontent.com/248921/155282146-6d9e0006-ceca-489f-a210-6a3b561d6a0f.svg)

#### Taak met DigiD als middel

![Voorbeeld van DigiD op desktop](https://user-images.githubusercontent.com/248921/155286644-5b43b25c-b421-4b53-9975-8b5d767a101e.svg)

Voorbeeld van DigiD (desktop scherm).

![Voorbeeld van DigiD op mobiel](https://user-images.githubusercontent.com/248921/155286673-82e3e570-5b33-4beb-940b-87a6545620bd.svg)

Voorbeeld van DigiD (mobiel scherm).

#### Taak met eHerkenning als middel

![Voorbeeld van eHerkenning op desktop](https://user-images.githubusercontent.com/248921/155286720-d0d802b1-8f18-4e65-a957-be487b2c9afd.svg)
  
Voorbeeld van eHerkenning (desktop scherm).

![Voorbeeld van eHerkenning op mobiel](https://user-images.githubusercontent.com/248921/155286788-4da4bac3-0938-4943-9210-ad4c1436c8c4.svg)
  
Voorbeeld van eHerkenning (mobiel scherm).

#### Taak met DigiD en eIDAS als middels

![Voorbeeld van DigiD en eIDAS op desktop](https://user-images.githubusercontent.com/248921/155286833-6b1c1276-98e0-4e8c-b345-65a6ca09199d.svg)

Voorbeeld van DigiD en eIDAS (desktop scherm).

![Voorbeeld van DigiD en eIDAS op mobiel](https://user-images.githubusercontent.com/248921/155286893-dbd62a12-af2e-4ab6-afa2-34a78473158b.svg)
  
Voorbeeld van DigiD en eIDAS (mobiel scherm).

#### Taak met unspecified middel

![Voorbeeld van unspecified middel op desktop](https://user-images.githubusercontent.com/248921/155286932-19dd9612-d6b9-4ae1-8693-cdbbfd7804cb.svg)

Voorbeeld van unspecified middel (desktop scherm).

![Voorbeeld van unspecified middel op mobiel](https://user-images.githubusercontent.com/248921/155286977-d1e9365c-4357-45b8-a507-28fb4d891abe.svg)

Voorbeeld van unspecified middel (mobiel scherm).

### Voorbeelden in context

#### Parkeervergunning aanvragen

![Voorbeeld aanvragen parkeervergunning voor burgers](https://user-images.githubusercontent.com/248921/152787758-f887191d-35b3-48ef-a8c4-a842377c4688.svg)

Voorbeeld van het aanvragen van een parkeervergunning voor burgers.
  
![Voorbeeld aanvragen parkeervergunning voor ondernemers](https://user-images.githubusercontent.com/248921/152787927-e38994e3-e0a7-4c01-9f5f-03166bc42122.svg)
  
Voorbeeld van het aanvragen van een parkeervergunning voor ondernemers.

#### Patiëntgegevens wijzigen

Bent u verhuisd, of hebt u een andere verzekering, huisarts of apotheek? Dan kunt u de nieuwe gegevens doorgeven aan zorginstelling in uw Mijn omgeving. 

Na wijzigen van de gegevens, sturen wij een bevestiging naar het e-mailadres dat u hebt ingevuld. In deze bevestiging staan de gegevens die u hebt doorgegeven.

![Voorbeeld wijzigen patiëntgegevens](https://user-images.githubusercontent.com/248921/152788046-91347c4e-2b8b-4ef5-878b-42716cda2f5c.svg)

Voorbeeld van het wijzigen van patiëntgegevens.

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

![DigiD logo](https://user-images.githubusercontent.com/248921/152788616-d4e0982d-72bb-4c96-af02-d0fee0bdb97f.svg)

##### 3. Title

Functie: duidelijk maken dat het hier inloggen met authenticatiedienst betreft.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy zoals bovenaan deze sheet benoemd.

Vrij te bewerken: font-color, font-size (mag niet kleiner zijn dan paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten).
  
![Voorbeeld titel: Inloggen met eHerkenning](https://user-images.githubusercontent.com/248921/152788725-c405688e-21e8-4944-b122-6b636ff0873a.svg)

##### 4. Subtitle (optioneel)

Functie: extra toelichting bieden over het inloggen of over de Mijn omgeving.

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen.

Vrij te bewerken: font-color, font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

![Voorbeeld subtitel: U hebt minimaal eHerkenning niveau 3 nodig om in te loggen](https://user-images.githubusercontent.com/248921/152788860-03e9b701-e484-4a99-9d6d-5f2f0777d2e8.svg)

##### 5. Button

Functie: Authenticatieflow ingaan en doorleiden naar omgeving authenticatiedienst.

Vereist: font-weight: bold, WCAG kleur-contrast moet behaald worden, copy zoals bovenaan deze sheet benoemd, min-height: 44px of 2,75rem bij rem=16.

Vrij te bewerken: background-color, font-color, font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy, icon-color, icon, width, shadow, border-style, border-width, border-color, border-radius, interactive states.

![Voorbeeld knop](https://user-images.githubusercontent.com/248921/152788956-d6c6f82a-b441-4f8e-84d5-a7c9120706e3.svg)

##### 6. Assistive text

Functie: linken naar aanvragen authenticatiedienst indien gebruiker deze niet heeft, linken naar troubleshooting of meer uitleg (optioneel).

Vereist: font-weight: regular, WCAG kleur-contrast moet behaald worden, copy moet zoveel mogelijk taalniveau B1 halen en activerend/taakgericht geformuleerd zijn, link font-color komt overeen met huisstijl en heeft underscore, link copy is beschrijvend genoeg voor link-to-link navigatie, communiceer dat het een externe link betreft (met icoon of tekstueel).

Vrij te bewerken: font-size (is paragraph font-size), font-family (RijksoverheidSansWebText is vereist voor overheidsdiensten), inhoud copy.

![Voorbeeld helptekst met link: Geen eHerkenning? Vraag eHerkenning aan.](https://user-images.githubusercontent.com/248921/152789035-317a50a5-4e50-4bfa-9987-060f797ec3d3.svg)

### Componenten op dektop en mobiel

![DigiD op dektop](https://user-images.githubusercontent.com/248921/152789452-5d2a3f93-bd0f-4548-822f-a0a476ad3305.svg)
  
DigiD op dektop.

![DigiD op mobiel](https://user-images.githubusercontent.com/248921/152789488-3735a13a-7f20-4ab7-b910-e26b0397a4ff.svg)

DigiD op mobiel.

![eHerkenning op desktop](https://user-images.githubusercontent.com/248921/152789535-307ee13c-38ef-41fb-89d7-bf8b66510f37.svg)

eHerkenning op desktop.

![eHerkenning op mobiel](https://user-images.githubusercontent.com/248921/152789584-9593fa2e-3042-4f5f-b58b-316c8a6932ed.svg)

eHerkenning op mobiel.

![eIDAS op desktop](https://user-images.githubusercontent.com/248921/152789767-9c0e492d-2c73-4c02-8d45-5c096ed4d25f.svg)

eIDAS op desktop.

![eIDAS op mobiel](https://user-images.githubusercontent.com/248921/152789795-5e33d78e-bb78-4fac-8627-4c1e975394b4.svg)

eIDAS op mobiel.
  
### Voorbeelden in context

#### Inloggen bij Mijn omgeving

In de persoonlijke online omgeving Mijn omgeving kunt u makkelijk, snel en veilig zaken regelen bij de gemeente. Bewoners kunnen bijvoorbeeld een verhuizing doorgeven of extra parkeertegoed kopen via DigiD. Bedrijven kunnen eenvoudig online zaken regelen via eHerkenning.

![Voorbeeld inloggen Mijn omgeving met DigiD](https://user-images.githubusercontent.com/248921/152790269-696f5358-22bc-4e80-9c1c-147b0bff7b84.svg)

![Voorbeeld inloggen Mijn omgeving met eHerkenning](https://user-images.githubusercontent.com/248921/152790351-591b54d6-ccbc-427b-b2aa-430a9f40001d.svg)

![Voorbeeld inloggen Mijn omgeving met eIDAS](https://user-images.githubusercontent.com/248921/152790381-5830f5ef-1d44-46e5-b8c4-2005102dbd60.svg)

![Voorbeeld inloggen Mijn omgeving met meerdere middelen](https://user-images.githubusercontent.com/248921/152790587-be77b1cf-b7d0-4e10-b878-2e5a6cedbc1e.svg)

## Toegankelijkheid

Let op het volgende:

- Alle copy moet zoveel mogelijk taalniveau B1 halen, zodat meer mensen de tekst begrijpen. [Meer info over taalniveau B1](https://www.communicatierijk.nl/vakkennis/r/rijkswebsites/aanbevolen-richtlijnen/taalniveau-b1).
- Alle copy moet de WCAG 2.1 kleur-contrast eis halen, zodat meer mensen de tekst kunnen lezen. [Meer info over de WCAG kleur-contrast eis](https://www.w3.org/Translations/WCAG21-nl/#contrast-minimum).
- De copy van alle links en buttons moeten beschrijvend genoeg zijn, of voor schermleessoftware worden aangevuld met extra context, zodat iedereen de nodige context meekrijgt voor een link of button. [Meer info over linkdoelen beschrijvend maken](https://www.w3.org/Translations/WCAG21-nl/#linkdoel-in-context).
- Content en copy moet scalable zijn (werk met rem), zodat alles nog leesbaar en bedienbaar is wanneer de browser instellingen text en spacing  vergroten. [Meer info over het herschalen van tekst](https://www.w3.org/Translations/WCAG21-nl/#herschalen-van-tekst) en [meer info over het vergroten van tekstafstanden](https://www.w3.org/Translations/WCAG21-nl/#tekstafstand).
- Voor gebruikers die niet het logo van de authenticatiedienst kunnen waarnemen (bijvoorbeeld door blindheid) moet deze context worden gedeeld zodra de focus op de button ligt of ervoor. Anders krijgen ze deze context niet mee.

## Referenties

- [Logius](https://www.logius.nl/diensten/digid/toolkit-digid-en-digid-machtigen)

Documentatie geschreven door Rowan Verbraak. Neem voor vragen en feedback contact op met rowan.verbraak@logius.nl
