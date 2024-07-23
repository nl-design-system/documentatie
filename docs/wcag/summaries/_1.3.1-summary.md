<!-- @license CC0-1.0 -->

Alle gebruikers moeten over dezelfde informatie kunnen beschikken.

Info en relaties?

- Info betekent informatie, tekstueel of visueel. Zoals een kopje boven een paragraaf aangeeft waar de inhoud eronder over gaat.
- Relatie betekent gerelateerde of gekoppelde inhoud. Zoals een label of foutmelding in de HTML gekoppeld moet zijn aan het bijbehorende formulierveld.

Zorg ervoor dat informatie en relaties die zichtbaar zijn, ook beschikbaar zijn voor hulpmiddelen, zoals een screenreader. Dan kunnen hulpmiddelen de informatie ook interpreteren en aan gebruikers overbrengen.’

Bijvoorbeeld:

- Als tekst er uitziet als een kopje, moet dit ook in de HTML een kopje (heading) zijn en geen vet gemaakte tekst. Het kopjesniveau wordt voorgelezen door screenreaders.
- Als informatie in een tabel staat, moet de informatie begrijpbaar zijn voor screenreadersgebruikers, door het gebruik van table headings (th’s). De table heading wordt voorgelezen bij de waarde van een bijbehorende table cell.
- In een formulier moeten invoervelden en labels aan elkaar gekoppeld zijn met een [for/id-relatie](https://nldesignsystem.nl/richtlijnen/formulieren/labels#geef-een-formulierveld-toegankelijke-naam-met-een-label). Dan wordt het label voorgelezen als het invoerveld de focus krijgt.
- Staan gegevens in een lijst, gebruik dan ook in de HTML een lijst (ul) en niet alleen streepjes voor de items. Een screenreader leest dan voor dat het een lijst is, hoeveel items er zijn in de lijst en bij welk item de lezer zich op dat moment bevindt.
- Gebruik je een afbeelding om informatie te geven, zorg er dan voor dat de alternatieve tekst van de afbeelding de juiste informatie bevat, of voeg de informatie vlakbij de afbeelding in tekst toe.

Geef via de juiste HTML of alternatieve teksten betekenis aan structuur, relaties, visuele informatie en opmaak, dan begrijpen gebruikers van hulpmiddelen deze informatie ook.
