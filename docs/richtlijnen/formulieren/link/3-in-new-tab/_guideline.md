<!-- @license CC0-1.0 -->

# Geef aan als een link in een nieuwe tab opent

Het is onhandig als je de ingevulde informatie van een formulier kwijt raakt als je een link opent. In formulieren is het daarom handiger dat links niet openen in hetzelfde browser-venster.

In de HTML kan dit met het attribuut `target="_blank"` in de link.

Een link openen in een nieuwe tab is geen standaard browser gedrag. Maak duidelijk hoe deze speciale links in formulieren werken, zodat de gebruiker bijvoorbeeld weet waarom de terugknop het niet doet. Voor gebruikers van [screenreaders](/woordenlijst/#screenreader) is dit extra belangrijk.

Daarnaast: alle gebruikers moeten dezelfde informatie krijgen, dus er moet ook een visuele indicatie zijn dat de link in een nieuwe tab opent.

Het aangeven kan op verschillende manieren: via een icoontje, via tekst en via een aria-label. Zo kun je voor ziende gebruikers een icoontje gebruiken en voor screenreadergebruikers visueel verborgen tekst.

Zorg dat de informatie over het openen van een nieuwe tab in de linktekst zelf is opgenomen. Dan wordt deze voorgelezen zodra de link focus krijgt. Als de tekst buiten (achter) de link staat bestaat de kans dat een screenreadergebruiker deze info mist.

Hiermee volg je de [WCAG-richtlijn 3.2 Voorspelbaar](https://www.w3.org/Translations/WCAG22-nl/#predictable): maak het uiterlijk en de bediening van webpagina's voorspelbaar.

## Technieken voor een link openen in een nieuwe tab of venster

Alle informatie als zichtbare tekst in de linktekst plaatsen heeft de voorkeur, vanwege de eenvoud en eenduidigheid. Niet iedereen snapt alle icoontjes.
