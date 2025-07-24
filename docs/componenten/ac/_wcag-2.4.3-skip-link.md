<!-- @license CC0-1.0 -->

De Skip Link naar de hoofdinhoud van de pagina is het eerste interactieve element op de pagina dat toetsenbordfocus krijgt. Overige Skip Links naar andere onderdelen van de pagina, zoals het hoofdmenu, volgen daarna.

De Skip Link verwijst naar de plek op de pagina waar de hoofdinhoud start. Dit is bijvoorbeeld de `main` van de pagina. Omdat dit normaal gesproken geen interactief element is, moet het element focusbaar gemaakt worden. Aangezien het niet de bedoeling is dat de `main` in de normale focusvolgorde van de pagina voorkomt, kun je hiervoor `tabindex="-1"` gebruiken. Geef het vervolgens een `id` attribuut mee, bijvoorbeeld `id="hoofdinhoud"` waar je in de Skip Link in het `href` attribuut naar verwijst. Vergeet niet ook een focusstijl in te stellen voor het element waar je naar verwijst, zodat toetsenbordgebruikers weten waar ze zich op de pagina bevinden.

Let op: Bevat je `main` wél herhalende content? Gebruik dan een ander element ná de herhalende content.

Let op: Heeft je website een cookiemelding die altijd over een deel van de pagina staat, waardoor bezoekers de cookiemelding éérst weg moeten klikken om verder te gaan? Zorg er dan voor dat de cookiemelding nog vóór de Skip Links focus krijgt en weggeklikt kan worden.
