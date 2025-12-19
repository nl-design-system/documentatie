<!-- @license CC0-1.0 -->

Zorg ervoor dat een element dat de toetsenbordfocus heeft volledig zichtbaar is en niet bedekt is door andere inhoud.

Dit is belangrijk voor gebruikers van alleen een toetsenbord of van spraakbesturing.

Hou er rekening mee dat `overflow: auto` en `overflow: hidden` er voor kunnen zorgen dat de focusindicator niet volledig zichtbaar meer is. Maak bijvoorbeeld gebruik van een negatieve `outline-offset` met de dikte van de focusindicator of `padding` met de dikte van de focusindicator om dit te voorkomen.
