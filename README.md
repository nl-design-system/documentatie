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

We gebruiken `pnpm` om afhankelijkheden te installeren en de website met Docusaurus te draaien. Zorg dat je dat eerst installeert, dat kan bijvoorbeeld met `npm`.
Als je hier hulp bij nodig hebt kun je ons op [Slack](https://praatmee.codefor.nl) vinden of even een e-mail sturen

1. Zorg dat je de repository op je computer hebt staan door de geforkte documentatie repository te clonen.
2. Open de Terminal en zorg dat je in het mapje zit waar de clone is belandt
3. Draai `pnpm install` om te zorgen dat alle afhankelijkheden die Docusaurus nodig heeft beschikbaar zijn
4. Draai `pnpm run build` om de CSS te builden (dit hoeft alleen de eerste keer)
5. Draai `pnpm run start` om Docusaurus te starten.
6. In de terminal staat nu `Docusaurus website is running at http://localhost:3000/` met `Cmd` ingedrukt kun je deze link aanklikken
7. De website opent in je standaard browser

Om documenten aan te passen kun je de folder openen in een code editor naar keuze. Wij gebruiken in het kernteam bijvoorbeeld [VSCode](https://code.visualstudio.com) of de simpelere [Sublime](https://www.sublimetext.com).
Als je alleen markdown will aanpassen kun je ook kiezen om een los bestand aan te passen of aan te maken en een markdown editor te gebruiken zoals [iA Writer](https://ia.net/writer)

Zolang je het script in je terminal hebt draaien zal de website automatisch de opgeslagen documentatie veranderingen laten zien.
Als je de website structuur hebt aangepast dan is het nodig de website eerst te stoppen en dan opnieuw op te starten.

1. Stop het script dat de website lokaal draait met `Cmd+C` in te typen in de terminal waar het script draait.
2. Draai `pnpm run start` et voilá, de veranderingen worden zichtbaar.

## Lokaal de build draaien met de Apache HTTP server

Apache HTTP server wordt momenteel gebruikt voor hosting van nldesignsystem.nl. Als je [Docker](https://docs.docker.com/desktop/) en [`docker-compose`](https://docs.docker.com/compose/install/) geïnstalleerd hebt, dan kun je de website starten met Apache, zodat je lokale testomgeving nauwkeuriger lijkt op productie.

Het belangrijkste voordeel is dat je HTTP redirects kunt testen die in `static/.htaccess` zijn ingesteld.

1. Zorg dat je een build hebt gemaakt: `pnpm run build`
2. `docker-compose up`
3. ga naar `http://localhost:8080/`
4. Je kunt nu `static/.htaccess` aanpassen, en gelijk de resultaten testen.

## End-to-end tests

1. Start de website, in de development of de productie versie.
   - Productie: `pnpm run build` na elke wijziging en `pnpm run serve`
   - Development: `pnpm run build` eenmalig, daarna `pnpm run start`
2. Draai `pnpm run test-e2e`
3. Bekijk de resultaten met `pnpm run serve:test-report`

## Visual regression tests

Gebaseerd op de blog post van Docusaurus [Upgrading frontend dependencies with confidence](https://docusaurus.io/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing) gebruiken we Playwright met Argos CI voor visuele regressie-tests van de website nldesignsystem.nl.

Voeg het label `visual regression test` toe aan je pull request om Argos CI aan het werk te zetten. We hebben 5,000 screenshots per maand, verspil geen screenshots als je pull request nog niet klaar is.

[![Covered by Argos Visual Testing](https://argos-ci.com/badge-large.svg)](https://app.argos-ci.com/nl-design-system-ci/nldesignsystem.nl/reference)

## Documentatie toevoegen

We schrijven documentatie waar mogelijk in herbruikbare Markdown-bestanden (`.md`). Voor pagina's waar we meerdere Markdown-bestanden samenvoegen of afwisselend tekst en HTML nodig hebben, gebruiken we MDX. [MDX](https://mdxjs.com) is een combinatie tussen JavaScript met React-componenten en Markdown. Een heel beperkt aantal pagina's maken we met TypeScript en React, als ze complex zijn en niet herbruikbaar hoeven te zijn.

De documentatie kun je vinden in deze drie mappen:

- `docs/`: deze informatie is publiek beschikbaar in een npm package. Je die naam van deze npm-package gebruiken om te importeren, vanuit `@nl-design-system-unstable/documentation`. Als je een `.md` of `.mdx` bestand maakt, dan wordt die automatisch opgenomen in de website, tenzij je de filename begint met een underscore. Dat noemen we intern "Markdown partials": `_my-markdown-partial.md`.
- `blog/`: deze directory bevat alle blog posts. Deze Markdown files worden automatisch herkend door een Docusaurus plugin. Je vindt documentatie bij: [plugin-content-blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).
- `src/pages/`: hier staan bijzondere pagina's, zoals de homepage en de [contrast ratio checker](http://nldesignsystem.nl/contrast/).

### Documentatie-pagina toevoegen

Als je een nieuwe pagina wilt toevoegen dan kun je een Markdown of MDX-bestand aanmaken in `docs/`. In principe is de URL-structuur van de website hetzelfde als de URL-structuur. Bijvoorbeeld, een pagina op `https://nldesignsystem.nl/wcag/` staat in `docs/wcag/`.

Je kunt de automatische URL aanpassen naar een zelf gekozen URL, via de Markdown frontmatter. Bijvoorbeeld, met de volgende code komt `docs/components/button/index.mdx` terecht op `https://nldesignsystem.nl/button`:

```mdx
---
title: Button
slug: /button
---

# Button
```

### Documentatie hergebruiken

Je kunt Markdown partials uit `docs/` importeren zoals hieronder:

```mdx
import MyMarkdownPartial from "@nl-design-system-unstable/documentation/wcag/_my-markdown-partial.md";

# Documentatie pagina

...tekst over een specifiek onderwerp...

<MyMarkdownPartial />
```

### Blog posts toevoegen

Je moet de juiste metadata toevoegen bij een blog post, om het goed te laten werken. Een nieuwe blogpost maken kun je waarschijnlijk het makkelijst doen door een kopie te maken van de nieuwste blog post, en die aan te passen.

### HTML gebruiken in Markdown

Als je in MDX-bestanden HTML combineert met tekst, dan combineer je Markdown met HTML, en dat leidt regelmatig tot ongewenste situaties. Bijvoorbeeld: Markdown tekst die op een eigen regel staat, wordt in een `<p>...</p>` element gezet. Dat leidt tot ongewenste HTML:

<!-- use `text` to avoid Prettier formatting -->

```text
...meld daarom aan voor de nieuwsbrief!

<Button>
   My button text
</Button>
```

Bovenstaande code heeft ongewenste HTML als resultaat:

```html
<p>...meld daarom aan voor de nieuwsbrief!</p>

<button class="example-button">
  <p>My button text</p>
</button>
```

Je kunt de ongewenste HTML op meerdere manieren voorkomen. Optie 1: gebruik JSX voor tekst:

```mdx
<Button>{"My button text"}</Button>
```

Optie 2: markeer het hele blok als JSX:

```mdx
{<Button>My button text</Button>}
```
