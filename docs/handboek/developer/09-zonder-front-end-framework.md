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

Wil je liever zelf aan de slag? Kopieer dan [deze voorbeeldpagina](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/main/static/examples/zonder-front-end-framework.html) en maak er je eigen versie van.

## Paginaopzet

De pagina is opgedeeld in de volgende componenten: [Skip Link](/skip-link), [Logo](/logo), [Page Header](/page-header), [Page Footer](/page-footer), [Breadcrumb Navigation](/breadcrumb-navigation), [Heading](/heading), [Paragraph](/paragraph), [Button](/button), [Unordered List](/unordered-list), [Navigation Bar](/navigation-bar) en [Link](/link).

Een aantal van deze componenten is beschikbaar als [Candidate component](/componenten/?status=CANDIDATE), een aantal als [Community component](/componenten/?status=COMMUNITY) en een paar zijn nog niet beschikbaar. In dit voorbeeld wordt gekozen om de pagina zoveel mogelijk op te bouwen met de componenten die al bestaan. Zijn er meerdere Community implementaties? Kies dan degene die het best bij het gewenste design past.

## Zelf de pagina opbouwen

### Stap 1: Lege HTML-pagina

Maak een HTML bestand aan op je computer, bijvoorbeeld `example-page.html` en begin met een minimale, semantische opbouw:

```html
<!doctype html>
<html lang="nl" dir="ltr" class="utrecht-root">
  <head>
    <meta charset="utf-8" />
    <title><!-- paginatitel komt hier --> · Gemeente Voorbeeld</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <!-- content komt hier -->
  </body>
</html>
```

**Toelichting**: `lang="nl"` is essentieel voor schermlezers en voor juiste uitspraak. `dir` is hier `ltr` (left‑to‑right).

### Stap 2: Gebruik een boilerplate als basis voor de pagina

:::info[Work in progress]
Hier komt een link naar de boilerplate pagina, zodra deze is gemaakt.
:::

### Stap 3: Voeg de content toe aan de pagina

Eerst voeg je de content toe aan de HTML pagina.
Om het effect van de componenten en hun styling goed te kunnen zien moet je de pagina vullen met content zoals tekst, plaatjes en kopteksten op basis van het design.

