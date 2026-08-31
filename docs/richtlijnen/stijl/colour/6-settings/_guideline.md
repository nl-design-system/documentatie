<!-- @license CC0-1.0 -->

Vergeet niet dat men mogelijk voorkeursinstellingen heeft toegepast.

Voorbeelden van voorkeursinstellingen:

## Aangepast kleurenthema

Sommige mensen bekijken webpagina’s liever in een donker (dark-mode) of juist licht kleurenthema (light-mode). Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem.

Door de media query [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is dit te detecteren en kun je deze mensen een donker kleuren thema aanbieden.

## Aangepast contrast

Sommige mensen bekijken webpagina’s liever met meer of juist minder contrast. Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem.

Door de media query [`prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) is dit te detecteren en kun je deze mensen een passend kleurenthema aanbieden. Maar ze zouden ook gebruik kunnen maken van [Windows high contrast mode](https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696).

![Afgebeeld zijn drie schermen met dezelfde inhoud. Het eerste voorbeeld toont een lichte modus. Het tweede voorbeeld toont een donkere modus. Het derde voorbeeld tot een hoog contrast voorbeeld.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_kleuren_voorkeursinstellingen.png)

### Contrastthema's in Windows en systeemkleuren

In Windows high contrast mode kunnen gebruikers systeemkleuren instellen. Deze kleuren worden dan gebruikt voor het hele besturingssysteem en alle programma's die daarop draaien. Er zijn 4 vooraf ingestelde contrastthema's beschikbaar. Door een thema te bewerken, kan een gebruiker zijn of haar voorkeursinstellingen opslaan in een nieuw thema.

Binnen een thema kan een bezoeker 8 kleuren kiezen:

- Achtergrond
- Tekst
- Hyperlink
- Inactieve tekst
- Knop (tekstkleur)
- Knop (achtergrondkleur)
- Geselecteerde tekst (tekstkleur)
- Geselecteerde tekst (achtergrondkleur)

Als een gebruiker high contrast modus heeft ingeschakeld, past de browser deze kleuren automatisch toe op alle websites. Met de media query [`forced-colors: active`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors) kun je rekening houden met bezoekers die hier gebruik van maken, bijvoorbeeld door te zorgen dat belangrijke informatie niet verloren gaat wanneer de browser kleuren overschrijft.

In CSS kun je de namen van systeemkleuren ([`system-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/system-color)) gebruiken. In deze tabel lees je welke Windows systeemkleur daaraan gekoppeld is:

| CSS system-color naam | Naam in contrastthema                     |
| --------------------- | ----------------------------------------- |
| AccentColor           | Geselecteerde tekst (achtergrondkleur)    |
| AccentColorText       | Achtergrond                               |
| ActiveText            | Hyperlink                                 |
| ButtonBorder          | Knop (tekstkleur)                         |
| ButtonFace            | Knop (achtergrondkleur)                   |
| ButtonText            | Knop (tekstkleur)                         |
| Canvas                | Achtergrond                               |
| CanvasText            | Tekst                                     |
| Field                 | Achtergrond                               |
| FieldText             | Chrome: Tekst, Firefox: Knop (tekstkleur) |
| GrayText              | Inactieve tekst                           |
| Highlight             | Geselecteerde tekst (achtergrondkleur)    |
| HighlightText         | Geselecteerde tekst (tekstkleur)          |
| LinkText              | Hyperlink                                 |
| Mark                  | Hyperlink                                 |
| MarkText              | Achtergrond                               |
| SelectedItem          | Geselecteerde tekst (achtergrondkleur)    |
| SelectedItemText      | Geselecteerde tekst (tekstkleur)          |
| VisitedText           | Hyperlink                                 |

In sommige gevallen gebruikt een browser een andere kleur dan een ingestelde systeemkleur:

- Voor SelectedItem gebruikt Chrome een eigen kleur, afhankelijk van welk Chrome-thema de gebruiker heeft ingesteld.
- Voor VisitedText gebruikt Firefox een eigen kleur, afhankelijk van welk Firefox-thema de gebruiker heeft ingesteld.
