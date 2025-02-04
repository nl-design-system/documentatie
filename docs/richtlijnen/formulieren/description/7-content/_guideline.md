<!-- @license CC0-1.0 -->

import { VideoPlayer } from "@site/src/components/VideoPlayer";

# Gebruik alleen tekst in descriptions

Het attribuut [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) kan alleen 'platte' tekst, een string, bevatten en geen extra HTML voor opmaak.
Zet dus geen opsommingen, buttons, kopjes en links en in een description. Screenreaders geven deze informatie niet door of slaan het zelfs helemaal over.

In de demo-video kun je zien en horen dat VoiceOver de opsomming uit de description overslaat. NVDA in Firefox doet hetzelfde.

<VideoPlayer videoId="ejiB-JSJzPE" />
