<!-- @license CC0-1.0 -->

import { VideoPlayer } from "@site/src/components/VideoPlayer";

# Gebruik alleen tekst in descriptions

Het HTML-attribuut [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), waarmee je een description toevoegt, mag alleen 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis.

Opgemaakte tekst noemen we ['rich text'](https://github.com/orgs/nl-design-system/discussions/289). Screenreaders geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.

**Let op**: het NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van **essentiële informatie**. Zie de discussie over [Toggletip](https://github.com/orgs/nl-design-system/discussions/298) op GitHub.

## Demo video

In de demo-video kun je zien en/of horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.

<VideoPlayer videoId="ejiB-JSJzPE" />

## Description-beslisboom

Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?
Volg de beslisboom.

### Vraag 1: Gaat de informatie over alle formuliervelden?

- **Ja**: Plaats de informatie vlak boven het formulier en onder het bijbehorende kopje. Je kunt hierbij rich text gebruiken.
- **Nee**: Ga naar vraag 2.

### Vraag 2: Gaat de informatie over een enkel veld of een groep velden, gegroepeerd in een fieldset?

- **Een enkel veld**: Ga naar vraag 3a.
- **Een groep velden**: Ga naar vraag 4a.

### Vraag 3a: Is de informatie bij het formulierveld platte tekst?

- **Ja**: Plaats de informatie in een description.
- **Nee**: Ga naar vraag 3b.

### Vraag 3b: Is het noodzakelijk dat de informatie bij het formulierveld rich text bevat?

- **Ja**: Overweeg een [meerstappenformulier](/richtlijnen/formulieren/meerdere-stappen/), waarbij de informatie vlak boven het formulier en onder het bijbehorende kopje van de betreffende stap staat.
- **Nee**: Herschrijf de tekst van de description, zodat deze alleen platte tekst bevat.

### Vraag 4a: Is de informatie bij de gegroepeerde velden platte tekst?

- **Ja**: Plaats de informatie in een description gekoppelt aan de [`<fieldset>`](/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset).
- **Nee**: Ga naar vraag 4b.

### Vraag 4b: Is het noodzakelijk dat de informatie bij de gegroepeerde velden rich text bevat?

- **Ja**: Overweeg een [meerstappenformulier](/richtlijnen/formulieren/meerdere-stappen/), waarbij de informatie vlak boven het formulier van de betreffende stap staat.
- **Nee**: Herschrijf de tekst van de description, zodat deze toch alleen platte tekst bevat. Dan ben je er zeker van dat àlle gebruikers de informatie kunnen lezen.
