<!-- @license CC0-1.0 -->

Kies een lettertype ofwel ‘Typeface’ dat de leesbaarheid van paragrafen ten goede komt. Houd bij het kiezen van een lettertype rekening met de volgende factoren:

## Herkenbaarheid

Gebruik een sans-serif of serif lettertype met herkenbare lettervormen. Gebruik geen decoratief lettertype.

![Paragrafen met verschillende lettertypes. De eerste sans-serif, de tweede serif, de derde decoratief. Bij de derde paragraaf staat een rood kruis.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_lettertype.png)

## x-hoogte

x-hoogte is de hoogte van een kleine letter x voor een bepaald lettertype. Over het algemeen zorgt een hoge x-hoogte voor een betere leesbaarheid. Maar de x-hoogte van het lettertype zou ook weer niet te hoog moeten zijn. Hierdoor zouden bijvoorbeeld de ‘h’ en de ‘n’ te veel op elkaar gaan lijken. Daarnaast zou de x-hoogte per letter consistent moeten zijn.

![Afgebeeld zijn de letters 'n' en 'h' met lettertype Futura, Roboto en Impact. Futura heeft een lage x-hoogte, Roboto gemiddeld tot hoog, Impact zeer hoog. Bij het Impact voorbeeld staat een rood kruis.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_x-hoogte.png)

## Lettercontrast

Lettercontrast verwijst naar de verschillen in lijndikte van een letter. Hoog contrast trekt de aandacht, en kan goed werken voor koppen maar kan vermoeiend zijn voor langere teksten. Gemiddeld tot laag contrast zorgt voor een gelijkmatig leesritme en betere leesbaarheid. Dit bevordert vloeiend lezen, omdat letters minder afleiden. Te laag contrast kan echter de leesbaarheid verminderen omdat letters op elkaar gaan lijken. Uiteindelijk gaat het om een goede balans tussen contrast en leesbaarheid.

![Afgebeeld is de letter 'o' met lettertypes Helvetica, PT Serif en Bodoni Moda. Helvetica heeft een te laag letter contrast, PT Serif heeft een gemiddeld letter contrast, Bodoni Moda heeft te hoog letter contrast. Bij het Helvetica en Bodoni Moda voorbeeld staat een rood kruis.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_letter-contrast.png)

## Lettervormen

Individuele lettervormen zouden genoeg van vorm moeten verschillen waardoor ze niet met elkaar verward kunnen worden. De hoofdletter I de letter l en het cijfer 1 zouden bijvoorbeeld onderling moeten verschillen. Dat geldt ook voor de hoofdletter O en het cijfer 0.

![Afgebeeld zijn hoofdletter 'i' letter 'l' en cijfer '1' met lettertype Merriweather, Noto Sans en Inter. Merriweather en Noto Sans tonen een verschil in lettervorm. Bij Inter zijn hoofdletter 'i' letter 'l' gelijkwaardig in vorm. Bij het Inter voorbeeld staat een rood kruis.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_lettervormen.png)

## Letterafstand

Een combinatie van de letters 'r' en 'n' (rn)' zou een duidelijke ruimte moeten hebben om verwarring te voorkomen met letter 'm'. Hier kun je via `letter-spacing` invloed op uitoefenen. Momenteel maken we hier geen gebruik van binnen het Start-thema.

![De letters 'r' en 'n' zijn twee keer afgebeeld. Bij heeft eerste voorbeeld is er voldoende letter afstand. Bij het tweede voorbeeld is er te weinig letter afstand. Bij het tweede voorbeeld staat een rood kruis.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_letter-afstand.png)

## Tekens

Het lettertype zou alle benodigde tekens moeten ondersteunen. Denk daarbij aan speciale tekens, andere talen en stijlen (bold en/of cursief). Maar ook ‘[tabular-nums](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric)’ waardoor cijfers even breed getoond kunnen worden in tabellen en lijsten. Dit oogt fraaier en de informatie is beter te scannen en vergelijken.

