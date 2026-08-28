<!-- @license CC0-1.0 -->

Zorg ervoor dat interactieve elementen zoals buttons, links en formuliervelden groot genoeg zijn om makkelijk aan te wijzen met een muis, vinger of andere aanwijzer. Een groter aanwijsgebied maakt het makkelijker om een element te selecteren en verkleint de kans dat iemand per ongeluk een ander element activeert.

Het aanwijsgebied (target size) hoeft niet gelijk te zijn aan de zichtbare grootte van een element. Een icoon van 24px kan bijvoorbeeld onderdeel zijn van een groter interactief element. Door rondom het icoon ruimte toe te voegen, kan het aanwijsgebied groter worden zonder dat het icoon zelf groter wordt.

## Gebruik minimaal 48px voor interactieve elementen

Gebruik voor interactieve elementen een minimaal aanwijsgebied van 48px bij 48px. Dit geldt zowel voor de breedte als de hoogte van het aanwijsgebied.

48px is groter dan de minimale afmetingen die WCAG voorschrijft. WCAG 2.2 kent twee succescriteria voor de grootte van het aanwijsgebied:

- [2.5.8 Grootte van het aanwijsgebied (minimum)](/wcag/2.5.8) (niveau AA) schrijft een aanwijsgebied van minimaal 24px bij 24px voor, met voorwaarden voor de ruimte tussen aanwijsgebieden.
- [2.5.5 Grootte van het aanwijsgebied (uitgebreid)](/wcag/2.5.5) (niveau AAA) schrijft een aanwijsgebied van minimaal 44px bij 44px voor.

Deze succescriteria beschrijven een minimum. Voor een prettigere bediening is het aan te raden om interactieve elementen groter te maken.

Google adviseert binnen Material Design een aanwijsgebied van minimaal 48dp bij 48dp. [Onderzoek naar het selecteren van aanwijsgebieden](https://youtu.be/nTNwZXVRGdY?si=G_XSNEPZTB5oepGx&t=163) laat zien dat de nauwkeurigheid toeneemt naarmate een doel groter wordt. Bij tweedimensionale aanwijsgebieden bereikt de nauwkeurigheid rond 48dp een plateau. (ResearchGate)

## Het zichtbare element hoeft niet 48px groot te zijn

De minimale grootte gaat over het aanwijsgebied en niet per se over de zichtbare vorm van een component.

Een icoon kan bijvoorbeeld 24px bij 24px zijn, terwijl de button eromheen een aanwijsgebied van 48px bij 48px heeft. Gebruik hiervoor bijvoorbeeld padding of een minimale breedte en hoogte.

Op deze manier kunnen kleine iconen en andere visuele elementen onderdeel zijn van een goed bruikbaar interactief element, zonder dat ze visueel onnodig groot worden.

## Houd rekening met de ruimte tussen elementen

Een groter aanwijsgebied voorkomt niet automatisch dat iemand het verkeerde element activeert. Wanneer interactieve elementen dicht bij elkaar staan, kan het aanwijsgebied van het ene element overlappen met het andere.

Zorg daarom ook voor voldoende ruimte tussen interactieve elementen. Een veelgebruikte richtlijn is om minimaal 8px ruimte tussen aanwijsgebieden te houden.

De richtlijn voor de ruimte tussen interactieve elementen staat verder beschreven in [Reserveer ruimte tussen interactieve elementen](/richtlijnen/stijl/ruimte/interactieve-elementen).

## Gebruik design tokens voor de minimale grootte

Om componenten binnen NL Design System van een minimale grootte voor het aanwijsgebied te voorzien, zijn op het [Common-niveau](/handboek/huisstijl/design-tokens) twee [basis-tokens](/handboek/huisstijl/basis-tokens) beschikbaar:

- `basis.pointer-target.min-block-size`
- `basis.pointer-target.min-inline-size`

In het [Start-thema](/handboek/huisstijl/themas/start-thema) zijn beide tokens ingesteld op `3rem` (48px).

Gebruik deze tokens wanneer je de minimale grootte van het aanwijsgebied instelt. Zo blijft de minimale grootte consistent tussen componenten en thema’s en kan je de waarde centraal aanpassen.

## Meer informatie:

- [2.5.8 Grootte van het aanwijsgebied (minimum)](/wcag/2.5.8) (niveau AA)
- [2.5.5 Grootte van het aanwijsgebied (uitgebreid)](/wcag/2.5.5) (niveau AAA)
- [Designing A11y with Material Design - Youtube](https://youtu.be/nTNwZXVRGdY?si=G_XSNEPZTB5oepGx&t=163)
- [Designing better target sizes – Ahmad Shadeed](https://ishadeed.com/article/target-size/)
- [Target Size and 2.5.5 - Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Accessible tap targets – web.dev](https://web.dev/articles/accessible-tap-targets)
