---
title: Design Tokens
hide_title: true
hide_table_of_contents: false
sidebar_label: Design Tokens
sidebar_position: 2
pagination_label: Introductie
description: NL Design System introductie
keywords:
  - design token
  - design tokens
  - introductie
---

<!-- @license CC0-1.0 -->

# Design tokens

Design tokens zijn een manier om een duidelijke naam te geven aan keuzes van het visueel ontwerp van een website of huisstijl, zodat je ontwerp als data beheerd en gedeeld kan worden.

NL Design System wil de beste componenten uit de community herbruikbaar maken voor heel de overheid. Jouw huisstijl pas je toe op een bestaande component door het te combineren met een bestand met jouw design tokens: dat noemen wij een "thema".

Kleuren, afmetingen, afstanden, tekstopmaak (enzovoorts) bepaal je op een centrale plek, zodat alle teams die data gaan gebruiken om consistent je ontwerpkeuzes terug te zien in jouw producten en diensten.

We willen een standaard dataformaat ontwikkelen voor het ontwerp van de meestgebruikte componenten, door een verzameling van duidelijke en voorspelbare namen voor design tokens te hebben. NL Design System componenten moeten deze standaard design tokens gebruiken, zodat het component herbruikbaar is voor alle verschillende thema's.

Elke organisatie maakt een eigen bestand met een "thema" voor de huisstijl, waarin uiteindelijk ontwerpkeuzes staan voor enkele honderden design tokens. Componenten uit de NL Design System community kun je dus gelijk gebruiken, je hoeft alleen maar de thema te maken!

## Design tokens in JSON

Design tokens hebben een naam en een ontwerpkeuze, bijvoorbeeld `link.color` en `blue`. Voor NL Design System maken we afspraken voor duidelijke en voorspelbare namen.

De naam van een design token voor componenten bestaat uit lagen, in een afgesproken volgorde:

1. De _prefix_ van de organisatie die de design token maakt en documentatie schrijft. Verplicht, zodat je design tokens van meerdere organisaties kunt gebruiken zonder problemen.
2. De naam van de component. Verplicht.
3. De naam van een onderdeel van de component, voor de situatie dat het duidelijker is om het onderdeel te noemen. Dit is optioneel, en het advies is: houdt het simpel wanneer mogelijk.
4. De naam van de status van een component. Bijvoorbeeld: `disabled` of `visited`. Optioneel.
5. De naam van de interactie met het component. Bijvoorbeeld: `hover` of `focus`. Optioneel.
6. De naam van de visuele eigenschap waarvoor je een ontwerpkeuze kan maken. Bijvoorbeeld: `color` of `font-weight`. Dit is verplicht als de laatste laag, zodat je in Design Tokens JSON een andere ontwerpkeuze kan hebben voor elke status en elke interactie.

Dat ziet er als Design Tokens JSON bijvoorbeeld zo uit:

```json
{
  "nl": {
    "link": {
      "color": { "$value": "blue" },
      "visited": {
        "color": { "$value": "purple" }
      },
      "hover": {
        "color": { "$value": "red" }
      },
      "icon": {
        "color": { "$value": "navy" }
      }
    }
  }
}
```

- `nl` is de prefix van de organisatie.
- `link` is de component.
- `color` is de laatste laag, de visuele eigenschap.
- `visited` is de staat van sommige links, die links hebben een ander kleur.
- `hover` is de interactie-status.
- `icon` is een optioneel onderdeel van de link, die een andere kleur kan hebben dan de tekst.

De prefix `nl` wordt alleen gebruikt door het NL Design System kernteam. Elk team kiest een eigen prefix, met alleen de letters `a` tot `z` en zonder koppelstreepje: bijvoorbeeld `denhaag`.

Gebruik voor alle onderdelen alleen kleine letters, cijfers of een koppelstreepje.

Kies als het mogelijk is een naam voor de component (en voor delen van de component) die gebaseerd is op herkenbare termen uit webstandaarden, liever dan de naamgeving uit _UI frameworks_ die op het moment populair zijn. De meeste namen gebruiken nu termen uit HTML, CSS, SVG en WAI-ARIA.

Datzelfde geldt voor de staat en de interactie-staat van een component: vaak heeft CSS of ARIA daar een goede term voor, zoals `focus`, `active`, `current` en `expanded`.

Let op dat je niet een herkenbare term gebruikt maar met een andere betekenis dan webstandaarden: een link naar de huidige pagina is bijvoorbeeld `current` en niet `active`. Een ingedrukte link is `active`.

## Design tokens in front-end

Front-end developers gebruiken design tokens als _CSS variable_, bijvoorbeeld:

