# NL Design System gebruiken zonder front-end framework

## Introductie

Met het NL Design System bouw je in een paar stappen een pagina met alleen HTML en wat CSS. In dit voorbeeld bouw je stap voor stap een ontwerp na.

Dit is het ontwerp dat in dit voorbeeld zo goed mogelijk wordt nagebouwd: [Het ontwerp in Figma](https://www.figma.com/design/taAnsV55PVP0cmw18BnMDk/NL-Design-System---Templates---Voorbeeld?node-id=5550-611&t=VX2mUDweS42iaS1D-4)

<div className="utrecht-root" style={{zoom: '50%', width: '100%', height: '1024px'}}>
  <div className="utrecht-body">
    <iframe title="Voorbeeld HTML pagina" style={{width: '100%', height: '1024px'}} src="/examples/zonder-front-end-framework.html"></iframe>
  </div>
</div>
<a href="/examples/zonder-front-end-framework.html" rel="noopener noreferrer">Bovenstaande voorbeeldpagina in volledig scherm bekijken</a>.

## Stappenplan overslaan?

Als je het stappenplan wilt overslaan en voor jezelf iets leuks wilt creëren, kopieer dan [deze voorbeeldpagina](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/main/static/examples/zonder-front-end-framework.html) en maak er je eigen versie van.

## Paginaopzet

De pagina is opgedeeld in de volgende componenten: [Skip Link](/skip-link), [Logo](/logo), [Page Header](/page-header), [Page Footer](/page-footer), [Breadcrumb Navigation](/breadcrumb-navigation), [Heading](/heading), [Paragraph](/paragraph), [Button](/button), [Unordered List](/unordered-list), [Navigation Bar](/navigation-bar) en [Link](/link).

Een aantal van deze componenten is beschikbaar als [candidate component](/componenten/?status=CANDIDATE). Andere componenten kunnen van een community gebruikt worden, of zelf gemaakt worden. In dit voorbeeld wordt gekozen om de pagina zoveel mogelijk op te bouwen met Candidate componenten. Daarnaast is een aantal componenten alleen als Community component beschikbaar. In dat geval kies je degene die het beste bij het design past.

## Zelf de pagina opbouwen

### Stap 1: Basis‑skeleton

Begin met een minimale, semantische opbouw:

```html
<!doctype html>
<html lang="nl" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Graffiti laten verwijderen van uw pand · Gemeente Voorbeeld</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <!-- content komt hier -->
  </body>
</html>
```

**Toelichting**: `lang="nl"` is essentieel voor schermlezers en voor juiste spraak/uitspraak. `dir` is hier `ltr` (left‑to‑right).

### Stap 2: Gebruik een boilerplate als basis voor de pagina

TODO: link naar boilerplate pagina zodra deze is aangemaakt.

### Stap 3: Voeg de content toe aan de pagina

Om het effect van de componenten en hun styling goed te kunnen zien moet je de pagina vullen met content zoals tekst, plaatjes en kopteksten.

Ook is het hier van belang de juiste HTML elementen te gebruiken, dus niet bijvoorbeeld een `div` als knop of navigatie-element.
Om tijd te besparen kun je de content uit [deze file](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/main/static/examples/zonder-front-end-framework-html-only.html) kopiëren.

Je pagina zal er dan als volgt uitzien:

<div className="utrecht-root" style={{zoom: '50%', width: '100%', height: '1024px'}}>
  <div className="utrecht-body">
    <iframe title="Voorbeeld HTML pagina" style={{width: '100%', height: '1024px'}} src="/examples/zonder-front-end-framework-html-only.html"></iframe>
  </div>
</div>

### Stap 4: Importeer NL Design System voorbeeld thema

**info:** In de komende codevoorbeelden zie je veel versienummers gebruikt worden. Het voorbeeld werkt met deze versienummers, maar mocht je die willen updaten dan kun je de nieuwste versie vinden via [npmjs.com](https://www.npmjs.com/).

Zie ook [het voorbeeld thema](handboek/huisstijl/themas/voorbeeld-thema/#voorbeeld-thema).
Voeg de onderstaande class toe aan de body van je HTML pagina:

```html
<body class="voorbeeld-theme"></body>
```

Importeer de CSS van het voorbeeld thema en de design tokens:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@nl-design-system-unstable/voorbeeld-design-tokens@5.1.0/dist/theme.css"
/>
```

### Stap 5: Componenten importeren uit NL Design System

Het is mogelijk om de componenten uit de community met één import statement te importeren, als voorbeeld Amsterdam:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/index.css" />
```

Dit wordt niet aangeraden omdat je dan veel meer code dan nodig importeert. In plaats daarvan kiezen we in de onderstaande stappen ervoor om elk component individueel te importeren. Dat zorgt ervoor dat je alleen de CSS gebruikt die je nodig hebt.

Let goed op de volgorde waarop je de dependencies inlaad. De CSS wordt overschreven door het eerst-volgende CSS bestand. Het kan dus fouten voorkomen wanneer je de @nl-design-system-\* stylesheets als laatste importeert.

#### Logo

Momenteel is er een Logo component beschikbaar in de Amsterdam community, maar die geeft hun eigen logo weer. Het is beter om het Logo te tonen zonder component.
Het logo kan als svg aangeleverd worden. Je kunt er voor kiezen om een eigen logo neer te zetten of die van [het voorbeeld thema](/svg/voorbeeld-thema-logo.svg) te gebruiken.

Het logo kunnen we als volgt toevoegen:

```html
<img src="/svg/voorbeeld-thema-logo.svg" alt="Voorbeeld thema logo" />
```

Wanneer je het logo op je lokale file system hebt opgeslagen in hetzelfde mapje als de html, dan moet je verwijzen naar `./voorbeeld-thema-logo.svg`.

Om een goede alt-text te kiezen voor logo kun je het beste [hier kijken](/blog/toegankelijke-naam-link-logo-header/#optie-2-de-toegankelijke-naam-in-een-aria-label-bij-de-link) voor tips.

#### Page Header en navigatie

De Page Header uit de Amsterdam community lijkt als beste te passen voor het design. In de [Storybook van Amsterdam](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs) kan voorbeeldcode gevonden worden hoe je de header opbouwd met HTML en CSS. Hiervoor moet je "inspect element" van de browser gebruiken, want de voorbeeldcode van storybook maakt gebruik van React.

In dit codevoorbeeld kun je de oplossing vinden:

```html
<header class="ams-page-header">
  <nav aria-labelledby="primary-navigation" class="ams-page-header__navigation">
    <h2 class="ams-visually-hidden" id="primary-navigation">Hoofdnavigatie</h2>
    <img src="/svg/voorbeeld-thema-logo.svg" alt="Voorbeeld thema logo" />
    <ul role="list" class="ams-page-header__menu">
      <li class="ams-page-header__menu-item ams-page-header__menu-item--fixed">
        <a class="nl-link" href="#">Contact</a>
      </li>
      <li class="ams-page-header__menu-item ams-page-header__menu-item--fixed">
        <a class="nl-link" href="#"
          ><span class="utrecht-icon"
            ><img style="margin-inline-end: 0.5rem" src="/svg/person_icon.svg" alt="" />Mijn omgeving</span
          ></a
        >
      </li>
      <li class="ams-page-header__menu-item ams-page-header__menu-item--fixed" style="display: flex; font-size: 1rem">
        <form role="search" action="/zoeken" method="get" style="display: contents">
          <label for="site-search" class="ams-visually-hidden">Zoeken op de site</label>
          <input
            id="site-search"
            style="max-width: 60%; margin-inline-end: 0.3rem; font-size: 1rem; height: 3rem"
            placeholder="Bijvoorbeeld zwembad of grofvuil"
            type="search"
            class="ams-text-input"
            dir="auto"
            name="q"
          />
          <button
            style="height: 3rem; display: flex; align-items: center"
            class="utrecht-button utrecht-button--secondary-action"
            type="submit"
          >
            <span style="display: contents" class="ams-icon ams-icon--small"
              ><img src="/svg/search_icon.svg" alt="" /></span
            >Zoeken
          </button>
        </form>
      </li>
    </ul>
  </nav>
</header>
```

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/page-header/page-header.css" />
```

En om de styling van de links goed te krijgen importeer je de NL Design System Candidate Link:

```html
<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/link-css@2.0.1/dist/link.css" />
```

##### Visually Hidden

Zoals je misschien opgevallen is zie je nu een paar elementen staan die niet zichtbaar hoeven te zijn, wanneer je geen screenreader gebruikt. Namelijk "Hoofdnavigatie", "Secundaire navigatie" en "Zoeken op de site". Deze zijn toegevoegd om de toegankelijkheid van de pagina te verbeteren.
De Amsterdam community heeft een component om a11y elementen 'onzichtbaar' te maken. Deze importeer je door middel van:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/visually-hidden/visually-hidden.css"
/>
```

##### Navigation Bar

Voor de navigation Bar past degene uit Utrecht het beste. De styling is niet perfect, maar dat kan met custom CSS opgelost worden, of zoals in dit voorbeeld gedaan wordt wachten we tot er een beter component beschikbaar is.

```html
<div class="rhc-nav-bar__container">
  <nav aria-labelledby="secondary-navigation" class="utrecht-nav-bar">
    <span class="ams-visually-hidden" id="secondary-navigation">Secundaire navigatie</span>
    <div class="utrecht-nav-bar__content">
      <ul role="list" class="utrecht-nav-list">
        <li class="utrecht-nav-list__item">
          <a aria-disabled="false" class="nl-link utrecht-nav-list__link" href="#">Home</a>
        </li>
        <li class="utrecht-nav-list__item">
          <a aria-current="page" aria-disabled="false" class="nl-link utrecht-nav-list__link" href="#">Meldingen</a>
        </li>
        <li class="utrecht-nav-list__item">
          <a aria-disabled="false" class="nl-link utrecht-nav-list__link" href="/componenten/">Componenten</a>
        </li>
        <li class="utrecht-nav-list__item">
          <a aria-disabled="false" class="nl-link utrecht-nav-list__link" href="/voorbeelden/">Voorbeelden</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
```

En de bijbehorende imports:

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/nav-bar-css@1.4.1/dist/index.css" />
<link rel="stylesheet" href="https://unpkg.com/@utrecht/nav-list-css@1.3.1/dist/index.css" />
```

##### Zoekbalk

De zoekbalk van de Page Header heeft nog niet de juiste styling.

Dit is op te lossen door de [Text Input](/text-input) uit de Amsterdam community te gebruiken:

```html
<input
  id="site-search"
  style="max-width: 60%; margin-inline-end: 0.3rem; font-size: 1rem; height: 3rem"
  placeholder="Bijvoorbeeld zwembad of grofvuil"
  type="search"
  class="ams-text-input"
  dir="auto"
  name="q"
/>
```

Deze wordt als volgt geïmporteerd:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/text-input/text-input.css" />
```

##### Zoek-knop

De knop om mee te "zoeken" heeft ook nog niet de juiste styling.
Deze wordt als volgt geïmporteerd:

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/button-css@2.3.1/dist/index.css" />
```

#### Breadcrumb Navigation

De Amsterdam community heeft een Breadcrumb Navigation component dat lijkt op het design. Label de breadcrumb en markeer de huidige pagina met `aria-current="page"`.

Voeg de breadcrumbs component toe:

```html
<nav class="ams-breadcrumb" aria-label="Breadcrumb">
  <ol role="list" class="ams-breadcrumb__list">
    <li class="ams-breadcrumb__item"><a href="#" class="nl-link">Home</a></li>
    <li class="ams-breadcrumb__item"><a href="#" class="nl-link">Meldingen</a></li>
    <li class="ams-breadcrumb__item" aria-current="page">Meldingen openbare ruimte</li>
  </ol>
</nav>
```

Het is belangrijk dat de links nog wel gestyled worden als "nl-link" met behulp van `class="nl-link"`, zodat de styling meer lijkt op het design.

Om dit te laten werken moet de breadcrumb natuurlijk wel geïmporteerd worden:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/breadcrumb/breadcrumb.css" />
```

#### Skip Link

Zoals je kan zien is er een link op de pagina aanwezig met de tekst "Direct naar de hoofdinhoud". Deze link is bedoeld voor screenreaders om gelijk naar de hoofdinhoud te kunnen navigeren.

Om de skip link te verbergen wanneer je geen screenreader gebruikt kun je de bijbehorende CSS importeren:

```html
<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/skip-link-css@1.0.3/dist/skip-link.css" />
```

En moet je de bijbehorende classes erop zetten:

```html
<a href="#main" class="nl-skip-link nl-skip-link--visible-on-focus">Direct naar de hoofdinhoud</a>
```

Ook zonder screenreader kun je zien dat de Skip Link nu verborgen is, maar nog wel bruikbaar is door de pagina te herladen en direct daarna op de "Tab" toets te drukken.

#### Page Body

De pagina begint er mooi uit te zien. Je kan echter zien dat de tekst helemaal links staat en de paragrafen de volledige breedte in te nemen. Om dat op te lossen kun je de Utrecht page body gebruiken.

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/page-body-css@0.1.1/dist/index.css" />
```

#### Heading

Gebruik semantische koppen met de NL Design System heading-styles.

Voorbeeld (zoals gebruikt op de pagina):

```html
<h1 class="nl-heading nl-heading--level-1">Graffiti laten verwijderen van uw pand</h1>
<h2 class="nl-heading nl-heading--level-2">Eerst toestemming geven</h2>
<h3 class="nl-heading nl-heading--level-3">Professioneel verwijderd</h3>
```

Benodigde CSS:

```html
<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/heading-css@1.1.1/dist/heading.css" />
```

Je kan zien dat het heeft gewerkt doordat de `h1` met een `font-size` van `32px` naar een `font-size` van `40px` is gegaan. Voor de overige headings kun je uiteraard ook de verschillen merken.

#### Paragraph

Gebruik paragrafen voor lopende tekst. Aangezien `nl-paragraph` beschikbaar is als Candidate component kun je die gebruiken. Pas deze toe op alle plekken waar een `<p>` element staat.

```html
<p class="nl-paragraph">
  Heeft u overlast van graffiti, posters of stickers op uw huis of pand? Meldpunt Graffiti zorgt ervoor dat deze gratis
  worden verwijderd.
</p>
```

Benodigde CSS:

```html
<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/paragraph-css@2.0.1/dist/paragraph.css" />
```

De pagina begint nu al veel meer te lijken op het design.

#### Button

Nu zijn de buttons aan de beurt om te stylen.
Het zijn links met button-styling. Gebruik voor call-to-action de Utrecht button link, niet te verwarren met de utrecht link button.

```html
<a class="utrecht-button-link utrecht-button--primary-action" href="#">Toestemming geven</a>
<a class="utrecht-button-link utrecht-button--primary-action" href="#">Melding doen</a>
```

Benodigde CSS:

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/button-link-css@1.3.1/dist/index.css" />
```

#### Unordered List

Gebruik een Unordered List voor de opsommingen. In het voorbeeld is de Utrecht-list styling toegepast.

```html
<ul class="utrecht-unordered-list">
  <li class="utrecht-unordered-list__item">
    Graffiti of posters kunnen alleen worden verwijderd als u daarvoor toestemming geeft. U hoeft dit maar 1 keer te
    doen.
  </li>
  <li class="utrecht-unordered-list__item">
    Als u eigenaar, beheerder of gebruiker bent en in Gemeente Voorbeeld woont, kunt u het formulier met DigiD invullen.
  </li>
  <li class="utrecht-unordered-list__item">
    Nutsbedrijven en rijksoverheidsinstellingen zijn zelf verantwoordelijk voor het reinigen van hun objecten.
  </li>
  <li class="utrecht-unordered-list__item">
    Woont u niet in Gemeente Voorbeeld of heeft u uw DigiD niet bij de hand? Vul dan het formulier in en print het.
  </li>
</ul>
```

Hiervoor moet de volgende CSS geïmporteerd worden:

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/unordered-list-css@1.5.1/dist/index.css" />
```

#### Link

Gebruik `a` met de NL Design System link-styling voor zichtbare links.

```html
<a href="#" class="nl-link">Contact</a>
<a href="/componenten/" class="nl-link">Componenten</a>
<a href="/voorbeelden/" class="nl-link">Voorbeelden</a>
```

Benodigde CSS:

```html
<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/link-css@2.0.1/dist/link.css" />
```

Nu deze stap is uitgevoerd, is de pagina body van de pagina compleet gestyled met het NL Design System.

#### Page Footer

Voor de Page Footer gebruik ik de footer van Amsterdam. In de [Storybook van Amsterdam](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs) kan voorbeeldcode gevonden worden hoe je de footer opbouwd met HTML en CSS. Hiervoor moet je "inspect element" van de browser gebruiken, want de voorbeeldcode van storybook maakt gebruik van React.

```html
<!-- Gebruik het HTML element `footer` om deze belangrijke "landmark region" op te maken, voor toegankelijkheid. -->
<footer class="ams-page-footer">
  <div class="ams-page-footer__spotlight">
    <div class="ams-grid ams-grid--padding-vertical--x-large">
      <div class="ams-grid__cell ams-grid__cell--span-3">
        <img src="/svg/voorbeeld-thema-logo-white.svg" alt="Voorbeeld thema logo" />
      </div>
      <div class="ams-grid__cell ams-grid__cell--span-3">
        <h3 class="ams-heading--inverse ams-heading ams-heading--3">Contact</h3>
        <p class="nl-paragraph ams-paragraph--inverse">
          Bel 453453 (maandag tot en met vrijdag van 9:00 tot 17:00) of stuur een email naar vragen@voorbeeld.nl
        </p>
      </div>
      <div class="ams-grid__cell ams-grid__cell--span-3">
        <ul role="list" class="ams-link-list">
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Over gemeente Voorbeeld</a
            >
          </li>
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Nieuwsbrief</a
            >
          </li>
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Social media</a
            >
          </li>
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Werken bij de gemeente Voorbeeld</a
            >
          </li>
        </ul>
      </div>

      <div class="ams-grid__cell ams-grid__cell--span-3">
        <ul role="list" class="ams-link-list">
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Bescherming persoonsgegevens</a
            >
          </li>
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Gebruikersvoorwaarden</a
            >
          </li>
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Proclaimer</a
            >
          </li>
          <li>
            <a class="ams-link-list__link ams-link-list__link--inverse ams-link-list__link--small" href="#"
              >Toegankelijkheidsverklaring</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

Deze worden als volgt geïmporteerd:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/page-footer/page-footer.css" />
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-tokens@1.0.1/dist/index.css" />
```

Er wordt ook gebruik gemaakt van [Link List](/link-list), Grid, Heading en Paragraph in deze Page Footer. Daarom moet je deze ook importeren:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/link-list/link-list.css" />
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/grid/grid.css" />
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/heading/heading.css" />
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/paragraph/paragraph.css" />
```

### Stap 6: Verbetering in styling ten opzichte van het ontwerp

### Toegankelijk zoeken (aanbevolen)

Gebruik een zichtbaar of visueel verborgen label en een `form` met `role="search"`.

```html
<form role="search" action="/zoeken" method="get" class="site-search">
  <label for="site-search" class="visually-hidden">Zoeken op de site</label>
  <input id="site-search" name="q" type="search" placeholder="Bijvoorbeeld zwembad of grofvuil" />
  <button type="submit" class="utrecht-button utrecht-button--secondary-action">Zoeken</button>
</form>
```

### Navigatie labelen

Geef je primaire navigatie een naam met een kop of `aria-label`.

```html
<nav aria-labelledby="primary-navigation">
  <h2 id="primary-navigation" class="visually-hidden">Hoofdnavigatie</h2>
  <!-- ... -->
</nav>
```

## Laatste tweaks met custom CSS

Gelukkig sluiten de meeste componenten al wel perfect aan, maar aangezien niet elk component gestyled is volgens het ontwerp moet je wat kleine aanpassingen maken in de css om deze wel aan te laten sluiten.

### Rich Text

Zoals je kunt zien staat de tekst nog erg dicht op elkaar. Dit is in de toekomst op te lossen met een [Rich Text Content](/rich-text-content) component. Nu deze nog niet bestaat kun je dit als volgt oplossen:

Binnen `<head></head>`:

```html
<style>
  .rich-text > * {
    margin-block-start: 0.5rem;
  }
</style>
```

En vervolgens:

```html
<main class="rich-text"></main>
```
