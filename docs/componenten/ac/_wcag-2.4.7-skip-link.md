Een Skip Link die standaard verborgen is, moet bij focus zichtbaar worden.

Verberg de Skip Link nooit met `display:none`. Dit haalt de link uit de accessibility tree en is dan niet meer te gebruiken met hulpapparatuur of met het toetsenbord. Maak in plaats daarvan gebruik van CSS en zorg ervoor dat de Skip Link bij focus visueel zichtbaar is, door gebruik te maken van de `:focus` pseudo-klasse. Zie als voorbeeld de opmaak van [het candidate Skip Link component](https://github.com/nl-design-system/candidate/blob/main/packages/components-css/skip-link-css/src/_mixin.scss).

NL Design System richtlijnen:

- [Maak toetsenbordfocus goed zichtbaar](/richtlijnen/formulieren/visueel-ontwerp/focus-goed-zichtbaar/)
- [Let op voorkeursinstellingen voor kleur](/richtlijnen/stijl/kleuren/voorkeuren)
- [Zorg voor voldoende kleurcontrast voor niet-tekstuele content](/richtlijnen/stijl/typografie/voorkeur)
