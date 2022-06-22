---
title: Documenteren als designer
hide_title: true
hide_table_of_contents: false
sidebar_label: Bijdragen
sidebar_position: 1
pagination_label: Documenteren
description: Documenteren als designer
keywords:
  - designer
  - meedoen
  - bijdragen
  - documenteren
---

# Als ontwerper componenten en patronen documenteren

In onze documentatie maken we onderscheid tussen algemene richtlijnen, zoals bijvoorbeeld richtlijnen voor taalgebruik en het omgaan met formulieren, en richtlijnen per component. Probeer zeker in de algemene richtlijnen technisch taalgebruik te vermijden.

De richtlijnen voor patronen hebben een beknopt ‘checklist’ overzicht met links naar nadere verdieping. Deze links gaan dieper in op een specifiek aspect van de richtlijn. In deze verdieping kan tevens naar componenten die nodig zijn om een patroon te creëren verwezen worden.

We werken zoveel mogelijk _evidence-based_, Waar mogelijk dient documentatie voorzien te zijn van bronvermelding naar bestaande literatuur of links naar bijvoorbeeld case studies of eigen onderzoek.

## Componenten

Voor het documenteren van componenten gebruiken we het volgende stramien:

### Component naam

De naamgeving voor een component willen we in zowel ontwerp-omgeving als de front-end code gelijk houden. Zo garanderen we dat zowel ontwerpers als ontwikkelaars de zelfde taal spreken. Overleg bij het maken van een nieuw component daarom met ontwikkelaars en andere ontwerpers om tot een naam te komen die iedereen begrijpt.

Voor de naamgeving van componenten gebruiken we zoveel mogelijk de naamgeving zoals die ook in HTML bestaat. In plaats van _menu_ of _dropdown menu_ gebruiken we _select_, omdat `<select>` een bestaand HTML element is. Ook voor staten en dergelijke gebruiken we zoveel mogelijk [HTML attributen](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) of [ARIA rollen](https://www.w3.org/TR/wai-aria/#roles_categorization) en/of [staten/eigenschappen](https://www.w3.org/TR/wai-aria/#global_states). Voor de structuur van bijvoorbeeld iconen of lijn-illustraties kan gebruik gemaakt worden van [naamgeving zoals die in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element) bestaat.

Pas bij naamgeving op dat je rekening houdt met schaalbaarheid. Voor een stappen wizard zou je bijvoorbeeld de naam _progress_ kunnen kiezen. In HTML bestaat echter al een `<progress>` element. Hierdoor kan verdubbeling van naamgeving en verwarring ontstaan.

_Voorbeeld: Text area_

#### Introductie

Een korte introductie maakt duidelijk wat voor component het betreft. De omschrijving is algemeen zodat deze niet alleen voor ontwerpers en ontwikkelaars te begrijpen is, maar ook voor andere rollen zoals project-owners of content-specialisten.

_Voorbeeld: A text area is a text input field where users can input large amounts of textual content._

#### Gebruik

Het gebruik van een component beschrijven we in de sectie _When to use_.

Hierin staat wanneer en in welke context het betreffende component gebruikt dient te worden.

_Voorbeeld: When it is expected that a user want to input multiple lines of text._

#### Alternatieve en/of gerelateerde componenten

Zijn er componenten die qua gebruik eenzelfde soort actie uitvoeren of er enigszins hetzelfde uitzien? Som deze dan hier op, en beschrijf ook welk component in welke context gebruikt wordt. Denk bijvoorbeeld aan een checkbox en een radio button. Deze zijn gerelateerd maar dienen in verschillende specifieke contexten gebruikt te worden.

_Voorbeeld: Use the Text input component when you expect users to input a single line of text._

#### Anatomie

Hier wordt een opsomming van de elementen waaruit een component bestaat opgesomd. Dit helpt bij het inzichtelijk maken van de component-structuur, de herbruikbaarheid van elementen en het toewijzen van design tokens.

_The Text area component consists of:_

_1. A label_
_2. An optional indicator (optional)_
_3. Helper text to aid users when you expect the data needed might pose questions (optional)_
_4. A bordered input field_
_5. Input text (either placeholder or filled-in text)_
_6. Feedback icon in combination with feedback text, in case of feedback after user input (optional)_

#### (Interactieve) staten

Heeft de component verschillende staten, som dexe dan op.

_Voorbeeld: The Text area contains an active, inactive, disabled, error and focus state_

#### Ontwerp eigenschappen

Hier kan je de ontwerp eigenschappen specifiek voor jouw organisatie benoemen.

_Voorbeeld: Label: TheSans/md/700, Label: text color Blue/5_

#### Toegankelijkheid

Heeft de component specifieke toegankelijkheidseisen (niet genoemd in de algemene toegankelijkheids-richtlijnen), dan worden deze hier beschreven.

_Voorbeeld: To allow a user to read the full contents of the Text area do not disable the browser-native feature to scale Text area’s_

#### Content richtlijnen

Zijn er content richtlijnen specifiek voor het betreffende component (niet genoemd in de algemene content richtlijnen), beschrijf deze hier.

_Voorbeeld: A label is a short description of the requested input. Labels are not instructional text but they should be meaningful and clearly indicate what is expected._

#### Best practices

Best practices illustreren aan de hand van ofwel een _Do_ of een _Don’t_ hoe een component gebruikt wordt.

##### Do

Voorbeelden van hoe je een component wél inzet of gebruikt.

_Voorbeeld: Validate input as soon as users have finished interacting with a field (but not before)_

##### Don’t

Voorbeelden van hoe je een component níét inzet of gebruikt.

_Voorbeeld: Do not display feedback above the text area field._

### Referenties

Is er bestaande literatuur die bepaalde ontwerp-rationale onderbouwen? Is er onderzoek gedaan naar het gebruik van de component? In deze sectie kan verwezen worden naar deze referenties.

_Voorbeeld: [Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/)_
