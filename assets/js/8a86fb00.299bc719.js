'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [65647],
 {
  95935: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => b, contentTitle: () => u, default: () => k, frontMatter: () => g, metadata: () => m, toc: () => p });
   var r = i(52676),
    t = i(40139),
    s = i(57716),
    l = i(46364),
    d = i(28439),
    a = i(21339),
    o = i(92828),
    c = i(38391);
   function h(e) {
    const n = { p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsx)(n.p, { children: 'Elke actie is uit te voeren met een toetsenbord.' });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 2.1.1 Toetsenbord', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.1.1 Toetsenbord', pagination_label: 'WCAG-succescriterium 2.1.1 Toetsenbord', description: 'Elke actie is uit te voeren met een toetsenbord.', slug: '2.1.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toetsenbordtoegankelijk', 'operable', 'keyboard accessible', 'keyboard'] },
    u = void 0,
    m = { id: 'wcag/2.1.01', title: 'WCAG-succescriterium 2.1.1 Toetsenbord', description: 'Elke actie is uit te voeren met een toetsenbord.', source: '@site/docs/wcag/2.1.01.mdx', sourceDirName: 'wcag', slug: '/wcag/2.1.1', permalink: '/wcag/2.1.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.1.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.1.1 Toetsenbord', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.1.1 Toetsenbord', pagination_label: 'WCAG-succescriterium 2.1.1 Toetsenbord', description: 'Elke actie is uit te voeren met een toetsenbord.', slug: '2.1.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toetsenbordtoegankelijk', 'operable', 'keyboard accessible', 'keyboard'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 1.4.13 Content bij hover of focus', permalink: '/wcag/1.4.13' }, next: { title: 'WCAG-succescriterium 2.1.2 Geen toetsenbordval', permalink: '/wcag/2.1.2' } },
    b = {},
    p = [
     { value: 'In het kort', id: 'in-het-kort', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe het hoort te werken', id: 'hoe-het-hoort-te-werken', level: 3 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(l.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), '\n', (0, r.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Elke actie is uit te voeren met een toetsenbord.' })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: (0, r.jsxs)(n.p, { children: ['Acties die je kunt uitvoeren met een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#aanwijzer', children: 'aanwijzer' }), ' kunnen ook met een toetsenbord.'] }) })] }), (0, r.jsxs)('div', { class: 'dl__item', children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, r.jsx)('dd', { class: 'dl__definition', children: (0, r.jsx)(n.p, { children: 'Veel mensen zijn afhankelijk van bediening met het toetsenbord, onder andere mensen die blind zijn of een beperkte\nmobiliteit hebben.' }) })] })] }), '\n', (0, r.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, r.jsx)(j, {}), '\n', (0, r.jsxs)(n.p, { children: ['Het toetsenbord is een veel gebruikt hulpmiddel voor mensen met een beperking. Niet iedereen kan een muis of een ander apparaat met aanwijzer gebruiken. Dit criterium is voor tal van hulpmiddelen die zich gedragen als een toetsenbord. Denk hierbij naast het toetsenbord aan een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een ', (0, r.jsx)(n.a, { href: '/woordenlijst/#eenfunctieschakelaar', children: 'eenfunctieschakelaar' }), '.'] }), '\n', (0, r.jsx)(n.h3, { id: 'hoe-het-hoort-te-werken', children: 'Hoe het hoort te werken' }), '\n', (0, r.jsx)(n.p, { children: 'Het is relatief laagdrempelig om verbeteringen te vinden voor dit criterium; een computer met toetsenbord volstaat. Dit zorgt ervoor dat velen een bijdrage kunnen leveren aan het voldoen aan dit criterium.' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['De interactieve onderdelen op een pagina moet je kunnen bereiken met ', (0, r.jsx)('kbd', { children: 'tab' }), ' en de combinatie ', (0, r.jsx)('kbd', { children: 'shift+tab' }), '. ', (0, r.jsx)('kbd', { children: 'tab' }), ' navigeert je van het ene naar het andere interactieve element in een logische volgorde (', (0, r.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'WCAG-successcriterium 2.4.3 Focus volgorde' }), '). ', (0, r.jsx)('kbd', { children: 'shift+tab' }), ' doet hetzelfde maar in omgekeerde volgorde.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Binnen een onderdeel zijn soms de pijltjestoetsen nodig. Denk hierbij aan groeperingen zoals radio-buttons, tabbladen en kalenders. Een groepering zoals een kalender is bereikbaar met ', (0, r.jsx)('kbd', { children: 'tab' }), '. Losse dagen zijn daarna bereikbaar met pijltjestoetsen.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Het activeren of bedienen van elementen moet ook met het toetsenbord kunnen.', '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Een link is te activeren met ', (0, r.jsx)('kbd', { children: 'return/enter' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Een knop is daarnaast te activeren met de ', (0, r.jsx)('kbd', { children: 'spatiebalk' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Selecties binnen een onderdeel kunnen vaak met de ', (0, r.jsx)('kbd', { children: 'spatiebalk' }), '.'] }), '\n', (0, r.jsx)(n.li, { children: 'Sommige elementen zoals sliders zijn te bedienen met pijltjestoetsen.' }), '\n', (0, r.jsxs)(n.li, { children: ['Een formulier kan verzonden worden met ', (0, r.jsx)('kbd', { children: 'return/enter' }), ' in plaats van een ', (0, r.jsx)(n.code, { children: '<button>' }), ' te gebruiken. Dit heet ', (0, r.jsx)(n.a, { href: 'https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission', children: (0, r.jsx)('span', { lang: 'en', children: 'implicit submission' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Soms zijn er nog andere manieren om het toetsenbord te gebruik. Denk hierbij aan acties annuleren met ', (0, r.jsx)('kbd', { children: 'esc' }), ' of navigeren met toetsen als ', (0, r.jsx)('kbd', { children: 'home' }), ' en ', (0, r.jsx)('kbd', { children: 'end' }), '. Als er twijfel is bij zelfgebouwde elementen, vergelijk dan met pure HTML.'] }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Op MacOS kunnen extra instellingen nodig zijn:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://support.apple.com/en-gb/guide/mac-help/mchlc06d1059/mac', children: (0, r.jsx)('span', { lang: 'en', children: 'Keyboard navigation on MacOS' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.a11y-collective.com/blog/how-to-activate-keyboard-navigation-on-macos/', children: (0, r.jsx)('span', { lang: 'en', children: 'How to activate keyboard navigation on MacOS' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, r.jsxs)(n.ol, { children: ['\n', (0, r.jsx)(n.li, { children: 'Vind alle plekken op een website waar je iets kan doen.' }), '\n', (0, r.jsx)(n.li, { children: 'Controleer of je het met een toetsenbord kan doen.' }), '\n'] }), '\n', (0, r.jsx)(n.p, { children: 'Deze tests moeten ook slagen als de website ingezoomd is. Er kunnen dan andere interactieve elementen aanwezig zijn.' }), '\n', (0, r.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, r.jsxs)('dl', { children: [(0, r.jsx)('dt', { class: 'dl__term', children: 'Semantische HTML' }), (0, r.jsxs)('dd', { class: 'dl__definition', children: ['Gebruik zo veel mogelijk HTML-elementen in plaats van zelfgebouwde onderdelen. Zelfgebouwde onderdelen houden vaak geen rekening met bediening door een toetsenbord terwijl HTML standaard goed werkt met een toetsenbord. Een niet-interactief element dat klikbaar is gemaakt met JavaScript zal standaard niet werken met een toetsenbord. Een element dat van zichzelf interactief is (', (0, r.jsx)(n.code, { children: '<button>' }), ', ', (0, r.jsx)(n.code, { children: '<link>' }), ', etc) werkt wel.'] }), (0, r.jsx)('dt', { class: 'dl__term', children: 'Gerelateerde successcriteria' }), (0, r.jsxs)('dd', { class: 'dl__definition', children: [(0, r.jsx)(n.p, { children: 'Als je test voor bediening met het toetsenbord, test dan meteen gerelateerde successcriteria zoals:' }), (0, r.jsxs)('ul', { children: [(0, r.jsxs)('li', { children: [(0, r.jsx)('a', { href: '/wcag/1.4.11/', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), ' voor de focusweergave'] }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '/wcag/2.1.2/', children: 'WCAG-succescriterium 2.1.2 Geen toetsenbordval' }) }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '/wcag/2.1.3/', children: 'WCAG-succescriterium 2.1.3 Toetsenbord (geen uitzondering)' }) }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '/wcag/2.4.1/', children: 'WCAG-succescriterium 2.4.1 Blokken omzeilen' }) }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '/wcag/2.4.3/', children: 'WCAG-succescriterium 2.4.3 Focus volgorde' }) }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '/wcag/2.4.7/', children: 'WCAG-succescriterium 2.4.7 Focus zichtbaar' }) }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '/wcag/2.4.13/', children: 'WCAG-succescriterium 2.4.13 Focusweergave' }) }), (0, r.jsx)('li', { children: (0, r.jsx)('a', { href: '/wcag/3.2.1/', children: 'WCAG-succescriterium 3.2.1 Bij focus' }) })] })] }), (0, r.jsx)('dt', { class: 'dl__term', children: 'Volgorde in de code' }), (0, r.jsxs)('dd', { class: 'dl__definition', children: ['Een uitklappend menu en andere overlappende onderdelen zoals chatvensters en cookiemeldingen zijn lastig voor het toetsenbord. Visueel worden ze vaak onderaan een pagina geplaatst. Voor een toetsenbord is het einde van de pagina vaak erg onhandig. De code van een uitklappend menu plaats je het liefst direct na de knop die het opent. Zo zit het voor de navigatie volgorde op een logische plek. De gebruiker opent iets, en met een opvolgende ', (0, r.jsx)(n.code, { children: 'tab' }), ' is het gefocust.'] }), (0, r.jsx)('dt', { class: 'dl__term', children: 'Dialoogvensters' }), (0, r.jsxs)('dd', { class: 'dl__definition', children: ['Bij het openen van een dialoogvenster moet de focus hierop geplaatst worden. Welk onderdeel de focus krijgt hangt af van de inhoud van het venster. Dit wordt uitgelegd op de Engelstalige pagina ', (0, r.jsx)('a', { href: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboard_interaction', children: (0, r.jsx)('span', { lang: 'en', children: 'Dialog (Modal) Pattern' }) }), ' van de ARIA Authoring Practices Guide (APG). Als een dialoogvenster sluit moet de focus weer terug naar het element dat het opende.'] }), (0, r.jsx)('dt', { class: 'dl__term', children: 'Hover' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Elementen die reageren op een hover moeten ook werken met het toetsenbord. Denk hierbij bijvoorbeeld aan tooltips en uitklappende menus.' }), (0, r.jsx)('dt', { class: 'dl__term', children: 'Tabindex' }), (0, r.jsxs)('dd', { class: 'dl__definition', children: [(0, r.jsx)('a', { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }), '. Voeg ook geen ', (0, r.jsx)(n.code, { children: 'tabindex="0"' }), ' toe aan elementen die niet interactief zijn. Als een element wel interactief moet zijn, voeg ook een naam toe voor ', (0, r.jsx)('a', { href: '/wcag/4.1.2/', children: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde' }), '.'] }), (0, r.jsx)('dt', { class: 'dl__term', children: 'Ingewikkelde onderdelen' }), (0, r.jsx)('dd', { class: 'dl__definition', children: 'Kaarten en visualizaties zijn soms erg lastig toegankelijk te maken voor een toetsenbord. Als er geen andere oplossing mogelijk is kan er een alternatief geboden worden. Zo kan een kaart met markers en adressen aangevuld worden met een lijst met dezelfde adressen. Let wel op dat het alternatief een volwaardige oplossing is.' })] }), '\n', (0, r.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Zorg dat het formulier werkt met een toetsenbord' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Buttons: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Buttons: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Formulieren - Wanneer gebruik je welk formulierelement: ', (0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), '.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, r.jsx)(a.ZP, {}), '\n', (0, r.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: (0, r.jsx)('span', { lang: 'en', children: 'A Guide To Keyboard Accessibility: HTML And CSS' }) }), ' by Cristian D\xedaz in Smashing Magazine.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: (0, r.jsx)('span', { lang: 'en', children: 'Tabindex: 0 and -1 Values' }) }), ' van WebAIM.'] }), '\n', (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: (0, r.jsx)('span', { lang: 'en', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }) }), ' van Andrew Nevins.'] }), '\n'] }), '\n', (0, r.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#keyboard', children: (0, r.jsx)('span', { lang: 'en', children: '2.1.1 Keyboard' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#keyboard', children: '2.1.1 Toetsenbord' }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, r.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard', children: (0, r.jsx)('span', { lang: 'en', children: 'Quick Reference 2.1.1 Keyboard' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html', children: (0, r.jsx)('span', { lang: 'en', children: 'Understanding SC 2.1.1 Keyboard' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(d.CY, { children: (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(o.ZP, {}) }) }), '\n', (0, r.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, r.jsx)(s.U, { omitH1: !0, headinglevel: 3, children: (0, r.jsx)(c.ZP, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
   }
  },
  21339: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  92828: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  38391: (e, n, i) => {
   i.d(n, { ZP: () => l });
   var r = i(52676),
    t = i(40139);
   function s(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function l(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(s, { ...e }) }) : s(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => s });
   var r = i(4814),
    t = i(52676);
   const s = (e) => {
    let { children: n, className: i, level: s = 1, suffix: l, ...d } = e;
    return (0, t.jsxs)('hgroup', { className: (0, r.Z)('nlds-inline-heading-group', `utrecht-heading-${s}`, i), ...d, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), l && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [l ? ' ' : '', l] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => c });
   var r = i(40139),
    t = i(28439),
    s = i(52676);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    d = { 1: {}, 2: { h1: t.XJ, h2: t.aC, h3: t.k8, h4: t.by, h5: t.Cd }, 3: { h1: t.aC, h2: t.k8, h3: t.by, h4: t.Cd, h5: t.Cd }, 4: { h1: t.k8, h2: t.by, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 5: { h1: t.by, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd }, 6: { h1: t.Cd, h2: t.Cd, h3: t.Cd, h4: t.Cd, h5: t.Cd } },
    a = (e) => ({
     img: (n) => {
      let { src: i, ...r } = n;
      return (0, s.jsx)('img', { ...r, src: l(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    o = (e, n) => {
     if (e) {
      const e = { ...d[n - 1] };
      return (e.h1 = () => null), e;
     }
     return d[n];
    },
    c = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: t = 1, baseUrl: l = '', components: d = {} } = e;
     return (0, s.jsx)(r.Z, { components: { ...o(i, t), ...a(l), ...d }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => l });
   var r = i(28439),
    t = i(41757),
    s = i(52676);
   const l = (e) => {
    let { children: n, conformanceLevel: i, ...l } = e;
    return (0, s.jsx)(t.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, s.jsx)(r.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...l, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => d, a: () => l });
   var r = i(75271);
   const t = {},
    s = r.createContext(t);
   function l(e) {
    const n = r.useContext(s);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function d(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : l(e.components)), r.createElement(s.Provider, { value: n }, e.children);
   }
  },
 },
]);
