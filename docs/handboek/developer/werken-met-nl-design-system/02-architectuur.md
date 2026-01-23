---
title: Architectuur · Developer · Handboek
hide_title: true
hide_table_of_contents: false
sidebar_label: Architectuur
pagination_label: Architectuur
description: NL Design System architectuur
---

# Jouw project inrichten op de NL Design System architectuur

Twee teams bij verschillende organisaties werken deze periode voor hun eigen doeleinden aan NL Design System componenten. De ontwikkelingen zijn ver genoeg gevorderd dat ze de komende twee weken gebruik gaan maken van elkaars componenten. Binnenkort sluiten meer teams aan. Daarna komen de componenten één voor één beschikbaar voor Rijkshuisstijl en voor projecten voor Gemeente Amsterdam. Hoe kunnen ze zo succesvol samenwerken, terwijl ze technisch andere eisen hebben? Hoe kunnen projecten samenwerken en ook een helemaal eigen visueel ontwerp realiseren?

De NL Design System architectuur is bedacht om organisaties die op het eerste gezicht weinig raakvlakken hebben, mogelijkheid te bieden samen te werken aan uitdagingen die om veel tijd en expertise vragen, zoals toegankelijke websites maken en teams binnen één organisatie laten werken met hun framework naar keuze.

Wij vroegen organisaties die al aan hun eigen design system werken of ze hun websites willen en kunnen bouwen met open source componenten die al door andere overheden worden gedeeld. De meeste organisaties hadden wensen waar het bestaande aanbod nog niet goed in voorzag.

**Hergebruik in uiteenlopende technieken:** Het eerste struikelblok is dat er qua techniek vaak geen gemene deler is: de organisatie zelf ontwikkelt bijvoorbeeld in het framework Angular, terwijl de open source teams werken met React en styled-components waardoor geen aansluiting mogelijk is.

**Doorlooptijd voor nieuwe componenten:** Een tweede bezwaar dat genoemd wordt: op het moment dat je voor je project een nieuw onderdeel wil toevoegen dat een intern team gauw nodig heeft, dan is het proces om de hele community daarbij te betrekken een te grote vertraging. Je wilt nog wel werk gedaan krijgen en niet alleen moeten overleggen met andere teams.

**Hergebruik voor andere huisstijlen:** Zonder ingrijpende wijzigingen van een open source component heb je bovendien nog een drempel: als je een _component_ van bijvoorbeeld Gemeente Amsterdam gebruikt, dan ziet jouw website er automatisch een beetje uit zoals de website van Amsterdam. Om jouw eigen huisstijl te realiseren op basis van een component van een ander, moet je vaak een kopie maken en zelf naar eigen smaak doorontwikkelen.

Het veelgehoorde argument om een open source project te gebruiken vanwege de "grote community" zodat je toegang hebt tot veel kennis en support op internet, gaat niet meer op wanneer je een kopie moet maken. Die kopie is al gauw achterhaald ten opzichte van de ontwikkelingen van een groot open source project. Je wilt juist werken met een centraal open source project waar je een verbetering aan kan toevoegen wanneer je die zelf nodig hebt, waar vervolgens de hele community van kan profiteren. Maar daarna gaan de ontwikkelingen gewoon door, en jouw verbetering blijft doorleven in het project.

We vroegen deze organisaties ook of ze hun eigen design system werk uit Git als open source op internet wilden zetten. Veelgenoemd bezwaar was: onze componenten zijn niet "algemeen" genoeg, daar hebben anderen toch niets aan! Ook: wij hebben helemaal geen tijd om allemaal bijdragen van vrijwilligers te beoordelen in ons project. En wat als ze bugs veroorzaken?!

Wij hebben geluisterd naar alle wensen en dit jaar zijn we begonnen met enkele teams om een architectuur te beproeven die bovenstaande wensen mogelijk moet maken.

## Design Tokens voor CSS

