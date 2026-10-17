<!-- @license CC0-1.0 -->

# Gebruik geen positieve tabindex

Een [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) met een waarde groter dan nul, bijvoorbeeld `tabindex="1"`, zet een element vooraan in de tabvolgorde. Het komt dan vóór alle elementen zonder tabindex, en de tabvolgorde loopt niet meer gelijk met de leesvolgorde.

Het eerste formulierveld automatisch de focus geven is een veelgebruikte constructie. Dat doe je met `autofocus`: het veld krijgt dan focus zodra de pagina laadt. De gebruiker is meteen klaar om het formulier in te gaan vullen.

Maar dit levert problemen op voor gebruikers van [screenreaders](/woordenlijst/#screenreader) en toetsenborden. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.

Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.

Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.

Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.

Adam Silver geeft hier uitgebreid uitleg over in [The problem with automatically focusing the first input and what to do instead](https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/).

Let wel: `tabindex="0"` en `tabindex="-1"` zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in [0 and -1 Values](https://webaim.org/techniques/keyboard/tabindex#zero-negative-one) van WebAIM.

Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: [How To Avoid Breaking Web Pages For Keyboard Users](https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/) van Andrew Nevins.
