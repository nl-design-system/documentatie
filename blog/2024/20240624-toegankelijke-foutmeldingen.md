---
title: Toegankelijke foutmeldingen in formulieren
slug: toegankelijke-foutmeldingen-formulieren
authors: Rian Rietveld
image: https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog_toegankelijker-foutmeldingen.png
tags: [formulieren, toegankelijkheid, richtlijnen, NL Design System]
hide_table_of_contents: false
date: 2024-06-24
---

Hoe geef je een gebruiker nuttige informatie over wat er niet goed gaat bij het invullen van een formulier? Wanneer je zorg besteedt aan het voorkomen en aangeven van fouten, is de kans dat een gebruiker het formulier verzendt veel groter.

In dit artikel ga ik stap voor stap in op het voorkomen, aanduiden en het geven van hulp bij foutmeldingen in een formulier voor verschillende soorten gebruikers.

<!-- truncate -->

Stel jezelf de volgende vragen:

- Wat wil ik echt weten?
- Hoe ga ik deze informatie uitvragen?
- Welke informatie kan ik vooraf geven om de gebruiker te helpen?
- Hoe geef ik aan welke velden verplicht zijn?
- Wanneer controleer ik op fouten?
- Hoe geef ik aan of een vraag niet of niet goed is ingevuld?
- Wat zijn goede teksten voor foutmeldingen?
- Hoe geef ik aan of een formulier succesvol is verzonden?
- Hoe bied ik hulp als een gebruiker er niet uitkomt?

We geven per stap referenties naar de verschillende [richtlijnen voor formulieren](/richtlijnen/formulieren/) van het NL Design System die dieper ingaan op de verschillende onderwerpen.

