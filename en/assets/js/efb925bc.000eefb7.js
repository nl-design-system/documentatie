'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [87870],
 {
  55400: (e, n, i) => {
   i.d(n, { ZP: () => o });
   var r = i(52676),
    t = i(24785);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, r.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, r.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, r.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, r.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
   }
  },
  59373: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => c, default: () => f, frontMatter: () => d, metadata: () => a, toc: () => m });
   var r = i(52676),
    t = i(24785),
    l = i(2334),
    o = i(21004),
    s = i(55400);
   const d = { title: 'Foutmeldingen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie foutmeldingen', sidebar_position: 5, pagination_label: 'Foutmeldingen', description: 'Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?', slug: '/richtlijnen/formulieren/foutmeldingen/', keywords: ['informatie', 'formulier', 'design', 'code'] },
    c = 'Richtlijnen NL Design System voor foutmeldingen in een formulier',
    a = { id: 'richtlijnen/formulieren/error/README', title: 'Foutmeldingen in een formulier | Richtlijnen', description: 'Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?', source: '@site/docs/richtlijnen/formulieren/error/README.mdx', sourceDirName: 'richtlijnen/formulieren/error', slug: '/richtlijnen/formulieren/foutmeldingen/', permalink: '/en/richtlijnen/formulieren/foutmeldingen/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/error/README.mdx', tags: [], version: 'current', sidebarPosition: 5, frontMatter: { title: 'Foutmeldingen in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Introductie foutmeldingen', sidebar_position: 5, pagination_label: 'Foutmeldingen', description: 'Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als die onjuiste of onvolledige informatie invult?', slug: '/richtlijnen/formulieren/foutmeldingen/', keywords: ['informatie', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Lengte description', permalink: '/en/richtlijnen/formulieren/descriptions/lengte' }, next: { title: 'Foutmeldingen', permalink: '/en/richtlijnen/formulieren/foutmeldingen/' } },
    u = {},
    m = [
     { value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 },
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
    ];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, t.a)(), ...e.components };
    return (0, r.jsxs)(r.Fragment, { children: ['\n', '\n', '\n', (0, r.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-foutmeldingen-in-een-formulier', children: 'Richtlijnen NL Design System voor foutmeldingen in een formulier' }), '\n', (0, r.jsx)(n.p, { children: 'Gebruik duidelijke en goed getimede foutmeldingen en logische validatieregels. Als een veld niet goed is ingevuld, moet voor iedereen duidelijk zijn wat er niet klopt. Hoe help je de gebruiker het beste als deze onjuiste of onvolledige informatie invult?' }), '\n', (0, r.jsxs)(n.p, { children: ['Lees ook onze blogpost ', (0, r.jsx)(n.a, { href: '/blog/toegankelijke-foutmeldingen-formulieren', children: 'Toegankelijke foutmeldingen in formulieren' }), ', die stap voor stap ingaat op het voorkomen, aanduiden en het geven van hulp bij foutmeldingen in een formulier voor verschillende soorten gebruikers.'] }), '\n', (0, r.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, r.jsx)(o.l, { excludeDocIDs: ['richtlijnen/formulieren/error/README'] }), '\n', (0, r.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, r.jsx)(l._, { id: 'controleer-op-het-juiste-moment-op-fouten', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/controleren', children: 'Controleer op het juiste moment op fouten' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'schrijf-een-foutmelding-uit-in-tekst', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/beschrijven', children: 'Schrijf een foutmelding uit in tekst' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'schrijf-een-duidelijke-foutmelding', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/duidelijk', children: 'Schrijf een duidelijke foutmelding' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'zet-de-foutmeldingen-bij-de-betreffende-formuliervelden', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/plaatsing', children: 'Zet de foutmeldingen bij de betreffende formuliervelden' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'gebruik-geen-html-formuliervalidatie', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/html-formuliervalidatie', children: 'Gebruik geen HTML-formuliervalidatie' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'zet-een-samenvatting-van-de-foutmeldingen-boven-het-formulier', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/samenvatting', children: 'Zet een samenvatting van de foutmeldingen boven het formulier' }), '.'] }) }), '\n', (0, r.jsx)(l._, { id: 'geef-feedback-aan-screenreadergebruikers', children: (0, r.jsxs)(n.p, { children: [(0, r.jsx)(n.a, { href: '/richtlijnen/formulieren/foutmeldingen/screenreaderfeedback', children: 'Geef feedback aan screenreadergebruikers' }), '.'] }) }), '\n', (0, r.jsx)(n.p, { children: 'Twee uitgebreide bronnen die de aspecten van foutmeldingen goed beschrijven:' }), '\n', (0, r.jsxs)(n.ul, { children: ['\n', (0, r.jsxs)(n.li, { children: ['Nielsen Norman Group: ', (0, r.jsx)(n.a, { href: 'https://www.nngroup.com/articles/error-message-guidelines/', children: (0, r.jsx)('span', { lang: 'en', children: 'Error-Message Guidelines' }) }), '.'] }), '\n', (0, r.jsxs)(n.li, { children: ['GOV.UK: ', (0, r.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/error-message/', children: (0, r.jsx)('span', { lang: 'en', children: 'Error Message' }) }), '.'] }), '\n'] }), '\n', (0, r.jsx)(s.ZP, {})] });
   }
   function f(e = {}) {
    const { wrapper: n } = { ...(0, t.a)(), ...e.components };
    return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e);
   }
  },
  2334: (e, n, i) => {
   i.d(n, { _: () => l });
   var r = i(4814),
    t = (i(75271), i(52676));
   const l = (e) => {
    let { children: n, className: i, ...l } = e;
    return (0, t.jsx)('div', { ...l, className: (0, r.Z)('nlds-fragment-redirect', i), children: n });
   };
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => d });
   var r = i(34221),
    t = i(4814),
    l = (i(75271), i(20537)),
    o = i(52676);
   const s = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: s(i.items, n) }] : e), []),
    d = (e) => {
     let { excludeDocIDs: n = [], className: i, ...d } = e;
     const c = (0, r.jA)();
     return (0, o.jsx)('div', { ...d, className: (0, t.Z)('margin-top--lg', i), children: (0, o.jsx)(l.Z, { items: s(c.items, n) }) });
    };
  },
  20537: (e, n, i) => {
   i.d(n, { Z: () => f });
   var r = i(34221),
    t = i(90441),
    l = i(56150),
    o = i(4814);
   i(75271);
   const s = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var d = i(52676);
   function c(e) {
    let { href: n, icon: i = '', title: r, description: l, children: c } = e;
    return (0, d.jsxs)('div', { className: (0, o.Z)('card', s.card), children: [n ? (0, d.jsx)(t.Z, { href: n, className: (0, o.Z)(s.cardLink, 'utrecht-link'), children: (0, d.jsxs)('h2', { className: (0, o.Z)(s.cardTitle), children: [i, ' ', r] }) }) : (0, d.jsxs)('h2', { className: (0, o.Z)(s.cardTitle), children: [i, ' ', r] }), l && (0, d.jsx)('p', { className: (0, o.Z)(s.cardDescription), children: l }), c] });
   }
   function a(e) {
    let { item: n } = e;
    return (0, d.jsx)(c, { title: n.label, description: n.description, children: (0, d.jsx)(l.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, d.jsx)(l.AS, { children: 'link' === e.type ? (0, d.jsx)(t.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, d.jsxs)(t.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, d.jsx)(d.Fragment, {}) }, n)) }) });
   }
   function u(e) {
    let { item: n } = e;
    const i = (0, r.xz)(n.docId);
    return (0, d.jsx)(c, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function m(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, d.jsx)(u, { item: n });
     case 'category':
      return (0, d.jsx)(a, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function h(e) {
    let { className: n } = e;
    const i = (0, r.jA)();
    return (0, d.jsx)(f, { items: i.items, className: n });
   }
   function f(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, d.jsx)(h, { ...e });
    const t = (0, r.MN)(n);
    return (0, d.jsx)('section', { className: (0, o.Z)('row', i), children: t.map((e, n) => (0, d.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, d.jsx)(m, { item: e }) }, n)) });
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => o });
   var r = i(75271);
   const t = {},
    l = r.createContext(t);
   function o(e) {
    const n = r.useContext(l);
    return r.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(t) : e.components || t) : o(e.components)), r.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
