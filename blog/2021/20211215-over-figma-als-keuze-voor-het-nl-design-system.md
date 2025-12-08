---
title: Over Figma als keuze voor het NL Design System
slug: over-figma-als-keuze-voor-het-nl-design-system
authors: Rogier Barendregt
tags: [Figma, NL Design System]
image: https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Rogier.png
hide_table_of_contents: false
date: 2021-12-15
---

Alles over Figma, de tool voor het ontwerpen van de componenten en patronen, en waarom we dat bij NL Design System gebruiken.

<!-- truncate -->

Tijdens de ontwikkeling van het NL Design System was het al snel duidelijk dat wij als kernteam met Figma (de tool voor het ontwerpen van de componenten en patronen) wilden werken. Het doel is dat we beproefde componenten en patronen aanbieden als een ‘white-label’ variant. Organisaties kunnen componenten aanleveren waar we vervolgens een white-label variant voor het NL Design System van maken. Andere organisaties kunnen deze variant gebruiken en voorzien van hun eigen huisstijl en merkbeleving. Inmiddels werken we door middel van Figma samen en delen we kennis met ontwerpers van de gemeente Utrecht, Den Haag, Haarlem en ook met de ontwerpers van Logius.

## Waarom Figma?

Figma is een programma waarmee digitale producten zoals websites en interactieve prototypes ontworpen kunnen worden. Alhoewel het (Nederlandse) Sketch ook goed aansluit bij het ontwerpen, kwam Figma beter uit de verf bij de overdracht en communicatie met ontwikkelaars.

Bovendien was Figma destijds het enige volwassen ontwerpprogramma die het mogelijk maakte om direct samen te werken in dezelfde bestanden. De standaard beschikbare versie-geschiedenis bleek in de praktijk een aantal maal een echte ‘life-saver’. Ontwikkelaars kunnen bovendien met een (gratis) account de ontwerpbestanden bekijken en ontleden.

Onze voorkeur ging uit naar een open-source product. Toch bleek er nog geen geschikte versie beschikbaar die ‘volwassen’ genoeg was om samen te werken aan een designsysteem.

## Samenwerking met ontwikkelaars

In Figma benaderen we (zoveel mogelijk) dezelfde naamgeving zoals we die ook op codeniveau aanhouden. Hierdoor verloopt de overdracht en communicatie naar ontwikkelaars heel gestroomlijnd. Door het gebruik van ‘design tokens’ praten beide disciplines dezelfde taal en kunnen we ontwerpeigenschappen, componenten en dergelijke bij dezelfde naam noemen.

Ook kijken we voor de naamgeving van lagen, frames en pagina’s naar benamingen zoals die binnen HTML, ARIA, BEM en SVG wordt aangehouden.

## Design tokens in Figma

Om binnen Figma met design tokens te werken, hebben we meerdere tools uitgeprobeerd. Uiteindelijk hebben we gekozen voor de open source [Figma Tokens plug-in](https://docs.tokens.studio/) van ontwikkelaar Jan Six. Niet alleen wordt deze plug-in continu onderhouden, ook is de ontwikkelaar makkelijk te benaderen en staat open voor suggesties en verbeteringen aan de plug-in.

## ‘Single source of truth’ voor zowel ontwikkelaars als ontwerpers

Met behulp van de design tokens kunnen we uit een ‘single source of truth’ putten. Bij een eerste proof of concept bleek ruim 90% al direct te werken! Hierbij vertaalden we design tokens uit de code van de gemeente Utrecht door middel van [Style Dictionary](https://amzn.github.io/style-dictionary/#/) naar het (JSON) formaat dat we in Figma gebruiken.

Zoals altijd zijn er ook enkele zaken die nog niet helemaal soepel verlopen, omdat ontwerpprogrammatuur nog niet helemaal voor het medium web is geschikt. Zo zijn relatieve afmetingen niet in een omgeving als Figma toe te passen en moeten we ‘flexibele’ eenheden zoals EM’s, REM’s, [CH’s](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/) en EX’s (X-hoogte van het gekozen lettertype) converteren naar exacte eenheden.

Andere beproefde webconcepten (zoals het maken van een [‘modulaire‘ typografische schaal)](https://www.modularscale.com/) zijn daarentegen goed voorzien in de plug-in. Een modulaire schaal op basis van één standaard lettergrootte (de broodtekst) definieert alle andere lettergroottes (kopteksten en secundaire teksten), zodat een flexibel typografisch systeem ontstaat.

Stel dat jij binnen jouw website al gebruikt maakt van een modulaire schaal binnen de stijl van jouw organisatie, kan deze een-op-een worden overgenomen in Figma.

## Schakelen van visuele stijl

In de Figma-omgeving kunnen we meerdere token sets laden. Dit stelt ons in staat om op basis van een white-label ontwerp deze om te zetten in de stijl van andere organisaties. Het is hierbij belangrijk om wel goed op de naamgeving te letten. Ook hierbij komen design tokens weer om de hoek kijken.

## Design token niveaus

We gebruiken voor onze design tokens een gelaagde benadering. Zo hebben we op het hoogste niveau ‘brand tokens’. Een organisatie is vrij om binnen deze merktokens invulling te geven aan hun eigen visuele stijl en merkbeleving.

### Brand tokens

Een brand token is bijvoorbeeld: utrecht-kleur-blauw-500 of denhaag-kleur-primaire-actie. Eén niveau daaronder vind je de ‘common tokens’. In deze tokens krijgen visuele eigenschappen een eigen betekenis toegewezen. Hierbij refereren deze tokens altijd aan de brand tokens.

### Common tokens

Common token zien er bijvoorbeeld zo uit: document-color: utrecht-kleur-zwart.

Hierbij is de eerste documentkleur de standaard (tekst-) voorgrondkleur, en utrecht-kleur-zwart is de kleur die de gemeente Utrecht als merkkleur heeft gedefinieerd (de standaardkleur). Common tokens worden gebruikt voor veel voorkomende visuele stijlen die een semantische betekenis hebben.

### Component tokens

Component tokens zijn tokens die voor specifieke componenten gebruikt worden. Een voorbeeld van een component token is bijvoorbeeld: button-primary-action-background-color: denhaag-kleur-primaire-actie.
