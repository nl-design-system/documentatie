---
title: Transcript · Content · Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Transcript
pagination_label: Transcript
description: Richtlijnen voor transcripten bij video's binnen NL Design System
slug: /richtlijnen/content/video/transcript
keywords:
  - video
  - youtube
  - vimeo
  - transcript
  - transcriptie
  - transcriberen
  - ondertiteling
---

<!-- @license CC0-1.0 -->

import { Canvas } from "@site/src/components/Canvas/Canvas";
import { Guideline } from "@site/src/components/Guideline";
import FooterInfo from "@nl-design-system-unstable/documentation/richtlijnen/\_footer_info.md";

# Transcript bij video

Een transcript bij een video is een uitgeschreven tekst van de informatie in een video. Het bevat:

- Gesproken dialoog.
- Andere belangrijke informatie in audio, zoals omgevingsgeluiden en informatie over wie er aan het woord is.
- Belangrijke visuele informatie in video, zoals de acties van mensen en teksten die in beeld verschijnen.

## Voordelen

Het aanbieden van een transcript bij een video is voor een grote doelgroep een fijne manier om video toegankelijker te maken. Het helpt mensen die slechthorend of doof zijn, maar ook mensen die de video liever lezen dan kijken. Doofblinde mensen kunnen de tekst in het transcript met een brailleregel uitlezen, zo hebben zij toch toegang tot dezelfde informatie.

Omdat een transcript uit tekst bestaat, kunnen zoekmachines de informatie ook lezen. Daarnaast zijn transcripten ook handig voor zoeken binnen de website, vertalen en archiveren.

## Wat plaats je in een transcript van een video?

Benoem in een transcript bij een video met beeld en geluid:

- De gesproken tekst.
- Belangrijke geluiden zoals lachen, een dichtslaande deur of rinkelend glas.
- Informatie over achtergrondmuziek, als dat in de video een verhalende rol heeft.
- Wie er aan het woord is.
- Het volume of de intonatie van de gesproken teksten.
- Bijzondere spraakkenmerken, zoals een accent of dat iemand stottert. Benoem dit daarna alleen nog een keer als het verandert.
- Teksten die in beeld komen, zoals de naam en functie van een spreker. Maar ook titelschermen, hoofdstuknamen en links.
- [Beschrijvingen van belangrijke afbeeldingen](/richtlijnen/content/afbeeldingen) die in beeld komen, zoals het logo van de organisatie.
- Beschrijvingen van belangrijke gebeurtenissen die in beeld komen, bijvoorbeeld informatie over wat mensen aan het doen zijn.
- Gezichtsuitdrukkingen en lichaamstaal, als dat relevant is.

Een transcript moet dezelfde informatie bevatten als de video. Pas daarom de zinnen van de gesproken tekst niet aan, ook niet als de grammatica niet klopt of de spreker diens zin niet afmaakt.

### Ondertiteling en audiodescriptie combineren

Als je al [ondertiteling](/richtlijnen/content/video/ondertiteling) en een script voor [audiodescriptie](/richtlijnen/content/video/audiodescriptie) hebt geschreven, kun je deze teksten combineren en gebruiken als basis van je transcript. Structureer de informatie per scène en controleer of je geen belangrijke informatie hebt gemist.

## De opmaak van een transcript

Het is belangrijk om structuur aan te brengen in tekstbestanden om ze toegankelijker en prettiger leesbaar te maken. Voor een transcript is dat niet anders.

Maak daarom ook in een transcript gebruik van [kopjes, paragrafen, leestekens en interpunctie](/richtlijnen/content/tekstopmaak). Voeg bij een lange video eventueel tijdmarkeringen toe.

- Maak onderscheid tussen beschrijvingen en gesproken tekst. Plaats beschrijvingen tussen ronde haakjes te plaatsen of benoem waar de beschrijving over gaat. Bijvoorbeeld: (de kat krabt de krullen van de trap) of In beeld: De kat krabt de krullen van de trap.
- Als de spreker een woord benadrukt, gebruik dan [tekstopmaak om tekst te benadrukken](<(/richtlijnen/content/tekstopmaak/tekst-benadrukken)>). Gebruik _schuingedrukte tekst_ voor nadruk in uitspraak en **dikgedrukte tekst** om te benadrukken dat een woord heel belangrijk is.
- Plaats de naam van de spreker met daarna een dubbele punt vóór de uitgeschreven gesproken tekst. Bijvoorbeeld: Jeffrey: "Goedemiddag allemaal, welkom bij de Heartbeat van 15 april."

