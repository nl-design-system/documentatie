<!-- @license CC0-1.0 -->

import { VideoPlayer } from "@site/src/components/VideoPlayer";

# Gebruik alleen tekst in descriptions

De inhoud van de description kan alleen zogenaamde 'platte tekst' bevatten. Platte tekst staat voor tekst zonder verdere opmaak en heeft geen extra HTML voor opmaak of betekenis.

Dit komt omdat voor een description het HTML-attribuut [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) wordt gebruikt, dat alleen tekst kan bevatten en geen opmaak.

Zet dus geen opsommingen, buttons, kopjes, tabellen of links in een description. Opgemaakte tekst noemen we ['rich tekst'](https://github.com/orgs/nl-design-system/discussions/289).
Screenreaders geven deze informatie niet goed door of slaan het zelfs helemaal over in een description.

**Let op**: het NL Design System adviseert ook geen tooltip te gebruiken voor het verbergen van **essentiële informatie**. Zie de discussie over [Toggletip](https://github.com/orgs/nl-design-system/discussions/298) op GitHub.

## Demo video

In de demo-video kun je zien en horen dat VoiceOver de opsomming uit de description overslaat als een formulierveld de toetsenbordfocus krijgt. NVDA in Firefox doet hetzelfde.

<VideoPlayer videoId="ejiB-JSJzPE" />

## Description-beslisboom

Wat zijn de opties om informatie en uitleg toe te voegen aan een formulier en de invoervelden?
Volg de beslisboom.

### Vraag 1: Heeft de informatie betrekking op alle formuliervelden?

- **Ja**: plaats de informatie vlak boven het formulier en onder het bijbehorende kopje, hierbij kun je rich tekst gebruiken.
- **Nee**: naar vraag 2.

### Vraag 2: Heeft de informatie betrekking op een groep velden, gegroepeerd in een fieldset?

- **Ja**: bevat de informatie alleen platte tekst?
  - **Ja**: plaats de informatie in een description gekoppelt aan de [`<fieldset>`](https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/plaatsing-bij-fieldset).
  - **Nee**: naar vraag 3.
- **Nee**: naar vraag 3.

### Vraag 3: Is het echt noodzakelijk dat de informatie bij het formulierveld of de gegroepeerde velden 'rich' tekst bevat?

- **Ja**: overweeg een [meerstappenformulier](http://localhost:3000/richtlijnen/formulieren/meerdere-stappen/), waar bij de informatie vlak boven het formulier van de betreffende stap staat.
- Nee: herschrijf de tekst van de description, zodat deze alleen 'platte' tekst bevat.
