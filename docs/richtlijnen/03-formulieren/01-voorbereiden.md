---
title: Voorbereiding
hide_title: true
hide_table_of_contents: false
sidebar_label: Voorbereiding
sidebar_position: 1
pagination_label: Formulieren - Voorbereiding
description: Richtlijnen voor formulieren - Voorbereiding
keywords:
  - formulieren
  - voorbereiden
  - voorbereiding
---

<!-- @license CC0-1.0 -->

# Richtlijnen voor formulieren: Voorbereiding

_Status: **In ontwikkeling**_

## Formuleer de vragen die je wilt stellen {#formuleer-vragen}

Formuleer het doel van het formulier en maak dan een overzicht van alle vragen die je aan jouw gebruiker wilt stellen.

Indien het onduidelijk is waarom bepaalde informatie gevraagd wordt informeer gebruikers dan over de noodzaak hiervan maar tevens over de voordelen voor hen.

Voorkom dat gebruikers dezelfde informatie meerdere keren moeten invoeren.

![design-system service gov uk_patterns_addresses_](https://user-images.githubusercontent.com/248921/141821377-82d9ca36-6619-4796-87ab-aa54604105d1.png)

Relevantie van vraag uitgelegd in subkop [^question-relevance]

## Inventariseer of informatie al beschikbaar i{#beschikbare-informatie}

Inventariseer of informatie al beschikbaar is, bv. in het systeem van de gemeente of middels Basisregistratie Personen (BRP) of DigiD.

Wanneer informatie al binnen de organisatie aanwezig is, vraag je dan af of deze nogmaals gevraagd dient te worden, bv. ter controle of ter wijziging door de gebruiker.

Sommige informatie kan door een gebruiker niet gewijzigd worden. Deze informatie kan echter wel getoond worden zodat de gebruiker weet welke informatie met het formulier meegestuurd wordt.

Andere informatie, zoals bijvoorbeeld een telefoonnummer of e-mailadres dat al bekend is, kan vooraf ingevuld worden in een invoerveld. Deze kan door de gebruiker wel gewijzigd worden.

Dit kan op diverse manieren:

- Het vooraf invullen van een formulierveld. Hierdoor heeft een gebruiker de mogelijkheid deze informatie direct aan te passen.
- Het tonen van de informatie (‘read-only’) met een functie om deze informatie te wijzigen.
- Automatisch aanvullen van gedeeltelijke informatie. Bijvoorbeeld na invullen van postcode en huisnummer kan het volledige adres automatisch aangevuld worden.
- Het `autocomplete` HTML attribuut stelt browsers in staat om bepaalde repeterende informatie zoals bijvoorbeeld naam, adres en betaalgegevens automatisch in te vullen. Zorg ervoor dat er geen help tekst of andere benodigde informatie onder het veld staat, een eventueel autocomplete attribuut valt daar meestal overheen op desktop.

![Auto-complete van een telefoonnummer valt over eventuele help tekst onder het invoerveld](https://user-images.githubusercontent.com/248921/141822978-98bd349a-b455-4501-a606-f978e0138d00.png)

## Stel alleen noodzakelijke vragen {#noodzakelijke-vragen}

Vraag alleen om strikt noodzakelijke informatie om het doel van het formulier te bereiken en informeer gebruikers over de noodzaak hiervan. Bij iedere vraag dien je je af te vragen of deze daadwerkelijk nodig is voor de gebruiker en/of organisatie.

Is het bijvoorbeeld nodig om naar het geslacht of geboortedatum te vragen? Wat is het doel hiervan voor de organisatie en vooral het voordeel voor de gebruiker?

### Optionele en verplichte invoervelden

Tracht optionele vragen te vermijden. Mocht je deze toch willen stellen doe dit dan aan het einde van het formulier te stellen, tenzij deze echt bij een bepaald onderwerp of groep horen.

Geef duidelijk aan welke vragen optioneel zijn. De beste manier om dit aan te geven is met een tekst zodat deze ook door voorleessoftware wordt aangekondigd. Een verplicht invoerveld voorzien van het required HTML attribuut wordt als zodanig al aangekondigd door voorleessoftware.

Vaak is het beter om optionele velden als zodanig te markeren, en niet de verplichte velden. Markeer nooit beiden, maar alleen degene waarvan er het minste zijn. Dit is meestal ‘optioneel’. [^spectrum-optional-required]

Het staat bovendien vriendelijker om ‘optioneel’ te noemen in plaats van ‘verplicht’.

![Goed voorbeeld voor het aanduiden van optionele versus verplichte invoervelden uit Adobe Spectrum’s richtlijnen](https://user-images.githubusercontent.com/248921/141824603-9c8f7a16-217d-4af9-a049-fd54eb557c3b.png)

![Slecht voorbeeld voor het aanduiden van optionele versus verplichte invoervelden uit Adobe Spectrum’s richtlijnen](https://user-images.githubusercontent.com/248921/141824613-a394b9f9-4483-49ea-a084-ed4ea4a4e7d2.png)

“[Mark the minority of inputs in a form as required or optional](https://spectrum.adobe.com/page/field-label/#Mark-the-minority-of-inputs-in-a-form-as-required-or-optional)” van Adobe Spectrum’s richtlijnen.

## Zorg ervoor dat bepaalde vragen gesteld mogen worden {#mag-je-het-vragen}

Is het bijvoorbeeld juridisch verantwoord om deze informatie te vragen?

## Selectieafhankelijke vragen {#contitionele-vragen}

Selectieafhankelijke of conditionele vragen worden getoond als reactie op een eerdere vraag.

Conditionele vragen verschijnen altijd ná de originele vraag, nooit in een eerdere stap.

Bepaal waar deze conditionele vragen logisch gegroepeerd dienen te worden.

## Combineer en groepeer vragen {#groepeer}

Groepeer vragen vanuit de visie van de gebruiker, en niet vanuit jouw organisatie. In deze stap betrek je idealiter een aantal echte gebruikers die helpen de vragen logisch te groeperen.

Enkele conventies voor ‘groepeerblokken’ zijn vast te stellen, zoals bijvoorbeeld voor NAW-gegevens, ondertekening, bankgegevens, geboortedatum en toe te voegen bijlagen. De volgorde waarin deze blokken getoond worden kan echter per doel verschillen.

Wanneer een formulier als dialoog wordt gezien ontstaan onderwerpen vaak op een natuurlijke wijze. Gebruik deze onderwerpen om een formulier logisch te groeperen.

Ook de ‘boekhoofdstuk metafoor’ of waar kopteksten moeten verschijnen, kan hulp bieden bij het groeperen. Gebruikers vragen wat voor hen een logische groepering is, is uiteraard een hele goede methode om te groeperen.

Voorzie de groepen van duidelijke en beschrijvende kopteksten.

### Enkele vragen, meerdere elementen

Een enkele vraag op een formulier hoeft niet slechts één formulierelement te zijn. Het vragen van NAW-gegevens (“Wat is uw naam en adres?”) of een geboortedatum bestaan immers uit meerdere elementen om deze enkele vragen te beantwoorden.

### Sorteren

Groepen kunnen op verschillende manieren gesorteerd worden. Een van de opties is dat eerst makkelijke vragen, en daarna de moeilijke aan bod komen. Een andere optie is om eerst voor ingevulde antwoorden op vragen te tonen. Optionele vragen – mits ze niet bij een bepaalde groep horen- stel je aan het einde.
Een gebruiker moet voordat hij aan het formulier goed kunnen zien of het formulier of een vraag voor hem bedoeld is. Als een gebruiker niet voor een bepaald onderdeel of bepaalde vraag niet in aanmerking komt, moet dit snel in het proces duidelijk zijn. Beslisbomen kunnen hierbij helpen. Zet zo’n beslisboom vooraan in het formulier.

## Maak de functie van het formulier direct duidelijk {#verduidelijk-doel}

Door het aanbieden van een duidelijke titel en eventuele intro tekst weet de gebruiker direct wat het doel van het formulier is.

## Maak zo snel mogelijk duidelijk of het formulier relevant is voor de gebruiker {#check-relevantie}

Bij bijvoorbeeld selectieafhankelijke vragen kan het mogelijk zijn om een gebruiker al snel tijdens het invullen te informeren of het formulier voor haar relevant is.

Ook als het formulier namens iemand anders ingevuld wordt moet zo snel mogelijk duidelijk zijn of het formulier relevant is.

![check-a-service-is-suitable-flow](https://user-images.githubusercontent.com/248921/141825980-952498fc-e238-4fba-a450-cdf31f1d6dba.jpg)

“[Check a service is suitable](https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/)” uit het GOV.UK Design System.

## Leg uit wat een gebruiker nodig heeft om het formulier succesvol in te vullen {#overzicht-benodigde-informatie}

Waar nodig helpt het gebruikers een overzicht te geven van wat nodig is om een formulier succesvol af te ronden. Bijvoorbeeld wanneer een identiteitsbewijs of ondertekening door een ander nodig is.

Voeg dit overzicht als eerste toe voor een formulier getoond wordt. Dit kan een aparte sectie, maar ook een aparte pagina zijn. De sectie over groeperen en opsplitsen kan hierbij hulp bieden.

![Start pagina concept van GOV.UK](https://user-images.githubusercontent.com/248921/141979966-fe045fe4-b51a-4d4e-b6d0-49ebfb768890.png)

[GOV.UK gebruikt het concept ‘Start pagina’](https://design-system.service.gov.uk/patterns/start-pages/) alvorens een gebruiker een formulier in gaat vullen. Deze start pagina beschikt over vier hoofd elementen:

- The service name: this should help people understand what your service does and whether they need to use it - [learn more about naming your service](https://www.gov.uk/service-manual/design/naming-your-service).
- A short introduction to list things that most users will need to know, for example, what your service will let them do or how much it’ll cost.
- The ‘Start now’ call-to-action button.
- A list of other ways to access your service.

## Laat op voorhand weten wanneer een tijdslimiet van toepassing is {#tijdslimiet}

Als een tijdslimiet strikt noodzakelijk is, informeer de gebruiker hier dan over voordat zij het formulier in gaat vullen.

Als de tijdslimiet dreigt overschreden te worden, informeer de gebruiker dan ook tijdens het invullen van een formulier.

Biedt waar mogelijk een gebruiker de mogelijkheid een tijdslimiet eenvoudig te verlengen.

## Meerstappen formulieren {#wanneer-meerstappen}

Als het om een beperkt aantal onderwerpen gaat onderverdeeld in een klein aantal secties dan kunnen deze op een enkele pagina getoond worden.

Overweeg het formulier in meerdere stappen of pagina's op te breken als deze heel lang is, veel informatie bevat of lastig is te interpreteren door gebruikers.

Zorg er echter voor dat deze stappen in betekenisvolle groepen zijn verdeeld.

Als het lastig blijkt het formulier te interpreteren als niet alle vragen op een enkel scherm voorhanden zijn, splits deze dan niet op in meerdere stappen.

Gov.uk experimenteerd met het ‘[Task list pages](https://design-system.service.gov.uk/patterns/task-list-pages/)’ patroon waarbij formulieren in kleinere, overzichtelijkere stappen opgebroken in een pagina getoont worden. Dit patroon is echter nog niet uitgebreid getest. [^task-list-pages]

![Task list pages patroon van GOV.UK](https://user-images.githubusercontent.com/248921/142017147-4753ae1c-91b9-441c-98ae-a43fa4b89ece.png)

Task list pages patroon van GOV.UK

### Verschillende soorten formulieren

Formulieren met condities zijn lastiger op te breken. Antwoord op een vraag in een stap kan er voor zorgen dat een extra stap nodig is. Hierdoor kan de navigatie wijzigen en een gebruiker in de war raken. Daarom maken we onderscheid in 3 soorten formulieren:

1. Korte, bondige formulieren. Deze kunnen op 1 pagina getoond worden. Een kort formulier is bijvoorbeeld een formulier met slechts 1 groep of maximaal 3 groepen vragen.
1. Lange formulieren zonder condities. Deze kunnen over meerdere pagina’s of stappen verspreid worden. Navigatie is voor deze formulieren inzichtelijk, omdat alle afzonderlijke groepen vast staan. Een gebruiker kan ook op voorhand alle vragen doornemen.
1. Lange formulieren mét condities. Ook deze formulieren beslaan meerdere pagina’s of stappen. Omdat het antwoord op een vraag invloed kan hebben op vervolgvragen, en zelfs hele groepen van vragen contextueel wel of niet getoond worden, kan navigatie voor deze formulieren niet altijd vooraf vaststaan. Een gebruiker kan dan niet alle vragen doornemen. Vooruit navigeren is hierdoor vaak niet mogelijk, terug navigeren uiteraard wel.

### Navigatie en oriëntatie

Wanneer een formulier in meerdere stappen wordt opgebroken, is te overwegen deze te voorzien van duidelijke navigatie. Hierdoor weet een gebruiker ten alle tijden waar hij vandaan komt, op dat moment is, en naartoe kan gaan. Navigatie kan tevens dienst doen om het totale aantal stappen, voortgang binnen deze stappen en eventuele validatiefouten te tonen. Het is echter aan te raden om te beginnen zonder navigatie of voortgangsindicatie daar deze vaak niet opgemerkt wordt en tevens lastig vorm te geven is voor dynamische flows met selectieafhankelijke of conditionele vragen. [^using-progress-indicators]

Alhoewel het [W3C design system adviseert geen voortgandsindicatie te gebruiken, bieden zij deze toch als component aan](https://design-system.w3.org/styles/forms.html#progress-indicators).

Bij het gebruik van meerdere pagina’s dient de ingevoerde informatie tussen pagina’s bewaard te blijven en door de gebruiker te wijzigen zijn.

Een gebruiker zou zowel voorwaarts als terug moeten kunnen navigeren.

Wanneer stappen over meerdere pagina’s worden getoond dan dient iedere pagina een unieke beschrijvende titel te hebben.

### Voorbeeld van een stappenmodel

#### Stappenmodel voor desktopversie formulier

![Voorbeeld van het stappenmodel op een desktop scherm](https://i.imgur.com/gNAKpNw.png)

#### Stappenmodel voor tabletversie formulier

![Voorbeeld van het stappenmodel op een tablet scherm](https://i.imgur.com/5NOTWDu.png)

#### Stappenmodel voor mobiele versie formulier

![Voorbeeld van het stappenmodel op een mobiel scherm](https://i.imgur.com/c7Nvcz7.png)

Bij de stappen zou altijd beschrijvende tekst getoont moeten worden. Voor weergave op kleine schermen kun je volstaan met nummers in de navigatie items met daaronder de verklarende tekst.

### Bewerken en tussentijds opslaan

Het moet mogelijk zijn om stappen terug te gaan en antwoorden te bewerken. [^let-users-save-progress] Het tussentijds opslaan van antwoorden is hierbij van belang, al is dit niet altijd wenselijk (bijvoorbeeld als om een machtiging gevraagd wordt). In deze gevallen is het wellicht een optie om deze vragen op 1 pagina te tonen.

## Referenties

[^question-relevance]:
    [GOV.UK Design System - Patterns: Ask users for
    Addresses](https://design-system.service.gov.uk/patterns/addresses/)

[^using-progress-indicators]: [GOV.UK Design System - Patterns: Question pages - Using progress indicators](https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators)
[^let-users-save-progress]: [Form design: from zero to hero all in one blog post - Flow and order](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/#flow-and-order)
[^task-list-pages]: [GOV.UK Design System - Patterns: Task list pages](https://design-system.service.gov.uk/patterns/task-list-pages/)
[^spectrum-optional-required]: [Adobe Spectrum: Field label - Mark the minority of inputs in a form as required or optional](https://spectrum.adobe.com/page/field-label/#Mark-the-minority-of-inputs-in-a-form-as-required-or-optional)
