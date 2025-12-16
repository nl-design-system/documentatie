'use strict';
(globalThis.webpackChunk_nl_design_system_website = globalThis.webpackChunk_nl_design_system_website || []).push([
 [13864],
 {
  19877: (e, n, i) => {
   i.d(n, { E: () => l });
   var r = i(68873),
    t = i(98584),
    s = i(86070);
   const l = ({ children: e, conformanceLevel: n, ...i }) => (0, s.jsx)(t.p, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: n && (0, s.jsx)(r.KE, { className: 'nlds-inline-heading-group__badge', children: n }), ...i, children: e });
  },
  28890: (e, n, i) => {
   i.d(n, { Ay: () => d, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [{ value: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting', id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', level: 2 }];
   function l(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, r.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, r.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, r.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  46563: (e, n, i) => {
   i.d(n, { o: () => c });
   var r = i(85248),
    t = i(68873),
    s = i(86070);
   const l = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: r, hash: t } = new URL(n, new URL(e, 'http://example.com/'));
      return i + r + t;
     }
     return i.toString();
    },
    d = { 1: {}, 2: { h1: t.fV, h2: t._B, h3: t.f_, h4: t.mM, h5: t.TT }, 3: { h1: t._B, h2: t.f_, h3: t.mM, h4: t.TT, h5: t.TT }, 4: { h1: t.f_, h2: t.mM, h3: t.TT, h4: t.TT, h5: t.TT }, 5: { h1: t.mM, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT }, 6: { h1: t.TT, h2: t.TT, h3: t.TT, h4: t.TT, h5: t.TT } },
    o = (e) => ({ img: ({ src: n, ...i }) => (0, s.jsx)('img', { ...i, src: l(e, n), className: 'utrecht-img utrecht-img--fit' }) }),
    a = (e, n) => {
     if (e) {
      const e = { ...d[n - 1] };
      return (e.h1 = () => null), e;
     }
     return d[n];
    },
    c = ({ children: e, omitH1: n = !1, headingLevel: i = 1, baseUrl: t = '', components: l = {} }) => (0, s.jsx)(r.x, { components: { ...a(n, i), ...o(t), ...l }, children: e });
  },
  47219: (e, n, i) => {
   i.d(n, { Ay: () => d, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', h1: 'h1', header: 'header', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }) }), '\n', (0, r.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  49355: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => b, contentTitle: () => m, default: () => k, frontMatter: () => u, metadata: () => r, toc: () => p });
   const r = JSON.parse('{"id":"wcag/2.1.01","title":"WCAG-succescriterium 2.1.1 Toetsenbord","description":"Elke actie is uit te voeren met een toetsenbord.","source":"@site/docs/wcag/2.1.01.mdx","sourceDirName":"wcag","slug":"/wcag/2.1.1","permalink":"/wcag/2.1.1","draft":false,"unlisted":false,"editUrl":"https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.1.01.mdx","tags":[],"version":"current","frontMatter":{"title":"WCAG-succescriterium 2.1.1 Toetsenbord","hide_title":true,"hide_table_of_contents":false,"sidebar_label":"2.1.1 Toetsenbord","pagination_label":"WCAG-succescriterium 2.1.1 Toetsenbord","description":"Elke actie is uit te voeren met een toetsenbord.","slug":"2.1.1","keywords":["WCAG","A","bedienbaar","toetsenbordtoegankelijk","operable","keyboard accessible","keyboard"]},"sidebar":"richtlijnen","previous":{"title":"WCAG-succescriterium 1.4.13 Content bij hover of focus","permalink":"/wcag/1.4.13"},"next":{"title":"WCAG-succescriterium 2.1.2 Geen toetsenbordval","permalink":"/wcag/2.1.2"}}');
   var t = i(86070),
    s = i(85248),
    l = i(46563),
    d = i(19877),
    o = i(68873),
    a = i(52105),
    c = i(28890),
    h = i(47219);
   function j(e) {
    const n = { p: 'p', ...(0, s.R)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Elke actie is uit te voeren met een toetsenbord.' });
   }
   function g(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(j, { ...e }) }) : j(e);
   }
   const u = { title: 'WCAG-succescriterium 2.1.1 Toetsenbord', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.1.1 Toetsenbord', pagination_label: 'WCAG-succescriterium 2.1.1 Toetsenbord', description: 'Elke actie is uit te voeren met een toetsenbord.', slug: '2.1.1', keywords: ['WCAG', 'A', 'bedienbaar', 'toetsenbordtoegankelijk', 'operable', 'keyboard accessible', 'keyboard'] },
    m = void 0,
    b = {},
    p = [{ value: 'In het kort', id: 'in-het-kort', level: 2 }, { value: 'Uitleg', id: 'uitleg', level: 2 }, { value: 'Hoe het hoort te werken', id: 'hoe-het-hoort-te-werken', level: 3 }, { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 }, { value: 'Tips', id: 'tips', level: 2 }, { value: 'Gerelateerde NL Design System-richtlijnen', id: 'gerelateerde-nl-design-system-richtlijnen', level: 2 }, { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 }, ...a.RM, { value: 'Bronnen', id: 'bronnen', level: 2 }, { value: 'W3C referenties', id: 'w3c-referenties', level: 2 }, ...c.RM, { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 }, ...h.RM];
   function x(e) {
    const n = { a: 'a', code: 'code', h2: 'h2', h3: 'h3', li: 'li', ol: 'ol', p: 'p', ul: 'ul', ...(0, s.R)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', (0, t.jsx)(d.E, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.1.1 Toetsenbord' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Elke actie is uit te voeren met een toetsenbord.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: (0, t.jsxs)(n.p, { children: ['Acties die je kunt uitvoeren met een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#aanwijzer', children: 'aanwijzer' }), ' kunnen ook met een toetsenbord.'] }) })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: (0, t.jsx)(n.p, { children: 'Veel mensen zijn afhankelijk van bediening met het toetsenbord, onder andere mensen die blind zijn of een beperkte\nmobiliteit hebben.' }) })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(g, {}), '\n', (0, t.jsxs)(n.p, { children: ['Het toetsenbord is een veel gebruikt hulpmiddel voor mensen met een beperking. Niet iedereen kan een muis of een ander apparaat met aanwijzer gebruiken. Dit criterium is voor tal van hulpmiddelen die zich gedragen als een toetsenbord. Denk hierbij naast het toetsenbord aan een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#screenreader', children: 'screenreader' }), ' of een ', (0, t.jsx)(n.a, { href: '/woordenlijst/#eenfunctieschakelaar', children: 'eenfunctieschakelaar' }), '.'] }), '\n', (0, t.jsx)(n.h3, { id: 'hoe-het-hoort-te-werken', children: 'Hoe het hoort te werken' }), '\n', (0, t.jsx)(n.p, { children: 'Het is relatief laagdrempelig om verbeteringen te vinden voor dit criterium; een computer met toetsenbord volstaat. Dit zorgt ervoor dat velen een bijdrage kunnen leveren aan het voldoen aan dit criterium.' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['De interactieve onderdelen op een pagina moet je kunnen bereiken met ', (0, t.jsx)('kbd', { children: 'tab' }), ' en de combinatie ', (0, t.jsx)('kbd', { children: 'shift+tab' }), '. ', (0, t.jsx)('kbd', { children: 'tab' }), ' navigeert je van het ene naar het andere interactieve element in een logische volgorde (', (0, t.jsx)(n.a, { href: '/wcag/2.4.3/', children: 'WCAG-successcriterium 2.4.3 Focus volgorde' }), '). ', (0, t.jsx)('kbd', { children: 'shift+tab' }), ' doet hetzelfde maar in omgekeerde volgorde.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Binnen een onderdeel zijn soms de pijltjestoetsen nodig. Denk hierbij aan groeperingen zoals radio-buttons, tabbladen en kalenders. Een groepering zoals een kalender is bereikbaar met ', (0, t.jsx)('kbd', { children: 'tab' }), '. Losse dagen zijn daarna bereikbaar met pijltjestoetsen.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Het activeren of bedienen van elementen moet ook met het toetsenbord kunnen.', '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Een link is te activeren met ', (0, t.jsx)('kbd', { children: 'return/enter' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Een knop is daarnaast te activeren met de ', (0, t.jsx)('kbd', { children: 'spatiebalk' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Selecties binnen een onderdeel kunnen vaak met de ', (0, t.jsx)('kbd', { children: 'spatiebalk' }), '.'] }), '\n', (0, t.jsx)(n.li, { children: 'Sommige elementen zoals sliders zijn te bedienen met pijltjestoetsen.' }), '\n', (0, t.jsxs)(n.li, { children: ['Een formulier kan verzonden worden met ', (0, t.jsx)('kbd', { children: 'return/enter' }), ' in plaats van een ', (0, t.jsx)(n.code, { children: '<button>' }), ' te gebruiken. Dit heet ', (0, t.jsx)(n.a, { href: 'https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission', children: (0, t.jsx)('span', { lang: 'en', children: 'implicit submission' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Soms zijn er nog andere manieren om het toetsenbord te gebruik. Denk hierbij aan acties annuleren met ', (0, t.jsx)('kbd', { children: 'esc' }), ' of navigeren met toetsen als ', (0, t.jsx)('kbd', { children: 'home' }), ' en ', (0, t.jsx)('kbd', { children: 'end' }), '. Als er twijfel is bij zelfgebouwde elementen, vergelijk dan met pure HTML.'] }), '\n'] }), '\n'] }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Op MacOS kunnen extra instellingen nodig zijn:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://support.apple.com/en-gb/guide/mac-help/mchlc06d1059/mac', children: (0, t.jsx)('span', { lang: 'en', children: 'Keyboard navigation on MacOS' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.a11y-collective.com/blog/how-to-activate-keyboard-navigation-on-macos/', children: (0, t.jsx)('span', { lang: 'en', children: 'How to activate keyboard navigation on MacOS' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsxs)(n.ol, { children: ['\n', (0, t.jsx)(n.li, { children: 'Vind alle plekken op een website waar je iets kan doen.' }), '\n', (0, t.jsx)(n.li, { children: 'Controleer of je het met een toetsenbord kan doen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Deze tests moeten ook slagen als de website ingezoomd is. Er kunnen dan andere interactieve elementen aanwezig zijn.' }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Semantische HTML' }), (0, t.jsxs)('dd', { class: 'dl__definition', children: ['Gebruik zo veel mogelijk HTML-elementen in plaats van zelfgebouwde onderdelen. Zelfgebouwde onderdelen houden vaak geen rekening met bediening door een toetsenbord terwijl HTML standaard goed werkt met een toetsenbord. Een niet-interactief element dat klikbaar is gemaakt met JavaScript zal standaard niet werken met een toetsenbord. Een element dat van zichzelf interactief is (', (0, t.jsx)(n.code, { children: '<button>' }), ', ', (0, t.jsx)(n.code, { children: '<link>' }), ', etc) werkt wel.'] }), (0, t.jsx)('dt', { class: 'dl__term', children: 'Gerelateerde successcriteria' }), (0, t.jsxs)('dd', { class: 'dl__definition', children: [(0, t.jsx)(n.p, { children: 'Als je test voor bediening met het toetsenbord, test dan meteen gerelateerde successcriteria zoals:' }), (0, t.jsxs)('ul', { children: [(0, t.jsxs)('li', { children: [(0, t.jsx)('a', { href: '/wcag/1.4.11/', children: 'WCAG-succescriterium 1.4.11 Contrast van niet-tekstuele content' }), ' voor de focusweergave'] }), (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: '/wcag/2.1.2/', children: 'WCAG-succescriterium 2.1.2 Geen toetsenbordval' }) }), (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: '/wcag/2.1.3/', children: 'WCAG-succescriterium 2.1.3 Toetsenbord (geen uitzondering)' }) }), (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: '/wcag/2.4.1/', children: 'WCAG-succescriterium 2.4.1 Blokken omzeilen' }) }), (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: '/wcag/2.4.3/', children: 'WCAG-succescriterium 2.4.3 Focus volgorde' }) }), (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: '/wcag/2.4.7/', children: 'WCAG-succescriterium 2.4.7 Focus zichtbaar' }) }), (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: '/wcag/2.4.13/', children: 'WCAG-succescriterium 2.4.13 Focusweergave' }) }), (0, t.jsx)('li', { children: (0, t.jsx)('a', { href: '/wcag/3.2.1/', children: 'WCAG-succescriterium 3.2.1 Bij focus' }) })] })] }), (0, t.jsx)('dt', { class: 'dl__term', children: 'Volgorde in de code' }), (0, t.jsxs)('dd', { class: 'dl__definition', children: ['Een uitklappend menu en andere overlappende onderdelen zoals chatvensters en cookiemeldingen zijn lastig voor het toetsenbord. Visueel worden ze vaak onderaan een pagina geplaatst. Voor een toetsenbord is het einde van de pagina vaak erg onhandig. De code van een uitklappend menu plaats je het liefst direct na de knop die het opent. Zo zit het voor de navigatie volgorde op een logische plek. De gebruiker opent iets, en met een opvolgende ', (0, t.jsx)(n.code, { children: 'tab' }), ' is het gefocust.'] }), (0, t.jsx)('dt', { class: 'dl__term', children: 'Dialoogvensters' }), (0, t.jsxs)('dd', { class: 'dl__definition', children: ['Bij het openen van een dialoogvenster moet de focus hierop geplaatst worden. Welk onderdeel de focus krijgt hangt af van de inhoud van het venster. Dit wordt uitgelegd op de Engelstalige pagina ', (0, t.jsx)('a', { href: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboard_interaction', children: (0, t.jsx)('span', { lang: 'en', children: 'Dialog (Modal) Pattern' }) }), ' van de ARIA Authoring Practices Guide (APG). Als een dialoogvenster sluit moet de focus weer terug naar het element dat het opende.'] }), (0, t.jsx)('dt', { class: 'dl__term', children: 'Hover' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Elementen die reageren op een hover moeten ook werken met het toetsenbord. Denk hierbij bijvoorbeeld aan tooltips en uitklappende menus.' }), (0, t.jsx)('dt', { class: 'dl__term', children: 'Tabindex' }), (0, t.jsxs)('dd', { class: 'dl__definition', children: [(0, t.jsx)('a', { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }), '. Voeg ook geen ', (0, t.jsx)(n.code, { children: 'tabindex="0"' }), ' toe aan elementen die niet interactief zijn. Als een element wel interactief moet zijn, voeg ook een naam toe voor ', (0, t.jsx)('a', { href: '/wcag/4.1.2/', children: 'WCAG-succescriterium 4.1.2 Naam, rol, waarde' }), '.'] }), (0, t.jsx)('dt', { class: 'dl__term', children: 'Ingewikkelde onderdelen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Kaarten en visualizaties zijn soms erg lastig toegankelijk te maken voor een toetsenbord. Als er geen andere oplossing mogelijk is kan er een alternatief geboden worden. Zo kan een kaart met markers en adressen aangevuld worden met een lijst met dezelfde adressen. Let wel op dat het alternatief een volwaardige oplossing is.' })] }), '\n', (0, t.jsx)(n.h2, { id: 'gerelateerde-nl-design-system-richtlijnen', children: 'Gerelateerde NL Design System-richtlijnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/', children: 'Zorg dat het formulier werkt met een toetsenbord' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Toetsenbord: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/toetsenbord/tabindex/', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Buttons: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/toetsenbordbediening/', children: 'Toetsenbordbediening van een button' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Buttons: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/buttons/disabled-submitbuttons/', children: 'Disabled submitbuttons' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Formulieren - Wanneer gebruik je welk formulierelement: ', (0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/wanneer-welk-form-element/iedereen-kan-invullen/', children: 'Zorg dat iedereen een formulierelement kan bedienen of geef een alternatief' }), '.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(a.Ay, {}), '\n', (0, t.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/', children: (0, t.jsx)('span', { lang: 'en', children: 'A Guide To Keyboard Accessibility: HTML And CSS' }) }), ' by Cristian D\xedaz in Smashing Magazine.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://webaim.org/techniques/keyboard/tabindex#zero-negative-one', children: (0, t.jsx)('span', { lang: 'en', children: 'Tabindex: 0 and -1 Values' }) }), ' van WebAIM.'] }), '\n', (0, t.jsxs)(n.li, { children: [(0, t.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: (0, t.jsx)('span', { lang: 'en', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }) }), ' van Andrew Nevins.'] }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#keyboard', children: (0, t.jsx)('span', { lang: 'en', children: '2.1.1 Keyboard' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#keyboard', children: '2.1.1 Toetsenbord' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.1.1 Keyboard' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.1.1 Keyboard' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(o.K7, { children: (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.Ay, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(l.o, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(h.Ay, {}) })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, s.R)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e);
   }
  },
  52105: (e, n, i) => {
   i.d(n, { Ay: () => d, RM: () => s });
   var r = i(86070),
    t = i(85248);
   const s = [];
   function l(e) {
    const n = { a: 'a', p: 'p', ...(0, t.R)(), ...e.components };
    return (0, r.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, r.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function d(e = {}) {
    const { wrapper: n } = { ...(0, t.R)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  85248: (e, n, i) => {
   i.d(n, { R: () => l, x: () => d });
   var r = i(30758);
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
  98584: (e, n, i) => {
   i.d(n, { p: () => s });
   var r = i(13526),
    t = i(86070);
   const s = ({ children: e, className: n, level: i = 1, suffix: s, ...l }) => (0, t.jsxs)('hgroup', { className: (0, r.A)('nlds-inline-heading-group', `utrecht-heading-${i}`, n), ...l, children: [(0, t.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: e }), s && (0, t.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [s ? ' ' : '', s] })] });
  },
 },
]);