Het uiterlijk van websites wordt geprogrammeerd met CSS, een taal waarin kleuren, lettertypes, witruimte en vlakverdeling van websites worden ingesteld. Met de NL Design System architectuur wordt de CSS opgedeeld in verschillende lagen: de onderste laag gaat over componenten en kan hergebruikt worden voor andere huisstijlen en andere teams. De bovenste laag bevat de kenmerken van de huisstijl van een organisatie: deze laag wordt in software vaak een "thema" genoemd. De laag in het midden is de lijm die het mogelijk maakt: de design tokens van NL Design System.

Een design token is een kleine eigenschap van je visueel ontwerp, zoals een kleur of een lettertype. Elke huisstijl bestaat uit kleurenpalet en één of meerdere lettertypes: dit noemen wij _brand identity design tokens_, maar we korten het vaak af als "_brand tokens_". Deze design tokens zijn er om de herkenbaarheid van je websites te waarborgen. Meestal is het de bedoeling dat geen kleuren of lettertypes worden gebruikt die niet een officiële design token zijn.

Meestal wordt CSS geschreven op een manier dat deze kleuren en lettertypes in elke uithoek van de code voorkomen, zodat elke component aan de huisstijl voldoet. Uit onze rondvraag bleek dat al die huisstijl-specifieke code een belangrijke belemmering is om samen te werken aan code van een andere organisatie. Daarom vervangen onze teams al deze kleuren in hun code door CSS variabelen van NL Design System. De naam "variabele" zegt het al: de kleur of lettertype wordt afhankelijk van de website waarin je de component gebruikt.

Front-end developers zullen zich inmiddels afvragen: hoe ziet dat er uit in de code? Hier bijvoorbeeld twee "brand tokens" voor Rijkshuisstijl, uit de bovenste laag:

```css
:root {
  --rijkshuisstijl-color-hemelblauw-basis: hsl(203deg 100% 39%);

  --rijkshuisstijl-typography-sans-serif-font-family: "Rijksoverheid SansWebText";
}
```

Om de code van componenten vrij te houden van huisstijl (en zo hergebruik mogelijk te maken) moet de code natuurlijk ook geen gebruik maken van de CSS variabele `var(--rijkshuisstijl-color-hemelblauw-basis)`, net zo min als de kleurcode `#007bc7` herbruikbaar is voor anderen. In plaats daarvan gebruiken we CSS variabelen van NL Design System in de onderste laag, de CSs van componenten:

```css
.nl-paragraph {
  font-family: var(--nl-document-font-family);
}

.nl-button {
  color: var(--nl-action-primary-color);
}
```

Elke huisstijl kan op deze manier een eigen invulling geven aan de componenten, door de lijm van de middelste laag waarin de _brand identity design token_ worden gekoppeld aan _component design tokens_:

```css
:root {
  --nl-document-font-family: var(--rijkshuisstijl-typography-sans-serif-font-family);

  --nl-action-primary-color: var(--rijkshuisstijl-color-hemelblauw-basis);
}
```

Elke organisatie kan nu al beginnen met design tokens bepalen voor de huisstijl. Design tokens maken het veel makkelijker om aan te sluiten bij NL Design System, maar ze kunnen al gelijk ingezet worden je huidige websites en het is bovendien een goede handreiking aan marktpartijen die voor jouw organisaties websites en apps ontwikkelen. NL Design System biedt templates aan om design tokens te beheren en te publiceren naar verschillende kanalen: JSON, CSS, SCSS, Less, eventueel zelfs naar Android en iOS apps.

## BEM class names voor CSS

Teams die werken aan templates in een CMS en teams die werken aan code in een framework naar keuze (zoals React, Vue.js, Angular, Stencil of Svelte) hebben iets gemeen: ze kunnen allemaal gebruik maken van de NL Design System design tokens en CSS variabelen. Zelfs als teams binnen je organisatie werken met verschillende frameworks, kunnen ze al beginnen om centraal de design tokens te beheren.

