/*! For license information please see 60284548.37e49354.js.LICENSE.txt */
'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [12718],
 {
  87708: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => a, default: () => u, frontMatter: () => r, metadata: () => l, toc: () => c });
   var t = i(52676),
    o = i(40139),
    s = i(97233);
   const r = { title: 'Design tokens \xb7 Huisstijl vastleggen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design tokens', sidebar_position: 1, pagination_label: 'Design tokens - Introductie', description: 'Design tokens introductie', slug: '/handboek/huisstijl/design-tokens', keywords: ['design token', 'design tokens', 'introductie'] },
    a = 'Design tokens',
    l = { id: 'handboek/huisstijl-vastleggen/design-tokens', title: 'Design tokens \xb7 Huisstijl vastleggen \xb7 Handboek', description: 'Design tokens introductie', source: '@site/docs/handboek/huisstijl-vastleggen/design-tokens.mdx', sourceDirName: 'handboek/huisstijl-vastleggen', slug: '/handboek/huisstijl/design-tokens', permalink: '/handboek/huisstijl/design-tokens', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/huisstijl-vastleggen/design-tokens.mdx', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Design tokens \xb7 Huisstijl vastleggen \xb7 Handboek', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Design tokens', sidebar_position: 1, pagination_label: 'Design tokens - Introductie', description: 'Design tokens introductie', slug: '/handboek/huisstijl/design-tokens', keywords: ['design token', 'design tokens', 'introductie'] }, sidebar: 'handboek', previous: { title: 'Huisstijl vastleggen', permalink: '/handboek/huisstijl-vastleggen/overzicht' }, next: { title: "Thema's", permalink: '/handboek/huisstijl/themas' } },
    d = {},
    c = [
     { value: 'Thema&#39;s', id: 'themas', level: 2 },
     { value: 'Design token niveaus', id: 'design-token-niveaus', level: 2 },
     { value: 'Brand tokens', id: 'brand-tokens', level: 3 },
     { value: 'Common tokens', id: 'common-tokens', level: 3 },
     { value: 'Component tokens', id: 'component-tokens', level: 3 },
     { value: 'Naamgeving', id: 'naamgeving', level: 2 },
     { value: 'Volgorde', id: 'volgorde', level: 3 },
     { value: '1. Prefix', id: '1-prefix', level: 4 },
     { value: '2. Block', id: '2-block', level: 4 },
     { value: '3. Element', id: '3-element', level: 4 },
     { value: '4. Modifier', id: '4-modifier', level: 4 },
     { value: '5. Property', id: '5-property', level: 4 },
     { value: 'Voorbeeld', id: 'voorbeeld', level: 3 },
     { value: 'Schrijfwijze en advies', id: 'schrijfwijze-en-advies', level: 3 },
     { value: 'Design tokens in CSS', id: 'design-tokens-in-css', level: 2 },
     { value: 'Gebruik in Figma', id: 'gebruik-in-figma', level: 2 },
     { value: 'Huisstijl', id: 'huisstijl', level: 2 },
     { value: 'Je eigen thema maken met Design tokens', id: 'je-eigen-thema-maken-met-design-tokens', level: 2 },
     { value: 'Design tokens vastleggen', id: 'design-tokens-vastleggen', level: 3 },
     { value: 'Design tokens inzetten', id: 'design-tokens-inzetten', level: 3 },
     { value: 'Meer informatie', id: 'meer-informatie', level: 2 },
     { value: 'Links', id: 'links', level: 3 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', code: 'code', em: 'em', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', hr: 'hr', img: 'img', li: 'li', ol: 'ol', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, o.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'design-tokens', children: 'Design tokens' }), '\n', (0, t.jsx)(n.p, { children: 'NL Design System wil de beste componenten uit de community herbruikbaar maken voor de hele overheid. Daarom hebben de componenten van NL Design System van zichzelf geen huisstijl. Iedere organisatie kan zijn eigen huisstijl op de componenten toepassen. Om dat voor elkaar te krijgen maken we gebruik van \u2018design tokens\u2019.' }), '\n', (0, t.jsx)(n.p, { children: "Design tokens zijn ontwerpkeuzes die je vastlegt als data in de vorm van een 'naam' met een 'waarde'. Denk bijvoorbeeld aan een kleur of lettertype." }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'Visueel voorbeeld' }) }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_example.png', alt: "De kleur #FA5757 verwijst naar 'color.red.500', het lettertype Oswald verwijst naar 'typography.primary.font-family'." }) }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'Code voorbeeld' }) }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-json', children: '{\n  "voorbeeld": {\n    "color": {\n      "red": {\n        "500": {\n          "value": "#FA5757"\n        }\n      }\n    },\n    "typography": {\n      "font-family": {\n        "primary": {\n          "value": "Oswald"\n        }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Kleuren, afmetingen, afstanden, tekstopmaak, et cetera leg je op een centrale plek vast. Zo kunnen alle teams die data gebruiken om de ontwerpkeuzes consistent toe te passen op diverse producten en diensten van \xe9\xe9n organisatie.' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze data beheer je vanuit een platform onafhankelijk bestand. Bij NL Design System hebben we gekozen voor JSON. We gebruiken ', (0, t.jsx)(n.a, { href: 'https://amzn.github.io/style-dictionary/', children: 'Style Dictionary' }), ' om het JSON bestand te vertalen. Hierdoor zijn de design tokens door diverse technieken en tools te gebruiken. Denk aan CSS, React, Angular, maar ook Figma.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_json.png', alt: 'JSON bestand met vertakkingen naar Figma, CSS, Angular, React en Vue.' }) }), '\n', (0, t.jsx)(n.h2, { id: 'themas', children: "Thema's" }), '\n', (0, t.jsx)(n.p, { children: "Elke organisatie maakt een eigen bestand met een 'thema' voor de huisstijl. Daarin staan uiteindelijk ontwerpkeuzes voor honderden design tokens. Componenten uit de NL Design System community kun je dus gelijk gebruiken, je hoeft alleen maar de thema te maken!" }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_no-style-and-style.png', alt: 'Drie dezelfde interfaces. \xc9\xe9n zonder stijling. Twee met een eigen huisstijl' }) }), '\n', (0, t.jsx)(n.p, { children: 'En naast een standaard \u2018light-mode\u2019 thema kun je ook andere thema\u2019s cre\xebren. Denk bijvoorbeeld aan een \u2018dark-mode\u2019 of \u2018high-contrast\u2019 mode.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_themes.png', alt: 'Drie dezelfde interfaces. \xc9\xe9n met een licht thema. \xc9\xe9n met een donker thema. \xc9\xe9n met een thema voor hoog contrast.' }) }), '\n', (0, t.jsxs)(n.p, { children: ["Bekijk bestaande thema's bij ", (0, t.jsx)(n.a, { href: 'https://nl-design-system.github.io/themes/', children: 'NL Design System Themes Storybook' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'design-token-niveaus', children: 'Design token niveaus' }), '\n', (0, t.jsx)(n.p, { children: 'Bij NL Design System verdelen we design tokens over drie niveaus.' }), '\n', (0, t.jsx)(n.h3, { id: 'brand-tokens', children: 'Brand tokens' }), '\n', (0, t.jsx)(n.p, { children: 'Dit zijn alle visuele \u2018opties\u2019 van een huisstijl. Met een waarde zoals bijvoorbeeld de kleur rood, groen of blauw of een serif dan wel sans-serif font-family. Een breed scala aan opties waaruit je kunt kiezen voor de andere niveaus. Kortom, geen 50 tinten grijs meer. In de naamgeving van Brand tokens ben je helemaal vrij. Zo kun je aansluiten bij naamgeving die binnen je organisatie al bestaat.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_brand.png', alt: "De kleur #FA5757 verwijst naar 'color.red.500' met het label 'Brand'." }) }), '\n', '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/', children: 'Bekijk de richtlijnen voor stijl' }) }), '\n', (0, t.jsx)(n.h3, { id: 'common-tokens', children: 'Common tokens' }), '\n', (0, t.jsxs)(n.p, { children: ['Dit zijn vaak terugkerende visuele eigenschappen die niet aan \xe9\xe9n specifiek component gebonden zijn. Ze halen hun waarde uit de Brand tokens en hebben een semantische betekenis. Denk aan de font-familie voor kopteksten maar ook aan kleuren voor feedback of interactie. Die wil je consistent toepassen binnen je interface. Wat weer bijdraagt aan het WCAG-succescriterium ', (0, t.jsx)(n.a, { href: '/wcag/3.2.4/', children: '3.2.4 Consistente identificatie' }), '. Die beschrijft dat componenten met dezelfde functionaliteit zich over verschillende pagina\u2019s op dezelfde manier dienen te gedragen.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_common.png', alt: "De kleur #FA5757 verwijst naar 'color.red.500' met het label 'Brand'. 'color.red.500' verwijst naar 'feedback.invalid.color' met het label 'Common'." }) }), '\n', '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: '/richtlijnen/stijl/', children: 'Bekijk de richtlijnen voor stijl' }) }), '\n', (0, t.jsx)(n.h3, { id: 'component-tokens', children: 'Component tokens' }), '\n', (0, t.jsx)(n.p, { children: 'Dit zijn alle tokens die nodig zijn voor een component. Ze verkrijgen hun waarde vanuit het Common niveau maar soms ook direct vanuit de Brand token niveau. Denk aan de achtergrondkleur van een button of de border kleur van een textbox bij een foutmelding.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_component.png', alt: "De kleur #FA5757 verwijst naar 'color.red.500' met het label 'Brand'. 'color.red.500' verwijst naar 'feedback.invalid.color' met het label 'Common'. 'feedback.invalid.color' verwijst naar 'textbox.invalid.border-color' met het label 'Component'." }) }), '\n', '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: '/componenten/', children: 'Bekijk het componenten overzicht' }) }), '\n', (0, t.jsx)(n.h2, { id: 'naamgeving', children: 'Naamgeving' }), '\n', (0, t.jsx)(n.p, { children: "Voor NL Design System zijn er afspraken gemaakt voor duidelijke en voorspelbare namen. NL Design System componenten moeten deze standaard design tokens gebruiken. Zo is een component herbruikbaar voor alle verschillende thema's." }), '\n', (0, t.jsx)(n.h3, { id: 'volgorde', children: 'Volgorde' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze naamgeving bestaat uit lagen in een afgesproken volgorde en maakt gebruik van de ', (0, t.jsx)(n.a, { href: 'https://getbem.com/', children: 'BEM methodologie' }), '.'] }), '\n', (0, t.jsxs)(n.ol, { children: ['\n', (0, t.jsx)(n.li, { children: 'Prefix (verplicht)' }), '\n', (0, t.jsx)(n.li, { children: 'Block (verplicht)' }), '\n', (0, t.jsx)(n.li, { children: 'Element (optioneel)' }), '\n', (0, t.jsx)(n.li, { children: 'Modifier (optioneel)' }), '\n', (0, t.jsx)(n.li, { children: 'Property (verplicht)' }), '\n'] }), '\n', (0, t.jsx)(n.h4, { id: '1-prefix', children: '1. Prefix' }), '\n', (0, t.jsxs)(n.p, { children: ['Naam van de organisatie, bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'utrecht' }), ' of ', (0, t.jsx)(n.code, { children: 'denhaag' }), '. De prefix ', (0, t.jsx)(n.code, { children: 'nl' }), ' wordt alleen gebruikt door het kernteam van NL Design System. Elk team kiest een eigen prefix, met alleen de letters ', (0, t.jsx)(n.code, { children: 'a' }), ' tot ', (0, t.jsx)(n.code, { children: 'z' }), ' en zonder koppelstreepje.'] }), '\n', (0, t.jsx)(n.h4, { id: '2-block', children: '2. Block' }), '\n', (0, t.jsxs)(n.p, { children: ['Naam van component, bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'button' }), ' of ', (0, t.jsx)(n.code, { children: 'link' }), '.'] }), '\n', (0, t.jsx)(n.h4, { id: '3-element', children: '3. Element' }), '\n', (0, t.jsxs)(n.p, { children: ['Onderdeel van een component, bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'icon' }), ' of ', (0, t.jsx)(n.code, { children: 'label' }), '.'] }), '\n', (0, t.jsx)(n.h4, { id: '4-modifier', children: '4. Modifier' }), '\n', (0, t.jsx)(n.p, { children: 'Variant of state van een component, bijvoorbeeld...' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Appearance', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'large' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'primary-action' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'subtle' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'negative' }) }), '\n', (0, t.jsx)(n.li, { children: 'etc.' }), '\n'] }), '\n'] }), '\n', (0, t.jsxs)(n.li, { children: ['Component state', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'checked' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'disabled' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'indeterminate' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'invalid' }) }), '\n'] }), '\n'] }), '\n', (0, t.jsxs)(n.li, { children: ['User action state', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'active' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'focus' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'focus-visible' }) }), '\n', (0, t.jsx)(n.li, { children: (0, t.jsx)(n.code, { children: 'hover' }) }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ["Deze 'modifiers' kunnen gecombineerd worden. Hou hier de volgorde Appearance, Component state en User action state aan. Bijvoorbeeld: ", (0, t.jsx)(n.code, { children: 'large.checked.active' }), '.'] }), '\n', (0, t.jsx)(n.h4, { id: '5-property', children: '5. Property' }), '\n', (0, t.jsxs)(n.p, { children: ['Naam van de visuele eigenschap waarvoor je een ontwerpkeuze kan maken. Bijvoorbeeld: ', (0, t.jsx)(n.code, { children: 'color' }), ' of ', (0, t.jsx)(n.code, { children: 'font-weight' }), '.'] }), '\n', (0, t.jsx)(n.h3, { id: 'voorbeeld', children: 'Voorbeeld' }), '\n', (0, t.jsx)(n.p, { children: 'Een voorbeeld van enkele design tokens voor een button component.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.border-radius' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.border-width' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.font-family' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.font-size' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.font-weight' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.line-height' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.icon.size' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.background-color' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.color' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.focus.background-color' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.focus.color' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.hover.background-color' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.hover.color' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.disabled.background-color' }), '\n', (0, t.jsx)(n.li, { children: 'voorbeeld.button.primary-action.disabled.color' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'En dezelfde design tokens in een JSON opmaak. Er zijn geen waardes ingesteld.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-json', children: '{\n  "voorbeeld": {\n    "button": {\n      "border-radius": {\n        "value": "x"\n      },\n      "border-width": {\n        "value": "x"\n      },\n      "font-family": {\n        "value": "x"\n      },\n      "font-size": {\n        "value": "x"\n      },\n      "font-weight": {\n        "value": "x"\n      },\n      "line-height": {\n        "value": "x"\n      },\n      "icon": {\n        "size": {\n          "value": "x"\n        }\n      },\n      "primary-action": {\n        "background-color": {\n          "value": "x"\n        },\n        "color": {\n          "value": "x"\n        },\n        "focus": {\n          "background-color": {\n            "value": "x"\n          },\n          "color": {\n            "value": "x"\n          }\n        },\n        "hover": {\n          "background-color": {\n            "value": "x"\n          },\n          "color": {\n            "value": "x"\n          }\n        },\n        "disabled": {\n          "background-color": {\n            "value": "x"\n          },\n          "color": {\n            "value": "x"\n          }\n        }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, t.jsx)(n.h3, { id: 'schrijfwijze-en-advies', children: 'Schrijfwijze en advies' }), '\n', (0, t.jsx)(n.p, { children: 'Gebruik voor alle onderdelen alleen kleine letters, cijfers of een koppelstreepje.' }), '\n', (0, t.jsx)(n.p, { children: "Baseer de naam van de component (block) of onderdeel van de component (element), indien mogelijk, op herkenbare termen uit webstandaarden. Liever termen uit HTML, CSS, SVG en WAI-ARIA dan uit 'UI frameworks' die op het moment populair zijn." }), '\n', (0, t.jsxs)(n.p, { children: ['Datzelfde geldt voor de states: vaak heeft CSS of ARIA daar een goede term voor, zoals ', (0, t.jsx)(n.code, { children: 'focus' }), ', ', (0, t.jsx)(n.code, { children: 'active' }), ', ', (0, t.jsx)(n.code, { children: 'current' }), ' en ', (0, t.jsx)(n.code, { children: 'expanded' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Let op dat een term geen andere betekenis heeft voor webstandaarden. Een link naar de huidige pagina is bijvoorbeeld ', (0, t.jsx)(n.code, { children: 'current' }), ' en niet ', (0, t.jsx)(n.code, { children: 'active' }), '. Een ingedrukte link is ', (0, t.jsx)(n.code, { children: 'active' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Wanneer je design tokens voor documentatie uitschrijft en presenteert als lijst. Hou dan binnen elke laag een alphabetische volgorde. Dit maakt het scannen van de lijst gemakkelijker.' }), '\n', (0, t.jsx)(n.h2, { id: 'design-tokens-in-css', children: 'Design tokens in CSS' }), '\n', (0, t.jsxs)(n.p, { children: ['Front-end developers gebruiken design tokens als ', (0, t.jsx)(n.em, { children: 'CSS variable' }), ', bijvoorbeeld:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '.dark-theme {\n  --nl-button-background-color: dimgray;\n  --nl-button-color: whitesmoke;\n}\n\n.btn {\n  background-color: var(--nl-button-background-color);\n  color: var(--nl-button-color);\n}\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['We gebruiken JSON bestanden met design tokens als bron. We maken automatisch het CSS-bestand met het thema, daarvoor zijn verschillende tools die design tokens JSON vertalen naar onder andere CSS. Wij gebruiken nu ', (0, t.jsx)(n.em, { children: 'Style Dictionary' }), ' om de design tokens te publiceren als CSS, SCSS, JSON, JavaScript, enzovoorts. Je kunt in de map ', (0, t.jsxs)(n.a, { href: 'https://github.com/nl-design-system/example/tree/main/proprietary/design-tokens', children: [(0, t.jsx)(n.code, { children: 'proprietary/design-tokens/' }), ' van onze example repository'] }), ' zien hoe je Style Dictionary gebruikt.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Van organisaties die een thema onderhouden kun je een npm-pakketje installeren met daarin al deze bestandsformaten, zodat je makkelijk toegang hebt tot de laatste versie die werkt in jouw project. Ook als je bijvoorbeeld een website met PHP gebruikt, is op dit moment het npm-pakketje waarschijnlijk de handigste manier om de CSS te installeren. ', (0, t.jsx)(n.a, { href: 'https://nl-design-system.github.io/themes/', children: 'NL Design System Themes Storybook' }), " is een goede plek om te vinden welke thema's er al zijn."] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruik-in-figma', children: 'Gebruik in Figma' }), '\n', (0, t.jsxs)(n.p, { children: ["Op dit moment biedt Figma, net als alle andere ontwerpprogramma's, geen ondersteuning voor design tokens. Daarom maken we gebruik van de ", (0, t.jsx)(n.a, { href: 'https://tokens.studio/', children: 'Tokens Studio' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.a, { href: '/handboek/designer/figma-structuur/', children: 'Meer informatie over Figma structuur en gebruik' }) }), '\n', (0, t.jsx)(n.h2, { id: 'huisstijl', children: 'Huisstijl' }), '\n', (0, t.jsx)(n.p, { children: 'De ontwerpkeuzes van je huisstijl moeten consistent worden toegepast. Iedereen die verantwoordelijk is om je huisstijl te gebruiken moet daarom makkelijk de documentatie van je huisstijl kunnen vinden. Design tokens voor je huisstijl maken helpt interne teams en leveranciers om altijd de goede kleuren en lettertypes te gebruiken.' }), '\n', (0, t.jsx)(n.p, { children: 'Je wilt voorkomen dat vaak kleuren en lettertypes worden gebruikt die niet bestaan in de huisstijl, of dat goede kleuren worden gebruikt voor een verkeerde situatie. Maak documentatie voor de belangrijste kleuren, vertel in welke situatie ze gebruikt moeten worden en wanneer niet. Maak een volledig overzicht: kies ook lichtere en donkere kleurtinten en grijstinten die gebruikt mogen worden als accentkleur en tekstkleur, zodat niet elke keer verschillende kleurvariaties worden gekozen.' }), '\n', (0, t.jsxs)(n.p, { children: ['Begin bijvoorbeeld met een ', (0, t.jsx)(n.code, { children: 'color.tokens.json' }), ' te maken:'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-json', children: '{\n  "rijkshuisstijl": {\n    "color": {\n      "hemelblauw": {\n        "40": { "value": "hsl(203, 100%, 39%)" }\n      },\n      "wit": { "value": "hsl(0, 0%, 100%)" }\n    }\n  }\n}\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik de ', (0, t.jsx)(n.em, { children: 'prefix' }), ' van de organistatie voor je ', (0, t.jsx)(n.em, { children: 'brand design tokens' }), '. Voor ', (0, t.jsx)(n.em, { children: 'autocomplete' }), ' is het handig om je kleuren te groeperen onder ', (0, t.jsx)(n.code, { children: 'color' }), '. Je mag helemaal zelf kiezen hoe je de kleuren en kleurtinten wilt noemen. Wij kiezen meestal een afgeronde ', (0, t.jsx)(n.em, { children: 'lightness' }), ' waarde (zoals 40 voor 39%), zodat je in de praktijk makkelijk kan inschatten of twee tinten voldoende contrast hebben.'] }), '\n', (0, t.jsx)(n.p, { children: 'Niet gebruik maken van huisstijl design tokens in je CSS code gebruiken helpt om componenten herbruikbaar te maken voor onze open source community.' }), '\n', (0, t.jsx)(n.p, { children: 'Doe bijvoorbeeld niet dit:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '.rijkshuisstijl-button {\n  background-color: rgb(--rijkshuisstijl-color-hemelblauw-40);\n  color: var(--rijkshuisstijl-color-wit);\n}\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'Maak in de design tokens JSON de link tussen jouw huisstijl en jouw component, dan is ook hergebruik van jouw component mogelijk met een andere huisstijl.' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-json', children: '{\n  "rijkshuisstijl": {\n    "button": {\n      "background-color": { "value": "{rijkshuisstijl.color.hemelblauw.40}" },\n      "color": { "value": "{rijkshuisstijl.color.wit}" }\n    }\n  }\n}\n' }) }), '\n', (0, t.jsx)(n.p, { children: 'De CSS thema wordt dan automatisch gemaakt met de JSON als bron:' }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '.rijkshuisstijl-theme {\n  --rijkshuisstijl-color-hemelblauw-40: hsl(203, 100%, 39%);\n  --rijkshuisstijl-color-wit: hsl(0, 0%, 100%);\n  --rijkshuisstijl-button-background-color: rgb(--rijkshuisstijl-color-hemelblauw-40);\n  --rijkshuisstijl-button-color: rgb(--rijkshuisstijl-wit);\n}\n' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Gebruik alleen ', (0, t.jsx)(n.em, { children: 'component design tokens' }), ' in je CSS om jouw component herbruikbaar te maken, in andere situaties en voor andere huisstijlen.'] }), '\n', (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-css', children: '.rijkshuisstijl-button {\n  background-color: rgb(--rijkshuisstijl-button-background-color);\n  color: var(--rijkshuisstijl-button-color);\n}\n' }) }), '\n', (0, t.jsx)(n.h2, { id: 'je-eigen-thema-maken-met-design-tokens', children: 'Je eigen thema maken met Design tokens' }), '\n', (0, t.jsx)(n.p, { children: "We hebben twee opnames van de onboarding-week 2021 waarin we vertellen over design tokens en thema's:" }), '\n', (0, t.jsx)(n.h3, { id: 'design-tokens-vastleggen', children: 'Design tokens vastleggen' }), '\n', (0, t.jsx)(s.Y, { id: 'jSvjnU7oY5Y', title: 'Design tokens vastleggen' }), '\n', (0, t.jsx)(n.h3, { id: 'design-tokens-inzetten', children: 'Design tokens inzetten' }), '\n', (0, t.jsx)(s.Y, { id: '-guAi7Lvl6g', title: 'Design tokens inzetten' }), '\n', (0, t.jsx)(n.h2, { id: 'meer-informatie', children: 'Meer informatie' }), '\n', (0, t.jsx)(n.h3, { id: 'links', children: 'Links' }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: 'https://amzn.github.io/style-dictionary/', children: 'Style Dictionary' }), (0, t.jsx)('br', {}), '\nHet systeem dat we gebruiken om design tokens te verhalen naar een taal die voor elk platform.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: 'https://design-tokens.github.io/community-group/format/', children: 'Design tokens specificatie (concept)' }), (0, t.jsx)('br', {}), '\nSpecificatie gepubliceerd door de Design tokens Community Group.'] }), '\n', (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: 'https://nl-design-system.github.io/themes/', children: 'NL Design System Themes Storybook' }), (0, t.jsx)('br', {}), '\nStorybook omgeving om te laten zien hoe design tokens verschillende componenten kunnen stijlen.'] }), '\n', (0, t.jsx)(n.hr, {}), '\n', (0, t.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, t.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'Github' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, t.jsx)(n.a, { href: '/project/kernteam/', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, o.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  97233: (e, n, i) => {
   i.d(n, { Y: () => s });
   var t = i(84263),
    o = i(52676);
   const s = (e) => {
    let { id: n, title: i, ...s } = e;
    return (0, o.jsx)(t.Z, { adNetwork: !1, announce: 'Bekijk', cookie: !1, id: n, title: i, poster: 'maxresdefault', ...s });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => a, a: () => r });
   var t = i(75271);
   const o = {},
    s = t.createContext(o);
   function r(e) {
    const n = t.useContext(s);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function a(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : r(e.components)), t.createElement(s.Provider, { value: n }, e.children);
   }
  },
  84263: (e, n, i) => {
   i.d(n, { Z: () => r });
   var t = i(75271),
    o = function () {
     return (
      (o =
       Object.assign ||
       function (e) {
        for (var n, i = 1, t = arguments.length; i < t; i++) for (var o in (n = arguments[i])) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e;
       }),
      o.apply(this, arguments)
     );
    },
    s = { default: 120, mqdefault: 320, hqdefault: 480, sddefault: 640, maxresdefault: 1280 };
   var r = t.forwardRef(function (e, n) {
    var i = t.useState(!1),
     r = i[0],
     a = i[1],
     l = t.useState(e.alwaysLoadIframe || !1),
     d = l[0],
     c = l[1],
     h = encodeURIComponent(e.id),
     u = 'string' == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
     m = e.title,
     j = e.poster || 'hqdefault',
     g = e.announce || 'Watch',
     k = !e.alwaysLoadIframe || (e.autoplay && e.muted),
     p = new URLSearchParams(o(o(o(o({}, e.muted ? { mute: '1' } : {}), k ? { autoplay: '1' } : {}), e.enableJsApi ? { enablejsapi: '1' } : {}), e.playlist ? { list: h } : {}));
    e.params &&
     new URLSearchParams(e.params.startsWith('&') ? e.params.slice(1) : e.params).forEach(function (e, n) {
      p.append(n, e);
     });
    var v = e.noCookie;
    v = e.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com';
    var b = e.playlist ? ''.concat(v, '/embed/videoseries?').concat(p.toString()) : ''.concat(v, '/embed/').concat(h, '?').concat(p.toString()),
     x = !e.thumbnail && !e.playlist && 'maxresdefault' === j,
     f = e.webp ? 'webp' : 'jpg',
     w = e.webp ? 'vi_webp' : 'vi',
     y = x
      ? (function (e, n, i, o) {
         void 0 === o && (o = 'maxresdefault');
         var r = (0, t.useState)(''),
          a = r[0],
          l = r[1];
         return (
          (0, t.useEffect)(
           function () {
            var t = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/').concat(o, '.').concat(i),
             r = 'https://img.youtube.com/'.concat(n, '/').concat(e, '/hqdefault.').concat(i),
             a = s[o],
             d = new Image();
            (d.onload = function () {
             d.width < a ? l(r) : l(t);
            }),
             (d.onerror = function () {
              return l(r);
             }),
             (d.src = t);
           },
           [e],
          ),
          a
         );
        })(e.id, w, f, j)
      : null,
     z =
      e.thumbnail ||
      y ||
      'https://i.ytimg.com/'
       .concat(w, '/')
       .concat(e.playlist ? u : h, '/')
       .concat(j, '.')
       .concat(f),
     S = e.activatedClass || 'lyt-activated',
     D = e.adNetwork || !1,
     C = e.aspectHeight || 9,
     N = e.aspectWidth || 16,
     _ = e.iframeClass || '',
     E = e.playerClass || 'lty-playbtn',
     B = e.wrapperClass || 'yt-lite',
     L = e.onIframeAdded || function () {},
     O = e.rel ? 'prefetch' : 'preload',
     H = e.containerElement || 'article',
     A = e.style || {};
    return (
     t.useEffect(
      function () {
       d && L();
      },
      [d],
     ),
     t.createElement(
      t.Fragment,
      null,
      t.createElement('link', { rel: O, href: z, as: 'image' }),
      t.createElement(t.Fragment, null, r && t.createElement(t.Fragment, null, t.createElement('link', { rel: 'preconnect', href: v }), t.createElement('link', { rel: 'preconnect', href: 'https://www.google.com' }), D && t.createElement(t.Fragment, null, t.createElement('link', { rel: 'preconnect', href: 'https://static.doubleclick.net' }), t.createElement('link', { rel: 'preconnect', href: 'https://googleads.g.doubleclick.net' })))),
      t.createElement(
       H,
       {
        onPointerOver: function () {
         r || a(!0);
        },
        onClick: function () {
         d || c(!0);
        },
        className: ''.concat(B, ' ').concat(d ? S : ''),
        'data-title': m,
        style: o(o({ backgroundImage: 'url('.concat(z, ')') }, { '--aspect-ratio': ''.concat((C / N) * 100, '%') }), A),
       },
       t.createElement('button', { type: 'button', className: E, 'aria-label': ''.concat(g, ' ').concat(m) }),
       d && t.createElement('iframe', { ref: n, className: _, title: m, width: '560', height: '315', frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: !0, src: b }),
      ),
     )
    );
   });
  },
 },
]);
