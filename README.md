# Documentatie NL Design System

Hier kun je informatie vinden over algemene richtlijnen, gebruikersonderzoek, patronen etc.

We zijn nog druk bezig deze informatie aan te vullen en te verbeteren. Heb je nog documentatie of gebruikersonderzoek die we misschien kunnen gebruiken? Laat het ons dan weten.

## Help ons de documentatie te verbeteren

Voor de documentatie gebruiken we [Markdown](https://www.markdownguide.org/basic-syntax/) bestanden die we met in [GitHub](https://github.com/nl-design-system/documentatie) opslaan. Hierdoor hebben we een bestandsformaat dat door vele verschillende producten ondersteund wordt en een plek waar we met versionering en reviews samen kunnen werken.
Om met al deze documentatie een website te maken gebruiken we [Docusaurus](https://docusaurus.io).

Fijn als je hier toevoegingen of verbeteringen aan bij wil dragen. Als je dat in Markdown kan doen is dat voor ons het allerhandigst.
Hieronder een aantal manieren waarop bijdragen voorgesteld kunnen worden.

_Note_: We zijn blij met iedere bijdrage, dat betekent niet dat alle bijdrages 1-op-1 worden overgenomen in het NL Design System. Soms hebben wij een andere visie, of moet de reden waarom de richtlijn wordt voorgesteld nog beter verscherpt of verduidelijkt worden voordat het als richtlijn in NL Design System opgenomen wordt.

### Maak een Gist en stuur hem ons op

In GitHub kun je gemakkelijk een los Markdown bestand maken met [Gist](https://gist.github.com), mits je een GitHub account hebt.
Heb je een document dat je wil bijdragen, stuur ons dan een linkje naar die gist.

### Met een pull request

1. Maak een fork van de [documentatie repository](https://github.com/nl-design-system/documentatie) door rechts bovenin op de `fork` knop te drukken
2. Draai deze fork lokaal zoals hieronder beschreven
3. Voeg documentatie toe, of verbeter bestaande documentatie
4. Commit je verbeteringen en push ze naar je fork <!-- TODO: Commit guidelines-->
5. Maak een pull request naar onze documentatie repository. <!-- TODO: PR guidelines-->

## Lokaal draaien van de website

We gebruiken `npm` om afhankelijkheden te installeren en de website met docusaurus te draaien.
Als je hier hulp bij nodig hebt kun je ons op [Slack](https://praatmee.codefor.nl) vinden of even een e-mail sturen

1. Zorg dat je de repository op je computer hebt staan door de geforkte documentatie repository te clonen.
2. Open de Terminal en zorg dat je in het mapje zit waar de clone is belandt
3. Draai `npm install` om te zorgen dat alle afhankelijkheden die Docusaurus nodig heeft beschikbaar zijn
4. Draai `npm run build` om de CSS te builden (dit hoeft alleen de eerste keer)
5. Draai `npm run start` om Docusaurus te starten.
6. In de terminal staat nu `Docusaurus website is running at http://localhost:3000/` met `Cmd` ingedrukt kun je deze link aanklikken
7. De website opent in je standaard browser

Om documenten aan te passen kun je de folder openen in een code editor naar keuze. Wij gebruiken in het kernteam bijvoorbeeld [VSCode](https://code.visualstudio.com) of de simpelere [Sublime](https://www.sublimetext.com).
Als je alleen markdown will aanpassen kun je ook kiezen om een los bestand aan te passen of aan te maken en een markdown editor te gebruiken zoals [iA Writer](https://ia.net/writer)

Zolang je het script in je terminal hebt draaien zal de website automatisch de opgeslagen documentatie veranderingen laten zien.
Als je de website structuur hebt aangepast dan is het nodig de website eerst te stoppen en dan opnieuw op te starten.

1. Stop het script dat de website lokaal draait met `Cmd+C` in te typen in de terminal waar het script draait.
2. Draai `npm run start` et voilá, de veranderingen worden zichtbaar.