Alle teams hebben nóg iets gemeen: de CSS van componenten kan op alle soorten HTML toegepast worden met de [BEM class names](http://getbem.com) van de NL Design System architectuur, waardoor hergebruik in uiteenlopende technieken mogelijk wordt.

Een simpel voorbeeld is een button in een HTML template van bijvoorbeeld een CMS of een Angular template:

```html
<button class="nl-button nl-button--primary-action">OK</button>
```

Het essentiele voordeel van BEM class names is dat elk onderdeel van de CSS een unieke naam heeft waar je gemakkelijk naar kan verwijzen, iets dat niet vanzelfsprekend is voor een complexe CSS selector zoals `form button:hover`. Dat betekent dat je de CSS zelfs kan gebruiken in situaties waarin je niet de class name van NL Design System op een HTML element kan of wilt plaatsen.

Met SCSS kun je de BEM class name van NL Design System bijvoorbeeld toepassen op de HTML van je huidige CMS templates, waardoor je oude system al gedeeltelijk naar NL Design System kan migreren:

```scss
@import "./nl-design-system";

.content p {
  @extend .nl-paragraph;
}
.content a {
  @extend .nl-link;
}
.content a:hover {
  @extend .nl-link--hover;
}
```

Veel React projecten maken gebruik van `styled-components`: dat is een alternatief voor CSS bestanden. Zulke projecten zonder CSS hebben niet een mogelijkheid om samen te werken aan het visueel ontwerp met teams in de organisatie die een ander framework gebruiken zoals Vue.js.

De BEM class names van NL Design System maken het mogelijk dat beide teams samenwerken aan de CSS. Hier volgt een voorbeeld van BEM class names in React door gebruik te maken van CSS modules:

```jsx
import styles from "./nl-design-system.css";

const Button = () => <button className={styles["nl-button"]}>OK</button>;
```

Dezelfde CSS kan met CSS modules in een Vue.js template worden gebruikt:

```html
<template>
  <button :class="$style['nl-button']">OK</button>
</template>
```

De NL Design System architectuur richt zich dus in eerste instantie op herbruikbare CSS en simpele HTML codevoorbeelden, waardoor alle organisaties die meebouwen gelijk veel raakvlakken voor samenwerking hebben, zelfs wanneer heel uiteenlopende technieken worden gebruikt.

## Storybook voor elke organisatie

Je kunt beginnen met de NL Design System architectuur voor jouw organisatie gebruiken met onze [GitHub template repository](http://github.com/nl-design-system/template), zodat je als basis een Storybook website hebt waarin je de design tokens, componenten en patronen van jouw organisatie kunt documenteren en doorontwikkelen.

Deze eigen omgeving biedt je de mogelijkheid om op eigen tempo een bibliotheek samen te stellen van eigen componenten en geïmporteerde componenten die in de bredere NL Design System community gevonden kunnen worden. Je kunt zelf kiezen welke onderdelen je overneemt van anderen en welke je anders gaat aanpakken. De doorlooptijd van eigen componenten heb je volledig zelf in de hand, terwijl je nog steeds tijd kunt besparen door gedeeltelijke hergebruik. Je kunt bijvoorbeeld de code van een component zelf schrijven, maar de documentatie over toegankelijkheid van zo'n component uit NL Design System overnemen.

De nieuwe [NL Design System werkwijze](/handboek/estafettemodel) betekent dat je geïmporteerde componenten van anderen kunt nomineren voor de centrale NL Design System componentenbibliotheek, wanneer ze in jouw organisatie ook succesvol blijken te werken.

## Backlog voor coördinatie van eisen

De "levende" [backlog van NL Design System](http://github.com/nl-design-system/backlog/issues) moet ontwikkelaars en designers per component en goed overzicht geven van de uiteenlopende wensen en eisen die in community bestaan.

Wanneer je extra wensen hebt voor een component, dan kun je die melden op de [NL Design System backlog](http://github.com/nl-design-system/backlog/issues).

Wanneer deelnemende organisaties helpen om voor elk component en patroon de eisen volledig te krijgen, dan kunnen teams die daadwerkelijk de component bouwen sneller aan alle eisen voldoen. Bovendien helpt het om de eisen te documenteren waaraan een huidige versie van een component voldoet, zodat die functionaliteit niet per ongeluk verloren gaat in een latere versie.

De backlog is ook de centrale plek waar je kunt ontdekken welke organisaties eigen varianten van een component hebben, waar jouw organisatie mogelijk op door kan bouwen.

---

Voorbeeldcode in dit artikel loopt vooruit op een stabiele versie van de componenten, dus niet alles bestaat nu al in Git.
