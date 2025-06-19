'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [87684],
 {
  76136: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => j, contentTitle: () => m, default: () => k, frontMatter: () => g, metadata: () => p, toc: () => v });
   var r = t(52676),
    a = t(40139),
    i = t(57716),
    l = t(46364),
    o = t(16167),
    s = t(60256),
    d = t(99042),
    c = t(91114);
   function h(e) {
    const n = { a: 'a', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)(n.p, { children: ['Geef interactieve elementen zoals buttons, links en formuliervelden een ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name', children: 'toegankelijke naam' }), ' en een bijpassende rol. Geef daarnaast, afhankelijk van de functionaliteit, het element een toestand (state), eigenschappen en een waarde mee.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Waarom is dit nodig? Gebruikers van een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' krijgen deze informatie voorgelezen en weten zo hoe een interactief element te bedienen en wat de huidige waarde of status is.\nEen goede toegankelijke naam is ook belangrijk bij stembesturing. De gebruiker kan een interactief element activeren (aanklikken) door deze naam uit te spreken.'] })] });
   }
   function u(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.2 Naam, rol, waarde', pagination_label: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde', description: 'Geef interactieve elementen een toegankelijke naam en een rol. Geef daarnaast, afhankelijk van de functionaliteit, het element een toestand (state), eigenschappen en een waarde mee.', slug: '4.1.2', keywords: ['WCAG', 'A', 'robuust', 'compatibel', 'robust', 'compatible', 'name, role, value'] },
    m = void 0,
    p = { id: 'wcag/4.1.02', title: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde', description: 'Geef interactieve elementen een toegankelijke naam en een rol. Geef daarnaast, afhankelijk van de functionaliteit, het element een toestand (state), eigenschappen en een waarde mee.', source: '@site/docs/wcag/4.1.02.mdx', sourceDirName: 'wcag', slug: '/wcag/4.1.2', permalink: '/wcag/4.1.2', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/4.1.02.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '4.1.2 Naam, rol, waarde', pagination_label: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde', description: 'Geef interactieve elementen een toegankelijke naam en een rol. Geef daarnaast, afhankelijk van de functionaliteit, het element een toestand (state), eigenschappen en een waarde mee.', slug: '4.1.2', keywords: ['WCAG', 'A', 'robuust', 'compatibel', 'robust', 'compatible', 'name, role, value'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 4.1.1 Parsen', permalink: '/wcag/4.1.1' }, next: { title: 'WCAG-succescriterium 4.1.3 Statusberichten', permalink: '/wcag/4.1.3' } },
    j = {},
    v = [
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Radiobutton', id: 'radiobutton', level: 3 },
     { value: 'Link', id: 'link', level: 3 },
     { value: 'Een button voor het openen en sluiten van een ander element.', id: 'een-button-voor-het-openen-en-sluiten-van-een-ander-element', level: 3 },
     { value: 'Wat is de huidige pagina of stap?', id: 'wat-is-de-huidige-pagina-of-stap', level: 3 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Controleer de toegankelijke naam', id: 'controleer-de-toegankelijke-naam', level: 3 },
     { value: 'Check de semantische rol en waarde', id: 'check-de-semantische-rol-en-waarde', level: 3 },
     { value: 'Controleer of een state dynamisch wordt aangepast', id: 'controleer-of-een-state-dynamisch-wordt-aangepast', level: 3 },
     { value: 'Controleer bij webcomponenten of ARIA goed is toegepast', id: 'controleer-bij-webcomponenten-of-aria-goed-is-toegepast', level: 3 },
     { value: 'Controleer op typefouten en ongeldige waardes voor ARIA-attributen', id: 'controleer-op-typefouten-en-ongeldige-waardes-voor-aria-attributen', level: 3 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: aria-expanded toggle staat niet op de button, maar op het gerelateerde element', id: 'fout-aria-expanded-toggle-staat-niet-op-de-button-maar-op-het-gerelateerde-element', level: 3 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', img: 'img', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde' }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(u, {}), '\n', (0, r.jsxs)(n.p, { children: ['Deze informatie kun je ook terugvinden in de zogenaamde ', (0, r.jsx)(n.a, { href: 'https://www.internetacademy.nl/ebooks/wcag-in-de-praktijk/html-dom-accessibility-tree-en-wai-aria', children: 'accessibility tree' }), ". Naast een 'DOM tree' maken browsers ook een 'accessibility tree' van een webpagina. Hulpmiddelen gebruiken deze gegevens."] }), '\n', (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.strong, { children: 'Let op' }), ': Bij het gebruik van HTML is de rol al gedefinieerd en hoef je geen rol toe te voegen.'] }), '\n', (0, r.jsx)(n.p, { children: 'De regel is om de rol van een element niet aan te passen, maar er zijn uitzonderingen. Sommige roles voegen informatie toe en vervangen niet de functie. De oorspronkelijke functionaliteit blijft dan intact.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<form role="search">' }), ' voegt toe dat dit een zoekformulier is.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: '<button type="button" role="switch" aria-checked="true">' }), ' voegt toe dat deze button een aan/uit-schakelaar is.'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'We geven een paar voorbeelden.' }), '\n', (0, r.jsx)(n.h3, { id: 'radiobutton', children: 'Radiobutton' }), '\n', (0, r.jsxs)(n.p, { children: ["In een formulier kun je je favoriete kleur kiezen uit een paar kleuren.\nEen geselecteerde radiobutton (keuzerondje) heeft de naam 'Blauw', de rol van 'radio' en de state is 'checked'.\nDe naam komt van het label, de rol komt door het invoerveld ", (0, r.jsx)(n.code, { children: 'type="radio"' }), ' te geven en de state ', (0, r.jsx)(n.code, { children: 'checked' }), " wordt door de browser gezet als de gebruiker 'Blauw' selecteert."] }), '\n', (0, r.jsx)(n.p, { children: 'In code:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<input id="kleur1" type="radio" /> <label for="kleur1">Blauw</label>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['De ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), " VoiceOver leest dan voor: 'Blauw, geselecteerd, keuzerondje'."] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_4_1_2_vo_blauw_geselecteerd_keuzerondje.png', alt: 'Screenshot van de screenreader VoiceOver met de tekst Blauw, geselecteerd, keuzerondje' }) }), '\n', (0, r.jsx)(n.p, { children: 'De accessibility tree van Chrome vermeldt voor het inputveld:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Name: Blauw' }), '\n', (0, r.jsx)(n.li, { children: 'From label (for=attribute): label Blauw' }), '\n', (0, r.jsx)(n.li, { children: 'Role: radio' }), '\n', (0, r.jsx)(n.li, { children: 'Checked: true' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_4_1_2_chome_a11y_tree.png', alt: 'Screenshot van de accessibility tree van Chrome voor het inputveld' }) }), '\n', (0, r.jsx)(n.h3, { id: 'link', children: 'Link' }), '\n', (0, r.jsxs)(n.p, { children: ["Een link naar bijvoorbeeld de contactpagina bevat de volgende informatie: de toegankelijke naam is 'Contact', de rol is 'link' en de waarde is de url, in dit geval ", (0, r.jsx)(n.a, { href: 'https://nldesignsystem.nl/project/kernteam', children: 'https://nldesignsystem.nl/project/kernteam' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: 'In code:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<a href="https://nldesignsystem.nl/project/kernteam">Contact</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: "De screenreader VoiceOver leest voor: 'Link, contact'. En als de link al een keer aangeklikt is: 'Bezocht, Link, contact'" }), '\n', (0, r.jsx)(n.p, { children: (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_4_1_2_vo_bezocht_link_contact.png', alt: 'Screenshot van de screenreader VoiceOver met de tekst Bezocht, Link, contact' }) }), '\n', (0, r.jsx)(n.h3, { id: 'een-button-voor-het-openen-en-sluiten-van-een-ander-element', children: 'Een button voor het openen en sluiten van een ander element.' }), '\n', (0, r.jsxs)(n.p, { children: ['Hoe geef je aan of een menu, modal of accordeon open of dicht is? Met ', (0, r.jsx)(n.code, { children: 'aria-expanded' }), '.'] }), '\n', (0, r.jsx)(n.p, { children: "In onderstaan voorbeeld heeft de button (knop) de toegankelijke naam 'Menu', de rol van button en de state expanded (open) of collapsed (gesloten)." }), '\n', (0, r.jsx)(n.p, { children: 'Code voor het gesloten menu:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button aria-expanded="false">Menu</button>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ["De screenreader VoiceOver leest dan voor: 'Menu, samengevouwen, knop'.\n", (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_4_1_2_vo_menu_samengevouwen_knop.png', alt: 'Screenshot van de screenreader VoiceOver met de tekst Menu, samengevouwen, knop' })] }), '\n', (0, r.jsx)(n.p, { children: 'Code voor het open menu:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button aria-expanded="true">Menu</button>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ["De screenreader VoiceOver leest dan voor: 'Menu, uitgevouwen, knop'.\n", (0, r.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/wcag_4_1_2_vo_menu_uitgegevouwen_knop.png', alt: 'Screenshot van de screenreader VoiceOver met de tekst Menu, uitgevouwen, knop' })] }), '\n', (0, r.jsx)(n.p, { children: 'De accessibility tree van Chrome vermeldt voor de button:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'Name: Menu' }), '\n', (0, r.jsx)(n.li, { children: 'Contents: "Menu"' }), '\n', (0, r.jsx)(n.li, { children: 'Role: button' }), '\n', (0, r.jsx)(n.li, { children: 'Expanded: true' }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'wat-is-de-huidige-pagina-of-stap', children: 'Wat is de huidige pagina of stap?' }), '\n', (0, r.jsxs)(n.p, { children: ['Met ', (0, r.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current', children: 'aria-current' }), ' kun je aangeven wat de huidige pagina is of de huidige stap in een proces is. Een screenreader leest dit voor bij de link of stap.'] }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld bij het menu, als de huidige pagina voor de contactpagina is, in code:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li><a href="url">Home</a></li>\n  <li><a href="url">About us</a></li>\n  <li><a href="url" aria-current="page">Contact</a></li>\n</ul>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'En om aan te geven in welke stap de gebruiker is in een meerstappenformulier:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<ul>\n  <li>Stap 1</li>\n  <li aria-current="step">Stap 2</li>\n  <li>Stap 3</li>\n</ul>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Het voordeel hiervan is ook dat je CSS aan aria-current states kunt toekennen.\nJe hebt dan geen speciale "active" CSS-class meer nodig.' }), '\n', (0, r.jsx)(n.p, { children: 'In CSS:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-css', children: '[aria-current]:not([aria-current="false"]) {\n  font-weight: bold;\n}\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Dus in plaats van alleen visueel de state aan te geven met bijvoorbeeld ', (0, r.jsx)(n.code, { children: 'class="active"' }), ', maak je nu voor iedereen duidelijk wat het actieve menu-item is, door de CSS alleen aan aria-current toe te kennen.'] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toegankelijke-naam', children: 'De toegankelijke naam van een button' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/toegankelijke-naam', children: 'Geef een formulierveld toegankelijke naam met een label' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(s.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsx)(n.p, { children: 'Goede tools voor het controleren voor dit succescriterium:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsx)(n.li, { children: 'De accessibility tree van je browser.' }), '\n', (0, r.jsxs)(n.li, { children: ['Een screenreader, bijvoorbeeld ', (0, r.jsx)(n.a, { href: 'https://www.nvaccess.org/download/', children: 'NVDA voor Windows' }), ' of ', (0, r.jsx)(n.a, { href: 'https://support.apple.com/nl-nl/guide/voiceover/welcome/mac', children: 'VoiceOver/Safari' }), ' voor MacOS.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'axe Devtools' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://thepaciellogroup.github.io/WAI-ARIA-Usage/WAI-ARIA_usage.html', children: 'WAI-ARIA usage' }), ' van\nTPGi.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'controleer-de-toegankelijke-naam', children: 'Controleer de toegankelijke naam' }), '\n', (0, r.jsx)(n.p, { children: 'Elk interactief element moet een toegankelijke naam hebben. Een link vertelt waar deze naar toe gaat, een button beschrijft wat er gebeurt als je erop klikt en een formulierveld vertelt wat je moet invullen.' }), '\n', (0, r.jsx)(n.p, { children: "Een aria-label overschrijft alle tekstuele inhoud in een interactief element. Klopt deze informatie met de zichtbare tekst?\nIn onderstaand voorbeeld hoort de screenreadergebruiker 'Ga verder' en ziet een ziende gebruiker 'Stop'." }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Dit is fout, niet gebruiken --\x3e\n<button onclick="doe-iets" aria-label="Ga verder">Stop</button>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Zijn de aria-labels goed vertaald? Aria-labels moeten in de taal van de pagina geschreven zijn. Bij een meertalige website moeten dus ook de aria-labels vertaald zijn.' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Dit is fout als de website in het Nederlands is  --\x3e\n<button onclick="doe-iets" class="fa fa-search" aria-label="Search this site"></button>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'check-de-semantische-rol-en-waarde', children: 'Check de semantische rol en waarde' }), '\n', (0, r.jsx)(n.p, { children: 'Een HTML-element heeft van zichzelf al een rol en indien van toepassing een waarde.\nControleer of HTML van interactieve elementen goed gebruikt wordt. Vaak worden bijvoorbeeld links en buttons door elkaar gehaald.' }), '\n', (0, r.jsx)(n.p, { children: 'Bijvoorbeeld: verkeerd gebruik van een link, in plaats van een button:' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Dit is fout, niet gebruiken --\x3e\n<a onclick="doe-iets">Klik hier</a>\n' }) }), '\n', (0, r.jsx)(n.p, { children: 'Wordt er een rol toegekend aan een element dat een totaal andere rol heeft?' }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Dit is fout, niet gebruiken --\x3e\n<h1 role="button">Klik hier</h1>\n' }) }), '\n', (0, r.jsx)(n.h3, { id: 'controleer-of-een-state-dynamisch-wordt-aangepast', children: 'Controleer of een state dynamisch wordt aangepast' }), '\n', (0, r.jsx)(n.p, { children: 'Controleer of niet is vergeten om een state van een element ook in de ARIA-attributen aan te passen.' }), '\n', (0, r.jsx)(n.p, { children: 'Een paar voorbeelden:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Staat er het attribuut ', (0, r.jsx)(n.code, { children: 'aria-expanded' }), ' in een button, verandert de waarde van ', (0, r.jsx)(n.code, { children: 'false' }), ' naar ', (0, r.jsx)(n.code, { children: 'true' }), ' en weer terug bij het openen en sluiten van het gerelateerde element?'] }), '\n', (0, r.jsxs)(n.li, { children: ['Wordt de waarde van ', (0, r.jsx)(n.code, { children: 'aria-current="page"' }), ' aangepast als de link niet meer de huidige pagina is?'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'controleer-bij-webcomponenten-of-aria-goed-is-toegepast', children: 'Controleer bij webcomponenten of ARIA goed is toegepast' }), '\n', (0, r.jsx)(n.p, { children: 'Het toekennen van een rol betekent niet dat alle toetsenbord- en screenreader-interactie meteen goed werkt.' }), '\n', (0, r.jsxs)(n.p, { children: ['Bijvoorbeeld:\n', (0, r.jsx)(n.code, { children: '<div role="button">Klik hier</div>' }), ' alleen is onvoldoende om de div als button te laten werken. De benodigde ARIA om screenreadergebruikers te informeren over de state en ook de toetsenbord-interactie moet zijn toegevoegd.'] }), '\n', (0, r.jsx)(n.h3, { id: 'controleer-op-typefouten-en-ongeldige-waardes-voor-aria-attributen', children: 'Controleer op typefouten en ongeldige waardes voor ARIA-attributen' }), '\n', (0, r.jsxs)(n.p, { children: ['Typefouten zoals ', (0, r.jsx)(n.code, { children: 'aria-lable' }), ', ', (0, r.jsx)(n.code, { children: 'treu' }), ', ', (0, r.jsx)(n.code, { children: 'role="presenational"' }), ' zijn niet ongewoon. ', (0, r.jsx)(n.a, { href: 'https://www.deque.com/axe/browser-extensions/', children: 'axe Devtools' }), ' markeert deze fouten.'] }), '\n', (0, r.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, r.jsx)(n.p, { children: 'Dit WCAG-succescriterium gaat over toegankelijke code voor onder andere de naam. Niet alle fouten in de naam zijn alleen een fout in de categorie "Naam, rol, waarde".\nDit zijn bijvoorbeeld andere succescriteria die ook te maken hebben met de naam:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/2.4.4', children: '2.4.4 Linkdoel (in context)' }), ' en ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG21-nl/#linkdoel-alleen-link', children: '2.4.9 Linkdoel (alleen doel)' }), ': schrijf een duidelijke linktekst, dat is de toegankelijke naam van ', (0, r.jsx)(n.code, { children: 'link' }), '-rol.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: '/wcag/2.4.6', children: '2.4.6 Koppen en labels' }), ' zegt bijvoorbeeld dat alle formulier-elementen vindbaar moeten zijn met een label. Als er helemaal geen label is, dan is dit een ook fout voor succescriterium 2.4.6.'] }), '\n'] }), '\n', (0, r.jsx)(n.h3, { id: 'fout-aria-expanded-toggle-staat-niet-op-de-button-maar-op-het-gerelateerde-element', children: 'Fout: aria-expanded toggle staat niet op de button, maar op het gerelateerde element' }), '\n', (0, r.jsxs)(n.p, { children: ['Het ARIA-attribuut ', (0, r.jsx)(n.code, { children: 'aria-expanded' }), ' is bedoeld om aan te geven of een menu, dialog of accordeon open of dicht is.\nEen veel voorkomende fout is dat deze toggle op de component zelf staat en niet op de button die het open of sluit. Dit lijkt logisch want dat element is al dan niet zichtbaar. Maar een blinde screenreadergebruiker kan zo nooit ontdekken wat de state is.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Dit is fout, niet gebruiken --\x3e\n<button>Menu</button>\n<div id="hamburger" aria-expanded="false">[...]</div>\n' }) }), '\n', (0, r.jsxs)(n.p, { children: ['Oplossing: zet de toggle ', (0, r.jsx)(n.code, { children: 'aria-expanded="true/false"' }), ' op de button, omdat deze state bij de button wordt voorgelezen.'] }), '\n', (0, r.jsx)(n.pre, { children: (0, r.jsx)(n.code, { className: 'language-html', children: '<button aria-expanded="false">Menu</button>\n<div id="hamburger">[...]</div>\n' }) }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#name-role-value', children: (0, r.jsx)('span', { lang: 'en', children: '4.1.2 Name, role, value' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#naam-rol-waarde', children: '4.1.2 Naam, rol, waarde' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#name-role-value', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 4.1.2 Name, role, value' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 4.1.2 Name, role, value' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(o.CY, { children: (0, r.jsx)(i.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(d.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(i.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
  },
  60256: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var r = t(52676),
    a = t(40139);
   function i(e) {
    const n = { a: 'a', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  99042: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var r = t(52676),
    a = t(40139);
   function i(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  91114: (e, n, t) => {
   t.d(n, { ZP: () => l });
   var r = t(52676),
    a = t(40139);
   function i(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(i, { ...e }) }) : i(e);
   }
  },
  41757: (e, n, t) => {
   t.d(n, { V: () => i });
   var r = t(4814),
    a = t(52676);
   const i = (e) => {
    let { children: n, className: t, level: i = 1, suffix: l, ...o } = e;
    return (0, a.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${i}`, t), ...o, children: [(0, a.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, a.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, t) => {
   t.d(n, { U: () => c });
   var r = t(40139),
    a = t(16167),
    i = t(52676);
   const l = (e, n) => {
     const t = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === t.protocol) {
      const { pathname: t, search: r, hash: a } = new URL(n, new URL(e, 'http://example.com/'));
      return t + r + a;
     }
     return t.toString();
    },
    o = { 1: {}, 2: { h1: a.XJ, h2: a.aC, h3: a.k8, h4: a.by, h5: a.Cd }, 3: { h1: a.aC, h2: a.k8, h3: a.by, h4: a.Cd, h5: a.Cd }, 4: { h1: a.k8, h2: a.by, h3: a.Cd, h4: a.Cd, h5: a.Cd }, 5: { h1: a.by, h2: a.Cd, h3: a.Cd, h4: a.Cd, h5: a.Cd }, 6: { h1: a.Cd, h2: a.Cd, h3: a.Cd, h4: a.Cd, h5: a.Cd } },
    s = (e) => ({
     img: (n) => {
      let { src: t, ...r } = n;
      return (0, i.jsx)('img', { ...r, src: l(e, t), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    d = (e, n) => {
     if (e) {
      const e = { ...o[n - 1] };
      return (e.h1 = () => null), e;
     }
     return o[n];
    },
    c = (e) => {
     let { children: n, omitH1: t = !1, headingLevel: a = 1, baseUrl: l = '', components: o = {} } = e;
     return (0, i.jsx)(r.Z, { components: { ...d(t, a), ...s(l), ...o }, children: n });
    };
  },
  46364: (e, n, t) => {
   t.d(n, { j: () => l });
   var r = t(16167),
    a = t(41757),
    i = t(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: t, ...l } = e;
    return (0, i.jsx)(a.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: t && (0, i.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: t }), ...l, children: n });
   };
  },
  40139: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => l });
   var r = t(75271);
   const a = {},
    i = r.createContext(a);
   function l(e) {
    const n = r.useContext(i);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(a) : e.components || a) : l(e.components)), r.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