Ook is het hier van belang de juiste HTML elementen te gebruiken, dus niet bijvoorbeeld een `div` als knop of navigatie-element.
Het mooiste is om zelf de content toe te voegen, maar als je wilt kun je om tijd te besparen de content uit [deze file](https://raw.githubusercontent.com/nl-design-system/documentatie/refs/heads/main/static/examples/zonder-front-end-framework-html-only.html) kopiëren.

Je pagina zal er dan als volgt uitzien:

<div className="utrecht-root" style={{zoom: '50%', width: '100%', height: '1024px'}}>
  <div className="utrecht-body">
    <iframe title="Voorbeeld HTML pagina" style={{width: '100%', height: '1024px'}} src="/examples/zonder-front-end-framework-html-only.html"></iframe>
  </div>
</div>

### Stap 4: Importeer NL Design System voorbeeld thema

:::info[tips]
Mocht je vanuit de organistatie waarvoor je werkt al een huisstijl gebruiken, dan kun je die bij deze stap ook gelijk importeren en de class name toepassen op de `html` van de pagina. Voor meer informatie kun je terecht op de pagina [Huisstijl vastleggen](/handboek/huisstijl-vastleggen/overzicht). Wil je simpelweg een proof-of-concept bouwen, dan kun je verder gaan met `class="voorbeeld-theme"`.
:::

Zie ook [het voorbeeld thema](/handboek/huisstijl/themas/voorbeeld-thema#voorbeeld-thema).
Zet het thema bij voorkeur op de `html` root.

```html
<html lang="nl" dir="ltr" class="utrecht-root voorbeeld-theme"></html>
```

:::info
Wil je het thema toch beperken tot een deel van de pagina, dan kun je het op een wrapper-element toepassen. Voor de meeste pagina’s is toepassen op `html` de beste keuze.
:::

Importeer de CSS van het voorbeeld thema en de design tokens:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@nl-design-system-unstable/voorbeeld-design-tokens@5.1.0/dist/theme.css"
/>
```

:::info
De stylesheet link zou je zelf kunnen vinden aan de hand van het [unpkg format](https://unpkg.com/) en het zoeken van de package/versienummer op [npmjs](https://npmjs.com).

Het is mogelijk om bij de import met unpkg een generiek versienummer neer te zetten, bijvoorbeeld `@5`, of helemaal geen versienummer toe te voegen zodat je altijd de laatste versie hebt. Het is belangrijk om hierin een bewuste keuze te maken en eventuele gevolgen te accepteren. Bekijk [de SemVer pagina](/handboek/developer/changes) om meer te leren over Semantic Versioning.

In de voorbeeldcode willen we graag de werking consistent houden, dus is er gekozen om een specifiek versienummer vast te leggen.
:::

### Stap 5: Componenten importeren uit NL Design System

Het is vaak mogelijk alle de componenten uit een design system van de community met 1 import statement te importeren. Hier bijvoorbeeld alle componenten van Amsterdam:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/index.css" />
```

Dit wordt niet aangeraden omdat je dan veel meer code dan nodig importeert, en je pagina onnodig langzaam wordt voor gebruikers. In plaats daarvan kiezen we in de onderstaande stappen ervoor om elk component individueel te importeren. Dat zorgt ervoor dat je alleen de CSS gebruikt die je nodig hebt.

#### Logo

Het logo kan als svg aangeleverd worden. Je kunt er voor kiezen om een eigen logo neer te zetten of die van [het voorbeeld thema](/svg/voorbeeld-thema-logo.svg) te gebruiken.

:::info[SVG via `<img>` vs inline SVG]
Gebruik bij voorkeur inline SVG voor iconen:

- Inline SVG ondersteunt theming (`currentColor`, CSS‑variabelen) en high‑contrast/forced‑colors.
- States (hover/focus/active) zijn te stylen met CSS.

Je kunt voor iconen beter `fill="currentColor"` gebruiken. Dit zorgt ervoor dat de iconen automatisch de tekstkleur overnemen en beter integreren met je thema. Meer informatie hierover vind je in de [Icon documentatie](/icon).

`<img src="…svg">` kan wel voor decoratieve, kleurvaste afbeeldingen die door contentmakers worden beheerd.
:::

Het logo kunnen we als volgt toevoegen:

```html
<img src="/svg/voorbeeld-thema-logo.svg" alt="Logo van het Voorbeeld thema" />
```

Wanneer je het logo op je lokale file system hebt opgeslagen in hetzelfde mapje als de html, dan moet je verwijzen naar `./voorbeeld-thema-logo.svg`.

Om een goede alt-text te kiezen voor logo kun je het beste [hier kijken](/blog/toegankelijke-naam-link-logo-header/#optie-2-de-toegankelijke-naam-in-een-aria-label-bij-de-link) voor tips.

#### Page Header en navigatie

De Page Header uit de Amsterdam community lijkt als beste te passen voor het design. In de [Storybook van Amsterdam](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs) kan voorbeeldcode gevonden worden hoe je de header opbouwd met HTML en CSS. Hier voor moet je naar de "HTML" tab gaan in Storybook.

:::info[Als de Storybook geen HTML plugin gebruikt]
Als je op een andere storybook kijkt en daar de plugin niet beschikbaar is je "inspect element" van de browser gebruiken om de HTML terug te kunnen vinden.
:::

Om het design na te bouwen, doe je nog een paar aanpassingen en kom je op het volgende resultaat:

```html
<header class="ams-page-header">
  <nav aria-labelledby="primary-navigation" class="ams-page-header__navigation">
    <h2 class="ams-visually-hidden" id="primary-navigation">Hoofdnavigatie</h2>
    <img src="/svg/voorbeeld-thema-logo.svg" alt="Logo van het Voorbeeld thema" />
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
            style="margin-inline-end: 0.3rem;"
            placeholder="Bijvoorbeeld zwembad of grofvuil"
            type="search"
            class="ams-text-input"
            dir="auto"
            name="q"
          />
          <button
            style="display: flex; align-items: center; padding-inline-start: 1.5rem; padding-inline-end: 1.5rem;"
            class="utrecht-button utrecht-button--secondary-action"
            type="submit"
          >
            <span style="display: contents" class="utrecht-icon"><img src="/svg/search_icon.svg" alt="" /></span>Zoeken
          </button>
        </form>
      </li>
    </ul>
  </nav>
</header>
```

De Page Header importeer je als volgt:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/page-header/page-header.css" />
```

En om de styling van de links goed te krijgen importeer je de NL Design System Candidate Link:

```html
<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/link-css@2.0.1/dist/link.css" />
```

##### Visually Hidden

Soms heb je tekst nodig die alleen voor een screenreader bedoeld is.
Voorbeeld: Een website heeft verschillende secties, zoals 'Hoofdnavigatie', 'Hoofdinhoud' en 'Footer'. Voor een screenreadergebruiker is het heel handig als deze secties (landmarks) een duidelijke naam hebben.
Met het aria-labelledby attribuut kun je een sectie een naam geven door te verwijzen naar een titel op de pagina. Maar wat als je die titel niet zichtbaar wilt tonen, omdat het voor ziende gebruikers al duidelijk genoeg is?
Dit is precies waar de visually-hidden class voor dient.

- Wat het doet: Het verbergt een element visueel, zodat het op het scherm niet te zien is.
- Wat het niet doet: Het verwijdert het element niet. De inhoud blijft gewoon bestaan in de code en is daardoor nog steeds perfect leesbaar voor screenreaders.

Amsterdam heeft een component om elementen 'onzichtbaar' te maken. Deze importeer je door middel van:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/visually-hidden/visually-hidden.css"
/>
```

##### Navigation Bar

Op het moment van schrijven heeft de Navigation Bar de status "Help Wanted". Na navraag in de [Slack community](/slack) blijkt echter wel dat de Utrecht community een Navigation Bar beschikbaar heeft gemaakt. De styling is niet perfect, maar dat kan met custom CSS opgelost worden, of zoals in dit voorbeeld gedaan wordt wachten we tot er een beter component beschikbaar is.

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
<nav class="ams-breadcrumb" aria-label="kruimelpad">
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

Zoals je kan zien is er een link op de pagina aanwezig met de tekst "Direct naar de hoofdinhoud". Deze link is bedoeld voor onder meer toetsenbordgebruikers gelijk naar de hoofdinhoud te kunnen navigeren, en [de navigatie kunnen overslaan](/wcag/2.4.1/).

Om de skip link te verbergen wanneer je geen screenreader gebruikt kun je de bijbehorende CSS importeren:

```html
<link rel="stylesheet" href="https://unpkg.com/@nl-design-system-candidate/skip-link-css@1.0.3/dist/skip-link.css" />
```

En moet je de bijbehorende classes erop zetten:

```html
<a href="#main" class="nl-skip-link nl-skip-link--visible-on-focus">Direct naar de hoofdinhoud</a>
```

Ook zonder screenreader kun je zien dat de Skip Link nu verborgen is, maar nog wel bruikbaar is door de pagina te herladen en direct daarna op de "Tab" toets te drukken.

Om de Skip Link te gebruiken moet je aangeven waar de hoofdinhoud is. De hoofdinhoud markeer je met het `<main>`-element, een zogenaamde "landmark". Dit geeft screenreadergebruikers een extra manier om snel naar de hoofdinhoud te springen met de "landmark navigatie". Door `id="main"` toe te voegen, kan ook de Skip Link hier direct naartoe verwijzen.

```html
<main id="main"></main>
```

Richtlijnen:

- Gebruik precies één `<main>` per pagina.
- Plaats `id="main"` op `<main>` zodat de skip‑link (`href="#main"`) werkt.
- Plaats andere herhalende landmarks buiten main, zodat gebruikers makkelijk al die onderdelen kunnen overslaan. De nav van de Breadcrumb Navigation moet bijvoorbeeld niet in main staan.

#### Page Body

De pagina begint er mooi uit te zien. Je kan echter zien dat de tekst helemaal links staat en de alinea's de volledige breedte in te nemen. Om dat op te lossen kun je de Utrecht page body gebruiken.

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/page-body-css@0.1.1/dist/index.css" />
```

##### Waar plaats je de Page Body classnames?

Zet de Page Body CSS classes op een wrapper rondom de hoofdinhoud, niet op `body` of op `<main>`. Gebruik:

```html
<div class="utrecht-page-body">
  <div class="utrecht-page-body__content">
    <main id="main">…</main>
  </div>
  <!-- optioneel: extra zij‑navigatie/aside buiten de content wrapper -->
  <!-- <aside>…</aside> -->
</div>
```

Waarom op deze manier? De wrapper zorgt voor consistente maximale breedte, horizontale padding en responsieve layout. Als je `<main>` gebruikt voor de Page Body dan is er grote kans dat andere landmarks onbedoeld binnen de `main` landmark worden geplaatst, zoals bijvoorbeeld de Breadcrumb Navigation.

#### Heading

Gebruik de Heading elementen van HTML (`h1` tot en met `h6`) met de NL Design System heading CSS.

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

Gebruik alinea's voor lopende tekst. Aangezien `nl-paragraph` beschikbaar is als Candidate component kun je die gebruiken. Pas deze toe op alle plekken waar een `<p>` element staat.

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
Het zijn links met button-styling. Gebruik voor call-to-action de Utrecht button link: de component voor links die eruit zien als een button.

```html
<a class="utrecht-button-link utrecht-button--primary-action" href="#">Toestemming geven</a>
<a class="utrecht-button-link utrecht-button--primary-action" href="#">Melding doen</a>
```

Benodigde CSS:

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/button-link-css@1.3.1/dist/index.css" />
```

#### Unordered List

Gebruik een Unordered List voor de opsommingen. In het voorbeeld is de Utrecht [Unordered List](https://nl-design-system.github.io/utrecht/storybook-css/?path=/docs/css-unordered-list--docs) gebruikt.

```html
<ul role="list" class="utrecht-unordered-list">
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

Nu deze stap is uitgevoerd, maakt de inhoud van de Page Body compleet gebruik van de CSS van NL Design System.

#### Page Footer

Voor de Page Footer gebruik ik de footer van Amsterdam. In de [Storybook van Amsterdam](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs) kan voorbeeldcode gevonden worden hoe je de footer opbouwd met HTML en CSS. Hiervoor moet je navigeren naar de "HTML" tab van de addons in Storybook.

```html
<!-- Gebruik het HTML element `footer` om deze belangrijke "landmark region" op te maken, voor toegankelijkheid. -->
<footer class="ams-page-footer">
  <div class="ams-page-footer__spotlight">
    <div class="ams-grid ams-grid--padding-vertical--x-large">
      <div class="ams-grid__cell ams-grid__cell--span-3">
        <img src="/svg/voorbeeld-thema-logo-white.svg" alt="Logo van het Voorbeeld thema" />
      </div>
      <div class="ams-grid__cell ams-grid__cell--span-3">
        <h3 class="ams-heading--inverse ams-heading ams-heading--3">Contact</h3>
        <p class="nl-paragraph">
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

Geef je navigatie een naam met een kop of `aria-labelledby`, zodat het ook duidelijk is als voor screenreadergebruikers wanneer er meerdere `<nav>` elementen zijn.

```html
<nav aria-labelledby="primary-navigation">
  <h2 id="primary-navigation" class="visually-hidden">Hoofdnavigatie</h2>
  <!-- ... -->
</nav>
```

## Laatste tweaks met custom CSS

Gelukkig sluiten de meeste componenten al wel perfect aan, maar aangezien niet elk component gestyled is volgens het ontwerp moet je wat kleine aanpassingen maken in de css om deze wel aan te laten sluiten.

### Witruimte in Rich Text

Zoals je kunt zien staat de tekst nog erg dicht op elkaar. Dit is in de toekomst op te lossen met een [Rich Text Content](/rich-text-content) component. Nu deze nog niet bestaat kun je dit als volgt oplossen:

Binnen `<head></head>`:

```html
<style>
  .example-rich-text > * {
    margin-block-start: 0.5rem;
  }
</style>
```

En vervolgens:

```html
<main class="example-rich-text"></main>
```

## Heb je feedback?

Dit is een eerste versie, we willen graag van de community horen of dit stappenplan werkbaar en nuttig is.
Heb je vragen, aanvullingen of opmerkingen? [Ga naar de GitHub Discussion](https://github.com/orgs/nl-design-system/discussions/411#discussion-9024854) en deel je mening.

## Meer hulp nodig?

- Sluit aan bij de volgende [Developer Open Hour](/events/developer-open-hour)
- Stuur ons een berichtje op [Slack](/slack)
- Stuur een mailtje naar info@nldesignsystem.nl