![Er staan twee keer twee duizendtallen boven elkaar. Bij het eerste voorbeeld wordt er geen gebruik gemaakt van tabular-nums waardoor de de positie van de punt per duizendtal verschilt. Bij het tweede voorbeeld is er wel gebruik gemaakt van tabular-nums waardoor de punt bij beide duizendtallen op dezelfde plek staat.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_tabular-nums.png)

Het hebben van een ‘slashed-zero’ is handig. Zo kan men het cijfer 0 en de letter O gemakkelijk onderscheiden. Handig wanneer men voor "toon wachtwoord" kiest of bij het lezen van een code (bijvoorbeeld IBAN).

![Afgebeeld is twee keer het getal 67.890. Bij het eerste voorbeeld wordt er geen gebruik gemaakt van een slashed zero. Bij het twee voorbeeld wel.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_typografie_slashed-zero.png)

#### Vetgedrukt

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

#### Eigen `font-family` naam voor bold of italic variant

Soms wordt een lettertype aangeleverd met CSS-code waarin voor hetzelfde lettertype verschillende namen zijn gebruikt. Gebruik dan niet de naam zoals die is aangeleverd, maar pas de code aan zodat elke `@font-face` dezelfde `font-family` heeft.

**Niet doen:**

```css
/* Niet gebruiken is foute code */
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

**Wel doen:**

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

## Anti-aliasing

Gebruik geen `font-smoothing`. Gebruikers hebben zeer uiteenlopende types beeldschermen, browsers en besturingssystemen. Hoe letters op jouw scherm worden getoond, is anders dan bij veel anderen. Wanneer `font-smoothing` goed werkt voor jouw beeldscherm, betekent het niet automatisch dat dat bij iedereen zo is.

Gebruik `font-smoothing` ook niet om de dikte van de tekst te optimaliseren, vertrouw op de instellingen van de gebruiker en laat `font-smoothing: auto` het werk doen. Wanneer het nodig is om minuscule aanpassingen te doen aan, gebruik dan een modern lettertype dat als _variable font_ geleverd wordt.

Alleen als je een _pixel font_ gebruikt mag je daar `font-smoothing: none` voor gebruiken.

**Niet doen:**

```css
/* Niet gebruiken is foute code */
:root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Wel doen:**
Verwijder alle code om `font-smoothing` aan te passen. Zit de code in een externe library waar je niet makkelijk enkele regels kunt verwijderen? Dan kun je misschien CSS toevoegen om het ongedaan te maken.

```css
:root {
  -webkit-font-smoothing: auto !important;
  -moz-osx-font-smoothing: auto !important;
}
```

## Variabele lettertypes

Variabele lettertypes zijn een relatief nieuw concept binnen de wereld van typografie. Bij een variabele lettertype heb je één lettertype bestand dat meerdere stilistische variaties aan kan. Gewicht, breedte, stijl, optische grootte, etc. kunnen worden gemanipuleerd of aangepast.

Bij een variabel lettertype hoeft er maar één bestand geladen te worden. Dit kan de laadsnelheid van je website bevorderen.

## Aantal lettertypes

Beperk hoeveel lettertypes en lettertype variaties je gebruikt. Één of twee is voldoende.

## Lettertypes die voldoen aan de NL Design System richtlijnen

Enkele Open Source lettertypes die voldoen aan de richtlijnen.

- [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible)
- [Fira Sans](https://fonts.google.com/specimen/Fira+Sans)
- [iA Writer Quattro](https://github.com/iaolo/iA-Fonts)
- [IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif)
- [Lexend](https://fonts.google.com/specimen/Lexend)
- [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans)
- [Noto Serif](https://fonts.google.com/noto/specimen/Noto+Serif)
- [Public Sans](https://fonts.google.com/specimen/Public+Sans) (helaas geen 
- [Roboto Serif](https://fonts.google.com/specimen/Roboto+Serif)
- [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3)
- [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4)
- [Work Sans](https://fonts.google.com/specimen/Work+Sans)

Ken jij een Open Source lettertype dat voldoet aan de richtlijnen? [Neem contact op met het kernteam](/project/kernteam) dan vullen we de lijst verder aan.
