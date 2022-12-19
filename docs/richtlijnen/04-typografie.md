---
title: Typografie
hide_title: true
hide_table_of_contents: false
sidebar_label: Typografie
pagination_label: Typografie
description: Richtlijnen om typografie naar keuze te gebruiken voor je website
keywords:
  - typografie
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Typografie

Goede typografie helpt bij het creëren van een duidelijke hiërarchie en het ordenen van informatie. Hierdoor zijn teksten gemakkelijk te lezen en te begrijpen.

Vier belangrijke typografische overwegingen voor tekst zijn [lettergrootte](#lettergrootte), [regelafstand](#regelafstand), [regellengte](#regellengte) en [lettertype](#lettertype).

## Lettergrootte

**Zorg ervoor dat letters groot genoeg zijn.**

Gebruik een lettergrootte ofwel `font-size` die groot genoeg is voor de ‘[body text](https://en.wikipedia.org/wiki/Body_text)’, zodat mensen comfortabel kunnen lezen. Gebruik als richtlijn minimaal een lettergrootte van 16px.

**Tip!** Hoewel we `16px` aangeven als minimale `font-size` is het beter om géén gebruik te maken van ‘fixed-size units’ zoals `px`. Gebruik liever een relatieve waarde als `em` of `rem`. Waarom? Browsers bieden de mogelijkheid om de standaard `font-size` aan te passen. Handig voor iemand die slechtziend is. Wanneer je relatieve waardes gebruikt schaalt alles netjes mee. Maar een pixel blijft een pixel en zodoende verandert er niks.

**Let op!** Vanuit het NL Design System zelf kiezen we momenteel wél voor pixels. Dit komt omdat wij niet kunnen inschatten welke lettergrootte er in een website wordt toegepast.

<!-- TODO: ## Dit zou nog mogen worden aangescherpt. Misschien met een voorbeeld? -->

## Regelafstand

**Zorg voor een comfortabele regelafstand ofwel `line-height`.**

Een goed ingestelde `line-height` zorgt ervoor dat men op een vloeiende manier het einde van een regel kan koppelen aan het begin van de volgende.

<!-- TODO: ## Afbeelding -->

Standaard gebruiken browsers een `line-height` van circa `1.2`, maar voor veel mensen is tekst met een hogere `line-height` beter leesbaar. De ideale `line-height` hangt af van verschillende factoren (lettertype, lettergrootte, regellengte, etc.) maar met een `line-height` tussen `1.5` en `2.0` zit je goed. Groter dan `2.0` wordt minder leesbaar.

We gebruiken geen unit notatie zoals `px` of `pt` voor `line-height`. Dit is met opzet. Op deze manier schaalt de `line-height` keurig mee met elke lettergrootte.

**Tip!** Kleinere teksten hebben een ruimere line-height nodig. Grotere teksten zoals Kopteksten ofwel ‘Headings’ komen vaak weg met een compactere `line-height`.

**Tip!** Regelafstand wordt ook wel ‘Leading’ genoemd.

**Tip!** In Figma is het niet mogelijk om `line-height` zonder unit notatie toe te passen. Daarom maken we binnen Figma gebruik van een percentage als unit (`1.5` = `150%`). Deze vertaling wordt gedaan op basis van het JSON bestand dankzij Style Dictionary.

<!-- TODO: ## Linken naar uitleg Style Dictionary -->

## Regellengte

**Zorg voor een comfortabele regellengte ofwel ‘Line-length’.**

Maak regels niet te lang of te kort. 45-75 karakters per regel is acceptabel. Kortere regels tekst zijn prima voor bijschriften en formulieren.

<!-- TODO: ## Afbeelding -->

**Tip!** Een waarde die binnen CSS vaak over het hoofd wordt gezien is `ch`. Door je paragrafen een `max-width` van `75ch` mee te geven zorg je ervoor dat regels nooit te lang worden.

**Tip!** Om te checken of je regellengte tussen de 45 en 75 karakters valt kun je deze tekst gebruiken. De eerste asterisk (\*) bevindt zich op positie 45 en de tweede op positie 75.

```
Lorem ipsum dolor sit amet, consectetur adi * isicing elit, sed do eiusmo * tempor incididunt ut labore et dolore magna aliqua.
```

**Tip!** Regellengte wordt ook wel ‘Measure’ genoemd.

## Lettertype

**Kies een goed lettertype.**

Kies een lettertype dat de leesbaarheid van paragrafen ten goede komt. Houd bij het kiezen van een lettertype rekening met de volgende factoren:

### Typeface

Gebruik een herkenbare sans-serif of serif maar zeker geen decoratief lettertype.

<!-- TODO: ## Afbeelding -->

### x-hoogte

De x-hoogte van het lettertype zou niet te hoog moeten zijn waardoor de bijvoorbeeld de ‘h’ en de ‘n’ te veel op elkaar gaan lijken. Daarnaast zou de x-hoogte per letter consistent moeten zijn.

<!-- TODO: ## Afbeelding -->

### Letter contrast

Het letter contrast, het verschil in lijndikte van een letter, zou niet te hoog of te laag moeten zijn. Te veel contrast leidt af en door te weinig contrast gaan lettervormen op elkaar lijken.

<!-- TODO: ## Afbeelding -->

### Lettervormen

Individuele lettervormen zouden genoeg van vorm moeten verschillen waardoor ze niet met elkaar verward kunnen worden. De hoofdletter I de letter l en het cijfer 1 zouden bijvoorbeeld onderling moeten verschillen. Dacht geldt ook voor de hoofdletter O en het cijfer 0.

<!-- TODO: ## Afbeelding -->

### Letter afstand

Een combinatie van de letters 'r' en 'n' (rn)' zou een duidelijke ruimte moeten hebben om verwarring te voorkomen met letter 'm'.

**Tip!** Hier kun je via `letter-spacing` invloed op uitoefenen. Momenteel maken we hier geen gebruik van binnen het Voorbeeld thema.

<!-- TODO: ## Linken naar uitleg Voorbeeld thema -->

<!-- TODO: ## Afbeelding -->

### Tekens

Het lettertype zou alle benodigde tekens moeten ondersteunen. Denk daarbij aan speciale tekens, andere talen en stijlen (bold en/of cursief). Maar ook ‘[tabular-nums](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric)’ waardoor cijfers even breed getoond kunnen worden in tabellen en lijsten. Dit oogt fraaier en de informatie is beter te scannen en vergelijken.

<!-- TODO: ## Afbeelding -->

**Tip!** Het hebben van een ‘slashed-zero’ is handig. Zo kan men het cijfer 0 en de letter O gemakkelijk onderscheiden. Handig wanneer men voor "toon wachtwoord" kiest of bij het lezen van een code (bijvoorbeeld IBAN).

<!-- TODO: ## Afbeelding -->

### Vetgedrukt

Gebruik alleen lettertypes die zijn ontworpen voor goede leesbaarheid wanneer letters vetgedrukt ofwel `bold` zijn. Als je met CSS een eigen font gebruikt, dan moet je ook `font-weight` noemen. Gebruik in je site alleen `font-weight` waarvoor je ook echt een webfont hebt.

Je kunt dingen doen om te voorkomen dat een verkeerde `font-weight` wordt gebruikt. Maak een overzicht in je documentatie van elke `font-weight` die gebruikt kan worden in je ontwerpen. Maak een design token voor elke `font-weight` die mag, zodat de regel voor iedereen simpel is: gebruik nooit eigen `font-weight` waarde, gebruik alleen de CSS variable van deze design tokens.

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

### Eigen font-family naam voor bold of italic variant

Soms wordt een lettertype aangeleverd met CSS code waarin voor hetzelfde lettertype verschillende namen zijn gebruikt. Gebruik dan niet de naam zoals die is aangeleverd, maar pas de code aan zodat elke `@font-face` dezelfde `font-family` heeft.

**Niet:**

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

Sommige gebruikers kiezen ervoor om alle tekst op hun scherm vetgedrukt te maken. In plaats van een beter leesbare pagina, krijgen zij door bovenstaande code een automatische bold variant van `GovernmentFont` in tegenstelling tot de speciaal ontworpen `GovernmentFontBold`.

**Wel:**

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

Op deze manier ontloop je het risico dat gebruikers minder leesbare teksten krijgen te zien door _faux italic_ of _faux bold_ letters, of nog erger: een vetgedrukt lettertype dat met _faux bold_ nog eens extra vetgedrukt wordt. Bovendien heb je zo duidelijkere code.

### Variabele lettertypes

Variabele lettertypes zijn een relatief nieuw concept binnen de wereld van typografie. Bij een variabele lettertype heb je één lettertype bestand dat meerdere stilistische variaties aan kan. Gewicht, breedte, stijl, optische grootte, etc. kunnen worden gemanipuleerd of aangepast.

Bij een variabele lettertype hoeft er maar één bestand geladen te worden. Dit kan de laadsnelheid van je website bevorderen.

### Aantal lettertypes

Beperk hoeveel lettertypes en lettertype variaties je gebruikt. Één of twee is voldoende.

## Overig

### Voorkeursinstellingen

Vergeet niet dat men mogelijk voorkeursinstellingen heeft toegepast.

Zo zijn er mensen die…

- ervoor kiezen om alle tekst op hun scherm vetgedrukt te maken.
- tekst lezen door middel van een automatische vertaling, in bijvoorbeeld Grieks, Cyrillisch, Arabisch of Aziatisch schrift.
- tekst lezen met extra grote letters.
- tekst lezen met extra grote regelafstand.
- tekst lezen met extra grote afstand tussen woorden.
- tekst lezen zonder een gedownload lettertype te gebruiken.
- tekst lezen met een eigen lettertype.

### ‘Justified’ tekst

Gebruik geen ‘Justified’ tekst ofwel ‘gatenkaas’. Het ziet er niet uit en iemands oog moet onlogische sprongen maken om bij een volgend woord aan te komen.

### Gecentreerde tekst

Probeer het gebruik van gecentreerde tekst tot een minimum te beperken. Hooguit voor een kort tekstje. Net als bij ‘Justified’ tekst moet iemands oog onlogische sprongen maken om bij het eerst woord van de volgende regel aan te komen.

<!-- TODO: ## Cursief, ofwel `italic` -->

### ALL CAPS tekst

Probeer het gebruik van ‘ALL CAPS’ tot een minimum te beperken. We herkennen letters aan hun vorm en dan met name de bovenkant van een letter. Eigenlijk maakt je oog steeds sprongetjes aan de bovenkant van een woord. Bij all caps is het onderscheid in lettervorm minder duidelijk, dit vertraagt het lezen.

Indien je in de HTML all caps gebruikt lezen screenreaders dit vaak voor als losse letters. Geen probleem bij bijvoorbeeld FBI of NBA maar bij ‘VOER JE NAAM IN’ wordt dat wel heel vreemd. Mocht je toch tekst in all caps willen tonen gebruik dan CSS.

Daarnaast geeft het ook een gevoel van ‘schreeuwen’. Over het algemeen niet het gevoel dat je wilt overbrengen op de lezer toch… TOCH?!

### Onderstreepte tekst

Onderstreep tekst niet, bewaar onderstrepen voor links.

### Anti-aliasing

Gebruik geen `font-smoothing`. Gebruikers hebben zeer uiteenlopende types beeldschermen, browsers en besturingssystemen. Hoe letters op jouw scherm worden getoond, is anders dan bij veel anderen. Wanneer `font-smoothing` goed werkt voor jouw beeldscherm, betekend het niet automatisch dat dat bij iedereen zo is.

Gebruik `font-smoothing` ook niet om de dikte van de tekst te optimaliseren, vertrouw op de instellingen van de gebruiker en laat `font-smoothing: auto` het werk doen. Wanneer het nodig is om miniscule aanpassingen te doen aan, gebruik dan een modern lettertype dat als _variable font_ geleverd wordt.

Alleen als je een _pixel font_ gebruikt mag je daar `font-smoothing: none` voor gebruiken.

**Niet:**

```css
:root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Wel:**
Verwijder alle code om `font-smoothing` aan te passen. Zit de code in een externe library waar je niet makkelijk enkele regels kunt verwijderen? Dan kun je misschien CSS toevoegen om het ongedaan te maken.

```css
:root {
  -webkit-font-smoothing: auto !important;
  -moz-osx-font-smoothing: auto !important;
}
```

### Koppen

Gebruik koppen ofwel 'Headings' om hiërarchie te communiceren. Zorg ervoor dat headings verschillen van body text door een combinatie van grootte, gewicht (bijvoorbeeld ‘vetgedrukt’), lettertype en/of kleur. Headings bieden de uitgelezen mogelijkheid om branding door te laten vloeien binnen een webpagina.

## Meer informatie

### Gerelateerde WCAG Richtlijnen

- https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html
- https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html

### Links

- https://webaim.org/techniques/fonts/
- https://practicaltypography.com/
- https://fonts.google.com/knowledge
- https://baymard.com/blog/line-length-readability
- https://web.dev/variable-fonts/
- https://abookapart.com/products/on-web-typography
- https://alistapart.com/article/say-no-to-faux-bold

---

## Help deze documentatie te verbeteren

Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via Github.

## Vragen?

Heb je een vraag? Twijfel niet en [neem contact op met het kernteam](https://www.nldesignsystem.nl/meedoen/contact/).
