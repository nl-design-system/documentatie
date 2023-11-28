---
title: Richtlijnen NL Design System
hide_title: true
hide_table_of_contents: false
sidebar_label: Richtlijnen
pagination_label: Richtlijnen
description: NL Design System richtlijnen
keywords:
  - wat
  - design system
  - documentatie
---

# Richtlijnen

In het NL Design System verzamelen we documentatie vanuit de community. Dit kan gebruikt worden om een project te starten of een bestaand product te optimaliseren.

## Hier vind je onder andere:

- [Richtlijnen voor stijl](stijl/kleuren)
- [Richtlijnen voor taalgebruik](tekst-en-taalgebruik)
- Richtlijnen voor toegankelijkheid en inclusie
- Onderzoeksresultaten van geteste ontwerpen

Deze documentatie wordt regelmatig bijgewerkt.

## Gebruik van partials

We gebruiken zoveel mogelijk ‘partials’: stukjes content die los zouden kunnen gebruikt, bijvoorbeeld in een ander design system, worden als partial opgeslagen (bij ons een Markdown-bestand dat met `_` begint) en dan geïmporteerd.

Voorbeeld, waarin op een pagina over fruit de informatie over appels, peren en bananen in aparte bestanden staat en geïmporteerd wordt:

```mdx
import Apple from "./_apple.md";
import Pear from "./_pear.md";
import Banana from "./_banana.md";

# Fruits

<Apple />
<Pear />
<Banana />
```

### Namen voor partials

We willen de namen liefst niet meer veranderen, en dus toekomstbestendig maken (vanuit de ‘cool URI's don't change’ gedachte).

Enkele richtlijnen:

- gebruik enkelvoud tenzij meervoud noodzakelijk is
- gebruik keywords uit HTML/CSS/SVG voor IDs/slugs/filenames
- gebruik prefixes en hiërarchie in prefixes zodat door sorteren automatisch groepjes ontstaan

Voorbeelden van namen voor label-gerelateerde partials:

```
_label-position.md
_label-text.md
_label-visibility.md
_label-no-activate.md
_label-text-visibility.md
```


### Namen voor partials

We willen de namen liefst niet meer veranderen, en dus toekomstbestendig maken (vanuit de ‘cool URI's don't change’ gedachte).

Enkele richtlijnen:

- gebruik enkelvoud tenzij meervoud noodzakelijk is
- gebruik keywords uit HTML/CSS/SVG voor IDs/slugs/filenames
- gebruik prefixes en hiërarchie in prefixes zodat door sorteren automatisch groepjes ontstaan

Voorbeelden van namen voor label-gerelateerde partials:

```
_label-position.md
_label-text.md
_label-visibility.md
_label-no-activate.md
_label-text-visibility.md
```

<!-- TODO! -->
