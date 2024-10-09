---
title: Ruimte | Richtlijnen
hide_title: true
hide_table_of_contents: false
sidebar_label: Ruimte
sidebar_position: 3
pagination_label: Ruimte
description: Richtlijnen voor ruimte
keywords:
  - ruimte
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Ruimte

Ruimte (‘Spacing’ in het Engels) helpt bij het organiseren van inhoud. Door ruimte op een voorspelbare manier toe te passen kun je visueel verbanden leggen en orde scheppen. Dit geldt voor componenten maar ook voor de algehele opmaak van een pagina ofwel ‘layout’.

## Spacing scale

### Maak gebruik van een spacing scale.

Om ruimte consistent toe te passen is het verstandig om te werken met een vaste set aan waardes die oplopen in grootte. Een zogenoemde ‘spacing scale’. Een spacing scale start met kleine waardes. Hiermee kun je relaties creëren op detailniveau. Vervolgens loopt de spacing scale, vaak met steeds grotere spongen, op naar waardes die ingezet kunnen worden voor een ruimere opzet.

![13 losse blokjes die steeds breeder worden. Onder elk blok staat een getal](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_spacing-scale.png)

Ook bij het Voorbeeld thema maken we gebruik van een spacing scale. Sterker nog, we hebben meerdere spacing scales. Één voor elk [spacing concept](#spacing-concepten).

## Box model

### Werk en denk vanuit het box model.

De [spacing concepten](#spacing-concepten) van het NL Design System zijn gebouwd rond het fundamentele layout-principe van CSS, ook wel bekend als het ‘box model’.

Alle elementen van een webpagina staan in een box, een rechthoek die het element omsluit.

![Box model structuur met een grotere box die de margin vertegenwoordigt rond een kleinere box die de content voorstelt met zijn padding en border.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_box-model.png)

#### Content

Inhoud ofwel ‘Content’ is de ruimte voor tekst, een plaatje of andere elementen.

#### Padding

Padding is de ruimte tussen de content en de border. Zonder padding zou de border strak om de content zitten. Padding heeft dezelfde achtergrondkleur als de content.

#### Border

De border is de rand om de content.

#### Margin

Marge ofwel ‘Margin’ is het deel buiten de border van de box. Margin zorgt voor ruimte tussen aangrenzende boxen. Margin is transparant, heeft geen eigen kleur. Margin draagt niet bij aan de breedte van een element.

## Spacing concepten

### Maak gebruik van de spacing concepten.

Binnen het NL Design System is ruimte conceptueel opgezet door vijf herbruikbare spacing scales: Inline, Block, Text, Column en Row. Deze ‘spacing concepten’ worden met behulp van Design Tokens toegepast op alle componenten en templates.

Let wel; gebruik 'Spacing' design tokens enkel voor ruimte binnen en tussen componenten. Gebruik 'Sizing' design tokens voor de grootte van elementen.

#### Inline

Inline tussenruimte is de ruimte binnen componenten, voor of na tekst.

Gebruik de ‘Inline’ spacing scale om binnen componenten ruimte te creëren voor of na tekst. In CSS kun je de volgende properties gebruiken:

- margin-inline-start
- margin-inline-end
- padding-inline-start
- padding-inline-end

![Spacing scale met verticaal 10 blokjes. In elk blokje staat de tekst 'label'. Links en rechts van de tekst staan lichtroze vlakken. De vlakken worden per blokje breeder.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-inline.png)

#### Block

Block tussenruimte is de ruimte binnen componenten, boven of onder tekst.

Gebruik de ‘Block’ spacing scale om binnen componenten ruimte te creëren boven of onder tekst. In CSS kun je de volgende properties gebruiken:

- margin-block-start
- margin-block-end
- padding-block-start
- padding-block-end

![Spacing scale met horizontaal 10 blokjes. In elk blokje staat de tekst 'label'. Boven en onder de tekst staan roze vlakken. De vlakken worden per blokje hoger.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-block.png)

#### Text

Text tussenruimte is de ruimte binnen componenten, tussen tekst en iconen.

Gebruik de ‘Text’ spacing scale om binnen componenten ruimte te creëren tussen verschillende teksten of iconen.

![Spacing scale met verticaal 10 blokjes. In elk blokje staat een kalender icoon en de tekst 'label'. Tussen het icoon en de tekst staan groene vlakken. De vlakken worden per blokje breeder.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-text.png)

#### Column

Column tussenruimte is de horizontale ruimte tussen componenten.

Gebruik de ‘Column’ spacing scale om horizontaal ruimte te creëren tussen componenten. In CSS kun je de volgende properties gebruiken:

- margin-inline-start
- margin-inline-end
- padding-inline-start
- padding-inline-end

![Spacing scale met verticaal 2 kolommen van 10 blokjes. In elk blokje staat de tekst 'label'. Per twee blokjes is er hotizontaal een lichtblauw vlak De vlakken worden per blokje breeder.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-column.png)

#### Row

Row tussenruimte is de verticale ruimte tussen componenten.

Gebruik de ‘Row’ spacing scale om verticaal ruimte te creëren tussen componenten. In CSS kun je de volgende properties gebruiken:

- margin-block-start
- margin-block-end
- padding-block-start
- padding-block-end

![Spacing scale met horizontaal 2 rijen van 10 blokjes. In elk blokje staat de tekst 'label'. Per twee blokjes is er verticaal een blauw vlak. De vlakken worden per blokje hoger.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-row.png)

Met deze spacing concepten kun je alle componenten op een consistente manier van ruimte voorzien. Denk bijvoorbeeld aan een ‘Card’ of de ruimte tussen de elementen in een formulier.

![Twee card componenten. Bij de eerste card component zijn door middel van kleurvlakken de ruimtes aangeduid.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_card.png)

![Twee korte formulieren. Bij het eerste formulier zijn door middel van kleurvlakken de verticale ruimtes aangeduid.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_form.png)

## Ontwerpen met ruimte

### Relaties

#### Gebruik ruimte om relaties te creëren tussen elementen.

Gebruik kleine afstanden om elementen samen te groeperen en grotere afstanden om ze te scheiden. Elementen die dicht bij elkaar staan lijken meer met elkaar verbonden te zijn dan dingen die verder uit elkaar staan.

Dit is een van de [Gestalt principes](https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/) ookwel bekend als [Law of proximity](https://lawsofux.com/law-of-proximity/).

![36 stippen. Door een ruimte wordt er een groepje van 24 en 12 stippen gemaakt.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_relaties.png)

#### Relaties binnen typografie

De ruimte tussen een voorgaande sectie en een koptekst moet groter zijn dan de ruimte tussen de koptekst en de eerste alinea na die koptekst.

![Screenshot van een artikel. Duidelijk is dat de witruimte boven kopteksten groter is dan onder de kopteksten.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_relaties-typografie.png)

[WCAG-succescriterium 1.4.8 Visuele weergave](/wcag/1.4.8) beschrijft dat de regelafstand van een alinea ten minste 1.5 zou moeten zijn. En dat de afstand tussen alinea’s ten minste 1,5 keer zo groot zou moeten zijn als de regelafstand.

### Hiërarchie

#### Gebruik ruimte om hiërarchie te creëren tussen elementen.

Gebruik ruimte om belangrijke elementen extra attentiewaarde mee te geven. Elementen met meer ruimte hebben ogen belangrijker dan elementen die minder ruimte om zich heen hebben.

![Vier stippen in vier vlakken. Er is 1 vlak dat meer witruimte heeft waardoor deze meer opvalt.](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_hierarchie.png)

### Ruim of Compact

#### Stem het gebruik van ruimte af op de functie en inhoud van de dienst.

Veel ruimte werkt goed bij het lezen van langere teksten en het creëren van een bepaalde sfeer (branding). Compacte ruimte is geschikt voor het efficiënt uitvoeren van taken. Denk bijvoorbeeld aan pagina’s met veel data in tabellen.

![Twee schematische weergaves van een interface. De eerste is ruim opgezet met een groot vlak en tekst. De tweede is compact met een tabel](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_purpose.png)

Informatie die te compact wordt gepresenteerd kan moeilijk te verwerken zijn voor gebruikers. Zorg er daarom voor dat de layout van de pagina voldoende witruimte heeft.

### Ruimte tussen interactieve elementen

#### Reserveer ruimte tussen interactieve elementen.

Hoewel WCAG wel een richtlijn heeft voor target size. Wordt er niks vermeld over ruimte tussen interactieve elementen. Toch is het aan te raden om tussen interactieve elementen wat ruimte te reserveren. Op die manier neemt de kans om onbedoeld iets te activeren af.

Voor iemand met een bevende hand kan een website lastiger te gebruiken zijn als grote delen van het scherm interactief (button of link) zijn.

![Drie verticaal gestapelde vlakken met daarin het woord 'Interactie element'. Tussen deze vlakken bevindt zich een lege ruimte met de tekst 'witruimte'](https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_interactieve-elementen.png)

## Meer informatie

### Gerelateerde WCAG Richtlijnen

- [WCAG-succescriterium 1.4.8 Visuele weergave](/wcag/1.4.8).
- [Use White Spacing - Supplemental Guidance to WCAG 2](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o3p10-whitespace/).

### Links

[Visual Perception And The Principles Of Gestalt - Steven Bradley](https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/)<br/>
Artikel waarin de verschillende gestalt principes worden beschreven.

[Space in design systems - Nathan Curtis](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)<br/>
Artikel waarin het toepassen van ruimte binnen een design system wordt beschreven.

[Hand tremors and the giant-button-problem - Hampus Sethfors](https://axesslab.com/hand-tremors/)<br/>
Artikel, en video, waarin duidelijk wordt waarom het van belang is om voldoende witruimte bij grote interactieve elementen toe te voegen.

---

## Over deze richtlijnen

Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in _beta_.

We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? [Deel je mening op GitHub](https://github.com/nl-design-system/documentatie/discussions/473) met je suggesties.
