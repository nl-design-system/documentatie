---
title: CSS conventie
hide_title: true
hide_table_of_contents: false
sidebar_label: CSS conventie
pagination_label: CSS conventie
description: Conventies voor het schrijven van CSS voor NL Design System
slug: /handboek/developer/css-conventie/
keywords:
  - developer
  - CSS
  - componenten
---

import { Guideline } from "@site/src/components/Guideline";

# CSS conventie

Dit document beschrijft de conventies voor het schrijven van herbruikbare CSS voor componenten en applicaties met NL Design System. Deze zijn bedoeld voor iedereen die nieuwe componenten ontwikkelt of bijdraagt aan gedeelde CSS-bibliotheken en voor iedereen die aanvullende CSS scrhijft in een herbruikbare applicatie.

## Huisstijl onafhankelijk

Schrijf CSS die ook werkt voor anderen. Herbruikbare CSS gebruikt geen huisstijlcode. CSS-variabelen worden gebruikt voor _component design tokens_ die ingevuld kunnen worden met de huisstijl van een organisatie. Dit is van belang wanneer componenten door anderen worden gebruikt, of wanneer software door meerdere organisaties met hun eigen huisstijl wordt geïnstalleerd, zoals een CMS voor gemeenten of [Common Ground](http://commonground.nl)-software.

<Guideline appearance="do" title="Gebruik component tokens voor de design beslissingen die per huisstijl verschillen.">
    ```css
    .example-button {
      background-color: var(--example-button-background-color);
    }
    ```
</Guideline>

<Guideline appearance="do" title="Gebruik basis tokens voor de design beslissingen in een custom.css of componenten die niet in het design system zitten.">
    ```css
    .example-custom-footer {
      background-color: var(--basis-color-accent-1-inverse-bg-document);
      color: var(--basis-color-accent-1-inverse-color-default);
    }
    ```
</Guideline>

<Guideline appearance="do" title="Gebruik basis tokens als fallback voor de design beslissingen in componenten die nog niet in de community zitten.">
    ```css
    .example-custom-footer {
      background-color: var(--example-custom-footer-background-color, var(--basis-color-accent-1-inverse-bg-document));
      color: var(--example-custom-footer-color, var(--basis-color-accent-1-inverse-color-default));
    }
    ```
</Guideline>

<Guideline appearance="dont" title="Hardcoded waardes voor design beslissingen">
    ```css
    .example-custom-footer {
      background-color: #663399;
    }
    ```
</Guideline>

<Guideline appearance="dont" title="Huisstijl tokens van jouw organisatie in de component">
    ```css
    .example-custom-footer {
      background-color: var(--purple);
    }
    ```
</Guideline>

## Geïsoleerde theming

Zorg dat de CSS van een thema niet de stylesheet van anderen in de weg zit. De huisstijlcode staat voor iedere organisatie in een apart thema-bestand. Gedeelde CSS wordt aangeboden zonder side-effects. De CSS heeft pas effect op een pagina nadat een expliciete CSS-class is toegepast. Zo kan hergebruik plaatsvinden zonder onbedoelde invloed op bestaande stylesheets.

<Guideline appearance="do" title="Gebruik brand tokens in je thema" description="Daarin verwijst de `component design token` naar de `brand design token`">
  ```css
    /* Voorbeeld thema in CSS op basis van de Design Tokens JSON */
    .example-theme {
      --example-purple: #663399;
      --example-button-background-color: var(--example-purple);
    }
  ```
</Guideline>

Dit thema-bestand kan automatisch worden gegenereerd via een [Design Tokens JSON-bestand](https://design-tokens.github.io/community-group/format/) met [Style Dictionary](https://styledictionary.com). Elke huisstijl kan een eigen design token JSON-bestand hebben dat in meerdere projecten wordt gebruikt.

<Guideline appearance="do" title="Huisstijl inladen met een eigen class name">
  ```html
  <html class="utrecht-root example-theme">
  <!-- 
    Example use of Community, Candidate and custom components
    that will be styled by the example-theme stylesheet
  -->
    <body class="utrecht-body">
      <h1 class="nl-heading nl-heading--level-1">Example page</h1>
      <div class="example-card-group">
        <div class="example-card">
          <h2 class="example-card__heading nl-heading nl-heading--level-2">Hello</h2>
          <p class="nl-paragraph">Some content here</p>
        </div>
      </div>
    </body>
  </html>
  ```
</Guideline>

<Guideline appearance="dont" title="Huisstijl inladen in de :root" description="Zo kunnen andere stylesheets niet makkelijk worden ingeladen zonder mogelijke side-effects">
```css
:root {
  --example-link-color: rebeccapurple;
}
```
</Guideline>

## Herleidbare prefix

Zorg dat de prefix van de componenten en tokens herkenbaar en herleidbaar is. De componenten bij NL Design System worden bijgedragen door diverse organisaties. Om te herleiden waar een component vandaan komt en met wie je kan samenwerken om een verbetering door te voeren houden we de prefix van die organisatie aan. Ook in de applicatie van een organisatie met een andere naam. Het kan dus voorkomen dat een thema bestaat uit design tokens van diverse organisaties.

<Guideline appearance="do" title="Gebruik de prefix van de organisatie die de componenten beheert">
  ```css
  /* Voorbeeld CSS Output van de Design Tokens JSON met diverse componenten */
  .example theme {
    --ams-breadcrumb-link-color: blue;
    --nl-link-color: blue;
    --utrecht-button-background-color: rebeccapurple;
  }
  ```
</Guideline>

<Guideline appearance="do" title="Eigen prefix voor nieuwe componenten" description="Alle namen in gedeelde CSS beginnen met een prefix die uniek is voor de organisatie. De prefix bestaat uitsluitend uit letters en cijfers, zonder koppelstreepjes of andere tekens.">

```css
.example-video {
  border-color: var(--example-video-border-color);
  border-radius: var(--example-video-border-radius);
  border-width: var(--example-video-border-width);
}
```

</Guideline>

<Guideline appearance="do" title="Eigen prefix voor specifieke component tokens bij gebruik van andere componenten">
  ```css
  .example-video__button {
    --nl-button-background-color: var(--example-video-button-background-color);
    --nl-button-color: var(--example-video-button-color);
  }
  ```
</Guideline>

<Guideline appearance="dont" title="Eigen CSS om de tokens of CSS van een andere prefix te voorzien">
```css
/* Voorbeeld CSS Output van de Design Tokens JSON met diverse componenten */
.example theme {
--example-breadcrumb-link-color: blue;
--example-link-color: blue;
--example-button-background-color: rebeccapurple;
}
/* Voorbeeld pseudo CSS om onnodig eigen componenten logica te onderhouden */
.example-breadcrumb {
--ams-breadcrumb-link-color: var(--example-breadcrumb-link-color);
@include ams-breadcrumb;
}
```
</Guideline>

<!--

Niet toegestaan, als een `small`-variant van `nl-button` nodig is:

```css
.nl-button--small {
  font-size: 16px;
}
```

Wanneer de developers later een nieuwe versie uitbrengen met dezelfde naam, moet de code worden aangepast om veilig te kunnen updaten.

Verplicht:

````css
.example-button--small {
  font-size: 16px;
}
```
-->

## Herbruikbare mixins

Schrijf SCSS mixins voor gebruik met andere CSS selectors. CSS-onderdelen worden aangeboden als [SCSS-mixin](https://sass-lang.com/documentation/at-rules/mixin), zodat andere projecten dezelfde stijlen kunnen toepassen op afwijkende selectors.

`_mixin.scss`:

```scss
@mixin example-link {
  color: var(--example-link-color);
}
```

`index.scss`:

```scss
@import "./mixin";

.example-link {
  @include example-link;
}
```

Een project dat geen invloed heeft op de HTML past de mixin toe op alle links:

```scss
@import "@example/css-components/link";

a:link {
  @include example-link;
}
```

Een project met Shadow DOM:

```scss
@import "@example/css-components/link";

:host {
  @include example-link;
}
```

Een project dat de mixin tijdelijk gebruikt tijdens een migratie van oude class names:

```scss
@import "@example/css-components/link";

.old-link {
  @include example-link;
}
```

## Robuuste reset

Schrijf robuuste CSS die niet afhankelijk is van een algemene `reset.css`. Wanneer een HTML-element zoals `<ul>` wordt gebruikt voor een navigatiecomponent, worden browser-standaardstijlen — zoals `padding-inline-start` in [Firefox](https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css) of [Safari](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css) — expliciet gereset.

<Guideline appearance="do" title="Reset CSS in de component zelf">
  ```css
  ul.example-nav {
    padding-inline-start: 0;
    /* …other styles… */
  }
  ```
</Guideline>

Ook als het project een [`reset.css`-variant](https://meyerweb.com/eric/tools/css/reset/) gebruikt, blijft deze reset aanwezig in de componentcode zodat het ook werkt voor projecten zonder die `reset.css`.

<Guideline appearance="dont" title="Globale CSS reset">
  ```css
  * {
    padding: 0;
  }
```
</Guideline>

### Reset in een SCSS mixin

Wanneer een property is ingesteld op de _initial value_ (zoals `0` voor padding), kan dit eruitzien als overbodige code. Als reset-code in een losse mixin staat, ontbreekt de context dat het bedoeld is als browser-reset.

<Guideline appearance="do" title="Reset in een mixin" description="Om te voorkomen dat de code later als dode code wordt verwijderd, staat reset-code in een eigen mixin">

```scss
@mixin reset-ul {
  padding-inline-start: 0;
  /* …other styles… */
}

@mixin example-nav {
  @include reset-ul;
  /* …other styles… */
}
```

</Guideline>
