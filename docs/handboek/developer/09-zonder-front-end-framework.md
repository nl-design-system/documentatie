# NL Design System gebruiken zonder front-end framework

## Introductie

Met het NL Design System bouw je in een paar stappen een pagina met alleen HTML en wat CSS. In dit voorbeeld bouw je stap voor stap een ontwerp na.

Dit is het ontwerp dat in dit voorbeeld zo goed mogelijk wordt nagebouwd: [Figma](https://www.figma.com/design/taAnsV55PVP0cmw18BnMDk/NL-Design-System---Templates---Voorbeeld?node-id=5550-611&t=VX2mUDweS42iaS1D-4)

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

### Stap 4: Componenten importeren uit NL Design System

Let goed op de volgorde waarop je de dependencies inlaad. De CSS wordt overschreven door het eerst-volgende CSS bestand. Het kan dus fouten voorkomen wanneer je de @nl-design-system-\* stylesheets als laatste importeert.

#### Logo

Momenteel is er een Logo component beschikbaar in de Amsterdam community, maar die geeft hun eigen logo weer. Het is beter om het Logo te tonen zonder component.
Het logo kan als svg aangeleverd worden. Je kunt er voor kiezen om een eigen logo neer te zetten of die van [het voorbeeld thema](/svg/voorbeeld-thema-logo.svg) te gebruiken.

Het logo kunnen we als volgt toevoegen:

```html
<img src="/svg/voorbeeld-thema-logo.svg" alt="Voorbeeld thema logo" />
```

Om een goede alt-text te kiezen voor logo kun je het beste [hier kijken](/blog/toegankelijke-naam-link-logo-header/#optie-2-de-toegankelijke-naam-in-een-aria-label-bij-de-link) voor tips.

#### Page Header en navigatie

De Page Header uit de Amsterdam community lijkt als beste te passen voor het design.

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/page-header/page-header.css" />
```

Voor de navigation Bar past degene uit Utrecht het beste. De styling is niet perfect, maar dat kan met custom CSS opgelost worden, of zoals in dit voorbeeld gedaan wordt wachten we tot er een beter component beschikbaar is.

#### Breadcrumb Navigation

De Amsterdam community heeft een Breadcrumb Navigation component die lijkt op het design wat

```html
<nav class="ams-breadcrumb" style="margin-block-end: 4rem">
  <ol role="list" class="ams-breadcrumb__list">
    <li class="ams-breadcrumb__item"><a href="#" class="nl-link">Home</a></li>
    <li class="ams-breadcrumb__item"><a href="#" class="nl-link">Meldingen</a></li>
    <li class="ams-breadcrumb__item">
      <a href="#" class="nl-link">Meldingen openbare ruimte</a>
    </li>
  </ol>
</nav>
```

Het is belangrijk dat de links nog wel gestyled worden als "nl-link" met behulp van `class="nl-link"`, zodat de styling meer lijkt op het design.

#### Heading

#### Paragraph

#### Button

#### Unordered List

#### Link

#### Page Footer

Voor de Page Footer gebruik ik de footer van Amsterdam.

Deze worden als volgt geïmporteerd:

```html
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-css@1.0.1/dist/page-footer/page-footer.css" />
<link rel="stylesheet" href="https://unpkg.com/@amsterdam/design-system-tokens@1.0.1/dist/index.css" />
```

### Stap 5: Verbetering in styling ten opzichte van het ontwerp

Gelukkig sluiten de meeste componenten al wel perfect aan, maar aangezien niet elk component gestyled is volgens het ontwerp moet je wat kleine aanpassingen maken in de css om deze wel aan te laten sluiten.
