<!-- @license CC0-1.0 -->

Gebruik een lettergrootte ofwel `font-size` die groot genoeg is voor de [`body text`](https://en.wikipedia.org/wiki/Body_text), zodat mensen comfortabel kunnen lezen. Gebruik als richtlijn minimaal een lettergrootte van 16px.

Hoewel we `16px` aangeven als minimale `font-size` is het beter om géén gebruik te maken van ‘fixed-size units’ zoals `px`. Gebruik liever een relatieve waarde als `em` of `rem`.

Waarom? Browsers bieden de mogelijkheid om de standaard `font-size` aan te passen. Handig voor iemand die slechtziend is. Wanneer je relatieve waardes gebruikt schaalt alles netjes mee. Maar een pixel blijft een pixel en zodoende verandert er niks.

Vanuit het NL Design System zelf kiezen we momenteel wél voor pixels. Dit komt omdat wij dezelfde design token waarde willen gebruiken in Figma en in code. Wij willen de CSS nog aanpassen om px automatisch om te zetten naar rem.

## Bronnen

- [<span lang="en">The Surprising Truth About Pixels and Accessibility</span>](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/) van Josh WComeau.
- [<span lang="en">How to Use Rem Units in CSS for Accessible Design</span>](https://www.a11y-collective.com/blog/what-is-rem-in-css/) van Florian Schroiff.
