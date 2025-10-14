<!-- @license CC0-1.0 -->

Een icon is decoratief als er een beschrijvende tekst boven, naast of onder staat. Een icon is ook decoratief als het onderdeel is van een interactief component met een eigen toegankelijke naam, zoals een `button` of een `link`.

Het is daarom niet nodig dat gebruikers die hulpsoftware gebruiken, zoals een [screenreader](/woordenlijst/#screenreader), weten dat er een icon aanwezig is. Verberg decoratieve icons, bijvoorbeeld met `aria-hidden="true"` op de component.

Let op: VoiceOver in combinatie met Safari (in de [NL Design System Baseline van juli 2025](https://nldesignsystem.nl/baseline/2025-07/)) negeert Unicode-emoji's met `aria-hidden="true"` wél in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een [bug in WebKit](https://bugs.webkit.org/show_bug.cgi?id=161740). Gebruik daarom liever SVG icons.

NL Design System richtlijnen:

- [Decoratieve afbeeldingen](/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen)
- [Richtlijnen voor iconen](/richtlijnen/stijl/iconen/)
