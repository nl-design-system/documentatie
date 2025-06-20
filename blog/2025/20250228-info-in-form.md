---
title: Hoe voeg je extra informatie en kopjes toe in een formulier
authors:
  - name: Rian Rietveld
    title: Specialist webtoegankelijkheid
    url: https://www.linkedin.com/in/rianrietveld/
  - name: Jefrey Lauwers
    title: Interactie- en visual designer
    url: https://www.linkedin.com/in/jeffreylauwers/
tags: [formulier, kopjes, informatie, legend, tooltip]
hide_table_of_contents: false
date: 2025-02-28
---

Je wilt je bezoek helpen om een formulier zo goed en makkelijk mogelijk in te vullen. Dus geef je extra informatie boven een formulier, bij een formulierveld, je groepeert informatie en voegt kopjes toe voor de overzichtelijkheid en je schrijft duidelijke foutmeldingen. Hoe doe je dit een toegankelijke manier?

<!-- truncate -->

We geven je een overzicht van oplossingen en voorbeelden en vertellen ook wat je wel en ook juist niet moet doen. We gebruiken hierbij de [NL Design System-richtlijnen voor formulieren](/richtlijnen/formulieren) en de [WCAG-succescriteria](https://nldesignsystem.nl/wcag).

In de blogpost [Toegankelijke foutmeldingen in formulieren](/blog/toegankelijke-foutmeldingen-formulieren) staat hoe je moet omgaan met foutmeldingen.

Deze tips zijn voor contentmanagers, (UX-)designer en developers.

## Voor het invullen

Vertel boven het formulier welke gegevens de gebruiker alvast moet verzamelen, afhankelijk van het formulier. Zoals het paspoortnummer of burgerservicenummer. Dit voorkomt stress bij het invullen, zeker als een tijdslimiet op het invullen is gezet.
Vertel bij een [meerstappenformulier](/richtlijnen/formulieren/meerdere-stappen/voortgang-tonen) ook hoeveel stappen er zijn, dan weet een gebruiker wat te verwachten.

**Let op developers en designers**: Informatie boven het formulier moet ook echt boven het `<form>` element staan en onder het kopje wat bij het formulier (of de stap) hoort.
Dit geldt ook de [samenvatting van de foutmeldingen](/richtlijnen/formulieren/foutmeldingen/samenvatting).

## Groepeer informatie

Laat zien welke formuliervelden bij elkaar horen. Dat maakt het begrijpen van het formulier en het invullen gemakkelijker.

Bijvoorbeeld voor 'Uw gegevens' of 'Factuuradres'. Groeperen kan in een `<fieldset>` en de bijbehorende `<legend>` dient als naam voor de groep. Laat de legend dan ook nooit weg.

Bijvoorbeeld:

<fieldset class="site-code-demo">
  <legend>Uw gegevens</legend>
  <label for="naam">Voor- en achternaam</label><br />
  <input id="naam" type="text" /><br />
  <label for="email">E-mailadres</label><br />
  <input id="email" type="text" /><br />
  <label for="tel">Telefoonnummer</label><br />
  <input id="tel" type="text" /><br />
</fieldset>

In de code:

```
<fieldset>
  <legend>Uw gegevens</legend>
  <label for="naam">Voor- en achternaam</label>
  <input id="naam" type="text">
  <label for="email">E-mailadres</label>
  <input id="email" type="text">
  <label for="tel">Telefoonnummer</label>
  <input id="tel" type="text">
</fieldset>
```

Bij de richtlijn [Legends bij een fieldset](/richtlijnen/formulieren/fieldsets/legends) staat een video waarbij een fieldset wordt voorgelezen met een screenreader. Het juiste gebruik van een fieldset en legend maakt het formulier ook voor slechtziende en blinde gebruikers makkelijker te begrijpen.

In de richtlijn [Descriptions bij een fieldset](/richtlijnen/formulieren/fieldsets/descriptions) staat hoe je een description toevoegd aan een fieldset.

De legend kan met CSS weergegeven worden als een kopje, of ook [daadwerkelijk een kopje bevatten](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend#technical_summary).

Beide oplossingen zijn goed:

```
<legend>Uw gegevens</legend>
```

en

```
<legend><h3>Uw gegevens</h3></legend>
```

Gebruik je een kopje, zorg er dan voor dat het niveau past binnen de [koppenstructuur van de pagina](/wcag/1.3.1).

## Schrijf een duidelijke description

Duidelijke informatie in een description bij een invoerveld is essentieel. Vertel duidelijk wat de verwachte invoer moet zijn. Bijvoorbeeld de eisen voor een nieuw wachtwoord of wat een BSN-nummer is en waar je dat kunt vinden.

Omdat descriptions zo belangrijk zijn, valt er ook veel over te vertellen. Bij onze richtlijnen voor [descriptions](/richtlijnen/formulieren/descriptions/) staat waar deze aan moeten voldoen voor de beste gebruikerservaring en hoe je voor descriptions aan WCAG kunt voldoen.

Zoals:

- Hoe [koppel je een description](/richtlijnen/formulieren/descriptions/koppelen) in code aan het bijbehorende formulierveld?
- Hoe lang kan de [tekst van een description](/richtlijnen/formulieren/descriptions/lengte) zijn en wat kun je wel en wat niet [in een description zetten](/richtlijnen/formulieren/descriptions/inhoud)?
- Wat is de beste [plek voor een description](/richtlijnen/formulieren/descriptions/plaatsing)?
- Hoe voeg je [meerdere descriptions](/richtlijnen/formulieren/descriptions/meerdere-koppelen) toe?
- Hoe koppel je een [description aan een fieldset](/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset)?
- Hoe groot moet het [aanklikbare gedeelte](/richtlijnen/formulieren/descriptions/aanklikbaar-gedeelte) zijn voor een formulierveld als je een description gebruikt?

## Verberg geen essentiële informatie achter een icoontje

Heb je heel veel te vertellen bij een formulierveld? Dan is de verleiding groot om de informatie onder een tooltip te verbergen. En dan liefst onder een klein icoontje van een vraagteken. Zo blijft het formulier zelf lekker overzichtelijk. Maar de kans bestaat dat de gebruiker zo essentiële informatie mist.

Bij de richtlijn [Gebruik alleen tekst in descriptions](/richtlijnen/formulieren/descriptions/inhoud) staat een 'Description-beslisboom' waarmee je kunt bepalen hoe je omgaat met veel informatie bij een formulierveld, of met opgemaakte tekst in een description.

## Na het versturen

Vertel de gebruiker dat een formulier succesvol verstuurd is en afhankelijk van het formulier wat de vervolgstappen zijn en hoe ze bij vragen contact kan opnemen.
Lees hierover de richtlijnen over de [bevestigingspagina](l/richtlijnen/formulieren/bevestigingspagina/).

## Conclusie

Goede communicatie met de invuller van je formulier is belangrijk, help de gebruiker zo goed mogelijk.
Hoe je dit doet, is een samenspel van de contentmanager, de (UX-)designer, developer en de gebruikers. Doe geen aannames, maar [gerbuikersonderzoek](https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken). Want dan pas weet je of je formulier optimaal voor iedereen werkt.
