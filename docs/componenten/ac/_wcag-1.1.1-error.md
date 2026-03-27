<!-- @license CC0-1.0 -->

Zorg ervoor dat de tekst in de Form Field Error Message duidelijk genoeg is om de foutmelding te begrijpen. Het is dan niet nodig om informatieve icons te gebruiken die een alternatieve tekst nodig hebben voor bezoekers die het scherm niet kunnen zien.

Je kunt wel decoratieve icons gebruiken in de Form Field Error Message. Een icon is decoratief als er een beschrijvende tekst boven, naast of onder staat.

Het is daarom niet nodig dat gebruikers die hulpsoftware gebruiken, zoals een [screenreader](/woordenlijst/#screenreader), weten dat er een icon aanwezig is. Verberg decoratieve icons, bijvoorbeeld met `aria-hidden="true"` op de component.

Let op: VoiceOver in combinatie met Safari (in de [NL Design System Baseline van juli 2025](https://nldesignsystem.nl/baseline/2025-07/)) negeert Unicode-emoji's met `aria-hidden="true"` wél in voorleesmodus, maar niet wanneer de bezoeker alleen met de pijltoetsen (virtuele cursor) navigeert. Dit is een [bug in WebKit](https://bugs.webkit.org/show_bug.cgi?id=161740). Gebruik daarom liever SVG icons.

NL Design System richtlijnen:

- [Toegankelijke foutmeldingen bij formuliervelden](/richtlijnen/formulieren/foutmeldingen/)
- [Toegankelijke formulieren](/richtlijnen/formulieren/)
- [Decoratieve afbeeldingen](/richtlijnen/content/afbeeldingen/decoratieve-afbeeldingen)
- [Richtlijnen voor iconen](/richtlijnen/stijl/iconen/)