```css
.dark-theme {
  --nl-button-background-color: dimgray;
  --nl-button-color: whitesmoke;
}

.btn {
  background-color: var(--nl-button-background-color);
  color: var(--nl-button-color);
}
```

We gebruiken JSON bestanden met design tokens als bron. We maken automatisch het CSS-bestand met het thema, daarvoor zijn verschillende tools die Design Tokens JSON vertalen naar onder andere CSS. Wij gebruiken nu _Style Dictionary_ om de design tokens te publiceren als CSS, SCSS, JSON, JavaScript, enzovoorts. Je kunt in de map [`proprietary/design-tokens/` van onze example repository](https://github.com/nl-design-system/example/tree/main/proprietary/design-tokens) zien hoe je Style Dictionary gebruikt.

Van organisaties die een thema onderhouden kun je een npm-pakketje installeren met daarin al deze bestandsformaten, zodat je makkelijk toegang hebt tot de laatste versie die werkt in jouw project. Ook als je bijvoorbeeld een website met PHP gebruikt, is op dit moment het npm-pakketje waarschijnlijk de handigste manier om de CSS te installeren. [NL Design System Themes Storybook](https://nl-design-system.github.io/themes/) is een goede plek om te vinden welke thema's er al zijn.

## Huisstijl

De ontwerpkeuzes van je huisstijl moeten consistent worden toegepast. Iedereen die verantwoordelijk is om je huisstijl te gebruiken moet daarom makkelijk de documentatie van je huisstijl kunnen vinden. Design tokens voor je huisstijl maken helpt interne teams en leveranciers om altijd de goede kleuren en lettertypes te gebruiken.

Je wilt voorkomen dat vaak kleuren en lettertypes worden gebruikt die niet bestaan in de huisstijl, of dat goede kleuren worden gebruikt voor een verkeerde situatie. Maak documentatie voor de belangrijste kleuren, vertel in welke situatie ze gebruikt moeten worden en wanneer niet. Maak een volledig overzicht: kies ook lichtere en donkere kleurtinten en grijstinten die gebruikt mogen worden als accentkleur en tekstkleur, zodat niet elke keer verschillende kleurvariaties worden gekozen.

Begin bijvoorbeeld met een `color.tokens.json` te maken:

```json
{
  "rijkshuisstijl": {
    "color": {
      "hemelblauw": {
        "40": { "value": "hsl(203, 100%, 39%)" }
      },
      "wit": { "value": "hsl(0, 0%, 100%)" }
    }
  }
}
```

Gebruik de _prefix_ van de organistatie voor je _brand design tokens_. Voor _autocomplete_ is het handig om je kleuren te groeperen onder `color`. Je mag helemaal zelf kiezen hoe je de kleuren en kleurtinten wilt noemen. Wij kiezen meestal een afgeronde _lightness_ waarde (zoals 40 voor 39%), zodat je in de praktijk makkelijk kan inschatten of twee tinten voldoende contrast hebben.

Niet gebruik maken van huisstijl design tokens in je CSS code gebruiken helpt om componenten herbruikbaar te maken voor onze open source community.

Doe bijvoorbeeld niet dit:

```css
.rijkshuisstijl-button {
  background-color: rgb(--rijkshuisstijl-color-hemelblauw-40);
  color: var(--rijkshuisstijl-color-wit);
}
```

Maak in de design tokens JSON de link tussen jouw huisstijl en jouw component, dan is ook hergebruik van jouw component mogelijk met een andere huisstijl.

```json
{
  "rijkshuisstijl": {
    "button": {
      "background-color": { "value": "{rijkshuisstijl.color.hemelblauw.40}" },
      "color": { "value": "{rijkshuisstijl.color.wit}" }
    }
  }
}
```

De CSS thema wordt dan automatisch gemaakt met de JSON als bron:

```css
.rijkshuisstijl-theme {
  --rijkshuisstijl-color-hemelblauw-40: hsl(203, 100%, 39%);
  --rijkshuisstijl-color-wit: hsl(0, 0%, 100%);
  --rijkshuisstijl-button-background-color: rgb(--rijkshuisstijl-color-hemelblauw-40);
  --rijkshuisstijl-button-color: rgb(--rijkshuisstijl-wit);
}
```

Gebruik alleen _component design tokens_ in je CSS om jouw component herbruikbaar te maken, in andere situaties en voor andere huisstijlen.

```css
.rijkshuisstijl-button {
  background-color: rgb(--rijkshuisstijl-button-background-color);
  color: var(--rijkshuisstijl-button-color);
}
```

## Links

- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Design Tokens specificatie (concept)](https://design-tokens.github.io/community-group/format/)
- [NL Design System Themes Storybook](https://nl-design-system.github.io/themes/)
