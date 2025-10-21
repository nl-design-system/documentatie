---
title: Herbruikbare CSS schrijven · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Herbruikbare CSS schrijven
pagination_label: Herbruikbare CSS schrijven
description: Als developer CSS schrijven aan NL Design System
keywords:
  - developer
  - CSS
  - componenten
---

# Herbruikbare CSS schrijven voor NL Design System

We hebben tips om herbruikbare CSS te schrijven, voor iedereen die werkt aan projecten in de NL Design System community. Wanneer je een nieuw component gaat ontwikkelen, omdat je iets nodig hebt dat nog niet bestaat in de community, dan kun je herbruikbare CSS schrijven zodat anderen ook je nieuwe component kunnen gebruiken.

Als je werkt aan software die door verschillende overheidsorganisaties wordt ingezet, dan is het belangrijk dat bezoekers de website of app vertrouwen doordat het dezelfde huisstijl heeft als ze gewend zijn. Dit geldt bijvoorbeeld voor makers van een CMS voor meerdere gemeenten, of voor [Common Ground](http://commonground.nl) software. Als jouw CSS instelbaar is met design tokens, dan is het veel minder werk om de huisstijl goed te gebruiken en hebben de gebruikers al gelijk meer vertrouwen in de dienst.

## Schrijf CSS die ook werkt voor anderen

Vermijd code voor je huisstijl in herbruikbare CSS. Gebruik CSS variabelen voor _component design tokens_ die ingevuld kunnen worden met de huisstijl van anderen. Dit is belangrijk als jouw componenten door anderen gebruikt worden, of als je aan software bouwt die door verschillende organisaties wordt geïnstalleerd met hun eigen huisstijl.

Bijvoorbeeld zo niet, met _brand design tokens_ in je component:

```css
.example-button {
  background-color: var(--example-blue);
}
```

Maar wel zo, met _component design tokens_ voor je component:

```css
.example-button {
  background-color: var(--example-button-background-color);
}
```

De code voor je eigen huisstijl gebruik je dan als losse theme. In je thema zal de _component design token_ verwijzen naar de _brand design token_.

```css
.example-theme {
  --example-blue: navy;
  --example-button-background-color: var(--example-blue);
}
```

Zo'n CSS-bestand met de theme kun je automatisch laten maken, door een [Design Tokens JSON bestand](https://design-tokens.github.io/community-group/format/) met [Style Dictionary](https://styledictionary.com) te vertalen naar CSS. Elke huisstijl kan zijn eigen design token JSON bestand hebben, die gebruikt wordt in meerdere projecten.

## Schrijf CSS die niet de stylesheet van anderen in de weg zit

Deel je CSS in een file die anderen kunnen importeren zonder dat het effect heeft op hun website. De pagina moet eerst een CSS class name gebruiken, voordat jouw CSS effect heeft. Op deze manier kunnen anderen zonder extra werk delen van jouw CSS hergebruiken.

Bijvoorbeeld _niet_ zo:

```css
:root {
  --example-link-color: blue;
}

a:link {
  color: var(--example-link-color);
}
```

Maar zo:

```css
.example-theme {
  --example-link-color: blue;
}

.example-link,
.example-html-content a:link {
  color: var(--example-link-color);
}
```

## Schrijf CSS die niet afhankelijk is van een `reset.css`

Als je een HTML element zoals `<ul>` gebruikt om een navigatie-component te maken, dan wil je bijvoorbeeld geen last hebben van `padding-inline-start` uit de browser default stylesheet (zoals [die van Firefox](https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css) of [van Safari](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)). Gebruik dan expliciet in de component daarvoor CSS:

```css
ul.example-nav {
  padding-inline-start: 0;
  /* …other styles… */
}
```

Als jouw project een [`reset.css` variant](https://meyerweb.com/eric/tools/css/reset/) gebruikt dan heb jij die padding reset misschien niet nodig, maar gebruik dan toch wel die CSS zodat het ook werkt voor anderen zonder jouw `reset.css`.

Dus _niet_ zo:

```css
* {
  padding: 0;
}

ul.example-nav {
  /* …other styles… */
}
```

### Reset in een SCSS mixin

Als je in CSS ziet dat een property is ingesteld _initial value_ van die property (zoals `0` voor padding properties), dan kun je denken: die code kan gewoon weg. Als reset code in een los bestand staat met mixins, dan ontbreekt de context dat het bedoeld is om een bepaald HTML element te resetten.

```scss
@mixin example-nav {
  padding-inline-start: 0;
  /* …other styles… */
}
```

Je wilt dan duidelijk maken waarom de code er is, om te voorkomen dat iemand het later "opschoont". Je kunt bijvoorbeeld de code verplaatsen naar een mixin voor alleen de reset code:

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

## Schrijf SCSS mixins voor gebruik met andere een CSS selector

Als de onderdelen van je CSS deelt als [SCSS _mixin_](https://sass-lang.com/documentation/at-rules/mixin) dan kan jouw CSS ook werken voor projecten die een andere CSS selector gebruiken dan jij.

Bijvoorbeeld `_mixin.scss`:

```scss
@mixin example-link {
  color: var(--example-link-color);
}
```

Bijvoorbeeld `index.scss`:

```scss
@import "./mixin";

.example-link {
  @include example-link;
}
```

Een ander project moet de CSS misschien op alle links toepassen op de pagina, omdat ze geen invloed hebben op de HTML:

```scss
@import "@example/css-components/link";

a:link {
  @include example-link;
}
```

Nog een ander project gebruikt de CSS voor een web component met Shadow DOM:

```scss
@import "@example/css-components/link";

:host {
  @include example-link;
}
```

Nog een ander project gebruikt het tijdelijk tijdens een migratie voor oude CSS class names, totdat alle templates de nieuwe `example-link` class name gebruiken.

```scss
@import "@example/css-components/link";

.old-link {
  @include example-link;
}
```

## Schrijf CSS een class name die anderen niet gaan gebruiken

Begin namen in je code met een prefix voor jouw organisatie, zoals in BEM class names, CSS variabelen en Custom Elements. Wij gebruiken `nl-`, jij kiest iets anders. Gebruik alleen letters en cijfers in de prefix, geen andere tekens zoals het koppelstreepje.

Heb je een variant nodig op een CSS component uit de community? Gebruik dan je eigen prefix voor de uitbreiding, niet de prefix van anderen. Je moet geen class name maken die de developers van de andere prefix in de toekomst misschien gaan gebruiken.

Bijvoorbeeld niet zo, als je een `small` variant van de `nl-button` nodig hebt:

```css
.nl-button--small {
  font-size: 16px;
}
```

Wanneer de developers later een nieuwe versie maken met dezelfde naam, dan zul je de code moeten aanpassen om veilig te updaten naar de laatste versie.

Bijvoorbeeld wel zo:

```css
.example-button--small {
  font-size: 16px;
}
```

## Hulp nodig of gewoon even kennis maken?

Dat kan! Onze gegevens kun je vinden op de [pagina over het kernteam](/project/kernteam).
