'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4962],
 {
  49824: (e, n, r) => {
   r.d(n, { ZP: () => o });
   var i = r(52676),
    l = r(87118);
   function t(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, i.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, i.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, i.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen?\n', (0, i.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Open een issue op GitHub' }), ' en deel je mening.'] })] });
   }
   function o(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e);
   }
  },
  2797: (e, n, r) => {
   r.r(n), r.d(n, { assets: () => h, contentTitle: () => a, default: () => p, frontMatter: () => c, metadata: () => d, toc: () => m });
   var i = r(52676),
    l = r(87118),
    t = r(49824),
    o = r(2334),
    s = r(21004);
   const c = { title: 'Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie placeholders', sidebar_position: 9, pagination_label: 'Placeholders in een formulier', description: 'Richtlijnen voor het ontwerp en de code van placeholders in een formulier.', slug: '/richtlijnen/formulieren/placeholders/', keywords: ['placeholders', 'formulier', 'design', 'code'] },
    a = 'Richtlijnen NL Design System voor placeholders in een formulier',
    d = { id: 'richtlijnen/formulieren/placeholder/README', title: 'Placeholders in een formulier \xb7 Richtlijnen', description: 'Richtlijnen voor het ontwerp en de code van placeholders in een formulier.', source: '@site/docs/richtlijnen/formulieren/placeholder/README.mdx', sourceDirName: 'richtlijnen/formulieren/placeholder', slug: '/richtlijnen/formulieren/placeholders/', permalink: '/richtlijnen/formulieren/placeholders/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/placeholder/README.mdx', tags: [], version: 'current', sidebarPosition: 9, frontMatter: { title: 'Placeholders in een formulier \xb7 Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie placeholders', sidebar_position: 9, pagination_label: 'Placeholders in een formulier', description: 'Richtlijnen voor het ontwerp en de code van placeholders in een formulier.', slug: '/richtlijnen/formulieren/placeholders/', keywords: ['placeholders', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Duidelijk aangeven verzenden', permalink: '/richtlijnen/formulieren/meerdere-stappen/verzenden-aangeven' }, next: { title: 'Placeholders in een formulier', permalink: '/richtlijnen/formulieren/placeholders/' } },
    h = {},
    m = [
     { value: 'Overzicht richtlijnen', id: 'overzicht-richtlijnen', level: 2 },
     { value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 },
    ];
   function u(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', strong: 'strong', ...(0, l.a)(), ...e.components };
    return (0, i.jsxs)(i.Fragment, { children: ['\n', '\n', '\n', (0, i.jsx)(n.h1, { id: 'richtlijnen-nl-design-system-voor-placeholders-in-een-formulier', children: 'Richtlijnen NL Design System voor placeholders in een formulier' }), '\n', (0, i.jsx)(n.p, { children: 'Een placeholder geeft de gebruiker een korte hint over het verwachte type gegevens dat in het formulierveld moet worden.' }), '\n', (0, i.jsxs)(n.p, { children: ['Een ', (0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/labels/', children: 'label' }), ' vertelt ', (0, i.jsx)(n.strong, { children: 'wat' }), ' je moet invullen en een ', (0, i.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder', children: 'placeholder' }), ' vertelt wat voor ', (0, i.jsx)(n.strong, { children: 'soort gegevens' }), ' in een veld wordt verwacht. Voor een e-mailveld kan het label bijvoorbeeld "Jouw e-mailadres" zijn en de placeholder "', (0, i.jsx)(n.a, { href: 'mailto:naam@voorbeeld.com', children: 'naam@voorbeeld.com' }), '".'] }), '\n', (0, i.jsx)(n.h2, { id: 'overzicht-richtlijnen', children: 'Overzicht richtlijnen' }), '\n', (0, i.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/placeholder/README'] }), '\n', (0, i.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, i.jsx)(o._, { id: 'een-placeholder-is-geen-vervanger-van-een-label', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/niet-als-label', children: 'Een placeholder is geen vervanger van een label' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'placeholders-en-de-zoekfunctie', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/zoekfunctie', children: 'Placeholders en de zoekfunctie' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'voorkom-verwarring-bij-de-gebruiker', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/verwarring-voorkomen', children: 'Voorkom verwarring bij de gebruiker' }), '.'] }) }), '\n', (0, i.jsx)(o._, { id: 'zorg-voor-een-goed-kleurcontrast-van-de-placeholdertekst', children: (0, i.jsxs)(n.p, { children: [(0, i.jsx)(n.a, { href: '/richtlijnen/formulieren/placeholders/kleurcontrast', children: 'Zorg voor een voldoende kleurcontract voor de placeholdertekst' }), '.'] }) }), '\n', (0, i.jsx)(t.ZP, {})] });
   }
   function p(e = {}) {
    const { wrapper: n } = { ...(0, l.a)(), ...e.components };
    return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(u, { ...e }) }) : u(e);
   }
  },
  2334: (e, n, r) => {
   r.d(n, { _: () => t });
   var i = r(4814),
    l = r(52676);
   const t = (e) => {
    let { children: n, className: r, ...t } = e;
    return (0, l.jsx)('div', { ...t, className: (0, i.Z)('nlds-fragment-redirect', r), children: n });
   };
  },
  21004: (e, n, r) => {
   r.d(n, { l: () => c });
   var i = r(13894),
    l = r(4814),
    t = r(39772),
    o = r(52676);
   const s = (e, n) => e.reduce((e, r) => ('link' === r.type ? (n.includes(r.docId) ? e : [...e, r]) : 'category' === r.type ? [...e, { ...r, items: s(r.items, n) }] : e), []),
    c = (e) => {
     let { excludeDocIDs: n = [], className: r, ...c } = e;
     const a = (0, i.jA)();
     return (0, o.jsx)('div', { ...c, className: (0, l.Z)('margin-top--lg', r), children: (0, o.jsx)(t.Z, { items: s(a.items, n) }) });
    };
  },
  39772: (e, n, r) => {
   r.d(n, { Z: () => u });
   var i = r(13894),
    l = r(95071),
    t = r(95674),
    o = r(4814),
    s = r(52676);
   function c(e) {
    let { href: n, icon: r = '', title: i, description: t, children: c } = e;
    return (0, s.jsxs)('div', { className: 'card', children: [n ? (0, s.jsx)(l.Z, { href: n, className: (0, o.Z)('cardLink', 'utrecht-link'), children: (0, s.jsxs)('h2', { className: 'cardTitle', children: [r, ' ', i] }) }) : (0, s.jsxs)('h2', { className: 'cardTitle', children: [r, ' ', i] }), t && (0, s.jsx)('p', { className: 'cardDescription', children: t }), c] });
   }
   function a(e) {
    let { item: n } = e;
    return (0, s.jsx)(c, { title: n.label, description: n.description, children: (0, s.jsx)(t.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, s.jsx)(t.AS, { children: 'link' === e.type ? (0, s.jsx)(l.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, s.jsxs)(l.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, s.jsx)(s.Fragment, {}) }, n)) }) });
   }
   function d(e) {
    let { item: n } = e;
    const r = (0, i.xz)(n.docId);
    return (0, s.jsx)(c, { href: n.href, title: n.label, description: n.description ?? r?.description });
   }
   function h(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, s.jsx)(d, { item: n });
     case 'category':
      return (0, s.jsx)(a, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function m(e) {
    let { className: n } = e;
    const r = (0, i.jA)();
    return (0, s.jsx)(u, { items: r.items, className: n });
   }
   function u(e) {
    const { items: n, className: r } = e;
    if (!n) return (0, s.jsx)(m, { ...e });
    const l = (0, i.MN)(n);
    return (0, s.jsx)('section', { className: (0, o.Z)('row', r), children: l.map((e, n) => (0, s.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, s.jsx)(h, { item: e }) }, n)) });
   }
  },
  87118: (e, n, r) => {
   r.d(n, { Z: () => s, a: () => o });
   var i = r(75271);
   const l = {},
    t = i.createContext(l);
   function o(e) {
    const n = i.useContext(t);
    return i.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(l) : e.components || l) : o(e.components)), i.createElement(t.Provider, { value: n }, e.children);
   }
  },
 },
]);
