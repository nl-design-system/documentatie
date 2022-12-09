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

Kleuren zijn een belangrijk onderdeel van het visueel ontwerp. Niet iedereen kan kleuren zien, dus kleuren hebben een ondersteundende en geen essentiële rol. Sommige combinaties van kleuren maken je ontwerp niet toegankelijk, daarom is het handig éénmalig goed de kleuren te kiezen en een overzicht te maken van welke kleurcombinaties gebruikt kunnen worden.

## Verschillen in waarneming

**Sommige gebruikers zien bijna niets tot niets.** Daarom is het belangrijk dat informatie in eerste instantie duidelijk wordt door de tekst, of door de informatie via HTML en ARIA aan hulpmiddelen door te geven ([WCAG 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color)). Gebruik pas in tweede instantie kleur.

**Sommige gebruikers zien geen kleuren, alleen lichte en donkere tinten.** Als je een intense kleur wilt gebruiken om de aandacht te trekken, dan werkt dat niet voor iedereen. Begin eerst met een alternatief zoals een dikkere border, grotere afmeting, vette tekst, een omgekeerd kleurenpalet (licht op donker, in plaats donker op licht). Kies pas in tweede instantie voor een fellere kleur.

**Sommige gebruikers zien geen verschil tussen een aantal kleuren.** Wanneer je twee kleuren naast elkaar gebruikt om verschil duidelijk te maken, kies dan kleuren die ook verschillend zijn voor gebruikers met verschillende soorten kleurenblindheid. Dit is essentiëel voor bijvoorbeeld datavisualisatie met een grafiek of landkaart.

Soms veranderen kleuren om de status van de component duidelijk te maken (bijvoorbeeld `disabled` of `invalid`): verander dan niet alleen de kleur, maar kies ook bijvoorbeeld een donkerdere of lichtere kleur, of maak de lijnen en tekst dikker.

**Sommige gebruikers zien dingen niet als tussen twee tinten te weinig contrast is.** Je moet in veel situaties op contrast letten, misschien vaker dan je denkt! Contrast tussen de kleur van tekst of iconen en de achtergrondkleur is belangrijk. Ook is contrast tussen _borders_ en _separators_ en de achtergrond belangrijk: als de _border_ niet zichtbaar is, dan is soms de hele component niet zichtbaar. [WCAG 1.4.11](https://www.w3.org/TR/WCAG21/#visual-presentation) zegt dat je daar een 3:1 contrast of beter moet gebruiken. Met kleur duidelijk maken dat een element focus heeft werkt alleen goed wanneer er voldoende contrast is tussen de twee kleurvarianten.

Er bestaan diverse hulpmiddelen om kleurverschillen te meten, zodat je de combinaties kan testen op voldoende contrast. Bijvoorbeeld [contrast-ratio.com](https://contrast-ratio.com) van Lea Verou.

**Sommige gebruikers hebben last van maximaal contrast.** Tekst in het donkerste zwart, op een fel witte achtergrond (contrast van 21:1), kan problemen geven voor sommige gebruikers. Bijvoorbeeld doordat het beeld flikkert wanneer je scrollt, of omdat het is vermoeiend om langdurig teksten te lezen met groot contrast. Overweeg het contrast te beperken tot bijvoorbeeld 17:1. Kies als tekstkleur bijvoorbeeld niet zwart, maar donkergrijs. Voor grote letters van bijvoorbeeld koppen (groter dan 18px) kun je zelfs kiezen voor nog minder contrast. ([WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum))

**Sommige gebruikers hebben last van heldere kleuren en hoog contrast.** Als je erg gevoelig bent voor licht, dan kun je software gebruiken om alle kleuren op het scherm donkerder te maken en de kleuren minder verzadigd weer te geven. Dat kan bijvoorbeeld met [Windows high contrast mode](https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696).

**Sommige gebruikers gebruiken software om alle kleuren aan te passen.** _Windows high contrast mode_ is een veelgebruikte manier om een eigen kleurenpalet te kiezen voor alle programma's, waaronder voor websites. Je website zelf testen in _high contrast mode_ kan helpen problemen te herkennen voordat deze gebruikers er last van hebben.

**Sommige gebruikers vertrouwen meer op kleur dan op tekst.** Als je op reis een website bezoekt in een taal die je niet kunt lezen, of als je laaggeletterd bent, dan kunnen kleuren essentiëel zijn de betekenis te begrijpen. Rood is fout, groen is goed, amber is een waarschuwing. Schrik deze gebruikers niet onnodig af door rood te gebruiken voor acties die ongevaarlijk zijn om aan te klikken.

## Consistente signaalkleuren

Als je kleuren gebruikt voor een bepaalde betekenis, dan is het belangrijk dat die kleur consistent hoort bij die betekenis. Bijvoorbeeld: rood wordt gebruikt om risico aan te geven, of een blokkade door een foutmelding. Gebruik dan niet rood wanneer je juist wél ergens op moet klikken, zoals een link of een verzend-knop.

Het kan zijn dat in je huisstijl de "stoplichtkleuren" rood, amber of groen een belangrijke rol hebben. Gebruik dan rood en groen niet als primaire kleur voor de _button_ en _link_ componenten, dit kan verwarrend zijn.

Het is handig om het kleurenpalet volledig uit te werken, zodat voor nieuwe ontwerpen niet ad-hoc kleuren gekozen worden. Zo voorkom je inconsistent kleurgebruik.

## Kleuren van de huisstijl

### Voldoende contrast

## Links

- [The Guide To Windows High Contrast Mode - Smashing Magazine](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)
- [WCAG 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color)
- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
