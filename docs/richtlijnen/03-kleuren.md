---
title: Kleuren
hide_title: true
hide_table_of_contents: false
sidebar_label: Kleuren
pagination_label: Kleuren
description: Tips voor toegankelijke kleuren
keywords:
  - kleuren
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Kleuren

Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het overbrengen van functie en betekenis.

Echter wordt kleur niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende en geen essentiële rol.





## Contrast
**Zorg voor voldoende kleurcontrast.**

Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de zon op je smartphone schijnt.

### Tekst

Voor tekst zou het contrast tussen de voor- en achtergrondkleur 4.5:1 of groter moeten zijn. Bij een lettergrootte van 24px (of 18.5px en bold) of hoger zou het contrast 3:1 of groter moeten zijn.

### Interface elementen
Er zijn ook interface elementen die voldoende contrast moeten hebben. Denk aan iconen, formulierelementen of datavisualisatie. Voor deze elementen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter moeten zijn.

### Kleurenpalet
Het is handig om een kleurenpalet te hebben waaruit je kan opmaken welke kleurcombinaties voldoende contrast opleveren. Er zijn verschillende tools beschikbaar die je hierbij kunnen helpen. Zo zou je [accessiblepalette.com](https://accessiblepalette.com/) kunnen gebruiken. Deze tool berekend het contrast op basis van de WCAG 2.1 en 3 (concept) richtlijnen.

**Tip!** Het hebben van een uitgebreid kleurenpalet is fijn (ook met het oog op dark-mode). Dat betekend niet dat je veel verschillende kleuren hoeft te gebruiken. Dit kan afleiden. Pas de kleuren uit het kleurenpalet toe voor specifieke doeleinden. Het ‘common’ niveau dat we hanteren bij het NL Design System is hier een mooi voorbeeld van.

### Tekst over afbeelding
Als je tekst over een afbeelding wilt gebruiken, plaats dan een effen vlak achter de tekst of een transparant kleurvlak over de gehele afbeelding.

**Tip!** Het W3C is voor [WCAG 3.0](https://www.w3.org/TR/wcag-3.0/#visual-contrast-of-text) aan het kijken naar een algoritme om kleurcontrast  accurater te berekenen. Let wel; voorlopig zal je je aan de huidige contrast richtlijnen moeten houden.





## Gebruik
**Vertrouw niet alleen op kleur.** 

Wanneer je alleen kleur gebruikt om informatie over te brengen kan iemand die kleurenblind is de dit soms niet goed interpreteren. Maak daarom gebruik van tekst, iconen en/of andere visuele elementen om de intentie van de boodschap te versterken.

**Tip!** Onderstreep links in je body text.

**Tip!** Voeg een icoon toe aan een foutmelding en maak de border van een textbox dikker.

**Tip!** Gebruik vormen of patronen als extra onderscheidend element voor datavisualisatie.

**Tip!** Er zijn verschillende vormen van kleurenblindheid.

Je kunt testen hoe jouw ontwerp overkomt op iemand die kleurenblind is. Er zijn verschillende tools beschikbaar die je hierbij kunnen helpen. Zo zou je de [Spectrum plugin voor Google Chrome](https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb) kunnen gebruiken. Deze plugin geeft aan hoe jouw ontwerp per vorm van kleurenblindheid wordt ervaren.





## Betekenis

Als je kleuren gebruikt voor een bepaalde betekenis, dan is het belangrijk dat die kleur consistent hoort bij die betekenis. Bijvoorbeeld: rood wordt gebruikt om risico aan te geven, of een blokkade door een foutmelding. Gebruik rood dan niet wanneer je juist wél ergens op moet klikken, zoals een link of een verzendknop.

**Inzicht vanuit onderzoek**
Uit een onderzoek van Gemeente Utrecht blijkt dat laaggeletterden afschrikken van de kleur rood. Bijvoorbeeld als achtergrondkleur van een knop. De tekst wordt niet gelezen, de laaggeletterde acteert op kleur. Deze kleur wordt daarom niet langer als standaard interactie kleur toegepast.

### Signaalkleuren
Het kan zijn dat in je huisstijl de 'stoplichtkleuren' rood, amber of groen een belangrijke rol hebben. Gebruik dan rood en groen niet als primaire kleur voor de knop en link componenten. Maar gebruik ze als signaalkleur voor bijvoorbeeld een fout- of succesmelding.

### Interactie
Het is verstandig om vanuit je kleurenpalet één kleur aan te houden voor interactie. Een blauwe tint geeft het sterkste signaal voor links, maar andere kleuren werken bijna net zo goed. Gebruik de gekozen kleur voor interactie daarna niet meer voor niet-interactieve elementen.





## Overig


### Verschillen in waarneming

Vergeet niet dat mensen kleur op verschillende manieren kunnen waarnemen en ervaren. Soms zelfs helemaal niet.

Zo zijn er mensen die…

- **iets niet zien als er tussen twee tinten te weinig contrast is.** [Lees meer over contrast](#contrast).
- **geen verschil zien tussen kleuren.** Wanneer je twee kleuren naast elkaar gebruikt om verschil duidelijk te maken, kies dan kleuren die ook verschillend zijn voor mensen die kleurenblindheid zijn. Dit is essentieel voor bijvoorbeeld datavisualisatie met een grafiek of landkaart. En als je kleur gebruikt om de status van de component duidelijk te maken (bijvoorbeeld ‘disabled’ of ‘invalid’). Verander dan niet alleen de kleur maar kies ook voor een donkerdere of lichtere tint, of maak de lijnen en tekst dikker.
- **last ervaren van een te hoog contrast.** Gebruik daarom geen puur zwarte tekst op een puur witte achtergrond. Zo’n sterk contrast (21:1) kan ertoe leiden dat mensen tekst wazig, bewegend of flikkerend ervaren. Dit staat bekend als het [Irlen-syndroom](https://en.m.wikipedia.org/wiki/Irlen_syndrome). Overweeg daarom het contrast te beperken tot bijvoorbeeld 17:1. Kies als tekstkleur bijvoorbeeld niet zwart, maar donker grijs.
- **last ervaren van heldere kleuren en hoog contrast.** Als je erg gevoelig bent voor licht, dan kun je software gebruiken om alle kleuren op het scherm donkerder te maken en de kleuren minder verzadigd weer te geven. Dat kan bijvoorbeeld met [Windows high contrast mode](https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696).
- **meer op kleur dan tekst vertrouwen.** Als je de nederlandse taal niet spreekt of kan lezen, of als je laaggeletterd bent, dan kunnen kleuren essentieel zijn om de betekenis te begrijpen. Rood is fout, groen is goed, amber is een waarschuwing. Schrik deze gebruikers niet onnodig af door rood te gebruiken voor acties die ongevaarlijk zijn om aan te klikken.
- **geen kleuren zien, alleen lichte en donkere tinten.** Als je een intense kleur wilt gebruiken om de aandacht te trekken, dan werkt dat niet voor iedereen. Begin eerst met een alternatief zoals een dikkere border, grotere afmeting, vette tekst, of een omgekeerd kleurenpalet.
- **bijna niets tot niets zien.** Daarom is het belangrijk dat informatie in eerste instantie duidelijk wordt door tekst of door informatie via HTML en ARIA aan hulpmiddelen door te geven.


### Voorkeursinstellingen

Vergeet niet dat men mogelijk voorkeursinstellingen heeft toegepast.

Zo zijn er mensen die…

- **webpagina’s liever in een donker (dark-mode) of juist licht kleurenthema (light-mode) bekijken.** Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem. Door de media query [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is dit te detecteren en kun je deze mensen een donker kleuren thema aanbieden.
webpagina’s liever in met meer of juist minder contrast bekijken. Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem. Door de media query [`prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) is dit te detecteren en kun je deze mensen passend kleurenthema aanbieden. Maar ze zouden ook gebruik kunnen maken van Windows high contrast mode.
- **webpagina’s liever in met meer of juist minder contrast bekijken.** Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem. Door de media querie ‘prefers-contrast’ is dit te detecteren en kun je deze mensen passend kleurenthema aanbieden. Maar ze zouden ook gebruik kunnen maken van [Windows high contrast mode](https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696).





## Meer informatie

### Gerelateerde WCAG Richtlijnen
- https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
- https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html

### Links
- https://colorandcontrast.com/
- https://accessiblepalette.com/
- https://contrast-grid.eightshapes.com/
- https://color.review/
- https://whocanuse.com/
- https://randoma11y.com/
- https://projects.susielu.com/viz-palette
- https://getstark.co/
- [Chrome plugin: Spectrum](https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb)
- [Orange you accessible?](https://www.bounteous.com/insights/2019/03/22/orange-you-accessible-mini-case-study-color-ratio/)
- [Guide windows high contrast mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)



___


## Help deze documentatie te verbeteren

Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via Github.


## Vragen?

Heb je een vraag? Twijfel niet en [neem contact op met het kernteam](https://www.nldesignsystem.nl/meedoen/contact/).