<Guideline appearance="do" title="Breng structuur aan in je transcript en maak onderscheid tussen gesproken dialoog en beschrijvingen">
  <Canvas language="html">
    {() => (
      <>
     <h1>Je verhuizing doorgeven</h1>
     <p>(Logo van de gemeente Luilekkerland verschijnt in beeld, met op de achtergrond een groene heuvel, zonnetje en molen die langzaam draait.)</p>
     <p>(Vrolijk fluitmuziekje, in middeleeuwse stijl.)</p>
     <p>Voice over Pieter Bruegel (opgewekt): "Welkom, goede nieuwe burgers van Luilekkerland! Verhuist gij binnenkort? Dan dient gij dit te <strong>melden</strong> bij de gemeente!"</p>
     <h2>Je verhuizing doorgeven via het internet</h2>
     <p>(Pieter zit in een schilderachtige werkkamer op een bureaustoel achter een statig bureau. Hij klapt een laptop open. Op het scherm: luilekkerland.nl/verhuizen.)</p>
     <p>Pieter Bruegel: "De <em>makkelijkste</em> manier? Gewoon online! Ga naar onze website, klik op ‘Verhuizing doorgeven’ en vul uw gegevens in."</p>
     <p>(Close-up van het invulformulier. Pieter vult zijn postcode en verhuisdatum in. Hij klikt op 'Verzenden' en er klinkt een bevestigingsgeluidje.)</p>
     <p>Pieter Bruegel (lachend): "En hop, uw verhuizing is bekend. U hoeft niet eens uw pantoffels uit te doen!"</p>
     <p>(Pieter leunt tevreden achterover op zijn bureaustoel. De camera zoomt uit, door het raam naar buiten, totdat het huis van Pieter volledig in beeld is. In de tuin van de buurman eet een man van een berg rijstebrij.)</p>
     <p>(Vrolijk fluitmuziekje, in middeleeuwse stijl.)</p>
     <p>Voice over: "Verhuizen? Geef het door via www.luilekkerland.nl/verhuizen"</p>
     <p>(Logo van de gemeente Luilekkerland verschijnt in beeld, met daar onder de link www.luilekkerland.nl/verhuizen.)</p>
     </>
    )}
  </Canvas>
</Guideline>

## Waar plaats je een transcript?

Nu je een transcript van je video hebt gemaakt, is het belangrijk het op een logische plek aan te bieden.

### Een transcript bij een video op je eigen website

Plaats een transcript direct onder je video, als gewone tekst. Als je het transcript niet volledig zichtbaar op je pagina wilt plaatsen, kun je er voor kiezen de tekst in een [accordion](/accordion) te zetten. Op die manier kunnen bezoekers zelf kiezen of ze de tekst willen lezen of overslaan.

Vergeet niet duidelijk te maken dát het om een transcript gaat, bijvoorbeeld door 'Transcript' of 'Uitgeschreven tekst' als [koptekst](/richtlijnen/content/tekstopmaak/koppen) boven je transcript te plaatsen.

### Een transcript bij een video op een andere website

Verwijs je bezoekers naar een andere website om je video te bekijken? Plaats dan het transcript op een logische plek in de buurt van de link naar de video.

Soms is het niet handig om een transcript op de pagina zelf te plaatsen, bijvoorbeeld als je een overzichtspagina hebt met links naar meerdere video's. In dat geval kun je er ook voor kiezen om het transcript op een aparte pagina te plaatsen en in het overzicht een link naar je transcript toe te voegen.

## Hoe te testen

Bepaal voor iedere video:

- Is er een transcript aanwezig?
- Staat het transcript op een logische, goed bereikbare plek? Of wordt er op een logische plek naar het transcript verwezen?
- Komt alle dialoog in het transcript voor en is het duidelijk wie er spreekt?
- Komt alle belangrijke visuele informatie voor in het transcript?
- Komt alle belangrijke informatie uit de audio voor in het transcript?
- Heeft het transcript de juiste opmaak en structuur?

## Meer lezen over gerelateerde WCAG-succescriteria op NL Design System

Op de WCAG succescriteria pagina's op deze website lees je meer over veelgemaakte fouten en hoe je kunt testen of jouw website aan de succescriteria voldoet.

- [Succescriterium 1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)](/wcag/1.2.1)
- [Succescriterium 1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)](/wcag/1.2.3)
- [Succescriterium 1.2.8 Media-alternatief (vooraf opgenomen)](/wcag/1.2.8)

<FooterInfo />
