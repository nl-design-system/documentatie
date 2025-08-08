'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8538],
 {
  97621: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => u, default: () => x, frontMatter: () => g, metadata: () => p, toc: () => k });
   var t = i(52676),
    s = i(40139),
    r = i(57716),
    a = i(46364),
    l = i(16167),
    d = i(60256),
    c = i(99042),
    o = i(91114);
   function h(e) {
    const n = { p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsx)(n.p, { children: 'Tijdslimieten zijn aan te passen.' });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
   const g = { title: 'WCAG-succescriterium 2.2.1 Timing aanpasbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.2.1 Timing aanpasbaar', pagination_label: 'WCAG-succescriterium 2.2.1 Timing aanpasbaar', description: 'Tijdslimieten zijn aan te passen.', slug: '2.2.1', keywords: ['WCAG', 'A', 'bedienbaar', 'genoeg tijd', 'operable', 'enough time', 'timing adjustable'] },
    u = void 0,
    p = { id: 'wcag/2.2.01', title: 'WCAG-succescriterium 2.2.1 Timing aanpasbaar', description: 'Tijdslimieten zijn aan te passen.', source: '@site/docs/wcag/2.2.01.mdx', sourceDirName: 'wcag', slug: '/wcag/2.2.1', permalink: '/wcag/2.2.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.2.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.2.1 Timing aanpasbaar', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.2.1 Timing aanpasbaar', pagination_label: 'WCAG-succescriterium 2.2.1 Timing aanpasbaar', description: 'Tijdslimieten zijn aan te passen.', slug: '2.2.1', keywords: ['WCAG', 'A', 'bedienbaar', 'genoeg tijd', 'operable', 'enough time', 'timing adjustable'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.1.4 Enkel teken sneltoetsen', permalink: '/wcag/2.1.4' }, next: { title: 'WCAG-succescriterium 2.2.2 Pauzeren, stoppen, verbergen', permalink: '/wcag/2.2.2' } },
    m = {},
    k = [
     { value: 'In het kort', id: 'in-het-kort', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Tips', id: 'tips', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Help richtlijn verbeteren', id: 'help-richtlijn-verbeteren', level: 2 },
    ];
   function b(e) {
    const n = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(a.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.2.1 Timing aanpasbaar' }), '\n', (0, t.jsx)(n.h2, { id: 'in-het-kort', children: 'In het kort' }), '\n', (0, t.jsxs)('dl', { children: [(0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Doel' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Bezoekers hebben de tijd om taken af te ronden.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Wat te doen' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Laat bezoekers tijdslimieten uitzetten of aanpassen.' })] }), (0, t.jsxs)('div', { class: 'dl__item', children: [(0, t.jsx)('dt', { class: 'dl__term', children: 'Waarom het belangrijk is' }), (0, t.jsx)('dd', { class: 'dl__definition', children: 'Mensen met beperkingen kunnen meer tijd nodig hebben om taken af te ronden.' })] })] }), '\n', (0, t.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, t.jsx)(j, {}), '\n', (0, t.jsx)(n.p, { children: 'Soms zijn er tijdslimieten op een pagina. Denk bijvoorbeeld aan websites die je na een bepaalde tijd uitloggen, mededelingen die tijdelijke zichtbaar zijn of een stroom van berichten.' }), '\n', (0, t.jsx)(n.p, { children: 'Als er een tijdslimiet is dan moet de bezoeker het volgende kunnen:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'de tijdslimiet uitzetten voordat de tijd verstrijkt;' }), '\n', (0, t.jsx)(n.li, { children: 'of de tijdslimiet minstens 10 keer langer kunnen maken;' }), '\n', (0, t.jsx)(n.li, { children: 'of de tijdslimiet minstens 10 keer kunnen uitstellen.' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Waarschuw de gebruiker tenminste 20 seconden voor het verstrijken van de tijdslimiet en zorg ervoor dat verlengen gemakkelijk is.' }), '\n', (0, t.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, t.jsx)(n.p, { children: 'Het testen van dit succescriterium kan erg veel tijd kosten. Ga in gesprek met de makers van de pagina en ga naar of er tijdslimieten zijn, en hoe ze werken.' }), '\n', (0, t.jsx)(n.h2, { id: 'tips', children: 'Tips' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Gebruik geen verdwijnende berichten zoals een zogenaamde toast, snackbar of alert. Deze berichten zijn enorm makkelijk te missen. Als de inhoud niet belangrijk is, kan deze alsnog stress veroorzaken bij die gebruiker die dit niet weet. Als er deelbare informatie is, plaatst deze dan op een relevante plek en laat deze niet verdwijnen.' }), '\n'] }), '\n', (0, t.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, t.jsx)(d.ZP, {}), '\n', (0, t.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#timing-adjustable', children: (0, t.jsx)('span', { lang: 'en', children: '2.2.1 Timing Adjustable' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#timing-aanpasbaar', children: '2.2.1 Timing aanpasbaar' }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, t.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#timing-adjustable', children: (0, t.jsx)('span', { lang: 'en', children: 'Quick Reference 2.2.1 Timing Adjustable' }) }), '.'] }), '\n', (0, t.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html', children: (0, t.jsx)('span', { lang: 'en', children: 'Understanding SC 2.2.1 Timing Adjustable' }) }), '.'] }), '\n'] }), '\n', (0, t.jsx)(l.CY, { children: (0, t.jsx)(r.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(c.ZP, {}) }) }), '\n', (0, t.jsx)(n.h2, { id: 'help-richtlijn-verbeteren', children: 'Help richtlijn verbeteren' }), '\n', (0, t.jsx)(r.U, { omitH1: !0, headinglevel: 3, children: (0, t.jsx)(o.ZP, {}) })] });
   }
   function x(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(b, { ...e }) }) : b(e);
   }
  },
  60256: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    s = i(40139);
   function r(e) {
    const n = { a: 'a', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, t.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  99042: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    s = i(40139);
   function r(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'belangrijk-de-richtlijnen-van-nl-design-system-zijn-geen-wettelijke-verplichting', children: 'Belangrijk: De richtlijnen van NL Design System zijn geen wettelijke verplichting' }), '\n', (0, t.jsxs)(n.p, { children: ['De richtlijnen van NL Design System zijn niet wettelijk verplicht en zijn geen vervanging voor de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG21/', children: 'wettelijk geldende WCAG 2.1 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Ons doel is om praktische uitleg en voorbeelden te geven die helpen bij het toegankelijk inzetten van de NL Design System componenten, patronen en richtlijnen. We doen dat op basis van een interpretatie van de ', (0, t.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/', children: 'nieuwe WCAG 2.2 specificatie' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['Weten waar je volgens de wet aan moet voldoen? Ga dan naar ', (0, t.jsx)(n.a, { href: 'https://www.digitoegankelijk.nl/wetgeving/wat-is-verplicht', children: 'wat is verplicht van DigiToegankelijk' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  91114: (e, n, i) => {
   i.d(n, { ZP: () => a });
   var t = i(52676),
    s = i(40139);
   function r(e) {
    const n = { a: 'a', h1: 'h1', p: 'p', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, t.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door NL Design System. Heb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function a(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(r, { ...e }) }) : r(e);
   }
  },
  41757: (e, n, i) => {
   i.d(n, { V: () => r });
   var t = i(4814),
    s = i(52676);
   const r = (e) => {
    let { children: n, className: i, level: r = 1, suffix: a, ...l } = e;
    return (0, s.jsxs)('hgroup', { className: (0, t.Z)('nlds-inline-heading-group', `utrecht-heading-${r}`, i), ...l, children: [(0, s.jsx)('h1', { className: 'nlds-inline-heading-group__heading', children: n }), a && (0, s.jsxs)('p', { className: 'nlds-inline-heading-group__suffix', children: [a ? ' ' : '', a] })] });
   };
  },
  57716: (e, n, i) => {
   i.d(n, { U: () => o });
   var t = i(40139),
    s = i(16167),
    r = i(52676);
   const a = (e, n) => {
     const i = new URL(n, new URL(e, 'resolve://pathname/'));
     if ('resolve:' === i.protocol) {
      const { pathname: i, search: t, hash: s } = new URL(n, new URL(e, 'http://example.com/'));
      return i + t + s;
     }
     return i.toString();
    },
    l = { 1: {}, 2: { h1: s.XJ, h2: s.aC, h3: s.k8, h4: s.by, h5: s.Cd }, 3: { h1: s.aC, h2: s.k8, h3: s.by, h4: s.Cd, h5: s.Cd }, 4: { h1: s.k8, h2: s.by, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 5: { h1: s.by, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd }, 6: { h1: s.Cd, h2: s.Cd, h3: s.Cd, h4: s.Cd, h5: s.Cd } },
    d = (e) => ({
     img: (n) => {
      let { src: i, ...t } = n;
      return (0, r.jsx)('img', { ...t, src: a(e, i), className: 'utrecht-img utrecht-img--fit' });
     },
    }),
    c = (e, n) => {
     if (e) {
      const e = { ...l[n - 1] };
      return (e.h1 = () => null), e;
     }
     return l[n];
    },
    o = (e) => {
     let { children: n, omitH1: i = !1, headingLevel: s = 1, baseUrl: a = '', components: l = {} } = e;
     return (0, r.jsx)(t.Z, { components: { ...c(i, s), ...d(a), ...l }, children: n });
    };
  },
  46364: (e, n, i) => {
   i.d(n, { j: () => a });
   var t = i(16167),
    s = i(41757),
    r = i(52676);
   const a = (e) => {
    let { children: n, conformanceLevel: i, ...a } = e;
    return (0, r.jsx)(s.V, { className: 'nlds-inline-heading-group--wcag-heading-group', suffix: i && (0, r.jsx)(t.Ou, { className: 'nlds-inline-heading-group__badge', children: i }), ...a, children: n });
   };
  },
  40139: (e, n, i) => {
   i.d(n, { Z: () => l, a: () => a });
   var t = i(75271);
   const s = {},
    r = t.createContext(s);
   function a(e) {
    const n = t.useContext(r);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function l(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : a(e.components)), t.createElement(r.Provider, { value: n }, e.children);
   }
  },
 },
]);
