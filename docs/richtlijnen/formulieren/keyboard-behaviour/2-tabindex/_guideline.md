<!-- @license CC0-1.0 -->

# Gebruik geen positieve tabindex

Het eerste formulierveld automatisch de focus te geven is een veelgebruikte constructie. Dit kan door het eerste veld een [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) te geven met een waarde groter dan nul, bijvoorbeeld `tabindex="1"` of met gebruik van `autofocus`. De gebruiker is meteen klaar om het formulier in te gaan vullen.

Maar dit levert voor toetsenbord- en screenreadergebruikers problemen op. Stel je voor dat je het formulier helemaal niet wilt invullen, maar naar het menu wilt, of de tekst boven het formulier wilt lezen. Dan zul je terug naar boven moeten navigeren.

Een screenreadergebruiker kan zo tekst missen die boven het formulier staat. Misschien staan daar wel instructies of aanvullende informatie over hoe het formulier goed in te vullen.

Gebruik dus ook nooit meerdere positieve tabindexen om de gebruiker te dwingen een bepaalde tabvolgorde aan te houden.

Laat de bezoeker zelf beslissen wat ze wil lezen en in welke volgorde. Kaap de toetsenbordfocus niet maar hou de natuurlijke tabvolgorde intact.

Adam Silver geeft hier uitgebreid uitleg over in [The problem with automatically focusing the first input and what to do instead](https://adamsilver.io/blog/the-problem-with-automatically-focusing-the-first-input-and-what-to-do-instead/).

Let wel: `tabindex="0"` en `tabindex="-1"` zijn wel toegestaan om bepaalde elementen focus te kunnen geven die van nature geen focus krijgen. Dit verstoort de natuurlijke tabvolgorde niet. Wanneer welke waarde te gebruiken wordt uitgelegd in [0 and -1 Values](https://webaim.org/techniques/keyboard/tabindex#zero-negative-one) van WebAIM.

Een goede uitleg over de impact van tabindex op toegankelijkheidstaat staat in: [How To Avoid Breaking Web Pages For Keyboard Users](https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/) van Andrew Nevins.

Geen positieve tabindex of autofocus gebruiken is nodig om te voldoen aan de volgende WCAG-succescriteria:

- [2.4.3 Focusvolgorde](/wcag/2.4.3) (niveau A).
- [3.2.3 Consistente navigatie](/wcag/3.2.3) (niveau AA).