Bij deze richtlijnen staat ook uitgelegd hoe het technisch werkt om foutmeldingen ook goed aan te geven voor hulpmiddelen zoals een [screenreader](/woordenlijst/#screenreader).

Niemand vult een formulier graag in en alle hulp is nuttig, hou dat doel voor ogen. Jij wilt wat weten van je gebruiker of je gebruiker wil jou wat vertellen. Maak dit proces zo makkelijk mogelijk.

## Wat wil ik echt weten?

Een goede foutafhandeling begint eigenlijk al bij de vragen die je wilt stellen. Sommige vragen zijn lastig te beantwoorden. Is het echt belangrijk of je weet of iemand man of vrouw is? Wil je alleen contact opnemen via de telefoon? Misschien wil de gebruiker wat anders invullen, kan geen keuze maken en stopt met invullen.

Vraag alleen uit wat je echt nodig hebt om de gegevens goed te verwerken. Hoe minder je vraagt, hoe lager de drempel is om een formulier in te vullen.

Leg ook goed uit waarom je privacygevoelige persoonlijke informatie nodig hebt, bijvoorbeeld een burgerservicenummer of medische gegevens.

Lees hierover de richtlijnen over [Uit te vragen informatie in een formulier](/richtlijnen/formulieren/vragen) en de blogpost [Ik wil je wat vragen maar heb geen WhatsApp](https://nldesignsystem.nl/blog/meerdere-manieren-contact/).

## Hoe ga ik deze informatie uitvragen?

Kies je voor een uniek ontwerp voor je formuliervelden of ga je voor bekende herkenbare patronen? Probeer niet het wiel opnieuw uit te vinden voor zoiets essentieels als formuliervelden.

Bijvoorbeeld: gebruikers herkennen radiobuttons als rondjes en checkboxes als vierkantjes, hou je aan deze conventie want radiobuttons en checkboxen werken verschillend met toetsenbordbediening.

Heydon Pickering zegt hierover in zijn presentatie [<span lang="en">Get Your Priorities Straight</span>](https://www.youtube.com/watch?v=ediHVy0869c): _Real people aren't looking to be delighted. People want to get the task done and get on with their lives_. In het Nederlands: 'Echte mensen willen niet blij gemaakt worden. Mensen willen de taak voltooien en doorgaan met hun leven'.

Ga altijd uit van je gebruiker, doe gebruikersonderzoek in plaats van aannames te doen. Mensen vullen een formulier niet in voor hun plezier, bekende patronen zijn voor formulieren altijd het beste.

Sommige formuliervelden kun je beter niet gebruiken omdat ze lastig te bedienen zijn, zoals multiselect. Gebruik je date pickers? Check de gebruikerservaring voor mensen die alleen een toetsenbord of een screenreader gebruiken.

Een simpele oplossing kan voor iedereen fijn zijn, zoals de wijze van datumselectie die de KLM gebruikt voor het invullen van een datum. Simpel, eenduidig en voor iedereen makkelijk te snappen en te bedienen.

![Datum selectie met een tekstveld voor de dag, een select voor de maand en een tekstveld voor het jaar](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/blog_toegankelijker-foutmeldingen-date-picker.png)

Lees hierover de richtlijnen op [Wanneer welk element](/richtlijnen/formulieren/wanneer-welk-form-element).

## Welke informatie kan ik vooraf geven om de gebruiker te helpen?

Je kent het vast wel: je vult een nieuw wachtwoord in, drukt op verzenden en dan pas krijg je te weten wat de eisen zijn. Waarna je boos naar het scherm roept 'vertel me dit dan vooraf'!

De blogpost [<span lang="en">Blind people don't visit my website</span>](https://www.a11y-collective.com/blog/blind-people-dont-visit-my-website/) somt frustraties op van gebruikers van het web. Bijvoorbeeld: 'Error messages that come afterwards and eventually don't explain what you need to change'. In het Nederlands: 'Foutmeldingen die achteraf komen en uiteindelijk niet uitleggen wat je moet veranderen'.

Laat de bezoeker niet raden maar geef zo veel mogelijk hulp, in begrijpelijke taal.

Geef voor het invullen bijvoorbeeld aan welke documenten de gebruiker nodig heeft bij het invullen, leg uit wat al dan niet verplichte velden zijn. Voeg zo nodig een description (beschrijving) toe bij een formulierveld met extra uitleg.

Lees hierover de richtlijnen [Descriptions in een formulier
](/richtlijnen/formulieren/descriptions/) en [Voorkom fouten, help de gebruiker](/richtlijnen/formulieren/voorkom-fouten).

## Hoe geef ik aan welke velden verplicht zijn?

Als je uitgaat van het principe 'ik vraag alleen uit wat ik echt wil weten', dan zouden alle velden verplicht kunnen zijn. Maar dat hoeft natuurlijk niet.

### Hoe geef je dat het beste aan?

Veel sites gebruiken 'verplicht', 'optioneel', 'niet verplicht' of alleen een asterisk (\*). Maar wat is het duidelijkst?

Liever 'niet verplicht' in plaats van 'optioneel'.  
Liever 'verplicht' in plaats van een asterisk.

'Optioneel' is voor laaggeletterde lezers lastig en een asterisk vereist voorkennis van de betekenis.
Gebruik je toch een asterisk, leg dan boven het formulier de betekenis uit.

### Verplichte velden of niet-verplichte velden aanmerken?

Wat heeft de voorkeur: verplichte velden aanmerken of niet-verplichte velden aanmerken? Het hangt ervan af … Welke van de twee je kiest, is afhankelijk van de functionaliteit van het formulier, het CMS of de formulieren-plugin die je gebruikt en van gebruikersonderzoek.

Een keuze kan zijn: zijn de meeste velden verplicht, markeer dan de niet-verplichte velden. En andersom: zijn de meeste velden niet verplicht, markeer dan de verplichte velden.

Wat je ook kiest, wees consequent binnen het formulier en ook binnen alle formulieren van de website en laat de gebruiker altijd boven het formulier weten hoe al dan niet verplichte velden zijn aangemerkt.

Bijvoorbeeld met de tekst 'Vul alles in. Als iets niet verplicht is, staat dat erbij.'

Lees hierover de richtlijn [Vermeld duidelijk of een veld wel of niet verplicht is
](/richtlijnen/formulieren/voorkom-fouten#vermeld-duidelijk-of-een-veld-verplicht-is).

## Wanneer controleer ik op fouten?

Websites controleren op foutmeldingen tijdens het typen van een antwoord, na het verlaten van een formulierveld of na het verzenden van het formulier. Wanneer controleer je zo gebruikersvriendelijk mogelijk?

Al tijdens het typen controleren kan heel verwarrend zijn. Je bent een e-mailadres aan het typen en al bij de eerste letter verschijnt de fout 'ongeldig e-mailadres'. Ja, natuurlijk, ik was nog niet klaar met typen!

De richtlijn [Gebruik geen HTML-formuliervalidatie](/richtlijnen/formulieren/foutmeldingen#gebruik-geen-html-formuliervalidatie) legt uit dat foutafhandeling door de browser onvoldoende informatie geeft. 'Dit veld is verplicht' is te vaag en wordt ook niet door alle screenreaders goed voorgelezen.

Dan blijven er twee opties over: na het verlaten van het veld of na het verzenden van het formulier. Het een hoeft het ander niet uit te sluiten. Voor sommige velden kan het handig zijn om meteen te checken, zoals een datum die in de toekomst moet zijn. Maar een check na verzenden moet natuurlijk altijd gebeuren.

De volgende richtlijnen leggen uit hoe dit op te zetten:

- [Controleer op het juiste moment op fouten](/richtlijnen/formulieren/foutmeldingen#schrijf-een-duidelijke-foutmelding).
- [Schrijf een duidelijke foutmelding](/richtlijnen/formulieren/foutmeldingen#schrijf-een-duidelijke-foutmelding).
- [Zet een samenvatting van de foutmeldingen boven het formulier](/richtlijnen/formulieren/foutmeldingen#zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier).

## Hoe geef ik aan of een vraag niet of niet goed is ingevuld?

Geef fouten aan met meer dan alleen een kleur. De kans is groot dat een gebruiker, die slechtziend of kleurenblind is, een rood randje om een formulierveld mist.

Het gebruik van kleur is prima en kan voor goedziende gebruikers heel duidelijk zijn, maar voeg altijd ook een duidelijke foutmelding in tekst toe.

De richtlijnen [Vermeld duidelijk of een veld wel of niet verplicht is](/richtlijnen/formulieren/voorkom-fouten#vermeld-duidelijk-of-een-veld-verplicht-is), [Geef fouten weer met meer dan alleen kleur](/richtlijnen/formulieren/visueel-ontwerp/#geef-fouten-weer-met-meer-dan-alleen-kleur) en [Schrijf een foutmelding uit in tekst](/richtlijnen/formulieren/foutmeldingen#schrijf-een-foutmelding-uit-in-tekst) leggen dit uit.

Een [samenvatting van alle fouten boven het formulier](/richtlijnen/formulieren/foutmeldingen/#zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier) geeft de gebruiker een goed overzicht van wat er nog moet worden aangepast.

## Wat zijn goede teksten voor foutmeldingen?

Melden zoals 'Dit veld is verplicht' of 'Ongeldige waarde' bieden de gebruiker te weinig hulp. Schrijf eenduidige foutmeldingen die uitleggen wat er ontbreekt of anders moet.

Bijvoorbeeld: 'Vul je voornaam in' of 'Je gekozen wachtwoord is te kort, kies een wachtwoord van minimaal 8 karakters lang'. Deze informatie biedt veel meer houvast aan gebruikers dan een algemene tekst.

De richtlijn [Schrijf een duidelijke foutmelding](/richtlijnen/formulieren/foutmeldingen#schrijf-een-duidelijke-foutmelding) gaat hier op in.

## Hoe geef ik aan of een formulier succesvol is verzonden?

Je drukt op versturen en er gebeurt niets. Of je gaat naar de voorpagina. Is je vraag nu verzonden of niet?

Geef de gebruiker duidelijkheid en zekerheid dat het formulier daadwerkelijk succesvol is verzonden, welke informatie is verstuurd en wat er hierna gebeurt.

Dit kan daarnaast ook in een bevestigingsmail waarin de ingevulde informatie wordt herhaald of een verwijzing naar de "Mijn Omgeving", waar de informatie is terug te vinden.

Op de pagina [Bevestigingspagina van een formulier](/richtlijnen/formulieren/bevestigingspagina) staan de richtlijnen die uitleggen hoe de gebruiker te informeren dat het formulier verzonden is, wat eventueel de vervolgacties zijn en hoe contact op te nemen bij vragen.

## Hoe bied ik hulp als een gebruiker niet uitkomt?

Als een gebruiker vastloopt of vragen heeft tijdens het invullen van een complex formulier, moet het makkelijk zijn om hulp te vragen.

Zet de contactinformatie dan niet helemaal onderaan het formulier, maar bijvoorbeeld bovenaan in een kort zinnetje. Ook de footer is een geschikte plek om contactinformatie in op te nemen. Zorg altijd voor [verschillende manieren om contact op te nemen](/blog/meerdere-manieren-contact). Niet iedereen kan opbellen.

## Samenvatting

Help je gebruiker zo goed mogelijk om een formulier in te vullen. Stel geen overbodige vragen, bied de juiste keuzes, vertel hoe een veld moet worden ingevuld, zorg voor duidelijke foutmeldingen op het juiste moment en geef aan hoe contact op te nemen als iemand er niet uitkomt.

Hou in gedachten: mensen willen een formulier graag snel invullen en daarna doorgaan met hun leven. Maak die taak dan zo gemakkelijk mogelijk.

## Op de hoogte blijven van het NL Design System?

Ben je benieuwd naar de ontwikkelingen van het NL Design System? [Meld je dan aan voor de maandelijkse nieuwsbrief](https://nldesignsystem.nl/project/blijf-op-de-hoogte/#nieuwsbrief) of [schuif aan tijdens de 2-wekelijkse update (Heartbeat)](https://nldesignsystem.nl/events/heartbeat/aanmelden/). Hierin delen we alle relevante updates.
