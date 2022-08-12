---
title: Typografie
hide_title: true
hide_table_of_contents: false
sidebar_label: Typografie
pagination_label: Typografie
description: Tips om een lettertype naar keuze te gebruiken voor je website
keywords:
  - typografie
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Typografie

## Verschillen in welk lettertype gebruikers zien

- Sommige gebruikers kiezen om alle tekst op hun scherm vet te maken.
- Sommige gebruikers lezen een automatische vertaling van de tekst, in bijvoorbeeld Grieks, Cyrillisch, Arabisch of Aziatisch schrift.
- Sommige gebruikers lezen de tekst met extra grote letters.
- Sommige gebruikers lezen de tekst met extra grote regelafstand.
- Sommige gebruikers lezen de tekst zonder een gedownload lettertype te gebruiken.
- Sommige gebruikers lezen de tekst met een eigen lettertype.

## Vetgedrukt, ofwel `bold`

Gebruik alleen lettertypes die zijn ontworpen voor goede leesbaarheid met vette letters. Als je met CSS een eigen font gebruikt, dan moet je ook `font-weight` noemen. Gebruik in je site alleen `font-weight` waarvoor je ook echt een webfont hebt.

Je kunt dingen doen om te voorkomen dat een verkeerde `font-weight` wordt gebruikt. Maak een overzicht in je documentatie van elke `font-weight` die gebruikt kan worden in je ontwerpen. Maak een design token voor elke `font-weight` die mag, zodat je de regel voor iedereen simpel is: gebruik nooit eigen `font-weight` waarde, gebruik alleen de CSS variable van deze design tokens.

Bijvoorbeeld, je kunt deze design tokens hebben:

- `example.typography.light.font-weight`: 300
- `example.typography.normal.font-weight`: 400
- `example.typography.semi-bold.font-weight`: 500
- `example.typography.bold.font-weight`: 700

Dan gebruik je CSS variables die verwijzen naar de design token, in plaats van direct `font-weight: 500`:

```css
h3 {
  font-weight: var(--example-typography-semi-bold-font-weight);
}
```

## Cursief, ofwel `italic`

## Letter spacing

## Line height

Stel met `line-height` voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Gebruik het liefst een `line-height` tussen `1.5` en `2.0`. Standaard gebruiken browsers circa `1.2`, maar `1.5` is voor veel gebruikers beter leesbaar. Voor WCAG 1.4.8 is het ook belangrijk om `1.5` of groter aan te bieden. Groter dan `2.0` wordt minder leesbaar.

- [WCAG 1.4.8](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Hoe het niet moet

### Anti-aliasing aanpassen

Gebruikers hebben zeer uiteenlopende types beeldschermen, browsers en besturingssystemen. Hoe letters op jouw scherm worden getoond, is anders dan bij veel anderen. Als jouw `font-smoothing` aanpassingen goed werken op jouw beeldscherm, heb je nog lang niet getest hoe de aanpassing bij veel anderen eruit ziet.

Gebruik geen `font-smoothing` in CSS om bijvoorbeeld de dikte van de tekst te optimaliseren, vertrouw op de instellingen van de gebruiker en laat `font-smoothing: auto` het werk doen. Wanneer het nodig is om miniscule aanpassingen te doen aan, gebruik dan een modern lettertype dat als _variable font_ geleverd wordt.

Alleen als je een _pixel font_ gebruikt mag je daar `font-smoothing: none` gebruiken.

Niet:

```css
:root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

Wel: verwijder alle code om `font-smoothing` aan te passen. Zit de code in een externe library waar je niet makkelijk enkele regels kunt verwijderen, dan kun je misschien CSS toevoegen om het ongedaan te maaken:

```css
:root {
  -webkit-font-smoothing: auto !important;
  -moz-osx-font-smoothing: auto !important;
}
```

### Eigen `font-family` naam voor bold of italic variant

Soms wordt een lettertype aangeleverd met CSS code waarin voor hetzelfde lettertype verschillende namen zijn gebruikt. Gebruik dan niet de naam zoals die is aangeleverd, maar pas de code aan zodat elke `@font-face` dezelfde `font-family` heeft.

Gebruik niet:

```css
@font-face {
  font-family: GovernmentFont;
  font-weight: normal;
  src: url("GovernmentFont.woff2");
}

@font-face {
  font-family: GovernmentFontBold;
  font-weight: bold;
  src: url("GovernmentFontBold.woff2");
}

:root {
  font-family: GovernmentFont;
}

h1 {
  font-family: GovernmentFontBold;
}
```

Sommige gebruikers kiezen om alle tekst op hun scherm vet te maken. In plaats van een beter leesbare pagina, krijgen ze door bovenstaande code een automatische bold variant van `GovernmentFont` in plaats van de speciaal ontworpen `GovernmentFontBold`.

Wel:

```css
@font-face {
  font-family: GovernmentFont;
  font-weight: normal;
  src: url("GovernmentFont.woff2");
}

@font-face {
  font-family: GovernmentFont;
  font-weight: bold;
  src: url("GovernmentFontBold.woff2");
}

:root {
  font-family: GovernmentFont;
}

dt {
  font-weight: bold;
}
```

Op deze manier loop je niet het risico dat gebruikers minder leesbare teksten zien door _faux italic_ of _faux bold_ letters, of nog erger: een vet lettertype dat met _faux bold_ nog extra vet wordt. Bovendien heb je zo duidelijkere code.

## Links

- [Say No to Faux Bold, by Alan Stearns](https://alistapart.com/article/say-no-to-faux-bold/)
- [On Link Underlines, by Adrian Roselli](https://adrianroselli.com/2016/06/on-link-underlines.html)
